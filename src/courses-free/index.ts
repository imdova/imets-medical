import { cic_preparation_course } from "./cic-preparation-course";
import { cphq_preparation_course } from "./cphq-preparation-course";
import { healthcare_marketing_management_diploma } from "./healthcare-marketing-management-diploma";
import { healthcare_quality_management_diploma } from "./healthcare-quality-management-diploma";
import { hospital_management_diploma } from "./hospital-management-diploma";
import { hr_management } from "./hr-management";
import { infection_prevention_and_control_diploma } from "./infection-prevention-and-control-diploma";
import { strategic_management } from "./strategic-management";
import { supply_chain } from "./supplychain";

export const freeCoursesContent: FreeCoursesContentType = {
  title: {
    en: "Free Lecture",
    ar: "محاضرات مجانيه",
  },
};

const freeCourses: FreeCourseType[] = [
  cic_preparation_course,
  cphq_preparation_course,
  healthcare_marketing_management_diploma,
  healthcare_quality_management_diploma,
  hospital_management_diploma,
  hr_management,
  infection_prevention_and_control_diploma,
  strategic_management,
  supply_chain,
];
export default freeCourses;
