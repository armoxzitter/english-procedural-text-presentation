# Laporan Observasi: Pembelajaran Bahasa Inggris - Teks Prosedur

Presentasi interaktif tentang pembelajaran bahasa Inggris dengan fokus pada teks prosedur. Dibangun dengan Next.js, TypeScript, dan Tailwind CSS untuk pengalaman visual yang modern dan responsif.

## 🚀 Fitur

- **Design Modern**: UI/UX yang menarik dengan animasi smooth
- **Visualisasi Data**: Chart interaktif menggunakan Chart.js
- **Responsive**: Optimal di semua perangkat
- **Animasi**: Transisi dan efek visual yang halus
- **SEO Optimized**: Meta tags dan struktur yang SEO-friendly

## 🛠️ Teknologi

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animasi
- **Chart.js** - Visualisasi data
- **Lucide React** - Icons

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment ke Cloudflare Pages

1. **Build Project**:
   ```bash
   npm run build
   ```

2. **Upload ke Cloudflare Pages**:
   - Login ke Cloudflare Dashboard
   - Pilih Pages > Create a project
   - Upload folder `out` yang dihasilkan dari build
   - Atau connect dengan Git repository

3. **Konfigurasi Build Settings**:
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node.js version: 18.x atau lebih baru

## 📊 Struktur Konten

1. **Hero Section** - Pengenalan dan overview
2. **Gambaran Umum** - Metodologi dan tujuan penelitian
3. **Visualisasi Data** - Chart dan grafik hasil penelitian
4. **Temuan & Rekomendasi** - Analisis dan saran pengembangan
5. **Kesimpulan** - Ringkasan dan dampak penelitian

## 🎨 Customization

- Edit komponen di `components/sections/`
- Modifikasi data di komponen chart
- Update styling di `tailwind.config.js`
- Tambah animasi di komponen dengan Framer Motion

## 📱 Responsive Design

Aplikasi dioptimalkan untuk:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development

```bash
# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📄 License

MIT License - bebas digunakan untuk keperluan pendidikan dan penelitian.
