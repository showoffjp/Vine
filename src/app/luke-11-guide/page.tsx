"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Lord's Prayer",
  "Ask Seek Knock",
  "Beelzebub Controversy",
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
    heading: "Luke 11 &mdash; A Chapter Built on Prayer",
    reference: "Luke 11:1&ndash;54",
    paragraphs: [
      "Luke 11 is one of the richest chapters in the entire Gospel, weaving together an extended teaching on prayer, a series of escalating controversies with the religious establishment, and some of the most searching words Jesus ever spoke about the human heart. The chapter opens with the disciples watching Jesus pray and asking him to teach them as John taught his disciples &mdash; a request that draws from Jesus both a model prayer and a parable about persistence. It then moves through the scandal of the Beelzebub accusation, the sign of Jonah, the parable of the lamp, and a fierce series of woes against the Pharisees and lawyers. The unifying thread is the question of how a person receives from God &mdash; whether through religious performance or through genuine, trusting, persistent prayer.",
      "The chapter&rsquo;s setting matters greatly. Luke has emphasized prayer more than any other Gospel writer. He alone records that Jesus was praying at his baptism (3:21), at the Transfiguration (9:29), and before the choice of the twelve (6:12). It is characteristic of Luke&rsquo;s Jesus that the disciples first see him praying before they ever ask him to teach them. The request &ldquo;Lord, teach us to pray&rdquo; (11:1) is the fruit of observation &mdash; the disciples notice that Jesus&rsquo; life of prayer is the source of his power and intimacy with the Father, and they want what he has.",
      "The structure of Luke 11 can be broadly traced as follows. Verses 1&ndash;13 form a sustained unit on prayer: the Lord&rsquo;s Prayer as a model (vv. 1&ndash;4), the parable of the persistent friend (vv. 5&ndash;8), and the promises of ask/seek/knock (vv. 9&ndash;13). Verses 14&ndash;28 deal with the Beelzebub controversy and the demand for a sign. Verses 29&ndash;36 address the sign of Jonah and the lamp of the body. Verses 37&ndash;54 deliver the woes to Pharisees and lawyers at a dinner table. Each section illuminates the others: the God who is a generous Father in verses 1&ndash;13 is the same God whose kingdom is advancing against darkness in verses 14&ndash;28, and whose light exposes the hypocrisy catalogued in verses 37&ndash;54.",
      "For the Christian reader, Luke 11 is a chapter to return to again and again. It offers not a set of techniques for successful prayer but a relational vision &mdash; God as Father, the disciple as a child who asks, seeks, and knocks with the confidence of a beloved son or daughter. At the same time it contains some of the most sobering material in the Gospels: the warning about the house that remains swept and empty (v. 24&ndash;26), the lamp of the body (vv. 34&ndash;36), and the accumulated weight of the woes. Luke 11 does not allow the reader to remain comfortable. It calls for a thoroughgoing honesty about the state of the inner life, and it points to the only source of light and strength: the Father who gives the Holy Spirit to those who ask (v. 13).",
      "A key interpretive key to the whole chapter is the contrast between two kinds of reception. The disciples who watch Jesus pray and ask him to teach them are in the process of becoming receptive to the kingdom. The Pharisees and lawyers, by contrast, have made themselves unreceptive: they demand signs (v. 16), attribute the works of God to the devil (v. 15), neglect justice and the love of God (v. 42), and burden others while not lifting a finger to help (v. 46). The chapter asks every reader: which posture do you bring? Do you come to God as a child comes to a father, or as a critic who has already decided what he will and will not accept?",
      "The chapter also contains a remarkable pair of statements about the source of blessing. When a woman in the crowd cries out, &ldquo;Blessed is the womb that bore you,&rdquo; Jesus redirects the blessing: &ldquo;Blessed rather are those who hear the word of God and keep it!&rdquo; (11:27&ndash;28). True blessedness is not biological proximity to Jesus but active, obedient hearing. This stands as a summary of the chapter&rsquo;s entire concern: what does it mean to truly receive from God? It means coming to him in prayer, asking persistently, keeping the heart open to his light, and ordering the whole of life around his word.",
    ],
  },
  {
    id: "The Lord's Prayer",
    heading: "The Lord&rsquo;s Prayer &mdash; A Model for All Prayer",
    reference: "Luke 11:1&ndash;4",
    paragraphs: [
      "The disciples&rsquo; request &ldquo;Lord, teach us to pray, as John taught his disciples&rdquo; (11:1) reveals something important: prayer is not merely instinctive but must be learned. John the Baptist had evidently shaped the prayer life of his followers, and the disciples recognize that Jesus does the same. They are not asking for a new technique; they are asking to be formed into people who pray the way their teacher prays. The answer Jesus gives is both brief and inexhaustible.",
      "The Lukan version of the Lord&rsquo;s Prayer (vv. 2&ndash;4) is shorter than Matthew&rsquo;s (Matt 6:9&ndash;13) and lacks the doxology. It contains five petitions. The prayer opens by addressing God simply as &ldquo;Father&rdquo; &mdash; the Aramaic &lsquo;Abba&rsquo;, the intimate family address that Jesus used in his own prayers and that he now teaches his disciples to use as well. This single word is a theological statement of enormous weight: the disciples are invited into the same relationship with God that Jesus himself enjoys. They may come to the Almighty as children come to a loving parent.",
      "The first petition is &ldquo;hallowed be your name.&rdquo; This is not a wish that God&rsquo;s name might somehow become holier than it already is &mdash; God&rsquo;s name is eternally holy. Rather it is a prayer that God&rsquo;s name might be treated as holy, recognized as holy, by his people and by the watching world. It aligns with the great vision of the prophets, particularly Ezekiel, who foresaw a day when God would vindicate the holiness of his name among the nations (Ezek 36:23). To pray &ldquo;hallowed be your name&rdquo; is to pray that God would act in the world in ways that reveal who he truly is &mdash; that his character would be displayed, his reputation restored, his glory declared.",
      "The second petition, &ldquo;your kingdom come,&rdquo; is inseparable from the first. The kingdom of God is the realm and reign of God &mdash; the reality that God is King. To pray for the kingdom is to pray for the world to come under God&rsquo;s rule: for injustice to be overturned, for the poor to be lifted up, for the captives to be released, for all creation to be restored to its proper order under its proper King. Luke&rsquo;s Gospel has been building toward this kingdom from the opening chapters: Mary&rsquo;s Magnificat, Zechariah&rsquo;s Benedictus, and Jesus&rsquo; sermon at Nazareth all describe a world turned right-side-up by the coming of God&rsquo;s reign.",
      "The remaining petitions turn from God&rsquo;s concerns to the disciples&rsquo; needs. &ldquo;Give us each day our daily bread&rdquo; is a petition of radical dependence &mdash; not for a year&rsquo;s supply or a comfortable surplus, but for today&rsquo;s bread, the daily provision of a God who is asked to meet daily needs. This recalls the manna in the wilderness: God provided each morning what his people needed for that day, teaching them to trust him afresh each morning. &ldquo;Forgive us our sins, for we ourselves forgive everyone who is indebted to us&rdquo; ties our own reception of forgiveness to our practice of forgiving others &mdash; not as a condition that earns God&rsquo;s pardon, but as evidence that we have truly received it. And &ldquo;lead us not into temptation&rdquo; (or &ldquo;into trial&rdquo;) asks for God&rsquo;s protection from the kind of testing that might overwhelm and cause the disciple to fall away.",
      "What is most striking about the Lord&rsquo;s Prayer is its shape: it begins with God, with his name and his kingdom, before moving to human need. This ordering is itself a lesson in prayer. The natural human impulse is to begin with ourselves &mdash; with our problems, our desires, our anxieties. Jesus inverts this. The disciple who has learned to begin with &ldquo;Father, hallowed be your name, your kingdom come&rdquo; has already undergone a reorientation of the heart. The self is no longer the center of gravity; God is. And from that God-centered place, the prayer for daily bread and forgiveness and deliverance flows not from anxiety but from the confidence of a child who knows the character of the Father to whom he prays.",
      "The prayer also functions as a pattern, not a script to be recited mechanically. Both Matthew&rsquo;s &ldquo;in this manner pray&rdquo; (Matt 6:9) and Luke&rsquo;s context suggest a model that shapes the movements of prayer rather than a formula to be repeated word for word. The disciple who has been formed by the Lord&rsquo;s Prayer will find that all genuine prayer naturally moves through these same movements: adoration, alignment with God&rsquo;s purposes, dependence for daily needs, confession and the practice of forgiveness, and a cry for protection from the evil one. This is the full compass of the Christian life compressed into five petitions.",
    ],
  },
  {
    id: "Ask Seek Knock",
    heading: "Ask, Seek, Knock &mdash; The Promises of Persistent Prayer",
    reference: "Luke 11:5&ndash;13",
    paragraphs: [
      "Having given his disciples a model prayer, Jesus immediately reinforces it with a parable about the character of God as a giver. The parable of the persistent friend at midnight (vv. 5&ndash;8) is uniquely Lukan. A man goes to a friend at midnight and asks for three loaves of bread because a guest has arrived and he has nothing to set before him. The friend inside, with his door already shut and his children in bed, refuses to get up &mdash; but the visitor keeps on knocking. The friend finally gets up and gives him what he needs, not because of friendship, but because of his &lsquo;shamelessness&rsquo; (the word &lsquo;anaideia&rsquo; in v. 8, often translated &lsquo;persistence&rsquo; or &lsquo;importunity&rsquo;).",
      "The parable works by contrast &mdash; what theologians call a &lsquo;how much more&rsquo; argument. If even a reluctant, sleepy friend will eventually get up and give what is needed because of sheer persistence, how much more will God &mdash; who is never reluctant, never sleeping, never begrudging &mdash; give to those who ask him? The application moves immediately from the specific parable to the universal promises of verses 9&ndash;10: &ldquo;And I tell you, ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and the one who seeks finds, and to the one who knocks it will be opened.&rdquo;",
      "The three verbs &mdash; ask, seek, knock &mdash; represent an ascending scale of intensity. Asking is the simplest form of prayer: direct petition. Seeking implies a more active looking, a searching that involves effort and attention. Knocking suggests arriving at a door and pressing for entry &mdash; a more urgent, persistent kind of prayer. Together they describe a life of prayer that is not passive or occasional but active, searching, and determined. And all three come with absolute promises: it will be given, you will find, it will be opened. These are not qualified with &ldquo;if it is God&rsquo;s will&rdquo; or &ldquo;if you pray correctly.&rdquo; They are simple, sweeping promises.",
      "The key to understanding these promises lies in what Jesus says they culminate in. After giving two illustrations from human parenthood &mdash; a father does not give his son a serpent when he asks for a fish, or a scorpion when he asks for an egg &mdash; Jesus draws the conclusion in verse 13: &ldquo;If you then, who are evil, know how to give good gifts to your children, how much more will the heavenly Father give the Holy Spirit to those who ask him!&rdquo; The ultimate gift that the Father gives to those who persistently ask is the Holy Spirit. Matthew&rsquo;s parallel has &ldquo;good things&rdquo; (Matt 7:11); Luke has the Spirit. This is Luke&rsquo;s characteristic emphasis &mdash; the Spirit is the supreme gift of the Father, the fulfilment of all prayer, the one who empowers everything the Christian life requires.",
      "This means that the ask/seek/knock promises are not a blank check for any desire. They are promises oriented toward the deepest need of the human soul: the presence and power of God himself, given in the Holy Spirit. The Christian who persistently brings his needs, his confusion, his longing for God to the Father in prayer is not making a transaction but is being formed in dependence and trust. And the Father who gives the Spirit is giving everything &mdash; because in the Spirit, the believer receives the very life of God.",
      "The parable of the persistent friend also illuminates the shape of intercessory prayer. The man who knocks at midnight is not praying for himself but for a guest who has arrived unexpectedly and must be fed. This is the fundamental structure of intercession: standing between someone in need and the one who has resources to meet that need. The man has nothing to give out of his own supply (&ldquo;I have nothing to set before him,&rdquo; v. 6), so he goes to one who does. This is precisely the position of the intercessor &mdash; aware of personal inadequacy to meet another&rsquo;s need, and bold enough to go to the one who can supply it.",
      "The combination of the Lord&rsquo;s Prayer, the parable of the friend, and the ask/seek/knock promises creates one of the most concentrated and encouraging treatments of prayer in all of Scripture. Together they answer the two questions that most often paralyze prayer: &ldquo;What should I pray?&rdquo; and &ldquo;Does it actually work?&rdquo; Jesus answers the first by giving a pattern that covers everything essential. He answers the second by making promises about God&rsquo;s character: the Father gives good things; the Father gives the Holy Spirit; the door is opened to the one who knocks. Prayer is not shouting into an empty cosmos. It is speaking to a Father who hears, who gives, and who never tires of his children coming to him.",
    ],
  },
  {
    id: "Beelzebub Controversy",
    heading: "The Beelzebub Controversy &mdash; Hardness of Heart and the Stronger Man",
    reference: "Luke 11:14&ndash;54",
    paragraphs: [
      "The second half of Luke 11 opens with a dramatic exorcism. Jesus casts out a demon that had made a man mute, and when the demon left the man spoke. The crowd marvels, but the response is sharply divided. Some accuse Jesus of casting out demons by the power of Beelzebub, the prince of demons. Others, seeking to test him, demand a sign from heaven. These two responses &mdash; malicious accusation and unsatisfied skepticism &mdash; represent the twin forms of hardness of heart that Jesus addresses in the remainder of the chapter.",
      "Jesus meets the Beelzebub accusation with a devastating logical rebuttal. &ldquo;Every kingdom divided against itself is laid waste, and a divided household falls. And if Satan also is divided against himself, how will his kingdom stand?&rdquo; (vv. 17&ndash;18). If Jesus were casting out demons by Satan&rsquo;s power, Satan would be destroying his own work &mdash; a strategy of self-destruction that makes no sense. Moreover, Jesus&rsquo; opponents&rsquo; own sons also perform exorcisms; by whose power do they do it? Their own practice refutes the logic of their accusation.",
      "Having dismantled the Beelzebub charge, Jesus offers the true interpretation of his exorcisms: &ldquo;But if it is by the finger of God that I cast out demons, then the kingdom of God has come upon you&rdquo; (v. 20). The phrase &lsquo;finger of God&rsquo; echoes Exodus 8:19, where the Egyptian magicians recognized the plagues of Moses as the work of the finger of God. Jesus is using Exodus language to say: what you are watching is a new Exodus, a new liberation, the invasion of God&rsquo;s kingdom into Satan&rsquo;s territory. The exorcisms are not incidental miracles; they are signs that a decisive power encounter has begun.",
      "The parable of the strong man (vv. 21&ndash;22) makes this explicit. A strong man &mdash; Satan &mdash; guards his palace and his goods are safe. But when a stronger man comes and overcomes him, he takes away the armor in which the strong man trusted and divides the spoils. Jesus is the Stronger Man. His ministry is a sustained assault on the domain of the enemy, rescuing those held captive, plundering the goods of the kingdom of darkness. The exorcisms are not isolated events; they are the advance of the coming kingdom.",
      "Then comes one of the most chilling passages in the Gospels: the story of the unclean spirit that returns (vv. 24&ndash;26). When an unclean spirit goes out of a person, it wanders seeking rest and finding none. It returns and finds the house swept clean and put in order &mdash; but empty. It then brings seven other spirits more evil than itself, and the last state of that person is worse than the first. Jesus is warning about the danger of a merely negative reformation &mdash; removing something bad without filling the space with something good. An empty life is not a safe life. The house that has been swept but not inhabited by the Spirit of God is vulnerable to a worse occupation than before.",
      "When a woman in the crowd cries &ldquo;Blessed is the womb that bore you!&rdquo; (v. 27), Jesus redirects her: &ldquo;Blessed rather are those who hear the word of God and keep it!&rdquo; (v. 28). True blessedness is not proximity to Jesus but responsive, obedient hearing. This is a word addressed to every generation: the blessing of the gospel does not belong automatically to those who are religiously associated with Jesus &mdash; those who grew up in the church, who know the right language, who have made a profession. It belongs to those who hear and keep.",
      "The demand for a sign (vv. 29&ndash;32) meets with a rebuke. This generation is evil in seeking a sign, and the only sign it will be given is the sign of Jonah. As Jonah was three days in the belly of the fish and then became a sign to Nineveh, so the Son of Man will be to this generation. Jesus points to his resurrection as the sign &mdash; and notes that even Gentile pagans (the Ninevites, the Queen of the South) responded to less and will condemn those who rejected the greater. The problem is not a lack of evidence; the problem is a failure of the will to receive what God has given.",
      "The woes that follow at the Pharisee&rsquo;s dinner table (vv. 37&ndash;54) are among the most concentrated criticisms Jesus ever levelled. He pronounces woe on the Pharisees for cleansing the outside of the cup while the inside is full of greed and wickedness (v. 39); for tithing mint and rue while neglecting justice and the love of God (v. 42); for loving the best seats in the synagogues (v. 43); and for being like unmarked graves that people walk over without knowing (v. 44). The lawyers receive woes for loading others with burdens they do not lift (v. 46), for building the tombs of the prophets their fathers killed (vv. 47&ndash;51), and above all for taking away the key of knowledge &mdash; refusing to enter the kingdom themselves and hindering those who would (v. 52). As Jesus left, the scribes and Pharisees pressed upon him, seeking to catch him in something he might say. The chapter that began with prayer ends with a conspiracy of opposition. The contrast is total: those who ask the Father in prayer receive the Holy Spirit; those who close their hearts to the kingdom plot its destruction.",
    ],
  },
];

