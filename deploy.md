# 🚀 Deployment ke Cloudflare Pages

## Metode 1: Upload Manual (Paling Mudah)

1. **Login ke Cloudflare Dashboard**
   - Buka https://dash.cloudflare.com
   - Login dengan akun Cloudflare Anda

2. **Buat Project Baru**
   - Klik "Pages" di sidebar
   - Klik "Create a project"
   - Pilih "Upload assets"

3. **Upload Files**
   - Drag & drop seluruh isi folder `out/` ke area upload
   - Atau klik "Select from computer" dan pilih folder `out/`

4. **Konfigurasi Project**
   - Project name: `english-procedural-text-presentation`
   - Production branch: `main`
   - Build output directory: `out`

5. **Deploy**
   - Klik "Deploy site"
   - Tunggu proses deployment selesai
   - URL akan tersedia dalam beberapa menit

## Metode 2: Git Integration (Otomatis)

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repository-name.git
   git push -u origin main
   ```

2. **Connect di Cloudflare Pages**
   - Pilih "Connect to Git"
   - Pilih repository yang sudah dibuat
   - Build settings:
     - Framework preset: `Next.js (Static HTML Export)`
     - Build command: `npm run build`
     - Build output directory: `out`
     - Root directory: `/`

## Metode 3: Wrangler CLI (Advanced)

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login**
   ```bash
   wrangler login
   ```

3. **Deploy**
   ```bash
   wrangler pages deploy out --project-name=english-procedural-text-presentation
   ```

## ✅ Verifikasi Deployment

Setelah deployment selesai:
- Buka URL yang diberikan Cloudflare
- Test semua fitur: navigation, charts, animations
- Pastikan responsive di mobile dan desktop
- Check loading speed dan performance

## 🔧 Troubleshooting

**Jika ada error:**
- Pastikan semua file di folder `out/` ter-upload
- Check build output directory setting
- Pastikan Node.js version 18+ di Cloudflare
- Clear cache browser jika ada masalah

**Performance Tips:**
- Enable Cloudflare CDN
- Optimize images jika ada
- Enable compression
- Set proper cache headers

## 📊 Monitoring

- Monitor di Cloudflare Analytics
- Check Core Web Vitals
- Monitor uptime dan performance
- Set up alerts jika diperlukan
