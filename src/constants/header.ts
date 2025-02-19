import { BookOpen, FileText, Home, Mail, Users } from "lucide-react";

type LinkItem = {
  title: string;
  url: string;
  icon: React.ElementType; // Add an icon property
};

// Define the common links with icons
export const commonLinks: LinkItem[] = [
  {
    title: "Home Page",
    url: "/",
    icon: Home,
  },
  {
    title: "About us",
    url: "/about-us",
    icon: Users,
  },
  {
    title: "Courses",
    url: "/courses",
    icon: BookOpen,
  },
  {
    title: "Contact us",
    url: "/contact-us",
    icon: Mail,
  },
  {
    title: "Blogs",
    url: "blogs",
    icon: FileText,
  },
];
