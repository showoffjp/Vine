"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = GREEN;

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

interface Block {
  heading: string;
  reference?: string;
  accent?: string;
  paragraphs: string[];
}

interface TabContent {
  id: Tab;
  title: string;
  reference: string;
  intro: string;
  blocks: Block[];
}

const content: TabContent[] = [
  {
    id: "Overview",
    title: "Mark 7: Tradition, the Heart, and Faith Beyond Israel",
    reference: "Mark 7:1&ndash;37",
    intro:
      "Mark 7 is a hinge in the Gospel, a chapter where the conflict between Jesus and the religious establishment over ritual purity opens out into a startling redefinition of what truly makes a person clean or unclean. The chapter moves from a sharp confrontation in Galilee to two healing scenes in Gentile territory, tracing a deliberate arc from the heart of Israel outward to the nations.",
    blocks: [
      {
        heading: "A Confrontation Over Clean Hands",
        reference: "Mark 7:1&ndash;5",
        accent: GREEN,
        paragraphs: [
          "The chapter opens with Pharisees and certain scribes who had come all the way from Jerusalem gathering around Jesus. Their attention falls not on his teaching or his miracles but on the hands of his disciples, who were eating bread with hands that were ceremonially defiled, that is, unwashed. Mark, writing for a largely Gentile audience, pauses to explain the custom, noting that the Pharisees and all the Jews do not eat unless they wash their hands carefully, holding to the tradition of the elders. This was not a question of hygiene but of ritual purity, a body of oral regulation that had grown up around the written Law of Moses.",
          "Mark expands the explanation, describing how the Pharisees washed cups and pots and copper vessels and dining couches, surrounding every meal with a careful choreography of purification. The tradition of the elders was an enormous and intricate inheritance, a fence built around the Torah to keep Israel from ever accidentally transgressing it. To these guardians of the tradition, the unwashed hands of the disciples were a visible sign of religious carelessness, perhaps even of contempt.",
          "And so the Pharisees and the scribes put their question to Jesus directly: why do your disciples not walk according to the tradition of the elders, but eat with defiled hands? The question is framed as an accusation. They assume that the tradition carries an authority that ought to be obvious, and they expect Jesus either to discipline his disciples or to be exposed as a teacher who does not take holiness seriously. Jesus turns the question back upon them with devastating force.",
        ],
      },
      {
        heading: "Lips Near, Hearts Far",
        reference: "Mark 7:6&ndash;13",
        accent: GOLD,
        paragraphs: [
          "Jesus answers by reaching back to the prophet Isaiah, quoting Isaiah 29:13: this people honors me with their lips, but their heart is far from me; in vain do they worship me, teaching as doctrines the commandments of men. The prophetic word lands like a verdict. The very people most concerned with external observance are diagnosed as worshipers whose hearts have drifted far from God, their devotion hollowed out into the mere performance of human rules.",
          "Then Jesus presses the charge into a concrete and damning example. He accuses them of leaving the commandment of God and holding to the tradition of men. To show how this works in practice he raises the case of korban, also written corban, a word meaning a gift devoted to God. A person could declare that the resources he might have used to support his aging parents were korban, dedicated to the temple, and thereby be released from the duty of caring for father and mother.",
          "The result was monstrous. The command to honor father and mother, written into the Decalogue itself and reinforced by the warning that whoever reviles father or mother must surely die, was being nullified by a clever vow. Tradition had been turned into a tool for evading the plain moral law of God. Jesus says they make void the word of God by their tradition, and he adds with weary emphasis that they do many such things. The fence built to protect the Law had become a wall that shut the Law out.",
        ],
      },
      {
        heading: "Two Healings Beyond the Border",
        reference: "Mark 7:24&ndash;37",
        accent: TEAL,
        paragraphs: [
          "Having overturned the categories of clean and unclean, Jesus moves geographically into unclean territory. He travels to the region of Tyre and Sidon, Gentile cities on the Mediterranean coast, and there a Greek woman of Syrophoenician origin falls at his feet and begs him to cast a demon out of her daughter. Their exchange about children and dogs and crumbs becomes one of the most remarkable dialogues in the Gospel, and the daughter is healed at a distance by the word of Jesus alone.",
          "From there Jesus journeys through Sidon to the Sea of Galilee, into the region of the Decapolis, a confederation of Gentile cities. There the people bring him a man who is deaf and has an impediment in his speech. Jesus takes him aside privately, puts his fingers into the man's ears, touches his tongue, looks up to heaven, sighs, and says Ephphatha, an Aramaic word that Mark translates as Be opened. Immediately the man's ears are opened and his tongue is released.",
          "The crowd responds with astonishment beyond measure, declaring that he has done all things well; he even makes the deaf hear and the mute speak. The words echo the creation account, where God saw that everything he had made was very good, and they echo the prophet Isaiah, who foretold that in the day of salvation the ears of the deaf would be unstopped and the tongue of the mute would sing. In Gentile territory, the messianic signs are breaking out.",
        ],
      },
    ],
  },
  {
    id: "Key Themes",
    title: "Key Themes of Mark 7",
    reference: "Mark 7:1&ndash;37",
    intro:
      "Beneath the narrative surface of Mark 7 run several deep theological currents. The chapter is a sustained meditation on the nature of defilement, the source of holiness, and the widening reach of the kingdom of God to people once thought to be outside its borders.",
    blocks: [
      {
        heading: "External Ritual Versus Internal Purity",
        accent: GREEN,
        paragraphs: [
          "The central theme of the chapter is the contrast between outward observance and the inward condition of the heart. The Pharisees had constructed an entire system of holiness around what enters the body and what touches the skin, around washed hands and purified vessels. Jesus exposes this as a fundamental misunderstanding of where defilement actually comes from. Holiness is not primarily a matter of avoiding contamination from outside; it is a matter of the orientation of the heart toward or away from God.",
          "This does not mean that the external is irrelevant or that ritual has no place. The point is one of order and source. External behavior flows from internal reality, and so the cleansing that matters most must begin within. A person can keep every rule of the tradition with scrupulous care and still be far from God, just as Isaiah said, honoring God with the lips while the heart wanders in another country entirely.",
        ],
      },
      {
        heading: "The Heart as the Source of Defilement",
        accent: GOLD,
        paragraphs: [
          "When Jesus gathers the crowd again, he lays down a principle that overturns the assumptions of his hearers: there is nothing outside a person that by going into him can defile him, but the things that come out of a person are what defile him. Later, in private, he explains to his puzzled disciples that what comes out of a person, out of the heart, is what defiles, for from within, out of the heart, come the things that corrupt.",
          "Jesus then sets out a sobering catalog of the evils that proceed from the human heart: evil thoughts, sexual immorality, theft, murder, adultery, coveting, wickedness, deceit, sensuality, envy, slander, pride, and foolishness. All these evil things come from within, and they defile a person. The list is comprehensive and searching, naming sins of thought and act, of desire and speech, of the inner life and the outward deed. The problem of human uncleanness is located not at the surface of life but at its center.",
          "This teaching is one of the most penetrating moral diagnoses in all of Scripture. It refuses the comfortable assumption that evil is something external that happens to us, a contamination we can wash off. Instead it places the source of corruption squarely within, in the heart that needs not merely cleansing but renewal. The implication is that no ritual can finally make a person clean; what is needed is a new heart, a transformation that only God can work.",
        ],
      },
      {
        heading: "All Foods Declared Clean",
        accent: PURPLE,
        paragraphs: [
          "Mark inserts a brief but momentous editorial comment into the teaching about what enters a person: in saying this, he declared all foods clean. With these few words the entire apparatus of the dietary laws, the careful distinctions between clean and unclean animals that had marked Israel off from the nations for centuries, is set aside. What had been a boundary marker of the covenant people is pronounced obsolete in the light of the kingdom Jesus brings.",
          "The significance of this declaration is hard to overstate. The food laws were among the most visible and identity-forming practices of Judaism, woven into daily life and deeply tied to a sense of national and religious distinctiveness. By declaring all foods clean, Jesus removes one of the chief barriers that separated Jew from Gentile, preparing the way for a community in which the old divisions no longer hold. This is the same revelation Peter would later receive on the rooftop in Joppa before going to the household of Cornelius.",
        ],
      },
      {
        heading: "Faith Reaching Beyond Israel",
        accent: TEAL,
        paragraphs: [
          "The second half of the chapter dramatizes in narrative what the first half declared in teaching. If foods are clean and defilement comes only from the heart, then the old barrier between Jew and Gentile has lost its foundation, and the way is open for faith to be found outside the borders of Israel. Jesus crosses into Gentile lands, and there he encounters faith of a striking kind in a Greek woman and works a sign of liberation in the Decapolis.",
          "This is the Gentile mission foreshadowed. Mark, writing for a church that already included many Gentiles, sees in these scenes a preview of the worldwide gathering that would follow Easter and Pentecost. The God of Israel is not the property of one nation; the table at which the children are fed has room, in the end, even for those who once stood outside as dogs under it. The crumbs of grace prove to be more than enough.",
        ],
      },
      {
        heading: "The Messianic Healing Signs",
        accent: ROSE,
        paragraphs: [
          "The healing of the deaf man with the speech impediment is more than a compassionate miracle; it is a sign loaded with prophetic meaning. Isaiah had promised that when God came to save his people, the eyes of the blind would be opened and the ears of the deaf unstopped, and the tongue of the mute would sing for joy. When the crowd cries out that he has done all things well, making the deaf hear and the mute speak, they are unwittingly testifying that the age of salvation has arrived.",
          "These signs in Gentile territory are a quiet announcement that the kingdom of God is breaking into the world for all people. The one who opens deaf ears and looses bound tongues is the one through whom the new creation begins. The word Ephphatha, Be opened, becomes a kind of summary of the whole chapter, a command spoken not only to a man's ears but to a world closed in upon its own traditions and fears.",
        ],
      },
    ],
  },
  {
    id: "Verse by Verse",
    title: "Verse by Verse Through Mark 7",
    reference: "Mark 7:1&ndash;37",
    intro:
      "Moving carefully through the chapter section by section reveals how tightly Mark has constructed it, with each scene building on the last to drive home a single unfolding argument about purity, the heart, and the reach of grace.",
    blocks: [
      {
        heading: "The Question of the Pharisees",
        reference: "Mark 7:1&ndash;5",
        accent: GREEN,
        paragraphs: [
          "The delegation from Jerusalem signals that this is a serious official inquiry, not a casual exchange. The capital city was the center of religious authority, and scribes sent from there carried weight. Their complaint about the disciples eating with defiled, that is, unwashed, hands establishes the issue of the whole first half of the chapter: the relationship between the tradition of the elders and the genuine will of God.",
          "Mark's parenthetical explanation of Jewish washing customs reminds the reader that the evangelist is interpreting these events for outsiders. The careful detail about cups, pots, copper vessels, and couches paints a picture of a piety that has come to focus its energy on the surfaces of things. The stage is set for Jesus to ask where, in all this elaborate cleansing, the heart has gone.",
        ],
      },
      {
        heading: "Isaiah and the Charge of Hypocrisy",
        reference: "Mark 7:6&ndash;13",
        accent: GOLD,
        paragraphs: [
          "Jesus calls them hypocrites and quotes Isaiah 29:13, applying an ancient prophetic rebuke directly to his contemporaries. The verse cuts to the difference between lip and heart, between worship that is performed and worship that is meant. The phrase teaching as doctrines the commandments of men becomes the key charge: human tradition has been elevated to the status of divine command.",
          "The example of korban or corban makes the abstract charge painfully concrete. By allowing a man to declare his resources devoted to God and thereby withhold support from his own parents, the tradition had created a loophole through the fifth commandment. Jesus names this for what it is, the making void of the word of God by tradition, and he notes pointedly that this is only one instance among many such practices.",
        ],
      },
      {
        heading: "What Truly Defiles",
        reference: "Mark 7:14&ndash;23",
        accent: PURPLE,
        paragraphs: [
          "Jesus calls the crowd to him and issues a public principle, then explains it privately to the disciples who fail to grasp it. Nothing entering from outside can defile, because it passes through the body and out again, not touching the heart. It is what comes out, from within, that defiles. Mark's editorial note that Jesus thus declared all foods clean marks the theological climax of the first half of the chapter.",
          "The catalog of evils that follows is one of the most searching lists in the Gospels, naming the sins that arise from the human heart: evil thoughts, sexual immorality, theft, murder, adultery, coveting, wickedness, deceit, sensuality, envy, slander, pride, and foolishness. The diagnosis is total. The problem is not what we touch but who we are, and the remedy must therefore be a renewal that reaches the center of the self.",
        ],
      },
      {
        heading: "The Syrophoenician Woman",
        reference: "Mark 7:24&ndash;30",
        accent: TEAL,
        paragraphs: [
          "Jesus withdraws to the region of Tyre, hoping to remain hidden, but a Greek woman of Syrophoenician origin learns of him and comes to fall at his feet, begging deliverance for her demon-tormented daughter. Jesus answers with words that test her: let the children first be fed, for it is not right to take the children's bread and throw it to the dogs. The saying draws the line between Israel, the children, and the Gentiles.",
          "Her reply is a masterpiece of humble, persistent faith: yes, Lord, yet even the dogs under the table eat the children's crumbs. She does not dispute the priority of Israel; she simply claims a place for the overflow of grace. Jesus marvels at her answer and tells her that for this saying the demon has left her daughter. She goes home to find the child lying on the bed, free. Faith has reached across the border and laid hold of mercy.",
        ],
      },
      {
        heading: "Ephphatha in the Decapolis",
        reference: "Mark 7:31&ndash;37",
        accent: ROSE,
        paragraphs: [
          "Returning by way of Sidon to the Sea of Galilee and into the Decapolis, Jesus is brought a man who is deaf and can barely speak. He takes the man aside from the crowd, an act of personal tenderness, and uses a series of intimate gestures: fingers in the ears, spittle on the tongue, a look toward heaven, and a deep sigh that suggests he feels the weight of a broken world. Then he speaks the word Ephphatha, Be opened.",
          "Instantly the man hears and speaks plainly. Jesus charges the witnesses to tell no one, yet the more he orders them, the more zealously they proclaim it. Their verdict, he has done all things well; he even makes the deaf hear and the mute speak, closes the chapter on a note of wonder and unwitting testimony, identifying Jesus with the saving God of Isaiah's prophecy and with the Creator who once pronounced all things very good.",
        ],
      },
    ],
  },
  {
    id: "Application",
    title: "Living Mark 7 Today",
    reference: "Mark 7:1&ndash;37",
    intro:
      "Mark 7 is not merely a record of an ancient controversy; it confronts every reader with searching questions about the nature of our own religion, the condition of our own hearts, and the width of our own welcome. The chapter calls us to a faith that is inward, honest, and gladly open to those beyond our circle.",
    blocks: [
      {
        heading: "Beware the Tradition That Replaces God",
        accent: GREEN,
        paragraphs: [
          "Every community of faith develops traditions, and traditions can be good servants. But Mark 7 warns us how easily a tradition can quietly take the place of the very God it was meant to serve. We can become so attached to our customs, our preferences, and our inherited ways of doing things that we begin to judge others by them and even to set aside plain commands of God in order to defend them. The question Jesus presses is whether our practices still point to God or have become an end in themselves.",
          "The example of korban is a sober reminder that religious devotion can be twisted into an excuse for neglecting clear moral duty. We are capable of using spiritual language to avoid the costly obligations of love, especially toward those closest to us. True religion, as another writer in the New Testament insists, includes caring for one's own family and for the vulnerable, not constructing pious reasons to escape it.",
        ],
      },
      {
        heading: "Tend the Heart, Not Just the Surface",
        accent: GOLD,
        paragraphs: [
          "The deepest application of the chapter is a call to honest self-examination. Jesus teaches that defilement comes from within, from the heart, and he names the specific evils that lurk there. It is far easier to manage our outward behavior and reputation than to face what actually rises within us in unguarded moments. Yet that is precisely where the gospel does its work, for the heart is what God seeks to renew.",
          "This teaching guards us against two errors at once. It guards us against a shallow religion content with appearances, and it guards us against despair, for once we see that the problem is the heart, we also see that the solution must come from God's transforming grace rather than our own efforts at the surface. The right response is not better hand washing but a prayer for a clean heart and a right spirit.",
        ],
      },
      {
        heading: "Welcome the Outsider",
        accent: TEAL,
        paragraphs: [
          "The Syrophoenician woman and the deaf man of the Decapolis stand as enduring witnesses that the grace of God reaches beyond every boundary we are tempted to draw. The church is always in danger of behaving as though grace were the property of insiders, doled out grudgingly to those who first conform to our expectations. Mark 7 dismantles that instinct, showing Jesus carrying mercy across the border to those once dismissed as outsiders.",
          "We are called to see in these scenes a pattern for our own welcome. The crumbs that fall from the table of God prove to be a feast for those who come in humble faith. A community shaped by this chapter will be eager to cross social, ethnic, and cultural lines with the good news, expecting to find faith in surprising places and refusing to let inherited prejudice limit the reach of the kingdom.",
        ],
      },
      {
        heading: "Pray Ephphatha Over a Closed World",
        accent: ROSE,
        paragraphs: [
          "The word Ephphatha, Be opened, can become a prayer for our own lives and for the world around us. We live with ears that are often closed to the voice of God and tongues that are slow to speak his praise, and we live among people closed in on themselves by fear, sorrow, and unbelief. The same Lord who opened the ears of the deaf man is able to open what is shut in us and in our neighbors.",
          "To live Mark 7 is to trust that Jesus still does all things well. He is the one who saw the world's brokenness, sighed over it, and spoke a word of opening that no power could resist. We bring our own closedness and the closedness of those we love to him, asking him to open ears, loosen tongues, soften hearts, and widen the circle of his mercy until the whole earth resounds with the testimony that he has done all things well.",
        ],
      },
    ],
  },
];

