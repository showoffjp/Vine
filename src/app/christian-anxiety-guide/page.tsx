"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const BLUE = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "What Is Anxiety",
  "What the Bible Says",
  "Prayer and Anxiety",
  "Trusting God in Uncertainty",
  "When to Get Help",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface TabSection {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const tabSections: TabSection[] = [
  {
    id: "What Is Anxiety",
    heading: "What Is Anxiety?",
    paragraphs: [
      "Anxiety is one of the most universal human experiences, and also one of the most misunderstood inside the church. At its best, anxiety is a gift &mdash; the brain&rsquo;s alarm system alerting us to genuine danger, sharpening focus, and mobilizing resources to respond to a threat. A soldier in combat, a parent watching a child near a cliff, a student about to present a thesis &mdash; all experience anxiety as a functional, even useful, emotion. The amygdala fires, cortisol rises, the body enters fight-or-flight readiness. This is not malfunction; it is the system working as designed.",
      "Disordered anxiety is what happens when the alarm system malfunctions &mdash; when it fires in the absence of genuine threat, or in proportion far exceeding the actual danger, or when it cannot be turned off once the threat has passed. Generalized anxiety disorder, panic disorder, OCD, social anxiety, and PTSD are all variations on a theme: the brain&rsquo;s threat-detection system is chronically dysregulated, producing suffering that is real, impairing, and not simply a failure of willpower or faith.",
      "The biblical vocabulary for anxiety is illuminating. The Greek word Jesus uses in Matthew 6 is <em>merimna&#333;</em> &mdash; from <em>meriz&#333;</em> (to divide) and <em>nous</em> (mind). Literally: a divided mind, pulled in two directions at once. Anxiety is the experience of being simultaneously drawn toward the feared outcome and away from it &mdash; unable to settle, unable to resolve, unable to rest. This is why anxious minds race: they are running from one pole to the other without finding a stable center.",
      "The danger of the anxiety conversation in Christian circles is reducing anxiety to either of two inadequate accounts. The first says: anxiety is essentially a spiritual problem &mdash; just trust God, and the anxiety will go away. The second says: anxiety is essentially a brain chemistry problem &mdash; it&rsquo;s just biology, treat it medically and move on. Both accounts are partially true and, taken alone, harmfully reductive. Human beings are embodied souls, and anxiety is a whole-person experience &mdash; physiological, psychological, spiritual, and relational simultaneously. The Christian account of anxiety must hold all of these together.",
      "Anxiety as a spiritual and physical experience means that the practices that address it are also whole-person practices: prayer and lament address the soul; therapy and medication address the brain and nervous system; community and embodied worship address the relational and somatic dimensions. The gospel does not offer a technique for anxiety management; it offers a Person &mdash; a God who invites the anxious to cast all of it onto him, because he cares.",
    ],
  },
  {
    id: "What the Bible Says",
    heading: "What the Bible Says About Anxiety",
    paragraphs: [
      "Matthew 6:25-34 is Jesus&rsquo; most sustained teaching on anxiety, delivered in the Sermon on the Mount. &ldquo;Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on.&rdquo; The immediate context matters: Jesus has just been teaching about money and divided loyalty. Anxiety about provision, he argues, is structurally related to the wrong first loyalty &mdash; treating material security as ultimate. His argument from the birds of the air and the lilies of the field is not sentimental but theological: if the Father&rsquo;s providential care extends to sparrows and wildflowers, the argument for his care of his own children is overwhelming. The prescription is equally concrete: &ldquo;Seek first the kingdom of God and his righteousness, and all these things will be added to you&rdquo; (v.33). Worry is not overcome by not worrying; it is displaced by a different first priority.",
      "Philippians 4:4-7 is perhaps the most pastorally dense New Testament treatment of anxiety. &ldquo;Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.&rdquo; Several things are striking. First, Paul writes from prison &mdash; the peace on offer is not the peace of resolved circumstances. Second, the antidote to anxiety is not an act of suppressive will but a specific practice: prayer, with supplication, with thanksgiving. Third, the resulting peace &ldquo;surpasses all understanding&rdquo; &mdash; it cannot be produced by thinking your way to a better cognitive position. It is given, by a God who receives what is cast. And it &ldquo;guards&rdquo; the heart and mind &mdash; the Greek word is military: a sentinel standing watch over what is entrusted to him.",
      "1 Peter 5:7 is the most concentrated invitation in Scripture: &ldquo;Cast all your anxiety on him, because he cares for you.&rdquo; The Greek verb &ldquo;cast&rdquo; is <em>epiript&#333;</em> &mdash; a strong, deliberate throw, the same word used when the disciples threw their cloaks on the colt before Jesus&rsquo; entry into Jerusalem. This is not gradual release or gentle setting down; it is a decisive act of transfer. And the ground of the invitation is not God&rsquo;s power or sovereignty but his personal care &mdash; he is interested in what is troubling you.",
      "Psalm 55:22 anticipates Peter&rsquo;s language: &ldquo;Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved.&rdquo; Isaiah 41:10 is perhaps the Old Testament&rsquo;s most direct anti-anxiety statement: &ldquo;Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.&rdquo; Five verbs of divine action; the ground for &ldquo;fear not&rdquo; is not the absence of threat but the presence and character of God.",
      "John 14:27 is spoken on the night before Jesus&rsquo; crucifixion, to disciples whose anxiety is acute: &ldquo;Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.&rdquo; The peace on offer is not the world&rsquo;s peace &mdash; the peace of resolved circumstances. It is a peace available inside the threat, because its source is his presence rather than the removal of what is threatening.",
      "How do we read these texts pastorally without weaponizing them against anxious people? The key is to understand that the biblical commands &ldquo;do not be anxious&rdquo; and &ldquo;cast your anxiety&rdquo; are not pronouncements of guilt over people who feel anxious. They are invitations to a practice &mdash; specific, actionable, repeatable. Jesus himself was &ldquo;greatly distressed and troubled&rdquo; in Gethsemane (Mark 14:33). The sinless Son of God experienced acute anxiety. This demolishes any reading that makes anxiety itself a spiritual failure. What the texts address is not the feeling of anxiety but what we do with it: whether we bring it to God or nurse it into faithlessness.",
    ],
  },
  {
    id: "Prayer and Anxiety",
    heading: "Prayer and Anxiety",
    paragraphs: [
      "Philippians 4:6 gives anxiety a specific destination: &ldquo;in everything by prayer and supplication with thanksgiving let your requests be made known to God.&rdquo; Three elements: prayer (the general posture of speaking to God), supplication (the specific, earnest petition for what you need), and thanksgiving (gratitude that reorients the petitioner toward what has already been given). These are not sequential steps but simultaneous practices &mdash; an integrated approach to bringing the whole self, including the anxious self, before God.",
      "The psychological research on prayer and anxiety reduction is substantial. Studies consistently show that intercessory prayer, personal devotional prayer, and prayer with others correlate with reduced anxiety, lower cortisol levels, and improved psychological resilience. The mechanism is not fully understood, but researchers have proposed several pathways: prayer activates the parasympathetic nervous system (the rest-and-digest response); it reduces rumination by giving the anxious thoughts a destination; it strengthens the sense of social support and being cared for; and it cultivates what psychologists call &ldquo;cognitive defusion&rdquo; &mdash; the capacity to hold anxious thoughts as thoughts rather than as reality.",
      "The practice of praying specific fears rather than vague worry is crucial. Anxiety thrives in vagueness: &ldquo;I am worried about everything.&rdquo; Named anxiety can be addressed; unnamed anxiety expands to fill the available space. The practice: stop, identify the specific fear, name it to God in prayer. &ldquo;Lord, I am afraid that [specific outcome] will happen. I am casting this specific thing onto you.&rdquo; This is not a magic formula; it is the practice of bringing a real thing to a real Person.",
      "Lament prayer is the biblical practice of naming the anxiety to God honestly &mdash; not performing peace you do not have, not suppressing what is true, but speaking the complaint directly to God. The Psalms of lament (Ps 22, 42, 55, 77, 88) model this: address, complaint, petition, trust. The movement from complaint to trust is not produced by suppressing the complaint but by anchoring it in the memory of God&rsquo;s faithfulness. Lament is anxiety turned outward and upward; it is the practice of refusing to suffer in silence before a God who has invited the full weight of our experience.",
      "The prayer of examen, developed by Ignatius of Loyola, is a structured daily practice of reviewing the day for consolation (moments of life, joy, closeness to God) and desolation (moments of anxiety, distance, loss of peace). It trains the practitioner to notice anxiety before it becomes chronic, to bring it to God in real time rather than after it has compounded, and to locate movements of the Spirit even within anxious seasons. For the chronically anxious person, the examen is a daily calibration &mdash; a way of staying present to both the anxiety and the God who is present within it.",
      "Breath prayer and centering prayer are among the oldest Christian practices, and also some of the most physiologically sound. Slow, deep breathing activates the parasympathetic nervous system &mdash; the body&rsquo;s counterpart to fight-or-flight. Pairing this with a short prayer phrase (&ldquo;Lord&rdquo; on the inhale, &ldquo;have mercy&rdquo; on the exhale; &ldquo;You are with me&rdquo; on the inhale, &ldquo;I will not fear&rdquo; on the exhale) anchors the physiological regulation in theological truth. Centering prayer extends this into longer periods of resting in God&rsquo;s presence, consenting to his action rather than producing it.",
      "Why is prayer not simply a technique for anxiety reduction? Because technique treats God as a mechanism and the practitioner as the agent. Prayer is a relationship: the anxious person brings what she cannot carry to a Person who has invited her to bring it, and the peace that results is given rather than produced. The difference matters: technique fails when circumstances do not improve; relationship holds even when they do not. The peace Paul describes in Philippians 4 &ldquo;surpasses all understanding&rdquo; precisely because it cannot be manufactured by any technique &mdash; it is the fruit of a relationship with the God who holds the future.",
    ],
  },
  {
    id: "Trusting God in Uncertainty",
    heading: "Trusting God in Uncertainty",
    paragraphs: [
      "The Hebrew word <em>bitachon</em> &mdash; usually translated &ldquo;trust&rdquo; or &ldquo;confidence&rdquo; &mdash; is one of the richest concepts in the Old Testament for understanding what anxiety and faith are actually in conflict over. <em>Bitachon</em> is not passive resignation or intellectual assent to a proposition; it is active reliance &mdash; the posture of leaning one&rsquo;s full weight onto something, the way a rope bridge is trusted only when you actually step onto it. The anxious person knows, intellectually, that God is trustworthy. <em>Bitachon</em> is the practice of actually entrusting what is most precious and most uncertain to him, moment by moment, in real life.",
      "The difference between certainty and trust is crucial. Certainty demands resolved outcomes before it can rest. Trust rests amid unresolved outcomes because of the character of the One to whom the outcomes are entrusted. The anxious person often wants certainty &mdash; she wants to know in advance that the feared outcome will not happen. God rarely provides this. What he provides instead is presence, promise, and the invitation to lean on him inside the uncertainty. This is not a lesser gift; it is the actual gift on offer.",
      "The apophatic tradition in Christian mysticism &mdash; sometimes called &ldquo;the cloud of unknowing&rdquo; after the 14th-century anonymous English mystic &mdash; offers a counterintuitive resource for anxiety: learning to rest in what we cannot know rather than grasping for what we cannot have. The apophatic way does not resolve uncertainty; it transforms the practitioner&rsquo;s relationship to it. Rather than treating the unknown as threat, the contemplative tradition invites resting in the God who is beyond our categories &mdash; the &ldquo;divine darkness&rdquo; that is not absence but presence beyond comprehension.",
      "Walter Brueggemann&rsquo;s analysis of the Psalms identifies what he calls &ldquo;psalms of disorientation&rdquo; &mdash; the lament psalms that do not resolve, that end in darkness or complaint, that refuse to produce a tidy arc of trust. Psalm 88 ends with the word &ldquo;darkness.&rdquo; These psalms are in Scripture, Brueggemann argues, because the community of faith needed honest speech for seasons when things did not resolve, when trust was maintained not by feeling certain but by continuing to speak to God even in the dark. They teach us how to hold unanswered questions with faith &mdash; not by answering them but by refusing to let them sever the relationship.",
      "The stories of biblical figures who trusted God amid deep uncertainty are instructive precisely because the uncertainty was real. Abraham left Ur without knowing where he was going (Hebrews 11:8) &mdash; the destination was not disclosed in advance. Esther&rsquo;s decision to approach the king was made without knowing whether she would survive it: &ldquo;If I perish, I perish&rdquo; (Esther 4:16) &mdash; trust expressed not as certainty of outcome but as commitment to the right action regardless of outcome. And Gethsemane is the defining moment of trust in the face of known, not unknown, suffering: &ldquo;Not my will, but yours, be done&rdquo; (Luke 22:42). Jesus did not receive certainty that the suffering would be bearable; he received the presence of his Father and the will to proceed.",
      "The discipline of releasing control is not a technique for emotional management but a repeated, practiced act of faith. The anxious person is typically trying to control outcomes she was never designed to control. The theological corrective is not willpower but encounter: a God large enough to bear the weight of the uncertain futures we are trying to manage. The practice: identify what you are trying to control, acknowledge that you cannot, and deliberately, prayerfully, hand it back to the One who actually holds it. Not once, but repeatedly, because control-seeking is a practiced habit and trust is a practiced alternative.",
    ],
  },
  {
    id: "When to Get Help",
    heading: "When to Get Help",
    paragraphs: [
      "The church has a troubled history with mental health, and nowhere more so than in its failure to distinguish spiritual counsel from clinical care. For much of Christian history, and in many contemporary church cultures, anxiety and depression have been treated primarily as spiritual deficits &mdash; problems of insufficient faith, unconfessed sin, or inadequate prayer. This framework has caused serious harm: people in genuine clinical need have been redirected toward spiritual interventions that, however valuable in their proper place, were not equipped to address a neurological or psychological disorder.",
      "Anxiety disorders are real, diagnosable, treatable conditions. Generalized anxiety disorder (GAD) involves chronic, excessive worry across multiple life domains that is difficult to control and impairs functioning. Panic disorder involves recurrent, unexpected panic attacks &mdash; sudden surges of intense fear with physical symptoms (racing heart, shortness of breath, dizziness, sense of impending doom). OCD involves intrusive, unwanted thoughts and compulsive behaviors aimed at managing them &mdash; including scrupulosity (religious OCD), in which the content of intrusive thoughts is theological. PTSD involves the persistence of trauma responses &mdash; intrusive memories, hypervigilance, avoidance &mdash; after exposure to overwhelming events. Social anxiety involves intense fear of social situations and scrutiny. These conditions require professional treatment.",
      "How do you know when anxiety requires professional treatment rather than (or alongside) spiritual practice? Several indicators suggest professional help is needed: when anxiety is chronic and daily rather than situational; when it significantly impairs work, relationships, or daily functioning; when panic attacks are occurring; when intrusive thoughts are disturbing and difficult to dismiss; when anxiety has persisted despite faithful spiritual practice; when it is accompanied by depression, substance use, or suicidal ideation. These are not signs of spiritual failure; they are signs that the nervous system needs care that spiritual practice alone cannot provide.",
      "The American Association of Christian Counselors (AACC) is the largest organization of Christian mental health professionals in the world, and a good starting point for finding a therapist who integrates faith and clinical care. The CCEF (Christian Counseling and Educational Foundation) offers a biblical counseling framework that takes both Scripture and clinical research seriously. Psychology Today&rsquo;s therapist finder allows filtering by faith orientation. When seeking a therapist, it is appropriate to ask directly about their faith background, whether they are comfortable integrating spirituality into treatment, and their experience with anxiety disorders specifically.",
      "The relationship between pastoral care and therapy is complementary, not competitive. A pastor or spiritual director provides the church community, theological reflection, prayer, sacraments, and ongoing relational presence that no therapist can replicate. A therapist trained in CBT (Cognitive Behavioral Therapy), ACT (Acceptance and Commitment Therapy), or EMDR (for trauma-related anxiety) provides evidence-based clinical interventions that pastoral care cannot replicate. The two belong together, not in competition.",
      "Medication and the Christian: is taking antidepressants or anxiolytics a lack of faith? The question itself reflects a dualism that the biblical doctrine of creation does not support. The body is God&rsquo;s creation; the brain is part of the body; medication that helps the brain function more normally is not a spiritual compromise any more than eyeglasses are. Jesus healed the sick; he did not rebuke them for needing healing, nor did he demand they first exhaust spiritual remedies. The theology of healing encompasses all legitimate means &mdash; prayer, community, therapy, medication &mdash; because God works through embodied, material means as well as through direct supernatural action. Many Christians find that medication reduces anxiety to a level where spiritual practices and therapy can actually take hold &mdash; it creates the conditions in which the work of transformation can occur.",
    ],
  },
];

const videoItems = [
  {
    videoId: "MIc7lEhCTMw",
    title: "Tim Keller on Anxiety and the Gospel",
  },
  {
    videoId: "kVy8ZAi4GfA",
    title: "John Piper on Anxious Thoughts",
  },
  {
    videoId: "8QrLbXJQzuI",
    title: "Anxiety and Christian Faith",
  },
];

export default function ChristianAnxietyGuidePage() {
  const [tab, setTab] = useState<Tab>("What Is Anxiety");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? BLUE : BORDER}`,
    background: active ? "rgba(59, 130, 246, 0.12)" : "transparent",
    color: active ? BLUE : MUTED,
    cursor: "pointer",
    fontSize: "0.88rem",
    fontWeight: active ? 600 : 400,
    transition: "all 0.15s ease",
    whiteSpace: "nowrap" as const,
  });

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
  };

  const currentSection = tabSections.find((s) => s.id === tab);

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              fontSize: "0.78rem",
              color: BLUE,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "0.6rem",
            }}
          >
            Faith &amp; Mental Health
          </div>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Christian Guide to Anxiety
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            What the Bible says about worry, the theology of anxiety versus clinical anxiety
            disorder, the role of prayer in reducing anxiety, lament as a spiritual practice,
            trusting God in uncertainty, and when to seek professional help.
          </p>
          <div
            style={{
              marginTop: "1.75rem",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${BLUE}`,
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
            }}
          >
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
              &ldquo;Cast all your anxiety on him, because he cares for you.&rdquo;
            </p>
            <p style={{ color: BLUE, fontSize: "0.85rem", fontWeight: 600 }}>1 Peter 5:7</p>
          </div>
        </header>

        {/* Tabs */}
        <nav
          aria-label="Page sections"
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: "2.25rem",
          }}
        >
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={tabButtonStyle(tab === t)}>
              {t}
            </button>
          ))}
        </nav>

        {/* Tab content: text sections */}
        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>
              {currentSection.heading}
            </h2>
            {currentSection.paragraphs.map((para, i) => (
              <p
                key={i}
                style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </section>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>
              Videos on Anxiety and Faith
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Teaching on anxiety, worry, and the peace that surpasses understanding &mdash; from
              Tim Keller, John Piper, and others who have engaged these questions with theological
              depth and pastoral warmth.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 20,
              }}
            >
              {videoItems.map((video) => (
                <div
                  key={video.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={video.videoId} title={video.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}>
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing callout */}
        <div
          style={{
            marginTop: "3rem",
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderLeft: `3px solid ${BLUE}`,
            borderRadius: 12,
            padding: "1.5rem",
          }}
        >
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
            You are not alone in this
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
            The Scripture speaks to anxiety with startling directness and pastoral warmth &mdash;
            not because anxiety is simple, but because the God who made us knows what it is to be
            human. The invitation stands: cast all of it onto him, because he cares. Explore the
            other tabs for what the Bible says, how prayer helps, how to trust in uncertainty, and
            when to seek professional support.
          </p>
        </div>
      </main>
    </div>
  );
}
