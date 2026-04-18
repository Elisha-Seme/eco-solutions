import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pearl ECO Solutions | Facility Services, Nairobi Kenya",
  description:
    "Pearl ECO Solutions delivers professional cleaning, grounds maintenance, waste management, and integrated facility services for residential estates, corporates, malls, institutions, and industrial sites across Nairobi.",
  keywords: "facility services Nairobi, cleaning services Kenya, grounds maintenance, waste management, Pearl ECO Solutions, Pearl Cleaning Services, corporate cleaning, institutional cleaning, industrial cleaning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
