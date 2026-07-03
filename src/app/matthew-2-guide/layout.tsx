import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Matthew 2: The Magi, the Flight to Egypt, and the Slaughter of the Innocents | Vine",
  description:
    "A study guide to Matthew chapter 2 - the wise men from the east who seek the newborn king, Herod's deceit and rage, the worship and gifts of gold, frankincense, and myrrh, the flight to Egypt, the slaughter of the innocents, the return to Nazareth, and Matthew's fulfillment of prophecy from Micah, Hosea, and Jeremiah.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
