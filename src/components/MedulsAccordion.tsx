import { medulsAccordion } from "@/types";
import { ArrowDown, ChevronDown, ChevronUp, PlayIcon } from "lucide-react";

import Link from "next/link";
import React, { useState } from "react";

interface ModulesProps {
  modules: medulsAccordion[];
}

const ModulesAccordion: React.FC<ModulesProps> = ({ modules }) => {
  const [openModule, setOpenModule] = useState<number | null>(null);

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <div className=" mt-6">
      {modules.map((module) => (
        <div key={module.id} className="mb-4 border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleModule(module.id)}
            className="w-full text-left bg-primary text-white p-4 font-semibold flex justify-between gap-2 flex-col md:flex-row">
            <span className="text-sm md:text-lg">{`Module ${module.id}: ${module.title}`}</span>
            <div className="flex gap-2 items-center">
              <span className="text-sm md:text-lg">
                {module.lessons.length} Lessons
              </span>
              {openModule === module.id ? (
                <ChevronUp size={15} />
              ) : (
                <ChevronDown size={15} />
              )}
            </div>
          </button>
          {openModule === module.id && (
            <div className="bg-white p-4">
              {module.lessons.length > 0 ? (
                <ul>
                  {module.lessons.map((lesson) => (
                    <li key={lesson.id}>
                      <Link
                        className="flex justify-between p-2 mb-2 rounded-md hover:bg-[#f8f8f8] link-smooth"
                        href={lesson.url}>
                        <div className="flex gap-2 items-center ">
                          <div className="w-8">
                            <span className="flex justify-center items-center w-8 h-8 bg-orange-100 text-orange-primary rounded-full">
                              <PlayIcon size={12} />
                            </span>
                          </div>
                          <span className="text-sm md:text-lg">
                            {lesson.title}
                          </span>
                        </div>
                        {lesson.preview && (
                          <span className="hidden md:flex gap-2 items-center text-orange-primary border border-orange-primary rounded-md py-1 px-2 ">
                            <PlayIcon size={12} /> Preview
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No lessons available</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ModulesAccordion;
