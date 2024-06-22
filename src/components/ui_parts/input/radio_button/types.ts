import { RadioButtonIconProps } from "@/components/ui_elements/input/radio_button_icon/types";

export type RadioButtonProps = RadioButtonIconProps & {
  size?: "m" | "l";
  text?: string;
  subText?: string;
  tile?: boolean;
};
