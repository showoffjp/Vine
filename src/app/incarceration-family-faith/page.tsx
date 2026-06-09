"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "God Is Present in Prison",
    verse: "Psalm 139:8",
    text: "If I make my bed in the depths, you are there. The deepest place in the Old Testament imagination — Sheol, the pit, the place of the dead — cannot hold God out. A prison cell is not outside God's presence. The family member who visits, the spouse who writes letters, the parent who grieves — they are reaching toward someone who is not alone."
  },
  {
    title: "The Family of the Incarcerated Is Not Guilty",
    verse: "Ezekiel 18:20",
    text: "The soul who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child. The moral guilt of the crime belongs to the person who committed it. The family does not inherit the crime. The shame communities sometimes apply to families of the incarcerated is not from God."
  },
  {
    title: "Visiting the Imprisoned Is the Work of Christ",
    verse: "Matthew 25:36",
    text: "I was in prison and you came to visit me. Jesus places prison visitation inside his description of kingdom faithfulness. The family member who drives hours to visit, who writes letters, who keeps sending money for the commissary — they are doing the work Jesus commended. Your faithfulness is not invisible."
  },
  {
    title: "Waiting Is Its Own Form of Faithfulness",
    verse: "Lamentations 3:25-26",
    text: "The Lord is good to those whose hope is in him, to the one who seeks him; it is good to wait quietly for the salvation of the Lord. Waiting for a family member's release — five years, ten years, twenty years — is its own spiritual discipline. The waiting that does not give up on the person is a form of love that Scripture honors."
  },
  {
    title: "The Goal Is Restoration, Not Permanent Punishment",
    verse: "Galatians 6:1",
    text: "Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently. But watch yourselves, or you also may be tempted. The church's mandate is restoration. Not excusing sin, not bypassing consequences — but not treating the person as permanently defined by what they did either. This is the hope that family members carry and that the gospel authorizes."
  }
];

const voices = [
  {
    id: "v1",
    name: "Bryan Stevenson",
    role: "Author, Just Mercy; Founder, Equal Justice Initiative",
    quote: "Each of us is more than the worst thing we've ever done. If someone tells a lie, that doesn't make them a liar. What we do to the incarcerated — and to their families — reflects what we believe about human dignity.",
    bio: "Bryan Stevenson's Just Mercy is essential for Christian families navigating incarceration — both for understanding the justice system and for holding onto the humanity and dignity of the incarcerated person. His work is grounded in a deep theology of human worth."
  },
  {
    id: "v2",
    name: "Mary Karr",
    role: "Author, The Art of Memoir; poet; Christian convert",
    quote: "Waiting for someone to come home from prison is its own kind of suspended life. You cannot fully grieve and you cannot fully celebrate. You hold the person in a different way than they can hold themselves.",
    bio: "Mary Karr writes with unflinching honesty about the particular grief of loving someone who has hurt others and is paying for it. Her work gives families of the incarcerated language for the complex love of holding on to someone who has done real harm."
  },
  {
    id: "v3",
    name: "Dominique DuBois Gilliard",
    role: "Author, Rethinking Incarceration; Christian social ethicist",
    quote: "The church has the longest history of prison ministry and the weakest current record of caring for the families left behind. Families of the incarcerated are a largely invisible mission field — sitting in our own pews.",
    bio: "Dominique DuBois Gilliard's Rethinking Incarceration is essential for understanding the biblical and theological case for a different approach to criminal justice — and for Christians who feel alone in their churches as family members of the incarcerated."
  },
  {
    id: "v4",
    name: "Diane Langberg",
    role: "Psychologist; trauma expert; Author, Suffering and the Heart of God",
    quote: "The family of the incarcerated suffers a specific kind of ambiguous loss — the person is alive but absent, present in memory but not in daily life. This grief has no clear ritual and no socially recognized end point.",
    bio: "Diane Langberg's concept of ambiguous loss applies directly to families of the incarcerated — the grief that does not have a clear endpoint, the loss that cannot be fully mourned because the person still lives. Her framework gives families language for what they carry."
  }
];

