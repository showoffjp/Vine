"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Each Loss Deserves Its Own Name",
    verse: "Psalm 139:13",
    text: "You created my inmost being; you knit me together in my mother's womb. Each pregnancy that ended was a person being formed — unique, known to God, already held. Recurrent loss does not make each loss smaller. The accumulation of grief is not irrational; it is the weight of multiple real persons, each one individually mourned by the God who knit them."
  },
  {
    title: "The Accumulation of Grief Is Not Faithlessness",
    verse: "Lamentations 3:20",
    text: "My soul continually remembers it and is bowed down within me. Lamentations was written for accumulated suffering — not a single blow but layer upon layer of loss. The image of a soul bowed down is not the image of someone who has given up on God. It is the image of someone being honest with God about how much they are carrying."
  },
  {
    title: "Rachel Weeping: God Does Not Silence the Grief of Lost Children",
    verse: "Jeremiah 31:15-16",
    text: "A voice is heard in Ramah, mourning and great weeping, Rachel weeping for her children and refusing to be comforted, because they are no more. The Lord said: Restrain your voice from weeping and your eyes from tears, for your work will be rewarded. God does not tell Rachel to stop weeping immediately — he acknowledges the grief first, then speaks into it."
  },
  {
    title: "Your Body Is Not Your Enemy",
    verse: "Romans 8:23",
    text: "Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies. All creation groans under the weight of the fall — including the body that cannot hold a pregnancy. This is not punishment. It is the creation groaning for what it was meant to be."
  },
  {
    title: "Hope Is a Practice, Not a Feeling",
    verse: "Romans 8:24-25",
    text: "For in this hope we were saved. Now hope that is seen is not hope at all. Who hopes for what they already have? But if we hope for what we do not yet have, we wait for it patiently. After multiple losses, hope can feel like exposure — the risk of another loss. Biblical hope does not demand feeling hopeful. It is a posture of waiting that coexists with grief."
  }
];

const voices = [
  {
    id: "v1",
    name: "Joanna Rowland",
    role: "Author, The Memory Box; pregnancy loss advocate",
    quote: "People want to give you comfort faster than your grief can receive it. Recurrent pregnancy loss has its own timeline, and it is rarely the timeline others are comfortable with.",
    bio: "Joanna Rowland writes for parents grieving pregnancy loss — giving specific language for the specific grief of repeated loss, the fear of hoping, and the loneliness of carrying grief that others do not always recognize as real."
  },
  {
    id: "v2",
    name: "Megan Devine",
    role: "Therapist; Author, It's OK That You're Not OK",
    quote: "Grief after recurrent loss has an additional layer: the grief of hope disappointed again and again. This is not merely cumulative grief. It is grief that has been educated by repeated loss to protect itself from hope.",
    bio: "Megan Devine's framework for grief without a forced timeline is essential for those experiencing recurrent pregnancy loss. She addresses what happens to hope when loss has happened repeatedly — and why the healing timeline does not match cultural expectations."
  },
  {
    id: "v3",
    name: "Beth Forbus",
    role: "Author, She Laughs Again; speaker on infertility and loss",
    quote: "After the third, or the fifth, or the seventh loss, people around you run out of words. They go quiet. But the grief has not gone quiet — it has just lost its witnesses.",
    bio: "Beth Forbus writes and speaks specifically about recurrent pregnancy loss and the isolation that compounds it. Her work gives language to a grief that often becomes invisible as the losses multiply."
  },
  {
    id: "v4",
    name: "Lore Ferguson Wilbert",
    role: "Author, Handle With Care; writer on embodiment and grief",
    quote: "The body that has lost again is not a broken machine. It is a body that has been in labor — the labor of grief, of hoping, of losing — over and over. It deserves tenderness, not just diagnosis.",
    bio: "Lore Ferguson Wilbert's writing on embodiment and loss is especially relevant for those whose bodies have been medicalized through repeated losses. She holds the body as something to be held tenderly, not merely treated."
  }
];

