import verifyStyles from "./Verify.module.css";
import Check from "../../../assets/Check.svg";
import VerifyCard from "../VerifyCard/VerifyCard";

function Verify() {
  const text = [
    {
      img: Check,
      description: "Fresh Vegetables",
    },
    {
      img: Check,
      description: "100% Guarantee",
    },
    {
      img: Check,
      description: "Cash on Delivery",
    },
    {
      img: Check,
      description: "Fast Delivery",
    },
  ];

  return (
    <div className={verifyStyles.verifyContainer}>
      {text.map((eachElement) => (
        <VerifyCard
          description={eachElement.description}
          img={eachElement.img}
        />
      ))}
    </div>
  );
}
export default Verify;
