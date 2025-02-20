import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer/footer";
import { NotificationProvider } from "@/components/UI/NotificationComponent";
import MetaPixel from "@/components/meta/MetaPixel";
import { GoogleTagManager } from "@next/third-parties/google";
import { GOOGLE_TAG_MANAGER, metaTagsData } from "@/constants/metaTags.data";

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

export const metadata: Metadata = {
  ...metaTagsData.default,
  icons: {
    shortcut: "/favicon.ico",
    icon: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
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
