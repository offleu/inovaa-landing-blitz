import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Index from "./pages/Index";
import FormularioContato from "./pages/FormularioContato";
import Obrigado from "./pages/Obrigado";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

import CriacaoSiteEcommerce from "./pages/CriacaoSiteEcommerce";
import GestaoEcommerce from "./pages/GestaoEcommerce";
import MarketingDigital from "./pages/MarketingDigital";
import SocialMedia from "./pages/SocialMedia";
import FerramentasIA from "./pages/FerramentasIA";
import Microservicos from "./pages/Microservicos";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Home e contato */}
            <Route path="/" element={<Index />} />
            <Route path="/formulario-contato" element={<FormularioContato />} />
            <Route path="/obrigado" element={<Obrigado />} />

            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            {/* Rota dinâmica para artigos via slug */}
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Artigos fixos opcionais */}
            <Route path="/blog/como-criar-ecommerce-sucesso-2025" element={<ArtigoEcommerce />} />

            {/* Serviços */}
            <Route path="/servicos/criacao-site-ecommerce" element={<CriacaoSiteEcommerce />} />
            <Route path="/servicos/gestao-ecommerce" element={<GestaoEcommerce />} />
            <Route path="/servicos/marketing-digital" element={<MarketingDigital />} />
            <Route path="/servicos/social-media" element={<SocialMedia />} />
            <Route path="/servicos/ferramentas-ia" element={<FerramentasIA />} />
            <Route path="/servicos/microservicos" element={<Microservicos />} />

            {/* Página 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
