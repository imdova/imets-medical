"use client";
import CourseCard from "@/components/CourseCard";
import { categories } from "@/constants/categories";
import { coursesList } from "@/constants/courses.data";
import useGeoInfo from "@/hooks/useGeoInfo";
import { useState } from "react";

const CoursesList = () => {
  const { data, loading } = useGeoInfo();
  const [filter, setFilter] = useState("All");

  const filteredCourses =
    filter === "All"
      ? coursesList
      : coursesList.filter((course) => course.type === filter);

  return (
    <div>
      <div className="mb-8 flex flex-col items-center justify-between gap-2 lg:flex-row">
        <h2 className="mb-8 text-nowrap text-5xl font-semibold text-primary lg:mr-8">
          Popular courses
        </h2>
        <div className="flex w-full flex-row flex-wrap gap-2 md:justify-end">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`flex-1 text-nowrap rounded-md border px-4 py-2 text-sm transition-colors duration-500 ${
                filter === category ? "bg-primary text-white" : "bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} {...data} loading={loading} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
