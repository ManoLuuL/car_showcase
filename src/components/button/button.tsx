"use client";

import { ButtonProps } from "./types";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const Button = (props: ButtonProps) => {
  const { onClick, title, icon, isDisabled, className, type, textClassName } =
    props;

  return (
    <button
      disabled={isDisabled}
      type={type ?? "button"}
      className={twMerge(
        "flex flex-row relative justify-center items-center py-3 px-6 outline-none",
        className
      )}
      onClick={onClick}
    >
      <span className={twMerge("flex-1", textClassName)}>{title}</span>
      {icon && (
        <div className="relative w-6 h-6">
          <Image alt={icon} src={icon} fill className="object-contain" />
        </div>
      )}
    </button>
  );
};
