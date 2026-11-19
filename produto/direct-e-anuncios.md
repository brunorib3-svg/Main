# Direct "SISTEMA", anúncio de lista e painel do funil · @brunorib3

> Autor: marketing (head de growth) · Data: 19/nov/2026 · Base: [funil-v2.md](funil-v2.md) (APROVADO), [analise-funil/marketing.md](analise-funil/marketing.md), [analise-funil/conteudo.md](analise-funil/conteudo.md) e `.claude/context/bruno.md`.
> Convenções: **[HIPÓTESE]** = taxa, custo ou regra sem dado próprio, a validar no teste. **[DADO: ...]** = só o Bruno tem.
> Regras de exposição valem para TODA mensagem e criativo deste documento: sem nome das lojas, sem Creator OS, sem gateway, sem bolsas ou produtos nas telas, sem bens (casa, carros, 911), faturamento sempre como faturamento e nunca como lucro.

**Definição usada em todo o documento**
- **Faixa-alvo (lead qualificado):** vende online **e** fatura **R$ 50 mil/mês ou mais** (autodeclarado). Corte **confirmado pelo Bruno em 19/nov** (antes era R$ 100 mil, hipótese).
- **Período do anúncio:** 8/dez/2026 a 6/jan/2027 (30 dias), R$ 4.500 no total, R$ 150/dia em média.
- **Pré-requisito:** Raio-X da Operação no ar (página própria) e página de aplicação publicadas até 5/dez para dar 2 dias de teste do fluxo.

---

## 1. Fluxo do direct "SISTEMA"

### 1.1 Ferramenta recomendada

| Opção | Prós | Contras | Recomendação |
|---|---|---|---|
| **ManyChat Pro** (parceiro oficial da Meta para Instagram) | Gatilho por comentário, DM, resposta de story e anúncio de mensagem prontos; tags, campos, atrasos, integração por webhook; sobe em 1 a 2 dias sem dev | Cobra por contato ativo; mais uma dependência de plataforma | **Usar agora** (dez a fev) |
| Automação própria na API oficial do Instagram (stack Next.js + Supabase do Bruno) | Controle total, dados na casa, custo marginal ~zero | Precisa de dev, revisão de app pela Meta e semanas de prazo; o implementador ainda não foi contratado | **Fase 2** (a partir de mar), quando o implementador estiver rodando |
| Respostas automáticas nativas do Instagram/Meta Business Suite | Grátis | Não ramifica por resposta, não salva campos, não tem gatilho de comentário com qualificação | Não atende |

**Custo do ManyChat [confirmar na conta antes de assinar]:** fontes secundárias de 2026 indicam que o ManyChat mudou o preço em 2/mar/2026 para cobrança por **contato ativo no mês**: Pro a partir de **US$ 39/mês com 2.500 contatos ativos** e ~US$ 0,05 por contato excedente. Contas antigas podem continuar no modelo anterior (Pro a partir de US$ 15/mês para 500 contatos). Canais de WhatsApp, SMS e e-mail são cobrados à parte. Em reais depende do câmbio e do IOF do cartão: **[HIPÓTESE: R$ 250 a 400/mês]** no volume esperado de dezembro. Não consegui abrir a página oficial de preços (manychat.com/pricing) nesta sessão; o Bruno ou o operador confirma no checkout.

### 1.2 Restrição de política que muda o desenho (ler antes de montar)

- **Janela de 24 h do Instagram:** a automação só pode mandar mensagem até 24 h depois da última interação da pessoa. O follow-up de 24 h cabe (disparar com 23 h de atraso). **O follow-up de 72 h NÃO pode sair pelo direct de forma automática.**
- **Tag "Human Agent" (7 dias):** só vale para resposta manual de uma pessoa a uma dúvida do contato. Usar para empurrar oferta viola a política da Meta. Não usar como follow-up de venda.
- **Consequência:** o fluxo **captura WhatsApp e e-mail com consentimento** antes de entregar o Raio-X. O follow-up de 72 h sai por **WhatsApp** (quem deu opt-in) ou **e-mail** (fallback). Quem não deixou contato só recebe o follow-up de 24 h.
- Há relato secundário de que a Meta ampliou a janela para conversas iniciadas por anúncio; **não verificado** em documentação da Meta. Não contar com isso.
- **WhatsApp da marca pessoal em número próprio**, separado do número das lojas. O nome de exibição e o perfil do número das lojas mostrariam o nome da empresa (proibido). [DADO: número disponível para a marca pessoal.]
- **LGPD:** o opt-in da lista diz para que serve o contato e como sair ("responda SAIR").

### 1.3 Gatilhos

| # | Gatilho | Configuração | Tag de origem |
|---|---|---|---|
| G1 | Comentário em post ou Reel | Palavra-chave: `SISTEMA` (ignorar maiúscula, acento e pontuação; aceitar "sistemas"). Valer para **todos os posts**, inclusive futuros e anúncios que usem post existente | `origem_comentario` + campo `post_origem` |
| G2 | DM com a palavra | Mensagem que contém `SISTEMA` | `origem_dm` |
| G3 | Resposta de story | Palavra `SISTEMA` em resposta a story | `origem_story` |
| G4 | Anúncio de mensagem (C2 e C3) | Entrada pelo anúncio com mensagem pré-preenchida "SISTEMA" (gatilho de anúncio do ManyChat, um por anúncio) | `origem_anuncio` + campo `anuncio_id` |
| G5 | Link da bio / página | Link `ig.me/m/brunorib3?ref=bio` | `origem_bio` |

