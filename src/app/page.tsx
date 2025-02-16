"use client";
import SearchFild from "@/components/SearchFild";
import Landing_Img from "@/assets/images/landing.jpg";
import Landing_Img_2 from "@/assets/images/landing-2.jpg";
import Landing_Img_3 from "@/assets/images/landing-3.jpg";
import Image from "next/image";
import {
  Activity,
  Album,
  BookText,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Video,
} from "lucide-react";
import { useState } from "react";
import { coursesList } from "@/constants/courses.data";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";
import { News } from "@/constants/news.data";
import NewsCard from "@/components/NewsCard";
import { categories } from "@/constants/categories";

export default function Home() {
  const [filter, setFilter] = useState<
    | "All"
    | "Healthcare Quality"
    | "Infection Control"
    | "Hospital Management"
    | "Marketing Management"
    | "HR Management"
  >("All");

  const filteredCourses =
    filter === "All"
      ? coursesList
      : coursesList.filter((course) => course.type === filter);
  return (
    <>
      {/* Section Landing Page */}
      <section className="relative bg-primary h-[550px]">
        <div className="container mx-auto px-6 lg:max-w-[1170px] ">
          <div className="absolute bottom-16 -left-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-primary-900 rounded-full"></div>
          <div className="absolute flex items-center gap-5 top-1/2 -translate-y-1/2  ">
            <div className="flex flex-col items-center lg:items-start flex-1">
              <span className="block w-fit text-primary bg-white px-3 py-2 rounded-full mb-4 text-center lg:text-start ">
                15 Years of Exprience
              </span>
              <h1 className="text-4xl lg:text-6xl text-white font-bold mb-4 text-center lg:text-start ">
                Upgrade your skills and knowledge in Healthcare with our online
                courses
              </h1>
              <p className="text-lg text-white mb-4 text-center lg:text-start ">
                IMETS Medical School offers a wide range of expertly designed
                programs, tailored for professionals in healthcare.
              </p>
              <SearchFild />
            </div>
            <div className="hidden lg:block flex-1">
              <div>
                <div className="rounded-s-full border-8 border-white overflow-hidden">
                  <Image
                    className="object-cover w-full"
                    src={Landing_Img}
                    alt="Landing Img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute hidden xl:block -bottom-12 box-content">
            <div className="container mx-auto px-6 lg:max-w-[1170px] ">
              <div className="grid grid-cols-4 gap-5 ">
                <div className="flex gap-2 flex-1">
                  <span className="flex justify-center items-center w-12 h-12 bg-[#F8BC2426] rounded-full text-orange-primary">
                    <BookText size={18} />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold">Online Course</h2>
                    <p className="text-sm text-secondary">
                      Attend from anywhere with Live Lectures!
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-1">
                  <span className="flex justify-center items-center w-12 h-12 bg-[#F8BC2426] rounded-full text-orange-primary">
                    <Video size={18} />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold">
                      Learn from Experts
                    </h2>
                    <p className="text-sm text-secondary">
                      Learn from Experts in Healthcare Management!
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-1">
                  <span className="flex justify-center items-center w-12 h-12 bg-[#F8BC2426] rounded-full text-orange-primary">
                    <Activity size={18} />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold">Career Monitoring</h2>
                    <p className="text-sm text-secondary">
                      Unlock your potential with our !
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-1">
                  <span className="flex justify-center items-center w-12 h-12 bg-[#F8BC2426] rounded-full text-orange-primary">
                    <Album size={18} />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold">Certificating</h2>
                    <p className="text-sm text-secondary">
                      Unlock your potential with International Certificates!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Explore Popular Courese Section  */}
      <section className="pt-28">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <h1 className="text-primary text-5xl text-center font-semibold mb-8">
            Explore Popular coursesList
          </h1>
          <div className="p-6">
            <div className="flex justify-between items-center flex-col gap-2 lg:flex-row mb-8">
              <Link
                className="w-fit text-white bg-primary px-4 py-1 rounded-full  text-center "
                href={""}
              >
                Search
              </Link>
              <div className="flex flex-col w-full lg:w-fit lg:flex-row gap-2 ">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() =>
                      setFilter(
                        category as
                          | "All"
                          | "Healthcare Quality"
                          | "Infection Control"
                          | "Hospital Management"
                          | "Marketing Management"
                          | "HR Management"
                      )
                    }
                    className={`px-4 py-2 lg:w-[150px] flex-1 text-sm rounded-md  border ${
                      filter === category
                        ? "bg-primary text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="flex justify-center items-center w-10 h-10 bg-primary text-white rounded-full">
                  <ChevronLeft size={18} />
                </button>
                <button className="flex justify-center items-center w-10 h-10 bg-primary text-white rounded-full">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <div className="w-full ">
              <Image
                className="object-cover w-[350px] rounded-full border-2 border-primary p-1 m-auto lg:m-0 "
                src={Landing_Img_2}
                alt="Landing Img"
              />
            </div>
            <div className="w-full">
              <span className="block text-orange-primary mb-4 font-semibold">
                About IMETS Medical School
              </span>
              <h1 className="text-5xl font-bold text-primary mb-6 ">
                Welcome To IMETS Medical School
              </h1>
              <p className="text-secondary mb-6">
                At IMETS Medical School, we are committed to revolutionizing
                healthcare education by offering cutting-edge, comprehensive,
                and specialized programs designed to meet the demands of modern
                medicine. Founded on the principles of excellence, innovation,
                and compassion, we strive to empower the next generation of
                healthcare professionals with the knowledge, skills, and ethical
                grounding needed to excel in an ever-evolving medical landscape.
              </p>
              <ul>
                <li className="flex gap-3 mb-4">
                  <span className="flex justify-center items-center w-12 h-12  bg-[#F8BC2426] rounded-full text-orange-primary">
                    <BookText size={18} />
                  </span>
                  <div className="w-[230px]">
                    <h2 className="text-lg font-semibold">Online Course</h2>
                    <p className="text-sm text-secondary">
                      Attend from anywhere with Live Lectures!
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 mb-4">
                  <span className="flex justify-center items-center w-12 h-12  bg-[#F8BC2426] rounded-full text-orange-primary">
                    <TrendingUp size={18} />
                  </span>
                  <div className="w-[230px]">
                    <h2 className="text-lg font-semibold">
                      Upgrade Personal skill
                    </h2>
                    <p className="text-sm text-secondary">
                      Take your career to unique heights in this competitive job
                      market.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 mb-4">
                  <span className="flex justify-center items-center w-12 h-12 bg-[#F8BC2426] rounded-full text-orange-primary">
                    <Album size={18} />
                  </span>
                  <div className="w-[230px]">
                    <h2 className="text-lg font-semibold">Certifications</h2>
                    <p className="text-sm text-secondary">
                      Take your career to unique heights in this competitive job
                      market.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Blogs and News Section */}
      <section className="h-[1000px]">
        <div className="flex justify-center items-center relative min-h-[500px] text-white text-center">
          <Image
            className="absolute top-0 left-0 h-full object-cover brightness-50 "
            src={Landing_Img_3}
            alt="Landing Img"
          />
          <div className="container relative mx-auto px-6 lg:max-w-[1170px]">
            <h1 className="text-4xl mb-4 font-semibold ">
              Start your learning journey today! Enroll now in our online course
            </h1>
            <p className="mb-6">
              Take your career to unique heights in this competitive job market.
              All the categories you need are here.
            </p>
            <button className="flex items-center justify-center p-3 rounded-md bg-orange-primary hover:bg-black link-smooth m-auto">
              Discover More
            </button>
          </div>
        </div>
        <div className="relative min-h-[300px] bg-orange-primary">
          <div className="container relative mx-auto px-6 lg:max-w-[1170px]">
            <h1 className="max-w-[350px] text-5xl m-auto text-center font-bold text-white p-5">
              Our Latest News & Article
            </h1>
            <div className="absolute w-full p-3 left-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {News?.map((newsItem) => (
                <NewsCard key={newsItem.id} {...newsItem} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
