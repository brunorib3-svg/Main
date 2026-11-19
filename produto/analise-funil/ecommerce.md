# Análise crítica do funil: ângulo ENTREGA E RESULTADO DO CLIENTE

> Autor: especialista-ecommerce · Data: 19/nov/2026 · Base: `.claude/context/bruno.md` (decisões de 19/nov) e `produto/esteira-v1.md`
> Convenções: **[HIPÓTESE]** = estimativa sem dado próprio, a validar. **[DADO: ...]** = só o Bruno tem.
> Regra pública: nada de nome de empresa, Creator OS ou gateway em conteúdo/material de venda. Aqui é documento interno, mas os exemplos já estão escritos de forma publicável ("minha loja", "minha operação").

---

## 0. Veredito

**Aprovar o Diagnóstico como primeiro produto, mas com três correções antes de vender:**

1. **A dor certa não é "IA", é margem, tempo do dono e CAC.** IA é o meio. Quem fatura R$ 100 mil+/mês não acorda pensando em "IA na gestão"; acorda pensando "vendi muito e não sobrou dinheiro", "tudo passa por mim" e "o criativo parou de performar". A promessa precisa nomear essas dores e entregar um número da operação dele (margem de contribuição real, horas manuais, vazamentos), não um mapa genérico de automações.
2. **"Primeiro agente já adaptado" em ~3 h do Bruno só é viável se for um agente padronizado, sem integração.** Agente integrado (lê pedidos, responde no WhatsApp, puxa dados do Meta) é implementação, leva de 8 a 40 h de implementador e não cabe em R$ 2.000. Definir isso por escrito na oferta, senão o diagnóstico vira implementação de graça.
3. **O segundo público (capital sem nada online) não entra na V1.** O que ele precisa (produto, fornecedor, marca, loja, tráfego) não é o que o Bruno vende hoje e carrega risco alto de promessa. A exceção viável é o **empresário que já tem negócio físico rodando** (produto, fornecedor e caixa) e quer levar para o digital, com um produto separado e filtro rígido.

---

## 1. O que o dono de e-commerce de R$ 100 mil+/mês precisa resolver primeiro

### 1.1 As 5 dores mais prováveis (por ordem de frequência e impacto, [HIPÓTESE] a confirmar nos diagnósticos)

| # | Dor | Como aparece na operação | Por que é prioridade | O diagnóstico atual cobre? |
|---|---|---|---|---|
| 1 | **Margem invisível** | Olha faturamento e ROAS, não margem de contribuição por pedido/SKU/canal. Frete subsidiado, taxa de gateway/parcelamento, cupom, devolução, imposto e ads não aparecem na mesma conta. | É onde o dinheiro some. Muita loja escala ROAS "bom" com margem de contribuição negativa. | Parcialmente (fala em "painel de margem" só na mentoria) |
| 2 | **Dono como gargalo** | Aprovação de criativo, compra, resposta a cliente, conferência de ads, tudo passa pelo dono. Sem rotina de dados: decide no feeling. | É a dor que o Bruno resolve na própria operação (8 pessoas, gestão praticamente solo). É a que mais vende. | Sim, é o núcleo |
| 3 | **Atendimento e pós-venda no WhatsApp/DM** | "Cadê meu pedido?" (WISMO), troca, dúvida de tamanho/medida, cupom. Tempo de resposta alto derruba conversão e gera chargeback/reclamação. | Volume alto, repetitivo, mensurável: o caso de IA com resultado mais rápido. | Sim |
| 4 | **Criativo e CAC** | Fadiga de criativo, pouco volume de teste, briefing improvisado para creators/UGC, CAC subindo. | É a força declarada do Bruno e o maior custo variável depois do CMV. | Sim, mas como "automação", não como processo de teste |
| 5 | **Caixa: estoque e pagamentos** | Ruptura nos campeões e capital parado no encalhe; taxa de aprovação de cartão baixa, Pix gerado e não pago, boleto que não compensa, chargeback sem gestão. | Dinheiro já conquistado (pedido gerado) que não vira receita. Pix não pago e cartão recusado costumam ser vazamento silencioso. | Não aparece. **Lacuna.** |

Fora do top 5, mas comum: dados espalhados (plataforma, ERP, planilha, Meta, gateway sem fonte única), equipe sem processo/SOP, frete caro e sem regra de frete grátis com base em margem.

