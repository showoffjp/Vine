import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Mental Health | Vine",
  description:
    "A Christian theology of mental health — what the Bible says about the mind, emotions, and suffering; how faith and psychology relate; pastoral care for anxiety, depression, and trauma; and the church's responsibility to the mentally ill.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
