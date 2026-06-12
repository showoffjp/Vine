import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anchor for the Soul: Christian Hope | The Vine",
  description:
    "A guide to biblical hope as confident expectation — the resurrection as the ground of all Christian hope, the Spirit&apos;s down-payment, and living with the tension of the already and not-yet toward eternity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
