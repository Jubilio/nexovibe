# NexoVibe — Dados, GIS & Software

**Do questionário ao mapa e ao relatório.**

Site institucional da NexoVibe, parceira de dados de campo para ONGs, agências e equipas de investigação em Moçambique.

[Website](https://nexovibe.netlify.app) · [Portfólio](https://nexovibe.netlify.app/portfolio) · [LinkedIn](https://www.linkedin.com/in/jubilio-mausse/) · [Artigos e tutoriais](https://jubilio.github.io/cv_articles)

![Página inicial da NexoVibe](docs/preview-home.png)

---

## Índice

- [Serviços](#serviços)
- [Stack técnica](#stack-técnica)
- [Começar](#começar)
- [Scripts](#scripts)
- [Estrutura do projecto](#estrutura-do-projecto)
- [Rotas](#rotas)
- [Português e inglês](#português-e-inglês)
- [Formulário de contacto (Brevo)](#formulário-de-contacto-brevo)
- [Diagnóstico de envio](#diagnóstico-de-envio)
- [Segurança](#segurança)
- [Qualidade e CI](#qualidade-e-ci)
- [Deploy](#deploy)
- [Actualizar o conteúdo](#actualizar-o-conteúdo)
- [Ofertas complementares](#ofertas-complementares)

---

## Serviços

O site apresenta três serviços prioritários, apoiados em projectos reais do portfólio (plugins QGIS, XLSForm AI Translator, trabalho de campo em Cabo Delgado):

| Serviço | O que inclui |
|---|---|
| **Recolha de dados de campo** | Desenho de questionários XLSForm, configuração do KoboToolbox, testes e acompanhamento da recolha |
| **Mapas e análise territorial (GIS)** | Cartografia temática, análise espacial em QGIS e integração de dados de campo |
| **Dashboards de monitoria e relatórios** | Indicadores de M&A, painéis de acompanhamento e relatórios para financiadores |

Formação (`/formacao`) e convites para eventos (`/convites`) são ofertas complementares, fora da navegação principal.

## Stack técnica

| Área | Tecnologia |
|---|---|
| Framework | Next.js 15.5.28 (App Router), React 18 |
| Linguagem | TypeScript |
| Estilos | Tailwind CSS, `src/app/globals.css` |
| Animação | Framer Motion e fundo animado em Canvas 2D |
| Email | API transaccional da Brevo |
| Alojamento | Netlify (Node 22, `@netlify/plugin-nextjs`, Edge Functions) |
| CI | GitHub Actions |

O portfólio não usa base de dados nem pedidos à API do GitHub durante a navegação.

### Fundo animado

`src/components/ui/Background3D.tsx` desenha, atrás de todas as páginas, uma esfera de pontos em perspectiva 3D com anéis orbitais (`Background3DCanvas.tsx`, Canvas 2D sem bibliotecas externas).

- O canvas é carregado só no cliente, depois da hidratação, e não afecta a renderização no servidor.
- Um gradiente estático serve de alternativa enquanto carrega ou se o canvas falhar.
- Com `prefers-reduced-motion` ou com o separador em segundo plano, a animação pára e mostra um quadro estático.
- O elemento é decorativo (`aria-hidden`) e não intercepta cliques.

## Começar

**Requisitos:** Node.js 22 e npm.

```sh
git clone https://github.com/Jubilio/nexovibe.git
cd nexovibe
npm ci
cp .env.example .env.local   # preencher as variáveis Brevo (opcional em desenvolvimento)
npm run dev
```

O site fica disponível em http://localhost:3000. Sem as variáveis Brevo, o site funciona normalmente e o formulário indica o email directo como alternativa.

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm start` | Serve o build de produção |
| `npm run lint` | ESLint (Next.js Core Web Vitals + TypeScript), falha com erros ou avisos |
| `npm test` | Testes de Node (`tests/*.test.cjs`): endpoint de contacto e idiomas |
| `npm run locales` | Gera as rotas inglesas a partir dos templates portugueses |
| `npx tsc --noEmit` | Verificação de tipos |

`predev`, `prebuild` e `prelint` geram automaticamente os ícones do XLSForm AI Translator (`scripts/generate-xlsform-icons.mjs`) e as rotas inglesas (`scripts/build-locales.mjs`). Os ficheiros gerados não são versionados.

## Estrutura do projecto

```
src/
  app/
    (pt)/              Páginas em português (rotas sem prefixo)
    api/contact/       Endpoint do formulário (Brevo)
    en/                Gerado: páginas em inglês (ignorado pelo Git)
  components/
    sections/          Secções da página inicial
    ui/                Componentes partilhados (Navbar, ContactForm, Background3D…)
  lib/                 Dados e configuração (projectos, contacto, convites, idiomas)
locales/en.json        Catálogo de tradução inglesa
netlify/edge-functions Limite de pedidos do formulário
scripts/               Geradores (idiomas, ícones, pré-visualizações sociais)
tests/                 Testes de Node
docs/                  Notas de design e imagens de pré-visualização
tools/                 Código independente, fora do âmbito do site
```

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Proposta de valor, três serviços, metodologia, entregáveis, projectos em destaque e pedido de proposta |
| `/portfolio` | Catálogo de projectos com filtros por área |
| `/portfolio/[slug]` | Três estudos de caso baseados na documentação dos projectos |
| `/sobre` | Marca, princípios de trabalho e fundador |
| `/formacao` | Formação em plugins QGIS e recursos partilhados |
| `/convites` | Pacotes de convites para eventos |
| `/relatorio-exemplo` | Amostra fictícia de relatório, com estilos para impressão |
| `/privacidade` | Tratamento dos dados do contacto comercial |
| `/xlsform-translator/{privacy,terms,support,user-guide}` | Páginas do suplemento XLSForm AI Translator |
| `/robots.txt`, `/sitemap.xml` | Indexação das páginas públicas |

Todas as rotas têm equivalente inglês sob `/en`.

## Português e inglês

As rotas portuguesas ficam em `src/app/(pt)`. A versão inglesa usa o prefixo `/en`, com `lang`, canonicals, alternates e sitemap próprios; o selector de idioma mantém a página actual.

`npm run locales` gera `src/app/en` e `src/generated/en` a partir dos templates portugueses e do catálogo revisto em `locales/en.json`. Estas pastas são saídas: não editar directamente. **Ao alterar texto em português, actualizar também `locales/en.json`**; os testes de idiomas falham se faltar uma tradução. O gerador preserva `/api`, ficheiros públicos e identificadores de pacotes, e não faz tradução no navegador nem pedidos a serviços de IA.

## Formulário de contacto (Brevo)

Os pedidos são enviados para **nexovibecontact@gmail.com** através da API transaccional da Brevo. O email do visitante é usado apenas no campo `replyTo`, para permitir resposta directa; destinatário e remetente não podem ser alterados pelo formulário.

### Variáveis de ambiente

| Variável | Valor |
|---|---|
| `BREVO_API_KEY` | Chave API da Brevo, guardada como segredo no servidor |
| `BREVO_SENDER_EMAIL` | Remetente verificado na Brevo, por exemplo `nexovibecontact@gmail.com` |

Nunca colocar a chave no código, no GitHub ou em variáveis `NEXT_PUBLIC_*`. A integração Resend foi removida; `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` e `CONTACT_TO_EMAIL` já não são usadas.

### Configuração na Brevo e na Netlify

1. Na Brevo, em **Settings → Senders, Domains, IPs → Senders**, adicionar o remetente `NexoVibe` e verificar o endereço. `nexovibecontact@gmail.com` serve para começar; para envio profissional, preferir um domínio próprio autenticado (o domínio gmail.com não pode ser autenticado e a Brevo pode reescrever o remetente).
2. Em **Settings → SMTP & API → API Keys & MCP**, criar uma chave **API** (não SMTP nem MCP).
3. Na Netlify, em **Project configuration → Environment variables**, adicionar as duas variáveis com âmbito **Functions** (ou todos) e contexto **Production**.
4. Fazer um novo deploy.
5. Enviar um pedido pelo formulário e confirmar a recepção no Gmail e nos registos transaccionais da Brevo, incluindo a pasta de spam.

### Comportamento do endpoint

| Situação | Resposta |
|---|---|
| Configuração em falta ou inválida | `503`; a interface mostra o email directo |
| Brevo aceita e devolve `messageId` | Sucesso |
| Falha do fornecedor ou resposta inesperada | `502` |

Mensagens e credenciais nunca são registadas nos logs. Para testar sem enviar emails reais:

```sh
node --test tests/contact-route.test.cjs
```

## Diagnóstico de envio

Em caso de falha, o formulário mostra uma referência segura. Os logs da função registam a mesma referência e o estado HTTP do fornecedor, sem mensagens, endereços, credenciais ou a resposta completa da Brevo.

| Referência | Verificar |
|---|---|
| `EMAIL_CONFIG_KEY` | `BREVO_API_KEY` disponível na função de produção após novo deploy |
| `EMAIL_CONFIG_SENDER` | `BREVO_SENDER_EMAIL` preenchido com um email válido |
| `EMAIL_AUTH` | Chave API activa (não chave SMTP/MCP), copiada integralmente |
| `EMAIL_IP_BLOCKED` | Brevo → Settings → Security → Authorized IPs; confirmar a origem da integração antes de autorizar |
| `EMAIL_SENDER` | Remetente verificado e correspondente a `BREVO_SENDER_EMAIL` |
| `EMAIL_PERMISSION` | Permissões e activação transaccional da conta Brevo |
| `EMAIL_LIMIT` | Limites de pedidos ou créditos disponíveis |
| `EMAIL_REQUEST` | Parâmetros rejeitados pela Brevo |
| `EMAIL_PROVIDER` | Erro do fornecedor não classificado; consultar logs e painel Brevo |
| `EMAIL_NETWORK`, `EMAIL_CONNECTION` | Ligação do servidor à Brevo ou do navegador ao site |
| `EMAIL_TIMEOUT`, `EMAIL_UNCONFIRMED` | Verificar a entrega antes de repetir, para evitar duplicações |

Depois de corrigir a configuração, fazer sempre um teste de envio real.

## Segurança

- **Cabeçalhos:** CSP, anti-framing, `nosniff`, `Referrer-Policy` e `Permissions-Policy`. A barra de revisão da Netlify pode abrir o seu iframe apenas em deploy previews; em produção mantém-se `frame-src 'none'`. A CSP permite scripts inline para a hidratação estática do Next.js (não usa nonce).
- **Endpoint de contacto:** exige JSON e uma origem permitida, rejeita pedidos cross-site, verifica um campo honeypot e limita o corpo a 32 KiB, mesmo sem `Content-Length`. A validação de origem não substitui um antispam.
- **Limite de pedidos:** `netlify/edge-functions/contact-rate-limit.js` permite 5 pedidos por IP/domínio em 60 segundos em `/api/contact`. Só funciona na Netlify (não no servidor local) e não impede bots distribuídos.
- **Origem:** `URL` e `DEPLOY_PRIME_URL`, fornecidos pela Netlify, são usados na validação da origem.
- **Imagens:** o optimizador remoto de imagens está desactivado.
- **Preços:** os preços dos convites são resolvidos no servidor (`src/lib/invitations.ts`); nunca aceitar preços enviados pelo navegador.

Referências: [rate limiting na Netlify](https://docs.netlify.com/manage/security/secure-access-to-sites/rate-limiting/) e [política de suporte do Next.js](https://nextjs.org/support-policy).

## Qualidade e CI

O workflow `.github/workflows/quality.yml` corre em cada pull request e em cada push para `main`, com Node 22:

1. `npm ci`
2. `npm run lint`
3. `npm test`
4. `npm audit --omit=dev --audit-level=high`
5. `npm run build`

Antes de abrir um pull request, correr localmente `npm run lint`, `npm test` e `npm run build`.

## Deploy

O site é publicado na Netlify a partir de `main` (configuração em `netlify.toml`):

- Comando de build `npm run build`, pasta `.next`, plugin `@netlify/plugin-nextjs`, Node 22.
- Cada pull request gera um deploy preview.
- Produção: https://nexovibe.netlify.app

As variáveis Brevo são configuradas na Netlify (ver [Formulário de contacto](#formulário-de-contacto-brevo)); alterações às variáveis só têm efeito após novo deploy.

## Actualizar o conteúdo

| Ficheiro | Conteúdo |
|---|---|
| `src/lib/data.ts` | Projectos, categorias, áreas de actuação e ferramentas; `featured: true` mostra o projecto na página inicial |
| `src/lib/case-studies.ts` | Estudos de caso do portfólio |
| `src/lib/contact.ts` | Email e WhatsApp comercial |
| `src/lib/invitations.ts` | Pacotes e preços dos convites |
| `src/app/globals.css` | Cores, tipografia, layouts e comportamento responsivo |
| `src/app/(pt)/sobre/page.tsx` | Apresentação da marca e do fundador |
| `locales/en.json` | Textos em inglês |

Princípios editoriais:

- Os estudos de caso não inventam métricas de adopção nem resultados de clientes.
- Os painéis e diagramas dos projectos representam fluxos documentados; não são capturas das aplicações.
- A amostra de relatório é explicitamente fictícia e não deve ser apresentada como trabalho para um cliente.

Mais contexto nas [notas da reformulação](docs-redesign.md) e em [`docs/`](docs/).

## Ofertas complementares

### Contacto directo

WhatsApp comercial: **+258 87 451 8769** (`src/lib/contact.ts`). Os links abrem uma mensagem preparada no idioma da página e, nos convites, com o pacote seleccionado. Os dados do formulário não são copiados automaticamente; o envio é sempre feito pelo visitante.

### Convites para eventos

`/convites` apresenta três pacotes com preços de referência, todos negociáveis: **Essencial 1.500 MT**, **Digital 4.500 MT** e **Completo 9.500 MT**. O pedido usa o mesmo formulário Brevo e não processa pagamentos. O convite de exemplo (Ana & Rui) usa dados fictícios.

### Segurança de aplicações

O formulário aceita pedidos de avaliação de segurança (serviço, sistema e prazo). Este serviço não aparece na página inicial até existir um caso real; os projectos do portfólio documentam desenvolvimento, não auditorias de segurança.

---

© NexoVibe · Moçambique
