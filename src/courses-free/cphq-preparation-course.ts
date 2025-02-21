export const cphq_preparation_course: FreeCourseType = {
  id: "1",
  slug: "cphq-course",
  image: "/images/cphq.webp",
  title: "CPHQ Preparation Course",
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
      title: "Introduction to Healthcare Quality",
      progress: 10,
      url: "https://www.youtube.com/watch?v=SV3wK4hYwbc",
      // if locked make it true this is free access video
      locked: false,
      duration: "1:00",
    },
    {
      title: "Healthcare Quality Aspects",
      progress: 30,
      url: "https://www.youtube.com/watch?v=kNitOV_x4dI",
      // if locked make it true this is free access video
      locked: false,
      duration: "4:00",
    },
    {
      title: "Healthcare Quality Dimensions",
      progress: 50,
      url: "https://www.youtube.com/watch?v=qcMEQ_ZhtXk&t=9s",
      //  this is locked access video
      locked: false,
      duration: "2:35",
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
