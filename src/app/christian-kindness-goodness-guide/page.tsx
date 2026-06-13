"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Fruit of the Spirit", "The Kindness of God", "Practical Compassion", "Doing Good to All", "Goodness in a Harsh World", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Fruit of the Spirit",
    heading: "Kindness and Goodness as Fruit of the Spirit",
    paragraphs: [
      "When Paul lists the fruit of the Spirit in Galatians 5:22-23 &mdash; &ldquo;love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control&rdquo; &mdash; he places kindness and goodness side by side at the heart of the catalogue. The two words are distinct in the original Greek, and the distinction matters. Kindness translates &ldquo;chrestotes,&rdquo; a word that carries the sense of tenderness, sweetness, and a disposition that is gentle and useful toward others. Goodness translates &ldquo;agathosune,&rdquo; a word that points to moral excellence, uprightness, and an active, generous benevolence that does what is right and seeks the welfare of others. Together they describe a character that is both soft and strong &mdash; tender in its touch and upright in its substance.",
      "Kindness, in the biblical sense, is the way a Spirit-shaped person treats others. It is the warmth that disarms, the gentleness that does not bruise, the consideration that notices and responds to another person&rsquo;s burden. It is the opposite of harshness, abrasiveness, and the cold efficiency that uses people as obstacles or instruments. The word &ldquo;chrestotes&rdquo; was used in ordinary Greek to describe wine that had mellowed with age &mdash; the sharpness gone, the bitterness softened into something smooth and pleasant. Kindness is what happens to a personality when the Spirit has been at work in it for a long time: the edges worn down, the readiness to wound replaced by a readiness to heal.",
      "Goodness is kindness with a spine. Where kindness might be content to be merely pleasant, goodness insists on the right. &ldquo;Agathosune&rdquo; is a moral quality &mdash; it is goodness in action, the active doing of what is beneficial and just. Goodness can confront when love requires it; it can rebuke, resist evil, and overturn the tables in the temple. Jesus was good as well as kind, and his goodness sometimes took the form of sharp words to the self-righteous and decisive action against exploitation. Kindness without goodness can collapse into mere niceness &mdash; an inoffensive blandness that never risks anything. Goodness without kindness can harden into cold rectitude. The Spirit produces both, and they balance and complete each other.",
      "There is genuine overlap between the two, and Scripture does not draw the line with surgical precision. Both flow from love; both seek the good of the other; both are oriented outward rather than inward. Yet the pairing is deliberate. Paul could have named only one, but he names both &mdash; perhaps because he knew how easily we counterfeit each. We can perform a kindness that has no moral weight, a surface warmth that costs nothing and means nothing. And we can pursue a goodness that is technically right but delivered with such coldness that it wounds rather than heals. The Spirit-formed Christian holds both: the tenderness that makes goodness bearable, and the moral seriousness that makes kindness more than sentiment.",
      "The crucial point Paul presses throughout Galatians is that these qualities are fruit, not achievement. They are not the product of natural temperament or strenuous self-improvement; they are produced by the Spirit in those who walk by the Spirit. Some people are born with sunny, agreeable dispositions, and we should not confuse that pleasant temperament with the fruit of the Spirit. Natural niceness is a gift of personality, but it is not the same as the supernatural kindness that loves the unlovable and is good to the undeserving. The fruit of the Spirit is most visibly itself precisely where natural temperament fails &mdash; when we are kind to the person who has wronged us, good to the one who can never repay us.",
      "This is liberating, because it means that kindness and goodness are not reserved for those who happen to have gentle personalities. The abrasive, the impatient, the naturally critical &mdash; all of these can become genuinely kind and good, not by gritting their teeth and forcing it, but by abiding in Christ and letting the Spirit produce in them what they could never manufacture. The fruit grows on the branch that remains in the vine (John 15). Our task is not to strain after kindness but to stay connected to the source of it, to walk by the Spirit, and to let the character of Christ be formed in us over time. Kindness and goodness are, in the end, the visible evidence that the Spirit of the good and kind God is at home in a human life.",
    ],
  },
  {
    id: "The Kindness of God",
    heading: "The Kindness of God as the Foundation",
    paragraphs: [
      "Christian kindness does not begin with us; it begins with God. Before we are ever called to be kind, we are told that God is kind &mdash; relentlessly, scandalously, undeservedly kind &mdash; and that our kindness is meant to be a reflection and overflow of his. Paul makes this explicit in Romans 2:4, where he warns against presuming on &ldquo;the riches of his kindness and forbearance and patience,&rdquo; and then states the purpose of God&rsquo;s kindness with startling clarity: &ldquo;the kindness of God is meant to lead you to repentance.&rdquo; God&rsquo;s kindness is not weakness or indifference to sin; it is the very thing that draws sinners home. It is the patient, persistent goodness of a God who does not give us what we deserve but keeps holding the door open.",
      "The same theme runs through Titus 3:4-5, one of the most beautiful summaries of the gospel in the New Testament: &ldquo;But when the goodness and loving kindness of God our Savior appeared, he saved us, not because of works done by us in righteousness, but according to his own mercy.&rdquo; Salvation itself is here described as the appearing of God&rsquo;s kindness. When the kindness of God took on flesh and walked among us in Jesus Christ, it did not come to inspect and condemn but to save. The whole movement of the gospel is the movement of divine kindness toward those who had no claim on it &mdash; not earned, not deserved, but freely given out of mercy.",
      "Jesus pointed to a kindness of God that extends even to those who reject him. In Matthew 5:45 he says that the Father &ldquo;makes his sun rise on the evil and on the good, and sends rain on the just and on the unjust.&rdquo; This is what theologians call common grace &mdash; the ordinary, daily, universal kindness of God poured out indiscriminately on a world that has largely turned its back on him. The crops of the atheist farmer grow; the lungs of the blasphemer draw breath; the cruel and the kind alike feel the warmth of the same sun. God is kind to people who curse him, and Jesus presents this as the pattern his disciples are to imitate: &ldquo;Love your enemies and pray for those who persecute you, so that you may be sons of your Father who is in heaven.&rdquo;",
      "This means that our kindness, when it is genuinely Christian, is never merely a moral performance or a strategy for getting along. It is a reflection &mdash; a derivative shining &mdash; of the kindness we have first received. We love because he first loved us (1 John 4:19); we are kind because he was first kind to us. The Christian who has truly grasped the depth of God&rsquo;s kindness toward them, the patience that bore with their sin, the mercy that saved them when they deserved judgment, cannot help but become kinder. The unforgiving servant in Jesus&rsquo; parable (Matthew 18) is condemned precisely because he received an unpayable kindness and then refused to extend a trivial one. To be hard toward others after receiving the kindness of God is to misunderstand the gospel entirely.",
      "There is a deep theological logic here that protects Christian kindness from sentimentality. Because God&rsquo;s kindness led us to repentance, we understand that kindness is not the same as approval or moral indifference. God&rsquo;s kindness toward us did not pretend our sin was acceptable; it bore the cost of our sin at the cross and called us out of it. So Christian kindness, modeled on God&rsquo;s, is not a refusal to name wrong or a permissive softness that lets everything slide. It is the warm, patient, costly goodness that seeks the true welfare of the other &mdash; which sometimes means tender comfort and sometimes means the loving honesty that calls a person toward repentance and life.",
      "When we remember that the kindness of God is the foundation, our own kindness is rescued from pride and exhaustion alike. We are not generating kindness out of our own reserves, as if we were the source. We are conduits of a kindness that originated in God and was poured into us. This guards against the subtle self-righteousness that can creep into acts of charity, the sense that we are good people doing good things. And it guards against burnout, because the supply does not depend on us. The kind Christian is simply someone who keeps returning to the fountain of God&rsquo;s kindness and letting it run through them into the lives of others.",
      "Ultimately, to reflect the kindness of God is to participate in his mission of drawing people home. Every act of genuine kindness is a small echo of the gospel, a foretaste of the welcome of the Father, a sign that points beyond itself to the One whose kindness saves. When we are kind to the undeserving, the difficult, and the hostile, we are not merely being nice &mdash; we are bearing witness to the character of a God whose kindness has no limit and whose mercy is new every morning.",
    ],
  },
  {
    id: "Practical Compassion",
    heading: "Practical Compassion: Kindness Made Concrete",
    paragraphs: [
      "Biblical kindness is never merely a feeling or an attitude; it is compassion made concrete in action. The Greek and Hebrew words for compassion carry a visceral, bodily sense &mdash; the gut-level stirring of mercy that moves a person to act. When Jesus saw the crowds, he was &ldquo;moved with compassion&rdquo; and that compassion translated immediately into teaching, healing, and feeding. Compassion that stops at the level of sentiment is not yet Christian compassion. The kindness the Spirit produces always reaches for the hands and feet; it asks not only &ldquo;do I feel for this person?&rdquo; but &ldquo;what can I do for this person?&rdquo;",
      "Paul gives the practical command directly in Ephesians 4:32: &ldquo;Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.&rdquo; Notice the chain of the verse: kindness, tenderheartedness, and forgiveness are bound together, and all of them are anchored in the kindness we received in Christ. To be tenderhearted is to have a heart that is easily moved &mdash; not hard, not calloused, not indifferent to the suffering around us. The opposite of kindness here is not cruelty alone but hardness of heart, the slow petrifying of compassion that makes us able to walk past need without being moved by it. Christian kindness keeps the heart soft and responsive.",
      "The supreme parable of practical compassion is the Good Samaritan (Luke 10:25-37). Jesus tells it in answer to the question &ldquo;Who is my neighbor?&rdquo; &mdash; and the answer reframes the whole question. The priest and the Levite, religious professionals both, saw the wounded man and passed by on the other side. The Samaritan, a despised outsider, &ldquo;had compassion&rdquo; &mdash; and his compassion cost him. He bound the wounds, used his own oil and wine, put the man on his own animal, paid for his lodging, and promised to cover whatever further expense arose. This is the model: compassion that crosses social boundaries, that gets its hands dirty, and that costs something real. Cheap kindness that costs nothing is rarely the kindness Jesus commends.",
      "In Matthew 25, Jesus identifies himself so closely with the needy that ministering to them becomes ministering to him: &ldquo;I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me, I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me.&rdquo; The astonishing claim is that the King receives every cup of water given to the least of these as given to himself. This elevates practical kindness from optional charity to the very test of authentic faith. The hungry, the sick, the imprisoned, and the stranger are not distractions from the spiritual life; they are where Christ is to be found and served.",
      "What is striking about Matthew 25 is how ordinary the acts are. Not heroic feats, not dramatic rescues, but food, water, clothing, welcome, and visitation &mdash; the unglamorous, repeatable kindnesses that anyone can offer. This is the texture of the kingdom: it advances not chiefly through spectacular gestures but through ten thousand small acts of mercy. A meal cooked for a grieving family, a visit to a lonely widow, a ride given to someone without a car, a patient hour spent with someone in distress. These small kindnesses are not beneath the dignity of the gospel; they are the gospel taking visible shape in the world.",
      "Practical compassion also requires wisdom and steadiness, not merely impulse. The Samaritan did not simply feel pity and move on; he made arrangements, spent money, and committed to a return visit. Sustainable kindness thinks about what actually helps rather than only what feels good in the moment. It asks how to serve the long-term welfare of the other, how to give in ways that dignify rather than demean, how to keep showing up after the initial crisis has passed. The Christian community at its best becomes a network of such practical compassion &mdash; a people known not for their slogans but for the concrete mercy they show to the suffering in their midst and beyond.",
      "Every act of practical compassion is also a small sign of the coming kingdom, a place where the hungry are fed and every tear is wiped away. When we feed, clothe, welcome, and visit, we are not merely meeting needs; we are rehearsing the world God is bringing, and we are letting the future of God&rsquo;s reign break into the present. The kindness of the kingdom is meant to be tasted now, in concrete acts, so that the world might glimpse through us what God intends for all things.",
    ],
  },
  {
    id: "Doing Good to All",
    heading: "Doing Good to All",
    paragraphs: [
      "The Christian calling to goodness is expansive: it reaches toward everyone. Paul gives the scope in Galatians 6:10: &ldquo;So then, as we have opportunity, let us do good to everyone, and especially to those who are of the household of faith.&rdquo; The phrase &ldquo;to everyone&rdquo; is breathtaking in its breadth &mdash; not only to friends, not only to fellow believers, not only to the deserving, but to everyone. And yet Paul adds an order of priority: &ldquo;especially to those who are of the household of faith.&rdquo; The Christian community is to be a place where goodness is particularly thick, a family that cares for its own &mdash; but never a closed circle that stops doing good at its borders. The goodness flows out to all, with a special intensity within the family of God.",
      "The verse just before it addresses the great enemy of sustained goodness: weariness. &ldquo;And let us not grow weary of doing good, for in due season we will reap, if we do not give up&rdquo; (Galatians 6:9). Paul knows that doing good is tiring, that the results are often invisible, and that the temptation to quit is real and persistent. Goodness is not a single heroic act but a long obedience, a sowing that may not be reaped for a long time. The encouragement is agricultural and patient: keep sowing, do not give up, the harvest will come in its season. Much Christian goodness is precisely this &mdash; quiet, unrewarded, easily exhausting faithfulness that trusts God for a harvest it cannot yet see.",
      "The pattern for doing good is Jesus himself. Peter summarizes the entire earthly ministry of Christ in a single phrase in Acts 10:38: Jesus &ldquo;went about doing good and healing all who were oppressed by the devil, for God was with him.&rdquo; That is the summary &mdash; not &ldquo;went about teaching&rdquo; or &ldquo;went about performing miracles,&rdquo; though he did both, but &ldquo;went about doing good.&rdquo; His life was a continuous stream of beneficence: healing, feeding, delivering, welcoming, restoring. To follow Jesus is to take up this same vocation of going about doing good, of moving through the world leaving people better than we found them, of treating every encounter as an opportunity to bless.",
      "Good works are not an optional add-on to the Christian life; they are the very purpose for which we were saved. Paul makes this clear in Ephesians 2:8-10. We are saved by grace through faith, not by works &mdash; and then immediately: &ldquo;For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.&rdquo; Good works are not the root of our salvation but its fruit and its goal. God saves us by grace and then sets us to walk in good works he has prepared in advance. The Christian life is not faith versus works but faith that works, grace that produces a harvest of goodness, salvation that bears fruit in a thousand concrete acts of love.",
      "Jesus connects our good deeds directly to the glory of God in Matthew 5:16: &ldquo;Let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.&rdquo; This is the evangelistic dimension of goodness. Our good works are not meant to draw attention to ourselves &mdash; that would be the hypocrisy Jesus condemns elsewhere &mdash; but to function as light, illuminating the character of God so that others are moved to glorify him. A life full of visible goodness becomes an argument for the gospel that no amount of words alone can make. People who watch consistent goodness over time begin to ask where it comes from, and the answer points to the Father.",
      "Doing good to all guards Christian love from tribalism. It would be easy to confine our goodness to those who share our beliefs, our politics, our background, our affections. But the command is to do good to everyone, including those who differ from us, oppose us, or have nothing to offer us. This is the costly, countercultural goodness that imitates a God who is kind to the ungrateful and the evil. It refuses to make goodness conditional on agreement or affection. The Christian is to be reliably, indiscriminately good &mdash; a steady source of blessing to whoever crosses their path, friend or stranger, ally or opponent.",
      "Such a life requires the long view and the deep root. We do good not because we always see immediate results, and not because the recipients always deserve or appreciate it, but because we belong to a good God and were created for good works. The motivation is not the response of others but the character of God and the harvest he has promised. To not grow weary in this, we must keep returning to the gospel, drawing fresh strength from the goodness of God toward us, so that we can keep going about doing good across a lifetime of quiet, faithful, often unseen love.",
    ],
  },
  {
    id: "Goodness in a Harsh World",
    heading: "Goodness in a Harsh World",
    paragraphs: [
      "We live in a harsh age. The cultural air is thick with cynicism, suspicion, outrage, and contempt. Public discourse rewards the cutting remark and the takedown; social media amplifies cruelty and makes kindness look naive. Tribes form around shared enmities, and the loudest voices are often the angriest. In such a world, consistent kindness and goodness are not bland virtues but countercultural acts of defiance. To be genuinely kind in a cynical age, to do good without keeping score, to refuse contempt for those who differ from us &mdash; this is to stand against the current, and it makes a Christian life conspicuous in the best way.",
      "Paul gives the governing strategy in Romans 12:21: &ldquo;Do not be overcome by evil, but overcome evil with good.&rdquo; This is one of the most radical sentences in the New Testament. The natural response to evil is to answer it in kind &mdash; harshness for harshness, contempt for contempt, an eye for an eye. But Paul calls for something else entirely: the overcoming of evil by goodness. Evil is not defeated by more evil; it is absorbed, exhausted, and finally overcome by a goodness that refuses to be drawn into its logic. The Christian does not fight fire with fire but with the water of persistent good. This is the way of the cross, where Jesus overcame the world&rsquo;s evil not by destroying his enemies but by absorbing their hostility and answering it with love.",
      "The same chapter calls Christians to &ldquo;bless those who persecute you; bless and do not curse them&rdquo; (Romans 12:14). To bless those who curse us runs against every instinct of the wounded self. Yet this is the distinctive mark of the gospel-shaped life, and it traces directly back to Jesus, who from the cross prayed, &ldquo;Father, forgive them, for they know not what they do&rdquo; (Luke 23:34). Blessing our enemies does not mean approving their actions or pretending we are not hurt. It means refusing to let their hostility dictate our response, refusing to become what we hate, and choosing instead to will their good even as they seek our harm. There is a strange and disarming power in this that the world cannot account for.",
      "Kindness and gentleness possess a genuine power to disarm hostility. A soft answer turns away wrath (Proverbs 15:1), and there is a documented, observable way in which sustained kindness can defuse aggression that no amount of force could overcome. When someone braced for a fight encounters unexpected gentleness, the encounter is reframed; the script they expected is broken. This is not weakness but a different kind of strength &mdash; the strength to remain good under pressure, to refuse the bait of provocation, to answer harshness with a steadiness that does not escalate. The kind person is not a doormat; they are someone whose goodness is so settled that it cannot be knocked off balance by hostility.",
      "Over time, a life of consistent goodness becomes a compelling testimony to the gospel. Arguments can be refuted and slogans dismissed, but it is very hard to argue with a life of patient, costly, indiscriminate kindness sustained over years. When people watch a Christian return good for evil, forgive the unforgivable, and keep loving those who give nothing back, they encounter something the cynical world has taught them does not exist. This is why kindness is among the most persuasive forms of Christian witness &mdash; not because it is a clever strategy, but because it embodies the very gospel it proclaims. The medium becomes the message; the kindness is itself the good news made visible.",
      "It is worth saying plainly that this kind of goodness is costly and often unrewarded in the short term. To bless those who curse you, to overcome evil with good, to keep being kind in a harsh world &mdash; this can feel like losing. The harsh often seem to win; the cynical seem worldly-wise; the good seem foolish. But the Christian plays a longer game, governed by the conviction that God sees, that the meek will inherit the earth, and that the harvest comes in due season. We are not kind because it pays immediately; we are kind because we belong to a kind God and because we trust that goodness, not cynicism, has the final word in the universe he governs.",
      "In the end, kindness and goodness may be the most attractive features of the Christian faith in a hostile age &mdash; not the arguments, not the institutions, but the sheer, stubborn, Spirit-produced goodness of people who keep loving when love is not returned. Such a life answers the deepest hunger of a harsh world, which beneath its armor longs for exactly the tenderness and goodness it has stopped believing in. To be that kind of presence &mdash; reliably good, gently strong, hard to provoke and impossible to embitter &mdash; is to let the kindness of God shine through us into the darkness, and there is no more compelling witness than that.",
    ],
  },
];

const videoItems = [
  { videoId: "Hzgzim5m7oU", title: "Kindness as a Fruit of the Spirit" },
  { videoId: "Gv_lLF1pTtg", title: "The Kindness of God Leads to Repentance" },
  { videoId: "0V8oQ9dt0Bo", title: "Doing Good in a Harsh World" },
];

export default function ChristianKindnessGoodnessGuidePage() {
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
            Faith &amp; Character
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Kindness and Goodness
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Kindness and goodness through a Christian lens &mdash; the fruit of the Spirit, the kindness of God that leads to repentance, practical compassion that costs something, doing good to all, and reflecting the goodness of God in a harsh and cynical world.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Ephesians 4:32</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(58, 125, 86, 0.12)` : "transparent",
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Kindness Is the Gospel Made Visible</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>The kindness of God led us to repentance; the goodness of God appeared and saved us. Our task is not to manufacture kindness but to abide in Christ and let the Spirit produce it &mdash; tender toward others, good to all, overcoming evil with good. In a harsh world, a life of consistent, costly goodness becomes one of the most compelling witnesses to the gospel that exists.</p>
        </div>
      </main>
    </div>
  );
}
