"use client";
import Image from "next/image";
import Rating from "./Rating";
import { ArrowRight, BookOpen, Clock, GraduationCap } from "lucide-react";
import Link from "next/link";

const CourseCard: React.FC<CourseType & GeoInfo & { loading: boolean }> = ({
  id,
  image,
  title,
  rating,
  lectures,
  lecture_date,
  lecture_Method,
  students,
  status,
  slug,
  price,
  country_code2,
  loading,
  reviewsNumber,
}) => {
  const { new: newPrice, old: oldPrice } = price[country_code2] || price.other;
  return (
    <>
      {/* Course Card */}
      <div className="relative w-full min-w-[350px] rounded-lg border p-5">
        <Link href={`/courses/${slug}`}>
          {status === "BestSeller" && (
            <span className="absolute left-7 top-7 flex items-center gap-3 rounded-full bg-primary px-3 py-2 text-white">
              <span className="text-xs">Best Seller</span>
            </span>
          )}

          <div className="mb-3 h-48 w-full overflow-hidden rounded-md">
            <Image
              className="h-full w-full object-cover"
              src={image}
              alt="Course Thumbnail"
              width={400}
              height={400}
            />
          </div>
        </Link>
        <div className="mb-4 grid-rows-2 md:grid">
          <div className="flex w-full items-center justify-between">
            <Link href={`/courses/${slug}`}>
              <h4 className="mb-3 text-xl font-semibold hover:underline">
                {title}
              </h4>
            </Link>
            <div className="flex flex-col items-center gap-1">
              <Rating rating={rating} size={10} />
              {reviewsNumber && (
                <span className="text-[10px] text-secondary">
                  ({reviewsNumber} Reviews)
                </span>
              )}
            </div>
          </div>
          <div className="mb-3 grid w-full grid-cols-2 gap-3">
            <div className="flex gap-2">
              <BookOpen className="text-secondary" size={18} />
              <span className="text-sm text-secondary">
                {lectures} Lectures
              </span>
            </div>
            <div className="flex gap-2">
              <Clock className="text-secondary" size={18} />
              <span className="text-sm text-secondary">{lecture_date}</span>
            </div>
            <div className="flex gap-2">
              <GraduationCap className="text-secondary" size={18} />
              <span className="text-sm text-secondary">
                {students} Students
              </span>
            </div>
            <div className="flex gap-2">
              <GraduationCap className="text-secondary" size={18} />
              <span className="text-sm text-secondary">{lecture_Method}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link
            href={`/courses/${slug}`}
            className="group gap-2 self-end text-nowrap rounded-lg bg-orange-primary p-2 px-12 text-white hover:bg-yellow-600"
          >
            Details
            <ArrowRight className="mb-1 ml-2 inline-block h-4 w-4 transition-transform duration-300 group-hover:translate-x-4" />
          </Link>
          {!loading && (
            <p>
              <span className="mr-2 text-sm text-red-600 line-through">
                {oldPrice}
              </span>
              <span className="text-xl font-bold">{newPrice}</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseCard;
