import FreeCourseCard from "@/components/courses/freeCourse-card";
import Footer from "@/components/Footer/footer";
import freeCourses, { freeCoursesContent } from "@/courses-free";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { lang: initialLang } = await searchParams;
  const lang = (initialLang as Languages) || "en";
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-[1170px]">
          <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className="mb-8 flex flex-col items-center justify-between gap-2 lg:flex-row">
              <h2 className="mb-8 text-nowrap font-watad text-5xl font-semibold text-primary lg:mr-8">
                {freeCoursesContent.title[lang]}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {freeCourses.map((course) => (
                <FreeCourseCard key={course.slug} {...course} lang={lang} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
