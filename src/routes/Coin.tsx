import React from "react";
import { useParams } from "react-router-dom";

interface RoutePrams {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<RoutePrams>();
  return (
    <div>
      <h1>Coin : {coinId}</h1>
    </div>
  );
}

export default Coin;
