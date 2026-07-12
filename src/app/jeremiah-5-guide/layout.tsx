import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 5 Guide &mdash; Search for One Just Person &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 5 &mdash; God's fruitless search for one righteous person in Jerusalem, the comfortable lie that 'He will do nothing,' and a people who have lost the fear of God and love the pleasant falsehood.",
  openGraph: {
    title: "Jeremiah 5 Guide &mdash; Search for One Just Person",
    description: "When the fear of God collapses, justice and truth collapse with it. The failed search for one righteous person drives us to the one truly Just One, Christ.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
