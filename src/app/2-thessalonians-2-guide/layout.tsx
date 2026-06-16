import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2 Thessalonians 2 Study Guide: The Man of Lawlessness and the Day of the Lord | The Vine",
  description:
    "A comprehensive verse-by-verse study of 2 Thessalonians 2 -- Paul's teaching on the man of lawlessness, the restrainer, the strong delusion, and the call to stand firm in apostolic traditions as the community waits for the day of the Lord.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
