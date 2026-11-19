# Análise do funil: venda e esteira

> Autor: lancamentos-mentorias · Data: 19/nov/2026 · Revisa: `produto/esteira-v1.md`
> Base: `.claude/context/bruno.md` (Decisões de 19/nov) e `benchmarking/criadores-ecommerce-v1.md`.
> Convenções: **[HIPÓTESE]** = preço, taxa ou meta sem dado próprio. **[DADO: ...]** = só o Bruno tem.
> Regra de público: nada de nome das empresas, Creator OS ou gateway em conteúdo, mensagem ou material de venda. Pode mostrar "o sistema" (AI OS) e falar "minha loja", "minhas operações".

---

## 0. Veredito

**Dá certo com ajustes.** A porta de entrada está certa: diagnóstico pago, vendido de pessoa para pessoa na rede quente. O problema está na conta de horas e na passagem para a mentoria. Do jeito que está na V1:

1. **O diagnóstico ocupa o mês inteiro do Bruno.** A V1 prevê 8 a 10 diagnósticos de ~3 h, ou seja, 24 a 30 h. O teto decidido é de 30 h/mês para **toda** a marca pessoal (conteúdo, vendas e entregas). Sobra zero para conteúdo, para vender e para a mentoria.
2. **A turma de 8 empresas em janeiro não fecha na conta da própria V1.** 6 a 8 diagnósticos com 30 a 40% de conversão dão 2 a 3 clientes high-ticket, e esses ainda se dividem entre mentoria e implementação. O workshop, que seria a segunda fonte, depende de lista (300+ leads), que não vai existir em janeiro. Para piorar, de 20/dez a ~6/jan ninguém decide nada.
3. **A promessa depende de um ativo que ainda não está empacotado.** A seção "Sistemas e automações" do `bruno.md` está pendente e o implementador ainda não foi contratado. Diagnóstico, mentoria e implementação prometem instalar "o sistema", mas ninguém documentou ainda o que o sistema é, em formato que dê para replicar.

Com os ajustes da seção 7, o mês 1 valida o diagnóstico e o primeiro trimestre de 2027 roda **uma turma fundadora pequena e duas implementações piloto**, dentro das 30 h.

---

## 1. O Diagnóstico 1:1 é a melhor porta de entrada?

**Sim, como primeiro produto.** É o único formato que:
- vende sem audiência (só rede quente);
- coloca dinheiro na mesa, o que valida a dor de verdade (elogio de amigo não valida);
- gera o currículo da mentoria e o escopo da implementação a partir de dores reais;
- filtra quem não está pronto. R$ 2.000 [HIPÓTESE] é pouco para quem fatura R$ 100 mil/mês ou mais, mas é suficiente para afastar curioso.

O benchmarking confirma que o espaço existe: o ENP faz uma call de triagem de 15 min gratuita, o G4 cobra de R$ 9,9 mil a R$ 29,9 mil por imersão, e entre os dois não há um diagnóstico "de operador para operador".

**O risco real é virar consultoria barata.** Isso acontece em três casos:
| Gatilho de "consultoria barata" | Como evitar |
|---|---|
| Na call, o Bruno ensina **como** fazer (prompts, ferramentas, passo a passo) | Diagnóstico entrega **o quê** e **quanto vale**. O **como** é mentoria ou implementação. Regra da call: perguntar 70%, falar 30% |
| O entregável "primeiro agente configurado" (V1) obriga a instalar algo na operação do cliente | Trocar por **1 template de agente entregue + vídeo de 5 min** de como usar. Ninguém instala nada no diagnóstico |
| O próximo passo é apresentado no fim da call de 90 min, com o cliente cansado e sem o plano na mão | Separar em **call de mapeamento (75 min)** e **devolutiva (30 min)**. O próximo passo aparece na devolutiva, junto com o plano escrito |

