import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Revelation 21 Guide — A New Heaven and a New Earth",
  description: "A deep guide to Revelation 21 — a new heaven and a new earth, the holy city new Jerusalem coming down from God as a bride, God dwelling with his people and wiping away every tear, the jeweled city of pure gold with gates of pearl, and a city with no temple and no night, for the Lord God and the Lamb are its light.",
  openGraph: { title: "Revelation 21 Guide — Vine", description: "A guide to Revelation 21 — a new heaven and a new earth, the new Jerusalem, every tear wiped away, and the city whose light is the Lamb.", images: ["/api/og?title=Revelation+21+Guide"] },
  twitter: { card: "summary_large_image", title: "Revelation 21 Guide — Vine", description: "A deep guide to Revelation 21 — a new heaven and a new earth.", images: ["/api/og?title=Revelation+21+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
