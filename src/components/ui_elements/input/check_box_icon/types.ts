import { UseFormRegisterReturn } from "react-hook-form";

export type CheckBoxIconProps = {
  id: string;
  value?: string | number;
  checked?: boolean;
  itemDisabled?: boolean;
  register: UseFormRegisterReturn;
  error?: boolean;
  handleBlur?:
    | React.FocusEventHandler<HTMLInputElement>[]
    | React.FocusEventHandler<HTMLInputElement>;
  handleChange?:
    | React.ChangeEventHandler<HTMLInputElement>[]
    | React.ChangeEventHandler<HTMLInputElement>;
};
