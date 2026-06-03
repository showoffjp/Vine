import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith & Science",
  description: "profile {searchQuery ? ` matching \"$ \"` : \"\"}",
  openGraph: {
    title: "Faith & Science — Vine",
    description: "profile {searchQuery ? ` matching \"$ \"` : \"\"}",
    images: ["/api/og?title=Faith+%26+Science"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith & Science — Vine",
    description: "profile {searchQuery ? ` matching \"$ \"` : \"\"}",
    images: ["/api/og?title=Faith+%26+Science"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
