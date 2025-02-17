type GeoInfo = {
  asn: string;
  city: string;
  continent_code: string;
  country: string;
  country_area: number;
  country_calling_code: string;
  country_capital: string;
  country_code: string;
  country_code_iso3: string;
  country_name: string;
  country_population: number;
  country_tld: string;
  currency: string;
  currency_name: string;
  in_eu: boolean;
  ip: string;
  languages: string;
  latitude: number;
  longitude: number;
  network: string;
  org: string;
  postal: string | null;
  region: string;
  region_code: string;
  timezone: string;
  utc_offset: string;
  version: string;
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
  price: Record<string, string>;
};
type FreeCourseType = {
  id: string;
  slug: string;
  image: string;
  title: string;
  rating: number;
  instructor: {
    id: string;
    name: string;
    image: string;
  };
  startDate: string;
  questions: Question[];
  videos: CourseVideo[];
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
