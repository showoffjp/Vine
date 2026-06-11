import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Community: Theology, Practice, and the One Anothers | Vine",
  description:
    "A guide to Christian community — the Trinity as model, the one another commands, the danger of pseudo-community, the church as visible witness, and practical steps toward genuine depth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
