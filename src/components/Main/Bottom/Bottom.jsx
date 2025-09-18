import bottomStyles from "./Bottom.module.css";
import Condiments from "../../../assets/Condiments.svg";
import Food from "../../../assets/Food.svg";
import Fruits from "../../../assets/Fruits.svg";
import Grain from "../../../assets/Grain.svg";
import Dairy from "../../../assets/Dairy.svg";

function Bottom() {
  const cards = [
    {
      img: Dairy,
      title: "Dairy Products",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: Fruits,
      title: "Vegetables & Fruits",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: Condiments,
      title: "Spices & Seasonings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: Food,
      title: "Honey",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: Grain,
      title: "Flour",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return cards.map((eachElement) => (
    <div className={bottomStyles.cardContainer}>
      <img src={eachElement.img} alt="" />
      <h2>{eachElement.title}</h2>
      <p>{eachElement.description}</p>
    </div>
  ));
}
export default Bottom;
