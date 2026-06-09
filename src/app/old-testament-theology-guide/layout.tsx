import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Old Testament Theology: A Comprehensive Guide | Vine",
  description:
    "A comprehensive guide to Old Testament theology — how to read the OT as Christian Scripture, the progressive revelation of God, covenant theology in the OT, typology, the law for Christians, the Psalms, and the prophets.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
