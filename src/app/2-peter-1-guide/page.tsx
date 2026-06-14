"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Everything for Life and Godliness",
  "The Ladder of Virtue",
  "Confirming Your Calling",
  "Divine Origin of Scripture",
  "Application",
  "Videos",
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
    heading: "Overview of 2 Peter 1",
    reference: "2 Peter 1:1&ndash;21",
    paragraphs: [
      "The first chapter of Peter&rsquo;s second letter is one of the richest and most theologically dense passages in the entire New Testament. Peter, writing as a man who knows his death is approaching &mdash; &ldquo;I know that the putting off of my body will be soon&rdquo; (1:14) &mdash; packs into this opening chapter a lifetime of pastoral concern and apostolic conviction. He wants his readers to know what they already possess in Christ, to grow in what they have been given, and to remain anchored in the unshakeable word of prophecy. Three great movements carry the chapter forward: the divine provision (vv. 1&ndash;11), the apostolic eyewitness (vv. 12&ndash;18), and the prophetic word (vv. 19&ndash;21).",
      "The chapter opens with a greeting that grounds everything else: Peter addresses those who have received a faith &ldquo;of equal standing&rdquo; with the apostles, made possible by &ldquo;the righteousness of our God and Savior Jesus Christ&rdquo; (1:1). This equality of standing is remarkable &mdash; every believer, regardless of their background or position, holds the same precious faith as the apostles themselves. It is given, not earned. It comes through God&rsquo;s righteousness, not human achievement. From this foundation everything else in the chapter flows.",
      "The doctrinal center of the chapter is the great declaration of verses 3&ndash;4: God has already granted believers everything they need for life and godliness through the knowledge of Christ, and through his promises they become partakers of the divine nature. This is not a promise to be claimed in the future but a present possession to be recognized and lived from. Peter then builds upon this foundation by urging a disciplined addition of virtues &mdash; what has been called the &ldquo;ladder of virtue&rdquo; &mdash; that leads from faith through love, confirming the believer&rsquo;s calling and election.",
      "In the second movement, Peter grounds his teaching not in speculation but in eyewitness testimony. He was present at the Transfiguration on the holy mountain when the voice came from heaven declaring, &ldquo;This is my beloved Son, with whom I am well pleased&rdquo; (1:17). This personal witness to the majesty of Christ gives him authority to speak, but he then immediately subordinates even that remarkable experience to something even more reliable: the prophetic word of Scripture.",
      "The chapter culminates in one of the most important statements in all of Scripture about its own nature and origin. No prophecy of Scripture came from the prophet&rsquo;s own interpretation or by human will, but holy men spoke from God as they were carried along by the Holy Spirit (1:20&ndash;21). The metaphor of being &ldquo;carried along&rdquo; &mdash; the same word used of a ship driven by wind &mdash; captures the dynamic of divine inspiration: the human authors were fully active, yet the impulse and direction came entirely from God. Scripture is therefore supremely trustworthy, more certain than even the most spectacular religious experience.",
      "To read 2 Peter 1 is to encounter a man of deep faith preparing to die, pouring out the most important things he knows so that his readers may have them in permanent form. The chapter is an invitation to inhabit a life that is already, in Christ, fully provided for &mdash; and then to work out that provision through the disciplined cultivation of virtue, the sober recognition of one&rsquo;s calling, and the steady confidence of a faith grounded not in religious feeling but in the unbreakable word of the living God.",
    ],
  },
  {
    id: "Everything for Life and Godliness",
    heading: "Everything for Life and Godliness",
    reference: "2 Peter 1:1&ndash;4",
    paragraphs: [
      "The opening verses of 2 Peter 1 contain one of the most staggering claims in the entire New Testament: God&rsquo;s divine power &ldquo;has granted to us all things that pertain to life and godliness, through the knowledge of him who called us to his own glory and excellence&rdquo; (1:3). The verb is in the perfect tense &mdash; the granting has already occurred and its effects persist. The believer does not need to acquire what is needed for spiritual life; it has already been supplied in full. The Christian life is not an uphill scramble to accumulate divine resources; it is the sustained appropriation of what has already been lavishly given.",
      "The channel through which this provision flows is &ldquo;the knowledge of him&rdquo; &mdash; a phrase that runs like a thread through the whole of 2 Peter. This is not merely factual knowledge about Christ, as one might have knowledge about a historical figure. The Greek word Peter uses (&lsquo;epignosis&rsquo;) carries the sense of a deep, personal, experiential knowing &mdash; the kind of knowledge that transforms the one who possesses it. To know Christ in this rich sense is itself the means by which every spiritual resource is accessed. Knowledge of Christ is not a step on the way to godliness; it is the very wellspring from which godliness flows.",
      "Peter goes on to describe what God has provided as &ldquo;his precious and very great promises&rdquo; (1:4). These promises are the vehicle of the divine provision. They are &ldquo;precious&rdquo; because of what they cost &mdash; the blood of Christ &mdash; and because of what they deliver: escape from the corruption that is in the world through sinful desire, and participation in &ldquo;the divine nature.&rdquo; This second phrase is one of the boldest in all of Scripture. Peter does not mean that believers become God or lose their creatureliness; he means that through union with Christ they come to share in the qualities and character that belong to God &mdash; holiness, love, truth, purity, power over sin.",
      "The corruption from which believers escape is defined as &ldquo;the corruption that is in the world because of sinful desire.&rdquo; The world, left to its own trajectory, spirals downward into decay &mdash; moral, relational, spiritual. The promises of God provide an alternative trajectory: not decay but transformation, not corruption but the very nature of the incorruptible One. Believers are caught up into a movement that runs opposite to the world&rsquo;s direction, not by their own energy but by the power of the divine promises applied to them.",
      "The practical force of these opening verses should not be lost. Peter is writing to people facing false teachers who will soon appear (2:1) and to people who may be tempted to wonder whether the Christian life is worth the cost. His answer is not to argue for Christianity&rsquo;s superiority in the abstract, but to remind his readers of what they already have. Everything needed for a life that pleases God and a godliness that displays his character has already been given. The question is not whether the provision is sufficient; it always is. The question is whether believers will live from that abundance or live as though they were still poor.",
      "This rich provision stands in direct contrast to what the false teachers of 2 Peter 2 offer. They promise freedom but deliver slavery; they speak of knowledge but deal in ignorance; they offer a way forward that leads back into the corruption believers have escaped. The antidote to their teaching is not more arguments but a deeper inhabitation of what Christ has already given. The believer who truly knows that God has supplied everything needed for life and godliness is not easily impressed by teachers who offer what they claim Christ failed to provide.",
    ],
  },
  {
    id: "The Ladder of Virtue",
    heading: "The Ladder of Virtue",
    reference: "2 Peter 1:5&ndash;9",
    paragraphs: [
      "Having declared what God has given, Peter now calls believers to an active response: &ldquo;For this very reason, make every effort to supplement your faith with virtue, and virtue with knowledge, and knowledge with self-control, and self-control with steadfastness, and steadfastness with godliness, and godliness with brotherly affection, and brotherly affection with love&rdquo; (1:5&ndash;7). The phrase &ldquo;make every effort&rdquo; &mdash; literally, &ldquo;bring in alongside&rdquo; with all diligence &mdash; signals that the divine provision does not render human effort unnecessary. It is precisely because everything has been given that the believer must exert every effort to appropriate it.",
      "The list of seven qualities to be added forms what ancient commentators called a &ldquo;chain&rdquo; or &ldquo;ladder&rdquo; of virtue. Each quality is to be added to the one before it, suggesting not that each is acquired separately and sequentially but that each enriches and deepens the one preceding it. Faith is the foundation &mdash; the trust in Christ that comes first and underlies everything else. But faith without development is incomplete; it must be supplemented, built upon, grown into its full expression through the cultivation of these further qualities.",
      "Virtue (or moral excellence) is the first addition to faith &mdash; an active, energetic quality that involves courageous engagement with the moral life, not passive avoidance of wrong but positive pursuit of what is good and noble. Knowledge is added next, the &lsquo;epignosis&rsquo; of genuine understanding of God and his ways that enables the believer to distinguish truth from error and to act wisely in the complexities of life. Self-control follows &mdash; the mastery of one&rsquo;s desires, appetites, and impulses that the ancient world recognized as essential to genuine human flourishing, and that the New Testament grounds in the power of the Spirit.",
      "Steadfastness (or patient endurance) is the quality that holds on under pressure, that does not let go of faith when circumstances are difficult or when the enemies of the gospel apply force. It is the quality that the recipients of 2 Peter would need most as false teachers arose and persecution increased. Godliness follows &mdash; the deep reverence for God, the orientation of the whole life toward him, that makes a person recognizably different from the world around them. It is not mere outward religiosity but an inward devotion that shapes every thought, word, and action.",
      "Brotherly affection and love complete the ladder. Brotherly affection (&lsquo;philadelphia&rsquo;) is the warm, familial love that believers owe one another as members of the same spiritual family. It is particular and relational &mdash; the love that knows people by name and cares about their specific needs and struggles. Love (&lsquo;agape&rsquo;) is the broadest and deepest word for love in the New Testament vocabulary &mdash; the self-giving, other-centered love that seeks the good of the beloved without condition or limit, and that extends even to enemies. It is the love of God himself, shed abroad in believing hearts by the Holy Spirit.",
      "The consequence of possessing and growing in these qualities is described in verses 8&ndash;9 with striking clarity. Those who have them and grow in them will be neither &ldquo;ineffective nor unfruitful&rdquo; in the knowledge of Christ &mdash; their lives will show the productivity of a faith that is alive and working. But those who lack them are &ldquo;so nearsighted that they are blind,&rdquo; having forgotten that they were cleansed from their former sins. Spiritual blindness in this passage is not the blindness of the unconverted but the practical blindness of the believer who has stopped growing &mdash; who has the provision but is not appropriating it, who has been cleansed but has forgotten the cleansing. The ladder of virtue is Peter&rsquo;s remedy for a nearsighted faith.",
    ],
  },
  {
    id: "Confirming Your Calling",
    heading: "Confirming Your Calling and Election",
    reference: "2 Peter 1:10&ndash;15",
    paragraphs: [
      "Peter follows his description of the ladder of virtue with a direct pastoral charge: &ldquo;Therefore, brothers, be all the more diligent to confirm your calling and election, for if you practice these qualities you will never fall&rdquo; (1:10). The word &ldquo;confirm&rdquo; carries the sense of making firm, establishing, providing a secure basis for. Peter is not suggesting that a believer&rsquo;s calling and election are uncertain in God&rsquo;s mind or subject to human approval; he is saying that the practice of the virtues enumerated in verses 5&ndash;7 provides the believer with subjective assurance and public demonstration that their calling is real.",
      "The connection between the virtues and the confirmation of calling is important for understanding how Peter thinks about assurance. Assurance of salvation is not primarily a matter of correctly recalling a past decision or locating a spiritual experience in one&rsquo;s memory. It is a present, ongoing reality that is confirmed by the present, ongoing evidence of a life being transformed by the grace of God. The believer who is growing in virtue, in knowledge, in self-control, in love &mdash; that believer has increasing confidence that their faith is genuine, because genuine faith produces genuine fruit.",
      "The promise attached to diligent practice of these virtues is remarkable: &ldquo;you will never fall.&rdquo; This is not a promise of sinless perfection in this life, but of spiritual stability &mdash; the firm-footed quality of a life that is building on the right foundation and drawing on the right resources. The believer who is making every effort to supplement faith with all these qualities has a secure footing precisely because they are working from the abundance that God has already provided rather than trying to generate spiritual capital from their own depleted reserves.",
      "The outcome of such a life is equally striking: &ldquo;there will be richly provided for you an entrance into the eternal kingdom of our Lord and Savior Jesus Christ&rdquo; (1:11). The word &ldquo;richly&rdquo; echoes the word &ldquo;richly&rdquo; of 2:1 in a different context, but here it speaks of abundance, generosity, a welcome that is full rather than minimal. The picture is of arriving at the consummation of all things not as a barely surviving remnant but as one who has run the race and received the full welcome of the King whose servant one has been.",
      "Peter then shifts to explain why he is writing these things even to people who already know them. &ldquo;I think it right, as long as I am in this body, to stir you up by way of reminder&rdquo; (1:13). The calling of the pastor and teacher is not always to introduce new information; sometimes it is to remind people of what they already know but have allowed to slip from the center of their attention. The truths of verses 3&ndash;4 &mdash; that everything needed for life and godliness has already been given &mdash; are truths that every believer nominally holds but few consistently live from. Peter&rsquo;s ministry to these congregations is a ministry of re-centering, of bringing the known back to the fore.",
      "His urgency is sharpened by his awareness of his own imminent death &mdash; made known to him, he says, by &ldquo;our Lord Jesus Christ&rdquo; himself (1:14). This awareness does not produce despair but a focused pastoral energy. He is not writing to achieve something for himself; he is writing so that &ldquo;after my departure you may be able at any time to recall these things&rdquo; (1:15). The letter itself is his legacy &mdash; a permanent, accessible reminder of the things that matter most, written so that future generations of believers can return to it whenever they need to be stirred up. In that sense, 2 Peter 1 is a gift from a dying man to the church of every age.",
    ],
  },
  {
    id: "Divine Origin of Scripture",
    heading: "The Divine Origin of Scripture",
    reference: "2 Peter 1:16&ndash;21",
    paragraphs: [
      "The final movement of 2 Peter 1 is one of the most important passages in all of Scripture for understanding the nature and authority of the Bible. Peter begins by distinguishing his message from the &ldquo;cleverly devised myths&rdquo; that false teachers purvey: &ldquo;For we did not follow cleverly devised myths when we made known to you the power and coming of our Lord Jesus Christ, but we were eyewitnesses of his majesty&rdquo; (1:16). The apostolic proclamation is grounded in historical reality, not religious fiction. Peter was there. He saw it.",
      "What he saw was the Transfiguration. On &ldquo;the holy mountain&rdquo; he, James, and John witnessed Jesus transfigured before them, his face shining like the sun and his clothes becoming dazzling white. And they heard the voice from the Majestic Glory: &ldquo;This is my beloved Son, with whom I am well pleased&rdquo; (1:17; cf. Matthew 17:1&ndash;5). For Peter, this was not a vision or a dream; it was an event in space and time, witnessed by multiple people, and its content was unambiguous &mdash; Jesus is the Son of God, beloved by the Father and approved by heaven.",
      "But Peter then does something unexpected. Having established his eyewitness credentials, he immediately points his readers away from even that remarkable experience to something he considers even more reliable: &ldquo;And we have the prophetic word more fully confirmed, to which you will do well to pay attention as to a lamp shining in a dark place, until the day dawns and the morning star rises in your hearts&rdquo; (1:19). The prophetic word of Scripture is described as &ldquo;more fully confirmed&rdquo; &mdash; not superseded by, but confirmed by, the Transfiguration. And it is described as a lamp in a dark place, the indispensable light by which believers find their way until Christ returns in full glory.",
      "The instruction to pay attention to Scripture &ldquo;as to a lamp shining in a dark place&rdquo; is a corrective to the false teachers who will appear in chapter 2 and who effectively extinguish the lamp by replacing Scripture&rsquo;s authority with their own. But it is also an instruction for every believer in every age. The world is a dark place &mdash; morally, spiritually, epistemologically. The human heart is prone to confusion, self-deception, and the distorting influence of desire. In such a world, the prophetic word serves as the only reliable light, not because it makes life easy or answers every question, but because it illumines the path that leads to life.",
      "Then comes the culminating declaration about the origin of that prophetic word: &ldquo;knowing this first of all, that no prophecy of Scripture comes from someone&rsquo;s own interpretation. For no prophecy was ever produced by the will of man, but men spoke from God as they were carried along by the Holy Spirit&rdquo; (1:20&ndash;21). The negative is stated first: Scripture does not originate in human interpretation or human willing. It is not the product of the prophet&rsquo;s own insight, however profound. The false teachers who offer their own interpretations as authoritative are doing precisely what Scripture itself rules out.",
      "The positive statement is equally powerful: &ldquo;men spoke from God as they were carried along by the Holy Spirit.&rdquo; The metaphor of being &ldquo;carried along&rdquo; (&lsquo;pheromenoi&rsquo;) is used in Acts 27:15 and 17 of a ship driven along by the wind. The ship is real; it has its own structure, its own character, its own history. But the power driving it is not its own. In the same way, the human authors of Scripture were real &mdash; they wrote in their own words, with their own styles, out of their own historical situations &mdash; but the impulse, direction, and authority of what they wrote came from God himself, through the agency of his Spirit. Scripture is therefore simultaneously fully human and fully divine, and as such supremely and permanently authoritative for the life and faith of every believer.",
    ],
  },
  {
    id: "Application",
    heading: "Applying 2 Peter 1 Today",
    reference: "2 Peter 1 &mdash; For the Life of the Church",
    paragraphs: [
      "The opening declaration of 2 Peter 1 &mdash; that God has already granted everything needed for life and godliness &mdash; is one of the most practically liberating truths in the New Testament, and also one of the most consistently underappreciated. Many Christians live as though the Christian life were an uphill effort to accumulate spiritual resources they do not yet possess, a constant state of spiritual deficit management. Peter&rsquo;s word to such believers is direct: you already have everything you need. The provision is complete. The question is not whether God has supplied enough; the question is whether you are living from what he has given.",
      "The ladder of virtue in verses 5&ndash;7 provides one of the most useful frameworks in all of Scripture for intentional Christian growth. It is not a checklist to be completed or a hierarchy to be climbed; it is a description of a life in which each quality enriches and deepens the one before it. Practically, this suggests that Christian discipleship should be attentive to the full range of these qualities: Am I growing in moral courage (virtue)? Am I deepening my understanding of God and his ways (knowledge)? Am I exercising mastery over my desires (self-control)? Am I holding on under pressure (steadfastness)? Am I living in reverence before God (godliness)? Am I genuinely warm toward my brothers and sisters in Christ (brotherly affection)? Am I learning to give myself in the unconditioned way that Christ gave himself (love)?",
      "The teaching on the confirmation of calling in verses 10&ndash;11 has important implications for how we address the question of assurance within the church. Peter does not offer assurance by appealing to a past decision, a prayer prayed, or a box ticked. He grounds assurance in the present, growing evidence of a life being shaped by the virtues of verses 5&ndash;7. This does not mean that assurance is impossible or that it must wait until perfection is achieved; it means that genuine assurance grows as genuine faith grows and genuine fruit appears. The pastor who cares for anxious or doubting believers will do well to ask not only &ldquo;when did you believe?&rdquo; but also &ldquo;what does your faith look like now?&rdquo; and to invite the anxious believer into the diligent practice of the ladder of virtue.",
      "Peter&rsquo;s insistence that Scripture is more reliable than even the most spectacular religious experience is a word the contemporary church deeply needs. There is a persistent tendency to elevate personal experience, dramatic encounters, and charismatic authority above the steady, patient study and application of Scripture. Peter &mdash; a man who had arguably the most spectacular religious experience in human history at the Transfiguration, and who still points his readers to Scripture as the more reliable word &mdash; inverts this tendency entirely. The lamp shining in a dark place is not a dramatic vision or a powerful preacher; it is the prophetic word of God, tested across centuries and confirmed by the life, death, and resurrection of the Son of God himself.",
      "The doctrine of Scripture in verses 20&ndash;21 has direct bearing on how the church reads and preaches the Bible. If no prophecy of Scripture came from the prophet&rsquo;s own interpretation, then no Scripture should be treated as the mere personal reflection of a historical individual. The whole of Scripture, in every part, comes from God through the Spirit. This means that every page of the Bible, including the difficult, the strange, and the uncomfortable, is worthy of patient attention, because the Spirit who inspired it is still at work through it. The preacher who dismisses a text as culturally conditioned or historically limited is, in Peter&rsquo;s framework, in danger of making the same error as the false teachers who substitute their own authority for the word of God.",
      "Finally, Peter&rsquo;s pastoral urgency in writing these things down so that his readers &ldquo;may be able at any time to recall these things&rdquo; after his death (1:15) is a model for every generation of Christian teachers. The best pastoral work is the work that keeps pointing people back to what is permanent and unshakeable &mdash; the knowledge of Christ, the divine promises, the prophetic word &mdash; rather than tying people to the teacher&rsquo;s own personality or presence. Peter is preparing his congregations to outlive him, not by making themselves dependent on him, but by anchoring themselves to the word that endures when all teachers have passed. That word is the lamp; the preacher is at best the lampstand.",
    ],
  },
];

