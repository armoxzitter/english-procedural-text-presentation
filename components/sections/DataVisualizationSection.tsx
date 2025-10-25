'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { BarChart } from '@/components/charts/BarChart'
import { PieChart } from '@/components/charts/PieChart'
import { LineChart } from '@/components/charts/LineChart'

export function DataVisualizationSection() {
  // Data untuk grafik kemampuan awal
  const initialAbilityData = {
    labels: ['Sangat Baik', 'Baik', 'Cukup', 'Kurang', 'Sangat Kurang'],
    datasets: [
      {
        label: 'Jumlah Siswa',
        data: [2, 8, 12, 6, 2],
        backgroundColor: [
          '#10b981',
          '#3b82f6',
          '#f59e0b',
          '#ef4444',
          '#6b7280'
        ],
        borderColor: [
          '#059669',
          '#2563eb',
          '#d97706',
          '#dc2626',
          '#4b5563'
        ],
        borderWidth: 2
      }
    ]
  }

  // Data untuk perkembangan kemampuan
  const progressData = {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
    datasets: [
      {
        label: 'Kemampuan Menulis',
        data: [45, 58, 72, 85],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Pemahaman Struktur',
        data: [38, 52, 68, 82],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Penggunaan Kosakata',
        data: [42, 55, 70, 88],
        borderColor: '#f59e0b',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  }

  // Data untuk distribusi nilai akhir
  const finalScoreData = {
    labels: ['90-100', '80-89', '70-79', '60-69', '50-59'],
    datasets: [
      {
        label: 'Jumlah Siswa',
        data: [8, 12, 7, 2, 1],
        backgroundColor: [
          '#10b981',
          '#3b82f6',
          '#f59e0b',
          '#ef4444',
          '#6b7280'
        ]
      }
    ]
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visualisasi Data
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analisis mendalam terhadap perkembangan kemampuan siswa dalam pembelajaran teks prosedur
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Kemampuan Awal Siswa
                </h3>
                <p className="text-gray-600">
                  Distribusi tingkat kemampuan menulis teks prosedur sebelum pembelajaran
                </p>
              </CardHeader>
              <CardContent>
                <BarChart data={initialAbilityData} />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Distribusi Nilai Akhir
                </h3>
                <p className="text-gray-600">
                  Hasil evaluasi kemampuan siswa setelah pembelajaran
                </p>
              </CardHeader>
              <CardContent>
                <PieChart data={finalScoreData} />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold text-gray-900">
                Perkembangan Kemampuan Siswa
              </h3>
              <p className="text-gray-600">
                Tren peningkatan kemampuan siswa dalam berbagai aspek pembelajaran
              </p>
            </CardHeader>
            <CardContent>
              <LineChart data={progressData} />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
