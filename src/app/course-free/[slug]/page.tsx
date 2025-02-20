"use client";
import NotFoundPage from "@/app/not-found";
import { use } from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Download, Send } from "lucide-react";
import Image from "next/image";
import PDF from "@/assets/icons/pdf.svg";
import DOCX from "@/assets/icons/docx.svg";
import VideoFile from "@/assets/icons/video.svg";
import Link from "next/link";
import YouTubePlayer from "@/components/YouTubePlayer";
import Progress from "@/components/Progress";
import ProgressTabs from "@/components/ProgressTabs";
import freeCourses from "@/courses-free";
import { WhatsApp_Icon, Youtube_Icon } from "@/assets/icons/icons";
interface SingleCourseProps {
  params: Promise<{ slug: string }>;
}

export default function OfflineVideo({ params }: SingleCourseProps) {
  const { slug } = use(params);
  const [currentVideo, setCurrentVideo] = useState(0);
  const course = freeCourses.find((x) => x.slug === slug);
  if (!course) return <NotFoundPage />;
  const tabs: Tab[] = [
    {
      title: "Course Videos",
      total: course.videos.length,
      completed: currentVideo + 1,
      items: course.videos.map((video) => ({
        name: video.title,
        url: video.url,
        locked: video.locked,
        duration: video.duration,
      })),
    },
    // { title: "Audio", total: 25, completed: 1 },
    // { title: "Module", total: 50, completed: 1 },
    // { title: "Quiz", total: 10, completed: 1 },
  ];

  const nextVideo = () => {
    if (
      currentVideo < course.videos.length - 1 &&
      !course.videos[currentVideo + 1].locked
    ) {
      setCurrentVideo(currentVideo + 1);
    }
  };

  const prevVideo = () => {
    if (currentVideo > 0) {
      setCurrentVideo(currentVideo - 1);
    }
  };

  return (
    <div className="mx-auto my-10 px-6 lg:max-w-[1170px]">
      <h1 className="mb-6 text-4xl font-bold">Offline course</h1>
      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* course Player Section */}
        <div className="rounded-md p-3 shadow-halfShadow md:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <div className="mb-4">
              <h2 className="mb-3 text-xl font-bold">{course.title}</h2>
              <div className="flex items-center gap-2">
                <Image
                  className="h-8 w-8 rounded-full"
                  src={course.instructor.image}
                  alt="avatar"
                  width={32}
                  height={32}
                />
                <span className="text-xs text-secondary">
                  {course.instructor.name}
                </span>
              </div>
            </div>
            {/* <button className="text-secondary">
              <EllipsisVertical size={18} />
            </button> */}
          </div>
          <div className="relative aspect-video h-auto w-full overflow-hidden bg-gray-400">
            <YouTubePlayer
              videoUrl={course.videos[currentVideo].url}
              priority={true}
            />
          </div>
          <div className="mt-5 flex justify-between">
            <button
              className="flex items-center gap-2 rounded-lg border bg-gray-200 p-2 pr-4 hover:bg-gray-300 disabled:opacity-50"
              onClick={prevVideo}
              disabled={currentVideo === 0}
            >
              <ChevronLeft /> Previous
            </button>
            <button
              className="flex items-center gap-2 rounded-lg border bg-gray-200 p-2 pl-4 hover:bg-gray-300 disabled:opacity-50"
              onClick={nextVideo}
              disabled={currentVideo === course.videos.length - 1}
            >
              Next <ChevronRight />
            </button>
          </div>
        </div>

        {/* Progress Sidebar */}
        <div className="rounded-md p-3 shadow-halfShadow md:col-span-1">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="mb-3 text-lg font-semibold">Progress</h2>
            {/* <button className="text-secondary">
                <EllipsisVertical size={18} />
              </button> */}
          </div>
          <Progress value={((currentVideo + 1) / course.videos.length) * 100} />
          <div className="mb-3 flex items-center justify-between">
            <p className="my-3 text-xs text-gray-500">{course.title}</p>
            <span className="text-xs text-secondary">
              {currentVideo + 1}/{course.videos.length}
            </span>
          </div>
          <ProgressTabs
            tabs={tabs}
            currentVideoIndex={currentVideo}
            setCurrentVideo={setCurrentVideo}
          />
          <Link href="#" className="w-full">
            <Image
              src="/images/cic.webp"
              alt="action"
              width={200}
              height={200}
              className="mt-4 h-40 w-full rounded-sm object-cover"
            />
          </Link>
        </div>
      </div>
      <div className="mb-4 rounded-md p-3 shadow-halfShadow">
        <h2 className="mb-4 text-xl font-bold">Course Material</h2>
        <ul>
          {course.courseMaterials.map((material, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 border-b p-3 last:border-b-0"
            >
              <span className="text-lg">
                <Image
                  width={30}
                  height={30}
                  src={
                    material.fileType === "pdf"
                      ? PDF
                      : material.fileType === "docx"
                        ? DOCX
                        : VideoFile
                  }
                  alt=""
                />
              </span>
              <a
                href={material.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline"
              >
                {material.title}{" "}
                <Download className="mb-1 ml-2 inline-block h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4 flex flex-wrap justify-center gap-8 rounded-md p-3 shadow-halfShadow">
        {/* WhatsApp Card */}
        <a
          href={`https://api.whatsapp.com/send?phone=${course.socialMediaCards.whatsApp.number.replace(/\D/g, "")}&text=${encodeURIComponent(course.socialMediaCards.whatsApp.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 transform rounded-md border border-neutral-100 bg-white p-4 shadow-halfShadow transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-green-200"
        >
          <div className="mb-4 flex justify-center">
            <WhatsApp_Icon className="h-9 w-9 animate-pulse text-green-500" />
          </div>
          <h2 className="text-center text-lg font-semibold text-gray-800">
            Send a{" "}
            <span className="text-lg font-semibold text-green-500">
              WhatsApp
            </span>{" "}
            Message
          </h2>
        </a>

        {/* Telegram Card */}
        <a
          href={course.socialMediaCards.telegram.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 transform rounded-md border border-neutral-100 bg-white p-4 shadow-halfShadow transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-200"
        >
          <div className="mb-4 flex justify-center">
            <Send className="h-9 w-9 animate-pulse text-blue-500" />
          </div>
          <h2 className="text-center text-lg font-semibold text-gray-800">
            Join{" "}
            <span className="text-lg font-semibold text-blue-500">
              Telegram
            </span>
          </h2>
        </a>

        {/* YouTube Card */}
        <a
          href={course.socialMediaCards.youTube.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 transform rounded-md border border-neutral-100 bg-white p-4 shadow-halfShadow transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-red-200"
        >
          <div className="mb-4 flex justify-center">
            <Youtube_Icon className="h-9 w-9 animate-pulse text-red-500" />
          </div>
          <h2 className="text-center text-lg font-semibold text-gray-800">
            Subscribe on{" "}
            <span className="text-lg font-semibold text-red-500">YouTube</span>
          </h2>
        </a>
      </div>
    </div>
  );
}
