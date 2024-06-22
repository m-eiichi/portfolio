import { type ReactElement } from "react";
import { RadioButtonProps } from "./types";

import Styles from "./radio_button.module.css";
import { RadioButtonIcon } from "@/components/ui_elements/input/radio_button_icon";

export const RadioButton = (props: RadioButtonProps): ReactElement => {
  const {
    size,
    id,
    value,
    text,
    subText,
    checked,
    itemDisabled,
    tile,
    register,
    error,
    ...rest
  } = props;

  const radio_button = [
    Styles.radio_button,
    register.disabled === true || itemDisabled === true
      ? Styles.disabled
      : error
        ? Styles.error
        : "",
    tile ? (size ? Styles["tile_" + size] : Styles.tile_l) : "",
  ];

  return (
    <div className={radio_button.join(" ")}>
      <RadioButtonIcon
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
