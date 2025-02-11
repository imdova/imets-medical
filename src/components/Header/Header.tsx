"use client";
import logo from "@/assets/icons/logo.png";
import { commonLinks } from "@/constants/header";
import useScrollDetection from "@/hooks/useScrollDetection";
import { BaseHeaderProps } from "@/types";

import Image from "next/image";
import Link from "next/link";

const Header: React.FC<BaseHeaderProps> = () => {
  const isScrolled = useScrollDetection();

  return (
    <header
      className={`${
        isScrolled ? "shadow-lg" : ""
      } left-0 top-0 fixed z-50 w-full transition-all bg-white  duration-700`}>
      <div className="absolute overflow-hidden h-24"></div>
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <div className="flex h-[70px] justify-between items-center">
          <Link className="relative" href="/">
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
          <div className="hidden text-main items-center space-x-8 lg:flex">
            {commonLinks.map((link) => {
              return (
                <Link
                  key={link.title}
                  href={link.url}
                  className={`font-medium uppercase link-smooth hover:text-orange-primary`}>
                  {link.title}
                </Link>
              );
            })}
          </div>
          <button className="bg-orange-primary text-white p-3 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
