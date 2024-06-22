import { type ReactElement } from "react";
import { ToggleButtonProps } from "./types";
import Styles from "./toggle_button.module.css";

export const ToggleButton = (props: ToggleButtonProps): ReactElement => {
  const { button_arr, onClick, defaultChecked } = props;

  const button_items = button_arr.map((button) => (
    <div className={Styles.list_item} key={button}>
      <input
        id={button}
        type="radio"
        name="category"
        onClick={onClick}
        defaultChecked={button === defaultChecked}
        value={button}
      />
      <label htmlFor={button}>{button}</label>
    </div>
  ));

  return <div className={Styles.list}>{button_items}</div>;
};