**Resposta pública ao comentário (G1)**, sortear entre 4 para não parecer spam:
1. "Te mandei no direct."
2. "Mandei aí no seu direct. Dá uma olhada."
3. "Enviado no direct. Se não aparecer, olha em solicitações de mensagem."
4. "Chegou no seu direct."

Regra anti-loop: cada contato recebe o fluxo **1 vez a cada 30 dias**. Se comentar de novo, só a resposta pública + "Já te mandei, está no seu direct".

### 1.4 Mensagens exatas

**M0 · Abertura (primeira mensagem, com botão; o botão é o que abre a janela de 24 h)**
> Oi, {primeiro_nome}! Aqui é o Bruno.
> Essa primeira parte é automática, mas eu leio as conversas depois.
>
> O Raio-X da Operação é para quem já tem negócio rodando: o mapa do sistema que centraliza a gestão das minhas lojas, 12 perguntas de autoavaliação e uma calculadora de faturamento por pessoa da equipe.
>
> Antes de mandar, 2 perguntas rápidas para eu te mandar a versão certa.
>
> [Bora]

Se não clicar em 2 h: lembrete único "É só tocar em Bora que eu te mando o Raio-X." Sem clique, encerra.

**P1 · Pergunta 1** (salva no campo `vende_online`)
> Você já vende online hoje?
>
> [Sim, vendo online] [Tenho negócio físico, sem online] [Ainda não tenho negócio]

**P2 · Pergunta 2** (para "Sim, vendo online"; salva no campo `faixa_faturamento`)
> Em média, quanto a operação fatura por mês? (Fica só entre nós, é para eu te mandar o material certo.)
>
> [Menos de R$ 50 mil] [R$ 50 a 100 mil] [R$ 100 a 300 mil] [R$ 300 mil a 1 mi] [Acima de R$ 1 mi]

**P2b · Pergunta 2 do negócio físico** (para "Tenho negócio físico"; mesmo campo `faixa_faturamento`)
> E o negócio físico fatura em média quanto por mês?
>
> [Menos de R$ 50 mil] [R$ 50 a 300 mil] [Acima de R$ 300 mil]

**Texto livre em vez de botão (fallback):** "Para eu não errar, responde tocando num dos botões aqui em cima." Após 2 falhas: tag `precisa_humano` e aviso "Vou ler sua mensagem e te respondo por aqui."

**C1 · Captura de contato** (todas as ramificações que recebem o Raio-X, antes da entrega)
> Fechado. Onde prefere receber o Raio-X e os próximos materiais?
> Seu WhatsApp eu uso só para mandar conteúdo de bastidor e avisos da minha agenda. Para sair, é só responder SAIR.
>
> [Pode ser no WhatsApp] [Prefiro e-mail] [Só aqui no direct]

- WhatsApp: pede o número (campo de telefone do ManyChat, com validação) e salva `optin_whatsapp = sim` + data e hora.
- E-mail: campo de e-mail com validação, salva `optin_email = sim` + data e hora.
- "Só aqui": entrega no direct, tag `sem_contato` (recebe só o follow-up de 24 h).

---

### 1.5 Ramificações

```
M0 ─► P1
      ├─ Sim, vendo online ─► P2
      │     ├─ Menos de R$ 50 mil─────────────────► R1 (fora da faixa): C1 ─► Raio-X + lista
      │     └─ R$ 50 mil ou mais ──────────────► R2 (na faixa): C1 ─► Raio-X + convite para aplicação
      ├─ Negócio físico, sem online ─► P2b
      │     ├─ Menos de R$ 50 mil─► R1 (fora da faixa): C1 ─► Raio-X + lista
      │     └─ R$ 50 mil ou mais ─► R3 (trilha física): C1 ─► Raio-X + tag para a trilha separada
      └─ Ainda não tenho negócio ─► R4: resposta educada, sem oferta e sem lista
```

**R1 · Fora da faixa: Raio-X + lista**
> Aqui está o seu Raio-X: {link_raiox}?utm_source=instagram&utm_medium=dm&utm_campaign=sistema&utm_content={origem}
>
> Faz em uns 10 minutos. Começa pela calculadora de faturamento por pessoa: ela já mostra onde a operação depende de você.
>
> Você entrou na minha lista. Mando por lá os bastidores do sistema e aviso quando abrir alguma aula aberta.

Tags: `faixa_fora`, `lista_geral`, `raiox_enviado`.

**R2 · Na faixa: Raio-X + convite para aplicação**
> Aqui está o seu Raio-X: {link_raiox}?...&utm_content={origem}
>
> Pelo tamanho da sua operação, o Raio-X vai te mostrar o "o quê". O "como" eu faço junto, no diagnóstico: 2 conversas comigo, olhando os números da sua operação (margem, tempo do dono, mídia e caixa), e um plano escrito de 90 dias.
>
> São {vagas_restantes} vagas em dezembro. Se fizer sentido, a aplicação leva 3 minutos: {link_aplicacao}?utm_source=instagram&utm_medium=dm&utm_campaign=sistema&utm_content={origem}

