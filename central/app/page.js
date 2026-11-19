import { lerTarefas, AREAS, hojeBR } from "@/lib/dados";
import Tarefa from "@/components/Tarefa";

export const dynamic = "force-dynamic";

const VENDAS = "2027-01-05";
const dias = (a, b) => Math.round((new Date(b) - new Date(a)) / 86400000);

export default function Hoje() {
  const { tarefas } = lerTarefas();
  const hoje = hojeBR();
  const abertas = tarefas.filter((t) => t.status !== "feito" && t.status !== "ideia");
  const porData = (a, b) => (a.data || "9999").localeCompare(b.data || "9999");

  const decisoes = abertas.filter((t) => t.area === "decisoes").sort(porData);
  const suas = abertas.filter((t) => t.responsavel === "bruno" && t.area !== "decisoes").sort(porData);
  const limite = new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10);
  const proximas = abertas.filter((t) => t.data && t.data <= limite).sort(porData);
  const feitas = tarefas.filter((t) => t.status === "feito").length;

  return (
    <>
      <h1>Hoje</h1>
      <p className="sub">O que precisa de você e o que vem nos próximos 14 dias.</p>

      <div className="grid g4">
        <div className="card kpi"><div className="n">{dias(hoje, VENDAS)}</div><div className="l">dias até abrir as vendas (5/jan)</div></div>
        <div className="card kpi"><div className="n">{decisoes.length}</div><div className="l">decisões esperando você</div></div>
        <div className="card kpi"><div className="n">{abertas.filter((t) => t.data && t.data < hoje).length}</div><div className="l">tarefas atrasadas</div></div>
        <div className="card kpi"><div className="n">{feitas}</div><div className="l">itens concluídos</div></div>
      </div>

      <div className="grid g2">
        <div>
          <h2>🧭 Precisa da sua decisão</h2>
          <div className="card" style={{ padding: 0 }}>
            {decisoes.length ? decisoes.map((t) => <Tarefa key={t.id} t={t} hoje={hoje} />) : <div className="vazio">Nada pendente.</div>}
          </div>
          <h2>✋ Suas tarefas</h2>
          <div className="card" style={{ padding: 0 }}>
            {suas.length ? suas.map((t) => <Tarefa key={t.id} t={t} hoje={hoje} mostrarArea={AREAS[t.area]?.icone} />) : <div className="vazio">Nada com você.</div>}
          </div>
        </div>
        <div>
          <h2>📅 Próximos 14 dias</h2>
          <div className="card" style={{ padding: 0 }}>
            {proximas.length ? proximas.map((t) => <Tarefa key={t.id} t={t} hoje={hoje} mostrarArea={AREAS[t.area]?.icone} />) : <div className="vazio">Nada agendado.</div>}
          </div>
        </div>
      </div>
    </>
  );
}
