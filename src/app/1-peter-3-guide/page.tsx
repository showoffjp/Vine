"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Always Be Ready Gospel",
  "Gentle Quiet Spirit",
  "Suffering for Righteousness",
  "Application",
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
    heading: "Overview of 1 Peter 3",
    reference: "1 Peter 3:1&ndash;22",
    paragraphs: [
      "First Peter 3 stands as one of the most comprehensive chapters in the New Testament on the intersection of holiness, suffering, and gospel witness. Written by the Apostle Peter to scattered believers living as &ldquo;elect exiles&rdquo; throughout Asia Minor, this chapter addresses wives and husbands in their domestic relationships, calls every believer to a life of humble, compassionate community, and then presents the famous charge: &ldquo;Always be prepared to make a defense to anyone who asks you for a reason for the hope that is in you&rdquo; (3:15). The chapter closes with a meditation on Christ&rsquo;s own suffering, death, resurrection, and ascension &mdash; the bedrock on which all Christian endurance rests.",
      "The original recipients of this letter were no strangers to hostility. They lived as a minority religious community under the shadow of Rome, misunderstood and sometimes slandered by their neighbors. Peter&rsquo;s counsel throughout the letter is not to retreat into isolation or to fight back in kind, but to maintain a quality of life so visibly different, so genuinely good, that it silences slander and opens doors to the gospel. Chapter 3 is the concentrated expression of that strategy: holy character, gracious speech, and readiness to give a winsome account of Christian hope.",
      "The chapter divides naturally into four movements. Verses 1&ndash;7 address household relationships, calling wives to a particular kind of inner beauty and husbands to an understanding, honoring posture toward their wives. Verses 8&ndash;12 widen the lens to the whole church community, calling for unity, sympathy, brotherly love, a tender heart, and a humble mind &mdash; reinforced with a quotation from Psalm 34 that promises God&rsquo;s care for the righteous. Verses 13&ndash;17 introduce the theme of being ready to give a reason for Christian hope, even in the face of suffering for righteousness&rsquo; sake. And verses 18&ndash;22 anchor everything in the suffering, death, and resurrection of Christ himself, with a reference to baptism as the pledge of a good conscience toward God.",
      "One of the chapter&rsquo;s great gifts to the church is its integration of the private and the public, the domestic and the apologetic. The same internal character &mdash; a gentle and quiet spirit, a heart oriented toward doing good, a conscience kept clear &mdash; that marks a godly marriage relationship is also exactly what makes a believer ready and attractive as a witness in the world. Holiness and evangelism are not competing priorities; they are two expressions of the same transformed life. The person who is genuinely gentle and genuinely hopeful will inevitably be asked why.",
      "The chapter also refuses to promise immunity from suffering. Indeed, it calls believers to embrace the possibility of suffering for righteousness&rsquo; sake as a blessing rather than a disaster, following in the footsteps of Christ himself. Peter does not offer a prosperity gospel or a guarantee of social acceptance. Instead, he offers something far more enduring: the knowledge that unjust suffering endured with integrity and trust in God has been the path of Christ, and those who walk it share in something of immense eternal significance. The suffering of Christ was not the end of the story, and neither is the suffering of those who belong to him.",
    ],
  },
  {
    id: "Always Be Ready Gospel",
    heading: "Always Be Ready: Gospel Readiness",
    reference: "1 Peter 3:13&ndash;17",
    paragraphs: [
      "The heart of 1 Peter 3 for many readers is the celebrated command of verse 15: &ldquo;In your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect.&rdquo; This single sentence has become one of the foundational texts for the discipline of Christian apologetics &mdash; the thoughtful, reasoned, winsome defense and commendation of the Christian faith. Yet the verse belongs to a context, and that context transforms its meaning.",
      "The command begins not with skill or strategy but with the heart: &ldquo;in your hearts honor Christ the Lord as holy.&rdquo; The Greek word translated &ldquo;honor as holy&rdquo; or &ldquo;sanctify&rdquo; is the same word that appears in the Lord&rsquo;s Prayer: &ldquo;hallowed be your name.&rdquo; To sanctify Christ as Lord in the heart means to regard him as utterly supreme, to place him on the throne of the inner life, to let his authority shape every thought and response. This is the necessary foundation for gospel readiness &mdash; not a method or a memorized script, but a daily posture of Christ-exalting surrender.",
      "From that heart posture flows the readiness to give an account. The Greek word translated &ldquo;defense&rdquo; is &ldquo;apologia,&rdquo; the word from which &ldquo;apologetics&rdquo; comes. In its original context it referred to a formal legal defense, but Peter uses it more broadly to mean any thoughtful, clear explanation. The believer is to be ready &mdash; not merely willing, but prepared &mdash; to explain the reason for the hope that is in them. This implies that Christian hope is not simply a feeling but a reasoned conviction with a real object: the resurrection of Jesus Christ, the forgiveness of sins, the promise of eternal life.",
      "The phrase &ldquo;the hope that is in you&rdquo; is remarkable. Peter assumes that genuine believers will be noticeably hopeful people &mdash; so visibly so that their neighbors and acquaintances will ask about it. In a world marked by anxiety, mortality, injustice, and despair, the Christian who lives with genuine, unhurried, unshaken hope is an apologetic in themselves. The question &ldquo;why are you so hopeful?&rdquo; is the opening the believer has been prepared to receive. The life of holiness that Peter has been describing throughout his letter is not merely moral improvement; it is a visible sign pointing toward a different reality.",
      "The manner of the defense is as important as its content: &ldquo;with gentleness and respect.&rdquo; Peter is not calling for aggressive argument, for point-scoring, for the humiliation of opponents. The gentleness he calls for is the same quality he has just described in the gentle and quiet spirit of verse 4; it is an inner quality of non-aggressiveness, a freedom from the need to dominate. Respect &mdash; or &ldquo;fear&rdquo; in some translations &mdash; involves a sober reverence both for God and for the dignity of the person being addressed. The gospel is best commended by those whose lives and manner already display its transforming power.",
      "Peter adds the qualification: &ldquo;having a good conscience, so that, when you are slandered, those who revile your good behavior in Christ may be put to shame&rdquo; (v. 16). The good conscience is not merely a subjective feeling; it is the result of actually living with integrity. The best apologetic answer to slander is a blameless life that makes the accusation absurd. When believers suffer for doing good and bear it with grace, they are doing exactly what Christ did &mdash; and the watching world cannot ultimately ignore that.",
    ],
  },
  {
    id: "Gentle Quiet Spirit",
    heading: "The Gentle and Quiet Spirit",
    reference: "1 Peter 3:1&ndash;7",
    paragraphs: [
      "The opening movement of 1 Peter 3 addresses the most intimate of human relationships &mdash; marriage &mdash; and introduces a concept that has both comforted and perplexed readers across the centuries: the &ldquo;gentle and quiet spirit.&rdquo; Peter writes to wives married to unbelieving husbands: &ldquo;Let your adorning be the hidden person of the heart with the imperishable beauty of a gentle and quiet spirit, which in God&rsquo;s sight is very precious&rdquo; (3:4). This quality, Peter says, is of great worth in God&rsquo;s sight &mdash; a remarkable claim about the value of a particular disposition of the inner life.",
      "The word translated &ldquo;gentle&rdquo; (Greek: &ldquo;praus&rdquo;) is the same word used to describe Moses in the Septuagint &mdash; &ldquo;very meek&rdquo; (Numbers 12:3) &mdash; and to describe Jesus himself: &ldquo;I am gentle and lowly in heart&rdquo; (Matthew 11:29). It is emphatically not a word for weakness or passivity. Moses confronted Pharaoh; Jesus drove money-changers from the Temple. Praus describes a quality of the inner life that is not driven by anxiety, self-protection, or the need for external validation. It is the calmness of a person whose security rests in God rather than in circumstances or reputation.",
      "The word translated &ldquo;quiet&rdquo; (Greek: &ldquo;hesuchios&rdquo;) carries the idea of an ordered tranquility, a stillness of spirit that does not create unnecessary disturbance. This is not the quietness of someone with nothing to say or no convictions to hold; it is the quietness of someone who has learned that not every battle needs to be fought with noise and force. The &ldquo;quiet spirit&rdquo; is one that has found a center of gravity in God and is therefore not easily destabilized by external pressure.",
      "Peter contrasts this inward beauty with external adornment: &ldquo;Do not let your adorning be external &mdash; the braiding of hair and the putting on of gold jewelry, or the clothing you wear &mdash; but let your adorning be the hidden person of the heart&rdquo; (3:3&ndash;4). This is not an absolute prohibition on all hairstyling or jewelry &mdash; that would make the parallel prohibition on clothing impossible to obey. It is a statement of priorities: the primary investment should be in the character of the inner life, not in the management of external impression. The &ldquo;hidden person of the heart&rdquo; is the real self, the one that God sees.",
      "Peter holds up Sarah as the model, describing her as one who obeyed Abraham and called him lord, and declaring that Christian women are her daughters &ldquo;if you do good and do not fear anything that is frightening&rdquo; (3:6). The phrase &ldquo;do not fear anything that is frightening&rdquo; is telling: the gentle and quiet spirit is not fearless because nothing difficult is happening, but because fear has been displaced by trust in God. The very same quality that makes a woman a gracious witness in her own marriage is the quality that makes any believer a steady witness in a hostile world.",
      "Peter&rsquo;s word to husbands (3:7) is briefer but weighty: they are to live with their wives &ldquo;in an understanding way,&rdquo; showing honor to the woman &ldquo;as the weaker vessel&rdquo; and as a &ldquo;fellow heir of the grace of life.&rdquo; The husband who treats his wife with informed, attentive honor is not merely a good spouse &mdash; he is a man whose prayer life remains intact (&ldquo;so that your prayers may not be hindered&rdquo;). The quality of the most intimate human relationship is directly connected to the quality of the relationship with God. The gentle and quiet spirit, then, is not a gendered technique for domestic harmony; it is an outward expression of an inwardly ordered soul.",
    ],
  },
  {
    id: "Suffering for Righteousness",
    heading: "Suffering for Righteousness",
    reference: "1 Peter 3:13&ndash;22",
    paragraphs: [
      "Peter introduces the theme of suffering for righteousness with an almost counterintuitive beatitude: &ldquo;But even if you should suffer for righteousness&rsquo; sake, you will be blessed&rdquo; (3:14). The word &ldquo;blessed&rdquo; here is the same word used in the Beatitudes of Matthew 5 &mdash; a word that carries the meaning of genuine divine favor, true well-being, the kind of happiness that does not depend on favorable circumstances. To suffer for righteousness is, in the economy of God&rsquo;s kingdom, a blessed condition. This is a radical reversal of ordinary human reckoning.",
      "Peter grounds this in the example of Christ himself, and the passage in verses 18&ndash;22 is one of the most theologically dense in the entire New Testament. &ldquo;For Christ also suffered once for sins, the righteous for the unrighteous, that he might bring us to God, being put to death in the flesh but made alive in the spirit&rdquo; (3:18). Every element is significant: Christ suffered &ldquo;once&rdquo; &mdash; his sacrifice was unique, complete, and unrepeatable; he was &ldquo;the righteous for the unrighteous&rdquo; &mdash; the substitutionary character of his suffering is explicitly stated; and its purpose was to &ldquo;bring us to God&rdquo; &mdash; reconciliation, access, relationship.",
      "The mention of Christ being &ldquo;put to death in the flesh but made alive in the spirit&rdquo; sets up one of the most debated passages in the New Testament: &ldquo;in which he went and proclaimed to the spirits in prison, because they formerly did not obey, when God&rsquo;s patience waited in the days of Noah&rdquo; (3:19&ndash;20). Interpreters have debated for centuries what this proclamation was, to whom it was made, and when. Some understand it as Christ&rsquo;s spirit, through Noah, preaching repentance to the generation of the flood. Others see it as the risen Christ declaring his victory to imprisoned fallen angels. Still others understand it as Christ descending between death and resurrection to announce his triumph. Whatever the precise interpretation, the point in context is clear: Christ&rsquo;s death was not a defeat. It was followed by resurrection, ascension, and a declaration of triumph that extended even to realms beyond the visible world.",
      "The reference to Noah is not incidental. Noah and his family were eight souls saved through water &mdash; a small remnant preserved while the surrounding world was judged. Peter&rsquo;s original readers were themselves a small, scattered remnant in a world hostile to the gospel. The correspondence would not have been lost on them: as God preserved Noah through the waters of judgment, so God preserves his people through the waters of baptism, which Peter describes as &ldquo;an appeal to God for a good conscience, through the resurrection of Jesus Christ&rdquo; (3:21). Baptism does not save through the physical washing; it is the expression of a heart that has turned to God and stands before him on the basis of the risen Christ.",
      "Christ&rsquo;s exaltation concludes the passage: &ldquo;who has gone into heaven and is at the right hand of God, with angels, authorities, and powers having been subjected to him&rdquo; (3:22). The one who suffered unjustly is now enthroned in supreme authority. Every power that might oppress a believer &mdash; governmental, demonic, social &mdash; has already been placed under the feet of the Lord Jesus. This is the ultimate answer to the fear of suffering: the one who has gone before us through the worst that hostile powers can inflict is now Lord over all of them.",
      "The practical implication for believers is summarized in verses 13&ndash;14: those who are zealous for good will often not be harmed, but even if they are, they are blessed. The path of suffering for righteousness is not a path of divine abandonment; it is the path of Christ, and it ends where Christ&rsquo;s path ended &mdash; in resurrection and glory. Knowing this changes everything about how a believer bears hostility, endures injustice, and continues to do good in a world that sometimes punishes goodness.",
    ],
  },
  {
    id: "Application",
    heading: "Living Out 1 Peter 3 Today",
    reference: "1 Peter 3 &mdash; Practical Reflection",
    paragraphs: [
      "The imperatives of 1 Peter 3 are not addressed to a spiritual elite but to ordinary believers navigating ordinary and extraordinary pressures &mdash; the pressures of marriage, community life, social marginalization, and the ever-present temptation to either assimilate into surrounding culture or retreat into defensive isolation. The application of this chapter begins with the recognition that it was written for people under real pressure, and its wisdom is no less needed in any era where Christian conviction sets believers apart from their neighbors.",
      "The call to cultivate a gentle and quiet spirit is perhaps the most countercultural application in an age of perpetual online argument and performance. The &ldquo;gentle and quiet spirit&rdquo; is not a social media strategy; it is an inner disposition formed through prayer, Scripture meditation, and the conscious practice of yielding one&rsquo;s need to be heard and vindicated to the God who sees in secret. Practically, this means learning to respond rather than react, to listen before speaking, to resist the pull toward escalation. It means investing more energy in the &ldquo;hidden person of the heart&rdquo; than in external reputation management.",
      "The apologetics imperative &mdash; always being prepared to give a reason for the hope within &mdash; calls every believer to thoughtful engagement with their own faith. This is not about having a complete answer to every philosophical objection, but about knowing why you believe what you believe, being able to articulate the hope of the resurrection and the forgiveness of sins in plain language, and doing so with genuine warmth and respect. The preparation Peter calls for is not primarily academic; it is experiential &mdash; a life so shaped by hope that others notice it and ask.",
      "The manner of that witness &mdash; &ldquo;with gentleness and respect&rdquo; &mdash; has perhaps never been more important or more neglected than in the present cultural moment. In an era of tribal contempt and social media point-scoring, the Christian who can disagree with real gentleness and genuine respect for the dignity of the other person is genuinely remarkable. The apologetic is not just the answer; it is the quality of the conversation. A correct argument delivered with contempt dishonors both the gospel and the image of God in the person being addressed.",
      "The theology of suffering in this chapter calls for a reorientation of how Christians think about difficulty and opposition. The prosperity gospel &mdash; the assumption that faithful Christianity produces comfortable and untroubled lives &mdash; cannot survive 1 Peter 3. What this chapter offers instead is something better: the certainty that unjust suffering endured in faith is meaningful, that it follows the path of Christ, that the God who raised Jesus from the dead is fully aware of what his people endure, and that the powers that inflict suffering have already been placed under the feet of the risen Lord. This is not a counsel of passive resignation but of active, trustful endurance.",
      "Finally, 1 Peter 3 calls for a particular kind of community life among believers. The list of virtues in verses 8&ndash;12 &mdash; unity, sympathy, brotherly love, a tender heart, a humble mind, blessing rather than reviling, seeking peace &mdash; describes a community that is itself an apologetic. When a watching world sees a group of people who genuinely love each other across differences, who bless those who curse them, who pursue peace rather than dominance, it encounters something it cannot explain apart from a transformed nature. The community shaped by 1 Peter 3 is not a defensive enclave but a visible outpost of the kingdom of God.",
    ],
  },
];

