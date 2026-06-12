"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";

type SabbathEntry = { id: string; date: string; ceased: string; received: string; reflection: string };

const TABS = [
  { id: "theology", label: "Theology" },
  { id: "debate", label: "The Debate" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const THEOLOGY_SECTIONS = [
  {
    title: "Shabbat — Cessation as the Deepest Act of Trust",
    accent: GOLD,
    body: "The Hebrew word shabbat does not mean rest in the sense of leisure or sleep. It means cessation — stopping. God stopped on the seventh day not because he was tired (Is 40:28) but because the work was finished and complete. He ceased, and in ceasing he declared it good. Human Sabbath is an imitation of divine cessation: we stop not because the work is finished (it never is) but because we trust that God is sustaining what we cannot. The Sabbath is therefore fundamentally an act of faith — a weekly, embodied declaration that the world does not depend on us. The person who cannot stop working has, functionally, made themselves lord of their domain. Sabbath breaks that pretension gently but completely.",
  },
  {
    title: "Sabbath as Creation Gift, Not Sinai Command",
    accent: TEAL,
    body: "Genesis 2:2–3 records the first Sabbath before any human being has sinned, before the law has been given, before Israel exists as a people. God blessed the seventh day and made it holy (Hebrew: qiddesh — set apart, consecrated). This is the first time in Scripture that time itself is declared holy. Not a place, not a person, not an object — a day. This means Sabbath belongs to the creation order, not merely to the Mosaic covenant. When the Sinai law commands Sabbath-keeping (Ex 20:8–11), it is grounding a new commandment in a pre-existing creation reality: Remember the Sabbath day — as though it has always been there, because it has. Jesus does not abrogate Sabbath; he fulfills and reinterprets it as its Lord.",
  },
  {
    title: "Jesus as Lord of the Sabbath — Fulfillment, Not Abolition",
    accent: GREEN,
    body: "The Son of Man is lord of the Sabbath (Matt 12:8). This is one of the most audacious claims in the Gospels. Jesus does not say the Sabbath is irrelevant; he says he has authority over it. He heals on the Sabbath precisely to demonstrate that Sabbath is for human flourishing, not human oppression: The Sabbath was made for man, not man for the Sabbath (Mk 2:27). Jesus's consistent Sabbath controversies with the Pharisees are not about whether Sabbath matters — they are about what Sabbath is for. When Jesus declares in Matthew 11:28–29, Come to me, all who labor and are heavy laden, and I will give you rest, he is not only offering psychological comfort; he is presenting himself as the fulfillment of what Sabbath has always pointed toward: the rest that God has prepared for his people.",
  },
  {
    title: "Sabbath as Resistance to the Economy of Endless Productivity",
    accent: GOLD,
    body: "Walter Brueggemann argues that the Sabbath commandment is first given to a people who have just escaped from Egypt — from Pharaoh's brick quotas and ceaseless labor. In Egypt there was no rest because Pharaoh's economy demanded infinite productivity from every body. Sabbath is Israel's declaration that they no longer live under Pharaoh's terms: there is a day when the ovens go cold, the quotas stop, and every person — slave, alien, and animal — rests equally (Deut 5:14–15). This is a revolutionary act. In our own moment, the economy of endless productivity — the 24/7 news cycle, the always-open inbox, the gig economy that never stops — is Pharaoh's logic dressed in new clothes. Sabbath is still resistance. Stopping one day in seven is a weekly act of defiance against the claim that human worth is measured in output.",
  },
  {
    title: "Sabbath as Anticipation — The Rest That Remains",
    accent: TEAL,
    body: "Hebrews 4:9–10: So then, there remains a Sabbath rest for the people of God, for whoever has entered God's rest has also rested from his works as God did from his. The Hebrews passage interprets Sabbath eschatologically: the weekly rest points forward to the final rest that God has prepared for his people in the new creation. Joshua brought Israel into the land, but that was not the ultimate rest (Heb 4:8) — the rest David spoke of (Ps 95:11) is still future. The weekly Sabbath is thus a double sign: backward to creation (the rest God declared good) and forward to consummation (the rest God is preparing). Every Sabbath is a small dress rehearsal for the age to come, when all striving ceases and the people of God enter their inheritance.",
  },
];

const DEBATE_ITEMS = [
  {
    position: "Sabbatarianism",
    color: GOLD,
    summary: "The Sabbath commandment (the fourth of the Ten Commandments) is morally binding on Christians. Sunday, as the Christian Sabbath, should be observed with cessation from ordinary labor, commercial activity, and recreation. The Westminster Confession (1647) represents this view: the seventh day is changed to the first day of the week, the Lord's Day, to be observed by rest from works and by public and private worship. Sabbatarians point to the creation-order grounding of Sabbath (not merely the Sinai covenant) as evidence of its perpetual moral obligation. Associated traditions: Reformed, Presbyterian, some Baptists.",
    key_texts: "Ex 20:8–11, Is 58:13–14, Matt 5:17–19 (law not abolished), Heb 4:9",
  },
  {
    position: "Lord's Day Theology (Non-Sabbatarian)",
    color: TEAL,
    summary: "Sunday is the Lord's Day — the day of resurrection, the first day of new creation — but it is not the Sabbath transferred to a new day. The Mosaic Sabbath is part of the ceremonial law that Christ has fulfilled and brought to its end (Col 2:16–17). Christians are free to gather on the first day of the week and to honor that day as holy, but they are not under a legal obligation of cessation from ordinary labor. The important thing is corporate worship; the regulations of the Mosaic Sabbath do not directly apply. Associated traditions: Lutheran, many Anglicans, many Baptists, most Pentecostals.",
    key_texts: "Col 2:16–17, Rom 14:5, Acts 20:7, Rev 1:10",
  },
  {
    position: "Seventh-Day Sabbatarianism",
    color: "#6B4FBB",
    summary: "The Sabbath is the seventh day (Saturday), not the first, and the change to Sunday worship is a later ecclesiastical tradition not authorized by Scripture. The Ten Commandments specify the seventh day explicitly, and no New Testament text explicitly transfers the Sabbath to Sunday. Seventh-day Adventists hold this position most prominently, arguing that keeping Saturday honors the creation ordinance and anticipates eschatological rest. Other small groups (Seventh-day Baptists, some Messianic communities) share elements of this view.",
    key_texts: "Ex 20:8–11, Gen 2:2–3, Matt 5:17–19, Is 56:2",
  },
  {
    position: "Sabbath as Principle (Flexible View)",
    color: GREEN,
    summary: "The Sabbath principle — one day in seven for rest, worship, and renewal — reflects a creation ordinance, but the specific day is not of the essence. Christians may observe Sunday as the Lord's Day for corporate gathering while understanding that the deeper point of Sabbath (regular, rhythmic cessation in trust) is what must be preserved. This view, associated with thinkers like Eugene Peterson and Walter Brueggemann, emphasizes the spiritual and social dimensions of Sabbath without requiring legal Sabbatarianism. The call is to genuine rest — delight, worship, play, relationship — not to a legal obligation of non-activity.",
    key_texts: "Mk 2:27, Heb 4:9–10, Matt 11:28–29, Rom 14:5–6",
  },
];

const PRACTICES = [
  {
    title: "Define Your Sabbath Boundaries",
    body: "Choose a 24-hour period (most commonly sundown Friday to sundown Saturday for Jewish-pattern observers, or Saturday evening to Sunday evening, or Sunday) and treat the boundaries as real. Write down what you will cease — work email, purchasing, social media, professional obligations — and what you will welcome: unhurried time with God, family, creation, delight, play. The specific contents matter less than the deliberateness of the beginning and end.",
  },
  {
    title: "Begin with a Ritual",
    body: "Every Sabbath needs a clear start. Light a candle, share a meal, read a psalm, sing a hymn, say a prayer of cessation. The Jewish Shabbat liturgy is a 3,500-year-old model: bless the candles, bless the wine, bless the bread, bless the children. These rituals signal to the body and the mind that something different has begun. Without a clear start, the Sabbath bleeds into the week and the week bleeds into the Sabbath and neither has its full character.",
  },
  {
    title: "Identify Your Pharaoh",
    body: "What does your week demand of you that feels impossible to lay down? That thing — the inbox, the project, the phone, the anxiety about productivity — is your Pharaoh. Sabbath is precisely the practice of setting it down. This will feel uncomfortable at first, because we have internalized the logic of ceaseless output. Name the specific things that feel like they cannot wait. They probably can. Practice the trust that the world will not fall apart in 24 hours because you have stopped managing it.",
  },
  {
    title: "Welcome Delight as an Act of Worship",
    body: "The Puritan tradition sometimes reduced Sabbath to prohibition: no work, no play, nothing but prescribed religious exercises. But the Hebrew picture of Shabbat includes joy, feasting, and delight. Isaiah 58:13 calls the Sabbath a delight. Rest means different things to different people: for an introvert, solitude and reading. For a parent of small children, unhurried time on the floor with the kids. For a musician, playing for pleasure rather than performance. Ask: what brings me genuine delight that is not productivity? Welcome that on the Sabbath as an act of worship.",
  },
  {
    title: "Practice Corporate and Private Worship as the Sabbath's Heart",
    body: "The Sabbath is not primarily about what you stop but about what you turn toward. Corporate worship — gathering with the body of Christ to hear the Word, receive the sacraments, pray, and sing — is the center. Around that center, private prayer, Scripture reading, and reflective silence fill the day. Eugene Peterson calls the Sabbath the act of praying and playing — both are acts of orientation toward God rather than toward productivity. Neither is passive: both require deliberate attention and presence.",
  },
];

const VOICES = [
  {
    name: "Walter Brueggemann",
    work: "Sabbath as Resistance",
    quote: "Sabbath is not simply a pause. It is an alternative that critiques the dominant narrative. When Israel stops and rests, it is enacting its conviction that the world does not depend on Israel's efforts, that history does not depend on human management, that human bodies are not made for maximum productivity. Sabbath is an act of resistance against the anxiety of Pharaoh's world.",
    bio: "Walter Brueggemann is an Old Testament scholar and professor emeritus at Columbia Theological Seminary whose work on the prophetic imagination and the social dimensions of Scripture has shaped a generation of pastors and theologians. Sabbath as Resistance (2014) connects the Sabbath commandment directly to the Exodus narrative and to contemporary critiques of capitalism and the always-on economy. His reading is theologically rich, politically engaged, and deeply pastoral.",
  },
  {
    name: "Eugene Peterson",
    work: "Working the Angles",
    quote: "Sabbath is not primarily a day for rest. It is a day for worship. But worship, properly understood, is rest — rest from the compulsive self that is always building, always producing, always asserting. On the Sabbath we stop being productive and become receptive. We stop talking and start listening. We stop managing and start trusting. That is rest.",
    bio: "Eugene Peterson was a pastor, poet, and scholar best known for The Message translation of the Bible, but whose pastoral theology in books like Working the Angles and The Contemplative Pastor has shaped the interior life of ministry for decades. His chapter on the pastor's Sabbath is among the wisest and most practical treatments of the subject in print, insisting that the pastor who does not keep Sabbath cannot model what they cannot embody.",
  },
  {
    name: "Judith Shulevitz",
    work: "The Sabbath World",
    quote: "To those who observe it, the Sabbath is the most fundamentally countercultural act of their week. It is not a quaint tradition. It is a refusal: a refusal to be defined by productivity, a refusal to be always available, a refusal to treat every moment as an opportunity for accomplishment. In a world that has abolished silence and solitude, the Sabbath is a form of sanity.",
    bio: "Judith Shulevitz is a journalist and author whose The Sabbath World (2010) is a beautifully written cultural and historical account of the Sabbath across Jewish and Christian traditions. As a secular Jew who found herself drawn to Sabbath observance, she brings an unusual combination of intellectual rigor and personal honesty. Her account of why Sabbath is difficult — psychologically and practically — is the most honest reckoning with modern Sabbath-resistance available.",
  },
];

const SCRIPTURES = [
  {
    ref: "Genesis 2:2–3",
    text: "And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done. So God blessed the seventh day and made it holy, because on it God rested from all his work that he had done in creation.",
    insight: "The first Sabbath precedes sin, law, and Israel. God's resting is an act of completion and declaration, not exhaustion. He blesses a day — the first time blessing falls on a unit of time rather than a person or place. This creation-order grounding is why many theologians argue Sabbath is morally binding beyond the Mosaic covenant.",
  },
  {
    ref: "Exodus 20:8–11",
    text: "Remember the Sabbath day, to keep it holy. Six days you shall labor, and do all your work, but the seventh day is a Sabbath to the Lord your God. On it you shall not do any work, you, or your son, or your daughter, your male servant, or your female servant, or your livestock, or the sojourner who is within your gates.",
    insight: "The Sinai command grounds Sabbath in creation. Notably, the rest extends to servants, foreigners, and animals — Sabbath is not a privilege of the free but a leveling of all social hierarchies for one day. In Deuteronomy 5, the grounding shifts to liberation from Egypt: you were slaves; now you are free; remember that freedom every seventh day.",
  },
  {
    ref: "Mark 2:27–28",
    text: "And he said to them, The Sabbath was made for man, not man for the Sabbath. So the Son of Man is lord even of the Sabbath.",
    insight: "Jesus's programmatic statement on Sabbath. The Sabbath is a gift, not a burden — it exists to serve human flourishing. But the claim that follows is even more startling: the Son of Man is lord of the Sabbath. Jesus does not abolish Sabbath; he claims authority over it. He is the one to whom the Sabbath's rest-pointing has always been oriented.",
  },
  {
    ref: "Matthew 11:28–29",
    text: "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls.",
    insight: "The rest Jesus offers is not a technique or a schedule adjustment — it is a person. He is the fulfillment of what the Sabbath has always anticipated: the rest that God has prepared for his people, now embodied and accessible in the person of Jesus. Sabbath-keeping, rightly understood, is an ongoing weekly orientation toward this person.",
  },
  {
    ref: "Colossians 2:16–17",
    text: "Therefore let no one pass judgment on you in questions of food and drink, or with regard to a festival or a new moon or a Sabbath. These are a shadow of the things to come, but the substance belongs to Christ.",
    insight: "Paul places Sabbath among the ceremonial observances that were shadows of Christ. This is the primary text for non-Sabbatarian views. The substance (Greek: soma, body) is Christ — Sabbath points to him and finds its fulfillment in him. Sabbatarians respond that Paul is addressing ritual Sabbath observances, not the creation-order Sabbath principle.",
  },
  {
    ref: "Hebrews 4:9–10",
    text: "So then, there remains a Sabbath rest for the people of God, for whoever has entered God's rest has also rested from his works as God did from his.",
    insight: "Hebrews 4 gives the most developed theology of Sabbath in the New Testament. The author argues that neither Joshua's entry into Canaan nor David's promise of rest exhausted the Sabbath's meaning — there remains an eschatological rest for God's people. Weekly Sabbath is therefore both a present practice and a forward-pointing sign of the rest still to come.",
  },
];

export default function ChristianSabbathGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SabbathEntry[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [jCeased, setJCeased] = useState("");
  const [jReceived, setJReceived] = useState("");
  const [jReflection, setJReflection] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_sabbath_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {
      // ignore parse errors
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("vine_sabbath_entries", JSON.stringify(entries));
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!jCeased.trim()) return;
    setEntries(prev => [
      {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString(),
        ceased: jCeased,
        received: jReceived,
        reflection: jReflection,
      },
      ...prev,
    ]);
    setJCeased("");
    setJReceived("");
    setJReflection("");
  };

  const deleteEntry = (id: string) => setEntries(prev => prev.filter(e => e.id !== id));

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #0a0a18 0%, #0d1a12 50%, #07070F 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2.5rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ marginBottom: "0.6rem" }}>
            <span style={{ background: GREEN + "33", color: GREEN, padding: "0.2rem 0.9rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
              Spiritual Formation
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 3rem)", fontWeight: 900, lineHeight: 1.15, margin: "0.75rem 0 1rem", letterSpacing: "-0.02em" }}>
            The Christian Sabbath
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 640, margin: 0 }}>
            &ldquo;Remember the Sabbath day, to keep it holy.&rdquo; &mdash; Exodus 20:8
          </p>
          <p style={{ color: MUTED, fontSize: "0.97rem", lineHeight: 1.7, maxWidth: 640, margin: "0.75rem 0 0" }}>
            Shabbat means cessation. One day in seven we stop &mdash; not because the work is finished,
            but because we trust that God is Lord over what we cannot complete. This guide explores
            the theology, the ongoing debate, and the practice of Christian Sabbath-keeping.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" }}>
            {[
              { label: "Hebrew Word", value: "Shabbat — cessation, stopping" },
              { label: "Creation Grounding", value: "Genesis 2:2–3" },
              { label: "Jesus's Claim", value: "Lord of the Sabbath" },
              { label: "Eschatological Sign", value: "Hebrews 4:9–10" },
            ].map(badge => (
              <div key={badge.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "0.5rem 1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>{badge.label}</div>
                <div style={{ color: TEXT, fontSize: "0.85rem", fontWeight: 600, marginTop: 2 }}>{badge.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab navigation */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "1.5rem 1rem 0" }}>
        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem", borderRadius: 20, border: "1px solid",
                fontSize: "0.84rem", fontWeight: 600, cursor: "pointer",
                borderColor: tab === t.id ? GREEN : BORDER,
                background: tab === t.id ? GREEN + "22" : "transparent",
                color: tab === t.id ? GREEN : MUTED,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", paddingBottom: "3rem" }}>
            {THEOLOGY_SECTIONS.map(section => (
              <div key={section.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ width: 32, height: 3, background: section.accent, borderRadius: 2, marginBottom: "0.85rem" }} />
                <h3 style={{ color: section.accent, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem", lineHeight: 1.3 }}>
                  {section.title}
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                  {section.body}
                </p>
              </div>
            ))}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}18, ${TEAL}10)`, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: "1.5rem 1.75rem", textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>&#9670;</div>
              <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, fontSize: "0.97rem", margin: "0 auto", maxWidth: 540 }}>
                &ldquo;There remains a Sabbath rest for the people of God.&rdquo; Every week,
                the Sabbath is a small dress rehearsal for the rest still to come &mdash;
                the rest for which creation has been groaning since the beginning.
              </p>
              <p style={{ color: MUTED, fontSize: "0.82rem", marginTop: "0.75rem" }}>Hebrews 4:9</p>
            </div>
          </div>
        )}

        {/* DEBATE */}
        {tab === "debate" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", paddingBottom: "3rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.5rem" }}>The Sabbath Debate</h2>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                Christians have debated Sabbath observance since the earliest centuries. The core question:
                is the fourth commandment morally binding on Christians today, and if so, in what form?
                Here are the four main positions held within orthodox Christianity.
              </p>
            </div>
            {DEBATE_ITEMS.map(item => (
              <div key={item.position} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                  <h3 style={{ color: item.color, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.position}</h3>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.75rem", fontSize: "0.93rem" }}>
                  {item.summary}
                </p>
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "0.65rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Key Texts: </span>
                  <span style={{ color: TEXT, fontSize: "0.88rem" }}>{item.key_texts}</span>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.1rem 1.4rem" }}>
              <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                <span style={{ color: GOLD, fontWeight: 700 }}>Note: </span>
                Christians of good faith and careful biblical interpretation have landed in different places
                on this question. The more important question may not be which position you hold but
                whether you are actually practicing Sabbath rest in some form &mdash; regular, rhythmic
                cessation in trust that God is God and you are not.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", paddingBottom: "3rem" }}>
            <div style={{ marginBottom: "0.25rem" }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.2rem", margin: "0 0 0.4rem" }}>Practical Sabbath-Keeping</h2>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.65, margin: 0 }}>
                The goal is not legalism but rhythm. These practices are invitations, not requirements.
              </p>
            </div>
            {PRACTICES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.4rem 1.6rem", display: "flex", gap: "1.1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: GREEN + "22", color: GREEN, fontWeight: 800, borderRadius: "50%",
                  width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, fontSize: "0.9rem",
                }}>{i + 1}</div>
                <div>
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", margin: "0 0 0.5rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.93rem" }}>{p.body}</p>
                </div>
              </div>
            ))}
            <div style={{ background: `linear-gradient(135deg, ${GOLD}12, transparent)`, border: `1px solid ${GOLD}33`, borderRadius: 14, padding: "1.3rem 1.6rem" }}>
              <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
                &ldquo;If you call the Sabbath a delight and the holy day of the Lord honorable &hellip;
                then you shall take delight in the Lord, and I will make you ride on the heights of the earth.&rdquo;
              </p>
              <p style={{ color: MUTED, fontSize: "0.82rem", marginTop: "0.5rem" }}>Isaiah 58:13&ndash;14</p>
            </div>
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", paddingBottom: "3rem" }}>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.2rem", margin: "0 0 0.25rem" }}>Voices on the Sabbath</h2>
            {VOICES.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.85rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: GOLD, fontSize: "0.85rem", marginTop: "0.15rem", fontStyle: "italic" }}>{v.work}</div>
                </div>
                <blockquote style={{
                  borderLeft: `3px solid ${GOLD}`, paddingLeft: "1.1rem",
                  margin: "0 0 0.85rem", color: TEXT, fontStyle: "italic", lineHeight: 1.75,
                }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", paddingBottom: "3rem" }}>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.2rem", margin: "0 0 0.25rem" }}>Key Sabbath Texts</h2>
            {SCRIPTURES.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.3rem 1.5rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.97rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 0.7rem", fontSize: "0.95rem" }}>
                  &ldquo;{s.text}&rdquo;
                </p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, margin: 0, borderTop: `1px solid ${BORDER}`, paddingTop: "0.6rem" }}>
                  {s.insight}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", paddingBottom: "3rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Sabbath Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>
                Stored only on this device. No account needed. Use these prompts to reflect on your Sabbath practice.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  { label: "What did you cease? What did you put down this Sabbath?", value: jCeased, set: setJCeased, placeholder: "Work, email, social media, a specific anxiety or obligation..." },
                  { label: "What did you receive? What did God give you in the rest?", value: jReceived, set: setJReceived, placeholder: "A verse, a conversation, a moment of delight, a sense of peace..." },
                  { label: "Reflection — any other thoughts on this Sabbath", value: jReflection, set: setJReflection, placeholder: "What was hard? What was good? What do you want to do differently?" },
                ].map((field, i) => (
                  <div key={i}>
                    <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>
                      {field.label}
                    </label>
                    <textarea
                      value={field.value}
                      onChange={e => field.set(e.target.value)}
                      placeholder={field.placeholder}
                      rows={3}
                      style={{
                        width: "100%", background: BG, border: `1px solid ${BORDER}`,
                        borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem",
                        lineHeight: 1.6, resize: "vertical", boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={saveEntry}
                style={{ marginTop: "1rem", padding: "0.6rem 1.6rem", background: GREEN, border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", fontWeight: 700, fontSize: "0.93rem" }}
              >
                Save Entry
              </button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: MUTED, fontWeight: 700, fontSize: "0.9rem", margin: 0, textTransform: "uppercase", letterSpacing: 1 }}>
                  My Entries ({entries.length})
                </h3>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.2rem 1.4rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                      <span style={{ color: MUTED, fontSize: "0.82rem" }}>{e.date}</span>
                      <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.82rem" }}>Delete</button>
                    </div>
                    {e.ceased && (
                      <div style={{ marginBottom: "0.5rem" }}>
                        <span style={{ color: GREEN, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Ceased</span>
                        <p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.ceased}</p>
                      </div>
                    )}
                    {e.received && (
                      <div style={{ marginBottom: "0.5rem" }}>
                        <span style={{ color: GREEN, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Received</span>
                        <p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.received}</p>
                      </div>
                    )}
                    {e.reflection && (
                      <div>
                        <span style={{ color: GREEN, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Reflection</span>
                        <p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.reflection}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", paddingBottom: "3rem" }}>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.2rem", margin: "0 0 0.1rem" }}>Videos on Sabbath &amp; Rest</h2>
            <div>
              <h3 style={{ color: MUTED, fontWeight: 600, fontSize: "0.92rem", margin: "0 0 0.6rem" }}>
                Sabbath &mdash; The Bible Project
              </h3>
              <VideoEmbed videoId="XcFQV0VnVgQ" title="Sabbath — The Bible Project" />
            </div>
            <div>
              <h3 style={{ color: MUTED, fontWeight: 600, fontSize: "0.92rem", margin: "0 0 0.6rem" }}>
                Sabbath as Resistance &mdash; Walter Brueggemann
              </h3>
              <VideoEmbed videoId="Tz7pzMNHlrY" title="Sabbath as Resistance — Walter Brueggemann" />
            </div>
            <div>
              <h3 style={{ color: MUTED, fontWeight: 600, fontSize: "0.92rem", margin: "0 0 0.6rem" }}>
                The Theology of Rest &mdash; Christian Sabbath
              </h3>
              <VideoEmbed videoId="2cxNMlYzHsE" title="The Theology of Rest — Christian Sabbath" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.2rem 1.5rem" }}>
              <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest.
                Take my yoke upon you, and learn from me, for I am gentle and lowly in heart,
                and you will find rest for your souls.&rdquo;
              </p>
              <p style={{ color: GREEN, fontSize: "0.82rem", marginTop: "0.5rem", fontWeight: 700 }}>Matthew 11:28&ndash;29</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
