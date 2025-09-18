import mainStyles from "./Main.module.css";
import ManLogo from "./ManLogo/ManLogo";
import Search from "./Search/Search";
import Text from "./Text/Text";
import Verify from "./Verify/Verify";

function Main() {
  return (
    <div className={mainStyles.mainContainer}>
      <div className={mainStyles.divContainer}>
        <Text />
        <Search />
        <Verify />
      </div>
      <div className={mainStyles.manLogoContainer}>
        <ManLogo />
      </div>
    </div>
  );
}
export default Main;
