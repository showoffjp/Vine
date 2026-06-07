"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#3a7d56";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const tabs = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof tabs[number];

const theology = [
  {
    title: "God Is Father to the Fatherless",
    body: "Psalm 68:5 is one of the most specific promises in Scripture: 'Father of the fatherless and protector of widows is God in his holy habitation.' This is not poetic sentiment — it is a declaration of God's active, particular concern for families navigating loss of paternal presence. The single mother is not parenting alone. She is co-parenting with the God who names Himself Father to the children she raises.",
  },
  {
    title: "The Widow of Zarephath: Provision in the Narrowest Hour",
    body: "In 1 Kings 17, a widow down to her last meal encounters Elijah. She has enough for one final loaf for herself and her son, then prepared to die. God told Elijah to send her a request before providing miraculously. The miracle came not after her crisis was resolved but in the middle of it — a jar of flour and jug of oil that did not run dry until the drought ended. This is the economy of divine provision: enough for today, refilled for tomorrow.",
  },
  {
    title: "Mary Raised Jesus Without Joseph",
    body: "The historical and theological record suggests Joseph was not present for most of Jesus's adult life. Mary raised the Son of God in a household that, at some point, was a single-mother household. She faced the ordinary hardships of first-century widowhood. That the woman who formed Jesus's early life may have done so largely alone is a profound theological statement about single motherhood's dignity and spiritual weight.",
  },
  {
    title: "You Were Not Designed for This Alone — And That Is Okay",
    body: "God's design in creation was for children to be raised in a two-parent household within a community of extended family and tribe. Single motherhood — however it came about, through divorce, death, abandonment, or choice — is not how God designed family to work. Acknowledging this is not shame; it is honest lament. And the church's response to this gap in design is meant to be extraordinary generosity and presence.",
  },
  {
    title: "Your Children See God Through You",
    body: "For children being raised in a single-parent household, the parent doing the raising often becomes the primary theologian. The way you love them, set limits, forgive, and return after failure teaches them something about the character of God before they can articulate it. This is both a weight and a privilege. You are not just raising children; you are writing their first theology.",
  },
];

const voices = [
  {
    name: "Trillia Newbell",
    title: "Author, 'Sacred Endurance' — Single Mother Advocate",
    quote: "I remember the nights I couldn't see how I would make it — financially, emotionally, spiritually. What I discovered is that God meets single mothers not with explanations but with presence. And sometimes presence shows up as a church member who shows up with groceries.",
  },
  {
    name: "Lisa Harper",
    title: "Author, Bible Teacher, Adoptive Single Mother",
    quote: "Single motherhood has taught me to pray specifically, to ask for help shamelessly, and to believe that God is not surprised by the details of my family. He knew this would be my path before I did. That has not made it easier. But it has made it purposeful.",
  },
  {
    name: "Ginger Hubbard",
    title: "Author, 'Don't Make Me Count to Three' — Mother and Advocate",
    quote: "The church talks about family ministry almost exclusively in terms of two-parent households. When we exclude single mothers from our vision of 'family,' we are not just being impractical — we are saying something theological about belonging that is simply not in the text.",
  },
  {
    name: "Rachel Held Evans",
    title: "Author, 'Searching for Sunday'",
    quote: "The early church was noticeably concerned with widows and their children. This was not charity — it was community. The early believers understood that some members carry heavier loads and that redistributing the weight is what it means to be a body.",
  },
];

const practices = [
  {
    title: "Receiving Help as Spiritual Practice",
    body: "Many single mothers struggle to receive help — due to pride, independence, or not wanting to burden others. But receiving help graciously is a spiritual discipline, not a weakness. When a church member offers to babysit, take it. When someone offers a meal, accept it. When someone offers financial help, receive it with gratitude. Allowing others to carry part of your load is how you allow the church to be the church.",
  },
  {
    title: "Creating Sabbath-Like Boundaries",
    body: "Single mothers rarely have natural rest built into their week. Create intentional rest practices: a bedtime routine that ends the workday of parenting, a morning practice before the children wake that belongs to you and God, a weekly activity that brings restoration. This is not selfish — it is stewardship of the person your children depend on most.",
  },
  {
    title: "Finding or Building Your Village",
    body: "Identify 3–5 people who will be committed presences in your family's life: a parent figure for your children, a trusted friend who can take them for a few hours, a mentor, a practical helper. If your church does not have structures for this, ask your pastor to build one. Some churches have 'family partners' programs that pair single-parent families with two-parent households for mutual friendship and practical support.",
  },
  {
    title: "Honest Prayer — Including Anger",
    body: "Lament is a legitimate form of prayer. Tell God you are exhausted. Tell Him it is not fair. Tell Him you needed a partner and you don't have one. The Psalms model this repeatedly. Honest prayer — including anger, complaint, and grief — is not a failure of faith. It is the beginning of real conversation with a God who can handle the truth about your life.",
  },
  {
    title: "Financial Literacy as Spiritual Stewardship",
    body: "Many single mothers face financial precarity that creates chronic anxiety. Financial stewardship — budgeting, reducing debt, building even a small emergency fund — is a form of spiritual self-care that reduces the anxiety load. Dave Ramsey's Financial Peace University is available in many churches for free or low cost. Some denominations offer emergency funds; ask your pastor about local resources.",
  },
  {
    title: "Letting Your Children Know It Is Hard",
    body: "Age-appropriate honesty about the challenges of your family structure — without burdening children beyond their developmental capacity — gives children language for their own experience and models authentic faith. 'This is hard for me too, and I am asking God to help us' teaches children something true about faith: that it is practiced in the middle of difficulty, not only after it passes.",
  },
];

