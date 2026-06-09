"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Barrenness in Scripture Is a Story God Enters",
    verse: "Genesis 15:2-3",
    text: "Abram said, Lord God, what will you give me, for I continue childless? Scripture does not silence the cry of the man who cannot father children. Abram's anguished question — voiced directly to God, plainly, without religious decoration — is received. God does not correct Abram for bringing this longing forward. He engages it."
  },
  {
    title: "Masculinity and Fatherhood Are Not Identical",
    verse: "Genesis 1:27",
    text: "So God created mankind in his own image — male and female he created them. The image of God is not carried in biological reproduction. Men are image-bearers of God by virtue of their humanity, not by virtue of their fertility. Male factor infertility does not diminish a man's dignity, calling, or worth before God."
  },
  {
    title: "The Grief Is Real and It Belongs to Both of You",
    verse: "Romans 8:26",
    text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. Infertility grief often runs underground in men — culturally discouraged, privately enormous. The Spirit meets the wordless groaning that has no acceptable public form. Your grief does not need to be performed to be real or to be held."
  },
  {
    title: "The Legacy You Leave Is Larger Than Biological Children",
    verse: "Isaiah 56:3-5",
    text: "God promises the eunuch — the man who cannot father children by biology — a memorial and a name better than sons and daughters. The legacy God offers is not contingent on biological reproduction. It is built through faithfulness, love, and presence — in whatever form those take."
  },
  {
    title: "Hope That Is Not Seen Is Still Hope",
    verse: "Romans 8:24-25",
    text: "Hope that is seen is not hope at all. Who hopes for what they already have? But if we hope for what we do not yet have, we wait for it patiently. The desire for a child, held in a season of infertility, is a form of hope. Whether it is fulfilled in biology, adoption, or a form of fatherhood not yet imagined — it is held by God."
  }
];

const voices = [
  {
    id: "v1",
    name: "Sheryl Paul",
    role: "Author, The Wisdom of Anxiety; Transitions counselor",
    quote: "Male infertility carries a specific silence — men are expected to support their wives through infertility without having permission to grieve their own loss. That silence accumulates, and it has consequences for the man and for the marriage.",
    bio: "Sheryl Paul's work on navigating life transitions and grief is widely applicable to infertility. She specifically acknowledges the invisible grief of the male partner whose experience is chronically minimized in clinical and social settings."
  },
  {
    id: "v2",
    name: "Juli Slattery",
    role: "Psychologist; Author, Rethinking Sexuality; Co-founder, Authentic Intimacy",
    quote: "Infertility tests a couple's intimacy at its deepest level — because the very act of trying to conceive becomes medicalized, scheduled, and performance-based. The man in this situation needs to know his worth is not determined by his sperm count.",
    bio: "Juli Slattery addresses the specific intimacy pressures that male factor infertility places on both partners. Her theological framework helps men separate biological function from identity and worth."
  },
  {
    id: "v3",
    name: "Jerry Sittser",
    role: "Author, A Grace Disguised; Professor of Theology",
    quote: "Loss is loss. Whether it is the death of a person or the death of a hoped-for future, the grief is real and it requires the same kind of honest, patient, God-attended work.",
    bio: "Jerry Sittser's framework for processing catastrophic loss — honest grief, patient waiting, and the eventual expansion that loss can produce — applies directly to infertility. His theology refuses to rush grief toward resolution."
  },
  {
    id: "v4",
    name: "Paul David Tripp",
    role: "Author, Grief: Finding Hope Again",
    quote: "Disappointment is not the absence of faith. It is the collision of hope with reality. The man who grieves his infertility is not lacking trust — he is being honest about the distance between what he hoped for and what is.",
    bio: "Paul David Tripp's recent writing on grief addresses the specific emotional territory of unfulfilled longing — including longing for family — with theological honesty and pastoral warmth."
  }
];

