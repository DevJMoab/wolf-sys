"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type BarChartProps = {
  data: {
    name: string;
    value: number;
  }[];
  title?: string;
  color?: string;
};

export function BarChart({
  data,
  title = "Vendas",
  color = "#F59E0B",
}: BarChartProps) {
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: title,
        data: data.map((item) => item.value),
        backgroundColor: color,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"bar">) => {
            return `${context.dataset.label}: ${new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(context.raw as number)}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number | string) => {
            const numericValue =
              typeof value === "string" ? parseFloat(value) : value;
            return new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              maximumFractionDigits: 0,
            }).format(numericValue);
          },
        },
      },
    },
  };

  return <Bar options={options} data={chartData} />;
}