const videoItems = [
  { videoId: "R4FOOmKpMAk", title: "Luke 11 - The Lord's Prayer Explained" },
  { videoId: "Lp7E973zozc", title: "Ask, Seek, Knock - Luke 11:9-13 Sermon" },
  { videoId: "oBP3KTiMpnI", title: "BibleProject - Overview of Luke 1-9" },
  { videoId: "tNF_XNYI3eM", title: "The Beelzebub Controversy and the Kingdom of God" },
];

export default function Luke11GuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}33`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Luke 11 &mdash; Prayer, the Kingdom, and the Heart
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Jesus teaches his disciples to pray with the Lord&rsquo;s Prayer, grounds persistent prayer in the character of the Father, promises the Holy Spirit to all who ask, and then confronts the hardened hearts of a generation that demands signs while rejecting the light already given.
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
            >
              {t}
            </button>
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2
                style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: currentSection.heading }}
              />
            </div>
            <div
              style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }}
              dangerouslySetInnerHTML={{ __html: currentSection.reference }}
            />
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

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem", marginBottom: "3rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }}>Key Themes in Luke 11</h3>
          <ul style={{ margin: 0, padding: "0 0 0 1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              "Prayer as relational address to a Father, not a technique for results",
              "The Lord&rsquo;s Prayer as a compass that shapes all Christian prayer",
              "Persistence in prayer grounded in the character of God, not the merit of the petitioner",
              "The Holy Spirit as the supreme gift the Father gives to those who ask",
              "The kingdom of God advancing over the kingdom of darkness through Jesus&rsquo; exorcisms",
              "The danger of the empty, swept house &mdash; reformation without transformation",
              "Hearing and keeping the word as the true mark of the blessed",
              "Woes against external religion that neglects justice and the love of God",
            ].map((item, i) => (
              <li
                key={i}
                style={{ color: MUTED, fontSize: "0.98rem", lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </ul>
        </div>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}>
            Deepen your study of Luke 11 through visual teaching on the Lord&rsquo;s Prayer, the promises of ask/seek/knock, and the controversies that follow.
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

        <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>How Much More Will Your Father Give</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Luke 11 anchors the Christian&rsquo;s entire prayer life in a single, unshakeable truth: if earthly parents, who are imperfect and finite, know how to give good gifts to their children, how much more will the heavenly Father give the Holy Spirit to those who ask him. Every petition prayed in faith, every door knocked on in persistence, every search pressed in hope &mdash; all are heard by a Father who never sleeps, never begrudges, and never fails to give what his children truly need.
          </p>
        </div>
      </main>
    </div>
  );
}
