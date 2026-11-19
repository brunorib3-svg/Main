# Esteira de produtos e funil @brunorib3, V1

> Autor: especialista-produto · Versão: V1 · Data: 19/nov/2026
> Base: `.claude/context/bruno.md`. Números do Bruno usados aqui: R$ 30 mi+ faturados no total, R$ 12 a 15 mi no último ano, margem líquida de 20 a 25%, 8 funcionários, gestão praticamente solo. **Todos são faturamento, não lucro.** Nada além disso foi assumido.
>
> Convenções: **[HIPÓTESE]** = preço, conversão ou meta sem fonte nem dado próprio, a validar. **[DADO: ...]** = informação que só o Bruno tem e que falta para fechar a conta.

---

## 0. Resumo das decisões de produto

1. **A escada discutida com o Bruno se mantém, com quatro ajustes:**
   - **O primeiro produto pago é o Diagnóstico 1:1, e não o workshop.** Um workshop depende de audiência e lista, que ainda não existem em escala ([DADO: seguidores atuais do @brunorib3, tamanho da rede de empresários]). O diagnóstico se vende por conversa direta na rede quente, valida a dor com dinheiro na mesa e gera os primeiros cases. O workshop vira o degrau de entrada **escalável** no mês 2.
   - **A implementação premium exige um time que hoje não existe.** O Bruno toca a operação praticamente sozinho. A V1 propõe uma implementação **piloto**, feita com 1 implementador técnico (contratado ou parceiro) sob a metodologia do Bruno, limitada a 2 clientes, antes de vender em escala.
   - **O software não é degrau vendável na V1.** O Creator OS está em concepção e o gateway não pode ter promessas públicas (taxas, datas, licenças). Na V1 ele aparece só como **lista de espera / beta fechado** para quem já é cliente. O degrau de recorrência real da V1 é um **Conselho de Operadores** (pós-mentoria), que mantém a base ativa até o software existir.
   - **Timing: a Black Friday é em 27/nov/2026.** O cliente ideal (dono de e-commerce) e o próprio Bruno estão no pico de operação até ~1/dez. O plano de 30 dias usa a semana atual para preparar, não vende durante a BF e abre vendas na semana de 1/dez com o gancho "planejar 2027 com IA depois da Black Friday".
2. **Escopo do público:** a esteira é de **e-commerce** (é onde o Bruno tem prova). "Empresário que já fatura" é amplo demais para a V1; o recorte proposto é **dono de e-commerce/marca DTC faturando a partir de [HIPÓTESE: R$ 100 mil/mês]**, com time pequeno, que quer escalar sem inchar a folha. Outros segmentos ficam para depois de ter cases.

---

## 1. Mapa da esteira

| # | Degrau | Formato | Ticket [HIPÓTESE] | Papel na escada | Consome horas do Bruno? |
|---|---|---|---|---|---|
| 0 | **Conteúdo gratuito** | Instagram @brunorib3 (pilares: IA na prática, bastidores com número, teses de operador, construção em público) | 0 | Atenção e prova de que ele é operador real | Médio (esposa já ajuda no conteúdo; time de agentes produz) |
| 1 | **Lista própria: "Grupo de Operadores"** | Grupo/canal de WhatsApp + e-mail, entrada via isca (kit de prompts/agentes de gestão de e-commerce) | 0 | Tirar a audiência do algoritmo, qualificar por faturamento | Baixo (automatizado) |
| 2a | **Diagnóstico de IA na Gestão** (1:1) | Questionário + call de 90 min + relatório com plano de 90 dias | R$ 1.500 a 3.000 | **Primeiro caixa e validação.** Mapeia a operação e qualifica para mentoria/implementação | Alto por cliente, por isso é limitado em vagas |
| 2b | **Workshop "IA na gestão do e-commerce"** (mês 2+) | Ao vivo, 3 a 4 h, com gravação; depois vira perpétuo | R$ 297 a 997 | Versão escalável da entrada. Converte lista em compradores | Baixo (1 evento por mês ou trimestre) |
| 3 | **Mentoria em grupo de escala** (high-ticket) | 12 semanas, turma de até 15 a 20 empresas, encontro semanal + grupo + biblioteca de agentes | R$ 12.000 a 25.000 por empresa | Produto principal. Transforma o cliente em operador com IA | Médio e fixo (não cresce com o nº de alunos) |
| 4 | **Implementação premium** (done-for-you) | Time instala agentes e automações na operação do cliente, 6 a 8 semanas + suporte mensal | Setup R$ 30.000 a 80.000 + R$ 3.000 a 8.000/mês | Maior ticket e margem por cliente; gera os cases técnicos | Baixo para o Bruno **se** houver implementador; alto se não houver |
| 5 | **Conselho de Operadores** (recorrência) | Grupo fechado de ex-alunos/clientes: 1 encontro mensal, hot seats, atualizações de agentes | R$ 1.000 a 2.500/mês | Retenção, LTV e base para o software | Baixo |
| 6 | **Software: Creator OS (e, no futuro, gateway)** | Beta fechado pago para a base dos degraus 3 a 5 | [DADO: modelo de preço do Creator OS] | Destino da esteira: o cliente que já opera com IA vira usuário da infraestrutura | Zero após construído |

