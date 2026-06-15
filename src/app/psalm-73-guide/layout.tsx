import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Psalm 73 Chapter Guide - Why Do the Wicked Prosper? Asaph's Wrestle | The Vine",
  description: "A deep study of Psalm 73 - Asaph's honest struggle with why the wicked prosper, his near stumbling, the perspective-shifting moment in God's sanctuary, and the profound declaration 'Whom have I in heaven but you?'",
  openGraph: { title: "Psalm 73 Guide - The Vine", description: "Asaph's wrestling with the prosperity of the wicked, the sanctuary perspective, and the surpassing worth of God.", images: ["/api/og?title=Psalm+73+Guide"] },
  twitter: { card: "summary_large_image", title: "Psalm 73 Guide - The Vine", description: "A deep study of Psalm 73 - Asaph's wrestle with envy, the sanctuary, and 'Whom have I in heaven but you?'", images: ["/api/og?title=Psalm+73+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
