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
  "Come Everyone Thirsty",
  "Words Higher Than Ours",
  "Seek the Lord",
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
    heading: "Overview of Isaiah 55",
    reference: "Isaiah 55:1&ndash;13",
    paragraphs: [
      "Isaiah 55 is one of the most beautiful and comprehensive invitations in all of Scripture. It stands at the summit of what scholars call &ldquo;Deutero-Isaiah&rdquo; or the &ldquo;Book of Comfort&rdquo; (chapters 40&ndash;55), and it serves as a magnificent climax to the entire section &mdash; a ringing call to come to God on his own terms, to receive what only he can give, and to trust in a plan whose scope and wisdom far exceed anything human minds can devise. After chapters filled with prophecies of the suffering servant, the redemption of Israel, and the salvation of the nations, Isaiah 55 arrives as a wide-open door.",
      "The chapter can be divided into three movements. The first (vv. 1&ndash;5) is the great invitation: come to the waters, come buy wine and milk, come eat what is good. The second (vv. 6&ndash;9) is the great call to repentance and return: seek the Lord while he may be found, forsake the wicked way, and trust in the incomprehensible mercy of a God whose thoughts are not our thoughts and whose ways are not our ways. The third (vv. 10&ndash;13) is the great assurance: the word of God will accomplish everything God sends it to do, and the people of God will go out with joy and be led forth in peace, as the whole creation bursts into song.",
      "The historical context is the Babylonian exile. Isaiah&rsquo;s audience faced one of the most disorienting experiences in Israel&rsquo;s history &mdash; the destruction of Jerusalem, the burning of the Temple, and the long years of captivity in a foreign land. Into this situation of grief, shame, and doubt, God speaks the astonishing words of chapter 55. He does not minimize the pain. He does not pretend the exile did not happen. But he speaks of a restoration so total &mdash; not just national deliverance but the renewal of the covenant, the everlasting mercies of David, and the blessing of the nations &mdash; that the only appropriate response is to come and drink.",
      "Isaiah 55 is saturated with water imagery, and this is no accident. Water in the ancient Near East was life itself &mdash; the difference between survival and death in an arid land. God uses this most basic of physical needs to picture the most basic of spiritual realities: the human soul thirsts, and only God can satisfy it. The invitation to &ldquo;come to the waters&rdquo; echoes forward to the New Testament, where Jesus stands at the temple and cries out, &ldquo;If anyone thirsts, let him come to me and drink&rdquo; (John 7:37), and to the last page of the Bible, where the Spirit and the Bride say, &ldquo;Come, and let the one who is thirsty come; let the one who desires take the water of life without price&rdquo; (Revelation 22:17).",
      "What makes Isaiah 55 so theologically rich is its combination of utter graciousness and utter seriousness. The invitation is free &mdash; &ldquo;without money and without price.&rdquo; The grace is lavish &mdash; &ldquo;incline your ear, and come to me; hear, that your soul may live.&rdquo; But the chapter also insists on the absolute sovereignty of God&rsquo;s word and the absolute difference between God&rsquo;s wisdom and human wisdom. We are invited to feast at a table we could never have set, on food we could never have provided, by a host whose love surpasses all our comprehension.",
    ],
  },
  {
    id: "Come Everyone Thirsty",
    heading: "Come, Everyone Who Thirsts: The Free Invitation",
    reference: "Isaiah 55:1&ndash;5",
    paragraphs: [
      "The chapter opens with an extraordinary burst of imperative verbs: &ldquo;Come, everyone who thirsts, come to the waters; and he who has no money, come, buy and eat! Come, buy wine and milk without money and without price&rdquo; (55:1). In the space of a single verse God shouts the invitation four times. The repetition is not careless &mdash; it is urgent. The ancient world knew famine, drought, and want all too well, and the image of a banquet of wine and milk offered freely to those who cannot pay was a vision of sheer gift.",
      "The question of verse 2 cuts to the heart of the human condition: &ldquo;Why do you spend your money for that which is not bread, and your labor for that which does not satisfy? Listen diligently to me, and eat what is good, and delight yourselves in rich food.&rdquo; The prophet is diagnosing a universal human error: we expend our most precious resources &mdash; time, energy, money, desire &mdash; on things that cannot ultimately nourish us. The Babylonian exiles had literally lost everything; but the question applies equally to any generation that busies itself chasing satisfactions that do not satisfy.",
      "The &ldquo;rich food&rdquo; on offer in verse 2 is not specified &mdash; and this is the point. What God offers is himself. The invitation is not to a doctrine or a ritual or a program but to a relationship: &ldquo;Incline your ear, and come to me; hear, that your soul may live&rdquo; (55:3a). The soul&rsquo;s life comes from hearing and responding to God. This is the same logic as John 17:3: &ldquo;And this is eternal life, that they know you, the only true God, and Jesus Christ whom you have sent.&rdquo; Eternal life is not a commodity but a relationship &mdash; and it is offered freely.",
      "Verses 3b&ndash;5 ground this invitation in the covenant. God promises to make &ldquo;an everlasting covenant&rdquo; with his people, based on &ldquo;the steadfast, sure love for David.&rdquo; This is a remarkable theological move: the promises God made to David &mdash; of an enduring dynasty, a throne established forever, a son who would reign and be God&rsquo;s own son (2 Samuel 7) &mdash; are now being extended beyond the house of David to the whole people. And not only to Israel: &ldquo;Behold, you shall call a nation that you do not know, and a nation that did not know you shall run to you, because of the Lord your God, and of the Holy One of Israel, for he has glorified you&rdquo; (55:5). The Davidic covenant has always had a global horizon.",
      "The early Christians read this passage with clear eyes: the &ldquo;everlasting covenant&rdquo; and the &ldquo;steadfast love for David&rdquo; find their fulfillment in Jesus, the son of David, whose resurrection is described by Paul as the fulfillment of the &ldquo;holy and sure blessings of David&rdquo; (Acts 13:34, quoting Isaiah 55:3). In Christ, the free invitation of Isaiah 55 has been issued in its fullest form: the one who died and rose again now calls all people from every nation to come, to believe, and to live. The price has been paid &mdash; not by those who come, but by the one who invites them.",
      "The radical freeness of the invitation deserves special emphasis. &ldquo;Without money and without price&rdquo; &mdash; the Greek translation uses &lsquo;dorean,&rsquo; the same word Paul uses in Romans 3:24: &ldquo;justified by his grace as a gift.&rdquo; Salvation cannot be purchased, earned, or bartered for. The poverty of the recipients is not a disqualification &mdash; it is precisely the condition God addresses. &ldquo;He who has no money, come.&rdquo; The one who feels most unable to afford the feast is the one most directly named in the invitation.",
    ],
  },
  {
    id: "Words Higher Than Ours",
    heading: "My Ways Are Higher: The Incomprehensible God",
    reference: "Isaiah 55:6&ndash;9",
    paragraphs: [
      "The second movement of Isaiah 55 begins with an urgent call to seek: &ldquo;Seek the Lord while he may be found; call upon him while he is near; let the wicked forsake his way, and the unrighteous man his thoughts; let him return to the Lord, that he may have compassion on him, and to our God, for he will abundantly pardon&rdquo; (55:6&ndash;7). Two things are happening simultaneously here. First, there is a note of urgency &mdash; &ldquo;while he may be found,&rdquo; &ldquo;while he is near.&rdquo; The window of grace, though wide, is not infinite in this age; now is the moment to respond. Second, there is a promise of extraordinary mercy: God will &ldquo;abundantly pardon.&rdquo; The Hebrew is literally &ldquo;multiply to pardon&rdquo; &mdash; an extravagance of forgiveness that exceeds our ability to sin.",
      "Verse 7 contains the call to repentance in its essential form: the wicked man must &ldquo;forsake his way&rdquo; and the unrighteous man his &ldquo;thoughts.&rdquo; Repentance in Isaiah&rsquo;s vision is not merely behavioral but cognitive &mdash; it involves a change not only in what we do but in how we think. The &ldquo;thoughts&rdquo; that need to be forsaken are precisely the thoughts of verses 8&ndash;9: the assumption that we understand how God works, that his ways are transparent to us, that his purposes follow the logic we would choose.",
      "Then come the great verses 8&ndash;9, among the most quoted in all of Scripture: &ldquo;For my thoughts are not your thoughts, neither are your ways my ways, declares the Lord. For as the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts.&rdquo; The context is crucial: these words come immediately after the promise of abundant pardon. God is not saying here that he is distant and unknowable in a cold, philosophical sense. He is saying that his mercy is far greater than our capacity to comprehend &mdash; that when we assume God cannot or will not forgive us, we are thinking thoughts that are not his thoughts.",
      "The &ldquo;higher ways&rdquo; passage is often quoted as a general reminder of divine transcendence, and that application is certainly legitimate. But in its original context it is specifically a statement about God&rsquo;s redemptive purposes. The exiles could not imagine how God could restore a shattered nation, rebuild a destroyed Temple, or fulfill ancient promises that seemed impossibly remote. God&rsquo;s answer is not a philosophical argument but a claim: my plan of salvation operates at a level your reasoning cannot reach. What looks impossible from your vantage point is the unfolding of my eternal purpose.",
      "This passage is the great corrective to two opposite errors. The first error is self-righteous presumption &mdash; assuming that we know what God must do, that his ways must conform to our moral or theological expectations. The second error is despair &mdash; assuming that our sin is too great for his mercy, that our situation is beyond his redemptive reach. Both errors arise from applying human thoughts to a God whose ways are as far above ours as heaven is above earth. The appropriate posture is neither presumption nor despair but humble, trusting seeking: &ldquo;Call upon him while he is near.&rdquo;",
      "For the Christian reader, verses 8&ndash;9 find their deepest meaning at the cross. Nothing in human reasoning would have invented the strategy of salvation through the suffering and death of God&rsquo;s own Son. Paul says it is &ldquo;foolishness to those who are perishing&rdquo; (1 Corinthians 1:18) &mdash; it runs entirely counter to human notions of power and wisdom. But this is precisely Isaiah&rsquo;s point: &ldquo;my ways are not your ways.&rdquo; The cross is the ultimate demonstration that God&rsquo;s thoughts of redemption surpass all our expectations. What we would never have imagined is exactly what God chose, because only God could have thought of it.",
    ],
  },
  {
    id: "Seek the Lord",
    heading: "The Word That Will Not Return Empty",
    reference: "Isaiah 55:10&ndash;13",
    paragraphs: [
      "The third and final movement of Isaiah 55 is one of the most magnificent passages in the prophetic literature. God moves from invitation and declaration to assurance, grounding the entire chapter in the sovereign effectiveness of his own word: &ldquo;For as the rain and the snow come down from heaven and do not return there but water the earth, making it bring forth and sprout, giving seed to the sower and bread to the eater, so shall my word be that goes out from my mouth; it shall not return to me empty, but it shall accomplish that which I purpose, and shall succeed in the thing for which I sent it&rdquo; (55:10&ndash;11).",
      "The imagery of rain and snow is perfectly chosen for an audience in the ancient Near East, where agriculture was entirely dependent on seasonal rainfall. Farmers did not question whether the rain, once fallen, would water the earth &mdash; of course it would. Rain is effective by its very nature; it cannot fall to the ground and leave the earth dry. In the same way, God declares, his word cannot reach human hearts and leave them unchanged. The word of the Lord is not advice or suggestion; it is a performative declaration that accomplishes the very reality it announces.",
      "This is a breathtaking claim about the nature of divine speech. When God speaks, things happen. &ldquo;And God said, let there be light &mdash; and there was light&rdquo; (Genesis 1:3). &ldquo;He spoke, and it came to be; he commanded, and it stood firm&rdquo; (Psalm 33:9). The word of Isaiah 55 &mdash; the invitation to come, the promise of abundant pardon, the assurance of the everlasting covenant &mdash; is not a wish or a hope. It is a creative, effective, sovereign word that will bring about exactly what it announces. The exiles will return. The nations will come. The new creation will arrive. God has said so.",
      "The consequence is stated in verses 12&ndash;13 with an almost lyrical beauty: &ldquo;For you shall go out in joy and be led forth in peace; the mountains and the hills before you shall break forth into singing, and all the trees of the field shall clap their hands. Instead of the thorn shall come up the cypress; instead of the brier shall come up the myrtle; and it shall make a name for the Lord, an everlasting sign that shall not be cut off.&rdquo; The exodus from Babylon will be an event so glorious that even the creation will celebrate. The curse on the land &mdash; thorns and briers since Genesis 3 &mdash; will be reversed. Nature itself will break into applause.",
      "The image of the mountains and hills singing and the trees clapping their hands is not mere poetry for its own sake. It is an affirmation that the redemption of humanity has cosmic dimensions. The New Testament agrees: &ldquo;the creation waits with eager longing for the revealing of the sons of God&rdquo; (Romans 8:19), and in Revelation the whole creation joins the song of praise when the Lamb is worshiped. The renewal of the human heart and the renewal of the created order are not two separate events &mdash; they are two aspects of the one great act of new creation that God is working through his word.",
      "For the church, the assurance of Isaiah 55:10&ndash;11 is the foundation of confidence in gospel proclamation. The word of God &mdash; the announcement of the death and resurrection of Jesus, the call to repent and believe &mdash; will not return empty. It will accomplish what God sent it to accomplish. This does not mean every sermon will be received or every witness will see immediate fruit. But it does mean that the sovereign word of God is at work through the ordinary means of faithful preaching and witness, and that God will gather his people through it. The sower who goes out weeping will return with songs of joy, carrying the sheaves (Psalm 126:6).",
    ],
  },
  {
    id: "Application",
    heading: "Application: Coming to the Waters of Grace",
    reference: "Isaiah 55; John 7:37&ndash;39; Revelation 22:17",
    paragraphs: [
      "Isaiah 55 addresses the deepest question of the human soul: where will I find what I truly need? The chapter diagnoses with surgical precision the human tendency to spend our lives &mdash; our money, our labor, our attention, our love &mdash; on things that cannot ultimately satisfy. We are created for God, and only God can quench the thirst at the center of our being. The invitation of Isaiah 55 is not a peripheral passage; it is the invitation of the whole Bible, addressed to every human heart in every generation.",
      "The first application is the call to honest thirst. Before we can come to the waters, we must acknowledge that we are thirsty. One of the great spiritual deceits of a comfortable life is the ability to suppress the consciousness of need. We can anesthetize ourselves with work, entertainment, relationships, and achievement &mdash; and never sit long enough to feel the thirst that only God can meet. Isaiah 55 asks us to stop spending our labor on what does not satisfy and to let the real hunger surface. It is a call to spiritual honesty that is, paradoxically, the beginning of joy.",
      "The second application is the radical freeness of God&rsquo;s grace. &ldquo;Without money and without price.&rdquo; There is no means test for the grace of God. There is no moral achievement required before the invitation is valid. The poorest, most desperate, most failure-ridden person is precisely the one to whom the invitation is addressed: &ldquo;he who has no money, come.&rdquo; For anyone who has spent years trying to earn God&rsquo;s acceptance through religious performance, moral effort, or sheer willpower, this verse is one of the most liberating in all of Scripture. You cannot pay for what God is offering. That is not because it is cheap &mdash; it is because it has already been paid for, at infinite cost, by Jesus Christ.",
      "The third application comes from the &ldquo;higher ways&rdquo; passage of verses 8&ndash;9. When life does not make sense &mdash; when God&rsquo;s purposes seem opaque, when suffering continues without explanation, when prayers seem unanswered and promises seem delayed &mdash; the response of Isaiah 55 is not a philosophical argument but a call to trust a God whose ways are higher than we can see from where we stand. This is not an invitation to intellectual suicide. It is an invitation to intellectual humility: to acknowledge that we are finite creatures trusting an infinite God whose redemptive purposes span more time and operate at more depth than our small window of experience can take in.",
      "The fourth application is the power of the word. If God&rsquo;s word does not return empty &mdash; if it accomplishes everything he sends it to do &mdash; then the ordinary practices of Christian life take on a profound significance. Reading Scripture is not merely an intellectual exercise; it is an encounter with a creative, effective word that God is using to accomplish his purposes in us. Preaching the gospel is not merely religious activity; it is participating in the sovereign word of God that is gathering his people from every nation. Prayer in the name of Jesus is not shouting into the void; it is aligning ourselves with a God whose word is at work in the world.",
      "Finally, Isaiah 55 ends with a vision of joy: &ldquo;you shall go out in joy and be led forth in peace.&rdquo; The invitation of the chapter is not to a life of grim duty or anxious striving but to a life of feasting, delight, and eventually, exodus &mdash; a going out in joy that echoes the original exodus from Egypt and anticipates the final new creation. The Christian life, entered through the free invitation of grace and sustained by a word that never fails, is headed toward this joy. The thorns and briers of our present age &mdash; the suffering, the frustration, the incompleteness &mdash; are not the final word. The myrtle and the cypress are coming. The mountains are already warming up to sing.",
    ],
  },
];

