"use client";
import { useState, useEffect } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_single_parent_entries";

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
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a1a0e 0%, #061008 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(58,125,86,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `16px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function SingleParentPage() {
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
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Single Parenting &amp; Christian Faith</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            You Are Not a Broken Family
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Single parents are often treated as an afterthought or an anomaly in the church — designed for two-parent families, programmed for couples. But Scripture is full of single parents, and God has a specific history of showing up for them.
          </p>
        </div>

        <div style={{ background: "#0d1f15", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Resources: </strong>
          <span style={{ color: MUTED }}>988 Lifeline: </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Single Parent Advocate: </span>
          <strong style={{ color: TEXT }}>singleparentadvocate.org</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; 211 (local support services): </span>
          <strong style={{ color: TEXT }}>dial 211</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "God Has Always Cared for Single Mothers", body: "The Old Testament describes God as the father of the fatherless (Psalm 68:5) and gives specific, structural protections to widows and their children — gleaning rights in the fields, prohibitions on taking their coats as pledges, inclusion in the tithe of celebration. Hagar — a single mother in the wilderness with a dying child — received a direct divine visitation and a promise. Naomi and Ruth were an all-female household navigating poverty and displacement. The Bible is not unfamiliar with single-parent households." },
              { title: "The Church's Family-Centered Culture Has Not Always Served Single Parents", body: "Most evangelical churches are built around the nuclear family as their primary social unit. Sunday school, small groups, sermon illustrations, retreat schedules, and even physical church design often presuppose two parents. Single parents frequently report feeling invisible, patronized, or implicitly blamed for their situation. This is a failure of pastoral imagination and practice, not an inevitable feature of Christian community. A church that genuinely serves single parents looks and feels different." },
              { title: "Exhaustion Is Not a Character Defect", body: "Single parenting involves doing the work of two people — financially, logistically, emotionally, and physically — with half the resources, less sleep, and minimal backup. The exhaustion is not a spiritual problem. It is arithmetic. When Elijah collapsed under the juniper tree, God did not rebuke him for weakness; God sent food, water, and rest. The theology of limits applies with full force to single parents: you need rest, help, and community, and needing these things is not weakness." },
              { title: "Your Children Are Not Damaged by Default", body: "Research on outcomes for children of single parents shows that what matters most is the quality of the relationship between parent and child, economic stability, social support, and parenting practices — not family structure per se. The framing that children of single-parent families are inevitably at a disadvantage has been used to shame single parents in church contexts without distinguishing between what is a result of the structure and what is a result of the poverty, instability, or conflict that often accompanies it." },
              { title: "The Community Is Meant to Be Extended Family", body: "In cultures where the nuclear family has never been the primary social unit, extended kin networks, village structures, and community share the parenting load. The New Testament church was designed around mutual provision, shared resources, and communal care of children and widows (Acts 2, Acts 6, James 1:27). The isolation of single parents is in part a failure of the church to function as extended family. You are not supposed to do this alone, and the community that makes you do it alone is not functioning as it should." },
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
              { name: "Hagar", role: "Old Testament figure, Genesis 16 and 21", quote: "Then she called the name of the Lord who spoke to her, You are a God who sees me; for she said, Have I also here seen Him who sees me?", note: "Hagar was a single mother alone in the wilderness with a dying son. God appeared to her — twice — named her, promised a future for her child, and gave her water. She named God El-Roi: the God who sees. For single parents who feel unseen, this name is the theological anchor." },
              { name: "Sandra Stanley", role: "Author of Breathing Room, advocate for single parents", quote: "The church needs to stop treating single parents as a problem to be solved and start treating them as people to be loved — with the practical, logistical, financial love that single parents actually need.", note: "Stanley (wife of pastor Andy Stanley) has advocated specifically for churches to create practical single-parent ministry — not support groups for divorce recovery, but actual logistical support (childcare, car repairs, financial coaching) that addresses what single parents need." },
              { name: "Ruth (biblical figure)", role: "Old Testament figure, book of Ruth", quote: "Where you go I will go, and where you lodge I will lodge. Your people shall be my people.", note: "Ruth and Naomi formed an unconventional household — a Moabite daughter-in-law and an Israelite mother-in-law, both without husbands, navigating poverty in a foreign city. Their covenant loyalty to each other and their ingenuity in using available systems (gleaning, Boaz) is the model of the resilient non-nuclear family." },
              { name: "Proverbs 31 woman", role: "Biblical figure, Proverbs 31", quote: "She rises while it is yet night and provides food for her household and portions for her maidens.", note: "The Proverbs 31 woman is economically active, resourceful, and the primary manager of her household. Commentators differ on whether there is a husband present or absent in her life. Either way, she is not presented as insufficient." },
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
              { title: "Build Your Village Intentionally", body: "Research on resilient single-parent households consistently points to one variable: social support. The parents who do best are not the ones with the most money or the most efficient systems — they are the ones who have people. Build your village deliberately: identify people who can be emergency backup (school pickup, sick kid, unexpected work conflict), people who can provide adult conversation and support, and people who can give your children other adult relationships. This takes effort; it does not happen by accident." },
              { title: "Financial Stability Is a Pastoral Issue", body: "Many single parents are one crisis away from instability. Financial coaching (not just budgeting advice, but structural help with debt, benefits enrollment, and income optimization) is a pastoral need. Many churches offer Financial Peace University without modifying it for single-income households. Organizations like Single Parent Advocate (singleparentadvocate.org) provide specific financial resources. 211 connects callers to local emergency assistance programs." },
              { title: "Ask the Church Directly for What You Need", body: "Churches often want to help but do not know what single parents need. The ask can be specific: childcare during small group, someone to attend your child's event when you cannot, help with a car repair, occasional grocery coverage, a gift card for school supplies. Single parents who ask for what they need — specifically, without apology — are more likely to receive it than those who wait for the community to notice. Asking is not weakness; it is the body of Christ functioning as designed." },
              { title: "Co-Parenting Conflict and the Children", body: "For single parents navigating ongoing conflict with a co-parent, the primary pastoral and therapeutic goal is minimizing the children's exposure to the conflict — not maintaining your own right to express grievance in front of them. This is extremely hard and often requires therapy. Organizations like OurFamilyWizard and TalkingParents provide communication tools that reduce direct contact while maintaining co-parenting records. A therapist who specializes in high-conflict co-parenting can be essential." },
              { title: "Guard Your Own Mental Health", body: "Single parents are at elevated risk for depression and anxiety. The combination of exhaustion, financial stress, loneliness, and the weight of sole responsibility is significant. Many single parents put off their own mental health care because of time, cost, or guilt about spending resources on themselves. This is counterproductive: a depleted parent is less available to their children than a parent who gets support. Open Path Collective offers therapy at $30-80 per session for those without insurance." },
              { title: "Your Children See a Parent Who Stayed", body: "The most consistent message of single-parent resilience research is that children benefit from having a parent who showed up, stayed present, and kept going under circumstances that were objectively hard. That is what you are doing. It is not invisible to your children, even when it feels unacknowledged. The faithfulness you are demonstrating — showing up every day in a situation you did not design — is a form of love your children will understand when they are older." },
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
              { ref: "Psalm 68:5", text: "Father of the fatherless and protector of widows is God in his holy habitation.", note: "God is described as taking on the parental role for those without fathers. Single parents and their children are under specific divine care." },
              { ref: "Genesis 21:17–19", text: "And God heard the voice of the boy, and the angel of God called to Hagar from heaven and said to her, What troubles you, Hagar? Fear not, for God has heard the voice of the boy where he is. Up! Lift up the boy, and hold him fast with your hand, for I will make him into a great nation. Then God opened her eyes, and she saw a well of water.", note: "A single mother in a crisis. God sees, speaks, and provides — specifically and materially. Water appeared where she could not find it." },
              { ref: "James 1:27", text: "Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world.", note: "The practical care of single-parent households (widows and their children) is James's definition of pure religion. It is not optional community service; it is the definition of what faith looks like in action." },
              { ref: "Deuteronomy 24:19–21", text: "When you reap your harvest in your field and forget a sheaf in the field, you shall not go back to get it. It shall be for the sojourner, the fatherless, and the widow.", note: "The gleaning laws were structural economic protections for vulnerable households — including those headed by single women. The community was legally required to leave resources accessible to those who needed them." },
              { ref: "1 Kings 17:13–14", text: "And Elijah said to her, Do not fear; go and do as you have said. But first make me a little cake of it and bring it to me, and afterward make something for yourself and your son. For thus says the Lord, the God of Israel: The jar of flour shall not be spent, and the jug of oil shall not be run out until the day that the Lord sends rain upon the earth.", note: "The widow of Zarephath was a single mother in a famine. God sent a prophet and a miracle. The flour and the oil did not run out. This is God's pattern with single parents in crisis." },
              { ref: "Isaiah 49:15", text: "Can a woman forget her nursing child, that she should have no compassion on the son of her womb? Even these may forget, yet I will not forget you.", note: "The maternal love you have for your children — the love that keeps you going when you are exhausted — is used by Isaiah as an image for God's love for you. God does not forget you." },
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
                placeholder="What has been the hardest part of this? What has surprised you about your own strength? What do you want your children to know about this season?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="God Sees You — Single Parent Encouragement" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="The Village It Takes: Community for Single Parents" />
            <VideoEmbed videoId="7_CGP-12AE0" title="When You Are Doing It Alone — El-Roi, the God Who Sees" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Strength for Today: Faith in the Exhausting Seasons" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>You are not a broken family. You are a family doing something very hard, and God is El-Roi — the God who sees you.</p>
          <p style={{ marginTop: 8 }}>Single Parent Advocate: singleparentadvocate.org &nbsp;|&nbsp; 211 &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
  );
}
