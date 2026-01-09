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
import Treinamentos from "./pages/Treinamentos";
import FerramentasIA from "./pages/FerramentasIA";
import Microservicos from "./pages/Microservicos";

import AdminLogin from "./pages/AdminLogin";
import AdminArtigos from "./pages/AdminArtigos";

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
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/artigos" element={<AdminArtigos />} />

            {/* Serviços */}
            <Route path="/servicos/criacao-site-ecommerce" element={<CriacaoSiteEcommerce />} />
            <Route path="/servicos/gestao-ecommerce" element={<GestaoEcommerce />} />
            <Route path="/servicos/treinamentos" element={<Treinamentos />} />
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

