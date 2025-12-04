-- Create articles table to store articles from Airticle
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  external_id TEXT UNIQUE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT,
  excerpt TEXT,
  featured_image TEXT,
  status TEXT DEFAULT 'pendente',
  author TEXT,
  category TEXT,
  tags TEXT[],
  meta_description TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (published articles only)
CREATE POLICY "Anyone can view published articles" 
ON public.articles 
FOR SELECT 
USING (status = 'Publicado');

-- Create policy for insert via service role (webhook)
CREATE POLICY "Service role can insert articles" 
ON public.articles 
FOR INSERT 
WITH CHECK (true);

-- Create policy for update via service role (webhook)
CREATE POLICY "Service role can update articles" 
ON public.articles 
FOR UPDATE 
USING (true);

-- Create index for faster slug lookups
CREATE INDEX idx_articles_slug ON public.articles(slug);

-- Create index for status filtering
CREATE INDEX idx_articles_status ON public.articles(status);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_articles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_articles_updated_at
BEFORE UPDATE ON public.articles
FOR EACH ROW
EXECUTE FUNCTION public.update_articles_updated_at();