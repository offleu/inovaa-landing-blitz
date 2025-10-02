import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import FormularioContato from "./pages/FormularioContato";
import Blog from "./pages/Blog";
import ArtigoEcommerce from "./pages/ArtigoEcommerce";
import CriacaoSiteEcommerce from "./pages/CriacaoSiteEcommerce";
import GestaoEcommerce from "./pages/GestaoEcommerce";
import MarketingDigital from "./pages/MarketingDigital";
import SocialMedia from "./pages/SocialMedia";
import FerramentasIA from "./pages/FerramentasIA";
import Microservicos from "./pages/Microservicos";
import NotFound from "./pages/NotFound";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/formulario-contato" element={<FormularioContato />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/como-criar-ecommerce-sucesso-2025" element={<ArtigoEcommerce />} />
          <Route path="/servicos/criacao-site-ecommerce" element={<CriacaoSiteEcommerce />} />
          <Route path="/servicos/gestao-ecommerce" element={<GestaoEcommerce />} />
          <Route path="/servicos/marketing-digital" element={<MarketingDigital />} />
          <Route path="/servicos/social-media" element={<SocialMedia />} />
          <Route path="/servicos/ferramentas-ia" element={<FerramentasIA />} />
          <Route path="/servicos/microservicos" element={<Microservicos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);



export default App;
