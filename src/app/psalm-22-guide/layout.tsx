import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Psalm 22 Guide — The Messianic Psalm of Suffering — Christian Study",
  description: "A deep study of Psalm 22 — the messianic psalm David wrote that became a precise prophecy of Christ's crucifixion, tracing the journey from the anguished cry 'My God, my God, why have you forsaken me?' through vivid prophetic details of the cross, to a triumphant declaration of God's faithfulness and a vision of all nations turning to worship the Lord.",
  openGraph: { title: "Psalm 22 Guide — The Vine", description: "Study Psalm 22 — David's messianic prophecy of the crucifixion, from desolation to praise.", images: ["/api/og?title=Psalm+22+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 22 Guide — The Vine", description: "A deep guide to Psalm 22 as messianic prophecy of Christ's suffering and resurrection praise.", images: ["/api/og?title=Psalm+22+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
