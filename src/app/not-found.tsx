import Link from "next/link";
import { ArrowRight, Home, Search, BookOpen, MessageSquare } from "lucide-react";

export default function NotFound() {
  const suggestions = [
    { href: "/", icon: Home, label: "Homepage" },
    { href: "/discussions", icon: MessageSquare, label: "Discussions" },
    { href: "/bible", icon: BookOpen, label: "Bible" },
    { href: "/explore", icon: Search, label: "Explore" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden"
      style={{ background: "#07070F", color: "#F2F2F8" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 40%, rgba(58,125,86,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mb-12">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #3a7d56, #8B6FDB)" }}
        >
          <span className="text-black font-black">V</span>
        </div>
        <span className="text-xl font-black" style={{ color: "#F2F2F8" }}>Vine</span>
      </Link>

      {/* 404 */}
      <div
        className="text-9xl font-black mb-4 leading-none"
        style={{
          background: "linear-gradient(135deg, #3a7d56 0%, #52a876 50%, #3a7d56 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        404
      </div>

      <h1 className="text-3xl font-black mb-3" style={{ color: "#F2F2F8" }}>
        Page Not Found
      </h1>

      <p className="text-lg mb-3 max-w-md" style={{ color: "#8A8AA8" }}>
        This branch doesn&apos;t lead anywhere — but there&apos;s plenty of life on the main vine.
      </p>

      <p className="text-sm italic mb-10" style={{ color: "rgba(58,125,86,0.5)" }}>
        &ldquo;I am the vine; you are the branches.&rdquo; — John 15:5
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {suggestions.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#A0A0C0",
            }}
          >
            <Icon size={15} />
            {label}
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold"
        style={{
          background: "linear-gradient(135deg, #4a9e6e 0%, #3a7d56 50%, #4a9e6e 100%)",
          color: "#07070F",
        }}
      >
        Back to Vine <ArrowRight size={16} />
      </Link>
    </div>
  );
}
