type CourseCategoriesType =
  | "All"
  | "Healthcare Quality"
  | "Infection Control"
  | "Hospital Management"
  | "Marketing Management"
  | "HR Management";

type CourseType = {
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
  lectures: number;
  lecture_date: string;
  lecture_Method: string;
  students: number;
  status: string;
  type: string;
  startDate: Date;
  duration: string;
  video: {
    url: string;
    thumbnail?: string;
  };
  languages: string;
  certificate: string;
  form: {
    redirect: string;
    groupId: string;
  };
};
