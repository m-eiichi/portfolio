import { type ReactElement } from "react";

import { CheckBoxIcon } from "@/components/ui_elements/input/check_box_icon";
import { CheckBoxProps } from "./types";
import Styles from "./check_box.module.css";

export const CheckBox = (props: CheckBoxProps): ReactElement => {
  const {
    size,
    id,
    value,
    text,
    subText,
    checked,
    itemDisabled,
    error,
    tile,
    register,
    ...rest
  } = props;

  const check_box = [
    Styles.check_box,
    size === undefined ? Styles.l : Styles[size],
    register.disabled === true || itemDisabled === true
      ? Styles.disabled
      : error
        ? Styles.error
        : "",
    tile ? (size ? Styles["tile_" + size] : Styles.tile_l) : "",
  ];

  return (
    <div className={check_box.join(" ")}>
      <CheckBoxIcon
        id={id}
        value={value}
        checked={checked}
        itemDisabled={itemDisabled}
        register={register}
        error={error}
        {...rest}
      />
      <label htmlFor={id}>
        <div className={Styles.label_in}>
          <span className={Styles.name}>{text}</span>
          {subText && <span className={Styles.sub_name}>{subText}</span>}
        </div>
      </label>
    </div>
  );
};
