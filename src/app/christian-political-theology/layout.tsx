import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Political Theology",
  description: "The theology of politics — two kingdoms doctrine (Luther), Christ and culture (H. Richard Niebuhr), the church&rsquo;s relationship to the state (Romans 13 and Revelation 13), Christian nationalism critique, the common good, and how Christians engage politics without losing their prophetic voice.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
