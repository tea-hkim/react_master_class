import React from "react";
import { fetchCoinTickers } from "../api";
import { useQuery } from "react-query";
import { PriceData } from "./Coin";
import styled from "styled-components";

interface PriceProps {
  coinId: string;
}

interface PercentProps {
  percent?: number;
}
const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-bottom: 10px;
  }
`;
const PriceItem = styled.div<PercentProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
  text-transform: uppercase;
  span:first-child {
    font-weight: 900;
  }
  span:nth-child(2) {
    color: ${(props) =>
      props.percent ? (props?.percent > 0 ? "red" : "blue") : null};
  }
`;
const UpDown = (percent: number | undefined) => {
  if (percent) {
    if (percent > 0) {
      return "▲ " + percent;
    } else if (percent) {
      const abs = Math.abs(percent);
      return "▼ " + abs;
    }
    return;
  }
  return;
};

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );
  const percentChange = {
    halfMin: data?.quotes.USD.percent_change_30m,
    oneHour: data?.quotes.USD.percent_change_1h,
    twlvHour: data?.quotes.USD.percent_change_12h,
    oneDay: data?.quotes.USD.percent_change_24h,
  };

  return (
    <>
      {isLoading ? (
        "Price Loading..."
      ) : (
        <PriceContainer>
          <PriceItem>
            <span>Price</span>
            <span>$ {data?.quotes.USD.price.toFixed(2)} </span>
          </PriceItem>
          <PriceItem percent={percentChange.halfMin}>
            <span>Change rate(30m)</span>
            <span>{UpDown(percentChange.halfMin)}</span>
          </PriceItem>
          <PriceItem percent={percentChange.oneHour}>
            <span>Change rate(1h)</span>
            <span>{UpDown(percentChange.oneHour)}</span>
          </PriceItem>
          <PriceItem percent={percentChange.twlvHour}>
            <span>Change rate(12h)</span>
            <span>{UpDown(percentChange.twlvHour)}</span>
          </PriceItem>
          <PriceItem percent={percentChange.oneDay}>
            <span>Change rate(1d)</span>
            <span>{UpDown(percentChange.oneDay)}</span>
          </PriceItem>
        </PriceContainer>
      )}
    </>
  );
}

export default Price;
