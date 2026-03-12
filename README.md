# GAX-GLOBAL - DevSecOps Services Landing Page

Production-ready static website for GAX-GLOBAL DevSecOps services, built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or higher
- pnpm (recommended) or npm

### Local Development

1. **Install dependencies:**

   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Start development server:**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
# or
npm run build
```

This creates an optimized production build in the `dist/` directory.

## 📦 Deploy to Cloudflare Pages

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit - GAX-GLOBAL website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/gax-global.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
   - Select your GitHub repository (`gax-global`)
   - Configure the build settings:

3. **Build Configuration:**

   ```
   Framework preset: None (or Vite)
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

4. **Environment Variables:**

   ```
   NODE_VERSION=18
   ```

5. **Click "Save and Deploy"**

Your site will be live at: `https://gax-global.pages.dev` (or your custom domain)

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler:**

   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**

   ```bash
   wrangler login
   ```

3. **Build the project:**

   ```bash
   pnpm build
   ```

4. **Deploy to Cloudflare Pages:**
   ```bash
   wrangler pages deploy dist --project-name=gax-global
   ```

### Option 3: Direct Upload

1. **Build the project:**

   ```bash
   pnpm build
   ```

2. **Go to Cloudflare Dashboard:**
   - Navigate to **Workers & Pages** → **Create application** → **Pages** → **Upload assets**
   - Upload the entire `dist/` folder
   - Your site will be deployed instantly

## 🔧 Cloudflare Pages Configuration

### Custom Domain Setup

1. In Cloudflare Pages dashboard, go to your project
2. Click **Custom domains** → **Set up a custom domain**
3. Add your domain (e.g., `gax-global.com`)
4. Update your DNS records as instructed

### Build Settings (pages.json)

If you need advanced configuration, create a `.pages.json` file in the root:

```json
{
  "deployment": {
    "build_command": "npm run build",
    "destination_dir": "dist"
  }
}
```

### Headers and Redirects

Create a `public/_headers` file for security headers:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

Create a `public/_redirects` file for SPA routing:

```
/*    /index.html   200
```

## 📁 Project Structure

```
gax-global/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Outcomes.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── App.tsx
│   └── styles/
├── dist/                 # Production build (generated)
├── package.json
└── vite.config.ts
```

## 🔒 Security Features

- ✅ No sensitive data or API keys
- ✅ Client-side form validation
- ✅ Secure external links (noopener noreferrer)
- ✅ Content Security Policy ready
- ✅ HTTPS enforced by Cloudflare

## 🌐 Production URLs

- **Cloudflare Pages:** `https://gax-global.pages.dev`
- **Custom Domain:** Configure in Cloudflare dashboard
- **LinkedIn:** [linkedin.com/company/gax-global](https://linkedin.com/company/gax-global)

## 📝 Customization

### Update Contact Information

Edit `/src/app/components/Contact.tsx` and `/src/app/components/Footer.tsx` to update:

- Email addresses
- Phone numbers
- Social media links

### Modify Services

Edit `/src/app/components/Services.tsx` to add, remove, or modify service offerings.

### Change Colors/Branding

Update Tailwind classes throughout components. Main brand colors:

- Primary: `blue-600` / `#2563eb`
- Accent: `cyan-500` / `#06b6d4`

## 🐛 Troubleshooting

### Build fails on Cloudflare

- Ensure Node version is set to 18 or higher in environment variables
- Check that `pnpm-lock.yaml` is committed to git
- Verify build command is exactly: `npm run build`

### Blank page after deployment

- Check browser console for errors
- Ensure `dist` is set as the output directory
- Verify all assets are included in the build

### Form submissions not working

- Integrate with a backend service (e.g., Cloudflare Workers, Formspree, Netlify Forms)
- Update form action in `/src/app/components/Contact.tsx`

## 📈 Performance

- ⚡ Static site generation for fast loading
- 🎨 Tailwind CSS for minimal CSS bundle
- 🖼️ Optimized images from Unsplash CDN
- 📦 Code splitting via Vite
- 🚀 Cloudflare global CDN

## 📄 License

© 2025 GAX-GLOBAL. All rights reserved.

## 🤝 Support

For issues or questions, contact: contact@gax-global.com