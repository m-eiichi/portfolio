import { type ReactElement } from "react";
import { type FieldValues } from "react-hook-form";

import { EditElementProps } from "./types";
import Styles from "./edit_element.module.css";

export const EditElement = <T extends FieldValues>(
  props: EditElementProps<T>,
): ReactElement => {
  const {
    id,
    type,
    size,
    fullWidth,
    readonly,
    defaultValue,
    placeholder,
    numberSpin,
    handleBlur,
    handleChange,
    register,
    errors,
  } = props;

  const input = [
    type === "color"
      ? Styles.input_color
      : type === "file"
        ? Styles.input_file
        : type === "range"
          ? Styles.input_range
          : Styles.input,
    size === undefined ? Styles.l : Styles[size],
    errors !== undefined ? Styles.error : "",
    fullWidth === true ? Styles.full_width : "",
    register?.disabled === true ? Styles.disabled : "",
    numberSpin === true ? "" : Styles.no_spin,
  ];
  const placeHolder = !register?.disabled ? placeholder : "";
  return (
    <input
      className={input.join(" ")}
      id={id}
      type={type === null ? "text" : type}
      placeholder={placeHolder}
      readOnly={readonly}
      defaultValue={defaultValue}
      {...register}
      onBlur={(e) => {
        // register
        register?.onBlur(e);

        // props分
        if (handleBlur) {
          if (typeof handleBlur === "function") {
            handleBlur(e);
          } else {
            handleBlur.forEach((blur_event) => blur_event(e));
          }
        }
      }}
      onChange={(e) => {
        // register
        register?.onChange(e);

        // props分
        if (handleChange) {
          if (typeof handleChange === "function") {
            handleChange(e);
          } else {
            handleChange.forEach((change_event) => change_event(e));
          }
        }
      }}
    />
  );
};
