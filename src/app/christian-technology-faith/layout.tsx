import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Faith and Technology | The Vine",
  description:
    "Faith in the digital age — a theology of technology (Jacques Ellul), social media and the Christian life, artificial intelligence and what it means to be human, screen addiction and digital sabbath, the image of God in a technological age, and how the church can engage technology wisely.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
