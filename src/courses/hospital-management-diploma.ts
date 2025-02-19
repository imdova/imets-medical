export const hospital_management_diploma: CourseType = {
  id: "5",
  slug: "Hospital-Management-Diploma",
  image: "/images/hospital management.webp",
  title: "Hospital Management Diploma",
  rating: 5,
  instructor: {
    id: "5",
    name: "DR/ Hany Eid",
    image:
      "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
  },
  price: {
    EG: { old: "18900 EGP", new: "18900 EGP" },
    SA: { old: "3800 SAR", new: "3800 SAR" },
    /// add country here
    // other work for any other country the default price
    other: { old: "38000 EGP", new: "38000 EGP" },
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
    groupId: "112930551",
    redirect: "/",
  },
  description: ` Ready to lead in the healthcare industry? Our Hospital Management Diploma is designed for those who aspire to take on key roles in hospital administration and healthcare management. This program will guide you through every aspect of running a healthcare facility efficiently—whether it’s managing day-to-day operations, overseeing finances, handling human resources, or ensuring quality patient care.`,
  courseGoals: {
    content: `Earning your CPHQ certification is more than just passing an exam—it s about showing your commitment to excellence in healthcare. This credential not only boosts your professional credibility but also equips you with the skills to make a real impact in the healthcare world.`,
    goals: [
      {
        title:
          "Healthcare Administration",
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
  reviews: [
    {
      id: "1",
      date: "Nov 7, 2023",
      rating: 5,
      user: {
        name: "mahmoud salman",
        image:
          "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        job: "Marketing Director",
      },
      content:
        "Sam.AI truly values its employees and their well-being. From flexible work hours to regular team-building activities, the company goes above and beyond to create a supportive and inclusive environment.",
    },
    {
      id: "2",
      date: "Nov 7, 2023",
      rating: 3,
      user: {
        name: "michael T",
        image:
          "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        job: "Marketing Director",
      },
      content:
        "Sam.AI truly values its employees and their well-being. From flexible work hours to regular team-building activities, the company goes above and beyond to create a supportive and inclusive environment.",
    },
    {
      id: "3",
      date: "Nov 7, 2023",
      rating: 4,
      user: {
        name: "Noha mamdoh",
        image:
          "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        job: "Marketing Director",
      },
      content:
        "Sam.AI truly values its employees and their well-being. From flexible work hours to regular team-building activities, the company goes above and beyond to create a supportive and inclusive environment.",
    },
  ],
  videosGrid: [
    {
      id: 1,
      thumbnail:
        "https://img.freepik.com/free-photo/portrait-schoolgirl-memphis-style-background_23-2148203809.jpg?t=st=1739460008~exp=1739463608~hmac=83fd4fea35c9d2409cc30128aa35751a4375b429c0bb42aca9732d987aa923e3&w=360",
      title: "Skyfall",
      author: "By Author Name",
      views: "10k Views",
      timeAgo: "1 hour ago",
      isFeatured: true,
    },
    {
      id: 2,
      thumbnail:
        "https://img.freepik.com/free-photo/portrait-schoolgirl-memphis-style-background_23-2148203809.jpg?t=st=1739460008~exp=1739463608~hmac=83fd4fea35c9d2409cc30128aa35751a4375b429c0bb42aca9732d987aa923e3&w=360",
      title: "",
      author: "DR/Mohamed Farag",
    },
    {
      id: 3,
      thumbnail:
        "https://img.freepik.com/free-photo/portrait-schoolgirl-memphis-style-background_23-2148203809.jpg?t=st=1739460008~exp=1739463608~hmac=83fd4fea35c9d2409cc30128aa35751a4375b429c0bb42aca9732d987aa923e3&w=360",
      title: "",
      author: "DR/Mohamed Farag",
    },
    {
      id: 4,
      thumbnail:
        "https://img.freepik.com/free-photo/portrait-schoolgirl-memphis-style-background_23-2148203809.jpg?t=st=1739460008~exp=1739463608~hmac=83fd4fea35c9d2409cc30128aa35751a4375b429c0bb42aca9732d987aa923e3&w=360",
      title: "",
      author: "DR/Mohamed Farag",
    },
    {
      id: 5,
      thumbnail:
        "https://img.freepik.com/free-photo/portrait-schoolgirl-memphis-style-background_23-2148203809.jpg?t=st=1739460008~exp=1739463608~hmac=83fd4fea35c9d2409cc30128aa35751a4375b429c0bb42aca9732d987aa923e3&w=360",
      title: "",
      author: "DR/Mohamed Farag",
    },
  ],
  ImagesGrid: [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
      isFeatured: true,
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
    },
    {
      id: 7,
      image:
        "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
    },
  ],
  questions: [
    {
      id: "1",
      user: {
        name: "Mohamed Farag",
        image:
          "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
      },
      content: "What is the best way to learn Next.js?",
      replies: [
        {
          id: "2-1",
          user: {
            name: "Emily Brown",
            image:
              "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
          },
          content: "Utility classes save time!",
          timestamp: 17,
        },
        {
          id: "2-2",
          user: {
            name: "Mike Johnson",
            image:
              "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
          },
          content: "Less custom CSS needed.",
          timestamp: 17,
        },
      ],
      timestamp: 17,
    },
    {
      id: "2",
      user: {
        name: "Ahmed Samir",
        image:
          "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
      },
      content: "How does Tailwind CSS improve development speed?",
      replies: [
        {
          id: "1-1",
          user: {
            name: "John Doe",
            image:
              "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
          },
          content: "Start with the official docs!",
          timestamp: 17,
        },
        {
          id: "1-2",
          user: {
            name: "Jane Smith",
            image:
              "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
          },
          content: "Follow some YouTube tutorials.",
          timestamp: 17,
        },
      ],
      timestamp: 17,
    },
  ],
  videos: [
    {
      title: "Introduction",
      progress: 10,
      url: "https://www.youtube.com/watch?v=XDuWyYxksXU&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS",
      locked: false,
      duration: "1:00",
    },
    {
      title: "Medical Terminology",
      progress: 30,
      url: "https://www.youtube.com/watch?v=jOUb09iiO20&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
      locked: false,
      duration: "4:00",
    },
    {
      title: "Medical Neuroscience",
      progress: 50,
      url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=3",
      locked: true,
      duration: "2:35",
    },
    {
      title: "Trauma on EMT",
      progress: 75,
      url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=4",
      locked: true,
      duration: "7:00",
    },
    {
      title: "Biomedical Visualization",
      progress: 100,
      url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=5",
      locked: true,
      duration: "11:00",
    },
  ],
  courseMaterials: [
    {
      title: "Introduction to Next.js",
      fileUrl: "/files/intro-to-nextjs.pdf",
      fileType: "pdf",
    },
    {
      title: "TypeScript Basics",
      fileUrl: "/files/typescript-basics.docx",
      fileType: "docx",
    },
    {
      title: "Tailwind CSS Guide",
      fileUrl: "/files/tailwind-guide.pdf",
      fileType: "pdf",
    },
  ],
  startDate: "2022-01-01",
};
