'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { BookOpen, Target, Users, Clock } from 'lucide-react'

export function OverviewSection() {
  const overviewData = [
    {
      icon: BookOpen,
      title: 'Tujuan Observasi',
      description: 'Menganalisis efektivitas pembelajaran teks prosedur dalam meningkatkan kemampuan menulis bahasa Inggris siswa',
      color: 'text-blue-600'
    },
    {
      icon: Target,
      title: 'Metodologi',
      description: 'Penelitian kualitatif dengan pendekatan observasi partisipan dan analisis dokumen',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Subjek Penelitian',
      description: '30 siswa kelas X SMA dengan tingkat kemampuan bahasa Inggris menengah',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Waktu Penelitian',
      description: '4 minggu dengan 8 sesi pembelajaran, masing-masing 90 menit',
      color: 'text-orange-600'
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
            Gambaran Umum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Penelitian ini bertujuan untuk menganalisis efektivitas pembelajaran teks prosedur 
            dalam meningkatkan kemampuan menulis bahasa Inggris siswa SMA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {overviewData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center ${item.color}`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