const scriptures = [
  {
    ref: "Psalm 68:5",
    text: "Father of the fatherless and protector of widows is God in his holy habitation.",
    note: "God names Himself specifically in relation to the families single mothers raise. Your household is seen and named by the one who dwells in holiness.",
  },
  {
    ref: "Isaiah 54:5",
    text: "For your Maker is your husband, the LORD of hosts is his name; and the Holy One of Israel is your Redeemer, the God of the whole earth he is called.",
    note: "God speaks this specifically to women who have lost or lack a husband. The language is bold — 'your Maker is your husband.' Whatever provision and protection that relationship was meant to carry, God claims it.",
  },
  {
    ref: "Proverbs 31:25",
    text: "Strength and dignity are her clothing, and she laughs at the time to come.",
    note: "The Proverbs 31 woman is, among other things, a person of extraordinary competence and industry. Single mothers embody this — managing households, raising children, sustaining families — with extraordinary strength.",
  },
  {
    ref: "Matthew 6:31–33",
    text: "Do not worry, saying, 'What shall we eat?' or 'What shall we drink?' or 'What shall we wear?' For your heavenly Father knows that you need them all. But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
    note: "Jesus addresses the specific anxiety of material provision — food, clothing, the basic needs of the people you love. He names it, validates it, and redirects it toward trust. Not to deny the need but to reframe who is responsible to meet it.",
  },
  {
    ref: "Galatians 6:2",
    text: "Bear one another's burdens, and so fulfill the law of Christ.",
    note: "The burden of single motherhood is real. The law of Christ — love — is fulfilled when others bear it alongside you. The church is implicated in whether this verse is kept or broken in your life.",
  },
  {
    ref: "Lamentations 3:22–23",
    text: "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    note: "Morning by morning — the same rhythm as the exhausted parent who rises before the children and after them and stays awake when they sleep. New mercy for each new day.",
  },
];

const videos = [
  { id: "KwX1f2gYKZ4", title: "Graves Into Gardens — Elevation Worship" },
  { id: "sIaT8Jl2zpI", title: "You Say — Lauren Daigle" },
  { id: "IvSuGyJQ6oM", title: "Goodness of God — Bethel Music" },
  { id: "4Eg_di-O8nM", title: "You Can Change The End — Elevation Church" },
];

const JOURNAL_KEY = "vine_single_mom_entries";

function JournalTab() {
  const [entries, setEntries] = useState<{ id: number; date: string; text: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");
  const save = () => {
    if (!draft.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  };
  const remove = (id: number) => {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  };
  const prompts = [
    "What do I need most right now that I haven't asked for? From God? From others?",
    "What am I most afraid of in this season of parenting alone?",
    "What would I want my children to know someday about how I raised them?",
    "Where have I seen God provide in specific, undeniable ways this past month?",
  ];
  return (
    <div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
        <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "1rem" }}>Reflection Prompts</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {prompts.map((p, i) => (
            <li key={i} style={{ color: MUTED, fontSize: "0.9rem", paddingLeft: "1rem", borderLeft: `2px solid ${ACCENT}40` }}>{p}</li>
          ))}
        </ul>
      </div>
      <textarea
        value={draft}
        onChange={e => setDraft(e.target.value)}
        placeholder="Write freely — your words are private and stay only on your device..."
        rows={5}
        style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }}
      />
      <button onClick={save} style={{ marginTop: 8, padding: "0.6rem 1.6rem", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, cursor: "pointer" }}>Save Entry</button>
      {entries.length > 0 && (
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {entries.map(e => (
            <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ color: MUTED, fontSize: "0.78rem" }}>{e.date}</span>
                <button onClick={() => remove(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.78rem" }}>Delete</button>
              </div>
              <p style={{ color: TEXT, fontSize: "0.92rem", margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SingleMomChristianFaith() {
  const [activeTab, setActiveTab] = useState<Tab>("Theology");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}18 0%, transparent 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "4rem 1.5rem 3rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
              Family & Parenting
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
              Single Mother,<br />
              <span style={{ color: ACCENT }}>Held by God</span>
            </h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 620, marginBottom: "1.5rem" }}>
              For Christians raising children alone — through divorce, death, abandonment, or circumstance. You are not invisible to God. The Scripture speaks your name, and the church is called to walk beside you.
            </p>
            <div style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 8, padding: "1rem 1.2rem", maxWidth: 520 }}>
              <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
                Crisis Support: <strong>988</strong> Suicide & Crisis Lifeline — call or text 988<br />
                <span style={{ fontWeight: 400, color: MUTED }}>Single Mother Support: WIC (wic.fns.usda.gov) | SNAP | Local community action agencies</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: BG, position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{ padding: "1rem 1.4rem", background: "none", border: "none", borderBottom: activeTab === t ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === t ? ACCENT : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s" }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "2.5rem 1.5rem" }}>

          {activeTab === "Theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {theology.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {voices.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <p style={{ color: TEXT, lineHeight: 1.8, fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                  <div>
                    <div style={{ color: ACCENT, fontWeight: 700, fontSize: "0.9rem" }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Practices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {practices.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ACCENT}`, borderRadius: 10, padding: "1.5rem" }}>
                  <div style={{ color: ACCENT, fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{s.ref}</div>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, marginBottom: "0.75rem" }}>&ldquo;{s.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{s.note}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Journal" && <JournalTab />}

          {activeTab === "Videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {videos.map((v) => (
                <div key={v.id} style={{ background: CARD, borderRadius: 10, overflow: "hidden", border: `1px solid ${BORDER}` }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "1rem 1.2rem" }}>
                    <p style={{ color: TEXT, fontWeight: 600, margin: 0 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
