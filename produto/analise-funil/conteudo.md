# Análise do funil: topo de funil e conteúdo

> Autor: estrategista-conteudo · Data: 19/nov/2026 · Status: para decisão do Bruno
> Base: `.claude/context/bruno.md` (decisões de 19/nov e "NÃO publicar"), `produto/esteira-v1.md`, `benchmarking/criadores-ecommerce-v1.md`, `radar-ia/2026-11-19.md`.
> Números usados no conteúdo: só R$ 30 mi (total) e R$ 12 a 15 mi (último ano), sempre como **faturamento**; margem só em %; 8 funcionários. O "1º milhão em 6 meses" **não** foi liberado na decisão 7 e fica fora até o Bruno liberar com prova.
> Convenções: **[DADO: ...]** = só o Bruno tem. **[HIPÓTESE]** = meta sem histórico. **[DECISÃO BRUNO]** = trava o time.

---

## 0. Veredito

**O funil para em pé no fundo e está fraco no topo.** O diagnóstico 1:1 vendido pela rede quente é a escolha certa para dezembro e não depende de conteúdo. O problema é o que vem depois: o conteúdo planejado e a isca, como estão, vão trazer mais curioso de IA, gestor de tráfego e iniciante do que dono de e-commerce que fatura. E não existe ponte clara do post até a aplicação do diagnóstico.

Três motivos:
1. **A isca puxa o público errado.** Um "kit de 5 agentes/prompts" é o tipo de brinde que o iniciante e o colecionador de prompt baixam em massa. Ele não pede faturamento para ser usado, então não filtra ninguém. Além disso, depende de um levantamento de sistemas que ainda está pendente no `bruno.md`.
2. **Metade das pautas planejadas é "novidade de ferramenta"** (radar de IA: Meta, ChatGPT Ads, Edits). Esse formato dá alcance, mas o alcance vem de profissional de marketing. Sem o enquadramento de dono (margem, folha, horas da equipe), o perfil vira um canal de notícia de IA.
3. **A conta de tempo não fecha.** A esteira prevê 4 a 5 posts por semana e 8 diagnósticos em dezembro. Com 30 h por mês para tudo, isso não cabe (ver seção 2).

Com os ajustes abaixo (isca que exige ter operação, 3 posts por semana, CTA único, filtro de faturamento no direct), o topo passa a alimentar o diagnóstico em vez de só gerar seguidor.

---

## 1. O conteúdo atrai o público certo?

### 1.1 Onde o plano atual atrai iniciante

| Peça ou pilar planejado | O que atrai hoje | Por quê | Ajuste |
|---|---|---|---|
| História de origem (desempregado, R$ 800/mês, primeiro milhão no dropshipping) | Iniciante que busca o primeiro dinheiro | É a narrativa clássica do "guru de dropshipping" (benchmarking, grupo 1) | No máximo 1 vez por mês, e sempre terminando na lição de **operação** (por que migrou para estoque, como monta equipe). Nunca "você também consegue". |
| Plaquinhas de R$ 30 mi | Quem quer "ficar rico com internet" | Número grande sem contexto vira promessa | Usar como **prova**, nunca como gancho principal. A legenda sempre fala de operação, equipe e o que aprendeu. |
| Reels de ferramenta do radar (foto vira vídeo, ChatGPT Ads, Edits) | Gestor de tráfego, social media, curioso de IA | O assunto é a ferramenta, e não o negócio | Todo Reel de ferramenta abre ou fecha com um número de dono: CPA, % do faturamento, horas da equipe. |
| "Kit de 5 agentes" como isca | Colecionador de prompt | Não exige ter operação para usar | Trocar pelo **Raio-X da Operação** (seção 3). |
| Pilar "construção em público" (15%) | Sem assunto | O tema era o Creator OS e o gateway, que foram vetados | Vira **"o sistema"**: a evolução do sistema que centraliza a gestão das lojas, sem nome de empresa. |

