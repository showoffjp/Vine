"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#6B4FBB";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const tabs = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof tabs[number];

const theology = [
  {
    title: "Every Person Bears God's Image",
    body: "The foundation of a Christian theology of race is imago Dei — every human being, without exception, bears the image of God (Genesis 1:26–27). Racism is therefore not merely a social problem but a theological offense: it attacks the image-bearing dignity of those God created and called good. This is why the church's silence on racial harm has always been a theological failure, not merely a political one.",
  },
  {
    title: "Racial Trauma Is Real and Physiological",
    body: "Racial trauma — the cumulative psychological and physical harm of experiencing racism, discrimination, and racial violence — is recognized by the American Psychological Association as a genuine form of trauma. Symptoms overlap with PTSD: hypervigilance, intrusive memories, emotional numbing, and chronic physiological stress. Naming this correctly matters. People are not 'too sensitive.' They are carrying real wounds that require real healing.",
  },
  {
    title: "Lament for Racial Suffering Has Biblical Precedent",
    body: "The Hebrew people were enslaved, oppressed, and systematically dehumanized in Egypt for four hundred years. Their cry reached God, and God described it as a suffering He had personally witnessed: 'I have surely seen the affliction of my people... and have heard their cry' (Exodus 3:7). God hears the cry of the racially oppressed. He names it. He acts. The church is called to do the same — to see, hear, and act.",
  },
  {
    title: "Reconciliation Requires Acknowledgment, Not Just Sentiment",
    body: "Paul's vision in Galatians 3:28 — 'there is neither Jew nor Greek... you are all one in Christ Jesus' — is not a declaration that racial identity no longer exists or that historical harm no longer matters. It is an eschatological destination that requires intentional work to approach. Biblical reconciliation in the Old Testament consistently required confession, restitution, and changed behavior — not simply declarations of unity.",
  },
  {
    title: "The Church Has a Complicated History and a Hopeful Calling",
    body: "The American church has both perpetuated racial harm (through the complicity of white denominations with slavery and segregation) and birthed movements of extraordinary courage (the Black church's role in the civil rights movement; martyrs of every race who died for racial justice). Holding this complexity honestly — neither excusing the past nor despairing of the future — is part of mature discipleship. The Spirit is still working in and through the church on racial justice.",
  },
];

const voices = [
  {
    name: "Dr. Chanequa Walker-Barnes",
    title: "Author, 'I Bring the Voices of My People: A Womanist Vision for Racial Reconciliation'",
    quote: "Racial reconciliation requires more than friendship. It requires dismantling the structures that make racial harm possible — and that requires those with power to give something up. The question for white Christians is not whether they love their Black brothers and sisters, but whether they love them enough to lose something.",
  },
  {
    name: "Bryan Stevenson",
    title: "Founder, Equal Justice Initiative; Author, 'Just Mercy'",
    quote: "The opposite of poverty is not wealth. The opposite of poverty is justice. Each of us is more than the worst thing we've ever done. We need to be willing to get close to the places that hurt, to the darkness. That's where the work is.",
  },
  {
    name: "Dr. Jemar Tisby",
    title: "Author, 'The Color of Compromise'",
    quote: "The American church did not simply fail to resist racism — it actively constructed the theological and social frameworks that made racial hierarchy feel natural and even God-ordained. Acknowledging this history is not an attack on the church. It is how the church takes seriously the call to repentance.",
  },
  {
    name: "Austin Channing Brown",
    title: "Author, 'I'm Still Here: Black Dignity in a World Made for Whiteness'",
    quote: "I have seen white people want reconciliation so badly that they skip past the part where they have to change. They want the unity but not the work, the relationship but not the reckoning. Real reconciliation costs something.",
  },
];

