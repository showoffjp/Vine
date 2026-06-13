"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Understanding Loneliness", "The God Who Is Community", "Jesus and Abandonment", "Loneliness and Solitude", "The Church as Belonging", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Understanding Loneliness",
    heading: "Understanding Loneliness: The Ache of Disconnection",
    paragraphs: [
      "Loneliness is the painful gap between the connection we long for and the connection we have. It is not the same as being alone &mdash; a person can be lonely in a crowd, in a marriage, in a busy church, and a person can be content in solitude. Loneliness is fundamentally about the quality and depth of our bonds, not the quantity of people around us. It is the felt distance between the relational life we ache for and the relational life we actually inhabit, and that distance can open up even in the midst of company.",
      "The U.S. Surgeon General declared loneliness a public health epidemic, noting that chronic loneliness carries health risks comparable to smoking. This is not metaphor: sustained isolation measurably raises the risk of cardiovascular disease, depression, anxiety, cognitive decline, and early death. The body and soul were not built for prolonged disconnection, and when we are deprived of meaningful relationship over time, the damage is real and physiological as well as emotional. Loneliness is not merely an unpleasant mood; it is a signal that something essential to human flourishing is missing.",
      "Modernity has made it worse: we are more digitally connected and more relationally isolated than ever, with smaller households, more geographic mobility, fewer deep friendships, and the thin substitute of social media for embodied community. We carry in our pockets the means to reach thousands and yet often have no one to call at midnight. The curated performances of online life can deepen the ache rather than ease it, presenting everyone else&rsquo;s highlight reel against the unedited reality of our own solitude. Convenience has quietly displaced presence, and the result is a generation that is hyper-networked and profoundly alone.",
      "The Christian faith takes loneliness seriously as a real form of suffering, not a character flaw. It does not treat the lonely person as someone who has simply failed to try hard enough, nor does it dismiss the ache as something a more disciplined faith would dissolve. Scripture is honest about isolation &mdash; the psalmist cries, &ldquo;I am like a desert owl, like an owl among the ruins&hellip; I lie awake; I have become like a bird alone on a roof&rdquo; (Ps 102:6-7). The lonely have a voice in the Bible, and that voice is not rebuked but received.",
      "Loneliness is, in part, the ache of beings made for communion living in a fragmented world. We were created for relationship &mdash; with God and with one another &mdash; and the brokenness introduced by sin has fractured the very bonds we were designed to enjoy. The thorns and thistles of the fall include relational thorns: estrangement, misunderstanding, distance, and loss. To feel lonely, then, is in a sense to feel the wound of a world that is not yet what it was meant to be, and not yet what it will one day be made.",
      "Naming loneliness honestly, without shame, is the first step &mdash; loneliness thrives in secrecy and is eased when it can be spoken. The cruelest feature of loneliness is that it isolates us further by convincing us that our isolation is uniquely shameful, that admitting it would only confirm our unworthiness of connection. But the moment loneliness is named aloud to a trusted person or brought honestly to God in prayer, its grip begins to loosen. To say &ldquo;I am lonely&rdquo; is not weakness; it is the courageous first act of reaching across the gap toward the communion we were made for.",
      "Recognizing loneliness as a normal, if painful, part of the human condition frees us from the double burden of suffering it and being ashamed of it at the same time. The most faithful saints &mdash; Elijah under the broom tree, David in the cave, Paul abandoned at his first defense &mdash; knew this ache intimately. To be lonely is not to be faithless or broken beyond repair; it is to be human in a fallen world, carrying within us the memory and the hope of a fellowship that God himself has promised never finally to withhold.",
    ],
  },
  {
    id: "The God Who Is Community",
    heading: "The God Who Is Community: The Trinity and Our Longing for Communion",
    paragraphs: [
      "The deepest Christian answer to loneliness is found in the doctrine of the Trinity. The God of Christianity is not a solitary monad but an eternal communion of three persons &mdash; Father, Son, and Spirit &mdash; bound in self-giving love. This is one of the most distinctive claims of the Christian faith: that at the very heart of ultimate reality is not a lonely deity but a fellowship, a relationship, a love that flows eternally between persons. The God who made us is, in his own being, community.",
      "Before creation, before there was anything to be lonely, God was already community, already relationship, already love. He did not create the world out of need, as though he were lonely and required company to complete himself. He created out of the overflow of a love that already existed perfectly within himself. This means relationship is not incidental to reality but woven into its very ground &mdash; the universe issues from a God who is himself a communion of love, and so love and relationship are not late additions to existence but its deepest foundation.",
      "Human beings, made in the image of this triune God, are made for communion &mdash; with God and with one another. To bear the image of a relational God is to be a relational creature, constituted not in isolated self-sufficiency but in connection. We become most fully ourselves not by withdrawing into autonomous independence but by giving and receiving love, by belonging, by being known. Our very design points beyond ourselves toward the communion for which we were made.",
      "&ldquo;It is not good that the man should be alone&rdquo; (Gen 2:18) is the first thing in creation God calls &ldquo;not good.&rdquo; In a creation account that repeatedly pronounces each thing &ldquo;good&rdquo; and finally &ldquo;very good,&rdquo; the single discordant note is human aloneness. Before the fall, before sin entered the world, in the midst of unbroken fellowship with God himself, God declares that solitary existence is not the human good. We were made for one another from the beginning, and the longing for companionship is written into us by the Creator&rsquo;s own design.",
      "Our loneliness, then, is not a malfunction but a signal &mdash; the echo of our design for a communion we have lost and for which we were made. Like hunger that points to our need for food, loneliness points to our need for relationship. It is not a defect to be ashamed of but a homing signal, a witness within us to the truth that we were never meant to be alone. The ache itself testifies to the goodness of the connection we lack and the reality of the communion we were created to enjoy.",
      "The gospel&rsquo;s promise is that this triune God invites us into his own life: we are adopted into the family, made participants in the divine fellowship. Through Christ and by the Spirit, we are not merely forgiven and left at arm&rsquo;s length but drawn into the very communion of the Trinity &mdash; sons and daughters of the Father, brothers and sisters of the Son, temples of the Spirit. The eternal fellowship that God has always enjoyed in himself is opened to us, and the lonely are welcomed home into a belonging that no earthly relationship could ever fully supply.",
      "This is the staggering hope at the center of the Christian response to loneliness: the God who is community does not stand aloof from our isolation but reaches into it to bring us into his own life. We are not condemned to scratch at the surface of connection forever. The love that flows eternally between Father, Son, and Spirit is the love into which we are invited, and in that invitation the deepest root of our loneliness begins, even now, to be healed.",
    ],
  },
  {
    id: "Jesus and Abandonment",
    heading: "Jesus and Abandonment: The God Who Has Known Our Loneliness",
    paragraphs: [
      "Christianity is unique in claiming that God himself has experienced loneliness. The Christian gospel does not offer a God who pronounces on human suffering from a safe distance but a God who entered it personally in Jesus Christ. In the incarnation, the eternal Son took on flesh and lived a fully human life &mdash; and that human life included the ache of isolation, rejection, and abandonment. Whatever loneliness we feel, we do not feel it alone or unobserved; we feel it in the company of a God who has felt it too.",
      "Jesus knew the ache of being misunderstood by his family, abandoned by his friends, and ultimately forsaken. His own relatives at one point thought he was out of his mind (Mark 3:21); the people of his hometown took offense at him; the crowds that followed him for bread melted away when his teaching grew hard. He was, as Isaiah foretold, &ldquo;despised and rejected by men, a man of sorrows and acquainted with grief&rdquo; (Isa 53:3). The Son of God walked through the world largely unrecognized and frequently alone.",
      "In Gethsemane he asked his closest companions simply to stay awake with him, and they could not (Matt 26:40). In the hour of his deepest anguish, sweating as it were great drops of blood, he longed for the comfort of his friends&rsquo; presence &mdash; not their advice, not their solutions, just their wakeful company &mdash; and three times he returned to find them sleeping. The loneliness of being unsupported precisely when we most need support is a particular and bitter kind, and Jesus tasted it fully in the garden.",
      "At his arrest, &ldquo;all the disciples left him and fled&rdquo; (26:56). The men who had pledged to die with him scattered into the dark. Peter, the boldest of them, followed at a distance only to deny three times that he had ever known him. Jesus faced his trial, his mockery, and his condemnation deserted by nearly everyone who had loved him. The abandonment was total, and he bore it for our sake.",
      "And on the cross he cried out the most desolate words in Scripture: &ldquo;My God, my God, why have you forsaken me?&rdquo; (27:46) &mdash; entering the ultimate loneliness of God-forsakenness so that we would never be finally forsaken. Here is a depth of isolation beyond anything merely human: the Son experiencing the felt absence of the Father, the communion of the Trinity bearing the weight of our sin and separation. Jesus descended into the deepest possible loneliness so that ours might never be the last word over us.",
      "This is the heart of the Christian comfort in loneliness: not a God who stands at a distance from our isolation, but a God who has plumbed its depths himself. When we cry out in the night and feel utterly alone, we are not crying into an empty universe. We are crying to a God who knows that cry from the inside, who has spoken those very words of abandonment, and who therefore meets us not with detached pity but with the solidarity of shared experience.",
      "Because Christ was forsaken, the believer can be assured of the promise: &ldquo;I will never leave you nor forsake you&rdquo; (Heb 13:5). We are not alone in our loneliness; the crucified and risen Christ is present in it. The forsakenness he bore purchased for us an unbreakable belonging. Whatever the felt experience of any given lonely hour, the objective truth stands firm &mdash; the One who endured the ultimate abandonment has bound himself to us with a promise that will never be revoked, and in that promise the lonely heart can rest.",
    ],
  },
  {
    id: "Loneliness and Solitude",
    heading: "Loneliness and Solitude: Meeting God in the Lonely Place",
    paragraphs: [
      "The Christian tradition draws a crucial distinction between loneliness and solitude. Loneliness is the painful experience of unwanted isolation; solitude is the chosen practice of being alone with God. The same external circumstance &mdash; being by oneself &mdash; can be either, depending on how it is inhabited. Loneliness is solitude experienced as deprivation; solitude is aloneness transformed into communion. The Christian life involves learning, by grace, to move from the one to the other.",
      "Henri Nouwen wrote that the discipline of solitude can transform loneliness from an enemy into a friend &mdash; that by deliberately entering the lonely place and meeting God there, we discover that what felt like emptiness can become the space of communion. Nouwen did not deny the pain of loneliness or pretend it could be wished away. Instead he taught that the very desert of our isolation can become, through prayerful attention to God&rsquo;s presence, the garden where we meet him most intimately. The lonely place is not only a place of absence; it can become the place of a deeper presence.",
      "Jesus himself regularly withdrew to lonely places to pray (Luke 5:16, Mark 1:35). The Greek word used describes deserted, solitary places &mdash; the very kind of isolation we instinctively avoid. Yet Jesus sought them out, rising before dawn to be alone with his Father, retreating from the crowds to recover the communion that sustained him. He modeled a relationship with solitude that was not flight from people in bitterness but movement toward God in love. If the Son of God needed and chose the lonely place, then solitude is not merely something to be endured but something to be embraced.",
      "The contemplative tradition teaches that beneath the surface loneliness, there is a deeper solitude in which the soul is never truly alone because God is always present. At the floor of our isolation, when every human comfort has been stripped away, there remains the One who said he would never leave us. The mystics and contemplatives across the centuries discovered that the very bottom of loneliness, when entered with faith rather than fled in panic, opens onto the presence of God &mdash; a presence more intimate than any human companionship and available precisely where human companionship has failed.",
      "This does not eliminate the legitimate human need for community &mdash; it is not a spiritual bypass &mdash; but it offers a resource the merely secular account of loneliness lacks: the companionship of God available precisely in the place of human absence. The point is not that the lonely should stop longing for friends or settle for a purely private piety. We still need one another; God ordained it so. But there are seasons and circumstances in which human companionship is simply not available, and in those seasons the believer is not left destitute. The friendship of God remains.",
      "Learning to be alone with God is one of the great remedies for the terror of loneliness. Much of loneliness&rsquo;s power comes from the panic it induces &mdash; the sense that aloneness is unbearable, that we must escape it at any cost. But the soul that has learned to meet God in solitude is freed from that terror. It can be alone without being undone, because it has discovered that aloneness is not abandonment. This freedom does not make us indifferent to relationship; it makes us less desperate, less grasping, more able to love others freely rather than clinging to them out of fear.",
      "The path from loneliness to solitude is rarely instant; it is a practiced grace, learned slowly through repeated returns to prayer, Scripture, and the conscious presence of God. We will not always feel the comfort of his presence in the lonely place, and the discipline is to keep turning toward him anyway, trusting his promise rather than our fluctuating feelings. Over time, the lonely place becomes less a prison and more a sanctuary &mdash; not because the ache for human connection has vanished, but because we have found, in the depths of our solitude, a Companion who was there all along.",
    ],
  },
  {
    id: "The Church as Belonging",
    heading: "The Church as Belonging: God Settles the Solitary in a Home",
    paragraphs: [
      "God&rsquo;s ordained answer to human loneliness is community &mdash; and specifically the church, which is meant to be a family of belonging where no one is alone. The friendship of God in solitude does not cancel our need for embodied, human fellowship; rather, God provides that fellowship through the body of Christ. The church is not an optional extra for the believer but the very household into which the gospel places us, the family in which the lonely are meant to find a home.",
      "The early church &ldquo;devoted themselves to&hellip; fellowship&rdquo; and shared life so deeply that &ldquo;there was not a needy person among them&rdquo; (Acts 2:42-45, 4:34). The first Christians did not relate to one another as polite strangers who happened to attend the same weekly service. They shared meals, shared possessions, shared lives. Their fellowship was so substantial that material need was met within the community and no one was left isolated in want. This is the vision of church the New Testament holds out &mdash; not an audience gathered for a performance, but a family bound together in mutual love.",
      "The New Testament is saturated with &ldquo;one another&rdquo; commands: love one another, bear one another&rsquo;s burdens, encourage one another, confess to one another. These dozens of commands describe a life of deep mutual involvement &mdash; carrying each other&rsquo;s weights, speaking truth and comfort to each other, opening our struggles to each other in honesty. The Christian life was never meant to be lived alone. It is structured, from the New Testament forward, as a shared life in which the lonely are drawn into belonging through the ordinary practices of love.",
      "The tragedy is that many churches have become places of polite acquaintance rather than genuine belonging, where a person can attend for years and remain unknown. The gap between the New Testament vision and the lived reality of many congregations is wide. People slip in and out of services without ever being truly seen, carrying private burdens past rows of people who never learn their names. A lonely person can sit in a full sanctuary and feel as isolated as anywhere else &mdash; a particularly bitter loneliness, because it occurs precisely where belonging was promised.",
      "The call is to build (and to seek out) communities of real friendship, hospitality, and mutual care &mdash; small groups, shared meals, honest relationships. The cure for the loneliness of acquaintance is the cultivation of genuine knowing. This happens in the smaller and more vulnerable settings where masks come off: around tables, in living rooms, in groups small enough that people can actually be known. The lonely are not helped by larger crowds but by deeper bonds, and those bonds are built through the patient, ordinary work of showing up and sharing life.",
      "For the lonely, this requires courage: to show up, to be vulnerable, to risk reaching out. Loneliness makes us want to withdraw, to protect ourselves from the further pain of rejection, and so it can become self-perpetuating. Breaking the cycle takes an act of faith &mdash; accepting the invitation, attending the gathering, speaking the honest word, asking for the help we need. None of this is easy for a heart already wounded by isolation, but the path out of loneliness almost always runs through the risk of reaching toward others.",
      "And for the church, it requires intentionality: to notice the isolated, to pursue the lonely, to be the family that God designed his people to be. The burden cannot rest solely on the lonely to overcome their own isolation; the community must go to them. A church that takes loneliness seriously will train its eyes to see the person sitting alone, will make the first move, will pursue rather than wait to be pursued. &ldquo;God settles the solitary in a home&rdquo; (Ps 68:6) &mdash; and he characteristically does so through a people willing to open their lives, their tables, and their hearts to those who have no one.",
    ],
  },
];

const videoItems = [
  { videoId: "5MBhDQX3aTk", title: "Tim Keller on Loneliness and the Gospel" },
  { videoId: "Ut3W2YJ2gXs", title: "The Christian Answer to Loneliness" },
  { videoId: "lXkBpL5pX0w", title: "Finding God in the Lonely Place" },
];

export default function ChristianLonelinessGuidePage() {
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
            Faith &amp; Loneliness
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Loneliness
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Loneliness through a Christian lens &mdash; the difference between loneliness and solitude, the God who is community in the Trinity, Jesus and the experience of abandonment, the loneliness epidemic, the church as belonging, and finding companionship with God in the lonely place.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;God settles the solitary in a home.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Psalm 68:6</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(59, 130, 246, 0.12)` : "transparent",
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>You Were Made for Communion</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Loneliness is the ache of beings made for communion living in a fragmented world. But the God who is himself an eternal fellowship of love has not left us alone &mdash; he entered our abandonment in Christ, he meets us in the lonely place, and he settles the solitary in a home. The longing you feel is not a flaw; it is a signal pointing you toward the belonging for which you were made.</p>
        </div>
      </main>
    </div>
  );
}
