import ManLogoStyles from "./ManLogo.module.css";
import manLogo from "../../../assets/manLogo.png";
import Vegetables from "../Vegetables/Vegetables";

function ManLogo() {
  return (
    <>
      <div className={ManLogoStyles.manContainer}>
        <img src={manLogo} alt="" className={ManLogoStyles.manLogo} />
      </div>
      <div className={ManLogoStyles.vegetablesContainer}>
        <Vegetables />
      </div>
    </>
  );
}
export default ManLogo;
