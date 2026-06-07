"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Job Lost Everything — God Did Not Leave", verse: "Job 1:21", text: "The Lord gave and the Lord has taken away; may the name of the Lord be praised. Job's response in the moment of total material destruction was not denial. He named what was lost, grieved it, and then anchored in the character of the One who remained when everything else was gone. This is the model for catastrophic loss." },
  { title: "Shame Is Not the Message Scripture Attaches to Financial Ruin", verse: "Psalm 34:6", text: "This poor man called, and the Lord heard him; he saved him out of all his troubles. The biblical category of poverty and financial catastrophe is a place of divine attention, not divine absence. The poor who cry out are heard. There is no stigma attached to the cry — only the promise of an answer." },
  { title: "God Provides Through Means, Not Only Miracle", verse: "Philippians 4:19", text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus. This promise does not specify how God will provide — only that he will. He has provided through ravens, through manna, through a widow's oil that did not run out, through the generosity of the early church. The means vary. The provision is certain." },
  { title: "Rebuilding After Devastation Is Biblical Narrative", verse: "Nehemiah 2:17", text: "You see the trouble we are in: Jerusalem lies in ruins, and its gates have been burned with fire. Come, let us rebuild the wall of Jerusalem. Nehemiah surveyed complete destruction, named it accurately, mourned it, and then began to rebuild. The pattern — honest assessment, grief, and then incremental reconstruction — is a model for financial devastation." },
  { title: "Identity Is Not Built on What You Owned or Earned", verse: "1 Timothy 6:7-8", text: "For we brought nothing into the world, and we can take nothing out of it. But if we have food and clothing, we will be content with that. What financial devastation strips away was always provisional. What it cannot strip away — identity in Christ, the resurrection, the love of God — was always what was real." },
];

const voices = [
  { id: "v1", name: "Dave Ramsey", role: "Financial Teacher, Financial Peace University", quote: "Broke is temporary. Poor is a mindset. And neither defines what God thinks of you.", bio: "Ramsey himself went bankrupt in his late 20s before rebuilding. His financial program, while focused on practical rebuilding, is grounded in a theology of stewardship and the belief that financial ruin is survivable and reversible." },
  { id: "v2", name: "Tim Keller", role: "Author, Counterfeit Gods", quote: "When money becomes a god, its loss becomes a catastrophe that attacks not just your circumstances but your identity and your relationship with the actual God.", bio: "Keller's analysis of money as idolatry helps people understand why financial devastation can feel like spiritual annihilation — because for many, money had been functioning as a false foundation. The demolition of idols is painful but necessary." },
  { id: "v3", name: "Ron Blue", role: "Author, Master Your Money", quote: "The question is not how much you have but whether what you have is held loosely enough that its loss does not destroy you.", bio: "Blue, a Christian financial planner, has counseled thousands through financial crisis. His work integrates biblical stewardship theology with practical financial rebuilding, specifically addressing the Christian who has experienced catastrophic loss." },
  { id: "v4", name: "Philip Yancey", role: "Author, Disappointment with God", quote: "God does not promise comfort. He promises presence. The question financial devastation forces is whether we believed in a God who guarantees prosperity — or the one who actually exists.", bio: "Yancey's examination of prosperity theology and its failure addresses what happens to faith when the promises we thought were made are not kept. He helps survivors distinguish genuine faith from the version that only holds when things go well." },
];

const practices = [
  { icon: "🛑", title: "Stop and Assess the Actual Numbers", text: "Financial devastation produces shame that prevents honest assessment. The first step is knowing the actual numbers: total assets, total liabilities, monthly income, monthly minimum obligations. Whatever the number is — however frightening — it is manageable only if it is known." },
  { icon: "📞", title: "Contact a Nonprofit Credit Counselor", text: "The National Foundation for Credit Counseling (NFCC) connects people with nonprofit credit counselors who provide honest assessment and a realistic plan. Unlike debt settlement companies, nonprofit counselors do not profit from your crisis. This is the first professional call to make." },
  { icon: "🏛️", title: "Understand Your Legal Options Honestly", text: "Bankruptcy is not a moral failure — it is a legal mechanism that exists to provide individuals a path forward when debt has become unsustainable. Consult a bankruptcy attorney (many offer free consultations) to understand whether your situation makes it relevant before ruling it out from shame." },
  { icon: "🤝", title: "Tell the Church — This Is Exactly What Benevolence Funds Are For", text: "Many Christians never access church benevolence funds out of pride. These funds were established precisely for catastrophic need. Contact your pastor or elder and name the situation fully. The body of Christ sharing material resources is New Testament Christianity." },
  { icon: "📖", title: "Read Nehemiah as a Rebuilding Manual", text: "Nehemiah surveyed ruins, wept, prayed, made a specific plan, faced opposition, and completed the work. The pattern is instructive: honest assessment, grief, prayer, plan, incremental action, perseverance against the voices that say it cannot be done." },
  { icon: "🧠", title: "Get Therapy for the Psychological Dimensions", text: "Financial devastation causes grief, shame, anxiety, and sometimes suicidal ideation. If you are experiencing any of these, a therapist is not optional — it is necessary care. The psychological weight of financial catastrophe is real and treatable. Call 988 if you are in crisis." },
];

