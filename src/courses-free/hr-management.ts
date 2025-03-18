export const hr_management: FreeCourseType = {
  id: "9",
  slug: "hr",
  image: "/images/hrfree.jpg",
  title: "Healthcare HR Management Diploma",
  // هنا العنوان بالعربي
  arTitle: "هنا العنوان بالعربي",

  // lagging page url
  url: "/apply-hr-free",
  status: "BestSeller",
  rating: 5,
  startDate: "2022-01-01",

  /// instructor data
  instructor: {
    id: "1",
    name: "DR/ Sara Abdulla",
    image: "/images/cicPrep.webp",
  },

  /// the videos at  the free course
  videos: [
    {
      title: "HR Management Road Map",
      progress: 10,
      url: "https://www.youtube.com/watch?v=h31moKF7_m8&t=4s",
      // if locked make it true this is free access video
      locked: false,
      duration: "31:11",
    },
    {
      title: "Talent Management Process",
      progress: 30,
      url: "https://www.youtube.com/watch?v=bAbYJHIoFJk",
      // if locked make it true this is free access video
      locked: false,
      duration: "33:15",
    },
    {
      title: "Collecting Job Analysis Information",
      progress: 50,
      url: "https://www.youtube.com/watch?v=pAgYIe0offw&t=5s",
      //  this is locked access video
      locked: false,
      duration: "26:22",
    },
    {
      title: "Uses of Job Analysis Information",
      progress: 75,
      url: "https://www.youtube.com/watch?v=PPRM9MjLrWc&t=2s",
      //  this is locked access video
      locked: false,
      duration: "35:27",
    },
    
  ],
  material: "/files/intro-to-nextjs.pdf",
  actionImage: {
    image: "/images/hrpromo.jpg",
    url: "/courses",
  },
  socialMediaCards: {
    whatsApp: {
      number: "+201008815007",
      message: "Hi, I'm interested in your Healthcare HR Management Diploma",
    },
    telegram: {
      link: "https://t.me/imetsmedicalschool",
    },
    youTube: {
      link: "https://www.youtube.com/c/IMETSAcademyMedical",
    },
  },
};
