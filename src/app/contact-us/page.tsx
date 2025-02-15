"use client";
import ContactBackground_1 from "@/assets/images/courseOverview-1.jpg";
import ContactImg_1 from "@/assets/images/contact_us_1.jpg";
import Image from "next/image";

export default function CountactUsPage() {
  return (
    <main>
      {/* About Review Content  */}
      <section className="relative  py-6">
        <Image
          className="absolute h-full top-0 left-0 object-cover"
          src={ContactBackground_1}
          alt="About Background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#042c76ec]"></div>
        <div className="relative flex  items-center h-full">
          <div className="relative container mx-auto px-6 lg:max-w-[1170px]">
            <div className="flex justify-between flex-col gap-6 lg:flex-row items-center w-full">
              <Image
                width={400}
                className="rounded-ss-[50px] rounded-e-[40px] object-cover"
                src={ContactImg_1}
                alt="About Background"
              />
              <div className="max-w-[550px] text-center">
                <h1 className="text-5xl font-bold text-[#E7B66B] mb-6">
                  Contact Us
                </h1>
                <h1 className="text-5xl font-bold text-white mb-4">
                  Welcome To IMETS Medical School
                </h1>
                <p className="text-white text-xl">
                  Need something cleared up? Here are our most frequently asked
                  questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact information and contact form  */}
      <section className="py-16 h-[400px]">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="flex">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-primary mb-3">
                We would love to hear from you
              </h2>
              <p className="text-secondary text-lg">
                Need something cleared up? Here are our most frequently asked
                questions.
              </p>
            </div>
            <div className="w-full">zanaty</div>
          </div>
        </div>
      </section>
    </main>
  );
}
