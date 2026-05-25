import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vine — The Christian Everything Platform",
  description:
    "The world's first all-in-one Christian platform. Community, Bible tools, devotionals, life hacks, mental health, discussions, and more. Grow. Connect. Thrive in faith.",
  keywords:
    "Christian community, Bible, devotionals, Christian life hacks, Christian mental health, faith discussions, Christian resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ background: "#07070F", color: "#F2F2F8" }}
      >
        {children}
      </body>
    </html>
  );
}
