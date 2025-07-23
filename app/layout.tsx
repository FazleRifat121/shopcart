import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ShopCart",
  description:
    "ShopCart is a modern e-commerce platform built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="false" className="font-poppins antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
