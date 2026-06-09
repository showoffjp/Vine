import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Beauty & the Arts | Vine",
  description:
    "A Christian theology of beauty, creativity, and the arts — from the Creator God who made a beautiful world to the image-bearers who make beautiful things. How art, music, and creativity reflect and glorify God.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
