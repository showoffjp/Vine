"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#6366F1", TEXT = "#F2F2F8", MUTED = "#9898B3";

type TECEntry = { id: string; date: string; habit: string; conviction: string; boundary: string };

export default function ChristianTechnologyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<TECEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christiantech_entries") ?? "[]"); } catch { return []; }
  });
  const [jHabit, setJHabit] = useState("");
  const [jConviction, setJConviction] = useState("");
  const [jBoundary, setJBoundary] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiantech_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jHabit.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), habit: jHabit, conviction: jConviction, boundary: jBoundary }, ...prev]);
    setJHabit(""); setJConviction(""); setJBoundary("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Culture</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Faith in the Digital Age
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          The smartphone is the most powerful spiritual formation device most of us own &mdash; and it was not designed to form us toward Christ. This guide walks through the theology and practice of discipleship in a digital age: attention, social media, AI, online church, and putting technology in its proper place.
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
                title: "Attention Is Discipleship — the Smartphone and the Formed Heart",
                body: "Set your minds on things that are above (Col 3:2); we all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image (2 Cor 3:18). Scripture assumes that what we attend to forms what we become &mdash; beholding is becoming. The average smartphone user touches the device hundreds of times a day, and each glance is a small liturgy: a habit of seeking novelty, distraction, or affirmation. The attention economy is, in spiritual terms, a formation economy &mdash; engineered by some of the best-resourced engineering on earth to capture the very faculty that prayer, Scripture meditation, and love of neighbor all require. Discipleship in the digital age begins by recognizing that attention is not a neutral resource but the currency of worship.",
              },
              {
                title: "Social Media, Envy, and Outrage — the Old Sins at New Speed",
                body: "Where jealousy and selfish ambition exist, there will be disorder and every vile practice (Jas 3:16); let every person be quick to hear, slow to speak, slow to anger (Jas 1:19). Social media did not invent envy, comparison, or rage &mdash; it industrialized them. Feeds curate the highlight reels of others&rsquo; lives, training covetousness by the hour; engagement algorithms reward outrage because anger spreads faster than charity. The Christian who would be slow to speak now carries a device whose entire design is speed of speech. None of this makes the platforms irredeemable, but it does mean using them innocently is impossible without deliberate counter-formation: examen of what the feed produces in us, fasting from it, and refusing to say online what we would not say face to face.",
              },
              {
                title: "Digital Sabbath — Rest as Resistance (Exodus 20:8-11)",
                body: "Remember the Sabbath day, to keep it holy. Six days you shall labor... but the seventh day is a Sabbath to the LORD your God. Sabbath was given to a people freshly freed from Egypt&rsquo;s relentless production &mdash; a weekly declaration that we are not slaves and the world does not depend on our output. The digital age has rebuilt Pharaoh&rsquo;s economy in the pocket: always reachable, always producing, always consuming. A digital sabbath &mdash; a regular, scheduled disconnection from screens &mdash; is not nostalgia but resistance: it re-teaches the body that God sustains the world while we rest, that we can be unreachable and still loved, and that the silence we avoid by reaching for the phone is precisely where prayer begins.",
              },
              {
                title: "AI and the Imago Dei — What Machines Cannot Bear (Genesis 1:27)",
                body: "So God created man in his own image, in the image of God he created him; male and female he created them. Artificial intelligence forces an old question with new urgency: what is a human being? The biblical answer is that human dignity rests not on intelligence, productivity, or computational capacity &mdash; capacities machines may match or exceed &mdash; but on the image of God: a vocation and relationship conferred by the Creator. This guards two truths at once. Against techno-utopianism: no system, however capable, bears the imago Dei, and no efficiency justifies treating image-bearers as data points or rendering them disposable. Against despair: human worth is not threatened by being out-computed, because it never rested on computation. The church&rsquo;s task in the AI era is to keep insisting that persons are not products.",
              },
              {
                title: "Online Church and Embodied Presence — the Word Became Flesh (John 1:14)",
                body: "And the Word became flesh and dwelt among us. Christianity is stubbornly embodied: incarnation, laying on of hands, bread and wine, the holy kiss, bodily resurrection. Online church is a genuine mercy &mdash; for the homebound, the chronically ill, the isolated, and the seeker not yet ready to walk through a door, as the pandemic made plain. But it is a supplement, not a substitute. Hebrews 10:24-25 commands not neglecting to meet together precisely because stirring one another to love and good works requires the friction, inconvenience, and accountability of bodies in a room. A church reduced to content delivery has lost something essential to its nature: you cannot be baptized by livestream, and you cannot bear another&rsquo;s burdens from behind a screen alone.",
              },
              {
                title: "Redeeming Technology — Created, Fallen, Redeemable (Genesis 4 &amp; 11; Revelation 21)",
                body: "Technology in Scripture is ambivalent from the start: the same chapters that record the first city, tents, lyres, and forged tools (Gen 4:20-22) record Lamech&rsquo;s sword-song of vengeance; Babel&rsquo;s tower (Gen 11) turns building skill toward self-exaltation. Yet the biblical story does not end in a garden but a city &mdash; the new Jerusalem, into which the kings of the earth bring their glory (Rev 21:24-26). Technology is culture-making, part of the creation mandate, fallen like everything human, and redeemable like everything human. Andy Crouch&rsquo;s framing is apt: technology is in its proper place when it serves love, deepens relationship, and amplifies embodied human capacity &mdash; and out of place when it substitutes for them. The Christian posture is neither boycott nor surrender, but discernment and reordering.",
              },
              {
                title: "Parenting in the Digital Age — Households of Formation (Deuteronomy 6:6-7)",
                body: "These words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way. Deuteronomy envisions formation happening in the cracks of shared life &mdash; sitting, walking, lying down, rising. Screens colonize exactly those cracks. Parents in the digital age are not merely managing screen time; they are competing with professional-grade formation systems for their children&rsquo;s loves, and the most powerful tool remains the oldest one: example. Children learn what a phone is for by watching what their parents&rsquo; phones do to dinner, to conversation, to attention. Households that put technology in its place &mdash; devices out of bedrooms, screens off at meals, boredom permitted, presence prized &mdash; are doing catechesis whether they call it that or not.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
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
              "Guard the thresholds of the day: no phone for the first and last 30 minutes &mdash; let Scripture or prayer, not the feed, get the first and final word over your heart.",
              "Keep a weekly digital sabbath: one day (or a consistent block) fully off screens, planned in advance, with embodied alternatives ready &mdash; a walk, a meal with others, a paper Bible, actual rest.",
              "Run a feed examen once a week: after time on social media, name honestly what it produced in you &mdash; envy, outrage, vanity, numbness &mdash; and unfollow or mute accordingly; curate the feed as deliberately as you would your friendships.",
              "Practice the Tech-Wise household commitments: devices charge outside bedrooms overnight, screens stay off during meals, and the family&rsquo;s shared spaces are arranged around people, not screens.",
              "Re-embody one digital relationship this month: turn a text thread into a phone call, a phone call into a shared meal &mdash; and if you attend church online while able to attend in person, take one step back toward the room.",
              "Before using AI tools, ask the imago Dei questions: does this use treat persons as persons, am I outsourcing something God means to form in me (thinking, writing, praying, deciding), and would I be ashamed for it to be known?",
              "Fast from one app for a season (a week, a month, Lent) and give the recovered minutes a destination in advance &mdash; intercession, Scripture, letters, a neighbor &mdash; since attention abhors a vacuum.",
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
                name: "Andy Crouch",
                work: "The Tech-Wise Family",
                quote: "Technology is in its proper place when it helps us bond with the real people we have been given to love. It&rsquo;s out of its proper place when we end up bonding with people at a distance, like celebrities, whom we will never meet.",
                bio: "Andy Crouch is an author and cultural critic, formerly executive editor of Christianity Today. The Tech-Wise Family offers ten practical commitments for putting technology in its proper place &mdash; not by rejecting devices but by structuring the home around what technology cannot give: wisdom, courage, embodied love, and the formation of character. His later work, The Life We&rsquo;re Looking For, extends the argument: persons are made for recognition and love, and a device-saturated world quietly trades personhood for power and convenience.",
              },
              {
                name: "Tony Reinke",
                work: "12 Ways Your Phone Is Changing You",
                quote: "We check our smartphones about 81,500 times each year, or once every 4.3 minutes of our waking lives... The question is not whether our phones are changing us, but how &mdash; and whether we will be conformed to the patterns of this world or transformed by the renewing of our minds.",
                bio: "Tony Reinke is a journalist and author with Desiring God whose book 12 Ways Your Phone Is Changing You examines smartphone habits through the lens of Christian formation &mdash; distraction, approval-seeking, fear of missing out, the loss of literacy and solitude. Reinke is neither a Luddite nor an enthusiast: he argues the phone is a powerful servant and a terrible master, and that only a greater desire &mdash; beholding Christ &mdash; can displace the compulsive glance.",
              },
              {
                name: "John Dyer",
                work: "From the Garden to the City",
                quote: "Technology is not inherently evil, nor is it inherently good. Yet it is also not neutral... every technology offers a value system embedded in its design, and using it shapes us according to those values whether we notice or not.",
                bio: "John Dyer is a theologian and web developer &mdash; a rare combination of working technologist and trained theologian. From the Garden to the City traces technology through the biblical story, from Eden&rsquo;s cultivation to Babel&rsquo;s tower to the new Jerusalem, arguing that Christians must move beyond the shallow question of whether a tool is good or bad to the deeper question of what the tool does to its user. His framework equips believers to adopt technology with open eyes rather than by default.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em>{v.work}</em></div>
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
              { ref: "Romans 12:2", text: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect." },
              { ref: "Colossians 3:2", text: "Set your minds on things that are above, not on things that are on earth." },
              { ref: "Genesis 1:27", text: "So God created man in his own image, in the image of God he created him; male and female he created them." },
              { ref: "James 1:19", text: "Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger." },
              { ref: "Exodus 20:8-10", text: "Remember the Sabbath day, to keep it holy. Six days you shall labor, and do all your work, but the seventh day is a Sabbath to the LORD your God." },
              { ref: "John 1:14", text: "And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth." },
              { ref: "Hebrews 10:24-25", text: "And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near." },
              { ref: "Philippians 4:8", text: "Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.text }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Digital Habits Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What digital habit are you examining?</label>
                  <textarea
                    value={jHabit}
                    onChange={e => setJHabit(e.target.value)}
                    placeholder="Name it concretely: when, where, how often, and what it gives you..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What conviction is forming in you about it?</label>
                  <textarea
                    value={jConviction}
                    onChange={e => setJConviction(e.target.value)}
                    placeholder="What is this habit producing in you &mdash; and toward whom is it forming you?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What boundary will you set, starting now?</label>
                  <textarea
                    value={jBoundary}
                    onChange={e => setJBoundary(e.target.value)}
                    placeholder="Specific, measurable, and shared with someone who can ask you about it..."
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
                {e.habit && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Habit</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.habit}</p></div>}
                {e.conviction && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Conviction</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.conviction}</p></div>}
                {e.boundary && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Boundary</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.boundary}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="YbipxLDtY8c" title="Image of God &mdash; What It Means to Be Human (BibleProject)" />
            <VideoEmbed videoId="PFTLvkB3JLM" title="Sabbath &mdash; The Rhythm of Rest in a Restless Age (BibleProject)" />
            <VideoEmbed videoId="3E7hkPZ-HTk" title="The Attention Economy and Christian Formation" />
            <VideoEmbed videoId="kCSNkmfZlVo" title="The Tech-Wise Family &mdash; Putting Technology in Its Proper Place" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
