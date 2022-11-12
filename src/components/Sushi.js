import React, {useState} from "react";

function Sushi({sushi, money, onBuySushi}) {
  const[eat, setEat] = useState(false)
  const[eaten, setEaten] = useState(false)

  function handleEatSushi () {
    if(!eaten) {
      setEaten(true)
      if(money >= sushi.price) {
        setEat(() => !eat)
        onBuySushi(sushi.price)
      }
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {eat ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