### 1.2 Filtros de público que entram em todo post
- **Teste antes de publicar:** "Esse post é útil para um dono que fatura R$ 100 mil por mês ou mais?" Se a resposta for não, o post não sai. (A faixa de R$ 100 mil é [HIPÓTESE] da esteira e deve seguir a decisão final do Bruno.)
- **Vocabulário de dono:** margem, folha, faturamento por pessoa, estoque parado, CAC, gerente, dependência do dono, decisão. Vocabulário que fica de fora: "renda extra", "do zero", "primeira venda", "liberdade" como promessa, "método".
- **Chamada explícita no gancho**, quando couber: "Se sua loja já fatura e você ainda aprova tudo sozinho...".
- **O filtro do direct faz o resto** (seção 1.3). Seguidor iniciante vai aparecer de qualquer forma; o que importa é ele não entrar no funil do diagnóstico.

### 1.3 Como o conteúdo leva até a aplicação do diagnóstico

Hoje a esteira leva o conteúdo para a lista ("OPERADOR" → kit) e o diagnóstico é vendido só por mensagem pessoal. Falta um caminho para quem chega pelo Instagram. Proposta com **uma palavra-chave e um link**:

```
Post (feed) ──CTA "comenta SISTEMA"──> Direct automático (ManyChat ou similar)
                                          │  pergunta 1: você já vende online?
                                          │     sim / tenho negócio físico, ainda não / estou começando
                                          │  pergunta 2 (se sim): faturamento mensal
                                          │     até R$ 50 mil · R$ 50-100 mil · R$ 100-500 mil · R$ 500 mil+
                                          ▼
                          Entrega o Raio-X da Operação (todos recebem)
                                          │
        ┌─────────────────────────────────┼───────────────────────────────────┐
        ▼                                 ▼                                   ▼
  Faixa-alvo (R$ 100 mil+)        Abaixo da faixa ou "começando"     "Negócio físico, sem online"
  → convite para a aplicação      → grupo/lista apenas,              → tag Público 2; lista;
    do diagnóstico (link)           sem oferta de diagnóstico           Bruno decide se aborda (seção 5)

Stories (vagas X de 8, bastidor do diagnóstico) ──> link na bio ──> Aplicação do diagnóstico
```

Regras:
- **Comentário leva à isca; link da bio e stories levam à aplicação.** Quem já quer o diagnóstico não precisa passar pela isca.
- **Link da bio = página de aplicação do diagnóstico** a partir de 3/dez (antes disso, a página do Raio-X). Um link só, sem árvore de 6 botões.
- **A aplicação pede faturamento, nicho, tamanho de equipe e a maior dor.** Isso filtra e ainda prepara o questionário pré-call.
- **Frequência de CTA:** 1 post por semana com "comenta SISTEMA"; os outros dois com CTA de salvar ou compartilhar. Nas stories, 2 a 3 dias por semana com o contador de vagas (escassez real, por capacidade).
- **Durante a Black Friday (até 30/nov): nenhum CTA de venda**, como a esteira já prevê.

---

## 2. Cadência realista dentro de 30 h por mês

### 2.1 A conta de dezembro

As 30 h são para tudo: vender, entregar e produzir conteúdo. A esteira prevê 8 diagnósticos (cerca de 3 h cada), mais a abordagem, mais 4 a 5 posts por semana. Não cabe.

| Bloco | Esteira como está | Proposta |
|---|---|---|
| Abordagem e qualificação da rede quente | ~5 h | 5 h |
| Diagnósticos (3 h cada) | 8 = 24 h | **6 = 18 h** |
| Conteúdo (tempo do Bruno) | não orçado | **6 h** (2 sessões de gravação de 2 h + 4 aprovações semanais de 30 min) |
| Folga | 0 | 1 h |
| **Total** | **29 h + conteúdo** | **30 h** |

**[DECISÃO BRUNO]:** ou o teto de dezembro cai para 6 diagnósticos, ou o conteúdo cai para 1 Reel por semana. Recomendo 6 diagnósticos. Seis bem entregues já validam a oferta (o critério da esteira é 5 ou mais vendidos), e o conteúdo é o que vai alimentar janeiro.

