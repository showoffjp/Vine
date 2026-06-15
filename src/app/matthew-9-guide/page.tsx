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
  "Authority to Forgive Sins",
  "New Wine, New Wineskins",
  "Healing and the Harvest",
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
    heading: "Overview of Matthew 9",
    reference: "Matthew 9:1&ndash;38",
    paragraphs: [
      "Matthew chapter 9 is a swift, densely packed gallery of miracles and encounters that reveals who Jesus is and what his coming means. After crossing back over the Sea of Galilee to his own town of Capernaum, Jesus is met by men carrying a paralytic on a mat. Rather than addressing the man&rsquo;s legs first, Jesus speaks to his deepest need: &ldquo;Take heart, son; your sins are forgiven&rdquo; (9:2). When the scribes silently charge him with blasphemy, Jesus heals the man visibly to prove his invisible authority to forgive, and the crowds glorify God for giving such authority to men (9:1&ndash;8).",
      "From there Jesus passes the tax booth and calls Matthew, the very author of this Gospel, with two words: &ldquo;Follow me&rdquo; (9:9). Matthew rises and follows, and at the dinner that follows Jesus reclines with tax collectors and sinners, scandalizing the Pharisees. His answer reframes his whole mission: &ldquo;Those who are well have no need of a physician, but those who are sick&hellip; I desire mercy, and not sacrifice&rdquo; (9:12&ndash;13), quoting the prophet Hosea (9:9&ndash;13).",
      "Next the disciples of John the Baptist come asking why Jesus&rsquo; disciples do not fast. Jesus answers with the image of a wedding: the guests cannot mourn while the bridegroom is present. He then offers two short parables &mdash; the unshrunk patch on an old garment and new wine in old wineskins &mdash; teaching that the newness of the kingdom cannot be poured into the worn forms of the old order without bursting them (9:14&ndash;17).",
      "The chapter then weaves together two intertwined miracles. A synagogue ruler, Jairus, begs Jesus to come because his daughter has just died. On the way, a woman who had suffered from bleeding for twelve years touches the fringe of his garment and is healed; Jesus turns and says, &ldquo;Take heart, daughter; your faith has made you well&rdquo; (9:22). Arriving at the ruler&rsquo;s house amid the noise of mourners, Jesus takes the dead girl by the hand and raises her to life (9:18&ndash;26).",
      "Two blind men then follow Jesus crying out, &ldquo;Have mercy on us, Son of David&rdquo; (9:27). He touches their eyes with the words, &ldquo;According to your faith be it done to you&rdquo; (9:29), and they see. A mute man oppressed by a demon is brought to him and is freed to speak, leaving the crowds marveling. Yet the Pharisees, unwilling to credit God, mutter that he casts out demons by the prince of demons (9:27&ndash;34).",
      "The chapter closes with a summary that becomes the doorway into chapter 10. Jesus goes through all the towns and villages, teaching, proclaiming the gospel of the kingdom, and healing every disease. When he sees the crowds, he is moved with compassion, &ldquo;because they were harassed and helpless, like sheep without a shepherd&rdquo; (9:36). His response is not despair but a call to prayer: &ldquo;The harvest is plentiful, but the laborers are few; therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest&rdquo; (9:37&ndash;38). The compassion of this chapter sets the stage for the sending of the Twelve.",
    ],
  },
  {
    id: "Authority to Forgive Sins",
    heading: "Authority to Forgive Sins",
    reference: "Matthew 9:1&ndash;13",
    paragraphs: [
      "The opening scene of Matthew 9 is one of the boldest claims in the Gospels. A paralyzed man is brought to Jesus, and the first thing the Lord addresses is not the body but the soul: &ldquo;Take heart, son; your sins are forgiven&rdquo; (9:2). To a watching world this seems like a strange priority &mdash; the man came to walk, not to confess &mdash; but Jesus deliberately exposes the deeper paralysis beneath the visible one. Sin, not infirmity, is humanity&rsquo;s root condition, and Jesus comes to heal at the root.",
      "The scribes seize on the words at once. To pronounce forgiveness is to claim a prerogative that belongs to God alone, for only the one who has been wronged by all sin can absolve it. &ldquo;This man is blaspheming,&rdquo; they think to themselves (9:3). They are, in a sense, correct about the logic: if Jesus is not God, then his words are blasphemy. The whole episode hangs on the question of his identity, and Jesus is about to answer it.",
      "Knowing their thoughts, Jesus poses a pointed question: &ldquo;Which is easier, to say, &lsquo;Your sins are forgiven,&rsquo; or to say, &lsquo;Rise and walk&rsquo;?&rdquo; (9:5). To speak forgiveness is easy because it cannot be tested; no one can see whether sins have departed. But to command a paralytic to walk is a claim that can be verified or exposed in an instant. So Jesus offers the visible miracle as proof of the invisible authority: &ldquo;That you may know that the Son of Man has authority on earth to forgive sins&rdquo; (9:6), he turns to the man and tells him to rise, take up his bed, and go home. The man does, and the crowds are filled with awe.",
      "Matthew then records his own calling, told with striking modesty. As Jesus passes by, he sees a man called Matthew sitting at the tax booth, and he says simply, &ldquo;Follow me&rdquo; (9:9). Tax collectors were despised in Israel as collaborators with Rome and as cheats who enriched themselves at their neighbors&rsquo; expense. They were ranked with sinners and excluded from respectable society. Yet to this man, at his post of dishonest gain, Jesus extends a personal call, and Matthew rises and follows him.",
      "The call leads immediately to a meal. Jesus reclines at table with many tax collectors and sinners, the very people the religious establishment shunned. When the Pharisees ask the disciples why their teacher eats with such company, Jesus overhears and answers: &ldquo;Those who are well have no need of a physician, but those who are sick&rdquo; (9:12). He has come precisely for the spiritually sick, and to stay away from sinners would be like a doctor refusing to enter a hospital.",
      "He then sends them to school with a verse from the prophets: &ldquo;Go and learn what this means, &lsquo;I desire mercy, and not sacrifice&rsquo;&rdquo; (9:13, quoting Hosea 6:6). The Pharisees prized ritual purity and sacrifice, but God had always sought hearts of mercy more than mechanical religion. &ldquo;I came not to call the righteous, but sinners&rdquo; (9:13), Jesus concludes &mdash; not because there are any truly righteous, but because those who imagine themselves whole will never seek the physician. The authority to forgive and the mission to the lost are bound together in one Savior.",
    ],
  },
  {
    id: "New Wine, New Wineskins",
    heading: "New Wine, New Wineskins",
    reference: "Matthew 9:14&ndash;17",
    paragraphs: [
      "In the middle of the chapter, the disciples of John the Baptist approach Jesus with an honest question about religious practice: &ldquo;Why do we and the Pharisees fast, but your disciples do not fast?&rdquo; (9:14). Fasting was a deeply ingrained mark of piety in first-century Judaism, a sign of mourning, repentance, and longing for God&rsquo;s deliverance. John&rsquo;s disciples, devoted to a stern prophetic asceticism, are puzzled that the followers of Jesus seem to live with a strange and inappropriate joy.",
      "Jesus answers first with the image of a wedding feast. &ldquo;Can the wedding guests mourn as long as the bridegroom is with them?&rdquo; (9:15). In the Old Testament, God is portrayed as the bridegroom of his people; here Jesus quietly takes that role to himself. While the bridegroom is present, the appointed mood is celebration, not mourning. To fast in his presence would misread the moment entirely, like wearing black to a wedding. The kingdom has drawn near in his person, and that calls for gladness.",
      "Yet Jesus does not abolish fasting forever. &ldquo;The days will come when the bridegroom is taken away from them, and then they will fast&rdquo; (9:15). This is one of the earliest veiled hints of his coming death &mdash; the bridegroom will be taken away. The church does fast, in the season between his ascension and his return, longing for the consummation of all things. But the fasting of the new covenant flows out of an underlying joy in a Savior who has already come, not the anxious mourning of those still waiting for him.",
      "Jesus then drives the point home with two compact parables drawn from everyday life. &ldquo;No one puts a piece of unshrunk cloth on an old garment, for the patch tears away from the garment, and a worse tear is made&rdquo; (9:16). A new, unshrunk patch sewn onto a worn cloak will shrink when washed and rip the old fabric apart. The newness Jesus brings cannot simply be stitched onto the old religious system as a repair; it is something of a different order altogether.",
      "The second parable makes the same point with greater force: &ldquo;Neither is new wine put into old wineskins. If it is, the skins burst and the wine is spilled and the skins are destroyed. But new wine is put into fresh wineskins, and so both are preserved&rdquo; (9:17). New wine ferments and expands; only supple new skins can stretch to hold it, while brittle old ones split under the pressure. The fermenting, expanding life of the kingdom cannot be contained within the rigid forms of merely external, rule-bound religion.",
      "The theological significance is profound. Jesus is not merely reforming Judaism but inaugurating something genuinely new &mdash; the new covenant promised by the prophets, written on the heart rather than carved in the externals of ceremony. The old covenant was good and God-given, a true preparation, yet it pointed beyond itself to fulfillment in Christ. The relationship between old and new is not contradiction but fulfillment: the wedding has come, the wine is new, and what God is doing cannot be poured back into the cracked vessels of self-justifying religion without bursting them. To receive Jesus rightly is to be made into a new wineskin, ready to hold the joy he brings.",
    ],
  },
  {
    id: "Healing and the Harvest",
    heading: "Healing, Raising, and the Plentiful Harvest",
    reference: "Matthew 9:18&ndash;38",
    paragraphs: [
      "The final movement of the chapter gathers a cascade of miracles that display Jesus&rsquo; mastery over disease, death, and demons. It opens with a ruler &mdash; named Jairus in the parallel accounts &mdash; who falls before Jesus with shattering news and astonishing faith: &ldquo;My daughter has just died, but come and lay your hand on her, and she will live&rdquo; (9:18). Jesus rises and follows him, and the whole crowd presses along to see what he will do.",
      "On the way, a second story interrupts the first. A woman who had suffered from a discharge of blood for twelve years &mdash; an affliction that left her ritually unclean and socially isolated &mdash; comes up behind Jesus in the crush of the crowd. She says to herself, &ldquo;If I only touch his garment, I will be made well&rdquo; (9:21), and she reaches out to the fringe of his cloak. Jesus turns, sees her, and instead of rebuking her for touching him, he honors her faith: &ldquo;Take heart, daughter; your faith has made you well&rdquo; (9:22). Instantly she is healed.",
      "Arriving at the ruler&rsquo;s house, Jesus finds the flute players and the wailing crowd already mourning the dead girl. &ldquo;Go away,&rdquo; he says, &ldquo;for the girl is not dead but sleeping&rdquo; (9:24), and they laugh him to scorn, for they know death when they see it. But to Jesus, death is no more permanent than sleep. He takes the girl by the hand, and she rises. The report of this raising spreads through all that district, for the one who can summon the dead back to life has revealed an authority that belongs to God alone.",
      "As Jesus moves on, two blind men follow him, crying out, &ldquo;Have mercy on us, Son of David&rdquo; (9:27). The title &ldquo;Son of David&rdquo; is loaded with messianic hope; even in their blindness they see who he is more clearly than the seeing scribes. Jesus tests and draws out their faith: &ldquo;Do you believe that I am able to do this?&rdquo; They answer, &ldquo;Yes, Lord.&rdquo; He touches their eyes, saying, &ldquo;According to your faith be it done to you&rdquo; (9:28&ndash;29), and their sight is restored.",
      "Then a demon-oppressed man who cannot speak is brought to Jesus, and when the demon is cast out, the mute man speaks. The crowds marvel and say, &ldquo;Never was anything like this seen in Israel&rdquo; (9:33). But the Pharisees, hardened against the evidence before their eyes, give the opposite verdict: &ldquo;He casts out demons by the prince of demons&rdquo; (9:34). The same works that draw wonder from the crowds provoke slander from those determined not to believe &mdash; a foreshadowing of the deepening conflict that runs through the Gospel.",
      "The chapter ends with one of the most tender summaries in all of Scripture. Jesus goes through all the cities and villages, teaching, preaching the gospel of the kingdom, and healing every disease and affliction. &ldquo;When he saw the crowds, he had compassion for them, because they were harassed and helpless, like sheep without a shepherd&rdquo; (9:36). The word for compassion describes a feeling in the depths of the body, a visceral mercy. Israel&rsquo;s leaders had failed their flock, leaving the people scattered and exhausted, and the true Shepherd&rsquo;s heart goes out to them.",
      "His response to this need is to turn the eyes of his disciples toward a harvest. &ldquo;The harvest is plentiful, but the laborers are few; therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest&rdquo; (9:37&ndash;38). The crowds are not a hopeless burden but a ripe field, and the great lack is not in the harvest but in the workers. This prayer flows directly into the next chapter, where Jesus calls the Twelve and sends them out as the first laborers &mdash; an answer, in part, to the very prayer he has just commanded.",
    ],
  },
];

