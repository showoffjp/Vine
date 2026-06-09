import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 & 2 Thessalonians: A Comprehensive Study Guide | Vine",
  description: "Paul's earliest letters — the Thessalonian church's faith under persecution, the return of Christ (the parousia), 1 Thess 4:13-18, the Day of the Lord, the man of lawlessness in 2 Thess 2, and working faithfully while waiting.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
