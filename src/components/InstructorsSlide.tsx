"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Share, Share2 } from "lucide-react";
import Image from "next/image";
import { instructorsCardData } from "@/constants/instructors";

export default function InstructorsSlide() {
  const [current, setCurrent] = useState(0);
  const visibleCards = 4;

  const nextSlide = () => {
    setCurrent(
      (prev) => (prev + 1) % (instructorsCardData.length - (visibleCards - 1)),
    );
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + (instructorsCardData.length - (visibleCards - 1))) %
        (instructorsCardData.length - (visibleCards - 1)),
    );
  };

  return (
    <div className="relative mb-4 w-full overflow-hidden rounded-2xl p-4">
      <div className="mb-8 flex justify-end gap-3">
        <div className="w-10">
          <button
            onClick={prevSlide}
            className="link-smooth flex h-10 w-10 items-center justify-center rounded-full border border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="w-10">
          <button
            onClick={nextSlide}
            className="link-smooth flex h-10 w-10 items-center justify-center rounded-full border border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-4">
          {instructorsCardData
            .slice(current, current + visibleCards)
            .map((card, index) => (
              <div
                key={index}
                className="relative flex w-full flex-col items-start justify-center rounded-2xl"
              >
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
                <button className="absolute bottom-12 right-3 flex h-12 w-12 items-center justify-center rounded-md bg-orange-primary text-white">
                  <Share2 size={18} />
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
