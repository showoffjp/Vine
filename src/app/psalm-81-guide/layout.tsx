import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 81 Study Guide -- Sing Aloud to God Our Strength",
  description: "Verse-by-verse study of Psalm 81 -- Asaph's festal song turned covenant indictment: the call to worship, God's gracious commands, Israel's stubborn refusal, and the longing 'Oh, that my people would listen to me.'",
  openGraph: {
    title: "Psalm 81 Study Guide -- Sing Aloud to God Our Strength",
    description: "Deep dive into Psalm 81: the Exodus deliverance recounted, the Meribah test, the tragic exchange of obedience for idolatry, and God's unfulfilled longing to bless his people.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
