import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  type FieldValues,
} from "react-hook-form";

export type OptionProps = {
  text: string;
  value: string | number;
};

export type SelectElementProps<T extends FieldValues> = {
  size?: "s" | "m" | "l";
  fullWidth?: boolean;
  id?: string;
  options?: OptionProps[];
  defaultValue?: string | number;
  register: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
  handleChange?:
    | React.ChangeEventHandler<HTMLSelectElement>[]
    | React.ChangeEventHandler<HTMLSelectElement>;
  handleBlur?:
    | React.FocusEventHandler<HTMLSelectElement>[]
    | React.FocusEventHandler<HTMLSelectElement>;
};
