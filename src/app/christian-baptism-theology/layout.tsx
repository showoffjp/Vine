import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Baptism Theology",
  description:
    "The theology of baptism — believer&rsquo;s baptism vs. infant baptism (paedobaptism), baptism by immersion vs. other modes, the meaning of baptism (sign/seal, dying and rising with Christ), baptism and regeneration (Baptist, Reformed, Catholic views), and what unites Christians across the divide.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