const practices = [
  {
    title: "Naming and Validating Your Experience",
    body: "One of the most harmful aspects of racial gaslighting — being told you imagined or exaggerated a racist incident — is how it makes people doubt their own perceptions. Counter this by naming your experiences specifically, in a journal or to a trusted person: what happened, how it felt, what it cost you. You are not making it up. Your experience is real and deserves to be witnessed.",
  },
  {
    title: "Finding a Culturally Competent Therapist",
    body: "Therapy for racial trauma is most effective with a therapist who understands racial dynamics — ideally a therapist who shares your racial background, or one who has explicitly trained in multicultural competency and racial trauma. The Therapy for Black Girls directory (therapyforblackgirls.com), National Alliance for Mental Illness (nami.org), and Inclusive Therapists (inclusivetherapists.com) can help you find culturally-informed providers.",
  },
  {
    title: "Engaging in Lament Prayer",
    body: "Bring your racial grief directly to God. Use the Psalms of lament (Pss. 10, 13, 22, 55, 88) as templates — cry out the injustice, ask why God seems absent, and end not with forced resolution but with fragile trust. God is not threatened by your anger about racial injustice. He is the God who heard the cry of the enslaved in Egypt. He hears yours.",
  },
  {
    title: "Building Community With Those Who Understand",
    body: "Racial trauma recovery is strengthened by community — particularly community with others who share your racial background and can witness your experience without needing you to explain or defend it. Seek out Black-led, Latino-led, or Asian-led churches or ministry communities if your primary church community is predominantly white and cannot hold your full experience. This is not separatism; it is self-care.",
  },
  {
    title: "Regulated Engagement With News and Social Media",
    body: "The constant stream of racial violence in news and social media produces real physiological stress responses and re-traumatization. Set deliberate limits: specific time windows for news, breaks from platforms during high-coverage incidents, and intentional transitions (walking, music, prayer) between consuming disturbing content and returning to daily life. You do not have to witness every incident to care about justice.",
  },
  {
    title: "Advocacy as Spiritual Practice",
    body: "For many people of color, working for racial justice is itself a form of healing — moving from helpless witness to active participant in change. Advocacy can take many forms: volunteering, voting, writing, organizing, educating, mentoring younger generations, or building culturally-affirming institutions. Find your expression of advocacy that is sustainable for your current season of life and capacity.",
  },
];

const scriptures = [
  {
    ref: "Genesis 1:27",
    text: "So God created man in his own image, in the image of God he created him; male and female he created them.",
    note: "The imago Dei is the irreducible theological claim: every human person — every person — reflects the image of God. Racism attacks this truth at its root.",
  },
  {
    ref: "Exodus 3:7",
    text: "Then the LORD said, 'I have surely seen the affliction of my people who are in Egypt and have heard their cry because of their taskmasters. I know their sufferings.'",
    note: "God sees. God hears. God knows. The oppressed did not cry into a void. The same God who responded to Egyptian slavery hears the cry of racial suffering today.",
  },
  {
    ref: "Micah 6:8",
    text: "He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?",
    note: "Justice is not optional in the prophetic tradition — it is coequal with mercy and humility as what God requires. It is not a political add-on to the gospel. It is the gospel embodied.",
  },
  {
    ref: "Galatians 3:28",
    text: "There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.",
    note: "This is not a claim that difference doesn't exist — it is a claim about ultimate belonging and worth. The eschatological community of Christ has no racial hierarchy. The church is called to inhabit this now.",
  },
  {
    ref: "Revelation 7:9",
    text: "After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne and before the Lamb.",
    note: "God's final vision is not a homogenized crowd — it is a vast, distinct, culturally diverse multitude worshipping together. Racial difference is not erased at the throne; it is honored there.",
  },
  {
    ref: "Romans 12:15",
    text: "Rejoice with those who rejoice, weep with those who weep.",
    note: "The simplest definition of solidarity. If you cannot weep when your brother or sister weeps over racial harm, something is broken in the body. Solidarity begins with witness.",
  },
];

const videos = [
  { id: "QS04WbSnxok", title: "Trust In God — Elevation Worship" },
  { id: "G2XtRuPfaAU", title: "Raise A Hallelujah — Bethel Music" },
  { id: "ej_6dVdJSIU", title: "Romans Overview Pt. 1 — BibleProject" },
  { id: "mC-zw0zCCtg", title: "Jireh — Elevation Worship & Maverick City" },
];

const JOURNAL_KEY = "vine_racial_trauma_entries";

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
    "What has racial harm cost me — in relationships, in energy, in my sense of safety?",
    "Where have I encountered the body of Christ showing up well on racial justice? Where have I seen it fail?",
    "What does Revelation 7:9 mean to me personally — the vision of every tribe and tongue around the throne?",
    "What does a sustainable commitment to racial justice look like in my current season of life?",
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

export default function RacialTraumaJusticeChristianFaith() {
  const [activeTab, setActiveTab] = useState<Tab>("Theology");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}18 0%, transparent 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "4rem 1.5rem 3rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
              Race, Justice & Faith
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
              Racial Trauma<br />
              <span style={{ color: ACCENT }}>and the Christian Faith</span>
            </h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 620, marginBottom: "1.5rem" }}>
              For Christians navigating racial harm, systemic injustice, and the complex intersection of faith and race — your wounds are real, God sees them, and the church is called to do better. Healing is possible. Justice is required.
            </p>
            <div style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 8, padding: "1rem 1.2rem", maxWidth: 520 }}>
              <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
                Crisis Line: <strong>988</strong> Suicide & Crisis Lifeline — call or text 988<br />
                <span style={{ fontWeight: 400, color: MUTED }}>Therapy for Black Girls: therapyforblackgirls.com | Inclusive Therapists: inclusivetherapists.com</span>
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