### 2.2 Cadência proposta (dezembro)

| Canal | Frequência | Quem faz | Tempo do Bruno |
|---|---|---|---|
| Feed | **3 por semana**: seg. carrossel (bastidor com número ou o sistema), qua. Reel falado (tese), sex. Reel de tela (o sistema na prática). Na semana da BF, 1 a 2 posts. | Agentes roteirizam; a esposa capta; edição [DADO: quem edita os Reels hoje?] | Grava em lote: 6 Reels por sessão |
| Stories | 4 a 5 dias por semana, de 3 a 6 telas: bastidor da operação, 1 caixinha por semana e, a partir de 3/dez, o contador de vagas | A esposa capta durante a rotina e o Bruno só aparece | ~10 min por dia de presença, sem roteiro |
| Grupo/lista | 1 mensagem por semana | Agente redige, o Bruno aprova | Incluído nas aprovações |

Os carrosséis não pedem gravação. O Bruno manda um áudio de 5 min e os agentes montam o texto.

### 2.3 Instagram só, ou Instagram mais YouTube longo?

**Dezembro: só Instagram.** É mês de Black Friday, de diagnóstico e sem editor definido. Abrir canal novo agora divide um tempo que não existe.

**Janeiro: gravar 1 vídeo-âncora longo** (30 a 40 min): "O sistema que centraliza a gestão das minhas lojas, por dentro". Ele tem quatro usos: vídeo do YouTube, vídeo da página de aplicação, material para 8 a 10 cortes de Reels e base para o workshop do mês 2. Custo: uma sessão de cerca de 3 h, que substitui as 2 sessões de Reels daquele mês.

**A partir de fevereiro: 1 gravação longa por mês**, que vira YouTube mais todos os Reels do mês, desde que haja editor. É o modelo mais eficiente para 30 h: uma gravação gera o mês inteiro. O benchmarking está certo em dizer que empresário consome conteúdo longo, mas o canal longo só vale como fonte dos cortes, e não como mais uma tarefa semanal.

Critério para manter o YouTube depois de 3 vídeos: o vídeo longo aparece como origem em pelo menos [HIPÓTESE: 20%] das aplicações do diagnóstico (perguntar "como me conheceu" na aplicação).

---

## 3. A isca: Raio-X da Operação

### 3.1 O que é
Um material curto, em página ou planilha, com três partes:

1. **O mapa do sistema (1 página).** Como as lojas do Bruno ficam centralizadas num só lugar: os módulos (vendas e canais, mídia e criativos, estoque e logística, atendimento e pós-venda, financeiro e margem, rotina da equipe), qual dado entra em cada um, que decisão sai e qual é a rotina diária. Sem nome de empresa, sem Creator OS, sem gateway. [DADO: módulos reais do sistema e o que cada um faz hoje; seção "Sistemas e automações" do `bruno.md` está pendente.]
2. **Autoavaliação de 12 perguntas** (0 a 3 pontos cada). Exemplos: "Você sabe a margem de ontem sem pedir para ninguém?", "Quantas decisões do dia passam por você?", "Seus dados de anúncio, estoque e financeiro estão no mesmo lugar?". O resultado cai em três faixas: operação dependente do dono, operação em transição ou operação sistematizada.
3. **Calculadora de faturamento por pessoa.** Faturamento anual dividido pelo número de pessoas da equipe, com a referência do Bruno ao lado: R$ 12 a 15 mi com cerca de 10 pessoas (8 funcionários, o Bruno e a esposa) dá R$ 1,2 a 1,5 mi por pessoa. [DECISÃO BRUNO: o número é derivado de dados liberados, mas confirme antes de publicar.]

No final, conforme a faixa: "Quer que eu olhe a sua operação com você? São 6 vagas de diagnóstico em dezembro" (link da aplicação).

