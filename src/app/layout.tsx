"use client"

import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar currentPath={pathname}></Navbar>
        {children}
      </body>
    </html>
  );
}
