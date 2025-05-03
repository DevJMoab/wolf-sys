'use client'

import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js'
import { cn } from '@/app/lib/utils'

// Registra os elementos necessários do ChartJS
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

type PieChartDataItem = {
  name: string
  value: number
  color: string
}

type PieChartProps = {
  data: PieChartDataItem[]
  title?: string
  className?: string
  options?: ChartOptions<'pie'>
  showLegend?: boolean
  showTooltips?: boolean
  cutoutPercentage?: number
}

export function PieChart({
  data,
  title = '',
  className = '',
  options,
  showLegend = true,
  showTooltips = true,
  cutoutPercentage = 0
}: PieChartProps) {
  // Formata os dados para o ChartJS
  const chartData: ChartData<'pie'> = {
    labels: data.map(item => item.name),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: data.map(item => item.color),
        borderWidth: 1,
        borderColor: '#fff'
      }
    ]
  }

  // Configurações padrão
  const defaultOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: !!title,
        text: title,
        font: {
          size: 16
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
      legend: {
        display: showLegend,
        position: 'right',
        labels: {
          boxWidth: 12,
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        enabled: showTooltips,
        callbacks: {
          label: (context) => {
            const label = context.label || ''
            const value = context.raw as number
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
            const percentage = Math.round((value / total) * 100)
            return `${label}: ${value} (${percentage}%)`
          }
        }
      }
    },
    cutout: `${cutoutPercentage}%`
  }

  // Combina as opções padrão com as personalizadas
  const mergedOptions = { ...defaultOptions, ...options }

  return (
    <div className={cn('w-full h-full min-h-[300px]', className)}>
      <Pie data={chartData} options={mergedOptions} />
    </div>
  )
}