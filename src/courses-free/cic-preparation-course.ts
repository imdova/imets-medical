export const cic_preparation_course: FreeCourseType = {
  id: "3",
  slug: "cic",
  image: "/images/cic.webp",
  title: "CIC Preparation Course",

  // هنا العنوان بالعربي
  arTitle: "البورد الأمريكي في مكافحة العدوي",

  // lagging page url
  url: "/apply-cic-free",

  status: "BestSeller",
  rating: 5,
  startDate: "2022-01-01",
  instructor: {
    id: "1",
    name: "",
    image: "",
  },

  /// the videos at  the free course
  videos: [
    {
      title: "Introduction to CIC Preparation Part 1",
      progress: 10,
      url: "https://www.youtube.com/watch?v=lLIeyzcJJYg&t=8s",
      // if locked make it true this is free access video
      locked: false,
      duration: "1:00",
    },
    {
      title: "Introduction to CIC Preparation Part 2",
      progress: 30,
      url: "https://www.youtube.com/watch?v=kkvEfRWuOXU&t=2s",
      // if locked make it true this is free access video
      locked: false,
      duration: "21:02",
    },
    {
      title: "Introduction to CIC Preparation Part 3",
      progress: 50,
      url: "https://www.youtube.com/watch?v=iR0SM4lmoyA&t=4s",
      //  this is locked access video
      locked: false,
      duration: "8:13",
    },
    {
      title: "Introduction to CIC Preparation Part 4",
      progress: 75,
      url: "https://www.youtube.com/watch?v=4jwFOwtDEw4",
      //  this is locked access video
      locked: false,
      duration: "25:33",
    },
    {
      title: "Introduction to CIC Preparation Part 4",
      progress: 75,
      url: "https://www.youtube.com/watch?v=4jwFOwtDEw4",
      //  this is locked access video
      locked: false,
      duration: "38:56",
    },
    {
      title: "Introduction to CIC Preparation Part 5",
      progress: 100,
      url: "https://www.youtube.com/watch?v=-ZRFDo25AYo&t=606s",
      //  this is locked access video
      locked: false,
      duration: "52:14",
    },
  ],
  actionImage: {
    image: "/images/free/cicdesign.jpg",
    url: "https://wa.me/201008815007",
  },
  material: "/files/intro-to-nextjs.pdf",
  socialMediaCards: {
    whatsApp: {
      number: "+201008815007",
      message: "Hi, I'm interested in your CIC Preparation course",
    },
    telegram: {
      link: "https://t.me/imetsmedicalschool",
    },
    youTube: {
      link: "https://www.youtube.com/IMETSAcademyMedical/?sub_confirmation=1",
    },
  },
};
