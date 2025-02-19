export const strategic_management: CourseType = {
  id: "8",
  slug: "strategic-management-diploma",
  image: "/images/cphq.webp",
  title: "Healthcare Strategic Management Diploma",
  meta: {
    meta_title: "here is the meta title",
    meta_description: "here is the meta description",
    meta_keywords: "here is the meta keyword",
  },
  rating: 5,
  isInHomePage: false,
  reviewsNumber: 20,
  price: {
    EG: { old: "17000 EGP", new: "8500 EGP" },
    SA: { old: "3600 SAR", new: "1800 SAR" },
    /// add country here
    // other work for any other country the default price
    other: { old: "900$", new: "450$" },
  },
  lectures: 8,
  lecture_date: "1 Lecture-Weekly",
  lecture_Method: "Online-Zoom",
  students: 3200,
  status: "BestSeller",
  type: "Healthcare Management",
  video: {
    url: "https://www.youtube.com/watch?v=8LC6iA2Wo0w",
  },
  duration: "8 weeks",
  languages: "EN - AR",
  certificate: "International Certificate",

  /// here you can add the form id that you want
  form: {
    name: "Unique_Name",
    groupId: "112930555",
    redirect: "www.imetsacademy.com",
  },
  //
  //// tab over view
  //
  // the description at the description page  at here ===> Course Description
  description: ` The healthcare industry is constantly changing, and successful organizations need strategic thinkers to navigate its unique challenges. Our Strategic Management Diploma in healthcare is crafted for professionals looking to take on leadership roles and drive meaningful change in healthcare organizations. Whether you’re already working in healthcare or aiming to enter this rewarding field, this diploma will give you the skills to plan, implement, and manage strategies that can make a real difference in patient care and operational success.`,

  // the data at this part ===> What you'll learn in this course?
  courseGoals: {
    content: `This Strategic Management Diploma focuses on the specific needs of the healthcare sector, providing you with the tools and knowledge to excel. Here’s a snapshot of what you’ll explore:`,
    goals: [
      /// start goal
      {
        title: "Foundations of Healthcare Strategic Management:",
        content:
          "et to grips with the essentials of strategic management tailored to healthcare. You’ll learn how to navigate the complex world of healthcare policies, regulations, and patient-centered care, laying the groundwork for your strategic thinking.",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Healthcare Environment Analysis: ",
        content:
          "Understanding your market is key. This module dives into market trends, patient demographics, competition, and regulations in healthcare. You’ll use tools like SWOT analysis, PESTEL analysis, and Porter’s Five Forces to identify both opportunities and challenges, so you can make informed decisions.",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Strategic Planning in Healthcare:",
        content:
          "Learn how to create actionable strategic plans that align with an organization’s mission and vision. You’ll focus on setting long-term goals, enhancing patient care, improving operational efficiency, and ensuring financial stability.",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Implementing Healthcare Strategies: ",
        content:
          "A strategic plan means nothing without proper execution. This section will show you how to implement strategies effectively, manage resources, and collaborate with healthcare teams to meet organizational goals.",
      },
      {
        title: "Performance Measurement in Healthcare:",
        content:
          "How do you know if your strategies are working? This module covers key performance indicators (KPIs), patient satisfaction metrics, and other evaluation tools that help you track progress, make data-driven decisions, and continuously improve.",
      },
      {
        title: "Leadership in Healthcare: ",
        content:
          "Great strategies need strong leaders. This module focuses on developing your leadership skills, including communication, team motivation, and strategic decision-making that puts patient care and organizational goals first.",
      },
    ],
  },

  ////  modules at this course at here ==== > Curriculum
  courseModules: [
    /// start module
    {
      id: 1,
      title: "Introduction to Strategic Management",
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
      title: "Businesses Matrics - BCG Matrix and GE Matrix",
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
      title: "Businesses Matrices - McKinsey Matrix and Shell Matrix",
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
      title: "Decision Making Process and Corporate Planning",
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
      title: "Business Strategy",
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
      title: "Corporate Strategy",
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
      title: "Implementing Strategy",
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
      title: "Evaluation of Strategy",
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
    {
      reviewImage: "/images/review.png",
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
      reviewImage: "/images/review.png",
      date: "Nov 7, 2023",
      rating: 5,
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
      reviewImage: "/images/review.png",
      date: "Nov 7, 2023",
      rating: 5,
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

  startDate: "2022-01-01",
};