Tags: `faixa_alvo`, `lista_qualificada`, `raiox_enviado`, `convite_aplicacao`.

**Interruptor de vagas** (campo global `vagas_dez_abertas` e `vagas_restantes`, atualizado à mão pelo Bruno ou pelo operador): quando o teto de 5 a 6 diagnósticos fechar, ou a partir de 20/dez (pausa de vendas), R2 troca o último parágrafo por:
> As vagas de dezembro fecharam. Em janeiro abro a turma fundadora: 4 a 6 empresas fazendo a implementação do sistema comigo, em grupo. Quer entrar na lista de prioridade? [Quero] [Agora não]

`[Quero]` salva tag `prioridade_turma`. Escassez real: o número de vagas tem que bater com a agenda.

**R3 · Negócio físico que fatura: trilha separada (sem oferta pública)**
> Aqui está o seu Raio-X: {link_raiox}...
>
> Hoje meu trabalho é com quem já vende online. Para negócio físico que quer entrar no digital, estou fazendo poucas conversas, só por indicação, a partir de janeiro. Posso te incluir nessa lista de conversas? [Pode] [Agora não]

Tags: `trilha_fisico`, `lista_geral`; `[Pode]` adiciona `trilha_fisico_conversa`. Ninguém recebe link de aplicação nem preço nessa rota. O Bruno escolhe, dessa lista, as 2 ou 3 conversas de validação de dez/jan.

**R4 · Sem negócio: resposta educada, sem oferta**
> Valeu pela sinceridade! O Raio-X e o meu trabalho são para quem já tem operação rodando, então ele não te ajudaria agora.
> O conteúdo do perfil continua aberto: lá eu mostro decisão, número e erro de quem opera. Boa sorte na construção!

Tag: `sem_negocio`. Não entra na lista, não recebe follow-up, não entra em público de retargeting (adicionar à lista de exclusão do anúncio). Motivo: é o perfil "renda fácil" que o funil V2 exclui.

---

### 1.6 Follow-ups

| Quando | Canal | Para quem | Condição de disparo | Mensagem |
|---|---|---|---|---|
| **+23 h** depois da última interação | Direct (dentro da janela de 24 h) | R1, R2 e R3 | Não clicou no link do Raio-X (`raiox_clicou` vazio) | R1/R3: "Conseguiu abrir o Raio-X? Se puder, me conta depois a sua nota na autoavaliação: é o que mais me ajuda a escolher o próximo conteúdo." + link |
| **+23 h** | Direct | R2 | Clicou no Raio-X e não abriu a aplicação | "Uma pergunta que eu faço para todo mundo que fatura nessa faixa: hoje, quantas decisões do dia ainda passam por você? Se a resposta te incomodou, a aplicação está aqui: {link_aplicacao}. {vagas_restantes} vagas em dezembro." |
| **+72 h** | WhatsApp (opt-in) ou e-mail | R2 | Não aplicou | "Oi, {primeiro_nome}, Bruno aqui. Você pegou o Raio-X no Instagram na {dia_semana}. Se fez a autoavaliação e deu 'operação dependente do dono', o diagnóstico é o próximo passo: {link_aplicacao}. Se não for o momento, me responde 'depois' que eu paro de falar disso." |
| **+72 h** | WhatsApp ou e-mail | R1 | Sempre (1 vez) | "Oi, {primeiro_nome}, Bruno aqui. Mandei o Raio-X no Instagram. Separei o post em que mostro o sistema por dentro: {link_post}. Para sair da lista, responda SAIR." |
| +72 h | — | R3, R4, `sem_contato` | — | Nada automático. R3 entra na fila manual do Bruno |

Regras: no máximo 1 follow-up por canal; quem aplicou, comprou ou respondeu "depois"/"SAIR" sai de todos (tags `aplicou`, `comprou_diagnostico`, `pausa_followup`, `optout`). WhatsApp de 72 h é mensagem de modelo de marketing aprovada pela Meta, com custo por mensagem [DADO: custo atual por mensagem de marketing na conta de WhatsApp Cloud API].

**Como o WhatsApp de 72 h sai:** webhook do ManyChat (ação "External Request" do Pro) grava o contato no Supabase do Bruno; a rotina agendada que já dispara os lembretes das lojas manda o modelo pelo número da marca pessoal. Isso mantém a lista **na casa**, não no ManyChat. [DADO: quem conecta o webhook antes de 5/dez; sem isso, fallback é o canal de WhatsApp do próprio ManyChat, com custo extra.]

### 1.7 Tags e campos a salvar

