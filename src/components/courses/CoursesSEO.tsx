const CoursesSEO: React.FC<{ html: string }> = ({ html }) => {
  return (
    <section
      className="mt-8 rounded-lg border border-gray-100 bg-white p-6 text-center shadow-sm"
      dangerouslySetInnerHTML={{ __html: html }}
    ></section>
  );
};

export default CoursesSEO;
