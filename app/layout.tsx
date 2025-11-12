import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], });

export const metadata: Metadata = {
  title: "Blackwell Global",
  description: "Interview assignment for Blackwell Global",
  icons:{ icon: "/favicon.png" }
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        {/* Currently No Footer */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
