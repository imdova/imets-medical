export const strategic_management: FreeCourseType = {
  id: "8",
  slug: "strategic",
  image: "/images/cphq.webp",
  title: "Healthcare Strategic Management Diploma",
  // هنا العنوان بالعربي
  arTitle: "هنا العنوان بالعربي",

  // lagging page url
  url: "/apply-strategic-free",
  status: "BestSeller",
  rating: 5,
  startDate: "2022-01-01",

  /// instructor data
  instructor: {
    id: "1",
    name: "DR/ Sara Abdulla",
    image: "/images/strategic.webp",
  },

  /// the videos at  the free course
  videos: [
    {
      title: "Strategic Management Model",
      progress: 10,
      url: "https://www.youtube.com/watch?v=q4doMg7_bQQ",
      // if locked make it true this is free access video
      locked: false,
      duration: "40:34",
    },
    {
      title: "Boston Consulting Group ( BCG Matrix )",
      progress: 30,
      url: "https://www.youtube.com/watch?v=EDqCDRYYgC4",
      // if locked make it true this is free access video
      locked: false,
      duration: "51:49",
    },
    {
      title: "Internal - External ( IE Matrix )",
      progress: 50,
      url: "https://www.youtube.com/watch?v=UMKi6akwGEQ",
      //  this is locked access video
      locked: false,
      duration: "60:01",
    },
    
  ],
  material: "/files/intro-to-nextjs.pdf",
  actionImage: {
    image: "/images/strategicpromo.jpg",
    url: "",
  },
  socialMediaCards: {
    whatsApp: {
      number: "+201008815007",
      message: "Hi, I'm interested in your Strategic Management Diploma",
    },
    telegram: {
      link: "https://t.me/imetsmedicalschool",
    },
    youTube: {
      link: "https://www.youtube.com/c/IMETSAcademyMedical",
    },
  },
};