### 3.2 Por que é mais forte que o kit de agentes
| Critério | Kit de 5 agentes | Raio-X da Operação |
|---|---|---|
| Filtra o público | Não: qualquer um usa prompt | Sim: sem operação e sem faturamento não dá para responder |
| Usa o diferencial do Bruno | Pouco: prompt virou commodity | Sim: mostra **o sistema**, que ele pode mostrar e o mercado não tem (benchmarking, seção 3) |
| Leva ao diagnóstico | Fraco: o lead fica "brincando" com os prompts | Direto: o lead sai com uma nota e um buraco identificado, e o diagnóstico é o próximo passo natural |
| Depende de dado pendente | Sim (quais agentes rodam) | Sim, mas só do mapa, que o Bruno já precisa explicar no áudio de 15 min da esteira |
| Produção | 4 a 6 h | 4 a 6 h de agentes + 1 h do Bruno validando o mapa |

O kit de agentes não precisa morrer. Ele vira **bônus de quem compra o diagnóstico** (a esteira já prevê "1 agente do kit adaptado").

### 3.3 Produção
- Matéria-prima: o áudio de 15 min que a esteira já pede ao Bruno até 25/nov. Peça para ele descrever o sistema módulo por módulo.
- Agentes `infoprodutor` + `marketing`: montam o mapa, as 12 perguntas, a calculadora e a automação do direct até 2/dez.
- Cuidado: nenhum print do sistema pode mostrar nome de loja, logo, domínio, nome de cliente ou valor em reais que não tenha sido liberado.

---

## 4. Os 5 posts âncora ajustados à regra de 19/nov

**Nota:** não há uma lista de "5 posts âncora" salva no repositório (a pasta `conteudo/` não existe). Ajustei as 5 peças que já estão planejadas nos documentos: o post de Black Friday da esteira e as 4 pautas de conteúdo do radar de IA de 19/nov. Se a lista original era outra, me passe que eu refaço.

**Regras aplicadas a todos:**
- Nenhum nome de empresa: "minha loja", "minhas operações", "minha marca de moda".
- Nenhuma menção ao Creator OS ou ao gateway. A pauta do radar sobre robôs comprando na Shopify ("eu, que estou construindo um gateway...") foi **cortada**, e o mesmo vale para a série "90 dias: Creator Intelligence OS" do benchmarking.
- **Telas:** borrar o nome da loja no Ads Manager, no BSP do WhatsApp e nas respostas das IAs; esconder logo, domínio e embalagem. [DECISÃO BRUNO: mostrar o produto (bolsa) pode identificar a loja. Mostrar ou usar produto genérico?]
- **Prova:** as plaquinhas de R$ 30 mi do post fixado entram como prova visual (1 slide ou 1 segundo de B-roll), nunca como gancho.

---

### Post 1 · Carrossel · "Black Friday com 8 funcionários" · 1 ou 2/dez
**Objetivo:** salvamento + comentários "SISTEMA" (primeiro post com a isca).
**Origem:** "O que a IA fez na minha Black Friday" (esteira, semana 2). Sem ajuste de nome necessário; o reforço é de prova e de enquadramento.

| Slide | Texto |
|---|---|
| 1 (gancho) | Black Friday com 8 funcionários.<br>O que eu deixei na mão da IA, e o que eu não deixei. |
| 2 (prova) | *[Foto das plaquinhas]*<br>R$ 30 milhões faturados em e-commerce. R$ 12 a 15 milhões no último ano.<br>Faturamento, não lucro. A equipe é a mesma da foto de hoje: 8 pessoas. |
| 3 | Tudo roda a partir de um sistema que junta a gestão das minhas lojas numa tela só.<br>*[Print do painel, borrado]* |
| 4 | O que a IA fez: [DADO: tarefa real 1, com volume ou horas antes e depois] |
| 5 | [DADO: tarefa real 2] |
| 6 | [DADO: tarefa real 3] |
| 7 | O que eu **não** deixei com a IA: [DADO: decisões que ficaram com o Bruno e por quê] |
| 8 | O que deu errado: [DADO: 1 falha real da BF] |
| 9 | O que muda na minha operação em 2027: [DADO] |
| 10 (CTA) | Coloquei o mapa desse sistema e 12 perguntas num Raio-X.<br>Em 10 minutos você vê quanto da sua operação ainda depende de você.<br>Comenta SISTEMA que eu te mando. |

