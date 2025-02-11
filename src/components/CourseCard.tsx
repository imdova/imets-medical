"use client";
import Image from "next/image";
import Rating from "./Rating";
import { BookOpen, Clock, GraduationCap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Instructor = {
  id: string | number;
  image: string;
  name: string;
};

type CardProps = {
  id: string;
  image: string;
  title: string;
  rating: number;
  instructor: Instructor;
  lessons: number;
  time: string;
  status: string;
  students: number;
  price: number;
  description: string;
};

const CourseCard: React.FC<CardProps> = ({
  id,
  image,
  title,
  rating,
  lessons,
  time,
  students,
  status,
}) => {
  const [cartIsActive, setCartIsActive] = useState(false);
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  return (
    <>
      {/* Course Card */}
      <div className="relative p-5 border rounded-lg">
        <Link href={`courses/${id}`}>
          {status === "BestSeller" && (
            <span className="absolute top-7 left-7 flex items-center gap-3 px-3 py-2 rounded-full bg-primary text-white">
              <span className="text-xs ">Best Seller</span>
            </span>
          )}

          <div className="w-full overflow-hidden rounded-md mb-3 h-40">
            <Image
              className="w-full h-full object-cover"
              src={image}
              alt="Course Thumbnail"
              width={400}
              height={400}
            />
          </div>
          <div className="flex justify-between items-center w-full ">
            <h1 className="text-xl mb-3 font-semibold">{title}</h1>
            <div className="flex flex-col items-center gap-1">
              <Rating rating={rating} size={10} />
              <span className="text-[10px] text-secondary">
                ({rating} Reviews)
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mb-3 w-full">
            <div className="flex gap-2">
              <BookOpen className="text-secondary" size={18} />
              <span className="text-sm text-secondary">{lessons} Lessons</span>
            </div>
            <div className="flex gap-2">
              <Clock className="text-secondary" size={18} />
              <span className="text-sm text-secondary">{time}</span>
            </div>
            <div className="flex gap-2">
              <GraduationCap className="text-secondary" size={18} />
              <span className="text-sm text-secondary">
                {students} Students
              </span>
            </div>
          </div>
        </Link>
        <div className="flex justify-center w-full mb-3">
          <Link
            href={`courses/${id}`}
            className="flex items-center justify-center w-3/4 p-2 px-4 gap-2 text-white bg-orange-primary hover:bg-black rounded-lg text-xs">
            Enroll
          </Link>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
