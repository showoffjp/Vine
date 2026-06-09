import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angelology: A Biblical Guide to Angels, Demons, and Spiritual Warfare | Vine",
  description:
    "A comprehensive guide to the biblical doctrine of angels and demons — the nature and roles of angels, the fall of Satan, the demonic realm, spiritual warfare (Ephesians 6), deliverance, and a sober biblical framework for engaging the supernatural.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
