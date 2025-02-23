import {
  BookMarked,
  BookOpen,
  ChartBarStacked,
  FileText,
  Home,
  Mail,
  Users,
} from "lucide-react";
import { categories } from "./categories";
import { coursesList } from "./courses.data";

const getCoursesForCategory = (category: string) => {
  const filteredCourses =
    category === "All"
      ? coursesList
      : coursesList.filter((course) => course.type === category);
  return filteredCourses;
};
// Define the common links with icons
export const commonLinks: LinkItemType[] = [
  {
    title: "Home",
    arTitle: "الرئيسية",
    url: "/",
    icon: Home,
  },
  {
    title: "Courses",
    arTitle: "الدورات",
    url: "/courses/category/all",
    icon: BookOpen,
    subLinks: categories.map((category) => ({
      title: category.name,
      url: `/courses/category/${category.slug}`,
      icon: ChartBarStacked,
      subLinks: getCoursesForCategory(category.name).map((course) => ({
        title: course.title,
        url: `/courses/${course.slug}`,
        icon: BookMarked,
      })),
    })),
  },
  {
    title: "Free Lectures",
    arTitle: "المحاضرات المجانية",
    url: "/free-lectures",
    icon: BookMarked,
  },
  {
    title: "About us",
    arTitle: "من نحن",
    url: "/about",
    icon: Users,
  },

  {
    title: "Contact us",
    arTitle: "اتصل بنا",
    url: "/contact",
    icon: Mail,
  },
  {
    title: "Blogs",
    arTitle: "المدونة",
    url: "blogs",
    icon: FileText,
  },
];
