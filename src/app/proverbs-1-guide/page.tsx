"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Fear of the Lord",
  "Lady Wisdom's Call",
  "Warning Against Folly",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Proverbs 1 &mdash; An Overview",
    reference: "Proverbs 1:1&ndash;33",
    paragraphs: [
      "Proverbs 1 is one of the most carefully constructed opening chapters in all of Scripture. It does not merely gather a few wise sayings and set them side by side; it lays the entire intellectual and spiritual foundation on which the whole book stands. Before a single proverb is uttered, the author tells us what wisdom is for, where it begins, and what happens to those who refuse it. Everything that follows in the book of Proverbs flows from the seeds planted in this chapter.",
      "The chapter is divided into three distinct movements. First comes the prologue (vv. 1&ndash;7), which declares the purpose of the entire book and plants the book&rsquo;s famous thesis: &ldquo;The fear of the LORD is the beginning of wisdom&rdquo; (v. 7). Second comes the father&rsquo;s first address to his son (vv. 8&ndash;19), a passionate warning against the seductive appeal of violent men who promise easy wealth and belonging, but whose feet run to evil and whose path ends in self-destruction. Third comes the extended speech of Lady Wisdom herself (vv. 20&ndash;33), a personified Wisdom who stands in the most public places of the city and cries out, pleading with the simple, the mockers, and the fools to turn at her reproof &mdash; and warning them that those who refuse her now will cry out to her in their calamity and find that she will not answer.",
      "Proverbs belongs to the wisdom literature tradition of the ancient Near East, but it is emphatically not merely a collection of practical tips for successful living. The book&rsquo;s wisdom is rooted in theology. The reason &ldquo;the fear of the LORD&rdquo; is wisdom&rsquo;s beginning is that wisdom, rightly understood, is not a set of techniques but a way of seeing &mdash; seeing all of life in right relationship to its Creator. A life lived in the fear of God is a life oriented to reality as it actually is. A life that dismisses God is a life built on a fundamental delusion, no matter how sophisticated it may appear.",
      "The literary artistry of Proverbs 1 is remarkable. The chapter employs both prose (the prologue and the father&rsquo;s address) and poetry (Lady Wisdom&rsquo;s speech). The two human voices &mdash; the father and Lady Wisdom &mdash; speak in parallel: both call out, both urge a hearing, both describe the consequences of refusing their words. The parallelism is not accidental. It signals that the father&rsquo;s instruction is not merely parental advice; it is an echo of Wisdom&rsquo;s own voice, and ultimately an echo of the voice of God. Those who receive the father&rsquo;s instruction receive Wisdom; those who receive Wisdom receive life.",
      "For the Christian reader, Proverbs 1 resonates at a deep level with the New Testament&rsquo;s identification of Christ as the wisdom of God (1 Corinthians 1:24, 30; Colossians 2:3). The Lady Wisdom of Proverbs, who cries out in the streets and who was &ldquo;rejoicing before him always, rejoicing in his inhabited world&rdquo; (Proverbs 8:30&ndash;31), is not simply a literary device. She points forward to the One in whom &ldquo;are hidden all the treasures of wisdom and knowledge.&rdquo; The invitation of Wisdom is ultimately the invitation of Christ. The refusal of Wisdom is the refusal of Christ. And the consequences described in Proverbs 1 &mdash; calamity that comes suddenly, like a whirlwind, when no one answers &mdash; are warnings about the ultimate seriousness of rejecting the One who is Wisdom incarnate.",
    ],
  },
  {
    id: "Fear of the Lord",
    heading: "The Fear of the LORD &mdash; Wisdom&rsquo;s Foundation",
    reference: "Proverbs 1:1&ndash;7",
    paragraphs: [
      "Proverbs 1:1 identifies the book as &ldquo;The proverbs of Solomon, son of David, king of Israel.&rdquo; The attribution to Solomon is significant: Solomon was the man to whom God appeared in a dream and offered him anything he desired. When Solomon asked not for riches or long life or the death of his enemies, but for &ldquo;an understanding mind to govern your people, that I may discern between good and evil,&rdquo; God was pleased and granted him a &ldquo;wise and discerning mind, so that none like you has been before you and none like you shall arise after you&rdquo; (1 Kings 3:9, 12). Solomon&rsquo;s wisdom was not simply native intelligence; it was a gift from God, given in response to a heart that sought the right things. Proverbs stands in the tradition of that divinely gifted wisdom.",
      "Verses 2&ndash;6 announce the purpose of the book in a richly layered series of infinitives: &ldquo;to know wisdom and instruction, to understand words of insight, to receive instruction in wise dealing, in righteousness, justice, and equity; to give prudence to the simple, knowledge and discretion to the youth &mdash; let the wise hear and increase in learning, and the one who understands obtain guidance, to understand a proverb and a saying, the words of the wise and their riddles.&rdquo; This is not a book for the already-wise who need no further instruction. It is a book for everyone &mdash; the simple who need prudence, the young who need knowledge, and the wise who need to keep growing. The invitation is universal.",
      "The key word in verse 2 is &ldquo;instruction,&rdquo; the Hebrew word <em>musar</em>. This word carries a weight that the English translation does not always convey. <em>Musar</em> means not only teaching but also discipline &mdash; the kind of training that shapes character, sometimes through correction, sometimes through painful experience. The book of Proverbs is not inviting the reader to a comfortable classroom experience. It is inviting the reader into a lifelong process of formation that may be costly, but that produces in the end a character conformed to what is true, good, and right.",
      "Then comes the great thesis of the entire book, and arguably one of the most important sentences in all of Scripture: &ldquo;The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding&rdquo; (v. 7). The word translated &ldquo;beginning&rdquo; can mean both &ldquo;the starting point&rdquo; and &ldquo;the chief part&rdquo; or &ldquo;the essence.&rdquo; Fear of the LORD is not the first step on the way to wisdom, after which God can be left behind as the learner advances into more sophisticated territory. Fear of the LORD is the essence of wisdom. It is what wisdom always is, at its core, no matter how many other layers of understanding are added on top.",
      "But what is &ldquo;the fear of the LORD&rdquo;? The phrase is not primarily about terror, though it includes a proper awe before the Almighty. Biblical fear of the LORD is a comprehensive orientation of the whole person &mdash; mind, will, emotions, and actions &mdash; in right relationship to God. It means taking God seriously as God: acknowledging his sovereignty, his holiness, his justice, his mercy. It means living life as one who is accountable to him, who loves what he loves and hates what he hates, who trusts his word above all competing voices. The person who fears the LORD is not a cowering slave but a son or daughter who knows the character of the Father and who therefore runs to him rather than away from him.",
      "Verse 7 ends with a note of sharp contrast: &ldquo;fools despise wisdom and instruction.&rdquo; In Proverbs, &ldquo;fool&rdquo; is not primarily a statement about intelligence. A fool is a person who has made a fundamental moral and spiritual choice: to live as if God does not matter, to trust oneself above all, to refuse the correction that would lead to life. The fool is not stupid; the fool is proud. And that pride leads to a rejection of wisdom&rsquo;s invitation that is not merely an intellectual mistake but a moral failure &mdash; a despising of the very thing that leads to life.",
      "The prologue of Proverbs 1 thus sets the reader before a choice that is not really about intelligence or education but about the posture of the heart. Will you fear the LORD and receive wisdom, or will you despise instruction and walk in folly? Everything else in the book flows from how that question is answered.",
    ],
  },
  {
    id: "Lady Wisdom's Call",
    heading: "Lady Wisdom Cries Out",
    reference: "Proverbs 1:20&ndash;33",
    paragraphs: [
      "The most dramatic and theologically rich passage in Proverbs 1 is the speech of Lady Wisdom in verses 20&ndash;33. Here the abstraction &ldquo;wisdom&rdquo; becomes a living, speaking person &mdash; a woman who goes out into the most public places of the city and cries out with a voice that is urgent, passionate, and finally solemn with warning. The personification of wisdom as a woman is one of the most remarkable literary and theological features of the book of Proverbs and reaches its fullest development in chapter 8.",
      "&ldquo;Wisdom cries aloud in the street, in the markets she raises her voice; at the head of the noisy streets she cries out; at the entrance of the city gates she speaks&rdquo; (vv. 20&ndash;21). Notice where Wisdom is. She is not in the temple, visible only to those who are already pious. She is not in the school, available only to those who can afford education. She is in the street, in the marketplace, at the city gates &mdash; the busiest, noisiest, most commercial and judicial locations in the ancient world. Wisdom is universal in her availability. She offers herself to anyone who will hear. The problem is never that Wisdom is hidden or hard to find; the problem is that she is ignored.",
      "Her audience is described in verse 22: &ldquo;How long, O simple ones, will you love being simple? How long will scoffers delight in their scoffing and fools hate knowledge?&rdquo; Three groups are addressed. The &ldquo;simple ones&rdquo; (<em>petayim</em>) are those who are naive and easily led astray &mdash; not yet fully committed to folly but dangerously open to it. The &ldquo;scoffers&rdquo; are those who have hardened in their contempt for wisdom and for those who pursue it; they mock the serious and the sincere. The &ldquo;fools&rdquo; are those who have made their choice against wisdom and hate being confronted with knowledge that challenges their chosen way. All three are addressed by Wisdom&rsquo;s invitation, but the urgency of &ldquo;How long?&rdquo; signals that the invitation will not be extended indefinitely.",
      "&ldquo;If you turn at my reproof, behold, I will pour out my spirit to you; I will make my words known to you&rdquo; (v. 23). The offer is breathtaking in its generosity. Wisdom promises not merely to impart information but to pour out her spirit &mdash; the very essence of wisdom, a transforming gift of understanding from within. The condition is simple: &ldquo;turn at my reproof.&rdquo; This is a call to repentance &mdash; a turning from the way of the simple, the scoffer, and the fool toward the way of wisdom. It echoes the prophetic calls to Israel to &ldquo;return&rdquo; to the LORD. The wisdom tradition and the prophetic tradition share the same call at their core.",
      "But in verses 24&ndash;28, the tone shifts from invitation to judgment. Wisdom has called, and they refused. She has stretched out her hand, and no one has paid attention. They have ignored her counsel and would have none of her reproof. Therefore the day of calamity will come, and when it does, they will cry out to her and she will not answer. &ldquo;They will call upon me, but I will not answer; they will seek me diligently but will not find me&rdquo; (v. 28). This reversal is one of the most sobering passages in Proverbs. The God who promises that all who seek him will find him (Matthew 7:7&ndash;8) does so within a context where there is still time to seek. Proverbs 1 warns that the time will come when the window closes.",
      "The reason for this reversal is not arbitrary but just: &ldquo;Because they hated knowledge and did not choose the fear of the LORD, would have none of my counsel and despised all my reproof, therefore they shall eat the fruit of their way, and have their fill of their own devices&rdquo; (vv. 29&ndash;31). The judgment of folly is, in a profound sense, self-inflicted. Those who refuse wisdom do not simply miss out on wisdom&rsquo;s benefits; they receive the fruit of their own chosen path. The sinner is bound in a chain that is largely of his own forging. The fool eats what he has planted.",
      "The passage closes with a beautiful and luminous contrast: &ldquo;but whoever listens to me will dwell secure and will be at ease, without dread of disaster&rdquo; (v. 33). The word &ldquo;secure&rdquo; (<em>betach</em>) is a rich word in the Old Testament, often used of the safety and confidence that comes from trusting in God. To live in the fear of the LORD &mdash; to hear and heed Wisdom&rsquo;s call &mdash; is to live without the ultimate terror of calamity, because one&rsquo;s life is built on the unshakeable foundation of God&rsquo;s own wisdom and care. This is the peace that the world cannot give and cannot take away.",
    ],
  },
  {
    id: "Warning Against Folly",
    heading: "The Father&rsquo;s Warning Against Sinners",
    reference: "Proverbs 1:8&ndash;19",
    paragraphs: [
      "Between the theological prologue (vv. 1&ndash;7) and Lady Wisdom&rsquo;s dramatic speech (vv. 20&ndash;33) comes the first of the father&rsquo;s addresses to his son (vv. 8&ndash;19). This address is the most intimate in tone: it is not a philosophical treatise about wisdom but a father speaking directly, urgently, to a young person he loves about the specific danger he sees threatening that young person&rsquo;s life. The section reads almost like a cautionary tale, and it is structured with precision: the call to listen (v. 8), the description of the enticement (vv. 10&ndash;14), the warning not to go (vv. 15&ndash;16), and the ironic reversal by which the sinner&rsquo;s trap becomes his own destruction (vv. 17&ndash;19).",
      "&ldquo;Hear, my son, your father&rsquo;s instruction, and forsake not your mother&rsquo;s teaching, for they are a graceful garland for your head and pendants for your neck&rdquo; (vv. 8&ndash;9). The address &ldquo;my son&rdquo; is the characteristic form of address throughout the first nine chapters of Proverbs. It signals the intimacy and personal investment of what follows. This is not a distant teacher delivering a lecture; this is a father who loves his child and who speaks from his own experience of the world. The image of wisdom as a garland and pendant is striking: wisdom is not merely useful, it is beautiful. It adorns the one who wears it.",
      "The specific danger the father warns against is the enticement of violent men who promise wealth and camaraderie. &ldquo;My son, if sinners entice you, do not consent. If they say, &lsquo;Come with us, let us lie in wait for blood; let us ambush the innocent without reason; like Sheol let us swallow them alive&rsquo;&rdquo; (vv. 10&ndash;12). The language is graphic and even shocking: these are men who delight in violence for its own sake, who set ambushes for innocent people, who compare themselves to the grave in their appetite for destruction. The father is not exaggerating the danger; he is naming it clearly so his son will recognize it when he sees it.",
      "The enticement has two prongs. The first is the promise of belonging: &ldquo;Come with us.&rdquo; The gang offers community, identity, a sense of being part of something. For a young person who feels isolated or insignificant, this appeal can be powerfully seductive. The second is the promise of material gain: &ldquo;We shall find all precious goods, we shall fill our houses with plunder; throw in your lot among us; we will all have one purse&rdquo; (vv. 13&ndash;14). The appeal is to greed and to the desire for financial security through shortcuts. Both prongs of the enticement bypass the slow, faithful, seemingly unrewarding path of wisdom and offer instead an immediate payoff.",
      "The father&rsquo;s response is blunt: &ldquo;My son, do not walk in the way with them; hold back your foot from their paths, for their feet run to evil, and they make haste to shed blood&rdquo; (vv. 15&ndash;16). The urgency of the warning (&ldquo;hold back your foot&rdquo;) suggests that the path to destruction begins with small steps. No one becomes a man of blood overnight. The progression begins with listening to the enticement, then with walking along with the group, then with being fully committed. The father urges his son to refuse the very first step &mdash; to hold back his foot before it is on the path at all.",
      "The most striking part of this section is the ironic ending (vv. 17&ndash;19). &ldquo;For in vain is a net spread in the sight of any bird, yet these men lie in wait for their own blood; they set an ambush for their own lives.&rdquo; The sinners set a trap for others, but the trap they set is actually for themselves. The bird, at least, has the sense to avoid a net it can see; these men walk into the trap they have laid with open eyes. They promise each other treasure, but what they actually gain is their own destruction. &ldquo;Such are the ways of everyone who is greedy for unjust gain; it takes away the life of its possessors&rdquo; (v. 19). Greed, in the end, does not merely fail to deliver what it promises; it actively destroys the one who pursues it.",
      "This passage is not merely a warning about joining gangs. At a deeper level it is about the fundamental structure of sin: sin always promises life and always delivers death. The enticement is real &mdash; the promises of belonging and wealth are not imaginary, and the appeal to a young heart is genuine. But the outcome is invariably the opposite of what was promised. The father&rsquo;s instruction is not a restriction on life but a protection of it. The path of wisdom, which seems narrow and unrewarding, is the path that actually leads to the secure dwelling and the ease from dread that Wisdom promises at the end of the chapter.",
      "Video Resources",
      "Explore these teaching resources to deepen your understanding of Proverbs 1 and its call to fear the LORD, receive wisdom, and walk in the paths of life.",
    ],
  },
];

