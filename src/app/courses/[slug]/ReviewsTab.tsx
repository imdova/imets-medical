"use client";
import LimitedCounterOffer from "@/components/LimitedCounterOffer";
import YouTubePlayer from "@/components/YouTubePlayer";
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
            className={`relative aspect-[16/9] overflow-hidden rounded-lg md:aspect-auto ${
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
            {playing !== index && (video.author || video.title) && (
              <div className="pointer-events-none absolute bottom-0 left-0 flex w-full flex-wrap items-end gap-2 bg-black/50 p-4 text-center text-white drop-shadow backdrop-blur-[1px]">
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
      <div className="mb-6 grid grid-cols-1 gap-4 md:h-[650px] md:grid-cols-5">
        {reviews.slice(0, 7).map((review, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg border bg-white shadow-md ${
              index === 0 ? "col-span-1 row-span-2 md:col-span-2" : ""
            }`}
          >
            <Image
              src={review.image}
              alt={"student Image"}
              width={200}
              height={150}
              className="h-full w-full object-contain"
            />
            {(review.name || review.title) && (
              <div className="pointer-events-none absolute bottom-0 left-0 flex w-full flex-wrap items-end gap-2 bg-black/50 p-4 text-center text-white drop-shadow backdrop-blur-[1px]">
                <h3 className="mb-3 text-xl font-bold">{review.name}</h3>
                <p className="mb-3 text-sm">{review.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Grid Images Two  */}
      {reviews.slice(7, 14).length > 0 && (
        <div className="mb-6 grid grid-cols-1 gap-4 md:h-[650px] md:grid-cols-4">
          {reviews.slice(7, 14).map((review, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg border bg-white shadow-md ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={review.image}
                alt={"student Image"}
                width={200}
                height={150}
                className="h-full w-full object-cover"
              />
              {(review.name || review.title) && (
                <div className="pointer-events-none absolute bottom-0 left-0 flex w-full flex-wrap items-end gap-2 bg-black/50 p-4 text-center text-white drop-shadow backdrop-blur-[1px]">
                  <h3 className="mb-3 text-xl font-bold">{review.name}</h3>
                  <p className="mb-3 text-sm">{review.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <LimitedCounterOffer form={form} />
    </div>
  );
};
export default ReviewsTab;
