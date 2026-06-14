import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Isaiah 9 Guide — For Unto Us a Child Is Born — Christian Study",
  description: "A deep study of Isaiah 9 — the Messianic prophecy of the child born and son given who bears the names Wonderful Counselor, Mighty God, Everlasting Father, and Prince of Peace. Explore how this vision of light breaking into darkness was fulfilled in Jesus Christ and how his kingdom of justice and righteousness will increase without end.",
  openGraph: { title: "Isaiah 9 Guide — For Unto Us a Child Is Born — Vine", description: "Study Isaiah 9: the Messianic prophecy of the Wonderful Counselor, Mighty God, Everlasting Father, and Prince of Peace whose everlasting kingdom fulfills the Davidic covenant.", images: ["/api/og?title=Isaiah+9+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 9 Guide — For Unto Us a Child Is Born — Vine", description: "A deep guide to Isaiah 9 and the Messianic prophecy of the Wonderful Counselor and Prince of Peace.", images: ["/api/og?title=Isaiah+9+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