const videoItems = [
  { videoId: "3RfYeVSijlI", title: "Proverbs - BibleProject Overview" },
  { videoId: "MFyuZhHlRzY", title: "The Fear of the LORD - What Does It Really Mean?" },
  { videoId: "kH8EJ4LfDaU", title: "Lady Wisdom in Proverbs - Personification and Theology" },
  { videoId: "YdxDV7nkQUE", title: "Proverbs 1 - Warning Against Folly and the Way of Sinners" },
];

export default function Proverbs1GuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament &mdash; Wisdom Literature
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Proverbs 1
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The prologue of Proverbs establishes the fear of the LORD as wisdom&rsquo;s foundation, introduces the personified Lady Wisdom crying out in the streets, and warns against the seductive way of sinners whose path ends in self-destruction.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.slice(0, -2).map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 1.25rem", fontSize: "1.15rem" }}>Video Teaching on Proverbs 1</h3>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 1.5rem" }}>
            Deepen your understanding of Proverbs 1 through these teaching resources on the fear of the LORD, Lady Wisdom&rsquo;s call, and the warning against the way of sinners.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "10px 14px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Beginning of Wisdom</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem" }}>
            Proverbs 1 confronts every reader with the same fundamental choice that has always stood before humanity: will you receive wisdom and her invitation, or will you despise instruction and walk the path of the fool? The fear of the LORD is not a feeling of terror but an orientation of the whole person &mdash; mind, will, and heart &mdash; in right relationship to the God who made and sustains all things.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Lady Wisdom&rsquo;s cry in the streets is not merely the cry of an ancient literary device. For the Christian, it is ultimately the cry of Christ himself, the one in whom &ldquo;are hidden all the treasures of wisdom and knowledge&rdquo; (Colossians 2:3). To hear Wisdom&rsquo;s call and turn at her reproof is to hear the gospel and respond in faith. And the promise that &ldquo;whoever listens to me will dwell secure and will be at ease, without dread of disaster&rdquo; finds its deepest fulfillment in the peace of God that surpasses all understanding.
          </p>
        </div>

        <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Key Themes in Proverbs 1</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { label: "Fear of the LORD", desc: "The foundational posture of all biblical wisdom &mdash; reverent trust and obedience toward God as Creator and King." },
              { label: "Lady Wisdom", desc: "Wisdom personified as a woman who calls out publicly and freely, available to all but refused by the proud." },
              { label: "The Father&rsquo;s Instruction", desc: "Parental wisdom as a vehicle of divine wisdom &mdash; the graceful garland and pendant that adorn the one who receives it." },
              { label: "The Way of Sinners", desc: "The path that promises belonging and wealth but whose end is self-destruction &mdash; sinners who set a trap for themselves." },
            ].map((item) => (
              <div key={item.label} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem 1.25rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, marginBottom: 6 }} dangerouslySetInnerHTML={{ __html: item.label }} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Structure of Proverbs 1</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { ref: "vv. 1&ndash;7", title: "Prologue and Purpose", desc: "The book&rsquo;s stated aim: to know wisdom, receive instruction, and understand the thesis that the fear of the LORD is wisdom&rsquo;s beginning." },
              { ref: "vv. 8&ndash;19", title: "The Father&rsquo;s First Address", desc: "A father warns his son against the enticement of violent men who promise wealth and belonging but whose path leads only to self-destruction." },
              { ref: "vv. 20&ndash;33", title: "Lady Wisdom&rsquo;s Public Cry", desc: "Personified Wisdom speaks in the streets, inviting the simple and warning the fool: those who refuse her now will find no answer in their day of calamity." },
            ].map((row) => (
              <div key={row.ref} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "0.75rem 1rem", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 12, minWidth: 80, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: row.ref }} />
                <div>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: 14, marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: row.title }} />
                  <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: row.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
