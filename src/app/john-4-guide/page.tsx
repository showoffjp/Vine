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
  "The Encounter",
  "Living Water",
  "Worship in Spirit",
  "The Harvest",
  "Healing the Official's Son",
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
    heading: "Overview of John 4",
    reference: "John 4:1&ndash;54",
    paragraphs: [
      "John 4 is one of the richest chapters in all of Scripture, presenting two carefully constructed narrative panels that together reveal the universal scope of Jesus&rsquo;s mission and the inexhaustible nature of the salvation he offers. The chapter opens with Jesus departing Judea and passing through Samaria &mdash; a journey that, far from being incidental, is presented as divinely necessary. &ldquo;He had to pass through Samaria&rdquo; (4:4), the text says, and the Greek word dei (&ldquo;must&rdquo; or &ldquo;had to&rdquo;) signals divine compulsion rather than mere geographic convenience.",
      "The encounter at Jacob&rsquo;s Well with a Samaritan woman is the longest recorded conversation Jesus has with any individual in the Gospels. It is a model of evangelism &mdash; patient, probing, deeply personal, and ultimately transformative. Jesus crosses three boundaries that his contemporaries would have considered insuperable: the ethnic boundary between Jew and Samaritan, the social boundary between rabbi and woman, and the moral boundary between the righteous and the outcast. In each case he crosses not to condone but to redeem.",
      "The theological center of the chapter is the discourse on living water and true worship. Jesus offers the woman something infinitely better than the water she draws daily from Jacob&rsquo;s Well &mdash; water that will become in her &ldquo;a spring of water welling up to eternal life&rdquo; (4:14). This living water is not a metaphor for good feelings or moral improvement; it is the life of the Spirit that Jesus alone can give, the foretaste and first installment of eternal life. And true worship, Jesus teaches, is not about geography &mdash; not Jerusalem or Gerizim &mdash; but about spirit and truth.",
      "The second panel of the chapter (4:43&ndash;54) brings Jesus back to Cana in Galilee, where he had performed his first sign by turning water into wine. Now a royal official whose son lies sick at the point of death comes to him in desperation. Jesus heals the boy at a distance with a word, and the official and his whole household believe. John carefully labels this &ldquo;the second sign that Jesus did&rdquo; (4:54), connecting it to the first at Cana and suggesting a developing pattern of signs that reveal who Jesus is. Together, the two panels of John 4 show Jesus as the giver of life &mdash; living water to the spiritually thirsty, healing life to the physically dying.",
      "Structurally, John 4 follows the pattern of the Nicodemus conversation in chapter 3 but with a striking set of contrasts. Nicodemus was a man; the Samaritan woman is a woman. Nicodemus was a ruler of the Jews, learned and respected; the Samaritan woman is an outsider, socially marginalized, and religiously suspect. Nicodemus came to Jesus at night; the woman meets him at the sixth hour in full daylight. And while Nicodemus fades from the story in bafflement, the woman goes and tells her whole city, becoming the first evangelist in John&rsquo;s Gospel and producing a harvest of believers from her testimony alone.",
    ],
  },
  {
    id: "The Encounter",
    heading: "Jesus and the Woman at Jacob's Well",
    reference: "John 4:1&ndash;26",
    paragraphs: [
      "The setting of the encounter is precise and laden with meaning. Jesus arrives at Sychar, near the plot of ground that Jacob gave to his son Joseph, and sits down by Jacob&rsquo;s Well at the sixth hour &mdash; noon, the heat of the day. A Samaritan woman comes to draw water alone, at an hour when no respectable woman would typically come, suggesting she is avoiding the social contact of the cooler early-morning water-drawing. Everything about her situation speaks of isolation and shame.",
      "Jesus&rsquo;s opening line is a request, not a declaration: &ldquo;Give me a drink&rdquo; (4:7). The disciples have gone into the city to buy food, leaving Jesus alone &mdash; genuinely thirsty in his humanity, reaching across every cultural barrier with a simple human need. The woman&rsquo;s response reveals the depth of the social chasm: &ldquo;How is it that you, a Jew, ask for a drink from me, a woman of Samaria?&rdquo; (4:9). She names both the ethnic and gender boundaries in a single question. John adds the explanatory note that &ldquo;Jews have no dealings with Samaritans,&rdquo; a centuries-old animosity rooted in the division of the kingdom and deepened by rival temples and conflicting traditions.",
      "Jesus responds by pivoting immediately from the physical to the spiritual: &ldquo;If you knew the gift of God, and who it is that is saying to you, &lsquo;Give me a drink,&rsquo; you would have asked him, and he would have given you living water&rdquo; (4:10). The phrase &ldquo;if you knew&rdquo; is a gentle but penetrating challenge to the woman&rsquo;s ignorance &mdash; not of her own situation, which she knows all too well, but of the identity of the one who stands before her. The living water he offers is the first of several layers of meaning that the conversation will gradually unfold.",
      "The woman initially understands &ldquo;living water&rdquo; in its ordinary sense &mdash; flowing, fresh water as opposed to the still water of a cistern. Her practical objection is reasonable: &ldquo;Sir, you have nothing to draw water with, and the well is deep. Where do you get that living water?&rdquo; (4:11). She also presses him on his relationship to Jacob, who gave the well. The question &ldquo;Are you greater than our father Jacob?&rdquo; (4:12) is asked with skepticism, but the Gospel reader knows the answer: yes, immeasurably so. Jesus is the one to whom all the patriarchs and all the wells and all the water-drawing of Israel&rsquo;s history have been pointing.",
      "The moment of exposure comes when Jesus asks her to call her husband. &ldquo;I have no husband,&rdquo; she replies, and Jesus confirms it: she has had five husbands and the man she now lives with is not her husband (4:17&ndash;18). The precision of Jesus&rsquo;s knowledge &mdash; which she immediately acknowledges &mdash; transforms the conversation. She names him a prophet. Some commentators have read the five husbands as an allegory of the five nations imported into Samaria by the Assyrians, each bringing their own gods (2 Kings 17:24). Whether or not that reading is intended, the point is clear: Jesus sees this woman fully and loves her fully, and that combination of omniscience and grace is what begins to open her heart.",
      "The conversation reaches its climax when the woman raises the question of worship &mdash; perhaps deflecting from the personal revelation, perhaps genuinely seeking the answer to a question her people had long debated. Jesus declares that neither Jerusalem nor Gerizim will be the defining locus of true worship, for the hour is coming &mdash; and now is &mdash; when true worshipers will worship the Father in spirit and truth (4:23). And then, to this outcast Samaritan woman alone among all the characters in John&rsquo;s Gospel up to this point, Jesus discloses his identity without parable or riddle: &ldquo;I who speak to you am he&rdquo; (4:26). The Messiah declares himself at Jacob&rsquo;s Well to the last person the world would have expected.",
    ],
  },
  {
    id: "Living Water",
    heading: "The Gift of Living Water",
    reference: "John 4:7&ndash;15",
    paragraphs: [
      "The image of water runs through the entire Gospel of John as a rich and layered symbol. Water appears at the very beginning, at the wedding in Cana where Jesus turns six stone jars of water into wine; it appears in the conversation with Nicodemus about being &ldquo;born of water and the Spirit&rdquo; (3:5); it flows in abundance in the Feast of Tabernacles discourse where Jesus cries out, &ldquo;If anyone thirsts, let him come to me and drink&rdquo; (7:37); and it gushes from the pierced side of Jesus on the cross (19:34). John 4 stands at the center of this water theology and provides its clearest verbal exposition.",
      "The promise Jesus makes to the Samaritan woman is breathtaking in its scope: &ldquo;Everyone who drinks of this water will be thirsty again, but whoever drinks of the water that I will give him will never be thirsty again. The water that I will give him will become in him a spring of water welling up to eternal life&rdquo; (4:13&ndash;14). Three elements of this promise deserve careful attention. First, the contrast: earthly water satisfies temporarily; the water Jesus gives satisfies permanently. Second, the internalization: the water does not merely come from an external source &mdash; it becomes a spring within the recipient. Third, the eschatological dimension: it wells up to eternal life, pointing beyond the present to the fullness of salvation.",
      "The phrase &ldquo;living water&rdquo; (Greek: hydor zon) had a specific meaning in the ancient world &mdash; running water, spring water, as opposed to stagnant water in a cistern. Jewish purification rituals required living water for certain washings; the prophets used it as an image of divine blessing (Zechariah 14:8; Jeremiah 2:13; 17:13). When Jeremiah condemned Israel&rsquo;s unfaithfulness, he described it as forsaking the Lord &ldquo;the fountain of living waters&rdquo; and hewing out &ldquo;broken cisterns that can hold no water&rdquo; (Jeremiah 2:13). Jesus, standing at a well, offers himself as the true fountain of living water that Israel&rsquo;s prophets had promised.",
      "The woman&rsquo;s request &mdash; &ldquo;Sir, give me this water, so that I will not be thirsty or have to come here to draw water&rdquo; (4:15) &mdash; is still operating on the literal level, but John&rsquo;s Gospel consistently works on two levels at once, and the literal request is not entirely wrong. The woman is tired &mdash; tired of the daily trudge to the well in the heat of the day, tired of the social isolation, tired perhaps of the life that has brought her to this place. Jesus is offering rest from all of it, though she does not yet fully understand what she is asking for.",
      "The theological significance of living water in John 4 is clarified later in the Gospel. In John 7:37&ndash;39, after Jesus&rsquo;s cry about rivers of living water flowing from within the believer, John adds the explicit editorial note: &ldquo;Now this he said about the Spirit, whom those who believed in him were to receive.&rdquo; The living water is the Holy Spirit &mdash; the personal presence of God dwelling within the believer, the foretaste of the age to come, the guarantee of resurrection life. What Jesus offers the Samaritan woman at the well is nothing less than the gift of the Spirit, the very life of God made available to the thirsty human soul.",
      "Jacob&rsquo;s Well stands in the chapter as a symbol of the best that human tradition and inheritance can provide &mdash; a deep, ancient well, given by a patriarch, watering generations. Jesus does not disparage it; he honors it by sitting beside it. But he offers something immeasurably deeper. Every well eventually runs dry, every cistern eventually cracks, every human source of life and meaning eventually fails. The spring that Jesus offers is the only one that never runs dry because it is fed not by rainfall or aquifer but by the inexhaustible life of the eternal Son of God.",
    ],
  },
  {
    id: "Worship in Spirit",
    heading: "Worshiping in Spirit and Truth",
    reference: "John 4:19&ndash;26",
    paragraphs: [
      "The question the Samaritan woman raises about worship &mdash; &ldquo;Our fathers worshiped on this mountain, but you say that in Jerusalem is the place where people ought to worship&rdquo; (4:20) &mdash; was not merely a deflection or a change of subject. It was the central theological dispute between Jews and Samaritans, one with roots going back to the days of Jeroboam and the divided kingdom. The Samaritans, who accepted only the Pentateuch, pointed to Mount Gerizim as the proper site of worship based on the blessings pronounced there in Deuteronomy. The Jews pointed to Jerusalem, where the Temple stood and where the Lord had placed his name. The woman is asking, in effect: which side is right?",
      "Jesus gives an answer that first validates the Jewish position &mdash; &ldquo;salvation is from the Jews&rdquo; (4:22) &mdash; while simultaneously transcending it. The Samaritans worship what they do not know; the Jews worship what they know, because the promises and the scriptures and the lineage of the Messiah have come through Israel. This is not ethnic superiority but historical specificity: God&rsquo;s salvation has a particular shape and history, and that history is rooted in Israel. But the point Jesus presses is that this very salvation, now arriving in his own person, is inaugurating a new mode of worship that renders the geographic question obsolete.",
      "&ldquo;The hour is coming, and is now here, when the true worshipers will worship the Father in spirit and truth, for the Father is seeking such people to worship him&rdquo; (4:23). The phrase &ldquo;is coming and is now here&rdquo; is characteristic of Johannine inaugurated eschatology &mdash; the age to come has already broken into the present in the person of Jesus. True worship in spirit and truth is not a future possibility but a present reality that the coming of Jesus makes possible. The very conversation at Jacob&rsquo;s Well is an instance of it: a Samaritan woman and a Jewish rabbi in genuine encounter with the living God.",
      "What does it mean to worship in &ldquo;spirit and truth&rdquo;? Interpreters have taken the phrase in different ways. Some read &ldquo;spirit&rdquo; as referring to the human spirit &mdash; inward, sincere worship as opposed to outward, ritual worship. Others read it as referring to the Holy Spirit &mdash; worship enabled and empowered by the Spirit of God who was given through Jesus. And &ldquo;truth&rdquo; in John&rsquo;s Gospel is closely associated with Jesus himself: &ldquo;I am the way, and the truth, and the life&rdquo; (14:6). To worship in truth is to worship in accordance with the reality that has been revealed in Jesus. Both dimensions &mdash; the Spirit and the revealed truth of the Son &mdash; are essential.",
      "The remarkable declaration that &ldquo;the Father is seeking such people to worship him&rdquo; (4:23) reverses the usual human religious dynamic. In most religious frameworks, the worshiper is the seeker, the one who must find and approach the deity. Here, the Father is the seeker, the one who goes out to find true worshipers. This is consistent with the entire movement of the fourth Gospel, in which the initiative lies entirely with God: &ldquo;For God so loved the world, that he gave his only Son&rdquo; (3:16). The Samaritan woman did not come to the well looking for God; God came to the well looking for her.",
      "Jesus&rsquo;s self-disclosure as the &ldquo;I am he&rdquo; &mdash; the Messiah &mdash; to the Samaritan woman is loaded with significance. The Greek ego eimi (&ldquo;I am&rdquo;) echoes the divine name revealed to Moses at the burning bush (Exodus 3:14) and is the same formula Jesus uses in the great &ldquo;I am&rdquo; sayings throughout John&rsquo;s Gospel. To this woman, alone among all characters in the first half of the Gospel, Jesus speaks plainly without parable or veil: the one who speaks to her is the long-awaited Messiah, and the age of true worship in spirit and truth has arrived.",
    ],
  },
  {
    id: "The Harvest",
    heading: "The Disciples Return and the Harvest Fields",
    reference: "John 4:27&ndash;42",
    paragraphs: [
      "The disciples return from the city to find Jesus talking with a Samaritan woman. John captures their reaction with restraint: &ldquo;They marveled that he was talking with a woman, but no one said, &lsquo;What do you seek?&rsquo; or, &lsquo;Why are you talking with her?&rsquo;&rdquo; (4:27). Their silence speaks volumes about the cultural transgression they perceive, and also about a growing reverence for Jesus that prevents them from questioning him directly. They hold their tongues, but their surprise at this boundary-crossing encounter is unmistakable.",
      "The woman, meanwhile, leaves her water jar at the well and returns to the city &mdash; a detail that both shows her haste and signals her transformation. She came to draw water and is leaving with something far more valuable, so valuable that the physical errand that brought her is temporarily forgotten. Her testimony to the townspeople is characteristically honest and open-ended: &ldquo;Come, see a man who told me all that I ever did. Can this be the Christ?&rdquo; (4:29). She does not make a definitive proclamation but poses an invitation to investigation, and that humble, wondering question proves more effective than any confident sermon might have been.",
      "While the woman is in the city, the disciples urge Jesus to eat &mdash; &ldquo;Rabbi, eat&rdquo; (4:31). Jesus&rsquo;s response opens the second great discourse of the chapter: &ldquo;I have food to eat that you do not know about&rdquo; (4:32). The disciples misunderstand, wondering if someone has brought him food, and Jesus clarifies: &ldquo;My food is to do the will of him who sent me and to accomplish his work&rdquo; (4:34). Just as the living water discourse pivoted from physical thirst to spiritual life, the food discourse pivots from physical hunger to the nourishment of obedience and mission. Jesus has just done the will of the Father by encountering the Samaritan woman, and that obedience itself has fed him.",
      "The harvest teaching that follows is one of the most vivid images in John&rsquo;s Gospel. Jesus tells his disciples to lift up their eyes and look at the fields &mdash; &ldquo;for they are white for harvest&rdquo; (4:35). The saying may have been a common proverb about patience (&ldquo;there are yet four months until harvest&rdquo;), but Jesus inverts it: the harvest is not coming &mdash; it is here now. Looking toward the city from which Samaritans are now streaming out to see him, Jesus is pointing to human lives ready to be gathered into the kingdom of God. The harvest language draws on the rich prophetic tradition of the final ingathering of the nations (Isaiah 27:12; Joel 3:13) and applies it to the present moment.",
      "Jesus then introduces the distinction between sowing and reaping that will characterize the whole mission of the church: &ldquo;One sows and another reaps&rdquo; (4:37). The disciples are being sent to reap a harvest in which they did not do the primary labor &mdash; the prophets sowed, Jesus himself sowed through this very conversation, and now the disciples will reap. The church always enters a harvest field prepared by labors that preceded it: the faithfulness of Israel, the ministry of the prophets, the work of Jesus, the witness of unknown servants like the Samaritan woman. The fruit of evangelism is rarely entirely the product of the one who reaps.",
      "The result is remarkable: many Samaritans from that city believe in Jesus because of the woman&rsquo;s testimony, and they come and ask him to stay with them. He stays two days, and many more believe &mdash; and now they say to the woman, &ldquo;It is no longer because of what you said that we believe, for we have heard for ourselves, and we know that this is indeed the Savior of the world&rdquo; (4:42). The title &ldquo;Savior of the world&rdquo; is one of the most universal declarations in John&rsquo;s Gospel, transcending every ethnic and religious boundary. From a despised Samaritan village, Jesus is confessed as the one who comes to save not just Jews, not just Samaritans, but the whole world.",
    ],
  },
  {
    id: "Healing the Official's Son",
    heading: "The Healing of the Royal Official's Son",
    reference: "John 4:43&ndash;54",
    paragraphs: [
      "After two days in Samaria, Jesus continues north to Galilee. John notes with apparent irony that &ldquo;Jesus himself had testified that a prophet has no honor in his own hometown&rdquo; (4:44), yet the Galileans welcome him &mdash; not, however, out of spiritual faith, but because they had seen all that he did in Jerusalem at the Passover feast (4:45). This is a different quality of welcome than what the Samaritans offered. The Galileans are drawn by signs and wonders; the Samaritans believed because of his word (4:41). John is quietly establishing a contrast between two kinds of response to Jesus that will recur throughout the Gospel.",
      "Jesus returns to Cana in Galilee, the scene of his first sign. There a royal official (literally, a &ldquo;basilikos,&rdquo; a servant of the king, likely a Herodian official) comes to him from Capernaum, where his son is sick and near death. The word &ldquo;dying&rdquo; in the Greek carries the sense of being at the very point of death, and the official&rsquo;s urgency is palpable: he has traveled approximately twenty miles to find Jesus and is begging him to come and heal his son before the child dies.",
      "Jesus&rsquo;s initial response seems almost harsh in its directness: &ldquo;Unless you see signs and wonders you will not believe&rdquo; (4:48). The &ldquo;you&rdquo; here is plural, addressed not just to the official but to the broader Galilean audience. It is a gentle rebuke of a faith that is conditioned on spectacle. But the official does not argue or retreat &mdash; he simply doubles down on his one desperate plea: &ldquo;Sir, come down before my child dies&rdquo; (4:49). Whatever his faith was before this moment, in this instant it is stripped of everything except raw need and trust. And to that stripped-down, desperate faith, Jesus responds.",
      "&ldquo;Go; your son will live&rdquo; (4:50). Four words in Greek, and the healing is done. Jesus does not travel to Capernaum, does not touch the boy, does not pray over him. He heals at a distance, across twenty miles, with a word. &ldquo;The man believed the word that Jesus spoke to him and went on his way&rdquo; (4:50). This is the faith that Jesus has been calling for: not a faith based on seeing signs, but a faith that takes his word as sufficient ground for trust even before the evidence is visible. The official turns and walks home on the basis of a promise.",
      "The confirmation comes in stages. As the official is going down from Cana to Capernaum, his servants meet him with the news that his son is alive. He asks when the boy began to recover, and they tell him: yesterday at the seventh hour &mdash; the same hour that Jesus said &ldquo;your son will live.&rdquo; The coincidence is not coincidence; it is the signature of the one who spoke the word. &ldquo;And he himself believed, and all his household&rdquo; (4:53). The healing becomes the occasion for household salvation, a pattern that will recur in the Acts of the Apostles as whole households come to faith through a single encounter with Jesus.",
      "John labels this &ldquo;the second sign that Jesus did when he had come from Judea to Galilee&rdquo; (4:54). The careful enumeration of signs in the early chapters of John is deliberate: signs are not merely miracles but revelatory acts that point beyond themselves to the identity and mission of Jesus. The first sign &mdash; water into wine &mdash; revealed his glory in the domain of creation. The second sign &mdash; healing across distance by a word &mdash; reveals his sovereign authority over sickness and death. Together they introduce the reader to the one who has come that we might have life, and have it abundantly (10:10).",
    ],
  },
];

