export type ButtonProps = {
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "submit" | "button" | "reset";
  color?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "s" | "m" | "l";
  onClick?: () => void;
  children: React.ReactNode;
};
