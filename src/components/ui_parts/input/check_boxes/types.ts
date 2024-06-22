import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  FieldValues,
} from "react-hook-form";

// チェックボックスのアイテム用のタイプ
export type CheckBoxesItemProps = {
  id: string;
  value?: string | number;
  text?: string;
  subText?: string;
  checked?: boolean;
  disabled?: boolean;
};

// 複数チェックボックスコンポーネント用のタイプ
export type CheckBoxesProps<T extends FieldValues> = {
  size?: "m" | "l";
  label?: string;
  requirement?: boolean;
  supportText?: string;
  errorAreaFixed?: boolean;
  vertical?: boolean;
  tile?: boolean;
  items?: CheckBoxesItemProps[];
  register: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
  handleBlur?:
    | React.FocusEventHandler<HTMLInputElement>[]
    | React.FocusEventHandler<HTMLInputElement>;
  handleChange?:
    | React.ChangeEventHandler<HTMLInputElement>[]
    | React.ChangeEventHandler<HTMLInputElement>;
};
