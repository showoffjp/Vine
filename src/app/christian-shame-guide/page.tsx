"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Guilt and Shame", "Shame in the Garden", "The God Who Clothes", "The Gospel and Shame", "Breaking Free", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Guilt and Shame",
    heading: "Guilt and Shame: Understanding the Difference",
    paragraphs: [
      "Guilt and shame are closely related but distinct, and the distinction is crucial for healing. Guilt says, &ldquo;I have done something bad&rdquo; &mdash; it is focused on a specific wrong action and can lead to repentance and repair. Shame says, &ldquo;I am bad&rdquo; &mdash; it is focused on the self, a global sense of being defective, unworthy, and unacceptable. Guilt, rightly handled, is healthy: it alerts us to genuine wrongdoing and points toward confession and change. Shame, especially toxic shame, is corrosive: it attacks identity, isolates, and drives hiding. Researcher Brene Brown has popularized this distinction, noting that shame &ldquo;corrodes the very part of us that believes we are capable of change.&rdquo; The Christian faith addresses both, but differently: guilt is met with forgiveness (the removal of the verdict of condemnation), while shame is met with a restored identity and belonging (the removal of disgrace and the gift of honor). Understanding which one you are wrestling with &mdash; the bad thing you did, or the bad person you fear you are &mdash; is the beginning of finding the right remedy.",
      "The difference between &ldquo;I did something bad&rdquo; and &ldquo;I am bad&rdquo; may sound subtle, but it is the difference between two entirely different inner worlds. Guilt keeps the action and the self distinct: I am a person who did a wrong thing, and that thing can be confessed, repaired, forgiven, and left behind. Shame collapses the action into the self: I am not a good person who did a bad thing; I am a bad thing, defective at the core, and no amount of repair can fix what is wrong because what is wrong is me. This is why guilt can be relieved by forgiveness but shame often is not &mdash; the shamed person hears &ldquo;you are forgiven&rdquo; and still feels, underneath, &ldquo;but I am still unacceptable.&rdquo;",
      "Because guilt is about behavior, it is in principle solvable: a wrong can be named, confessed, made right, and released. This is why healthy guilt is a gift &mdash; it functions like pain in the body, alerting us to something that needs attention and motivating repair. The conscience that registers genuine guilt is working as it should. The danger is not guilt itself but unrelieved guilt that is never brought to confession and forgiveness, where it can curdle into something heavier. Properly handled, guilt does its work and then lets go; it points us toward repentance and then toward the grace that wipes the slate clean.",
      "Shame, by contrast, does not point toward repair because it does not locate the problem in something fixable; it locates the problem in the self. This is why toxic shame is so corrosive: there is nothing to confess and be done with, only a pervasive sense of being wrong. Brown&rsquo;s observation that shame &ldquo;corrodes the very part of us that believes we are capable of change&rdquo; captures the cruelty of it &mdash; shame undermines the very capacity it would take to address it. The shamed person does not think, &ldquo;I can do better&rdquo;; they think, &ldquo;there is no point, because I am the problem.&rdquo; Shame breeds despair and paralysis rather than growth.",
      "The behaviors that flow from guilt and shame differ accordingly. Guilt tends to move us toward others: to apologize, to confess, to make amends, to repair the relationship that was damaged. Shame tends to move us away from others: to hide, to withdraw, to conceal, to perform a false self that we hope will be acceptable. Guilt is relational in a healing direction; shame is relational in an isolating direction. This is why communities that respond to wrongdoing with shaming &mdash; with contempt and exposure rather than honest accountability &mdash; tend to drive the very behaviors they condemn underground, where they grow in secret.",
      "The Christian gospel speaks to both, but it is important to see that it speaks to them differently. To guilt, the gospel says: you are forgiven. The penalty has been paid, the verdict is reversed, there is &ldquo;now no condemnation&rdquo; (Rom 8:1). To shame, the gospel says something that goes further than forgiveness: you are not finally defective, you are not cast out, you are clothed, honored, named, and beloved. Forgiveness alone does not heal shame, because shame is not first about what we have done but about who we fear we are. Shame needs not only pardon but a restored identity &mdash; and that is precisely what the gospel offers.",
      "Learning to discern which one is at work is genuinely clarifying. When you feel the weight of conscience, ask: is this the voice of guilt, naming a specific wrong that I can confess and make right? Or is this the voice of shame, condemning my whole self as worthless and beyond hope? The first is to be heard and acted on; it leads to confession and freedom. The second is, very often, a lie to be resisted with the truth of the gospel &mdash; for the deepest word God speaks over his children is not &ldquo;you are defective&rdquo; but &ldquo;you are mine.&rdquo; Sorting the two is the beginning of finding the right remedy for each.",
    ],
  },
  {
    id: "Shame in the Garden",
    heading: "Shame in the Garden: The Origin of Hiding",
    paragraphs: [
      "The story of shame begins in Eden. Before the fall, &ldquo;the man and his wife were both naked and were not ashamed&rdquo; (Gen 2:25) &mdash; a picture of complete openness, intimacy, and the absence of any need to hide. But when Adam and Eve sinned, &ldquo;the eyes of both were opened, and they knew that they were naked. And they sewed fig leaves together and made themselves loincloths&rdquo; (Gen 3:7). Shame entered the world with sin, and its first instinct was to cover and to hide. When God came walking in the garden, they &ldquo;hid themselves from the presence of the Lord&rdquo; (3:8). This is the anatomy of shame: exposure, the frantic attempt to cover oneself, and withdrawal from relationship &mdash; from God and from one another (immediately they begin to blame). Shame is the experience of feeling exposed and found wanting, and its universal response is to hide. Every human being since has known this impulse: to cover the parts of ourselves we fear would make us unacceptable if seen.",
      "The phrase &ldquo;naked and not ashamed&rdquo; describes a state of being that most of us can scarcely imagine: complete transparency without any fear of rejection. Adam and Eve were fully seen &mdash; by God and by each other &mdash; and fully at peace. There was nothing to conceal because there was nothing to fear in being known. This is the original human condition for which we were made: to be wholly known and wholly secure, with no gap between who we are and who we are seen to be. Shame is, in a sense, the loss of this &mdash; the introduction of a terrible gap between our true selves and the selves we dare to show.",
      "It is striking that the immediate effect of the first sin was not first guilt but shame &mdash; not &ldquo;we have done wrong&rdquo; but &ldquo;we are naked.&rdquo; Their eyes were opened and they became suddenly, painfully self-conscious; they saw themselves as exposed and could not bear it. The fig leaves were the first act of self-protection, the first attempt to manage how they would be seen, the first covering of a self now experienced as unacceptable. Every subsequent human effort to hide, to perform, to construct an acceptable image, traces back to this moment. The fig leaf is the oldest garment in the world, and we are all still sewing.",
      "Then comes the hiding from God himself. When they hear the Lord walking in the garden, Adam and Eve hide among the trees. This is shame&rsquo;s deepest and most tragic instinct: to flee from the very presence that could heal it. Shame tells us that if we were truly seen, we would be rejected &mdash; and so it drives us away from the One whose perfect knowledge of us is matched by perfect love. The tragedy is that hiding from God solves nothing; it only deepens the isolation. &ldquo;Where are you?&rdquo; God asks (Gen 3:9) &mdash; not because he does not know, but because he is seeking the ones who are hiding. The question is the first note of grace in a world newly broken by shame.",
      "Notice, too, how quickly shame turns to blame. Confronted by God, Adam blames Eve (&ldquo;the woman whom you gave to be with me&rdquo;) and implicitly God himself; Eve blames the serpent. Shame cannot bear to be exposed, so it deflects, accuses, and fractures relationship. What had been a union of openness becomes a scene of mutual accusation. This is shame&rsquo;s social cost: it not only isolates the individual but corrodes the bonds between people, replacing transparency with self-protection and blame. The very intimacy for which we were made becomes the thing we most fear.",
      "The anatomy of shame laid out in Genesis 3 &mdash; exposure, covering, hiding, blaming &mdash; is universal. Every human being knows the impulse to conceal the parts of themselves they fear would make them unacceptable if seen: the failures, the secret sins, the histories, the inadequacies, the wounds. We curate our public selves, manage our image, and keep certain rooms of our hearts locked even from those closest to us. The fig leaves have become sophisticated &mdash; achievement, reputation, busyness, religiosity &mdash; but the impulse is the same. We are still trying to cover what we fear cannot be loved if it is seen.",
      "Understanding shame&rsquo;s origin in the garden matters because it tells us what shame is and what it is not. Shame is not simply low self-esteem or a psychological glitch; it is a real spiritual condition that entered the world with sin and that touches every human being. But locating it in this story also points toward its remedy. The same chapter that records the entrance of shame records the first hint of grace: a God who comes seeking, who asks &ldquo;where are you,&rdquo; and who &mdash; as the next scene reveals &mdash; will not leave his ashamed children in their inadequate coverings, but will clothe them himself.",
    ],
  },
  {
    id: "The God Who Clothes",
    heading: "The God Who Clothes the Naked",
    paragraphs: [
      "The gospel response to shame is foreshadowed in the very next scene. After pronouncing the consequences of sin, God does something tender and significant: &ldquo;The Lord God made for Adam and for his wife garments of skins and clothed them&rdquo; (Gen 3:21). Their fig-leaf coverings were inadequate; God himself provides a better covering &mdash; and to do so, an animal had to die, the first shedding of blood to cover human shame, anticipating the ultimate covering through the death of Christ. Throughout Scripture, God is the one who covers shame and clothes the naked. The prophet pictures God clothing his people: &ldquo;he has clothed me with the garments of salvation; he has covered me with the robe of righteousness&rdquo; (Isa 61:10). In the parable of the prodigal son, the father covers his returning son&rsquo;s shame with the best robe (Luke 15:22). The consistent biblical image is of a God who does not expose and humiliate the ashamed but who covers, clothes, and restores them &mdash; replacing the rags of disgrace with the robes of honor.",
      "It is worth lingering on the contrast between the fig leaves and the garments of skins. The fig leaves were the work of human hands &mdash; an inadequate, self-made attempt to cover shame, the kind of covering that always leaves us still feeling exposed. The garments of skins were the work of God&rsquo;s hands &mdash; a sufficient covering that he provided. This is a picture of the whole biblical drama of salvation: human beings cannot finally cover their own shame; every fig leaf we sew leaves us still afraid of being seen. Only the covering God provides is adequate. And that covering, even in Eden, came at a cost: something had to die so that the naked could be clothed.",
      "The detail that &ldquo;garments of skins&rdquo; required the death of an animal is not incidental. It is the first shedding of blood in the Bible, and it occurs precisely to cover human shame. From the very beginning, Scripture quietly establishes that the covering of shame is costly &mdash; that it is not achieved by minimizing the problem or pretending the nakedness away, but by a sacrifice that provides a covering the guilty could not provide for themselves. This anticipates the entire sacrificial system, and beyond it, the cross, where the Lamb of God is slain so that the shame of the world might be covered once and for all.",
      "This image of God as the one who clothes recurs throughout Scripture. Isaiah rejoices, &ldquo;he has clothed me with the garments of salvation; he has covered me with the robe of righteousness, as a bridegroom decks himself like a priest with a beautiful headdress&rdquo; (Isa 61:10). Zechariah sees the high priest Joshua standing in filthy garments &mdash; an image of shame and defilement &mdash; and hears the Lord command, &ldquo;Remove the filthy garments from him&hellip; behold, I have taken your iniquity away from you, and I will clothe you with pure vestments&rdquo; (Zech 3:4). The God of the Bible is consistently the God who takes away the rags of disgrace and clothes his people in honor.",
      "Nowhere is this more vivid than in the parable of the prodigal son. The younger son returns home in shame, rehearsing a speech in which he asks only to be treated as a hired servant &mdash; he no longer dares to claim the identity of a son. But before he can even finish, the father runs to him, embraces him, and commands, &ldquo;Bring quickly the best robe, and put it on him&rdquo; (Luke 15:22). The robe covers his shame and restores his honor; the ring restores his authority; the feast restores his belonging. The father does not lecture, expose, or shame the returning son. He covers him. This is the heart of God toward the ashamed who come home.",
      "What unites all these images is a God who responds to shame not by exposing and humiliating but by covering and restoring. This runs directly against our deepest fear about God &mdash; the fear, inherited from the garden, that if we were truly seen we would be cast out. The God of Scripture sees us fully, including everything we most want to hide, and his response is not contempt but a robe. He is not waiting to expose us; he is moving to cover us. The shame-bound heart, which expects God to recoil, discovers instead a God who clothes.",
      "This is the deep answer to the lie of shame, which says that exposure means rejection. The God who clothes the naked declares that being fully known need not mean being cast out &mdash; that the One who sees everything is the very One who covers everything. For the person bound by shame, the image of God as clother is a lifeline: not a God who turns away in disgust from what we are, but a God who, even in Eden, even at the cross, even at the door of the father&rsquo;s house, moves toward his ashamed children with a robe in his hands.",
    ],
  },
  {
    id: "The Gospel and Shame",
    heading: "The Gospel and Shame: Known and Still Loved",
    paragraphs: [
      "Where the gospel addresses guilt with justification (the legal verdict of &ldquo;not guilty,&rdquo; even &ldquo;righteous&rdquo;), it addresses shame with a new identity and belonging. At the cross, Jesus &ldquo;despised the shame&rdquo; (Heb 12:2) &mdash; he bore not only our guilt but our disgrace, hanging exposed and naked before a mocking crowd, taking our shame upon himself. In exchange, he gives his honor. The believer is no longer defined by their failures, their past, their abuse, or their sense of defectiveness, but by their union with Christ and their adoption as a beloved child of God. &ldquo;Those who look to him are radiant, and their faces shall never be ashamed&rdquo; (Ps 34:5). &ldquo;Whoever believes in him will not be put to shame&rdquo; (Rom 10:11). The gospel says to the shame-bound heart: you are fully known &mdash; even the parts you most want to hide &mdash; and yet fully loved. This is the opposite of shame&rsquo;s lie. To be known and still loved, exposed and still embraced, is the healing that shame most needs and that only the gospel finally provides.",
      "The crucifixion was an instrument of shame as much as of pain. The Romans designed it to humiliate: the condemned hung naked in a public place, exposed to mockery, displayed as accursed and rejected. When Hebrews says that Jesus &ldquo;endured the cross, despising the shame&rdquo; (Heb 12:2), it points to something often overlooked &mdash; that Christ bore not only the penalty of our guilt but the disgrace of our shame. He took upon himself the exposure, the mockery, the rejection, the position of the accursed and cast-out one. He was stripped so that we might be clothed; he was shamed so that we might be honored.",
      "This is the deep logic of the gospel&rsquo;s answer to shame: a great exchange. Just as Christ took our guilt and gave us his righteousness, so he took our shame and gives us his honor. He was treated as the rejected one so that we might be received as beloved children. &ldquo;He himself bore our sins in his body on the tree&rdquo; (1 Pet 2:24) includes the bearing of our disgrace. The shamed heart that grasps this discovers that its shame has already been carried &mdash; that there is no disgrace left to bear because Christ has borne it, and in its place he has given his own standing as the honored Son.",
      "This is why the gospel&rsquo;s answer to shame is fundamentally about identity. Shame says, &ldquo;you are defined by your worst moments, your failures, your wounds, your sense of defectiveness.&rdquo; The gospel says, &ldquo;you are defined by your union with Christ and your adoption as a child of God.&rdquo; The believer&rsquo;s deepest identity is no longer &ldquo;the one who failed,&rdquo; &ldquo;the one who was abused,&rdquo; &ldquo;the one who is not enough,&rdquo; but &ldquo;the one whom God loves, whom Christ has clothed, whom the Father has named his own.&rdquo; This is not a matter of pretending the failures and wounds did not happen; it is a matter of their no longer being the final word about who we are.",
      "Scripture repeatedly attaches the promise &ldquo;will not be put to shame&rdquo; to faith in Christ. &ldquo;Those who look to him are radiant, and their faces shall never be ashamed&rdquo; (Ps 34:5). &ldquo;Whoever believes in him will not be put to shame&rdquo; (Rom 10:11). &ldquo;No one who waits for you shall be put to shame&rdquo; (Ps 25:3). The consistent biblical promise is that the one who looks to God in faith will not finally be disgraced. There may be seasons of feeling shame, but the ultimate verdict over the believer is not disgrace but honor; not exposure and rejection but a face made radiant by looking to the One who loves them.",
      "At the heart of the gospel&rsquo;s healing of shame is a paradox that shame insists is impossible: to be fully known and still fully loved. Shame is built on the conviction that if we were truly seen &mdash; if the hidden things came to light &mdash; we would be rejected. The gospel confronts this directly. God knows everything: every sin, every secret, every wound, every shameful thing we have done and that has been done to us. He knows it all, and he loves us still, to the point of the cross. &ldquo;While we were still sinners, Christ died for us&rdquo; (Rom 5:8). We are not loved because we have managed to hide the worst; we are loved with the worst fully known.",
      "This is the exact opposite of shame&rsquo;s lie, and it is the medicine shame most needs. Shame says, &ldquo;if they knew, they would leave&rdquo;; the gospel says, &ldquo;he knows, and he stays.&rdquo; To be known and still loved, exposed and still embraced, is the deepest human need and the deepest shame-healing reality &mdash; and it is precisely what God offers in Christ. The shamed heart can come out of hiding, not because it has finally become acceptable, but because it has discovered that it is loved as it is, fully seen and fully kept. This is the healing that no self-improvement and no concealment can provide, and that only the gospel finally does.",
    ],
  },
  {
    id: "Breaking Free",
    heading: "Breaking Free from Toxic Shame",
    paragraphs: [
      "Healing from toxic shame is a process that involves both gospel truth and practical, often relational, work. First, shame must be brought into the light &mdash; it thrives in secrecy and dies in the presence of safe, honest relationship. &ldquo;Confess your sins to one another&hellip; that you may be healed&rdquo; (Jas 5:16); naming shame to a trusted person breaks its power. Second, the lies of shame must be replaced with the truth of identity in Christ &mdash; a deliberate, repeated reorientation of how one sees oneself, grounded in what God says rather than what shame says. Third, the roots of shame often lie in real wounds &mdash; abuse, rejection, trauma &mdash; and addressing these may require the help of a counselor or therapist alongside spiritual community. Fourth, shame is healed in community: being truly known and still embraced by others who reflect God&rsquo;s acceptance. And finally, shame gives way as one grows in the experiential knowledge of God&rsquo;s love. This is not a quick fix but a journey, and the church is meant to be a community of grace where the ashamed can come out of hiding, be covered with love rather than judgment, and discover that in Christ there is &ldquo;now no condemnation&rdquo; (Rom 8:1) and no more disgrace.",
      "The first movement out of shame is to bring it into the light, because shame is a creature of darkness. It survives by secrecy; the things we never speak aloud retain a power over us precisely because they remain hidden. The moment shame is named to a safe, trustworthy person &mdash; spoken out loud and met not with rejection but with acceptance &mdash; its power begins to break. &ldquo;Confess your sins to one another and pray for one another, that you may be healed&rdquo; (Jas 5:16). This is risky and frightening, because shame insists that exposure means rejection. But the experience of being honest about our worst and being loved anyway is one of the most healing things a human being can know.",
      "The second movement is the patient replacement of shame&rsquo;s lies with the truth of who we are in Christ. Shame has its own script &mdash; &ldquo;you are worthless, you are defective, you are unlovable, you are beyond hope&rdquo; &mdash; and that script runs on a loop, often beneath conscious awareness. Healing involves a deliberate, repeated reorientation: learning to hear and believe what God says over against what shame says. This is not positive thinking or denial; it is grounding one&rsquo;s identity in objective gospel truth &mdash; &ldquo;I am a beloved child of God, clothed in Christ, fully known and fully loved&rdquo; &mdash; and returning to that truth again and again until, slowly, it begins to feel true.",
      "The third movement recognizes that shame often has roots in real wounds. Much toxic shame is not the result of one&rsquo;s own sin but of what was done to a person &mdash; abuse, rejection, neglect, trauma, the contempt of others internalized over years. These roots are real, and addressing them often requires more than spiritual encouragement; it may require the skilled help of a counselor or therapist working alongside spiritual community. Seeking such help is not a failure of faith. The wounds that gave rise to shame are real injuries, and tending them with appropriate professional care is an act of wisdom and stewardship, not of unbelief.",
      "The fourth movement is community, because shame is healed relationally. Shame isolates; it drives us into hiding and convinces us that we are uniquely defective, uniquely beyond acceptance. The antidote is the experience of being truly known and still embraced by others &mdash; of belonging to a community that reflects God&rsquo;s acceptance in the flesh. When the church functions as it should, it becomes a place where people can come out of hiding, where the ashamed are met with grace rather than judgment, where being known does not mean being cast out. We cannot think our way out of shame in isolation; we need to be loved out of it by real people who know us and stay.",
      "The final and deepest movement is growing in the experiential knowledge of God&rsquo;s love. All the other movements serve this one. Shame finally gives way not merely to better self-talk or even to safe relationships, but to an ever-deepening grasp &mdash; in the heart, not only the head &mdash; that we are loved by God. This is the slow work of prayer, of meditating on the gospel, of receiving the Spirit&rsquo;s witness that we are God&rsquo;s children (Rom 8:16), of letting the love of God become not just a doctrine we affirm but a reality we rest in. As that love becomes more real, shame finds less and less to hold onto.",
      "It is important to be honest that this is a journey, not a quick fix. Shame that has been built up over years, sometimes from childhood, does not dissolve in a single moment of insight. There will be setbacks, days when the old lies feel true again, seasons when the work feels slow. But the direction is hopeful, and the destination is sure. The church is meant to be the community where this healing happens &mdash; a community of grace where the ashamed can come out of hiding, be covered with love rather than judgment, and discover, more and more deeply, that in Christ there is &ldquo;now no condemnation&rdquo; (Rom 8:1) and no more disgrace. The God who clothed Adam and Eve, who ran to the prodigal, who despised the shame of the cross, is still in the business of clothing his children in honor.",
    ],
  },
];

