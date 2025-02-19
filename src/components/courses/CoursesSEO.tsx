import { coursesSEOContent } from "@/constants/courses.data";

const CoursesSEO = () => {
  return (
    <section className="mt-8 rounded-lg border border-gray-100 bg-white p-6 text-center shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900">
        {coursesSEOContent.title}
      </h2>
      <p className="mt-2 text-gray-700">{coursesSEOContent.subtitle}</p>
      <ul className="mt-4 list-inside list-disc text-sm text-gray-600">
        {coursesSEOContent.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default CoursesSEO;
