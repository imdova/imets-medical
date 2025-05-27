export const healthcare_quality_management_diploma: CourseType = {
  id: "2",
  slug: "healthcare-quality-management-diploma",
  image: "/images/quality diploma.webp",
  title: "Healthcare Quality Management Diploma",
  meta: {
    meta_title:
      "Healthcare Quality Management Diploma | Become a Leader in Healthcare Excellence",
    meta_description:
      "Transform your career with our Healthcare Quality Management Diploma! Gain the skills to improve patient care, streamline healthcare processes, and lead quality improvement initiatives. Enroll now and earn an industry-recognized certification!",
    meta_keywords:
      "Healthcare Quality Management Diploma, Healthcare Quality Certification, Quality Management in Healthcare, Healthcare Quality Training, Online Healthcare Quality Course, Healthcare Improvement Diploma, Patient Safety Training, Healthcare Quality Leadership, Healthcare Management Diploma, Quality Improvement in Healthcare",
  },
  rating: 5,

  reviewsNumber: 1800,
  price: {
    EG: { old: "24000 EGP", new: "14000 EGP" },
    SA: { old: "6400 SAR", new: "3200 SAR" },
    /// add country here
    // other work for any other country the default price
    other: { old: "1300$", new: "650$" },
  },
  lectures: 17,
  lecture_date: "1 Lecture-Weekly",
  lecture_Method: "Online-Zoom",
  students: 1250,
  status: "",
  type: "Healthcare Quality",
  video: {
    url: "https://www.youtube.com/watch?v=pl79PvwJ5l4",
    thumbnail:
      "https://img.freepik.com/free-photo/medium-shot-young-woman-listening-to-podcast-with-headphones_23-2149386566.jpg?t=st=1739104145~exp=1739107745~hmac=2fc96c73c86add85c536193ff63570c3fb88e3e17330a570994930f8cb399217&w=996",
  },
  duration: "17 weeks",
  languages: "EN - AR",
  certificate: "International Certificate",
  form: {
    name: "form-speciality",
    groupId: { EG: "112928224", other: "112928224" },
    redirect: "https://t.me/imetsmedicalschool",
  },
  description: ` Becoming CPHQ certified demonstrates to employers and colleagues that
      you know how to manage and advance healthcare Quality and safety.
      Effective preparation for the CPHQ exam is critical to earning the
      credential. The CPHQ certification incorporates the body of knowledge in
      the healthcare Quality profession. It covers the following seven
      domains:H`,
  courseGoals: {
    content: `The Healthcare Quality Management Diploma at IMETS Medical School is designed to equip you with the skills and knowledge needed to ensure excellence in healthcare delivery. By the end of this program, you will:`,
    goals: [
      {
        title:
          "Understand the Fundamentals of Healthcare Quality Management",
        content:
          "Learn the core principles of quality management and their application in healthcare settings.",
      },
      {
        title: "Develop Quality Improvement Strategies",
        content:
          "Learn to use tools like PDSA (Plan-Do-Study-Act) and Six Sigma in healthcare",
      },
      {
        title: "Enhance Patient Safety and Risk Management",
        content:
          "You will learn strategies to minimize errors, reduce risks, and improve patient outcomes. Learn to conduct root cause analysis (RCA) and failure mode effects analysis (FMEA).",
      },
      {
        title: "Apply Quality Management in Real-World Scenarios",
        content:
          "Work on case studies and projects to solve real healthcare quality challenges. Graduate with a portfolio of quality improvement plans and strategies.",
      },
    ],
  },
  courseModules: [
    {
      id: 1,
      title: "Module 1: Introduction to Healthcare Quality Management",
      lessons: [
        { id: 1, title: "Healthcare Quality Concepts and Dimensions", url: "#" },
        { id: 2, title: "System Approach and Process Variation", url: "#" },
        {
          id: 3,
          title: "Healthcare Integrated Delivery System and Managed Care",
          url: "#",
          preview: true,
        },
        { id: 4, title: "Key Concepts: Continuous Improvement and Total Quality Management (TQM)", url: "#" },
      ],
    },
    {
      id: 2,
      title: "Module2: Quality Leadership and Integration",
      lessons: [
        {
          id: 1,
          title: "Leading Quality Improvement Teams",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Change Management in Healthcare Quality Initiatives", url: "#" },
        {
          id: 3,
          title: "Building a Culture of Quality and Accountability",
          url: "#",
        },
      ],
    },
    {
      id: 3,
      title: "Module3: Patient Safety and Risk Manageemnt",
      lessons: [
        {
          id: 1,
          title: "Principles of Patient Safety and Risk Reduction",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Strategies to Prevent Medical Errors and Adverse Events", url: "#" },
        {
          id: 3,
          title: "Building a Culture of Safety in Healthcare Organizations",
          url: "#",
        },
      ],
    },
    {
      id: 4,
      title: "Module4: Performance and Process Improvement",
      lessons: [
        {
          id: 1,
          title: "Introduction to Quality Improvement Models (PDSA, Six Sigma, Lean)",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Using Flowcharts and Process Mapping in Healthcare", url: "#" },
        {
          id: 3,
          title: "Implementing Root Cause Analysis (RCA) and Failure Mode Effects Analysis (FMEA)",
          url: "#",
        },
      ],
    },
    {
      id: 5,
      title: "Module5: Quality Review and Accreditation",
      lessons: [
        {
          id: 1,
          title: " Overview of International Healthcare Standards (JCI, ISO)",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Preparing for Accreditation and Certification", url: "#" },
        {
          id: 3,
          title: "Conducting Internal Audits and Gap Analysis",
          url: "#",
        },
      ],
    },
    {
      id: 6,
      title: "Module6: Health Data Analytics",
      lessons: [
        {
          id: 1,
          title: "Collecting and Analyzing Healthcare Quality Data",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Using Key Performance Indicators (KPIs) to Measure Quality", url: "#" },
        {
          id: 3,
          title: "Data Visualization and Reporting for Quality Improvement",
          url: "#",
        },
      ],
    },
    ],

  whoCanAttend: {
    content:
      "Earning your CPHQ certification is more than just passing an exam—it s about showing your commitment to excellence in healthcare. This credential not only boosts your professional credibility but also equips you with the skills to make a real impact in the healthcare world.",
    items: [
      "Quality Professionals",
      "Doctors",
      "Pharmacists",
      "Nursing Specialists",
      "Medical and Nursing Directors",
      "Healthcare Administrators and Managers",
      "Medical Technologists",
      "Career Changers",
      "Professionals interested in managerial or quality jobs",
    ],
  },
  /// in instructors tab
  instructors: [
    {
      id: "1",
      name: "DR/Sara Abdulla",
      job: "Healthcare Quality Manager at Dar Alfouad Hospital",
      image:
        "/images/sara.jpg",
      certification: "MBA - CPHQ - HMD",
      experience: 15,
      location: "Cairo, Eqypt",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 4.5,
    },
    {
      id: "2",
      name: "DR/Mohamed Hegazy",
      job: "Healthcare Quality Manager at Alsalam International Hospital",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
      certification: "MBA - CPHQ - HMD",
      experience: 10,
      location: "Cairo, Eqypt",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
    {
      id: "3",
      name: "DR/Ahmed Habib",
      job: "Healthcare Quality Professional at Dar Alfouad Hospital",
      image:
        "/images/habib.png",
      certification: "MBA - CPHQ - HMD",
      experience: 10,
      location: "Cairo, Eqypt",
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
  startDate: "2025-04-15",
};
