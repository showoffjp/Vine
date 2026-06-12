import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian End Times Guide",
  description:
    "Eschatology without sensationalism — the four millennial views (premillennialism, amillennialism, postmillennialism), the Rapture debate, Revelation as first-century document, the olivet discourse, and what Christians agree on: Jesus is coming back.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
