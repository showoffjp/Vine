"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_goodness_entries";

interface GDNEntry {
  area: string;
  habit: string;
  motivation: string;
}

const TABS = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const VIDEOS = [
  { videoId: "VHW_eFiXtP8", title: "The Fruit of Goodness - Galatians 5" },
  { videoId: "1yvOkxRhEZs", title: "Psalm 34: Taste and See the Lord Is Good" },
  { videoId: "o85S7gMkmrE", title: "C.S. Lewis: Mere Christianity and Moral Goodness" },
  { videoId: "dFy14rwuBb0", title: "Ephesians 2:10 - Created for Good Works" },
  { videoId: "w3FJzHkIMKo", title: "What Does It Mean to Be Good?" },
  { videoId: "JQFaJMHhcGk", title: "Dallas Willard: The Good Life" },
];

const cardStyle: React.CSSProperties = {
  background: CARD,
  border: `1px solid ${BORDER}`,
  borderRadius: 14,
  padding: "1.5rem 1.75rem",
};

const h3Style: React.CSSProperties = {
  color: ACCENT,
  fontWeight: 700,
  fontSize: "1.05rem",
  margin: "0 0 0.75rem",
};

const pStyle: React.CSSProperties = {
  color: MUTED,
  lineHeight: 1.8,
  margin: "0 0 0.9rem",
  fontSize: "0.95rem",
};

const pLast: React.CSSProperties = { ...pStyle, margin: 0 };

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: BG,
  border: `1px solid ${BORDER}`,
  borderRadius: 10,
  color: TEXT,
  padding: "0.75rem 0.9rem",
  fontSize: "0.95rem",
  lineHeight: 1.6,
  fontFamily: "inherit",
  resize: "vertical",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  color: TEXT,
  fontWeight: 600,
  fontSize: "0.88rem",
  margin: "0 0 0.4rem",
};

