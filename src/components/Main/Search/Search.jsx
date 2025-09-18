import searchStyles from "./Search.module.css";
import searchLogo from "../../../assets/Search.svg";

function Search() {
  return (
    <div className={searchStyles.inputContainer}>
      <input type="text" placeholder="Search Here" />
      <div className={searchStyles.searchContainer}>
        <img src={searchLogo} alt="" className={searchStyles.icon} />
      </div>
    </div>
  );
}
export default Search;
