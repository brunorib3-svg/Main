import { lerTarefas, AREAS, hojeBR } from "@/lib/dados";
import Quadro from "@/components/Quadro";

export const dynamic = "force-dynamic";

export default async function Tarefas({ searchParams }) {
  const { area } = await searchParams;
  const { tarefas } = lerTarefas();
  const lista = area ? tarefas.filter((t) => t.area === area) : tarefas;
  lista.sort((a, b) => (a.data || "9999").localeCompare(b.data || "9999"));
  return (
    <>
      <h1>Tarefas</h1>
      <p className="sub">Mude o status pelo seletor de cada cartão. Os agentes leem e atualizam este mesmo quadro.</p>
      <div className="filtros">
        <a href="/tarefas" className={!area ? "on" : ""}>Todas</a>
        {Object.entries(AREAS).map(([k, v]) => (
          <a key={k} href={`/tarefas?area=${k}`} className={area === k ? "on" : ""}>{v.icone} {v.nome}</a>
        ))}
      </div>
      <Quadro tarefas={lista} areas={AREAS} areaAtual={area} hoje={hojeBR()} />
    </>
  );
}