**Leitura franca:** a dor nº 1 (margem) é **pré-requisito** das outras. Sem dado confiável de margem, o "plano de 90 dias" prioriza automações no escuro. O diagnóstico deve começar pelos números, não pelos processos.

### 1.2 O que dá resultado visível em 30 dias

| Ação | Esforço | Resultado mensurável em 30 dias | Replicável? |
|---|---|---|---|
| **Painel de margem de contribuição diário** (pedidos da plataforma + gasto do Meta + frete + taxa de pagamento + CMV por SKU) em planilha/Looker Studio, com relatório automático no WhatsApp do dono | Médio (8 a 16 h de implementador) | Margem de contribuição por dia/SKU/campanha visível; SKUs e campanhas que dão prejuízo identificados | Sim, com conectores por plataforma |
| **Recuperação de Pix não pago e carrinho abandonado** via WhatsApp (a maioria das plataformas tem nativo ou app; IA personaliza a mensagem) | Baixo | % de Pix/carrinho recuperado (antes x depois) | Sim |
| **Agente de atendimento nível 1** (rastreio, troca, política, tamanho) com base de conhecimento da loja e passagem para humano | Médio | % de conversas resolvidas sem humano; tempo de primeira resposta | Base sim, conteúdo sob medida |
| **Relatório diário de ads com alerta** (CPA acima do teto, criativo em fadiga, frequência alta) | Baixo a médio | Tempo do dono olhando gerenciador; decisões de corte mais rápidas | Sim |
| **Esteira de briefing de criativo/UGC** (agente gera variações de gancho, roteiro e briefing a partir dos campeões) | Baixo | Nº de criativos testados por semana | Sim |
| **Alerta de ruptura/cobertura de estoque** (dias de cobertura por SKU com base na venda média) | Médio, depende do ERP | Rupturas nos campeões evitadas | Sim, se houver ERP/planilha de estoque |
| **Leitura da taxa de aprovação e do mix de pagamento** (cartão aprovado/recusado, Pix gerado/pago, chargeback) | Baixo (só análise) | Vazamento em R$ dimensionado | Análise sim; solução depende do gateway do cliente |

> Para quem tem pouca base técnica, as três que mais "aparecem" para o dono em 30 dias são: painel de margem, recuperação de Pix/carrinho e relatório diário de ads. São as que eu colocaria como **cardápio padrão do plano de 90 dias**.

### 1.3 Pagamentos: o que pode e o que não pode entrar no diagnóstico
- **Pode:** medir taxa de aprovação, conversão de Pix, chargeback, custo efetivo de pagamento (MDR + antecipação + parcelamento sem juros) e recomendar ações: ajustar regras de antifraude, retentativa, Pix com desconto, multiadquirência **via o gateway/orquestrador que o cliente já usa ou contrata no mercado**.
- **Não pode:** oferecer ou insinuar a infraestrutura de pagamentos do Bruno (decisão de 19/nov), prometer taxa ou aprovação. Nenhum agente pode tocar dado de cartão (escopo PCI DSS): automação de pagamento só via link/checkout do provedor, nunca coleta de cartão em WhatsApp ou planilha.

---

## 2. O entregável cabe em ~3 h do Bruno + implementador?

### 2.1 Conta honesta do tempo

| Item | Bruno | Implementador | Observação |
|---|---|---|---|
| Ler questionário + dados (exports) consolidados por agente | 0,5 h | 0,5 h (consolida números) | Só funciona se o cliente mandar dados antes |
| Call de 90 min | 1,5 h | 0 (ou ouvinte 1,5 h) | Recomendo o implementador ouvir nos primeiros 5 |
| Relatório gerado por agente + revisão | 0,5 h | 1 h (monta números e prioridades) | |
| Follow-up | 0,5 h | — | |
| **"Primeiro agente adaptado"** | 0 | **2 a 4 h** (padronizado, sem integração) / **8 a 40 h** (integrado) | Aqui está o problema |
| **Total** | **~3 h** | **~4 a 7 h** (versão padronizada) | |

**Conclusão:** as 3 h do Bruno fecham. O entregável só fecha se o "agente adaptado" for **padronizado e sem integração**. Com custo de implementador de [DADO: valor/hora ou salário do implementador], o diagnóstico a R$ 2.000 ainda tem margem, mas não absorve integração.

