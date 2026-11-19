import { lerTarefas, salvarTarefas } from "@/lib/dados";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(lerTarefas());
}

// Cria ou atualiza uma tarefa. Body: { id?, ...campos }
export async function POST(req) {
  const body = await req.json();
  const dados = lerTarefas();
  if (body.id) {
    const t = dados.tarefas.find((x) => x.id === body.id);
    if (!t) return Response.json({ erro: "não encontrada" }, { status: 404 });
    Object.assign(t, body);
  } else {
    dados.tarefas.push({
      id: "t" + Date.now().toString(36),
      titulo: body.titulo || "Nova tarefa",
      area: body.area || "plano",
      status: body.status || "a_fazer",
      prioridade: body.prioridade || "normal",
      data: body.data || null,
      responsavel: body.responsavel || "bruno",
      tags: [],
      doc: null,
      notas: body.notas || "",
    });
  }
  salvarTarefas(dados);
  return Response.json({ ok: true });
}

export async function DELETE(req) {
  const { id } = await req.json();
  const dados = lerTarefas();
  dados.tarefas = dados.tarefas.filter((x) => x.id !== id);
  salvarTarefas(dados);
  return Response.json({ ok: true });
}
