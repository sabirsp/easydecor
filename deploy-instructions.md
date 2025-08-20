# 🚀 EasyDecor Website - Vercel Deployment Guide

## Step-by-Step Deployment Instructions

### Prerequisites
- Node.js 18+ installed on your computer
- A Vercel account (free at vercel.com)
- Your website files ready

### Option 1: One-Click Deploy (Easiest)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to your project folder**
   ```bash
   cd path/to/your/easydecor-website
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Deploy to Vercel**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Login to Vercel when prompted
   - Confirm project settings
   - Wait for deployment to complete
   - You'll get a live URL immediately!

### Option 2: GitHub Integration (Best for Updates)

1. **Create GitHub Repository**
   - Go to github.com and create a new repository
   - Name it "easydecor-website" or similar

2. **Upload your code**
   ```bash
   git init
   git add .
   git commit -m "EasyDecor website ready for deployment"
   git branch -M main
   git remote add origin https://github.com/yourusername/easydecor-website.git
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Go to vercel.com and login
   - Click "New Project"
   - Import from GitHub
   - Select your repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

### Custom Domain Setup (Optional)

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add "easydecorstudio.com"
   - Follow DNS instructions from your domain provider

### Environment Variables (If Needed Later)

In Vercel dashboard → Settings → Environment Variables:
```
VITE_SITE_URL=https://easydecorstudio.com
VITE_CONTACT_EMAIL=hello@easydecorstudio.com
```

## ✅ What's Included & Optimized

- **Fast Loading:** Optimized images and code splitting
- **SEO Ready:** Meta tags, schema markup for local business
- **Mobile Responsive:** Perfect on all devices
- **Admin System:** Hidden lead management (Ctrl+Shift+L)
- **Contact Forms:** Working consultation booking
- **Analytics Ready:** Easy to add Google Analytics later

## 🔧 Admin Access (Website Owner Only)

After deployment, you can access admin features:
- **Ctrl + Shift + L** → View consultation leads
- **Ctrl + Shift + A** → Show admin buttons
- **Ctrl + Shift + H** → Help guide

These are completely hidden from website visitors.

## 📱 Post-Deployment Checklist

- [ ] Test website on mobile and desktop
- [ ] Verify contact forms work
- [ ] Test admin shortcuts (Ctrl+Shift+L)
- [ ] Check all pages load correctly
- [ ] Verify images display properly
- [ ] Test consultation booking flow

## 🆘 Need Help?

**Common Issues:**
- Build fails → Check Node.js version (use v18+)
- Images not loading → Check file paths in components
- Forms not working → Verify in admin panel with Ctrl+Shift+L

**Support:**
- Vercel docs: vercel.com/docs
- Admin help: Press Ctrl+Shift+H on your website

Your website will be live at: `https://your-project-name.vercel.app`

## 🎉 Go Live Checklist

- [ ] Website deployed successfully
- [ ] Custom domain connected (if applicable)
- [ ] Admin access tested
- [ ] Contact information verified
- [ ] Business listings updated with new website URL
- [ ] Social media profiles updated