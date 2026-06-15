import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mark 7 Chapter Guide - Tradition, the Heart, and Faith Beyond Israel | The Vine",
  description: "A deep study guide to Mark 7 covering the tradition of the elders and unwashed hands, the quotation of Isaiah 29:13, the korban controversy, Jesus declaring all foods clean and locating defilement in the heart, the faith of the Syrophoenician woman, and the healing of the deaf man with the word Ephphatha in the Decapolis.",
  openGraph: {
    title: "Mark 7 Chapter Guide - The Vine",
    description: "Explore Mark 7 - tradition versus the heart, all foods declared clean, the Syrophoenician woman, and Ephphatha in the Decapolis.",
    images: ["/api/og?title=Mark+7+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark 7 Chapter Guide - The Vine",
    description: "A deep study guide to Mark 7.",
    images: ["/api/og?title=Mark+7+Guide"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
