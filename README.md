# Next Supabase Auth Starter

Starter Full Stack em Next.js (App Router) + Supabase, com rotas de autenticação, área protegida, rotas públicas, API Routes e estrutura pronta para Edge Functions, storage e migrations.

## Recursos
- App Router (Next 14+) com grupos `(auth)`, `(dashboard)` e `(marketing)`
- Autenticação preparada (email/senha, reset, verificação, placeholders de OAuth)
- Área protegida (dashboard) com layout e componentes base
- API Routes para `auth`, `admin` e `webhooks` (Stripe e Supabase)
- Providers de `Supabase`, `Theme` e `Toast`
- Migrations, storage policies e Edge Functions em `supabase/`
- Utilitários, hooks e actions preparados para evolução

## Stack
- `next` 14, `react` 18, `typescript`
- `@supabase/supabase-js` v2
- Tailwind configurado (plugins opcionais), estilos mínimos prontos

## Arquitetura

```text
next-supabase-auth-starter/
├── app/
│   ├── (auth)/                # login, signup, forgot/reset, verify, oauth/callback
│   ├── (dashboard)/           # dashboard, profile, settings, admin
│   ├── (marketing)/           # páginas públicas
│   ├── layout.tsx             # layout raiz
│   ├── page.tsx               # landing simples
│   ├── loading.tsx            # loading global
│   ├── error.tsx              # error boundary
│   ├── not-found.tsx          # 404
│   └── globals.css            # estilos globais do app
│
├── components/
│   ├── ui/                    # componentes base (button, input, card, form)
│   ├── auth/                  # formulários e blocos de auth
│   ├── dashboard/             # sidebar, header, stats, activity
│   ├── layout/                # navbar, footer, theme-toggle
│   └── providers/             # supabase, theme, toast
│
├── lib/
│   ├── supabase/              # clients, middleware, types
│   ├── utils/                 # cn, formatters, validators, constants
│   ├── hooks/                 # useAuth, useSupabaseClient, useMediaQuery
│   ├── actions/               # server actions (auth, profile, settings)
│   └── config/                # site, supabase, theme
│
├── supabase/
│   ├── migrations/            # schema inicial, profiles, audit_logs
│   ├── storage/               # policies de buckets (avatars, documents)
│   ├── functions/             # handle-signup, stripe-webhook
│   └── seed.sql               # dados iniciais
│
├── types/                     # tipos TS globais
├── styles/                    # estilos adicionais
├── public/                    # estáticos
├── middleware.ts              # proteção de rotas (ajustável)
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── .env.example
└── .gitignore
```

## Pré-requisitos
- Node.js 18+
- Conta e projeto no Supabase
- Repositório remoto configurado (GitHub, etc.)

## Configuração
1. Crie um projeto no Supabase e obtenha:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
2. Copie `.env.example` para `.env.local` e preencha as variáveis.
3. (Opcional) Configure storage buckets e policies conforme `supabase/storage/*/policies.sql`.
4. Aplique migrations e seed no Supabase:
   - Execute os arquivos em `supabase/migrations/` na aba SQL
   - Execute `supabase/seed.sql` para dados iniciais

## Desenvolvimento
- Instalar dependências: `npm install`
- Rodar ambiente: `npm run dev`
- Typecheck: `npm run typecheck`
- Lint: `npm run lint`

## Autenticação
- Forms em `components/auth/*` (login, signup, forgot-password)
- Actions stub em `lib/actions/auth.ts` (integre com Supabase)
- Provider de cliente Supabase:
  - `components/providers/supabase-provider.tsx`
- Client server-side disponível:
  - `lib/supabase/server.ts`

## Proteção de Rotas
- Middleware básico: `middleware.ts`
- Ajuste regras e redirecionamentos conforme sua política de sessão (leitura de cookies/jwt do Supabase ou verificação via server actions).

## API Routes
- `app/api/auth/session/route.ts` — sessão atual
- `app/api/auth/callback/route.ts` — retorno de OAuth
- `app/api/webhooks/stripe/route.ts` — webhook Stripe
- `app/api/webhooks/supabase/route.ts` — eventos do Supabase
- `app/api/admin/users/route.ts` — listagem administrativa

## Edge Functions
- `supabase/functions/handle-signup` — pós-cadastro
- `supabase/functions/stripe-webhook` — integração de pagamentos
- Implante via Supabase CLI ou dashboard conforme necessidade

## UI e Estilos
- Componentes base em `components/ui/*`
- Estilos globais em `app/globals.css` e `styles/*`
- Tailwind já configurado em `tailwind.config.js` (habilite conforme preferência)

## Convenções
- Next App Router com layouts por grupo
- Tipagem estrita (`tsconfig.json` com `strict: true`)
- Utilitários coesos (`lib/utils/*`) e actions por domínio (`lib/actions/*`)

## Deploy
- Vercel (recomendado):
  - Configure variáveis de ambiente do Supabase
  - Build: `npm run build`
- Supabase:
  - Buckets, policies e functions prontos para evoluir

## Roadmap sugerido
- Integrar autenticação real com `@supabase/supabase-js` nas actions e forms
- Implementar verificação de sessão no `middleware.ts` e redirecionamentos
- Adicionar OAuth (GitHub, Google) no fluxo de login
- Evoluir UI com Tailwind + shadcn/ui
- Cobertura de testes para actions e rotas

## Licença
MIT
