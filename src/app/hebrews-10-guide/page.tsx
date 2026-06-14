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
  "Hold Fast Our Confession",
  "Do Not Forsake Assembling",
  "By One Sacrifice",
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
    heading: "Overview of Hebrews 10",
    reference: "Hebrews 10:1&ndash;39",
    paragraphs: [
      "Hebrews 10 occupies a pivotal place in what many scholars consider the theological and rhetorical summit of the entire letter to the Hebrews. The chapter brings to a close the long central argument that has been building since chapter 7 &mdash; that Jesus Christ is the great high priest who has offered the one perfect, final, all-sufficient sacrifice for sin &mdash; and then pivots from doctrinal exposition to urgent pastoral application. The two great imperatives that dominate the chapter are holding fast to the confession of hope without wavering (10:23) and not forsaking the assembling of believers together (10:25). Both are grounded in the once-for-all sacrifice of Christ that has now opened a new and living way into the very presence of God.",
      "The letter&rsquo;s recipients were Jewish Christians who had endured significant suffering for their faith and were now, under renewed pressure, apparently tempted to drift away from their confession or to withdraw from the Christian community. Some commentators believe they were considering a return to temple Judaism, with its priests and sacrifices and visible cultic structures, precisely because the Levitical system offered tangible, concrete religious experience. The writer of Hebrews has spent nine chapters demonstrating that everything the old covenant pointed toward has now been fulfilled and surpassed in Jesus &mdash; and chapter 10 draws those chapters together into a direct, searching pastoral challenge.",
      "The chapter divides into three main movements. Verses 1&ndash;18 constitute the theological capstone of the central argument: the law was only a shadow, not the reality; the repeated animal sacrifices could not perfect the worshiper&rsquo;s conscience; but Christ, by offering himself once, has perfected forever those who are being sanctified. Verses 19&ndash;25 make the application explicit, issuing three parallel &ldquo;let us&rdquo; exhortations: draw near to God, hold fast the confession, and stir up one another to love and good works by not neglecting to meet together. Verses 26&ndash;39 introduce a solemn warning about the consequences of deliberate apostasy &mdash; the most severe warning in the letter &mdash; followed by an encouragement to endurance drawn from the prophets and from the readers&rsquo; own history of faithful suffering.",
      "The theological center of the chapter is the quotation from Psalm 40, placed on the lips of Christ at the moment of his incarnation: &ldquo;Sacrifices and offerings you have not desired, but a body have you prepared for me; in burnt offerings and sin offerings you have taken no pleasure. Then I said, &lsquo;Behold, I have come to do your will, O God&rsquo;&rdquo; (10:5&ndash;7). The writer interprets this as the Son of God entering the world with the explicit intention of accomplishing what no animal sacrifice could ever achieve &mdash; the perfect, willed, personal obedience that would deal finally with sin. The old sacrifices were divinely ordained but temporally limited; the sacrifice of Christ was the reality toward which they all pointed.",
      "Hebrews 10 ends not with condemnation but with encouragement and hope. The writer reminds readers of their own past endurance under trial: they accepted joyfully the plundering of their property, knowing that they had a better and abiding possession (10:34). That same spirit of endurance is now needed: &ldquo;For you have need of endurance, so that when you have done the will of God you may receive what is promised&rdquo; (10:36). The chapter closes with Habakkuk&rsquo;s great declaration: &ldquo;My righteous one shall live by faith, and if he shrinks back, my soul has no pleasure in him&rdquo; &mdash; and the writer&rsquo;s confident pastoral verdict: &ldquo;But we are not of those who shrink back and are destroyed, but of those who have faith and preserve their souls&rdquo; (10:39).",
    ],
  },
  {
    id: "Hold Fast Our Confession",
    heading: "Hold Fast Our Confession",
    reference: "Hebrews 10:19&ndash;25",
    paragraphs: [
      "The second of the three &ldquo;let us&rdquo; exhortations in verses 22&ndash;25 is among the most memorable commands in the New Testament: &ldquo;Let us hold fast the confession of our hope without wavering, for he who promised is faithful&rdquo; (10:23). The verb &ldquo;hold fast&rdquo; (Greek: &ldquo;katechomen&rdquo;) is a strong word &mdash; it means to grip firmly, to cling without releasing, to refuse to let go in spite of pressure. The thing being held is the &ldquo;confession of hope&rdquo; &mdash; the publicly declared conviction that the promises of God in Christ are real, true, and worth staking one&rsquo;s life upon.",
      "The word &ldquo;confession&rdquo; is significant. Throughout Hebrews it refers to the Christian community&rsquo;s formal, public declaration of faith &mdash; the things they had professed at baptism, in worship, and before a watching world. To hold fast the confession is not merely to maintain private beliefs; it is to continue openly and consistently identifying with Christ and his people in the face of external pressure. For the original readers, who had already suffered public shame, loss of property, and imprisonment for their faith, this was no small thing. The temptation was to quietly disengage, to let the confession lapse, to avoid the social cost.",
      "The ground of the exhortation is not the believer&rsquo;s own strength or resolve but the faithfulness of God himself: &ldquo;for he who promised is faithful.&rdquo; This single phrase does enormous work. It shifts the basis of endurance from the worshiper&rsquo;s grip to God&rsquo;s character. The reason to hold fast is not that we are strong enough but that the God who has made promises in Christ is the kind of God who keeps them. The faithfulness of God is the anchor for the confession of believers. The one who called them is faithful, and what he has promised &mdash; the forgiveness of sins, the inheritance of the new creation, the resurrection of the body &mdash; he will certainly bring to pass.",
      "The exhortation to &ldquo;hold fast&rdquo; appears at least three times in Hebrews (4:14, 6:18, 10:23), which suggests how central it was to the author&rsquo;s pastoral concern. The readers were not in danger of dramatic, sudden apostasy so much as of gradual drift &mdash; a slow loosening of the grip under sustained social pressure. The writer knows that the antidote to drift is not heroic self-effort but a daily return to the anchor: the great high priest who has entered the Most Holy Place on our behalf, whose single sacrifice has secured our standing before God forever, and who &ldquo;always lives to make intercession&rdquo; for those who draw near to God through him (7:25).",
      "The &ldquo;confession of hope&rdquo; is also worth noting as distinct from a confession of belief alone. Hope in the New Testament is not vague optimism; it is confident, forward-looking expectation rooted in what God has already done in Christ. The resurrection of Jesus is the past event that makes future hope reasonable. To hold fast to the confession of hope is to live in the present with an orientation toward what is coming &mdash; the fullness of salvation, the renewal of all things, the face-to-face encounter with God that the Most Holy Place symbolized and that Christ has now made available. This forward orientation is precisely what the assembly of believers is called to cultivate and preserve in one another.",
      "Holding fast the confession is not, finally, a solitary act. It is the work of a community that meets together, reminds one another of the promises, stirs up one another to love and good works, and refuses to let any member drift away unnoticed. The confession is held fast communally as much as individually, which is why the second and third &ldquo;let us&rdquo; exhortations are inseparable: holding fast the confession and not forsaking the assembly are two descriptions of the same sustained faithfulness.",
    ],
  },
  {
    id: "Do Not Forsake Assembling",
    heading: "Do Not Forsake Assembling Together",
    reference: "Hebrews 10:24&ndash;25",
    paragraphs: [
      "Among the most frequently quoted commands in the entire New Testament is Hebrews 10:25: &ldquo;not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.&rdquo; The command is almost always cited in discussions of church attendance, and rightly so, but it deserves to be read in its full context to appreciate both its depth and its urgency. The Greek word translated &ldquo;neglecting&rdquo; or &ldquo;forsaking&rdquo; is &ldquo;enkataleipontes,&rdquo; a strong word that means to abandon, to desert, to leave behind. The seriousness of the command matches the seriousness of what is at stake.",
      "The larger command of which verse 25 is the application reads: &ldquo;And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another&rdquo; (10:24&ndash;25). The gathering of believers is not presented here primarily as an obligation of corporate worship, though it is that; it is presented as the context in which Christians actively invest in one another&rsquo;s endurance. The verbs &ldquo;stir up&rdquo; and &ldquo;encourage&rdquo; are both active, purposeful actions. The assembly is not merely a place where individuals receive; it is a community where members do something for each other.",
      "The phrase &ldquo;as is the habit of some&rdquo; reveals that the problem of assembly-forsaking was already present in the original community. Some in the congregation had already developed a habit of absence. Whether this was driven by fear of social ostracism, by disillusionment, by doctrinal uncertainty, or by simple spiritual fatigue, we do not know. But the writer is clear that this habit is dangerous &mdash; dangerous precisely because the community is the context in which the mutual encouragement and the holding-fast of the confession take place. To absent oneself from the assembly is to deprive oneself of the very support structures that sustain faith under pressure.",
      "The final phrase &mdash; &ldquo;and all the more as you see the Day drawing near&rdquo; &mdash; gives the command an eschatological edge. &ldquo;The Day&rdquo; in New Testament usage almost always refers to the Day of the Lord, the day of Christ&rsquo;s return, the day of judgment and final salvation. As that day approaches, the urgency of mutual encouragement increases rather than decreases. The gathering of believers is not an optional enhancement of personal spirituality; it is an eschatologically calibrated necessity. The closer the end, the more the community needs one another. The writer assumes that the readers can perceive signs that the day is approaching, which gives the assembly an urgency rooted not in tradition but in the actual shape of redemptive history.",
      "The theology underlying this command deserves to be stated explicitly. Christ has opened a new and living way into the presence of God (10:19&ndash;20). The community that gathers in his name is not merely a religious club or a social support group; it is a community of people who have been brought near to God through the shed blood of Christ and who now together approach the throne of grace. When believers assemble, they are not doing something supplementary to their individual walk with God; they are expressing and enacting the communal dimension of what Christ has accomplished. The people who are individually &ldquo;being sanctified&rdquo; by the one sacrifice (10:14) are members of a body, and the body needs to gather.",
      "Practically, the writer&rsquo;s command presses every believer to consider their own relationship to the gathered community. Are they investing in others&rsquo; endurance, or are they merely attending? Are they considering how to stir up love and good works in fellow believers, or is their presence passive? And for those who have drifted into the habit of absence &mdash; whether from fear, fatigue, disappointment, or distraction &mdash; this passage is an urgent call back, grounded not in guilt but in the reality of what they are missing: the encouragement of fellow believers, the holding fast of shared confession, and the communal anticipation of the Day that is drawing near.",
    ],
  },
  {
    id: "By One Sacrifice",
    heading: "By One Sacrifice, Perfected Forever",
    reference: "Hebrews 10:1&ndash;18",
    paragraphs: [
      "The opening section of Hebrews 10 brings the long central argument of the letter to its theological climax. The writer has spent chapters 7&ndash;9 establishing that Jesus is a priest after the order of Melchizedek, that he ministers in the true heavenly tabernacle rather than the earthly copy, and that his blood is infinitely superior to the blood of animals. Now, in chapter 10, the argument reaches its decisive conclusion: &ldquo;For by a single offering he has perfected for all time those who are being sanctified&rdquo; (10:14). This single sentence is the heart of Hebrews&rsquo; theology of atonement.",
      "The writer opens the chapter by contrasting shadow and substance. The law &ldquo;has but a shadow of the good things to come instead of the true form of these realities&rdquo; (10:1). This is not a dismissal of the Mosaic law &mdash; which the writer elsewhere treats with profound respect as the divinely given pattern of the heavenly realities &mdash; but a statement about its inherent limitation. A shadow is real, but it is not the object itself. The repeated Levitical sacrifices were real expressions of God&rsquo;s provisions for his people, but their very repetition was evidence of their incompleteness. If they had truly dealt with sin once and for all, the conscience would have been cleansed and the need for repetition would have ended.",
      "The writer presses this logic with force: &ldquo;For it is impossible for the blood of bulls and goats to take away sins&rdquo; (10:4). This is a remarkable statement. The animal sacrifices were divinely commanded; they were offered in faith; they were accompanied by God&rsquo;s forgiveness in the Old Testament. But they did not take away sin in the ultimate, final, once-for-all sense. They covered sin provisionally, looking forward to a sacrifice that would deal with it definitively. The forward-pointing character of the old covenant sacrifices was built into their design; they were means of grace that depended for their efficacy on the reality to which they pointed.",
      "The Psalm 40 quotation (vv. 5&ndash;10) is the writer&rsquo;s exegetical key to understanding how the transition from shadow to substance took place. At the moment of the Incarnation, the Son of God entered the world with a specific theological mission: to do the will of God in a way that no animal could. Animals have no will; they have no moral agency; they cannot choose to obey. Christ had a body prepared for him &mdash; a human nature in which genuine obedience was possible &mdash; and he offered that obedience perfectly. &ldquo;By that will we have been sanctified through the offering of the body of Jesus Christ once for all&rdquo; (10:10). The sacrifice that matters is not merely physical but volitional &mdash; the total self-giving of the Son in obedient love.",
      "The contrast between the old priests and Christ is drawn with stark simplicity: &ldquo;And every priest stands daily at his service, offering repeatedly the same sacrifices, which can never take away sins. But when Christ had offered for all time a single sacrifice for sins, he sat down at the right hand of God&rdquo; (10:11&ndash;12). The Levitical priests stood because their work was never finished &mdash; there was always another day, another sacrifice, another sin to cover. Christ sat down because his work was complete. The posture of sitting is the posture of finished work. The writer has already quoted Psalm 110:1 at the beginning of the letter; now the connection is made explicit. The exaltation of Christ at the right hand of God is the evidence that his sacrifice accomplished what all the Levitical sacrifices could not.",
      "The conclusion of the section (vv. 15&ndash;18) seals the argument with a quotation from Jeremiah 31 &mdash; the new covenant promise that God will write his law on hearts and remember sins no more. &ldquo;Where there is forgiveness of these, there is no longer any offering for sin&rdquo; (10:18). This is the logical endpoint of the entire argument: the once-for-all sacrifice of Christ has brought into existence the new covenant that Jeremiah promised, a covenant of inward transformation and definitive forgiveness. If sins are remembered no more, the need for sacrifice is ended. The new covenant is not simply an improvement on the old; it is the reality that the old existed to anticipate.",
    ],
  },
  {
    id: "Application",
    heading: "Living Out Hebrews 10 Today",
    reference: "Hebrews 10 &mdash; Practical Reflection",
    paragraphs: [
      "Hebrews 10 addresses a congregation under pressure with a combination of theological argument and urgent pastoral exhortation. Its application to contemporary believers is perhaps even more pressing than its original readers might have imagined. In a culture that tends toward individualism in religion, digital isolation in community, and a consumer relationship with the local church, the threefold &ldquo;let us&rdquo; of Hebrews 10 lands like a direct challenge: draw near to God, hold fast our confession, and stir up one another by not forsaking the assembly.",
      "The confidence to draw near to God (10:19&ndash;22) is one of the most liberating truths in the New Testament for the believer burdened by guilt or a sense of unworthiness. The way into the presence of God is not paved by personal achievement or moral perfection; it is a &ldquo;new and living way&rdquo; that Christ has opened through his own flesh. The &ldquo;full assurance of faith&rdquo; that the writer calls for is not presumption; it is the appropriate response to what Christ has accomplished. To approach God timidly, as if the sacrifice of Christ were insufficient, is not humility &mdash; it is a failure to trust the finished work. The application is to cultivate a daily, confident approach to God in prayer, rooted not in self-assessment but in the high priestly work of Jesus.",
      "Holding fast the confession without wavering (10:23) challenges every believer to examine the firmness of their public identification with Christ. In many contexts today, the pressure is less likely to be imprisonment or property confiscation and more likely to be social awkwardness, professional disadvantage, relational friction, or simple embarrassment. The call to hold fast is no less urgent in those circumstances. The confession of hope is worth holding not because of its social utility but because &ldquo;he who promised is faithful.&rdquo; That theological ground &mdash; God&rsquo;s character and faithfulness &mdash; does not change with social climate. The person who holds fast in a difficult season will receive the promised inheritance; the person who drifts will lose what they might have had.",
      "The command not to forsake assembling together (10:25) challenges the tendency to treat church attendance as optional or as a function of what one personally gets from it. The writer envisions an assembly where each person is actively considering how to stir up others to love and good works &mdash; a community of mutual investment, not a passive audience. This calls for a transformation of the typical consumer posture toward church: the question is not only &ldquo;what am I receiving?&rdquo; but &ldquo;what am I contributing to the endurance of others?&rdquo; The believer who is regularly present, who speaks words of encouragement, who notices absence and follows up, who prays for fellow members &mdash; that person is doing exactly what Hebrews 10 calls for.",
      "The severe warning of verses 26&ndash;31 deserves honest engagement rather than hermeneutical evasion. The writer warns that deliberate, persistent, willful sin after receiving the knowledge of the truth amounts to trampling underfoot the Son of God, profaning the blood of the covenant, and outraging the Spirit of grace. The severity of the warning is proportional to the magnitude of what Christ has done. To have the full revelation of the once-for-all sacrifice and then deliberately, persistently reject it places one in the most dangerous possible spiritual position &mdash; for there is no greater sacrifice left to be offered. The warning is not designed to drive believers into despair but to awaken any who may be drifting toward presumption or willful departure.",
      "The chapter&rsquo;s closing encouragement is ultimately what it wants to leave in the reader&rsquo;s heart. The writer points to the community&rsquo;s own past faithfulness under fire &mdash; they had joyfully accepted the plundering of their property, knowing they had something better and permanent. That quality of faith &mdash; the ability to hold goods loosely because the ultimate good is secured in Christ &mdash; is what endurance looks like. The promised inheritance is real, the one who promised is faithful, the day is drawing near. Therefore: draw near, hold fast, gather together, and do not shrink back. The &ldquo;better and abiding possession&rdquo; (10:34) awaits those who endure.",
    ],
  },
];

