export const cic_preparation_course: CourseType = {
  id: "3",
  slug: "cic-preparation-course",
  image: "/images/cic.webp",
  title: "CIC Preparation Course",
  meta: {
    meta_title:
      "CIC Preparation Course | Prepare for the CIC Exam and Certification",
    meta_description:
      "Ready to become a certified infection control specialist? Enroll in our CIC Preparation Course and prepare for the CIC exam with expert-led training, study materials, and practice tests. Advance your career in Infection Control management today",
    meta_keywords:
      "CIC Preparation Course, CIC Certification, CIC Exam Prep, Infection Control Training, CIC Online Course, CIC Study Guide, CIC Practice Test, Infection Control Certification, CIC Training Program, CIC Exam Help",
  },
  rating: 5,
  reviewsNumber: 1700,

  price: {
    EG: { old: "18000 EGP", new: "9000 EGP" },
    SA: { old: "3600 SAR", new: "1800 SAR" },
    /// add country here
    // other work for any other country the default price
    other: { old: "900 $", new: "450 $" },
  },
  lectures: 16,
  lecture_date: "1 Lecture-Weekly",
  lecture_Method: "Online-Zoom",
  students: 1400,
  status: "BestSeller",
  type: "Infection Control",
  video: {
    url: "https://www.youtube.com/watch?v=mjRm7APezfA&t",
    thumbnail: "",
  },
  duration: "16 weeks",
  languages: "EN - AR",
  certificate: "International Certificate",
  form: {
    name: "form-speciality",
    groupId: "112930550",
    redirect: "/",
  },
  description: ` The “Certified in Infection Control (CIC)” course is designed for healthcare professionals who aim to enhance their knowledge and expertise in preventing and controlling the spread of infections within healthcare settings. This course covers key principles of infection prevention, including epidemiology, microbiology, sterilization, disinfection, and regulatory compliance, in alignment with international infection control standards.H`,
  courseGoals: {
    content: `Earning your CPHQ certification is more than just passing an exam—it s about showing your commitment to excellence in healthcare. This credential not only boosts your professional credibility but also equips you with the skills to make a real impact in the healthcare world.`,
    goals: [
      {
        title:
          "Understand the fundamental concepts of infection prevention and control.",
        content: "",
      },
      {
        title:
          "Learn how to identify, prevent, and manage healthcare-associated infections (HAIs).",
        content: "",
      },
      {
        title:
          "Gain insights into the latest guidelines, best practices, and regulations in infection control.",
        content: "",
      },
      {
        title:
          "Develop skills in epidemiology, microbiology, sterilization, and disinfection processes.",
        content: "",
      },
      {
        title:
          "Prepare for the CIC certification exam by mastering key areas of the infection control curriculum.",
        content: "",
      },
    ],
  },
  courseModules: [
    {
      id: 1,
      title: "Identification of Infectious Disease Processes",
      lessons: [
        { id: 1, title: "Risk factors for infectious diseases", url: "#" },
        {
          id: 2,
          title: "colonization, infection, and pseudo infection",
          url: "#",
        },
        {
          id: 3,
          title: "prophylactic, empiric and therapeutic uses of antimicrobials",
          url: "#",
          preview: true,
        },
      ],
    },
    {
      id: 2,
      title: "Preventing/Controlling the Transmission of Infectious Agents",
      lessons: [
        {
          id: 1,
          title: "infection prevention policies and procedures",
          url: "#",
          preview: true,
        },
        {
          id: 2,
          title: "infection prevention and control strategies",
          url: "#",
        },
        {
          id: 3,
          title: "strategies related to Transmission based Precautions",
          url: "#",
        },
      ],
    },
    {
      id: 3,
      title:
        "Cleaning, Disinfection, Sterilization of Medical Devices and Equipment",
      lessons: [
        {
          id: 1,
          title:
            "appropriate cleaning, disinfection, and sterilization practices based on intended use (e.g., Spaulding classification)",
          url: "#",
          preview: true,
        },
        {
          id: 2,
          title:
            "Direct observations critical steps of cleaning/low level disinfection, high level disinfection, and/or sterilization",
          url: "#",
        },
      ],
    },
    {
      id: 4,
      title: "Surveillance and Epidemiologic Investigation",
      lessons: [
        {
          id: 1,
          title: "Design of Surveillance Systems",
          url: "#",
          preview: true,
        },
        {
          id: 2,
          title: "Collection and Compilation of Surveillance Data",
          url: "#",
        },
        {
          id: 3,
          title: "Interpretation of Surveillance Data ",
          url: "#",
        },
        {
          id: 3,
          title: "Outbreak Investigation",
          url: "#",
        },
      ],
    },
    {
      id: 5,
      title: "Environment of Care",
      lessons: [
        {
          id: 1,
          title: "Environmental Safety ",
          url: "#",
          preview: true,
        },
        {
          id: 2,
          title:
            "evaluation and monitoring of environmental cleaning and disinfection practices and technologies ",
          url: "#",
        },
        {
          id: 3,
          title:
            "infection risks and provide recommendations for risk mitigation during construction, renovation, and maintenance",
          url: "#",
        },
      ],
    },
    {
      id: 6,
      title: "Employee/Occupational Health",
      lessons: [
        {
          id: 1,
          title: "screening and immunization programs",
          url: "#",
          preview: true,
        },
        {
          id: 2,
          title:
            "employee/occupational health regarding counseling, follow up, and work restriction recommendations related to communicable diseases and/or exposures",
          url: "#",
        },
      ],
    },
    {
      id: 7,
      title: "Education and Research",
      lessons: [
        {
          id: 1,
          title:
            "education of patients, families, and others regarding prevention and control measures",
          url: "#",
          preview: true,
        },
        {
          id: 2,
          title:
            "strategies that engage the patient, family, and others in activities aimed at preventing infection",
          url: "#",
        },
      ],
    },
    {
      id: 8,
      title: "Management and Communication",
      lessons: [
        {
          id: 1,
          title: "Planning the Infection Prevention Program",
          url: "#",
          preview: true,
        },
        {
          id: 2,
          title:
            "Communication - Quality Performance Improvement and Patient Safety activities related to infection prevention",
          url: "#",
        },
        {
          id: 3,
          title: "Health Data Analytics",
          url: "#",
        },
      ],
    },
  ],
  whoCanAttend: {
    content:
      "Becoming a Certified Professional in Infection Control (CIC®) is a significant step for healthcare professionals who want to excel in infection prevention and control. Here’s why obtaining this certification can benefit your career and the healthcare industry:",
    items: [
      "Healthcare Professionals",
      "Medical and Nursing Directors",
      "Doctors",
      "Pharmacists",
      "Nursing Specialists",
      "Professionals interested in managerial or quality jobs",
      "Healthcare Administrators and Managers",
      "Risk Managers",
      "Medical Technologists",
    ],
  },
  /// in instructors tab
  instructors: [
    {
      id: "1",
      name: "DR/Shrouk Sayed",
      job: "Infection Control Group Director at international Eye hospitals",
      image: "/images/shrouk.jpg",
      certification: "CIC - MBA - HMD",
      experience: 17,
      location: "Cairo, Eqypt",
      content:
        "Experienced Infection control Manager with a demonstrated history of working in the hospital & health care industry. Skilled in Medical Education, Patient Safety, Hospitals, Healthcare Management, and Healthcare. Strong healthcare services professional with Certification board of infection control and epidemiology , ongoing in Associate's degree focused in Applied epidemiology from Egyptian fellowship board in Applied Epidemiology.",
      rating: 5,
    },
    {
      id: "2",
      name: "DR/Reham Ragab",
      job: "Infection Control Consultant",
      image: "/images/reham.jpg",
      certification: "CIC - CSRT - MBA - TOT",
      experience: 12,
      location: "Cairo, Eqypt",
      content:
        "Experienced Infection Control Practitioner with a demonstrated history of working in the Health, Wellness and Fitness industry. Skilled in Epidemiology, Infection Control, Surveillance, Patient Safety, and Problem Solving. Strong healthcare services professional with a Certified focused in infection control and epidemiology from Egyptian fellowship of the infection control and and Certified board of Infection control and epidemiology.",
      rating: 5,
    },
  ],
  videosGrid: [
    {
      videoUrl: "https://www.youtube.com/watch?v=EXnm42VAv98",
      title: "Dentist",
      author: "Dr Aya Sayed",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=HT9wtHncGDQ",
      title: "Dentist",
      author: "Dr Aya Sayed",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=NSXeTYUjCI4",
      title: "Skyfall",
      author: "By Author Name",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=mjRm7APezfA&t",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=mjRm7APezfA&t",
    },
  ],
  reviews: [
    {
      image: "/images/review.jpg",
      name: "Noha mamdoh",
      title: "Doctor at name of hospital",
    },
    {
      image: "/images/review.jpg",
      name: "Noha mamdoh",
      title: "Doctor at name of hospital",
    },
    {
      image: "/images/review.jpg",
      name: "Noha mamdoh",
      title: "Doctor at name of hospital",
    },
    {
      image: "/images/review.jpg",
      name: "Noha mamdoh",
      title: "Doctor at name of hospital",
    },
    {
      image: "/images/review.jpg",
      name: "Noha mamdoh",
      title: "Doctor at name of hospital",
    },
  ],
  startDate: "2022-01-01",
};
