"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Share, Share2 } from "lucide-react";
import Image from "next/image";
import { instractorsCardData } from "@/constants/courses.data";

export default function InstructorsSlide() {
  const [current, setCurrent] = useState(0);
  const visibleCards = 4;

  const nextSlide = () => {
    setCurrent(
      (prev) => (prev + 1) % (instractorsCardData.length - (visibleCards - 1))
    );
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + (instractorsCardData.length - (visibleCards - 1))) %
        (instractorsCardData.length - (visibleCards - 1))
    );
  };

  return (
    <div className="relative w-full  overflow-hidden rounded-2xl p-4 mb-4">
      <div className="flex gap-3 justify-end mb-8">
        <div className="w-10">
          <button
            onClick={prevSlide}
            className="flex justify-center items-center w-10 h-10 text-orange-primary border border-orange-primary rounded-full hover:bg-orange-primary hover:text-white link-smooth">
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="w-10">
          <button
            onClick={nextSlide}
            className="flex justify-center items-center w-10 h-10 text-orange-primary border border-orange-primary rounded-full hover:bg-orange-primary hover:text-white link-smooth">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full px-4">
          {instractorsCardData
            .slice(current, current + visibleCards)
            .map((card, index) => (
              <div
                key={index}
                className="relative flex flex-col items-start justify-center rounded-2xl w-full">
                <div className="w-full">
                  <Image
                    src={card.image}
                    className="mb-3"
                    alt="Instructor image"
                    width={500}
                    height={500}
                  />
                </div>
                <h2 className="text-xl font-bold text-primary">{card.name}</h2>
                <p className="text-orange-primary">{card.job}</p>
                <button className="absolute right-3 bottom-12 flex justify-center items-center w-12 h-12 bg-orange-primary text-white rounded-md">
                  <Share2 size={18} />
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