**Lógica da escada:** cada degrau resolve um problema que o anterior expõe.
- O conteúdo mostra que dá para gerir R$ 12 a 15 mi/ano com equipe enxuta e IA → o empresário quer saber **onde** ele está perdendo tempo e dinheiro → **diagnóstico/workshop**.
- O diagnóstico entrega o mapa → falta disciplina e método para executar → **mentoria**, ou falta braço técnico → **implementação**.
- Depois de operar com agentes, o cliente precisa de dados de creators, criativos e pagamentos num lugar só → **Creator OS / gateway**.

### Onde cada degrau prepara o cliente para o software
| Degrau | O que deixa pronto para o software |
|---|---|
| Diagnóstico | Inventário de dados e ferramentas do cliente: mostra o buraco que o Creator OS e o gateway preenchem |
| Workshop | Vocabulário e primeiro agente instalado: o cliente aprende a pensar em "OS" |
| Mentoria | Módulo de creators/UGC e módulo de pagamentos/margem usam planilhas e agentes que são o **protótipo manual** do Creator OS |
| Implementação | Integrações reais com a stack do cliente: viram requisitos e conectores do software |
| Conselho | Base de beta testers pagantes, com feedback contínuo |

---

## 2. Fichas de produto

### 2.0 Conteúdo gratuito (@brunorib3)
- **Para quem:** dono de e-commerce que já fatura e vê o Instagram como fonte de método, não de motivação.
- **Problema / promessa:** "Ver como um operador real usa IA para gerir uma operação de R$ 12 a 15 mi/ano em faturamento com 8 funcionários." Verificável pelos bastidores mostrados.
- **Entregáveis:** 4 a 5 posts/semana nos pilares definidos; 1 CTA fixo por semana para a lista ("comenta OPERADOR e recebe o kit").
- **Custo:** tempo do Bruno para gravar bastidores [DADO: horas/semana disponíveis]; produção com agentes de conteúdo + esposa.
- **Critério de sucesso:** crescimento de leads qualificados na lista, não de seguidores.
- **Próximo degrau:** lista (degrau 1).
- **Cuidados:** faturamento sempre como faturamento; prova guardada antes de publicar R$ 30 mi / R$ 12 a 15 mi; nada de opções binárias como mérito; bens como consequência, nunca isca.

