import { coursesList } from "@/constants/courses.data";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const coursesRoutes = coursesList.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
  }));
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
    },
    ...coursesRoutes,
  ];
}
