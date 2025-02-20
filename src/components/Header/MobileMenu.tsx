"use client";

import { commonLinks } from "@/constants/header";
import { whatsAppData } from "@/constants/social-media.data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MobileMenu: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const closeMenu = () => setMenu(false);
  const whatsappUrl = `https://wa.me/${whatsAppData.number}?text=${encodeURIComponent(whatsAppData.message)}`;
  useEffect(() => {
    if (menu) {
      document.body.classList.add("max-md:overflow-hidden");
    } else {
      document.body.classList.remove("max-md:overflow-hidden");
    }
    return () => {
      document.body.classList.remove("max-md:overflow-hidden");
    };
  }, [menu]);

  return (
    <>
      {/* Mobile menu toggle button */}
      <button
        onClick={() => setMenu((prevState) => !prevState)}
        aria-expanded={menu}
        className="group w-[56px] text-2xl text-primary focus:outline-none sm:w-[76px] sm:text-3xl lg:hidden"
        aria-label={menu ? "Close menu" : "Open menu"}
      >
        <svg
          className="pointer-events-none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12L20 12"
            className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
          />
          <path
            d="M4 12H20"
            className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
          />
          <path
            d="M4 12H20"
            className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
          />
        </svg>
      </button>

      {/* Mobile menu backdrop */}
      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`${menu ? "opacity-100" : "pointer-events-none opacity-0"} fixed inset-0 top-[70px] h-[calc(100dvh-70px)] w-screen bg-black/30 backdrop-blur-sm duration-700 lg:hidden`}
      ></div>

      <div
        style={
          menu
            ? { left: "10px", height: "50vh", width: "60vw" }
            : { left: "-20vw", height: "0", width: "0", top: "0" }
        }
        className="text-background fixed top-[80px] z-20 flex w-[50vw] max-w-[400px] overflow-hidden rounded-[25px] bg-white duration-700 ease-in-out md:hidden"
        id="mobile-menu"
        aria-label="Mobile navigation"
      >
        <div className="scroll-bar-hidden flex min-h-[50vh] min-w-[70vw] flex-col justify-start overflow-y-auto p-5">
          {commonLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={index}
                href={link.url}
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-lg text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                <Icon className="h-5 w-5 text-orange-primary" />
                <span>{link.title}</span>
              </Link>
            );
          })}

          <a target="_blank" href={whatsappUrl}>
            <div
              onClick={closeMenu}
              className="hover:bg-foreground block px-4 py-2 text-green-500 hover:text-primary"
            >
              <Image
                width={24}
                height={24}
                src="/whatsapp.svg"
                alt="whats app"
                className="mr-2 inline-block"
              />
              <span> Chat</span>
            </div>
          </a>
          {/* <Link
            href="#"
            className="w-fit rounded-xl border border-orange-primary px-4 py-2 font-medium text-orange-primary hover:bg-orange-primary hover:text-white"
          >
            Become Instructor
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
