"use client";
import React, { useState } from 'react'
import Logo from './Logo';
import Link from 'next/link';
import Button from './Button';
import { useRouter } from 'next/navigation';
import { RiMenu3Fill } from "react-icons/ri";
import {  RxCaretRight } from 'react-icons/rx';
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [menu,setMenu] = useState(false);
  
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between px-5 md:pb-32 pt-8 lg:px-20">
      <div className="flex items-center gap-x-5 lg:gap-x-16">
        <Logo width={100} height={100}  />

        <ul className="hidden items-center gap-x-5 text-sm  font-medium text-muted-foreground md:flex lg:text-base xl:text-lg">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
          <li>
            <Link href={"/services"}>Services</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="hidden items-center gap-6 md:flex">
        <Button
          variant="secondary"
          secondary
          title="Become a Partner"
          onclick={() => setOpen(true)}
        />
        <Button
          variant="primary"
          secondary={false}
          title="Join Waitlist"
          onclick={() => router.push("/waitlist")}
        />
      </div>
      <div
        className={`${menu ? "bg-primaryColor/60" : "bg-transparent"} md:hidden rounded-lg p-2 transition-all duration-100 ease-in hover:cursor-pointer`}
        onClick={() => setMenu((prev) => !prev)}
      >
        <RiMenu3Fill size={28} className="text-primaryColor" />
      </div>
      <PartnerLink open={open} onclick={() => setOpen((prev) => !prev)} />
      <MobileNav menu={menu} onclick={() => setMenu((prev) => !prev)} />
    </nav>
  );
}
const PartnerLink = ({onclick,open}:{onclick: () => void,open:boolean}) => {
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-screen w-screen bg-transparent transition-all delay-1000 ${open ? "block" : "hidden"}`}
      onClick={onclick}
    >
      <ul
        className={` ${open ? "translate-x-0" : "-translate-x-[100%]"} absolute right-40 top-24 rounded-xl bg-white p-10 text-muted-foreground shadow-lg drop-shadow-lg transition-all delay-300`}
        onClick={(e) => e.stopPropagation()}
      >
        <li className="border-b-2 border-muted pb-2">
          <Link onClick={onclick} href={"/vendor"}>
            Join as a Vendor
          </Link>
        </li>
        <li className="pt-2">
          <Link onClick={onclick} href={"/agent"}>
            Become a Delivery Agent
          </Link>
        </li>
      </ul>
    </div>
  );

  
}
const MobileNav = ({ menu,onclick }: { onclick: () => void; menu: boolean }) => {
  const [drop, setDrop] = useState(false);
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-screen w-screen bg-black/20 transition-all duration-300 ease-in-out overflow-scroll ${menu ? "flex justify-center" : "translate-x-[110%]"}`}
      onClick={onclick}
    >
      <ul
        className={` ${menu ? "translate-x-0" : "translate-x-[110%]"} absolute top-24 mx-2.5 flex w-[85%] flex-col items-center gap-5 rounded-xl bg-green-50 p-10 text-muted-foreground shadow-lg drop-shadow-lg transition-transform duration-500 `}
        onClick={(e) => e.stopPropagation()}
      >
        <li className="text-center">
          <Link href={"/"} onClick={onclick}>
            Home
          </Link>
        </li>
        <li className="text-center">
          <Link onClick={onclick} href={"/services"}>
            Services
          </Link>
        </li>
        <li className="text-center">
          <Link onClick={onclick} href={"/about"}>
            About Us
          </Link>
        </li>
        <li className="text-center">
          <Link onClick={onclick} href={"/contact"}>
            Contact Us
          </Link>
        </li>
        <li className="flex w-full flex-col items-center justify-center">
          <Button
            title="Become a Partner"
            variant="secondary"
            secondary
            style="pl-5 w-[85%] gap-5 py-2 font-medium text-black"
            onclick={() => setDrop((prev) => !prev)}
          />
          <ul
            className={`${drop ? "flex opacity-100" : "hidden opacity-0"} mt-4 w-[90%] flex-col gap-3 rounded-2xl bg-white p-5 shadow-2xl drop-shadow-xl transition-opacity duration-700 ease-in`}
          >
            <li className="flex items-center gap-3 text-[15px]">
              <Link onClick={onclick} href={"/vendor"}>
                Join as a vendor
              </Link>
              <RxCaretRight size={30} className="font-semibold" />
            </li>
            <li className="mt-3 flex items-center gap-1 border-t-2 py-3 text-[15px]">
              <Link onClick={onclick} href={"/agent"}>
                Become a Delivery Agent
              </Link>{" "}
              <RxCaretRight size={30} className="font-semibold" />
            </li>
          </ul>
        </li>
        <li className="flex w-full items-center justify-center">
          <Button
            title="Join Waitlist"
            variant="primary"
            secondary={false}
            type="link"
            url="/vendor"
            style="w-[85%] py-4 font-medium text-black"
            onclick={onclick}
          />
        </li>
      </ul>
    </div>
  );
};
export default Header