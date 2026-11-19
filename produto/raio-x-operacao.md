# Raio-X da Operação + Cardápio de agentes

> Autor: infoprodutor · 19/nov/2026 · Base: `bruno.md` (Sistemas e automações, Decisões do Funil V2, NÃO publicar), `produto/funil-v2.md`, `produto/analise-funil/ecommerce.md` e `analise-funil/conteudo.md` (seção 3).
> **Parte A** é material público (isca do "comenta SISTEMA"). **Parte B** é entregável do diagnóstico (cliente pagante).
> Regras aplicadas: sem nome das lojas, sem Creator OS, sem gateway, sem foto ou nome de produto, sem situação fiscal/legal, sem nome de pessoa da equipe. Números só de `bruno.md`. `[DADO: ...]` = falta o Bruno passar.

---

# PARTE A · RAIO-X DA OPERAÇÃO (isca gratuita)

## A.0 Formato e entrega

| Item | Recomendação |
|---|---|
| Formato | 1 página web (ou PDF de 4 páginas) com o mapa + 1 planilha Google com a autoavaliação e a calculadora (o lead faz uma cópia) |
| Entrega | Direct automático depois do "SISTEMA" (2 perguntas: vende online? faixa de faturamento?) manda o link. Captura de e-mail/WhatsApp antes do link (é isso que forma a lista) |
| Tempo para usar | ~10 minutos |
| Quem consegue usar | Só quem já opera: sem faturamento, equipe e números da loja, a planilha não fecha. Esse é o filtro |
| Manutenção | Zero. Gravar 1 vez um vídeo de 3 a 5 min do Bruno passando pelo mapa (tela com dados sem imagem de produto e sem nome de loja) |
| Como medir a isca | % de quem recebe e preenche (pedir o resultado por formulário no final: "me manda sua faixa"), % na faixa 3, % que aplica para o diagnóstico, custo por lead qualificado (corte do anúncio: acima de R$ 80 ou menos de 30% qualificados) |

**Abertura da página (texto sugerido):**
> No último ano faturei R$ 12 a 15 milhões com e-commerce, com uma equipe de 8 funcionários. Isso só fecha porque a gestão da minha operação está num sistema só, com automações e agentes de IA fazendo o trabalho repetitivo. Este Raio-X tem 3 partes: o mapa desse sistema, 12 perguntas para você ver quanto da sua operação ainda depende de você, e uma calculadora para comparar a sua equipe e a sua margem com a minha. Leva 10 minutos. Não é para quem está começando: você vai precisar dos números da sua loja.

(Sempre "faturamento", nunca "lucro" em reais.)

---

## A.1 Parte 1 · O mapa do sistema que centraliza a gestão

**Ideia central:** todas as áreas da operação alimentam um banco de dados único. Em cima dele rodam automações (que executam sozinhas) e agentes de IA (que analisam e propõem, mas não executam). O dono conversa com tudo isso por um chat.

```
                    ┌──────────────────────────────────────┐
                    │   CHAT DA OPERAÇÃO (o "COO" de IA)   │
                    │  texto e voz: "como estamos hoje?"   │
                    └──────────────────┬───────────────────┘
                                       │
   ┌───────────────────────────────────┴───────────────────────────────────┐
   │                 BASE ÚNICA DE DADOS DA OPERAÇÃO                       │
   │  plataforma da loja · frete · Meta e Google Ads · WhatsApp oficial    │
   └──┬─────────┬──────────┬──────────┬──────────┬──────────┬──────────┬───┘
      │         │          │          │          │          │          │
  VENDAS   WHATSAPP   LOGÍSTICA  PÓS-VENDA  FINANCEIRO  MARKETING   GESTÃO
           AUTOMÁTICO                       E MARGEM               DA EQUIPE
      └─────────┴──────────┴────┬─────┴──────────┴──────────┴──────────┘
                                │
              AUDITORIAS POR IA  +  AGENTES ESPECIALISTAS (só leitura)
```

### As áreas e o que cada uma faz

