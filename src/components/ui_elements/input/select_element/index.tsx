import { type ReactElement } from "react";
import { type FieldValues } from "react-hook-form";

import { SelectElementProps, OptionProps } from "./types";
import Styles from "./select_element.module.css";

export const SelectElement = <T extends FieldValues>(
  props: SelectElementProps<T>,
): ReactElement => {
  const {
    size,
    fullWidth,
    id,
    options,
    defaultValue,
    handleChange,
    register,
    errors,
  } = props;

  const select = [
    Styles.select,
    errors != null ? Styles.error : "",
    size === undefined ? Styles.l : Styles[size],
    fullWidth === true ? Styles.full_width : "",
    register.disabled === true ? Styles.disabled : "",
  ];

  return (
    <select
      className={select.join(" ")}
      id={id}
      disabled={register.disabled}
      defaultValue={defaultValue}
      {...register}
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
    >
      {options &&
        options.map((optinon: OptionProps) => {
          return (
            <option key={optinon.value} value={optinon.value}>
              {optinon.text}
            </option>
          );
        })}
    </select>
  );
};