const practices = [
  {
    icon: "🗣️",
    title: "Name Your Own Grief — Not Just Your Wife's",
    text: "Male factor infertility is often discussed primarily in terms of its effect on the wife. Your grief — for fatherhood, for biological continuity, for the loss of expectation — is real and separate. Name it in therapy, in prayer, or in writing. It will not go away by being unspoken."
  },
  {
    icon: "🏥",
    title: "Get a Full Urological and Andrology Evaluation",
    text: "Male factor infertility has many possible causes — varicocele, hormonal imbalance, genetic factors, infection history — and some are treatable. A reproductive urologist or andrologist (not just a general OB) is the appropriate specialist. Diagnosis is not the same as prognosis."
  },
  {
    icon: "💑",
    title: "Stay Connected to Your Wife Through the Process",
    text: "Infertility can isolate partners from each other precisely when they most need connection. Schedule non-fertility conversations. Maintain intimacy that is not timed to ovulation. The marriage needs tending as an entity separate from the project of conceiving."
  },
  {
    icon: "🤝",
    title: "Consider Connecting With Other Men in This Experience",
    text: "Men experiencing infertility are largely invisible to each other. Online communities (resolve.org, reddit r/maleinfertility, dadsinfertile.com) offer connection with men who understand the specific experience. The silence is both a symptom and a cause of the suffering."
  },
  {
    icon: "🌱",
    title: "Hold Adoption and Fostering as Real Fatherhood",
    text: "If biological fatherhood is not possible, adoption and foster care are not consolation prizes. They are real fatherhood of a different route. Many men who came to adoptive parenthood through infertility report it as a fully equivalent — sometimes richer — experience. Do not mourn the adopted child as a replacement for the biological one."
  },
  {
    icon: "🙏",
    title: "Bring the Cry to God — Like Abram Did",
    text: "What will you give me, for I continue childless? Abram's prayer is a model. Bring the actual anguish — not the theological version of it, not the managed version — to God directly. He received Abram's raw cry. He will receive yours."
  }
];

const scriptures = [
  { verse: "Genesis 15:2", text: "But Abram said, 'Sovereign Lord, what can you give me since I remain childless and the one who will inherit my estate is Eliezer of Damascus?'" },
  { verse: "Romans 8:24-25", text: "For in this hope we were saved. Now hope that is seen is not hope at all. Who hopes for what they already have? But if we hope for what we do not yet have, we wait for it patiently." },
  { verse: "Isaiah 56:4-5", text: "For this is what the Lord says: 'To the eunuchs who keep my Sabbaths, who choose what pleases me and hold fast to my covenant — to them I will give within my temple and its walls a memorial and a name better than sons and daughters.'" },
  { verse: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit." },
  { verse: "Romans 8:26", text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Lamentations 3:32-33", text: "Though he brings grief, he will show compassion, so great is his unfailing love. For he does not willingly bring affliction or grief to anyone." }
];

type InfertilityEntry = { id: string; date: string; grief: string; prayer: string; hope: string };

export default function InfertilityMaleFactorPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<InfertilityEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [prayer, setPrayer] = useState("");
  const [hope, setHope] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_infertilemale_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const entry: InfertilityEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief, prayer, hope };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_infertilemale_entries", JSON.stringify(updated));
    setGrief(""); setPrayer(""); setHope("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_infertilemale_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: PURPLE, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Infertility & Faith</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Male Factor Infertility & Faith</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When the diagnosis has your name on it. When your grief is real but invisible — not talked about, not accommodated by the clinical system or the church. When the weight of your wife's suffering and your own suffering share the same room. God met Abram in this anguish. He meets you here.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${PURPLE}` : "2px solid transparent", color: tab === t ? PURPLE : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations that speak directly to the man grieving infertility — taking his specific experience seriously rather than absorbing it into a general infertility narrative.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Psychologists and theologians who address infertility grief — including the specific silence of the male experience.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Medical, relational, and spiritual steps for navigating male factor infertility with integrity.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>Support Resources</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — infertility is a risk factor for depression.<br />
                RESOLVE (National Infertility Association): <strong style={{ color: TEXT }}>resolve.org</strong><br />
                Hannah's Prayer (Christian infertility community): <strong style={{ color: TEXT }}>hannah.org</strong>
              </p>
            </div>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the man who brought his infertility to God — and waited.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${PURPLE}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space for the grief that has had no public place. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: PURPLE }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What am I grieving that I haven't said out loud?</label>
                <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What do I want to say to God — like Abram did?</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What hope am I holding — however tentative?</label>
                <textarea value={hope} onChange={e => setHope(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.grief && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>GRIEF</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.grief}</p></div>}
                  {e.prayer && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>PRAYER</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.prayer}</p></div>}
                  {e.hope && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>HOPE</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.hope}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching on infertility grief, male identity, and the fatherhood God offers beyond biology.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Grief of Infertility: When the Expected Life Doesn't Arrive</div>
              <VideoEmbed videoId="oNpTha80yyE" title="The Grief of Infertility: When the Expected Life Doesn't Arrive" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Male Identity and the God Who Sees</div>
              <VideoEmbed videoId="4Eg_di-O8nM" title="Male Identity and the God Who Sees" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Waiting on God: Faith in Seasons of Unfulfilled Longing</div>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Waiting on God: Faith in Seasons of Unfulfilled Longing" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Fatherhood Beyond Biology: Adoption, Foster Care, and Legacy</div>
              <VideoEmbed videoId="7TBHqMqBmBo" title="Fatherhood Beyond Biology: Adoption, Foster Care, and Legacy" />
            </div>
          </div>
        )}

      </div>
    </div>
      <Footer />
    </>
  );
}
