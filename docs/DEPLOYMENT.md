# Deployment Guide

## Vercel Deployment (Recommended)

### First-time Setup

1. **Push to GitHub**:
```bash
git push origin main
```

2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Configure project settings

3. **Environment Variables**:
   - Add `NEXT_PUBLIC_APP_URL` = your production URL
   - Add any other required variables

4. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete

### Automatic Deployments

- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches
- **Rollbacks**: Available in Vercel dashboard

### Custom Domain

1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Wait for SSL certificate provisioning

## Alternative Hosting

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy

### Static Export

For pure static hosting (no server features):

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
}
```

2. Build:
```bash
npm run build
```

3. Deploy `out/` directory to any static host

### Docker

Build Docker image:
```bash
docker build -t goodwilladvisory .
docker run -p 3000:3000 goodwilladvisory
```

## Environment Variables

Required variables:
- `NEXT_PUBLIC_APP_URL`: Base URL of the site

Optional variables:
- Analytics keys (Google Analytics, PostHog)
- Email service keys (Resend)

## Performance Monitoring

- Enable Vercel Analytics
- Monitor Core Web Vitals
- Review Lighthouse CI reports

## Rollback Strategy

If issues occur:
1. Revert to previous deployment in Vercel
2. Or push a git revert commit
3. Monitor error rates

## Pre-deployment Checklist

- [ ] All tests passing
- [ ] Build succeeds locally
- [ ] Environment variables configured
- [ ] Meta tags and SEO verified
- [ ] Images optimized
- [ ] Accessibility checked
- [ ] Performance tested
