"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Covenant Encompasses the Body in All Its Conditions", verse: "Mark 10:9", text: "Therefore what God has joined together, let no one separate. The marriage covenant was made with whole persons — including their bodies and futures — not with idealized healthy versions of each other. Chronic illness is a circumstance the covenant was designed to hold." },
  { title: "Love Is Defined by Staying When It Costs Something", verse: "1 Corinthians 13:7", text: "Love always protects, always trusts, always hopes, always perseveres. The Pauline definition of love is not primarily romantic feeling — it is persistent action that endures hardship. The marriage of a chronically ill person and their spouse is, structurally, a laboratory for this kind of love." },
  { title: "The Ill Spouse Is Not Less Valuable — They Are More Visible", verse: "2 Corinthians 4:16", text: "Though outwardly we are wasting away, yet inwardly we are being renewed day by day. The body that is failing is not the whole person. The illness makes it harder to see the full person — but the inner renewal is real and present, even when physical strength is not." },
  { title: "Caregiver and Ill Spouse Both Carry Real Burdens", verse: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ. In chronic illness marriage, the distribution of burden is asymmetrical and often stays asymmetrical for long periods. Both partners carry something real. Both need support, honesty, and care. The caregiving spouse's grief and exhaustion is not less legitimate." },
  { title: "Lament Is a Form of Faithfulness in Long Suffering", verse: "Psalm 13:1-2", text: "How long, Lord? Will you forget me forever? How long will you hide your face from me? How long must I wrestle with my thoughts and day after day have sorrow in my heart? The prolonged suffering of chronic illness makes this psalm permanently current. Crying out is prayer, not failure." },
];

const voices = [
  { id: "v1", name: "Kate Bowler", role: "Author, Everything Happens for a Reason (and Other Lies)", quote: "I am learning to live in the space between the life I wanted and the life I have.", bio: "Diagnosed with stage IV colon cancer in her 30s while married with a young child, Bowler writes with clarity and wit about chronic illness's effect on marriage, family, and faith — rejecting prosperity gospel while holding tenaciously to God." },
  { id: "v2", name: "Gary Thomas", role: "Author, Sacred Marriage", quote: "What if God designed marriage not to make us happy but to make us holy? Chronic illness forces this question to its conclusion.", bio: "Thomas argues that marriage's purpose extends beyond mutual fulfillment to mutual formation in Christlikeness. Chronic illness, in his framework, is not a failure of marriage but one of its most demanding classrooms." },
  { id: "v3", name: "Amy Young", role: "Author, Looming Transitions", quote: "The hardest thing about being a caregiver for someone you love is grieving the marriage you thought you were going to have.", bio: "Young addresses the grief and identity questions for the well spouse in chronic illness marriages — how to grieve real losses while staying committed, and how the church can better support couples in this situation." },
  { id: "v4", name: "Joni Eareckson Tada", role: "Founder, Joni and Friends, author", quote: "My husband Ken married a quadriplegic. I married a man who would spend his life caring for one. Neither of us knew what we were choosing, but the love that held us was larger than our choosing.", bio: "Joni and Ken Tada's marriage — across decades of quadriplegia and chronic pain — is one of the most documented examples of covenant love holding under chronic disability. Their story and writing directly address the couple navigating illness together." },
];

