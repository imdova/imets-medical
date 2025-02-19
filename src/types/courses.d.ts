type GeoInfo = {
  country_name: string;
  country_code2: string;
  region_name: string;
  city: string;
  latitude: number;
  longitude: number;
  isp: string;
};

type CourseCategoriesType =
  | "All"
  | "Healthcare Quality"
  | "Infection Control"
  | "Hospital Management"
  | "Marketing Management"
  | "HR Management";

type Lesson = {
  id: number;
  title: string;
  url: string;
  preview?: boolean; // add this property to the type definition
};
type CourseType = {
  id: string;
  slug: string;
  image: string;
  title: string;
  isInHomePage: boolean;
  rating: number;
  reviewsNumber?: number;
  description: string;
  courseGoals: {
    content: string;
    goals: { title: string; content: string }[];
  };
  meta: {
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
  };
  courseModules: {
    id: number;
    title: string;
    lessons: Lesson[];
  }[];
  whoCanAttend: {
    content: string;
    items: string[];
  };
  lectures: number;
  lecture_date: string;
  lecture_Method: string;
  students: number;
  status: string;
  type: string;
  startDate: string;
  duration: string;
  instructors: Instructor[];
  reviews: Review[];
  video: {
    url: string;
    thumbnail?: string;
  };
  videosGrid: VideoGridItem[];
  languages: string;
  certificate: string;
  form: {
    name: string;
    redirect: string;
    groupId: string;
  };
  price: Record<string, Price>;
};

type Review = {
  date?: string;
  reviewImage?: string;
  rating?: number;
  user?: {
    name: string;
    image: string;
    job: string;
  };
  content?: string;
};

type FreeCourseType = {
  id: string;
  slug: string;
  image: string;
  title: string;
  instructor: {
    id: string;
    name: string;
    image: string;
  };
  questions: Question[];
  videos: CourseVideo[];
  courseMaterials: CourseMaterial[];
  rating: number;
  status: string;
  startDate: string;
};
type VideoGridItem = {
  videoUrl: string;
  title?: string;
  author?: string;
  views?: string;
  timeAgo?: string;
  thumbnail?: string;
};

type Price = {
  old: string;
  new: string;
};

interface TabItem {
  name: string;
  url: string;
  locked: boolean;
  duration: string;
}

interface Tab {
  title: string;
  total: number;
  completed: number;
  items?: TabItem[];
}

interface Question {
  id: string;
  user: {
    name: string;
    image: string;
  };
  content: string;
  replies: Omit<Question, "replies">[];
  timestamp: number;
}
interface CourseMaterial {
  title: string;
  fileUrl: string;
  fileType: "pdf" | "docx" | "video";
}

interface accordionSlices {
  title: string;
  content: string;
}

interface medulsAccordion {
  id: number;
  title: string;
  lessons: Lesson[];
}

interface Instructor {
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

interface CourseVideo {
  title: string;
  progress: number;
  url: string;
  locked: boolean;
  duration: string;
}
