"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Our Earthly Tent and Heavenly Home",
  "Walk by Faith Not by Sight",
  "The Judgment Seat of Christ",
  "New Creation and Reconciliation",
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
    heading: "Overview of 2 Corinthians 5",
    reference: "2 Corinthians 5:1&ndash;21",
    paragraphs: [
      "Second Corinthians 5 stands at the theological center of Paul&rsquo;s most personally revealing letter. Writing to a church that has questioned his authority and endured its share of doubt, Paul opens this chapter with a breathtaking vision of what awaits the believer beyond death and unfolds a gospel of cosmic reconciliation. The chapter moves from the intimate &mdash; a single human body groaning in its fragility &mdash; to the universal: God reconciling the whole world to himself through Christ. Few passages in the New Testament compress so much theology into so short a space.",
      "The chapter divides naturally into three movements. First, Paul reflects on the body as a temporary tent, a fragile earthly dwelling that will one day be exchanged for a permanent heavenly home (vv. 1&ndash;10). The groaning the believer feels in this life is not despair but longing &mdash; the longing of a creature made for more than what the present world can offer. Second, Paul articulates the posture that sustains life in this in-between time: &ldquo;We walk by faith, not by sight&rdquo; (v. 7). The visible world is not ultimate; what cannot be seen is eternal. Third, Paul announces the great theme of the chapter&rsquo;s second half: God was in Christ reconciling the world to himself, and those who have received reconciliation are now sent as ambassadors, bearing the appeal of God to a world still estranged from him.",
      "What gives the chapter its extraordinary emotional force is the way Paul holds these cosmic realities alongside his own vulnerability. He knows what it is to have his body treated as a tent &mdash; beaten, shipwrecked, sleepless, homeless. He knows the weight of appearing before the judgment seat of Christ, knowing the fear of the Lord. He knows the compulsion of the love of Christ, which has taken hold of his life with such force that he can no longer live for himself. The theology of 2 Corinthians 5 is not abstraction; it is the hard-won conviction of a man whose life has been remade by the gospel he preaches.",
      "The chapter&rsquo;s climax comes in three of the most theologically dense verses in all of Paul&rsquo;s letters. &ldquo;If anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come&rdquo; (v. 17). &ldquo;God was in Christ reconciling the world to himself, not counting their trespasses against them, and entrusting to us the message of reconciliation&rdquo; (v. 19). And the breathtaking final verse: &ldquo;For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God&rdquo; (v. 21). Here is the whole gospel in a sentence: the sinless one made sin, the sinful ones made righteous, the transaction accomplished at the cross that makes new creation possible.",
      "To read 2 Corinthians 5 is to stand at the intersection of the personal and the cosmic, the present groaning and the coming glory, the fragile body and the eternal dwelling, the individual sinner and the reconciled world. Paul&rsquo;s argument moves with a missionary urgency because for him the gospel is not a proposition to be admired but a reconciliation to be received and announced. The one who has been made a new creation cannot stay silent; the minister of reconciliation cannot rest while the world remains estranged from the God who has gone to such lengths to draw it home.",
    ],
  },
  {
    id: "Our Earthly Tent and Heavenly Home",
    heading: "Our Earthly Tent and Heavenly Home",
    reference: "2 Corinthians 5:1&ndash;5",
    paragraphs: [
      "Paul opens the chapter with a striking image: the human body is a tent &mdash; &ldquo;our earthly tent&rdquo; (v. 1). Tents are temporary structures. They are suited to sojourners, pilgrims, people on a journey who have not yet arrived at their permanent dwelling. To describe the body as a tent is to locate the believer in the long biblical tradition of those who dwell on earth as strangers and exiles, as the patriarchs did when they lived in tents in the promised land, confessing that they were looking for a city that has foundations, whose designer and builder is God (Hebrews 11:10).",
      "When this earthly tent is &ldquo;destroyed&rdquo; &mdash; that is, when the body dies &mdash; Paul is not describing an ending but a transition. &ldquo;We have a building from God, a house not made with hands, eternal in the heavens&rdquo; (v. 1). The contrast is absolute: the tent is earthly, temporary, made by human hands; the building is from God, eternal, heavenly. The resurrection body Paul envisions is not a wispy, disembodied existence but something more solid and more real than the present body &mdash; a dwelling that will never need to be struck and packed away.",
      "Yet the transition is not without pain. &ldquo;For in this tent we groan&rdquo; (v. 2). Paul does not pretend that the present experience of embodied life is painless. He has catalogued his own sufferings in this letter with searing honesty: beaten, stoned, imprisoned, shipwrecked, cold, hungry, anxious for all the churches (11:23&ndash;29). The groaning is real. But it is the groan of longing rather than despair &mdash; &ldquo;longing to put on our heavenly dwelling&rdquo; (v. 2). There is an ache in the believer&rsquo;s heart that the present world cannot satisfy, because the believer has been made for more than this world currently offers.",
      "Paul draws a careful distinction between being &ldquo;unclothed&rdquo; &mdash; the naked state of the soul separated from any body at death &mdash; and being &ldquo;further clothed&rdquo; with the heavenly dwelling. He does not say he longs to be unclothed; he longs for the heavenly clothing to be put on over the earthly. His hope is not the escape of the soul from the body but the transformation of the body &mdash; &ldquo;so that what is mortal may be swallowed up by life&rdquo; (v. 4). The mortality that now clings to human existence will be absorbed into the life that death cannot touch.",
      "God has prepared the believer for this destiny. &ldquo;He who has prepared us for this very thing is God, who has given us the Spirit as a guarantee&rdquo; (v. 5). The Spirit given to believers in the present age is not the fullness of the inheritance but its first installment, the down payment that assures the whole purchase price will be paid. The groaning of the Spirit within the believer (Romans 8:23&ndash;26) and the groaning of the believer himself are not signs of abandonment; they are signs of a God who has set in motion a transformation that will reach its completion in the resurrection. The tent will give way to the eternal building, and the first installment will give way to the fullness of life in the presence of God.",
    ],
  },
  {
    id: "Walk by Faith Not by Sight",
    heading: "Walk by Faith, Not by Sight",
    reference: "2 Corinthians 5:6&ndash;10",
    paragraphs: [
      "Paul draws a practical conclusion from the theological conviction he has just stated: &ldquo;So we are always of good courage&rdquo; (v. 6). The groaning of the present moment is real, but it does not produce despair in the believer who knows where the journey ends. There is a settled confidence available to the Christian &mdash; not because the present is painless, but because the future is certain. Paul knows that while he is at home in the body, he is away from the Lord &mdash; not spiritually separated, but not yet face to face in the way the resurrection will make possible.",
      "&ldquo;For we walk by faith, not by sight&rdquo; (v. 7). This is one of the most compressed and consequential sentences in all of Paul&rsquo;s writings. To walk by sight would be to order one&rsquo;s life according to what is immediately visible, measurable, and present &mdash; the body with its limitations and needs, the world with its rewards and threats, the present moment with its joys and sufferings. To walk by faith is to order one&rsquo;s life according to what God has said, what God has promised, what God has done in Christ, even when none of those realities are immediately visible.",
      "The phrase has an immediate context in Paul&rsquo;s own experience. His critics in Corinth walked by sight: they evaluated apostolic ministry by visible strength, rhetorical polish, letters of commendation, apparent success. Paul&rsquo;s ministry looked like failure by those metrics: he had been beaten and imprisoned, his speech was unimpressive, his letters were more powerful than his bodily presence. But Paul was walking by faith &mdash; by the conviction that the God who raised Jesus from the dead was at work through the weakness and suffering of his servants, producing in them an &ldquo;eternal weight of glory beyond all comparison&rdquo; (4:17).",
      "Paul&rsquo;s preference, he says, is &ldquo;to be away from the body and at home with the Lord&rdquo; (v. 8). This is not a morbid wish for death but a statement about where his heart ultimately rests. The Lord is the destination; the body is the vessel of the journey. To be at home with the Lord is the fullest expression of the life of faith &mdash; the arrival at the end of the pilgrimage, the moment when faith gives way to sight and the tent is exchanged for the eternal dwelling. Paul does not cling to the tent; he holds it loosely, and therefore he can walk through life without the fear of death that enslaves those for whom this world is all there is.",
      "Yet the present life is not without its own weight of accountability. &ldquo;For we must all appear before the judgment seat of Christ, so that each one may receive what is due for what he has done in the body, whether good or evil&rdquo; (v. 10). The judgment seat (the bema) was a familiar feature of Greek civic life &mdash; the raised platform from which officials rendered verdicts and distributed awards. Paul does not use the image to threaten but to sober. Every act performed in this tent of a body will be brought into the light of Christ&rsquo;s evaluation. This awareness &mdash; that the hidden things will be revealed and that one day we stand before the one who sees all &mdash; is not a source of terror for the one who is in Christ, but it is a profound motivation for serious, faithful living in the time that remains.",
    ],
  },
  {
    id: "The Judgment Seat of Christ",
    heading: "The Judgment Seat of Christ",
    reference: "2 Corinthians 5:10&ndash;15",
    paragraphs: [
      "The prospect of appearing before the judgment seat of Christ produces in Paul what he calls &ldquo;the fear of the Lord&rdquo; (v. 11). This is a phrase easily misunderstood. Paul is not describing a fear that contradicts his earlier confidence and courage. He is describing the sober awareness of a man who knows that Christ sees truly, evaluates justly, and will bring into the open everything that has been hidden. This fear is not the fear of condemnation &mdash; Paul has elsewhere insisted that there is now no condemnation for those who are in Christ Jesus (Romans 8:1) &mdash; but it is the awe of standing before one whose judgment is utterly reliable and whose standards are not negotiable.",
      "It is this awareness that drives Paul&rsquo;s labor. &ldquo;Therefore, knowing the fear of the Lord, we persuade others&rdquo; (v. 11). The verb &ldquo;persuade&rdquo; here is not the persuasion of clever rhetoric but the urgent, genuine appeal of a man who knows the weight of eternal realities. Paul is not performing for the Corinthians; he is living before God. He wants them to understand that his ministry is not driven by the approval of audiences or the commendation of critics but by the knowledge that every act of his ministry will one day be seen clearly by the one who paid for it with his own blood.",
      "Paul offers himself transparently to God and, where possible, to the Corinthians&rsquo; own consciences: &ldquo;What we are is known to God, and I hope it is known also to your conscience&rdquo; (v. 11). He is not providing material for the Corinthians to boast in him over against other apostles; he is inviting them to see behind the surface to the reality of a life genuinely reoriented by the gospel. If they can see that, they will have ammunition to answer those who boast in outward appearance rather than in what is in the heart.",
      "The animating force behind all of this is stated with stunning brevity in verse 14: &ldquo;For the love of Christ controls us.&rdquo; The Greek word translated &ldquo;controls&rdquo; (synechei) carries the force of being gripped, hemmed in, compelled &mdash; the sense of a force that has taken hold of a person so completely that it determines the direction of his whole life. Paul does not love Christ and also pursue other things; the love of Christ has so laid claim to him that he cannot live as though it were one consideration among many. It controls him.",
      "The logic of that control flows from a theological conviction: &ldquo;One has died for all, therefore all have died; and he died for all, that those who live might no longer live for themselves but for him who for their sake died and was raised&rdquo; (vv. 14&ndash;15). The death of Christ was substitutionary &mdash; one for all &mdash; and it was transformative in its effect: those for whom he died are released from the obligation to live for themselves. Self-centered living is exposed as a kind of death; to live for the one who died and rose is to participate in the new life that his resurrection makes possible. The cross does not merely secure forgiveness; it reorganizes the entire allegiance and direction of a human life.",
    ],
  },
  {
    id: "New Creation and Reconciliation",
    heading: "New Creation and Reconciliation",
    reference: "2 Corinthians 5:16&ndash;21",
    paragraphs: [
      "Paul now draws out the consequences of living on the other side of the cross and resurrection. &ldquo;From now on, therefore, we regard no one according to the flesh&rdquo; (v. 16). The phrase &ldquo;according to the flesh&rdquo; refers to the way human beings are evaluated by worldly standards: social status, power, eloquence, ethnicity, achievements visible to human eyes. Paul himself had once evaluated Christ this way &mdash; as a cursed criminal, an enemy of Israel, a blasphemer. But the resurrection changed everything. Jesus has been declared the Son of God with power; the crucified one is Lord. Paul can no longer look at Jesus or at anyone else through the lens of mere human evaluation.",
      "&ldquo;Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come&rdquo; (v. 17). This is one of the great declarations of the New Testament. The phrase &ldquo;new creation&rdquo; does not refer merely to a moral improvement or a change of behavior. It draws on the prophetic vision of Isaiah, who announced that God would do something utterly unprecedented &mdash; create new heavens and a new earth, renew all things from the inside out. Paul announces that this new creation has already broken into the present age in the person of Jesus Christ, and that anyone who is united to him by faith participates in it now. The old world &mdash; the world of sin, condemnation, separation from God, futility &mdash; has passed away for the one who is in Christ. The new world has come.",
      "God is the architect and the actor of this new creation. &ldquo;All this is from God, who through Christ reconciled us to himself and gave us the ministry of reconciliation&rdquo; (v. 18). Reconciliation is the movement from enmity to peace, from estrangement to relationship. Paul is clear that the initiative was entirely with God: we did not seek God and find him willing; God in Christ came seeking us while we were his enemies (Romans 5:10). And having reconciled a people to himself, God has given them a task: to bear the message of that reconciliation to others who have not yet received it.",
      "The scope of the reconciliation is universal in its offer: &ldquo;God was in Christ reconciling the world to himself, not counting their trespasses against them&rdquo; (v. 19). The phrase &ldquo;not counting their trespasses against them&rdquo; is the accounting language of forgiveness &mdash; the debt is not charged to the debtor&rsquo;s account. This is not because the debt disappeared but because it was charged elsewhere: to the one who &ldquo;knew no sin&rdquo; but was &ldquo;made sin for us.&rdquo; The ministry of reconciliation begins with the announcement that there is a God who does not count trespasses against those who come to him through Christ.",
      "Paul describes himself and his co-workers as &ldquo;ambassadors for Christ, God making his appeal through us&rdquo; (v. 20). An ambassador does not speak his own message; he carries the message of the sovereign who sent him. Paul&rsquo;s appeal is therefore not his own appeal but God&rsquo;s &mdash; God himself is making his appeal to the world through the mouths of human messengers. &ldquo;We implore you on behalf of Christ, be reconciled to God&rdquo; (v. 20). The urgency of the appeal reflects the gravity of the estrangement: every person who has not received reconciliation is living as an enemy of God, and God is, in his extraordinary grace, sending ambassadors to plead with them to come home.",
      "The chapter closes with the most compressed statement of the gospel in all of Scripture: &ldquo;For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God&rdquo; (v. 21). The sinless Christ identified completely with human sin &mdash; not by sinning, but by becoming the sin-bearer, by standing in the place where sin stands before a holy God, by absorbing into himself the full weight of what sin deserves. And the result is that those who are in him receive not merely forgiveness but righteousness &mdash; the very righteousness of God, reckoned to them and imparted to them as they are united with the one who is himself righteousness. This is the great exchange at the center of the Christian gospel.",
    ],
  },
  {
    id: "Application",
    heading: "Applying 2 Corinthians 5 Today",
    reference: "2 Corinthians 5 &mdash; For the Life of the Church",
    paragraphs: [
      "The opening image of the chapter &mdash; the body as a tent &mdash; has direct relevance for how Christians relate to their physical existence and their mortality. A culture that treats the body as the ultimate good, that fears death above all things, and that pursues eternal youth through every available technology is living as though the tent is the permanent dwelling. Paul offers a different orientation: the body is to be cared for and used for God&rsquo;s glory, but held loosely, because it is not the final word. Those who know their groaning is a groaning for the heavenly dwelling can face physical suffering, aging, and death with a confidence that those who live only for the visible world cannot access.",
      "The call to walk by faith rather than by sight is one of the most counter-cultural imperatives in the New Testament. Contemporary life is organized around the visible, the measurable, the immediately rewarding. Social media makes the visible more seductive than ever; we are surrounded by curated images of success, beauty, and approval that constantly press us to evaluate ourselves and our ministry by what can be seen. Paul&rsquo;s rebuke of the Corinthians who evaluated apostolic ministry by visible impressiveness applies directly to any community that judges faithfulness by metrics of growth, influence, and apparent success. Walk by faith. The invisible things are eternal.",
      "The judgment seat of Christ is a theme the contemporary church has largely abandoned, and its abandonment has consequences. When Christians no longer live with the awareness that every act performed in the body will be seen and evaluated by Christ, the motivation for hidden faithfulness &mdash; the quiet prayer, the anonymous giving, the unglamorous service &mdash; loses its foundation. Paul&rsquo;s fear of the Lord is not neurotic guilt but the sober accountability of a servant who knows his work will one day be examined by the master. To recover this awareness is not to introduce fear into the Christian life but to give it the weight and seriousness it deserves.",
      "The claim that those who are in Christ are new creations has profound pastoral implications for how the church addresses people carrying the weight of their past. The old has passed away; the new has come. This is not a spiritual cliche but a theological fact that, when believed, has the power to break the grip of shame and identity formed by past sin and past failure. The person in Christ is not a reformed version of their old self; they are a new creation, defined not by what they were but by what they are in him. The ministry of reconciliation includes helping people receive this truth about themselves &mdash; that in Christ they are genuinely, not merely formally, new.",
      "To be ambassadors for Christ is a description of the entire church&rsquo;s calling, not merely the professional clergy. Every person who has received reconciliation has been given the ministry of reconciliation. God is making his appeal to the world through his people. This means that the ordinary Christian&rsquo;s ordinary relationships &mdash; with neighbors, colleagues, family members who have not yet received reconciliation &mdash; are the primary arena in which the ambassadorial work of the church is carried out. The imploring of verse 20 &mdash; &ldquo;we implore you on behalf of Christ, be reconciled to God&rdquo; &mdash; is the work not of professionals but of a people who know what it cost God to make reconciliation possible.",
      "Finally, the great exchange of verse 21 &mdash; sin for righteousness, the sinless one made sin that sinners might be made righteous &mdash; is the theological engine that powers everything else in the chapter. The groaning of the tent is endurable because the new creation is coming. Walking by faith is possible because the one who was made sin for us is the one who has been raised and is now at the right hand of God. The ministry of reconciliation is urgent because the message is astonishing: God was in Christ, reconciling the world to himself, not counting trespasses, offering a righteousness that is entirely his gift. There is no other message of such weight and such wonder, and there is no other calling as high as that of bearing it.",
    ],
  },
];

