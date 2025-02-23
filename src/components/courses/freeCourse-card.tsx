"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight, BookOpen, Clock, User } from "lucide-react";
import Link from "next/link";
import Rating from "../Rating";

type FreeCourseCardProps = FreeCourseType & {
  loading?: boolean;
  lang: Languages;
};

const FreeCourseCard: React.FC<FreeCourseCardProps> = ({
  image,
  title,
  rating,
  videos,
  arTitle,
  lang,
  url,
}) => {
  return (
    <>
      {/* Free Course Card */}
      <div
        className={`relative flex w-full min-w-[350px] flex-col rounded-lg border p-5 ${lang === "ar" && "font-watad"}`}
      >
        <Link
          href={`${url}?lang=${lang}`}
          className="mb-3 h-48 w-full overflow-hidden rounded-md"
        >
          <Image
            className="h-full w-full object-cover"
            src={image}
            alt={`${title} Thumbnail`}
            width={400}
            height={400}
          />
        </Link>
        <div className="mb-4 flex-1 flex-col">
          <div className="flex w-full items-start justify-between">
            <Link href={`${url}?lang=${lang}`}>
              <h4 className="mb-3 text-xl font-semibold hover:underline">
                {lang === "ar" ? arTitle || title : title}
              </h4>
            </Link>
            <div className="flex flex-col items-center gap-1 md:mt-2">
              <Rating rating={rating} size={10} />
            </div>
          </div>
          <div className="mb-3 grid w-full flex-1 grid-cols-2 gap-3">
            <div className="flex gap-2">
              <BookOpen className="text-secondary" size={18} />
              <span className="text-sm text-secondary">
                {videos.length} {lang === "ar" ? "فيديو" : "Videos"}
              </span>
            </div>
            <div className="flex gap-2">
              <Clock className="text-secondary" size={18} />
              <span className="text-sm text-secondary">
                {videos.reduce(
                  (total, video) => total + (parseFloat(video.duration) || 0),
                  0,
                )}{" "}
                {lang === "ar" ? "ساعات" : "hrs"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link
            href={`${url}?lang=${lang}`}
            className="group gap-2 self-end text-nowrap rounded-lg bg-orange-primary p-2 px-12 text-white hover:bg-yellow-600"
          >
            {lang === "ar" ? "تفاصيل" : "Details"}
            {lang === "ar" ? (
              <ArrowLeft className="mb-1 mr-2 inline-block h-4 w-4 transition-transform duration-300 group-hover:-translate-x-4" />
            ) : (
              <ArrowRight className="mb-1 ml-2 inline-block h-4 w-4 transition-transform duration-300 group-hover:translate-x-4" />
            )}
          </Link>
          <p>
            <span className="text-2xl font-bold">
              {lang === "ar" ? "مجانا" : "Free"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default FreeCourseCard;
