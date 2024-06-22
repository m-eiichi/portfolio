import { ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import { WorksItemProps } from "./types";
import Styles from "./work_item.module.css";

export const WorksItem = (props: WorksItemProps): ReactElement => {
  const { category, image, title, tag_list, children, checkedCategory } = props;
  if (checkedCategory !== "all" && checkedCategory !== category) {
    return <></>;
  }
  return (
    <article className={Styles.article}>
      <figure className={Styles.image}>
        <img src={image} alt="" />
      </figure>
      <Headline>{title}</Headline>
      <ul className={Styles.tag_list}>
        {tag_list?.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
      <p className={Styles.desc}>{children}</p>
    </article>
  );
};
