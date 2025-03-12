export const healthcare_quality_management_diploma: FreeCourseType = {
  id: "2",
  slug: "quality",
  image: "/images/quality diploma.webp",
  title: "Healthcare Quality Management Diploma",
  // هنا العنوان بالعربي
  arTitle: "هنا العنوان بالعربي",

  // lagging page url
  url: "/apply-quality-free",
  status: "BestSeller",
  rating: 5,
  startDate: "2022-01-01",
  instructor: {
    id: "1",
    name: "DR/ Mohamed Hegazy",
    image:
      "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
  },

  videos: [
    {
      title: "Introduction",
      progress: 10,
      url: "https://www.youtube.com/watch?v=XDuWyYxksXU&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS",
      locked: false,
      duration: "1:00",
    },
    {
      title: "Medical Terminology",
      progress: 30,
      url: "https://www.youtube.com/watch?v=jOUb09iiO20&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
      locked: false,
      duration: "4:00",
    },
    {
      title: "Medical Neuroscience",
      progress: 50,
      url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=3",
      locked: false,
      duration: "2:35",
    },
    {
      title: "Trauma on EMT",
      progress: 75,
      url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=4",
      locked: false,
      duration: "7:00",
    },
    {
      title: "Biomedical Visualization",
      progress: 100,
      url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=5",
      locked: false,
      duration: "11:00",
    },
  ],
  material: "/files/intro-to-nextjs.pdf",
  actionImage: {
    image: "/images/cic.webp",
    url: "/courses",
  },
  socialMediaCards: {
    whatsApp: {
      number: "+201008815007",
      message: "Hi, I'm interested in your course",
    },
    telegram: {
      link: "https://t.me/imetsacademymedical",
    },
    youTube: {
      link: "https://www.youtube.com/c/IMETSAcademyMedical",
    },
  },
};
