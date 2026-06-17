import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zechariah 8 Study Guide &mdash; I Am Jealous for Zion with Great Jealousy",
  description: "A verse-by-verse guide to Zechariah 8 &mdash; God's passionate return to Jerusalem, the restoration of old and young in the city streets, and the promise that many nations will seek the LORD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