### 2.2 Como redefinir o entregável (texto sugerido para a oferta)
> "Você sai com: (1) sua margem de contribuição real calculada com os seus números; (2) o mapa de onde você perde tempo e dinheiro; (3) o plano de 90 dias com as 3 a 5 automações de maior retorno; (4) um agente pronto para usar, configurado com as informações da sua loja (escolha 1 do cardápio). Integrações com sistemas não estão incluídas."

### 2.3 Cardápio: padrão (replicável) x sob medida

| Agente/automação | Tipo | Formato no diagnóstico | Formato na implementação |
|---|---|---|---|
| Agente de atendimento/pós-venda (FAQ, políticas, tom de voz) | **Padrão** | Projeto/assistente com base de conhecimento da loja, usado pelo time no copia-e-cola | Integrado ao WhatsApp API/helpdesk com transbordo humano |
| Agente de briefing de criativo e UGC (ganchos, roteiros, variações) | **Padrão** | Assistente configurado com produtos, público e campeões | Ligado à biblioteca de criativos e métricas de ads |
| Agente analista de DRE/margem (lê planilha exportada) | **Padrão** | Planilha-modelo + assistente que lê export | Painel automatizado com conectores |
| Relatório diário de ads | **Padrão** | Modelo de leitura do export | Automático via Meta Marketing API, entregue no WhatsApp |
| Recuperação de Pix/carrinho | **Padrão** | Roteiros de mensagem + configuração da ferramenta nativa | Fluxo com segmentação e IA |
| Agente de descrição de produto/SEO de catálogo | **Padrão** | Assistente com padrão da marca | Em lote via API da plataforma |
| Alerta de ruptura/compras | **Semi-padrão** | Planilha de cobertura | Integrado ao ERP |
| Integrações ERP ↔ plataforma ↔ logística, conciliação financeira, regra de frete por margem, roteamento de pedido entre CDs, operação de live commerce, CRM com RFM | **Sob medida** | Fora do diagnóstico | Só em implementação com escopo fechado |

**Regra:** o diagnóstico entrega 1 item das linhas "Padrão" na coluna "Formato no diagnóstico". Tudo da coluna da direita é venda de implementação.

### 2.4 Pré-requisito que falta no funil: dados antes da call
O questionário atual é de percepção ("horas manuais estimadas pelo cliente"). Para o relatório ter número, pedir **antes da call** (com checklist e prazo):
- Export de pedidos dos últimos 90 dias (plataforma), com frete, desconto e meio de pagamento.
- Gasto e resultado do Meta Ads (e outros canais) no mesmo período.
- CMV por SKU (ou planilha de custo), imposto (regime tributário), taxas do gateway.
- Relatório do gateway: taxa de aprovação de cartão, Pix gerado x pago, chargeback.
- Volume de atendimento (conversas/dia) e quem atende.
- Organograma: quem faz o quê, horas por função.

Quem não manda dados recebe diagnóstico qualitativo; deixar isso explícito. Bônus: a Black Friday acabou de acontecer; os dados de BF são um ótimo material para o gancho "o que sua Black Friday te ensinou sobre margem".

---

## 3. Perfil do implementador técnico

### 3.1 Perfil
Um **"engenheiro de automação de e-commerce"**, não um dev de produto nem um "prompt engineer". Pleno, PJ, que já entregou integração em loja real.

| Camada | Obrigatório | Desejável |
|---|---|---|
| Orquestração | **n8n** (de preferência self-hosted) ou Make; webhooks; filas e retentativa | Funções em Node.js/Python para o que o no-code não resolve |
| LLM | API da OpenAI/Anthropic, prompts estruturados, saída em JSON, base de conhecimento (RAG simples), avaliação de respostas | Ferramentas de agente com tool calling |
| Dados | Google Sheets/Apps Script, SQL, Looker Studio ou Metabase | Postgres/BigQuery, modelagem de margem de contribuição |
| Plataformas | **Shopify Admin API** (GraphQL e webhooks), **Nuvemshop API**, **Yampi API** | Tray, VTEX, WooCommerce |
| Logística | **Melhor Envio API** (cotação, etiqueta, rastreio) | Frenet, Intelipost, Correios |
| ERP | **Bling** e **Tiny (Olist)** | Omie, Linx, outros |
| Mensageria | **WhatsApp Business Platform (Cloud API oficial)**, templates aprovados, opt-in, janela de 24 h; BSPs | Helpdesks/CRM de WhatsApp do mercado |
| Mídia | **Meta Marketing API** (insights, relatórios), Pixel/CAPI | GA4, TikTok Ads |
| Pagamentos | Webhooks de gateway (status de pedido/Pix/chargeback), **zero manuseio de dado de cartão** | Noções de PCI DSS |
| Compliance | LGPD (base legal, minimização, DPA com o cliente), gestão de credenciais (cofre, nunca em planilha/chat) | |