**Crédito integral e garantia: manter, com dois ajustes.**
- **Garantia:** vale até o fim da **devolutiva**, não da call de mapeamento. O cliente julga o valor quando vê o plano. Texto: "Se, depois de ver o plano, você achar que não valeu os R$ 2.000, eu devolvo tudo."
- **Crédito:** a regra de "30 dias" vence no meio do recesso para quem fizer o diagnóstico em dezembro. Trocar por **"crédito válido para fechar até 16/jan/2027"** no lote de dezembro e, a partir daí, 30 dias corridos.

**Teto real:** **5 diagnósticos em dezembro (no máximo 6)**, e não 8 a 10. A conta está na seção 5.

---

## 2. Desenho da call e do relatório para o próximo passo ser natural

Princípio: o cliente sai da devolutiva com um plano bom o bastante para executar sozinho. Mesmo assim, ele mesmo percebe que não tem tempo, método ou braço técnico para executar. A venda acontece porque o plano é bom, não porque falta pedaço.

### 2.1 Fluxo completo
| Etapa | Quem | Tempo do Bruno |
|---|---|---|
| Pagamento → questionário automático → agendamento | Automação | 0 |
| Agente consolida o questionário num briefing de 1 página | Agente | 0 |
| Leitura do briefing | Bruno | 15 min |
| Call de mapeamento (gravada, transcrita) | Bruno | 75 min |
| Rascunho do relatório a partir da transcrição | Agente + implementador (quando contratado) | 0 |
| Revisão do relatório | Bruno | 30 min |
| Devolutiva (plano + caminhos) | Bruno | 30 min |
| Follow-up D+3, D+10 e D+30 (agente redige, Bruno aprova) | Agente + Bruno | 10 min |
| **Total** | | **~2 h 40 a 3 h** |

### 2.2 Questionário pré-call (o que precisa coletar)
- Faturamento médio mensal (faixa), canais (loja própria, marketplace, Instagram, WhatsApp), ticket médio.
- Time: quantas pessoas, em que funções, quanto custa a folha [opcional].
- Stack atual: plataforma da loja, ERP, atendimento, ads, planilhas, onde ficam os dados.
- Semana do dono: 5 tarefas que só ele faz e quantas horas cada uma toma.
- Horas manuais por área, **estimadas pelo próprio cliente** (relatório, atendimento, pedido/estoque, criativo, financeiro).
- Como sabe hoje a margem por produto e por campanha, e quanto tempo leva para saber.
- Meta para 2027 e o que impede de chegar lá.
- "Se eu pudesse resolver uma coisa só na sua operação, qual seria?"

### 2.3 Roteiro da call de mapeamento (75 min)
1. **Abertura (0 a 5 min)**
   - Combinar o objetivo: "Hoje eu só quero entender a sua operação. Não vou te vender nada nesta call. Em até 5 dias eu te devolvo o plano por escrito numa call de 30 min."
   - Pedir autorização para gravar.
2. **Foto da operação (5 a 20 min)**
   - Validar os números do questionário: faturamento, canais, time, sazonalidade, como foi a Black Friday.
   - "O que mudou na operação nos últimos 12 meses?"
3. **Rotina do dono e gargalos (20 a 40 min)**
   - "Me descreve sua última terça-feira, da hora que acordou até desligar."
   - "O que só você sabe fazer? Se você sumir 15 dias, o que trava?"
   - Repassar as horas manuais por área e pedir que o cliente reestime em voz alta.
4. **Dados e decisão (40 a 55 min)**
   - "De onde vem o número que você olha primeiro de manhã? Quanto tempo leva para chegar nele?"
   - Criativo e ads: quem decide o que sobe, com base em quê, com que frequência.
   - Atendimento e pós-venda: volume, tempo de resposta, quem responde.
5. **Meta e custo de não fazer (55 a 65 min)**
   - "Onde você quer estar em dez/2027? O que te impede hoje?"
   - "Se nada mudar na operação, como fica o seu 2027?" (é pergunta, não afirmação. O número é do cliente.)
6. **Fechamento (65 a 75 min)**
   - O Bruno resume em voz alta os 3 achados principais e pede confirmação: "Faz sentido? Esqueci algo?"
   - Marcar a devolutiva para no máximo D+5.
   - "Na devolutiva te mostro o plano e as opções para executar, inclusive sozinho."

