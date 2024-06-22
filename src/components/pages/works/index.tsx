import { useState, type ReactElement } from "react";
import { ToggleButton } from "@/components/ui_parts/toggle_button";
import Styles from "./works.module.css";
import { WorksItem } from "@/components/features/work_item";

export const Works = (): ReactElement => {
  const [checkedCategory, setCheckedCategory] = useState("all");

  const clickHandller = (
    e: React.BaseSyntheticEvent<MouseEvent & HTMLElement>,
  ) => {
    setCheckedCategory(e.target.id);
  };

  return (
    <section className={Styles.main_content}>
      <ToggleButton
        button_arr={["all", "illust", "coding", "other"]}
        onClick={clickHandller}
        defaultChecked="all"
      />

      <section className={Styles.article_container}>
        <WorksItem
          category="coding"
          image="./images/shiro-nav.jpg"
          title="城なび"
          tag_list={["Next.js", "WordPress", "Docker"]}
          checkedCategory={checkedCategory}
        >
          お城の情報をまとめたサイトのデザインコーディングなどの主に技術面を担当。
          <br />
          フレームワークはnext.jsを使用、またwordpressをHeadlessCMSとして採用、GraphQlを採用
          <br />
          <a href="https://www.shiro-nav.com/" target="_blank">
            城なび（https://www.shiro-nav.com/）
          </a>
        </WorksItem>
        <WorksItem
          category="illust"
          image="./images/illust-01.png"
          title="イラスト"
          tag_list={["Illustrator"]}
          checkedCategory={checkedCategory}
        ></WorksItem>
        <WorksItem
          category="coding"
          image="./images/img-pc.png"
          title="Hasura テスト"
          tag_list={["Hasura", "React", "Docker", "PostgreSQL"]}
          checkedCategory={checkedCategory}
        >
          フロントを react WEB サーバーを Apache DB を PostgreSQL(サンプルデータ
          world)、Graphql サーバーを hasura で構築テスト
          <br />
          <a href="https://github.com/m-eiichi/hasura_test" target="_blank">
            https://github.com/m-eiichi/hasura_test
          </a>
        </WorksItem>
        <WorksItem
          category="other"
          image="./images/design-system.jpg"
          title="デザインシステム"
          tag_list={["Figma"]}
          checkedCategory={checkedCategory}
        >
          <a
            href="https://www.figma.com/proto/9QaLrBpJaa2oES5qbLLnwH/figma_for_react_template?page-id=58%3A18398&node-id=2027-8835&viewport=156%2C205%2C0.09&t=xlJD3eISqiNK07Er-1&scaling=min-zoom&content-scaling=fixed"
            target="_blank"
          >
            スタイル-ルール
          </a>
          <br />
          <a
            href="https://www.figma.com/proto/9QaLrBpJaa2oES5qbLLnwH/figma_for_react_template?page-id=7%3A11&node-id=2027-8645&viewport=176%2C56%2C0.03&t=4W1rQelrDtLIxoLL-1&scaling=min-zoom&content-scaling=fixed"
            target="_blank"
          >
            コンポーネント-ルール
          </a>
        </WorksItem>

        <WorksItem
          category="illust"
          image="./images/illust-02.png"
          title="イラスト"
          tag_list={["illustrator"]}
          checkedCategory={checkedCategory}
        ></WorksItem>

        <WorksItem
          category="illust"
          image="./images/illust-03.png"
          title="イラスト"
          tag_list={["illustrator"]}
          checkedCategory={checkedCategory}
        ></WorksItem>

        <WorksItem
          category="coding"
          image="./images/img-pc.png"
          title="React template"
          tag_list={["React"]}
          checkedCategory={checkedCategory}
        >
          <a href="https://m-eiichi.github.io/react_template/" target="_blank">
            https://m-eiichi.github.io/react_template/
          </a>
        </WorksItem>

        <WorksItem
          category="illust"
          image="./images/illust-04.png"
          title="イラスト"
          tag_list={["illustrator"]}
          checkedCategory={checkedCategory}
        ></WorksItem>

        <WorksItem
          category="illust"
          image="./images/illust-05.png"
          title="イラスト"
          tag_list={["illustrator"]}
          checkedCategory={checkedCategory}
        ></WorksItem>

        <WorksItem
          category="coding"
          image="./images/img-pc.png"
          title="Wordpress Site"
          tag_list={["Wordpress"]}
          checkedCategory={checkedCategory}
        >
          wordpressで作成したドラム教室のサイトです。
          <br />
          <a href="https://n-d-p.site/" target="_blank">
            Negishi's Drum Promenade（https://n-d-p.site/）
          </a>
        </WorksItem>
      </section>
    </section>
  );
};
