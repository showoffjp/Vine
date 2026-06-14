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
  "God Is Light",
  "Walking in the Light",
  "Confession and Cleansing",
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
    heading: "Overview of 1 John 1",
    reference: "1 John 1:1&ndash;10",
    paragraphs: [
      "The First Letter of John opens not with a greeting or a formal salutation but with a thunderous declaration that reaches back to the very beginning of creation: &ldquo;That which was from the beginning, which we have heard, which we have seen with our eyes, which we looked upon and have touched with our hands, concerning the word of life&rdquo; (1:1). The apostle is at pains from the very first syllable to ground the Christian faith in history, in flesh, in tangible reality. The one they proclaim is not a philosophical abstraction or a mystical idea &mdash; he is someone they heard with their ears, watched with their eyes, and handled with their hands.",
      "First John was written into a community fractured by a theological crisis. A group had departed from the fellowship, teaching that Jesus had not truly come in the flesh and that sin did not ultimately matter to those with genuine spiritual enlightenment. Against these proto-Gnostic claims, John writes with pastoral urgency, insisting on both the full humanity of the incarnate Son and the moral seriousness of sin. The opening chapter sets the framework for everything that follows: God is light, sin is real, fellowship with God is the goal, and honest confession is the path back to it.",
      "The structure of the chapter is elegant and tight. Verses 1&ndash;4 establish the eyewitness testimony that grounds the proclamation: the apostles saw and heard the Word of life, and now they declare him so that their readers may share their fellowship with the Father and with his Son. Verses 5&ndash;7 announce the defining theological claim of the chapter: God is light, and in him there is no darkness at all. Verses 8&ndash;10 confront the three self-deceptions that keep people from walking in the light &mdash; denying that we have sin, denying that we have sinned, and treating God&rsquo;s word as a lie.",
      "Throughout the chapter John uses the word &ldquo;fellowship&rdquo; (Greek: koinonia) four times in the space of four verses, making it the controlling theme of the passage. The purpose of apostolic proclamation is not merely information but relationship &mdash; that the hearers might enter a shared life with the Father and the Son, and with one another. This fellowship is the inheritance of all who walk in the light, and the chapter is essentially an invitation to enter and remain in that fellowship through the twin practices of honest acknowledgment of sin and confident reception of God&rsquo;s cleansing mercy.",
      "First John 1 has ministered to generations of Christians who have felt the sting of their own failures and wondered whether fellowship with a holy God remains possible. John&rsquo;s answer is both demanding and deeply encouraging: God is light, and the light exposes every shadow &mdash; but it is the same light that cleanses, that restores, that draws the confessing heart back into the warmth of fellowship. The chapter offers no cheap grace, but it offers a grace that is utterly sufficient for the weight of real human sin.",
    ],
  },
  {
    id: "God Is Light",
    heading: "God Is Light",
    reference: "1 John 1:5",
    paragraphs: [
      "At the very center of the first chapter stands the most concentrated theological statement in all of John&rsquo;s letter: &ldquo;God is light, and in him there is no darkness at all&rdquo; (1:5). John presents this not as his own invention but as a message he has heard and received &mdash; it is the announcement he is passing on from Jesus himself. The sentence is perfectly balanced: an absolute affirmation followed by an absolute negation. Not &ldquo;God is mostly light&rdquo; or &ldquo;God contains more light than darkness,&rdquo; but that God is light, and that in him there is no darkness at all &mdash; the Greek adds a double emphatic negative to drive the point home.",
      "Light in the biblical tradition carries a rich cluster of meanings. It is the first thing God speaks into existence at creation (Genesis 1:3), the symbol of God&rsquo;s guiding presence in the pillar of fire in the wilderness (Exodus 13:21), the metaphor the Psalms use for God&rsquo;s face and his favor (Psalm 4:6, 89:15). The Psalmist declares, &ldquo;The Lord is my light and my salvation&rdquo; (Psalm 27:1). In the Gospel of John, Jesus himself takes up the metaphor: &ldquo;I am the light of the world. Whoever follows me will not walk in darkness but will have the light of life&rdquo; (John 8:12).",
      "When John says God is light, he is pointing first to God&rsquo;s absolute moral purity. Light is the element in which everything is visible; darkness is where things are hidden. A God who is pure light is a God in whom nothing is concealed, nothing is shadowed, nothing is compromised. Every thought, every motive, every action that comes from him is utterly transparent and holy. There is no darker room behind the throne where a less flattering God hides. What you see is all there is, and what you see is radiant perfection.",
      "But light also speaks of revelation. A God who is light is a God who does not lurk in mystery for its own sake but who shines forth, who makes himself known, who illuminates the path for those who seek to walk with him. The entire sweep of biblical revelation &mdash; from the word spoken at creation, through the law given at Sinai, through the prophets&rsquo; burning proclamations, and supremely in the incarnation of the Son &mdash; is the outshining of a God who is light. He does not leave his creatures groping in the dark. He speaks; he reveals; he illuminates.",
      "There is also a searching quality to this light. Light does not negotiate with shadows; where light enters, darkness retreats. The God who is light cannot be in fellowship with darkness, not because he is weak but because his very nature is incompatible with it. This is not a temperamental preference on God&rsquo;s part but an ontological fact about the kind of being he is. For John&rsquo;s readers who were being told that spiritual enlightenment could coexist with moral darkness, this verse was a decisive rebuttal &mdash; the God who is light cannot be truly known by those who walk in darkness, no matter how sophisticated their theology.",
      "The statement &ldquo;God is light&rdquo; functions in the chapter as the measuring standard against which all claims of fellowship are tested. If God is light, then to claim fellowship with him while walking in darkness is a contradiction &mdash; not a minor inconsistency but an outright lie. Conversely, if God is light, then to walk in the light is precisely the mode of life that makes genuine fellowship possible. The declaration does not crush the sinner; it illuminates the path. It is an invitation disguised as a description of God&rsquo;s nature.",
    ],
  },
  {
    id: "Walking in the Light",
    heading: "Walking in the Light",
    reference: "1 John 1:6&ndash;7",
    paragraphs: [
      "Having declared that God is light, John immediately draws out the implications for how his readers are to live. The structure of verses 6 and 7 is an antithesis &mdash; a false claim followed by a true one &mdash; and the contrast is stark. &ldquo;If we say we have fellowship with him while we walk in darkness, we lie and do not practice the truth. But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus his Son cleanses us from all sin&rdquo; (1:6&ndash;7). The two paths are mutually exclusive: you walk in darkness or you walk in the light, and where you walk determines whether your claim to fellowship with God is real or false.",
      "To &ldquo;walk&rdquo; in biblical language is to live, to conduct oneself, to move through the whole of life in a particular direction and manner. It is a comprehensive metaphor that covers not just dramatic spiritual moments but the ordinary texture of daily existence &mdash; how we speak, how we treat people, what we pursue, what we avoid, what habits we cultivate, what we do when no one is watching. To walk in darkness is not simply to commit a particular sin; it is to orient one&rsquo;s life away from God&rsquo;s revealed character and will, to prefer the shadow over the light, to live as though the God who is light were not there.",
      "John&rsquo;s false claimants in verse 6 are people who profess fellowship with God while their lives are characterized by moral darkness. They may have impressive spiritual language, elaborate theological claims, or deep mystical experiences &mdash; but if their lives are lived in the darkness of unacknowledged sin and ethical indifference, their profession is simply a lie. John does not soften this. He does not say they are confused or mistaken or partly right. He says they &ldquo;lie and do not practice the truth.&rdquo; The antidote to mere profession is practice &mdash; not perfectionism, but the genuine orientation of one&rsquo;s life toward God&rsquo;s light.",
      "Walking in the light, by contrast, is not the same as sinless perfection. Verse 7 itself ends with the promise that &ldquo;the blood of Jesus his Son cleanses us from all sin&rdquo; &mdash; and if walking in the light meant living without sin, there would be no need for cleansing. To walk in the light means to live in the realm where God&rsquo;s truth holds sway, where sin is recognized as sin rather than rationalized, where the heart is genuinely oriented toward God rather than away from him. It is a posture of openness to God&rsquo;s gaze, a willingness to be known as one truly is.",
      "One of the most remarkable features of verse 7 is the link it draws between walking in the light and fellowship with one another. The verse does not say &ldquo;we have fellowship with God&rdquo; &mdash; it says &ldquo;we have fellowship with one another.&rdquo; Genuine fellowship with God in the light produces genuine fellowship among those who share that light. The vertical and the horizontal are inseparable. Churches and communities that are characterized by honesty, openness, and mutual accountability &mdash; rather than pretense and performance &mdash; are the natural fruit of walking in the light together.",
      "The promise at the end of verse 7 is among the most precious in the New Testament: &ldquo;the blood of Jesus his Son cleanses us from all sin.&rdquo; The present tense is significant &mdash; cleanses, continually, as an ongoing action. Walking in the light does not mean having a clean record; it means living in the place where cleansing is constantly available. As sin comes to light &mdash; as the Holy Spirit convicts, as God&rsquo;s word illuminates, as brothers and sisters in community lovingly tell us the truth &mdash; the blood of Jesus is there, effective, sufficient, washing away what the light has exposed. The light and the blood work together: the one reveals, the other removes.",
    ],
  },
  {
    id: "Confession and Cleansing",
    heading: "Confession and Cleansing",
    reference: "1 John 1:8&ndash;10",
    paragraphs: [
      "The final three verses of the chapter form one of the most theologically precise and pastorally compassionate passages in all of Scripture on the subject of sin and forgiveness. John identifies three false claims that believers are tempted to make about sin, and he confronts each one directly before offering the magnificent promise of 1:9 as the alternative. Understanding these three errors and the gracious corrective John offers is essential for healthy Christian living and genuine fellowship with a holy God.",
      "The first error is the claim of verse 8: &ldquo;If we say we have no sin, we deceive ourselves, and the truth is not in us.&rdquo; This is the claim to be without a sin nature &mdash; to have moved beyond the condition of fallen humanity, to have arrived at a state where sin is no longer a real part of one&rsquo;s interior life. The false teachers troubling John&rsquo;s community may have made precisely this claim: that their spiritual enlightenment had placed them above ordinary moral categories. But John&rsquo;s verdict is unsparing &mdash; such a person is not enlightened but self-deceived. The truth, the living reality of God&rsquo;s word, has found no home in them.",
      "The third error, in verse 10, is the corresponding claim about specific acts: &ldquo;If we say we have not sinned, we make him a liar, and his word is not in us.&rdquo; This is the denial not of a sin nature but of actual sins committed &mdash; a refusal to acknowledge the record of real transgressions in one&rsquo;s life. This claim is even more serious than the first because it does not merely deceive oneself; it calls God himself a liar. God&rsquo;s entire word, from Genesis forward, is premised on the reality of human sin and the need for redemption. To deny that one has sinned is to contradict the testimony of God himself about the human condition.",
      "Between these two errors &mdash; the claim to have no sin nature and the denial of having committed actual sins &mdash; John inserts the golden promise of verse 9: &ldquo;If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.&rdquo; The contrast is everything. Verses 8 and 10 describe self-deception and contradiction of God; verse 9 describes the honest acknowledgment that leads to complete restoration. The alternative to denial is not despair but confession.",
      "The word &ldquo;confess&rdquo; (Greek: homologeo) means literally to &ldquo;say the same thing&rdquo; &mdash; to agree with God about one&rsquo;s sins rather than to rationalize or minimize them. Confession is not the recitation of a formula or the performance of a spiritual exercise; it is the act of seeing one&rsquo;s sin as God sees it and saying so honestly. It is the prayer that drops the disguise and stands before God as one truly is. And the promise attached to such honesty is breathtaking in its scope and security: God is faithful and just to forgive &mdash; faithful to his covenant promises of mercy, just because the claims of his justice have been satisfied in the cross of Christ.",
      "The promise covers two things: forgiveness of sins &mdash; the judicial removal of guilt &mdash; and cleansing from all unrighteousness &mdash; the comprehensive washing away of moral contamination. Together these address both the legal and the moral dimensions of sin. Forgiveness deals with the record; cleansing deals with the stain. And neither is partial or conditional on our feelings about ourselves. The ground of both is the character of God: he is faithful, and he is just. The confessing believer stands on a promise that does not depend on the depth of her remorse or the perfection of her confession but on the unchanging reliability of a God who keeps his word.",
    ],
  },
  {
    id: "Application",
    heading: "Living 1 John 1 Today",
    reference: "Personal and Community Application",
    paragraphs: [
      "First John 1 speaks with remarkable immediacy to the challenges of contemporary Christian life. One of the most practical lessons the chapter teaches is the danger of spiritual performance &mdash; of presenting a curated image of our spiritual state to God and to one another rather than walking in honest openness. John&rsquo;s community had people who claimed fellowship with God while walking in darkness, who claimed to be without sin, who denied having sinned. These are not ancient pathologies; they describe the temptations of every generation of believers who have found honesty about their sin too threatening or too costly.",
      "The practice of walking in the light begins with ruthless honesty before God in private prayer. Confession is not the end of prayer but an essential feature of it &mdash; the habit of naming specific sins, agreeing with God about them rather than excusing them, and receiving by faith the forgiveness and cleansing promised in verse 9. Many Christians live under a vague cloud of spiritual guilt not because God has withheld forgiveness but because they have never engaged in the simple, concrete practice of confessing specific sins and receiving specific assurance of pardon. First John 1:9 is the remedy.",
      "The chapter also has profound implications for Christian community. When John links walking in the light with fellowship with one another (verse 7), he is describing the kind of community where people know one another as they truly are, not as they wish they appeared. This is the vision behind practices like small groups characterized by genuine vulnerability, pastoral relationships where struggle and failure can be honestly named, and accountability partnerships where believers help one another see what they might miss on their own. A church that only ever sees polished Sunday-morning versions of its members is not fully walking in the light together.",
      "The declaration that God is light also speaks to the intellectual and ethical dimensions of discipleship. Walking in the light means pursuing truth &mdash; reading Scripture with the expectation that it will reveal things about us we might prefer not to see, welcoming the Spirit&rsquo;s conviction rather than resisting it, and allowing the word of God to set the agenda for our thinking and living rather than bending it to serve our preferences. Many a theological error begins not with an intellectual mistake but with a moral choice &mdash; the decision to live in a way that requires God&rsquo;s word to be reinterpreted so as not to disturb the darkness one prefers.",
      "For those burdened by a deep awareness of their sin, 1 John 1 is a chapter of extraordinary comfort. The apostle does not say that sin disqualifies a person from fellowship with God &mdash; he says that denial of sin does. The honest acknowledgment of sin, far from being a barrier to fellowship, is the very pathway into it. The blood of Jesus cleanses from all sin &mdash; not some, not most, not the lesser ones, but all. The breadth of that promise is meant to be taken seriously by the person whose sins feel too dark or too numerous or too shameful to be covered. They are not. The blood of Jesus is enough.",
      "Finally, the chapter invites a community response: we are called not merely to be forgiven individuals but to be a fellowship of people who walk in the light together, bearing one another&rsquo;s burdens, speaking truth in love, and extending to one another the same mercy we have received from God. The fellowship of 1 John 1 is not a community of the sinless but a community of the honestly confessing &mdash; people who have agreed with God about themselves and found in that agreement the door into an abundant life of shared joy. &ldquo;We are writing these things,&rdquo; John says in verse 4, &ldquo;so that our joy may be complete.&rdquo; The full joy he envisions flows from fellowship in the light.",
    ],
  },
];