const videoItems = [
  { videoId: "qS5BMnSU_kc", title: "The Gospel and Shame - A Christian Perspective" },
  { videoId: "8KkKuTCFvzI", title: "Guilt vs Shame and How the Gospel Heals" },
  { videoId: "psN1DORYYV0", title: "Finding Freedom from Shame in Christ" },
];

export default function ChristianShameGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "0.78rem", color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.6rem" }}>
            Faith &amp; Shame
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Shame
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Shame through a Christian lens &mdash; the difference between guilt and shame, shame in the garden of Eden, the God who clothes the naked, how the gospel covers shame, breaking free from toxic shame, and finding a new identity in Christ.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;Those who look to him are radiant, and their faces shall never be ashamed.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Psalm 34:5</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(225, 29, 72, 0.12)` : "transparent",
              color: tab === t ? ACCENT : MUTED,
              cursor: "pointer", fontSize: "0.88rem", fontWeight: tab === t ? 600 : 400,
              transition: "all 0.15s ease", whiteSpace: "nowrap" as const,
            }}>
              {t}
            </button>
          ))}
        </nav>

        {/* Text tab content */}
        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>{currentSection.heading}</h2>
            {currentSection.paragraphs.map((para, i) => (
              <p key={i} style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </section>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((video) => (
                <div key={video.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={video.videoId} title={video.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Fully Known and Still Loved</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Shame says that if we were truly seen we would be cast out. The gospel says the opposite: God knows everything &mdash; every failure, every wound, every secret &mdash; and loves us still, to the point of the cross. The God who clothed Adam and Eve, who ran to the prodigal, who despised the shame of the cross, is still in the business of clothing his children in honor. To be known and still loved, exposed and still embraced, is the healing that shame most needs and that only the gospel finally provides.</p>
        </div>
      </main>
    </div>
  );
}
