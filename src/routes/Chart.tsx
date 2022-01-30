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
  const candleData = (data: IHistorical) => {
    return {
      x: data.time_close,
      y: [
        data.open.toFixed(2),
        data.high.toFixed(2),
        data.low.toFixed(2),
        data.close.toFixed(2),
      ],
    };
  };
  return (
    <div>
      {isLoading ? (
        "Chart Loading..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            { name: "price", data: data?.map((price) => candleData(price)) },
          ]}
          options={{
            chart: {
              height: 300,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            grid: {
              show: true,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              type: "datetime",
            },
            dataLabels: { enabled: false },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#fa0000",
                  downward: "#4400ff",
                },
                wick: {
                  useFillColor: true,
                },
              },
            },
            fill: {
              colors: ["red", "blue"],
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
