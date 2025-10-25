'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Target, BookOpen, Users, Award } from 'lucide-react'

export function ConclusionSection() {
  const keyPoints = [
    {
      icon: Target,
      title: 'Tujuan Tercapai',
      description: 'Pembelajaran teks prosedur berhasil meningkatkan kemampuan menulis bahasa Inggris siswa secara signifikan'
    },
    {
      icon: BookOpen,
      title: 'Metodologi Efektif',
      description: 'Pendekatan pembelajaran kolaboratif dan scaffolding terbukti efektif dalam mengajarkan teks prosedur'
    },
    {
      icon: Users,
      title: 'Partisipasi Aktif',
      description: 'Siswa menunjukkan engagement tinggi dengan tingkat partisipasi 85% dalam setiap sesi pembelajaran'
    },
    {
      icon: Award,
      title: 'Hasil Positif',
      description: 'Rata-rata peningkatan nilai sebesar 40% dengan 80% siswa mencapai target pembelajaran'
    }
  ]

  return (
    <section className="py-20 px-4 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kesimpulan
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Penelitian ini memberikan kontribusi penting dalam pengembangan metodologi pembelajaran bahasa Inggris
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <point.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Dampak Penelitian
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Penelitian ini membuktikan bahwa pembelajaran teks prosedur dengan pendekatan kolaboratif 
                dan scaffolding dapat meningkatkan kemampuan menulis bahasa Inggris siswa secara signifikan. 
                Temuan ini memberikan kontribusi penting bagi pengembangan kurikulum dan metodologi pembelajaran 
                bahasa Inggris di tingkat SMA, serta dapat dijadikan referensi untuk penelitian serupa di masa depan.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