const videoItems = [
  { videoId: "WhP7APA7TMs", title: "2 Peter 1 - Everything for Life and Godliness" },
  { videoId: "akBbFNmBBFM", title: "BibleProject - Overview of 1-2 Peter" },
  { videoId: "CRo3PAQDP2E", title: "The Ladder of Virtue in 2 Peter 1 - Sermon and Study" },
  { videoId: "T9WU3f_VKIY", title: "Divine Inspiration of Scripture - 2 Peter 1:20-21 Explained" },
];

export default function TwoPeter1GuidePage() {
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
            2 Peter 1 &mdash; Life, Godliness, and Scripture
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Peter declares that God has already granted everything needed for life and godliness through the knowledge of Christ, urges believers to add virtue upon virtue from faith to love, and anchors the whole of Christian life in the prophetic word &mdash; written by holy men carried along by the Holy Spirit.
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

        {currentSection && activeTab !== "Videos" && (
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

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of 2 Peter 1 through these video teachings on the divine provision for life and godliness, the ladder of virtue, the confirmation of calling and election, and the divine origin of Scripture.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Lamp in a Dark Place</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            2 Peter 1 is the testimony of an apostle who has seen the glory of Christ on the mountain and who still points his readers, above all else, to the prophetic word of Scripture as their surest light. Built on the foundation that God has already given everything needed for life and godliness, supplemented by the disciplined cultivation of virtue, confirmed by the practice of a growing faith, and anchored in a Scripture breathed out by God through his Spirit &mdash; this is the shape of a Christian life that will never fall and that will receive a rich welcome into the eternal kingdom.
          </p>
        </div>
      </main>
    </div>
  );
}
