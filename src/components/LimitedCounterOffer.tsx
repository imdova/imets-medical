import { useState, useEffect } from "react";
import Image from "next/image";
import CourseApply from "./courses/CourseApply";

const count = 10;
const LimitedCounterOffer: React.FC<{ form: CourseType["form"] }> = ({
  form,
}) => {
  const [timeLeft, setTimeLeft] = useState(8000);

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
              <p className="text-2xl font-bold">{hours}</p>
              <p className="text-xs">Hours</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{minutes}</p>
              <p className="text-xs">Minutes</p>
            </div>
            <div className="text-center text-orange-primary">
              <p className="text-2xl font-bold">{secs}</p>
              <p className="text-xs">Seconds</p>
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold">
            Don't miss this offer!{" "}
            <span className="text-4xl text-orange-primary">50%</span> Discount
            for only {count} Hours
          </h2>
        </div>
        <CourseApply
          className="link-smooth m-auto block text-nowrap rounded-3xl bg-orange-primary px-6 py-4 text-xl font-bold text-white hover:bg-yellow-600"
          {...form}
        >
          Apply Now
        </CourseApply>
      </div>
    </div>
  );
};

export default LimitedCounterOffer;
