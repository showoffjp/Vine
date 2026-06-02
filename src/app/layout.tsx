import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond, Jost } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07070F",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vine.community"),
  title: {
    default: "Vine — The Christian Everything Platform",
    template: "%s | Vine",
  },
  description:
    "The world's first all-in-one Christian platform. Community, Bible tools, devotionals, life hacks, mental health, discussions, and more. Grow. Connect. Thrive in faith.",
  keywords: [
    "Christian community",
    "Bible study",
    "devotionals",
    "Christian life hacks",
    "Christian mental health",
    "faith discussions",
    "Christian resources",
    "prayer wall",
    "worship",
    "apologetics",
  ],
  authors: [{ name: "Vine" }],
  creator: "Vine",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vine.community",
    siteName: "Vine",
    title: "Vine — Grow. Connect. Thrive in Faith.",
    description:
      "The world's first all-in-one Christian platform. Discussions, Bible tools, devotionals, life hacks, mental health, prayer, and more.",
    images: [
      {
        url: "/api/og?title=Grow.+Connect.+Thrive+in+Faith.",
        width: 1200,
        height: 630,
        alt: "Vine — The Christian Everything Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vine — Grow. Connect. Thrive in Faith.",
    description:
      "The world's first all-in-one Christian platform. Join thousands of believers worldwide.",
    images: ["/api/og?title=Grow.+Connect.+Thrive+in+Faith."],
    creator: "@vinecommunity",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ background: "#07070F", color: "#F2F2F8" }}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