| Área | O que roda hoje na minha operação | Que trabalho manual sai da mão do dono/equipe |
|---|---|---|
| **Chat da operação** | Um "COO" de IA, por texto ou voz, que consulta faturamento, lucro e pedidos em tempo real. Minha rotina: toda manhã pergunto "como estamos hoje?" | Abrir 5 painéis e pedir relatório para alguém |
| **Vendas** | Filas de oportunidade para as vendedoras; se ninguém age, o sistema dispara a mensagem sozinho; ranking e cálculo de comissão | Distribuir lead na mão, cobrar vendedora, calcular comissão em planilha |
| **WhatsApp automático** | Lembrete de Pix não pago, carrinho abandonado, cashback vencendo, convite para a 2ª compra, rastreio, resposta automática a "cadê meu pedido", freio anti-spam e **grupo de controle** (uma parte dos clientes não recebe a mensagem, para medir o efeito real) | Atendente respondendo a mesma pergunta 100 vezes por dia; disparo sem saber se funciona |
| **Logística** | Etiquetas geradas automaticamente com regras por estado e transportadora, logística reversa, rastreio atualizado na loja | Escolher transportadora pedido a pedido, digitar código de rastreio |
| **Pós-venda** | Devoluções, vale-troca, reembolsos, chargebacks e e-mails respondidos com base de conhecimento | Triagem manual de troca e devolução, resposta caso a caso |
| **Financeiro e margem** | Lucro real por pedido: custo de produto, frete, juros, impostos, reembolsos e chargebacks entram na conta | Fechar o mês para descobrir se sobrou dinheiro |
| **Dashboard** | Ticket médio, LTV, recompra, MER (faturamento ÷ mídia), conversão | Montar relatório toda semana |
| **Marketing** | Página VIP, página da bio, páginas de SEO, API de Conversões da Meta (o anúncio aprende com a venda real, não só com o pixel) | Depender de agência para página simples; anúncio otimizando com dado errado |
| **Gestão da equipe** | Acesso por cargo (dono, vendas, logística, pós-venda, gerente), tarefas por colaborador, ranking de bônus | Dono como central de tarefas e cobrança |
| **Auditorias por IA** | A IA cruza dados de fontes diferentes e acha dinheiro perdido: cobranças indevidas, cashback concedido em dobro, erro de etiqueta | Conferência manual que ninguém faz |
| **Agentes especialistas** | Crescimento, copy, mídia paga, pós-venda, segurança, web design, UX e auditor de atendimento. **Só leem e propõem; não executam nada sozinhos** | Dono como único analista de tudo |
| **Clonagem** | O sistema foi replicado para minha segunda operação em poucos dias: cadastro de produto por foto com IA, campanhas de Google e Meta automáticas | Montar estrutura do zero a cada nova loja |

### O que o sistema já mostrou (números da minha loja principal, sem promessa para a sua)
- **Pix:** 32% dos pedidos no Pix não eram pagos. Quem nunca comprou deixa 2x mais Pix sem pagar (23% vs. 12%). O lembrete automático subiu o pagamento em 5 pontos contra o grupo de controle (25,8% vs. 20,6%), cerca de R$ 17 mil por mês a mais (amostra ainda pequena).
- **Carrinho abandonado:** 12,5% recuperados em 3 dias; R$ 18 mil em 11 dias com R$ 140 de custo em mensagens.
- **Recompra:** só 19,5% voltam em 90 dias. É o próximo buraco que estou atacando.
- **WhatsApp:** de 20% a 45% das mensagens de marketing não são entregues. Disparo sem medição engana.
- **Regra de mídia:** campanha que vende menos de R$ 3,50 para cada R$ 1 de mídia é pausada.

### O que não deu certo (também entra no material, gera confiança)
- O atendimento automático foi auditado e tirou nota 5 de 10. Está sendo corrigido.
- Um resumo diário automático ("morning brief") que eu achava que ia usar, não usei: pouco útil. O chat sob demanda funcionou melhor.
- Conteúdo gerado 100% por IA eu reprovei. IA propõe; gente aprova.

### Regras de tela para o vídeo e os prints do mapa
Borrar ou trocar por dado sem imagem: nome da loja, logo, domínio, nome de cliente, nome de funcionário, foto ou nome de produto, endereço do CD, valores em reais não liberados. Mostrar só percentuais e os números listados acima.

---

## A.2 Parte 2 · Autoavaliação: quanto da sua operação depende de você?

**Instrução ao lead:** responda pensando nos últimos 30 dias. Cada pergunta vale de 0 a 3 pontos. Seja honesto: ninguém vê sua resposta além de você.

Escala padrão: **0** = não / não sei · **1** = só com esforço (pedindo para alguém ou montando planilha) · **2** = sim, mas com atraso ou sem regularidade · **3** = sim, automático e em tempo real

