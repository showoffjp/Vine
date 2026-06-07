"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Grief and Hope Are Not Opponents",
    verse: "Romans 8:24-25",
    text: "In this hope we were saved. Hope that is seen is not hope at all. Who hopes for what they already have? But if we hope for what we do not yet have, we wait for it patiently. Biblical hope is not certainty — it is a posture of waiting that does not require the absence of grief. Carrying anxiety and hope simultaneously in pregnancy after loss is not a lack of faith. It is hope being honest about what it has already cost."
  },
  {
    title: "Each Child Is Known by Name — Not by Outcome",
    verse: "Psalm 139:13-16",
    text: "You created my inmost being; you knit me together in my mother's womb. All the days ordained for me were written in your book before one of them came to be. The child you are carrying now is known — individually, fully — regardless of outcome. And so are the children you have lost. Neither is less real because of what happened or what might happen."
  },
  {
    title: "Anxiety Is Not the Absence of Faith",
    verse: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus. This verse is not a command to stop feeling anxious — it is an invitation to bring the anxiety to God. The peace that follows does not require anxiety to have disappeared first."
  },
  {
    title: "You Are Permitted to Both Celebrate and Protect Yourself",
    verse: "Ecclesiastes 3:4",
    text: "A time to weep and a time to laugh, a time to mourn and a time to dance. There is a time for celebration — and you have permission to wait for it to come naturally, to protect yourself from premature announcements, to hold the pregnancy quietly until you feel safe. There is no spiritual requirement to perform joy before you feel it."
  },
  {
    title: "The Spirit Carries What You Cannot Pray",
    verse: "Romans 8:26",
    text: "We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. In the weeks of a new pregnancy after loss, prayer is often just the breath between the fear. This is enough. The Spirit takes what you cannot form into words and carries it to the Father."
  }
];

const voices = [
  {
    id: "v1",
    name: "Joanna Rowland",
    role: "Author, The Memory Box; pregnancy loss advocate",
    quote: "Pregnancy after loss is not the same as pregnancy before. The innocence is gone. What you carry into this pregnancy includes every loss that came before — and it is right to acknowledge that.",
    bio: "Joanna Rowland writes specifically about the grief of pregnancy loss and the complex terrain of pregnancy after loss. She gives language to the anxiety, the divided heart, and the need to hold grief and hope simultaneously."
  },
  {
    id: "v2",
    name: "Sheryl Paul",
    role: "Transitions counselor; Author, The Wisdom of Anxiety",
    quote: "Anxiety in pregnancy after loss is not pathological — it is the appropriate response of a person who knows what can happen. The goal is not to eliminate the anxiety but to metabolize it in a way that doesn't consume the entire pregnancy.",
    bio: "Sheryl Paul's work on anxiety as information — not malfunction — is particularly relevant for pregnancy after loss, where anxiety is not only normal but rational. Her framework helps parents hold anxiety without being held by it."
  },
  {
    id: "v3",
    name: "Megan Devine",
    role: "Therapist; Author, It's OK That You're Not OK",
    quote: "You can love this pregnancy and grieve the ones before. You can hope for this child and still honor the ones you lost. These are not contradictions — they are the truth.",
    bio: "Megan Devine's framework for grief that does not resolve is especially applicable to pregnancy after loss, where a new pregnancy does not erase the losses that preceded it — and where grief can coexist with genuine hope."
  },
  {
    id: "v4",
    name: "Beth Forbus",
    role: "Author, She Laughs Again; speaker on pregnancy loss",
    quote: "The child you are carrying deserves to be celebrated as themselves — not as the replacement for the ones you lost, and not held at arm's length because you are afraid. Learning to love someone while being afraid of losing them is the work.",
    bio: "Beth Forbus speaks specifically to those navigating pregnancy after loss and the specific emotional work of learning to attach to a new pregnancy after previous attachment has been followed by grief. Her pastoral voice is warm and honest."
  }
];

