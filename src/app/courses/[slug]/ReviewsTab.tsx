"use client";
import LimitedCounterOffer from "@/components/LimitedCounterOffer";
import Rating from "@/components/Rating";
import YouTubePlayer from "@/components/YouTubePlayer";
import { PlayIcon, PlaySquare } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ReviewsTab: React.FC<CourseType> = ({ reviews, videosGrid, form }) => {
  const [playing, setPlaying] = useState<number | null>(null);
  return (
    <div className="box-content">
      <div className="mb-6 grid grid-cols-1 gap-4 p-4 md:h-[400px] md:grid-cols-3">
        {videosGrid.map((video, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${
              index === 0 ? "col-span-1 row-span-2 md:col-span-1" : ""
            }`}
          >
            <YouTubePlayer
              videoUrl={video.videoUrl}
              thumbnailUrl={video.thumbnail}
              playing={playing === index}
              outControl={true}
              onPlaying={() => setPlaying(index)}
            />

            {playing !== index && (
              <div className="absolute bottom-0 left-0 flex w-full flex-wrap items-end gap-2 bg-black/50 p-4 text-center text-white drop-shadow backdrop-blur-[1px]">
                {video.title && (
                  <h3 className="mb-3 text-xl font-bold">{video.title}</h3>
                )}
                {video.author && <p className="mb-3 text-sm">{video.author}</p>}
                {video.timeAgo && video.views && (
                  <p className="mb-3 text-xs">
                    {video.views} • {video.timeAgo}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <ul className="space-y-3 p-6">
        {reviews.map((review, index) => {
          return review.reviewImage ? (
            <div key={index} className="h-32 w-full overflow-hidden rounded-md">
              <Image
                width={800}
                height={150}
                src={review.reviewImage}
                alt="Avater"
                className="h-32 w-full object-cover object-left-top"
              />
            </div>
          ) : (
            <li key={index} className="border-b py-5">
              <span className="mb-3 block text-secondary">{review.date}</span>
              {review.rating && <Rating rating={review.rating} size={10} />}
              {review.user && (
                <div className="my-2 flex items-center gap-3">
                  {review.user.image && (
                    <div className="h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        width={100}
                        height={100}
                        src={review.user.image}
                        alt="Avater"
                      />
                    </div>
                  )}
                  <h2 className="font-semibold">{review.user.name}</h2>
                </div>
              )}
              <div>
                {review.user?.job && (
                  <span className="mb-2 block text-secondary">
                    {review.user.job}
                  </span>
                )}
                <p>{review.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <LimitedCounterOffer form={form} />
    </div>
  );
};
export default ReviewsTab;
