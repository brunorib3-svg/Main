import fs from "node:fs";
import path from "node:path";
import { lerTarefas, RAIZ, hojeBR } from "@/lib/dados";
import Tarefa from "@/components/Tarefa";

export const dynamic = "force-dynamic";

// Peças já produzidas: pastas com slide-01.png ou previa-mobile-390.png
function pecas() {
  const alvos = [
    ["conteudo/p1-carrossel", "P1 · R$ 1,2 milhão por pessoa", "contato.png"],
    ["carrossel-ysl", "Carrossel da bolsa (teste)", "slide-01.png"],
    ["paginas/aplicacao-diagnostico", "Página do Diagnóstico", "previa-desktop-1440.png"],
    ["paginas/bio", "Página da bio", "previa-mobile-390.png"],
  ];
  return alvos.filter(([p, , img]) => fs.existsSync(path.join(RAIZ, p, img)));
}

export default function Conteudo() {
  const { tarefas } = lerTarefas();
  const hoje = hojeBR();
  const posts = tarefas.filter((t) => t.area === "conteudo");
  const agendados = posts.filter((t) => t.data && t.status !== "ideia").sort((a, b) => a.data.localeCompare(b.data));
  const ideias = posts.filter((t) => t.status === "ideia");
  return (
    <>
      <h1>Conteúdo</h1>
      <p className="sub">Calendário, ideias e as peças já produzidas. Roteiros completos em <a className="doc" href="/docs/conteudo/calendario-dez-2026.md">calendário de dezembro</a>.</p>
      <div className="grid g2">
        <div>
          <h2>📅 Agenda</h2>
          <div className="card" style={{ padding: 0 }}>{agendados.map((t) => <Tarefa key={t.id} t={t} hoje={hoje} />)}</div>
        </div>
        <div>
          <h2>💡 Banco de ideias</h2>
          <div className="card" style={{ padding: 0 }}>{ideias.map((t) => <Tarefa key={t.id} t={t} hoje={hoje} />)}</div>
        </div>
      </div>
      <h2>🖼️ Peças produzidas</h2>
      <div className="posts">
        {pecas().map(([p, nome, img]) => (
          <a key={p} className="card post" href={`/arquivo/${p}/${img}`} target="_blank">
            <img src={`/arquivo/${p}/${img}`} alt={nome} />
            <div>{nome}</div>
          </a>
        ))}
      </div>
    </>
  );
}
