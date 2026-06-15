"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Arm Yourselves for Suffering",
  "Fiery Trials",
  "Gifts for God's Glory",
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
    heading: "1 Peter 4: Living for God&rsquo;s Will",
    reference: "1 Peter 4:1&ndash;19",
    paragraphs: [
      "First Peter 4 stands as one of the most bracing chapters in the New Testament on the theology of Christian suffering. Peter writes to believers scattered throughout the provinces of Asia Minor who are experiencing what he calls a &ldquo;fiery trial&rdquo; &mdash; not the burning of Rome but the grinding social hostility of a pagan world that has noticed these converts no longer join their former companions in the same flood of debauchery. The chapter is not advice for people experiencing mild inconvenience; it is a theology of suffering shaped entirely by the cross and resurrection of Jesus Christ.",
      "The chapter divides naturally into three movements. The first (vv. 1&ndash;6) calls believers to arm themselves with Christ&rsquo;s own attitude toward suffering and to live out their remaining time not for human passions but for the will of God. The old life is over. The second movement (vv. 7&ndash;11) grounds present Christian community in the nearness of the end: because the conclusion of all things is near, the church must be self-controlled, prayerful, deeply loving, hospitable, and gifted &mdash; every member stewarding the grace of God in service to others. The third movement (vv. 12&ndash;19) addresses the fiery trial directly, calling believers to rejoice in sharing Christ&rsquo;s sufferings, to bear the name &ldquo;Christian&rdquo; without shame, and to entrust their souls to a faithful Creator.",
      "Throughout the chapter Peter&rsquo;s christology and his ethic are inseparable. The reason believers can arm themselves against sin is that Christ suffered in the flesh (v. 1). The reason suffering for being a Christian is cause for blessing is that the Spirit of glory and of God rests on the sufferer (v. 14). The reason final judgment is not terrifying but clarifying is that judgment begins at the household of God, and the righteous are scarcely saved &mdash; an awareness that produces not presumption but humble, faithful endurance.",
      "Peter&rsquo;s letter as a whole has been called a theology of hope for the suffering church, and chapter 4 is its sharpest edge. It does not paper over the cost of following Christ in a hostile world. Instead it teaches believers how to think about that cost &mdash; as a participation in Christ&rsquo;s own sufferings that will give way, at the revelation of his glory, to a joy beyond what the present trial can diminish. The chapter ends not with escape from suffering but with a confident, active response to it: &ldquo;let those who suffer according to God&rsquo;s will entrust their souls to a faithful Creator while doing good&rdquo; (v. 19).",
      "For the modern reader, 1 Peter 4 reframes suffering in a way that our comfort-seeking culture finds deeply countercultural. Peter does not encourage believers to minimize their experience of pain, to explain it away, or to see it as evidence that something has gone wrong in their Christian life. Rather, he invites them to see their suffering as the very signature of a life genuinely aligned with the crucified and risen Lord &mdash; and to bear it with the kind of sober, loving, gift-exercising, community-building faithfulness that gives glory to God in Christ Jesus.",
    ],
  },
  {
    id: "Arm Yourselves for Suffering",
    heading: "Arm Yourselves with Christ&rsquo;s Mindset",
    reference: "1 Peter 4:1&ndash;6",
    paragraphs: [
      "&ldquo;Since therefore Christ suffered in the flesh, arm yourselves with the same way of thinking&rdquo; (v. 1). The opening verse of chapter 4 is one of the most arresting commands in the New Testament. The word &ldquo;arm&rdquo; is military language &mdash; the same root used for putting on armor. Peter is telling his readers that the suffering of Christ is not merely a theological fact to be admired from a safe distance; it is a weapon to be taken up and carried into the battle against sin. The logic is precise: &ldquo;for whoever has suffered in the flesh has ceased from sin.&rdquo;",
      "This does not mean that physical suffering produces sinlessness in some automatic or mechanical way. Rather, Peter is pointing to a posture &mdash; the posture of the one who has accepted suffering as the cost of obedience. Christ in his suffering was fully committed to the Father&rsquo;s will, refusing to take the easy path of self-preservation. The believer who arms herself with that same mindset &mdash; who accepts that suffering may be the price of faithfulness &mdash; has broken decisively with the controlling power of sin. She is no longer living to avoid pain at any cost. She is living for God.",
      "The contrast Peter draws in verses 2&ndash;3 is stark. The time past of one&rsquo;s life was spent doing what the Gentiles want to do: &ldquo;living in sensuality, passions, drunkenness, orgies, drinking parties, and lawless idolatry&rdquo; (v. 3). This is not abstract vice; it is the actual calendar of Roman social life &mdash; the banquets, the festivals, the cult meals at temple dining rooms, the symposia that slid into excess. Peter&rsquo;s readers had participated in all of this before their conversion, and now they have stopped.",
      "The social consequence of stopping is immediate and painful. Their former companions are &ldquo;surprised when you do not join them in the same flood of debauchery, and they malign you&rdquo; (v. 4). The word for &ldquo;malign&rdquo; is the same root as blasphemy &mdash; these former friends are speaking evil against believers, possibly accusing them of antisocial behavior, disrespect for the gods, or contempt for family and city. The isolation is real. The social cost of conversion in a pagan city was not mild; it touched every level of life &mdash; commerce, friendship, family, civic participation.",
      "Peter&rsquo;s response to this pressure is not sympathy for the accusers but a sober reminder of the eschatological stakes: &ldquo;they will give account to him who is ready to judge the living and the dead&rdquo; (v. 5). The maligning friends and former companions are not the final court of appeal. God is. Their surprise at the believers&rsquo; changed behavior and their contemptuous accusations will one day be laid before the one who judges with perfect justice. This is not a wish for revenge; it is a clarification of who has final authority over how human lives are evaluated.",
      "Verse 6 introduces one of the most debated statements in 1 Peter: &ldquo;For this is why the gospel was preached even to those who are dead, that though judged in the flesh the way people are, they might live in the spirit the way God does.&rdquo; Most likely Peter refers to believers who heard and responded to the gospel before their deaths &mdash; people who were judged and condemned by pagan society (&ldquo;in the flesh the way people are&rdquo;) but who, having believed, live in the spirit according to God&rsquo;s life. Their deaths have not negated the gospel they embraced. Even those who suffer and die for the faith are not lost; they &ldquo;live in the spirit the way God does.&rdquo; The gospel reaches through death itself.",
    ],
  },
  {
    id: "Fiery Trials",
    heading: "The Fiery Trial and the Blessing of Christ&rsquo;s Name",
    reference: "1 Peter 4:12&ndash;19",
    paragraphs: [
      "&ldquo;Beloved, do not be surprised at the fiery trial when it comes upon you to test you, as though something strange were happening to you&rdquo; (v. 12). The word for &ldquo;fiery trial&rdquo; is &ldquo;pyrosis&rdquo; &mdash; literally a burning, a smelting. It is the imagery of refining metal by fire, which removes dross and proves the quality of what remains. Peter is telling his readers that the suffering they are experiencing is not an aberration in the Christian life; it is the normal process of a life that is being proved and purified by God.",
      "What makes verse 12 remarkable is Peter&rsquo;s command not to be &ldquo;surprised&rdquo; (xenizesthe &mdash; the same word used earlier for the pagans being &ldquo;surprised&rdquo; that the believers no longer join their debauchery). There is an irony here: the world is surprised that Christians have stopped sinning, and the Christians are surprised that they are suffering for it. Peter wants to reverse the second surprise without restoring the first. Suffering for faithfulness is not strange; it is to be expected by anyone who takes seriously the pattern of Christ himself.",
      "The theological hinge of the passage is verse 13: &ldquo;But rejoice insofar as you share Christ&rsquo;s sufferings, that you may also rejoice and be glad when his glory is revealed.&rdquo; Peter does not call believers to rejoice &mdash;in a masochistic way &mdash; in pain itself. He calls them to rejoice in the sharing &mdash; the fellowship, the participation &mdash; in Christ&rsquo;s sufferings. Their suffering has located them on the same trajectory as their Lord. And that trajectory does not end in pain; it ends in the revelation of Christ&rsquo;s glory, at which point the rejoicing that is now possible in seed form will flower into fullness.",
      "Verse 14 introduces a startling beatitude: &ldquo;If you are insulted for the name of Christ, you are blessed, because the Spirit of glory and of God rests upon you.&rdquo; This is one of the most remarkable statements in the New Testament about the experience of persecution. The insult &mdash; the public shaming, the contemptuous speech against the believer because of the name of Christ &mdash; is the occasion not for divine absence but for divine presence. The Spirit of glory, the same shekinah-glory presence associated with the temple and with Christ himself, rests upon the one who is being reviled. The world thinks it is humiliating the believer; God sees it differently.",
      "Verses 15&ndash;16 sharpen the distinction between suffering as a Christian and suffering as an evildoer. &ldquo;But let none of you suffer as a murderer or a thief or an evildoer or as a meddler. Yet if anyone suffers as a Christian, let him not be ashamed, but let him glorify God in that name.&rdquo; This is one of only three uses of the word &ldquo;Christian&rdquo; in the New Testament (the others are in Acts 11:26 and 26:28). The name appears to have originated as a label applied from outside &mdash; by Roman authorities or pagan neighbors &mdash; identifying these people as followers of the &ldquo;Christos.&rdquo; Peter picks up that external label and transforms it: if you suffer for bearing that name, bear it without shame and use it to glorify God.",
      "The passage closes with one of the most searching statements in the letter (vv. 17&ndash;18): &ldquo;For it is time for judgment to begin at the household of God; and if it begins with us, what will be the outcome for those who do not obey the gospel of God? And if the righteous person is scarcely saved, where will the ungodly and the sinner appear?&rdquo; Peter is drawing on Ezekiel 9, where God&rsquo;s judgment on Jerusalem begins at the sanctuary with the elders. The suffering of the church is God&rsquo;s purifying judgment on his own household &mdash; a sign not of abandonment but of fatherly discipline. And if even the righteous person is &ldquo;scarcely saved&rdquo; &mdash; saved through fire, with great difficulty, through the cross and its costly grace &mdash; then the position of those who refuse the gospel is not merely difficult but hopeless. This is meant to produce in the believer not arrogance but gravity, and in the sufferer not despair but confidence in the faithful Creator.",
      "The final verse (v. 19) is the pastoral conclusion: &ldquo;Therefore let those who suffer according to God&rsquo;s will entrust their souls to a faithful Creator while doing good.&rdquo; Three things anchor the suffering believer. First, their suffering is &ldquo;according to God&rsquo;s will&rdquo; &mdash; it is within the frame of providence, not outside it. Second, the one to whom they entrust their souls is a &ldquo;faithful Creator&rdquo; &mdash; the one who made them and who has never abandoned what he has made. Third, the response is not passive endurance but active goodness: &ldquo;while doing good.&rdquo; The suffering Christian is not called merely to survive; she is called to keep doing good in the middle of the trial.",
    ],
  },
  {
    id: "Gifts for God's Glory",
    heading: "Love, Hospitality, and Gifts for God&rsquo;s Glory",
    reference: "1 Peter 4:7&ndash;11",
    paragraphs: [
      "&ldquo;The end of all things is near&rdquo; (v. 7a). This single declaration shapes everything that follows in verses 7&ndash;11. Peter is not engaging in idle eschatological speculation; he is drawing out the practical, communal, ethical implications of living at the end of the age. The &ldquo;end of all things&rdquo; is not a scare tactic to produce panic but a framework to produce a certain quality of life &mdash; focused, loving, generous, gift-oriented, and deeply communal.",
      "The first implication is for the individual inner life: &ldquo;therefore be self-controlled and sober-minded for the sake of your prayers&rdquo; (v. 7b). The words &ldquo;self-controlled&rdquo; (sophronesate) and &ldquo;sober-minded&rdquo; (nepsate) both carry the sense of clear-headed, unintoxicated alertness. They are the opposite of the drunkenness and passion described in verse 3. The believer living at the end of the age is not someone who is frantically preparing for apocalypse; she is someone whose mind is clear enough to pray &mdash; to maintain the fundamental stance of dependence on God that prayer represents.",
      "The second implication moves from inner life to community: &ldquo;Above all, keep loving one another earnestly, since love covers a multitude of sins&rdquo; (v. 8). The phrase &ldquo;above all&rdquo; signals that Peter is identifying the central organizing reality of Christian community. The love he calls for is &ldquo;earnest&rdquo; (ekten&ecirc;) &mdash; a word that describes the stretched-out intensity of a runner straining toward the finish line or a bow drawn to its full tension. This is not the casual goodwill of pleasant acquaintances; it is the strenuous, persistent, costly love of people who have committed themselves to one another.",
      "The phrase &ldquo;love covers a multitude of sins&rdquo; is drawn from Proverbs 10:12 (&ldquo;Hatred stirs up strife, but love covers all offenses&rdquo;) and appears also in James 5:20. In context it means that fervent love within the community does not keep a ledger of wrongs; it absorbs injury, forgives offense, and enables continued fellowship rather than allowing every fault and failure to fracture relationship. Given the external pressure the community was under &mdash; hostility from the surrounding culture, the social cost of their changed behavior &mdash; internal unity was not a luxury but a survival necessity. Love that covers sins is the glue that holds the persecuted community together.",
      "Verse 9 brings a third implication, startling in its specificity: &ldquo;Show hospitality to one another without grumbling.&rdquo; In the ancient world, hospitality (philoxenia, literally &ldquo;love of the stranger&rdquo;) was more than a social nicety; it was a survival mechanism. Traveling Christians &mdash; missionaries, those fleeing persecution, those carrying letters between churches &mdash; depended on the homes of fellow believers for shelter, food, and safe haven. Peter knows that genuine hospitality is costly: it intrudes on privacy, requires real resources, and can become burdensome. Hence the qualifier: without grumbling. The open home is to be a freely given gift, not a reluctant obligation performed with visible resentment.",
      "Verses 10&ndash;11 bring the section to its peak with the theology of spiritual gifts. &ldquo;As each has received a gift, use it to serve one another, as good stewards of God&rsquo;s varied grace.&rdquo; Every believer has received a gift; no one is without one. The gifts are not possessions belonging to the recipients but stewardships of &ldquo;God&rsquo;s varied grace&rdquo; &mdash; the word &ldquo;varied&rdquo; (poikilos) means multi-colored, many-faceted. God&rsquo;s grace is not monotone; it expresses itself in a rich diversity of gifts distributed across the community.",
      "Peter then divides the gifts into two broad streams. &ldquo;Whoever speaks, as one who speaks oracles of God&rdquo; (v. 11a). The spoken gifts &mdash; preaching, teaching, prophecy, exhortation &mdash; are to be exercised with a sober recognition of their weight. The one who speaks in the church is not merely sharing opinions or personal insights; he is handling &ldquo;oracles of God&rdquo; (logia theou) &mdash; the authoritative word of the living God. This demands both faithfulness to the content and humility about the source. The second stream: &ldquo;whoever serves, as one who serves by the strength that God supplies&rdquo; (v. 11b). Service in all its practical forms &mdash; the hospitality of verse 9, care for the poor, administration, acts of mercy &mdash; is to be done in the consciousness that the energy enabling it is not one&rsquo;s own natural capacity but God&rsquo;s empowering grace.",
      "The purpose clause that closes verse 11 is the crown of the whole section: &ldquo;in order that in everything God may be glorified through Jesus Christ. To him belong glory and dominion forever and ever. Amen.&rdquo; Every gift, every act of hospitality, every expression of earnest love, every self-controlled prayer at the end of the age &mdash; all of it is oriented toward a single end: the glory of God through Jesus Christ. The doxology that closes the section is not an afterthought; it is the goal that makes everything in the section coherent. The community under pressure is not primarily a survival society; it is a community of worshipers whose life together, in all its love and gift and prayer and hospitality, is one long act of praise.",
    ],
  },
];

