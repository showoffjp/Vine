"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const GOLD = "#D97706", PURPLE = "#6B4FBB", TEAL = "#0D9488";
const ROSE = "#E11D48";

const CATEGORIES = [
  {
    color: GOLD,
    icon: "cross",
    name: "Apparel",
    desc: "Wear the Word. T-shirts, hoodies, and hats rooted in Scripture -- made to start conversations and remind you whose you are.",
    items: [
      { name: "He Is Risen Tee", price: "$32", tag: "Easter Collection", color: GOLD },
      { name: "Abide Hoodie", price: "$58", tag: "John 15:5", color: GREEN },
      { name: "I Am the Vine Cap", price: "$28", tag: "Signature", color: TEAL },
      { name: "Fear Not Tee", price: "$32", tag: "Isaiah 41:10", color: PURPLE },
    ],
  },
  {
    color: GREEN,
    icon: "book",
    name: "Journals & Stationery",
    desc: "Scripture-guided journals for prayer, Bible study, sermon notes, and daily devotional practice. Beautifully made, built to last.",
    items: [
      { name: "The Vine Prayer Journal", price: "$24", tag: "Bestseller", color: GOLD },
      { name: "Bible Study Notebook", price: "$18", tag: "Wide-ruled + Scripture margins", color: GREEN },
      { name: "Sermon Notes Journal", price: "$20", tag: "Pastor & Pew Edition", color: PURPLE },
      { name: "Gratitude & Lament Journal", price: "$22", tag: "Psalm-inspired", color: TEAL },
    ],
  },
  {
    color: TEAL,
    icon: "mug",
    name: "Home & Kitchen",
    desc: "Start your morning with the Word. Mugs, prints, and home goods that anchor your home in Christ.",
    items: [
      { name: "John 15:5 Mug", price: "$22", tag: "Cormorant serif, gold on black", color: GOLD },
      { name: "He Is Before All Things Mug", price: "$22", tag: "Col. 1:17", color: TEAL },
      { name: "Scripture Print Set", price: "$48", tag: "Set of 3 frameable 8x10s", color: PURPLE },
      { name: "Vine & Branches Poster", price: "$28", tag: "Gold foil edition", color: GREEN },
    ],
  },
  {
    color: PURPLE,
    icon: "gift",
    name: "Gifts & Accessories",
    desc: "Give something that lasts. Bookmarks, tote bags, keychains, and gift bundles for every believer in your life.",
    items: [
      { name: "Scripture Bookmark Set", price: "$12", tag: "Set of 6", color: GOLD },
      { name: "The Vine Tote Bag", price: "$26", tag: "Canvas, gold print", color: GREEN },
      { name: "Faith & Coffee Bundle", price: "$54", tag: "Mug + Journal + Bookmark", color: TEAL },
      { name: "New Believer Gift Box", price: "$68", tag: "Bible + Journal + Card", color: PURPLE },
    ],
  },
];

const COMING_SOON_NOTE = "The Vine Merch launches soon. Sign up below to be first to know -- early supporters receive 20% off their first order.";

function IconCross() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="12" y="3" width="4" height="22" rx="2" fill="currentColor" />
      <rect x="4" y="9" width="20" height="4" rx="2" fill="currentColor" />
    </svg>
  );
}
function IconBook() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h8a4 4 0 0 1 4 4v16a3 3 0 0 0-3-3H4z"/>
      <path d="M24 4h-8a4 4 0 0 0-4 4v16a3 3 0 0 1 3-3h9z"/>
    </svg>
  );
}
function IconMug() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h14l-2 16H8L6 4z"/>
      <path d="M20 8h3a2 2 0 0 1 0 4h-3"/>
      <path d="M4 24h20"/>
    </svg>
  );
}
function IconGift() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="22" height="4" rx="1"/>
      <rect x="5" y="15" width="18" height="10" rx="1"/>
      <path d="M14 11V25"/>
      <path d="M14 11C14 11 11 8 9 9s-1 4 5 2"/>
      <path d="M14 11C14 11 17 8 19 9s1 4-5 2"/>
    </svg>
  );
}

const ICON_MAP: Record<string, React.ReactNode> = {
  cross: <IconCross />,
  book: <IconBook />,
  mug: <IconMug />,
  gift: <IconGift />,
};

