import navStyles from "./Navigation.module.css";

function Navigation() {
  const navList = ["Home", "Categories", "Sales", "FAQ", "About", "Contact"];

  return (
    <ul className={navStyles.navContainer}>
      {navList.map((eachElement) => (
        <li className={navStyles.navList}>
          <a href="" className={navStyles.infoContainer}>
            {eachElement}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default Navigation;
