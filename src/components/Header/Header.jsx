import styles from "./Header.module.css";
import myLogo from "../../assets/FinestMart.svg";
import Navigation from "./Navigation/Navigation";
import Bag from "../../assets/Bag.svg";
import Dot from "../../assets/Dot.svg";
function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.Logo}>
        <img src={myLogo} alt="" className={styles.mainLogo} />
      </div>
      <Navigation />
      <div className={styles.registerContainer}>
        <div className={styles.marketContainer}>
          <img src={Bag} alt="" className={styles.bagImg} />
          <img src={Dot} alt="" className={styles.dotImg} />
        </div>
        <div className={styles.logInContainer}>
          <a href="#" className={styles.signIn}>
            Sign in
          </a>
          <a href="#" className={styles.signUp}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
