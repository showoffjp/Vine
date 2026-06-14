import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Colossians 2 Guide — Christian Study",
  description: "A deep guide to Colossians 2 — Paul warns against philosophy and empty deceit, declares the fullness of deity in Christ, the cancellation of the record of debt nailed to the cross, disarming rulers and powers, and the warning against legalism and false asceticism. The substance belongs to Christ.",
  openGraph: { title: "Colossians 2 Guide — Vine", description: "A guide to Colossians 2 — fullness of deity in Christ, cancelled debt, shadow and substance, and warnings against legalism.", images: ["/api/og?title=Colossians+2+Guide"] },
  twitter: { card: "summary_large_image", title: "Colossians 2 Guide — Vine", description: "A deep guide to Colossians 2.", images: ["/api/og?title=Colossians+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
