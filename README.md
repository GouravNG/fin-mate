# 💰 Fin-Mate

**A modern, feature-rich Finance Dashboard UI** built with React 19, TypeScript, and a carefully crafted design system tailored for financial data. Powered by mock apis.

---

## ✨ Features

- **Dashboard Overview** — Get a high-level snapshot of your financial health with stat cards, charts, and recent transactions
- **Wallet Management** — Track your wallet balance and transaction history
- **Accounts & Cards** — Manage linked bank accounts and payment cards
- **Settings** — Customize preferences and account configuration
- **Dark Mode** — Full light/dark theme support
- **Internationalization (i18n)** — Multi-language support (English, Hindi, Kannada, Korean) powered by `i18next`
- **Notifications** — In-app notification panel
- **Responsive Layout** — Mobile-first, adapts seamlessly across screen sizes
- **Accessible Components** — Built on Radix UI primitives for WAI-ARIA compliance

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite 7 |
| Routing | TanStack Router (file-based) |
| Data Fetching | TanStack Query |
| Styling | Tailwind CSS v4 |
| UI Primitives | Radix UI |
| Forms | React Hook Form + Zod |
| State Management | Zustand |
| Animations | Motion |
| API Client | Axios |
| Mocking | MSW (Mock Service Worker) |
| Testing | Vitest + Testing Library + Playwright |
| Storybook | Storybook 10 |
| Linting | ESLint 9 + TypeScript ESLint |
| i18n | i18next + react-i18next |

---

## 📁 Project Structure

```
fin-mate/
├── public/
│   └── locales/            # i18n translation files (en, hi, kn, ko)
├── src/
│   ├── assets/             # Static assets (images, icons, fonts)
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Base shadcn-style components
│   │   ├── forms/          # Form components (Login, Signup)
│   │   ├── views/          # Page-level view components
│   │   └── ...             # Feature components (Navigation, Header, etc.)
│   ├── configs/            # Axios client, React Query client config
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility libraries
│   ├── mocks/              # MSW API mock handlers
│   ├── queries/            # TanStack Query query definitions
│   ├── routes/             # File-based routes (TanStack Router)
│   │   ├── (auth)/         # Auth routes: Login, Signup
│   │   ├── (dashboard)/    # Protected app routes
│   │   │   └── app/
│   │   │       ├── dashboard/
│   │   │       ├── wallet/
│   │   │       ├── cards/
│   │   │       └── settings/
│   │   └── (public)/       # Public landing/home page
│   ├── schemas/            # Zod validation schemas
│   ├── store/              # Zustand global state
│   ├── stories/            # Storybook stories
│   ├── test/               # Test setup and utilities
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Helper utilities
├── design-system.md        # Design system documentation
├── vite.config.ts
└── vitest.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/) (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/GouravNG/fin-mate.git
cd fin-mate

# Install dependencies
pnpm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL="https://api.example.com"
VITE_ENABLE_MOCK=true
```

### Running the App

```bash
# Start development server (runs on port 3000)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests with UI
pnpm test:ui

# Watch mode
pnpm test:watch

# Generate coverage report
pnpm coverage
```

---

## 📖 Storybook

Component documentation and interactive playground:

```bash
# Start Storybook dev server (port 6006)
pnpm storybook

# Build static Storybook
pnpm build:storybook
```

---

## 🎨 Design System

Fin-Mate uses a custom design system optimized for financial UIs. See [`design-system.md`](./design-system.md) for the full reference.

### Typography

| Token | Font | Usage |
|---|---|---|
| `font-sans` | Geist | Body text, labels, navigation |
| `font-heading` | Prata | Page titles, section headers |
| `font-mono` | JetBrains Mono | All monetary values, numbers, IDs |

### Color Tokens

- `text-primary` — Positive trends, CTAs (brand green)
- `text-destructive` — Negative values, errors, refunds
- `text-foreground` — Primary text
- `text-muted-foreground` — Secondary labels and descriptions

### Dark Mode

Toggle the `dark` class on `<html>` — all color variables adapt automatically via CSS custom properties.

---

## 🌐 Internationalization

Supported languages out of the box:

| Code | Language |
|---|---|
| `en` | English |
| `hi` | Hindi |
| `kn` | Kannada |
| `ko` | Korean |

Translation files live in `public/locales/{lang}/translation.json`. The language switcher is available in the app UI.

---

## 🧰 Scripts Reference

| Script | Description |
|---|---|
| `pnpm dev` | Start dev server on port 3000 |
| `pnpm build` | TypeScript check + Vite production build |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run unit/integration tests with Vitest |
| `pnpm test:ui` | Run tests with Vitest UI |
| `pnpm coverage` | Generate test coverage report |
| `pnpm storybook` | Launch Storybook dev server |
| `pnpm build:storybook` | Build static Storybook |

---

## 📄 License

This project is licensed under the terms of the [LICENSE](./LICENSE) file.

---

<p align="center">Made with ❤️ by <a href="https://github.com/GouravNG">GouravNG</a></p>
