export const hr_management: CourseType = {
  id: "9",
  slug: "healthcare-hr-management-diploma",
  image: "/images/hr.jpeg",
  title: "Healthcare HR Management Diploma",
  meta: {
    meta_title: "here is the meta title",
    meta_description: "here is the meta description",
    meta_keywords: "here is the meta keyword",
  },
  rating: 5,

  reviewsNumber: 1400,
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
    name: "form-speciality",
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
        title:
          "Recognize the key skills and responsibilities of a human resource manager.",
        content: "",
      },
      /// end goal
      ///
      /// start goal
      {
        title:
          "Explain general recruitment, selection, training and appraisal processes",
        content: "",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Outline how employee separation and termination should occur",
        content: "",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Discuss how to manage and retain employees effectively",
        content: "",
      },
      {
        title: "Highlight the role of internal culture affects an organization",
        content: "",
      },
      {
        title:
          "Identify strategies for managing the ‘process of change’ within an institution",
        content: "",
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
