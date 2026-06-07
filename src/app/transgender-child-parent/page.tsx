"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Relationship With Your Child Is the Priority", verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him. The father's posture in this parable is not doctrinal correctness — it is relational pursuit. He runs before the son has finished his explanation. Whatever theological conviction you hold about gender, the relational posture of the prodigal's father is the starting point: the relationship must be maintained, because severed relationship cannot produce any other outcome the parent desires." },
  { title: "Your Child Is Made in the Image of God and Loved by God", verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them. Whatever else may be true — however you understand gender theologically, however you experience your child's identity — this is foundational: your child bears the image of God. That image has not been damaged by their gender journey, cannot be revoked by their choices, and does not depend on their agreement with your theology. They are God's image-bearer before they are anything else." },
  { title: "Truth and Love Are Not in Tension — But Love Is the Foundation", verse: "Ephesians 4:15", text: "Instead, speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ. Truth spoken without love is not the full biblical command. The order matters: speaking in love. For parents of transgender children, this means that theological conviction — whatever it is — must be expressed from within a relationship that the child experiences as genuinely loving. Truth without relationship does not transform; it only damages." },
  { title: "We Were Not Promised Easy Obedience on Every Question", verse: "Romans 12:18", text: "If it is possible, as far as it depends on you, live at peace with everyone. Paul's qualifier is significant: as far as it depends on you. He does not promise that peace is always achievable. But he places the responsibility clearly on the one who desires it. Parents who wish to maintain relationship with a transgender child must ask honestly: what does it depend on me to do to keep this relationship viable?" },
  { title: "The Spirit Intercedes Where We Do Not Know What to Pray", verse: "Romans 8:26", text: "We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. Few situations leave parents more uncertain about what to pray than a child's gender transition. The Spirit's ministry of wordless intercession is a pastoral gift for exactly this moment: when you do not know how to pray, what to ask for, or what outcome to seek, the Spirit carries the burden of intercession on your behalf." },
];

const voices = [
  { id: "v1", name: "Preston Sprinkle", role: "Author of Embodied, director of Center for Faith, Sexuality and Gender", quote: "Parents of transgender children often feel they must choose between their theology and their child. But Jesus did not give us that choice. He calls us to relationship and truth — and both require wisdom, not ultimatums.", bio: "Preston Sprinkle's Embodied is the most careful evangelical theological treatment of transgender identity currently available. His pastoral work specifically addresses parents navigating a child's gender journey, and he insists that theological conviction does not require relational severance — and that severance rarely produces the outcomes parents hope for." },
  { id: "v2", name: "Mark Yarhouse", role: "Christian psychologist, author of Understanding Gender Dysphoria", quote: "Most Christian parents I work with discover that neither capitulation nor rejection is a viable path. The path forward requires holding both genuine love and genuine conviction in sustained tension — and that is very hard.", bio: "Mark Yarhouse is one of the leading Christian psychologists working at the intersection of faith and gender identity. His Understanding Gender Dysphoria provides parents with both clinical information about gender dysphoria and theological frameworks for responding to it. His pastoral guidance consistently emphasizes relationship maintenance as the prerequisite for any other outcome." },
  { id: "v3", name: "Rachael Denhollander", role: "Advocate, attorney, author of What Is a Girl Worth", quote: "The question is not only 'what does my theology say?' but 'how do I embody that theology in a way that my child can actually receive?' Those are different questions, and the second one is harder.", bio: "Rachael Denhollander's work on advocacy and truth-telling within difficult relational contexts provides a framework for parents trying to hold conviction and connection simultaneously. While not a specialist in gender specifically, her work on navigating difficult relational and theological terrain with both integrity and love is directly applicable." },
  { id: "v4", name: "Laurie Krieg", role: "Author of An Impossible Marriage, founder of Hole in My Heart Ministries", quote: "I have sat with hundreds of parents whose children have come out, in one way or another. Almost every one of them fears that love will compromise their theology. What they discover is that real love is the only thing that can hold the conversation open long enough for truth to enter.", bio: "Laurie Krieg runs a ministry specifically for parents navigating LGBTQ+ disclosures from their children. Her approach holds both theological conviction and radical relational investment simultaneously, and her pastoral experience with hundreds of families in exactly this situation gives her guidance a practical weight that purely theoretical treatments lack." },
];

