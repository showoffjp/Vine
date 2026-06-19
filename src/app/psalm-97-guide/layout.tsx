import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 97 Study Guide &mdash; The LORD Reigns, Let the Earth Rejoice",
  description: "A verse-by-verse guide to Psalm 97 &mdash; the LORD enthroned over all the earth, righteousness and justice the foundation of his throne, the shaming of idols, and light sown for the righteous.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
