# Central @brunorib3

Painel local da marca pessoal: decisões, tarefas, conteúdo e documentos do time de agentes, num lugar só.

## Como rodar no seu computador

Precisa do [Node.js 20+](https://nodejs.org) instalado.

```bash
git clone https://github.com/brunorib3-svg/Main.git
cd Main
git checkout claude/instagram-skills   # até o merge na main
cd central
npm install
npm run dev
```

Abra **http://localhost:3333**.

Para atualizar com o que os agentes fizeram: `git pull` na pasta `Main` e recarregue a página.

## Telas
- **Hoje:** dias até as vendas, decisões que esperam você, suas tarefas e os próximos 14 dias.
- **Tarefas:** quadro Ideia → A fazer → Fazendo → Feito, filtrado por área, com campo para criar tarefa.
- **Conteúdo:** agenda de posts, banco de ideias e prévias das peças já produzidas.
- **Documentos:** todos os `.md` do projeto (funil, kit de vendas, calendário, benchmarking, radar, contexto).

## Onde ficam os dados
- Tarefas: `central/data/tarefas.json`. É o mesmo arquivo que os agentes atualizam.
- Documentos e imagens: lidos direto do repositório (`produto/`, `conteudo/`, `paginas/`...).

Se você marcar tarefas no seu computador, faça `git commit` e `git push` do `tarefas.json` para os agentes verem.

## Próximos passos possíveis
- Migrar os dados para o Supabase (mesmo padrão dos sistemas das lojas) e publicar na Vercel com login.
- Painel de métricas do funil (seguidores, leads, aplicações, vendas).