const videoItems = [
  { videoId: "OkRmVHd5o44", title: "1 Peter 4 - Suffering for Christ and Living for God" },
  { videoId: "YSI5_EFUhVY", title: "The Fiery Trial - What 1 Peter Says About Persecution" },
  { videoId: "fSfygALZpJ4", title: "Spiritual Gifts and Serving God's Grace - 1 Peter 4:10-11" },
  { videoId: "M2VJbwKS3_4", title: "Judgment Beginning at the House of God - 1 Peter 4 Explained" },
];

export default function OnePeterFourGuidePage() {
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
            1 Peter 4
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Arm yourselves with Christ&rsquo;s mindset toward suffering, live for God&rsquo;s will rather than human passions, rejoice in the fiery trial as a sharing in Christ&rsquo;s sufferings, and steward your gifts for God&rsquo;s glory &mdash; because the end of all things is near.
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

        <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {videoItems.map((v) => (
            <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId={v.videoId} title={v.title} />
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Entrust Your Soul to a Faithful Creator</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Peter 4 calls the church to arm itself with Christ&rsquo;s own attitude toward suffering, to love earnestly, to exercise gifts as stewards of God&rsquo;s grace, and to endure the fiery trial not as something strange but as a participation in Christ&rsquo;s own path &mdash; a path that leads, through the revelation of his glory, to rejoicing beyond what the present trial can diminish. The chapter ends where faithfulness always ends: doing good, and entrusting oneself to the God who is faithful.
          </p>
        </div>
      </main>
    </div>
  );
}
