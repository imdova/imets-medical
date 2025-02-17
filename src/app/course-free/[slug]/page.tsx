"use client";
import NotFoundPage from "@/app/not-found";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  EllipsisVertical,
} from "lucide-react";
import Image from "next/image";
import PDF from "@/assets/icons/pdf.svg";
import DOCX from "@/assets/icons/docx.svg";
import VideoFile from "@/assets/icons/video.svg";
import Link from "next/link";
import YouTubePlayer from "@/components/YouTubePlayer";
import Progress from "@/components/Progress";
import ProgressTabs from "@/components/ProgressTabs";
import { freeCoursesList } from "@/constants/courses-free.data";
import { courseMaterials } from "@/constants/courses.data";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const [currentVideo, setCurrentVideo] = useState(0);
  const course = freeCoursesList.find((x) => x.slug === slug);
  const [question, setQuestion] = useState("");
  const [reply, setReply] = useState("");
  const [replyIndex, setReplyIndex] = useState<string | null>(null);
  if (!course) return <NotFoundPage />;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [questions, setQuestions] = useState<Question[]>(course.questions);
  // Progress Tabs
  const tabs: Tab[] = [
    {
      title: "Course Videos",
      total: 10,
      completed: 1,
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

  // handle Submit Qustions
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      const newQuestion: Question = {
        id: (questions.length + 1).toString(),
        user: course.instructor,
        content: question,
        replies: [],
        timestamp: Date.now(),
      };
      setQuestions([...questions, newQuestion]);
      setQuestion("");
    }
  };
  // handle Submit Reply Qustions
  const handleReplySubmit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    if (reply.trim()) {
      const newReply: Omit<Question, "replies"> = {
        id: `${id}-${Date.now()}`,
        user: course.instructor as Question["user"],
        content: reply,
        timestamp: Date.now(),
      };
      setQuestions(
        questions.map((q) =>
          q.id === id ? { ...q, replies: [...q.replies, newReply] } : q,
        ),
      );
      setReply("");
      setReplyIndex(null);
    }
  };
  // timestamp field to questions and replies and implemented
  const timeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    const intervals = {
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60,
    };
    for (const [key, value] of Object.entries(intervals)) {
      const count = Math.floor(seconds / value);
      if (count > 0) {
        return `${count} ${key}${count !== 1 ? "s" : ""} ago`;
      }
    }
    return "Just now";
  };

  return (
    <div className="mx-auto my-10 px-6 lg:max-w-[1170px]">
      <h1 className="mb-6 text-4xl font-bold">Offline course</h1>
      <div className="mb-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
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
              className="rounded-lg border bg-gray-200 p-2 hover:bg-gray-300 disabled:opacity-50"
              onClick={prevVideo}
              disabled={currentVideo === 0}
            >
              <ChevronLeft />
            </button>
            <button
              className="rounded-lg border bg-gray-200 p-2 hover:bg-gray-300 disabled:opacity-50"
              onClick={nextVideo}
              disabled={currentVideo === course.videos.length - 1}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Progress Sidebar */}
        <div className="rounded-md p-3 shadow-halfShadow md:col-span-1">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="mb-3 text-lg font-semibold">Progress</h2>
              {/* <button className="text-secondary">
                <EllipsisVertical size={18} />
              </button> */}
            </div>
            <Progress value={50} />
            <div className="mb-3 flex items-center justify-between">
              <p className="my-3 text-xs text-gray-500">Course Name here</p>
              <span className="text-xs text-secondary">10/110</span>
            </div>
          </div>
          <ProgressTabs
            tabs={tabs}
            currentVideoIndex={currentVideo}
            setCurrentVideo={setCurrentVideo}
          />
        </div>
      </div>
      <div>
        {/* Course Material content  */}
        <div>
          <div className="mb-4 rounded-md p-3 shadow-halfShadow">
            <h2 className="mb-4 text-xl font-bold">Course Material</h2>
            <ul>
              {courseMaterials.map((material, index) => (
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
                  <Link
                    href={material.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline"
                  >
                    {material.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4 rounded-md p-3 shadow-halfShadow">
            <div className="">
              <h2 className="mb-4 text-xl font-bold">Questions</h2>
              <ul className="space-y-4">
                {questions.length === 0 ? (
                  <p className="text-gray-500">No comments</p>
                ) : (
                  questions.map((q) => (
                    <li key={q.id} className="mb-3 rounded-lg border p-4">
                      <div className="mb-2 flex items-center space-x-2">
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={q.user.image}
                          alt={q.user.name}
                          width={32}
                          height={32}
                        />
                        <span className="text-sm font-bold">{q.user.name}</span>
                        <div className="flex items-center gap-2">
                          <Clock className="text-secondary" size={16} />
                          <span className="text-sm text-secondary">
                            {timeAgo(q.timestamp)}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm">{q.content}</p>
                      {/* <button
                        onClick={() => setReplyIndex(q.id)}
                        className="mt-2 text-primary"
                      >
                        Reply
                      </button> */}
                      {/* {replyIndex === q.id && (
                        <form
                          onSubmit={(e) => handleReplySubmit(e, q.id)}
                          className="mt-2"
                        >
                          <textarea
                            className="h-[80px] w-full resize-none rounded-lg border p-2 outline-none"
                            placeholder="Add a reply..."
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                          ></textarea>
                          <button
                            type="submit"
                            className="link-smooth mt-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-black"
                          >
                            Add Reply
                          </button>
                        </form>
                      )} */}
                      <ul className="mt-3 space-y-1">
                        {q.replies.map((r) => (
                          <li
                            key={r.id}
                            className="mb-3 flex space-x-2 rounded-lg border bg-[#f8f8f8] p-2"
                          >
                            <Image
                              className="h-6 w-6 rounded-full"
                              src={r.user.image}
                              alt={r.user.name}
                              width={32}
                              height={32}
                            />
                            <div>
                              <div className="mb-1 flex items-center gap-2">
                                <span className="text-sm font-bold">
                                  {r.user.name}
                                </span>
                                <div className="flex items-center gap-2">
                                  <Clock className="text-secondary" size={15} />
                                  <span className="text-xs text-secondary">
                                    {timeAgo(r.timestamp)}
                                  </span>
                                </div>
                              </div>

                              <p className="text-sm">{r.content}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))
                )}
              </ul>
              {/* <div className="mt-6">
                <h2 className="mb-4 text-xl font-bold">Ask a Question</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <textarea
                    className="h-[150px] w-full resize-none rounded-lg border p-2 outline-none"
                    placeholder="What are you thoughts?"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  ></textarea>
                  <button
                    type="submit"
                    className="link-smooth rounded-lg bg-primary px-4 py-2 text-white hover:bg-black"
                  >
                    Add Question
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
