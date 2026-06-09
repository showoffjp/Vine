"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "gomer", label: "Hosea & Gomer" },
  { id: "unfaithful", label: "Israel's Unfaithfulness" },
  { id: "hesed", label: "Hesed" },
  { id: "howcanigive", label: "Hosea 11" },
  { id: "passages", label: "Key Passages" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const GOMER_SECTIONS = [
  {
    color: RED,
    title: "The Command — Hosea 1:2",
    body: "The book opens with one of the most startling divine commands in Scripture: 'When the LORD first spoke through Hosea, the LORD said to Hosea: Go, take to yourself a wife of whoredom and have children of whoredom, for the land commits great whoredom by forsaking the LORD.' God commands his prophet to marry a woman who will be unfaithful — because the marriage will be a living enactment of God's relationship with Israel. The prophetic parable is not told; it is lived. Hosea's life becomes the word of God.",
  },
  {
    color: GOLD,
    title: "Gomer's Unfaithfulness and Hosea's Grief",
    body: "Gomer leaves Hosea for other men. The details are sparse but clear: she goes after her lovers who provide bread and water, wool and flax, oil and drink (2:5). She attributes to the Baals what YHWH has given her. The emotional resonance is deliberate: Hosea feels what God feels. The grief of a faithful husband abandoned by a wife he loves is the closest human experience to what God experiences when Israel turns to other gods. The book was not written from a safe theological distance — it was written from inside that pain.",
  },
  {
    color: TEAL,
    title: "The Purchase — Hosea 3",
    body: "In one of the most tender scenes in the prophetic books, God tells Hosea: 'Go again, love a woman who is loved by another man and is an adulteress, even as the LORD loves the children of Israel, though they turn to other gods' (3:1). Hosea buys her back — fifteen shekels of silver and a homer and a half of barley. This is the price of a slave. Gomer has sold herself into slavery; Hosea purchases her freedom. The parallel is explicit: God will take back a people who have sold themselves into spiritual slavery. The purchase foreshadows redemption.",
  },
  {
    color: PURPLE,
    title: "What the Marriage Tells Us About God",
    body: "The marriage metaphor reveals something about God's character that no abstract theological statement could capture: God's love is not merely benevolent goodwill toward humanity in general. It is the love of a person for a specific person — intensely personal, capable of being hurt, yet persistent beyond injury. God is not aloof from the unfaithfulness of his people. He is wounded by it. And he keeps coming back. The marriage metaphor for the divine-human relationship (introduced in Hosea) runs through Jeremiah 2–3, Ezekiel 16 and 23, and culminates in Revelation 19–21 with the marriage supper of the Lamb.",
  },
];

const UNFAITHFUL_SECTIONS = [
  {
    color: RED,
    title: "Israel as Spiritual Adulteress",
    body: "Hosea uses the language of sexual betrayal for Israel's idolatry more intensely than any other prophet. Idolatry is not merely wrong practice — it is a relational rupture. When Israel chases the Baals, she is chasing lovers who cannot love her back. The Baals are fertility gods; Israel believes they give the rain, the grain, the wine, the oil. But 'she does not know that it was I who gave her the grain, the wine, and the oil' (2:8). The tragedy is that Israel has abandoned the faithful husband who actually provides everything for shadows who give nothing.",
  },
  {
    color: GOLD,
    title: "The Valley of Achor as a Door of Hope — Hosea 2:14–15",
    body: "In one of the most beautiful reversals in the OT, God promises to take Israel back into the wilderness — not for punishment but for wooing: 'I will allure her, and bring her into the wilderness, and speak tenderly to her. And there I will give her her vineyards and make the Valley of Achor a door of hope' (2:14–15). The Valley of Achor was the place of Israel's first great sin in the land — Achan's theft (Joshua 7). God will transform Israel's worst memory into the entry point of new hope. He will make something new from the site of the old failure.",
  },
  {
    color: BLUE,
    title: "My People Are Destroyed for Lack of Knowledge — Hosea 4:6",
    body: "God's indictment in Hosea 4 identifies the root of Israel's unfaithfulness: ignorance of God. 'My people are destroyed for lack of knowledge; because you have rejected knowledge, I reject you from being a priest to me. And since you have forgotten the law of your God, I also will forget your children' (4:6). The knowledge referred to is not intellectual information but relational knowing — the intimacy that comes from covenant faithfulness. A people who do not know God will worship whatever is available. The priest's job is to know God and to teach — and they have failed at both.",
  },
  {
    color: TEAL,
    title: "Come, Let Us Return — Hosea 6:1–3",
    body: "'Come, let us return to the LORD; for he has torn us, that he may heal us; he has struck us down, and he will bind us up... he will come to us as the showers, as the spring rains that water the earth' (6:1–3). This is the invitation at the center of Hosea: return is possible, welcome, and effective. God's judgment is not the end of the story. He tears in order to heal; he strikes in order to bind. The same God who disciplines is the God who restores. Hosea 6 is the OT's clearest statement of what the prophet will call again in 14:1–2: 'Return, O Israel, to the LORD your God.'",
  },
];

const HESED_BODY = `The Hebrew word hesed (sometimes translated 'steadfast love,' 'lovingkindness,' 'covenant loyalty,' or 'mercy') is the theological heartbeat of Hosea. It appears six times in the book and defines what God wants from Israel and what he offers to Israel.

Hosea 6:6 is one of the most quoted OT verses in the NT: 'For I desire hesed and not sacrifice, the knowledge of God rather than burnt offerings.' Jesus quotes this verse twice in Matthew (9:13; 12:7) in the context of mercy versus rigid religious performance. The Pharisees knew the sacrificial system; they had not understood that the system existed to express hesed — not to replace it.

Hesed is difficult to translate because it combines concepts that English separates: love and loyalty, mercy and faithfulness, compassion and commitment. It is the love that keeps its promises even when the other party breaks theirs. It is the love that does not walk away when it has every right to. It is the love Hosea shows Gomer and, through the parable of their marriage, the love God shows Israel.

Paul's word for it in 1 Corinthians 13 is agape: love that 'bears all things, believes all things, hopes all things, endures all things. Love never ends.'`;

const HOW_SECTIONS = [
  {
    title: "Hosea 11:1–4 — The Father Who Taught Israel to Walk",
    body: "Chapter 11 shifts the marriage metaphor to the parent-child metaphor. 'When Israel was a child, I loved him, and out of Egypt I called my son... It was I who taught Ephraim to walk; I took them up by their arms, but they did not know that I healed them. I led them with cords of kindness, with the bands of love' (11:1–4). Matthew 2:15 quotes verse 1 as fulfilled in Jesus: 'Out of Egypt I called my son.' The Exodus is the defining act of God's fatherly love for Israel, and Jesus recapitulates it — going to Egypt as an infant and being called back.",
  },
  {
    title: "Hosea 11:7–9 — How Can I Give You Up?",
    body: "'My people are bent on turning away from me... How can I give you up, O Ephraim? How can I hand you over, O Israel?... My heart recoils within me; my compassion grows warm and tender. I will not execute my burning anger; I will not again destroy Ephraim; for I am God and not a man, the Holy One in your midst, and I will not come in wrath' (11:7–9). This is the emotional summit of the book. God is reasoning with himself about whether to carry out the judgment Israel deserves. His heart 'recoils' (churns, turns over) with compassion. The reason he does not destroy them is not that they deserve mercy — it is because 'I am God and not a man.' His love exceeds human love because it is divine.",
  },
  {
    title: "Hosea 11 and the Love of the Father",
    body: "Hosea 11 is sometimes called the OT's fullest portrait of God as Father. He did not choose Israel because of their greatness (Deut 7:7–8). He taught them to walk. He led them with bands of love. He cannot bear to give them up. And when Jesus tells the parable of the prodigal son in Luke 15 — the father who sees the son while he is still a long way off and runs to him — he is painting Hosea 11 in narrative form. The father's heart that recoils with compassion is the heart of the God who tells his prophets: how can I give you up?",
  },
];

const KEY_PASSAGES = [
  { ref: "Hosea 2:14–15", color: TEAL, text: "I will allure her, and bring her into the wilderness, and speak tenderly to her. And there I will give her her vineyards and make the Valley of Achor a door of hope." },
  { ref: "Hosea 4:6", color: RED, text: "My people are destroyed for lack of knowledge; because you have rejected knowledge, I reject you from being a priest to me." },
  { ref: "Hosea 6:1", color: GREEN, text: "Come, let us return to the LORD; for he has torn us, that he may heal us; he has struck us down, and he will bind us up." },
  { ref: "Hosea 6:6", color: GOLD, text: "For I desire steadfast love and not sacrifice, the knowledge of God rather than burnt offerings." },
  { ref: "Hosea 11:1", color: BLUE, text: "When Israel was a child, I loved him, and out of Egypt I called my son." },
  { ref: "Hosea 11:8–9", color: PURPLE, text: "How can I give you up, O Ephraim?... My heart recoils within me; my compassion grows warm and tender. I will not execute my burning anger... for I am God and not a man." },
  { ref: "Hosea 14:4", color: TEAL, text: "I will heal their apostasy; I will love them freely, for my anger has turned from them." },
];

const THEMES = [
  { icon: "💍", color: RED, title: "The Marriage Metaphor", body: "Hosea introduces the metaphor of God as husband and Israel as wife that dominates later prophetic literature. The metaphor does what abstract theology cannot: it expresses that God's relationship with Israel is personal, passionate, capable of being hurt, and not merely contractual. It also frames idolatry as betrayal rather than merely error." },
  { icon: "❤️", color: GOLD, title: "Hesed — Covenant Love", body: "The book's central theological term. Hosea 6:6 makes hesed more important than sacrifice. God desires relationship, not religious performance. The NT quotes this verse twice. Hesed is the quality that makes God's love different from human love: it keeps its covenant even when the other party breaks theirs." },
  { icon: "🌿", color: GREEN, title: "Return and Restoration", body: "The repeated call to return (shub) shapes the book's structure: Hosea 3 (return), 6:1 (return), 14:1–2 (return). Restoration is not the people's achievement — it is God's gift. 'I will heal their apostasy; I will love them freely' (14:4). The initiator of restoration is always God." },
  { icon: "👨‍👧", color: BLUE, title: "The Father's Heart", body: "Hosea 11 presents God as a father who taught Israel to walk, led them with cords of kindness, and cannot bring himself to destroy them. This dimension — alongside the husband metaphor — shows that God's love is not merely romantic/spousal. It is also parental: unconditional, self-giving, prior to any merit." },
  { icon: "🌧️", color: TEAL, title: "Knowing God", body: "The knowledge of God (da'at Elohim) that Hosea calls for is not intellectual information but relational intimacy — the knowing that comes from living inside a faithful covenant relationship. When Israel fails to 'know' God (4:6), the practical result is idolatry: they fill the relational vacancy with Baals who cannot know them back." },
  { icon: "✝️", color: PURPLE, title: "Hosea in the NT", body: "Matthew 2:15 quotes Hosea 11:1 ('Out of Egypt I called my son') as fulfilled in Jesus. Matthew 9:13 and 12:7 quote Hosea 6:6 ('I desire mercy, not sacrifice'). Paul quotes Hosea 2:23 and 1:10 in Romans 9:25–26 to argue that Gentiles can be included in the people of God — 'those who are not my people I will call my people.' Hosea, written for northern Israel, becomes in Paul's hands a warrant for the Gentile mission." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type HoseaTab = "overview" | "gomer" | "unfaithful" | "hesed" | "howcanigive" | "passages" | "themes" | "journal" | "videos";

export default function HoseaGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<HoseaTab>("vine_hosea_tab", "overview");
  const [openGomer, setOpenGomer] = useState<string | null>(null);
  const [openUnfaith, setOpenUnfaith] = useState<string | null>(null);
  const [openHow, setOpenHow] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_hosea_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_hosea_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveJEntry = useCallback(() => {
    if (!jForm.verse.trim() && !jForm.reflection.trim()) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), verse: jForm.verse, reflection: jForm.reflection, prayer: jForm.prayer };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2500);
  }, [jForm]);

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12 };
  const accent = RED;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: `linear-gradient(135deg, rgba(239,68,68,0.12) 0%, rgba(217,119,6,0.10) 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>💔</div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>The Book of Hosea</h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 640, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
              God commands Hosea to marry an unfaithful woman — so that his life becomes the word of God. The marriage of Hosea and Gomer is a parable of God&apos;s relentless love for unfaithful Israel. &quot;How can I give you up?&quot; (Hosea 11:8)
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[{ label: "Minor Prophet", color: GOLD }, { label: "Northern Kingdom", color: BLUE }, { label: "God&apos;s Love & Hesed", color: RED }, { label: "8th Century BC", color: GREEN }].map(b => (
                <span key={b.label} style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}44`, borderRadius: 20, padding: "0.3rem 0.9rem", fontSize: "0.8rem", fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: b.label }} />
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderBottom: `1px solid ${BORDER}`, background: `${CARD}CC`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto", padding: "0 1rem" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id as HoseaTab)}
                style={{ padding: "0.9rem 1.1rem", fontSize: "0.82rem", fontWeight: activeTab === t.id ? 700 : 500, color: activeTab === t.id ? accent : MUTED, borderBottom: `2px solid ${activeTab === t.id ? accent : "transparent"}`, background: "none", border: "none", borderBottomWidth: 2, borderBottomStyle: "solid", cursor: "pointer", whiteSpace: "nowrap", transition: "color 150ms" }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ color: RED, fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", marginBottom: "1rem" }}>The Prophet Whose Life Was the Message</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "0.75rem" }}>Most prophets delivered God&apos;s word in speeches, poetry, and symbolic actions. Hosea delivered it by living it. When God told him to marry a woman who would be unfaithful, his obedience made his marriage into the most intimate theological statement in the prophetic books: this is what my love for Israel looks like, from the inside.</p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>Hosea prophesied to the northern kingdom of Israel during the last decades before its fall to Assyria (722 BC), roughly 750–720 BC. He was a contemporary of Isaiah, Amos, and Micah. His book has two movements: the marriage metaphor (chapters 1–3) and Israel&apos;s indictment and hope (chapters 4–14).</p>
              </div>
              <div style={{ background: `${RED}15`, border: `1px solid ${RED}`, borderRadius: 14, padding: "1.5rem" }}>
                <div style={{ color: RED, fontWeight: 700, marginBottom: 8 }}>Hosea 11:8–9</div>
                <div style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.9, fontSize: "1rem" }}>
                  &quot;How can I give you up, O Ephraim? How can I hand you over, O Israel?... My heart recoils within me; my compassion grows warm and tender. I will not execute my burning anger... for I am God and not a man.&quot;
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                {[
                  { label: "Prophet", val: "Hosea ben Beeri", color: GOLD },
                  { label: "Kingdom", val: "Northern Israel (Ephraim)", color: BLUE },
                  { label: "Period", val: "~750–720 BC, before Assyrian conquest", color: GREEN },
                  { label: "Key word", val: "Hesed — covenant love/lovingkindness", color: RED },
                ].map(s => (
                  <div key={s.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                    <div style={{ color: s.color, fontWeight: 700, fontSize: "0.78rem", marginBottom: 3 }}>{s.label}</div>
                    <div style={{ color: TEXT, fontSize: "0.9rem" }}>{s.val}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "gomer" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: RED, marginBottom: "0.5rem" }}>Hosea and Gomer: The Living Parable</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>The marriage of Hosea and Gomer is not allegory or fiction — it is presented as historical event. This was a real man who loved a real woman who left him for other men. And through that specific, painful marriage, God spoke the word he wanted the whole nation to hear.</p>
              </div>
              {GOMER_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenGomer(openGomer === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openGomer === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openGomer === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "unfaithful" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GOLD, marginBottom: "0.5rem" }}>Israel&apos;s Spiritual Adultery</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Hosea chapters 4–14 apply the marriage metaphor to Israel&apos;s covenant history. The pattern of Gomer&apos;s unfaithfulness maps onto Israel&apos;s: they have left the one who loves them for lovers who give them nothing, abandoned knowledge for ignorance, and traded their inheritance for momentary pleasure.</p>
              </div>
              {UNFAITHFUL_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenUnfaith(openUnfaith === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openUnfaith === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openUnfaith === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "hesed" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GOLD, marginBottom: "1rem" }}>Hesed — The Untranslatable Love</h2>
                {HESED_BODY.split("\n\n").map((para, i) => (
                  <p key={i} style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>{para}</p>
                ))}
              </div>
              <div style={{ background: `${GOLD}15`, border: `1px solid ${GOLD}`, borderRadius: 14, padding: "1.5rem" }}>
                <div style={{ color: GOLD, fontWeight: 700, marginBottom: 8 }}>Hosea 6:6 — The Most Quoted Hosea Verse in the NT</div>
                <div style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.9, fontSize: "1rem", marginBottom: "0.75rem" }}>
                  &quot;For I desire steadfast love (hesed) and not sacrifice, the knowledge of God rather than burnt offerings.&quot;
                </div>
                <div style={{ color: MUTED, fontSize: "0.88rem" }}>Quoted by Jesus in Matthew 9:13 and 12:7. The religious leaders had the sacrificial system right; they had missed the relationship it was meant to express.</div>
              </div>
            </div>
          )}

          {activeTab === "howcanigive" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: PURPLE, marginBottom: "0.5rem" }}>Hosea 11 — The Father Who Cannot Let Go</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Chapter 11 is the emotional and theological apex of the book. The metaphor shifts from husband to father, and what emerges is one of the most searching portrayals of divine love in all of Scripture.</p>
              </div>
              {HOW_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenHow(openHow === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: PURPLE, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openHow === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openHow === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "passages" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: RED, marginBottom: "0.5rem" }}>Key Passages in Hosea</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Hosea contains some of the most memorable and theologically dense verses in the prophetic books — verses Jesus quoted, verses Paul used to argue for the Gentile mission, verses that reframe everything.</p>
              </div>
              {KEY_PASSAGES.map(p => (
                <div key={p.ref} style={{ ...card, padding: "1.5rem", borderLeft: `4px solid ${p.color}` }}>
                  <div style={{ color: p.color, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{p.ref}</div>
                  <div style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, fontSize: "0.95rem" }}>&quot;{p.text}&quot;</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "themes" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {THEMES.map(item => (
                <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "journal" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", color: accent, marginBottom: "1.5rem" }}>Hosea Journal</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>VERSE OR PASSAGE</label>
                    <input value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Hosea 6:6, Hosea 11:8, Hosea 2:14" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>REFLECTION</label>
                    <textarea value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="How does Hosea's portrayal of God's love change how you see God's attitude toward you? Where have you been like Gomer — returning to what cannot satisfy?" rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>PRAYER RESPONSE</label>
                    <textarea value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="Return, O Israel, to the LORD your God..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <button onClick={saveJEntry} style={{ background: accent, color: "#fff", border: "none", borderRadius: 8, padding: "0.85rem 2rem", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem", alignSelf: "flex-start" }}>{jSaved ? "✓ Saved" : "Save Entry"}</button>
                </div>
              </div>
              {jEntries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {jEntries.map(entry => (
                    <div key={entry.id} style={{ ...card, padding: "1.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                        <span style={{ color: accent, fontWeight: 600, fontSize: "0.9rem" }}>{entry.verse || "Reflection"}</span>
                        <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                      </div>
                      {entry.reflection && <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "0.5rem" }}>{entry.reflection}</p>}
                      {entry.prayer && <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, fontStyle: "italic" }}>🙏 {entry.prayer}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Hosea — Video Library</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Visual overviews and deep dives into Hosea&apos;s message and marriage parable.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {[
                  { id: "TcPMCmVoLME", title: "Hosea Overview", channel: "BibleProject" },
                  { id: "sY2R2JzBNDc", title: "God's Relentless Love — The Book of Hosea", channel: "Bible Study" },
                  { id: "oP7Ol9cuHNE", title: "Hesed: The Steadfast Love of God", channel: "Desiring God" },
                  { id: "5e3gzGSoFE0", title: "Hosea & Gomer — A Love Story About God", channel: "The Bible Explained" },
                ].map(v => (
                  <div key={v.id} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div>
                      <p style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem" }}>{v.title}</p>
                      <p style={{ color: MUTED, fontSize: "0.8rem" }}>{v.channel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      <Footer />
    </div>
  );
}
