import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Samuel 1 Chapter Guide – David Mourns Saul and Jonathan | The Vine",
  description: "A deep guide to 2 Samuel 1 — the Amalekite’s report of Saul’s death, David’s grief and his execution of the messenger for claiming to kill the LORD’s anointed, and David’s magnificent Lament of the Bow over Saul and Jonathan: “How the mighty have fallen!”",
  openGraph: { title: "2 Samuel 1 Chapter Guide – David Mourns Saul and Jonathan | The Vine", description: "David mourns Saul and Jonathan, executes the Amalekite messenger, and composes the Lament of the Bow — a study of covenant love, sacred anointing, and grief.", images: ["/api/og?title=2+Samuel+1+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Samuel 1 Chapter Guide | The Vine", description: "David mourns Saul and Jonathan in 2 Samuel 1 — a guide to the Lament of the Bow and the theology of the LORD’s anointed.", images: ["/api/og?title=2+Samuel+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