**Regras da call:** não ensinar ferramenta nem prompt. Anotar as frases literais do cliente (viram copy e critério de sucesso). Não citar parceiros nem empresas. Pode mostrar 2 min do próprio sistema em tela, só como prova, sem expor nome de empresa nem dado de cliente.

### 2.4 Estrutura do relatório (8 a 10 páginas, padrão fixo)
1. **Foto da operação** (1 página): números e stack, nas palavras do cliente.
2. **Os 3 gargalos**, cada um com a frase literal do cliente.
3. **Mapa de horas manuais por área**, estimadas pelo cliente, e o que isso representa em custo ou tempo do dono. A conta usa os números do cliente, nunca os do Bruno.
4. **Top 5 oportunidades de IA**, numa matriz impacto x esforço, com o pré-requisito de cada uma (dado, ferramenta, pessoa).
5. **Plano de 90 dias**: mês 1, 2 e 3, com o que fazer, quem faz e como medir.
6. **Quick win entregue:** 1 template de agente + vídeo curto, para usar amanhã.
7. **O que medir:** 3 indicadores, com o valor de hoje e o alvo em 90 dias.
8. **Página final: "Como executar este plano"**, com os 3 caminhos (abaixo). É informativa, não página de vendas.

### 2.5 Roteiro da devolutiva (30 min)
1. **(0 a 15 min) O plano.** Percorrer gargalos, top 5 e plano de 90 dias. Perguntar: "Isso bate com o que você sente?"
2. **(15 a 18 min) O quick win:** "Testa isso amanhã."
3. **(18 a 25 min) Os 3 caminhos**, apresentados com a mesma seriedade:
   - **Fazer sozinho:** "Você tem o plano e o template. Se tiver alguém no time com tempo e jeito para tecnologia, dá para executar. Te procuro em 30 dias para ver como foi."
   - **Fazer com método, em grupo:** "Turma fundadora com [4 a 6] empresas, 12 semanas, encontro semanal comigo. Cada semana instala uma parte deste plano. Começa [data]. Seus R$ 2.000 viram crédito até 16/jan."
   - **Feito por nós:** "Meu implementador instala as automações [X, Y, Z] do seu plano em 6 a 8 semanas, com escopo fechado. Eu reviso o escopo e acompanho as entregas."
4. **(25 a 30 min)** "Qual desses faz mais sentido para você agora?" Depois, silêncio.
   - Se escolher um caminho pago: enviar a proposta no mesmo dia.
   - Se disser "vou pensar": "Claro. O que precisaria estar claro para você decidir?" e marcar data de retorno.
   - Se escolher fazer sozinho: respeitar e marcar o follow-up de D+30. Esse cliente vira case de diagnóstico se implementar.

**Critério honesto de recomendação** (o Bruno indica um caminho, não os três por igual):
| Situação do cliente | Recomendação |
|---|---|
| Tem pessoa técnica com tempo no time | Sozinho (ou turma, se quiser método) |
| Dono quer dominar o sistema, time pequeno, sem técnico | Turma fundadora |
| Dono sem tempo, faturamento alto, quer resultado instalado | Implementação |
| Operação desorganizada na base (sem dado mínimo, sem processo) | Sozinho, com o plano de arrumar a base primeiro. **Não vender high-ticket** |

---

## 3. A passagem diagnóstico → mentoria em grupo é realista?

**Com 8 empresas em janeiro, não.** A conta:
- Dezembro realista: 5 diagnósticos (seção 5). Conversão para high-ticket de 30 a 40% [HIPÓTESE] dá **2 clientes**, divididos entre turma e implementação.
- O workshop de janeiro exige lista de 300+ leads [HIPÓTESE da V1], que não existe hoje [DADO: seguidores e tamanho da rede].
- De 20/dez a ~6/jan a decisão de compra para. Sobram ~10 dias úteis em janeiro para fechar o restante.