### 2.1 Lista própria: "Grupo de Operadores"
- **Para quem:** quem já fatura. Filtro na entrada: formulário curto com faixa de faturamento, nicho, tamanho de time, ferramentas.
- **Isca (lead magnet):** "Kit de 5 agentes de IA para gestão de e-commerce" (ex.: agente de análise de DRE/margem, de briefing de criativo, de atendimento pós-venda, de relatório diário de ads, de triagem de creators). Feito a partir do que o Bruno já usa [DADO: quais agentes/automações já rodam na Miss Secret; seção "Sistemas e automações" do bruno.md está pendente].
- **Formato:** grupo de WhatsApp tipo "canal" (só o Bruno posta) + e-mail. 1 a 2 conteúdos exclusivos por semana, 1 oferta por ciclo.
- **Custo:** ferramenta de formulário + CRM simples; produção do kit (~4 a 6 h, uma vez).
- **Capacidade:** ilimitada.
- **Critério de sucesso:** % de leads na faixa de faturamento-alvo; taxa de resposta às mensagens.
- **Próximo degrau:** diagnóstico (agora), workshop (mês 2+).

### 2.2a Diagnóstico de IA na Gestão (produto 1 a vender)
- **Para quem:** dono de e-commerce faturando a partir de [HIPÓTESE: R$ 100 mil/mês], que sente que a operação depende demais dele e não sabe por onde começar com IA.
- **Problema:** "Sei que a IA pode cortar trabalho manual e melhorar decisão, mas não sei onde aplicar primeiro, nem quanto isso vale na minha operação."
- **Promessa (verificável):** "Em 7 dias você sai com o mapa da sua operação e um plano de 90 dias com as 3 a 5 automações de IA de maior impacto, priorizadas por esforço e retorno, e com o primeiro agente já configurado." Sem promessa de faturamento.
- **Entregáveis:**
  1. Questionário pré-call (preenchido pelo cliente; um agente de IA consolida e prepara o Bruno).
  2. Call de 90 min com o Bruno (gravada).
  3. Relatório de diagnóstico (gerado por agente a partir da transcrição + revisão do Bruno de ~30 min): mapa de processos, gargalos, horas manuais estimadas pelo próprio cliente, top 5 automações, plano de 90 dias.
  4. 1 agente/prompt-pronto instalado ou entregue (do kit) adaptado à operação dele.
  5. Crédito do valor pago na mentoria ou na implementação, se fechar em até 30 dias.
- **Preço:** **R$ 2.000 [HIPÓTESE]** (faixa de teste R$ 1.500 a 3.000). Justificativa: para quem fatura R$ 100 mil+/mês, o valor é inferior a uma fração do custo mensal de 1 funcionário; o crédito integral elimina o risco para quem seguir na esteira. Preço de fundador para as primeiras vagas; subir a cada lote vendido.
- **Garantia:** se ao fim da call o cliente achar que não recebeu valor, devolução integral. (Coerente com a cultura de garantia da casa e reduz atrito na rede quente.)
- **Custo de entrega:** ~3 h do Bruno por cliente (call 1,5 h + preparo 0,5 h + revisão 0,5 h + follow-up 0,5 h) + ferramentas de IA. Margem bruta próxima de 100% em caixa, mas o custo real é o tempo do Bruno.
- **Capacidade:** **máximo de 8 a 10 diagnósticos/mês** (~24 a 30 h/mês). Acima disso, para.
- **Critério de sucesso do cliente:** implementou pelo menos 1 das automações do plano em 30 dias (medir no follow-up).
- **Próximo degrau natural:** mentoria (quer fazer com método) ou implementação (quer que façam por ele).
- **O que valida:** (a) pagam para ouvir o Bruno; (b) quais dores se repetem (vira currículo da mentoria e do workshop); (c) quanto pagariam para implementar.

