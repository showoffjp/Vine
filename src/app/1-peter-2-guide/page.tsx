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
  "The Living Stone",
  "A Royal Priesthood",
  "Holy Nation",
  "Living Among Unbelievers",
  "Christ's Example",
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
    heading: "Overview of 1 Peter 2",
    reference: "1 Peter 2:1&ndash;25",
    paragraphs: [
      "First Peter 2 stands at the heart of Peter&rsquo;s letter to scattered Christian communities throughout Asia Minor, communities living as &ldquo;strangers in the world&rdquo; (1:1) under social pressure and potential persecution. Having established in chapter 1 the magnificent inheritance that belongs to the reborn children of God, Peter now moves into the practical and theological implications of that identity. Chapter 2 unfolds in two great movements: the identity of God&rsquo;s people (vv. 1&ndash;10) and the conduct of God&rsquo;s people in the world (vv. 11&ndash;25).",
      "The chapter opens with a call to put away all malice, deceit, hypocrisy, envy, and slander &mdash; the relational toxins that corrode the community of the new birth. In their place, believers are urged to crave &ldquo;pure spiritual milk&rdquo; (2:2) as newborn infants crave the nourishment that sustains their life. The image is striking: no matter how long someone has been a Christian, growth in grace requires the same fundamental dependence on the Word that a newborn has on its mother&rsquo;s milk.",
      "Peter then introduces the central metaphor of the passage: Christ as the Living Stone, rejected by humanity but chosen and precious to God. Those who come to him become living stones themselves, built together into a spiritual house. This architectural image does double duty &mdash; it speaks both of the church as a building (a dwelling place for God&rsquo;s Spirit) and as a priesthood (a community offering spiritual sacrifices). The two ideas are inseparable: the structure and the service belong together.",
      "The transition from identity to conduct comes at verse 11, where Peter addresses his readers as &ldquo;foreigners and exiles&rdquo; &mdash; a phrase that captures their dual citizenship in the world and in the kingdom of God. The social ethics that follow (submission to governing authorities, honorable conduct among unbelievers, the example of Christ&rsquo;s suffering) all flow from this identity. Those who know who they are can afford to live generously and patiently in a world that does not yet recognize them.",
      "The chapter closes with one of the most theologically rich Christological passages in the New Testament: a meditation on Christ as the suffering Servant who &ldquo;bore our sins in his body on the tree&rdquo; (2:24). The suffering that Peter calls believers to endure patiently is not meaningless; it is participation in the pattern laid down by their Shepherd and Overseer, who entrusted himself to the One who judges justly.",
    ],
  },
  {
    id: "The Living Stone",
    heading: "Coming to the Living Stone",
    reference: "1 Peter 2:4&ndash;8",
    paragraphs: [
      "The passage pivots on a single act: &ldquo;As you come to him&rdquo; (2:4). Coming to Christ is not a one-time event buried in the past; the present participle suggests an ongoing approach, a continuous drawing near to the one who is the Living Stone. This language echoes the approach to the Temple in the Old Testament &mdash; the worshipper drawing near to the place where God dwells &mdash; but now the &ldquo;place&rdquo; is a person. Jesus is not the location of God&rsquo;s presence; he is God&rsquo;s presence.",
      "Peter applies to Jesus a description that appears nowhere in the Old Testament of any human being: he is a &ldquo;living stone.&rdquo; Stones are, by definition, not alive. The oxymoron is deliberate. Jesus is a stone in the sense of being the foundation and cornerstone on which everything else rests &mdash; but he is living because death could not hold him. The resurrection is implicit in the phrase. The cornerstone that the builders rejected has been vindicated by the One who raised him from the dead.",
      "Three Old Testament texts converge in this passage, all of them originally referring to stone: Isaiah 28:16 (&ldquo;See, I lay a stone in Zion, a chosen and precious cornerstone&rdquo;), Psalm 118:22 (&ldquo;The stone the builders rejected has become the cornerstone&rdquo;), and Isaiah 8:14 (&ldquo;a stone that causes people to stumble and a rock that makes them fall&rdquo;). Peter weaves them together to make a single argument: the rejection of Jesus by the religious leaders of Israel was not an accident of history. It was the fulfillment of Scripture &mdash; and God&rsquo;s response to rejection was not defeat but vindication.",
      "The contrast between the two responses to the stone is stark and searching: &ldquo;Now to you who believe, this stone is precious. But to those who do not believe &mdash; the stone the builders rejected has become the cornerstone, and a stone that causes men to stumble and a rock that makes them fall&rdquo; (2:7&ndash;8). The same stone that is the foundation of salvation for those who trust in Christ is the occasion of judgment for those who reject him. The difference lies not in the stone but in the response of those who encounter it.",
      "The phrase &ldquo;chosen by God and precious to him&rdquo; (2:4) describes the Living Stone and, by extension, those who come to him. In a world where the early Christians were rejected, marginalized, and sometimes persecuted, this declaration carried enormous pastoral weight. To be spurned by human society was painful; to know that the one rejected by the builders was chosen and precious to God &mdash; and that in him, so were they &mdash; was a foundation that no social pressure could undermine.",
      "The theological implication for the church is profound. If Jesus himself is the stone that the builders &mdash; the religious authorities, the cultural gatekeepers, the power brokers of his day &mdash; rejected, then the church should not be surprised when it too faces rejection. To be built on the rejected-and-vindicated stone is to share in both the rejection and the vindication. Peter is not preparing his readers for comfort; he is preparing them for faithfulness in the face of exactly the kind of opposition that their Lord himself endured.",
    ],
  },
  {
    id: "A Royal Priesthood",
    heading: "A Royal Priesthood",
    reference: "1 Peter 2:5, 9",
    paragraphs: [
      "Peter&rsquo;s description of believers as &ldquo;a holy priesthood&rdquo; (2:5) and &ldquo;a royal priesthood&rdquo; (2:9) draws on Exodus 19:6, where God described Israel at Sinai as &ldquo;a kingdom of priests and a holy nation.&rdquo; The transfer of this language to the church is not a replacement of Israel but a fulfillment of Israel&rsquo;s calling. The people of the new covenant, constituted by the shed blood of Christ rather than the blood of Passover lambs, now embody the priestly vocation that was always the intention of the covenant people.",
      "What does it mean for the entire community to be priests? In ancient Israel, the Levitical priesthood served as mediators between God and the people, offering sacrifices that maintained the covenant relationship. Their role was exclusive and hereditary. But the death of Christ, which tore the Temple veil from top to bottom, opened direct access to the Father for every believer. The priest who stands between God and humanity is now Christ himself, the one High Priest whose single sacrifice accomplished what the entire Levitical system only prefigured. Because every believer is united to him, every believer shares in his priestly standing.",
      "The sacrifices that this holy priesthood offers are not animals on an altar; they are &ldquo;spiritual sacrifices acceptable to God through Jesus Christ&rdquo; (2:5). Peter does not specify exactly what these sacrifices consist of, but the New Testament elsewhere fills in the picture: prayer (Revelation 8:3&ndash;4), praise (Hebrews 13:15), the body presented in faithful obedience (Romans 12:1), financial generosity (Philippians 4:18), and proclamation of the gospel (Romans 15:16). The whole of the Christian life becomes priestly service when it is offered through Christ to the Father.",
      "The juxtaposition of &ldquo;royal&rdquo; and &ldquo;priesthood&rdquo; is striking. Priests and kings occupied distinct roles in the ancient world, and in Israel the mixing of the two offices was a grave offense (see Uzziah in 2 Chronicles 26). But the original Exodus vision was of a people who combined both callings, and the fulfillment of that vision comes in Christ &mdash; the great King-Priest whose royalty and priestly mediation are inseparable (see Hebrews 7, Zechariah 6:13). Those who are in him share in the same combined dignity: servants of God who reign through service rather than domination.",
      "The purpose of the royal priesthood is stated with remarkable clarity: &ldquo;that you may declare the praises of him who called you out of darkness into his wonderful light&rdquo; (2:9). The priestly and royal calling is ultimately doxological &mdash; the whole community exists to proclaim the excellencies of God. This declaration is not confined to formal worship; it encompasses every aspect of the community&rsquo;s common life. The way the community lives together, treats outsiders, responds to injustice and suffering &mdash; all of it is meant to be a declaration of the praises of the God who transforms darkness into light.",
      "For communities under pressure, the identification as a royal priesthood was not primarily a claim to power over others. It was a claim to dignity and purpose in the face of marginalization. The scattered Christians of Asia Minor, regarded by Roman society as superstitious troublemakers, were in Peter&rsquo;s vision a people set apart for God, fulfilling the highest vocation given to human beings: to stand before God on behalf of the world and before the world as witnesses to God. Their social vulnerability did not diminish their dignity; if anything, it gave their priestly service a particular kind of credibility.",
    ],
  },
  {
    id: "Holy Nation",
    heading: "A Holy Nation: God's Special Possession",
    reference: "1 Peter 2:9&ndash;10",
    paragraphs: [
      "The cascade of honorific titles in verse 9 reaches its apex with &ldquo;God&rsquo;s special possession&rdquo; &mdash; a phrase that translates the Greek peripoiesis, a word that carries the sense of something zealously acquired and jealously kept. The same word appears in Isaiah 43:21 (LXX), where God declares of Israel, &ldquo;the people I formed for myself that they may proclaim my praise.&rdquo; The early Christians, many of them Gentiles with no connection to the covenant people of Israel, are here told that they have been claimed by the God of Israel as his own treasured people.",
      "The phrase &ldquo;a holy nation&rdquo; (ethnos hagion) is particularly charged. Ethnos is the Greek word typically used for Gentile nations &mdash; the nations outside the covenant. To call the church &ldquo;a holy nation&rdquo; is to declare that there is now a new ethnos, defined not by blood, language, culture, or geography, but by relationship to the holy God. This is not a national identity in any ordinary sense; it is a transnational community whose membership cuts across every existing boundary of human identity.",
      "The dramatic contrast of verse 10 gives this identity its full emotional weight: &ldquo;Once you were not a people, but now you are the people of God; once you had not received mercy, but now you have received mercy.&rdquo; This is almost certainly an allusion to Hosea 1&ndash;2, where God commanded the prophet to name his children &ldquo;Not My People&rdquo; and &ldquo;Not Loved&rdquo; as a sign of Israel&rsquo;s rejection &mdash; and then promised a future reversal in which &ldquo;Not My People&rdquo; would become &ldquo;My People.&rdquo; Paul had applied this passage to the inclusion of Gentiles in Romans 9:25&ndash;26, and Peter does the same here.",
      "The before-and-after structure of verse 10 maps the experience of conversion onto the largest possible theological canvas. Before Christ, these scattered people from various ethnic backgrounds had no standing before God, no covenant relationship, no mercy &mdash; they were &ldquo;not a people&rdquo; in the most fundamental sense. After Christ, they have been brought near, adopted into the covenant family, and made recipients of the mercy that once seemed impossibly remote. The gospel did not simply improve their situation; it transformed their very identity.",
      "The holiness of the holy nation is not primarily a matter of moral perfectionism. In biblical usage, &ldquo;holy&rdquo; (hagios) means set apart, dedicated, belonging to the sacred rather than the common. The church is holy because it belongs to the Holy One &mdash; not because its members have achieved a particular level of virtue. This distinction matters enormously for Peter&rsquo;s pastoral purpose. He is not setting an impossible standard and then condemning those who fall short; he is declaring an identity that is prior to behavior and that provides the foundation for the transformed behavior he calls for in the verses that follow.",
      "The declaration of identity in verses 9&ndash;10 has practical implications that Peter draws out immediately. People who know they are God&rsquo;s special possession, a holy nation, recipients of mercy beyond what they deserved &mdash; such people have resources for patient endurance, generous conduct, and confident witness that others simply do not possess. The ethics of chapter 2 (and indeed of the entire letter) are grounded not in human effort or willpower but in the transformed self-understanding that the gospel creates. You can live differently because you are different; and you are different because God has made you his own.",
    ],
  },
  {
    id: "Living Among Unbelievers",
    heading: "Living Among Unbelievers",
    reference: "1 Peter 2:11&ndash;17",
    paragraphs: [
      "Peter addresses his readers as &ldquo;dear friends&rdquo; (agapetoi) &mdash; a term of warm affection &mdash; as he pivots from declarations of identity to exhortations for conduct. The combination of &ldquo;foreigners and exiles&rdquo; in verse 11 is significant. These are not two ways of saying the same thing. A foreigner (paroikos) is someone who lives in a place without full civic rights; an exile (parepidemos) is someone passing through on a journey. Together the two terms capture the dual reality of the Christian&rsquo;s existence: we do not fully belong to this world&rsquo;s social order, and we are headed somewhere beyond it.",
      "The first exhortation is negative but foundational: &ldquo;abstain from sinful desires, which wage war against your soul&rdquo; (2:11). The language is deliberately military &mdash; sinful desires are not a nuisance but an enemy force, waging a campaign against the life of the soul. This is not a call to asceticism or world-denial; Peter is not asking his readers to disengage from society. He is calling them to an internal discipline that makes genuine engagement with the world possible without being captured by the world&rsquo;s values.",
      "The positive exhortation follows in verse 12: &ldquo;Live such good lives among the pagans that, though they accuse you of doing wrong, they may see your good deeds and glorify God on the day he visits us.&rdquo; The word translated &ldquo;good lives&rdquo; (anastrophe kalen) is literally &ldquo;beautiful conduct&rdquo; &mdash; a way of life so visibly excellent that it disarms false accusations over time. Peter is under no illusions that good behavior will immediately win universal approval; the believers are already being accused of wrongdoing despite living uprightly. But he holds out the hope that persistent honorable conduct will eventually bear fruit &mdash; even among those who are initially hostile.",
      "The submission to governing authorities in verses 13&ndash;17 has often been misread as a blanket endorsement of the political status quo. In context, it is something more nuanced and more demanding. Peter is calling Christians to submit to human institutions &ldquo;for the Lord&rsquo;s sake&rdquo; &mdash; that is, as an act of obedience to God rather than as recognition that those institutions are always just or beneficial. The purpose is missional: &ldquo;by doing good you should silence the ignorant talk of foolish people&rdquo; (2:15). The church&rsquo;s good citizenship is a form of witness.",
      "The command to &ldquo;honor everyone&rdquo; (2:17) is striking in its universality. It does not say honor those who deserve honor, or honor those who are honorable, or honor those who honor you. It says honor everyone &mdash; the slave owner and the slave, the Roman emperor and the beggar on the street. This is not the natural human impulse, which is to honor those who can reciprocate. It is the impulse of those who know that every human being bears the image of the God who made them and the God who might yet redeem them.",
      "Peter&rsquo;s social ethic in this passage is simultaneously counter-cultural and constructive. It is counter-cultural because it refuses to locate Christian identity in political alignment, social class, or ethnic solidarity &mdash; the usual anchors of identity in the ancient world. It is constructive because it envisions a community whose visible goodness contributes to the social good of the surrounding society, even a society that is sometimes hostile to the faith. The foreigners and exiles are not parasites or revolutionaries; they are, in Peter&rsquo;s vision, the best citizens the empire has, precisely because their deepest loyalty is elsewhere.",
    ],
  },
  {
    id: "Christ's Example",
    heading: "Christ's Example: The Suffering Servant",
    reference: "1 Peter 2:18&ndash;25",
    paragraphs: [
      "Peter turns in verses 18&ndash;25 to the most economically and socially vulnerable members of his audience: household slaves. The instruction to submit to masters, even harsh ones, strikes modern readers as deeply troubling, and it should generate sustained reflection on the relationship between Scripture and the abolition of slavery. But Peter&rsquo;s purpose in this passage is not to endorse the institution of slavery; it is to provide enslaved Christians with a theological framework for enduring unjust suffering that does not destroy their dignity or their faith.",
      "The key concept in the passage is the Greek word charis, usually translated &ldquo;grace&rdquo; or &ldquo;credit.&rdquo; Peter asks what credit it is to endure suffering patiently if you have done wrong and are being punished justly. That is simply consequence. But &ldquo;if you suffer for doing good and you endure it, this is commendable (charis) before God&rdquo; (2:20). The unjust suffering of the innocent has a quality that catches God&rsquo;s attention &mdash; not because God is indifferent to the injustice, but because it reflects the pattern of his own Son&rsquo;s experience.",
      "The explicit appeal to Christ as the model for unjust suffering begins at verse 21: &ldquo;To this you were called, because Christ suffered for you, leaving you an example, that you should follow in his steps.&rdquo; The word translated &ldquo;example&rdquo; (hypogrammos) is a fascinating choice: it refers to the pattern of letters written at the top of a page that students traced over as they learned to write. Christ&rsquo;s life and death are the lines over which believers are called to trace their own lives. This is not imitation in the superficial sense of copying behavior; it is the deep forming of character and response according to the shape of his life.",
      "Peter then quotes extensively and freely from Isaiah 53, the great Servant Song: &ldquo;He committed no sin, and no deceit was found in his mouth. When they hurled their insults at him, he did not retaliate; when he suffered, he made no threats. Instead, he entrusted himself to him who judges justly&rdquo; (2:22&ndash;23). The restraint of Jesus under unjust attack is grounded not in passivity or weakness but in a settled confidence in the justice of the Father. He did not need to defend himself because he trusted the One who judges rightly to vindicate him &mdash; and the resurrection proved that trust to be well founded.",
      "&ldquo;He himself bore our sins&rsquo; in his body on the cross, so that we might die to sins and live for righteousness; by his wounds you have been healed&rdquo; (2:24). This is among the most concise and powerful atonement statements in the New Testament. The suffering of Jesus was not merely exemplary &mdash; it was substitutionary and transformative. He bore what we deserved; we receive what he earned. The healing mentioned is primarily spiritual (the healing of the soul alienated from God by sin) but the holistic language of Isaiah 53 resists any purely individualistic or spiritualized reading.",
      "The passage closes with the tender image of the Shepherd and Overseer: &ldquo;For you were like sheep going astray, but now you have returned to the Shepherd and Overseer of your souls&rdquo; (2:25). The shift from Servant (Isaiah 53) to Shepherd (Isaiah 40, Ezekiel 34) in a single verse is characteristic of Peter&rsquo;s rich use of Old Testament imagery. The one who suffered as a lamb is also the one who tends the flock. Those who follow in his steps by enduring unjust suffering are not abandoned to their pain; they are held by the Shepherd who himself knows the path through suffering to glory, and who tends their souls with a care that surpasses any human oversight.",
    ],
  },
];

