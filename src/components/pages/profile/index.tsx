import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import Styles from "./profile.module.css";

export const Profile = (): ReactElement => {
  return (
    <section className={Styles.section}>
      <figure className={Styles.image}>
        <img src="https://placehold.jp/750x750.png" alt="" />
      </figure>
      <div className={Styles.headline__wrap}>
        <Headline size="xl">Profile</Headline>
      </div>
      <dl className={Styles.desc}>
        <dt>Name:</dt>
        <dd>Hiroshi Muramatsu</dd>
        <dt>Birthday:</dt>
        <dd>1982/06/14</dd>
        <dt>From:</dt>
        <dd>Nagano Japan</dd>
        <dt>GitHub:</dt>
        <dd>
          <a href="https://github.com/m-eiichi">https://github.com/m-eiichi</a>
        </dd>
      </dl>
    </section>
  );
};
