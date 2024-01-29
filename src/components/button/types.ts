import { MouseEventHandler } from "react";

export type ButtonProps = {
  isDisabled?: boolean;
  type?: "button" | "submit";
  className?: string;
  title: string;
  icon?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  textClassName?: string;
};
