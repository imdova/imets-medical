export const cphq_preparation_course: CourseType = {
  id: "1",
  slug: "cphq-course",
  image: "/images/cphq.webp",
  title: "CPHQ Preparation Course",
  meta: {
    meta_title: "CPHQ Course Online | Prepare for the CPHQ Exam",
    meta_description:
      "Enroll in our CPHQ course to become a Certified Professional in Healthcare Quality. Get expert training, exam preparation, and career advancement in healthcare quality management.",
    meta_keywords:
      "CPHQ course, Certified Professional in Healthcare Quality, CPHQ certification, healthcare quality training, CPHQ exam prep, healthcare quality management, CPHQ online course, healthcare quality certification",
  },
  rating: 5,
  reviewsNumber: 1340,

  price: {
    EG: { old: "18000 EGP", new: "9000 EGP" },
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
  type: "Healthcare Quality",
  video: {
    url: "https://www.youtube.com/watch?v=NSXeTYUjCI4",
  },
  duration: "12 weeks",
  languages: "EN - AR",
  certificate: "International Certificate",

  /// here you can add the form id that you want
  form: {
    name: "form-speciality",
    groupId: "112929547",
    redirect: "http://wa.me/201022995596",
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
        title: "Understand healthcare quality system.",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Establish leadership environment.",
        content:
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Monitor, analyze,  and improve performanc.",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Use statistics to make recommendations.",
        content:
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      },
      {
        title: "Recognize accreditation process.",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Monitor, analyze,  and improve performanc.",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
      name: "DR Sara Abdullah",
      job: "Healthcare Quality Manager at DAF Hospital",
      image: "/images/sara.jpg",
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
      name: "DR Ahmed Habib",
      job: "Healthcare Quality Professional",
      image: "/images/habib.png",
      certification:
        "CPHQ - Hospital Management Diploma (AUC) - MBA - CPT - PMP",
      experience: 12,
      location: "Cairo, Eqypt",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
    /// end
  ],
  videosGrid: [
    {
      videoUrl: "https://www.youtube.com/watch?v=EXnm42VAv98",
      thumbnail:
        "",
      title: "Skyfall",
      author: "By Author Name",
      views: "10k Views",
      timeAgo: "1 hour ago",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=9iS5pieCn5A",
      thumbnail:
        "",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=HT9wtHncGDQ",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=aPdec-1kBnQ&t=2s",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=MyTxLQkP4yQ",
    },
  ],
  reviews: [
    {
      image: "/images/q1.jfif",
      name: "Noha mamdoh",
      title: "Doctor at name of hospital",
    },
    {
      image: "/images/q2.jfif",
      name: "Noha mamdoh",
      title: "Doctor at name of hospital",
    },
    {
      image: "/images/q3.jpg",
      name: "Noha mamdoh",
      title: "Doctor at name of hospital",
    },
    {
      image: "/images/q4.jpg",
      name: "Noha mamdoh",
      title: "Doctor at name of hospital",
    },
    {
      image: "/images/g1.jfif",
      name: "Noha mamdoh",
      title: "Doctor at name of hospital",
    },
  ],
  startDate: "2022-01-01",
};