**Campos personalizados (ManyChat, espelhados no Supabase)**
| Campo | Tipo | Valores |
|---|---|---|
| `vende_online` | texto | sim / fisico / sem_negocio |
| `faixa_faturamento` | texto | ate_50k / 50_100k / 100_300k / 300k_1mi / 1mi_mais / fisico_ate_50k / fisico_50_300k / fisico_300k_mais |
| `origem` | texto | comentario / dm / story / anuncio / bio |
| `post_origem` | texto | ID ou link do post |
| `anuncio_id` | texto | ID do anúncio (ref do gatilho) |
| `whatsapp` | telefone | com validação |
| `email` | e-mail | com validação |
| `optin_whatsapp`, `optin_email` | data e hora | momento do consentimento |
| `data_entrada` | data e hora | primeiro contato com o fluxo |
| `raiox_clicou` | data e hora | clique rastreado no link |
| `aplicou` | data e hora | preenchido pela página de aplicação (webhook) |
| `nota_raiox` | número | se a página do Raio-X devolver a pontuação (0 a 36) |

**Tags**
`origem_*` (5) · `faixa_alvo` · `faixa_fora` · `trilha_fisico` · `trilha_fisico_conversa` · `sem_negocio` · `lista_geral` · `lista_qualificada` · `raiox_enviado` · `convite_aplicacao` · `prioridade_turma` · `aplicou` · `comprou_diagnostico` · `sem_contato` · `precisa_humano` · `pausa_followup` · `optout`

**Públicos que saem daqui para o anúncio:** lista de leads já capturados (exclusão em C2 e C3), `sem_negocio` (exclusão), `faixa_alvo` (semente para público semelhante na fase 2, só depois de 100+ contatos e com consentimento informado no opt-in).

### 1.8 Teste antes de ligar (até 5/dez)
1. Rodar as 8 rotas com 3 perfis de teste (comentário, DM, story).
2. Conferir que nenhum link, prévia de link ou nome de exibição mostra nome de loja.
3. Conferir UTMs chegando na página do Raio-X e na aplicação.
4. Conferir webhook gravando no Supabase e o WhatsApp de teste saindo pelo número da marca pessoal.
5. Testar o interruptor de vagas (ligado e desligado).

---

## 2. Campanha de anúncio de lista (R$ 4.500, 8/dez a 6/jan)

### 2.1 Riscos de política (antes da estrutura)
1. **Formulário instantâneo com pergunta de faturamento:** a política de anúncios de cadastro da Meta restringe perguntar informação financeira (a lista cita renda, patrimônio e dívida) sem permissão prévia. Faturamento da empresa em faixas não é renda pessoal, mas o risco de reprovação existe. **Por isso a qualificação principal fica no direct** (C2a) e o formulário (C2b) é variante. Se o formulário for reprovado, os R$ 30/dia dele vão para C2a. (Isso corrige a análise anterior, que tratou a pergunta como liberada.)
2. **Alegação de renda / "ficar rico":** R$ 30 mi e R$ 12 a 15 mi só como **faturamento das minhas operações**, nunca como resultado do lead. Sem "fature X", "liberdade financeira", "renda", "escale para 7 dígitos". O 1º milhão em 6 meses **fica fora dos anúncios** (liberado no orgânico, mas em anúncio sinaliza dinheiro rápido e puxa o público errado).
3. **Atributos pessoais:** nada que afirme ou insinue a situação do leitor ("Você está perdendo dinheiro?", "Sua loja fatura R$ 50 mil?"). Usar "Para quem já opera e-commerce...".
4. **Calendário:** dezembro é pico de Natal no e-commerce: CPM mais caro e dono de loja ocupado **[HIPÓTESE]**. Por isso o corte é por lead qualificado, não por CPL bruto.

### 2.2 Estrutura das 3 campanhas

Orçamento por campanha (ABO, orçamento no conjunto) para ler cada frente separada. Volume baixo por conjunto: a fase de aprendizado da Meta não vai fechar; a leitura é manual, pelo painel da seção 3.

| | **C1 · Distribuição** | **C2 · Lista** | **C3 · Retargeting** |
|---|---|---|---|
| Orçamento | R$ 900 (R$ 30/dia) | R$ 2.700 (R$ 90/dia) | R$ 900 (R$ 30/dia) |
| Objetivo Meta | Engajamento · meta de desempenho: ThruPlay | Cadastros (Leads) | Cadastros (Leads) |
| Destino | Reel no perfil (sem CTA de clique) | **C2a** (R$ 60/dia): conversa no Instagram Direct, mensagem pré-preenchida "SISTEMA" → fluxo do ManyChat · **C2b** (R$ 30/dia): formulário instantâneo "maior intenção" | Conversa no Instagram Direct → fluxo SISTEMA |
| Público | Brasil, 25 a 55 anos, Advantage+ público com sugestões: e-commerce, lojas virtuais, Shopify, Nuvemshop, gestão de empresas, Meta Ads, pequenas e médias empresas, empreendedorismo | Igual a C1, em público próprio (sem sobrepor C3) | Engajou com o perfil @brunorib3 em 30 dias + viu 50% ou mais de qualquer vídeo de C1 ou do orgânico em 30 dias + visitou a página do Raio-X sem aplicar (pixel/API de Conversões) |
| Exclusões | — | Leads já capturados (lista do Supabase), `sem_negocio` | Leads já capturados, `sem_negocio`, quem já aplicou |
| Posicionamentos | Instagram Reels, Feed, Stories (Advantage+ só no Instagram) | Instagram (Reels, Feed, Stories) | Instagram |
| Criativos | 3 vídeos (ângulos 1, 2 e 3) | 2 vídeos + 1 estático por conjunto, rodando os 5 ângulos entre C2a e C2b | Ângulos 4 e 5 (prova e história) + 1 estático do sistema |
| O que mede | Custo por ThruPlay; tamanho do público de 50%+ | CPL bruto, **CPL qualificado**, % qualificados, C2a vs. C2b | CPL qualificado em público quente; aplicações |

