"use client";
import Image from "next/image";
import { use } from "react";
import CourseBackground from "@/assets/images/courseOverview-1.jpg";
import Courseimg from "@/assets/images/courseOverview-2.jpg";
import {
  BookCopy,
  Calendar,
  ChartNoAxesColumnIncreasing,
  Clock,
  GraduationCap,
  Puzzle,
  SquareChartGantt,
} from "lucide-react";
import Rating from "@/components/Rating";
import YouTubePlayer from "@/components/YouTubePlayer";
import Tabs from "@/components/Tabs";
import OverviewTab from "./OverviewTab";
import InstructorsTab from "./InstructorsTab";
import ReviewsTab from "./ReviewsTab";
import StudentsTab from "./StudentsTab";
import NotFoundPage from "@/app/not-found";

interface SingleCourseProps {
  params: Promise<{ courseID: string }>;
}

type CoursePost = {
  title: string;
  content: string;
};

export default function SingleCourse({ params }: SingleCourseProps) {
  const { courseID } = use(params);

  const coursesList: Record<string, CoursePost> = {
    "1": {
      title: "Next.js App Router",
      content: "Learn about the new App Router in Next.js!",
    },
    "2": {
      title: "React Server Components",
      content: "React Server Components are powerful...",
    },
  };

  const course = coursesList[courseID];

  if (!course) return <NotFoundPage />;

  const tabData = [
    { label: "Overview", content: <OverviewTab /> },
    { label: "Instructors", content: <InstructorsTab /> },
    {
      label: "Reviews",
      content: <ReviewsTab />,
    },
    {
      label: "Students",
      content: <StudentsTab />,
    },
  ];
  return (
    <main>
      {/* Course Review Content  */}
      <section className="relative min-h-[680px]">
        <Image
          className="absolute h-full top-0 left-0 object-cover"
          src={CourseBackground}
          alt="Course Background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#042c76ec] "></div>
        <div className="relative container mx-auto px-6 lg:max-w-[1170px]">
          <h1 className="text-5xl text-white font-semibold pt-6 py-4">
            CPHQ Preparation Course
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex gap-2 items-center text-white">
              <Calendar size={16} />
              <span>20/06/2024</span>
            </div>
            <div className="flex gap-2 items-center text-white">
              <GraduationCap size={16} />
              <span>Online - Zoom</span>
            </div>
            <div className="flex gap-2 items-center text-white">
              <Calendar size={16} />
              <span>1 Lecture Weekly</span>
            </div>
            <div className="flex gap-2 items-center text-white">
              <GraduationCap size={16} />
              <span>250 Students</span>
            </div>
            <div className="mt-2 flex flex-col items-center gap-1">
              <Rating rating={4} size={10} />
              <span className="text-[10px] text-secondary">
                (4 Stars Reviews)
              </span>
            </div>
            <span className="flex items-center gap-3 px-4 py-2 rounded-full bg-white ">
              <span className="text-xs ">Online</span>
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 pb-6">
            <div className="w-full">
              <YouTubePlayer
                videoUrl={"https://www.youtube.com/watch?v=fNchGLMf7Ak"}
                priority={true}
              />
            </div>
            {/* Course Details content  */}
            <div className="box-content lg:w-[400px] h-fit !p-6">
              <div className="h-[160px] rounded-md text-white mb-4 overflow-hidden">
                <Image
                  className="object-cover"
                  src={Courseimg}
                  alt="Course image"
                />
              </div>
              <div className="mb-4">
                <h2 className="font-semibold text-lg mb-3">Course Details:</h2>
                <ul>
                  <li className="flex justify-between items-center p-3 border-b text-secondary">
                    <div className="flex gap-2 items-center">
                      <ChartNoAxesColumnIncreasing size={18} />
                      <span>Language</span>
                    </div>
                    <span className="text-sm">+4K Students</span>
                  </li>
                  <li className="flex justify-between items-center p-3 border-b text-secondary">
                    <div className="flex gap-2 items-center">
                      <Clock size={18} />
                      <span>Duration</span>
                    </div>
                    <span className="text-sm">12 Weeks</span>
                  </li>
                  <li className="flex justify-between items-center p-3 border-b text-secondary">
                    <div className="flex gap-2 items-center">
                      <BookCopy size={18} />
                      <span>Attendance</span>
                    </div>
                    <span className="text-sm">Online Zoom</span>
                  </li>
                  <li className="flex justify-between items-center p-3 border-b text-secondary">
                    <div className="flex gap-2 items-center">
                      <Puzzle size={18} />
                      <span>Language</span>
                    </div>
                    <span className="text-sm">EN - AR</span>
                  </li>
                  <li className="flex justify-between items-center p-3 border-b text-secondary">
                    <div className="flex gap-2 items-center">
                      <SquareChartGantt size={18} />
                      <span>Certifications</span>
                    </div>
                    <span className="text-sm">International Certificate</span>
                  </li>
                </ul>
              </div>
              <button className="block m-auto px-3 py-2 bg-orange-primary text-white rounded-3xl hover:bg-black link-smooth">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Course Description Content  */}
      <section className="py-16">
        <div className="relative container mx-auto px-6 lg:max-w-[1170px]">
          <Tabs tabs={tabData} />
        </div>
      </section>
    </main>
  );
}
