# Checklist de dados obrigatório · Diagnóstico de Margem e Gestão com IA

> Autor: infoprodutor · 19/nov/2026 · Base: `produto/funil-v2.md` (seção 2), `produto/analise-funil/ecommerce.md` (2.4 e 1.3), `bruno.md`.
> Uso: enviado ao cliente logo depois do pagamento do diagnóstico. **Regra do funil: sem dados, sem call.**
> Caminhos de exportação: Nuvemshop conferido na central de atendimento oficial; Shopify e Meta Ads pelo caminho padrão do painel; **Yampi marcado `[VERIFICAR]`**, a confirmar no painel do Bruno (a loja principal é 100% Yampi).

---

## Texto de abertura (para o cliente)

> Para a nossa primeira call render, eu preciso olhar os seus números antes. Um agente de IA prepara um pré-relatório com eles, e a call de 75 minutos vira conversa sobre o que importa, não levantamento de dados.
>
> São 5 arquivos. Leva de 30 a 60 minutos para juntar. Envie **até 2 dias úteis antes da Call 1**. Se os dados não chegarem, a call é remarcada.
>
> **Importante:** não me envie nenhum dado pessoal de cliente (nome, CPF, e-mail, telefone, endereço) nem nenhum dado de cartão. Abaixo está o que apagar de cada arquivo. Também nunca envie senha, login ou chave de acesso: eu não preciso entrar nas suas contas.

---

## Resumo: os 5 itens

| # | Item | Período | Formato | Obrigatório? |
|---|---|---|---|---|
| 1 | Pedidos | Últimos 90 dias | CSV ou XLSX exportado da plataforma | Sim |
| 2 | Meta Ads (e outros canais de mídia, se houver) | Mesmos 90 dias, por dia | CSV ou XLSX | Sim |
| 3 | Custo por SKU | Atual | Planilha-modelo (enviamos) | Sim |
| 4 | Relatório do meio de pagamento | Mesmos 90 dias | Resumo (planilha-modelo) ou export **sem dados pessoais** | Sim |
| 5 | Volume de atendimento | Últimos 7 a 30 dias | Formulário curto (enviamos) | Sim |
| + | Equipe: quem faz o quê | Atual | Perguntas no mesmo formulário | Sim (sem nome nem salário) |

Se a loja usa **checkout de um provedor e plataforma de outro** (ex.: loja Shopify com checkout Yampi), exporte os pedidos de onde o pagamento é registrado (o checkout) e avise na entrega.

---

## 1. Pedidos dos últimos 90 dias

**Para quê:** faturamento real, ticket médio, frete, cupom, mix de pagamento, Pix gerado x pago, margem por SKU (cruzando com o item 3), recompra.

**Colunas que precisamos:** número do pedido, data, status (pago, cancelado, pendente, devolvido), status de pagamento, meio de pagamento (Pix, cartão, boleto) e nº de parcelas, valor dos produtos, desconto e cupom, frete cobrado do cliente, valor total, SKU e quantidade de cada item, UF de entrega, identificador de cliente **anonimizado** (só para medir recompra, ver abaixo).

**Inclua todos os status**, não só os pagos: o Pix não pago e o cancelado também são informação.

### Como exportar
| Plataforma | Caminho |
|---|---|
| **Shopify** | Admin > Pedidos > filtrar a data dos últimos 90 dias > **Exportar** > "Pedidos que correspondem ao filtro" > CSV para Excel. Lojas grandes recebem o arquivo por e-mail |
| **Nuvemshop** | Admin > Vendas > Lista de vendas > aplicar o filtro de período > botão **Exportar lista** no cabeçalho > conferir a quantidade de pedidos > Exportar (CSV). No app do celular: Vendas > Lista de vendas > três pontinhos > Exportar lista |
| **Yampi** | Painel > Pedidos > filtro de período > opção de **exportar** a lista. `[VERIFICAR: confirmar o nome do botão e se o arquivo traz SKU por item; se não trouxer, pedir também o relatório de produtos vendidos no período]` |
| Outras (Tray, VTEX, WooCommerce, Loja Integrada) | Procure "exportar pedidos" na lista de pedidos. Se não houver, peça o relatório de vendas por período ao suporte da plataforma |

