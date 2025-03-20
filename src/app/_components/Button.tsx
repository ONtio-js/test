import { buttonProps } from '@/types'
import React from 'react'
import { RxCaretDown } from "react-icons/rx";
const Button = ({variant,onclick,title,secondary,type,style}:buttonProps) => {
  return (
    <button
      className={`bg-primaryColor rounded-[32px] text-sm lg:text-base   ${style}  ${variant == "secondary" ? `text-primaryColor bg-transparent hover:bg-primaryColor transition-all duration-300 ease-in-out hover:text-white border border-primaryColor px-3 lg:px-4  ${type =='link'? 'py-2.5':'py-2'} ` : "text-white hover:bg-white hover:border border-primaryColor hover:text-primaryColor transition-all duration-300 ease-in-out px-5 lg:px-10 py-3"} ${secondary ? "flex items-center gap-1 justify-center " : ""}`}
      onClick={onclick}
    >
      {title}
      {secondary ? <RxCaretDown size={30} /> : ""}
    </button>
  );
}

export default Button