const videoItems = [
  { videoId: "TKLHr6BRTQM", title: "John 4 - The Woman at the Well: Living Water Explained" },
  { videoId: "Vx9bQpHNzK4", title: "BibleProject - Overview of the Gospel of John" },
  { videoId: "pLmJQrH7eRs", title: "John 4 Verse by Verse - Worship in Spirit and Truth" },
  { videoId: "Wq8cFnYdL2A", title: "Jesus and the Samaritan Woman - Deep Bible Study" },
];

export default function John4GuidePage() {
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
            John 4 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Jesus passes through Samaria and meets a woman at Jacob&rsquo;s Well &mdash; offering living water that wells up to eternal life, revealing himself as the Messiah, teaching the nature of true worship in spirit and truth, and sending a whole Samaritan village to faith before healing a royal official&rsquo;s son with a single word.
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

        {currentSection && activeTab !== "Videos" && (
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
              Deepen your study of John 4 through these video teachings on the Samaritan woman at the well, the gift of living water, worship in spirit and truth, and the healing of the royal official&rsquo;s son.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Whoever Drinks of This Water Will Never Be Thirsty Again</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            John 4 reveals a Jesus who crosses every boundary &mdash; ethnic, social, religious, and moral &mdash; to bring living water to the thirsty soul. The Samaritan woman who came to draw water left as an evangelist. The royal official who came in despair left with a word of promise and found it kept. The Father is seeking true worshipers, and the one who seeks them offers water that will never run dry.
          </p>
        </div>
      </main>
    </div>
  );
}
