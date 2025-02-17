export const GOOGLE_TAG_MANAGER = "GTM-XYZ";

export const metaTagsData: MetaTag[] = [
  {
    pages: ["default"], // Applies to all pages
    metaTags: `
      <meta name="robots" content="index, follow">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="language" content="English">
      <meta name="title" content="Home Page - Abdelrhman">
      <meta name="description" content="Welcome to the home page of the best developer ever.">
      <meta name="keywords" content="home, developer, frontend">
    `,
  },
  {
    pages: ["/", "/home"], // Applies to both the root path and /home
    metaTags: `
      <meta name="title" content="Home Page - Abdelrhman">
      <meta name="description" content="Welcome to the home page of the best developer ever.">
      <meta name="keywords" content="home, developer, frontend">
    `,
  },
  {
    pages: ["/about", "/about-us"], // Applies to both /about and /about-us
    metaTags: `
      <meta name="title" content="About Page - Abdelrhman">
      <meta name="description" content="Learn more about the best developer ever.">
      <meta name="keywords" content="about, developer, frontend">
    `,
  },
  {
    pages: ["/contact"], // Applies only to /contact
    metaTags: `
      <meta name="title" content="Contact Page - Abdelrhman">
      <meta name="description" content="Get in touch with the best developer ever.">
      <meta name="keywords" content="contact, developer, frontend">
    `,
  },
];