| # | Área | Pergunta |
|---|---|---|
| 1 | Margem | Você sabe a **margem de contribuição de ontem** (depois de produto, frete, taxas, imposto e mídia) sem pedir para ninguém? |
| 2 | Margem | Você tem o **custo atualizado de cada SKU** e sabe quais produtos ou campanhas dão prejuízo? |
| 3 | Dados | Faturamento, mídia, estoque e financeiro estão **no mesmo lugar**, ou você junta de 4 painéis diferentes? (0 = 4 ou mais lugares; 3 = um lugar só) |
| 4 | Mídia | Você tem uma **regra escrita de corte** de campanha (ex.: abaixo de X de venda por R$ 1 de mídia, pausa) e ela é seguida mesmo quando você não olha? |
| 5 | Caixa | Você sabe **quanto de Pix gerado não é pago** por mês, em R$, e existe lembrete automático? |
| 6 | Caixa | O **carrinho abandonado** é recuperado de forma automática e você sabe quanto ele recupera por mês? |
| 7 | Atendimento | Perguntas repetidas ("cadê meu pedido?", troca, prazo) são **respondidas sem um humano**? |
| 8 | Pós-venda | Troca, devolução, reembolso e chargeback seguem um **fluxo com regra**, sem passar por você? |
| 9 | Recompra | Você sabe **quantos clientes voltam a comprar em 90 dias** e existe uma ação automática para a 2ª compra? |
| 10 | Medição | Quando você liga uma automação ou disparo, você **mede contra um grupo que não recebeu** (ou um antes x depois registrado)? |
| 11 | Equipe | Cada pessoa da equipe tem **tarefas e metas visíveis** num sistema, e a comissão ou bônus é calculado sozinho? |
| 12 | Dono | Se você ficar **7 dias sem abrir nenhum painel nem responder a equipe**, a operação vende e entrega normalmente? |

**Pontuação máxima: 36.**

### As 3 faixas

| Faixa | Pontos | Nome | Diagnóstico curto | Próximo passo |
|---|---|---|---|---|
| 1 | 0 a 14 | **Operação dependente do dono** | Você é o sistema. A informação mora na sua cabeça e em painéis soltos, e a margem só aparece no fim do mês (quando aparece). Automatizar agora seria automatizar o escuro. | Antes de qualquer IA, monte a base: (1) planilha de custo por SKU; (2) uma conta de margem de contribuição semanal com produto, frete, taxa, imposto e mídia; (3) uma regra escrita de corte de campanha. Refaça este Raio-X em 30 dias. |
| 2 | 15 a 26 | **Operação em transição** | Você já tem parte dos números e alguma automação, mas as peças não conversam e muita coisa ainda passa por você. O dinheiro vaza nas frestas: Pix não pago, carrinho, recompra, disparo que ninguém mede. | Pegue as perguntas em que tirou 0 ou 1 e ataque primeiro as de **caixa** (5, 6 e 9): são as que devolvem dinheiro mais rápido. Ligue a medição (pergunta 10) em tudo que já roda. Quando subir para 27+, você está pronto para o próximo passo. |
| 3 | 27 a 36 | **Operação pronta para sistematizar** | Você tem os dados e a disciplina. O limite agora não é informação, é alavanca: juntar tudo num lugar só, tirar você das decisões repetitivas e colocar agentes de IA para analisar e propor. É exatamente o ponto em que eu estava antes de montar o meu sistema. | **Aplique para o Diagnóstico de Margem e Gestão com IA.** Em 2 calls eu olho os seus números com você e você sai com o plano de 90 dias e o primeiro agente pronto. São 5 a 6 vagas em dezembro. [link da aplicação] |

**Nota de produto:** a faixa 3 convida porque o diagnóstico exige dados (pedidos de 90 dias, custo por SKU, Meta Ads, meio de pagamento). Quem não tem esses dados não aproveita as 2 calls. A faixa 2 recebe o convite de forma leve no e-mail de follow-up 7 dias depois ("se você já tem os números, aplique"); a faixa 1 recebe conteúdo da lista.

**Fórmula na planilha:** `=SOMA(C2:C13)` e faixa com `=SE(D1>=27;"Faixa 3";SE(D1>=15;"Faixa 2";"Faixa 1"))`. Destacar em vermelho as perguntas com 0 ou 1 ("seus 3 maiores buracos").