Notas:
- Os interesses sugeridos são só sinal para o Advantage+; confirmar disponibilidade no Gerenciador, a Meta vem cortando opções de segmentação detalhada.
- **C2b só sobe se** o formulário tiver política de privacidade publicada (URL da marca pessoal, sem nome de loja) e integração formulário → Supabase → WhatsApp pronta até 5/dez. Senão, C2 vira R$ 90/dia em C2a. Perguntas do formulário: "Você já vende online?" (sim / tenho negócio físico / ainda não tenho negócio), "Faturamento mensal da operação (faixa)", nome, WhatsApp, e-mail. Tela final: botão para o Raio-X. Quem marcar faixa-alvo recebe o convite de aplicação de R2 pelo WhatsApp em até 1 h.
- **Quem opera:** [DADO: gestor de mídia das lojas pode rodar a conta da marca pessoal?] Conta de anúncios e página **separadas** das lojas, para não misturar pixel, público e nome.
- **Datas sensíveis:** 24, 25 e 31/dez e 1/jan: opcional pausar C2 e C3 à mão e redistribuir para 2 a 6/jan [HIPÓTESE de baixa atenção do público].

### 2.3 Critérios de corte e escala

Lead qualificado = faixa-alvo (vende online + R$ 50 mil/mês ou mais), contado **pelas tags do ManyChat e pelas respostas do formulário**, não pelo número de "cadastros" da Meta.
CPL qualificado = gasto de C2 + C3 ÷ leads qualificados de C2 + C3.

| Nível | Regra | Ação |
|---|---|---|
| Anúncio | Gasto de R$ 150 e zero lead (bruto) | Pausa o anúncio |
| Anúncio / conjunto | Gasto de R$ 300 e zero lead qualificado | Pausa |
| Anúncio / conjunto | CPL qualificado acima de R$ 120 depois de R$ 600 de gasto | Pausa |
| Conjunto | CPL qualificado entre R$ 50 e R$ 80 | Mantém |
| Conjunto | CPL qualificado abaixo de R$ 50 com 5+ qualificados | Escala 20 a 30% a cada 3 dias, **dentro dos R$ 4.500** (tira de C1 ou do pior conjunto). Passar do teto só com aprovação do Bruno |
| **Frente toda** (checkpoints 14/dez, 21/dez e 6/jan) | **CPL qualificado acima de R$ 80** OU **menos de 30% dos leads qualificados** | Pausa C2 e C3, troca ângulos e público e decide com o Bruno se religa. C1 pode seguir para formar público |
| C1 | Custo por ThruPlay [HIPÓTESE: acima de R$ 0,30] ou retenção de 50% abaixo de 15% | Troca o gancho dos 3 primeiros segundos |

Expectativa **[HIPÓTESE]**: R$ 3.600 em C2 + C3 a R$ 40 a R$ 80 por qualificado = **45 a 90 leads qualificados**. Não existe CPL próprio desse público: é o principal dado que o teste produz.

### 2.4 Os 5 ângulos

Formato padrão: Reel 9:16, legenda queimada, Bruno falando para a câmera (formato UGC, gravado pela esposa) intercalado com gravação de tela **borrada**. Estático 4:5. CTA dos anúncios de mensagem: botão "Enviar mensagem" com texto pré-preenchido "SISTEMA". Nos dados com [DADO], o criativo só sobe depois do número real.

---

**Ângulo 1 · Equipe enxuta**
- **Headline:** 8 pessoas. Uma tela só.
- **Texto principal:** Para quem opera e-commerce e sente que cada crescimento pede mais gente. Minhas operações faturaram R$ 12 a 15 milhões no último ano com 8 pessoas na equipe. Não foi contratação: foi um sistema com IA que centraliza a gestão num lugar só. Coloquei o mapa dele num Raio-X gratuito. Manda SISTEMA que eu te envio.
- **Vídeo (35 s):**
  - 0 a 3 s: Bruno para a câmera: "8 pessoas. R$ 12 a 15 milhões de faturamento no ano." Legenda: "faturamento, não lucro".
  - 3 a 12 s: "Toda vez que a loja cresce, a tentação é contratar. Eu fiz o contrário." Corte para o painel geral, nomes e imagens borrados.
  - 12 a 25 s: 3 telas rápidas: painel de margem, fila de oportunidades das vendedoras (sem nomes), relatório da manhã. "Margem, vendas e rotina do time num lugar só. Eu abro isso toda manhã."
  - 25 a 35 s: "Coloquei o mapa desse sistema e 12 perguntas num Raio-X. Manda SISTEMA no direct."
- **Estático:** fundo escuro, número grande "8 pessoas", subtítulo "R$ 12 a 15 mi de faturamento no ano", rodapé "Raio-X da Operação · manda SISTEMA". Prova: print do painel geral borrado no canto.

