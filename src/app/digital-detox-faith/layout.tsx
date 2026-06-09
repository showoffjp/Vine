import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Digital Detox & Faith | Vine",
  description: "Biblical and practical guidance for Christians on fasting from phones, social media, and screens — reclaiming attention for God in a distracted age.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
