import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ArticleIndex { slug: string; title: string; createdAt: string; }

export default function BlogList() {
  const [artigos, setArtigos] = useState<ArticleIndex[]>([]);

  useEffect(() => {
    async function fetchIndex() {
      const res = await fetch("/artigos/index.json");
      const data = await res.json();
      setArtigos(data);
    }
    fetchIndex();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {artigos.map((artigo) => (
          <li key={artigo.slug}>
            <Link to={`/blog/${artigo.slug}`}>{artigo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
