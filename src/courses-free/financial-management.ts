export const financial_management: FreeCourseType = { 
  id: "8",
  slug: "finance",
  image: "/images/finance.webp",
  title: "Financial Management ",
  // هنا العنوان بالعربي
  arTitle: "هنا العنوان بالعربي",

  // lagging page url
  url: "/apply-finance-free",
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
      title: "Operational Components of Healthcare SCM",
      progress: 10,
      url: "https://www.youtube.com/watch?v=QkkJACvS-2A&t=1s",
      // if locked make it true this is free access video
      locked: false,
      duration: "14:22",
    },
    {
      title: "Qualitative Forecasting Methods",
      progress: 30,
      url: "https://www.youtube.com/watch?v=pbdl32rYYVc&t=7s",
      // if locked make it true this is free access video
      locked: false,
      duration: "33:22",
    },
    {
      title: "Inventory Management",
      progress: 50,
      url: "https://www.youtube.com/watch?v=0Vvm5SZMk5c&t=4s",
      //  this is locked access video
      locked: false,
      duration: "47:52",
    },
    
  ],
  material: "/files/intro-to-nextjs.pdf",
  actionImage: {
    image: "/images/supplypromo.jpg",
    url: "/courses",
  },
  socialMediaCards: {
    whatsApp: {
      number: "+201008815007",
      message: "Hi, I'm interested in your course",
    },
    telegram: {
      link: "https://t.me/imetsmedicalschool",
    },
    youTube: {
      link: "https://www.youtube.com/c/IMETSAcademyMedical",
    },
  },
};
