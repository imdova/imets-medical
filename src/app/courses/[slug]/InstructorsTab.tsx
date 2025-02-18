import LimitedCounterOffer from "@/components/LimitedCounterOffer";
import Rating from "@/components/Rating";
import { Album, MapPin, PlayCircle } from "lucide-react";
import Image from "next/image";

const InstructorsTab: React.FC<CourseType> = ({ instructors }) => {
  return (
    <div className="box-content">
      {instructors.map((instructor) => {
        return (
          <div className="mb-6" key={instructor.id}>
            <div className="flex gap-6">
              <div>
                <Image
                  className="rounded-full object-cover"
                  src={instructor.image}
                  alt="Avater instractor"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h2 className="mb-2 text-2xl font-semibold">
                  {instructor.name}
                </h2>
                <span className="mb-6 text-secondary">{instructor.job}</span>
                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Album className="text-orange-primary" size={16} />
                    <span>{instructor.certification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PlayCircle className="text-orange-primary" size={16} />
                    <span>{instructor.experience} Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-orange-primary" size={16} />
                    <span>{instructor.location}</span>
                  </div>
                  <div className="mt-2 flex flex-col items-center gap-1">
                    <Rating rating={instructor.rating} size={10} />
                    <span className="text-[10px] text-secondary">
                      ({instructor.rating} Stars Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="p-4 leading-6 text-secondary md:leading-8">
              {instructor.content}
            </p>
          </div>
        );
      })}
      <LimitedCounterOffer />
    </div>
  );
};
export default InstructorsTab;