### 2.2b Workshop "IA na gestão do e-commerce" (mês 2+)
- **Para quem:** mesmo avatar, mas que ainda não está pronto para conversa 1:1, ou chegou pela lista.
- **Promessa:** "Em uma tarde, você monta os 3 primeiros agentes da sua gestão (relatório diário, margem, criativo) e sai com o plano do que automatizar no trimestre."
- **Entregáveis:** encontro ao vivo de 3 a 4 h, mão na massa; kit de agentes; gravação por 30 dias; oferta da mentoria no final.
- **Preço:** **R$ 497 [HIPÓTESE]** (faixa R$ 297 a 997); lote de lançamento mais barato.
- **Custo:** ~6 h do Bruno por edição (preparo + ao vivo) + plataforma. Depois da 2ª edição, vira gravado/perpétuo.
- **Capacidade:** ilimitada em alunos; 1 edição por mês no máximo.
- **Critério de sucesso do cliente:** % de participantes com pelo menos 1 agente rodando ao fim do dia.
- **Próximo degrau:** mentoria (oferta ao vivo no final + call de aplicação).
- **Só lançar se:** a lista tiver [HIPÓTESE: 300+ leads qualificados] e o diagnóstico tiver mostrado as 3 dores mais comuns.

### 2.3 Mentoria em grupo de escala (high-ticket)
- **Para quem:** dono de e-commerce faturando [HIPÓTESE: R$ 200 mil a 2 mi/mês] que quer escalar sem inchar a equipe e quer ele mesmo dominar a operação com IA.
- **Problema:** operação dependente do dono, time crescendo mais rápido que a margem, dados espalhados, criativo e ads sem processo.
- **Promessa (verificável):** "Em 12 semanas, sua operação roda com um sistema de gestão com IA: rotina de dados diária, processo de criativos/creators, atendimento e pós-venda automatizados e um painel de margem real." Medida por entregáveis instalados, não por faturamento.
- **Entregáveis:**
  - 12 encontros semanais ao vivo (90 min) com hot seat.
  - Biblioteca de agentes/prompts e templates do Bruno (o "OS de operador").
  - Grupo com acompanhamento (perguntas respondidas com apoio de agente + curadoria do Bruno).
  - Módulos: gestão com dados e margem; criativos virais e escala em Meta Ads (força declarada do Bruno); creators/UGC/live commerce; atendimento, pós-venda e equipe enxuta; stack própria e controle (menos dependência de plataforma).
  - Diagnóstico incluso para quem não fez.
- **Preço:** **R$ 15.000 por empresa [HIPÓTESE]** (faixa R$ 12 a 25 mil), à vista ou parcelado. Turma piloto com preço de fundador em troca de depoimento e case autorizados.
- **Custo de entrega:** ~2,5 h/semana do Bruno (encontro + preparo) + 1 pessoa de suporte/comunidade parcial [DADO: quem faz o suporte; hoje não há]. Margem alta porque o custo não cresce por aluno.
- **Capacidade:** 15 a 20 empresas por turma; 1 turma por vez; 2 a 3 turmas/ano.
- **Critério de sucesso do cliente:** checklist de 5 sistemas instalados ao fim das 12 semanas; NPS; % que renova no Conselho.
- **Próximo degrau:** Conselho (recorrência) ou implementação (quem quer acelerar com time).
- **Venda:** aplicação + call de 30 min (feita pelo Bruno no piloto; depois por closer treinado, por exemplo uma das vendedoras se tiver perfil [DADO]).

### 2.4 Implementação premium (done-for-you)
- **Para quem:** empresa faturando [HIPÓTESE: R$ 500 mil+/mês] cujo dono não quer aprender a implementar, quer o resultado instalado.
- **Promessa:** "Em 6 a 8 semanas, instalamos na sua operação [escopo fechado no diagnóstico]: X agentes e Y automações, documentados e com o time treinado."
- **Entregáveis:** diagnóstico aprofundado; escopo fechado; instalação; treinamento do time; 30 dias de estabilização; depois suporte mensal opcional.
- **Preço:** **setup R$ 30.000 a 80.000 + R$ 3.000 a 8.000/mês [HIPÓTESE]**, conforme escopo.
- **Custo de entrega:** implementador técnico (CLT, PJ ou parceiro) [DADO: o Bruno tem dev/implementador hoje? Quem constrói o gateway e os AI OS?] + ferramentas. Margem-alvo [HIPÓTESE: 50 a 60%] após custo do time.
- **Capacidade:** 2 clientes simultâneos por implementador. **Piloto: 2 clientes.**
- **Critério de sucesso do cliente:** automações em produção e usadas pelo time 30 dias após a entrega; horas manuais eliminadas (medidas pelo cliente antes/depois).
- **Próximo degrau:** suporte mensal → Conselho → beta do software.
- **Risco principal:** virar agência e sugar o Bruno. Regra: o Bruno só faz o diagnóstico e a revisão de escopo; a execução é do time. Sem implementador, não vende.

