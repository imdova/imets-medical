import { images, reviews, Video } from "./../types/index";
import { accordionSlices, instractors, medulsAccordion } from "@/types";

export const Courses = [
  {
    id: "1",
    image:
      "https://img.freepik.com/free-photo/looking-camera-group-people-business-conference-modern-classroom-dayLecture_date_146671-16272.jpg?t=st=1739104096~exp=1739107696~hmac=41a76eca32211ace62c1d62a90303d2b79b26b092c7a70a234a11f62571ab6eb&w=996",
    title: "Healthcare Quality Management Diploma",
    rating: 3,
    instructor: {
      id: "1",
      name: "DR/ Carlos Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },
    lectures: 10,
    lecture_date: "1 Lecture-Weekly",
    lecture_Method: "Online-Zoom",
    students: 300,
    status: "BestSeller",
    type: "Healthcare Quality",
  },
  {
    id: "2",
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
    lectures: 13,
    lecture_date: "3 Lecture-Weekly",
    lecture_Method: "Online-Zoom",
    students: 400,
    status: "",
    type: "Infection Control",
  },
  {
    id: "3",
    image:
      "https://img.freepik.com/free-photo/medium-shot-young-people-recording-podcast_23-2149386529.jpg?t=st=1739104145~exp=1739107745~hmac=2fc96c73c86add85c536193ff63570c3fb88e3e17330a570994930f8cb399217&w=996",
    title: "Healthcare Quality Management Diploma",
    rating: 1,
    instructor: {
      id: "1",
      name: "DR/ Carlos Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },
    lectures: 10,
    lecture_date: "2 Lecture-Weekly",
    lecture_Method: "Online-Zoom",
    students: 300,
    status: "BestSeller",
    type: "Marketing Management",
  },
  {
    id: "4",
    image:
      "https://img.freepik.com/free-photo/couple-desk-working-together-from-home_23-2149208556.jpg?t=st=1739104160~exp=1739107760~hmac=056166b5c10b1c47cea18b69102388e34a4de670ff8d9d9eca150913639c59a2&w=996",
    title: "Healthcare Quality Management Diploma",
    rating: 2,
    instructor: {
      id: "1",
      name: "DR/ ahmed Maggi",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    },
    lectures: 50,
    lecture_date: "4 Lecture-Weekly",
    lecture_Method: "Online-Zoom",
    students: 600,
    status: "BestSeller",
    type: "Marketing Management",
  },
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
];

// Instructors data
export const InstructorsData: instractors[] = [
  {
    id: "1",
    name: "DR/Mohamed Farag",
    job: "Healthcare Quality Manager",
    image:
      "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    certification: "MBA - CPHQ - HMD",
    experience: 15,
    location: "Cairo, Eqypt",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 4,
  },
  {
    id: "2",
    name: "DR/Mohamed Ahmed",
    job: "Healthcare Quality Manager",
    image:
      "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
    certification: "MBA - CPHQ - HMD",
    experience: 10,
    location: "Asyut, Eqypt",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
  },
];

// videos grid data
export const videosGrid: Video[] = [
  {
    id: 1,
    thumbnail:
      "https://img.freepik.com/free-photo/portrait-schoolgirl-memphis-style-background_23-2148203809.jpg?t=st=1739460008~exp=1739463608~hmac=83fd4fea35c9d2409cc30128aa35751a4375b429c0bb42aca9732d987aa923e3&w=360",
    title: "Skyfall",
    author: "By Author Name",
    views: "10k Views",
    timeAgo: "1 hour ago",
    isFeatured: true,
  },
  {
    id: 2,
    thumbnail:
      "https://img.freepik.com/free-photo/portrait-schoolgirl-memphis-style-background_23-2148203809.jpg?t=st=1739460008~exp=1739463608~hmac=83fd4fea35c9d2409cc30128aa35751a4375b429c0bb42aca9732d987aa923e3&w=360",
    title: "",
    author: "DR/Mohamed Farag",
  },
  {
    id: 3,
    thumbnail:
      "https://img.freepik.com/free-photo/portrait-schoolgirl-memphis-style-background_23-2148203809.jpg?t=st=1739460008~exp=1739463608~hmac=83fd4fea35c9d2409cc30128aa35751a4375b429c0bb42aca9732d987aa923e3&w=360",
    title: "",
    author: "DR/Mohamed Farag",
  },
  {
    id: 4,
    thumbnail:
      "https://img.freepik.com/free-photo/portrait-schoolgirl-memphis-style-background_23-2148203809.jpg?t=st=1739460008~exp=1739463608~hmac=83fd4fea35c9d2409cc30128aa35751a4375b429c0bb42aca9732d987aa923e3&w=360",
    title: "",
    author: "DR/Mohamed Farag",
  },
  {
    id: 5,
    thumbnail:
      "https://img.freepik.com/free-photo/portrait-schoolgirl-memphis-style-background_23-2148203809.jpg?t=st=1739460008~exp=1739463608~hmac=83fd4fea35c9d2409cc30128aa35751a4375b429c0bb42aca9732d987aa923e3&w=360",
    title: "",
    author: "DR/Mohamed Farag",
  },
];

// Reviews Data
export const Reviews: reviews[] = [
  {
    id: "1",
    date: "Nov 7, 2023",
    rating: 5,
    user: {
      name: "mahmoud salman",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
      job: "Marketing Director",
    },
    content:
      "Sam.AI truly values its employees and their well-being. From flexible work hours to regular team-building activities, the company goes above and beyond to create a supportive and inclusive environment.",
  },
  {
    id: "2",
    date: "Nov 7, 2023",
    rating: 3,
    user: {
      name: "michael T",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
      job: "Marketing Director",
    },
    content:
      "Sam.AI truly values its employees and their well-being. From flexible work hours to regular team-building activities, the company goes above and beyond to create a supportive and inclusive environment.",
  },
  {
    id: "3",
    date: "Nov 7, 2023",
    rating: 4,
    user: {
      name: "Noha mamdoh",
      image:
        "https://img.freepik.com/free-photo/attractive-girl-portrait-white-shirt_158595-1446.jpg?t=st=1739104305~exp=1739107905~hmac=14da9b6d83c29cd03d523b3826c0a556d1048bc10e255d3ad2361c906a2d450d&w=740",
      job: "Marketing Director",
    },
    content:
      "Sam.AI truly values its employees and their well-being. From flexible work hours to regular team-building activities, the company goes above and beyond to create a supportive and inclusive environment.",
  },
];

// images grid one data
export const ImageGridOne: images[] = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
    isFeatured: true,
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
  },
  {
    id: 6,
    image:
      "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
  },
  {
    id: 7,
    image:
      "https://img.freepik.com/free-photo/woman-enjoying-movie-night_23-2149307313.jpg?t=st=1739465021~exp=1739468621~hmac=8c8b0cebd956ad913ec00ee18c41eb1440eefc42695a9da720158de9cf1fae2d&w=360",
  },
];
// images grid Tow data
export const ImageGridTwo: images[] = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
    isFeatured: true,
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
];

export const instractorsCardData = [
  {
    name: "Micheal Hammond",
    job: "Teacher",
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    name: "Cheryl Curry",
    job: "Teacher",
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    name: "Willie Diaz",
    job: "Teacher",
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    name: "Jimmy Sifuentes",
    job: "Teacher",
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    name: "Micheal Hammond",
    job: "Teacher",
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
  {
    name: "Micheal Hammond",
    job: "Teacher",
    image:
      "https://img.freepik.com/free-photo/cheerful-woman-doctor-looking-camera_23-2147648684.jpg?t=st=1739465295~exp=1739468895~hmac=631cd17f7d3ec5e92132f0dc0ace3cca4bbfb51ffdd985f4f7d161ca1bfd558a&w=740",
  },
];
