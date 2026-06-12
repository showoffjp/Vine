"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";

const sections = [
  { id: "armor", label: "Armor of God", color: GOLD },
  { id: "powers", label: "Principalities & Powers", color: PURPLE },
  { id: "lewis", label: "C.S. Lewis & the Devil", color: TEAL },
  { id: "prayer", label: "Prayer as Warfare", color: BLUE },
  { id: "victory", label: "Christ's Victory", color: GREEN },
  { id: "videos", label: "Videos", color: MUTED },
];

export default function ChristianSpiritualWarfareGuide() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("armor");

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      {/* Hero */}
      <div
        style={{
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
          borderBottom: `1px solid ${BORDER}`,
          background: `linear-gradient(180deg, rgba(107,79,187,0.10) 0%, transparent 100%)`,
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            color: PURPLE,
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Christian Spiritual Warfare Guide
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "1.2rem",
            lineHeight: 1.15,
          }}
        >
          Put On the Full Armor of God
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: MUTED,
            maxWidth: 640,
            margin: "0 auto 1.5rem",
            lineHeight: 1.7,
          }}
        >
          The Christian life is not a self-improvement project in a morally neutral universe.
          Scripture presents a cosmic conflict already decided at the cross &mdash; and calls
          believers to stand firm in Christ&rsquo;s finished victory.
        </p>
        <blockquote
          style={{
            fontStyle: "italic",
            color: GOLD,
            fontSize: "1rem",
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          &ldquo;For we do not wrestle against flesh and blood, but against the rulers, against
          the authorities, against the cosmic powers over this present darkness, against the
          spiritual forces of evil in the heavenly places.&rdquo;
          <span
            style={{
              display: "block",
              marginTop: "0.4rem",
              color: MUTED,
              fontStyle: "normal",
              fontSize: "0.85rem",
            }}
          >
            Ephesians 6:12
          </span>
        </blockquote>
      </div>

      {/* Nav tabs */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "0.25rem",
          padding: "1rem 1.5rem",
          borderBottom: `1px solid ${BORDER}`,
          scrollbarWidth: "none",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            style={{
              flexShrink: 0,
              padding: "0.5rem 1.1rem",
              borderRadius: 2,
              border: `1px solid ${activeSection === s.id ? s.color : BORDER}`,
              background: activeSection === s.id ? `${s.color}18` : "transparent",
              color: activeSection === s.id ? s.color : MUTED,
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              cursor: "pointer",
              transition: "all 0.18s",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

        {/* Armor of God */}
        {activeSection === "armor" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: GOLD }}>
              The Full Armor of God (Ephesians 6:10&ndash;18)
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Paul&rsquo;s metaphor of divine armor is not individualistic heroism &mdash; it is the
              equipment of soldiers who stand together. The armor is described in the context of
              community: &ldquo;put on the full armor&rdquo; is a corporate command. Each piece
              corresponds to an aspect of Christ&rsquo;s own character and work applied to the believer.
            </p>

            <div
              style={{
                background: `${GOLD}0D`,
                border: `1px solid ${GOLD}30`,
                borderRadius: 6,
                padding: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <h3 style={{ color: GOLD, fontWeight: 600, marginBottom: "1rem" }}>
                Six Pieces of Armor
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {[
                  {
                    piece: "Belt of Truth",
                    ref: "v. 14a",
                    meaning: "Integrity and truthfulness bind everything together; falsehood leaves gaps in the armor",
                  },
                  {
                    piece: "Breastplate of Righteousness",
                    ref: "v. 14b",
                    meaning: "Christ&rsquo;s imputed righteousness shields the heart from accusation and shame",
                  },
                  {
                    piece: "Shoes of the Gospel of Peace",
                    ref: "v. 15",
                    meaning: "Readiness to carry the gospel wherever you walk; peace with God as stable footing",
                  },
                  {
                    piece: "Shield of Faith",
                    ref: "v. 16",
                    meaning: "Trust in God&rsquo;s promises extinguishes the flaming arrows of doubt and accusation",
                  },
                  {
                    piece: "Helmet of Salvation",
                    ref: "v. 17a",
                    meaning: "Assurance of salvation protects the mind from despair and spiritual deception",
                  },
                  {
                    piece: "Sword of the Spirit",
                    ref: "v. 17b",
                    meaning: "Scripture &mdash; the only offensive weapon; Jesus wielded it in the wilderness against every temptation",
                  },
                ].map((a) => (
                  <div
                    key={a.piece}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 4,
                      padding: "0.85rem 1rem",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "0.88rem",
                        color: GOLD,
                        marginBottom: "0.15rem",
                      }}
                    >
                      {a.piece}
                    </p>
                    <p style={{ fontSize: "0.72rem", color: PURPLE, marginBottom: "0.35rem" }}>
                      {a.ref}
                    </p>
                    <p
                      style={{ fontSize: "0.82rem", color: MUTED, lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: a.meaning }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                ref: "Ephesians 6:10",
                heading: "Strength in the Lord, Not in Yourself",
                body: "&ldquo;Finally, be strong in the Lord and in the strength of his might.&rdquo; The passive construction is deliberate: be strengthened. The power is not mustered from within but drawn from union with Christ. Spiritual warfare begins with dependence, not confidence in one&rsquo;s spiritual resources. Paul had just finished writing about the Spirit-filled life in community &mdash; the armor is worn by those who are already living in surrender.",
              },
              {
                ref: "Ephesians 6:11",
                heading: "Stand Firm &mdash; The Primary Command",
                body: "Paul uses the word &ldquo;stand&rdquo; (histemi) four times in this passage &mdash; it is the central command. The goal is not territorial conquest in the sense of personal spiritual adventure but steadfast, unshaken faithfulness. Clinton Arnold notes: Paul does not call Christians to attack or advance; he calls them to hold the ground Christ has already taken. The battle is for maintained faith, not expanded territory.",
              },
              {
                ref: "Ephesians 6:18",
                heading: "Prayer: The Seventh Element",
                body: "&ldquo;Praying at all times in the Spirit, with all prayer and supplication. To that end, keep alert with all perseverance, making supplication for all the saints.&rdquo; Prayer is not a seventh piece of armor but the atmosphere in which the armored soldier operates. The intercession here is communal: &ldquo;for all the saints.&rdquo; Spiritual warfare is never solitary; it is a community standing together in intercession.",
              },
              {
                ref: "Practical Application",
                heading: "Putting on the Armor as a Daily Practice",
                body: "Many believers use Ephesians 6 as a framework for morning prayer: naming each piece aloud, confessing what it represents, and asking for the Spirit&rsquo;s application. This is not magical incantation but devotional structure &mdash; a way of reminding yourself, daily, of the nature of the conflict you are in and the resources Christ has provided. The practice moves the metaphor from theological abstraction to practical dependence.",
              },
            ].map((item) => (
              <div
                key={item.ref}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${GOLD}`,
                  borderRadius: 4,
                  padding: "1.4rem",
                  marginBottom: "1.2rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    color: GOLD,
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.ref}
                </p>
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>
                  {item.heading}
                </h3>
                <p
                  style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Principalities & Powers */}
        {activeSection === "powers" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: PURPLE }}>
              Principalities, Powers, and Spiritual Opposition
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              The New Testament presents a world in which spiritual forces oppose God&rsquo;s purposes
              through both personal temptation and systemic structures. Understanding the nature of the
              opposition shapes how believers fight.
            </p>

            <div
              style={{
                background: `${PURPLE}10`,
                border: `1px solid ${PURPLE}30`,
                borderRadius: 6,
                padding: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <h3 style={{ color: PURPLE, fontWeight: 600, marginBottom: "0.75rem" }}>
                What Are &ldquo;Principalities and Powers&rdquo;?
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "1rem" }}>
                Paul&rsquo;s vocabulary &mdash; archai, exousiai, dynameis, kosmokratores &mdash; refers
                to a hierarchy of spiritual beings operating in the heavenly realm. Scholars like Walter
                Wink have argued these also have a social dimension: the &ldquo;spirit&rdquo; behind
                institutions, nations, and systems that can be either aligned with or opposed to the
                kingdom of God.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75 }}>
                The crucial point: Christ has decisively defeated them. Colossians 2:15 &mdash;
                &ldquo;He disarmed the rulers and authorities and put them to open shame, by triumphing
                over them in him.&rdquo; The powers are not co-equal adversaries; they are defeated
                enemies whose defeat is still being enforced.
              </p>
            </div>

            {[
              {
                title: "Cosmic Dualism vs. Christian Warfare",
                body: "Christianity is not dualism. Satan is not the equal and opposite of God; he is a created being operating under God&rsquo;s permission (Job 1&ndash;2). The conflict is real but asymmetrical. Augustine: evil is not a substance but a privation of good &mdash; a parasite on reality that has no independent existence. This matters practically: Christians fight from a position of authority, not desperation.",
              },
              {
                title: "Demonic Oppression vs. Demonic Possession",
                body: "Classical theology distinguishes between possession (total control, rare, seen in the Gospels) and oppression (external pressure, attack, temptation &mdash; which believers can experience). 1 Peter 5:8: &ldquo;Your adversary the devil prowls around like a roaring lion, seeking someone to devour.&rdquo; The lion metaphor suggests predatory opportunism, not invincibility. James 4:7: &ldquo;Resist the devil, and he will flee from you.&rdquo; Flight, not mere containment, is the result of Spirit-empowered resistance.",
              },
              {
                title: "Deliverance Ministry: Biblical Foundations and Cautions",
                body: "Jesus performed deliverance; the apostles performed deliverance; the early church continued it. It is a legitimate category of ministry. But two errors bracket it: (1) over-attribution &mdash; diagnosing every difficulty as demonic, bypassing human responsibility and psychological reality; (2) under-attribution &mdash; denying any spiritual dimension to suffering and treating everything as merely psychological. The NT holds both: people bear responsibility for sin, and spiritual opposition is real. Mature pastoral care navigates between the extremes.",
              },
              {
                title: "The Powers and Social Structures",
                body: "Walter Wink&rsquo;s trilogy on the powers argues that Paul&rsquo;s language has both a spiritual and a social referent: the &ldquo;spirit&rdquo; of a nation, institution, or economic system. When a corporation systematically dehumanizes its workers, the &ldquo;power&rdquo; behind it is more than human decision-making. This framework helps Christians understand why systemic injustice is a spiritual issue, not merely a political one, and why prayer is always part of the response to social evil.",
              },
              {
                title: "Recognizing Spiritual Attack Without Paranoia",
                body: "Not every difficulty is demonic. Not every sin is a demon. Paul in Galatians attributes the works of the flesh to the flesh &mdash; embodied human desire &mdash; not to external spirits. The spiritual warrior develops discernment: the capacity to recognize when opposition has a specifically spiritual character (unusual, intensified, targeted) versus the ordinary difficulty of life in a fallen world. Formation in prayer, Scripture, and community is what builds this discernment over time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 4,
                  padding: "1.4rem",
                  marginBottom: "1.2rem",
                }}
              >
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.6rem", color: PURPLE }}>
                  {item.title}
                </h3>
                <p
                  style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* C.S. Lewis & the Devil */}
        {activeSection === "lewis" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: TEAL }}>
              C.S. Lewis and the Screwtape Approach
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              C.S. Lewis&rsquo;s <em>The Screwtape Letters</em> (1942) remains one of the most
              insightful explorations of spiritual opposition in Christian literature &mdash; not
              because of its demonology but because of its anatomy of human weakness.
            </p>

            <div
              style={{
                background: `${TEAL}10`,
                border: `1px solid ${TEAL}30`,
                borderRadius: 6,
                padding: "1.75rem",
                marginBottom: "2rem",
              }}
            >
              <h3 style={{ color: TEAL, fontWeight: 600, marginBottom: "0.75rem" }}>
                Lewis on the Two Errors
              </h3>
              <p style={{ color: TEXT, lineHeight: 1.75, marginBottom: "1rem" }}>
                In the preface to <em>Screwtape</em>, Lewis identified two equal and opposite errors
                regarding the devil: &ldquo;that of disbelieving in their existence&rdquo; and &ldquo;that
                of believing, and of feeling an excessive and unhealthy interest in them.&rdquo;
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75 }}>
                Both errors serve the same end. Disbelief leaves a person unguarded. Obsessive interest
                produces either paranoia or a morbid fascination that distracts from Christ. Lewis&rsquo;s
                aim was to take the subject seriously enough to be sobered &mdash; not so seriously that
                the devil becomes more interesting than God.
              </p>
            </div>

            {[
              {
                title: "Screwtape&rsquo;s Strategy: The Ordinary Over the Spectacular",
                ref: "The Screwtape Letters, Letter 6",
                body: "Screwtape advises Wormwood that the safest road to hell is the gradual one: &ldquo;the gentle slope, soft underfoot, without sudden turnings, without milestones, without signposts.&rdquo; The great temptations in Scripture are usually dramatic; the most effective ones in daily life are mundane. Irritability, distraction, busyness, small compromises &mdash; these are the chosen weapons because they are invisible. The Christian who is watching for a dramatic supernatural attack may miss the slow drift accomplished through boredom and comfort.",
              },
              {
                title: "Dislodging Christians from the Present Moment",
                ref: "The Screwtape Letters, Letter 15",
                body: "Screwtape tells Wormwood: &ldquo;The humans live in time but our Enemy destines them to eternity. He therefore, I believe, wants them to attend chiefly to two things, to eternity itself, and to that point of time which they call the Present.&rdquo; The strategy of the adversary is to pull humans into regret about the past or anxiety about the future &mdash; anything to prevent them from being fully present to God, who is always encountered now. This is spiritual warfare at its subtlest.",
              },
              {
                title: "On Humility and Spiritual Pride",
                ref: "The Screwtape Letters, Letter 14",
                body: "Screwtape celebrates when a Christian becomes proud of their humility. Lewis is diagnosing a real and common trap: spiritual progress, noticed, becomes a source of self-congratulation, which is the opposite of the progress. The spiritual warrior must develop the counter-intuitive practice of being uninterested in their own spiritual state &mdash; genuinely focused on God rather than on how well they are focusing on God.",
              },
              {
                title: "Satan as &ldquo;the Ape of God&rdquo;",
                ref: "Lewis, The Screwtape Letters, Preface",
                body: "Lewis employs a medieval concept: the devil as the one who parodies and counterfeits rather than creates. Every spiritual reality has a demonic imitation: grace becomes moralism; love becomes sentimentality; worship becomes entertainment; community becomes tribal belonging. The discerning Christian must learn to distinguish between the genuine and the counterfeit &mdash; and Scripture, prayer, and community in the Spirit are the calibration tools.",
              },
              {
                title: "A Healthy Doctrine of the Devil",
                ref: "Biblical Theology",
                body: "Scripture neither ignores nor magnifies Satan. He appears as the serpent in Genesis, the adversary in Job, the tempter of Jesus, the roaring lion of 1 Peter, the accuser of Revelation. He is real, he is active, and he is defeated. Revelation 12:10&ndash;11 gives the outcome: &ldquo;The accuser of our brothers and sisters has been hurled down. They triumphed over him by the blood of the Lamb and by the word of their testimony.&rdquo; Knowing the enemy&rsquo;s reality without inflating his power is the balance Scripture maintains.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${TEAL}`,
                  borderRadius: 4,
                  padding: "1.4rem",
                  marginBottom: "1.2rem",
                }}
              >
                {item.ref && (
                  <p
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      color: TEAL,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.ref}
                  </p>
                )}
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Prayer as Warfare */}
        {activeSection === "prayer" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: BLUE }}>
              Prayer as Spiritual Warfare
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Prayer is not a supplement to spiritual warfare &mdash; it is the warfare itself. The
              believer who prays is not preparing to fight; they are already in the fight, wielding
              the weapon of Spirit-directed intercession from a position of union with Christ.
            </p>

            <div
              style={{
                background: `${BLUE}10`,
                border: `1px solid ${BLUE}30`,
                borderRadius: 6,
                padding: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <h3 style={{ color: BLUE, fontWeight: 600, marginBottom: "0.75rem" }}>
                Daniel 10: The Unseen Dimension of Prayer
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "1rem" }}>
                Daniel prays for 21 days. An angel finally arrives: &ldquo;From the first day that you
                set your heart to understand and humbled yourself before your God, your words have been
                heard, and I have come because of your words. The prince of the kingdom of Persia
                withstood me twenty-one days.&rdquo; (Dan 10:12&ndash;13)
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75 }}>
                Daniel 10 pulls back the curtain on the invisible dimension of persistent prayer. When
                prayer seems to go unanswered, the problem is not divine inattention &mdash; it may be
                spiritual resistance in dimensions we cannot perceive. This passage is not a template for
                prayer methodology but a revelation of the context: our prayers participate in something
                larger than we can see.
              </p>
            </div>

            {[
              {
                icon: "✦",
                title: "The Lord&rsquo;s Prayer as Warfare (Matthew 6:9&ndash;13)",
                body: "Every petition in the Lord&rsquo;s Prayer is a declaration of war against the present age. &ldquo;Your kingdom come&rdquo; is the petition that God&rsquo;s rule displace every rival rule. &ldquo;Your will be done on earth as in heaven&rdquo; is resistance to the principalities that distort and obstruct God&rsquo;s will. &ldquo;Deliver us from evil [or: the evil one]&rdquo; is explicit request for protection from spiritual attack. The prayer Jesus taught his disciples is a warfare prayer from beginning to end.",
              },
              {
                icon: "✦",
                title: "Intercessory Prayer and the Powers",
                body: "Paul asks the Ephesian believers to pray for him specifically &ldquo;that words may be given to me in opening my mouth boldly to proclaim the mystery of the gospel&rdquo; (Eph 6:19). He understands the opposition to the gospel as spiritual, and he believes the prayers of the saints create conditions for the gospel to advance. Intercession is not merely emotional solidarity; it is participation in the spiritual dynamics that determine what is possible in the visible world.",
              },
              {
                icon: "✦",
                title: "Praying in the Spirit (Ephesians 6:18; Romans 8:26&ndash;27)",
                body: "&ldquo;Praying at all times in the Spirit.&rdquo; The Spirit&rsquo;s role in prayer is to align our intercession with God&rsquo;s will &mdash; to take our inarticulate groaning and translate it into effective prayer. Romans 8:26: &ldquo;The Spirit himself intercedes for us with groanings too deep for words.&rdquo; Prayer in the Spirit is not always articulate; sometimes it is the willingness to present our confusion and need to God and trust the Spirit to make it coherent before the Father.",
              },
              {
                icon: "✦",
                title: "Fasting and Prayer (Matthew 17:21; Mark 9:29)",
                body: "When the disciples failed to cast out a demon, Jesus said, &ldquo;This kind cannot be driven out by anything but prayer [and fasting].&rdquo; Fasting is not coercion of God; it is intensification of dependence. It is the body joining the spirit in saying: I need God more than I need food. In the tradition of spiritual warfare, fasting has consistently been associated with breakthrough in prayer &mdash; not because of its discipline but because of the posture of desperate, focused dependence it cultivates.",
              },
              {
                icon: "✦",
                title: "Perseverance in Prayer",
                body: "Jesus&rsquo; parable of the persistent widow (Luke 18:1&ndash;8) is specifically about not losing heart. The unjust judge finally responds to persistence; how much more will the just and loving God respond to his children who cry to him? Spiritual warfare prayer is not a technique for quick results; it is a long-obedience of intercession, trusting that God is at work even when the visible situation has not changed. The prayer that outlasts discouragement is itself a form of faith.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: "1rem",
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 4,
                  padding: "1.4rem",
                  marginBottom: "1.2rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "1.2rem", color: BLUE, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3
                    style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem", color: BLUE }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Christ's Victory */}
        {activeSection === "victory" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>
              The Already-But-Not-Yet Victory of Christ
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              The New Testament presents spiritual warfare in light of a victory already won. D-Day has
              happened; V-Day has not yet arrived. Christians fight not to achieve victory but from within
              a victory Christ secured &mdash; and still they fight, because the enemy does not concede
              his defeat quietly.
            </p>

            {[
              {
                ref: "Colossians 2:15",
                heading: "Triumphing Over the Powers",
                body: "&ldquo;He disarmed the rulers and authorities and put them to open shame, by triumphing over them in him.&rdquo; The image is a Roman triumph &mdash; the victorious general parading his defeated enemies through the streets. The cross, which looked like the ultimate defeat of Jesus, was actually his cosmic victory: in dying, he absorbed and exhausted the power of sin, death, and the spiritual forces that operated through them. The powers are disarmed &mdash; they still make noise, but they have no ultimate claim.",
              },
              {
                ref: "Hebrews 2:14&ndash;15",
                heading: "Destroying the Power of Death",
                body: "&ldquo;That through death he might destroy the one who has the power of death, that is, the devil, and deliver all those who through fear of death were subject to lifelong slavery.&rdquo; The fear of death is the ultimate leverage point of spiritual opposition &mdash; it keeps people enslaved to survival, self-preservation, and compromise. The resurrection dissolves this leverage. The Christian who genuinely believes in the resurrection can no longer be fully controlled by the fear of death. This is the deepest liberation of the gospel.",
              },
              {
                ref: "Revelation 12:10&ndash;11",
                heading: "The Pattern of Overcoming",
                body: "&ldquo;They triumphed over him by the blood of the Lamb and by the word of their testimony; they did not love their lives so much as to shrink from death.&rdquo; Three elements of overcoming: the blood of Christ (objective atonement), the word of testimony (personal witness), and willingness to die (freedom from self-preservation). The overcomer is not the spectacular spiritual warrior but the ordinary believer who holds fast to Christ at cost to themselves.",
              },
              {
                ref: "Romans 8:37&ndash;39",
                heading: "More Than Conquerors",
                body: "&ldquo;In all these things we are more than conquerors through him who loved us. For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.&rdquo; Hypernikomen &mdash; we super-conquer, we overwhelmingly prevail &mdash; through him who loved us. The victory is love-shaped: not domination but the indestructible persistence of God&rsquo;s love as the ultimate reality in the universe.",
              },
              {
                ref: "Closing Encouragement",
                heading: "Standing Firm Is Itself Victory",
                body: "In Ephesians 6, the four-fold command to &ldquo;stand&rdquo; means that maintaining faith, resisting despair, continuing to pray, and remaining in community are not waiting for the real battle &mdash; they are the battle. The soldier who holds the ground Christ has taken is already participating in triumph. You do not need to feel victorious to be standing in victory. You need only to remain in Christ, armored in his truth, interceding in his Spirit, and trusting his love that will not let you go.",
              },
            ].map((item) => (
              <div
                key={item.ref}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${GREEN}`,
                  borderRadius: 4,
                  padding: "1.4rem",
                  marginBottom: "1.2rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    color: GREEN,
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.ref}
                </p>
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>
                  {item.heading}
                </h3>
                <p
                  style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}

            <div
              style={{
                background: `${GREEN}0D`,
                border: `1px solid ${GREEN}30`,
                borderRadius: 6,
                padding: "1.75rem",
                marginTop: "2rem",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.75rem", color: GREEN }}>
                The War Is Already Won
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}>
                You are not fighting for victory. You are fighting from it. The cross was not the
                beginning of God&rsquo;s campaign against evil &mdash; it was the decisive, fatal blow.
                Every act of prayer, every confession of faith, every act of love in the face of opposition
                is a form of announcing what is already true: the Lamb has conquered.
              </p>
              <p
                style={{
                  color: GREEN,
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                  marginTop: "1rem",
                }}
              >
                &ldquo;The God of peace will soon crush Satan under your feet. The grace of our Lord Jesus
                Christ be with you.&rdquo; &mdash; Romans 16:20
              </p>
            </div>
          </div>
        )}

        {/* Videos */}
        {activeSection === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              Videos on Spiritual Warfare
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Teaching and reflection on the armor of God, spiritual opposition, prayer as warfare,
              and the victory of Christ over the powers.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <div>
                <VideoEmbed
                  videoId="Q3SzZQKHr5o"
                  title="The Armor of God &mdash; Ephesians 6 Explained"
                />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
                  A detailed exposition of Ephesians 6:10&ndash;18 &mdash; each piece of the armor,
                  its theological meaning, and its practical application to the Christian life.
                </p>
              </div>

              <div>
                <VideoEmbed
                  videoId="4PEJ13w4b5g"
                  title="Spiritual Warfare: What the Bible Actually Says"
                />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
                  A biblical-theological survey of spiritual warfare in both Testaments &mdash; the
                  nature of the powers, Christ&rsquo;s victory, and what it means to stand firm.
                </p>
              </div>

              <div>
                <VideoEmbed
                  videoId="6QyLAoA09Rg"
                  title="Prayer as Spiritual Warfare &mdash; Intercessory Prayer"
                />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
                  Teaching on the connection between prayer and spiritual conflict &mdash; Daniel 10,
                  the Lord&rsquo;s Prayer, and what it means to pray in the Spirit.
                </p>
              </div>
            </div>

            <div
              style={{
                background: `${PURPLE}0D`,
                border: `1px solid ${PURPLE}30`,
                borderRadius: 6,
                padding: "1.75rem",
                marginTop: "3rem",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.75rem", color: PURPLE }}>
                Stand Firm
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}>
                The call of Ephesians 6 is not to adventurous spiritual conquest but to steadfast,
                daily, community-rooted faithfulness &mdash; armed in Christ, praying in the Spirit,
                standing in the victory that belongs to the Lamb. The war is real. The outcome is
                not in question.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
