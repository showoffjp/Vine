"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ROSE = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "What Is Dating For? — Clarifying the Purpose Before You Begin", verse: "Proverbs 4:23", text: "Above all else, guard your heart, for everything you do flows from it. The question of purpose sets everything else. Dating can serve several legitimate ends: getting to know someone as a potential spouse, building friendship and discernment within the church community, or exploring compatibility before commitment. It is not, in the biblical vision, primarily for romance as an end in itself, for physical gratification, or for entertainment. This clarity of purpose matters because it shapes the whole posture of dating: the questions you ask, the pace you set, the commitments you make and don't make, and how you end things when they don't work out. Dating with intention means entering relationships with your eyes open and your purpose clear." },
  { title: "Marriage as the Frame — Why Christians Date Toward Covenant", verse: "Genesis 2:24", text: "That is why a man leaves his father and mother and is united to his wife, and they become one flesh. In the biblical vision, sexual union is reserved for covenant marriage — two people becoming one in a comprehensive, permanent, exclusive commitment. This frame shapes how Christians approach dating: if marriage is the destination, dating is the process of discerning whether this particular person is someone you are called to marry and capable of marrying well. This does not mean every date is a marriage interview. It means that when a relationship develops emotional and physical intimacy, the appropriate question is whether those intimacies are being honored or exploited." },
  { title: "Guarding Hearts and Bodies — Boundaries That Protect Both People", verse: "1 Thessalonians 4:3-5", text: "It is God's will that you should be sanctified: that you should avoid sexual immorality; that each of you should learn to control your own body in a way that is holy and honorable, not in passionate lust like the pagans, who do not know God. Physical and emotional boundaries in dating are not legalistic restrictions — they are protections for two people who do not yet have the covenant commitment that gives sex and deep emotional dependence their proper context. Physically: the general principle is that physical intimacy should track with commitment level. Emotionally: deep emotional entanglement before commitment can create attachment that makes honest discernment impossible. Both need attention." },
  { title: "Character First — What to Look For in a Partner", verse: "1 Samuel 16:7", text: "The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart. The attributes that make someone an attractive partner at 25 are often not the ones that will matter at 55. Character qualities that matter: Does this person love God more than they love me? Do they take responsibility for their failures? Are they kind to service workers and strangers? How do they handle disappointment, conflict, and stress? Do I become more myself or less myself around them? Do their closest relationships reflect health or dysfunction? These questions reveal more than appearance, chemistry, or even shared values." },
  { title: "Breaking Up Well — Ending Relationships with Honor", verse: "Matthew 5:37", text: "All you need to say is simply yes or no; anything beyond this comes from the evil one. One measure of Christian dating culture is how it handles endings. The way a relationship ends reveals the maturity of both people. Ghosting, breadcrumbing, or stringing someone along are failures of character and love. A clear, honest, kind ending — even when painful — honors the other person's dignity and allows both people to move forward. The principle of doing to others as you would have them do to you applies fully in the ending of relationships." },
];

const principles = [
  { icon: "🎯", title: "Start with Friendship — Don't Rush the Romance", text: "The couples with the deepest marriages often have a friendship foundation that preceded or was built alongside romantic interest. Knowing someone as a person before you know them as a romantic interest gives you data that chemistry cannot. What are they like in groups? With family? Under stress? How do they handle disappointment? How do they speak about their exes? These things become visible over time in friendship in ways that romantic intensity can obscure." },
  { icon: "🏛️", title: "Pursue Community-Embedded Dating", text: "Dating in the context of the church community — where both people are known, where accountability is natural, and where the relationship is observable over time — is the Christian alternative to the isolated, serial dating model. This does not mean the community votes on your relationship; it means you are not dating in secret and your character is visible to people who care about you both." },
  { icon: "💬", title: "Have the Real Conversations Early", text: "Conversations about faith, money, family of origin, desired number of children, vocation, and values should happen before deep emotional attachment makes them hard to respond to honestly. Not on the first date — but before the third month. The person who seems perfect before these conversations may or may not be right for you afterward, and knowing that early protects both people." },
  { icon: "🔒", title: "Decide Your Physical Boundaries in Advance — Not in the Moment", text: "No one makes good physical boundary decisions in the moment. The time to decide what your physical limits are is before you are emotionally and physically engaged. Communicate those clearly to your partner. Agree together. Having a plan is not unromantic — it is responsible and loving." },
  { icon: "⏱️", title: "Move at a Pace That Allows Honest Discernment", text: "Relationships that move very fast — intense emotional intimacy, daily contact, and deep attachment in the first few months — make honest discernment difficult. The rush of early attachment can create a feeling of inevitability that isn't warranted. Intentional pacing — including regular checks on whether this relationship is healthy and progressing toward clarity — allows you to see the person more accurately." },
];

