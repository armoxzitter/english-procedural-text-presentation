'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Target, TrendingUp } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Laporan Observasi
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-white/90 mb-8">
            Pembelajaran Bahasa Inggris
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto">
            Analisis Mendalam tentang Pengajaran Teks Prosedur dalam Konteks Pembelajaran Bahasa Inggris
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <BookOpen className="w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold text-lg">Teks Prosedur</h3>
            <p className="text-sm opacity-80">Fokus Utama</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <Users className="w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold text-lg">30 Siswa</h3>
            <p className="text-sm opacity-80">Partisipan</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <Target className="w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold text-lg">4 Minggu</h3>
            <p className="text-sm opacity-80">Durasi</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <TrendingUp className="w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold text-lg">85%</h3>
            <p className="text-sm opacity-80">Keberhasilan</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