export default function ChristianGoodnessPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<GDNEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [area, setArea] = useState("");
  const [habit, setHabit] = useState("");
  const [motivation, setMotivation] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      // ignore corrupted storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage may be unavailable
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!area.trim() && !habit.trim() && !motivation.trim()) return;
    setEntries(prev => [
      { area: area.trim(), habit: habit.trim(), motivation: motivation.trim() },
      ...prev,
    ]);
    setArea("");
    setHabit("");
    setMotivation("");
  };

  const deleteEntry = (index: number) => {
    setEntries(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* HEADER */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: ACCENT + "22", color: "#6fbf91", padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
            Fruit of the Spirit
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Filled with Goodness: The Fruit of Moral Excellence
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 660, margin: "0 0 1rem" }}>
          Goodness is the fruit we most easily mistake for something we already have. We are pleasant to the people
          we like, honest when it costs nothing, generous in public &mdash; and we call it goodness. The New
          Testament calls it something far more demanding: <em>agathos</em>, genuine moral excellence that flows
          from union with the one who is himself the Good. Not niceness. Not the absence of obvious vice. A
          positive, active, God-rooted virtue that does good the way a tree bears fruit &mdash; because that is
          what it is, not because it is performing.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the theology of <em>agathos</em>, six practices for cultivating it, voices from
          church history who embodied costly goodness, the anchor Scriptures, a private journal, and teaching
          videos. Explore the full{" "}
          <Link href="/fruit-of-the-spirit" style={{ color: "#6fbf91", textDecoration: "underline" }}>fruit of the Spirit</Link>,{" "}
          or companion guides on{" "}
          <Link href="/christian-kindness" style={{ color: "#6fbf91", textDecoration: "underline" }}>kindness</Link>{" "}
          and{" "}
          <Link href="/christian-virtue" style={{ color: "#6fbf91", textDecoration: "underline" }}>Christian virtue</Link>.
        </p>

        {/* TAB BAR */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                borderColor: tab === t.id ? ACCENT : BORDER,
                background: tab === t.id ? ACCENT + "22" : "transparent",
                color: tab === t.id ? "#6fbf91" : MUTED,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ============ THEOLOGY ============ */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={cardStyle}>
              <h3 style={h3Style}>Agathos: Moral Excellence, Not Mere Niceness &mdash; Galatians 5:22</h3>
              <p style={pStyle}>
                When Paul lists <em>agathosune</em> as the seventh fruit of the Spirit, he is not repeating
                kindness (the previous entry, <em>chrestotes</em>) or describing a pleasant disposition. The
                Greek root <em>agathos</em> carries the weight of genuine moral excellence &mdash; something
                is <em>agathos</em> when it is truly and substantially good, not merely agreeable or useful.
                It is the word Plato used for the Form of the Good, the highest reality; it is the word Jesus
                used when he said &ldquo;No one is good except God alone&rdquo; (Mark 10:18) &mdash; setting
                a bar that only the divine can meet unaided.
              </p>
              <p style={pStyle}>
                The difference from kindness is telling. <em>Chrestotes</em> emphasizes the manner &mdash; the
                gentle, accommodating warmth in how good things are done. <em>Agathosune</em> emphasizes the
                substance &mdash; the moral quality of what is done, even when it must be done with severity.
                Think of Jesus cleansing the temple: that was not a kind act. It was a good one. C.S. Lewis
                observed that God is not merely nice &mdash; he is good, which is &ldquo;the sort of thing
                that needs no recommendation.&rdquo; Goodness includes, when love requires it, the willingness
                to wound.
              </p>
              <p style={pLast}>
                This means goodness is not for the naturally pleasant-tempered. Like all the fruit, it is grown
                by the Spirit in every kind of soil. But that union must be real, and its fruit shows up in
                specific actions, honest motives, and a consistent character that others can rely upon &mdash;
                goodness that leaves a trace in the world.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Taste and See: The Goodness of God as Foundation &mdash; Psalm 34:8</h3>
              <p style={pStyle}>
                &ldquo;Oh, taste and see that the Lord is good&rdquo; &mdash; David writes this as a fugitive
                hiding among enemies, in the immediate aftermath of acting insane to save his own life. The
                theology here is stunning: the psalmist&rsquo;s experience of divine goodness is not contingent
                on comfortable circumstances. He has tasted it in extremity, and the taste has changed his
                whole frame of reference. God is good, which means the universe is not ultimately hostile,
                which means goodness is not ultimately futile.
              </p>
              <p style={pStyle}>
                This is the foundation the virtue requires. Goodness practiced as mere ethics &mdash; as the
                right thing to do because it is the right thing to do &mdash; runs on a finite tank. When the
                cost exceeds the benefit calculation, purely ethical goodness collapses. What sustains costly
                goodness over a lifetime is the conviction, grounded in experience, that the God one is serving
                and resembling is himself entirely good &mdash; that the universe bends, in the end, toward the
                one who made it and called it &ldquo;very good.&rdquo;
              </p>
              <p style={pLast}>
                The invitation to &ldquo;taste&rdquo; is significant. Goodness, like flavor, must be experienced
                personally, not only believed propositionally. People who have genuinely encountered God&rsquo;s
                goodness in their own difficult story &mdash; who can point to a moment where, against all odds,
                they found him faithful, kind, and just &mdash; have a reservoir that ethical argument cannot
                create. The path to becoming a good person runs through the prayer: God, let me taste you.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Created for Good Works &mdash; Ephesians 2:10</h3>
              <p style={pStyle}>
                Ephesians 2:8&ndash;9 is the great text of salvation by grace through faith, not works. Verse
                10 is its equally important sequel: &ldquo;For we are his workmanship, created in Christ Jesus
                for good works, which God prepared in advance for us to do.&rdquo; This verse quietly demolishes
                two errors. First, the error of moralism: we are not saved by good works, and good works do not
                generate or maintain our standing before God. Second, the error of cheap grace: we are saved
                <em> for</em> good works, which God himself has already scripted into our story. Salvation
                without fruit is a theological category error, not merely a pastoral disappointment.
              </p>
              <p style={pStyle}>
                The word translated &ldquo;workmanship&rdquo; is <em>poiema</em> &mdash; a poem, a work of art,
                a crafted object. God is making something. We are his artifact, and the artifact has a function:
                the good works &ldquo;prepared in advance.&rdquo; This prepared-in-advance language gives
                goodness a particular flavor &mdash; the works are not improvised by our willpower but appointed
                and empowered by the one who made us. The question is not &ldquo;how can I force myself to do
                more good?&rdquo; but &ldquo;what works has God prepared that I keep walking past?&rdquo;
              </p>
              <p style={pLast}>
                This also means goodness is irreducibly personal and particular. The good works prepared for
                you are not a generic list of moral duties; they are specific acts in specific relationships in
                specific moments. The neighbor no one else notices, the injustice only you are placed to address,
                the word only you are trusted to say &mdash; these are the good works written into your
                <em> poiema</em> before you were born. The Spirit grows goodness as the eyes to see them and
                the will to do them.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Goodness vs. Niceness vs. Moralism</h3>
              <p style={pStyle}>
                Christian goodness has three imposters it must perpetually distinguish itself from. The first
                is niceness. Niceness is conflict-avoidance dressed in pleasant clothing; it tells people what
                they want to hear, smooths things over at the expense of truth, and never costs anything
                significant. It is the goodness of the person who has never had to choose between the
                comfortable relationship and the honest word. Biblical goodness is capable of hard conversations,
                necessary confrontations, and the kind of love that refuses to lie to people about their
                condition.
              </p>
              <p style={pStyle}>
                The second imposter is moralism. Moralism is goodness as performance &mdash; goodness that
                exists to establish one&rsquo;s own standing, to signal virtue to others, or to maintain a
                self-image as a good person. Jesus diagnosed it with surgical precision in Matthew 6: the alms
                given to be seen, the prayer performed to be heard, the fast announced to be admired. Moralism
                can look identical to goodness from the outside and be its opposite at the root. The fruit of
                the Spirit is the kind of goodness that persists when no one is watching, costs something when
                there is no reward, and is embarrassed rather than pleased by public recognition.
              </p>
              <p style={pLast}>
                The third imposter is mere law-keeping. It is possible to obey every explicit command while
                missing the spirit of goodness entirely &mdash; the Pharisees are the permanent illustration.
                The lawyer in Luke 10, trying to justify himself, asks &ldquo;who is my neighbor?&rdquo; &mdash;
                a question designed to minimize obligation. The Samaritan in the parable asks nothing of the
                sort; he simply sees a person in need and his goodness flows naturally toward them. Christian
                goodness is not the minimum required; it is the overflow of a person whose heart has been
                reoriented toward the good by union with the Good.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>The Sermon on the Mount as the Portrait of Goodness</h3>
              <p style={pStyle}>
                The Sermon on the Mount (Matthew 5&ndash;7) is the fullest picture in the Gospels of what
                goodness looks like in a human life. It begins with the Beatitudes &mdash; a portrait of the
                character of the kingdom citizen, not a list of duties to perform. The poor in spirit, the
                mourning, the meek, the hungry for righteousness: these are descriptions of an inner life
                oriented toward God, from which good deeds flow naturally as water from a spring. You do not
                force spring water; you clear the channel.
              </p>
              <p style={pStyle}>
                Jesus then &ldquo;fulfills&rdquo; the law by going beneath the surface of its commands to the
                heart-disposition each command assumes. Murder is prohibited because human life is sacred; Jesus
                prohibits the contempt that precedes murder. Adultery is prohibited because covenant is sacred;
                Jesus prohibits the objectifying look that precedes adultery. The pattern is consistent: external
                compliance that leaves the heart unchanged is insufficient &mdash; not because the law was too
                shallow, but because its depth was never properly plumbed.
              </p>
              <p style={pLast}>
                The climax in chapter 5:48 &mdash; &ldquo;you therefore must be perfect, as your heavenly
                Father is perfect&rdquo; &mdash; sounds impossible and is intended to. Dallas Willard read it
                as &ldquo;complete&rdquo; or &ldquo;whole,&rdquo; a goodness that is not partial or
                conditional. The goodness of the kingdom citizen is not occasional heroics; it is a whole life
                ordered toward the good the way the Father&rsquo;s whole nature is ordered toward it.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Goodness Flows from Union with Christ, Not Effort Alone</h3>
              <p style={pStyle}>
                John 15 is the great theological statement about the source of fruit: &ldquo;I am the vine;
                you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for
                apart from me you can do nothing.&rdquo; The goodness of a Christian is not an autonomous
                achievement; it is a produced effect of a living connection. This does not make it passive
                &mdash; branches work hard in their own way &mdash; but it locates the power correctly.
                Willpower-driven goodness exhausts itself; Spirit-produced goodness is inexhaustible because
                its source is.
              </p>
              <p style={pStyle}>
                The practical implication is that the quality of a person&rsquo;s connection to Christ and
                their fruitfulness in goodness will track each other. A season of spiritual dryness,
                unconfessed sin, or prayerlessness shows up downstream as a thinning of the fruit. The
                solution to moral dryness is not more willpower but a return to the vine &mdash; repentance,
                prayer, Scripture, community, and the sacraments as means of grace that keep the channels
                open.
              </p>
              <p style={pLast}>
                This also reframes how we respond to our own failures in goodness. The person who is
                performing goodness for self-image crashes in shame when they fail; the person whose goodness
                flows from union with Christ returns to the vine, repents honestly, and finds fresh sap.
                Romans 15:14 says believers are &ldquo;full of goodness, filled with all knowledge, and able
                to instruct one another&rdquo; &mdash; not because of their own virtue, but because of who
                lives in them. The fullness is Christ&rsquo;s; the vessel is ours to keep unobstructed.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Rest and Enjoyment as Goodness &mdash; Receiving God&rsquo;s Good Gifts</h3>
              <p style={pStyle}>
                Goodness in Christian thought is not only outward, active, and directed at others. There is a
                receptive dimension that is often forgotten in the Protestant tradition&rsquo;s emphasis on
                doing. The God who declared creation &ldquo;very good&rdquo; built pleasure, beauty, rest,
                and enjoyment into the structure of the world as features, not bugs. The Sabbath is the
                theological statement: even God rested and called it good. Refusing to receive good gifts is
                not ascetic virtue; it is a form of ingratitude that implicitly calls what God made
                insufficient.
              </p>
              <p style={pLast}>
                Frederick Buechner wrote beautifully about the &ldquo;blessedness&rdquo; available in the
                sheer texture of ordinary life &mdash; the meal that is truly delicious, the music that does
                something to the body before it does anything to the mind, the conversation that leaves you
                more alive. The person of goodness receives these as gifts from the one Psalm 34:8 invites us
                to taste. Ingratitude &mdash; joylessness, the refusal to enjoy &mdash; is its own failure
                of goodness. To be &ldquo;filled with goodness&rdquo; includes being filled with gratitude
                for the very good world God made and is remaking.
              </p>
            </div>
          </div>
        )}

        {/* ============ PRACTICES ============ */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 660 }}>
              Goodness is a fruit, but the Spirit tends it through habits and disciplines. These six practices
              are not moralistic checklists &mdash; they are ways of positioning yourself under the influence
              of the God who is himself entirely good. Start with whichever one most uncovers your need.
            </p>

            <div style={cardStyle}>
              <h3 style={h3Style}>1. The Good Work Habit &mdash; One Act of Genuine Goodness Daily</h3>
              <p style={pStyle}>
                Ephesians 2:10 says good works were prepared in advance for you to do. This practice is about
                slowing down enough to notice them. The discipline is simple in structure and surprisingly
                demanding in execution: each morning, ask God to show you one act of genuine goodness prepared
                for that day, and then do it &mdash; not a good work that conveniently fits your schedule or
                costs nothing, but the one that presents itself as genuinely needed.
              </p>
              <p style={pStyle}>
                The key qualifiers are &ldquo;genuine&rdquo; and &ldquo;daily.&rdquo; Genuine means rooted in
                actual need rather than your preference to feel helpful &mdash; the uncomfortable conversation,
                the time-consuming errand for a housebound neighbor, the public advocacy that costs social
                capital. Daily means the practice trains your attention over time; you begin to see needs you
                used to walk past, because you have been deliberately looking. Many people report that within
                a month the difficulty shifts from finding the act to having the courage to do it.
              </p>
              <p style={pLast}>
                At day&rsquo;s end, review. Did you do it? If yes, spend a moment giving the work back to
                God &mdash; not as a ledger entry but as an acknowledgment that the goodness was his. If no,
                resist shame; simply ask what got in the way and name it honestly. Dallas Willard was fond of
                saying that we do not need to do many things if we do the right things; this practice is an
                attempt to find those right things in their specific, daily form.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>2. The Moral Inventory &mdash; Examining Heart Motives</h3>
              <p style={pStyle}>
                The Ignatian examen, adapted for the pursuit of goodness, is one of the most incisive practices
                available. For goodness specifically, the review focuses on motive: when you did something good
                today, why did you do it? When you failed to do something good, what was really going on?
              </p>
              <p style={pStyle}>
                The questions to sit with: Did I do that generous act because I wanted to help, or because I
                wanted to be seen helping? Did I tell that truth because love required it, or because I wanted
                to feel superior? Did I stay silent when I should have spoken up because of humility, or
                because of fear of conflict? These questions are not exercises in self-laceration; they are a
                lens for seeing the moral life clearly. And clear seeing is the precondition of change.
              </p>
              <p style={pLast}>
                What you are looking for is the specific distortion at work in your goodness &mdash; the way
                your particular self-protective patterns or performance anxieties are hijacking genuinely good
                impulses. When you find it, bring it to God in confession and ask for the goodness that needs
                no audience. The inventory is not about accumulating guilt; it is about clearing the channel
                between you and the Good.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>3. Goodness in the Workplace &mdash; Integrity and Excellence as Witness</h3>
              <p style={pStyle}>
                The workplace is where abstract goodness meets the friction of real life. The temptation to
                cut a corner when no one will know, to take credit for someone else&rsquo;s work, to tell the
                client what they want to hear rather than what is true, to do seventy percent of a job and
                call it done &mdash; these are the daily tests of whether goodness is a Sunday virtue or an
                all-week one. Colossians 3:23 gives the theological reframe: &ldquo;Whatever you do, work
                heartily, as for the Lord and not for men.&rdquo;
              </p>
              <p style={pStyle}>
                Practical goodness at work looks like: doing the unglamorous task thoroughly because it
                matters to the person depending on it; being honest in performance reviews rather than falsely
                encouraging or falsely harsh; refusing to participate in the gossip economy of your office
                even when it costs relational capital; advocating for the coworker being treated unfairly at
                some personal risk. None of these are dramatic; all of them are the kind of thing that,
                practiced consistently, makes you the person people trust without being quite sure why.
              </p>
              <p style={pLast}>
                The witness dimension is real but indirect. Most people will never ask you why you work with
                integrity; they will simply notice that you do. Peter&rsquo;s logic in 1 Peter 2:12 applies:
                &ldquo;Keep your conduct among the Gentiles honorable, so that when they speak against you
                as evildoers, they may see your good deeds and glorify God.&rdquo; Excellence and honesty in
                daily work are not ancillary to the Christian life; they are part of the goodness the Spirit
                grows in the ordinary world.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>4. The Upright Word &mdash; Truthful Speech Even When Costly</h3>
              <p style={pStyle}>
                Goodness and truthfulness are inseparable in the biblical vision, because deception &mdash;
                whatever its motive &mdash; treats people as objects to be managed rather than persons to be
                honored. The &ldquo;upright word&rdquo; practice asks one discipline of you: before you speak
                in any significant conversation, ask whether what you are about to say is actually true, or
                whether you are shading it for self-protection, approval, or conflict avoidance.
              </p>
              <p style={pStyle}>
                The costs are real. The honest performance review that costs you the employee&rsquo;s favor.
                The &ldquo;I was wrong about that&rdquo; that costs you the argument. The &ldquo;I
                can&rsquo;t promise that&rdquo; when the other person desperately wants a promise. The
                &ldquo;that was harmful to you, and I&rsquo;m sorry&rdquo; without the self-justifying
                addendum. Each of these is the upright word, and each one is an act of genuine goodness even
                when it does not feel good in the moment of saying it.
              </p>
              <p style={pLast}>
                Ephesians 4:15 calls this &ldquo;speaking the truth in love&rdquo; &mdash; the key pairing.
                Truthfulness without love becomes cruelty; love without truthfulness becomes flattery. The
                upright word holds both. It tells the truth in a manner calibrated not to wound unnecessarily
                but also not to soften the truth into unreality. It is one of the hardest practices in this
                guide, and one of the clearest proofs of the Spirit&rsquo;s work when you actually manage it.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>5. Modeling Goodness for Children</h3>
              <p style={pStyle}>
                Children are the most accurate mirrors of adult goodness, because they watch what happens when
                adults think no one important is looking. They hear the backstage conversation, the muttered
                frustration at the driver in front of you, the way you talk about the neighbor who is
                difficult. They learn the relationship between Sunday goodness and Monday goodness before they
                have words for it. Deuteronomy 6:7 pictures the transmission of faith happening in the
                ordinary texture of daily life &mdash; &ldquo;when you sit in your house, and when you walk
                by the way, and when you lie down, and when you rise.&rdquo;
              </p>
              <p style={pStyle}>
                Modeling goodness for children does not mean performing it for their benefit. It means doing
                the genuinely good thing and then, when appropriate, naming it plainly: &ldquo;I went back to
                pay for what I accidentally took because stealing is wrong even when no one knows.&rdquo;
                &ldquo;I called to apologize even though it was awkward, because I was wrong and apologies
                matter.&rdquo; &ldquo;We gave that money away because we have more than we need and they
                don&rsquo;t.&rdquo; No moralizing speech required; just the visible act with its honest
                explanation.
              </p>
              <p style={pLast}>
                The most powerful modeling is what children see when you fail. The parent who admits a mistake
                clearly, apologizes without excessive self-flagellation, and makes it right has just given
                their child the most important lesson in Christian goodness available: that goodness is not
                about being perfect but about being honest, and that the way back from failure is through the
                cross, not around it.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>6. Rest and Enjoyment as Goodness &mdash; Receiving God&rsquo;s Good Gifts Gratefully</h3>
              <p style={pStyle}>
                This practice runs against the grain of every productivity-shaped version of Christianity: the
                practice is to rest, enjoy, and give thanks &mdash; and to do it as an act of faith, not
                laziness. The Sabbath principle embedded in Exodus 20 is not merely a recuperation strategy;
                it is a theological statement about who provides. You can stop because God does not stop. You
                can enjoy because the world is his gift and he means for you to receive it.
              </p>
              <p style={pStyle}>
                The practice: set aside one block of time each week &mdash; a day if possible, an afternoon
                if not &mdash; dedicated to genuine enjoyment of something created. A long meal with people
                you love. A walk in the kind of landscape that makes you feel small in the right way. Music
                that does what music does. A book that is purely delightful. The discipline is to be present,
                to resist the pull toward productivity, and to consciously name what you are enjoying as a
                gift from a good God.
              </p>
              <p style={pLast}>
                Buechner&rsquo;s insight is that this kind of attentive enjoyment is itself a form of prayer
                &mdash; a silent yes to the question &ldquo;Is my creation good?&rdquo; The person who has
                genuinely tasted that the Lord is good (Psalm 34:8) is also the person most likely to extend
                that goodness toward others, because they have been filled rather than running on empty.
                Joylessness and burnout produce brittle goodness; wonder and rest produce the durable kind.
              </p>
            </div>
          </div>
        )}

        {/* ============ VOICES ============ */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 660 }}>
              Six writers and thinkers who have illuminated what genuine goodness looks like &mdash; from
              medieval scholasticism to twentieth-century memoir, from the carefully systematic to the
              surprisingly beautiful.
            </p>

            <div style={cardStyle}>
              <h3 style={h3Style}>C.S. Lewis &mdash; Mere Christianity on Moral Goodness</h3>
              <p style={pStyle}>
                Lewis&rsquo;s great contribution to the discussion of goodness is his distinction between the
                man who struggles with temptation and overcomes it and the man who feels no temptation at all.
                Most people assume the second man is better; Lewis reverses it. The person who has strong
                temptations and resists them is showing more virtue than the person who is temperamentally
                untempted &mdash; just as a person carrying a heavy load and walking upright shows more
                strength than someone walking unburdened.
              </p>
              <p style={pStyle}>
                But the deeper Lewis insight is the direction of goodness. In <em>Mere Christianity</em>, he
                argues that Christian morality is not primarily a code of behavior but a process of character
                formation &mdash; specifically, the replacement of the natural self with a self shaped by
                Christ. &ldquo;Give up yourself, and you will find your real self. Lose your life, and you
                will save it.&rdquo; Goodness, on this reading, is not achieved by trying harder to be good;
                it emerges from the death and resurrection of the self in Christ.
              </p>
              <p style={pLast}>
                Lewis also drew the sharpest possible line between niceness and goodness: the nice man is
                pleasant because it is his nature; the good man may be pleasant or difficult depending on what
                love requires. The goal of the Christian life, he insisted, is not to be a &ldquo;nice
                person&rdquo; but to become a son or daughter of God, which is something far more costly and
                far more magnificent. Goodness is not a personality trait; it is a participation in the divine
                nature (2 Peter 1:4).
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>John Piper &mdash; God Is the Gospel</h3>
              <p style={pStyle}>
                Piper&rsquo;s contribution to the theology of goodness is his insistence that God himself
                &mdash; not his benefits &mdash; is the supreme good the gospel offers. His book <em>God Is
                the Gospel</em> presses the question: if you could have all the forgiveness, all the healing,
                all the heaven &mdash; but without God, without the relationship with him personally &mdash;
                would that still be good news? Piper argues that any version of the gospel that does not have
                God himself as the central treasure has substituted a gift for the Giver.
              </p>
              <p style={pLast}>
                For the fruit of goodness, this reframing matters enormously. The person who pursues goodness
                to obtain God&rsquo;s favor, or to gain blessings, or to feel good about themselves, is
                pursuing goodness with the Giver as instrumental to the gift. Piper&rsquo;s vision inverts
                this: the God who is himself the Good is the reward, and goodness is what the life shaped
                around that reward looks like from the outside. Christian hedonism &mdash; his phrase &mdash;
                means finding your deepest joy in the one who is most joyful, and the person shaped by that
                joy is genuinely good without trying to appear so.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Thomas Aquinas &mdash; Goodness as Participation in Divine Being</h3>
              <p style={pStyle}>
                Aquinas, building on Augustine and Aristotle, worked out the most philosophically rigorous
                account of goodness in Christian tradition. For Aquinas, goodness is not a property separate
                from being &mdash; &ldquo;good&rdquo; and &ldquo;being&rdquo; are convertible terms.
                Everything that exists, insofar as it exists, is good. Evil is not a substance but a
                privation, an absence of the good that should be there. This has significant practical
                implications: we do not become good by adding goodness to a neutral self; we become good by
                becoming more fully what we were created to be.
              </p>
              <p style={pLast}>
                The theological corollary is that goodness is participatory &mdash; creatures are good by
                sharing in the goodness of God, who alone is Good by nature. Human goodness is always derived,
                always a reflection of a prior Source. This is why the pursuit of goodness is inseparable from
                the pursuit of God: you cannot have more of the one without more of the other. And it is why
                goodness has an objective quality &mdash; it is not what we find pleasing or socially approved,
                but what more fully actualizes our nature as image-bearers of the one who said &ldquo;Let us
                make man in our image.&rdquo;
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Dallas Willard &mdash; The Divine Conspiracy</h3>
              <p style={pStyle}>
                Willard&rsquo;s magnum opus, <em>The Divine Conspiracy</em>, is a sustained argument that
                Jesus&rsquo;s gospel is the good news of life in the kingdom of God now &mdash; not merely
                forgiveness for later. The Sermon on the Mount, which most readers treat as an impossible
                ethical demand, Willard reads as a description of how life actually works in the kingdom:
                the poor in spirit are happy because they have access to the kingdom; the meek inherit the
                earth not by strategy but because God&rsquo;s economy is ordered that way.
              </p>
              <p style={pLast}>
                For goodness specifically, Willard&rsquo;s insight is that we become good not by trying to
                be good but by immersing ourselves in the activities that transform the self from the inside.
                This is the logic of spiritual disciplines: not moral achievement but soul training. The
                disciplines do not make you good; they remove the obstacles and create the conditions in which
                the Spirit can grow the fruit of goodness in you. The goal &mdash; Willard&rsquo;s goal for
                the Christian life &mdash; is to become the kind of person for whom goodness is natural, who
                does good the way a healthy apple tree produces apples: without strain, as the expression of
                its own nature.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Augustine &mdash; The Restless Heart Seeking the Good</h3>
              <p style={pStyle}>
                Augustine&rsquo;s <em>Confessions</em> opens with the sentence that has defined Christian
                anthropology ever since: &ldquo;You have made us for yourself, O Lord, and our heart is
                restless until it finds its rest in you.&rdquo; The entire book is a theological biography of
                a man pursuing goodness in the wrong places &mdash; pleasure, ambition, philosophy, Manichean
                dualism, Neoplatonism &mdash; and finding each substitute good hollow before encountering the
                real thing.
              </p>
              <p style={pLast}>
                The theological brilliance of Augustine&rsquo;s account is that the wrongly directed pursuit
                of goodness is not simply a mistake but a misdirected good desire. He was looking for good
                things &mdash; beauty, truth, love, rest &mdash; and finding approximations. The gospel
                redeems these desires rather than killing them; it redirects them toward their true object.
                This is enormously important for the practice of goodness: the competitor desires that pull
                us toward wrong behavior are not purely evil but disordered goods. The path through them is
                not suppression but reordering &mdash; learning to want the right things, and to want them
                in the right order, with God as the first and final good.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Frederick Buechner &mdash; Goodness That Surprises</h3>
              <p style={pStyle}>
                Buechner, the novelist and minister, saw goodness most clearly in its unexpected appearances
                &mdash; in the moment where grace intrudes on ordinary life and does something that cannot
                quite be accounted for by the logic of the situation. He wrote about this in memoir
                (particularly <em>The Sacred Journey</em> and <em>Now and Then</em>) and in fiction, and his
                repeated discovery is that goodness tends to arrive sideways, from directions you were not
                watching.
              </p>
              <p style={pLast}>
                His most quoted line &mdash; &ldquo;Pay attention. All moments are key moments&rdquo; &mdash;
                is the practical form of his theology. Goodness, for Buechner, is inseparable from
                attentiveness. The good person is not primarily the morally rigorous person but the person
                who is genuinely present to the world as it is, who notices what is actually there rather
                than what is useful or convenient to notice. In that attentiveness, the good works prepared
                in advance begin to appear, because you are finally looking in the right direction.
                Buechner&rsquo;s goodness is the goodness of the person who has learned to read the world
                as the text in which God is speaking.
              </p>
            </div>
          </div>
        )}

        {/* ============ SCRIPTURE ============ */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 660 }}>
              Six anchor texts for the fruit of goodness &mdash; from the vineyard of Galatians to the good
              works of Ephesians, from the invitation to taste in Psalm 34 to the radical summary of Micah.
              Read them slowly and let each one do its specific work.
            </p>

            <div style={cardStyle}>
              <h3 style={h3Style}>Galatians 5:22&ndash;23</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness,
                faithfulness, gentleness, self-control; against such things there is no law.&rdquo;
              </p>
              <p style={pLast}>
                Goodness (<em>agathosune</em>) appears seventh in a list that reads as one organic whole. The
                singular &ldquo;fruit&rdquo; matters: these are not nine separate virtues to be collected but
                one integrated character to be grown. Goodness without love produces harshness; goodness
                without patience becomes demanding; goodness without faithfulness fades when the cost rises.
                The Spirit grows them together, and a deficiency in one usually indicates a deficiency at
                the root.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Psalm 34:8</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;Oh, taste and see that the Lord is good! Blessed is the man who takes refuge
                in him!&rdquo;
              </p>
              <p style={pLast}>
                The invitation is to experience, not merely to believe. &ldquo;Taste&rdquo; is immediate,
                personal, and can only be done by the person themselves &mdash; no proxy tasting, no
                secondhand goodness. David writes from a cave, on the run, in circumstances that should have
                discredited the claim. Instead, they authenticate it: he has tasted divine goodness under the
                worst conditions, and the taste has held. This is the foundation of durable goodness in a
                believer &mdash; not a theology of God&rsquo;s goodness but a biography of experiencing it.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Ephesians 2:10</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;For we are his workmanship, created in Christ Jesus for good works, which God prepared
                beforehand, that we should walk in them.&rdquo;
              </p>
              <p style={pLast}>
                We are <em>poiema</em> &mdash; God&rsquo;s crafted poem &mdash; and the poem has a purpose:
                the good works scripted into our story before we arrived. This verse rescues goodness from
                both moralism (we are not saved by works) and quietism (we are created for them). The question
                this text leaves us with each morning is not &ldquo;am I good enough?&rdquo; but &ldquo;what
                good works are waiting for me today?&rdquo; &mdash; an entirely different posture, and one
                much more likely to actually produce them.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Romans 15:14</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;I myself am satisfied about you, my brothers, that you yourselves are full of goodness,
                filled with all knowledge, and able to instruct one another.&rdquo;
              </p>
              <p style={pLast}>
                Paul says this about people he has never met. His confidence is not in their personal moral
                accomplishment but in what Christ has done in them. &ldquo;Full of goodness&rdquo; describes a
                condition of abundance, not adequacy &mdash; a reservoir from which one can give to others
                without running dry. The pairing with &ldquo;filled with all knowledge&rdquo; suggests that
                goodness and wisdom travel together; naivety is not a spiritual virtue, and genuine goodness
                does not require ignorance of how the world works.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Micah 6:8</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;He has told you, O man, what is good; and what does the Lord require of you but to do
                justice, and to love kindness, and to walk humbly with your God?&rdquo;
              </p>
              <p style={pLast}>
                The most compressed summary of applied goodness in the Old Testament. Three elements: doing
                justice (active goodness in the public sphere, rectifying what is wrong), loving kindness
                (<em>hesed</em> &mdash; the covenant loyalty that keeps showing up), and walking humbly with
                God (the posture that makes the first two possible). Goodness is not optional but required
                &mdash; and it covers both the interpersonal and the structural dimensions of life.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>3 John 1:11</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;Beloved, do not imitate evil but imitate good. Whoever does good is from God; whoever
                does evil has not seen God.&rdquo;
              </p>
              <p style={pLast}>
                This brief verse makes a striking theological claim: genuine goodness is diagnostic. Not that
                perfect goodness proves salvation &mdash; but that the habitual direction of a life, its
                consistent orientation toward good rather than evil, is evidence of whether the person has
                genuinely encountered God. Knowing God and doing good are linked at the root, because God is
                himself the Good. To see him is to begin to resemble him; to resemble him is to do good; and
                to do good is to participate in the life of the one who is the source of all goodness.
              </p>
            </div>
          </div>
        )}

        {/* ============ JOURNAL ============ */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 660 }}>
              The moral inventory grows sharper when it becomes a habit. Use this journal to examine a specific
              area of your life needing more goodness, the good habit you sense God calling you to cultivate,
              and your motivation &mdash; rooted honestly in God&rsquo;s goodness rather than performance or
              reputation. Entries are stored privately in your browser.
            </p>

            <div style={cardStyle}>
              <h3 style={h3Style}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="gdn-area" style={labelStyle}>Area of life needing more goodness</label>
                <textarea
                  id="gdn-area"
                  value={area}
                  onChange={e => setArea(e.target.value)}
                  placeholder="Where is goodness most absent, most mechanical, or most performed in your life right now? Work, family, finances, speech, thought life..."
                  rows={3}
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="gdn-habit" style={labelStyle}>The good habit to cultivate</label>
                <textarea
                  id="gdn-habit"
                  value={habit}
                  onChange={e => setHabit(e.target.value)}
                  placeholder="One specific, concrete habit of goodness to grow in this area. Not vague resolve but a named, repeatable practice..."
                  rows={3}
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="gdn-motivation" style={labelStyle}>Your motivation &mdash; rooted in God&rsquo;s goodness, not performance</label>
                <textarea
                  id="gdn-motivation"
                  value={motivation}
                  onChange={e => setMotivation(e.target.value)}
                  placeholder="Why this? Not to be seen, approved, or affirmed — but because God is good and you are his workmanship. What does that look like for you here?"
                  rows={3}
                  style={inputStyle}
                />
              </div>
              <button
                onClick={saveEntry}
                style={{
                  background: ACCENT,
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Save Entry
              </button>
            </div>

            <h3 style={{ ...h3Style, margin: "0.5rem 0 0" }}>
              Your Entries {loaded && entries.length > 0 ? `(${entries.length})` : ""}
            </h3>

            {loaded && entries.length === 0 && (
              <div style={{ ...cardStyle, textAlign: "center", padding: "2.5rem 1.75rem" }}>
                <p style={{ ...pLast, fontStyle: "italic" }}>
                  No entries yet. The fruit of goodness grows in examined soil. When you notice an area where
                  your goodness is thin or false, come back and write it down.
                </p>
              </div>
            )}

            {loaded && entries.map((entry, index) => (
              <div key={index} style={cardStyle}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ flex: 1 }}>
                    {entry.area && (
                      <div style={{ marginBottom: "0.85rem" }}>
                        <div style={{ color: "#6fbf91", fontSize: "0.75rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Area
                        </div>
                        <p style={{ ...pLast, color: TEXT }}>{entry.area}</p>
                      </div>
                    )}
                    {entry.habit && (
                      <div style={{ marginBottom: "0.85rem" }}>
                        <div style={{ color: "#6fbf91", fontSize: "0.75rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Good Habit
                        </div>
                        <p style={pLast}>{entry.habit}</p>
                      </div>
                    )}
                    {entry.motivation && (
                      <div>
                        <div style={{ color: "#6fbf91", fontSize: "0.75rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Motivation
                        </div>
                        <p style={pLast}>{entry.motivation}</p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => deleteEntry(index)}
                    aria-label="Delete entry"
                    style={{
                      background: "transparent",
                      border: `1px solid ${BORDER}`,
                      color: MUTED,
                      borderRadius: 8,
                      padding: "0.35rem 0.8rem",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ============ VIDEOS ============ */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 660 }}>
              Teaching on the fruit of goodness, Psalm 34, the good works of Ephesians 2:10, and the nature of
              moral excellence in the Christian life.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ color: TEXT, fontSize: "0.95rem", fontWeight: 700, margin: 0, lineHeight: 1.4 }}>
                      {v.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CLOSING */}
        <div style={{ marginTop: "3rem", padding: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, borderLeft: `4px solid ${ACCENT}` }}>
          <p style={{ ...pStyle, fontStyle: "italic", color: TEXT }}>
            &ldquo;Oh, taste and see that the Lord is good! Blessed is the man who takes refuge in him!&rdquo;
          </p>
          <p style={{ ...pLast, fontSize: "0.85rem" }}>
            &mdash; Psalm 34:8. Keep exploring:{" "}
            <Link href="/christian-kindness" style={{ color: "#6fbf91", textDecoration: "underline" }}>kindness</Link>,{" "}
            <Link href="/christian-faithfulness" style={{ color: "#6fbf91", textDecoration: "underline" }}>faithfulness</Link>, and the{" "}
            <Link href="/fruit-of-the-spirit" style={{ color: "#6fbf91", textDecoration: "underline" }}>fruit of the Spirit</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
