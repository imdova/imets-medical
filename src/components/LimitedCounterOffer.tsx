import { useState, useEffect } from "react";
import Image from "next/image";
import { offerEndDate } from "@/constants/offer";

const LimitedCounterOffer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = offerEndDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { days, hours, minutes, seconds };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Timer has ended
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="rounded-[50px] bg-primary p-4 text-white md:m-12">
      <div className="flex flex-col items-center justify-center gap-6 rounded-[40px] border border-dashed border-orange-primary p-4 lg:flex-row">
        <div>
          <Image src="/fast.svg" width={300} height={90} alt="Offer Img" />
        </div>
        <div className="max-w-[400px]">
          <div className="mb-3 mt-2 flex justify-center gap-2 text-sm">
            {timeLeft.days > 0 && (
              <div className="text-center">
                <p className="text-2xl font-bold">{timeLeft.days}</p>
                <p className="text-xs">days</p>
              </div>
            )}
            <div className="text-center">
              <p className="text-2xl font-bold">{timeLeft.hours}</p>
              <p className="text-xs">Hours</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{timeLeft.minutes}</p>
              <p className="text-xs">Minutes</p>
            </div>
            <div className="text-center text-orange-primary">
              <p className="text-2xl font-bold">{timeLeft.seconds}</p>
              <p className="text-xs">Seconds</p>
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold">
            Don't miss this offer!{" "}
            <span className="text-4xl text-orange-primary">50%</span> Discount
            for only {timeLeft.days * 24 + timeLeft.hours} Hours
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
