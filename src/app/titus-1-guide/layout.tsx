import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Titus 1 Chapter Guide – Elder Qualifications and Sound Doctrine | The Vine",
  description: "A deep study of Titus 1 – Paul’s instructions on elder qualifications for the churches in Crete, the need for sound doctrine against false teachers, and the foundational link between right belief and godly living.",
  openGraph: { title: "Titus 1 Chapter Guide – Elder Qualifications and Sound Doctrine | The Vine", description: "Study Titus 1: Paul’s qualifications for elders, the call for sound doctrine in Crete, and confronting false teachers teaching Jewish myths and human commandments.", images: ["/api/og?title=Titus+1+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Titus 1 Chapter Guide | The Vine", description: "Paul’s instructions on elder qualifications, sound doctrine, and false teachers in Titus 1.", images: ["/api/og?title=Titus+1+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
