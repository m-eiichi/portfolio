import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  type FieldValues,
} from "react-hook-form";

export type EditElementProps<T extends FieldValues> = {
  size?: "s" | "m" | "l";
  errorAreaFixed?: boolean;
  id?: string;
  placeholder?: string;
  type?:
    | "text"
    | "email"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "url"
    | "week"
    | "month"
    | "datetime-local"
    | "date"
    | "time"
    | "color"
    | "file"
    | "range"
    | "hidden";
  fullWidth?: boolean;
  defaultValue?: string;
  readonly?: boolean;
  numberSpin?: boolean;
  register: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
  handleBlur?:
    | React.FocusEventHandler<HTMLInputElement>[]
    | React.FocusEventHandler<HTMLInputElement>;
  handleChange?:
    | React.ChangeEventHandler<HTMLInputElement>[]
    | React.ChangeEventHandler<HTMLInputElement>;
};
