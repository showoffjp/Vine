"use client";
import { useState, useEffect } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_postpartum_entries";

interface JournalEntry { id: string; date: string; text: string; }

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", background: CARD, border: `1px solid ${BORDER}` }}>
      {playing ? (
        <iframe
          width="100%"
          style={{ aspectRatio: "16/9", display: "block" }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          onClick={() => setPlaying(true)}
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0d0820 0%, #080614 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(107,79,187,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `16px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function PostpartumDepressionPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]")); } catch { setEntries([]); }
  }, []);

  function saveEntry() {
    if (!draft.trim()) return;
    const updated = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Postpartum Depression &amp; Christian Faith</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            What You Are Feeling Is Not a Failure to Love
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Postpartum depression and anxiety affect 1 in 5 new mothers. The silence around it in Christian communities — where new babies are supposed to be pure joy — means many women suffer alone. Nothing is wrong with you spiritually.
          </p>
        </div>

        <div style={{ background: "#110d1f", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>If You Are in Crisis: </strong>
          <span style={{ color: MUTED }}>988 Lifeline — call or text </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Postpartum Support International: </span>
          <strong style={{ color: TEXT }}>1-800-944-4773</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; PSI text: text HOME to </span>
          <strong style={{ color: TEXT }}>741741</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Postpartum Depression Is Not a Sin", body: "Postpartum depression is a medical condition triggered by the dramatic hormonal changes of childbirth, compounded by sleep deprivation, physical recovery, and the complete reorganization of a person's life. It is not caused by insufficient love for the baby, insufficient faith in God, or spiritual failure of any kind. When brain chemistry is disrupted, mood, cognition, and affect are disrupted. This is physiology, not theology." },
              { title: "The Church's Silence Has Caused Harm", body: "In communities where new motherhood is surrounded by exclusively celebratory framing — where babies are gifts from God and motherhood is a holy calling — the woman who feels nothing, or feels terror, or cannot bond, or cries constantly, is profoundly isolated by the gap between her experience and the expected narrative. Many Christian women report delaying care for PPD because they feared what their honesty would mean about them as mothers and as Christians." },
              { title: "Intrusive Thoughts Are a Symptom, Not a Wish", body: "One of the most isolating symptoms of postpartum OCD is intrusive thoughts about harm to the baby. These thoughts are ego-dystonic: they horrify the person having them. They are a symptom of a hyperactive threat-detection system focused on the most precious thing in the person's life. Having these thoughts does not mean you want to act on them. They respond to treatment. Tell your doctor or therapist honestly — the honest disclosure is what gets you help." },
              { title: "Postpartum Psychosis Is a Psychiatric Emergency", body: "Postpartum psychosis — a rare but severe condition involving hallucinations, delusions, confusion, and rapid mood swings — is a psychiatric emergency requiring immediate medical care. If you or someone you know is experiencing postpartum psychosis, go to an emergency room. This is a medical emergency that is highly treatable with rapid intervention. Postpartum Support International has emergency protocols at postpartum.net." },
              { title: "Mothers in Scripture Were Not Always Happy", body: "Hannah wept and refused to eat while praying for a child. Rachel cried out in despair. The grief and distress of mothers in Scripture is not edited out or spiritualized away. The God who heard Hannah's silent anguish and called it prayer hears yours. You are not required to perform gratitude you do not feel in order to be heard." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ color: ACCENT, fontSize: "1.1rem", margin: "0 0 12px", fontWeight: 500 }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>{body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Karen Kleiman", role: "Founder, Postpartum Stress Center; author of Tokens of Affection", quote: "The most dangerous myth in postpartum mental health is that if a woman really loves her baby, she will automatically feel happy and bonded. Love does not prevent PPD. PPD does not mean the absence of love.", note: "Kleiman has been at the forefront of postpartum mental health care for decades. Her work distinguishes between the myth of instant maternal bliss and the clinical reality that one in five women experience a perinatal mood disorder." },
              { name: "Hannah", role: "Old Testament figure, 1 Samuel 1", quote: "And she was deeply distressed and prayed to the Lord and wept bitterly... I have been speaking out of my great anxiety and vexation.", note: "Hannah prayed out of misery so intense that Eli thought she was drunk. God heard. Her prayer is one of the Bible's most direct models of bringing raw, uncontrolled distress to God without religious performance." },
              { name: "Alexandra Sacks", role: "Reproductive psychiatrist and contributor to The New York Times", quote: "Becoming a mother is a massive psychological transition — the death of one identity and the birth of another. We have named this process in other cultures for thousands of years. In Western medicine we mostly call it nothing, and then we are surprised when women struggle.", note: "Sacks introduced the concept of matrescence (the becoming of a mother) as a fundamental identity reorganization that takes time and involves grief alongside joy." },
              { name: "Ann Voskamp", role: "Author of One Thousand Gifts", quote: "There is a grace for the valley. There is a grace for the days when you cannot find what you are supposed to feel. Joy is not the absence of pain. It is the presence of God in the pain.", note: "Voskamp's theology of eucharisteo — the practice of gratitude in the midst of grief — does not require pretending grief is not real. It finds God in the specific texture of the hard season." },
            ].map(({ name, role, quote, note }) => (
              <div key={name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: "1.05rem" }}>{name}</div>
                  <div style={{ color: ACCENT, fontSize: 13, marginTop: 2 }}>{role}</div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16, margin: "0 0 12px", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{note}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Tell Your Doctor or Midwife What You Are Experiencing", body: "The Edinburgh Postnatal Depression Scale (EPDS) is the standard screening tool for postpartum depression. Your OB, midwife, or pediatrician should screen you at your postpartum visit. If they do not, bring it up yourself. Be honest about intrusive thoughts. Screening does not mean judgment; it means access to care. PPD is one of the most treatable conditions in medicine when identified early." },
              { title: "Postpartum Support International (PSI)", body: "PSI (postpartum.net) is the central resource organization for postpartum mood and anxiety disorders. They maintain a free helpline (1-800-944-4773), an online support group directory, a provider directory, and a warm line for people who need to talk to someone who understands. The text option is available for those who cannot speak privately." },
              { title: "Medication During Breastfeeding", body: "Many women delay treatment for PPD because they are concerned about medication while breastfeeding. Some SSRIs (particularly sertraline) have significant safety data for breastfeeding mothers. The risk of untreated PPD to both mother and infant almost always outweighs the risk of low-concentration medication exposure in breast milk. A reproductive psychiatrist or your OB can advise. The decision should be made with accurate information, not fear." },
              { title: "Therapy: IPT and CBT for Perinatal Depression", body: "Interpersonal Therapy (IPT) and Cognitive Behavioral Therapy (CBT) both have strong evidence bases for perinatal depression and anxiety. IPT specifically addresses the role transitions and relationship changes that accompany new parenthood. Postpartum Support International maintains a directory of PSI-trained therapists at postpartum.net." },
              { title: "Accept Help Without the Performance of Gratitude", body: "When people offer help after a new baby, accept it. You do not have to perform wellness to receive support. You do not have to say everything is wonderful to deserve a casserole, a babysitting shift, or a grocery run. The people who love you do not need you to be fine. They need you to be honest." },
              { title: "For Partners and Support People", body: "Partners of women with PPD need their own information and support. The most important thing a partner can do: take the baby so the mother can sleep, take the logistics off her plate, and make the medical appointments and drive to them. NAMI and PSI both have resources for partners and families." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ color: ACCENT, fontSize: "1.05rem", margin: "0 0 10px", fontWeight: 600 }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "1 Samuel 1:10", text: "She was deeply distressed and prayed to the Lord and wept bitterly.", note: "Hannah's prayer came out of profound anguish. God called it prayer. You do not need composed language to be heard." },
              { ref: "Isaiah 49:15", text: "Can a woman forget her nursing child, that she should have no compassion on the son of her womb? Even these may forget, yet I will not forget you.", note: "Even the maternal bond — the standard of deepest human attachment — can fail under conditions of crisis. God acknowledges this and asserts divine faithfulness beyond it." },
              { ref: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit.", note: "Crushed in spirit is postpartum depression. God is near to this condition specifically." },
              { ref: "1 Kings 19:5–6", text: "And he lay down and slept under a broom tree. And behold, an angel touched him and said to him, Arise and eat. And he looked, and behold, there was at his head a cake baked on hot stones and a jar of water.", note: "After profound collapse, God's response was physical care: food, water, and the instruction to sleep. Not rebuke. Rest and nourishment." },
              { ref: "Romans 8:26", text: "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.", note: "When you do not have words — when you can only cry — the Spirit is praying. Your silence is held." },
              { ref: "Matthew 11:28", text: "Come to me, all who labor and are heavy laden, and I will give you rest.", note: "The invitation is to the exhausted and burdened. Not the composed, not the grateful, not the ones who have it together. The heavy laden." },
            ].map(({ ref, text, note }) => (
              <div key={ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8, fontSize: "0.95rem" }}>{ref}</div>
                <div style={{ color: TEXT, fontStyle: "italic", marginBottom: 10, lineHeight: 1.7, fontSize: "1rem" }}>&ldquo;{text}&rdquo;</div>
                <div style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
              <h3 style={{ color: ACCENT, margin: "0 0 8px", fontSize: "1.05rem" }}>Your Reflection Space</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", margin: "0 0 16px", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What has this season been like, honestly? What have you been unable to say out loud? What do you need?"
                style={{ width: "100%", minHeight: 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 14, color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, border: "none", borderRadius: 8, color: TEXT, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>Delete</button>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="G-2e9mMf7E8" title="When Motherhood Is Hard — Postpartum and Faith" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="God Hears the Weeping: Hannah and Postpartum Anguish" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Mental Health After Baby — Breaking the Silence" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="The Heavy Laden: Matthew 11 for Exhausted Mothers" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>What you are feeling is not a failure to love. You are unwell, and you deserve care.</p>
          <p style={{ marginTop: 8 }}>PSI: 1-800-944-4773 &nbsp;|&nbsp; postpartum.net &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
  );
}
