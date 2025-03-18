export const supply_chain: FreeCourseType = {
  id: "7",
  slug: "supplychain",
  image: "/images/supply-chain.webp",
  title: "Healthcare Supply Chain Management Diploma",
  // هنا العنوان بالعربي
  arTitle: "هنا العنوان بالعربي",

  // lagging page url
  url: "/apply-supplychain-free",
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
      url: "https://www.youtube.com/watch?v=r_PZeWjcosc",
      // if locked make it true this is free access video
      locked: false,
      duration: "42:38",
    },
    {
      title: "Qualitative Forecasting Methods",
      progress: 30,
      url: "https://www.youtube.com/watch?v=2KQmvnxGoWQ",
      // if locked make it true this is free access video
      locked: false,
      duration: "37:58",
    },
    {
      title: "Inventory Management",
      progress: 50,
      url: "https://www.youtube.com/watch?v=nurliSKJqdg&t=4s",
      //  this is locked access video
      locked: false,
      duration: "60:12",
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
      message: "Hi, I'm interested in your Supply Chain Management course",
    },
    telegram: {
      link: "https://t.me/imetsmedicalschool",
    },
    youTube: {
      link: "https://www.youtube.com/c/IMETSAcademyMedical",
    },
  },
};
