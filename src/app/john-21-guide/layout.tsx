import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "John 21 Guide - Christian Study",
  description: "A deep guide to John chapter 21 - the risen Jesus by the Sea of Tiberias, the miraculous catch of 153 fish, breakfast on the shore, the threefold restoration of Peter, the call to follow, and the testimony that closes the Gospel.",
  openGraph: { title: "John 21 Guide - Vine", description: "A guide to John 21 - the miraculous catch, the restoration of Peter, and the Gospel's close.", images: ["/api/og?title=John+21+Guide"] },
  twitter: { card: "summary_large_image", title: "John 21 Guide - Vine", description: "A deep guide to John chapter 21.", images: ["/api/og?title=John+21+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
