import React from "react";
import { MessageCircle, Send, Youtube } from "lucide-react"; // Lucide icons
import Image from "next/image";
import { WhatsApp_Icon, Youtube_Icon } from "@/assets/icons/icons";

const Page: React.FC = () => {
  return (
    <div className="flex min-h-[calc(100vh-70px)] flex-col items-center justify-center">
      {/* Thank You Message */}
      <h1 className="mb-12 animate-bounce text-6xl font-bold text-gray-800">
        Thank You!
      </h1>

      {/* Floating Cards Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* WhatsApp Card */}
        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 transform rounded-3xl border border-neutral-100 bg-white p-6 shadow-2xl transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-green-200"
        >
          <div className="mb-4 flex justify-center">
            <Image
              src="/whatsapp.svg"
              alt="whats app icon"
              width={50}
              height={50}
            />
          </div>
          <h2 className="mb-4 text-center text-xl font-semibold text-gray-800">
            Send a{" "}
            <span className="text-xl font-semibold text-green-500">
              WhatsApp
            </span>{" "}
            Message
          </h2>
          <p className="mb-4 text-center text-sm text-gray-600">
            Click below to send us a message on WhatsApp.
          </p>
          {/* <div className="flex justify-center">
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-3xl bg-green-500 px-6 py-2 text-white transition-colors hover:bg-green-600"
            >
              <WhatsApp_Icon className="mr-2 h-6 w-6 text-white" />
              WhatsApp
            </a>
          </div> */}
        </a>

        {/* Telegram Card */}
        <a
          href="https://t.me/yourtelegramlink"
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 transform rounded-3xl border border-neutral-100 bg-white p-6 shadow-2xl transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-200"
        >
          <div className="mb-4 flex justify-center">
            <Send className="h-14 w-14 animate-pulse text-blue-500" />
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
          {/* <div className="flex justify-center">
            <a
              href="https://t.me/yourtelegramlink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-3xl bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600"
            >
              <Send className="mr-2" />
              Telegram
            </a>
          </div> */}
        </a>

        {/* YouTube Card */}
        <a
          href="https://youtube.com/yourchannellink"
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
          {/* <div className="flex justify-center">
            <a
              href="https://youtube.com/yourchannellink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-3xl bg-red-500 px-6 py-2 text-white transition-colors hover:bg-red-600"
            >
              <Youtube_Icon className="mr-2 h-6 w-6" />
              YouTube
            </a>
          </div> */}
        </a>
      </div>
    </div>
  );
};

export default Page;
