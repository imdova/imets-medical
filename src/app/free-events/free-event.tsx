import { WhatsApp_Icon } from "@/assets/icons/icons";
import { FreeEvent } from "@/constants/free-events";

const FreeEventPage: React.FC<{ event: FreeEvent }> = ({ event }) => {
  const [start, end] = event.whatsApp.title.split("WhatsApp");
  return (
    <div className="flex min-h-[calc(100vh-70px)] flex-col items-center justify-center">
      {/* Thank You Message */}
      <div className="mb-12 text-center">
        <h1 className="max-w-[1000px] animate-bounce text-6xl font-bold text-gray-800">
          {event.title}
        </h1>

        <h6 className="text-2xl font-semibold text-gray-800">
          {event.content}
        </h6>
        {/* <p className="text-lg text-gray-600">{event.content}</p> */}
      </div>
      {/* Floating Cards Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* WhatsApp Card */}
        <a
          href={event.whatsApp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 transform rounded-3xl border border-neutral-100 bg-white p-6 shadow-2xl transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-green-200"
        >
          <div className="mb-4 flex justify-center">
            <WhatsApp_Icon className="h-14 w-14 animate-pulse text-green-500" />
          </div>
          <h2 className="mb-4 text-center text-xl font-semibold text-gray-800">
            {start}
            <span className="text-xl font-semibold text-green-500">
              WhatsApp
            </span>{" "}
            {end}
          </h2>
          <p className="mb-4 text-center text-sm text-gray-600">
            {event.whatsApp.content}
          </p>
        </a>
      </div>
    </div>
  );
};

export default FreeEventPage;
