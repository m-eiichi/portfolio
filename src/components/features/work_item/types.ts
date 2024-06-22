export type WorksItemProps = {
  category: "illust" | "coding" | "other";
  image?: string;
  title: string;
  tag_list?: string[];
  children?: React.ReactNode;
  checkedCategory: string;
};
