import Accordion from "@/components/Accordion";
import LimitedCounterOffer from "@/components/LimitedCounterOffer";
import MedulsAccordion from "@/components/MedulsAccordion";
import {
  accordionSliceOne,
  accordionSliceThree,
  accordionSliceTwo,
  modulesData,
} from "@/constants/courses.data";

const OverviewTab: React.FC = () => {
  return (
    <div className="box-content">
      <h2 className="text-2xl font-semibold mb-2">Course Description</h2>
      <p className="text-secondary mb-4">
        Becoming CPHQ certified demonstrates to employers and colleagues that
        you know how to manage and advance healthcare Quality and safety.
        Effective preparation for the CPHQ exam is critical to earning the
        credential. The CPHQ certification incorporates the body of knowledge in
        the healthcare Quality profession. It covers the following seven
        domains:H
      </p>
      <h2 className="text-2xl font-semibold mb-2">
        What you'll learn in this course?
      </h2>
      <p className="text-secondary mb-4">
        Earning your CPHQ certification is more than just passing an exam—it s
        about showing your commitment to excellence in healthcare. This
        credential not only boosts your professional credibility but also equips
        you with the skills to make a real impact in the healthcare world.
      </p>
      <Accordion items={accordionSliceOne} />
      <h2 className="text-2xl font-semibold my-3">Curriculum</h2>
      <MedulsAccordion modules={modulesData} />
      <h2 className="text-2xl font-semibold my-3">
        Who can Attend this course?
      </h2>
      <p className="text-secondary mb-4">
        Earning your CPHQ certification is more than just passing an exam—it s
        about showing your commitment to excellence in healthcare. This
        credential not only boosts your professional credibility but also equips
        you with the skills to make a real impact in the healthcare world.
      </p>
      <div className="flex flex-col md:flex-row  mb-6">
        <div className="w-full">
          <Accordion items={accordionSliceTwo} />
        </div>
        <div className="w-full">
          <Accordion items={accordionSliceThree} />
        </div>
      </div>
      <LimitedCounterOffer initialCount={10} duration={5000} />
    </div>
  );
};
export default OverviewTab;