const practices = [
  { icon: "🗣️", title: "Name Both Griefs Honestly", text: "The ill spouse grieves their body, their former capacities, their dependence. The well spouse grieves the shared future they imagined, the lost partnership, the ongoing exhaustion. Both griefs are real. Creating space to name them — separately and together — prevents resentment from accumulating underground." },
  { icon: "🤝", title: "Find Support for the Caregiving Spouse", text: "The well spouse's needs are often invisible because the ill spouse's needs are more visible and urgent. Caregiver burnout damages both the caregiver and the ill person. The well spouse needs their own therapist, support group, or caregiver respite — not as selfishness but as sustainability." },
  { icon: "📅", title: "Protect One Weekly Ritual That Is Just About the Relationship", text: "Chronic illness can turn a marriage entirely into a medical management arrangement. Protect one recurring ritual — a shared meal, a show, a conversation walk — that is not about the illness, the medications, or the care plan. This maintains the person-to-person relationship beneath the patient-caregiver dynamic." },
  { icon: "🏥", title: "Get a Chronic Illness-Informed Couples Therapist", text: "Ordinary couples therapy does not always address the specific dynamics of chronic illness marriage — the role reversals, the grief, the asymmetric burden, the sexuality changes. Seek a therapist who names chronic illness as a specialty. The American Association for Marriage and Family Therapy has a therapist finder." },
  { icon: "📖", title: "Pray Together Even When Prayer Feels Hollow", text: "Chronic illness can hollow out the spiritual practice of both spouses. Maintaining a shared prayer practice — even brief, even when it feels like nothing — is both relational and spiritual maintenance. Praying the Psalms together provides language when personal words fail." },
  { icon: "🌱", title: "Redefine What the Marriage Can Still Be", text: "The marriage will not be what it was before illness. Grieving that clearly is necessary. Then the question becomes: what can this marriage actually be now? Some couples find that illness, over time, deepens rather than destroys — forcing an honesty and dependency that was never present in the healthy years." },
];

const scriptures = [
  { verse: "1 Corinthians 13:4-7", text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud... It always protects, always trusts, always hopes, always perseveres." },
  { verse: "Ruth 1:16-17", text: "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God. Where you die I will die, and there I will be buried." },
  { verse: "Ecclesiastes 4:9-10", text: "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up." },
  { verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'" },
  { verse: "Psalm 46:1-2", text: "God is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
];

type ChronicIllnessEntry = { id: string; date: string; grief: string; grace: string; together: string };

export default function ChronicIllnessMarriagePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ChronicIllnessEntry[]>([]);
  const [form, setForm] = useState({ grief: "", grace: "", together: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_chronicillnessmarriagej_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.grief.trim()) return;
    const e: ChronicIllnessEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_chronicillnessmarriagej_entries", JSON.stringify(updated));
    setForm({ grief: "", grace: "", together: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_chronicillnessmarriagej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Marriage and Illness</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>When Chronic Illness Enters a Marriage</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Chronic illness strains the structures of marriage in ways that are specific, sustained, and often unacknowledged by the church. This page is for both the ill spouse and the well spouse — two people holding a covenant under conditions neither planned for, with the grace they can find.</p>

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
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>Caregiver Action Network</strong> — caregiveraction.org, 1-855-227-3640</li>
                <li><strong style={{ color: TEXT }}>Well Spouse Association</strong> — wellspouse.org, support for caregiving spouses</li>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — if the weight has become a mental health crisis</li>
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
              <textarea value={form.grief} onChange={e => setForm(f => ({ ...f, grief: e.target.value }))} placeholder="What loss or grief are you carrying today — as the ill spouse, the well spouse, or both?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.grace} onChange={e => setForm(f => ({ ...f, grace: e.target.value }))} placeholder="Where have you seen grace or strength you did not expect?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.together} onChange={e => setForm(f => ({ ...f, together: e.target.value }))} placeholder="One thing you can do to tend the relationship this week, not just the illness" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.grief && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Grief:</strong> {e.grief}</p>}
                {e.grace && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Grace:</strong> {e.grace}</p>}
                {e.together && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Together:</strong> {e.together}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "sJSFmO6gGlo", title: "Caregiver Burnout and the Gospel", channel: "Joni and Friends", description: "Joni Tada and the Joni and Friends team address the specific spiritual and emotional needs of caregiving spouses, and what the gospel has to say to those in the exhaustion of sustained care." },
              { videoId: "7KMPN9OLoNo", title: "Suffering and God's Grace", channel: "Joni Eareckson Tada — Desiring God", description: "Joni's testimony of how chronic disability changed and deepened her marriage, and what grace has looked like over decades of illness and dependence." },
              { videoId: "m2uDNE9kcSE", title: "Caring for the Caregiver", channel: "Focus on the Family", description: "Practical and spiritual guidance for those caring for a chronically ill spouse — how to sustain love when the cost is high and the end is not in sight." },
              { videoId: "ZR-J8DQGFOI", title: "When to Keep Trying in a Difficult Marriage", channel: "Leslie Vernick", description: "Vernick addresses how to assess and strengthen a marriage under significant strain, distinguishing what requires professional help from what requires renewed commitment." },
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
