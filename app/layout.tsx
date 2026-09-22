import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { IntroProvider } from "@/components/providers/IntroProvider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SAIT — Students Association of Information Technology | SOE CUSAT",
  description:
    "The premier student association fostering engineering excellence, research, hackathons, and lifelong alumni mentorship at CUSAT.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <IntroProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </IntroProvider>
      </body>
    </html>
  );
}