### 2.5 Conselho de Operadores (recorrência)
- **Para quem:** ex-alunos da mentoria e clientes de implementação.
- **Promessa:** manter o sistema atualizado e ter um grupo de pares do mesmo nível para decisões.
- **Entregáveis:** 1 encontro mensal (2 h), hot seats, atualizações da biblioteca de agentes, acesso antecipado ao beta do Creator OS.
- **Preço:** **R$ 1.500/mês [HIPÓTESE]** (faixa R$ 1.000 a 2.500), contrato mínimo de 6 meses.
- **Custo:** ~3 h/mês do Bruno.
- **Capacidade:** 30 a 50 empresas.
- **Critério de sucesso:** churn mensal [HIPÓTESE: menor que 5%].
- **Próximo degrau:** software.

### 2.6 Software (Creator OS; gateway no futuro)
- **Status:** Creator OS em concepção; gateway sem promessas públicas.
- **Na V1:** nada de venda pública. Apenas: (a) lista de espera interna para clientes dos degraus 3 a 5; (b) quando houver MVP, **beta fechado pago** para o Conselho.
- **Como a esteira alimenta o software:** os módulos de creators da mentoria e as implementações viram a especificação e os primeiros clientes.
- [DADO: previsão de MVP do Creator OS; modelo de preço; se o gateway pode ser mencionado como "em construção" no conteúdo de construção em público.]

---

## 3. Funil entre os degraus

```
Conteúdo IG ──CTA "OPERADOR"──> Formulário (faturamento, nicho, time) ──> Lista/Grupo de Operadores
                                         │
                       qualificado (≥ faixa-alvo)
                                         ▼
          Rede quente / DM direta ──> Diagnóstico 1:1 (pago, crédito integral)
                                         │
                ┌────────────────────────┼─────────────────────────┐
                ▼                        ▼                         ▼
      Quer método e grupo        Quer que façam por ele      Não é a hora
      → Mentoria (call)          → Implementação (escopo)    → fica na lista; recebe workshop
                │                        │
                └──────────┬─────────────┘
                           ▼
                Conselho de Operadores (mensal) ──> Beta Creator OS / gateway
```

| Transição | Porta de entrada | Gatilho de upgrade | Automação |
|---|---|---|---|
| Conteúdo → Lista | CTA de comentário/direct ("OPERADOR") + link na bio | Isca: kit de agentes | ManyChat ou equivalente no direct → formulário → tag no CRM por faixa de faturamento |
| Lista → Diagnóstico | Mensagem pessoal para leads qualificados + post/stories de vagas abertas | "Vagas limitadas a 8 no mês" (escassez real, por capacidade) + crédito na mentoria | Agente de IA faz a pré-qualificação no WhatsApp; link de pagamento; agendamento automático; questionário enviado após pagamento |
| Lista → Workshop (mês 2+) | Sequência de 5 a 7 dias no WhatsApp/e-mail | Data fixa + lote | Sequência automática + lembretes + replay |
| Diagnóstico → Mentoria / Implementação | Fim da call: o Bruno apresenta o próximo passo **só se** fizer sentido para o plano | Crédito do diagnóstico expira em 30 dias | Relatório entregue com proposta anexa; follow-up D+3, D+7, D+14 (agente redige, o Bruno aprova) |
| Workshop → Mentoria | Oferta ao vivo no fim + aplicação | Bônus para quem aplica em 72 h | Formulário de aplicação → call agendada |
| Mentoria → Conselho | Semana 10 da mentoria | Continuidade do grupo e da biblioteca | Proposta automática + call curta |
| Conselho → Software | Convite para beta | Acesso antecipado | Lista de espera no CRM |

