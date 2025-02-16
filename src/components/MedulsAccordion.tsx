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
    <div className="mt-6">
      {modules.map((module) => (
        <div key={module.id} className="mb-4 overflow-hidden rounded-lg border">
          <button
            onClick={() => toggleModule(module.id)}
            className="flex w-full flex-row justify-between gap-2 bg-primary p-4 text-left font-semibold text-white"
          >
            <span className="text-sm md:text-lg">{`Module ${module.id}: ${module.title}`}</span>
            <div className="flex w-fit items-center gap-2">
              <span className="text-nowrap text-sm md:text-lg">
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
                        className="link-smooth flex justify-between rounded-md p-2 hover:bg-[#f8f8f8]"
                        href={lesson.url}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-8">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-primary">
                              <PlayIcon size={12} />
                            </span>
                          </div>
                          <span className="text-sm md:text-lg">
                            {lesson.title}
                          </span>
                        </div>
                        {lesson.preview && (
                          <span className="hidden items-center gap-2 rounded-md border border-orange-primary px-2 py-1 text-orange-primary md:flex">
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
