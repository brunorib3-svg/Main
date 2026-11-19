import path from "node:path";
import { lerArquivo } from "@/lib/dados";

const TIPOS = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".html": "text/html; charset=utf-8", ".md": "text/plain; charset=utf-8" };

// Serve imagens e páginas do repositório (ex.: prévias dos carrosséis e das landing pages)
export async function GET(_req, { params }) {
  const { caminho } = await params;
  const rel = caminho.map(decodeURIComponent).join("/");
  const arq = lerArquivo(rel);
  if (!arq) return new Response("Não encontrado", { status: 404 });
  return new Response(arq.conteudo, { headers: { "Content-Type": TIPOS[path.extname(rel).toLowerCase()] || "application/octet-stream" } });
}
