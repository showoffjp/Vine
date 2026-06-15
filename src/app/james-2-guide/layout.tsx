import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "James 2 Chapter Guide -- Christian Study",
  description: "A deep guide to James 2 -- favoritism in the church, the royal law of love, mercy triumphing over judgment, faith without works is dead, and the examples of Abraham and Rahab justified by works.",
  openGraph: { title: "James 2 Chapter Guide -- Vine", description: "A guide to James 2 -- favoritism, the royal law of love, and the living faith that produces works.", images: ["/api/og?title=James+2+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "James 2 Chapter Guide -- Vine", description: "A deep guide to James 2 -- faith and works, favoritism, and mercy triumphing over judgment.", images: ["/api/og?title=James+2+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
