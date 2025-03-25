import React from 'react'
import { RxCaretDown } from "react-icons/rx";
const Button = ({
  variant,
  onclick,
  title,
  secondary,
  type,
  btnType,
  style,
}: {
  variant: "primary" | "secondary";
  title: string;
  onclick?: () => void;
  secondary?: boolean;
  type?: "button" | "link";
  url?: string;
  btnType?: "submit"|"reset"|"button"
  style?: string;
}) => {
  return (
    <button
      className={`rounded-[32px] bg-primaryColor text-sm lg:text-base ${style} ${variant == "secondary" ? `border border-primaryColor bg-transparent px-3 text-primaryColor transition-all duration-300 ease-in-out hover:bg-primaryColor hover:text-white lg:px-4 ${type == "link" ? "py-2.5" : "py-2"} ` : "border-primaryColor px-5 py-3 text-white transition-all duration-300 ease-in-out hover:border hover:bg-white hover:text-primaryColor lg:px-10"} ${secondary ? "flex items-center justify-center gap-1" : ""}`}
      onClick={onclick}
      type={btnType}
    >
      {title}
      {secondary ? <RxCaretDown size={30} /> : ""}
    </button>
  );
};

export default Button