---

## A.3 Parte 3 · Calculadora de faturamento por pessoa e margem

### Campos que o lead preenche
| Célula | Campo | Como preencher |
|---|---|---|
| B2 | Faturamento dos últimos 12 meses (R$) | Faturamento bruto pago, da plataforma |
| B3 | Pessoas na operação | Todo mundo que trabalha na operação em tempo integral, **incluindo você, sócios e família**. Meio período conta 0,5 |
| B4 | Terceirizados fixos (agência, freelancer recorrente) | Só para registro; não entra na conta principal |
| B5 | Lucro líquido dos últimos 12 meses (R$) | O que sobrou depois de tudo (produto, frete, mídia, taxas, impostos, salários, aluguel). Se não sabe, deixe em branco: isso já é um resultado |

### O que a planilha calcula
| Célula | Resultado | Fórmula |
|---|---|---|
| B7 | Faturamento por pessoa | `=B2/B3` |
| B8 | Margem líquida | `=SE(B5="";"Você não sabe sua margem. Comece por aqui.";B5/B2)` |
| B9 | Pessoas que a referência usaria para o seu faturamento | `=B2/1350000` (meio da faixa de R$ 1,2 a 1,5 mi) |
| B10 | Diferença de margem até 20% (em R$ por ano) | `=SE(B8<0,2;(0,2-B8)*B2;0)` |

### A referência do Bruno (texto que aparece ao lado)
> **Minha referência:** R$ 12 a 15 milhões de faturamento no último ano, com 8 funcionários, eu e minha esposa. Dá cerca de **R$ 1,2 a 1,5 milhão por pessoa**. Margem líquida entre **20% e 25%**.
>
> **Isto é referência, não promessa nem meta para você.** Meu modelo tem particularidades: estoque próprio, venda só no site próprio (sem marketplace), uma categoria de produto, ticket médio de R$ 365 a 405 e logística feita pela equipe. Outra categoria, outro ticket, marketplace ou produção própria mudam os dois números. Use a comparação para fazer uma pergunta, não para tirar uma conclusão: "o que na minha operação ainda é feito por gente e poderia ser feito por sistema?"

### Como ler o resultado
| Se... | Leitura |
|---|---|
| Faturamento por pessoa bem abaixo da referência | Pode ser modelo (produto artesanal, B2B, ticket baixo) ou pode ser trabalho manual repetitivo. Volte às perguntas 7, 8 e 11 da autoavaliação |
| Margem em branco | A primeira tarefa é saber a margem. Sem ela, qualquer escala é aposta |
| Margem abaixo de 20% | A linha B10 mostra quanto dinheiro está em jogo se você chegasse à minha referência. Não é ganho garantido: é o tamanho do problema que vale investigar |
| Os dois perto ou acima da referência | Sua operação já é enxuta. O próximo ganho vem de juntar dados e tirar você das decisões (faixa 3 da autoavaliação) |

**Fecho da página (texto sugerido):**
> Fez as contas e quer que eu olhe com você? O Diagnóstico de Margem e Gestão com IA tem 5 a 6 vagas em dezembro. [link da aplicação]

---

# PARTE B · CARDÁPIO DE TEMPLATES DE AGENTES (entregável do diagnóstico)

## B.0 Regras do cardápio
- O cliente do diagnóstico escolhe **1 agente** (entregue configurado com as informações da loja dele). Os outros 4 vão como **bônus em versão template** (ele mesmo configura com o guia).
- **Sem integração.** O agente trabalha com o que o cliente cola ou exporta (planilha, CSV, texto). Ligar à plataforma, ao WhatsApp API ou ao Meta é **implementação** (vendida à parte).
- Formato: projeto no Claude ou GPT personalizado no ChatGPT (o cliente usa a conta dele) + planilha-modelo quando houver. Instruções do agente, base de conhecimento e guia de uso de 1 página.
- Todos os agentes **leem e propõem; não executam**. Mesma regra dos agentes especialistas da operação do Bruno.
- **Nenhum agente recebe dado pessoal de cliente nem dado de cartão** (ver `checklist-dados.md`).
- Toda entrega tem **baseline no dia 0 e medição no dia 30**, com número do próprio cliente. Sem baseline, não há case.
- Tempo de configuração do agente escolhido: 2 a 4 h do implementador (estimativa de `analise-funil/ecommerce.md`).

