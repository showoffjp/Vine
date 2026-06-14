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
  "The King and His Lineage",
  "The Sermon on the Mount",
  "The Kingdom of Heaven",
  "The Parables of the King",
  "The Passion and Resurrection",
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
    id: "The King and His Lineage",
    heading: "The King and His Lineage",
    reference: "Matthew 1&ndash;4",
    paragraphs: [
      "The Gospel of Matthew opens not with a manger or a miracle but with a register of names: &ldquo;The book of the genealogy of Jesus Christ, the son of David, the son of Abraham&rdquo; (1:1). For Matthew, writing above all for a Jewish audience, this opening line is a thesis statement. Jesus is the long-awaited Messiah in whom two great promises converge &mdash; the promise to Abraham that in his offspring all the nations of the earth would be blessed, and the promise to David that one of his sons would reign on an everlasting throne. The whole story of Israel, from patriarchs to exile to expectation, has been moving toward this child.",
      "The genealogy itself is artfully arranged into three groups of fourteen generations: from Abraham to David, from David to the Babylonian exile, and from the exile to the Christ. Woven into this royal line are unexpected names &mdash; Tamar, Rahab, Ruth, and the wife of Uriah &mdash; women whose stories carry scandal, foreignness, and grace. From the very first page, Matthew signals that this King has come not for the respectable alone but for outsiders and sinners drawn into the purposes of God.",
      "The birth of Jesus is then recounted with a quiet focus on Joseph. Mary is found to be with child by the Holy Spirit before they come together, and Joseph, a just man, resolves to divorce her quietly. But an angel of the Lord appears to him in a dream: &ldquo;You shall call his name Jesus, for he will save his people from their sins&rdquo; (1:21). Matthew adds that all this took place to fulfill the prophecy of Isaiah: &ldquo;Behold, the virgin shall conceive and bear a son, and they shall call his name Immanuel&rdquo; &mdash; which means, God with us (1:23).",
      "In chapter two, wise men, or Magi, come from the east, having seen his star, asking, &ldquo;Where is he who has been born king of the Jews?&rdquo; (2:2). Their question troubles King Herod, who secretly plots the child&rsquo;s death. The Magi find the child, fall down and worship him, and offer gold, frankincense, and myrrh &mdash; gifts fit for a king. Warned in a dream, they return home by another way, and Joseph is told to flee with the child and his mother to Egypt, where they remain until Herod&rsquo;s death.",
      "Herod&rsquo;s rage spills out in the slaughter of the infants of Bethlehem, a horror Matthew sees foreshadowed in Jeremiah&rsquo;s words of Rachel weeping for her children. When Herod dies, the family returns and settles in Nazareth of Galilee. At every turn Matthew pauses to note that these events fulfill the Scriptures &mdash; out of Egypt God calls his Son, the child shall be called a Nazarene &mdash; binding the life of Jesus tightly to the ancient promises of God.",
      "The adult ministry is introduced by John the Baptist, who appears in the wilderness preaching, &ldquo;Repent, for the kingdom of heaven is at hand&rdquo; (3:2). When Jesus comes to be baptized, John protests that he is unworthy, but Jesus insists it is fitting &ldquo;to fulfill all righteousness&rdquo; (3:15). As he rises from the water, the heavens open, the Spirit descends like a dove, and a voice declares, &ldquo;This is my beloved Son, with whom I am well pleased&rdquo; (3:17). Immediately the Spirit leads him into the wilderness, where for forty days he is tempted by the devil and answers each enticement with the word of God, &ldquo;It is written.&rdquo; The King has been announced, anointed, and tested; now his kingdom may be proclaimed.",
    ],
  },
  {
    id: "The Sermon on the Mount",
    heading: "The Sermon on the Mount",
    reference: "Matthew 5&ndash;7",
    paragraphs: [
      "When the crowds gather, Jesus goes up on a mountain, sits down, and begins to teach &mdash; a deliberate echo of Moses at Sinai, though now the law comes not on tablets of stone but from the lips of the King himself. The Sermon on the Mount (chapters 5 through 7) is the first and greatest of the five major discourses around which Matthew structures his Gospel, and it stands as the constitution of the kingdom of heaven.",
      "He begins with the Beatitudes, a series of startling blessings that overturn the world&rsquo;s assumptions about who is favored. &ldquo;Blessed are the poor in spirit, for theirs is the kingdom of heaven&rdquo; (5:3). Blessed are those who mourn, the meek, those who hunger and thirst for righteousness, the merciful, the pure in heart, the peacemakers, and those persecuted for righteousness&rsquo; sake. The kingdom belongs not to the strong and self-sufficient but to those who know their need of God.",
      "His disciples are then given two great images of their calling in the world: &ldquo;You are the salt of the earth&hellip; You are the light of the world&rdquo; (5:13&ndash;14). A city set on a hill cannot be hidden, and a lamp is not put under a basket but on a stand. &ldquo;Let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven&rdquo; (5:16). The kingdom is not a private piety but a visible witness.",
      "Jesus then turns to the law, insisting he has come not to abolish it but to fulfill it (5:17). In a series of contrasts &mdash; &ldquo;You have heard that it was said&hellip; but I say to you&rdquo; &mdash; he drives the commandments to their root in the heart: anger is the seed of murder, lust the seed of adultery. He calls for radical honesty, the renunciation of revenge, and, most astonishing of all, love for enemies: &ldquo;Love your enemies and pray for those who persecute you, so that you may be sons of your Father who is in heaven&rdquo; (5:44&ndash;45).",
      "On true piety, Jesus warns against practicing righteousness to be seen by others. Giving, prayer, and fasting are to be done in secret, before the Father who sees in secret. In the heart of this teaching he gives the model prayer: &ldquo;Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven&rdquo; (6:9&ndash;10). The Lord&rsquo;s Prayer gathers up the longings of the whole Sermon &mdash; for God&rsquo;s honor, his reign, his provision, his forgiveness, and his deliverance.",
      "He calls his followers to lay up treasures in heaven rather than on earth, for where your treasure is, there your heart will be also (6:21). No one can serve two masters, God and money. Therefore, he says, do not be anxious about your life &mdash; look at the birds of the air and the lilies of the field, which your heavenly Father feeds and clothes. &ldquo;Seek first the kingdom of God and his righteousness, and all these things will be added to you&rdquo; (6:33).",
      "The Sermon closes with searching words. Enter by the narrow gate, for the way is hard that leads to life and few find it (7:13&ndash;14). Beware false prophets, known by their fruits. Not everyone who says &ldquo;Lord, Lord&rdquo; will enter the kingdom, but the one who does the will of the Father. And the one who hears these words and does them is like a wise man who built his house on the rock, which stood firm when the storms came. When Jesus finished, the crowds were astonished, &ldquo;for he was teaching them as one who had authority, and not as their scribes&rdquo; (7:29).",
    ],
  },
  {
    id: "The Kingdom of Heaven",
    heading: "The Kingdom of Heaven",
    reference: "Matthew 8&ndash;11",
    paragraphs: [
      "Having proclaimed the kingdom in word, Jesus now demonstrates its power in deed. Matthew gathers a remarkable sequence of miracles that reveal the authority of the King over every realm. He cleanses a leper with a touch, declaring, &ldquo;I will; be clean&rdquo; (8:3). He heals the centurion&rsquo;s servant from a distance, marveling at a faith greater than any he has found in Israel, and so foreshadowing the gathering of many from east and west into the kingdom.",
      "His authority extends over the natural world as well. When a great storm rises on the sea and the disciples cry out in terror, Jesus rebukes the wind and the waves, and there is a great calm. The men marvel, asking, &ldquo;What sort of man is this, that even winds and sea obey him?&rdquo; (8:27). He casts out demons, sending them into a herd of pigs; he forgives and heals a paralytic, claiming for himself the divine prerogative to forgive sins; and at a word he calls Matthew the tax collector from his booth.",
      "When the religious leaders object that he eats with tax collectors and sinners, Jesus answers, &ldquo;Those who are well have no need of a physician, but those who are sick&hellip; I came not to call the righteous, but sinners&rdquo; (9:12&ndash;13). He raises a ruler&rsquo;s dead daughter, heals a woman who touches the fringe of his garment, opens the eyes of the blind, and looses the tongue of the mute. Seeing the crowds harassed and helpless, like sheep without a shepherd, he is moved with compassion.",
      "That compassion leads to mission. In chapter ten Jesus calls his twelve apostles and sends them out with his own authority to proclaim that the kingdom of heaven is at hand, to heal the sick, and to cast out demons. This second great discourse is a charge to his messengers: they will face rejection, persecution, and division, yet they are not to fear, for even the hairs of their head are numbered. &ldquo;Whoever loses his life for my sake will find it&rdquo; (10:39).",
      "In chapter eleven, John the Baptist, now imprisoned, sends from prison to ask whether Jesus is truly the one who is to come. Jesus answers by pointing to the signs of the kingdom: the blind receive sight, the lame walk, lepers are cleansed, the deaf hear, the dead are raised, and the poor have good news preached to them. The works themselves bear witness that the promised age has dawned.",
      "Yet the response of the cities where his mighty works were done is unbelief, and Jesus pronounces woes upon them. The kingdom is hidden from the wise and revealed to little children, for such is the Father&rsquo;s gracious will. The chapter ends with one of the tenderest invitations in all of Scripture: &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart&hellip; For my yoke is easy, and my burden is light&rdquo; (11:28&ndash;30).",
    ],
  },
  {
    id: "The Parables of the King",
    heading: "The Parables of the King",
    reference: "Matthew 13; 18; 24&ndash;25",
    paragraphs: [
      "In chapter thirteen Jesus teaches the crowds in parables &mdash; earthly stories with heavenly meanings &mdash; that both reveal the kingdom to those with ears to hear and conceal it from the hardened. The third great discourse of the Gospel is a collection of these kingdom parables, each turning over a different facet of how the reign of God comes into the world.",
      "He begins with the Parable of the Sower, who scatters seed on four kinds of ground: the path, the rocky soil, the thorns, and the good soil. The seed is the word of the kingdom, and its fate depends on the heart that receives it. Only the good soil bears fruit, some a hundredfold, some sixty, some thirty. The word goes out freely, but it takes root only where it is truly received.",
      "Then comes the Parable of the Wheat and the Tares: an enemy sows weeds among the wheat, and the master forbids pulling them up lest the wheat be uprooted too. Both are allowed to grow together until the harvest, when they will at last be separated. So it is with the kingdom in this age &mdash; good and evil grow side by side until God&rsquo;s appointed day of reckoning, a sober warning against trying to make the church perfectly pure before its time.",
      "The kingdom is also like a mustard seed, the smallest of seeds, which grows into a tree where the birds nest &mdash; small and hidden in its beginnings, yet destined to fill the earth. It is like leaven that a woman hides in flour until it leavens the whole lump, a quiet and pervasive power. These two short parables answer the disappointment of those who expected the kingdom to arrive in obvious glory: it comes first in smallness and secrecy.",
      "Two more parables speak of its surpassing worth. The kingdom is like treasure hidden in a field, which a man finds and, in his joy, sells all that he has to buy that field. It is like a merchant in search of fine pearls who, on finding one pearl of great value, sells everything to obtain it. The kingdom is worth more than all a person possesses, and the one who truly sees it counts every other thing as loss for the sake of gaining it.",
      "Matthew gathers further teaching on kingdom life in chapter eighteen &mdash; on humility like a child&rsquo;s, on the seriousness of causing the little ones to stumble, on the shepherd who leaves the ninety-nine to seek the one lost sheep, and on forgiving a brother not seven times but seventy times seven, illustrated by the unforgiving servant who was forgiven much yet would not forgive a little. The kingdom community is to be marked above all by mercy.",
      "Finally, on the Mount of Olives, Jesus delivers his last great discourse, the Olivet Discourse (chapters 24 and 25), foretelling the destruction of the Temple, the trials of the last days, and his own glorious return. He urges constant readiness through the parables of the wise and foolish virgins, the talents entrusted to servants, and the final separation of the sheep from the goats, when the King will say to the righteous, &ldquo;As you did it to one of the least of these my brothers, you did it to me&rdquo; (25:40).",
    ],
  },
  {
    id: "The Passion and Resurrection",
    heading: "The Passion and Resurrection",
    reference: "Matthew 26&ndash;28",
    paragraphs: [
      "As the Gospel moves toward its climax, the shadow of the cross falls across every page. The chief priests and elders plot to arrest Jesus by stealth and kill him, and Judas Iscariot agrees to betray him for thirty pieces of silver. On the night of the Passover, Jesus gathers with his disciples in an upper room to share the meal that will redefine the feast forever &mdash; the Last Supper.",
      "Taking bread, he blesses and breaks it: &ldquo;Take, eat; this is my body.&rdquo; Taking the cup, he gives thanks: &ldquo;Drink of it, all of you, for this is my blood of the covenant, which is poured out for many for the forgiveness of sins&rdquo; (26:26&ndash;28). In these words the whole meaning of his coming is unveiled &mdash; he is the Lamb whose death seals a new covenant and brings the forgiveness that the King had promised to give to his people.",
      "From the upper room they go out to the Garden of Gethsemane, where Jesus is overwhelmed with sorrow to the point of death. He falls on his face and prays, &ldquo;My Father, if it be possible, let this cup pass from me; nevertheless, not as I will, but as you will&rdquo; (26:39). Three times he prays as the disciples sleep, surrendering himself fully to the Father&rsquo;s will. Then Judas arrives with a crowd, betrays him with a kiss, and Jesus is seized while his disciples forsake him and flee.",
      "He is brought before the high priest and the council, where false witnesses are sought and where he at last confesses that he is the Christ, the Son of God. They condemn him for blasphemy. Peter, in the courtyard, denies three times that he knows him, and at the cock&rsquo;s crow goes out and weeps bitterly. In the morning Jesus is handed over to Pilate, the Roman governor, who, though finding no guilt in him, yields to the crowd&rsquo;s demand and delivers him to be crucified.",
      "Mocked, scourged, and crowned with thorns, Jesus is led to Golgotha and nailed to the cross between two robbers, with the charge over his head: &ldquo;This is Jesus, the King of the Jews&rdquo; (27:37). Darkness covers the land, and he cries out, &ldquo;My God, my God, why have you forsaken me?&rdquo; (27:46). At last he yields up his spirit. The curtain of the Temple is torn in two from top to bottom, the earth shakes, and the centurion confesses, &ldquo;Truly this was the Son of God!&rdquo; (27:54). He is buried in the new tomb of Joseph of Arimathea, and a guard is set.",
      "But death cannot hold the King. On the first day of the week, there is a great earthquake, and an angel of the Lord rolls back the stone and sits upon it. To the women who come to the tomb he announces, &ldquo;He is not here, for he has risen, as he said&rdquo; (28:6). The risen Jesus meets them on the way, and they take hold of his feet and worship him. Death and the grave have been conquered, and the promise woven through the whole Gospel is fulfilled.",
      "The Gospel ends on a mountain in Galilee, where the risen Lord meets his eleven disciples and gives the charge that has echoed through every generation since &mdash; the Great Commission: &ldquo;All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age&rdquo; (28:18&ndash;20). The King who is Immanuel, God with us, remains with his people still.",
    ],
  },
];

