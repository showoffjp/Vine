import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cessationism vs. Continuationism | Vine",
  description:
    "Have the miraculous spiritual gifts (tongues, prophecy, healing) ceased? A balanced biblical and historical guide to one of evangelicalism's most debated questions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