**Legenda:**
> Black Friday com 8 funcionários. Separei o que foi para a IA e o que continuou comigo.
>
> A parte que mais me surpreendeu foi o slide 8. [DADO: 1 linha sobre a falha]
>
> Se sua loja já fatura e você ainda aprova tudo sozinho, comenta SISTEMA. Te mando o Raio-X com o mapa de como eu organizo a gestão.

**Visual:** fundo escuro e sóbrio, tipografia grande, prints reais borrados, plaquinhas no slide 2. Nada de carro nem de casa.

---

### Post 2 · Carrossel · Custo do WhatsApp · semana de 8/dez
**Objetivo:** compartilhamento (o dono manda para o gerente ou o sócio) + salvamento.
**Origem:** radar item 2. **Ajuste:** sai "olha quanto isso custa", entra "quanto pesa na margem"; tela do BSP sem nome da loja; tudo em % do faturamento.

| Slide | Texto |
|---|---|
| 1 (gancho) | Desde 1º de outubro a Meta cobra uma mensagem de WhatsApp que era de graça.<br>Fui ver quanto isso pesa na margem da minha loja. |
| 2 | O que mudou: as respostas dentro da janela de 24 h e os templates de utilidade passaram a ser cobrados por mensagem. *[Print da fonte oficial; checar antes, porque as fontes divergem sobre a franquia]* |
| 3 | Quem mais sente: loja com atendimento humano, VIP no WhatsApp e rastreio por mensagem. |
| 4 | Na minha operação: [DADO: custo do WhatsApp em % do faturamento, set. vs out.] |
| 5 | Onde estava o gasto: [DADO: os 3 fluxos que mais consumiram] |
| 6 | O que eu cortei: [DADO] |
| 7 | O que eu mantive, mesmo pagando, e por quê: [DADO] |
| 8 | Como olhar o seu: exporte o relatório de conversas do seu provedor, separe por tipo de mensagem e divida pelo faturamento do mês. |
| 9 (CTA) | Esse custo agora é uma linha fixa no painel de margem do meu sistema.<br>Manda para quem cuida do seu atendimento. |

**Legenda:**
> A Meta começou a cobrar uma coisa no WhatsApp em 1º de outubro e quase nenhum dono de loja que eu conheço olhou a fatura.
>
> Fiz a conta na minha operação, em % do faturamento. O slide 8 mostra como fazer na sua em 15 minutos.
>
> Manda para quem cuida do seu atendimento.

**Visual:** print do BSP com valores e nome borrados; gráfico simples de % (set. vs out.).
**Dependência:** auditoria do radar (gerente + Claude, até 24/11).

---

### Post 3 · Reel de tela · "Minha loja aparece na IA?" · semana de 8/dez
**Objetivo:** alcance + salvamento.
**Origem:** radar item 4. **Ajuste:** as respostas das IAs mostram o nome da loja, então a tela precisa ser borrada; o produto é tratado de forma genérica; o enquadramento muda de "truque de IA" para "catálogo é gestão".

**Gancho (0 a 3 s, texto na tela + fala):** "13% dos brasileiros já começam a busca de compra numa IA. Fiz 10 perguntas que a minha cliente faria. Minha loja apareceu em [DADO: X] de 10."

**Roteiro:**
- 3 a 15 s: tela gravada de ChatGPT, Gemini e Claude respondendo; o nome da loja e os concorrentes borrados.
- 15 a 30 s: "Onde eu não apareci, o motivo foi o mesmo: a ficha do produto não dizia [DADO: atributo que faltou]. A IA não indica o que ela não entende."
- 30 a 45 s: "Reescrevi as 10 fichas principais. Daqui a 30 dias eu repito o teste." (Gera o post de continuação.)
- 45 a 55 s: "Isso é catálogo, e catálogo é trabalho de gestão. Faz o teste na sua loja hoje: 10 perguntas, 3 IAs."

