import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"


import "./globals.css";
import { cn } from "@/lib/utils"


import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Portfolio Webiste",
  description: "MERN Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased bg-black",
          fontSans.variable
        )}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
