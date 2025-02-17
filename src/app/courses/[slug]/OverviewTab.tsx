import Accordion from "@/components/Accordion";
import LimitedCounterOffer from "@/components/LimitedCounterOffer";
import MedulsAccordion from "@/components/MedulsAccordion";
import { ChevronRight } from "lucide-react";

const OverviewTab: React.FC<CourseType> = ({
  description,
  courseGoals,
  courseModules,
  whoCanAttend,
}) => {
  return (
    <div className="rounded-xl shadow-none md:p-4 md:shadow-md">
      <h2 className="mb-2 text-2xl font-semibold">Course Description</h2>
      <p className="mb-4 text-secondary">{description}</p>
      <h2 className="mb-2 text-2xl font-semibold">
        What you'll learn in this course?
      </h2>
      <p className="mb-4 text-secondary">{courseGoals.content}</p>
      <Accordion items={courseGoals.goals} />
      <h2 className="my-3 mt-8 text-2xl font-semibold">Curriculum</h2>
      <MedulsAccordion modules={courseModules} />
      <h2 className="my-3 text-2xl font-semibold">
        Who can Attend this course?
      </h2>
      <p className="mb-4 text-secondary">{whoCanAttend.content}</p>
      <div className="mb-6 grid grid-cols-2">
        {whoCanAttend.items.map((item, index) => (
          <div
            key={index}
            className="flex w-full items-center justify-between p-4 pb-1 text-left font-semibold text-gray-800"
          >
            <span className="group flex items-center gap-2">
              <div className="w-7">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full bg-orange-primary text-white`}
                >
                  <ChevronRight size={15} />
                </span>
              </div>
              <span className="text-sm md:text-lg">{item}</span>
            </span>
          </div>
        ))}
      </div>
      <LimitedCounterOffer initialCount={10} duration={5000} />
    </div>
  );
};
export default OverviewTab;
