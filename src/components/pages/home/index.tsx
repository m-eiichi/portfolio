import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import Styles from "./home.module.css";

export const Home = (): ReactElement => {
  return (
    <section className={Styles.section}>
      <figure className={Styles.image}>
        <img src="https://placehold.jp/750x750.png" alt="" />
      </figure>
      <div className={Styles.headline__wrap}>
        <Headline size="xl">HIROSHI MURAMATSU PORTFOLIO</Headline>
      </div>
      <p className={Styles.desc}>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text
      </p>
    </section>
  );
};
