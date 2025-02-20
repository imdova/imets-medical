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
import { News } from "@/constants/news.data";
import NewsCard from "@/components/NewsCard";
import { categories } from "@/constants/categories";
import Link from "next/link";
import useGeoInfo from "@/hooks/useGeoInfo";
import Head from "next/head";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export default function Home() {
  const { data, loading } = useGeoInfo();
  const [filter, setFilter] = useState("All");
  const homeCourser = coursesList.filter((course) => course.isInHomePage);
  const filteredCourses =
    filter === "All"
      ? homeCourser
      : homeCourser.filter((course) => course.type === filter);
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "IMETS Medical School",
              "url": "${baseUrl}",
              "logo": "${baseUrl}/logo.png"
            }
          `}
        </script>
      </Head>
      {/* Section Landing Page */}
      <section className="relative h-[550px] bg-primary">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="absolute -left-10 bottom-16 h-[300px] w-[300px] rounded-full bg-primary-900 md:h-[400px] md:w-[400px]"></div>
          <div className="absolute top-1/2 flex -translate-y-1/2 items-center gap-5">
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <span className="mb-4 block w-fit rounded-full bg-white px-3 py-2 text-center text-primary lg:text-start">
                15 Years of Exprience
              </span>
              <h1 className="mb-4 text-center text-4xl font-bold text-white lg:text-start lg:text-6xl">
                Upgrade your skills and knowledge in Healthcare with our online
                courses
              </h1>
              <p className="mb-4 text-center text-lg text-white lg:text-start">
                IMETS Medical School offers a wide range of expertly designed
                programs, tailored for professionals in healthcare.
              </p>
              <Link
                href={`/courses`}
                className="group gap-2 text-nowrap rounded-xl bg-orange-primary px-12 py-3 text-white transition-all duration-150 ease-in-out hover:scale-105 hover:bg-yellow-400"
              >
                Explore All Courser
              </Link>
            </div>
            <div className="hidden flex-1 lg:block">
              <div>
                <div className="overflow-hidden rounded-s-full border-8 border-white">
                  <Image
                    className="w-full object-cover"
                    src={Landing_Img}
                    alt="Landing Img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 hidden w-full -translate-x-1/2 translate-y-1/2 xl:block">
            <div className="container mx-auto p-6 lg:max-w-[1170px]">
              <div className="rounded-xl bg-white p-4 shadow-lg">
                <div className="grid grid-cols-4 gap-5">
                  <div className="flex flex-1 gap-2">
                    <span className="flex h-12 w-12 min-w-12 items-center justify-center rounded-full bg-[#F8BC2426] text-orange-primary">
                      <BookText size={18} />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold">Online Course</h2>
                      <p className="text-sm text-secondary">
                        Attend from anywhere with Live Lectures!
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-2">
                    <span className="flex h-12 w-12 min-w-12 items-center justify-center rounded-full bg-[#F8BC2426] text-orange-primary">
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
                  <div className="flex flex-1 gap-2">
                    <span className="flex h-12 w-12 min-w-12 items-center justify-center rounded-full bg-[#F8BC2426] text-orange-primary">
                      <Activity size={18} />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold">
                        Career Monitoring
                      </h2>
                      <p className="text-sm text-secondary">
                        Unlock your potential with our !
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-2">
                    <span className="flex h-12 w-12 min-w-12 items-center justify-center rounded-full bg-[#F8BC2426] text-orange-primary">
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
        </div>
      </section>
      {/* Explore Popular Courese Section  */}
      <section className="pt-28">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-[1170px]">
          <div>
            <div className="mb-8 flex flex-col items-center justify-between gap-2 lg:flex-row">
              <h2 className="mb-8 text-nowrap text-5xl font-semibold text-primary lg:mr-8">
                Popular courses
              </h2>
              <div className="flex w-full flex-row flex-wrap gap-2 md:justify-end">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`flex-1 text-nowrap rounded-md border px-4 py-2 text-sm transition-colors duration-500 ${
                      filter === category
                        ? "bg-primary text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  {...course}
                  {...data}
                  loading={loading}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="flex flex-col items-center gap-5 lg:flex-row">
            <div className="w-full">
              <Image
                className="m-auto w-[350px] rounded-full border-2 border-primary object-cover p-1 lg:m-0"
                src={Landing_Img_2}
                alt="Landing Img"
              />
            </div>
            <div className="w-full">
              <span className="mb-4 block font-semibold text-orange-primary">
                About IMETS Medical School
              </span>
              <h1 className="mb-6 text-5xl font-bold text-primary">
                Welcome To IMETS Medical School
              </h1>
              <p className="mb-6 text-secondary">
                At IMETS Medical School, we are committed to revolutionizing
                healthcare education by offering cutting-edge, comprehensive,
                and specialized programs designed to meet the demands of modern
                medicine. Founded on the principles of excellence, innovation,
                and compassion, we strive to empower the next generation of
                healthcare professionals with the knowledge, skills, and ethical
                grounding needed to excel in an ever-evolving medical landscape.
              </p>
              <ul>
                <li className="mb-4 flex gap-3">
                  <span className="flex h-12 w-12 min-w-12 items-center justify-center rounded-full bg-[#F8BC2426] text-orange-primary">
                    <BookText size={18} />
                  </span>
                  <div className="w-[230px]">
                    <h2 className="text-lg font-semibold">Online Course</h2>
                    <p className="text-sm text-secondary">
                      Attend from anywhere with Live Lectures!
                    </p>
                  </div>
                </li>
                <li className="mb-4 flex gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F8BC2426] text-orange-primary">
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
                <li className="mb-4 flex gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F8BC2426] text-orange-primary">
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
      <section>
        <div className="relative flex min-h-[500px] items-center justify-center text-center text-white">
          <Image
            className="absolute left-0 top-0 h-full object-cover brightness-50"
            src={Landing_Img_3}
            alt="Landing Img"
          />
          <div className="container relative mx-auto px-6 lg:max-w-[1170px]">
            <h1 className="mb-4 text-4xl font-semibold">
              Start your learning journey today! Enroll now in our online course
            </h1>
            <p className="mb-6">
              Take your career to unique heights in this competitive job market.
              All the categories you need are here.
            </p>
            <button className="link-smooth m-auto flex items-center justify-center rounded-md bg-orange-primary p-3 hover:bg-black">
              Discover More
            </button>
          </div>
        </div>
        <div className="relative mb-8 min-h-[300px]">
          <div className="absolute left-0 top-0 h-1/2 w-full bg-orange-primary"></div>
          <div className="container relative mx-auto px-6 lg:max-w-[1170px]">
            <h1 className="m-auto max-w-[350px] p-5 text-center text-5xl font-bold text-white">
              Our Latest News & Article
            </h1>
            <div className="grid w-full grid-cols-1 gap-4 p-3 md:grid-cols-2 lg:grid-cols-3">
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
