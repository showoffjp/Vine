import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mark Chapter 5 Guide — The Vine",
  description: "A comprehensive chapter guide to Mark 5: the Gerasene demoniac and Legion, Jairus and his dying daughter, the bleeding woman who touched the hem of Jesus garment, Talitha cumi, and the power of faith over demons, disease, and death.",
};

export default function Mark5GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
