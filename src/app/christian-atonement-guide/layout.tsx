import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Atonement Guide",
  description:
    "The theories of atonement — penal substitution, Christus Victor, moral influence, ransom theory, scapegoat (Girard), governmental, and the kaleidoscope approach. What the cross actually accomplished and why it matters.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
