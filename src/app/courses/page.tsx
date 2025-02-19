import CoursesList from "@/components/courses/coursesList";
import CoursesSEO from "@/components/courses/CoursesSEO";
import { metaTagsData } from "@/constants/metaTags.data";
import { Metadata } from "next";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = metaTagsData.courses;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: metaTagsData.courses.title,
  description: metaTagsData.courses.description,
  provider: {
    "@type": "Organization",
    name: metaTagsData.default.title,
    url: baseUrl,
  },
};

const page = () => {
  return (
    <section className="mb-10 py-5">
      <div className="container mx-auto px-4 md:px-6 lg:max-w-[1170px]">
        <div>
          <CoursesList />
        </div>
        <CoursesSEO />
      </div>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </section>
  );
};

export default page;