**Legenda:**
> Fiz 10 perguntas de compra em 3 IAs. Minha loja apareceu em [DADO: X].
>
> Fonte do 13%: pesquisa LWSA/Opinion Box, set/2026. [Abrir o link e tirar print antes de publicar.]
>
> Salva e faz o teste na sua loja. Em 30 dias eu posto o resultado depois da reescrita.

**Visual:** gravação de tela com zoom nas respostas, rosto do Bruno no canto, placar "X de 10" fixo.

---

### Post 4 · Reel de tela · Foto parada contra UGC · semana de 15/dez (precisa de 7 dias de dados)
**Objetivo:** seguidor qualificado + compartilhamento.
**Origem:** radar item 1. **Ajuste:** o assunto passa a ser **custo de criativo e equipe**, e não o recurso da Meta, para não falar só com gestor de tráfego. Nada de valor de verba; só CPA relativo e ROAS. Produto conforme a [DECISÃO BRUNO] acima.

**Gancho:** "Um vídeo de criadora me custa [DADO: custo ou horas por peça]. Peguei uma foto parada e deixei a Meta transformar em anúncio. Coloquei contra o meu melhor vídeo."

**Roteiro:**
- 3 a 15 s: tela do Ads Manager gerando o vídeo (nome da conta borrado); lado a lado foto e vídeo.
- 15 a 30 s: resultado aos 7 dias: [DADO: CTR e CPA relativo, por exemplo "o CPA ficou X% acima ou abaixo"].
- 30 a 45 s: leitura de dono: "[DADO: conclusão real]. O que eu faço com isso: [DADO: decisão, por exemplo onde o vídeo gerado entra e onde a criadora continua]."
- 45 a 55 s: "Eu testo na minha operação antes de falar. Segue para ver o teste de 30 dias."

**Legenda:**
> Foto parada contra o meu melhor vídeo de criadora. 7 dias, mesma verba nos dois. Resultado no vídeo.
>
> O que mudou na minha decisão de produção de criativo: [DADO: 1 linha].

**Visual:** tela + rosto; tabela final com 3 métricas relativas.
**Risco:** se o vídeo gerado perder feio, o post continua valendo ("testei e não troco"). Não maquiar o resultado.

---

### Post 5 · Reel falado + tela · "Uma tela só" (substitui a tese do gateway) · semana de 15/dez, candidato a fixado
**Objetivo:** seguidor + comentários "SISTEMA" (post de método, para fixar ao lado das plaquinhas).
**Origem:** a pauta "A Shopify deixou robôs comprarem... eu, que estou construindo um gateway" **viola a regra de 19/nov e foi cortada**. No lugar dela entra o sistema de gestão, usando a lição do Sora (radar item 11) como tese de controle.

**Gancho (0 a 3 s):** "8 funcionários. R$ 12 a 15 milhões faturados no último ano. Toda manhã eu abro uma tela só."

**Roteiro:**
- 3 a 8 s: B-roll de 1 s das plaquinhas + "faturamento, não lucro".
- 8 a 20 s: "Antes, os meus dados viviam em [DADO: quantas] ferramentas. Para saber a margem de ontem, eu precisava pedir para alguém."
- 20 a 35 s: tela borrada passando pelos módulos: vendas, mídia, estoque, atendimento, margem. "Cada módulo responde uma pergunta que antes ocupava alguém da equipe." [DADO: 1 exemplo real com horas]
- 35 a 48 s: tese: "Este ano a OpenAI desligou o Sora. Quem tinha o criativo preso nele parou. Por isso, no meu sistema, toda ferramenta é trocável. O que é meu são os dados e a rotina."
- 48 a 58 s: "Coloquei o mapa desse sistema num Raio-X. Comenta SISTEMA."

