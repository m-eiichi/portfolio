import { type ReactElement } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/profile">Profile</Link>で自己紹介を
        <br />
        <Link to="/works">Works</Link>で制作物を
        <br />
        <Link to="/skills">Skills</Link>で現在扱える技術を
        <br />
        まとめたポートフォリオサイトです。
      </p>
    </section>
  );
};