## B.1 Os 5 agentes

### 1. Analista de Margem
| Campo | Conteúdo |
|---|---|
| Inspirado em | Módulo financeiro do sistema do Bruno (lucro real por pedido) e chat da operação |
| Problema | O dono olha faturamento e ROAS, não margem. Escala vendendo e não sobra dinheiro |
| O que faz | Lê o export de pedidos + a planilha de custo por SKU + o gasto de mídia e devolve: margem de contribuição por dia, por SKU e por faixa de frete; os 10 SKUs que mais dão e mais tiram dinheiro; impacto de cupom e frete grátis; 3 ações sugeridas. Responde perguntas tipo "como foi a semana?" com número |
| O cliente precisa ter | Export de pedidos (semanal), custo por SKU, % de imposto, taxas do meio de pagamento, custo médio de frete, gasto de mídia do período |
| Medir em 30 dias | **Resultado:** margem de contribuição % conhecida toda semana (dia 0 vs. dia 30); nº de SKUs ou campanhas negativas cortadas ou reprecificadas. **Uso:** dono roda a análise pelo menos 1x por semana |

### 2. Leitor Diário de Anúncios
| Campo | Conteúdo |
|---|---|
| Inspirado em | Agente especialista de mídia paga + regra de corte do Bruno (pausar abaixo de R$ 3,50 de venda por R$ 1 de mídia) |
| Problema | O dono passa horas no gerenciador, decide no feeling e demora para cortar o que não vende |
| O que faz | Lê o export diário do Meta Ads (nível anúncio) e devolve em 1 tela: o que pausar, o que escalar e o que observar, com base nas regras de corte que o cliente define no setup (teto de CPA, retorno mínimo, frequência). Aponta criativo em fadiga e compara com a semana anterior |
| O cliente precisa ter | Acesso ao gerenciador para exportar; regra de corte definida (o agente ajuda a calcular a partir da margem); se possível, MER do período (faturamento total ÷ mídia total) |
| Medir em 30 dias | **Resultado:** horas por semana do dono no gerenciador (antes x depois); MER do mês vs. mês anterior; tempo entre o anúncio cair abaixo da regra e ser pausado. **Uso:** leitura em pelo menos 5 dias por semana |

### 3. Roteirista de Recuperação de Caixa (Pix, carrinho e 2ª compra)
| Campo | Conteúdo |
|---|---|
| Inspirado em | WhatsApp automático do Bruno: lembrete de Pix, carrinho abandonado, cashback, 2ª compra, com grupo de controle |
| Problema | Dinheiro de pedido já gerado que não vira receita (Pix não pago, carrinho) e cliente que não volta |
| O que faz | Escreve as sequências de mensagem (tempo de envio, texto, variação para primeira compra x cliente recorrente) prontas para colar na ferramenta que o cliente já usa (recurso nativo da plataforma ou app de WhatsApp/e-mail). Monta o plano de teste com grupo de controle e a planilha de medição. Lê o resultado semanal e sugere ajustes |
| O cliente precisa ter | Ferramenta de disparo já contratada (nativa ou app), números atuais de Pix gerado x pago e de carrinho, política de cupom/cashback. WhatsApp com opt-in e, de preferência, API oficial |
| Medir em 30 dias | **Resultado:** taxa de pagamento de Pix e % de carrinho recuperado (antes x depois, ou contra o grupo de controle); R$ recuperado no mês. **Uso:** sequências ativas e grupo de controle ligado |

### 4. Atendente Nível 1 (copiloto do atendimento e pós-venda)
| Campo | Conteúdo |
|---|---|
| Inspirado em | Resposta a "cadê meu pedido", e-mails de pós-venda com base de conhecimento e o auditor de atendimento do Bruno |
| Problema | A equipe responde as mesmas perguntas o dia inteiro; tempo de resposta alto derruba conversão e gera reclamação e chargeback |
| O que faz | Com a base de conhecimento da loja (políticas, prazos, trocas, medidas, tom de voz), sugere a resposta pronta para a atendente colar. Classifica o motivo do contato e, 1x por semana, lê uma amostra de conversas **anonimizadas** e dá nota ao atendimento com 3 melhorias |
| O cliente precisa ter | Políticas escritas (troca, devolução, prazo, frete), as 20 perguntas mais comuns com a resposta ideal, tom de voz; volume de atendimento por dia |
| Medir em 30 dias | **Resultado:** tempo médio de primeira resposta; % de respostas usadas sem edição; nota da auditoria semanal (dia 0 vs. dia 30). **Uso:** % das conversas em que a atendente usou o agente |
| Aviso honesto | Na operação do Bruno o atendimento automático tirou 5/10 na primeira auditoria. Por isso o template começa como copiloto (humano envia), não como robô |

