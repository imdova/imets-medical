import { coursesList } from "@/constants/courses.data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseView from "./courseView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = coursesList.find((x) => x.slug === slug);
  if (!course) return notFound();
  return {
    title: course.meta.meta_title || course.title,
    description: course.meta.meta_description || course.description,
    keywords: course.meta.meta_keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: course.meta.meta_title,
      // images: [
      //   {
      //     url: course.image,
      //     width: 1200,
      //     height: 630,
      //   },
      // ],
      videos: [
        {
          url: course.video.url,
          width: 1920,
          height: 1080,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: course.meta.meta_title,
      images: [course.image],
    },
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const course = coursesList.find((x) => x.slug === slug);
  if (!course) return notFound();

  return <CourseView course={course} />;
};

export default Page;
