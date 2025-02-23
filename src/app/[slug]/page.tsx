import Image from "next/image";
import CourseBackground from "@/assets/images/courseOverview-1.jpg";
import YouTubePlayer from "@/components/YouTubePlayer";
import { landingPagesData } from "@/constants/landing-page.data";
import { notFound } from "next/navigation";
import LandingApply from "./landing-apply";

const parseTitle = (text: string) => {
  const parts = text.split(/(\*.*?\*)/g); // Split by *word*

  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span
          key={index}
          className="bg-clip-text text-4xl font-bold text-orange-primary sm:text-5xl"
        >
          {part.slice(1, -1)}
        </span>
      );
    }
    return part;
  });
};

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { slug } = await params;
  const { lang: initialLang } = await searchParams;
  const lang = (initialLang as Languages) || "en";
  const page = landingPagesData.find((page) => page.slug === slug);
  if (!page) return notFound();
  const title = parseTitle(page.title[lang]);
  return (
    <section
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`relative py-12 md:pb-8 md:pt-6 ${lang === "ar" && "font-watad"}`}
    >
      <Image
        className="absolute left-0 top-0 z-[-1] h-full object-cover"
        src={CourseBackground}
        alt="Course Background"
      />
      <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-[#042c76ec]"></div>
      <div className="container mx-auto flex flex-col items-center md:min-h-[80vh] md:flex-row md:justify-between lg:max-w-[1170px]">
        {/* Left Side: Title, Description, and Button */}
        <div className="p-4 md:w-1/2 md:pr-8">
          <h1 className="mb-6 text-4xl font-bold leading-relaxed text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mb-8 text-lg text-white">{page.description[lang]}</p>
          <LandingApply
            className="hidden px-8 py-3 font-semibold md:block"
            {...page}
            lang={lang}
          />
        </div>

        {/* Right Side: YouTube Video */}
        <div className="aspect-video w-full p-4 md:w-1/2">
          {page.videoUrl ? (
            <YouTubePlayer
              videoUrl={page.videoUrl}
              priority={true}
              autoPlay={true}
            />
          ) : (
            <Image
              src={page.imageUrl}
              alt={page.title[lang]}
              width={450}
              height={450}
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <LandingApply
          className="mb-10 block px-8 py-3 font-semibold md:hidden"
          {...page}
          lang={lang}
        />
      </div>
    </section>
  );
};

export default Page;
