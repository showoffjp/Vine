"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "You Did Not Cause This",
    verse: "Ezekiel 18:20",
    text: "The child will not share the guilt of the parent, nor will the parent share the guilt of the child. Addiction theology in the family system is complicated by profound shame. Ezekiel 18 insists on individual moral accountability — you are not responsible for what your loved one chose and continues to choose. The addiction is not yours to own.",
  },
  {
    title: "Love Does Not Require Enabling",
    verse: "Proverbs 27:6",
    text: "Wounds from a friend can be trusted, but an enemy multiplies kisses. The family member who protects an addicted person from the natural consequences of their addiction is not helping — they are enabling the continuation of harm. Sometimes the most loving act is not protection but a firm boundary that forces a reckoning.",
  },
  {
    title: "The Prodigal Father Let Him Go",
    verse: "Luke 15:13",
    text: "The father in this parable did not chase his son to the far country. He did not wire money to his son's new address. He let him go, and he waited, and he ran when he returned. There is a holy moment where you release what you cannot hold, and trust the Father who watches the road.",
  },
  {
    title: "Secondary Trauma Is Real",
    verse: "Lamentations 1:16",
    text: "For these things I weep and my eyes overflow with tears. No one is near to comfort me, no one to restore my spirit. Watching a family member be destroyed by addiction is a form of trauma — not as direct as the addiction itself, but physiologically and spiritually real. Your grief, your hypervigilance, your exhaustion are legitimate wounds needing care.",
  },
  {
    title: "You Are Allowed to Choose Your Own Life",
    verse: "Mark 6:31",
    text: "Come with me by yourselves to a quiet place and get some rest. Jesus said this to disciples who had been pouring out without pause. You are permitted to take your life back — to find rest, joy, and sustainable existence — even while your loved one is still in the middle of their disease.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Ed Welch",
    role: "CCEF counselor, author",
    quote: "Al-Anon got something profoundly right: you did not cause it, you cannot control it, and you cannot cure it. But you can choose how you live in relation to it. That choice is yours and it is holy.",
    bio: "Ed Welch (Addictions: A Banquet in the Grave, Side by Side) addresses addiction from a biblical counseling perspective. His work on family members of addicts is particularly nuanced — acknowledging both the spiritual weight of the situation and the legitimate need for the non-addicted family member to establish a life that is not organized around someone else's disease.",
  },
  {
    id: "v2",
    name: "Melody Beattie",
    role: "Author, Codependency No More",
    quote: "Detachment is not detachment from the person. It is detachment from the agony of involvement — the obsessive focus on the problem, the attempts to fix it, the hypervigilance that exhausts you and changes nothing.",
    bio: "Melody Beattie (Codependency No More) brought the concept of codependency — the way family members reorganize their entire lives around an addicted person — into public consciousness. Her work, though secular, has been deeply integrated by Christian counselors as a framework for what healthy family boundaries look like.",
  },
  {
    id: "v3",
    name: "Brené Brown",
    role: "Researcher, author",
    quote: "Boundaries are the distance at which I can love you and me simultaneously. Without that distance, someone gets sacrificed — and in addiction families, it is usually the observer who disappears.",
    bio: "Brené Brown (The Gifts of Imperfection, Daring Greatly) on boundaries as an act of love rather than rejection. Her framing has been widely embraced by Christian counselors helping family members of addicts learn that self-protection is not selfishness — it is what makes sustained love possible.",
  },
  {
    id: "v4",
    name: "William Cope Moyers",
    role: "Author, addiction family advocate",
    quote: "My family loved me, and their love sometimes looked like covering for me, rescuing me, making excuses. That love felt good, but it kept me sick longer. The hardest love was the love that stopped catching me.",
    bio: "William Cope Moyers (Broken: My Story of Addiction and Redemption), son of journalist Bill Moyers, writes from the perspective of the person in recovery about what the family's enabling cost him and what the family's eventual detachment made possible. His perspective is invaluable for family members wondering whether their love is helping.",
  },
];

