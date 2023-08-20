import Styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={Styles.navbar}>
      <ul>
        <li>
          <img src="./awkum-logo.png" alt="" height={65} width={65} />
          <p>
            AWKUM <span className={Styles.emblem_text}>Computer Science</span>
          </p>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Faculty</a>
        </li>
        <li>
          <a href="#">Courses</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
