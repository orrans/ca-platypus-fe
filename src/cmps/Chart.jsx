import { Bar, Doughnut, Pie, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

export function Chart({ data, chartType }) {
  const options = {
    plugins: {
      legend: {
        display: false,
        font: {
          size: 24
        }
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 16
          }
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  }

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14
          }
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false,
        },
        ticks: {
          display: true,
          font: {
            size: 14
          },
          stepSize: 1,
          precision: 0,
        },
      },
    },
  }

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 10
    },
    plugins: {
      legend: {
        position: 'left',
        align: 'center',
        labels: {
          font: {
            size: 14
          },
          padding: 12,
          boxWidth: 15,
          boxHeight: 15,
          usePointStyle: true,
          pointStyle: 'rectRounded'
        }
      },
    },
  }

  return (
    <section className="chart">
      {chartType === 'bar' && <Bar data={data} options={options} />}
      {chartType === 'doughnut' && <Doughnut data={data} options={pieOptions} />}
      {chartType === 'pie' && <Pie data={data} options={pieOptions} />}
      {chartType === 'line' && <Line data={data} options={lineOptions} />}
    </section>
  )
}