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

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );
  const halfMin = data?.quotes.USD.percent_change_30m;
  const oneHour = data?.quotes.USD.percent_change_1h;
  const twlvHour = data?.quotes.USD.percent_change_12h;
  const oneDay = data?.quotes.USD.percent_change_24h;

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
          <PriceItem percent={halfMin}>
            <span>Change rate(30m)</span>
            <span>{UpDown(halfMin)}</span>
          </PriceItem>
          <PriceItem percent={oneHour}>
            <span>Change rate(1h)</span>
            <span>{UpDown(oneHour)}</span>
          </PriceItem>
          <PriceItem percent={twlvHour}>
            <span>Change rate(12h)</span>
            <span>{UpDown(twlvHour)}</span>
          </PriceItem>
          <PriceItem percent={oneDay}>
            <span>Change rate(1d)</span>
            <span>{UpDown(oneDay)}</span>
          </PriceItem>
        </PriceContainer>
      )}
    </>
  );
}

export default Price;