**Stack mínima de funil [a confirmar com o Bruno]:** formulário, CRM simples (ou o próprio Second Brain/AI OS se já tiver), link de pagamento, agendamento, WhatsApp com automação. [DADO: ferramentas que a Miss Secret já usa e que podem ser reaproveitadas.]

---

## 4. Métricas e metas por etapa

Todas as taxas abaixo são **[HIPÓTESE]**: não há dado do funil do @brunorib3 ainda. Servem para dimensionar e devem ser substituídas pelos números reais a partir do 1º mês.

### 4.1 Funil do Diagnóstico (30 dias)
| Etapa | Meta | Taxa [HIPÓTESE] | Observação |
|---|---|---|---|
| Lista de abordagem (rede quente: empresários, fornecedores, colegas de e-commerce, contatos de eventos) | 60 nomes | n/a | [DADO: quantos empresários o Bruno conhece pessoalmente] |
| Respondem à abordagem | 30 | 50% | Rede quente responde bem mais que tráfego frio |
| Conversa de qualificação | 18 | 60% | Feita por mensagem; agente ajuda a preparar |
| Compram o diagnóstico | 6 a 8 | 35 a 45% | Com crédito integral e garantia |
| Receita | R$ 12.000 a 16.000 | — | A R$ 2.000 cada |
| Avançam para mentoria/implementação em 30 dias | 2 a 3 | 30 a 40% | É **aqui** que está o caixa relevante |

### 4.2 Funil completo (a partir do mês 2)
| Etapa | Métrica | Meta [HIPÓTESE] |
|---|---|---|
| Visitantes do perfil → leads | perfil → formulário | 2 a 5% |
| Leads → qualificados | % na faixa de faturamento-alvo | 30 a 50% |
| Qualificados → workshop | compra | 5 a 10% |
| Workshop → aplicação para mentoria | aplicação | 15 a 25% |
| Aplicação → call | agendamento + comparecimento | 60 a 70% |
| Call → venda mentoria | fechamento | 25 a 35% |
| Mentoria → Conselho | upgrade | 40 a 60% |
| Conselho | churn mensal | < 5% |
| Mentoria → implementação | upgrade | 10 a 20% |

### 4.3 Métricas de saúde (o Bruno olha toda semana)
- **Horas do Bruno por real faturado** em cada produto (o principal limitador).
- Receita por degrau e caixa no mês.
- % de clientes com o critério de sucesso atingido (resultado real, base para os cases).
- Custo por lead qualificado (quando houver tráfego pago).
- Tempo entre o 1º contato e a compra.

---

## 5. Roadmap de lançamento

| Fase | Período | O que vender | Critério para avançar | Critério para cortar/ajustar |
|---|---|---|---|---|
| **1. Validação** | 19/nov a 19/dez/2026 | Diagnóstico 1:1 (rede quente) + montar lista e isca | ≥ 5 diagnósticos vendidos **e** ≥ 2 pedindo próximo passo | < 3 vendas com 40+ abordagens → revisar promessa/público/preço antes de qualquer outro produto |
| **2. Entrada escalável + piloto high-ticket** | jan a fev/2027 | Workshop (1ª edição) + pré-venda da **turma piloto da mentoria** (8 a 12 empresas, preço de fundador) | Turma piloto com ≥ 8 empresas pagantes | < 5 empresas → rodar como mentoria pequena ou adiar; não gravar nada antes de vender |
| **3. Implementação piloto** | fev a abr/2027 | 2 clientes de implementação, vindos do diagnóstico/mentoria | Implementador contratado; 2 entregas no prazo com margem ≥ meta | Se o Bruno passar de [HIPÓTESE: 5 h/semana] na implementação, pausar e reestruturar |
| **4. Recorrência** | abr/2027+ | Conselho para quem termina a mentoria piloto | ≥ 40% da turma assina | Baixa adesão → incluir o Conselho como parte da mentoria em vez de venda separada |
| **5. Software** | quando houver MVP | Beta fechado do Creator OS para o Conselho | Uso semanal ativo dos betas | Sem MVP, segue como lista de espera, sem promessa pública |

