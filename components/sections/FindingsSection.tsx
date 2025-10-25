'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { CheckCircle, AlertCircle, TrendingUp, Users } from 'lucide-react'

export function FindingsSection() {
  const findings = [
    {
      icon: CheckCircle,
      title: 'Peningkatan Signifikan',
      description: '85% siswa menunjukkan peningkatan kemampuan menulis teks prosedur sebesar 40% dari nilai awal',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: TrendingUp,
      title: 'Pemahaman Struktur',
      description: 'Siswa mampu mengidentifikasi dan menerapkan struktur teks prosedur dengan akurasi 78%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Users,
      title: 'Kolaborasi Efektif',
      description: 'Pembelajaran kolaboratif meningkatkan engagement siswa sebesar 65% dibanding metode tradisional',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: AlertCircle,
      title: 'Tantangan yang Ditemukan',
      description: '20% siswa masih mengalami kesulitan dalam penggunaan konjungsi dan urutan langkah yang logis',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  const recommendations = [
    {
      title: 'Penguatan Kosakata',
      description: 'Meningkatkan latihan penggunaan kosakata teknis dan konjungsi dalam teks prosedur'
    },
    {
      title: 'Pembelajaran Berkelanjutan',
      description: 'Menerapkan pendekatan scaffolding untuk membantu siswa yang masih kesulitan'
    },
    {
      title: 'Integrasi Teknologi',
      description: 'Menggunakan media digital untuk membuat pembelajaran lebih interaktif dan menarik'
    },
    {
      title: 'Evaluasi Formatif',
      description: 'Melakukan penilaian berkelanjutan untuk memantau perkembangan siswa secara real-time'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Temuan & Rekomendasi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hasil analisis mendalam terhadap proses pembelajaran dan saran untuk pengembangan selanjutnya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {findings.map((finding, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${finding.bgColor} flex items-center justify-center mb-4`}>
                    <finding.icon className={`w-6 h-6 ${finding.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {finding.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {finding.description}
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
        >
          <Card>
            <CardHeader>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                Rekomendasi untuk Pengembangan
              </h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendations.map((rec, index) => (
                  <div key={index} className="p-6 bg-white rounded-lg border border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {rec.title}
                    </h4>
                    <p className="text-gray-600">
                      {rec.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
