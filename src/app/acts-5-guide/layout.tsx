import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acts 5 Guide - Holiness, Boldness, and Joy - Christian Study",
  description: "A deep study of Acts 5 - the deadly hypocrisy of Ananias and Sapphira and the great fear that fell upon the church, the lie to the Holy Spirit, the power of the apostolic witness and Peter's shadow healing the sick, the angelic deliverance from prison, the great declaration that we must obey God rather than men, Gamaliel's counsel, and the apostles rejoicing that they were counted worthy to suffer dishonor for the name of Jesus.",
  openGraph: { title: "Acts 5 Guide - Holiness, Boldness, and Joy - Vine", description: "Explore Acts 5 - Ananias and Sapphira, the fear of God in the early church, the bold apostolic witness, obeying God rather than men, and rejoicing in suffering for Christ.", images: ["/api/og?title=Acts+5+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 5 Guide - Holiness, Boldness, and Joy - Vine", description: "A deep study of Acts 5 - Ananias and Sapphira, the apostles' bold witness, and the joy of suffering for the name of Jesus.", images: ["/api/og?title=Acts+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
