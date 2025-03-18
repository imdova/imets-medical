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
  lectures: 42,
  lecture_date: "1 Lecture-Weekly",
  lecture_Method: "Online-Zoom",
  students: 1300,
  status: "BestSeller",
  type: "Healthcare Management",
  video: {
    url: "https://www.youtube.com/watch?v=EOgJKtSnNEA",
    thumbnail:
      "",
  },
  duration: "12 Monthss",
  languages: "EN - AR",
  certificate: "International Certificate",
  form: {
    name: "form-speciality",
    groupId: "112930551",
    redirect: "https://t.me/imetsmedicalschool",
  },
  description: ` The Healthcare Hospital Management Diploma at IMETS Medical School is a specialized program designed to equip you with the skills and knowledge needed to effectively manage hospitals and healthcare facilities. This program combines theoretical knowledge with practical applications, ensuring that you are well-prepared to tackle the unique challenges of hospital management.`,
  courseGoals: {
    content: `The Healthcare Hospital Management Diploma at IMETS Medical School equips you with the skills and knowledge needed to excel in hospital management. By the end of this program, you will:`,
    goals: [
      {
        title: "Understand the Fundamentals of Hospital Management",
        content:
          "You will learn the core principles of managing hospitals and healthcare facilities, Also you will be able to xplore the unique challenges and opportunities in hospital management.",
      },
      {
        title: "Human Resource Management:",
        content:
          "Master the art of recruiting, training, and managing hospital staff while fostering a work environment focused on quality patient care.",
      },
      {
        title: "Mastering Quality & Patient Safety:",
        content:
          "You will be able to explore strategies for maintaining high standards of care, reducing risks, and ensuring patient safety.",
      },
      {
        title: "Master Strategic Management in Healthcare Sector:",
        content:
          "You will be able to evelop strategies that align with the hospital’s mission and adapt to the changing healthcare landscape.",
      },
      {
        title: "Hospital Information Systems:",
        content:
          "You will develop skills to use data and analytics to improve hospital performance. Learn to monitor key performance indicators (KPIs) and make informed decisions.",
      },
      {
        title: "Develop Financial Management Skills",
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
        { id: 1, title: "Introduction to Strategic Management in Healthcare", url: "#" },
        { id: 2, title: "Strategic Planning and Goal Setting", url: "#" },
        {
          id: 3,
          title: "SWOT Analysis in Healthcare",
          url: "#",
          preview: true,
        },
        { id: 4, title: "Implementing and Monitoring Strategic Plans", url: "#" },
      ],
    },
    {
      id: 2,
      title: "Course2 : HR Management",
      lessons: [
        {
          id: 1,
          title: "Introduction to Healthcare HR Management",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Recruitment and Retention in Healthcare", url: "#" },
        {
          id: 3,
          title: "Employee Engagement and Performance Management",
          url: "#",
        },
        { id: 4, title: "Compliance and Ethics in Healthcare HR", url: "#" },
      ],
    },
    {
      id: 3,
      title: "Course3 : Healthcare Quality Management",
      lessons: [
        {
          id: 1,
          title: " Introduction to Healthcare Quality Management",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Quality Improvement Tools and Techniques", url: "#" },
        {
          id: 3,
          title: "Healthcare Standards and Accreditation",
          url: "#",
        },
        { id: 4, title: " Monitoring and Reporting Quality Performance", url: "#" },
      ],
    },
    {
      id: 4,
      title: "Course4 : Healthcare Marketing Management",
      lessons: [
        {
          id: 1,
          title: "Introduction to Healthcare Marketing",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Digital Marketing in Healthcare", url: "#" },
        {
          id: 3,
          title: "Patient-Centric Marketing Strategies",
          url: "#",
        },
        { id: 4, title: "Measuring Marketing Effectiveness", url: "#" },
      ],
    },
    {
      id: 5,
      title: "Course5 : Healthcare Supply Chain Management",
      lessons: [
        {
          id: 1,
          title: "Introduction to Healthcare Supply Chain Management",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Inventory Management in Healthcare", url: "#" },
        {
          id: 3,
          title: "Procurement and Vendor Management",
          url: "#",
        },
        { id: 4, title: "Ensuring Supply Chain Efficiency and Compliance", url: "#" },
      ],
    },
    {
      id: 6,
      title: "Course6 : Infection Prevention and Control",
      lessons: [
        {
          id: 1,
          title: "Introduction to Infection Prevention and Control",
          url: "#",
          preview: true,
        },
        { id: 2, title: " Standard and Transmission-Based Precautions", url: "#" },
        {
          id: 3,
          title: "Environmental Controls and Waste Management",
          url: "#",
        },
        { id: 4, title: "Monitoring and Reporting Infection Control", url: "#" },
      ],
    },
    {
      id: 7,
      title: "Course7 : Financial Management",
      lessons: [
        {
          id: 1,
          title: "Introduction to Healthcare Financial Management",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Budgeting and Financial Planning", url: "#" },
        {
          id: 3,
          title: "Revenue Cycle Management",
          url: "#",
        },
        { id: 4, title: "Cost Control and Financial Reporting", url: "#" },
      ],
    },
    ],
  
    whoCanAttend: {
    content:
      "The Healthcare Hospital Management Diploma at IMETS Medical School is designed for a diverse range of professionals and aspiring hospital managers who want to excel in the healthcare industry. This program is perfect for:",
    items: [
      "Healthcare Professionals",
      "Doctors",
      "Pharmacists",
      "Nursing Specialists",
      "Laboratory and Radiology",
      "Hospital Administrators and Managers",
      "Professionals interested in managerial jobs in Healthcare Sector",
    ],
  },
  /// in instructors tab
  instructors: [
    {
      id: "1",
      name: "DR Hany Eid",
      job: "Startegic Management Consultant",
      image:
        "images/hany.webp",
      certification: "MBA - DBA - HMD",
      experience: 15,
      location: "Cairo, Eqypt",
      content:
        "Instructo, consultant, Auditor, Thesis supervisor• Planning and coordinating activities for high-level management and business alike. • Effectively teaching a variety of postgraduate management courses; evaluating student learning; participating in related department activities; advising students; and complying with all Department, College, and University regulations • Provide academic guidance and practical support from the inception of the project to the submission of the thesis ",
      rating: 4,
    },
    {
      id: "2",
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
    {
      id: "3",
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
      id: "4",
      name: "DR/Mohamed Hegazy",
      job: "Quality and Risk Management Manager at As-Salam International Hospital",
      image:
        "images/hegazy.webp",
      certification: "MBA - CPHQ - HMD",
      experience: 13,
      location: "Cairo, Eqypt",
      content:
        "As a Quality and Risk Management Manager at As-Salam International Hospital, I'm leading and overseeing the implementation of quality improvement and risk management strategies and initiatives. With a professional postgraduate diploma in Total Quality Management (TQM) for healthcare and a bachelor's degree in pharmacological sciences, I have acquired the skills and knowledge to apply the principles and tools of TQM to enhance the performance and outcomes of healthcare services and processes.",
      rating: 5,
    },
    {
      id: "5",
      name: "DR/Passant Youssef",
      job: "Marketing Manager-Dar AlFouad Hospitals-Alameda Healthcare Group",
      image: "/images/passant.webp",
      certification: "MBA ( Marketing ) - Professional Diploma in Digital Marketing- HMD",
      experience: 17,
      location: "Cairo, Eqypt",
      content:
        "17 Years of Experience in the Healthcare Field, working with top Healthcare providers ,pharmaceutical companies, and pharmacies chains in Egypt, Saudi Arabia and Gulf region. -MBA holder and Digital Marketing Certified -Launched + 300 successful camapigns ,63 products launches and +100 different vitrual& hybrid Mega Events",
      rating: 5,
    },
    {
      id: "6",
      name: "DR/ Abdelaziz M. Alakhras",
      job: "Supply Chain Director As-salam international Hospitals, Group SC P&A Manager Alameda Healthcare",
      image: "/images/zezo.webp",
      certification: "Logistic and Supply Chain Diploma ( AUC ) - MBA ",
      experience: 17,
      location: "Cairo, Eqypt",
      content:
        "Supply Chain Director As-salam international Hospitals, Group SC P&A Manager Alameda Healthcare",
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
      image: "/images/g1.webp",
      name: "",
      title: "",
    },
    {
      image: "/images/g2.webp",
      name: "",
      title: "",
    },
    {
      image: "/images/g3.webp",
      name: "",
      title: "",
    },
    {
      image: "/images/g4.webp",
      name: "",
      title: "",
    },
    
  ],
  startDate: "2025-04-15",
};
