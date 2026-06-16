import { Metadata } from "next";

export const metadata: Metadata = {
  title: "1 Peter 1: Living Hope, Holy Living, and the Preciousness of Christ | Vine",
  description:
    "A verse-by-verse study guide to 1 Peter 1 covering the living hope through resurrection, trials that refine faith like gold, the prophets who searched for our grace, the call to holiness, and the imperishable word that endures forever.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
