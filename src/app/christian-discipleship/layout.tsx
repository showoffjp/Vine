import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Follow Me: The Way of Christian Discipleship | The Vine",
  description:
    "A guide to Christian discipleship — following Jesus as apprentice-companions, being formed into his likeness through relationship and practice, and making disciples who make disciples in the pattern of 2 Timothy 2:2.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