const practices = [
  {
    icon: "🏥",
    title: "Ask for Additional Monitoring If It Helps",
    text: "You are allowed to ask for more appointments, more ultrasounds, or more communication from your OB or midwife. Not every provider will agree — but many practices specifically accommodate pregnancy-after-loss patients with additional support. Ask explicitly. You have been through something real."
  },
  {
    icon: "📣",
    title: "Share the News on Your Own Timeline",
    text: "There is no obligation to announce this pregnancy when cultural norms suggest. You may share early because you need support, or you may keep it private until you feel safer. Both are legitimate. You have learned that early announcements can mean early grief management — and you are permitted to protect yourself."
  },
  {
    icon: "🧠",
    title: "Find a Therapist or Counselor Who Knows Perinatal Grief",
    text: "Perinatal grief (grief related to pregnancy, birth, or infant loss) is a specialized area of clinical training. A therapist familiar with this territory understands both the grief you carry and the anxiety of a new pregnancy. Postpartum Support International (postpartum.net) can help you find one."
  },
  {
    icon: "📔",
    title: "Create Rituals That Hold Both",
    text: "A journal with two sections — one for the child you lost, one for this pregnancy — honors both without conflating them. A small ritual (a candle, a prayer, a stone) on the anniversary of the loss, while carrying this pregnancy, honors the complexity. You do not have to choose between grieving and celebrating."
  },
  {
    icon: "👥",
    title: "Connect With Others in Pregnancy After Loss",
    text: "The experience of pregnancy after loss is specific enough to benefit from specific community. The PALS community (pregnancyafterloss.com), the Pregnancy After Loss Support organization (pregnancyafterlosssupport.com), and online communities of people who understand the divided heart are invaluable."
  },
  {
    icon: "🙏",
    title: "Pray for This Child By Name — Even Tentatively",
    text: "Learning to attach to this pregnancy while protecting yourself from premature hope is a spiritual practice, not just a psychological one. Praying for this child — by name if you have chosen one, or simply as 'this child' — is an act of love that also opens your heart to what God is doing."
  }
];

const scriptures = [
  { verse: "Romans 8:24-25", text: "For in this hope we were saved. Now hope that is seen is no hope at all. Who hopes for what they already have? But if we hope for what we do not yet have, we wait for it patiently." },
  { verse: "Psalm 139:13-14", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made." },
  { verse: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
  { verse: "Isaiah 43:1", text: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine." },
  { verse: "Romans 8:26", text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." }
];

type PregnancyLossEntry = { id: string; date: string; fear: string; hope: string; prayer: string };

export default function PregnancyAfterLossPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PregnancyLossEntry[]>([]);
  const [fear, setFear] = useState("");
  const [hope, setHope] = useState("");
  const [prayer, setPrayer] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_pregnancyafterlosss_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!fear.trim()) return;
    const entry: PregnancyLossEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), fear, hope, prayer };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_pregnancyafterlosss_entries", JSON.stringify(updated));
    setFear(""); setHope(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_pregnancyafterlosss_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: PURPLE, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Pregnancy & Loss</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Pregnancy After Loss</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When hope and grief share the same heartbeat. When you cannot simply celebrate because you know what celebration can cost. When loving this child means risking the grief you already know. This is not a failure of faith. It is hope being honest — and God meets you here.
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations for the divided heart of pregnancy after loss — where grief and hope are required to coexist.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Writers and counselors who know the specific territory of pregnancy after loss — and how to navigate it.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Practical and spiritual practices for navigating a pregnancy that carries the weight of what came before.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>Crisis Support</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — pregnancy after loss carries significant anxiety and depression risk.<br />
                Postpartum Support International: <strong style={{ color: TEXT }}>postpartum.net</strong><br />
                SHARE (pregnancy loss support): <strong style={{ color: TEXT }}>nationalshare.org</strong>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the parent carrying anxiety and hope in the same body — and for the child who is already known.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space for the fear, the hope, and the prayers too small to say out loud. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: PURPLE }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What fear am I carrying about this pregnancy today?</label>
                <textarea value={fear} onChange={e => setFear(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What hope am I allowing myself to hold — however carefully?</label>
                <textarea value={hope} onChange={e => setHope(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What do I want to say to this child — or to God about this child?</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.fear && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>FEAR</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.fear}</p></div>}
                  {e.hope && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>HOPE</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.hope}</p></div>}
                  {e.prayer && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>PRAYER</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.prayer}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching and testimony for the parent carrying grief and hope simultaneously in a new pregnancy.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Pregnancy After Loss: Navigating the Divided Heart</div>
              <VideoEmbed videoId="oNpTha80yyE" title="Pregnancy After Loss: Navigating the Divided Heart" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Grief and Hope: They Are Not Enemies</div>
              <VideoEmbed videoId="4Eg_di-O8nM" title="Grief and Hope: They Are Not Enemies" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>God Knows This Child: Psalm 139 for Pregnancy</div>
              <VideoEmbed videoId="mC-zw0zCCtg" title="God Knows This Child: Psalm 139 for Pregnancy" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Weight of Waiting: Faith in the Uncertain</div>
              <VideoEmbed videoId="7TBHqMqBmBo" title="The Weight of Waiting: Faith in the Uncertain" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
