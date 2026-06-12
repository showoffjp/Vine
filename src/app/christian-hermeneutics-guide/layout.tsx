import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Hermeneutics Guide",
  description:
    "The art and science of biblical interpretation — the grammatical-historical method, authorial intent, the sensus plenior, typology and allegory, the role of the Holy Spirit in interpretation, canonical context, and why hermeneutics is not just for scholars.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
