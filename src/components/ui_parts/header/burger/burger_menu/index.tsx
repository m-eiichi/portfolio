import { type ReactElement } from "react";
import { Link } from "react-router-dom";
import Styles from "./burger_menu.module.css";

interface BurgerMenuPropsType {
  state: boolean;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export const BurgerMenu = (props: BurgerMenuPropsType): ReactElement => {
  return (
    <nav className={`${Styles.menu} ${props.state ? Styles.isOpen : ""}`}>
      <ul className={Styles.menu_list} role="list">
        <li className={Styles.menu_list_item}>
          <a href="/">Home</a>
        </li>
        <li className={Styles.menu_list_item}>
          <Link to="/about">About</Link>
        </li>
        <li className={Styles.menu_list_item}>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={Styles.menu_list_item}>
          <Link to="/works">Works</Link>
        </li>
        <li className={Styles.menu_list_item}>
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
    </nav>
  );
};
