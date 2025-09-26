import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { InovaaButton } from "./ui/inovaa-button";
import { Link } from "react-router-dom";

// Artigos em destaque para a home
const featuredPosts = [
  {
    id: 1,
    title: "Como Criar uma Loja Virtual de Sucesso em 2024",
    excerpt: "Descubra as principais estratégias para montar e gerenciar uma loja online lucrativa.",
    category: "E-commerce",
    author: "Equipe Inovaa",
    date: "2024-01-15",
    readTime: "5 min",
    image: "/src/assets/carrinho-insights-2025.jpg",
    slug: "/blog/como-criar-ecommerce-sucesso-2025"
  },
  {
    id: 2,
    title: "5 Tendências de Design para E-commerce que Vão Dominar 2024",
    excerpt: "Conheça as principais tendências de design que estão revolucionando as lojas virtuais.",
    category: "Design",
    author: "Equipe Inovaa",
    date: "2024-01-10",
    readTime: "7 min",
    image: "/src/assets/carrinho-insights-2025.jpg"
  },
  {
    id: 3,
    title: "SEO para E-commerce: Como Aumentar suas Vendas Organicamente",
    excerpt: "Aprenda técnicas avançadas de SEO específicas para lojas virtuais.",
    category: "Marketing",
    author: "Equipe Inovaa",
    date: "2024-01-05",
    readTime: "10 min",
    image: "/src/assets/carrinho-insights-2025.jpg"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Notícias e{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Artigos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das últimas tendências em e-commerce, design e marketing digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
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
                  {post.slug ? (
                    <Link to={post.slug}>
                      Ler Artigo
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
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

        <div className="text-center">
          <InovaaButton size="lg" asChild>
            <Link to="/blog">
              Acessar Blog Completo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </InovaaButton>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;