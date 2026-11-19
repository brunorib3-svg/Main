import fs from "node:fs";
import path from "node:path";

// Raiz do repositório (a Central fica em /central)
export const RAIZ = path.resolve(process.cwd(), "..");
const ARQ_TAREFAS = path.join(process.cwd(), "data", "tarefas.json");

export const AREAS = {
  decisoes: { nome: "Decisões", icone: "🧭" },
  plano: { nome: "Plano de vendas", icone: "🚀" },
  conteudo: { nome: "Conteúdo", icone: "🎬" },
  radar: { nome: "Radar IA · Testes", icone: "🧪" },
  entregas: { nome: "Entregas dos agentes", icone: "📦" },
};

export const STATUS = {
  ideia: "Ideia",
  a_fazer: "A fazer",
  fazendo: "Fazendo",
  feito: "Feito",
};

export function lerTarefas() {
  return JSON.parse(fs.readFileSync(ARQ_TAREFAS, "utf8"));
}

export function salvarTarefas(dados) {
  dados.atualizado_em = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(ARQ_TAREFAS, JSON.stringify(dados, null, 2) + "\n");
}

// Documentos .md do projeto, agrupados por pasta
const PASTAS_DOCS = ["produto", "conteudo", "benchmarking", "radar-ia", ".claude/context"];

export function listarDocs() {
  const grupos = [];
  for (const pasta of PASTAS_DOCS) {
    const abs = path.join(RAIZ, pasta);
    if (!fs.existsSync(abs)) continue;
    const arquivos = [];
    const varrer = (dir) => {
      for (const nome of fs.readdirSync(dir).sort()) {
        const p = path.join(dir, nome);
        if (fs.statSync(p).isDirectory()) varrer(p);
        else if (nome.endsWith(".md")) arquivos.push(path.relative(RAIZ, p));
      }
    };
    varrer(abs);
    if (arquivos.length) grupos.push({ pasta, arquivos });
  }
  return grupos;
}

// Lê um arquivo do repositório, sem sair da raiz
export function lerArquivo(rel) {
  const abs = path.resolve(RAIZ, rel);
  if (!abs.startsWith(RAIZ + path.sep) || !fs.existsSync(abs)) return null;
  return { abs, conteudo: fs.readFileSync(abs) };
}

export function hojeBR() {
  return new Date(Date.now() - 3 * 3600 * 1000).toISOString().slice(0, 10);
}
