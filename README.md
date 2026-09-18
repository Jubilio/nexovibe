# NexoVibe — Inteligência em Dados, GIS & Software

Site institucional e portfólio de soluções da NexoVibe: inteligência geoespacial, análise de dados e desenvolvimento de software.

## Stack

Next.js 14 (App Router), React 18, TypeScript e Tailwind CSS. O formulário de contacto utiliza a API Resend. O portfólio não necessita de base de dados nem de pedidos à API GitHub durante a navegação.

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

Configure `RESEND_API_KEY` no ambiente de alojamento e verifique o domínio `nexovibe.co.mz` no Resend para permitir o remetente `noreply@nexovibe.co.mz`. Para desenvolvimento local, pode definir a variável em `.env.local` (não versionado).

Sem esta configuração, o endpoint devolve 503 e a interface disponibiliza o email directo. Só é apresentado sucesso quando o fornecedor aceita o envio. As mensagens dos visitantes não são registadas no console.

## Actualizar o conteúdo

- `src/lib/data.ts`: projectos, categorias, áreas de actuação e ferramentas.
- `featured: true`: inclui um projecto na selecção da página inicial.
- `src/app/globals.css`: cores, tipografia, layouts e comportamento responsivo.
- `src/app/sobre/page.tsx`: apresentação da marca, princípios e referência discreta ao fundador.

As descrições foram verificadas nos READMEs públicos em 18 de Setembro de 2026. Os painéis dos projectos são identificadores tipográficos, não capturas das aplicações. Consulte [as notas da reformulação](docs-redesign.md).

## Rotas

- `/` — apresentação institucional, projectos em destaque, áreas de actuação e contacto.
- `/portfolio` — catálogo de projectos com filtros por área.
- `/sobre` — marca e princípios de trabalho.
- `/xlsform-translator/privacy`, `/terms`, `/support` e `/user-guide` — páginas existentes do suplemento, sob o prefixo `/xlsform-translator`.

## Links

[Website](https://nexovibe.co.mz) · [GitHub](https://github.com/Jubilio) · [LinkedIn](https://www.linkedin.com/in/jubilio-mausse/) · [Artigos e tutoriais](https://jubilio.github.io/cv_articles)
