import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Revelation: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to Revelation — apocalyptic literature, the seven churches, the Lamb on the throne, the four horsemen, the great tribulation, the millennium, the new Jerusalem, and how to read Revelation today.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
