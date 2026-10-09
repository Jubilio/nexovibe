# NexoVibe — Segurança de IA, Dados & WebGIS

Site institucional da NexoVibe: segurança de aplicações de IA, pentest Web/API e segurança de dados/WebGIS, com portfólio de engenharia preservado.

## Stack

Next.js 14 (App Router), React 18, TypeScript e Tailwind CSS. O formulário de contacto utiliza a API transaccional da Brevo. O portfólio não necessita de base de dados nem de pedidos à API GitHub durante a navegação.

## Executar

```sh
npm ci
npm run dev
```

```sh
npx tsc --noEmit
npm run build
npm start
```

`predev` e `prebuild` geram os ícones do XLSForm AI Translator a partir de `scripts/generate-xlsform-icons.mjs`. Os ficheiros gerados não precisam de ser versionados.

## Contacto

Os pedidos do formulário são enviados para **nexovibecontact@gmail.com**. O email do visitante é utilizado apenas no campo `replyTo`, permitindo responder directamente ao visitante. O destinatário e o remetente não podem ser alterados pelo formulário.

### Activar na Brevo e na Netlify

1. Na Brevo, em **Settings → Senders, Domains, IPs → Senders**, adicione um remetente com nome `NexoVibe` e verifique o endereço escolhido. Pode verificar `nexovibecontact@gmail.com` para começar; para envio profissional, prefira futuramente um domínio próprio autenticado. Gmail não permite autenticar o domínio gmail.com e a Brevo pode reescrever o endereço remetente para cumprir os requisitos dos fornecedores.
2. Em **Settings → SMTP & API → API Keys & MCP**, crie uma chave API para o site (não uma chave SMTP nem uma chave MCP).
3. No projecto NexoVibe na Netlify, abra **Project configuration → Environment variables** e adicione:

| Variável | Valor |
|---|---|
| `BREVO_API_KEY` | Chave API da Brevo, guardada como segredo no servidor |
| `BREVO_SENDER_EMAIL` | Endereço do remetente verificado na Brevo, por exemplo `nexovibecontact@gmail.com` |

4. As variáveis devem estar disponíveis para **Functions** (ou todos os âmbitos) e para o contexto **Production**. Faça um novo deploy após guardar.
5. Envie um pedido pelo formulário e confirme a recepção na caixa Gmail e nos registos transaccionais da Brevo. A aceitação pela API não garante entrega na caixa de entrada; confirme também spam e estado de entrega.

Para desenvolvimento, copie `.env.example` para `.env.local` e preencha os valores localmente. Não coloque a chave API no código, no GitHub ou em variáveis `NEXT_PUBLIC_*`. `RESEND_API_KEY` deixou de ser utilizada.

Sem configuração válida, o endpoint devolve 503 e a interface disponibiliza o email directo. Só é apresentado sucesso quando a Brevo aceita o envio e devolve `messageId`. Falhas do fornecedor ou respostas inesperadas devolvem 502. As mensagens e credenciais não são registadas no console.

Verificação local sem enviar emails reais: `node --test tests/contact-route.test.cjs`.

## Actualizar o conteúdo

- `src/lib/data.ts`: projectos, categorias, áreas de actuação e ferramentas.
- `featured: true`: inclui um projecto na selecção da página inicial.
- `src/app/globals.css`: cores, tipografia, layouts e comportamento responsivo.
- `src/app/sobre/page.tsx`: apresentação da marca, princípios e referência discreta ao fundador.

As descrições foram verificadas nos READMEs públicos em 18 de Setembro de 2026. Os painéis dos projectos são identificadores tipográficos, não capturas das aplicações. Consulte [as notas da reformulação](docs-redesign.md).

## Rotas

- `/` — serviços de segurança, metodologia, entregáveis, projectos em destaque e pedido de proposta.
- `/relatorio-exemplo` — amostra fictícia de relatório, com estilos para impressão.
- `/scanner` — acesso à ferramenta AI Security Scanner existente.
- `/portfolio` — catálogo de projectos com filtros por área.
- `/sobre` — marca e princípios de trabalho.
- `/xlsform-translator/privacy`, `/terms`, `/support` e `/user-guide` — páginas existentes do suplemento, sob o prefixo `/xlsform-translator`.

## Links

[Website](https://nexovibe.co.mz) · [GitHub](https://github.com/Jubilio) · [LinkedIn](https://www.linkedin.com/in/jubilio-mausse/) · [Artigos e tutoriais](https://jubilio.github.io/cv_articles)

## Oferta de segurança

O formulário inclui serviço, sistema a avaliar e prazo pretendido. Os dois últimos são incorporados na mensagem enviada pela API existente. O envio real depende de `BREVO_API_KEY` e `BREVO_SENDER_EMAIL`, com remetente verificado na Brevo. A amostra de relatório é explicitamente fictícia e não deve ser apresentada como auditoria de cliente ou certificação. Os projectos do portfólio documentam desenvolvimento, não contratos de segurança.

## Diagnóstico de envio

O formulário apresenta uma referência segura de erro. Os logs da função registam a mesma referência e o estado HTTP do fornecedor, sem mensagens, endereços, credenciais ou resposta integral da Brevo.

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
| `EMAIL_TIMEOUT`, `EMAIL_UNCONFIRMED` | Verificar entrega antes de repetir para evitar duplicações |

A referência identifica a categoria da falha, sem revelar detalhes sensíveis. Um teste de envio real é necessário após corrigir a configuração.


## Convites para eventos

A página `/convites` apresenta três pacotes, escolha de serviço com preço em MT e formulário de proposta. O pedido inclui pacote, preço resolvido no servidor, dados do evento e referências de design; usa a integração Brevo existente. Não processa pagamentos.

Preços de referência aprovados: Essencial 1.500 MT, Digital 4.500 MT e Completo 9.500 MT. Todos são negociáveis conforme as necessidades do evento; o valor final e as entregas são acordados na proposta. Os valores e a nota comercial estão em `src/lib/invitations.ts`, partilhados pela interface e pelo servidor; nunca aceitar preços enviados pelo navegador.

O convite Ana & Rui é uma composição ilustrativa com dados fictícios, sem informações dos convidados dos projectos anteriores. Funcionalidades adicionais ficam sob orçamento. O período de alojamento, convidados e suporte é definido em cada proposta.

Validação: `npm run build` e `node --test tests/contact-route.test.cjs` (transporte de email simulado, sem envio real).