**Legenda:**
> Toda manhã eu abro uma tela só para olhar as minhas operações.
>
> Ali tem vendas, mídia, estoque, atendimento e margem, tudo junto. Nenhuma ferramenta dentro dele é insubstituível, e essa foi a lição mais cara de 2026.
>
> Se você ainda junta planilha de 4 lugares para saber como foi ontem, comenta SISTEMA. Te mando o mapa.

**Visual:** Bruno falando para a câmera no escritório ou na operação (não em casa nem no carro), cortes para a tela borrada.

---

### Fixados propostos (a partir de 3/dez)
1. **Plaquinhas de R$ 30 mi** (já existe). [DADO: revisar a legenda atual.] Ela precisa dizer "faturamento", falar de equipe e operação e terminar com "comenta SISTEMA".
2. **Post 5** ("Uma tela só"): o método.
3. **Post de vagas do diagnóstico** (a criar em 3/dez): a oferta, com "X de 6 vagas".

**Bio sugerida** (validar com `ig-profile-optimizer`): "Opero e-commerce com 8 pessoas e IA na gestão · R$ 30 mi faturados · Para quem já fatura e quer escalar sem inchar a equipe" + link da aplicação.

---

## 5. O segundo público: empresário com capital e nada online

### 5.1 Precisa de conteúdo próprio?
**Não agora, e nunca como série "como começar".** Três razões:
1. **A prova do Bruno é de operação digital que já fatura.** Ele não tem um caso de levar um negócio físico para o online. A tentativa mais próxima foi a lojinha no Instagram que não vendeu. Ensinar esse público hoje seria falar sem prova, que é exatamente o que o posicionamento rejeita.
2. **Esse público já consome o conteúdo de operador.** Quem tem capital e uma empresa física quer ver como funciona uma operação de verdade antes de entrar. O conteúdo para quem já fatura serve para ele também.
3. **Conteúdo "do zero" é o que mais derruba a autoridade** com quem já fatura (benchmarking, padrão a evitar nº 5: "misturar iniciante e empresário dilui o premium").

### 5.2 O que fazer no lugar
- **Captar e marcar, sem produzir para ele.** A pergunta 1 do direct ("tenho negócio físico, ainda não vendo online") já separa esse público. Em dezembro, o Bruno conversa com 2 ou 3 dessas pessoas da rede quente para validar se existe dor e disposição de pagar.
- **Se validar (janeiro em diante), criar um subpilar "Decisões de empresário"** com 1 post a cada 2 semanas (cerca de 15% do feed). O tema é decisão de capital e de estrutura, e não passo a passo. Exemplos com prova própria:
  - "Por que eu saí do dropshipping para o estoque" (a taxa das blusinhas: decisão de modelo de negócio).
  - "A ordem em que eu contratei as 8 pessoas da minha equipe" [DADO: a ordem real e o motivo]. Serve aos dois públicos.
  - "Onde eu colocaria o primeiro R$ [DADO] se fosse levar uma empresa para o online hoje" (tese de alocação, em tom de opinião de operador, sem promessa).
  - A história do mercadinho do pai que quebrou: forte para esse público, mas [DECISÃO BRUNO: expor a história da família?].
- **Regra que protege o perfil:** nunca ensinar a etapa de 0 a 1 (escolher plataforma, abrir CNPJ, achar fornecedor, fazer a primeira venda). Falar de estrutura, decisão, números e erros caros. O teste da seção 1.2 continua valendo: se o post não for útil para quem fatura R$ 100 mil por mês, ele não sai.
- **Produto:** se houver demanda, o diagnóstico ganha uma variante ("Diagnóstico de entrada no digital") vendida **por aplicação**, nunca anunciada no feed. Quem decide isso é o `especialista-produto`, a partir das conversas de dezembro.

---

## 6. Riscos

