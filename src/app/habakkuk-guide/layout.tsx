import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Habakkuk: A Comprehensive Study Guide | Vine",
  description: "Habakkuk is the prophet who argues with God. 'How long, O LORD?' — a raw complaint about unanswered injustice. Then comes the answer: 'the righteous shall live by his faith' (2:4). The book climaxes in Habakkuk 3:17–19: 'Though the fig tree does not blossom... yet I will rejoice in the LORD.'",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