**Ângulo 2 · O sistema por dentro ("uma tela só")**
- **Headline:** O que roda antes de eu acordar
- **Texto principal:** Bastidor de quem opera e-commerce com IA: lembrete de Pix, carrinho abandonado, alerta de mídia e margem do dia chegam prontos de manhã. Montei o mapa desse sistema, módulo por módulo, num Raio-X gratuito para quem já tem operação. Manda SISTEMA.
- **Vídeo (40 s, gravação de tela com narração):**
  - 0 a 3 s: tela do chat da operação com a pergunta "como estamos hoje?" sendo digitada. Voz: "Toda manhã eu faço uma pergunta para o meu sistema."
  - 3 a 30 s: 3 rotinas em sequência, todas borradas e sem imagem de produto: (1) lembrete automático de Pix, (2) recuperação de carrinho, (3) painel de margem do dia. Uma frase por rotina, com o "antes": [DADO: tempo antes/depois de cada rotina].
  - 30 a 40 s: Bruno para a câmera: "O mapa completo está no Raio-X. Manda SISTEMA."
- **Estático (carrossel de 4 telas ou estático único):** "O que roda sozinho na minha operação" + lista de 5 rotinas em texto (sem print de produto) + CTA.

**Ângulo 3 · Contra-tese**
- **Headline:** Contratar não é escalar
- **Texto principal:** Toda vez que a operação cresce, a folha cresce junto e o dono continua aprovando tudo. Foi isso que eu parei de fazer no meu e-commerce. Mostro como organizei a gestão com IA num Raio-X gratuito, para quem já opera. Manda SISTEMA.
- **Vídeo (30 s):**
  - 0 a 3 s: "Contratar não é escalar." (Bruno, plano fechado.)
  - 3 a 15 s: "Mais pedido virava mais gente, mais gente virava mais coisa passando por mim. O gargalo era eu."
  - 15 a 25 s: tela borrada de tarefas por colaborador e ranking (sem nomes): "Hoje o sistema distribui, cobra e me mostra só o que precisa de decisão."
  - 25 a 30 s: "Manda SISTEMA que eu te mando o mapa."
- **Estático:** frase "Contratar não é escalar." em tipografia grande + assinatura "Bruno Ribeiro · opero e-commerce com 8 pessoas" + CTA.

**Ângulo 4 · Caixa vazando (dado real do Pix)**
- **Headline:** 32% dos Pix não eram pagos
- **Texto principal:** Bastidor da minha loja: 32% dos pedidos no Pix não eram pagos. Coloquei um lembrete automático e testei contra um grupo de controle: a taxa de pagamento subiu 5 pontos. Esse é um dos módulos do sistema que eu mostro no Raio-X da Operação. Manda SISTEMA.
- **Vídeo (40 s):**
  - 0 a 3 s: número na tela "32%" + Bruno: "Um terço dos Pix da minha loja não era pago."
  - 3 a 15 s: "Quem nunca comprou deixava o dobro de Pix sem pagar." (23% vs. 12%, dado real.)
  - 15 a 30 s: tela do lembrete (mensagem genérica, sem nome da loja nem do cliente) + gráfico controle vs. lembrete: "25,8% contra 20,6%. Amostra pequena, mas com grupo de controle."
  - 30 a 40 s: "Pix, carrinho, margem: está tudo no mapa do Raio-X. Manda SISTEMA."
- **Estático:** "32% dos Pix não eram pagos" + "+5 pontos com lembrete automático (teste com grupo de controle)" + CTA.
- Cuidado: não usar os R$ 534 mil nem os R$ 17 mil/mês no anúncio (o primeiro expõe tamanho de perda da loja; o segundo é estimativa de amostra pequena).

**Ângulo 5 · Operador, não guru (história do mercadinho)**
- **Headline:** Aprendi gestão num mercadinho
- **Texto principal:** Trabalhei desde novo no mercadinho do meu pai e vi ele fechar. Hoje opero e-commerce com 8 pessoas e IA na gestão, e ainda abro o painel todo dia de manhã. Não vendo fórmula: mostro como a minha operação roda. O mapa está no Raio-X. Manda SISTEMA.
- **Vídeo (45 s):**
  - 0 a 3 s: "Meu primeiro trabalho foi no balcão do mercadinho do meu pai."
  - 3 a 18 s: "Ele quebrou. Não por falta de cliente: faltava controle. Eu levei isso para todo negócio que montei."
  - 18 a 35 s: tela borrada do painel de margem: "Hoje a primeira coisa que eu vejo de manhã é a margem de ontem. R$ 30 milhões faturados em e-commerce e eu ainda opero." Corte rápido para o post fixado das plaquinhas como prova (sem bens ao fundo).
  - 35 a 45 s: "Montei um Raio-X com o mapa do meu sistema. Manda SISTEMA."
- **Estático:** foto do Bruno (escritório ou estoque sem produto visível) + frase "Aprendi gestão no balcão do mercadinho do meu pai" + CTA.
- Cuidado: "faltava controle" é a leitura do Bruno sobre a quebra; ele confirma se a frase é verdadeira antes de gravar [DADO].

### 2.5 Checklist de política e exposição (assinar antes de subir cada criativo)

