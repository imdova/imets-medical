import Image from "next/image";
import CourseBackground from "@/assets/images/courseOverview-1.jpg";
import Button from "@/components/Forms/buttons/Button";
import YouTubePlayer from "@/components/YouTubePlayer";

const page = () => {
  return (
    <section className="relative md:pb-8 md:pt-6">
      <Image
        className="absolute left-0 top-0 z-[-1] h-full object-cover"
        src={CourseBackground}
        alt="Course Background"
      />
      <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-[#042c76ec]"></div>
      <div className="container mx-auto flex flex-col items-center md:min-h-[80vh] md:flex-row md:justify-between lg:max-w-[1170px]">
        {/* Left Side: Title, Description, and Button */}
        <div className="p-4 text-center md:w-1/2 md:pr-8 md:text-left">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            <span className="text-4xl font-bold text-white sm:text-5xl">
              Thank You for{" "}
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              Applying!
            </span>
          </h1>
          <p className="mb-8 text-lg text-white">
            We’re thrilled to have you join the [Course Name] community. Your
            application has been received, and we’ll be in touch soon with the
            next steps. Get ready to embark on an exciting learning journey!
          </p>
          <Button className="hidden px-8 py-3 font-semibold md:block">
            Explore More
          </Button>
        </div>

        {/* Right Side: YouTube Video */}
        <div className="aspect-video w-full p-4 md:w-1/2">
          <YouTubePlayer
            videoUrl={"https://www.youtube.com/watch?v=mjRm7APezfA&t"}
            priority={true}
            autoPlay={true}
          />
        </div>
        <Button className="mb-10 block px-8 py-3 font-semibold md:hidden">
          Explore More
        </Button>
      </div>
    </section>
  );
};

export default page;
