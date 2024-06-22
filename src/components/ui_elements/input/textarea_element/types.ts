import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  type FieldValues,
} from "react-hook-form";

export type TextAreaElementProps<T extends FieldValues> = {
  size?: "s" | "m" | "l";
  fullWidth?: boolean;
  id?: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  defaultValue?: string;
  readonly?: boolean;
  fixed?: boolean;
  register: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
  handleBlur?:
    | React.FocusEventHandler<HTMLTextAreaElement>[]
    | React.FocusEventHandler<HTMLTextAreaElement>;
  handleChange?:
    | React.ChangeEventHandler<HTMLTextAreaElement>[]
    | React.ChangeEventHandler<HTMLTextAreaElement>;
};
