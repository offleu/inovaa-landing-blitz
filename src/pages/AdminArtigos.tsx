import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, LogOut, FileText, Eye, Send, Image } from "lucide-react";
import { Link } from "react-router-dom";
import inovaaLogo from "@/assets/inovaa-logo.png";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const tagsArray = tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      const { error } = await supabase.from("articles").insert({
        title,
        slug,
        excerpt,
        content: formatContent(content),
        featured_image: featuredImage || null,
        category: category || null,
        tags: tagsArray.length > 0 ? tagsArray : null,
        meta_description: metaDescription || excerpt.substring(0, 160),
        author,
        status: "Publicado",
        published_at: new Date().toISOString(),
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
        title: "Artigo publicado!",
        description: "Seu artigo foi publicado com sucesso no blog.",
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

  // Formata o conteúdo para HTML com estrutura padrão do blog
  const formatContent = (rawContent: string) => {
    const paragraphs = rawContent.split("\n\n").filter((p) => p.trim());
    
    return paragraphs
      .map((p) => {
        const trimmed = p.trim();
        
        // Headers
        if (trimmed.startsWith("### ")) {
          return `<h3>${trimmed.substring(4)}</h3>`;
        }
        if (trimmed.startsWith("## ")) {
          return `<h2>${trimmed.substring(3)}</h2>`;
        }
        if (trimmed.startsWith("# ")) {
          return `<h1>${trimmed.substring(2)}</h1>`;
        }
        
        // Lists
        if (trimmed.includes("\n- ") || trimmed.startsWith("- ")) {
          const items = trimmed
            .split("\n")
            .filter((line) => line.startsWith("- "))
            .map((line) => `<li>${line.substring(2)}</li>`)
            .join("");
          return `<ul>${items}</ul>`;
        }
        
        // Bold text
        let formatted = trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        
        // Italic text
        formatted = formatted.replace(/\*(.*?)\*/g, "<em>$1</em>");
        
        // Links
        formatted = formatted.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
        );
        
        return `<p>${formatted}</p>`;
      })
      .join("\n");
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
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Criar Novo Artigo
          </h1>
          <p className="text-muted-foreground">
            Preencha as informações abaixo para publicar um novo artigo no blog.
          </p>
        </div>

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
                URL da imagem principal do artigo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="featuredImage">URL da Imagem</Label>
                <Input
                  id="featuredImage"
                  type="url"
                  placeholder="https://exemplo.com/imagem.jpg"
                  value={featuredImage}
                  onChange={(e) => setFeaturedImage(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Use uma URL de imagem pública (ex: Unsplash, Imgur)
                </p>
              </div>
              {featuredImage && (
                <div className="mt-4">
                  <img
                    src={featuredImage}
                    alt="Preview"
                    className="max-h-48 rounded-lg object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Conteúdo */}
          <Card>
            <CardHeader>
              <CardTitle>Conteúdo</CardTitle>
              <CardDescription>
                Escreva o conteúdo do artigo usando formatação simples
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
                <Label htmlFor="content">Conteúdo do Artigo *</Label>
                <div className="bg-muted/50 rounded-lg p-3 mb-2 text-xs text-muted-foreground space-y-1">
                  <p><strong>Formatação:</strong></p>
                  <p>## Título grande (H2) | ### Subtítulo (H3)</p>
                  <p>**texto em negrito** | *texto em itálico*</p>
                  <p>- item de lista | [texto](url) para links</p>
                  <p>Parágrafos separados por linha em branco</p>
                </div>
                <Textarea
                  id="content"
                  placeholder={`## Introdução

Escreva aqui o conteúdo do seu artigo...

## Primeira Seção

Desenvolva suas ideias aqui. Use **negrito** para destacar palavras importantes.

- Ponto importante 1
- Ponto importante 2
- Ponto importante 3

## Conclusão

Finalize seu artigo com uma chamada para ação.`}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={20}
                  className="font-mono text-sm"
                  required
                />
              </div>
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
              disabled={submitting || !title || !excerpt || !content}
              className="gap-2"
            >
              <Send className="h-4 w-4" />
              {submitting ? "Publicando..." : "Publicar Artigo"}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AdminArtigos;