const scriptures = [
  { verse: "Job 1:21", text: "Naked I came from my mother's womb, and naked I will depart. The Lord gave and the Lord has taken away; may the name of the Lord be praised." },
  { verse: "Psalm 34:6", text: "This poor man called, and the Lord heard him; he saved him out of all his troubles." },
  { verse: "Nehemiah 1:4", text: "When I heard these things, I sat down and wept. For some days I mourned and fasted and prayed before the God of heaven." },
  { verse: "Philippians 4:11-13", text: "I have learned to be content whatever the circumstances. I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation... I can do all this through him who gives me strength." },
  { verse: "Proverbs 24:16", text: "For though the righteous fall seven times, they rise again, but the wicked stumble when calamity strikes." },
  { verse: "Luke 15:17-18", text: "When he came to his senses, he said, 'How many of my father's hired servants have food to spare, and here I am starving to death! I will set out and go back to my father.'" },
];

type DevastatEntry = { id: string; date: string; loss: string; anchor: string; step: string };

export default function FinancialDevastationPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DevastatEntry[]>([]);
  const [form, setForm] = useState({ loss: "", anchor: "", step: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_financialdevastationj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.loss.trim()) return;
    const e: DevastatEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_financialdevastationj_entries", JSON.stringify(updated));
    setForm({ loss: "", anchor: "", step: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_financialdevastationj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Financial Crisis</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>When Financial Ruin Comes</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Catastrophic financial loss — bankruptcy, foreclosure, business failure, fraud, medical debt — is a specific kind of crisis that carries shame, threatens identity, and can feel like God's absence. This page is for those in the rubble, trying to find ground to stand on and a way to begin rebuilding.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
                  <span style={{ color: MUTED, fontSize: "0.8rem", fontStyle: "italic" }}>{item.verse}</span>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${GREEN}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Crisis Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — call or text if devastation has become a mental health crisis</li>
                <li><strong style={{ color: TEXT }}>NFCC</strong> — nfcc.org, nonprofit credit counseling, 1-800-388-2227</li>
                <li><strong style={{ color: TEXT }}>211.org</strong> — local emergency financial assistance</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.loss} onChange={e => setForm(f => ({ ...f, loss: e.target.value }))} placeholder="What has been lost, and what shame or fear does it carry?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.anchor} onChange={e => setForm(f => ({ ...f, anchor: e.target.value }))} placeholder="What remains true that the loss cannot take — about God, about yourself?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.step} onChange={e => setForm(f => ({ ...f, step: e.target.value }))} placeholder="The next single step in the rebuilding — the phone call, the application, the assessment" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.loss && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Loss:</strong> {e.loss}</p>}
                {e.anchor && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Anchor:</strong> {e.anchor}</p>}
                {e.step && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Next step:</strong> {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "GGCF3OPWN14", title: "The Upside-Down Kingdom", channel: "Tim Keller", description: "Keller on the economics of the kingdom — how Jesus inverts the world's assessment of what makes a life valuable and what counts as blessing." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God", channel: "R.C. Sproul — Ligonier", description: "Sproul on how God's sovereignty extends over financial catastrophe — not as punishment or abandonment but as the domain of a God who provides and restores." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Financial devastation is a form of suffering that deserves the full vocabulary of lament — honest, directed grief that trusts God enough to name the pain." },
              { videoId: "t6L-F2emwUc", title: "Joy That Produces Radical Obedience", channel: "Desiring God", description: "Piper on contentment and sufficiency in Christ — what it means to have your identity and security grounded in what cannot be taken away." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