**Política da Meta**
- [ ] Nenhuma promessa de renda, faturamento ou resultado para quem vê ("fature", "ganhe", "liberdade financeira", "7 dígitos", "renda extra").
- [ ] Números citados são só das operações do Bruno, escritos como **faturamento**, com prova guardada (post fixado das plaquinhas para R$ 30 mi; print do painel borrado para R$ 12 a 15 mi e para os dados de Pix).
- [ ] Sem atributos pessoais: nenhuma frase afirma ou insinua a situação financeira, profissional ou de saúde de quem lê ("você está perdendo...", "sua loja fatura...").
- [ ] Sem antes e depois de dinheiro, sem bens (casa, carros, 911, viagens) em imagem, texto ou fundo.
- [ ] Sem logo de terceiros (Yampi, Shopify, Meta, OpenAI) que sugira parceria ou endosso.
- [ ] Formulário (C2b) com política de privacidade publicada e sem pergunta de dado financeiro pessoal.
- [ ] Texto da página de destino e da mensagem coerente com o anúncio (o Raio-X é gratuito e entregue de fato).

**Exposição (regras do Bruno)**
- [ ] **Nome das lojas borrado** em toda tela: logo, nome, domínio, rodapé, nome de remetente, aba do navegador, URL do sistema.
- [ ] **Nenhum produto (bolsa, acessório, roupa) nas telas:** imagem de produto e nome de produto borrados ou dados sem imagem. Nenhuma marca de grife em lugar nenhum.
- [ ] Nenhum nome de cliente, telefone, e-mail, número de pedido, endereço ou CPF.
- [ ] Nenhum nome ou desempenho individual de funcionário (ranking e comissão só sem nomes).
- [ ] Nenhum menu ou menção a Creator OS ou gateway.
- [ ] Nenhuma tela fiscal (NF-e, multas, CNPJ, etiquetas com remetente).
- [ ] Nenhum ID, token, chave ou endereço do sistema visível.
- [ ] Revisão final por 2 pessoas (quem editou + Bruno ou esposa) quadro a quadro.

**Alavanca recomendada:** um **"modo apresentação"** no sistema que esconde imagens de produto, nomes de loja, clientes e equipe com um clique. Reduz o risco de vazamento a cada gravação e acelera o conteúdo orgânico também. Tarefa para o dev/implementador [DADO: quem faz e estimativa de horas].

---

## 3. Painel de métricas do funil (revisão toda segunda, 20 min)

Onde montar: **dezembro** em planilha alimentada pelo webhook do ManyChat + exportação do Gerenciador; **a partir de janeiro** numa tela do próprio sistema do Bruno (Supabase já recebe os leads pelo webhook). Fonte única de verdade para lead qualificado: as tags do ManyChat e as respostas do formulário, nunca o número reportado pela Meta.

| Etapa | Métrica semanal | Fonte | Meta |
|---|---|---|---|
| **Topo orgânico** | Alcance e visitas ao perfil | Insights do Instagram | [DADO: base atual; primeira semana vira linha de base] |
| | Comentários "SISTEMA" por post com CTA | ManyChat (`origem_comentario` por `post_origem`) | [HIPÓTESE: 20+ por post com CTA]; ajustar após 2 semanas |
| | Seguidores novos | Insights | Linha de base na semana 1 |
| **Anúncio** | Gasto por campanha vs. plano (R$ 1.050/semana) | Gerenciador de Anúncios | Desvio de no máximo 15% |
| | Custo por ThruPlay e retenção de 50% (C1) | Gerenciador | [HIPÓTESE: até R$ 0,30; 15%+ de retenção de 50%] |
| | CPL bruto (C2, C3) | Gerenciador + ManyChat | Só diagnóstico, sem meta |
| | **CPL qualificado** (C2 + C3) | Gasto (Gerenciador) ÷ tags `faixa_alvo` com `origem_anuncio` | **Até R$ 80** (corte); ideal abaixo de R$ 50 |
| | **% de qualificados** nos leads do anúncio | ManyChat / formulário | **30% ou mais** (corte); meta 40% |
| **Direct** | Entradas no fluxo, por origem | ManyChat | [HIPÓTESE: 100+ por semana com anúncio ligado] |
| | Conclusão das 2 perguntas | ManyChat (entraram vs. com `faixa_faturamento`) | [HIPÓTESE: 60% ou mais] |
| | % na faixa-alvo (todas as origens) | ManyChat | 40% ou mais; abaixo de 20% = conteúdo atraindo público errado |
| | % `sem_negocio` | ManyChat | [HIPÓTESE: abaixo de 15%]; acima disso, revisar ganchos |
| | Opt-in de WhatsApp ou e-mail | ManyChat (`optin_*`) | [HIPÓTESE: 50% ou mais] |
| **Raio-X** | Clique no link | ManyChat (`raiox_clicou`) + UTM na página | [HIPÓTESE: 60% ou mais] |
| | Autoavaliação concluída | Página do Raio-X (evento de envio) | [HIPÓTESE: 30% dos que clicaram] |
| **Lista** | Total da lista e lista qualificada (acumulado) | Supabase | Fim do teste: 45 a 90 qualificados vindos de anúncio [HIPÓTESE] + orgânico |
| | Entregabilidade do WhatsApp | Relatório da API de WhatsApp | Nas lojas, 20 a 45% das mensagens de marketing não são entregues: medir desde a semana 1 |
| | Opt-out | Supabase (`optout`) | Abaixo de 5% por envio [HIPÓTESE] |
| **Aplicação** | Aplicações por semana e origem ("como me conheceu" + UTM) | Página de aplicação | [HIPÓTESE: 5 a 8% dos leads qualificados aplicam] |
| | % de aplicações na faixa | Página de aplicação | 70% ou mais |
| **Rede quente** | Nomes abordados, respostas, indicações recebidas | Planilha de abordagem | 100 a 120 nomes até 12/dez; 1 pedido de indicação por conversa |
| **Diagnóstico** | Vendas (R$ 2.000) e vagas restantes | [DADO: ferramenta de cobrança] + agenda | **5 a 6 em dezembro** (teto) |
| | Checklist de dados entregue antes da call 1 | Pasta do cliente | 100% (sem dados, sem call) |
| | Comparecimento nas 2 calls | Agenda | 90% ou mais |
| | Pedidos de garantia | Registro manual | Zero; 1 já pede revisão do formato |
| | Depoimentos autorizados | Registro manual | 3 ou mais até 19/dez |
| **Turma fundadora** | Interessados (`prioridade_turma`), calls do closer, pagantes | ManyChat + agenda do closer + cobrança | **4 ou mais pagantes em 16/jan** (regra de decisão) |
| | Conversão devolutiva → turma ou implementação | Registro das devolutivas | 30 a 40% (taxa da esteira, [HIPÓTESE]) |
| **Horas do Bruno** | Horas na marca pessoal na semana | Registro do Bruno | Até 7 a 8 h/semana (30 h/mês) |

