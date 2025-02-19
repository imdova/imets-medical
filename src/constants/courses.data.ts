import { cphq_preparation_course } from "@/courses/cphq-preparation-course";
import { healthcare_quality_management_diploma } from "@/courses/healthcare-quality-management-diploma";
import { cic_preparation_course } from "@/courses/cic-preparation-course";
import { infection_prevention_and_control_diploma } from "@/courses/infection-prevention-and-control-diploma";
import { hospital_management_diploma } from "@/courses/hospital-management-diploma";
import { healthcare_marketing_management_diploma } from "@/courses/healthcare-marketing-management-diploma";
import { supply_chain } from "@/courses/supplychain";
import { strategic_management } from "@/courses/strategic-management";
import { hr_management } from "@/courses/hr-management";

/// edit courses
export const coursesList: CourseType[] = [
  cphq_preparation_course,
  healthcare_quality_management_diploma,
  cic_preparation_course,
  infection_prevention_and_control_diploma,
  hospital_management_diploma,
  healthcare_marketing_management_diploma,
  hr_management,
  strategic_management,
  supply_chain,
];

export const coursesSEOContent = {
  title: "Why Choose Our Online Courses?",
  subtitle:
    "Gain valuable skills with our expert-led courses. Whether you're looking to upskill or switch careers, our courses provide the knowledge and flexibility you need.",
  list: [
    "Learn from industry professionals",
    "Flexible learning at your own pace",
    "Lifetime access to course materials",
    "Industry-relevant certifications",
  ],
};