const practices = [
  {
    icon: "✉️",
    title: "Maintain the Relationship Through Letters and Visits",
    text: "Consistent contact — letters, calls, visits — is the most important thing a family can do for an incarcerated person's mental health and for the relationship's survival. It is also important for the family member outside: maintaining the relationship prevents the cut-off that can make reentry much harder."
  },
  {
    icon: "💰",
    title: "Understand the Financial Reality",
    text: "Incarceration is expensive for families: phone calls, commissary deposits, travel to visit, legal fees, lost income if the incarcerated person was a wage earner. Organizations like Prison Policy Initiative (prisonpolicy.org) document these costs. Seeking assistance from a church deacon fund or community organization is not weakness — it is honest need."
  },
  {
    icon: "🧠",
    title: "Find Support for Your Own Mental Health",
    text: "Families of the incarcerated have elevated rates of depression, anxiety, and trauma. You are permitted to seek support for yourself — a therapist, a support group, or a faith community that acknowledges your experience. Prison Fellowship's family ministry (prisonfellowship.org) and Angel Tree can connect you to community."
  },
  {
    icon: "👶",
    title: "Support Children With an Incarcerated Parent Carefully",
    text: "Children with incarcerated parents need honest, age-appropriate information. They need to know the parent is safe, the parent loves them, and the parent made a serious mistake. Organizations like Angel Tree (angeltree.org) specifically serve children of incarcerated parents during the holidays — giving them gifts from their parent."
  },
  {
    icon: "⛪",
    title: "Find or Build a Church Community That Includes You",
    text: "Many churches are not equipped to support families of the incarcerated. If you are in a church that treats incarceration as disqualifying — for the person or their family — seek a community that holds both accountability and dignity. Prison Fellowship can help connect families to churches with active prison ministry."
  },
  {
    icon: "📅",
    title: "Plan for Reentry Before the Release Date",
    text: "The weeks after release are the highest-risk period for recidivism. Housing, employment, transportation, and community — ideally including church community — need to be in place before release. Planning begins months before the date. Organizations like Reentry Council (reentrymn.org/national resources) provide frameworks."
  }
];

const scriptures = [
  { verse: "Matthew 25:36", text: "I was in prison and you came to visit me." },
  { verse: "Psalm 139:8", text: "If I go up to the heavens, you are there; if I make my bed in the depths, you are there." },
  { verse: "Galatians 6:1", text: "Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently." },
  { verse: "Lamentations 3:25-26", text: "The Lord is good to those whose hope is in him, to the one who seeks him; it is good to wait quietly for the salvation of the Lord." },
  { verse: "Hebrews 13:3", text: "Continue to remember those in prison as if you were together with them in prison, and those who are mistreated as if you yourselves were suffering." },
  { verse: "Romans 8:38-39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." }
];

type IncarcerationEntry = { id: string; date: string; grief: string; faithfulness: string; hope: string };

export default function IncarcerationFamilyFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<IncarcerationEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [faithfulness, setFaithfulness] = useState("");
  const [hope, setHope] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_incarcerationfamilyj_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const entry: IncarcerationEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief, faithfulness, hope };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_incarcerationfamilyj_entries", JSON.stringify(updated));
    setGrief(""); setFaithfulness(""); setHope("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_incarcerationfamilyj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: GREEN, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Family & Justice</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Family Member Incarceration & Faith</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When someone you love is in prison — and you are serving a sentence of your own. When the shame is not yours to carry but you carry it anyway. When loving them faithfully across bars and years is the work God has given you. You are not invisible to God or to the church you deserve to have around you.
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations for the family member carrying grief, shame, and a faithfulness that most churches don't see.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Writers, advocates, and thinkers who take families of the incarcerated seriously — theologically and practically.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Practical and spiritual steps for families navigating the long road of incarceration and reentry.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>Support Resources</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — families of the incarcerated carry elevated depression risk.<br />
                Prison Fellowship: <strong style={{ color: TEXT }}>prisonfellowship.org</strong><br />
                Angel Tree (children of incarcerated): <strong style={{ color: TEXT }}>angeltree.org</strong>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the family waiting, visiting, writing, and holding on across the years.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space to name the grief, your faithfulness, and whatever hope you are holding. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: GREEN }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What grief or shame am I carrying about my loved one's incarceration?</label>
                <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What act of faithfulness toward them did I do recently?</label>
                <textarea value={faithfulness} onChange={e => setFaithfulness(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What hope am I holding for them — and for after?</label>
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
                  {e.grief && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>GRIEF</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.grief}</p></div>}
                  {e.faithfulness && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>FAITHFULNESS</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.faithfulness}</p></div>}
                  {e.hope && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>HOPE</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.hope}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching on criminal justice, prison ministry, and the theology of restoration.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Just Mercy: Bryan Stevenson on Justice and Dignity</div>
              <VideoEmbed videoId="NnGBhG03g4M" title="Just Mercy: Bryan Stevenson on Justice and Dignity" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Rethinking Incarceration: A Biblical View</div>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="Rethinking Incarceration: A Biblical View" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Families Behind Bars: The Hidden Sentence</div>
              <VideoEmbed videoId="oNpTha80yyE" title="Families Behind Bars: The Hidden Sentence" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Prison Fellowship: Ministry to Families of the Incarcerated</div>
              <VideoEmbed videoId="7TBHqMqBmBo" title="Prison Fellowship: Ministry to Families of the Incarcerated" />
            </div>
          </div>
        )}

      </div>
    </div>
      <Footer />
    </>
  );
}
