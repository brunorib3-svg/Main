import { marked } from "marked";
import { listarDocs, lerArquivo } from "@/lib/dados";

export const dynamic = "force-dynamic";

export default async function Docs({ params }) {
  const { caminho } = await params;
  const grupos = listarDocs();
  const atual = caminho ? caminho.map(decodeURIComponent).join("/") : "produto/funil-v2.md";
  const arq = atual.endsWith(".md") ? lerArquivo(atual) : null;
  const html = arq ? marked.parse(arq.conteudo.toString("utf8")) : "<p>Documento não encontrado.</p>";
  return (
    <>
      <h1>Documentos</h1>
      <p className="sub">Tudo o que o time produziu. Os arquivos ficam no repositório; aqui é só leitura.</p>
      <div className="docs">
        <div className="arvore">
          {grupos.map((g) => (
            <div key={g.pasta}>
              <div className="p">{g.pasta.replace(".claude/", "")}</div>
              {g.arquivos.map((f) => (
                <a key={f} href={`/docs/${f}`} className={f === atual ? "on" : ""}>{f.slice(g.pasta.length + 1).replace(/\.md$/, "")}</a>
              ))}
            </div>
          ))}
        </div>
        <article className="md" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  );
}