**Ordem de corte se faltar tempo do Bruno:** primeiro reduz diagnóstico 1:1 (vira workshop), depois implementação; a mentoria em grupo é o produto protegido.

---

## 6. O que vender PRIMEIRO: Diagnóstico de IA na Gestão

### Por que este, e não o workshop ou a mentoria
| Critério | Diagnóstico 1:1 | Workshop | Mentoria piloto | Implementação |
|---|---|---|---|---|
| Precisa de audiência/lista? | Não (rede quente) | Sim | Parcial | Não |
| Precisa produzir conteúdo antes? | Quase nada (questionário + modelo de relatório) | Aula + material | Currículo de 12 semanas | Time técnico |
| Tempo até o 1º real | Dias | 3 a 4 semanas | 4 a 6 semanas | Semanas + contratação |
| Esforço do Bruno no mês | ~25 h, controlável por vagas | ~15 h + divulgação | Alto | Alto sem time |
| Valida o quê | Dor, disposição de pagar, currículo, demanda por high-ticket | Interesse amplo | Ticket alto | Capacidade de entrega |

**Leitura honesta sobre caixa:** R$ 12 a 16 mil [HIPÓTESE] é irrelevante perto de uma operação de R$ 12 a 15 mi/ano em faturamento. O valor do mês 1 é **validação + pipeline**: 2 a 3 clientes de mentoria/implementação vindos dos diagnósticos já representam [HIPÓTESE: R$ 30 a 150 mil] em contratos, e as dores reais viram o currículo do workshop e da mentoria sem chute.

### Plano semana a semana (30 dias)

**Semana 1: 19 a 25/nov (pré-Black Friday): preparar, sem vender** · esforço do Bruno: ~3 h
- Bruno (1 h): validar promessa, preço, garantia e regra de crédito deste documento; responder os [DADO] críticos (lista abaixo).
- Bruno (1 h): listar 60 nomes da rede quente (empresários de e-commerce, fornecedores, parceiros, colegas). Não citar parceiros sensíveis nem expor terceiros.
- Bruno (1 h): gravar áudio/vídeo de 15 min explicando como ele faz a gestão com IA hoje (matéria-prima para o questionário, o relatório e o conteúdo).
- Time de agentes: questionário pré-call; modelo do relatório de diagnóstico; página simples ou PDF da oferta; mensagem de abordagem (3 versões); link de pagamento e agendamento. (`infoprodutor` + `lancamentos-mentorias`)
- Conteúdo: manter pilares; nenhum CTA de venda durante a BF. Começar a coletar bastidores da BF da Miss Secret (vira conteúdo forte na semana 2).

**Semana 2: 26/nov a 2/dez (Black Friday em 27/nov): operação primeiro** · esforço do Bruno: ~1 h
- Bruno: foco na operação. Só gravar 3 a 5 stories/bastidores da BF com IA em ação (sem expor números não autorizados).
- Time de agentes: montar o kit-isca (5 agentes) a partir do áudio; configurar formulário + CRM + automação do direct; preparar o conteúdo "O que a IA fez na minha Black Friday" para 2/dez.
- Em 1 e 2/dez: post/carrossel de bastidores da BF com CTA para a lista.

**Semana 3: 3 a 9/dez: abrir vendas** · esforço do Bruno: ~8 h
- Bruno (3 h): enviar mensagens pessoais para os 60 nomes, em 3 lotes de 20 (gancho: "fechou a Black Friday? Estou abrindo 8 vagas de diagnóstico para planejar 2027 com IA").
- Bruno (2 h): conversas de qualificação (agente prepara resumo de cada lead).
- Bruno (3 h): primeiros 1 a 2 diagnósticos já agendados.
- Conteúdo: 2 posts de IA na prática + stories com "vagas abertas: X de 8" (escassez real).
- Meta [HIPÓTESE]: 4 vendas na semana.

