import React from "react";
import {
  Telegram_Icon,
  WhatsApp_Icon,
  Youtube_Icon,
} from "@/assets/icons/icons";
import { thankYouData as initialThankYouData } from "@/constants/thank-you.data";
import {
  freeCourseTitle,
  landingPagesData,
} from "@/constants/landing-page.data";
import { BookMarked } from "lucide-react";
import Link from "next/link";

const parseTitle = (text: string) => {
  const parts = text.split(/(\*.*?\*)/g); // Split by *word*

  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span key={index} className="text-2xl text-orange-primary">
          {part.slice(1, -1)}
        </span>
      );
    }
    return part;
  });
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { q: slug } = await searchParams;
  const thankYouData =
    landingPagesData.find((page) => page.slug === slug)?.thankYouData ||
    initialThankYouData;
  const cleanedNumber = thankYouData.WhatsAppNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(thankYouData.whatsappMessage);

  // const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanedNumber}&text=${encodedMessage}`;

  return (
    <div className="flex min-h-[calc(100vh-70px)] flex-col items-center justify-center">
      {/* Thank You Message */}
      <div className="mb-12 text-center">
        <h1 className="animate-bounce text-6xl font-bold text-gray-800">
          {thankYouData.title}
        </h1>

        <h6 className="text-2xl font-semibold text-gray-800">
          {thankYouData.subtitle}
        </h6>
        <p className="text-lg text-gray-600">{thankYouData.content}</p>
      </div>
      {/* Floating Cards Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* WhatsApp Card */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 transform rounded-3xl border border-neutral-100 bg-white p-6 shadow-2xl transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-green-200"
        >
          <div className="mb-4 flex justify-center">
            <WhatsApp_Icon className="h-14 w-14 animate-pulse text-green-500" />
          </div>
          <h2 className="mb-4 text-center text-xl font-semibold text-gray-800">
            Send a{" "}
            <span className="text-xl font-semibold text-green-500">
              WhatsApp
            </span>{" "}
            Message
          </h2>
          <p className="mb-4 text-center text-sm text-gray-600">
            Click here to send us a message on WhatsApp.
          </p>
        </a>

        {/* Telegram Card */}
        <a
          href={thankYouData.telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 transform rounded-3xl border border-neutral-100 bg-white p-6 shadow-2xl transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-200"
        >
          <div className="mb-4 flex justify-center">
            <Telegram_Icon className="h-14 w-14 animate-pulse text-blue-500" />
          </div>
          <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800">
            Join{" "}
            <span className="text-2xl font-semibold text-blue-500">
              Telegram
            </span>
          </h2>
          <p className="mb-4 text-center text-gray-600">
            Join our Telegram group for updates and discussions.
          </p>
        </a>

        {/* YouTube Card */}
        <a
          href={thankYouData.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 transform rounded-3xl border border-neutral-100 bg-white p-6 shadow-2xl transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-red-200"
        >
          <div className="mb-4 flex justify-center">
            <Youtube_Icon className="h-14 w-14 animate-pulse text-red-500" />
          </div>
          <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800">
            Subscribe on{" "}
            <span className="text-2xl font-semibold text-red-500">YouTube</span>
          </h2>
          <p className="mb-4 text-center text-gray-600">
            Don't forget to subscribe to our YouTube channel.
          </p>
        </a>
        {thankYouData.freeCoursesLink && (
          <Link
            href={thankYouData.freeCoursesLink}
            className="w-72 transform rounded-3xl border border-neutral-100 bg-white p-6 shadow-2xl transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-primary"
          >
            <div className="mb-4 flex justify-center">
              <BookMarked className="h-14 w-14 animate-pulse text-orange-primary" />
            </div>
            <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800">
              {parseTitle(freeCourseTitle)}
            </h2>
            <p className="mb-4 text-center text-gray-600">
              Watch one of our free lectures to get started.
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}
