import { type ReactElement } from "react";
import { Link } from "react-router-dom";
import { Headline } from "@/components/ui_elements/headline";
import Styles from "./header_main.module.css";

export const HeaderMain = (): ReactElement => {
  return (
    <>
      <Headline size="xxs" as="h1" marginNone>
        <Link to="/">HIROSHI MURAMATSU PORTFOLIO</Link>
      </Headline>
      <div className={Styles.content}>
        <nav className={Styles.nav}>
          <ul role="list">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
          </ul>
        </nav>
        <div className={Styles.button__container}></div>
      </div>
    </>
  );
};
