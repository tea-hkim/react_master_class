import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_close: string;
  time_open: string;
  close: number;
  high: number;
  low: number;
  market_cap: number;
  open: number;
  volume: number;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 5000,
    }
  );

  return (
    <div>
      {isLoading ? (
        "Chart Loading..."
      ) : (
        <ApexChart
          type="line"
          series={[{ name: "price", data: data?.map((price) => price.close) }]}
          options={{
            theme: { mode: "dark" },
            chart: {
              height: 300,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            grid: {
              show: false,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              type: "datetime",
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
              categories: data?.map((value) => value.time_close),
            },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["green"],
                stops: [50, 100],
              },
            },
            colors: ["white"],
            stroke: { curve: "smooth" },
            tooltip: {
              y: { formatter: (value) => `$ ${value.toFixed(2)}` },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
