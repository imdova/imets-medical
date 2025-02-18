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
  rating: number;
  description: string;
  courseGoals: {
    content: string;
    goals: { title: string; content: string }[];
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
  instructor: {
    id: string;
    name: string;
    image: string;
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
  reviews: review[];
  video: {
    url: string;
    thumbnail?: string;
  };
  videosGrid: Video[];
  ImagesGrid: images[];
  languages: string;
  certificate: string;
  form: {
    // name: string;
    redirect: string;
    groupId: string;
  };
  questions: Question[];
  videos: CourseVideo[];
  courseMaterials: CourseMaterial[];
  price: Record<string, Price>;
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
