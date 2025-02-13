export interface BaseHeaderProps {
  pathname: string;
}

// Define the User type
export type UserProps = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

export interface accordionSlices {
  title: string;
  content: string;
}
interface Lesson {
  id: number;
  title: string;
  url: string;
  preview?: boolean;
}

export interface medulsAccordion {
  id: number;
  title: string;
  lessons: Lesson[];
}
export interface instractors {
  id: string;
  name: string;
  job: string;
  image: string;
  certification: string;
  experience: number;
  location: string;
  content: string;
  rating: number;
}

export interface Video {
  id: number;
  thumbnail: string;
  title: string;
  author?: string;
  views?: string;
  timeAgo?: string;
  isFeatured?: boolean;
}
export interface reviews {
  id: string;
  date: string;
  rating: number;
  user: {
    name: string;
    image: string;
    job: string;
  };
  content: string;
}
export interface images {
  id: number;
  image: string;
  isFeatured?: boolean;
}