const practices = [
  { icon: "💬", title: "Prioritize the Relationship Over the Theological Verdict", text: "Research consistently shows that parental rejection of LGBTQ+ and gender-nonconforming youth is a primary predictor of depression, suicidality, and estrangement. Parental acceptance — even without agreement — is a primary predictor of safety and ongoing connection. Whatever you believe theologically, the relationship must survive if it is to become the context for any other conversation you hope to have." },
  { icon: "🏥", title: "Find a Counselor Who Has Experience With This Specific Situation", text: "This situation is complex enough that general pastoral care is usually insufficient. Find a counselor who has specific clinical and pastoral experience with parents of transgender children — someone who can hold both the genuine theological questions and the clinical realities without defaulting to either capitulation or condemnation. The Center for Faith, Sexuality and Gender has referral resources." },
  { icon: "📖", title: "Read Before You React", text: "Before making declarations, conversations, or decisions, read widely: Mark Yarhouse's Understanding Gender Dysphoria, Preston Sprinkle's Embodied, and clinical resources from the American Academy of Pediatrics on gender dysphoria. Understanding the landscape — theologically and clinically — before reacting reduces the likelihood of responses that damage the relationship irreparably." },
  { icon: "🤝", title: "Connect With Other Christian Parents in This Situation", text: "The isolation of parenting a transgender child in a church context can be profound. Many parents feel they cannot speak honestly to their church community because the conversation is too loaded. Organizations like Hole in My Heart Ministries, and private Facebook groups for Christian parents in this situation, provide peer community with people who understand both the faith convictions and the relational complexity." },
  { icon: "🙏", title: "Pray for Your Child Specifically and Persistently", text: "The temptation in a situation of relational and theological crisis is to pray for the situation to resolve according to your preferred outcome. But the prayer for your child — for their wellbeing, their safety, their sense of being loved by God and by you — may need to come before the prayer for specific theological or behavioral outcomes. Love in prayer precedes love in argument." },
  { icon: "⏳", title: "Give This Situation Years, Not Weeks", text: "Families navigating a child's gender journey are in a multi-year process. The decisions parents make in the first weeks — including decisions to sever or maintain contact — often determine whether they have any influence on the trajectory at all. Taking the long view — remaining relationally present over years — creates the possibility of ongoing influence. Ultimatums in week one close that possibility." },
];

const scriptures = [
  { verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
  { verse: "Ephesians 4:15", text: "Instead, speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ." },
  { verse: "Romans 8:26", text: "We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Isaiah 49:15-16", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you!" },
  { verse: "Proverbs 22:6", text: "Start children off on the way they should go, and even when they are old they will not turn from it." },
];

type TransEntry = { id: string; date: string; fear: string; love: string; prayer: string };

export default function TransgenderChildParentPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<TransEntry[]>([]);
  const [fear, setFear] = useState(""), [love, setLove] = useState(""), [prayer, setPrayer] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_transgenderchildj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!fear.trim()) return;
    const e: TransEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), fear: fear.trim(), love: love.trim(), prayer: prayer.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_transgenderchildj_entries", JSON.stringify(updated));
    setFear(""); setLove(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_transgenderchildj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: GREEN, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Parenting a Transgender Child</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For Christian parents navigating a child's gender journey — holding theological conviction and parental love simultaneously, refusing to let either become a reason to abandon the other.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Support:</strong> 988 Lifeline (call/text 988) &nbsp;|&nbsp; Center for Faith, Sexuality & Gender: centerforfaith.com &nbsp;|&nbsp; Hole in My Heart Ministries: holeinmyheart.net</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ fontWeight: 800, color: TEXT, fontSize: "1rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What fear is most present for you right now about your child?</label>
              <textarea value={fear} onChange={e => setFear(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="For their safety, their soul, your relationship, your faith community..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>How have you shown your child love this week in a way they could actually receive?</label>
              <textarea value={love} onChange={e => setLove(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Concrete action or conversation..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What are you praying for your child today?</label>
              <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Their safety, their sense of being loved, their relationship with God..." />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: GREEN }}>Fear:</strong> {e.fear}</p>
                {e.love && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Love shown:</strong> {e.love}</p>}
                {e.prayer && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "Hq1t7kMjXAY", title: "The Parable of the Prodigal Son", channel: "Timothy Keller", description: "Keller on the father who runs — the theological starting point for any parent trying to hold relationship with a child whose choices are deeply concerning to them." },
              { videoId: "NnGBhG03g4M", title: "Praying for Your Prodigal Child", channel: "Brennan Manning", description: "Manning on the long faithfulness of prayer for a child who seems beyond reach — the practice that keeps the door open when every conversation is difficult." },
              { videoId: "j2h-q3ZPKFI", title: "When Your Child Walks Away", channel: "Focus on the Family", description: "Focus on the Family on maintaining relationship with adult children whose choices diverge from parental values — including the specific grief that entails." },
              { videoId: "mC-zw0zCCtg", title: "Praying Our Fears", channel: "Timothy Keller", description: "Keller on bringing overwhelming parental fear into honest prayer — the practice that holds the parent together when the situation feels out of control." },
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
