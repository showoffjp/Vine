"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Forgiveness Is Available for Every Sin Without Exception", verse: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness. The word 'all' is categorical. There is no asterisk, no category of sin excluded from this promise, no sin whose stain is too permanent to be addressed by the purifying work described here. For the person who carries grief and guilt about an abortion, this verse is addressed to them with the same unconditional character it has for every other confessor. The confession required is honest, not performative." },
  { title: "God Sees the Child Who Was Lost — And Holds Them", verse: "Psalm 139:13-16", text: "For you created my inmost being; you knit me together in my mother's womb... your eyes saw my unformed body; all the days ordained for me were written in your book before one of them came to be. This passage is often used in anti-abortion arguments, which can make it painful for those who have had abortions. But it is also a pastoral comfort: the child who was lost was known to God, seen by God, and held in God's knowledge. The grief of the parent is grieving someone whom God also knows." },
  { title: "Neither Condemnation Nor Cheap Grace — But Costly, Genuine Forgiveness', verse: 'Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus. The church often errs in two directions in this conversation: condemnation that re-wounds those who are already wounded, or cheap reassurance that does not take the moral weight of the decision seriously. The gospel occupies neither position. It takes sin with complete seriousness — 'bought at a price' — and extends forgiveness with complete generosity. Both things are true simultaneously." },
  { title: "Grief Is Appropriate Even When Forgiveness Has Been Received', verse: 'Lamentations 3:20", text: "I well remember them, and my soul is downcast within me. Forgiveness and grief are not alternatives. The person who has received God's forgiveness for an abortion may carry grief for the rest of their life — grief for the child, grief for the person they were, grief for what might have been. That grief does not indicate unforgiveness — it indicates the moral seriousness of the decision and the love that includes the child that was lost." },
  { title: "The Past Is Held in God's Redemptive Purposes', verse: 'Joel 2:25", text: "'I will repay you for the years the locusts have eaten.' Joel's promise is addressed to a nation that had experienced comprehensive destruction — in part through its own choices. The promise is not that the destruction did not happen, or that it was secretly good, but that God is capable of redemptive purposes even in the aftermath of catastrophic loss. The mother who grieves her abortion is not beyond the reach of a God who redeems devastated years." },
];

const voices = [
  { id: "v1", name: "Sydna Masse", role: "Author of Her Choice to Heal, founder of Ramah International, post-abortion healing ministry", quote: "The church often addresses abortion as a political issue and forgets that the people in the pews have had abortions. The silence damages them. The condemnation damages them. What they need is what the gospel offers: truth, forgiveness, and space to grieve.", bio: "Sydna Masse's Her Choice to Heal is one of the most widely used resources for post-abortion healing. Her ministry Ramah International has trained thousands of post-abortion counselors and pastors. She writes from her own experience of abortion and subsequent healing journey, and her work specifically addresses the grief and trauma that can persist for decades." },
  { id: "v2", name: "Theresa Burke", role: "Author of Forbidden Grief: The Unspoken Pain of Abortion, founder of Rachel's Vineyard", quote: "The grief of abortion is often forbidden — by the political culture, by the church, by the internal pressure to have 'dealt with it.' Forbidden grief does not disappear. It emerges in other ways. Naming it is the beginning of healing.", bio: "Theresa Burke's clinical and pastoral work through Rachel's Vineyard has helped hundreds of thousands of people process post-abortion grief globally. Her book Forbidden Grief documents the specific ways that unprocessed abortion grief manifests — in subsequent relationships, parenting anxiety, depression, and spiritual crisis — and the healing that becomes possible when the grief is finally allowed to surface." },
  { id: "v3", name: "Frederica Mathewes-Green", role: "Author of Real Choices: Listening to Women, Eastern Orthodox writer", quote: "Most abortions are not chosen freely. They are chosen in the context of abandonment, pressure, poverty, and fear. The woman who had an abortion deserves the church's compassion, not its judgment — including compassion for what she was facing when she made the decision.", bio: "Frederica Mathewes-Green's research on why women have abortions produced findings that challenged both pro-choice and pro-life frameworks: most women experiencing abortion feel constrained, not liberated. Her work calls the church to understand the complexity of the decision and to offer the unconditional welcome that is the prerequisite for healing." },
  { id: "v4", name: "Kathy Troccoli", role: "Christian recording artist, author, post-abortion healing advocate", quote: "I kept my abortion a secret for years inside the church because I knew what the response would be. When I finally named it, the grace I received changed everything. The church is capable of being that place — if it chooses to be.", bio: "Kathy Troccoli's public disclosure of her abortion and subsequent healing journey opened the conversation in many evangelical contexts where it had been entirely closed. Her willingness to name the shame, the grief, and the healing she received has given permission to many others in church communities to break their own silence." },
];

