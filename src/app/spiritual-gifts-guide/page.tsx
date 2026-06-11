"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type SGEntry = { id: string; date: string; gift: string; description: string; howToUse: string };

export default function SpiritualGiftsGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SGEntry[]>(() => {
    try { const s = localStorage.getItem("vine_spiritualgifts_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jGift, setJGift] = useState("");
  const [jDescription, setJDescription] = useState("");
  const [jHowToUse, setJHowToUse] = useState("");

  useEffect(() => { localStorage.setItem("vine_spiritualgifts_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jGift.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), gift: jGift, description: jDescription, howToUse: jHowToUse }, ...prev]);
    setJGift(""); setJDescription(""); setJHowToUse("");
  };

  const deleteEntry = (id: string) => setEntries(prev => prev.filter(e => e.id !== id));

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Doctrine</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Spiritual Gifts Guide
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          God gives gifts to every believer for the common good of the body of Christ &mdash; charismata, gifts of grace, sovereignly distributed by the Holy Spirit. Discovering and deploying your gifts is not self-actualization; it is stewardship of grace given for the sake of others.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? ACCENT : BORDER, background: tab === t.id ? ACCENT + "22" : "transparent", color: tab === t.id ? ACCENT : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                title: "What Are Spiritual Gifts? &mdash; Charismata and Grace (1 Cor 12:4&ndash;7)",
                body: "Spiritual gifts (Greek: charismata, from charis, grace) are abilities sovereignly distributed by the Holy Spirit to every believer for the purpose of building up the body of Christ (1 Cor 12:7). They are not natural talents, though God may sanctify natural abilities &mdash; nor are they earned or merited. They are gifts of grace, given according to the Spirit&rsquo;s will (12:11), and they are not primarily for the recipient&rsquo;s benefit but for the whole church&rsquo;s. Paul establishes a Trinitarian framework: different gifts, same Spirit; different ministries, same Lord; different activities, same God who works all of them (12:4&ndash;6). The diversity of gifts reflects the Trinity&rsquo;s own unity in diversity.",
              },
              {
                title: "The Gift of Teaching, Prophecy, and Administration (Rom 12:6&ndash;8)",
                body: "Romans 12 lists seven motivational gifts: prophecy (in proportion to faith), service, teaching, exhortation, giving (with generosity), leading (with diligence), and mercy (with cheerfulness). These are broadly &ldquo;dispositional&rdquo; gifts &mdash; characteristic ways a believer serves and contributes. Teaching expounds Scripture so others understand and apply it. Prophecy in the New Testament context is Spirit-prompted speech, tested by the community (1 Thess 5:19&ndash;21), that encourages, exhorts, and comforts (1 Cor 14:3). Administration (kubern&emacr;sis, 1 Cor 12:28) is the helmsman word &mdash; navigating the church toward its goals with vision and organization.",
              },
              {
                title: "Healing, Tongues, and the Cessationism Debate (1 Cor 12:8&ndash;10)",
                body: "The most contested question in spiritual gifts theology is whether sign gifts &mdash; tongues, healing, prophecy, miracles &mdash; ceased with the apostolic age (cessationism) or continue until Christ returns (continuationism). Cessationists argue that sign gifts authenticated the apostles (2 Cor 12:12) and that the completed canon renders prophetic revelation unnecessary. Continuationists hold that 1 Corinthians 13:10 (&ldquo;the perfect&rdquo;) refers to Christ&rsquo;s return, not canon completion, and that Joel 2:28&ndash;32, quoted in Acts 2, promises Spirit-gifts for the entire new covenant age. A middle &ldquo;open but cautious&rdquo; position (D.A. Carson) affirms that Scripture does not mandate cessation while requiring careful evaluation of claimed supernatural gifts today.",
              },
              {
                title: "Gifts Require Love: The More Excellent Way (1 Cor 13:1&ndash;3)",
                body: "First Corinthians 13 sits between two chapters on spiritual gifts deliberately. Without love, tongues are a noisy gong, prophecy is nothing, knowledge puffs up. Paul is not replacing gifts with love but establishing the indispensable context in which gifts become genuinely edifying. Gifts exercised without love become weapons of pride, platforms for status, or means of spiritual coercion &mdash; the very misuse Paul confronts in Corinth. The &ldquo;more excellent way&rdquo; does not replace the pursuit of gifts (14:1 commands eager desire for gifts) but defines the only mode in which they truly serve. A gifted teacher who demeans students has missed the gift entirely.",
              },
              {
                title: "Every Member Ministers: Gifts in the Body of Christ (Eph 4:11&ndash;16)",
                body: "Ephesians 4:12 specifies that the fivefold ministry gifts (apostles, prophets, evangelists, pastors, teachers) are given to &ldquo;equip the saints for the work of ministry.&rdquo; Ministry is not limited to professional clergy &mdash; every believer is a minister in the body. Paul&rsquo;s body metaphor in 1 Corinthians 12:14&ndash;26 is the most sustained image of how gifts work together: the eye cannot say to the hand, &ldquo;I don&rsquo;t need you.&rdquo; The less honorable parts receive greater honor. A church where everyone has the same gift is not a full body &mdash; it is an organ without a body. Spectator Christianity undercuts the body&rsquo;s design and leaves gifts undiscovered and undeployed.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Practices</h2>
            {[
              "Study the four major gift lists (Romans 12:6&ndash;8; 1 Corinthians 12:8&ndash;10, 28&ndash;30; Ephesians 4:11&ndash;13; 1 Peter 4:10&ndash;11) until you can name each gift and understand its purpose. You cannot discover a gift you have never learned to recognize. A simple spiritual gifts inventory (many are freely available online) can be a starting point &mdash; but treat it as a conversation starter, not a definitive diagnosis.",
              "Experiment in ministry rather than waiting for certainty. Serve at a food pantry, lead a small group discussion, pray for a sick friend, help organize a church event, write an encouraging note to someone struggling. The Spirit often confirms a gift through effective ministry and personal joy in its exercise &mdash; not through introspection alone.",
              "Ask three trusted friends and your pastor: &ldquo;Where have you seen me most effective? What do I do that seems to build others up most?&rdquo; Others often see our gifts before we do. The pattern of confirmation &mdash; your own sense, fruitfulness in practice, and others&rsquo; affirmation &mdash; is how the church has historically discerned gifts.",
              "Bring your conclusions about your gifting to church leadership for confirmation and placement in a specific ministry. Lone-ranger ministry bypasses the accountability structure that protects both the gifted person and the congregation. The exercise of gifts is inherently communal &mdash; a gift that cannot be received by a community is functioning like a gong, not a gift.",
              "If you hold a cessationist position, be genuinely open to being surprised by the Spirit in prayer, healing, and community. If you hold a continuationist position, rigorously test claimed prophecies and gifts against Scripture and submit them to elder oversight (1 Cor 14:29; 1 Thess 5:21). The instruction to &ldquo;test the spirits&rdquo; (1 John 4:1) applies in every tradition &mdash; not as skepticism about the Spirit but as discernment that honors the Spirit&rsquo;s reliability.",
            ].map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ background: ACCENT + "22", color: ACCENT, fontWeight: 800, borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.9rem" }}>{i + 1}</div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: p }} />
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Voices</h2>
            {[
              {
                name: "Wayne Grudem",
                work: "Systematic Theology, ch. 52",
                quote: "The primary purpose of spiritual gifts is not to demonstrate the supernatural power of the Holy Spirit or to indicate the presence of a highly spiritual Christian &mdash; it is to build up the church, to strengthen and encourage and edify believers. Every gift, properly used, serves this end.",
                bio: "Wayne Grudem is a Reformed theologian and professor whose Systematic Theology has become a standard reference for evangelical theology. His chapter on spiritual gifts is one of the most thorough evangelical treatments of the subject, arguing for a continuationist position while maintaining careful accountability structures for the exercise of gifts. He distinguishes New Testament prophecy from Old Testament prophecy &mdash; seeing NT prophecy as Spirit-prompted speech that may mix genuine insight with human error, not carrying the absolute authority of Scripture. His complementarian convictions also inform his reading of certain gifts in relation to church office.",
              },
              {
                name: "D.A. Carson",
                work: "Showing the Spirit",
                quote: "Scripture does not explicitly teach that miraculous gifts have ceased. The most responsible position is to be open to all the gifts while maintaining rigorous biblical and theological evaluation of what claims to be their exercise. Not all tongues are the gift of tongues; not all claimed prophecy is prophecy.",
                bio: "D.A. Carson is a New Testament scholar and professor at Trinity Evangelical Divinity School whose Showing the Spirit is the most thorough exegetical study of 1 Corinthians 12&ndash;14 in evangelical scholarship. He represents the &ldquo;open but cautious&rdquo; position &mdash; neither a strict cessationist nor a full-throated continuationist. His work shows how careful exegesis can moderate between the two camps, and his distinction between the NT gift of tongues and much contemporary tongues-speaking has been influential in shaping how careful evangelicals discuss the gifts.",
              },
              {
                name: "Gordon Fee",
                work: "God&rsquo;s Empowering Presence",
                quote: "For Paul, the Spirit is the experienced reality of life in Christ. Not background doctrine, not distant promise &mdash; the immediate, present, active, gifting, empowering presence of God in the congregation. The Corinthian problem was not that they had the Spirit&rsquo;s gifts; it was that they were exercising them without love and without order.",
                bio: "Gordon Fee was a New Testament scholar and Pentecostal whose magisterial God&rsquo;s Empowering Presence examines every reference to the Spirit in Paul&rsquo;s letters. His work bridges Pentecostal and evangelical scholarship, insisting that Paul&rsquo;s pneumatology is not peripheral doctrine but the beating heart of his theology. Fee is a persuasive continuationist who nonetheless takes Paul&rsquo;s instruction about order in 1 Corinthians 14 with great seriousness. His reading challenges both cessationists (who underemphasize the Spirit) and charismatics (who underemphasize order and love).",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em dangerouslySetInnerHTML={{ __html: v.work }} /></div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;<span dangerouslySetInnerHTML={{ __html: v.quote }} />&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.bio }} />
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Scripture</h2>
            {[
              { ref: "1 Cor 12:4&ndash;7", text: "Now there are varieties of gifts, but the same Spirit; and there are varieties of service, but the same Lord; and there are varieties of activities, but it is the same God who empowers them all in everyone. To each is given the manifestation of the Spirit for the common good.", insight: "The Trinitarian framework for gifts: same Spirit, same Lord, same God &mdash; ensuring unity beneath the diversity. Every gift is given not for the individual but for the common good." },
              { ref: "Rom 12:6&ndash;8", text: "Having gifts that differ according to the grace given to us, let us use them: if prophecy, in proportion to our faith; if service, in our serving; the one who teaches, in his teaching; the one who exhorts, in his exhortation; the one who contributes, in generosity; the one who leads, with zeal; the one who does acts of mercy, with cheerfulness.", insight: "Seven motivational gifts, each with a characteristic mode of exercise. The adverbs are instructive: generously, zealously, cheerfully &mdash; the how of gift-use matters as much as the what." },
              { ref: "1 Cor 12:27&ndash;28", text: "Now you are the body of Christ and individually members of it. And God has appointed in the church first apostles, second prophets, third teachers, then miracles, then gifts of healing, helping, administrating, and various kinds of tongues.", insight: "The body metaphor: gifts are not ladders but limbs. The ordering (first, second, third) is not a hierarchy of value but a sequence of foundational roles for the church&rsquo;s life and mission." },
              { ref: "Eph 4:11&ndash;13", text: "And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ, until we all attain to the unity of the faith and of the knowledge of the Son of God, to mature manhood, to the measure of the stature of the fullness of Christ.", insight: "The fivefold ministry gifts equip the whole church for ministry &mdash; not to do ministry on behalf of the church. Maturity, unity, and Christlikeness are the goal of every gift&rsquo;s exercise." },
              { ref: "1 Pet 4:10&ndash;11", text: "As each has received a gift, use it to serve one another, as good stewards of God&rsquo;s varied grace: whoever speaks, as one who speaks oracles of God; whoever serves, as one who serves by the strength that God supplies &mdash; in order that in everything God may be glorified through Jesus Christ.", insight: "Peter&rsquo;s two-category framework: speaking gifts and serving gifts. Every exercise of a gift is simultaneously an act of stewardship and an act of worship &mdash; God is glorified through what he empowers." },
              { ref: "1 Cor 14:1", text: "Pursue love, and earnestly desire the spiritual gifts, especially that you may prophesy.", insight: "Paul commands Christians to earnestly desire gifts &mdash; particularly prophecy. Passive indifference to gifts is not humility; it is disobedience. The pursuit of gifts is commanded, but always within the prior command to pursue love." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: s.ref }} />
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 0.6rem" }} dangerouslySetInnerHTML={{ __html: s.text }} />
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.insight }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What spiritual gift do you believe you may have?</label>
                  <textarea
                    value={jGift}
                    onChange={e => setJGift(e.target.value)}
                    placeholder="e.g. Teaching, mercy, administration, giving, encouragement..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Describe how you have seen this gift in your life</label>
                  <textarea
                    value={jDescription}
                    onChange={e => setJDescription(e.target.value)}
                    placeholder="When did you notice fruitfulness? What were you doing? What did others observe?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>How could you put this gift to use in your church or community?</label>
                  <textarea
                    value={jHowToUse}
                    onChange={e => setJHowToUse(e.target.value)}
                    placeholder="What specific ministry context, need, or opportunity fits this gift?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
              </div>
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.6rem 1.5rem", background: ACCENT, border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", fontWeight: 700, fontSize: "0.93rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.82rem" }}>Delete</button>
                </div>
                {e.gift && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Gift</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.gift}</p></div>}
                {e.description && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Description</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.description}</p></div>}
                {e.howToUse && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>How to Use</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.howToUse}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="KmDc5U4y3vI" title="Spiritual Gifts Discovery Test: How to Find Your Gifts" />
            <VideoEmbed videoId="ynEAYqFWkuM" title="How to Find Your Spiritual Gifts &mdash; A Biblical Guide" />
            <VideoEmbed videoId="J6kx6tKn1dU" title="Gifts of the Holy Spirit Explained: Cessationism vs. Continuationism" />
            <VideoEmbed videoId="UvV8VERu_D8" title="Discovering and Using Your Spiritual Gifts in the Church" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
