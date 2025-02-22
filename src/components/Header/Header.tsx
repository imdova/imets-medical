"use client";
import { commonLinks } from "@/constants/header";
import useScrollDetection from "@/hooks/useScrollDetection";
import { BaseHeaderProps } from "@/types";

import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "../UI/WhatsAppButton";
import MobileMenu from "./MobileMenu";
import { whatsAppData } from "@/constants/social-media.data";

const Header: React.FC<BaseHeaderProps> = () => {
  const isScrolled = useScrollDetection();

  return (
    <header
      className={`${
        isScrolled ? "shadow-lg" : ""
      } fixed left-0 top-0 z-50 w-full bg-white transition-all duration-700`}
    >
      <div className="absolute h-24 overflow-hidden"></div>
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <div className="flex h-[70px] items-center justify-between">
          <MobileMenu />
          <Link className="relative" href="/">
            <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
          </Link>
          <div className="hidden items-center space-x-8 text-main lg:flex">
            {commonLinks.map((link) => {
              return (
                <Link
                  key={link.title}
                  href={link.url}
                  className={`link-smooth font-medium uppercase hover:text-orange-primary`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hidden rounded-xl border border-orange-primary px-4 py-2 font-medium text-orange-primary hover:bg-orange-primary hover:text-white md:block"
            >
              Become Instructor
            </Link>
            <WhatsAppButton
              phoneNumber={whatsAppData.number}
              message={whatsAppData.message}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
