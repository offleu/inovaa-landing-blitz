import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { InovaaButton } from "../components/ui/inovaa-button";

// Mock data para artigos do blog
const blogPosts = [
  {
    id: 1,
    title: "Como Criar uma Loja Virtual de Sucesso em 2024",
    excerpt: "Descubra as principais estratégias para montar e gerenciar uma loja online lucrativa, desde a escolha da plataforma até o marketing digital.",
    content: "O e-commerce brasileiro continua em crescimento exponencial...",
    category: "E-commerce",
    author: "Equipe Inovaa",
    date: "2024-01-15",
    readTime: "5 min",
    image: "/src/assets/carrinho-insights-2025.jpg"
  },
  {
    id: 2,
    title: "5 Tendências de Design para E-commerce que Vão Dominar 2024",
    excerpt: "Conheça as principais tendências de design que estão revolucionando as lojas virtuais e como aplicá-las no seu negócio.",
    content: "O design de e-commerce está em constante evolução...",
    category: "Design",
    author: "Equipe Inovaa",
    date: "2024-01-10",
    readTime: "7 min",
    image: "/src/assets/carrinho-insights-2025.jpg"
  },
  {
    id: 3,
    title: "SEO para E-commerce: Como Aumentar suas Vendas Organicamente",
    excerpt: "Aprenda técnicas avançadas de SEO específicas para lojas virtuais e veja como rankear melhor no Google.",
    content: "O SEO é fundamental para qualquer loja virtual...",
    category: "Marketing",
    author: "Equipe Inovaa",
    date: "2024-01-05",
    readTime: "10 min",
    image: "/src/assets/carrinho-insights-2025.jpg"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
      <Header />
      
      {/* Hero Section do Blog */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Blog Inovaa
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Dicas, estratégias e insights sobre e-commerce, design e marketing digital para fazer seu negócio crescer.
            </p>
          </div>
        </div>
      </section>

      {/* Artigos do Blog */}
      <main className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-gradient-secondary text-white">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-purple-brand transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-base line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                  
                  <InovaaButton 
                    variant="outline" 
                    size="sm"
                    className="w-full group/btn"
                    asChild
                  >
                    {post.id === 1 ? (
                      <a href="/blog/como-criar-ecommerce-sucesso-2025">
                        Ler Artigo
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    ) : (
                      <span>
                        Ler Artigo
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    )}
                  </InovaaButton>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto para criar sua loja virtual?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Transforme seu negócio com uma loja online profissional em até 20 dias.
              </p>
              <InovaaButton 
                variant="secondary" 
                size="lg"
                asChild
              >
                <a href="/formulario-contato">
                  Quero minha Loja Online
                </a>
              </InovaaButton>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;