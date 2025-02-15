"use client";
import ContactBackground_1 from "@/assets/images/courseOverview-1.jpg";
import ContactImg_1 from "@/assets/images/contact_us_1.jpg";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/Forms/ContactForm";

export default function CountactUsPage() {
  return (
    <main>
      {/* About Review Content  */}
      <section className="relative  py-8">
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
              <div className="max-w-[550px]">
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
      <section className="py-16">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-primary mb-3">
                We would love to hear from you
              </h2>
              <p className="text-secondary text-lg mb-3">
                Need something cleared up? Here are our most frequently asked
                questions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-3">
                  <div className="flex justify-center items-center w-12 h-12 text-primary bg-[#042B7626] rounded-lg mb-3">
                    <Mail size={25} />
                  </div>
                  <span className="block text-primary text-xl font-semibold mb-2">
                    Email
                  </span>
                  <p className="text-secondary mb-2">
                    Our friendly team is here to help.
                  </p>
                  <span className="text-primary">contact@imetsedu.com</span>
                </div>
                <div className="p-3">
                  <div className="flex justify-center items-center w-12 h-12 text-primary bg-[#042B7626] rounded-lg mb-3">
                    <Phone size={25} />
                  </div>
                  <span className="block text-primary text-xl font-semibold mb-2">
                    Phone
                  </span>
                  <p className="text-secondary mb-2">
                    Sat-Thr from 10am to 6pm.
                  </p>
                  <span className="text-primary">+201008815007</span>
                </div>
                <div className="p-3">
                  <div className="flex justify-center items-center w-12 h-12 text-primary bg-[#042B7626] rounded-lg mb-3">
                    <MapPin size={25} />
                  </div>
                  <span className="block text-primary text-xl font-semibold mb-2">
                    Office
                  </span>
                  <p className="text-secondary mb-2">
                    Come say hello at our office HQ.
                  </p>
                  <span className="text-primary">
                    Alserag Mall, Makram Ebeid Nasr City, cairo Egypt
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full">
              {/* Contact Form */}
              <h2 className="text-3xl font-bold text-primary mb-3">
                Get in touch
              </h2>
              <p className="text-secondary text-lg mb-3">
                We would love to hear from you. Please fill out this form.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
