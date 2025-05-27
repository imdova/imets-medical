export const hr_management: CourseType = {
  id: "9",
  slug: "healthcare-hr-management-diploma",
  image: "/images/hr.jpeg",
  title: "Healthcare HR Management Diploma",
  meta: {
    meta_title: "Healthcare HR Management Diploma | IMETS Medical School",
    meta_description: "Enroll in IMETS Medical School’s Healthcare HR Management Diploma. Learn recruitment, compliance, and leadership skills tailored for healthcare HR. Start your journey",
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
    groupId: { EG: "112930552", other: "112930552" },
    redirect: "https://t.me/imetsmedicalschool",
  },
  //
  //// tab over view
  //
  // the description at the description page  at here ===> Course Description
  description: ` The Healthcare HR Management Diploma at IMETS Medical School is a specialized program designed to equip you with the skills and knowledge needed to excel in human resources within the healthcare sector. This program combines theoretical knowledge with practical applications, ensuring that you are well-prepared to tackle the unique challenges of managing HR in healthcare organizations.`,

  // the data at this part ===> What you'll learn in this course?
  courseGoals: {
    content: `The Healthcare HR Management Diploma at IMETS Medical School equips you with the skills and knowledge needed to excel in human resources within the healthcare sector. By the end of this program, you will:`,
    goals: [
      /// start goal
      {
        title:
          "Understand the Fundamentals of Healthcare HR Management",
        content: "You will Learn the unique challenges and opportunities of managing HR in healthcare settings, Also you will be able to xplore the role of HR in supporting patient care and organizational success.",
      },
      /// end goal
      ///
      /// start goal
      {
        title:
          "Master Recruitment and Retention Strategies",
        content: "You will Learn to design effective onboarding and orientation programs, Also you will gain expertise in hiring and retaining top healthcare talent.",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Develop Employee Relations and Engagement Skills",
        content: "You will Understand how to build a positive workplace culture in healthcare organizations, Also you will learn to handle conflicts, grievances, and employee satisfaction.",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Ensure Compliance with Healthcare Regulations",
        content: "You will Gain knowledge of labor laws, healthcare regulations, and ethical HR practices, Also you will Learn to navigate compliance challenges in healthcare HR.",
      },
      {
        title: "Enhance Performance Management and Training",
        content: "You will be ab;e to Develop skills to evaluate employee performance and provide constructive feedback, Also you will Learn to design and implement training programs for healthcare staff.",
      },
      {
        title:"Manage Compensation and Benefits",
        content: "You will Understand how to design competitive compensation packages for healthcare professionals, Aslo you will Learn to manage benefits programs, including health insurance and retirement plans.",
      },
    ],
  },

  ////  modules at this course at here ==== > Curriculum
  courseModules: [
    /// start module
    {
      id: 1,
      title: "Module 1: Introduction to Healthcare HR Management",
      lessons: [
        { id: 1, title: " Role of HR in Healthcare Organizations", url: "#" },
        { id: 2, title: "Unique Challenges of Healthcare HR", url: "#" },
        { id: 3, title: "Aligning HR Strategies with Healthcare Goals", url: "#" },
        
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 2,
      title: "Module 2: Recruitment and Retention in Healthcare",
      lessons: [
        {
          id: 1,
          title: "Talent Acquisition Strategies for Healthcare",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Effective Onboarding and Orientation Programs", url: "#" },
        {
          id: 3,
          title: "Retention Strategies for Healthcare Professionals",
          url: "#",
        },
        
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 3,
      title: "Module 3: Employee Relations and Engagement",
      lessons: [
        {
          id: 1,
          title: "Building a Positive Workplace Culture",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Managing Conflict and Grievances in Healthcare", url: "#" },
        {
          id: 3,
          title: "Employee Engagement and Satisfaction Surveys",
          url: "#",
        },
      ],
    },
    {
      id: 4,
      title: "Module 4: Performance Management and Training",
      lessons: [
        {
          id: 1,
          title: "Setting Performance Standards and Goals",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Conducting Performance Reviews and Providing Feedback", url: "#" },
        {
          id: 3,
          title: "Designing Training Programs for Healthcare Staff",
          url: "#",
        },
        
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 5,
      title: "Module 5: Compensation and Benefits Management",
      lessons: [
        {
          id: 1,
          title: "Designing Competitive Compensation Packages",
          url: "#",
          preview: true,
        },
        {
          id: 2,
          title: "Managing Employee Benefits: Health Insurance and Retirement Plans",
          url: "#",
          preview: true,
        },
        {
          id: 3,
          title: "Payroll Management in Healthcare",
          url: "#",
          preview: true,
        },
      ],
    },
    
    /// end module
    
    /// end module
  ],
  whoCanAttend: {
    content:
      "Earning your CPHQ certification is more than just passing an exam—it s about showing your commitment to excellence in healthcare. This credential not only boosts your professional credibility but also equips you with the skills to make a real impact in the healthcare world.",
    items: [
      "Healthcare Professionals",
      "Doctors",
      "Pharmacists",
      "HR managers",
      "Recruiters",
      "Healthcare Administrators and Managers",
      "Students and Graduates",
      "Career Changers",
      "Professionals looking to specialize in healthcare HR.",
    ],
  },
  //
  //// tab instructor
  //
  instructors: [
    /// start
    {
      id: "1",
      name: "DR Ahmed Ibrahim",
      job: "Group HR Director - As Salam International Hospital Group - Alameda",
      image:
        "/images/ai.jpg",
      certification: "MBA - DBA - HMD",
      experience: 15,
      location: "Cairo, Eqypt",
      content:
        "Experienced International Human Resources Director with a demonstrated history of working in the hospitals & the health care industry. Skilled in Business Planning, Succession Planning, Negotiation, Human Resources, Analytical Skills, Talent Acquisition, Employees Relations, Employees Engagement, Business Strategy, and Operations Management. Strong human resources professional with a DBA (Doctorate in Business Administration) focused in Health Care Management.",
      rating: 5,
    },
    /// end
    ///
    /// start
    
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
  startDate: "2025-03-15",
};
