import textStyles from "./Text.module.css";

function Text() {
  return (
    <div className={textStyles.textContainer}>
      <h2 className={textStyles.mainText}>
        Let your <span>groceries</span> come to you
      </h2>
      <p className={textStyles.secondText}>
        Get fresh groceries online without stepping out to make delicious food
        with the freshest ingredients
      </p>
    </div>
  );
}
export default Text;
