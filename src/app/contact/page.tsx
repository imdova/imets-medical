import ContactBackground_1 from "@/assets/images/courseOverview-1.jpg";
import ContactImg_1 from "@/assets/images/contact_us_1.jpg";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/Forms/ContactForm";

export default function CountactUsPage() {
  return (
    <main>
      {/* About Review Content  */}
      <section className="relative py-8">
        <Image
          className="absolute left-0 top-0 h-full object-cover"
          src={ContactBackground_1}
          alt="About Background"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-[#042c76ec]"></div>
        <div className="relative flex h-full items-center">
          <div className="container relative mx-auto px-6 lg:max-w-[1170px]">
            <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
              <Image
                width={400}
                className="rounded-e-[40px] rounded-ss-[50px] object-cover"
                src={ContactImg_1}
                alt="About Background"
              />
              <div className="max-w-[550px]">
                <h1 className="mb-6 text-5xl font-bold text-[#E7B66B]">
                  Contact Us
                </h1>
                <h1 className="mb-4 text-5xl font-bold text-white">
                  Welcome To IMETS Medical School
                </h1>
                <p className="text-xl text-white">
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
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="w-full">
              <h2 className="mb-3 text-3xl font-bold text-primary">
                We would love to hear from you
              </h2>
              <p className="mb-3 text-lg text-secondary">
                Need something cleared up? Here are our most frequently asked
                questions.
              </p>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="p-3">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#042B7626] text-primary">
                    <Mail size={25} />
                  </div>
                  <span className="mb-2 block text-xl font-semibold text-primary">
                    Email
                  </span>
                  <p className="mb-2 text-secondary">
                    Our friendly team is here to help.
                  </p>
                  <span className="text-primary">contact@imetsedu.com</span>
                </div>
                <div className="p-3">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#042B7626] text-primary">
                    <Phone size={25} />
                  </div>
                  <span className="mb-2 block text-xl font-semibold text-primary">
                    Phone
                  </span>
                  <p className="mb-2 text-secondary">
                    Sat-Thr from 10am to 6pm.
                  </p>
                  <span className="text-primary">+201008815007</span>
                </div>
                <div className="p-3">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#042B7626] text-primary">
                    <MapPin size={25} />
                  </div>
                  <span className="mb-2 block text-xl font-semibold text-primary">
                    Office
                  </span>
                  <p className="mb-2 text-secondary">
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
              <h2 className="mb-3 text-3xl font-bold text-primary">
                Get in touch
              </h2>
              <p className="mb-3 text-lg text-secondary">
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
