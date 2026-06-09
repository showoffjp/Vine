import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Religious Liberty: A Christian Perspective | Vine",
  description:
    "A theological guide to religious freedom — its biblical roots, historical development, the church-state relationship, and how Christians should think about religious liberty in a pluralist society.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
