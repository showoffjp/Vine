import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pentecostalism & the Charismatic Movement",
  description: "From Azusa Street to 700 million believers worldwide — Pentecostalism is the fastest-growing Christian movement in history, reshaping global Christianity through an emphasis on the immediate, prese…",
  openGraph: {
    title: "Pentecostalism & the Charismatic Movement — Vine",
    description: "From Azusa Street to 700 million believers worldwide — Pentecostalism is the fastest-growing Christian movement in history, reshaping global Christianity through an emphasis on the immediate, prese…",
    images: ["/api/og?title=Pentecostalism+%26+the+Charismatic+Movement"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pentecostalism & the Charismatic Movement — Vine",
    description: "From Azusa Street to 700 million believers worldwide — Pentecostalism is the fastest-growing Christian movement in history, reshaping global Christianity through an emphasis on the immediate, prese…",
    images: ["/api/og?title=Pentecostalism+%26+the+Charismatic+Movement"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