| # | Risco | Prob. | Impacto | Mitigação |
|---|---|---|---|---|
| 1 | **Público errado no topo:** a isca de prompts, os Reels de ferramenta e a história de origem trazem iniciante e profissional de marketing | Alta | Alto: a lista enche de lead que nunca compra diagnóstico e o perfil perde peso com quem fatura | Trocar a isca pelo Raio-X; enquadramento de dono em todo Reel de ferramenta; filtro de faturamento no direct; origem no máximo 1 vez por mês |
| 2 | **Tempo:** 8 diagnósticos e 4 a 5 posts por semana não cabem em 30 h | Alta | Alto: o conteúdo morre em dezembro ou o diagnóstico perde qualidade (e o diagnóstico gera os cases) | 6 diagnósticos em dez.; 3 posts por semana gravados em lote; YouTube só a partir de jan/fev, como fonte de cortes |
| 3 | **Sem ponte do conteúdo para o diagnóstico:** o CTA leva só para a lista e a venda depende 100% da rede quente | Média | Médio no mês 1, alto a partir do mês 2 | Um único CTA ("SISTEMA") com triagem no direct; link da bio na aplicação; contador de vagas nas stories |
| 4 | **Vazamento de identidade nas telas:** prints de Ads Manager, BSP e respostas das IAs mostram o nome da loja | Alta (acontece por descuido) | Médio: fere a decisão de 19/nov | Checklist de revisão de tela antes de publicar (nome, logo, domínio, cliente, valores em R$); decisão sobre mostrar produto |
| 5 | **Números fora do liberado:** "1º milhão em 6 meses", lucro em reais, faturamento por pessoa sem confirmação | Média | Alto | Só R$ 30 mi e R$ 12 a 15 mi (faturamento), margem em %; o resto fica como [DADO] até o Bruno liberar |

---

## 7. Métricas de topo (olhar toda segunda)
Seguidor não é a métrica principal. As quatro que importam:
- Comentários "SISTEMA" por post com CTA.
- **% dos leads do direct na faixa-alvo** (meta [HIPÓTESE]: 40% ou mais). Se ficar abaixo de 20%, o conteúdo está atraindo o público errado; revisar ganchos.
- Aplicações do diagnóstico por semana e a origem de cada uma (pergunta "como me conheceu").
- Salvamentos e envios por alcance nos carrosséis (sinal de conteúdo útil para dono).

---

## 8. Próximos passos

| # | O quê | Quem | Quando |
|---|---|---|---|
| 1 | Decidir: teto de 6 diagnósticos em dezembro (ou manter 8 e cortar o conteúdo para 1 Reel por semana) | Bruno | até 21/nov |
| 2 | Aprovar a troca da isca (Raio-X no lugar do kit) e a palavra-chave "SISTEMA" | Bruno | até 21/nov |
| 3 | Decidir se o produto (bolsa) pode aparecer nas telas e se a história do mercadinho pode ser contada | Bruno | até 21/nov |
| 4 | No áudio de 15 min da esteira, descrever o sistema módulo por módulo (é a base do Raio-X e do Post 5) | Bruno | até 25/nov |
| 5 | Durante a BF, a esposa registra 3 a 5 bastidores e o Bruno anota as tarefas reais que a IA fez (preenche os [DADO] do Post 1) | Bruno + esposa | 26 a 30/nov |
| 6 | Montar o Raio-X (mapa, 12 perguntas, calculadora), a automação do direct com as 2 perguntas e a página de aplicação | `infoprodutor` + `marketing` | até 2/dez |
| 7 | Revisar a legenda do post fixado das plaquinhas e a bio | `estrategista-conteudo` (com `ig-profile-optimizer`) | até 28/nov |
| 8 | Calendário de 1 a 19/dez com os 5 posts acima, passe final do `ig-humanizer` e cards na lista Conteúdo do ClickUp | `estrategista-conteudo` | até 28/nov |
| 9 | Sessão de gravação 1 (Posts 3, 4 e 5 + 3 Reels de tese) | Bruno | semana de 1/dez |
| 10 | Revisão das métricas de topo junto com a revisão do mês da esteira; decidir o vídeo-âncora de janeiro e o subpilar do Público 2 | Bruno + `estrategista-conteudo` + `especialista-produto` | 19/dez |
