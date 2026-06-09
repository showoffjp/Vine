import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Book of Zechariah: A Comprehensive Study Guide | Vine",
  description: "Zechariah's eight night visions, the messianic prophecies fulfilled in stunning detail by Jesus (riding a donkey, 30 pieces of silver, the pierced one), 'Not by might, nor by power, but by my Spirit' (4:6), and the great apocalyptic vision of chapters 9–14. The most quoted OT book in the Passion narratives.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
