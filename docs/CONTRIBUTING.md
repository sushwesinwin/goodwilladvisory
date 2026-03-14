# Contributing Guidelines

## Development Workflow

1. **Fork & Clone**: Fork the repository and clone it locally
2. **Branch**: Create a feature branch from `main`
3. **Develop**: Make your changes following our code standards
4. **Test**: Ensure all checks pass locally
5. **Commit**: Use conventional commits
6. **Push**: Push to your fork
7. **PR**: Open a pull request with a clear description

## Code Standards

### TypeScript
- Use strict TypeScript types
- Avoid `any` types
- Define interfaces for props
- Use type inference when possible

### React Components
- Use functional components
- Prefer Server Components (default)
- Add "use client" directive only when needed
- Use proper TypeScript prop types

### Styling
- Use Tailwind utility classes
- Follow shadcn/ui conventions
- Use the `cn()` helper for conditional classes
- Maintain responsive design

### File Organization
- Keep files small and focused
- Group related components
- Use index files for exports
- Follow the existing structure

## Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: restructure code
test: add tests
chore: update dependencies
```

## Pre-commit Checks

Before committing, the following checks run automatically:
- ESLint
- Prettier
- TypeScript type checking

Fix any errors before committing.

## Pull Request Process

1. Update README.md if needed
2. Ensure all checks pass
3. Request review from maintainers
4. Address review feedback
5. Squash commits if requested
6. Merge when approved

## Questions?

Open an issue for questions or discussions.
