import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Malachi: A Comprehensive Study Guide | Vine",
  description: "The last prophet before 400 years of silence. Malachi confronts a weary, cynical community with love: 'I have loved you, says the LORD' (1:2). The covenant lawsuit, tithing as trust, 'Return to me and I will return to you' (3:7), and the promise of the sun of righteousness rising with healing in its wings (4:2).",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
