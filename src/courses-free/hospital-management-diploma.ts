export const hospital_management_diploma: FreeCourseType = {
  id: "5",
  slug: "Hospital-Management-Diploma",
  image: "/images/hospital management.webp",
  title: "Hospital Management Diploma",
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
  courseMaterials: [
    {
      title: "Introduction to Next.js",
      fileUrl: "/files/intro-to-nextjs.pdf",
      fileType: "pdf",
    },
    {
      title: "TypeScript Basics",
      fileUrl: "/files/typescript-basics.docx",
      fileType: "docx",
    },
    {
      title: "Tailwind CSS Guide",
      fileUrl: "/files/tailwind-guide.pdf",
      fileType: "pdf",
    },
  ],
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