### Comparação das alternativas
| Opção | Horas do Bruno/mês | Ticket [HIPÓTESE] | Escala | Risco | Gera case? | Veredito |
|---|---|---|---|---|---|---|
| Turma de 8+ em jan (V1) | ~10 h | R$ 15 mil/empresa | Alta | Não fechar a turma e adiar, ou abrir com 3 alunos e baixa energia | Sim, vários | Não, por enquanto |
| **Turma fundadora de 4 a 6 empresas, início ~26/jan** | ~10 h (fixo) | R$ 8 a 10 mil/empresa, preço de fundador em troca de case autorizado | Média | Grupo pequeno demais se fechar só 2 a 3 | Sim, 4 a 6 | **Sim (principal)** |
| Mentoria individual high-ticket | 3 a 4 h por cliente | R$ 20 a 30 mil por 12 semanas | Nenhuma: cada cliente come horas fixas | Vira consultoria e bloqueia a agenda | Sim, 1 | **Só exceção:** no máximo 1, para quem fatura muito acima da faixa e paga premium |
| **Implementação direta** (implementador executa) | ~2 h por cliente/mês | Setup R$ 30 a 80 mil + mensal (V1) | Limitada pelo implementador | Implementador ainda não contratado; risco de virar agência | Sim (técnico) | **Sim, em paralelo, piloto de 2** |

### Recomendação
- **Turma fundadora com mínimo de 4 empresas**, vendas de 10/dez a 16/jan e início na semana de 26/jan [sugestão de data]. Janeiro é baixa temporada para e-commerce, então o dono tem tempo.
- **Duas fontes de alunos, e não só o diagnóstico:**
  1. clientes do diagnóstico que escolherem esse caminho;
  2. **oferta direta** da turma a quem já conhece o Bruno e não quer passar pelo diagnóstico. Nesse caso o diagnóstico vem incluso, na versão enxuta, na semana 1 da turma.
- **Gate em 16/jan:**
  - 4 ou mais pagantes: roda.
  - 2 a 3 pagantes: roda como "grupo de mentoria" quinzenal com os mesmos encontros, mesmo preço e mais hot seat. Não cancelar: quem pagou recebe.
  - 0 a 1 pagante: converter em mentoria individual ou devolver, e revisar a oferta.
- **Implementação em paralelo**, com o implementador começando os projetos em fevereiro, depois do onboarding.

---

## 4. Script de abordagem da rede quente (WhatsApp)

Regras: mensagem pessoal, escrita ou em áudio, do número do Bruno. Lotes de 20. Nunca em massa nem em lista de transmissão. Sem nome de empresa, parceiro ou terceiro. "Faturamento", nunca "lucro".

### 4.1 Mensagem 1: empresário de e-commerce que o Bruno conhece bem
> Fala, [nome]! Passou a Black Friday? Como foi aí?
>
> Te chamo por um motivo direto. Este ano eu montei um sistema com IA que centraliza a gestão das minhas lojas num lugar só: números, criativos, atendimento e rotina do time. Hoje faturo R$ 12 a 15 milhões por ano com 8 pessoas.
>
> Em dezembro vou fazer um diagnóstico de operação com 5 empresários que eu conheço. É 1 call comigo e, poucos dias depois, você recebe o plano por escrito: onde a IA tira trabalho manual da sua operação e o que fazer nos primeiros 90 dias de 2027.
>
> Quer que eu te mande como funciona?

### 4.2 Mensagem 2: contato mais distante ou indicação
> Oi, [nome], tudo bem? Aqui é o Bruno, [contexto: de onde se conhecem / quem indicou].
>
> Eu opero e-commerce e uso IA na gestão das minhas operações. Em dezembro abri 5 vagas para um diagnóstico com donos de loja que já faturam: mapeio sua operação numa call e te entrego um plano de 90 dias com as automações de maior impacto.
>
> Faz sentido para o seu momento? Se fizer, te mando os detalhes.

### 4.3 Resposta "como funciona" (depois do sim)
> Funciona assim:
> 1. Você responde um questionário de 10 min.
> 2. Fazemos 1 call de 75 min (eu só pergunto e entendo a operação).
> 3. Em até 5 dias te entrego o plano por escrito numa call de 30 min, com um agente pronto para você usar no dia seguinte.
>
> Investimento: R$ 2.000. Se, depois de ver o plano, você achar que não valeu, devolvo tudo. E se quiser seguir comigo na execução, os R$ 2.000 viram crédito.
>
> Antes de fechar, me responde 4 coisas rápidas para eu ver se faz sentido para você:
> - faturamento médio por mês (faixa);
> - quantas pessoas no time;
> - onde você vende hoje;
> - o que mais toma o seu tempo na operação.