const practices = [
  { icon: "🕊️", title: "Find a Post-Abortion Healing Program", text: "Rachel's Vineyard (rachelsvineyard.org) offers weekend retreats specifically for post-abortion healing and is available in many countries and denominations. Ramah International (ramahInternational.org) trains counselors and offers resources for post-abortion grief work. These programs provide the combination of clinical, pastoral, and spiritual support that post-abortion grief requires." },
  { icon: "💬", title: "Name the Grief to a Safe Person Before Anything Else", text: "Many people carry post-abortion grief in total silence for years or decades. The first and most important step is naming it — to a counselor, a spiritual director, a trusted pastor, or a close friend. The experience of being heard without condemnation begins the process of healing. You cannot grieve alone what you cannot yet speak." },
  { icon: "📖", title: "Allow Psalm 51 to Be Your Prayer", text: "Psalm 51 is the prayer of someone who has done something they cannot undo. It begins not with explanation or self-defense but with appeal to God's mercy and lovingkindness. It asks for cleansing, restoration, and renewal. It does not minimize the seriousness of what happened. It brings it in full to a God whose capacity to forgive and restore is described as greater than any sin's power to condemn." },
  { icon: "🌿", title: "Create a Memorial for the Child", text: "Many post-abortion healing programs encourage participants to name the child, to create a memorial, to acknowledge the reality of the loss. This is not morbid sentimentality — it is an act of recognition that honors both the grief and the life. A tree, a garden spot, a journal entry, a prayer — these acts of memorial move the grief from interior silence into form that can be held and released." },
  { icon: "⛪", title: "If Your Church Is Not a Safe Place for This, Find One That Is", text: "Not every church has created the pastoral culture necessary to receive this disclosure with appropriate grace. If you know — from its language, its programs, or its explicit communication — that your church would respond with condemnation or gossip, it may not be the right context for your initial disclosure. Finding a counselor, a Rachel's Vineyard retreat, or a different church community first is wise self-protection." },
  { icon: "🙏", title: "Pray for the Child and Entrust Them to God", text: "The question of where the child who was lost 'is' is one that Christian traditions have answered differently, and the theological complexity is real. But prayer for the child — entrusting them to the God who knit them together in the womb and who sees all days — is a spiritual act that honors both the grief and the faith. Committing the child to God is an act of love, not denial." },
];

const scriptures = [
  { verse: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
  { verse: "Psalm 51:1-2", text: "Have mercy on me, O God, according to your unfailing love; according to your great compassion blot out my transgressions. Wash away all my iniquity and cleanse me from my sin." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "Joel 2:25", text: "I will repay you for the years the locusts have eaten." },
];

type AbortionEntry = { id: string; date: string; grief: string; receive: string; memorial: string };

export default function AbortionGriefFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AbortionEntry[]>([]);
  const [grief, setGrief] = useState(""), [receive, setReceive] = useState(""), [memorial, setMemorial] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_abortiongrief_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const e: AbortionEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief: grief.trim(), receive: receive.trim(), memorial: memorial.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_abortiongrief_entries", JSON.stringify(updated));
    setGrief(""); setReceive(""); setMemorial("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_abortiongrief_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Post-Abortion Grief and Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For those who carry grief, shame, or unresolved pain after an abortion — and for the church learning that forgiveness and grief are not alternatives but companions on the healing path.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Healing Support:</strong> Rachel's Vineyard: rachelsvineyard.org &nbsp;|&nbsp; Ramah International: ramahinternational.org &nbsp;|&nbsp; 988 Lifeline</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
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
                <div style={{ color: PURPLE, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
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
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What grief or pain are you most aware of carrying today?</label>
              <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="Name it without judgment..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What do you need to receive from God today — forgiveness, comfort, permission to grieve?</label>
              <textarea value={receive} onChange={e => setReceive(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="What would help most right now..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>If you have named or memorialized the child, what does that look like for you?</label>
              <textarea value={memorial} onChange={e => setMemorial(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Optional — only if this is meaningful to you..." />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: PURPLE }}>Grief:</strong> {e.grief}</p>
                {e.receive && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Receive:</strong> {e.receive}</p>}
                {e.memorial && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Memorial:</strong> {e.memorial}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It Is So Hard", channel: "Timothy Keller", description: "Keller on the theology and psychology of forgiveness — including self-forgiveness — and the specific way the gospel addresses what we cannot undo." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Thompson on shame's power and how genuine community — being known without condemnation — is the primary mechanism by which shame is healed." },
              { videoId: "FV0Kb14TnPU", title: "Grieving a Miscarriage", channel: "Mark Vroegop — TGC", description: "Vroegop on grief for a child who was lost — relevant for those whose grief after abortion includes grief for the child." },
              { videoId: "eCYalLxHSDs", title: "Finding God in Pregnancy Loss", channel: "She Reads Truth", description: "On God's presence in the loss of a child before birth — a resource for processing grief in the specific context of pregnancy and loss." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
