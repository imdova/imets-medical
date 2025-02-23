"use client";
import { commonLinks } from "@/constants/header";
import useScrollDetection from "@/hooks/useScrollDetection";
import { BaseHeaderProps } from "@/types";

import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "../UI/WhatsAppButton";
import MobileMenu from "./MobileMenu";
import { whatsAppData } from "@/constants/social-media.data";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Header: React.FC<BaseHeaderProps> = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeaderContent />
    </Suspense>
  );
};

const HeaderContent: React.FC = () => {
  const isScrolled = useScrollDetection();
  const searchParams = useSearchParams();
  const lang = (searchParams.get("lang") as Languages) || "en";

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
            {commonLinks.map((link) => (
              <LinkItem key={link.title} {...link} lang={lang} />
            ))}
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

const LinkItem: React.FC<LinkItemType & { lang: Languages }> = ({
  title,
  url,
  icon: Icon,
  subLinks,
  arTitle,
  lang,
}) => {
  return (
    <div className="group relative">
      <Link
        aria-label={title}
        dir={lang === "ar" ? "rtl" : "ltr"}
        key={title}
        href={`${url}?lang=${lang}`}
        className={`link-smooth flex items-center gap-2 font-medium uppercase group-hover:text-orange-primary`}
      >
        {Icon && <Icon className="h-4 w-4" />}
        <span>{lang === "ar" && arTitle ? arTitle : title}</span>
      </Link>
      {subLinks?.length && subLinks.length > 0 ? (
        <div className="absolute z-20 hidden rounded-lg bg-white py-2 shadow-2xl group-hover:block">
          {subLinks.map((link) => {
            const SubIcon = link.icon;
            return (
              <div
                key={link.title}
                className="group/subLink relative w-full p-2 px-4"
              >
                <Link
                  href={link.url}
                  className={`link-smooth flex w-fit items-center text-nowrap font-medium uppercase group-hover/subLink:text-orange-primary`}
                >
                  {/* {SubIcon && <SubIcon className="mr-2 h-4 w-4" />} */}
                  <span>{link.title}</span>
                </Link>
                {link.subLinks?.length && link.subLinks.length > 0 ? (
                  <div className="absolute right-0 top-0 z-20 hidden translate-x-full rounded-lg bg-white py-2 shadow-2xl group-hover/subLink:block">
                    {link.subLinks.map((subLink) => {
                      const SubSubIcon = subLink.icon;
                      return (
                        <Link
                          key={subLink.title}
                          href={subLink.url}
                          className={`link-smooth flex items-center text-nowrap p-2 px-4 font-medium uppercase hover:text-orange-primary`}
                        >
                          {/* {SubSubIcon && (
                            <SubSubIcon className="mr-2 h-4 w-4" />
                          )} */}
                          <span>{subLink.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
