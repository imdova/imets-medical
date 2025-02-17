export const freeCoursesList: FreeCourseType[] = [
  /// start course
  {
    id: "1",
    slug: "cphq-preparation-course",
    image: "/images/cicPrep.webp",
    title: "CPHQ Preparation Course",
    rating: 5,
    /// instructor data
    instructor: {
      id: "1",
      name: "DR/ Carlos Maggi",
      image: "/images/cicPrep.webp",
    },
    /// all questions at the free course page
    questions: [
      {
        id: "1",
        user: {
          name: "Mohamed Farag",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "What is the best way to learn Next.js?",
        /// all replies to the question by Mohamed Farag at the free course page
        replies: [
          {
            id: "2-1",
            user: {
              name: "Emily Brown",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Utility classes save time!",
            timestamp: 17,
          },
          {
            id: "2-2",
            user: {
              name: "Mike Johnson",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Less custom CSS needed.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
      {
        id: "2",
        user: {
          name: "Ahmed Samir",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "How does Tailwind CSS improve development speed?",
        replies: [
          {
            id: "1-1",
            user: {
              name: "John Doe",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Start with the official docs!",
            timestamp: 17,
          },
          {
            id: "1-2",
            user: {
              name: "Jane Smith",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Follow some YouTube tutorials.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
    ],
    /// the videos at  the free course
    videos: [
      {
        title: "Introduction",
        progress: 10,
        url: "https://www.youtube.com/watch?v=XDuWyYxksXU&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS",
        // if locked make it true this is free access video
        locked: false,
        duration: "1:00",
      },
      {
        title: "Medical Terminology",
        progress: 30,
        url: "https://www.youtube.com/watch?v=jOUb09iiO20&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=2",
        // if locked make it true this is free access video
        locked: false,
        duration: "4:00",
      },
      {
        title: "Medical Neuroscience",
        progress: 50,
        url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=3",
        //  this is locked access video
        locked: true,
        duration: "2:35",
      },
      {
        title: "Trauma on EMT",
        progress: 75,
        url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=4",
        //  this is locked access video
        locked: true,
        duration: "7:00",
      },
      {
        title: "Biomedical Visualization",
        progress: 100,
        url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=5",
        //  this is locked access video
        locked: true,
        duration: "11:00",
      },
    ],
    startDate: "2022-01-01",
  },
  /// end course
  ///
  /// start course
  {
    id: "2",
    slug: "healthcare-quality-management-diploma",
    image:
      "https://img.freepik.com/free-photo/medium-shot-woman-with-headphones-studio_23-2149386582.jpg?t=st=1739104131~exp=1739107731~hmac=74ef27066855e737fb86d6f780ee083fcbeb8a2e71eeaee261342682acf322e1&w=996",
    title: "Healthcare Quality Management Diploma",
    rating: 5,
    instructor: {
      id: "1",
      name: "DR/ Carlos Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },

    questions: [
      {
        id: "1",
        user: {
          name: "Mohamed Farag",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "What is the best way to learn Next.js?",
        replies: [
          {
            id: "2-1",
            user: {
              name: "Emily Brown",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Utility classes save time!",
            timestamp: 17,
          },
          {
            id: "2-2",
            user: {
              name: "Mike Johnson",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Less custom CSS needed.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
      {
        id: "2",
        user: {
          name: "Ahmed Samir",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "How does Tailwind CSS improve development speed?",
        replies: [
          {
            id: "1-1",
            user: {
              name: "John Doe",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Start with the official docs!",
            timestamp: 17,
          },
          {
            id: "1-2",
            user: {
              name: "Jane Smith",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Follow some YouTube tutorials.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
    ],
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
        locked: true,
        duration: "2:35",
      },
      {
        title: "Trauma on EMT",
        progress: 75,
        url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=4",
        locked: true,
        duration: "7:00",
      },
      {
        title: "Biomedical Visualization",
        progress: 100,
        url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=5",
        locked: true,
        duration: "11:00",
      },
    ],
    startDate: "2022-01-01",
  },
  /// end course
  ///
  /// start course
  {
    id: "3",
    slug: "cic-preparation-course",
    image:
      "https://img.freepik.com/free-photo/medium-shot-young-people-recording-podcast_23-2149386529.jpg?t=st=1739104145~exp=1739107745~hmac=2fc96c73c86add85c536193ff63570c3fb88e3e17330a570994930f8cb399217&w=996",
    title: "CIC Preparation Course",
    rating: 5,
    instructor: {
      id: "1",
      name: "DR/ Carlos Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },

    questions: [
      {
        id: "1",
        user: {
          name: "Mohamed Farag",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "What is the best way to learn Next.js?",
        replies: [
          {
            id: "2-1",
            user: {
              name: "Emily Brown",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Utility classes save time!",
            timestamp: 17,
          },
          {
            id: "2-2",
            user: {
              name: "Mike Johnson",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Less custom CSS needed.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
      {
        id: "2",
        user: {
          name: "Ahmed Samir",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "How does Tailwind CSS improve development speed?",
        replies: [
          {
            id: "1-1",
            user: {
              name: "John Doe",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Start with the official docs!",
            timestamp: 17,
          },
          {
            id: "1-2",
            user: {
              name: "Jane Smith",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Follow some YouTube tutorials.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
    ],
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
        locked: true,
        duration: "2:35",
      },
      {
        title: "Trauma on EMT",
        progress: 75,
        url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=4",
        locked: true,
        duration: "7:00",
      },
      {
        title: "Biomedical Visualization",
        progress: 100,
        url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=5",
        locked: true,
        duration: "11:00",
      },
    ],
    startDate: "2022-01-01",
  },
  /// end course
  ///
  /// start course
  {
    id: "4",
    slug: "infection-prevention-and-control-diploma",
    image:
      "https://img.freepik.com/free-photo/couple-desk-working-together-from-home_23-2149208556.jpg?t=st=1739104160~exp=1739107760~hmac=056166b5c10b1c47cea18b69102388e34a4de670ff8d9d9eca150913639c59a2&w=996",
    title: "Infection Prevention and Control Diploma",
    rating: 5,
    instructor: {
      id: "1",
      name: "DR/ ahmed Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },

    questions: [
      {
        id: "1",
        user: {
          name: "Mohamed Farag",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "What is the best way to learn Next.js?",
        replies: [
          {
            id: "2-1",
            user: {
              name: "Emily Brown",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Utility classes save time!",
            timestamp: 17,
          },
          {
            id: "2-2",
            user: {
              name: "Mike Johnson",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Less custom CSS needed.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
      {
        id: "2",
        user: {
          name: "Ahmed Samir",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "How does Tailwind CSS improve development speed?",
        replies: [
          {
            id: "1-1",
            user: {
              name: "John Doe",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Start with the official docs!",
            timestamp: 17,
          },
          {
            id: "1-2",
            user: {
              name: "Jane Smith",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Follow some YouTube tutorials.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
    ],
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
        locked: true,
        duration: "2:35",
      },
      {
        title: "Trauma on EMT",
        progress: 75,
        url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=4",
        locked: true,
        duration: "7:00",
      },
      {
        title: "Biomedical Visualization",
        progress: 100,
        url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=5",
        locked: true,
        duration: "11:00",
      },
    ],
    startDate: "2022-01-01",
  },
  /// end course
  ///
  /// start course
  {
    id: "5",
    slug: "hospital-management-diploma",
    image:
      "https://img.freepik.com/free-photo/couple-desk-working-together-from-home_23-2149208556.jpg?t=st=1739104160~exp=1739107760~hmac=056166b5c10b1c47cea18b69102388e34a4de670ff8d9d9eca150913639c59a2&w=996",
    title: "Hospital Management Diploma",
    rating: 5,
    instructor: {
      id: "5",
      name: "DR/ ahmed Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },

    questions: [
      {
        id: "1",
        user: {
          name: "Mohamed Farag",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "What is the best way to learn Next.js?",
        replies: [
          {
            id: "2-1",
            user: {
              name: "Emily Brown",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Utility classes save time!",
            timestamp: 17,
          },
          {
            id: "2-2",
            user: {
              name: "Mike Johnson",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Less custom CSS needed.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
      {
        id: "2",
        user: {
          name: "Ahmed Samir",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "How does Tailwind CSS improve development speed?",
        replies: [
          {
            id: "1-1",
            user: {
              name: "John Doe",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Start with the official docs!",
            timestamp: 17,
          },
          {
            id: "1-2",
            user: {
              name: "Jane Smith",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Follow some YouTube tutorials.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
    ],
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
        locked: true,
        duration: "2:35",
      },
      {
        title: "Trauma on EMT",
        progress: 75,
        url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=4",
        locked: true,
        duration: "7:00",
      },
      {
        title: "Biomedical Visualization",
        progress: 100,
        url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=5",
        locked: true,
        duration: "11:00",
      },
    ],
    startDate: "2022-01-01",
  },
  /// end course
  ///
  /// start course
  {
    id: "6",
    slug: "healthcare-marketing-management-diploma",
    image:
      "https://img.freepik.com/free-photo/couple-desk-working-together-from-home_23-2149208556.jpg?t=st=1739104160~exp=1739107760~hmac=056166b5c10b1c47cea18b69102388e34a4de670ff8d9d9eca150913639c59a2&w=996",
    title: "Healthcare Marketing Management Diploma",
    rating: 2,
    instructor: {
      id: "6",
      name: "DR/ ahmed Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },

    questions: [
      {
        id: "1",
        user: {
          name: "Mohamed Farag",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "What is the best way to learn Next.js?",
        replies: [
          {
            id: "2-1",
            user: {
              name: "Emily Brown",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Utility classes save time!",
            timestamp: 17,
          },
          {
            id: "2-2",
            user: {
              name: "Mike Johnson",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Less custom CSS needed.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
      {
        id: "2",
        user: {
          name: "Ahmed Samir",
          image:
            "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
        },
        content: "How does Tailwind CSS improve development speed?",
        replies: [
          {
            id: "1-1",
            user: {
              name: "John Doe",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Start with the official docs!",
            timestamp: 17,
          },
          {
            id: "1-2",
            user: {
              name: "Jane Smith",
              image:
                "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
            },
            content: "Follow some YouTube tutorials.",
            timestamp: 17,
          },
        ],
        timestamp: 17,
      },
    ],
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
        locked: true,
        duration: "2:35",
      },
      {
        title: "Trauma on EMT",
        progress: 75,
        url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=4",
        locked: true,
        duration: "7:00",
      },
      {
        title: "Biomedical Visualization",
        progress: 100,
        url: "https://www.youtube.com/watch?v=R-Hu5rdn-vc&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&index=5",
        locked: true,
        duration: "11:00",
      },
    ],
    startDate: "2022-01-01",
  },
  /// end course
];
// Accordion Data slice 1
export const accordionSliceOne: accordionSlices[] = [
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Lorem Ipsum has been the industry's standard dummy",
    content:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  },
  {
    title: "when an unknown printer took a galley",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "containing Lorem Ipsum passages,",
    content:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  },
];
// Accordion Data slice 1
export const accordionSliceTwo: accordionSlices[] = [
  {
    title: "QualityProfessionals",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Medical and Nursing Directors",
    content:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  },
  {
    title: "Doctors",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Pharmacists,",
    content:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  },
  {
    title: "Nursing Specialists,",
    content:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  },
];
// Accordion Data slice 1
export const accordionSliceThree: accordionSlices[] = [
  {
    title: "professionals interested in managerial or quality jobs",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Healthcare Administrators and Managers",
    content:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  },
  {
    title: "Risk Managers",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "containMedical Technologistsing Lorem",
    content:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
  },
  {
    title: "containMedical Technologistsing Lorem",
    content: "CEOs and Directors",
  },
];

// Meduls Accordion Data
export const modulesData: medulsAccordion[] = [
  {
    id: 1,
    title: "Healthcare Quality Concepts",
    lessons: [
      { id: 1, title: "Quality Leadership and Integration", url: "#" },
      { id: 2, title: "Patient Safety", url: "#" },
      {
        id: 3,
        title: "Performance and Process Improvement",
        url: "#",
        preview: true,
      },
    ],
  },
  {
    id: 2,
    title: "Quality Leadership and Integration",
    lessons: [
      {
        id: 1,
        title: "Population Health and Care Transitions",
        url: "#",
        preview: true,
      },
      { id: 2, title: "Regulatory and Accreditation", url: "#" },
      {
        id: 3,
        title: "Health Data Analytics",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Patient Safety",
    lessons: [
      {
        id: 1,
        title: "Population Health and Care Transitions",
        url: "#",
        preview: true,
      },
      { id: 2, title: "Regulatory and Accreditation", url: "#" },
      {
        id: 3,
        title: "Health Data Analytics",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Performance and Process Improvement",
    lessons: [
      {
        id: 1,
        title: "Population Health and Care Transitions",
        url: "#",
        preview: true,
      },
      { id: 2, title: "Regulatory and Accreditation", url: "#" },
      {
        id: 3,
        title: "Health Data Analytics",
        url: "#",
      },
    ],
  },
  {
    id: 5,
    title: "Quality Review and Accountability",
    lessons: [
      {
        id: 1,
        title: "Population Health and Care Transitions",
        url: "#",
        preview: true,
      },
      { id: 2, title: "Regulatory and Accreditation", url: "#" },
      {
        id: 3,
        title: "Health Data Analytics",
        url: "#",
      },
    ],
  },
  {
    id: 6,
    title: "Population Health and Care Transitions",
    lessons: [
      {
        id: 1,
        title: "Population Health and Care Transitions",
        url: "#",
        preview: true,
      },
      { id: 2, title: "Regulatory and Accreditation", url: "#" },
      {
        id: 3,
        title: "Health Data Analytics",
        url: "#",
      },
    ],
  },
  {
    id: 7,
    title: "Regulatory and Accreditation",
    lessons: [
      {
        id: 1,
        title: "Population Health and Care Transitions",
        url: "#",
        preview: true,
      },
      { id: 2, title: "Regulatory and Accreditation", url: "#" },
      {
        id: 3,
        title: "Health Data Analytics",
        url: "#",
      },
    ],
  },
  {
    id: 8,
    title: "Health Data Analytics",
    lessons: [
      {
        id: 1,
        title: "Population Health and Care Transitions",
        url: "#",
        preview: true,
      },
      { id: 2, title: "Regulatory and Accreditation", url: "#" },
      {
        id: 3,
        title: "Health Data Analytics",
        url: "#",
      },
    ],
  },
];
