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
