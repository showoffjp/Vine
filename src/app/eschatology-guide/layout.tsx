import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eschatology: A Comprehensive Guide to End Times | Vine",
  description:
    "A comprehensive guide to Christian eschatology — the four views on the millennium (premillennialism, postmillennialism, amillennialism), the rapture debate, Israel and the church, the final judgment, the new creation, and how last things shape present life.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
