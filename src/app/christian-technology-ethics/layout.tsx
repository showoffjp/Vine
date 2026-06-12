import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Disciples: Christians and Technology Ethics | The Vine",
  description:
    "How Christians engage the digital world faithfully — technology, social media, AI, the attention economy, digital sabbath, and the formation of desire in a screen-saturated age.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
