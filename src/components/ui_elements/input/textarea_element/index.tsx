import { type ReactElement } from "react";
import { type FieldValues } from "react-hook-form";

import { TextAreaElementProps } from "./types";
import Styles from "./textarea_element.module.css";

export const TextAreaElement = <T extends FieldValues>(
  props: TextAreaElementProps<T>,
): ReactElement => {
  const {
    size,
    register,
    id,
    rows,
    cols,
    readonly,
    errors,
    placeholder,
    fixed,
    fullWidth,
    defaultValue,
    handleBlur,
    handleChange,
  } = props;

  const textarea = [
    Styles.textarea,
    size === undefined ? Styles.l : Styles[size],
    errors !== undefined ? Styles.error : "",
    fullWidth === true ? Styles.full_width : "",
    register.disabled === true ? Styles.disabled : "",
    fixed === false ? "" : Styles.fixed,
  ];
  const placeHolder = !register.disabled ? placeholder : "";
  return (
    <textarea
      className={textarea.join(" ")}
      id={id}
      rows={rows}
      cols={cols}
      placeholder={placeHolder}
      readOnly={readonly}
      disabled={register.disabled}
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
