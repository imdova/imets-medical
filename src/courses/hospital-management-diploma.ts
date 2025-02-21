export const hospital_management_diploma: CourseType = {
  id: "5",
  slug: "Hospital-Management-Diploma",
  image: "/images/hospital management.webp",
  title: "Hospital Management Diploma",
  meta: {
    meta_title:
      "Hospital Management Diploma | Online for Healthcare Excellence",
    meta_description:
      "Ready to lead in healthcare? Enroll in our Hospital Management Diploma program and gain the skills to lead and manage healthcare facilities effectively. Flexible online learning, expert instructors, and industry-recognized certification await!",
    meta_keywords:
      "Hospital Management Diploma, Healthcare Management Certification, Hospital Administration Course, Online Healthcare Management, Hospital Leadership Training, Healthcare Management Diploma, Hospital Operations Course, Healthcare Administration Certification, Healthcare Management Skills, Hospital Management Program",
  },
  rating: 5,

  reviewsNumber: 20,
  price: {
    EG: { old: "42000 EGP", new: "21000 EGP" },
    SA: { old: "7600 SAR", new: "3800 SAR" },
    /// add country here
    // other work for any other country the default price
    other: { old: "2100 $", new: "950 $" },
  },
  lectures: 48,
  lecture_date: "1 Lecture-Weekly",
  lecture_Method: "Online-Zoom",
  students: 1300,
  status: "BestSeller",
  type: "Healthcare Management",
  video: {
    url: "https://www.youtube.com/watch?v=EOgJKtSnNEA",
    thumbnail:
      "https://img.freepik.com/free-photo/medium-shot-young-woman-listening-to-podcast-with-headphones_23-2149386566.jpg?t=st=1739104145~exp=1739107745~hmac=2fc96c73c86add85c536193ff63570c3fb88e3e17330a570994930f8cb399217&w=996",
  },
  duration: "12 Monthss",
  languages: "EN - AR",
  certificate: "International Certificate",
  form: {
    name: "form-speciality",
    groupId: "112930551",
    redirect: "/",
  },
  description: ` Ready to lead in the healthcare industry? Our Hospital Management Diploma is designed for those who aspire to take on key roles in hospital administration and healthcare management. This program will guide you through every aspect of running a healthcare facility efficiently—whether it’s managing day-to-day operations, overseeing finances, handling human resources, or ensuring quality patient care.`,
  courseGoals: {
    content: `Earning your CPHQ certification is more than just passing an exam—it s about showing your commitment to excellence in healthcare. This credential not only boosts your professional credibility but also equips you with the skills to make a real impact in the healthcare world.`,
    goals: [
      {
        title: "Healthcare Administration",
        content:
          "Gain insights into managing hospital departments, staff, and resources to ensure smooth and efficient healthcare operations.Financial Management: Learn how to handle hospital budgets, billing, and financial planning, ensuring the facility’s financial health.",
      },
      {
        title: "Human Resource Management:",
        content:
          "Master the art of recruiting, training, and managing hospital staff while fostering a work environment focused on quality patient care.",
      },
      {
        title: "Quality & Patient Safety:",
        content:
          "Explore strategies for maintaining high standards of care, reducing risks, and ensuring patient safety.",
      },
      {
        title: "Strategic Planning:",
        content:
          "Develop strategies that align with the hospital’s mission and adapt to the changing healthcare landscape.",
      },
      {
        title: "Hospital Information Systems:",
        content:
          "Get hands-on experience with healthcare information systems, including electronic health records (EHR) and health informatics.",
      },
    ],
  },
  courseModules: [
    {
      id: 1,
      title: "Course1: Strategic Management",
      lessons: [
        { id: 1, title: "Quality Leadership and Integration", url: "#" },
        { id: 2, title: "Patient Safety", url: "#" },
        {
          id: 3,
          title: "Performance and Process Improvement",
          url: "#",
          preview: true,
        },
      ],
    },
    {
      id: 2,
      title: "Course2 : HR Management",
      lessons: [
        {
          id: 1,
          title: "Population Health and Care Transitions",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Regulatory and Accreditation", url: "#" },
        {
          id: 3,
          title: "Health Data Analytics",
          url: "#",
        },
      ],
    },
    {
      id: 3,
      title: "Course3 : Healthcare Quality Management",
      lessons: [
        {
          id: 1,
          title: "Population Health and Care Transitions",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Regulatory and Accreditation", url: "#" },
        {
          id: 3,
          title: "Health Data Analytics",
          url: "#",
        },
      ],
    },
    {
      id: 4,
      title: "Course4 : Healthcare Marketing Management",
      lessons: [
        {
          id: 1,
          title: "Population Health and Care Transitions",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Regulatory and Accreditation", url: "#" },
        {
          id: 3,
          title: "Health Data Analytics",
          url: "#",
        },
      ],
    },
    {
      id: 5,
      title: "Course5 : Healthcare Supply Chain Management",
      lessons: [
        {
          id: 1,
          title: "Population Health and Care Transitions",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Regulatory and Accreditation", url: "#" },
        {
          id: 3,
          title: "Health Data Analytics",
          url: "#",
        },
      ],
    },
    {
      id: 6,
      title: "Course6 : Infection Prevention and Control",
      lessons: [
        {
          id: 1,
          title: "Population Health and Care Transitions",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Regulatory and Accreditation", url: "#" },
        {
          id: 3,
          title: "Health Data Analytics",
          url: "#",
        },
      ],
    },
    {
      id: 7,
      title: "Course3 : Financial Management",
      lessons: [
        {
          id: 1,
          title: "Population Health and Care Transitions",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Regulatory and Accreditation", url: "#" },
        {
          id: 3,
          title: "Health Data Analytics",
          url: "#",
        },
      ],
    },
    {
      id: 8,
      title: "Health Data Analytics",
      lessons: [
        {
          id: 1,
          title: "Population Health and Care Transitions",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Regulatory and Accreditation", url: "#" },
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
      "Earning your CPHQ certification is more than just passing an exam—it s about showing your commitment to excellence in healthcare. This credential not only boosts your professional credibility but also equips you with the skills to make a real impact in the healthcare world.",
    items: [
      "QualityProfessionals",
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
      name: "DR/Mohamed Farag",
      job: "Healthcare Quality Manager",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
      certification: "MBA - CPHQ - HMD",
      experience: 15,
      location: "Cairo, Eqypt",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 4,
    },
    {
      id: "2",
      name: "DR/Mohamed Ahmed",
      job: "Healthcare Quality Manager",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
      certification: "MBA - CPHQ - HMD",
      experience: 10,
      location: "Asyut, Eqypt",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
  startDate: "2022-01-01",
};
