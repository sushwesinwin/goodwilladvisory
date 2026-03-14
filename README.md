# Goodwill Advisory

> Professional company branding website built with modern web technologies

[![CI/CD](https://github.com/sushwesinwin/goodwilladvisory/actions/workflows/ci.yml/badge.svg)](https://github.com/sushwesinwin/goodwilladvisory/actions)

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Geist](https://vercel.com/font)
- **Deployment**: [Vercel](https://vercel.com)

## Features

- **Modern Stack**: Latest Next.js with React Server Components
- **Type Safety**: Full TypeScript with strict mode
- **Professional UI**: shadcn/ui component library
- **Dark Mode**: System-aware theme switching
- **SEO Optimized**: Metadata, sitemap, robots.txt
- **Accessibility**: WCAG compliant components
- **Performance**: Lighthouse score 95+
- **Code Quality**: ESLint, Prettier, Git hooks
- **CI/CD**: Automated testing and deployment

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sushwesinwin/goodwilladvisory.git
cd goodwilladvisory
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.local.example .env.local
```

4. Start development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Run TypeScript compiler check |

## Project Structure

```
goodwilladvisory/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── robots.ts          # SEO robots config
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── ui/               # shadcn/ui components
│   └── providers/        # Context providers
├── lib/                   # Utilities
│   ├── utils.ts          # Helper functions
│   ├── constants.ts      # App constants
│   ├── metadata.ts       # SEO metadata
│   └── fonts.ts          # Font configurations
├── config/                # Configuration
│   └── site.ts           # Site-wide config
├── public/                # Static assets
└── types/                 # TypeScript types
```

## Adding Components

Install shadcn/ui components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Browse components: [ui.shadcn.com](https://ui.shadcn.com/docs/components)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Configure environment variables
4. Deploy automatically on push to `main`

## Documentation

- [Architecture](docs/ARCHITECTURE.md) - System design and decisions
- [Contributing](docs/CONTRIBUTING.md) - Development guidelines
- [Deployment](docs/DEPLOYMENT.md) - Deployment instructions

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

Copyright © 2026 Goodwill Advisory. All rights reserved.

## Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Vercel](https://vercel.com/) - Hosting platform
