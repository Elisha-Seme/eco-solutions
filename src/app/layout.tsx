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
  title: "ECO Solutions LTD | Social Enterprise, Nairobi Kenya",
  description:
    "ECO Solutions LTD is a Nairobi-based social enterprise delivering professional cleaning, grounds maintenance, waste management, and facility services. We create formal local employment while raising community living standards. Formerly Pearl Cleaning Services.",
  keywords: "social enterprise Kenya, cleaning services Nairobi, facilities management, grounds maintenance, waste management, ECO Solutions, Pearl Cleaning Services, community employment, impact investment Kenya",
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
