"use client";
import { categories } from "@/constants/categories";
import Link from "next/link";
import { useParams } from "next/navigation";

const CoursesHeader = () => {
  const params = useParams();
  const filter = params.slug as string;
  return (
    <div className="flex w-full flex-row flex-wrap gap-2 md:justify-end">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/courses/category/${category.slug}`}
          className={`flex-1 text-nowrap rounded-md border px-4 py-2 text-sm transition-colors duration-500 ${
            filter === category.slug ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CoursesHeader;
