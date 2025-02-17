"use client";
import Image from "next/image";
import { use } from "react";
import CourseBackground from "@/assets/images/courseOverview-1.jpg";
import {
  BookCopy,
  Calendar,
  ChartNoAxesColumnIncreasing,
  Clock,
  Coins,
  DollarSign,
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
import { coursesList } from "@/constants/courses.data";
import CourseApply from "@/components/courses/CourseApply";
import StickyCTA from "@/components/StickyCTA";
import useGeoInfo from "../../../hooks/useGeoInfo";

interface SingleCourseProps {
  params: Promise<{ slug: string }>;
}

type CoursePost = {
  title: string;
  content: string;
};

export default function SingleCourse({ params }: SingleCourseProps) {
  const { slug } = use(params);
  const { data, loading } = useGeoInfo();

  const course = coursesList.find((x) => x.slug === slug);

  if (!course) return <NotFoundPage />;

  const tabData = [
    { label: "Overview", content: <OverviewTab {...course} /> },
    { label: "Instructors", content: <InstructorsTab {...course} /> },
    {
      label: "Reviews",
      content: <ReviewsTab {...course} />,
    },
    {
      label: "Students",
      content: <StudentsTab {...course} />,
    },
  ];
  return (
    <main>
      {/* Course Review Content  */}
      <section className="relative md:pb-8 md:pt-6">
        <Image
          className="absolute left-0 top-0 h-full object-cover"
          src={CourseBackground}
          alt="Course Background"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-[#042c76ec]"></div>
        <div className="container relative mx-auto px-6 lg:max-w-[1170px]">
          <h1 className="py-4 pt-6 text-5xl font-semibold text-white">
            {course.title}
          </h1>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <Calendar size={16} />
              <span className="text-sm font-light">{course.startDate}</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <GraduationCap size={16} />
              <span>{course.lecture_Method}</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Calendar size={16} />
              <span>{course.lecture_date}</span>
            </div>
            {!loading && (
              <div className="flex items-center gap-2 text-white">
                <Coins className="text-orange-primary" size={16} />
                <span>
                  {course.price[data.country_code2] || course.price.other}
                </span>
              </div>
            )}
            <div className="hidden items-center gap-2 text-white md:flex">
              <GraduationCap size={16} />
              <span>{course.students} Students</span>
            </div>
            <div className="flex items-center gap-2 text-white md:hidden">
              <Clock size={16} />
              <span>{course.duration}</span>
            </div>

            <div className="mt-2 flex flex-col items-center gap-1">
              <Rating rating={4} size={10} />
              <span className="text-[10px] text-orange-primary">
                ({course.rating} Stars Reviews)
              </span>
            </div>
            <span className="flex items-center gap-3 rounded-full bg-white px-4 py-2">
              <span className="text-xs">Online</span>
            </span>
          </div>
          <div className="flex flex-col gap-4 pb-6 lg:flex-row">
            <div className="aspect-video h-auto max-h-[400px] w-full overflow-hidden">
              <YouTubePlayer
                videoUrl={course.video.url}
                priority={true}
                autoPlay={true}
                thumbnailUrl={course.video.thumbnail}
              />
            </div>
            {/* Course Details content  */}
            <div className="h-fit overflow-hidden rounded-2xl bg-white !p-0 !pb-4 lg:w-[400px]">
              <div className="mb-4 hidden h-[140px] overflow-hidden text-white md:block">
                <Image
                  src={course.image}
                  alt="Course image"
                  width={400}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="mb-4 md:px-4">
                <h2 className="mb-3 hidden text-lg font-semibold md:block">
                  Course Details:
                </h2>
                <ul className="hidden md:block">
                  {/* <li className="flex items-center justify-between border-b p-2 text-secondary">
                    <div className="flex items-center gap-2">
                      <ChartNoAxesColumnIncreasing size={18} className="text-blue-600" />
                      <span>Top Rated</span>
                    </div>
                    <span className="text-sm">{course.students} Students</span>
                  </li> */}
                  <li className="flex items-center justify-between border-b p-2 text-secondary">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-blue-600" />
                      <span>Duration</span>
                    </div>
                    <span className="text-sm">{course.duration}</span>
                  </li>
                  <li className="flex items-center justify-between border-b p-2 text-secondary">
                    <div className="flex items-center gap-2">
                      <BookCopy size={18} className="text-blue-600" />
                      <span>Attendance</span>
                    </div>
                    <span className="text-sm">{course.lecture_Method}</span>
                  </li>
                  <li className="flex items-center justify-between border-b p-2 text-secondary">
                    <div className="flex items-center gap-2">
                      <Puzzle size={18} className="text-blue-600" />
                      <span>Language</span>
                    </div>
                    <span className="text-sm">{course.languages}</span>
                  </li>
                  <li className="flex items-center justify-between border-b p-2 text-secondary">
                    <div className="flex items-center gap-2">
                      <SquareChartGantt size={18} className="text-blue-600" />
                      <span>Certifications</span>
                    </div>
                    <span className="text-sm">{course.certificate}</span>
                  </li>
                </ul>
              </div>
              <CourseApply {...course.form} />
            </div>
          </div>
        </div>
      </section>
      {/* Course Description Content  */}
      <section className="py-16 pt-6 md:pt-16">
        <div className="container relative mx-auto px-6 lg:max-w-[1170px]">
          <Tabs tabs={tabData} />
        </div>
        <StickyCTA
          groupId={course.form.groupId}
          redirect={course.form.redirect}
        />
      </section>
    </main>
  );
}
