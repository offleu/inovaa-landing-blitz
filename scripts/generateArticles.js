import fs from "fs";
import fetch from "node-fetch";

const API_KEY = "sx7dIJ9QKfgsBJ3wilSN20yHyFu1qpBBRpbRkMR_F8s";

async function gerarArtigos() {
  const res = await fetch(
    "https://api.airticles.ai/external/obter-post?limit=50",
    { headers: { "X-API-Key": API_KEY } }
  );
  const data = await res.json();

  if (!fs.existsSync("./public/artigos")) fs.mkdirSync("./public/artigos");

  data.items.forEach((artigo) => {
    fs.writeFileSync(
      `./public/artigos/${artigo.slug}.json`,
      JSON.stringify(artigo, null, 2)
    );
  });

  const index = data.items.map((a) => ({
    slug: a.slug,
    title: a.title,
    createdAt: a.createdAt,
  }));

  fs.writeFileSync("./public/artigos/index.json", JSON.stringify(index, null, 2));
  console.log("Artigos gerados com sucesso!");
}

gerarArtigos();