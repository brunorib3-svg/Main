"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { salvar, fmtData } from "./Tarefa";

const COLUNAS = [["ideia", "Ideia"], ["a_fazer", "A fazer"], ["fazendo", "Fazendo"], ["feito", "Feito"]];
const PRIO = { urgent: "Urgente", high: "Alta" };

export default function Quadro({ tarefas, areas, areaAtual, hoje }) {
  const router = useRouter();
  const [novo, setNovo] = useState("");
  const mover = async (id, status) => { await salvar({ id, status }); router.refresh(); };
  const criar = async (e) => {
    e.preventDefault();
    if (!novo.trim()) return;
    await salvar({ titulo: novo.trim(), area: areaAtual || "plano" });
    setNovo("");
    router.refresh();
  };
  return (
    <>
      <form onSubmit={criar} style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input value={novo} onChange={(e) => setNovo(e.target.value)} placeholder={`Nova tarefa em ${areas[areaAtual]?.nome || "Plano de vendas"}…`} style={{ flex: 1 }} />
        <button className="bt">Adicionar</button>
      </form>
      <div className="board">
        {COLUNAS.map(([st, nome]) => {
          const itens = tarefas.filter((t) => t.status === st);
          return (
            <div className="col" key={st}>
              <h3>{nome} · {itens.length}</h3>
              {itens.map((t) => (
                <div className="item" key={t.id}>
                  <div className="tt">{t.titulo}</div>
                  <div className="meta">
                    {!areaAtual && <span className="tag">{areas[t.area]?.icone}</span>}
                    {t.responsavel === "bruno" && st !== "feito" && <span className="tag bruno">você</span>}
                    {PRIO[t.prioridade] && st !== "feito" && <span className={"tag " + t.prioridade}>{PRIO[t.prioridade]}</span>}
                    {t.data && <span className={"tag" + (st !== "feito" && t.data < hoje ? " atraso" : "")}>{fmtData(t.data)}</span>}
                    {t.doc && <a className="doc" href={t.doc.endsWith(".md") ? `/docs/${t.doc}` : `/arquivo/${t.doc}`}>abrir</a>}
                    <select value={st} onChange={(e) => mover(t.id, e.target.value)} style={{ marginLeft: "auto", padding: "2px 6px" }}>
                      {COLUNAS.map(([v, n]) => <option key={v} value={v}>{n}</option>)}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}
