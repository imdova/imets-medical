"use client";
import Image from "next/image";
import { BookOpen, Clock, Earth, Star, Video } from "lucide-react";
import Link from "next/link";

const VideoCard: React.FC<FreeCourseType> = ({
  id,
  image,
  title,
  instructor,
  rating,
  status,
  startDate,
}) => {
  return (
    <>
      {/* Course Card */}
      <div className="relative rounded-lg border p-5">
        <Link href={`offline-video/${id}`}>
          {status === "Online" && (
            <span className="absolute left-7 top-7 flex items-center gap-3 rounded-full bg-gray-100 px-3 py-2">
              <Earth size={18} />
              <span className="text-xs font-semibold">Online</span>
            </span>
          )}
          {status === "Recorded" && (
            <span className="absolute left-7 top-7 flex items-center gap-3 rounded-full bg-gray-100 px-3 py-2">
              <Video size={18} />
              <span className="text-xs font-semibold">Recorded</span>
            </span>
          )}
          <div className="mb-3 h-40 w-full overflow-hidden rounded-md">
            <Image
              className="h-full w-full object-cover"
              src={image}
              alt="Course Thumbnail"
              width={400}
              height={400}
            />
          </div>
          <div className="flex w-full items-center justify-between">
            <h1 className="mb-3 font-semibold">{title}</h1>
            <span className="flex items-center gap-1 font-semibold text-primary">
              $200
            </span>
          </div>
          <div className="mb-4 flex items-center gap-2">
            <Image
              className="h-9 w-9 rounded-full"
              width={90}
              height={90}
              src={instructor.image}
              alt="Instructor"
            />
            <span className="text-xs">{instructor.name}</span>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-secondary">
                {rating.toFixed(1)}
              </span>
              <Star size={12} className="text-orange-400" />
            </div>
          </div>
          <div className="mb-3">
            <div className="flex gap-2">
              <BookOpen className="text-primary" size={18} />
              <span className="text-sm text-primary">{10} Lessons</span>
            </div>
          </div>
        </Link>
        <div className="mb-3 flex w-full justify-between">
          <div className="flex gap-2">
            <Clock className="text-secondary" size={18} />
            <span className="text-sm text-secondary"> {startDate}</span>
          </div>
          <Link
            className="link-smooth text-sm hover:text-primary hover:underline"
            href={`offline-video/${id}`}
          >
            Veiw Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