const videoItems = [
  { videoId: "1fNMSpmYMjg", title: "Hebrews 10 - The Once for All Sacrifice of Christ Explained" },
  { videoId: "kI23tIl_mVM", title: "Do Not Forsake Assembling Together - Hebrews 10:25 Sermon" },
  { videoId: "GgLrDdJJ2ew", title: "Hold Fast Your Confession - Hebrews 10 Bible Study" },
  { videoId: "Bv4J5Y2XTQU", title: "BibleProject - Book of Hebrews Overview Part 2" },
];

export default function Hebrews10GuidePage() {
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
            Hebrews 10 &mdash; Hold Fast
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The better sacrifice and the assembling of believers &mdash; Christ&rsquo;s once-for-all offering that perfects forever those who are being sanctified, the call to hold fast our confession of hope, and the urgency of gathering together as the Day draws near.
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
            Video Teaching on Hebrews 10
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Let Us Hold Fast</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Hebrews 10 anchors the call to endurance in the bedrock of what Christ has accomplished &mdash; one sacrifice, offered once, perfecting forever those for whom it was offered. Because the work is finished and the way is open, believers can draw near with full assurance, hold fast without wavering, and gather together to stir up one another toward the Day that is drawing near.
          </p>
        </div>
      </main>
    </div>
  );
}
