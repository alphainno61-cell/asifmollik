# Deployment Guide - Asif Mollik Portfolio

## Pre-Deployment Checklist

### 1. SEO Optimization ✓
- [x] Comprehensive metadata in layout.tsx
- [x] OpenGraph and Twitter cards configured
- [x] Structured data (Schema.org) implemented
- [x] Sitemap.xml created
- [x] robots.txt configured
- [x] Semantic HTML structure
- [x] Mobile responsive design
- [x] Fast performance optimizations

### 2. Performance Optimization ✓
- [x] Image optimization (WebP, AVIF support)
- [x] Code splitting enabled
- [x] SWC minification
- [x] Cache headers configured
- [x] Lazy loading for components
- [x] Next.js built-in optimizations

### 3. Security ✓
- [x] Security headers configured
- [x] XSS protection enabled
- [x] Referrer policy set
- [x] No powered-by header exposure
- [x] Frame options configured

## Deployment Steps

### Option 1: Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Configure Custom Domain:**
   - Go to Vercel Dashboard
   - Select project
   - Go to Settings → Domains
   - Add your domain (asifmollik.com)

5. **Update Environment Variables:**
   ```bash
   vercel env add NEXT_PUBLIC_SITE_URL
   ```

### Option 2: Deploy to Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Connect to Netlify:**
   - Push to GitHub
   - Connect repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `.next`

### Option 3: Self-Hosted Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Use PM2 for production:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "asif-mollik" -- start
   pm2 save
   pm2 startup
   ```

4. **Setup Nginx reverse proxy:**
   ```nginx
   server {
       listen 80;
       server_name asifmollik.com www.asifmollik.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

5. **Enable SSL with Let's Encrypt:**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d asifmollik.com -d www.asifmollik.com
   ```

## Post-Deployment

### 1. Submit to Search Engines

**Google Search Console:**
- Visit https://search.google.com/search-console
- Add property (asifmollik.com)
- Submit sitemap: https://asifmollik.com/sitemap.xml
- Request indexing for main page

**Bing Webmaster Tools:**
- Visit https://www.bing.com/webmasters
- Add site
- Submit sitemap

### 2. Verify SEO Implementation

```bash
# Check sitemap
curl https://asifmollik.com/sitemap.xml

# Check robots.txt
curl https://asifmollik.com/robots.txt

# Check headers
curl -I https://asifmollik.com
```

### 3. Test Performance

- Google PageSpeed Insights: https://pagespeed.web.dev
- GTmetrix: https://gtmetrix.com
- WebPageTest: https://www.webpagetest.org

### 4. Monitor & Analytics

**Setup Google Analytics:**
1. Create Google Analytics property
2. Add tracking ID to environment variables
3. Implement analytics script

**Setup Error Monitoring:**
- Sentry: https://sentry.io
- LogRocket: https://logrocket.com

## Environment Variables for Production

```
NEXT_PUBLIC_SITE_URL=https://asifmollik.com
NEXT_PUBLIC_SITE_NAME=Asif Mollik
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (optional)
```

## Performance Benchmarks

Target metrics:
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

## Continuous Deployment

### GitHub Actions (for Vercel)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Troubleshooting

### Issue: 404 on dynamic routes
- Solution: Ensure rewrite rules in next.config.js

### Issue: Images not loading in production
- Solution: Verify image paths are relative or use Image component

### Issue: SEO meta tags not showing
- Solution: Check metadata export in layout.tsx

### Issue: Slow performance
- Solution: Check lighthouse report, optimize images, enable caching

## Maintenance

- Monitor uptime with tools like UptimeRobot
- Regular backups of environment configuration
- Keep dependencies updated: `npm update`
- Review analytics monthly
- Test broken links quarterly

---

**Deployment Date:** 2026-02-06
**Last Updated:** 2026-02-06
