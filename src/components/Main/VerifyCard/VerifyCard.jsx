import verifyStyle from "./VerifyCard.module.css";

function VerifyCard({ img, description }) {
  return (
    <div className={verifyStyle.verifyContainer}>
      <img src={img} alt="" className={verifyStyle.Checkicon} />
      <p className={verifyStyle.text}>{description}</p>
    </div>
  );
}

export default VerifyCard;
