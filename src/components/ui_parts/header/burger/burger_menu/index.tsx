import { type ReactElement } from "react";
import Styles from "./burger_menu.module.css";

interface BurgerMenuPropsType {
  state: boolean;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export const BurgerMenu = (props: BurgerMenuPropsType): ReactElement => {
  // const [active, setActive] = useState<"active" | "">("");

  // const handleMouseOver = useCallback(
  //   (e: any): void => {
  //     const id = e.currentTarget.getAttribute("data-menu-id");
  //     setActive(Number(id));
  //   },
  //   [active],
  // );

  // const handleMouseLeave = useCallback((): void => {
  //   setActive("");
  // }, [active]);

  return (
    <nav className={`${Styles.menu} ${props.state ? Styles.isOpen : ""}`}>
      {/* <FirstLayerMenu
        handleMouseOver={handleMouseOver}
        handleMouseLeave={handleMouseLeave}
        onClick={props.onClick}
      /> */}

      <ul className={Styles.menu_list} role="list">
        <li className={Styles.menu_list_item}>
          <a href="/">Home</a>
        </li>
        <li className={Styles.menu_list_item}>
          <a href="/about">About</a>
        </li>
        <li className={Styles.menu_list_item}>
          <a href="/profile">Profile</a>
        </li>
        <li className={Styles.menu_list_item}>
          <a href="/works">Works</a>
        </li>
        <li className={Styles.menu_list_item}>
          <a href="/skills">Skills</a>
        </li>
      </ul>
    </nav>
  );
};