**Checkpoints com decisão:** 14/dez (primeira leitura de CPL qualificado), 21/dez (manter, cortar ou trocar ângulos), 6/jan (fecha o teste e decide a fase 2: aula ao vivo e retargeting para a turma fundadora).

---

## 4. Dados que faltam

1. [DADO: número de WhatsApp separado para a marca pessoal]
2. [DADO: quem opera os anúncios e se a conta de anúncios e o pixel da marca pessoal já existem, separados das lojas]
3. [DADO: quem conecta o webhook ManyChat → Supabase → WhatsApp até 5/dez]
4. [DADO: tempo antes/depois de 3 rotinas do sistema, para o ângulo 2]
5. Corte da faixa-alvo confirmado: R$ 50 mil/mês (19/nov)
6. [DADO: ferramenta de cobrança do diagnóstico, para o painel]
7. [DADO: custo por mensagem de marketing no WhatsApp Cloud API]
8. [DADO: alcance e visitas ao perfil (Insights) para a linha de base]

## 5. Próximos passos

| # | O quê | Quem | Até |
|---|---|---|---|
| 1 | Responder os dados 1, 2, 3 e 5 | Bruno | 25/nov |
| 2 | Assinar ManyChat Pro (confirmar preço no checkout), conectar o @brunorib3 e montar o fluxo da seção 1 | `infoprodutor` + operador [DADO] | 2/dez |
| 3 | Criar conta de anúncios, página e pixel da marca pessoal; publicar política de privacidade | operador de mídia [DADO] | 2/dez |
| 4 | Conectar webhook ao Supabase e o modelo de WhatsApp de 72 h no número da marca pessoal | dev/implementador [DADO] | 5/dez |
| 5 | Gravar os 5 ângulos em lote (10 vídeos curtos + 5 estáticos), com telas no modo borrado | Bruno grava (sessão de 2 h); esposa capta; edição [DADO] | 5/dez |
| 6 | Revisar cada criativo com o checklist 2.5 | `marketing` + Bruno | 6/dez |
| 7 | Testar as 8 rotas do fluxo (seção 1.8) | `marketing` | 5/dez |
| 8 | Ligar C1, C2a, C3 (e C2b se a integração estiver pronta) | operador de mídia | 8/dez |
| 9 | Montar a planilha do painel e preencher a linha de base | `marketing` | 8/dez |
| 10 | Checkpoints de corte e escala | `marketing` + Bruno | 14/dez, 21/dez, 6/jan |
| 11 | Desligar o convite de diagnóstico (interruptor de vagas) ao fechar o teto ou em 20/dez | Bruno | quando o teto fechar |

## Fontes do custo e das regras do ManyChat
- [ManyChat pricing 2026: plans, active contacts, and hidden costs (eesel.ai)](https://www.eesel.ai/blog/manychat-pricing)
- [ManyChat Pricing 2026: Free, Pro from $15, and Why Your Bill Grows With Your Reach (chatarmin)](https://chatarmin.com/en/blog/manychat-pricing)
- [ManyChat Help Center: janela de 7 dias e tag Human Agent](https://help.manychat.com/hc/en-us/articles/14281199732892)
- [ManyChat Support: Human Agent tag](https://support.manychat.com/support/solutions/articles/36000301951)
- [Instagram 24-hour messaging window explained (Planoly)](https://www.planoly.com/blog/instagram-24-hour-messaging-window-explained)
- [Instagram DM automation rules (ManyChat blog)](https://manychat.com/blog/instagram-dm-automation-rules/)