const videoItems = [
  { videoId: "pbNSMBtBqAE", title: "BibleProject - Overview: 1-3 John" },
  { videoId: "9DRFnlERNPo", title: "1 John 1 - Walking in the Light - Verse by Verse" },
  { videoId: "hPPLCFlPRkQ", title: "What Does It Mean to Walk in the Light? - 1 John 1 Explained" },
  { videoId: "4-9L7HJt7Oc", title: "Confession and Cleansing - The Promise of 1 John 1:9" },
];

export default function John1Chapter1GuidePage() {
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
            1 John 1 &mdash; God Is Light
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Walking in fellowship and confession &mdash; the apostle John grounds Christian community in the stunning declaration that God is light, and calls believers into a life of honesty before God and one another, where the blood of Jesus continually cleanses all who walk in the light.
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

        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Deepen your study of 1 John 1 through these video teachings on walking in the light, the nature of God&rsquo;s holiness, and the life-giving practice of confession and cleansing.
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

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>If We Walk in the Light</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First John 1 holds out the most radical offer to the human heart: that God, who is absolute light and purity, has made a way for sinful people to walk in fellowship with him. The way is not sinlessness but honesty &mdash; agreeing with God about our failures, receiving the forgiveness purchased by the blood of Jesus, and walking together in the light as a community of the honestly confessing. The chapter ends not in condemnation but in the completion of joy.
          </p>
        </div>
      </main>
    </div>
  );
}