const videoItems = [
  { videoId: "Hq3sLpFw2y4", title: "BibleProject - Gospel of Matthew Overview" },
  { videoId: "Qk7v9XmZ0pL", title: "The Calling of Matthew the Tax Collector Explained" },
  { videoId: "Lr8nW4tBcA1", title: "Authority to Forgive Sins - Matthew 9 Study" },
  { videoId: "Zp2KdM9vRf6", title: "New Wineskins and the Plentiful Harvest" },
];

export default function Matthew9GuidePage() {
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
            The Gospel of Matthew, Chapter 9
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A gallery of mercy and authority &mdash; Jesus forgives and heals the paralytic, calls Matthew from the tax booth, teaches the parable of new wineskins, raises Jairus&rsquo; daughter and heals the bleeding woman, opens blind eyes, and looks on the harassed crowds with compassion: the harvest is plentiful, but the workers are few.
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
              Deepen your study of Matthew 9 through visual teaching on Jesus&rsquo; authority to forgive sins, the call of Matthew, the parable of new wineskins, and the compassion that sees a plentiful harvest.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Harvest is Plentiful</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Matthew 9 shows the heart of Jesus in action &mdash; forgiving the guilty, calling the outcast, healing the broken, and raising the dead. Each miracle answers the question of who he is, and the chapter ends not in triumphant display but in tender compassion for sheep without a shepherd. Its enduring call still sounds: pray earnestly to the Lord of the harvest, and be among the laborers he sends into his field.
          </p>
        </div>
      </main>
    </div>
  );
}
