"use client";
import Image from "next/image";
import { ArrowRight, Calendar, LayoutGrid } from "lucide-react";
import Link from "next/link";

type CardProps = {
  id: string;
  image: string;
  title: string;
  date: string;
  type: string;
};

const NewsCard: React.FC<CardProps> = ({ id, image, title, date, type }) => {
  return (
    <>
      {/* Course Card */}
      <div className="relative box-content p-5 border rounded-lg">
        <Link href={`news/${id}`}>
          <div className="w-full overflow-hidden rounded-md mb-4 h-40">
            <Image
              className="w-full h-full object-cover"
              src={image}
              alt="Course Thumbnail"
              width={400}
              height={400}
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <LayoutGrid className="text-primary" size={18} />
              <span className="text-sm text-secondary">{type}</span>
            </div>
            <h1 className="text-xl mb-3 font-semibold">{title}</h1>
          </div>
        </Link>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Calendar size={15} className="text-secondary" />
            <span className="text-sm text-secondary">{date}</span>
          </div>
          <Link
            className="flex items-center gap-3 text-orange-primary hover:text-black link-smooth"
            href={`courses/${id}`}>
            Read More <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
