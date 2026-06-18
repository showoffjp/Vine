import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zechariah 1 Study Guide &mdash; Return to Me and I Will Return to You",
  description: "A verse-by-verse guide to Zechariah 1 &mdash; the call to return unlike the fathers who did not heed, the night visions of the man among the myrtle trees, the angelic intercession, and the promise of the rebuilding of Jerusalem.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
