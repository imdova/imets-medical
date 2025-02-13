import LimitedCounterOffer from "@/components/LimitedCounterOffer";
import Rating from "@/components/Rating";
import { InstructorsData } from "@/constants/courses.data";
import { Album, MapPin, PlayCircle } from "lucide-react";
import Image from "next/image";

const InstructorsTab: React.FC = () => {
  return (
    <div className="box-content">
      {InstructorsData.map((instructor) => {
        return (
          <div className="mb-6" key={instructor.id}>
            <div className="flex gap-6 ">
              <div>
                <Image
                  className=" object-cover rounded-full"
                  src={instructor.image}
                  alt="Avater instractor"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  {instructor.name}
                </h2>
                <span className="text-secondary mb-6">{instructor.job}</span>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex gap-2 items-center ">
                    <Album className="text-orange-primary" size={16} />
                    <span>{instructor.certification}</span>
                  </div>
                  <div className="flex gap-2 items-center ">
                    <PlayCircle className="text-orange-primary" size={16} />
                    <span>{instructor.experience} Years Experience</span>
                  </div>
                  <div className="flex gap-2 items-center ">
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
            <p className="text-secondary leading-6 md:leading-8 p-4">
              {instructor.content}
            </p>
          </div>
        );
      })}
      <LimitedCounterOffer initialCount={10} duration={5000} />
    </div>
  );
};
export default InstructorsTab;