### 5. Diretor de Criativos
| Campo | Conteúdo |
|---|---|
| Inspirado em | Agentes especialistas de copy e crescimento do Bruno; força declarada dele em criativos virais |
| Problema | Fadiga de criativo, pouco volume de teste, briefing improvisado para creators e UGC, CAC subindo |
| O que faz | A partir dos anúncios campeões (export do Meta + descrição do criativo), identifica o padrão que vende (gancho, ângulo, formato) e gera toda semana: 10 ganchos, 3 roteiros de vídeo curto e 2 briefings prontos para creator/UGC. Mantém um registro de testes (o que foi testado, o que venceu) |
| O cliente precisa ter | Os 5 a 10 melhores e os 5 piores anúncios dos últimos 90 dias com métricas, público, produtos campeões e promessa da marca |
| Medir em 30 dias | **Resultado:** criativos novos testados por semana (antes x depois); % de vencedores; custo por compra dos criativos novos vs. média. **Uso:** briefings gerados por semana |
| Aviso honesto | Conteúdo 100% gerado por IA foi reprovado na operação do Bruno. O agente propõe; a pessoa grava e aprova |

## B.2 Qual agente recomendar (regra para a devolutiva)

| Sinal no diagnóstico | Agente configurado |
|---|---|
| Não sabe a margem ou margem abaixo de 20% | 1. Analista de Margem (é pré-requisito dos outros) |
| Margem conhecida, mídia acima de ~25% da receita ou dono preso no gerenciador | 2. Leitor Diário de Anúncios |
| Pix não pago ou carrinho sem recuperação medida | 3. Roteirista de Recuperação de Caixa |
| Equipe de atendimento sobrecarregada, reclamação alta | 4. Atendente Nível 1 |
| CAC subindo com margem sob controle | 5. Diretor de Criativos |

## B.3 Pacote de cada template (o que o implementador empacota em dezembro)
1. Instruções do agente (prompt de sistema), com campos `[preencher]` marcados.
2. Base de conhecimento modelo (o que o cliente precisa colar).
3. Planilha-modelo (agentes 1, 2 e 3).
4. Guia de 1 página: como configurar em 15 minutos, como usar no dia a dia, o que não fazer (dados pessoais, cartão, credenciais).
5. Vídeo de 3 a 5 min por agente, gravado 1 vez pelo implementador ou pelo Bruno.
6. Ficha de medição: baseline do dia 0 e medição do dia 30 (vira o depoimento autorizado).

**Pendências:** `[DADO: confirmar se o Bruno autoriza citar a nota 5/10 do atendimento e o resultado do lembrete de Pix no material público]` · `[DADO: link da página de aplicação]` · `[DADO: ferramenta do direct automático]`.

---

## Próximos passos

| # | O quê | Quem | Quando |
|---|---|---|---|
| 1 | Validar o mapa (A.1): conferir se cada área está correta e se pode mostrar os números de Pix, carrinho e atendimento | Bruno (20 min) | até 25/nov |
| 2 | Testar a autoavaliação com 3 donos da rede quente e ajustar os cortes das faixas (14/26) se todos caírem na mesma | Bruno envia; infoprodutor ajusta | até 28/nov |
| 3 | Montar a planilha Google (autoavaliação + calculadora) e a página do Raio-X | infoprodutor + marketing | até 2/dez |
| 4 | Gravar o vídeo de 3 a 5 min do mapa com telas borradas (sem produto, sem nome de loja) | Bruno; esposa capta | até 5/dez |
| 5 | Configurar o direct "SISTEMA" com captura de contato e envio do Raio-X | marketing | até 7/dez |
| 6 | Empacotar os 5 templates (B.3), a partir dos agentes que já rodam | implementador (assim que contratado); até lá, infoprodutor redige as instruções | instruções até 10/dez; pacote completo até 6/jan |
| 7 | Raio-X no ar + medição semanal (preenchimento, faixa 3, aplicações, custo por lead qualificado) | marketing | a partir de 8/dez |
