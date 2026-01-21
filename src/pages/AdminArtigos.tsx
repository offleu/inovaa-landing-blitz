import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "@/components/RichTextEditor";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { LogOut, FileText, Eye, Send, Image, Upload, X, Loader2, BarChart3, Calendar, Clock, List, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import inovaaLogo from "@/assets/inovaa-logo.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

interface Article {
  id: string;
  title: string;
  slug: string;
  status: string | null;
  published_at: string | null;
  created_at: string;
  category: string | null;
  author: string | null;
}

const AdminArtigos = () => {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [author, setAuthor] = useState("Equipe Inovaa");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Scheduling state
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");

  // Articles list state
  const [articles, setArticles] = useState<Article[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session) {
          navigate("/admin");
        } else {
          setUser(session.user);
          setTimeout(() => {
            verifyAdmin(session.user.id);
          }, 0);
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/admin");
      } else {
        setUser(session.user);
        verifyAdmin(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const verifyAdmin = async (userId: string) => {
    const { data, error } = await supabase.rpc('has_role', {
      _user_id: userId,
      _role: 'admin'
    });

    if (!data) {
      await supabase.auth.signOut();
      toast({
        title: "Acesso negado",
        description: "Você não tem permissão de administrador.",
        variant: "destructive",
      });
      navigate("/admin");
    } else {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    setSlug(generateSlug(value));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Formato inválido",
          description: "Use imagens JPG, PNG, WebP ou GIF.",
          variant: "destructive",
        });
        return;
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Arquivo muito grande",
          description: "O tamanho máximo é 5MB.",
          variant: "destructive",
        });
        return;
      }

      setImageFile(file);
      setFeaturedImage(""); // Clear URL input when file is selected
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setFeaturedImage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const uploadImage = async (): Promise<string | null> => {
    if (!imageFile) return featuredImage || null;

    setUploadingImage(true);
    try {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${slug || Date.now()}-${Date.now()}.${fileExt}`;
      const filePath = `covers/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('article-images')
        .upload(filePath, imageFile, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('article-images')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error: any) {
      toast({
        title: "Erro no upload",
        description: error.message || "Não foi possível fazer upload da imagem.",
        variant: "destructive",
      });
      return null;
    } finally {
      setUploadingImage(false);
    }
  };

  const fetchArticles = async () => {
    setLoadingArticles(true);
    try {
      const { data, error } = await supabase
        .from("articles")
        .select("id, title, slug, status, published_at, created_at, category, author")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (err: any) {
      console.error("Error fetching articles:", err);
    } finally {
      setLoadingArticles(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      fetchArticles();
    }
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Upload image first if file is selected
      const imageUrl = await uploadImage();

      const tagsArray = tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      // Calculate publish date
      let publishDate: string | null = null;
      let status = "Publicado";

      if (isScheduled && scheduledDate && scheduledTime) {
        const scheduledDateTime = new Date(`${scheduledDate}T${scheduledTime}`);
        publishDate = scheduledDateTime.toISOString();
        status = scheduledDateTime > new Date() ? "Agendado" : "Publicado";
      } else {
        publishDate = new Date().toISOString();
      }

      const { error } = await supabase.from("articles").insert({
        title,
        slug,
        excerpt,
        content: content,
        featured_image: imageUrl,
        category: category || null,
        tags: tagsArray.length > 0 ? tagsArray : null,
        meta_description: metaDescription || excerpt.substring(0, 160),
        author,
        status,
        published_at: publishDate,
      });

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Erro",
            description: "Já existe um artigo com este slug. Altere o título.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        return;
      }

      toast({
        title: isScheduled ? "Artigo agendado!" : "Artigo publicado!",
        description: isScheduled 
          ? `Seu artigo será publicado em ${format(new Date(`${scheduledDate}T${scheduledTime}`), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}.`
          : "Seu artigo foi publicado com sucesso no blog.",
      });

      // Reset form
      setTitle("");
      setSlug("");
      setExcerpt("");
      setContent("");
      setFeaturedImage("");
      setCategory("");
      setTags("");
      setMetaDescription("");
      setImageFile(null);
      setImagePreview(null);
      setIsScheduled(false);
      setScheduledDate("");
      setScheduledTime("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // Refresh articles list
      fetchArticles();
    } catch (err: any) {
      toast({
        title: "Erro ao publicar",
        description: err.message || "Ocorreu um erro ao publicar o artigo.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const deleteArticle = async (id: string) => {
    try {
      const { error } = await supabase.from("articles").delete().eq("id", id);
      if (error) throw error;
      
      toast({
        title: "Artigo excluído",
        description: "O artigo foi removido com sucesso.",
      });
      fetchArticles();
    } catch (err: any) {
      toast({
        title: "Erro ao excluir",
        description: err.message || "Não foi possível excluir o artigo.",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: string | null, publishedAt: string | null) => {
    if (status === "Agendado" && publishedAt) {
      const scheduledDate = new Date(publishedAt);
      if (scheduledDate > new Date()) {
        return <Badge variant="secondary" className="bg-accent/50 text-accent-foreground">Agendado</Badge>;
      }
    }
    if (status === "Publicado") {
      return <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">Publicado</Badge>;
    }
    return <Badge variant="outline" className="bg-muted text-muted-foreground">{status || "Rascunho"}</Badge>;
  };


  const previewSlug = slug || "preview";

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={inovaaLogo} alt="Inovaa" className="h-8" />
            </Link>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm font-medium text-foreground">Gerenciador de Artigos</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user?.email}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/admin/dashboard")}
              className="gap-2"
            >
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Gerenciador de Artigos
          </h1>
          <p className="text-muted-foreground">
            Crie, agende e gerencie os artigos do blog.
          </p>
        </div>

        <Tabs defaultValue="create" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="create" className="gap-2">
              <FileText className="h-4 w-4" />
              Criar Artigo
            </TabsTrigger>
            <TabsTrigger value="list" className="gap-2">
              <List className="h-4 w-4" />
              Artigos Publicados
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-6">

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações Básicas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Informações do Artigo
              </CardTitle>
              <CardDescription>
                Dados principais do artigo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  placeholder="Ex: Como aumentar vendas no e-commerce"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input
                  id="slug"
                  placeholder="como-aumentar-vendas-no-ecommerce"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground">
                  URL: /blog/{slug || "..."}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Autor</Label>
                <Input
                  id="author"
                  placeholder="Equipe Inovaa"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Input
                    id="category"
                    placeholder="E-commerce"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                  <Input
                    id="tags"
                    placeholder="vendas, marketing, estratégia"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Imagem */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="h-5 w-5" />
                Imagem de Capa
              </CardTitle>
              <CardDescription>
                Faça upload de uma imagem JPG, PNG, WebP ou GIF (máx. 5MB)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Upload de arquivo */}
              <div className="space-y-2">
                <Label>Upload de Imagem</Label>
                <div className="flex items-center gap-4">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    onChange={handleFileChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="gap-2"
                    disabled={uploadingImage}
                  >
                    <Upload className="h-4 w-4" />
                    Selecionar Imagem
                  </Button>
                  {imageFile && (
                    <span className="text-sm text-muted-foreground truncate max-w-[200px]">
                      {imageFile.name}
                    </span>
                  )}
                </div>
              </div>

              {/* Ou URL */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">ou cole uma URL</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="featuredImage">URL da Imagem</Label>
                <Input
                  id="featuredImage"
                  type="url"
                  placeholder="https://exemplo.com/imagem.jpg"
                  value={featuredImage}
                  onChange={(e) => {
                    setFeaturedImage(e.target.value);
                    if (e.target.value) {
                      setImageFile(null);
                      setImagePreview(null);
                      if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                      }
                    }
                  }}
                  disabled={!!imageFile}
                />
              </div>

              {/* Preview */}
              {(imagePreview || featuredImage) && (
                <div className="relative inline-block mt-4">
                  <img
                    src={imagePreview || featuredImage}
                    alt="Preview"
                    className="max-h-48 rounded-lg object-cover border border-border"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2 h-6 w-6"
                    onClick={removeImage}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Conteúdo */}
          <Card>
            <CardHeader>
              <CardTitle>Conteúdo</CardTitle>
              <CardDescription>
                Use a barra de ferramentas para formatar o texto como no Word
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="excerpt">Resumo/Excerpt *</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Uma breve descrição do artigo que aparecerá na listagem..."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Conteúdo do Artigo *</Label>
                <RichTextEditor
                  content={content}
                  onChange={setContent}
                  placeholder="Comece a escrever seu artigo aqui..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Scheduling */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Agendamento
              </CardTitle>
              <CardDescription>
                Agende a publicação para uma data e hora futuras
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Switch
                  id="schedule"
                  checked={isScheduled}
                  onCheckedChange={setIsScheduled}
                />
                <Label htmlFor="schedule">Agendar publicação</Label>
              </div>

              {isScheduled && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="scheduledDate" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Data
                    </Label>
                    <Input
                      id="scheduledDate"
                      type="date"
                      value={scheduledDate}
                      onChange={(e) => setScheduledDate(e.target.value)}
                      min={format(new Date(), "yyyy-MM-dd")}
                      required={isScheduled}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="scheduledTime" className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Horário
                    </Label>
                    <Input
                      id="scheduledTime"
                      type="time"
                      value={scheduledTime}
                      onChange={(e) => setScheduledTime(e.target.value)}
                      required={isScheduled}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* SEO */}
          <Card>
            <CardHeader>
              <CardTitle>SEO</CardTitle>
              <CardDescription>
                Otimização para mecanismos de busca
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  placeholder="Descrição para aparecer nos resultados de busca (máx. 160 caracteres)"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  maxLength={160}
                  rows={2}
                />
                <p className="text-xs text-muted-foreground">
                  {metaDescription.length}/160 caracteres
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            {slug && (
              <Link
                to={`/blog/${previewSlug}`}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
              >
                <Eye className="h-4 w-4" />
                Visualizar Blog
              </Link>
            )}
            <Button
              type="submit"
              disabled={submitting || uploadingImage || !title || !excerpt || !content || (isScheduled && (!scheduledDate || !scheduledTime))}
              className="gap-2"
            >
              {(submitting || uploadingImage) ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : isScheduled ? (
                <Calendar className="h-4 w-4" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {uploadingImage ? "Enviando imagem..." : submitting ? (isScheduled ? "Agendando..." : "Publicando...") : (isScheduled ? "Agendar Artigo" : "Publicar Artigo")}
            </Button>
          </div>
        </form>
          </TabsContent>

          <TabsContent value="list">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <List className="h-5 w-5" />
                  Artigos
                </CardTitle>
                <CardDescription>
                  Todos os artigos criados, incluindo agendados e publicados
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loadingArticles ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                  </div>
                ) : articles.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    Nenhum artigo encontrado. Crie seu primeiro artigo na aba "Criar Artigo".
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Título</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Data de Publicação</TableHead>
                          <TableHead>Categoria</TableHead>
                          <TableHead>Autor</TableHead>
                          <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {articles.map((article) => (
                          <TableRow key={article.id}>
                            <TableCell className="font-medium max-w-[200px] truncate">
                              {article.title}
                            </TableCell>
                            <TableCell>
                              {getStatusBadge(article.status, article.published_at)}
                            </TableCell>
                            <TableCell>
                              {article.published_at ? (
                                <div className="flex flex-col">
                                  <span className="text-sm">
                                    {format(new Date(article.published_at), "dd/MM/yyyy", { locale: ptBR })}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    {format(new Date(article.published_at), "HH:mm", { locale: ptBR })}
                                  </span>
                                </div>
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </TableCell>
                            <TableCell>
                              {article.category || <span className="text-muted-foreground">-</span>}
                            </TableCell>
                            <TableCell>
                              {article.author || <span className="text-muted-foreground">-</span>}
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end gap-2">
                                <Link to={`/blog/${article.slug}`} target="_blank">
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </Link>
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent>
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>Excluir artigo</AlertDialogTitle>
                                      <AlertDialogDescription>
                                        Tem certeza que deseja excluir "{article.title}"? Esta ação não pode ser desfeita.
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                      <AlertDialogAction
                                        onClick={() => deleteArticle(article.id)}
                                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                      >
                                        Excluir
                                      </AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminArtigos;