**Alerta:** WhatsApp não oficial (APIs que espelham o WhatsApp Web) é barato e rápido, mas tem risco de banimento do número do cliente. Padrão da casa: API oficial em produção. Custo de conversa da Meta varia por categoria e muda periodicamente; orçar com a tabela vigente.

### 3.2 Como contratar
- **Teste prático pago (4 a 8 h):** "ler pedidos de uma loja Shopify/Nuvemshop de teste, cruzar com gasto do Meta e enviar resumo diário de margem no WhatsApp". Avaliar: funciona, trata erro, documenta, não expõe credencial.
- **Portfólio verificável:** pelo menos 2 integrações em loja real (com referência).
- **Banco de componentes:** o primeiro mês dele é construir os conectores padrão (Shopify, Nuvemshop, Yampi, Meta, Melhor Envio, Bling/Tiny) como templates reaproveitáveis. É isso que torna o diagnóstico e a implementação replicáveis e com margem.
- **Ponto de partida natural:** os agentes e automações que já rodam na operação do Bruno [DADO: lista dos sistemas do AI OS; seção pendente no bruno.md]. O implementador transforma o que já existe em template.

### 3.3 Como medir o resultado entregue ao cliente
Regra: **toda entrega tem baseline antes e medição 30 dias depois**, com número do próprio cliente. Sem baseline, não há case.

| Entrega | Métrica principal | Métrica de uso (adoção) |
|---|---|---|
| Painel de margem | Margem de contribuição % e R$ visível por dia/SKU/campanha; nº de SKUs/campanhas negativas cortadas | Dono abre/recebe o relatório ≥ 5x por semana |
| Atendimento com IA | % resolvido sem humano; tempo de primeira resposta; nota/reclamação | % das conversas que passam pelo agente |
| Recuperação Pix/carrinho | Taxa de recuperação e R$ recuperado | Fluxo ativo |
| Relatório de ads | Horas/semana do dono no gerenciador; CPA/ROAS de contribuição | Leitura diária |
| Criativos | Criativos testados/semana; % de vencedores; CAC | Briefings gerados/semana |
| Estoque | Rupturas nos top 20 SKUs; dias de cobertura | Pedido de compra baseado no alerta |
| Geral | **Horas manuais eliminadas** (medidas, não estimadas) | — |

Critério do diagnóstico ("implementou 1 automação em 30 dias") está certo; acrescentar **"com 1 métrica antes x depois registrada"**. É isso que vira prova social real.

---

## 4. Segundo público: empresário com capital e sem nada online

### 4.1 O que ele precisa (é outro produto)
Definição de nicho e produto, fornecedor (nacional ou importação, já sem o atalho do dropshipping internacional depois da taxação), marca e posicionamento, plataforma e checkout, meios de pagamento, logística, precificação com margem, tráfego pago e criativo do zero, equipe mínima. Horizonte realista para operação saudável: [HIPÓTESE: 6 a 12 meses]. IA é acessória nessa fase.

### 4.2 Viabilidade
| Subperfil | Viável? | Por quê |
|---|---|---|
| **Já tem negócio físico rodando** (loja, indústria, distribuidor, marca offline) e quer vender online | **Sim, com produto próprio** | Já tem produto, fornecedor, caixa e marca. O problema é canal: loja, tráfego, operação digital. Dá para diagnosticar e ter resultado mensurável (primeiras vendas, CAC, margem). |
| **Tem capital mas nenhum negócio** ("quero investir num e-commerce") | **Não na V1** | É iniciante com dinheiro. Contradiz o público declarado ("não é para iniciante") e o posicionamento ("não é guru"). Resultado depende de produto e tráfego, que o Bruno não controla. |

