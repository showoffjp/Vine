import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retirement as a Christian Vocation",
  description: "Retirement is not the finish line — it is the beginning of a different chapter of fruitfulness. A Christian theology of aging and retirement asks: What does faithfulness look like in the final deca…",
  openGraph: {
    title: "Retirement as a Christian Vocation — Vine",
    description: "Retirement is not the finish line — it is the beginning of a different chapter of fruitfulness. A Christian theology of aging and retirement asks: What does faithfulness look like in the final deca…",
    images: ["/api/og?title=Retirement+as+a+Christian+Vocation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retirement as a Christian Vocation — Vine",
    description: "Retirement is not the finish line — it is the beginning of a different chapter of fruitfulness. A Christian theology of aging and retirement asks: What does faithfulness look like in the final deca…",
    images: ["/api/og?title=Retirement+as+a+Christian+Vocation"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