### 4.4 Follow-up (D+3 sem resposta)
> [nome], só para não deixar solto: das 5 vagas, restam [X]. Se não for o momento, sem problema, me fala que eu te deixo na lista para o próximo lote.

Escassez real: o número de vagas é o que de fato sobra. Se lotar, lotou.

### 4.5 Objeções comuns
| Objeção | Resposta |
|---|---|
| "Já uso ChatGPT" | "Ótimo, então você já tem a base. O diagnóstico não é sobre a ferramenta, é sobre onde ela gera mais retorno na sua operação e em que ordem atacar." |
| "Manda um material" | Mandar o "como funciona" (4.3) e 1 vídeo de 2 min do sistema em tela, sem nome de empresa. Perguntar: "Qual parte faz mais sentido para você?" |
| "Agora não, só depois do Natal" | "Tranquilo. Quer que eu já reserve a call para a semana de 6/jan? Assim você começa o ano com o plano." |
| "É caro" | "Se o plano não valer R$ 2.000 para você, eu devolvo. E se seguir comigo, vira crédito." Não dar desconto. |
| "Faz de graça para mim, a gente é amigo" | "Para amigo eu faço o melhor diagnóstico, por isso cobro: assim você leva a sério e eu também." Pode oferecer a garantia de novo. |

### 4.6 Qualificação: quem NÃO deve entrar
- Ainda não vende, quer "começar no digital" → vai para a trilha do segundo público (seção 6), com outra oferta.
- Fatura abaixo da faixa-alvo [HIPÓTESE: R$ 100 mil/mês] → agradecer e convidar para a lista.
- Quer alguém para "fazer o tráfego" → não é o produto. Recusar.

---

## 5. Capacidade real com 30 h/mês e 1 implementador

### 5.1 Dezembro (validação)
| Bloco | Horas |
|---|---|
| Conteúdo (bastidores da BF, 2 posts de IA, stories de vagas) | 4 h |
| Vendas: 60 abordagens em 3 lotes + conversas de qualificação | 7 h |
| Diagnósticos: 5 × ~3 h (mapeamento + revisão + devolutiva) | 15 h |
| Propostas e calls de fechamento (turma e implementação) | 3 h |
| Contratação e briefing do implementador | 1 h (mais o processo seletivo, fora da cota se possível) [DADO: quem conduz] |
| **Total** | **30 h** |

**Capacidade em dezembro: 5 diagnósticos (teto 6).** Para chegar a 8, seria preciso zerar conteúdo e vendas.

### 5.2 Fevereiro a abril (turma fundadora + implementações)
| Bloco | Horas/mês |
|---|---|
| Turma fundadora: 4 a 5 encontros de 90 min + preparo + grupo | 10 h |
| Conteúdo | 8 h |
| Supervisão de implementação: revisão de escopo e checkpoints (2 clientes × 2 h) | 4 h |
| Vendas: calls de fechamento e aprovações | 4 h |
| Diagnósticos no formato enxuto | 4 h (1 a 2 diagnósticos) |
| **Total** | **30 h** |

**Capacidade de entrega por mês:**
- **1 turma ativa** de 4 a 6 empresas (é a mesma carga de horas para 4 ou para 10, por isso a turma é o produto protegido);
- **2 implementações simultâneas**, o que dá ~1 nova por mês, considerando 6 a 8 semanas cada (limite do implementador, não do Bruno);
- **1 a 2 diagnósticos**. Para voltar a 4 ou mais, o implementador assume a leitura do briefing e o rascunho do relatório, e o Bruno faz só o mapeamento e a devolutiva (~2 h cada).

**Capacidade de venda:** ~4 a 6 calls de fechamento por mês. O gargalo é o Bruno ser o único closer. A partir da 2ª turma, avaliar se uma das vendedoras assume a qualificação [DADO: perfil].

