import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statement of Faith -- The Vine",
  description: "What The Vine believes: Jesus Christ is Lord and Savior, fully God and fully man, crucified for our sins and risen from the dead. Our full doctrinal statement.",
  openGraph: {
    title: "Statement of Faith -- The Vine",
    description: "The Vine's doctrinal commitments: the Trinity, the authority of Scripture, the substitutionary atonement of Christ, justification by faith alone, and the bodily resurrection.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