### Antes de enviar (LGPD)
- **Apague as colunas:** nome, e-mail, telefone, CPF/CNPJ do comprador, endereço completo, CEP completo, observações do cliente e nome de quem recebe.
- **Mantenha:** UF (e, se quiser, cidade). Serve para frete e prazo.
- **Para medir recompra sem dado pessoal:** antes de apagar o e-mail, crie uma coluna "cliente_id" com um código (ex.: na planilha, numere cada e-mail diferente como C0001, C0002...). Depois apague o e-mail. Se for complicado, pule este passo: a recompra fica de fora e tudo bem.
- O export da Shopify e de outras plataformas traz colunas de cobrança e entrega com dados pessoais por padrão. Confira todas as colunas antes de enviar.

---

## 2. Meta Ads (e outros canais)

**Para quê:** custo de mídia por dia, MER (faturamento ÷ mídia), custo por compra, campanhas e anúncios que dão prejuízo depois da margem, fadiga de criativo.

**Período e quebra:** os mesmos 90 dias do item 1, **detalhado por dia**, no nível de **anúncio**.

**Colunas:** data, campanha, conjunto, anúncio, valor gasto, impressões, cliques no link, compras, valor de conversão de compras, frequência, CPM.

### Como exportar (Gerenciador de Anúncios da Meta)
1. Gerenciador de Anúncios > aba **Anúncios**.
2. Período: últimos 90 dias.
3. **Detalhamento** > Por tempo > **Dia**.
4. **Colunas** > Personalizar e marcar as colunas acima (ou usar o conjunto "Desempenho" e acrescentar compras e valor de conversão).
5. **Relatórios** > **Exportar dados da tabela** > .xlsx ou .csv.

**Outros canais:** Google Ads (Campanhas > período > ícone de download, por dia), TikTok Ads (Relatórios > personalizado, por dia). Se houver agência, peça o mesmo arquivo a ela. Se houver gasto com creators, influenciadores ou afiliados, informe o total por mês no formulário do item 5.

**LGPD:** o export de anúncios não traz dado pessoal. Não envie listas de público personalizado nem bases de clientes usadas para anúncio.

---

## 3. Custo por SKU

**Para quê:** sem custo de produto não existe margem. É o item mais importante e o que mais falta.

**Formato:** planilha-modelo que enviamos, com uma linha por SKU:

| SKU | Nome do produto | Custo unitário (R$) | Custo de embalagem (R$) | Estoque atual (un.) | Observação |
|---|---|---|---|---|---|

Mais 5 campos gerais, uma vez só:
- Regime tributário (Simples, Presumido, Real) e **% médio de imposto sobre a venda**.
- Custo médio de frete pago por pedido (o que a loja paga à transportadora, não o que cobra do cliente) e % de pedidos com frete grátis.
- % de trocas e devoluções e quem paga o frete de volta.
- Custo fixo mensal aproximado (equipe, aluguel, ferramentas), **em um número total**.
- Ferramentas pagas da operação (plataforma, apps, ERP, WhatsApp) e custo mensal.

### Onde achar
| Fonte | Como |
|---|---|
| **Shopify** | O campo "Custo por item" fica no cadastro de cada produto/variante. Para exportar em massa: Produtos > Exportar (o arquivo traz a coluna de custo por item, quando preenchida) |
| **Nuvemshop** | Produtos > exportar produtos (CSV); a planilha traz o preço de custo quando ele está cadastrado |
| **Yampi** | `[VERIFICAR: se o custo fica no cadastro do produto e se sai no export de produtos]` |
| ERP (Bling, Tiny/Olist) | Relatório de produtos ou de estoque com preço de custo |
| Nada disso | Use a última nota de compra de cada fornecedor. Comece pelos **20 SKUs que mais vendem**; os outros podem ser estimados |

**Sem custo por SKU?** O diagnóstico acontece, mas com margem estimada por categoria, e isso fica explícito no relatório.

**LGPD:** não tem dado pessoal. Nome de fornecedor é opcional.

---

## 4. Relatório do meio de pagamento

