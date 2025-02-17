import { images, reviews, Video } from "./../types/index";

/// edit courses
export const coursesList: CourseType[] = [
  /// start course
  {
    id: "1",
    slug: "cphq-preparation-course",
    image: "/images/cicPrep.webp",
    title: "CPHQ Preparation Course",
    rating: 5,

    /// instructor data
    instructor: {
      id: "1",
      name: "DR/ Carlos Maggi",
      image: "/images/cicPrep.webp",
    },
    price: {
      EG: "2000 EGP",
      SA: "1500 SAR",
      /// add country here
      other: "1500 EGP",
    },
    lectures: 10,
    lecture_date: "1 Lecture-Weekly",
    lecture_Method: "Online-Zoom",
    students: 1800,
    status: "BestSeller",
    type: "Healthcare Quality",
    video: {
      url: "https://www.youtube.com/watch?v=R9-6cBqzczo",
    },
    duration: "12 weeks",
    languages: "EN - AR",
    certificate: "International Certificate",

    /// here you can add the form id that you want
    form: {
      // name: "",
      groupId: "112928224",
      redirect: "/course-free/cphq-preparation-course",
    },
    //
    //// tab over view
    //
    // the description at the description page  at here ===> Course Description
    description: ` Becoming CPHQ certified demonstrates to employers and colleagues that
        you know how to manage and advance healthcare Quality and safety.
        Effective preparation for the CPHQ exam is critical to earning the
        credential. The CPHQ certification incorporates the body of knowledge in
        the healthcare Quality profession. It covers the following seven
        domains:H`,

    // the data at this part ===> What you'll learn in this course?
    courseGoals: {
      content: `Earning your CPHQ certification is more than just passing an exam—it s about showing your commitment to excellence in healthcare. This credential not only boosts your professional credibility but also equips you with the skills to make a real impact in the healthcare world.`,
      goals: [
        /// start goal
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        /// end goal
        ///
        /// start goal
        {
          title: "Lorem Ipsum has been the industry's standard dummy",
          content:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
        /// end goal
        ///
        /// start goal
        {
          title: "when an unknown printer took a galley",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        /// end goal
        ///
        /// start goal
        {
          title: "containing Lorem Ipsum passages,",
          content:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
      ],
    },

    ////  modules at this course at here ==== > Curriculum
    courseModules: [
      /// start module
      {
        id: 1,
        title: "Healthcare Quality Concepts",
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
      /// end module
      ///
      /// start module
      {
        id: 2,
        title: "Quality Leadership and Integration",
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
      /// end module
      ///
      /// start module
      {
        id: 3,
        title: "Patient Safety",
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
        title: "Performance and Process Improvement",
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
      /// end module
      ///
      /// start module
      {
        id: 5,
        title: "Quality Review and Accountability",
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
          { id: 2, title: "Regulatory and Accreditation", url: "#" },
          {
            id: 3,
            title: "Health Data Analytics",
            url: "#",
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
      /// end module
      ///
      /// start module
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
    startDate: "2022-01-01",
  },
  /// end course
  ///
  /// start course
  {
    id: "2",
    slug: "healthcare-quality-management-diploma",
    image:
      "https://img.freepik.com/free-photo/medium-shot-woman-with-headphones-studio_23-2149386582.jpg?t=st=1739104131~exp=1739107731~hmac=74ef27066855e737fb86d6f780ee083fcbeb8a2e71eeaee261342682acf322e1&w=996",
    title: "Healthcare Quality Management Diploma",
    rating: 5,
    instructor: {
      id: "1",
      name: "DR/ Carlos Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },
    price: {
      EG: "2000 EGP",
      SA: "1500 SAR",
      /// add country here
      other: "1500 EGP",
    },
    lectures: 13,
    lecture_date: "3 Lecture-Weekly",
    lecture_Method: "Online-Zoom",
    students: 1250,
    status: "",
    type: "Infection Control",
    video: {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
      thumbnail:
        "https://img.freepik.com/free-photo/medium-shot-young-woman-listening-to-podcast-with-headphones_23-2149386566.jpg?t=st=1739104145~exp=1739107745~hmac=2fc96c73c86add85c536193ff63570c3fb88e3e17330a570994930f8cb399217&w=996",
    },
    duration: "12 weeks",
    languages: "EN - AR",
    certificate: "International Certificate",
    form: {
      groupId: "112928224",
      redirect: "/",
    },
    description: ` Becoming CPHQ certified demonstrates to employers and colleagues that
        you know how to manage and advance healthcare Quality and safety.
        Effective preparation for the CPHQ exam is critical to earning the
        credential. The CPHQ certification incorporates the body of knowledge in
        the healthcare Quality profession. It covers the following seven
        domains:H`,
    courseGoals: {
      content: `Earning your CPHQ certification is more than just passing an exam—it s about showing your commitment to excellence in healthcare. This credential not only boosts your professional credibility but also equips you with the skills to make a real impact in the healthcare world.`,
      goals: [
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Lorem Ipsum has been the industry's standard dummy",
          content:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
        {
          title: "when an unknown printer took a galley",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "containing Lorem Ipsum passages,",
          content:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
      ],
    },
    courseModules: [
      {
        id: 1,
        title: "Healthcare Quality Concepts",
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
        title: "Quality Leadership and Integration",
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
        title: "Patient Safety",
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
        title: "Performance and Process Improvement",
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
        title: "Quality Review and Accountability",
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
        title: "Population Health and Care Transitions",
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
        title: "Regulatory and Accreditation",
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
    startDate: "2022-01-01",
  },
  /// end course
  ///
  /// start course
  {
    id: "3",
    slug: "cic-preparation-course",
    image:
      "https://img.freepik.com/free-photo/medium-shot-young-people-recording-podcast_23-2149386529.jpg?t=st=1739104145~exp=1739107745~hmac=2fc96c73c86add85c536193ff63570c3fb88e3e17330a570994930f8cb399217&w=996",
    title: "CIC Preparation Course",
    rating: 5,
    instructor: {
      id: "1",
      name: "DR/ Carlos Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },
    price: {
      EG: "2000 EGP",
      SA: "1500 SAR",
      /// add country here
      other: "1500 EGP",
    },
    lectures: 10,
    lecture_date: "1 Lecture-Weekly",
    lecture_Method: "Online-Zoom",
    students: 1400,
    status: "BestSeller",
    type: "Marketing Management",
    video: {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
      thumbnail:
        "https://img.freepik.com/free-photo/medium-shot-young-woman-listening-to-podcast-with-headphones_23-2149386566.jpg?t=st=1739104145~exp=1739107745~hmac=2fc96c73c86add85c536193ff63570c3fb88e3e17330a570994930f8cb399217&w=996",
    },
    duration: "12 weeks",
    languages: "EN - AR",
    certificate: "International Certificate",
    form: {
      groupId: "112928224",
      redirect: "/",
    },
    description: ` Becoming CPHQ certified demonstrates to employers and colleagues that
        you know how to manage and advance healthcare Quality and safety.
        Effective preparation for the CPHQ exam is critical to earning the
        credential. The CPHQ certification incorporates the body of knowledge in
        the healthcare Quality profession. It covers the following seven
        domains:H`,
    courseGoals: {
      content: `Earning your CPHQ certification is more than just passing an exam—it s about showing your commitment to excellence in healthcare. This credential not only boosts your professional credibility but also equips you with the skills to make a real impact in the healthcare world.`,
      goals: [
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Lorem Ipsum has been the industry's standard dummy",
          content:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
        {
          title: "when an unknown printer took a galley",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "containing Lorem Ipsum passages,",
          content:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
      ],
    },
    courseModules: [
      {
        id: 1,
        title: "Healthcare Quality Concepts",
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
        title: "Quality Leadership and Integration",
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
        title: "Patient Safety",
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
        title: "Performance and Process Improvement",
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
        title: "Quality Review and Accountability",
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
        title: "Population Health and Care Transitions",
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
        title: "Regulatory and Accreditation",
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
    startDate: "2022-01-01",
  },
  /// end course
  ///
  /// start course
  {
    id: "4",
    slug: "infection-prevention-and-control-diploma",
    image:
      "https://img.freepik.com/free-photo/couple-desk-working-together-from-home_23-2149208556.jpg?t=st=1739104160~exp=1739107760~hmac=056166b5c10b1c47cea18b69102388e34a4de670ff8d9d9eca150913639c59a2&w=996",
    title: "Infection Prevention and Control Diploma",
    rating: 5,
    instructor: {
      id: "1",
      name: "DR/ ahmed Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },
    price: {
      EG: "2000 EGP",
      SA: "1500 SAR",
      /// add country here
      other: "1500 EGP",
    },
    lectures: 50,
    lecture_date: "4 Lecture-Weekly",
    lecture_Method: "Online-Zoom",
    students: 1100,
    status: "BestSeller",
    type: "Marketing Management",
    video: {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
      thumbnail:
        "https://img.freepik.com/free-photo/medium-shot-young-woman-listening-to-podcast-with-headphones_23-2149386566.jpg?t=st=1739104145~exp=1739107745~hmac=2fc96c73c86add85c536193ff63570c3fb88e3e17330a570994930f8cb399217&w=996",
    },
    duration: "12 weeks",
    languages: "EN - AR",
    certificate: "International Certificate",
    form: {
      groupId: "112928224",
      redirect: "/",
    },
    description: ` Becoming CPHQ certified demonstrates to employers and colleagues that
        you know how to manage and advance healthcare Quality and safety.
        Effective preparation for the CPHQ exam is critical to earning the
        credential. The CPHQ certification incorporates the body of knowledge in
        the healthcare Quality profession. It covers the following seven
        domains:H`,
    courseGoals: {
      content: `Earning your CPHQ certification is more than just passing an exam—it s about showing your commitment to excellence in healthcare. This credential not only boosts your professional credibility but also equips you with the skills to make a real impact in the healthcare world.`,
      goals: [
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Lorem Ipsum has been the industry's standard dummy",
          content:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
        {
          title: "when an unknown printer took a galley",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "containing Lorem Ipsum passages,",
          content:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
      ],
    },
    courseModules: [
      {
        id: 1,
        title: "Healthcare Quality Concepts",
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
        title: "Quality Leadership and Integration",
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
        title: "Patient Safety",
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
        title: "Performance and Process Improvement",
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
        title: "Quality Review and Accountability",
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
        title: "Population Health and Care Transitions",
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
        title: "Regulatory and Accreditation",
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
    startDate: "2022-01-01",
  },
  /// end course
  ///
  /// start course
  {
    id: "5",
    slug: "hospital-management-diploma",
    image:
      "https://img.freepik.com/free-photo/couple-desk-working-together-from-home_23-2149208556.jpg?t=st=1739104160~exp=1739107760~hmac=056166b5c10b1c47cea18b69102388e34a4de670ff8d9d9eca150913639c59a2&w=996",
    title: "Hospital Management Diploma",
    rating: 5,
    instructor: {
      id: "5",
      name: "DR/ ahmed Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },
    price: {
      EG: "2000 EGP",
      SA: "1500 SAR",
      /// add country here
      other: "1500 EGP",
    },
    lectures: 48,
    lecture_date: "1 Lecture-Weekly",
    lecture_Method: "Online-Zoom",
    students: 1300,
    status: "BestSeller",
    type: "Marketing Management",
    video: {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
      thumbnail:
        "https://img.freepik.com/free-photo/medium-shot-young-woman-listening-to-podcast-with-headphones_23-2149386566.jpg?t=st=1739104145~exp=1739107745~hmac=2fc96c73c86add85c536193ff63570c3fb88e3e17330a570994930f8cb399217&w=996",
    },
    duration: "12 weeks",
    languages: "EN - AR",
    certificate: "International Certificate",
    form: {
      groupId: "112928224",
      redirect: "/",
    },
    description: ` Becoming CPHQ certified demonstrates to employers and colleagues that
        you know how to manage and advance healthcare Quality and safety.
        Effective preparation for the CPHQ exam is critical to earning the
        credential. The CPHQ certification incorporates the body of knowledge in
        the healthcare Quality profession. It covers the following seven
        domains:H`,
    courseGoals: {
      content: `Earning your CPHQ certification is more than just passing an exam—it s about showing your commitment to excellence in healthcare. This credential not only boosts your professional credibility but also equips you with the skills to make a real impact in the healthcare world.`,
      goals: [
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Lorem Ipsum has been the industry's standard dummy",
          content:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
        {
          title: "when an unknown printer took a galley",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "containing Lorem Ipsum passages,",
          content:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
      ],
    },
    courseModules: [
      {
        id: 1,
        title: "Healthcare Quality Concepts",
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
        title: "Quality Leadership and Integration",
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
        title: "Patient Safety",
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
        title: "Performance and Process Improvement",
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
        title: "Quality Review and Accountability",
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
        title: "Population Health and Care Transitions",
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
        title: "Regulatory and Accreditation",
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
    startDate: "2022-01-01",
  },
  /// end course
  ///
  /// start course
  {
    id: "6",
    slug: "healthcare-marketing-management-diploma",
    image:
      "https://img.freepik.com/free-photo/couple-desk-working-together-from-home_23-2149208556.jpg?t=st=1739104160~exp=1739107760~hmac=056166b5c10b1c47cea18b69102388e34a4de670ff8d9d9eca150913639c59a2&w=996",
    title: "Healthcare Marketing Management Diploma",
    rating: 2,
    instructor: {
      id: "6",
      name: "DR/ ahmed Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },
    price: {
      /// add currencies here
      EG: "2000 EGP",
      SA: "1500 SAR",

      /// the default if no currency match
      other: "1500 EGP",
    },
    lectures: 8,
    lecture_date: "1 Lecture-Weekly",
    lecture_Method: "Online-Zoom",
    students: 950,
    status: "BestSeller",
    type: "Marketing Management",
    video: {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
      thumbnail:
        "https://img.freepik.com/free-photo/medium-shot-young-woman-listening-to-podcast-with-headphones_23-2149386566.jpg?t=st=1739104145~exp=1739107745~hmac=2fc96c73c86add85c536193ff63570c3fb88e3e17330a570994930f8cb399217&w=996",
    },
    duration: "12 weeks",
    languages: "EN - AR",
    certificate: "International Certificate",
    form: {
      groupId: "112928224",
      redirect: "/",
    },
    description: ` Becoming CPHQ certified demonstrates to employers and colleagues that
        you know how to manage and advance healthcare Quality and safety.
        Effective preparation for the CPHQ exam is critical to earning the
        credential. The CPHQ certification incorporates the body of knowledge in
        the healthcare Quality profession. It covers the following seven
        domains:H`,
    courseGoals: {
      content: `Earning your CPHQ certification is more than just passing an exam—it s about showing your commitment to excellence in healthcare. This credential not only boosts your professional credibility but also equips you with the skills to make a real impact in the healthcare world.`,
      goals: [
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Lorem Ipsum has been the industry's standard dummy",
          content:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
        {
          title: "when an unknown printer took a galley",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "containing Lorem Ipsum passages,",
          content:
            "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
        },
      ],
    },
    courseModules: [
      {
        id: 1,
        title: "Healthcare Quality Concepts",
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
        title: "Quality Leadership and Integration",
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
        title: "Patient Safety",
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
        title: "Performance and Process Improvement",
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
        title: "Quality Review and Accountability",
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
        title: "Population Health and Care Transitions",
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
        title: "Regulatory and Accreditation",
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
    startDate: "2022-01-01",
  },
];

// Reviews Data
export const Reviews: reviews[] = [
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
];

// images grid Tow data
export const ImageGridTwo: images[] = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
    isFeatured: true,
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
];

export const instractorsCardData = [
  {
    name: "Micheal Hammond",
    job: "Teacher",
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    name: "Cheryl Curry",
    job: "Teacher",
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    name: "Willie Diaz",
    job: "Teacher",
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    name: "Jimmy Sifuentes",
    job: "Teacher",
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    name: "Micheal Hammond",
    job: "Teacher",
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    name: "Micheal Hammond",
    job: "Teacher",
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
];

export const courseMaterials: CourseMaterial[] = [
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
];
