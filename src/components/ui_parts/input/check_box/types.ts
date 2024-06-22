import { CheckBoxIconProps } from "@/components/ui_elements/input/check_box_icon/types";

// チェックボックス単体のコンポーネント用のタイプ
export type CheckBoxProps = CheckBoxIconProps & {
  size?: "m" | "l";
  text?: string;
  subText?: string;
  tile?: boolean;
};
