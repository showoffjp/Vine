import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Guide to Grief",
  description: "Grief through a Christian lens — what the Bible says about mourning, the Psalms of lament, Jesus weeping at Lazarus's tomb, the stages of grief and their theological meaning, grief and resurrection hope, and how the church can walk alongside the bereaved.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
