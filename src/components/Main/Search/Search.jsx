import searchStyles from "./Search.module.css";

function Search() {
  return (
    <div className={searchStyles.inputContainer}>
      <input type="text" placeholder="Search Here" />
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
export default Search;