### 5.3 Receita ilustrativa por trimestre [tudo HIPÓTESE, só para dimensionar]
| Fonte | Volume | Preço | Total |
|---|---|---|---|
| Diagnósticos (dez + fev a abr) | 5 + ~4 | R$ 2.000 | ~R$ 18 mil (parte vira crédito) |
| Turma fundadora | 4 a 6 | R$ 8 a 10 mil | R$ 32 a 60 mil |
| Implementação piloto | 2 | setup R$ 30 mil + R$ 3 mil/mês | R$ 60 mil + recorrência |
| Custo do implementador | 3 meses | [DADO: salário ou PJ] | (−) |

Esses números não vão para conteúdo. Servem para o Bruno decidir se vale as 30 h.

### 5.4 Condição para o implementador gerar capacidade
Contratar em dezembro e dar a ele, como **primeira tarefa** (dez a meados de jan), **empacotar o sistema do Bruno**: inventário dos agentes e automações que já rodam, o kit de 5 agentes-template e um playbook de instalação. Sem isso, cada implementação vira projeto artesanal que puxa o Bruno. Implementação só começa em fevereiro.

---

## 6. Segundo público: empresário com capital e sem nada online

**Leitura franca:** é um cliente de ticket alto e com dinheiro, mas é **outro produto**. A prova do Bruno é operar e escalar e-commerce, e o 1º milhão (2022, dropshipping) não é método replicável para negócio físico. Se esse público entrar no conteúdo ou na turma de operadores, ele dilui o posicionamento ("para quem já fatura") e trava o grupo (o estágio é outro). Ele entra **por indicação e rede quente**, não pelo conteúdo.

### Oferta que faz sentido: "Montagem da Operação Digital com IA"
| Degrau | Oferta | O que entrega | Preço [HIPÓTESE] |
|---|---|---|---|
| Entrada | **Diagnóstico de Entrada no Digital** (variante do diagnóstico) | Modelo recomendado (loja própria, marketplace, Instagram/WhatsApp ou combinação), stack mínima, time mínimo, orçamento de teste de 90 dias e **critérios de validação** (quando escalar, quando parar) | R$ 3 a 5 mil (mais trabalho que o diagnóstico de operador) |
| Principal | **Montagem** (done-for-you, escopo fechado) | Loja/canal no ar, catálogo, atendimento e pós-venda com IA, painel de números, rotina do time. Criativo e tráfego com parceiro ou freelancer indicado | Setup [HIPÓTESE: R$ 40 a 100 mil] conforme escopo |
| Recorrência | **Conselho mensal com o Bruno** (advisory) + suporte do implementador | 1 call mensal de decisão e manutenção das automações | [HIPÓTESE: R$ 3 a 6 mil/mês] |

**Promessa honesta:** "Em [X] semanas sua operação digital está no ar, com o sistema de gestão com IA rodando e um plano de teste de 90 dias com critérios claros." **Nunca prometer faturamento.** Não há case desse público ainda.

**Em que degrau entra:** trilha paralela. Entra no diagnóstico (variante), pula a mentoria em grupo e vai direto para implementação + advisory. Na mentoria ele só cabe depois de ter operação faturando.

**Quando:** não prospectar ativamente na fase 1. Aceitar **no máximo 1 piloto** se aparecer na rede quente, com início em março ou depois, quando o implementador já tiver feito 1 implementação para operador. Para o criativo e o tráfego é preciso parceiro [DADO: o Bruno tem freelancer ou parceiro de criativo e tráfego que possa indicar?]. Sem isso, o Bruno vira agência.

**Cuidado:** empresário com capital costuma propor sociedade ("entra comigo que eu ponho o dinheiro"). Definir a regra antes [DECISÃO BRUNO: aceita ou não propostas de sociedade nessa trilha?].

---

## 7. Ajustes recomendados na esteira V1 (em ordem de importância)

