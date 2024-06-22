import { type ReactElement } from "react";
import { FieldValues } from "react-hook-form";
import { Label } from "@/components/ui_elements/label";
import { SupportText } from "@/components/ui_elements/support_text";
import { CheckBox } from "@/components/ui_parts/input/check_box";
import { ErrorText } from "@/components/ui_elements/error_text";

import { CheckBoxesProps, CheckBoxesItemProps } from "./types";

import Styles from "./check_boxes.module.css";

export const CheckBoxes = <T extends FieldValues>(
  props: CheckBoxesProps<T>,
): ReactElement => {
  const {
    size,
    label,
    requirement,
    supportText,
    tile,
    vertical,
    items,
    register,
    errors,
    errorAreaFixed,
    ...rest
  } = props;

  const container = [
    Styles.container,
    size === undefined ? Styles.l : Styles[size],
  ];

  const checkbox_container = [
    Styles.checkbox_container,
    tile === true ? Styles.tile_container : Styles.no_tile_container,
    vertical === true ? Styles.vertical : "",
  ];

  return (
    <div className={container.join(" ")}>
      {(label || supportText || requirement) && (
        <div>
          <Label
            text={label}
            requirement={requirement}
            disabled={register.disabled}
          />
          <SupportText disabled={register.disabled}>{supportText}</SupportText>
        </div>
      )}
      <div className={checkbox_container.join(" ")}>
        {items &&
          items.map((item: CheckBoxesItemProps) => {
            return (
              <CheckBox
                size={size}
                key={item.id}
                id={item.id}
                value={item.value}
                text={item.text}
                subText={item.subText}
                checked={item.checked}
                itemDisabled={item.disabled}
                tile={tile}
                error={errors && true}
                register={register}
                {...rest}
              />
            );
          })}
      </div>
      {errorAreaFixed !== true ? (
        <ErrorText>{errors?.message as string}</ErrorText>
      ) : (
        errors != null && <ErrorText>{errors?.message as string}</ErrorText>
      )}
    </div>
  );
};
