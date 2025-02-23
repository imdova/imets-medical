export const cphq_preparation_course: FreeCourseType = {
  id: "1",
  slug: "cphq",
  image: "/images/cphq.webp",
  title: "CPHQ Preparation Course",
  // هنا العنوان بالعربي
  arTitle: "البورد الأمريكي في جودة الرعاية الصحية - CPHQ",

  // lagging page url
  url: "/apply-cphq-free",
  status: "BestSeller",
  rating: 5,
  startDate: "",

  /// instructor data
  instructor: {
    id: "1",
    name: "DR/ Sara Abdulla",
    image: "/images/cicPrep.webp",
  },

  /// the videos at  the free course
  videos: [
    {
      title: "Introduction to Healthcare Quality",
      progress: 10,
      url: "https://www.youtube.com/watch?v=SV3wK4hYwbc",
      // if locked make it true this is free access video
      locked: false,
      duration: "33:32",
    },
    {
      title: "Healthcare Quality Aspects",
      progress: 30,
      url: "https://www.youtube.com/watch?v=kNitOV_x4dI",
      // if locked make it true this is free access video
      locked: false,
      duration: "7:46",
    },
    {
      title: "Healthcare Quality Dimensions",
      progress: 50,
      url: "https://www.youtube.com/watch?v=qcMEQ_ZhtXk&t=9s",
      //  this is locked access video
      locked: false,
      duration: "28:01",
    },
  ],
  material: "https://drive.google.com/file/d/11OOo_EJNYzdSUOSsIRwb5KBAP6XJ6NrC/view?usp=sharing",
  actionImage: {
    image: "/images/cphqdesign.webp",
    url: "/wa.me/201008815007",
  },
  socialMediaCards: {
    whatsApp: {
      number: "+201008815007",
      message: "Hi, I'm interested in your CPHQ course",
    },
    telegram: {
      link: "https://t.me/imetsmedicalschool",
    },
    youTube: {
      link: "https://www.youtube.com/IMETSAcademyMedical/?sub_confirmation=1",
    },
  },
};