const practices = [
  {
    icon: "🔴",
    title: "Attend Al-Anon or Nar-Anon",
    text: "Al-Anon and Nar-Anon are peer support groups specifically for family members and friends of people with addiction. They are free, confidential, and available in most cities and online. The community of people who understand exactly what you are living through is irreplaceable. Codependency Support through Celebrate Recovery is a Christian alternative.",
  },
  {
    icon: "📋",
    title: "Learn What Enabling Looks Like",
    text: "Enabling behaviors include: paying debts incurred by addiction, making excuses to employers or family, providing housing without requiring sobriety, preventing the natural consequences of the person's choices. Identifying your own enabling behaviors — with compassion, not condemnation — is the first step toward change.",
  },
  {
    icon: "🏗️",
    title: "Establish Clear, Communicated Limits",
    text: "A limit is not a threat — it is a statement about what you will and will not do. 'I will not have you in my home when you are using' is a limit, not a threat. Communicate it clearly, calmly, and in advance. Then hold it. Every time you enforce a limit, you make a boundary real. Every time you abandon it, you teach the addicted person that your limits are negotiable.",
  },
  {
    icon: "🧠",
    title: "Get Your Own Therapist",
    text: "You need someone in your corner who is only there for you — not for the family system, not for your addicted loved one. A therapist trained in family systems, codependency, or addiction can help you process your own grief, anger, and exhaustion without burdening friends and family who are also affected.",
  },
  {
    icon: "🙏",
    title: "Surrender Is a Spiritual Practice",
    text: "You cannot save your loved one. This is not a failure of love or faith — it is the design of personhood. God himself does not override human will. Surrender — genuinely releasing outcomes to God while maintaining your own limits and sanity — is one of the most difficult spiritual practices in existence. It needs to be practiced repeatedly, not achieved once.",
  },
  {
    icon: "🌱",
    title: "Rebuild Your Own Life",
    text: "Addiction-adjacent people often discover that they have stopped living: abandoned friendships, hobbies, rest, and goals because the crisis consumed everything. Begin one small reconstruction. Call one friend. Attend one event. Plant one thing. Your life has value outside of your role as the family member of someone in crisis.",
  },
];

const scriptures = [
  { verse: "Ezekiel 18:20", text: "The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child." },
  { verse: "Luke 15:11–13", text: "So he divided his property between them. Not long after that, the younger son got together all he had, set off for a distant country and there squandered his wealth in wild living." },
  { verse: "Proverbs 27:6", text: "Wounds from a friend can be trusted, but an enemy multiplies kisses." },
  { verse: "Lamentations 1:16", text: "For these things I weep and my eyes overflow with tears. No one is near to comfort me, no one to restore my spirit." },
  { verse: "Galatians 6:5", text: "For each one should carry their own load." },
  { verse: "Mark 6:31", text: "Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, 'Come with me by yourselves to a quiet place and get some rest.'" },
];

type ObserverEntry = { id: string; date: string; grief: string; boundary: string; surrender: string };

export default function FamilyAddictionObserverPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ObserverEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [boundary, setBoundary] = useState("");
  const [surrender, setSurrender] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_familyaddictionobsj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const entry: ObserverEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      grief,
      boundary,
      surrender,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_familyaddictionobsj_entries", JSON.stringify(updated));
    setGrief(""); setBoundary(""); setSurrender("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_familyaddictionobsj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Addiction & Family</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Watching a Family Member Destroyed by Addiction
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For spouses, parents, siblings, and children who love someone whose addiction is consuming them — and sometimes consuming you. You did not cause it. You cannot cure it. You cannot control it. But there is a path forward that does not require your own disappearance.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>Crisis resources</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline &nbsp;·&nbsp; SAMHSA: 1-800-662-4357 &nbsp;·&nbsp; Al-Anon: <span style={{ color: PURPLE }}>al-anon.org</span> &nbsp;·&nbsp; Celebrate Recovery: <span style={{ color: PURPLE }}>celebraterecovery.com</span>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.1rem" }}>{v.name}</h3>
                <p style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{v.quote}&rdquo;</p>
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{p.icon}</span>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.verse} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: "1rem" }}>Journal Entry</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What grief is most present today about your loved one?</label>
                <textarea value={grief} onChange={(e) => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What boundary do you need to establish or reinforce?</label>
                <textarea value={boundary} onChange={(e) => setBoundary(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>Write a surrender prayer — releasing what is not yours to carry.</label>
                <textarea value={surrender} onChange={(e) => setSurrender(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.grief && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Grief:</strong> {e.grief}</p>}
                {e.boundary && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Boundary:</strong> {e.boundary}</p>}
                {e.surrender && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Surrender:</strong> {e.surrender}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "dy9nwe9zeU8", title: "The Family Disease of Addiction", channel: "Hazelden Betty Ford Foundation", description: "Explains how addiction affects the entire family system, why family members develop codependent patterns, and what recovery looks like for the whole family — not just the addicted person." },
              { videoId: "j9phNEaPrv8", title: "Codependency and Christian Faith", channel: "Focus on the Family", description: "Addresses how Christian values like self-sacrifice and loyalty can become distorted in addiction family systems, and how healthy love actually looks different from enabling." },
              { videoId: "psN1DORYYV0", title: "Setting Boundaries with a Loved One in Addiction", channel: "Celebrate Recovery", description: "Practical, faith-based guidance on establishing and holding limits with an addicted family member — framing boundaries as love, not rejection." },
              { videoId: "1nzj7Sf395o", title: "When to Let Go: Detachment with Love", channel: "Al-Anon Family Groups", description: "The concept of detachment with love — releasing the compulsion to control or rescue an addicted person while maintaining genuine care for their wellbeing." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
