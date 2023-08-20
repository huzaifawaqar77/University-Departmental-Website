import { Link } from "react-router-dom";
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
          <a href="https://awkum.edu.pk/admissions/" target="_blank">
            Admissions
          </a>
          <a href="https://lms.awkum.edu.pk/Login/index" target="_blank">
            LMS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
