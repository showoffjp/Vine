import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Zephaniah: A Comprehensive Study Guide | Vine",
  description: "Zephaniah announces the Day of the LORD in language of cosmic weight — and then pivots to one of the most astonishing verses in the Bible: 'The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing' (3:17).",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