const videoItems = [
  { videoId: "3Dv4-n6OYGI", title: "BibleProject - Overview - Gospel of Matthew 1-13" },
  { videoId: "GGCF3OPWN14", title: "BibleProject - Overview - Gospel of Matthew 14-28" },
  { videoId: "Asab2Vw6_ho", title: "The Sermon on the Mount - Matthew 5-7 Explained" },
  { videoId: "Vh_1Jt7hWlc", title: "The Passion and Resurrection of the King" },
];

export default function ChristianBookOfMatthewGuidePage() {
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
            The Gospel of Matthew
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Jesus the Messiah, Son of David and Son of Abraham &mdash; the promised King whose lineage fulfills the Scriptures, whose Sermon on the Mount unveils the kingdom of heaven, whose parables and miracles reveal his authority, and whose death and resurrection send his people to make disciples of all nations.
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
              Deepen your study of Matthew through visual teaching on the lineage and birth of the King, the Sermon on the Mount, the parables of the kingdom of heaven, and the passion and resurrection of Jesus the Messiah.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Make Disciples of All Nations</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Matthew presents Jesus as the promised King in whom the hopes of Israel are fulfilled &mdash; the Son of David, the Son of Abraham, Immanuel, God with us. From the genealogy to the empty tomb, the Gospel calls every reader to bow before this King and to take up his commission: &ldquo;Go therefore and make disciples of all nations&hellip; and behold, I am with you always, to the end of the age.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
