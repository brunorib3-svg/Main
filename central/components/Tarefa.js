"use client";
import { useRouter } from "next/navigation";

const PRIO = { urgent: "Urgente", high: "Alta" };

export function fmtData(d) {
  if (!d) return "";
  const [, m, dia] = d.split("-");
  return `${dia}/${m}`;
}

export async function salvar(campos) {
  await fetch("/api/tarefas", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(campos) });
}

export default function Tarefa({ t, hoje, mostrarArea }) {
  const router = useRouter();
  const feito = t.status === "feito";
  const atrasada = !feito && t.data && t.data < hoje;
  const alternar = async () => {
    await salvar({ id: t.id, status: feito ? "a_fazer" : "feito" });
    router.refresh();
  };
  return (
    <div className={"linha" + (feito ? " feito" : "")}>
      <button className={"chk" + (feito ? " on" : "")} onClick={alternar} title="Marcar como feito">{feito ? "✓" : ""}</button>
      <div className="t">
        {t.titulo}
        {t.doc && <> · <a className="doc" href={t.doc.endsWith(".md") ? `/docs/${t.doc}` : `/arquivo/${t.doc}`}>abrir</a></>}
      </div>
      {mostrarArea && <span className="tag">{mostrarArea}</span>}
      {t.responsavel === "bruno" && !feito && <span className="tag bruno">você</span>}
      {PRIO[t.prioridade] && !feito && <span className={"tag " + t.prioridade}>{PRIO[t.prioridade]}</span>}
      {atrasada && <span className="tag atraso">atrasada</span>}
      <span className="data">{fmtData(t.data)}</span>
    </div>
  );
}
