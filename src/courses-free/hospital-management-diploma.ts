export const hospital_management_diploma: FreeCourseType = {
  id: "5",
  slug: "hosp",
  image: "/images/hospital management.webp",
  title: "Hospital Management Diploma",
  // هنا العنوان بالعربي
  arTitle: "هنا العنوان بالعربي",

  // lagging page url
  url: "/apply-hosp-free",
  status: "BestSeller",
  rating: 5,
  startDate: "2022-01-01",
  instructor: {
    id: "5",
    name: "DR/ Hany Eid",
    image:
      "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
  },

  videos: [
    {
      title: "HR Management",
      progress: 10,
      url: "https://www.youtube.com/watch?v=h31moKF7_m8&t=4s",
      locked: false,
      duration: "31:11",
    },
    {
      title: "Strategic Management",
      progress: 30,
      url: "https://www.youtube.com/watch?v=q4doMg7_bQQ&t=1s",
      locked: false,
      duration: "40:34",
    },
    {
      title: "Marketing Management",
      progress: 50,
      url: "https://www.youtube.com/watch?v=5N4M7TBlXkg&t=49s",
      locked: false,
      duration: "48:53",
    },
    {
      title: "Financial Management",
      progress: 75,
      url: "https://www.youtube.com/watch?v=QkkJACvS-2A&t=1s",
      locked: false,
      duration: "14:22",
    },
    {
      title: "Infection Control",
      progress: 100,
      url: "https://www.youtube.com/watch?v=uZeCCMTi6vI&t=5s",
      locked: false,
      duration: "23:02",
    },
  ],
  material: "/files/intro-to-nextjs.pdf",
  actionImage: {
    image: "/images/hosppromo.jpg",
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
