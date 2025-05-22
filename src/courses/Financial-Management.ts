export const Financial_Management: CourseType = {
  id: "7",
  slug: "financial-management",
  image: "/images/finance.webp",
  title: "Financial Management",
  meta: {
    meta_title: "Healthcare Financial Management Course | Master Hospital Budgeting & Revenue | IMETS Medical School",
    meta_description: "Online course in healthcare finance. Understand hospital budgets, pricing, ROI analysis & financial statements. Boost your healthcare leadership skills today!",
    meta_keywords: "healthcare financial management course, hospital budgeting and finance, healthcare revenue cycle training, medical cost control strategies, financial statements for healthcare, healthcare ROI analysis, online healthcare finance diploma, IMETS Medical School courses  ",
  },
  rating: 5,
  reviewsNumber: 650,
  price: {
    EG: { old: "15000 EGP", new: "7500 EGP" },
    SA: { old: "2600 SAR", new: "1300 SAR" },
    /// add country here
    // other work for any other country the default price
    other: { old: "700$", new: "350$" },
  },
  lectures: 10,
  lecture_date: "1 Lecture-Weekly",
  lecture_Method: "Online-Zoom",
  students: 3200,
  status: "BestSeller",
  type: "Healthcare Quality",
  video: {
    url: "https://www.youtube.com/watch?v=QkkJACvS-2A&t=1s",
  },
  duration: "6 weeks",
  languages: "EN - AR",
  certificate: "International Certificate",

  /// here you can add the form id that you want
  form: {
    name: "form-speciality",
    groupId: { EG: "112929547", other: "112929547" },
    redirect: "https://t.me/imetsmedicalschool",
  },
  //
  //// tab over view
  //
  // the description at the description page  at here ===> Course Description
  description: ` The Healthcare Financial Management course at IMETS Medical School provides students with essential financial skills tailored to the healthcare sector. This program covers budgeting, revenue cycle management, cost control, and financial reporting, ensuring participants can effectively manage finances in hospitals and healthcare organizations.`,

  // the data at this part ===> What you'll learn in this course?
  courseGoals: {
    content: `By the end of the Healthcare Financial Management course at IMETS Medical School, students will be able to:`,
    goals: [
      /// start goal
      {
        title: "Analyze Healthcare Financial System.",
        content:
          "Explain the unique financial structures of hospitals, clinics, and health systems.Also You will be able to Evaluate the impact of insurance models (Medicare, Medicaid, private payers) on revenue streams.",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Develop and Manage Healthcare Budgets.",
        content:
          "Differentiate between operating and capital budgets. Also You will be able to develop a basic department/clinic budget and track costs.",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Optimize Revenue Cycle Processes.",
        content:
          "You will be able to implement best practices for medical billing, coding, and claims processing.",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Implement Cost-Control Strategies.",
        content:
          "Analyze financial statements (e.g., balance sheets, income statements) to identify cost-saving opportunities.Also You will be able to recommend data-driven strategies to reduce waste while maintaining quality care.",
      },
      {
        title: "Implement Pricing and Revenue in Medical Services.",
        content:
          "Describe how pricing models (insurance, government, private) impact revenue.Also You will be able to explain the revenue cycle and its link to patient satisfaction.",
      },
     
    ],
  },

  ////  modules at this course at here ==== > Curriculum
  courseModules: [
    /// start module
    {
      id: 1,
      title: "Introduction to Financial Basics",
      lessons: [
        { id: 1, title: "	Importance of finance in healthcare", url: "#" },
        { id: 2, title: "	Key finance terms and concepts", url: "#" },
        { id: 3, title: " The role of finance in medical decision-making", url: "#" },
        { id: 4, title: "•	Understanding costs vs. value in healthcare", url: "#" },
        
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 2,
      title: "Financial Statements Simplified",
      lessons: [
        {
          id: 1,
          title: "•	Income Statement (Profit & Loss): revenue, expenses, profit",
          url: "#",
          preview: true,
        },
        { id: 2, title: "•	Balance Sheet: assets, liabilities, equity", url: "#" },
        {
          id: 3,
          title: "•	Cash Flow Statement: how money moves in and out",
          url: "#",
        },
        {
          id: 4,
          title: "•	Real-life examples from hospitals and clinics",
          url: "#",
        },
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 3,
      title: "Healthcare Budgeting & Cost Management",
      lessons: [
        {
          id: 1,
          title: "•	Budget types: operating vs. capital budgets",
          url: "#",
          preview: true,
        },
        { id: 2, title: "•	Building and managing a department/clinic budget", url: "#" },
        {
          id: 3,
          title: "•	Identifying and managing direct vs. indirect costs",
          url: "#",
        },
      ],
    },
    {
      id: 4,
      title: "Financial Decision-Making in Healthcare",
      lessons: [
        {
          id: 1,
          title: "•	Return on Investment (ROI) in medical equipment or services",
          url: "#",
          preview: true,
        },
        { id: 2, title: "•	Break-even analysis for new services", url: "#" },
        {
          id: 3,
          title: "•	Cost-benefit analysis for patient services",
          url: "#",
        },
        
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 5,
      title: "Pricing and Revenue in Medical Services",
      lessons: [
        {
          id: 1,
          title: "How medical services are priced (insurance, government, private)",
          url: "#",
          preview: true,
        },
        {
          id: 2,
          title: "Revenue cycle in healthcare",
          url: "#",
          preview: true,
        },
        {
          id: 3,
          title: "Financial impact of patient satisfaction and efficiency)",
          url: "#",
          preview: true,
        },
      ],
    },
    /// end module
    ///
    
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
  startDate: "2025-04-15",
};
