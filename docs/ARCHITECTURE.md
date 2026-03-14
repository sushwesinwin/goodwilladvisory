# Architecture Overview

## Technology Decisions

### Why Next.js 16?
- **App Router**: Modern routing with React Server Components
- **Performance**: Automatic code splitting, image optimization
- **SEO**: Built-in metadata API, static generation
- **Developer Experience**: Fast Refresh, TypeScript support

### Why shadcn/ui?
- **Customizable**: Copy components to your codebase
- **Accessible**: Built on Radix UI primitives
- **Type-safe**: Full TypeScript support
- **Themeable**: CSS variables for easy customization

### Why Tailwind CSS?
- **Utility-first**: Rapid UI development
- **Type-safe**: Intellisense autocomplete
- **Production-optimized**: Minimal CSS bundle
- **Modern**: Container queries, color spaces

## Project Structure Philosophy

### Component Organization
- **layout/**: Shared layout components (header, footer)
- **ui/**: Reusable UI primitives (buttons, cards)
- **providers/**: React context providers

### Separation of Concerns
- **app/**: Routes and pages (UI composition)
- **components/**: Reusable React components
- **lib/**: Business logic and utilities
- **config/**: App-wide configuration

### Type Safety
- Strict TypeScript configuration
- Shared types in `types/` directory
- Component prop interfaces

## Performance Optimizations

- Server Components by default
- Dynamic imports for client components
- Image optimization with next/image
- Font optimization with next/font
- Automatic code splitting per route

## SEO Strategy

- Metadata API for dynamic meta tags
- Semantic HTML structure
- robots.txt configuration
- XML sitemap generation
- Open Graph images

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## Static Site Generation

This project is designed as a static branding site and can be exported as a fully static site using Next.js static export:

```bash
npm run build
```

The output can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).
