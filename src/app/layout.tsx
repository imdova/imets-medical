import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer/footer";
import { NotificationProvider } from "@/components/UI/NotificationComponent";
import MetaPixel from "@/components/meta/MetaPixel";
import DynamicMetaTags from "@/components/meta/DynamicMetaTags";
import { GoogleTagManager } from "@next/third-parties/google";
import { GOOGLE_TAG_MANAGER } from "@/constants/metaTags.data";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const watad = localFont({
  src: "./fonts/watad.otf",
  variable: "--font-watad",
  weight: "400",
});
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "IMETS Medical School",
    template: "%s | IMETS School of Business",
  },
  description:
    "Empowering future healthcare professionals through top-tier education and training programs.",
  openGraph: {
    title: "IMETS School of Business",
    description:
      "Join IMETS School of Business for specialized healthcare job training and business programs designed for career success.",
    url: baseUrl,
    siteName: "IMETS School of Business",
    images: [
      {
        url: `${baseUrl}/og.png`,
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
    title: "IMETS School of Business",
    description:
      "Advance your career with IMETS School of Business—offering premier healthcare job training and business programs.",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER} />
      <head>
        {/* Add the MetaPixel component with your Pixel ID */}
        <MetaPixel />
        <DynamicMetaTags />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${watad.variable} antialiased`}
      >
        <Header pathname="" />
        <NotificationProvider>
          <main className="pt-[70px]">{children}</main>
        </NotificationProvider>
        <Footer />
      </body>
    </html>
  );
}
