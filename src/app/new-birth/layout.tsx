import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The New Birth",
  description: "Regeneration — being born again — is the Spirit's sovereign work of giving new life to spiritually dead souls. It is the beginning of everything: faith, repentance, and new creation life in Christ.",
  openGraph: {
    title: "The New Birth — Vine",
    description: "Regeneration — being born again — is the Spirit's sovereign work of giving new life to spiritually dead souls. It is the beginning of everything: faith, repentance, and new creation life in Christ.",
    images: ["/api/og?title=The+New+Birth"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The New Birth — Vine",
    description: "Regeneration — being born again — is the Spirit's sovereign work of giving new life to spiritually dead souls. It is the beginning of everything: faith, repentance, and new creation life in Christ.",
    images: ["/api/og?title=The+New+Birth"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
