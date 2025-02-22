import CoursesSEO from "@/components/courses/CoursesSEO";
import Footer from "@/components/Footer/footer";
import Script from "next/script";
import CoursesHeader from "./coursesHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="mb-10 py-5">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-[1170px]">
          <div>
            <div className="mb-8 flex flex-col items-center justify-between gap-2 lg:flex-row">
              <h2 className="mb-8 text-nowrap text-5xl font-semibold text-primary lg:mr-8">
                Popular courses
              </h2>
              <CoursesHeader />
            </div>
            {children}
          </div>
        </div>
        {/* <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        /> */}
      </section>
      <Footer />
    </>
  );
}