**Para quê:** medir o dinheiro que se perde entre o pedido e o caixa: cartão recusado, Pix gerado e não pago, boleto não compensado, chargeback e custo real de cada meio de pagamento.

**Opção A (preferida): resumo na planilha-modelo**, mês a mês dos últimos 3 meses:

| Indicador | Mês 1 | Mês 2 | Mês 3 |
|---|---|---|---|
| Cartão: tentativas, aprovadas, recusadas (qtd. e R$) | | | |
| Pix: gerados, pagos (qtd. e R$) | | | |
| Boleto: gerados, compensados (qtd. e R$) | | | |
| Chargebacks: qtd., R$, ganhos e perdidos | | | |
| Taxa por meio (MDR) e custo de antecipação e de parcelamento sem juros | | | |
| Prazo de recebimento | | | |

**Opção B: export de transações do painel do provedor** (Pagar.me, Mercado Pago, PagBank, Yampi Pay, Appmax, Stripe ou outro): no painel, procure Relatórios ou Extrato > Transações > período de 90 dias > exportar. Antes de enviar, aplique as regras abaixo.

**Se a plataforma tem pagamento próprio** (Shopify Payments, Nuvem Pago), o relatório costuma ficar dentro do admin da própria plataforma, na área de pagamentos/financeiro.

### Regras de pagamento (LGPD e cartão)
- **Nenhum dado de cartão, nem parcial.** Apague número do cartão, BIN, últimos 4 dígitos, nome do titular, validade e qualquer código. Não precisamos de nada disso.
- Apague também CPF, e-mail, telefone e nome do comprador.
- **Mantenha:** data, ID da transação, ID do pedido, valor, meio, parcelas, status, motivo da recusa (quando houver), bandeira.
- Não envie prints de tela com dados de clientes. Se tirar print, borre antes.
- Não envie contrato nem taxas negociadas se houver cláusula de confidencialidade com o provedor: informe só a taxa efetiva no resumo.

---

## 5. Volume de atendimento e equipe

**Para quê:** dimensionar o tempo da equipe gasto com o que é repetitivo e escolher onde um agente ajuda primeiro.

**Formato:** formulário curto (Google Forms ou Tally), sem anexos de conversa.

**Perguntas de atendimento:**
1. Canais de atendimento (WhatsApp, Instagram, e-mail, chat do site, Reclame Aqui) e ferramenta usada em cada um.
2. Conversas por dia, em média, em cada canal (se a ferramenta tiver relatório, use o dos últimos 30 dias; se não, conte durante 7 dias).
3. Tempo médio de primeira resposta (se souber).
4. Os 5 motivos de contato mais comuns, em ordem (ex.: "cadê meu pedido", troca, prazo, dúvida de produto, cupom).
5. Quantas pessoas atendem e quantas horas por dia cada uma dedica a isso.
6. Já usa alguma automação ou robô? Qual?
7. Nº de reclamações ou chargebacks por motivo de atendimento no último mês (se souber).

**Perguntas de equipe (sem nome e sem salário):**
8. Quantas pessoas trabalham na operação, por função (ex.: 2 logística, 1 atendimento, 1 marketing, dono), incluindo sócios e família.
9. Terceirizados fixos (agência, freelancer) e o que fazem.
10. Quais decisões do dia a dia ainda passam por você.
11. Quanto tempo por semana você gasta em tarefas repetitivas (aproximado) e quais.

**Onde achar o volume:**
| Ferramenta | Onde |
|---|---|
| WhatsApp Business (app) | Não tem relatório de volume. Contar as conversas novas por 7 dias |
| WhatsApp via plataforma de atendimento ou BSP | Relatórios > conversas por período |
| Instagram | Não há relatório de volume de directs; estimar |
| Helpdesk de e-mail/chat | Relatório de tickets por período e por motivo |

**LGPD:** **não envie conversas, prints de conversas nem exports de chat.** Se quiser mostrar um exemplo de atendimento, reescreva a mensagem sem nome, telefone, pedido ou endereço.

---

## Regras gerais de LGPD e segurança (valem para todos os itens)