const videoItems = [
  { videoId: "NBVMXFeBnEQ", title: "1 Peter 3:15 - Always Be Ready to Give a Reason for Your Hope" },
  { videoId: "BkVsEMkXUFM", title: "The Gentle and Quiet Spirit - 1 Peter 3 Explained" },
  { videoId: "G0_zzXAobSM", title: "Suffering for Righteousness - 1 Peter 3 Bible Study" },
  { videoId: "kl2eaEkZBTM", title: "1 Peter 3 - Apologetics and Holy Living - Expository Sermon" },
];

export default function Peter3GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
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
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            1 Peter 3 &mdash; Always Be Ready
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Suffering and holy living &mdash; the gentle and quiet spirit, readiness to give a reason for the hope within, and the triumph of Christ over suffering and death. A chapter for believers navigating a world that does not always welcome the gospel.
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
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 1.25rem", fontSize: "1.15rem" }}>
            Video Teaching on 1 Peter 3
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Always Be Ready</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Peter 3 calls every believer to a life so visibly shaped by hope, gentleness, and integrity that the watching world asks questions &mdash; and to be prepared with a clear, respectful answer. It grounds that calling in the suffering, death, resurrection, and exaltation of Christ, the one who went before us through the worst that hostile powers can inflict and now reigns over all of them.
          </p>
        </div>
      </main>
    </div>
  );
}