const videoItems = [
  { videoId: "WBNOZAaYBOU", title: "BibleProject - Overview of 2 Corinthians" },
  { videoId: "vSqJKrQGFRo", title: "2 Corinthians 5 - New Creation and Reconciliation Explained" },
  { videoId: "UudlipxB7xE", title: "Walk by Faith Not by Sight - 2 Corinthians 5:7 Study" },
  { videoId: "z4lRCCUAqQQ", title: "The Ministry of Reconciliation - 2 Corinthians 5 Teaching" },
];

export default function TwoCorinthiansFiveGuidePage() {
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
            2 Corinthians 5 &mdash; New Creation and Reconciliation
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul on the body as an earthly tent longing for its heavenly dwelling &mdash; &ldquo;We walk by faith, not by sight.&rdquo; We must all appear before the judgment seat of Christ. &ldquo;If anyone is in Christ, he is a new creation.&rdquo; God was in Christ reconciling the world to himself, and we are his ambassadors. He who knew no sin was made sin for us, that we might become the righteousness of God.
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
              Deepen your study of 2 Corinthians 5 through these video teachings on the earthly tent and heavenly dwelling, walking by faith, the judgment seat of Christ, new creation, the ministry of reconciliation, and the great exchange of verse 21.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>He Made Him to Be Sin, That We Might Become the Righteousness of God</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Second Corinthians 5 sets the believer&rsquo;s groaning in the tent of the body against the horizon of the eternal dwelling, and calls the church to walk by faith toward that horizon while carrying the most urgent message in the world: God was in Christ reconciling the world to himself. The one who has received reconciliation is sent as an ambassador &mdash; imploring others, on behalf of the God who made it possible, to be reconciled to him.
          </p>
        </div>
      </main>
    </div>
  );
}
