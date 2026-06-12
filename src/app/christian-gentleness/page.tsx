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

const STORAGE_KEY = "vine_gentleness_entries";

interface GNTEntry {
  situation: string;
  instinct: string;
  gentleWay: string;
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
  { videoId: "GqiHhTzvWFE", title: "Dane Ortlund: Gentle and Lowly" },
  { videoId: "rW5PCYklXAU", title: "The Fruit of Gentleness - Galatians 5" },
  { videoId: "3oFV6tdtPbk", title: "Matthew 11: Come to Me, All Who Are Weary" },
  { videoId: "J0EpFPGijOo", title: "Strength Under Control: Biblical Meekness" },
  { videoId: "qLnX6gnDtbk", title: "A Gentle Answer in an Outraged World" },
  { videoId: "ck0jdyhquT4", title: "The Gentleness of Jesus" },
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

export default function ChristianGentlenessPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<GNTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [situation, setSituation] = useState("");
  const [instinct, setInstinct] = useState("");
  const [gentleWay, setGentleWay] = useState("");

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
    if (!situation.trim() && !instinct.trim() && !gentleWay.trim()) return;
    setEntries(prev => [{ situation: situation.trim(), instinct: instinct.trim(), gentleWay: gentleWay.trim() }, ...prev]);
    setSituation("");
    setInstinct("");
    setGentleWay("");
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
          Strength Under Control: The Fruit of Gentleness
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 660, margin: "0 0 1rem" }}>
          Gentleness is the most misunderstood fruit of the Spirit. The world reads it as weakness &mdash; a
          temperament for the timid, the conflict-averse, the easily walked over. Scripture reads it the opposite
          way: <em>prautes</em> is power that has been mastered, a war-horse trained to answer the slightest pressure
          of the rein. It is the virtue Jesus chose when he described his own heart &mdash; &ldquo;gentle and lowly&rdquo; &mdash;
          and the one our outraged age can least imitate and most needs.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the theology of gentleness, practices for cultivating it, voices from church history
          who embodied it, the key Scriptures, a journal for tracing your own harsh instincts toward gentler paths,
          and teaching videos. Explore the rest of the{" "}
          <Link href="/fruit-of-the-spirit" style={{ color: "#6fbf91", textDecoration: "underline" }}>fruit of the Spirit</Link>{" "}
          or the companion guides on{" "}
          <Link href="/christian-humility" style={{ color: "#6fbf91", textDecoration: "underline" }}>humility</Link>{" "}
          and{" "}
          <Link href="/christian-patience" style={{ color: "#6fbf91", textDecoration: "underline" }}>patience</Link>.
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
              <h3 style={h3Style}>Prautes: Strength Under Control &mdash; Galatians 5:23</h3>
              <p style={pStyle}>
                When Paul lists the fruit of the Spirit, the eighth quality is <em>prautes</em> &mdash; rendered
                variously as gentleness or meekness. In classical Greek the word was used of wild animals that had
                been tamed, of soothing medicine, of a gentle breeze that could have been a storm. Aristotle placed
                it as the golden mean between excessive anger and the inability to be angry at all. The common
                thread is not the absence of power but the governance of it. A gelding has no strength to control;
                a stallion answering the bridle is <em>praus</em>.
              </p>
              <p style={pStyle}>
                This matters because our culture &mdash; and frankly much of the church &mdash; hears
                &ldquo;gentleness&rdquo; and pictures a personality type: soft-spoken, conflict-averse, mild by
                disposition. But the fruit of the Spirit is not a temperament some people are born with. It is a
                character the Spirit produces in people of every temperament. The hot-headed fisherman Peter was
                being made gentle. The fire-breathing Pharisee Saul was being made gentle. Gentleness in the biblical
                sense presupposes strength, conviction, and the real capacity to wound &mdash; and then chooses, under
                the Spirit&rsquo;s rule, not to.
              </p>
              <p style={pLast}>
                Notice too that gentleness appears in a list called <em>fruit</em>, singular. It is not an optional
                elective for those gifted in it; it grows together with love, joy, peace, patience, kindness,
                goodness, faithfulness, and self-control as one organic whole. A Christian who is doctrinally
                rigorous but habitually harsh has not specialized &mdash; he has a diseased tree. As Paul says
                immediately afterward, &ldquo;against such things there is no law.&rdquo; No one has ever needed to
                be restrained from too much Spirit-wrought gentleness.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>The Only Self-Description of Christ&rsquo;s Heart &mdash; Matthew 11:29</h3>
              <p style={pStyle}>
                In the one place in all four Gospels where Jesus describes his own heart, he does not say he is
                sovereign, holy, or wise &mdash; though he is all of those. He says, &ldquo;I am gentle and lowly in
                heart, and you will find rest for your souls.&rdquo; The word translated &ldquo;gentle&rdquo; is the
                same <em>praus</em> of Galatians 5:23 and the third Beatitude. This is the deepest theological ground
                for the fruit of gentleness: it is not first an ethical demand placed on us, but a revelation of who
                God is in Christ. We are being conformed to the image of a gentle Savior.
              </p>
              <p style={pStyle}>
                Consider who is speaking. This is the one who calmed storms with a word, drove money-changers from
                the temple, and will return in judgment. His gentleness is not incapacity. It is the deliberate
                posture of infinite power toward the weary and burdened: &ldquo;a bruised reed he will not break,
                and a smoldering wick he will not quench&rdquo; (Matthew 12:20, quoting Isaiah 42). The strongest
                being in the universe is also the safest to approach.
              </p>
              <p style={pLast}>
                This reframes everything about how we pursue the virtue. We do not grit our teeth into gentleness;
                we come to the gentle one and take his yoke, and his manner begins to rub off on those who walk in
                step with him. People who have actually experienced the gentleness of Christ toward their own sin
                and weariness find it increasingly absurd to be harsh toward others. Harshness in a Christian is
                usually a symptom of a person who has forgotten how they themselves have been handled.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Moses: The Meekest Man Who Confronted an Empire &mdash; Numbers 12:3</h3>
              <p style={pStyle}>
                &ldquo;Now the man Moses was very meek, more than all people who were on the face of the
                earth.&rdquo; If meekness meant timidity, this verse would be nonsense. Moses stood before Pharaoh,
                the most powerful ruler on earth, and demanded the release of an entire slave population &mdash; ten
                times. He shattered the tablets at the foot of Sinai. He interceded so fiercely for Israel that he
                offered to be blotted out of God&rsquo;s book in their place. This is not a retiring man.
              </p>
              <p style={pStyle}>
                The context of Numbers 12 is instructive: Miriam and Aaron &mdash; his own siblings &mdash; publicly
                attack his leadership and his marriage. And Moses says nothing in his own defense. The meekest man on
                earth is fierce for God&rsquo;s glory and for other people, and silent for himself. That is the
                biblical anatomy of meekness: it is not the absence of fire but the redirection of it. Moses had
                learned &mdash; painfully, after killing an Egyptian in his own strength and spending forty years in
                the wilderness &mdash; to let God vindicate him. And God did: &ldquo;the Lord heard it&rdquo; and
                defended Moses himself.
              </p>
              <p style={pLast}>
                Meekness, then, is inseparable from trust. The meek can absorb insult without retaliation because
                they believe there is a Judge who sees. This is why Jesus can say &ldquo;blessed are the meek, for
                they shall inherit the earth&rdquo; (Matthew 5:5) &mdash; not because meekness is a clever strategy
                for acquisition, but because the meek have stopped grasping, and what God gives does not have to be
                seized.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>The Physics of the Soft Answer &mdash; Proverbs 15:1</h3>
              <p style={pStyle}>
                &ldquo;A soft answer turns away wrath, but a harsh word stirs up anger.&rdquo; This proverb is almost
                embarrassingly practical, and almost universally ignored. It describes a kind of relational physics:
                anger meeting anger compounds, like colliding waves; anger meeting gentleness loses its energy, like
                a wave running up a long flat beach. Every escalated argument in human history has obeyed the second
                half of this verse. Every de-escalation has, knowingly or not, obeyed the first.
              </p>
              <p style={pStyle}>
                Note what the proverb does not say. It does not say a soft answer concedes the point, flatters the
                angry person, or abandons truth. Softness here describes the manner, not the content. You can hold
                your position with complete firmness while refusing to match the temperature of the attack. In fact
                the soft answer is often the only way the content ever gets heard &mdash; a harsh word guarantees the
                other person stops listening and starts reloading.
              </p>
              <p style={pLast}>
                The deeper wisdom is that the soft answer requires preparation. In the moment of provocation, the
                flesh moves faster than the Spirit unless the Spirit has been given a head start. This is why
                gentleness is a <em>fruit</em> &mdash; the product of long cultivation &mdash; rather than a tactic
                improvised under fire. The person who gives a soft answer at 9 p.m. usually planted it in prayer
                at 7 a.m.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Restoring Sinners Gently &mdash; Galatians 6:1</h3>
              <p style={pStyle}>
                One chapter after listing gentleness as fruit, Paul shows its most demanding application:
                &ldquo;Brothers, if anyone is caught in any transgression, you who are spiritual should restore him
                in a spirit of gentleness. Keep watch on yourself, lest you too be tempted.&rdquo; The test of
                gentleness is not how we treat people who are doing well. It is how we handle someone caught in
                sin &mdash; the moment when harshness feels most justified, even righteous.
              </p>
              <p style={pStyle}>
                The verb &ldquo;restore&rdquo; (<em>katartizo</em>) was used for setting a broken bone and mending
                torn fishing nets. Both images repay attention. A bone-setter must be firm &mdash; a limp grip sets
                nothing &mdash; but every competent physician knows the difference between firm and brutal. The goal
                governs the manner: you handle a broken thing in the way most likely to make it whole, not in the
                way most satisfying to your indignation. Confrontation that humiliates is not restoration; it is
                amputation with extra steps.
              </p>
              <p style={pLast}>
                And Paul attaches a warning that punctures all moral superiority: &ldquo;keep watch on yourself,
                lest you too be tempted.&rdquo; Gentleness toward the fallen flows from honesty about ourselves.
                The Christian who restores gently is the one who knows the only difference between himself and the
                man in the ditch is grace &mdash; and that next month their positions could be reversed.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Gentleness in Apologetics &mdash; 1 Peter 3:15&ndash;16</h3>
              <p style={pStyle}>
                &ldquo;Always being prepared to make a defense to anyone who asks you for a reason for the hope that
                is in you; yet do it with gentleness and respect.&rdquo; Peter writes this to Christians under social
                hostility far sharper than anything most of us face &mdash; slander, exclusion, the early tremors of
                persecution. His instruction is double-edged: be <em>prepared</em> (gentleness is not an excuse for
                having nothing to say) and be <em>gentle</em> (having something to say is not a license to say it
                like a weapon).
              </p>
              <p style={pStyle}>
                The apologetic logic is profound: the manner of the defense is part of the defense. If the hope
                within us is the gospel of a gentle Savior, then a belligerent presentation of it falsifies the
                content in the act of delivering it. People can refute an argument; they have a much harder time
                refuting an argument delivered by someone who plainly is not threatened by their hostility and does
                not despise them. Peter adds &ldquo;having a good conscience, so that... those who revile your good
                behavior in Christ may be put to shame.&rdquo; The life under the words does the heavy lifting.
              </p>
              <p style={pLast}>
                This is the standing rebuke to every generation of culture-warring Christians who win arguments and
                lose people. Conviction and combativeness are not the same thing. The earliest apologists faced a
                hostile empire with reasoned answers and conspicuous gentleness &mdash; and outlasted the empire.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Why Gentleness Is Countercultural Power in an Outraged Age</h3>
              <p style={pStyle}>
                Every age makes some fruit of the Spirit unusually difficult and therefore unusually luminous. Ours
                has industrialized outrage. The platforms we live on are engineered to reward the sharpest take, the
                fastest condemnation, the most contemptuous dunk &mdash; indignation is the engagement engine of the
                modern internet, and it pays out in the currency our flesh craves: attention, affirmation, the warm
                glow of being righteously angry in public. In such an economy, harshness is cheap because it is
                subsidized. Gentleness costs.
              </p>
              <p style={pStyle}>
                Which is exactly why it is powerful. When everyone shouts, a calm voice becomes arresting. When
                contempt is the dialect of public life, respect reads as almost otherworldly &mdash; which is the
                point, because it is. The fruit of the Spirit was never meant to make Christians blend in. A church
                that can disagree without despising, correct without crushing, and absorb mockery without returning
                it is producing evidence for the gospel that no argument can match. Tertullian reported that pagans
                said of the early Christians, &ldquo;See how they love one another.&rdquo; No one has ever said of a
                comment section, &ldquo;See how they love one another.&rdquo;
              </p>
              <p style={pLast}>
                Be clear-eyed about the counterfeit, though: gentleness is not niceness, and it is not cowardice
                wearing a halo. Some silence is meekness; some is just fear of cost. The gentle Christian still
                names sin, still defends the weak, still says hard things &mdash; Jesus did all three. The
                difference is that the gentle Christian&rsquo;s strength stays under the Spirit&rsquo;s control,
                aimed at redemption rather than at the satisfying crunch of a rhetorical kill. In an outrage
                culture, that is not weakness. It is the rarest form of strength on the market.
              </p>
            </div>
          </div>
        )}

        {/* ============ PRACTICES ============ */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 660 }}>
              Gentleness is a fruit, but fruit grows on tended trees. These six practices are trellises &mdash;
              structures that give the Spirit&rsquo;s work room to climb. Start with one. Gentleness, fittingly,
              is not built by force.
            </p>

            <div style={cardStyle}>
              <h3 style={h3Style}>1. The Soft Answer Drill</h3>
              <p style={pStyle}>
                Proverbs 15:1 becomes a skill the way every skill is built: repetition under low stakes before the
                high-stakes moment arrives. The drill is simple. Before you send any reply written in irritation
                &mdash; email, text, message, comment &mdash; you must rewrite it once with the heat removed and the
                substance kept. Not softened into mush: same point, same honesty, no contempt.
              </p>
              <p style={pStyle}>
                Practically: draft the harsh version if you must (sometimes you need to see it to release it), then
                ask three questions. What am I actually trying to accomplish &mdash; change or damage? Which words
                exist only to wound? What would this sound like if I assumed the best plausible motive instead of
                the worst? Then rewrite, wait ten minutes, and send the second version or nothing.
              </p>
              <p style={pLast}>
                Most people who run this drill for a month report two surprises: how often the first draft was
                pure flesh dressed up as candor, and how much more often the soft version actually worked &mdash;
                got the apology, changed the decision, kept the friendship. The drill is not about being passive.
                It is target practice for the tongue, and James 3 suggests no muscle needs it more.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>2. The Matthew 11 Meditation</h3>
              <p style={pStyle}>
                Gentleness toward others grows out of experienced gentleness from Christ, so this practice aims at
                the root rather than the behavior. Take Matthew 11:28&ndash;30 and sit with it for ten minutes a
                day for two weeks. Read it slowly, twice. Then dwell on one phrase at a time: &ldquo;Come to
                me&rdquo; &mdash; not to a program or a standard, to a person. &ldquo;All who labor and are heavy
                laden&rdquo; &mdash; the only qualification is weariness. &ldquo;I am gentle and lowly in
                heart&rdquo; &mdash; his self-description, not his critics&rsquo;.
              </p>
              <p style={pStyle}>
                As you sit, bring to mind the place where you are currently most exhausted, most ashamed, or most
                braced for criticism &mdash; and deliberately put that part of yourself in front of the one who
                says he is gentle. Do not rush to application. The point of meditation is not extracting a lesson
                but letting a truth move from the page into the bloodstream.
              </p>
              <p style={pLast}>
                The transfer happens on its own schedule: people steeped in the gentleness of Christ start handling
                others the way they have been handled. You cannot give what you have not received; this practice is
                how you receive it, repeatedly, until it leaks.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>3. Gentle Correction: The Galatians 6:1 Method</h3>
              <p style={pStyle}>
                Sooner or later love requires you to confront someone &mdash; a friend in sin, a teammate cutting
                corners, a family member hurting people. Galatians 6:1 supplies a repeatable method. First,
                <strong style={{ color: TEXT }}> check the goal</strong>: the verb is &ldquo;restore,&rdquo; the
                bone-setter&rsquo;s word. If what you want is to win, vent, or establish that you were right, you
                are not ready. Wait and pray until you genuinely want the person whole.
              </p>
              <p style={pStyle}>
                Second, <strong style={{ color: TEXT }}>check yourself</strong>: &ldquo;keep watch on yourself, lest
                you too be tempted.&rdquo; Before the conversation, name to God one way you are capable of the same
                sin or its cousin. This single step changes your tone more than any technique. Third,
                <strong style={{ color: TEXT }}> go small and go private</strong> &mdash; the minimum audience, the
                minimum force needed to set the bone. Begin with questions rather than verdicts: &ldquo;Help me
                understand what happened&rdquo; opens; &ldquo;I know what you did&rdquo; closes.
              </p>
              <p style={pLast}>
                Fourth, separate the person from the sin out loud &mdash; say explicitly what you honor in them
                before and after naming what concerns you. Not as a manipulative sandwich, but because it is true
                and they need to know the relationship survives the conversation. Firmness about the issue,
                gentleness toward the person: that combination is rare enough that it often succeeds.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>4. De-escalation Habits for Conflict at Home</h3>
              <p style={pStyle}>
                Home is where gentleness goes to die &mdash; we give our worst tones to the people we love most,
                because they are safe and because they know exactly which buttons are wired to what. Counter this
                with habits installed in peacetime. <strong style={{ color: TEXT }}>The lowered voice rule:</strong>{" "}
                when you notice volume rising (yours or theirs), deliberately drop yours below conversational level.
                Escalation needs a partner; refuse the audition.
              </p>
              <p style={pStyle}>
                <strong style={{ color: TEXT }}>The twenty-minute pause:</strong> agree in advance &mdash; both
                parties, in calm waters &mdash; that either person may call a pause when flooding starts, with the
                non-negotiable promise to return within a set time. Walking away without a return time is
                abandonment; with one, it is wisdom. <strong style={{ color: TEXT }}>The touch and the name:</strong>{" "}
                physical gentleness (a hand on the shoulder, sitting instead of standing over) and using the
                person&rsquo;s name de-escalate the body before the argument resumes. Bodies argue before minds do.
              </p>
              <p style={pLast}>
                And install <strong style={{ color: TEXT }}>the repair ritual</strong>: a known, simple way back
                &mdash; for some families a phrase (&ldquo;Can we start over?&rdquo;), for others a re-do of the
                conversation from the first sentence. Ephesians 4:26 sets the deadline; the ritual is how you meet
                it. Children who watch parents fight gently and repair quickly are receiving a theology lesson no
                sermon can give.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>5. Online Gentleness: A Posting Standard</h3>
              <p style={pStyle}>
                The internet removes every natural restraint on harshness &mdash; the face of the other person, the
                social cost of cruelty, the time it takes to say something. So gentleness online must be rule-based,
                because in the scroll there is no time for deliberation. Adopt a written standard. A sample:
                <strong style={{ color: TEXT }}> (1) I will not say it online if I would not say it across a
                table.</strong> <strong style={{ color: TEXT }}>(2) I will not attribute motives, only address
                words and actions.</strong> <strong style={{ color: TEXT }}>(3) I will represent opponents in terms
                they would recognize before I disagree.</strong>
              </p>
              <p style={pStyle}>
                Continue: <strong style={{ color: TEXT }}>(4) I will never post angry &mdash; anger drafts, peace
                publishes.</strong> <strong style={{ color: TEXT }}>(5) I will not dunk &mdash; if the goal is the
                applause of my side rather than the persuasion of the other, I delete it.</strong>{" "}
                <strong style={{ color: TEXT }}>(6) One slot per day for disagreement</strong> &mdash; scarcity
                forces selectivity, and selectivity forces thought. Tape the list to your monitor or pin it in your
                notes app; an unwritten standard is a mood, not a standard.
              </p>
              <p style={pLast}>
                Remember whose name you carry. Colossians 4:6 &mdash; &ldquo;let your speech always be gracious,
                seasoned with salt&rdquo; &mdash; was written about conversations with outsiders, and your feed is
                full of them. Every reply is read by dozens of silent watchers forming their picture of Christians.
                You are always discipling someone with your posts; the only question is toward what.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>6. Gentleness with Yourself: Silencing the Inner Critic Without Lowering the Bar</h3>
              <p style={pStyle}>
                Many Christians who would never speak to an enemy the way they speak to themselves have baptized
                their inner brutality as &ldquo;conviction.&rdquo; But the Spirit&rsquo;s conviction and the
                accuser&rsquo;s condemnation are distinguishable: conviction is specific, points to the cross, and
                ends in hope; condemnation is global (&ldquo;you always, you never, you are&rdquo;), points to your
                worthlessness, and ends in despair. Learning to tell them apart is the first practice.
              </p>
              <p style={pStyle}>
                When you fail, run the Galatians 6:1 method <em>on yourself</em> &mdash; you are also a brother or
                sister caught in transgression, and the command to restore gently does not exempt the sinner you
                live inside. Name the sin specifically (no vaguer and no more sweeping than the facts), confess it
                fully (1 John 1:9), receive forgiveness audibly if necessary &mdash; say the words &ldquo;in Christ,
                that is forgiven&rdquo; out loud &mdash; and then set the bone: one concrete step of repair or
                prevention.
              </p>
              <p style={pLast}>
                Notice this lowers no bar. Self-flagellation is not a higher standard; it is a less effective one
                &mdash; shame produces hiding, not holiness, as it has since Eden. God&rsquo;s kindness is what
                leads to repentance (Romans 2:4), and that is as true in the second person as in the first. Be as
                serious about your sin as the cross demands, and as gentle with your soul as the man on it.
              </p>
            </div>
          </div>
        )}

        {/* ============ VOICES ============ */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 660 }}>
              Gentleness has a great cloud of witnesses. These six &mdash; a modern pastor-scholar, a
              seventeenth-century bishop, a Victorian preacher, a missionary, a television minister, and a revival
              theologian &mdash; show that gentle strength is neither a personality type nor a period piece.
            </p>

            <div style={cardStyle}>
              <h3 style={h3Style}>Dane Ortlund &mdash; Gentle and Lowly</h3>
              <p style={pStyle}>
                Ortlund&rsquo;s 2020 book did one thing relentlessly: it took the church back to Matthew 11:29 and
                refused to let go. His thesis is that Christ&rsquo;s gentleness is not a minor attribute but his
                self-revealed heart &mdash; &ldquo;the one place in the Bible where the Son of God pulls back the
                veil and lets us peer way down into the core of who he is, we are not told that he is austere and
                demanding in heart. We are told that he is gentle and lowly in heart.&rdquo;
              </p>
              <p style={pLast}>
                Drawing on Puritans like Thomas Goodwin and Richard Sibbes, Ortlund presses the point that our sin
                and suffering do not repel Christ but draw out his compassion &mdash; that he is, in
                Goodwin&rsquo;s image, like a father whose heart goes out most to his sick child. For the pursuit of
                gentleness this is foundational: Christians become gentle not by self-improvement but by prolonged
                exposure to the gentleness of Christ toward them. You grow the fruit by sitting in that sun.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Francis de Sales &mdash; Introduction to the Devout Life</h3>
              <p style={pStyle}>
                The bishop of Geneva (1567&ndash;1622) was famous across Europe for a gentleness so consistent it
                became his signature &mdash; remarkable, given he spent his ministry in the polemical cauldron of
                the Reformation era and was by his own admission naturally hot-tempered. He claimed it took him
                more than twenty years of deliberate practice to master his anger. His maxim has outlived him:
                a spoonful of honey attracts more flies than a barrelful of vinegar.
              </p>
              <p style={pLast}>
                In the <em>Introduction to the Devout Life</em>, he gives gentleness its sharpest inward turn:
                &ldquo;Be gentle and patient with everyone, but above all with yourself... do not fret over your
                imperfections, but always rise up bravely from a fall.&rdquo; He saw that harsh self-correction is
                counterproductive vanity &mdash; we are angry at being imperfect because we expected better of
                ourselves than honesty warrants. His counsel: correct yourself the way you would correct someone
                you love, &ldquo;quietly and calmly,&rdquo; for &ldquo;there is nothing so strong as gentleness,
                nothing so gentle as real strength.&rdquo;
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Charles Spurgeon &mdash; On the Gentleness of Jesus</h3>
              <p style={pStyle}>
                Spurgeon, the &ldquo;Prince of Preachers,&rdquo; was no soft rhetorician &mdash; he could thunder
                with the best of the Victorians. Which makes his lifelong fascination with the gentleness of Christ
                the more striking. Preaching on Matthew 11, he marveled that Christ&rsquo;s gentleness is precisely
                what makes him approachable to sinners: the bruised reed and smoldering flax passage appears again
                and again in his sermons as the timid believer&rsquo;s charter. The weakest faith, he insisted, has
                a gentle Savior who will not snuff it out.
              </p>
              <p style={pLast}>
                Spurgeon also turned the virtue on his students. In his lectures to young preachers he warned that
                a hard, scolding ministry wins no one: men are not bullied into the kingdom, and the pastor who has
                forgotten his own rescue will handle other strugglers roughly. His counsel echoed his Master &mdash;
                truth at full strength, delivered with a surgeon&rsquo;s tenderness. He could say hard things
                precisely because his hearers never doubted he loved them.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Amy Carmichael &mdash; Gentle Strength on the Mission Field</h3>
              <p style={pStyle}>
                Carmichael (1867&ndash;1951) demolishes any notion that gentleness is fragility. An Irish
                missionary to India for fifty-five years without furlough, she founded the Dohnavur Fellowship and
                physically rescued hundreds of children from temple prostitution &mdash; work that required facing
                down traffickers, courts, and threats to her life. She was, by every account, immovable. And the
                children called her <em>Amma</em> &mdash; mother &mdash; because the same will of iron was, toward
                them, unfailingly tender.
              </p>
              <p style={pLast}>
                Her writings hold the two together without strain. In <em>If</em>, she wrote: &ldquo;If I can hurt
                another by speaking faithfully without much preparation of spirit, and without hurting myself far
                more than I hurt that other, then I know nothing of Calvary love.&rdquo; For Carmichael, gentleness
                was a crucifixion of the desire to wound, sustained for decades, in pain (she spent her last twenty
                years largely bedridden) &mdash; proof that the fruit of the Spirit flourishes in the hardest
                climates.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Fred Rogers &mdash; A Ministry of Gentleness</h3>
              <p style={pStyle}>
                Fred Rogers was an ordained Presbyterian minister, and the Presbytery&rsquo;s charge to him was
                unusual: his ministry was television. <em>Mister Rogers&rsquo; Neighborhood</em> never mentioned
                Jesus, but it was a thirty-year exercise in treating every child &mdash; and the frightened,
                grieving, or angry feelings inside them &mdash; with the dignity Rogers believed they had as
                creatures loved by God. &ldquo;I don&rsquo;t think anyone can grow unless he&rsquo;s loved exactly
                as he is,&rdquo; he said &mdash; a sentence that could sit unedited inside <em>Gentle and Lowly</em>.
              </p>
              <p style={pLast}>
                What looked like mildness was discipline. Rogers swam daily, kept his weight at 143 pounds for
                decades, prayed for people by name every morning, and fought broadcasters and a U.S. Senate
                subcommittee for the kind of children&rsquo;s television he believed in &mdash; winning over the
                famously gruff Senator Pastore in six minutes, with gentleness. He is a modern parable of
                Proverbs 15:1 at institutional scale: the soft answer, it turns out, can also turn away budget
                cuts.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Jonathan Edwards &mdash; The Lamb-like, Dove-like Spirit</h3>
              <p style={pStyle}>
                It surprises people that America&rsquo;s most famous hellfire sermon came from a theologian who made
                gentleness a primary test of true conversion. In <em>Religious Affections</em> (1746), sifting
                genuine revival from counterfeit, Edwards lists as a distinguishing sign of saving grace a
                &ldquo;lamb-like, dove-like spirit and temper&rdquo; &mdash; the spirit of Jesus Christ &mdash;
                producing &ldquo;love, meekness, quietness, forgiveness and mercy.&rdquo; Loud zeal, dramatic
                experiences, and doctrinal fervor proved nothing, he argued; the surest evidence of the
                Spirit&rsquo;s indwelling was Christlike temper sustained over time.
              </p>
              <p style={pLast}>
                Edwards had watched revival produce both saints and cranks, and he noticed the difference: false
                affections made people censorious, harsh, and proud of their harshness; true grace made them
                tender. His test still cuts. A theology that leaves you meaner is failing its own exam, whatever
                its precision &mdash; for &ldquo;the fruit of the Spirit is... gentleness,&rdquo; and trees are
                known by what they grow.
              </p>
            </div>
          </div>
        )}

        {/* ============ SCRIPTURE ============ */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 660 }}>
              Six anchor texts for the fruit of gentleness. Read them slowly; better, memorize them &mdash; the
              soft answer at 9 p.m. is usually a verse planted long before.
            </p>

            <div style={cardStyle}>
              <h3 style={h3Style}>Galatians 5:22&ndash;23</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness,
                gentleness, self-control; against such things there is no law.&rdquo;
              </p>
              <p style={pLast}>
                Gentleness is listed eighth, beside self-control &mdash; its closest kin, since <em>prautes</em> is
                precisely power under control. Note that this is fruit, not works: it grows from life in the Spirit
                rather than being manufactured by effort. And note the quiet irony of the last clause &mdash; no
                legislature has ever needed to outlaw excessive gentleness. It is the one kind of strength that
                cannot be abused.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Matthew 11:28&ndash;30</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon
                you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls.
                For my yoke is easy, and my burden is light.&rdquo;
              </p>
              <p style={pLast}>
                The charter text. The only place Jesus describes his own heart, and the word he chooses is
                <em> praus</em> &mdash; gentle. The invitation is to the weary, the qualification is need, and the
                promise is rest. Every Christian pursuit of gentleness starts here: not at the command to be gentle
                but at the discovery that we are gently held.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Proverbs 15:1</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;A soft answer turns away wrath, but a harsh word stirs up anger.&rdquo;
              </p>
              <p style={pLast}>
                The most practical sentence in the Bible on conflict. Anger is fuel-dependent; the soft answer
                starves it, the harsh word feeds it. Notice that the verse governs manner, not substance &mdash;
                the answer is soft, not absent, not dishonest. This single proverb, obeyed, would end most of the
                arguments you will have this year before they begin.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Philippians 4:5</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;Let your gentleness be evident to all. The Lord is near.&rdquo;
              </p>
              <p style={pLast}>
                Two commands hiding in one verse. First, gentleness is to be <em>evident</em> &mdash; public,
                observable, your reputation &mdash; and to <em>all</em>, including the people who do not earn it.
                Second, the ground given is not pragmatic but eschatological: &ldquo;the Lord is near.&rdquo; You
                can release the need to vindicate yourself and dominate every exchange because the Judge is at the
                door. The nearness of Christ is what makes unclenched living rational.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>1 Peter 3:15&ndash;16</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;But in your hearts honor Christ the Lord as holy, always being prepared to make a defense to
                anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect,
                having a good conscience, so that, when you are slandered, those who revile your good behavior in
                Christ may be put to shame.&rdquo;
              </p>
              <p style={pLast}>
                The apologist&rsquo;s rule of engagement. Preparation and gentleness are joined &mdash; neither
                excuses the lack of the other. The defense of the faith is to be made in the manner of the faith,
                because a gospel of grace argued gracelessly contradicts itself. Peter&rsquo;s confidence is
                striking: gentle, respectful witness under slander is itself a force that shames hostility over
                time.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={h3Style}>Isaiah 40:11</h3>
              <p style={{ ...pStyle, color: TEXT, fontStyle: "italic" }}>
                &ldquo;He tends his flock like a shepherd: He gathers the lambs in his arms and carries them close
                to his heart; he gently leads those that have young.&rdquo;
              </p>
              <p style={pLast}>
                This verse sits inside the Bible&rsquo;s grandest chapter on God&rsquo;s power &mdash; the One who
                measures the waters in the hollow of his hand and weighs mountains on scales. Verse 11 is the
                punchline: all that omnipotence stoops to carry lambs and match its pace to nursing ewes. Gentleness
                is not a limit on God&rsquo;s strength; it is what his strength looks like when it bends toward the
                weak. Ours should look the same.
              </p>
            </div>
          </div>
        )}

        {/* ============ JOURNAL ============ */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ ...pStyle, maxWidth: 660 }}>
              Gentleness grows by noticing. Use this journal to trace specific moments: a situation that called for
              gentleness, the harsh instinct that rose first, and the gentle way you chose &mdash; or wish you had
              chosen, for next time. Entries are stored privately in your browser.
            </p>

            <div style={cardStyle}>
              <h3 style={h3Style}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="gnt-situation" style={labelStyle}>The situation</label>
                <textarea
                  id="gnt-situation"
                  value={situation}
                  onChange={e => setSituation(e.target.value)}
                  placeholder="A moment that called for gentleness — a criticism received, a child melting down, a hostile comment, a coworker's mistake..."
                  rows={3}
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="gnt-instinct" style={labelStyle}>The harsh instinct</label>
                <textarea
                  id="gnt-instinct"
                  value={instinct}
                  onChange={e => setInstinct(e.target.value)}
                  placeholder="What rose up first — the cutting reply, the cold withdrawal, the urge to win, the inner verdict on the other person..."
                  rows={3}
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="gnt-gentleway" style={labelStyle}>The gentle way</label>
                <textarea
                  id="gnt-gentleway"
                  value={gentleWay}
                  onChange={e => setGentleWay(e.target.value)}
                  placeholder="The soft answer chosen (or the one you'll choose next time) — same truth, lower temperature, aimed at restoration..."
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
                  No entries yet. The next time a harsh word almost wins &mdash; or does &mdash; come back and
                  write it down. Noticing is the first mercy.
                </p>
              </div>
            )}

            {loaded && entries.map((entry, index) => (
              <div key={index} style={cardStyle}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ flex: 1 }}>
                    {entry.situation && (
                      <div style={{ marginBottom: "0.85rem" }}>
                        <div style={{ color: "#6fbf91", fontSize: "0.75rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Situation
                        </div>
                        <p style={{ ...pLast, color: TEXT }}>{entry.situation}</p>
                      </div>
                    )}
                    {entry.instinct && (
                      <div style={{ marginBottom: "0.85rem" }}>
                        <div style={{ color: "#6fbf91", fontSize: "0.75rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Harsh Instinct
                        </div>
                        <p style={pLast}>{entry.instinct}</p>
                      </div>
                    )}
                    {entry.gentleWay && (
                      <div>
                        <div style={{ color: "#6fbf91", fontSize: "0.75rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Gentle Way
                        </div>
                        <p style={pLast}>{entry.gentleWay}</p>
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
              Teaching on the gentleness of Christ, the meaning of biblical meekness, and the practice of the soft
              answer in a loud age.
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
            &ldquo;Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find
            rest for your souls.&rdquo;
          </p>
          <p style={{ ...pLast, fontSize: "0.85rem" }}>
            &mdash; Matthew 11:29. Keep walking: explore{" "}
            <Link href="/christian-peace" style={{ color: "#6fbf91", textDecoration: "underline" }}>peace</Link>,{" "}
            <Link href="/christian-self-control" style={{ color: "#6fbf91", textDecoration: "underline" }}>self-control</Link>, and the{" "}
            <Link href="/sermon-on-the-mount" style={{ color: "#6fbf91", textDecoration: "underline" }}>Sermon on the Mount</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