| Regra | Detalhe |
|---|---|
| Minimização | Só pedimos o necessário para calcular margem, caixa e tempo. Nada de dado pessoal de cliente final |
| Sem dado de cartão | Nenhum, nem parcial. Nenhum agente nosso recebe ou processa dado de cartão |
| Sem credenciais | Nunca enviamos nem aceitamos senha, login, token ou chave de API. O diagnóstico não exige acesso às suas contas |
| Canal de envio | Pasta compartilhada (Google Drive) criada por nós, com acesso só para você e para o time do diagnóstico. **Não envie por WhatsApp nem por e-mail aberto** |
| Uso dos dados | Exclusivo para o seu diagnóstico. Nada vira conteúdo público sem a sua autorização por escrito, e nunca com o nome da sua loja |
| IA | Os arquivos (já sem dados pessoais) são analisados por agentes de IA em contas configuradas para não usar os dados para treinamento `[VERIFICAR: confirmar a configuração das contas usadas pelo time]` |
| Prazo de guarda | Arquivos apagados `[DADO: prazo definido pelo Bruno; sugestão: 90 dias após a devolutiva, ou antes, se o cliente pedir]`. Se o cliente seguir para turma ou implementação, o prazo acompanha o novo contrato |
| Se vier dado pessoal por engano | Apagamos o arquivo, avisamos o cliente e pedimos o reenvio limpo. Não abrimos o conteúdo além do necessário para identificar o problema |
| Termo | Cláusula de confidencialidade e de tratamento de dados no aceite do diagnóstico `[DADO: texto revisado por advogado]` |

---

## Conferência antes de enviar (o cliente marca)

- [ ] 1. Pedidos de 90 dias, todos os status, **sem nome, e-mail, telefone, CPF e endereço**
- [ ] 2. Meta Ads por dia e por anúncio, 90 dias (e outros canais, se houver)
- [ ] 3. Planilha de custo por SKU (pelo menos os 20 mais vendidos) + 5 campos gerais
- [ ] 4. Resumo do meio de pagamento (ou export **sem dado de cartão e sem dado pessoal**)
- [ ] 5. Formulário de atendimento e equipe respondido
- [ ] Nenhuma senha, token ou print com dado de cliente
- [ ] Tudo na pasta compartilhada até 2 dias úteis antes da Call 1

---

## Operação interna (o que o time faz com o checklist)

| Etapa | Quem | Quando |
|---|---|---|
| Enviar o checklist, a pasta e as 2 planilhas-modelo (custo por SKU e resumo de pagamento) + link do formulário | Automático após o pagamento (ou o Bruno, nos primeiros) | Dia do pagamento |
| Lembrete se faltar item | Automático ou assistente | 4 e 2 dias úteis antes da Call 1 |
| Conferir se há dado pessoal ou de cartão nos arquivos antes de qualquer análise | Implementador (ou o Bruno até a contratação) | Ao receber |
| Rodar o agente do pré-relatório (margem, mídia, caixa, atendimento) | Agente + revisão do implementador | Até 1 dia antes da Call 1 |
| Se faltar item obrigatório: remarcar ou seguir com diagnóstico qualitativo, por escrito | Bruno decide | 1 dia antes |

## Próximos passos

| # | O quê | Quem | Quando |
|---|---|---|---|
| 1 | Confirmar no painel Yampi os 2 itens `[VERIFICAR]` (export de pedidos com SKU e custo por produto) | Bruno ou gerente (10 min) | até 25/nov |
| 2 | Definir prazo de guarda dos arquivos e configuração das contas de IA (sem treinamento) | Bruno | até 28/nov |
| 3 | Criar as 2 planilhas-modelo (custo por SKU, resumo de pagamento) e o formulário de atendimento e equipe | infoprodutor | até 2/dez |
| 4 | Testar o checklist com 1 loja da rede (de preferência Shopify ou Nuvemshop) e cronometrar quanto tempo o dono leva | Bruno indica; infoprodutor acompanha | até 5/dez |
| 5 | Cláusula de confidencialidade e dados no aceite do diagnóstico | Bruno, com advogado | antes da 1ª venda (3/dez) |
| 6 | Escrever o prompt do agente de pré-relatório que lê os 5 itens | infoprodutor + especialista-ecommerce | até 9/dez |
