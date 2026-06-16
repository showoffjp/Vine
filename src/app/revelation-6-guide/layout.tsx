import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revelation 6: The Seven Seals and the Four Horsemen of the Apocalypse | Vine",
  description:
    "A comprehensive study guide to Revelation 6 -- the Lamb opens the seven-sealed scroll, the four horsemen ride (white, red, black, pale), the martyrs cry under the altar, and cosmic signs herald the wrath of the Lamb.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
