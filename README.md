# NEXO VIBE — Site Profissional

Stack: **Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Resend**

---

## 🚀 Iniciar em desenvolvimento

```bash
# 1. Instalar dependências
npm install

# 2. Copiar variáveis de ambiente
cp .env.example .env.local
# Edite .env.local e adicione a sua RESEND_API_KEY

# 3. Iniciar servidor de desenvolvimento
npm run dev
# Abra http://localhost:3000
```

---

## 📁 Estrutura do Projecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz (SEO, fontes)
│   ├── page.tsx            # Página inicial (/)
│   ├── globals.css         # Estilos globais + tokens
│   ├── servicos/
│   │   └── page.tsx        # Página de serviços (/servicos)
│   └── api/
│       └── contact/
│           └── route.ts    # API de contacto (email via Resend)
│
├── components/
│   ├── ui/
│   │   ├── Cursor.tsx      # Cursor personalizado animado
│   │   ├── Navbar.tsx      # Navegação fixa com scroll effect
│   │   ├── Footer.tsx      # Rodapé
│   │   ├── Reveal.tsx      # Wrapper de animação (Framer Motion)
│   │   ├── Icons.tsx       # Ícones SVG inline
│   │   └── ContactForm.tsx # Formulário de contacto com API
│   └── sections/
│       ├── HeroSection.tsx     # Hero com orbs e grid
│       ├── StatsBar.tsx        # Barra de estatísticas
│       ├── ServicesSection.tsx # Lista de 6 serviços
│       ├── ProcessSection.tsx  # Processo em 4 etapas
│       ├── ToolsSection.tsx    # Stack tecnológico
│       └── CTASection.tsx      # CTA + formulário de contacto
│
└── lib/
    └── data.ts             # Dados: serviços, stats, tools, steps
```

---

## 📧 Configurar emails (Resend)

1. Crie conta em [resend.com](https://resend.com) (gratuito até 3.000 emails/mês)
2. Crie uma API Key no dashboard
3. Adicione ao `.env.local`:
   ```
   RESEND_API_KEY=re_sua_chave_aqui
   ```
4. Verifique o seu domínio `nexovibe.co.mz` nas definições do Resend

---

## 🌐 Deploy no Vercel (recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Adicionar variáveis de ambiente no dashboard do Vercel:
# Settings → Environment Variables → RESEND_API_KEY
```

Ou directamente em [vercel.com/new](https://vercel.com/new) — importe o repositório GitHub e o Vercel detecta Next.js automaticamente.

---

## ➕ Adicionar novas páginas

Para criar a página `/portfolio`:

```bash
mkdir src/app/portfolio
# Criar src/app/portfolio/page.tsx
```

```tsx
// src/app/portfolio/page.tsx
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

export default function PortfolioPage() {
  return (
    <>
      <Navbar active="/portfolio" />
      <main>{/* conteúdo */}</main>
      <Footer />
    </>
  )
}
```

---

## 🎨 Personalizar dados

Edite `src/lib/data.ts` para actualizar serviços, estatísticas, ferramentas e passos do processo — sem tocar nos componentes.

---

## 📦 Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Iniciar em produção |
| `npm run lint` | Verificar erros TypeScript/ESLint |

---

© 2026 NEXO VIBE · Jubílio Maússe · Maputo, Moçambique
