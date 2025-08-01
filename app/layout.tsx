import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body
          cz-shortcut-listen="false"
          className="font-poppins antialiased overflow-hidden"
        >
          <div className="flex flex-col min-h-screen">
            <main className="flex-1">
              <Navbar />
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
