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
  duration: "8 weeks",
  languages: "EN - AR",
  certificate: "International Certificate",

  /// here you can add the form id that you want
  form: {
    name: "form-speciality",
    groupId: "112929547",
    redirect: "https://t.me/imetsmedicalschool",
  },
  //
  //// tab over view
  //
  // the description at the description page  at here ===> Course Description
  description: ` The Healthcare Supply Chain Management Diploma is more than just a program—it’s an opportunity to transform your career and make a lasting impact in the healthcare industry. Whether you’re looking to launch your career, switch fields, or advance to a leadership role, this diploma will provide you with the knowledge, skills, and confidence to succeed.
Don’t wait to take the next step in your career. Enroll today and become a leader in healthcare supply chain management!
`,

  // the data at this part ===> What you'll learn in this course?
  courseGoals: {
    content: `The Healthcare Supply Chain Management Diploma is designed to provide you with practical, industry-relevant knowledge and skills. Here’s what you’ll gain:`,
    goals: [
      /// start goal
      {
        title: "Understand the key principles and processes of supply chain management in healthcare.",
        content:
          "",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Learn how to source medical supplies, equipment, and pharmaceuticals efficiently.",
        content:
          "",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Develop strategies for building and maintaining strong relationships with suppliers and vendors.",
        content:
          "",
      },
      /// end goal
      ///
      /// start goal
      {
        title: "Master techniques for managing inventory levels, reducing waste, and ensuring product availability.",
        content:
          "",
      },
      {
        title: "Understand best practices for warehouse operations in healthcare settings.",
        content:
          "",
      },
      {
        title: "Explore strategies for ensuring timely delivery, cost efficiency, and patient safety.",
        content:
          "",
      },
        /// start goal
        {
          title: "Use data and analytics to optimize supply chain processes and improve decision-making.",
          content:
            "",
        },
        {
          title: "Learn how to measure performance, identify trends, and implement data-driven solutions.",
          content:
            "",
        },
        {
          title: "Stay ahead of the curve with insights into digital supply chain solutions, AI, and blockchain technology.",
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
