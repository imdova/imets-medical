export const hr_management: CourseType = {
  id: "9",
  slug: "healthcare-hr-management-diploma",
  image: "/images/cphq.webp",
  title: "Healthcare HR Management Diploma",
  rating: 5,

  /// instructor data
  instructor: {
    id: "1",
    name: "DR/ Sara Abdulla",
    image: "/images/cicPrep.webp",
  },
  price: {
    EG: { old: "17000 EGP", new: "8500 EGP" },
    SA: { old: "3600 SAR", new: "1800 SAR" },
    /// add country here
    // other work for any other country the default price
    other: { old: "900$", new: "450$" },
  },
  lectures: 10,
  lecture_date: "1 Lecture-Weekly",
  lecture_Method: "Online-Zoom",
  students: 3200,
  status: "BestSeller",
  type: "Healthcare Management",
  video: {
    url: "https://www.youtube.com/watch?v=RDlK4QkeqLg",
  },
  duration: "4 weeks",
  languages: "EN - AR",
  certificate: "International Certificate",

  /// here you can add the form id that you want
  form: {
    // name: "",
    groupId: "112930552",
    redirect: "www.imetsacademy.com",
  },
  //
  //// tab over view
  //
  // the description at the description page  at here ===> Course Description
  description: ` This diploma is ideal for individuals seeking to launch or advance their careers in healthcare HR, current HR professionals who want to specialize in healthcare, and healthcare managers looking to strengthen their HR expertise. Whether you're a newcomer or a seasoned professional, our program offers valuable insights and skills.`,

  // the data at this part ===> What you'll learn in this course?
  courseGoals: {
    content: `Earning your CPHQ certification is more than just passing an exam—it s about showing your commitment to excellence in healthcare. This credential not only boosts your professional credibility but also equips you with the skills to make a real impact in the healthcare world.`,
    goals: [
      /// start goal
      {
        title: "Recognize the key skills and responsibilities of a human resource manager.",
        content:
          "",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Explain general recruitment, selection, training and appraisal processes",
        content:
          "",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Outline how employee separation and termination should occur",
        content:
          "",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Discuss how to manage and retain employees effectively",
        content:
          "",
      },
      {
        title: "Highlight the role of internal culture affects an organization",
        content:
          "",
      },
      {
        title: "Identify strategies for managing the ‘process of change’ within an institution",
        content:
          "",
      },
    ],
  },

  ////  modules at this course at here ==== > Curriculum
  courseModules: [
    /// start module
    {
      id: 1,
      title: "Introduction to Healthcare Quality",
      lessons: [
        { id: 1, title: "Quality Concepts", url: "#" },
        { id: 2, title: "Quality Dimensions", url: "#" },
        { id: 3, title: "System Approach", url: "#" },
        { id: 4, title: "Managed Care", url: "#" },
        { id: 5, title: "Integrated Delivery System", url: "#" },
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 2,
      title: "Quality Leadership and Integration",
      lessons: [
        {
          id: 1,
          title: "Leadership versus Management",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Leadership Styles", url: "#" },
        {
          id: 3,
          title: "Strategic Management",
          url: "#",
        },
        {
          id: 4,
          title: "Organizational Structure",
          url: "#",
        },
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 3,
      title: "Patient Safety",
      lessons: [
        {
          id: 1,
          title: "Safety and Just Culture",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Medical Errors", url: "#" },
        {
          id: 3,
          title: "Patient Safety Programs",
          url: "#",
        },
      ],
    },
    {
      id: 4,
      title: "Performance and Process Improvement",
      lessons: [
        {
          id: 1,
          title: "Performance Measurement",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Performance Improvement Approaches", url: "#" },
        {
          id: 3,
          title: "Clinical Performance Measurement",
          url: "#",
        },
        {
          id: 4,
          title: "Utilization Management",
          url: "#",
        },
        {
          id: 5,
          title: "Risk Management",
          url: "#",
        },
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 5,
      title: "Quality Review and Accountability",
      lessons: [
        {
          id: 1,
          title: "Quality Review and Accountability",
          url: "#",
          preview: true,
        },
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 6,
      title: "Population Health and Care Transitions",
      lessons: [
        {
          id: 1,
          title: "Population Health and Care Transitions",
          url: "#",
          preview: true,
        },
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 7,
      title: "Regulatory and Accreditation",
      lessons: [
        {
          id: 1,
          title: "Regulatory and Accreditation",
          url: "#",
          preview: true,
        },
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 8,
      title: "Health Data Analytics",
      lessons: [
        {
          id: 1,
          title: "Sampling and Population",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Basic Statistics", url: "#" },
        {
          id: 3,
          title: "Display Techniques",
          url: "#",
        },
        {
          id: 4,
          title: "Quality Tools",
          url: "#",
        },
      ],
    },
    /// end module
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
  //
  //// tab instructor
  //
  instructors: [
    /// start
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
    /// end
    ///
    /// start
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
    /// end
  ],
  reviews: [
    /// start
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
    /// end
    ///
    /// start
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
    /// end
    ///
    /// start
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
    /// end
  ],

  videosGrid: [
    /// start
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
    /// end
    ///
    /// start
    {
      id: 2,
      thumbnail:
        "https://img.freepik.com/free-photo/portrait-schoolgirl-memphis-style-background_23-2148203809.jpg?t=st=1739460008~exp=1739463608~hmac=83fd4fea35c9d2409cc30128aa35751a4375b429c0bb42aca9732d987aa923e3&w=360",
      title: "",
      author: "DR/Mohamed Farag",
    },
    /// end
    ///
    /// start
    {
      id: 3,
      thumbnail:
        "https://img.freepik.com/free-photo/portrait-schoolgirl-memphis-style-background_23-2148203809.jpg?t=st=1739460008~exp=1739463608~hmac=83fd4fea35c9d2409cc30128aa35751a4375b429c0bb42aca9732d987aa923e3&w=360",
      title: "",
      author: "DR/Mohamed Farag",
    },
    /// end
    ///
    /// start
    {
      id: 4,
      thumbnail:
        "https://img.freepik.com/free-photo/portrait-schoolgirl-memphis-style-background_23-2148203809.jpg?t=st=1739460008~exp=1739463608~hmac=83fd4fea35c9d2409cc30128aa35751a4375b429c0bb42aca9732d987aa923e3&w=360",
      title: "",
      author: "DR/Mohamed Farag",
    },
    /// end
    ///
    /// start
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
