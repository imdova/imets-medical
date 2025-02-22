import { coursesList } from "@/constants/courses.data";
import { socialMediaLinks } from "@/constants/social-media.data";
import { Award, Briefcase, CheckCircle, Globe, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[url('../assets/images/footer.jpg')] bg-cover bg-center before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:w-full before:bg-[linear-gradient(_#041060_30%,_#e2b403_150%)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="relative mx-auto grid max-w-sm grid-cols-2 gap-3 gap-y-8 py-10 sm:max-w-3xl sm:grid-cols-4 md:gap-8 lg:max-w-full lg:grid-cols-6">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link
              href="https://pagedone.io/"
              className="flex justify-center lg:justify-start"
            >
              <Image
                src="/logo-white.svg"
                width={320}
                height={91}
                alt="IMETS logo"
              />
            </Link>
            <p className="py-8 text-center text-sm text-white lg:max-w-xs lg:text-left">
              Advancing healthcare careers with expert-led online programs. Join
              22,000+ students and learn from 320+ top instructors worldwide
            </p>
          </div>
          {/* End Col */}
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-white">Quick Links</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <Link href="/" className="text-white hover:text-orange-primary">
                  Home
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="/about"
                  className="text-white hover:text-orange-primary"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="/courses/category/all"
                  className="text-white hover:text-orange-primary"
                >
                  Courses
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="/blogs"
                  className="text-white hover:text-orange-primary"
                >
                  Blogs
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="/contact"
                  className="text-white hover:text-orange-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* End Col */}
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-white">
              Popular Courses
            </h4>
            <ul className="text-sm transition-all duration-500">
              {coursesList.slice(0, 4).map((course) => (
                <li key={course.slug} className="mb-6">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="line-clamp-1 text-white hover:text-orange-primary"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
              <li className="mb-6">
                <Link
                  href="/courses/category/all"
                  className="shadow-simple shadow-simple cursor-pointer text-nowrap rounded-md bg-orange-primary px-4 py-2 font-medium text-white transition-all duration-150 ease-in-out hover:bg-yellow-600/60 focus:outline-none focus:ring-2 focus:ring-orange-primary focus:ring-offset-2"
                >
                  Explore All Courses
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 hidden text-left md:block lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-white">
              Why Choose IMETS?
            </h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6 flex items-center">
                <CheckCircle className="mr-3 h-5 w-5 text-orange-primary" />
                <p className="text-white">
                  15+ Years of Experience – Trusted in healthcare education
                </p>
              </li>
              <li className="mb-6 flex items-center">
                <Globe className="mr-3 h-5 w-5 text-orange-primary" />
                <p className="text-white">
                  Live Online Lectures – Attend from anywhere
                </p>
              </li>
              <li className="mb-6 flex items-center">
                <Users className="mr-3 h-5 w-5 text-orange-primary" />
                <p className="text-white">
                  Expert Instructors – Learn from top professionals
                </p>
              </li>
              <li className="mb-6 flex items-center">
                <Award className="mr-3 h-5 w-5 text-orange-primary" />
                <p className="text-white">
                  International Certification – Boost your career opportunities
                </p>
              </li>
              <li className="mb-6 flex items-center">
                <Briefcase className="mr-3 h-5 w-5 text-orange-primary" />
                <p className="text-white">
                  Career Monitoring – Unlock your potential
                </p>
              </li>
            </ul>
          </div>

          {/* End Col */}
          {/* <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-white">
              Get job notifications
            </h4>
            <p className="mb-7 text-sm leading-6 text-white">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                className="rounded-md p-3 text-gray-500 outline-none"
                type="email"
                placeholder="Email Adress"
              />
              <button className="rounded-md bg-black p-3 text-white">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
        {/*Grid*/}
        <div className="relative border-t border-gray-200 py-7">
          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <span className="text-sm text-white">
              ©
              <Link href="https://pagedone.io/">
                2025. IMETS Medical School{" "}
              </Link>{" "}
              All rights reserved.
            </span>
            <div className="mt-4 flex space-x-4 sm:justify-center lg:mt-0">
              {socialMediaLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.link}
                    title={link.name}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-primary text-white transition-all duration-500 hover:bg-black"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
