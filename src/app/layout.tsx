import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer/footer";
import { NotificationProvider } from "@/components/UI/NotificationComponent";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