const videoItems = [
  { videoId: "xPMBx0VdyCo", title: "BibleProject - Overview of Isaiah 40-66" },
  { videoId: "8YkbSMDTMsc", title: "Isaiah 55 - Come to the Waters - Bible Study" },
  { videoId: "AR4RQMH_sNs", title: "My Ways Are Higher Than Your Ways - Isaiah 55 Explained" },
  { videoId: "d-TI48lFPHM", title: "The Free Grace of God in Isaiah 55 - Come Everyone Thirsty" },
];

export default function Isaiah55GuidePage() {
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
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Isaiah 55 &mdash; Come, Everyone Who Thirsts
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The great invitation of God to a thirsty world &mdash; to come to the waters without money, to hear and live, to seek the Lord while he is near, and to trust in a word that never returns empty, from a God whose ways are as high above ours as heaven is above the earth.
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

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Isaiah 55 through these video teachings on God&rsquo;s free invitation to come to the waters, the incomparable ways of God, and the word that accomplishes everything it is sent to do.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>His Word Will Not Return Empty</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Isaiah 55 is the Bible&rsquo;s great open door &mdash; a lavish invitation from a God whose mercy is deeper than our worst failure and whose ways are higher than our best understanding. The thirsty are called to come, the wicked are called to return, and all are promised a word that will accomplish exactly what God intends: a people going out in joy, led forth in peace, as the whole creation breaks into song around them.
          </p>
        </div>
      </main>
    </div>
  );
}