export default function MerchPage() {
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0a1a0e 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "4rem 1.5rem 3.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", padding: "0.3rem 0.9rem", border: `0.5px solid rgba(201,162,39,0.3)`, borderRadius: "999px" }}>
            <span style={{ background: GOLD, width: "6px", height: "6px", borderRadius: "50%", display: "inline-block" }} />
            <span style={{ color: GOLD, fontSize: "0.72rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Coming Soon</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 300, lineHeight: 1.1, marginBottom: "1.25rem", color: "#f2e6c8" }}>
            Wear what you&nbsp;
            <em style={{ fontStyle: "italic", color: "#e8c162" }}>believe.</em>
          </h1>
          <p style={{ fontSize: "1rem", color: MUTED, lineHeight: 1.75, marginBottom: "2rem", fontFamily: "sans-serif", fontWeight: 300 }}>
            The Vine Merch is apparel, journals, and home goods rooted in Scripture and the lordship of Jesus Christ. Every piece is designed to remind you whose you are &mdash; and to open conversations about the One who is worth talking about.
          </p>
          <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1.25rem", textAlign: "left", maxWidth: "480px", margin: "0 auto 2rem", fontStyle: "italic", fontSize: "1rem", color: TEXT, lineHeight: 1.7 }}>
            &ldquo;Whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.&rdquo;
            <span style={{ display: "block", fontSize: "0.8rem", color: MUTED, fontStyle: "normal", marginTop: "0.5rem" }}>&mdash; Colossians 3:17</span>
          </blockquote>
        </div>
      </div>

      {/* Coming Soon Banner */}
      <div style={{ background: `linear-gradient(90deg, rgba(58,125,86,0.12) 0%, rgba(201,162,39,0.08) 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "1.25rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: MUTED, fontFamily: "sans-serif", fontSize: "0.9rem", margin: 0 }}>
          {COMING_SOON_NOTE}
        </p>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem" }}>

        {/* Email signup */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${GOLD}`, borderRadius: "12px", padding: "2rem 2rem", marginBottom: "3rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
            <div>
              <p style={{ color: GOLD, fontSize: "0.72rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Early Access</p>
              <p style={{ fontSize: "1.2rem", color: TEXT, fontStyle: "italic", marginBottom: "0.25rem" }}>Be first in line. Get 20% off launch day.</p>
              <p style={{ fontSize: "0.85rem", color: MUTED, fontFamily: "sans-serif" }}>No spam. Just one email when we&apos;re ready.</p>
            </div>
            {submitted ? (
              <div style={{ color: GREEN, fontFamily: "sans-serif", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke={GREEN} strokeWidth="1.5"/><path d="M5.5 9l2.5 2.5 4.5-4.5" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                You&apos;re on the list!
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="your@email.com"
                  required
                  style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${focused ? "rgba(201,162,39,0.55)" : "rgba(201,162,39,0.2)"}`, borderRadius: "6px", padding: "0.65rem 1rem", color: TEXT, fontSize: "0.85rem", fontFamily: "sans-serif", outline: "none", minWidth: "220px" }}
                />
                <button type="submit" style={{ background: GOLD, border: "none", borderRadius: "6px", padding: "0.65rem 1.5rem", color: "#1a0e00", fontSize: "0.85rem", fontWeight: 700, fontFamily: "sans-serif", cursor: "pointer", letterSpacing: "0.06em" }}>
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Categories */}
        {CATEGORIES.map((cat, ci) => (
          <div key={ci} style={{ marginBottom: "3.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: `1px solid ${BORDER}` }}>
              <span style={{ color: cat.color }}>{ICON_MAP[cat.icon]}</span>
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: TEXT, margin: "0 0 0.2rem", fontFamily: "sans-serif" }}>{cat.name}</h2>
                <p style={{ color: MUTED, fontFamily: "sans-serif", fontSize: "0.85rem", margin: 0 }}>{cat.desc}</p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
              {cat.items.map((item, ii) => (
                <div key={ii} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "10px", overflow: "hidden", transition: "border-color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = item.color + "55")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}
                >
                  {/* Product image placeholder */}
                  <div style={{ height: "180px", background: `linear-gradient(135deg, ${item.color}15 0%, ${CARD} 100%)`, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: `1px solid ${BORDER}` }}>
                    <div style={{ color: item.color, opacity: 0.4 }}>{ICON_MAP[cat.icon]}</div>
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <p style={{ fontSize: "0.7rem", color: item.color, fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.35rem" }}>{item.tag}</p>
                    <p style={{ fontSize: "1rem", fontWeight: 700, color: TEXT, fontFamily: "sans-serif", marginBottom: "0.5rem" }}>{item.name}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ color: GOLD, fontFamily: "sans-serif", fontWeight: 700, fontSize: "1.05rem" }}>{item.price}</span>
                      <span style={{ fontSize: "0.72rem", color: MUTED, fontFamily: "sans-serif", background: "rgba(255,255,255,0.04)", padding: "0.2rem 0.6rem", borderRadius: "999px", border: `1px solid ${BORDER}` }}>Coming Soon</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Mission statement */}
        <div style={{ background: `linear-gradient(135deg, rgba(58,125,86,0.08) 0%, rgba(201,162,39,0.05) 100%)`, border: `1px solid rgba(201,162,39,0.18)`, borderRadius: "12px", padding: "2.5rem", textAlign: "center", marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 300, color: "#f2e6c8", marginBottom: "1rem", fontStyle: "italic" }}>Why merch?</h3>
          <p style={{ lineHeight: 1.8, color: MUTED, fontFamily: "sans-serif", fontSize: "0.95rem", maxWidth: "560px", margin: "0 auto 1.5rem" }}>
            Because the gospel is public, not private. What you wear, carry, and display at home is a witness. Every piece of Vine merch is designed to be beautiful, to be conversation-starting, and to point back to Christ &mdash; not to The Vine as a brand.
          </p>
          <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.1rem", color: TEXT }}>
            &ldquo;Let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.&rdquo;
          </p>
          <p style={{ fontSize: "0.8rem", color: GOLD, fontFamily: "sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.5rem" }}>Matthew 5:16</p>
        </div>

        {/* All proceeds note */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "10px", padding: "1.5rem 2rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <div style={{ color: GREEN, flexShrink: 0, marginTop: "2px" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="10" cy="10" r="9"/><path d="M10 6v4l3 3" strokeLinecap="round"/></svg>
          </div>
          <div>
            <p style={{ color: GREEN, fontFamily: "sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem" }}>How We Use Revenue</p>
            <p style={{ color: MUTED, fontFamily: "sans-serif", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>
              A portion of every Vine Merch purchase goes directly to supporting the platform &mdash; keeping it free for believers everywhere &mdash; and to ministries serving the persecuted church. Buying merch is a way of investing in the global body of Christ.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/salvation" style={{ color: GOLD, textDecoration: "none", fontFamily: "sans-serif", fontSize: "0.9rem", fontStyle: "italic" }}>
            Before the shop &mdash; meet the One it&apos;s all about. &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
