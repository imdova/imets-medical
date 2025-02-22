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
import {
  Telegram_Icon,
  WhatsApp_Icon,
  Youtube_Icon,
} from "@/assets/icons/icons";
import Button from "@/components/Forms/buttons/Button";
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
      <h1 className="mb-6 text-4xl font-bold">{course.title}</h1>
      <div className="mb-5 flex flex-col gap-4 md:flex-row">
        {/* course Player Section */}
        <div className="w-full flex-1 rounded-3xl border border-neutral-100 bg-white p-3 shadow-lg md:col-span-2">
          <div className="relative aspect-video h-auto w-full overflow-hidden bg-gray-400">
            <YouTubePlayer
              videoUrl={course.videos[currentVideo].url}
              priority={true}
            />
          </div>
          <div className="mt-5 flex items-center justify-between">
            <Button
              className="flex items-center gap-2 rounded-lg border bg-gray-200 p-2 pr-4 hover:bg-gray-300 disabled:opacity-50"
              onClick={prevVideo}
              disabled={currentVideo === 0}
            >
              <ChevronLeft /> Previous
            </Button>
            <div className="flex">
              <span className="text-md">
                <Image width={24} height={24} src={PDF} alt="" />
              </span>
              <a
                href={course.material}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-primary hover:underline"
              >
                Download Course Material
                <Download className="mb-1 ml-2 inline-block h-4 w-4" />
              </a>
            </div>
            <Button
              className="flex items-center gap-2 rounded-lg border bg-gray-200 p-2 pl-4 hover:bg-gray-300 disabled:opacity-50"
              onClick={nextVideo}
              disabled={currentVideo === course.videos.length - 1}
            >
              Next <ChevronRight />
            </Button>
          </div>
        </div>

        {/* Progress Sidebar */}
        <div className="w-[325px] rounded-3xl border border-neutral-100 bg-white p-3 shadow-lg md:col-span-1">
          <ProgressTabs
            tabs={tabs}
            currentVideoIndex={currentVideo}
            setCurrentVideo={setCurrentVideo}
          />
          <Link href={course.actionImage.url} className="w-full">
            <Image
              src={course.actionImage.image}
              alt="action"
              width={350}
              height={350}
              className="mt-4 aspect-square h-auto w-full rounded-sm object-cover"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* WhatsApp Card */}
        <a
          href={`https://api.whatsapp.com/send?phone=${course.socialMediaCards.whatsApp.number.replace(/\D/g, "")}&text=${encodeURIComponent(course.socialMediaCards.whatsApp.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 transform rounded-3xl border border-neutral-100 bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-green-200"
        >
          <div className="mb-4 flex justify-center">
            <WhatsApp_Icon className="h-14 w-14 animate-pulse text-green-500" />
          </div>
          <h2 className="mb-4 text-center text-xl font-semibold text-gray-800">
            Send a{" "}
            <span className="text-xl font-semibold text-green-500">
              WhatsApp
            </span>{" "}
            Message
          </h2>
          <p className="mb-4 text-center text-sm text-gray-600">
            Click here to send us a message on WhatsApp.
          </p>
        </a>

        {/* Telegram Card */}
        <a
          href={course.socialMediaCards.telegram.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 transform rounded-3xl border border-neutral-100 bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-200"
        >
          <div className="mb-4 flex justify-center">
            <Telegram_Icon className="h-14 w-14 animate-pulse text-blue-500" />
          </div>
          <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800">
            Join{" "}
            <span className="text-2xl font-semibold text-blue-500">
              Telegram
            </span>
          </h2>
          <p className="mb-4 text-center text-gray-600">
            Join our Telegram group for updates and discussions.
          </p>
        </a>

        {/* YouTube Card */}
        <a
          href={course.socialMediaCards.youTube.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 transform rounded-3xl border border-neutral-100 bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-red-200"
        >
          <div className="mb-4 flex justify-center">
            <Youtube_Icon className="h-14 w-14 animate-pulse text-red-500" />
          </div>
          <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800">
            Subscribe on{" "}
            <span className="text-2xl font-semibold text-red-500">YouTube</span>
          </h2>
          <p className="mb-4 text-center text-gray-600">
            Don't forget to subscribe to our YouTube channel.
          </p>
        </a>
      </div>
    </div>
  );
}
