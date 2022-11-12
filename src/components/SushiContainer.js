import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushi, onMoreSushi, money, onBuySushi}) {
  return (
    <div className="belt">
      {sushi.map((s) => {
        console.log(s)
        return (
          <Sushi
          key = {s.id}
          sushi = {s}
          onBuySushi = {onBuySushi}
          money = {money}
          />
        )
      })}
      <MoreButton
      onMoreSushi = {onMoreSushi}
      />
    </div>
  );
}

export default SushiContainer;