const videoItems = [
  { videoId: "pXqPHNfAFH4", title: "1 Peter 2 - Living Stones and a Holy Nation" },
  { videoId: "Rb7cGMjFKtM", title: "A Royal Priesthood - 1 Peter 2 Explained" },
  { videoId: "QnVx3mLgT8w", title: "Christ Our Example in Suffering - 1 Peter 2:18-25" },
  { videoId: "Jk9wXpLmN2s", title: "1 Peter 2 - Identity and Conduct of God's People" },
];

export default function Peter2GuidePage() {
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
            1 Peter 2 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Living stones and a holy nation &mdash; Peter calls scattered believers to embrace their identity as God&rsquo;s chosen people, a royal priesthood built on the Living Stone, and to live such honorable lives among unbelievers that even their opponents may one day glorify God.
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
              Deepen your study of 1 Peter 2 through these video teachings on the Living Stone, the royal priesthood, the holy nation, living honorably among unbelievers, and the example of Christ&rsquo;s suffering.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Once You Were Not a People</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Peter 2 unfolds one of the Bible&rsquo;s most breathtaking declarations of identity &mdash; that ordinary, scattered people from every background have been claimed by God as a chosen race, a royal priesthood, a holy nation. Built on the Living Stone who was rejected and then vindicated, they are called to live with such visible grace among their neighbors that even those who oppose them may one day glorify God.
          </p>
        </div>
      </main>
    </div>
  );
}
