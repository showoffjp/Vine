import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Encouragement — The Ministry of Coming Alongside | The Vine",
  description:
    "A guide to biblical encouragement — paraklesis, the call alongside; Barnabas the son of encouragement; encouraging one another daily (Hebrews 3:13); and the practices and voices that build others up according to their need.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
