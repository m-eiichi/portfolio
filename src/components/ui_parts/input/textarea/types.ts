import { FieldValues } from "react-hook-form";
import { TextAreaElementProps } from "@/components/ui_elements/input/textarea_element/types";

export type TextAreaProps<T extends FieldValues> = TextAreaElementProps<T> & {
  label?: string;
  requirement?: boolean;
  supportText?: string;
  errorAreaFixed?: boolean;
};