const scriptures = [
  { verse: "Proverbs 4:23", text: "Above all else, guard your heart, for everything you do flows from it." },
  { verse: "1 Thessalonians 4:3-4", text: "It is God's will that you should be sanctified: that you should avoid sexual immorality; that each of you should learn to control your own body in a way that is holy and honorable." },
  { verse: "1 Corinthians 13:4-5", text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs." },
  { verse: "2 Corinthians 6:14", text: "Do not be yoked together with unbelievers. For what do righteousness and wickedness have in common? Or what fellowship can light have with darkness?" },
  { verse: "Proverbs 31:10-11", text: "A wife of noble character who can find? She is worth far more than rubies. Her husband has full confidence in her and lacks nothing of value." },
  { verse: "Ecclesiastes 4:9", text: "Two are better than one, because they have a good return for their labor." },
];

const voices = [
  { id: "lo", name: "Lauren Chandler & Matt Chandler", role: "Authors, Mingling of Souls", quote: "Romance is good, but romance is not a strong enough foundation on which to build a life together. You need to know if this person loves God more than they love you. You need to know how they handle failure, disappointment, and difficulty. You need to see them in ordinary life, not just extraordinary dates.", bio: "Matt Chandler's Mingling of Souls is one of the most biblically grounded and practically honest guides to Christian courtship and dating available. Drawing on the Song of Songs, Chandler explores what it means to pursue and be pursued in a way that honors God and the other person." },
  { id: "bj", name: "Ben Stuart", role: "Author, Single, Dating, Engaged, Married", quote: "The goal of Christian dating is not to avoid marriage but to pursue it wisely. Wisdom means going slowly enough to see clearly, asking the right questions, being honest about what you see, and trusting God with the outcome. The person who has prepared their own character well is ready to receive a good partner.", bio: "Stuart's Single, Dating, Engaged, Married is one of the most popular contemporary guides to Christian relationships, covering every stage from singleness through marriage. His approach is theologically substantive, practically direct, and free of the legalism that has characterized some purity culture approaches." },
  { id: "gc", name: "Gary Thomas", role: "Author, Sacred Marriage / The Sacred Search", quote: "Before you ask whether this person is the right one for you, ask whether you are the right person for someone else. The best preparation for a healthy marriage is not finding the perfect partner but becoming a person of character who can give and receive love well. The Sacred Search is really a search for character — yours first, then theirs.", bio: "Thomas's The Sacred Search reframes dating entirely around the question of who this person is becoming, not just how they make you feel. He argues that the feeling of being in love is not a reliable guide to compatibility, but character, faith, and growth direction are. His earlier Sacred Marriage argues provocatively that marriage is primarily about holiness, not happiness." },
];

const videos = [
  { id: "AYT6rvYPHU4", title: "What Christian Dating Should Look Like" },
  { id: "s1wlGLN4CGs", title: "Ben Stuart: The Purpose of Dating" },
  { id: "3mX9RJID3yI", title: "Gary Thomas: The Sacred Search" },
  { id: "6hFU75RPzFc", title: "Physical Boundaries in Christian Dating" },
];

type DGEntry = { id: string; date: string; reflection: string; question: string; next: string };

export default function ChristianDatingGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DGEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_datingguide_entries") ?? "[]"); } catch { return []; }
  });
  const [jReflection, setJReflection] = useState("");
  const [jQuestion, setJQuestion] = useState("");
  const [jNext, setJNext] = useState("");

  useEffect(() => { localStorage.setItem("vine_datingguide_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jReflection.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), reflection: jReflection, question: jQuestion, next: jNext }, ...prev]);
    setJReflection(""); setJQuestion(""); setJNext("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "principles", label: "Principles" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Dating &amp; Relationships</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Dating Guide</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>A biblical framework for intentional dating — how to pursue relationships in a way that honors God, protects both people, and moves toward covenant.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? ROSE : BORDER}`, background: tab === t.id ? ROSE + "22" : "transparent", color: tab === t.id ? ROSE : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: ROSE, fontWeight: 600, marginBottom: 6 }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "principles" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {principles.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: ROSE, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${ROSE}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: ROSE, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflection Journal</h3>
            {[
              { label: "What are you noticing about your current relationship or approach to dating?", val: jReflection, set: setJReflection },
              { label: "What question are you bringing to God about this area of your life?", val: jQuestion, set: setJQuestion },
              { label: "What is your next faithful step?", val: jNext, set: setJNext },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: ROSE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
                {entries.map(e => (
                  <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                    <p style={{ fontSize: "0.88rem", marginBottom: 4 }}>{e.reflection}</p>
                    {e.question && <p style={{ fontSize: "0.88rem", color: MUTED, marginBottom: 4 }}>Question: {e.question}</p>}
                    {e.next && <p style={{ fontSize: "0.88rem", color: ROSE }}>Next step: {e.next}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: ROSE }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
