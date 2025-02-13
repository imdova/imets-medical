"use client";
import LimitedCounterOffer from "@/components/LimitedCounterOffer";
import Rating from "@/components/Rating";
import { Reviews, videosGrid } from "@/constants/courses.data";
import { PlayIcon, PlaySquare } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ReviewsTab: React.FC = () => {
  const [playing, setPlaying] = useState<number | null>(null);
  return (
    <div className="box-content">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:h-[400px] mb-6">
        {videosGrid.map((video, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden ${
              video.isFeatured ? "col-span-1 md:col-span-1 row-span-2" : ""
            }`}>
            {playing === video.id ? (
              <video
                src="/sample-video.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"></video>
            ) : (
              <>
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setPlaying(video.id)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
                  <span className="bg-white text-blue-500 p-4 rounded-full text-3xl font-bold">
                    <PlayIcon size={18} />
                  </span>
                </button>
              </>
            )}
            {video.isFeatured && (
              <div className="absolute text-center bottom-8 left-0  text-white p-4 w-full">
                <h3 className="text-xl font-bold mb-3">{video.title}</h3>
                <p className="text-sm mb-3">{video.author}</p>
                <p className="text-xs mb-3">
                  {video.views} • {video.timeAgo}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <ul className="p-6">
        {Reviews.map((review) => {
          return (
            <li key={review.id} className="py-5 border-b">
              <span className="block mb-3 text-secondary">{review.date}</span>
              <Rating rating={review.rating} size={10} />
              <div className="flex gap-3 items-center my-2">
                <div className="w-12 h-12 overflow-hidden rounded-full">
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
                <span className="block mb-2 text-secondary">
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
