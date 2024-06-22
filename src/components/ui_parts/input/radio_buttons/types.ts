import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  FieldValues,
} from "react-hook-form";

export type RadioButtonItemProps = {
  id: string;
  value?: string | number;
  text?: string;
  subText?: string;
  checked?: boolean;
  disabled?: boolean;
};

export type RadioButtonsProps<T extends FieldValues> = {
  size?: "m" | "l";
  label?: string;
  requirement?: boolean;
  supportText?: string;
  errorAreaFixed?: boolean;
  disabled?: boolean;
  vertical?: boolean;
  tile?: boolean;
  items?: RadioButtonItemProps[];
  register: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
  handleBlur?:
    | React.FocusEventHandler<HTMLInputElement>[]
    | React.FocusEventHandler<HTMLInputElement>;
  handleChange?:
    | React.ChangeEventHandler<HTMLInputElement>[]
    | React.ChangeEventHandler<HTMLInputElement>;
};
