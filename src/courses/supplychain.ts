export const supply_chain: CourseType = {
  id: "7",
  slug: "healthcare-supply-chain-diploma",
  image: "/images/supply-chain.webp",
  title: "Healthcare Supply Chain Management Diploma",
  meta: {
    meta_title: "here is the meta title",
    meta_description: "here is the meta description",
    meta_keywords: "here is the meta keyword",
  },
  rating: 5,
  reviewsNumber: 600,
  price: {
    EG: { old: "17000 EGP", new: "8500 EGP" },
    SA: { old: "3400 SAR", new: "1600 SAR" },
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
    url: "https://www.youtube.com/watch?v=vBD0zyAwczg",
  },
  duration: "12 weeks",
  languages: "EN - AR",
  certificate: "International Certificate",

  /// here you can add the form id that you want
  form: {
    name: "form-speciality",
    groupId: "112929547",
    redirect: "www.imetsacademy.com",
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
      title: "Introduction to Healthcare Supply Chain Management",
      lessons: [
        { id: 1, title: "Understand the fundamentals of supply chain management in healthcare.", url: "#" },
        { id: 2, title: "Explore the unique challenges and opportunities in the healthcare supply chain.", url: "#" },
        
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 2,
      title: "Procurement and Vendor Management",
      lessons: [
        {
          id: 1,
          title: "Learn how to source medical supplies and equipment efficiently.",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Develop strategies for managing relationships with suppliers and vendors.", url: "#" },
       
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 3,
      title: "Inventory Control and Warehouse Management",
      lessons: [
        {
          id: 1,
          title: "Master techniques for managing inventory levels and reducing waste.",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Understand best practices for warehouse operations in healthcare settings.", url: "#" },
        
      ],
    },
    {
      id: 4,
      title: "Logistics and Distribution in Healthcare",
      lessons: [
        {
          id: 1,
          title: "Learn how to manage the transportation and distribution of medical supplies.",
          url: "#",
          preview: true,
        },
        { id: 2, title: "Explore strategies for ensuring timely delivery and cost efficiency.", url: "#" },
        
      ],
    },
    /// end module
    ///
    /// start module
    {
      id: 5,
      title: "Healthcare Supply Chain Analytics",
      lessons: [
        {
          id: 1,
          title: "Use data and analytics to optimize supply chain processes.",
          url: "#",
          preview: true,
        },
        {
          id: 2,
          title: "Make data-driven decisions to improve efficiency and reduce costs.",
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
      title: "Sustainability in Healthcare Supply Chain",
      lessons: [
        {
          id: 1,
          title: "Explore strategies for creating environmentally sustainable supply chains.",
          url: "#",
          preview: true,
        },
        {
          id: 2,
          title: "Learn how to balance cost efficiency with social and environmental responsibility.",
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
      title: "Emerging Trends in Healthcare Supply Chain",
      lessons: [
        {
          id: 1,
          title: "Stay ahead of the curve with insights into digital supply chain solutions, AI, and blockchain technology.",
          url: "#",
          preview: true,
        },
        {
          id: 2,
          title: "Understand how innovation is transforming healthcare supply chains.",
          url: "#",
          preview: true,
        },

      ],
    },
    /// end module
    ///
    /// start module
   
    /// end module
  ],
  whoCanAttend: {
    content:
      "Earning your CPHQ certification is more than just passing an exam—it s about showing your commitment to excellence in healthcare. This credential not only boosts your professional credibility but also equips you with the skills to make a real impact in the healthcare world.",
    items: [
      "Healthcare Professionals",
      "Medical and Nursing Directors",
      "Doctors",
      "Pharmacists",
      "Nursing Specialists",
      "Medical and Nursing Directors",
      "Healthcare Administrators and Managers",
      "Supply Chain Professionals",
      "Hospital & Clinic Owners",
      "Entrepreneurs",
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
