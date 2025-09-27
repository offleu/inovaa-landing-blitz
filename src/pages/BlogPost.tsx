import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Article { id: number; title: string; html: string; createdAt: string; }

export default function BlogPost() {
  const { slug } = useParams();
  const [artigo, setArtigo] = useState<Article | null>(null);

  useEffect(() => {
    async function fetchArtigo() {
      const res = await fetch(`/artigos/${slug}.json`);
      if (!res.ok) return;
      const data = await res.json();
      setArtigo(data);
    }
    fetchArtigo();
  }, [slug]);

  if (!artigo) return <p>Carregando...</p>;

  return (
    <article>
      <h1>{artigo.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: artigo.html }} />
    </article>
  );
}