**Semana 4: 10 a 19/dez: entregar e converter** · esforço do Bruno: ~12 a 15 h
- Bruno: realizar os diagnósticos restantes (meta total 6 a 8); revisar relatórios gerados por agente (30 min cada).
- Em cada entrega: apresentar o próximo passo (mentoria piloto em janeiro ou implementação) só quando fizer sentido no plano; registrar interesse, objeções e preço que o cliente acharia justo.
- Pedir autorização formal de depoimento/case (texto ou vídeo) para quem atingir o critério de sucesso.
- 19/dez: revisão do mês com os números reais → decidir fase 2 (abrir pré-venda da turma piloto da mentoria em janeiro e data do workshop).

**Total estimado do Bruno no mês:** ~25 a 30 h, concentradas nas semanas 3 e 4.

---

## 7. Riscos e cuidados
- **Tempo do Bruno:** o diagnóstico é 1:1 de propósito, para aprender, e por isso tem teto de vagas. Não abrir a 11ª vaga.
- **Prova:** antes de usar R$ 30 mi / R$ 12 a 15 mi em página de venda, ter prints/relatórios guardados. Sempre "faturamento".
- **Promessas:** nada de resultado financeiro garantido; a promessa é sobre entregáveis instalados e plano.
- **Gateway e parceiros:** nenhuma menção a taxas, datas ou parceiros (Novus incluída) em material de venda.
- **Cases:** só com autorização escrita do cliente; nunca inventar depoimento.
- **Virar agência:** implementação só com implementador; o Bruno não executa.
- **Final de ano:** dezembro tem baixa disposição a iniciar programas longos; por isso a mentoria piloto começa em janeiro.

---

## 8. Dados que faltam ([DADO])
1. Tamanho atual da audiência do @brunorib3 e da rede de empresários que ele pode abordar pessoalmente.
2. Agentes e automações de IA que já rodam na Miss Secret/Purity (base do kit e dos cases; seção pendente no bruno.md).
3. Se existe hoje alguém técnico (dev/implementador) que possa assumir a implementação premium.
4. Quem pode fazer suporte/comunidade e quem pode ser closer (alguma das vendedoras?).
5. Horas por semana que o Bruno aceita dedicar à marca pessoal.
6. Previsão de MVP e modelo de preço do Creator OS; o que pode ser dito publicamente sobre o gateway.
7. Ferramentas (CRM, WhatsApp, pagamento) que já existem na operação e podem ser reaproveitadas.

---

## 9. Próximos passos

| # | O quê | Quem | Quando |
|---|---|---|---|
| 1 | Aprovar ou ajustar: diagnóstico primeiro, preço R$ 2.000, crédito integral, garantia, teto de 8 vagas | Bruno | até 21/nov |
| 2 | Responder os [DADO] 1, 2, 3 e 5 | Bruno | até 21/nov |
| 3 | Listar os 60 nomes da rede quente | Bruno | até 25/nov |
| 4 | Gravar o áudio de 15 min sobre a gestão com IA | Bruno | até 25/nov |
| 5 | Produzir questionário, modelo de relatório, página/PDF da oferta, mensagens de abordagem | `infoprodutor` + `lancamentos-mentorias` | até 25/nov |
| 6 | Montar kit-isca, formulário, CRM e automação do direct | `infoprodutor` + `marketing` | até 2/dez |
| 7 | Calendário de conteúdo de 1 a 19/dez com CTAs para lista e vagas | `estrategista-conteudo` | até 28/nov |
| 8 | Abordagem da rede quente em 3 lotes | Bruno | 3 a 9/dez |
| 9 | Entregar diagnósticos e registrar dores, objeções e interesse no próximo degrau | Bruno + agente de relatório | 3 a 19/dez |
| 10 | Revisão do mês e decisão da fase 2 (pré-venda da mentoria piloto + data do workshop) | Bruno + `especialista-produto` | 19/dez |
