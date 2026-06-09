import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discipleship: A Comprehensive Guide to Making and Being a Disciple | Vine",
  description:
    "A comprehensive guide to Christian discipleship — what it means to follow Jesus, the theology of disciple-making, one-on-one discipleship, small group discipleship, the cost of discipleship (Bonhoeffer), multiplying disciples, and how to structure a life of intentional growth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
