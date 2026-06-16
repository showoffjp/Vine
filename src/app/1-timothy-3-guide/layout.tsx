import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1 Timothy 3 Guide -- The Vine",
  description: "A deep study of 1 Timothy 3: Paul's qualifications for overseers and deacons, the church as the household of God, and the mystery of godliness hymn -- the earliest creedal summary of the gospel.",
};

export default function FirstTimothy3GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
