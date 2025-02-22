import CoursesList from "@/components/courses/coursesList";
import CoursesSEO from "@/components/courses/CoursesSEO";
import { categories } from "@/constants/categories";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const categoryData = categories.find((x) => x.slug === slug);
  if (!categoryData) return notFound();
  return {
    title: categoryData.metaTags.title || categoryData.name,
    description: categoryData.metaTags.description || categoryData.name,
    keywords: categoryData.metaTags.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const categoryData = categories.find((x) => x.slug === slug);
  if (!categoryData) return notFound();

  return (
    <>
      <CoursesList filter={categoryData.name} />
      <CoursesSEO html={categoryData.htmlInput} />
    </>
  );
};

export default Page;
