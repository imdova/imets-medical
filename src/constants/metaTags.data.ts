import { Metadata } from "next";

export const GOOGLE_TAG_MANAGER = "GTM-5HC2Q7CD";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const metaTagsData: Record<MetaPageType, Metadata> = {
  default: {
    title: {
      default:
        "IMETS Medical School | Revolutionizing Healthcare Education with Innovative Programs",
      template: "%s | IMETS Medical School",
    },
    description:
      "IMETS Medical School offers cutting-edge, specialized healthcare programs designed to empower the next generation of medical professionals. Join us to excel in modern medicine with excellence, innovation, and compassion.",
    openGraph: {
      title: "IMETS Medical School",
      description:
        "Join IMETS Medical School for specialized healthcare job training and business programs designed for career success.",
      url: baseUrl,
      siteName: "IMETS Medical School",
      images: [
        {
          url: `${baseUrl}/logo.png`,
          width: 1920,
          height: 1080,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: "IMETS Medical School",
      description:
        "Advance your career with IMETS Medical School offering premier healthcare job training and business programs.",
      card: "summary_large_image",
    },
  },
  about: {
    title:
      "IMETS Medical School | Revolutionizing Healthcare Education with Innovative Programs",
    description:
      "IMETS Medical School offers cutting-edge, specialized healthcare programs designed to empower the next generation of medical professionals. Join us to excel in modern medicine with excellence, innovation, and compassion.",
    keywords: "",
  },
  blog: {
    title: {
      default:
        "IMETS Medical School | Revolutionizing Healthcare Education with Innovative Programs",
      template: "%s | IMETS Medical School",
    },
    description:
      "IMETS Medical School offers cutting-edge, specialized healthcare programs designed to empower the next generation of medical professionals. Join us to excel in modern medicine with excellence, innovation, and compassion.",
    keywords: "",
  },
  courses: {
    title: {
      default:
        "IMETS Medical School | Revolutionizing Healthcare Education with Innovative Programs",
      template: "%s | IMETS Medical School",
    },
    description:
      "IMETS Medical School offers cutting-edge, specialized healthcare programs designed to empower the next generation of medical professionals. Join us to excel in modern medicine with excellence, innovation, and compassion.",
    keywords: "",
  },
};
