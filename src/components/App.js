import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
const [sushi, setSushi] = useState([])
const [startValue, setStartValue] = useState(0)
const [endValue, setEndValue] = useState(4)
const [money, setMoney] = useState(100)

useEffect(() => {
  fetch(API)
    .then(res => res.json())
    .then(data => setSushi(data))
}, [])

function handleMoreSushi() {
  setStartValue(() => startValue + 4)
  setEndValue(() => endValue + 4)
}

// Should've just passed down setMoney instead
function handleBuySushi(price) {
  if (money >= price) {
    setMoney(() => money - price)
  }
}

const displayedSushi = sushi.slice(startValue,endValue)

  return (
    <div className="app">
      <SushiContainer
      sushi = {displayedSushi}
      onMoreSushi = {handleMoreSushi}
      onBuySushi = {handleBuySushi}
      money = {money}
      />
      <Table 
      money = {money}
      />
    </div>
  );
}

export default App;
