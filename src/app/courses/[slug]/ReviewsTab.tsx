"use client";
import LimitedCounterOffer from "@/components/LimitedCounterOffer";
import Rating from "@/components/Rating";
import { PlayIcon, PlaySquare } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ReviewsTab: React.FC<CourseType> = ({ reviews, videosGrid }) => {
  const [playing, setPlaying] = useState<number | null>(null);
  return (
    <div className="box-content">
      <div className="mb-6 grid grid-cols-1 gap-4 p-4 md:h-[400px] md:grid-cols-3">
        {videosGrid.map((video, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${
              video.isFeatured ? "col-span-1 row-span-2 md:col-span-1" : ""
            }`}
          >
            {playing === video.id ? (
              <video
                src="/sample-video.mp4"
                controls
                autoPlay
                className="h-full w-full object-cover"
              ></video>
            ) : (
              <>
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={200}
                  height={150}
                  className="h-full w-full object-cover"
                />
                <button
                  onClick={() => setPlaying(video.id)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60"
                >
                  <span className="rounded-full bg-white p-4 text-3xl font-bold text-blue-500">
                    <PlayIcon size={18} />
                  </span>
                </button>
              </>
            )}
            {video.isFeatured && (
              <div className="absolute bottom-8 left-0 w-full p-4 text-center text-white">
                <h3 className="mb-3 text-xl font-bold">{video.title}</h3>
                <p className="mb-3 text-sm">{video.author}</p>
                <p className="mb-3 text-xs">
                  {video.views} • {video.timeAgo}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <ul className="p-6">
        {reviews.map((review) => {
          return (
            <li key={review.id} className="border-b py-5">
              <span className="mb-3 block text-secondary">{review.date}</span>
              <Rating rating={review.rating} size={10} />
              <div className="my-2 flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    width={100}
                    height={100}
                    src={review.user.image}
                    alt="Avater"
                  />
                </div>
                <h2 className="font-semibold">{review.user.name}</h2>
              </div>
              <div>
                <span className="mb-2 block text-secondary">
                  {review.user.job}
                </span>
                <p>{review.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <LimitedCounterOffer initialCount={10} duration={5000} />
    </div>
  );
};
export default ReviewsTab;
