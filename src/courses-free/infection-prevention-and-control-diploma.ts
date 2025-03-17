export const infection_prevention_and_control_diploma: FreeCourseType = {
  id: "4",
  slug: "ic",
  image: "/images/ic.jpg",
  title: "Infection Control Diploma",
  arTitle: "هنا العنوان بالعربي",
  status: "BestSeller",
  rating: 5,
  startDate: "2022-01-01",
  instructor: {
    id: "1",
    name: "DR/ ahmed Maggi",
    image:
      "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
  },
  url: "/apply-ic-free",

  videos: [
    {
      title: "Cleaning, Disinfection and Sterilization P1",
      progress: 10,
      url: "https://www.youtube.com/watch?v=uZeCCMTi6vI&t=5s",
      locked: false,
      duration: "23:01",
    },
    {
      title: "Cleaning, Disinfection and Sterilization P2",
      progress: 30,
      url: "https://www.youtube.com/watch?v=XCSeAGyFOeA&t",
      locked: false,
      duration: "22:05",
    },
    {
      title: "Cleaning, Disinfection and Sterilization P3",
      progress: 50,
      url: "https://www.youtube.com/watch?v=83wz2xMw-kc&t",
      locked: false,
      duration: "2:35",
    },
    
  ],
  material: "/files/intro-to-nextjs.pdf",
  actionImage: {
    image: "/images/icpromo.jpg",
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
