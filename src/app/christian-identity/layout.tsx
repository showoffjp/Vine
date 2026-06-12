import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Identity — Who You Are in Christ | The Vine",
  description:
    "A guide to Christian identity — exploring Paul's 'in Christ' language, new creation, adoption, belovedness, the three deadly lies, Neil Anderson's bondage-breaker framework, and the difference between identity rooted in calling versus performance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
