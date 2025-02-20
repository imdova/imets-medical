import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IMETS Medical School",
    short_name: "IMETS",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    description:
      "IMETS Medical School offers cutting-edge, specialized healthcare programs designed to empower the next generation of medical professionals.",
    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: `${baseUrl}/logo-wide.png`, // A wide screenshot for desktop
        type: "image/png",
        sizes: "1920x1080",
        form_factor: "wide", // Ensures it's recognized for desktop
      },
      {
        src: `${baseUrl}/logo-mobile.png`, // A mobile-friendly screenshot
        type: "image/png",
        sizes: "750x1334", // Standard mobile size
        form_factor: "narrow", // Ensures it's recognized for mobile
      },
    ],
    scope: "/",
    related_applications: [],
    prefer_related_applications: false,
  };
}
