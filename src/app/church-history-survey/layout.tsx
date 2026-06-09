import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church History: A Survey | Vine",
  description:
    "A sweep of 2,000 years of church history — the apostolic age, the early church fathers, the ecumenical councils, the medieval church, the Reformation, the modern missions movement, and the global church today.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
