export const cic_preparation_course: CourseType = {
  id: "3",
  slug: "cic-preparation-course",
  image: "/images/cic.webp",
  title: "CIC Preparation Course",
  rating: 5,
  instructor: {
    id: "1",
    name: "DR/ Carlos Maggi",
    image:
      "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
  },
  price: {
    EG: { old: "8500 EGP", new: "8500 EGP" },
    SA: { old: "1800 SAR", new: "1800 SAR" },
    /// add country here
    // other work for any other country the default price
    other: { old: "17000 $", new: "17000 $" },
  },
  lectures: 16,
  lecture_date: "1 Lecture-Weekly",
  lecture_Method: "Online-Zoom",
  students: 1400,
  status: "BestSeller",
  type: "Infection Control",
  video: {
    url: "https://www.youtube.com/watch?v=mjRm7APezfA&t",
    thumbnail:
      "https://img.freepik.com/free-photo/medium-shot-young-woman-listening-to-podcast-with-headphones_23-2149386566.jpg?t=st=1739104145~exp=1739107745~hmac=2fc96c73c86add85c536193ff63570c3fb88e3e17330a570994930f8cb399217&w=996",
  },
  duration: "16 weeks",
  languages: "EN - AR",
  certificate: "International Certificate",
  form: {
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
        content:
          "",
      },
      {
        title: "Learn how to identify, prevent, and manage healthcare-associated infections (HAIs).",
        content:
          "",
      },
      {
        title: "Gain insights into the latest guidelines, best practices, and regulations in infection control.",
        content:
          "",
      },
      {
        title: "Develop skills in epidemiology, microbiology, sterilization, and disinfection processes.",
        content:
          "",
      },
      {
        title: "Prepare for the CIC certification exam by mastering key areas of the infection control curriculum.",
        content:
          "",
      },
    ],
  },
  courseModules: [
    {
      id: 1,
      title: "Identification of Infectious Disease Processes",
      lessons: [
        { id: 1, title: "Risk factors for infectious diseases", url: "#" },
        { id: 2, title: "colonization, infection, and pseudo infection", url: "#" },
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
        { id: 2, title: "infection prevention and control strategies", url: "#" },
        {
          id: 3,
          title: "strategies related to Transmission based Precautions",
          url: "#",
        },
      ],
    },
    {
      id: 3,
      title: "Cleaning, Disinfection, Sterilization of Medical Devices and Equipment",
      lessons: [
        {
          id: 1,
          title: "appropriate cleaning, disinfection, and sterilization practices based on intended use (e.g., Spaulding classification)",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Direct observations critical steps of cleaning/low level disinfection, high level disinfection, and/or sterilization", url: "#" },
        
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
        { id: 2, title: "Collection and Compilation of Surveillance Data", url: "#" },
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
        { id: 2, title: "evaluation and monitoring of environmental cleaning and disinfection practices and technologies ", url: "#" },
        {
          id: 3,
          title: "infection risks and provide recommendations for risk mitigation during construction, renovation, and maintenance",
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
        { id: 2, title: "employee/occupational health regarding counseling, follow up, and work restriction recommendations related to communicable diseases and/or exposures", url: "#" },
        
      ],
    },
    {
      id: 7,
      title: "Education and Research",
      lessons: [
        {
          id: 1,
          title: "education of patients, families, and others regarding prevention and control measures",
          url: "#",
          preview: true,
        },
        { id: 2, title: "strategies that engage the patient, family, and others in activities aimed at preventing infection", url: "#" },
        
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
        { id: 2, title: "Communication - Quality Performance Improvement and Patient Safety activities related to infection prevention", url: "#" },
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
      job: "Regional Infection Control Manager at EIH",
      image:
        "/images/shrouk.jpg",
      certification: "CIC - MBA - HMD",
      experience: 17,
      location: "Cairo, Eqypt",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
    {
      id: "2",
      name: "DR/Reham Ragab",
      job: "Healthcare Quality Consultant at MOH",
      image:
        "/images/reham.jpg",
      certification: "MBA - CPHQ - HMD",
      experience: 12,
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
      /// all replies to the question by Mohamed Farag at the free course page
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

  /// the videos at  the free course
  videos: [
    {
      title: "Introduction",
      progress: 10,
      url: "https://www.youtube.com/watch?v=XDuWyYxksXU&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS",
      // if locked make it true this is free access video
      locked: false,
      duration: "1:00",
    },
    {
      title: "Medical Terminology",
      progress: 30,
      url: "https://www.youtube.com/watch?v=jOUb09iiO20&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
      // if locked make it true this is free access video
      locked: false,
      duration: "4:00",
    },
    {
      title: "Medical Neuroscience",
      progress: 50,
      url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=3",
      //  this is locked access video
      locked: true,
      duration: "2:35",
    },
    {
      title: "Trauma on EMT",
      progress: 75,
      url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=4",
      //  this is locked access video
      locked: true,
      duration: "7:00",
    },
    {
      title: "Biomedical Visualization",
      progress: 100,
      url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=5",
      //  this is locked access video
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