1. **Redesenhar o diagnóstico:** mapeamento de 75 min + devolutiva de 30 min separada (onde aparece o próximo passo), template entregue em vez de agente instalado, garantia até a devolutiva, crédito até 16/jan, **teto de 5 em dezembro**.
2. **Trocar "turma de 8 em janeiro" por "turma fundadora de 4 a 6, início ~26/jan"**, com venda direta na rede quente além do diagnóstico e com o gate de 16/jan da seção 3. Implementação piloto (2) em paralelo, a partir de fevereiro.
3. **Contratar o implementador já em dezembro, com a primeira missão de empacotar o sistema** (inventário, kit de 5 agentes, playbook). Isso destrava a implementação e tira o rascunho do relatório das mãos do Bruno.
4. Segundo público só como trilha paralela de implementação, com no máximo 1 piloto a partir de março.
5. Workshop só depois de a lista ter tamanho [HIPÓTESE: 300+ qualificados]. Provavelmente no 2º trimestre de 2027, e não em janeiro.

### Ligação interna com a infraestrutura (NÃO publicar)
O questionário e o relatório inventariam a stack do cliente (meios de pagamento, uso de creators e UGC, dados). Esse inventário vai para o CRM com tags, e vira a lista interna de interessados para o futuro beta do Creator OS e do gateway. Nenhuma menção a esses produtos em mensagem, call, relatório ou conteúdo.

---

## 8. Metas por etapa (dezembro) [HIPÓTESE, substituir pelos números reais]
| Etapa | Meta | Taxa |
|---|---|---|
| Nomes da rede quente | 60 | n/a [DADO: tamanho real da rede] |
| Respondem | 30 | 50% |
| Qualificados (respondem às 4 perguntas e estão na faixa) | 15 | 50% |
| Compram o diagnóstico | 5 (teto 6) | ~33% |
| Comparecem à devolutiva | 5 | 100% (pré-pago) |
| Fecham turma ou implementação até 16/jan | 2 | 40% |
| Turma fundadora (diagnóstico + venda direta) | 4 a 6 | n/a |

**Critério de corte (19/dez):** menos de 3 diagnósticos com 40 ou mais abordagens → revisar promessa e preço antes de abrir a turma. Com 3 diagnósticos e nenhum interessado no próximo passo, o diagnóstico está entregando demais ou mirando o público errado. Rever o roteiro da seção 2.

---

## 9. Próximos passos

| # | O quê | Quem | Quando |
|---|---|---|---|
| 1 | Aprovar os ajustes da seção 7 (formato do diagnóstico, teto de 5, turma fundadora de 4 a 6, crédito até 16/jan) | Bruno | até 21/nov |
| 2 | Responder: tamanho da rede quente, preço da turma fundadora (faixa R$ 8 a 10 mil?), regra de sociedade no 2º público | Bruno | até 21/nov |
| 3 | Abrir a vaga do implementador com a missão de empacotar o sistema; definir quem conduz a seleção | Bruno | até 25/nov |
| 4 | Listar os 60 nomes, marcando "operador" ou "sem online" | Bruno | até 25/nov |
| 5 | Produzir questionário, template de briefing, modelo de relatório (seção 2.4), roteiros de call e devolutiva e mensagens finais (seção 4) | `lancamentos-mentorias` + `infoprodutor` | até 28/nov |
| 6 | Gravar o vídeo de 2 min do sistema em tela, sem nome de empresa nem dado de cliente | Bruno | até 2/dez |
| 7 | Desenhar a ficha da turma fundadora (12 semanas, currículo provisório, preço, data) para apresentar nas devolutivas | `lancamentos-mentorias` + `especialista-produto` | até 9/dez |
| 8 | Abordagem em 3 lotes de 20 | Bruno | 3 a 9/dez |
| 9 | Diagnósticos e devolutivas; registrar dores, objeções e caminho escolhido no CRM | Bruno + agente de relatório | 3 a 19/dez |
| 10 | Revisão com números reais: decidir sobre a turma e a data do 1º piloto de implementação | Bruno + `especialista-produto` + `lancamentos-mentorias` | 19/dez |
| 11 | Gate da turma fundadora (4 ou mais pagantes) | Bruno | 16/jan/2027 |