### 4.3 Riscos de promessa
- A história "1º milhão em 6 meses" foi com dropshipping + produto viral num cenário que já não existe (taxação de importações). Usar isso para atrair quem está começando é **promessa implícita** de repetir o resultado. Precisa de aviso explícito.
- Expectativa de "investir X e ter Y": qualquer projeção de faturamento vira cobrança (e risco reputacional, até jurídico, se o capital do cliente for perdido).
- Público atraído por "liberdade financeira" + bens do Bruno tende a ser o perfil de "dinheiro rápido", o oposto do alvo.

### 4.4 Riscos de entrega
- Escopo explode: montar loja, cadastrar produto, criar marca, subir campanha. Isso é **agência/aceleradora**, o risco que a esteira já aponta como principal ("virar agência e sugar o Bruno").
- Resultado lento: sem caso em 30 dias, o funil fica sem prova social no período em que mais precisa dela.
- O implementador descrito acima não faz branding, fornecedor nem tráfego; atender esse público exige outro time.

### 4.5 Recomendação
1. V1: **não atender** "capital sem negócio". No formulário de qualificação, esse perfil vai para a lista e recebe conteúdo, sem oferta 1:1.
2. Mês 3+ (depois de 3 a 5 cases do público principal): testar um **"Diagnóstico de Entrada no Digital"** só para quem **já tem negócio físico com faturamento** [DADO: faixa mínima, sugestão R$ 100 mil/mês offline]. Entregável: viabilidade (margem de contribuição projetada, CAC tolerável, investimento mínimo em estoque e mídia), decisão vai/não vai e plano de 90 dias. Promessa: decisão informada, **nunca faturamento**.
3. Se houver demanda real, a execução (loja, marca, tráfego) vai para parceiros indicados, não para o time do Bruno.

---

## 5. Os 3 maiores riscos (ângulo entrega)
1. **Entregável do diagnóstico indefinido** ("primeiro agente adaptado") vira implementação grátis, estoura horas do implementador e frustra o cliente que esperava algo integrado.
2. **Relatório sem números do cliente** (só percepção) gera plano genérico, baixa conversão para mentoria/implementação e nenhum case mensurável.
3. **Implementador mal contratado ou sem templates**: cada cliente vira projeto do zero, margem some e o Bruno é puxado para executar.

## 6. Os 3 ajustes mais importantes
1. **Reposicionar a promessa** em torno de margem, tempo do dono e CAC ("descubra quanto você realmente lucra por pedido e o que automatizar primeiro"), com IA como meio. Incluir a dor de caixa (pagamentos/estoque) no roteiro.
2. **Fechar o escopo do entregável:** 1 agente do cardápio padrão, sem integração, + checklist obrigatório de dados antes da call. Integração = implementação.
3. **Contratar o implementador com teste prático e mandato de construir os conectores padrão** (Shopify, Nuvemshop, Yampi, Meta, Melhor Envio, Bling/Tiny, WhatsApp oficial) no primeiro mês; toda entrega com baseline e medição em 30 dias.

---

## 7. Próximos passos

| # | O quê | Quem | Quando |
|---|---|---|---|
| 1 | Aprovar a redefinição do entregável (cardápio padrão, sem integração) e o checklist de dados pré-call | Bruno | até 21/nov |
| 2 | Listar os agentes/automações que já rodam na operação [DADO pendente no bruno.md]: viram o cardápio e os templates | Bruno (15 min de áudio) + especialista-ecommerce organiza | até 25/nov |
| 3 | Reescrever promessa e questionário do diagnóstico com as 5 dores e campos numéricos | especialista-produto + especialista-ecommerce | até 25/nov |
| 4 | Montar planilha-modelo de margem de contribuição (pedido/SKU/campanha) para usar em todo diagnóstico | especialista-ecommerce | até 28/nov |
| 5 | Publicar vaga e teste prático do implementador (perfil da seção 3) | Bruno aprova; agentes redigem | até 28/nov; contratação até meados de dez |
| 6 | Ajustar o formulário de qualificação para separar: e-commerce que fatura / negócio físico indo para o digital / capital sem negócio | infoprodutor | até 2/dez |
| 7 | Definir custo do implementador para fechar a margem do diagnóstico e da implementação [DADO: faixa salarial/PJ] | Bruno | até 2/dez |
| 8 | Nos primeiros 5 diagnósticos, registrar as dores em planilha para confirmar ou corrigir o top 5 deste documento | Bruno + agente de relatório | 3 a 19/dez |
