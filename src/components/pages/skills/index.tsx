import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import Styles from "./skills.module.css";

export const Skills = (): ReactElement => {
  return (
    <section className={Styles.section}>
      <figure className={Styles.image}>
        <img src="https://placehold.jp/750x750.png" alt="" />
      </figure>
      <div className={Styles.headline__wrap}>
        <Headline size="xl">Skills</Headline>
      </div>
      <p className={Styles.desc}>in the near future.</p>
    </section>
  );
};
