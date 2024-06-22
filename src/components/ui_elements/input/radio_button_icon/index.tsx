import { type ReactElement } from "react";
import { RadioButtonIconProps } from "./types";

import Styles from "./radio_button_icon.module.css";

export const RadioButtonIcon = (props: RadioButtonIconProps): ReactElement => {
  const {
    id,
    value,
    checked,
    itemDisabled,
    register,
    error,
    handleBlur,
    handleChange,
  } = props;
  const icon = [
    Styles.icon,
    register.disabled === true || itemDisabled === true
      ? Styles.disabled
      : error === true
        ? Styles.error
        : "",
  ];
  return (
    <>
      <input
        className={Styles.input}
        type="radio"
        id={id}
        value={value}
        defaultChecked={checked}
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
      <label className={icon.join(" ")} htmlFor={id}></label>
    </>
  );
};
