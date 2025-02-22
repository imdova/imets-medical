"use client";
import CourseCard from "@/components/CourseCard";
import { coursesList } from "@/constants/courses.data";
import useGeoInfo from "@/hooks/useGeoInfo";

const CoursesList: React.FC<{ filter: string }> = ({ filter }) => {
  const { data, loading } = useGeoInfo();
  const filteredCourses =
    filter === "All"
      ? coursesList
      : coursesList.filter((course) => course.type === filter);
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredCourses.map((course) => (
        <CourseCard key={course.id} {...course} {...data} loading={loading} />
      ))}
    </div>
  );
};

export default CoursesList;
