import { useState, useEffect } from "react";
import Image from "next/image";

interface LimitedCounterOfferProps {
  initialCount: number;
  duration: number; // in seconds
}

const LimitedCounterOffer: React.FC<LimitedCounterOfferProps> = ({
  initialCount,
  duration,
}) => {
  const [count, setCount] = useState(initialCount);
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { hours, minutes, secs };
  };

  const { hours, minutes, secs } = formatTime(timeLeft);

  return (
    <div className="rounded-[50px] bg-primary p-4 text-white md:m-12">
      <div className="flex flex-col items-center justify-center gap-6 rounded-[40px] border border-dashed border-orange-primary p-4 lg:flex-row">
        <div>
          <Image src="/fast.svg" width={300} height={90} alt="Offer Img" />
        </div>
        <div className="max-w-[400px]">
          <div className="mb-3 mt-2 flex justify-center gap-2 text-sm">
            <div className="text-center">
              <p className="text-2xl font-bold">
                {hours.toString().padStart(2, "0")}
              </p>
              <p className="text-xs">Hours</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">
                {minutes.toString().padStart(2, "0")}
              </p>
              <p className="text-xs">Minutes</p>
            </div>
            <div className="text-center text-orange-primary">
              <p className="text-2xl font-bold">
                {secs.toString().padStart(2, "0")}
              </p>
              <p className="text-xs">Seconds</p>
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold">
            Don't miss this offer!{" "}
            <span className="text-4xl text-orange-primary">50%</span> Discount
            for only {count} Hours
          </h2>
        </div>
        <button className="link-smooth m-auto block text-nowrap rounded-3xl bg-orange-primary px-6 py-4 text-xl font-bold text-white hover:bg-black">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default LimitedCounterOffer;
