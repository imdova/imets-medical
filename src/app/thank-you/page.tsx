import React from "react";
import { Send } from "lucide-react"; // Lucide icons
import Image from "next/image";
import {
  Telegram_Icon,
  WhatsApp_Icon,
  Youtube_Icon,
} from "@/assets/icons/icons";
import { thankYouData } from "@/constants/thank-you.data";

const Page: React.FC = () => {
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
      </div>
    </div>
  );
};

export default Page;