const practices = [
  {
    icon: "📝",
    title: "Name Each Loss Individually",
    text: "Many parents of recurrent pregnancy loss never named their children, never held a memorial, never created any ritual of acknowledgment. Consider naming each pregnancy, lighting a candle, writing a letter, or creating a small memorial. Each loss deserves individual acknowledgment, not collective minimization."
  },
  {
    icon: "🏥",
    title: "Seek Recurrent Pregnancy Loss Specialist Care",
    text: "Recurrent pregnancy loss (three or more losses) is a distinct medical category with specific workups: chromosomal testing, uterine structure evaluation, clotting factor assessment, immunological testing, and hormonal evaluation. A reproductive endocrinologist specializing in RPL is different from a general OB or infertility clinic."
  },
  {
    icon: "👥",
    title: "Find Community With Others Who Understand Recurrent Loss",
    text: "Single pregnancy loss and recurrent loss are different experiences. Seek community specifically with others navigating RPL — SHARE (nationalshare.org), the Recurrent Pregnancy Loss Association, or online communities like the Reddit community r/recurrentmiscarriage connect people who understand the specific emotional territory."
  },
  {
    icon: "🧠",
    title: "Address the Anticipatory Grief of Trying Again",
    text: "Many couples experiencing RPL carry profound anxiety around trying again — because hope has been educated by loss. A therapist experienced with RPL or perinatal grief can help you hold the tension between wanting to try and knowing the cost of another loss."
  },
  {
    icon: "🙏",
    title: "Bring the Anger to God — Not Just the Grief",
    text: "After multiple losses, grief often contains anger — at God, at your body, at others who have living children easily. This anger is not sin. Bring it directly to God, as the psalmists did. He is large enough to receive it and does not require your composure."
  },
  {
    icon: "⏰",
    title: "Give Yourself Permission to Stop, Pause, or Continue",
    text: "The decision about whether to try again, to pause, or to stop — and when — belongs to you and your partner. Well-meaning pressure from any direction (including from within the church) does not have authority over this decision. Grief needs time, and decisions made from grief's acute phase are not always the right ones."
  }
];

const scriptures = [
  { verse: "Psalm 139:13-14", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made." },
  { verse: "Lamentations 3:19-21", text: "I remember my affliction and my wandering, the bitterness and the gall. I well remember them, and my soul is downcast within me. Yet this I call to mind and therefore I have hope." },
  { verse: "Jeremiah 31:15-16", text: "A voice is heard in Ramah, mourning and great weeping, Rachel weeping for her children and refusing to be comforted. But this is what the Lord says: Restrain your voice from weeping and your eyes from tears, for your work will be rewarded." },
  { verse: "Romans 8:23", text: "Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies." },
  { verse: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit." },
  { verse: "Isaiah 49:15-16", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands." }
];

type MultiLossEntry = { id: string; date: string; name: string; grief: string; hope: string };

export default function MiscarriageMultipleLossesPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MultiLossEntry[]>([]);
  const [name, setName] = useState("");
  const [grief, setGrief] = useState("");
  const [hope, setHope] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_miscarriagepluralj_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const entry: MultiLossEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), name, grief, hope };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_miscarriagepluralj_entries", JSON.stringify(updated));
    setName(""); setGrief(""); setHope("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_miscarriagepluralj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: GREEN, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Pregnancy Loss</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Recurrent Pregnancy Loss</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When it has happened again. When the grief layers over itself and people don't know what to say anymore because they've already said it. When hope feels like a risk you can't afford. Each loss was real. Each person is known to God. And the accumulation of grief does not mean the accumulation of punishment.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${GREEN}` : "2px solid transparent", color: tab === t ? GREEN : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations for the weight of repeated loss — taking each grief seriously and refusing to rush through it.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Writers and advocates who speak to recurrent pregnancy loss with honesty and specific knowledge.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Medical, relational, and spiritual practices for those navigating recurrent pregnancy loss.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>Crisis Support</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — recurrent pregnancy loss is a risk factor for depression.<br />
                SHARE (pregnancy and infant loss): <strong style={{ color: TEXT }}>nationalshare.org</strong><br />
                Hannah's Prayer (Christian): <strong style={{ color: TEXT }}>hannah.org</strong>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the one who is bowed down under the weight of multiple losses and still turning toward God.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${GREEN}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space to name your children, your grief, and any hope you can hold. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: GREEN }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>Name (or describe) the child I am remembering today</label>
                <textarea value={name} onChange={e => setName(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What grief am I carrying right now?</label>
                <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What hope — however tentative — can I hold today?</label>
                <textarea value={hope} onChange={e => setHope(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.name && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>REMEMBERED</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.name}</p></div>}
                  {e.grief && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>GRIEF</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.grief}</p></div>}
                  {e.hope && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>HOPE</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.hope}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching and testimony for those navigating repeated pregnancy loss — grief, hope, and the God who knows each child.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Grief After Pregnancy Loss: When It Happens Again</div>
              <VideoEmbed videoId="oNpTha80yyE" title="Grief After Pregnancy Loss: When It Happens Again" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>God Knows Every Child: Theology of Pregnancy Loss</div>
              <VideoEmbed videoId="4Eg_di-O8nM" title="God Knows Every Child: Theology of Pregnancy Loss" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Rachel Weeping: Lament and Recurrent Loss</div>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Rachel Weeping: Lament and Recurrent Loss" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Weight of Hope: Faith After Loss</div>
              <VideoEmbed videoId="7TBHqMqBmBo" title="The Weight of Hope: Faith After Loss" />
            </div>
          </div>
        )}

      </div>
    </div>
      <Footer />
    </>
  );
}
