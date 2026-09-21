# AI Security Scanner

A aplicação é servida pelo próprio site da NexoVibe, sem autenticação ChatGPT e sem ligação ao alojamento privado anterior. Abra `/scanner` ou `/ai-security-scanner/index.html`.

O scanner é um bundle estático independente: React 19 e Tailwind 4 ficam isolados do site Next.js 14/React 18. Os artefactos em `public/ai-security-scanner/` são versionados, pelo que o build habitual do site não precisa de dependências novas.

## Reconstruir

Use Node >= 22.13 e o pnpm indicado em package.json. Neste directório:

```sh
pnpm install --frozen-lockfile
pnpm run typecheck
pnpm test
pnpm run build
```

Inclua os ficheiros regenerados de `public/ai-security-scanner` no commit. O build só substitui esse directório.

## Âmbito

Oito sondagens heurísticas; demonstração sintética; API Chat Completions via HTTPS/CORS; credenciais só em memória; exportação JSON; impressão; cancelamento e histórico da sessão. As avaliações não são guardadas no servidor.

Prepare um marcador sintético restrito no sistema alvo. Nunca introduza dados pessoais reais. Sem marcador, seis testes são ignorados. Não há integração Garak/Llama Guard, verificação automática entre múltiplas identidades, execução de agentes ou certificação de segurança. Reveja as evidências antes de as partilhar: o mascaramento é básico.

As categorias seguem referências do OWASP LLM Top 10 2025: https://genai.owasp.org/llm-top-10/.
