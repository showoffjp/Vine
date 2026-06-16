import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Romans 10: The Word of Faith and the Universal Call | Vine",
  description:
    "A study guide to Romans chapter 10 - zeal without knowledge, Christ as the end of the law, the nearness of the word of faith, the great confession that Jesus is Lord, the universal call for everyone who calls on the name of the Lord, and the chain of salvation that grounds missions and preaching.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
