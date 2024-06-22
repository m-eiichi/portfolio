import { type ReactElement } from "react";
import { type FieldValues } from "react-hook-form";
import { Label } from "@/components/ui_elements/label";
import { SupportText } from "@/components/ui_elements/support_text";
import { ErrorText } from "@/components/ui_elements/error_text";
import { EditElement } from "@/components/ui_elements/input/edit_element";
import { EditProps } from "./types";
import Styles from "./edit.module.css";

export const Edit = <T extends FieldValues>(
  props: EditProps<T>,
): ReactElement => {
  const {
    size,
    label,
    requirement,
    supportText,
    id,
    errorAreaFixed,
    register,
    errors,
    ...rest
  } = props;

  const container = [
    Styles.container,
    size === undefined ? Styles.l : Styles[size],
  ];

  return (
    <div className={container.join(" ")}>
      {(label || supportText || requirement) && (
        <div>
          <Label
            text={label}
            requirement={requirement}
            labelFor={id}
            disabled={register.disabled}
          />
          <SupportText disabled={register.disabled}>{supportText}</SupportText>
        </div>
      )}
      <EditElement
        size={size}
        id={id}
        register={register}
        errors={errors}
        {...rest}
      />
      {errorAreaFixed !== true ? (
        <ErrorText>{errors?.message as string}</ErrorText>
      ) : (
        errors != null && <ErrorText>{errors?.message as string}</ErrorText>
      )}
    </div>
  );
};
