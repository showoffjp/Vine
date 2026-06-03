import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prison Ministry: A Practical Guide",
  description: "Jesus said “I was in prison and you came to me” (Matthew 25:36). Prison ministry is not a specialized calling for a few — it is one of the clearest expressions of the Gospel in the New Testament.",
  openGraph: {
    title: "Prison Ministry: A Practical Guide — Vine",
    description: "Jesus said “I was in prison and you came to me” (Matthew 25:36). Prison ministry is not a specialized calling for a few — it is one of the clearest expressions of the Gospel in the New Testament.",
    images: ["/api/og?title=Prison+Ministry%3A+A+Practical+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prison Ministry: A Practical Guide — Vine",
    description: "Jesus said “I was in prison and you came to me” (Matthew 25:36). Prison ministry is not a specialized calling for a few — it is one of the clearest expressions of the Gospel in the New Testament.",
    images: ["/api/og?title=Prison+Ministry%3A+A+Practical+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
