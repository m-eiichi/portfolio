import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import Styles from "./about.module.css";

export const About = (): ReactElement => {
  return (
    <section className={Styles.section}>
      <figure className={Styles.image}>
        <img src="https://placehold.jp/750x750.png" alt="" />
      </figure>
      <div className={Styles.headline__wrap}>
        <Headline size="xl">About</Headline>
      </div>
      <p className={Styles.desc}>
        このサイトは
        <br />
        <a href="profile">Profile</a>で自己紹介を
        <br />
        <a href="works">Works</a>で制作物を
        <br />
        <a href="skills">Skills</a>で現在扱える技術を
        <br />
        まとめたポートフォリオサイトです。
      </p>
    </section>
  );
};
