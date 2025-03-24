export const infection_prevention_and_control_diploma: CourseType = {
  id: "4",
  slug: "infection-control-diploma",
  image: "/images/Infection.webp",
  title: "Infection Control Diploma",
  meta: {
    meta_title:
      "Infection Control Diploma | IMETS Medical School",
    meta_description:
      "Join IMETS Medical School’s Infection Control Diploma. Master infection prevention practices, outbreak response, and healthcare safety protocols. Enroll now!",
    meta_keywords:
      "Infection Control Diploma, Infection Prevention Certification, Infection Control Training, Healthcare Infection Control, Online Infection Control Course, Infection Prevention Specialist, Patient Safety Training, Infection Control Certification, Healthcare Hygiene Training, Infection Control Program",
  },
  rating: 5,
  reviewsNumber: 2150,
  price: {
    EG: { old: "24000 EGP", new: "12000 EGP" },
    SA: { old: "5600 SAR", new: "2800 SAR" },
    /// add country here
    // other work for any other country the default price
    other: { old: "1300 $", new: "650 $" },
  },
  lectures: 18,
  lecture_date: "1 Lecture-Weekly",
  lecture_Method: "Online-Zoom",
  students: 1750,
  status: "BestSeller",
  type: "Infection Control",
  video: {
    url: "https://www.youtube.com/watch?v=TXs_B_BzUiw",
    thumbnail:
      "",
  },
  duration: "18 weeks",
  languages: "EN - AR",
  certificate: "International Certificate",
  form: {
    name: "form-speciality",
    groupId: { EG: "112928224", other: "112928224" },
    redirect: "https://t.me/imetsmedicalschool",
  },
  description: ` The Infection Control Diploma at IMETS Medical School is a comprehensive program designed to equip healthcare professionals and aspiring infection control specialists with the knowledge and skills needed to prevent, manage, and control infections in healthcare settings. This diploma combines theoretical knowledge with practical applications, ensuring that graduates are well-prepared to tackle real-world challenges in infection prevention and control.`,
  courseGoals: {
    content: `The Infection Control Diploma at IMETS Medical School is designed to equip you with the knowledge and skills needed to prevent and control infections in healthcare settings. By the end of this program, you will:`,
    goals: [
      {
        title:
          "Understand the Fundamentals of Infection Control",
        content:
          "Learn the principles of infection prevention and control (IPC) in healthcare and xplore the chain of infection and how to break it.",
      },
      {
        title: "Master Infection Control Practices",
        content:
          "Gain expertise in hand hygiene, personal protective equipment (PPE), and sterilization techniques and learn to implement standard and transmission-based precautions.",
      },
      {
        title: "Enhance Knowledge of Healthcare-Associated Infections (HAIs)",
        content:
          "You will Study the most common HAIs, their causes, and prevention strategies, also you will earn to reduce infection rates in hospitals and clinics.",
      },
      {
        title: "Develop Outbreak Management Skills",
        content:
          "You will Understand how to identify, manage, and control infection outbreaks, also you will earn to conduct risk assessments and develop outbreak response plans",
      },
      {
        title: "Utilize Infection Control Policies and Guidelines",
        content:
          "You will Gain knowledge of national and international infection control guidelines (e.g., WHO, CDC), also you will earn to develop and implement infection control policies in healthcare settings.",
      },
    ],
  },
  courseModules: [
    {
      id: 1,
      title: "Identification of Infectious Disease Processes",
      lessons: [
        { id: 1, title: "Overview of Infection Prevention and Control (IPC)", url: "#" },
        { id: 2, title: "The Chain of Infection and How to Break It", url: "#" },
        {
          id: 3,
          title: "Common HAIs: Causes, Risks, and Prevention",
          url: "#",
          preview: true,
        },
        { id: 4, title: "Strategies to Reduce HAIs in Hospitals and Clinics", url: "#" },
        { id: 5, title: "Monitoring and Reporting HAIs", url: "#" },
      ],
    },
    {
      id: 2,
      title: "Preventing/Controlling the Transmission of Infectious Agents",
      lessons: [
        {
          id: 1,
          title: "Understanding Infectious Agents and Their Transmission",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Standard Precautions for Infection Control", url: "#" },
        {
          id: 3,
          title: "Transmission-Based Precautions",
          url: "#",
        },
        { id: 4, title: "Environmental Controls to Prevent Transmission", url: "#" },
        { id: 5, title: "Preventing Healthcare-Associated Infections (HAIs)", url: "#" },
      ],
    },
    {
      id: 3,
      title: "Module3: Cleaning, Disinfection, Sterilization of Medical Devices and Equipment",
      lessons: [
        {
          id: 1,
          title: "appropriate cleaning, disinfection, and sterilization practices based on intended use (e.g., Spaulding classification) ",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Direct observations OF critical steps of cleaning/low level disinfection, high level disinfection, and/or sterilization -", url: "#" },
        
      ],
    },
    {
      id: 4,
      title: "Module4: Surveillance and Epidemiologic Investigation",
      lessons: [
        {
          id: 1,
          title: "Designing and Implementing Surveillance Programs",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Data Management and Analysis", url: "#" },
        {
          id: 3,
          title: "Outbreak Detection and Response",
          url: "#",
        },
        {
          id: 4,
          title: "Epidemiologic Investigation Techniques",
          url: "#",
        },
        {
          id: 5,
          title: "Healthcare-Associated Infections (HAIs) Surveillance",
          url: "#",
        },
      ],
    },
    {
      id: 5,
      title: "Module5: Employee/Occupational Health",
      lessons: [
        {
          id: 1,
          title: "screening and immunization programs",
          url: "#",
          preview: true,
        },
        { id: 2, title: "employee/occupational health regarding counseling, follow up,", url: "#" },
        {
          id: 3,
          title: "work restriction recommendations related to communicable diseases and/or exposures",
          url: "#",
        },
      ],
    },
    {
      id: 6,
      title: "Module6: Environment of Care",
      lessons: [
        {
          id: 1,
          title: "Designing a Safe Healthcare Environment",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Cleaning, Disinfection, and Sterilization in Healthcare Facilities", url: "#" },
        {
          id: 3,
          title: "Waste Management and Environmental Safety",
          url: "#",
        },
      ],
    },
    {
      id: 7,
      title: "Module7: Education and Research",
      lessons: [
        {
          id: 1,
          title: "Education of patients, families, and others regarding prevention and control measures ",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Strategies that engage the patient, family, and others in activities aimed at preventing infection", url: "#" },
        
      ],
    },
    {
      id: 8,
      title: "Module8: Management and Communication",
      lessons: [
        {
          id: 1,
          title: "Leadership in Infection Control",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Communication Strategies for Infection Control", url: "#" },
        {
          id: 3,
          title: "Managing Infection Control Programs",
          url: "#",
        },
      ],
    },
  ],
  whoCanAttend: {
    content:
      "The Infection Control Diploma at IMETS Medical School is designed for a diverse range of professionals and aspiring infection control specialists. This program is perfect for:",
    items: [
      "Healthcare  Professionals",
      "Medical and Nursing Directors",
      "Doctors",
      "Pharmacists",
      "Nursing Specialists",
      "Public Health Professionals",
      "Professionals interested in infection control jobs",
      "Healthcare Administrators and Managers",
      "Infection Control Practitioners",
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
      videoUrl: "https://www.youtube.com/watch?v=mjRm7APezfA&t",
      thumbnail:
        "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
      title: "Skyfall",
      author: "By Author Name",
      views: "10k Views",
      timeAgo: "1 hour ago",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=mjRm7APezfA&t",
      thumbnail:
        "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=NSXeTYUjCI4",
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
  startDate: "2025-04-15",
};