const videoItems = [
  { videoId: "GOlljDl63L9", title: "Mark 7 Overview - Tradition, the Heart, and Faith Beyond Israel" },
  { videoId: "Hk8tQ2wRb4M", title: "What Really Defiles - Jesus Declares All Foods Clean" },
  { videoId: "pZ1nXcV7Ld0", title: "The Syrophoenician Woman and Faith Beyond Israel" },
  { videoId: "qE3rTyU8sWn", title: "Ephphatha - Be Opened: Healing in the Decapolis" },
];

export default function Mark7GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const current = content.find((c) => c.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Mark 7: Tradition, the Heart, and Faith Beyond Israel
          </h1>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}
            dangerouslySetInnerHTML={{
              __html:
                "Pharisees challenge the unwashed hands of the disciples, Jesus exposes how tradition can void the command of God, he declares all foods clean and locates defilement in the heart, and grace crosses the border to a Greek woman and a deaf man in the Decapolis &mdash; where he is found to do all things well.",
            }}
          />
        </header>

        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 5, background: BG, display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, padding: "0.75rem 0 1.25rem" }}>
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

        {current && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }} dangerouslySetInnerHTML={{ __html: current.title }} />
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: current.reference }} />
            <p style={{ color: TEXT, fontSize: "1.08rem", lineHeight: 1.85, margin: "0 0 2.5rem" }} dangerouslySetInnerHTML={{ __html: current.intro }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {current.blocks.map((b, bi) => (
                <article key={bi} style={{ borderLeft: `3px solid ${b.accent || ACCENT}`, paddingLeft: "1.25rem" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 4px", color: TEXT }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                  {b.reference && (
                    <div style={{ color: b.accent || ACCENT, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: b.reference }} />
                  )}
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                    {b.paragraphs.map((para, pi) => (
                      <p key={pi} style={{ color: MUTED, fontSize: "1.04rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.15rem" }}>Video Teaching</h3>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 1.5rem" }}>
            Deepen your study of Mark 7 through visual teaching covering the tradition of the elders, what truly defiles a person, the faith of the Syrophoenician woman, and the opening of deaf ears in the Decapolis.
          </p>
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "&ldquo;He Has Done All Things Well&rdquo;" }} />
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{
              __html:
                "Mark 7 moves from a quarrel over clean hands to a revelation about the human heart, and from the heart of Israel outward to the nations. Jesus sets aside the food laws, locates defilement within, and carries his mercy across every border to a Gentile mother and a deaf man who could not speak. The word Ephphatha &mdash; Be opened &mdash; still sounds over a world closed in upon itself, and the verdict of the astonished crowd remains the verdict of faith: he has done all things well.",
            }}
          />
        </div>
      </main>
    </div>
  );
}
