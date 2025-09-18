import VegetablesStyles from "./Vegetables.module.css";

import Carrot from "../../../assets/Carrot.png";
import Spinach from "../../../assets/Spinach.png";

function Vegetables() {
  const prices = [
    {
      img: Spinach,
      description: "Fresh Spinach",
      price: "$12.00",
    },
    {
      img: Carrot,
      description: "Carrot",
      price: "$9.00",
    },
  ];

  return prices.map((eachElement) => (
    <div className={VegetablesStyles.vegetableContainer}>
      <div className={VegetablesStyles.priceContainer}>
        <img src={eachElement.img} alt="" className={VegetablesStyles.imgs} />
        <p className={VegetablesStyles.description}>
          {eachElement.description}
        </p>
        <span className={VegetablesStyles.prices}>{eachElement.price}</span>
      </div>
    </div>
  ));
}

export default Vegetables;
