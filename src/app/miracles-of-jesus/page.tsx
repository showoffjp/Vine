"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SERIF = "var(--font-cormorant, Georgia, serif)";

type Tab = "overview" | "miracles" | "reveal" | "videos";
type MType = "All" | "Healing" | "Nature" | "Exorcism" | "Raising the Dead";

const TYPES: MType[] = ["All", "Healing", "Nature", "Exorcism", "Raising the Dead"];

const TYPE_COLOR: Record<string, string> = {
  Healing: "#3a7d56",
  Nature: "#3B82F6",
  Exorcism: "#EF4444",
  "Raising the Dead": "#F59E0B",
};

type Miracle = {
  id: string;
  name: string;
  reference: string;
  type: Exclude<MType, "All">;
  happened: string;
  significance: string;
};

const MIRACLES: Miracle[] = [
  {
    id: "bartimaeus",
    name: "Healing Blind Bartimaeus",
    reference: "Mark 10:46-52; cf. Luke 18:35-43",
    type: "Healing",
    happened:
      "As Jesus left Jericho, a blind beggar named Bartimaeus cried out, 'Jesus, Son of David, have mercy on me!' The crowd told him to be quiet, but he shouted all the more. Jesus called him, asked what he wanted, and at the words 'Let me recover my sight,' restored his vision instantly. Bartimaeus immediately followed Jesus on the way.",
    significance:
      "Bartimaeus, though physically blind, sees who Jesus is — addressing Him by the messianic title 'Son of David' — while the sighted crowd is spiritually blind. The miracle reveals Jesus as the promised Messiah who opens blind eyes (Isaiah 35:5), and models the persistent, believing faith that receives sight and then follows.",
  },
  {
    id: "leper",
    name: "Cleansing the Leper",
    reference: "Matthew 8:1-4; Mark 1:40-45; Luke 5:12-16",
    type: "Healing",
    happened:
      "A man full of leprosy fell before Jesus saying, 'Lord, if you will, you can make me clean.' Moved with compassion, Jesus did the unthinkable — He reached out and touched the untouchable man — and said, 'I will; be clean.' Immediately the leprosy left him, and Jesus sent him to show himself to the priest.",
    significance:
      "Under the Law, touching a leper made one unclean; instead, Jesus' purity overcomes the man's defilement. The miracle reveals a Savior who is not contaminated by our corruption but cleanses it, willing to touch what others shun. It shows His power over disease and His authority to declare the unclean clean.",
  },
  {
    id: "paralytic",
    name: "Healing the Paralytic Lowered Through the Roof",
    reference: "Mark 2:1-12; Matthew 9:1-8; Luke 5:17-26",
    type: "Healing",
    happened:
      "Four friends, unable to reach Jesus through the crowd, dug through the roof and lowered a paralyzed man on his mat. Seeing their faith, Jesus said, 'Son, your sins are forgiven.' When scribes objected that only God can forgive sins, Jesus healed the man as proof of His authority, telling him to rise, take up his bed, and walk — which he did.",
    significance:
      "Jesus deliberately ties the physical healing to the forgiveness of sins, claiming a divine prerogative. The visible miracle authenticates the invisible reality: the Son of Man has authority on earth to forgive sins. It reveals that humanity's deepest paralysis is sin, and Jesus has come to heal it.",
  },
  {
    id: "bleeding",
    name: "Healing the Woman with the Issue of Blood",
    reference: "Mark 5:25-34; Matthew 9:20-22; Luke 8:43-48",
    type: "Healing",
    happened:
      "A woman who had suffered hemorrhages for twelve years, spending all she had on physicians, touched the fringe of Jesus' garment in the crowd, believing it would heal her. Instantly the bleeding stopped. Jesus, perceiving power had gone out from Him, sought her out; trembling, she confessed, and He said, 'Daughter, your faith has made you well; go in peace.'",
    significance:
      "Her condition made her ceremonially unclean and isolated, yet her touch does not defile Jesus — His power heals her. Jesus refuses to let her slip away anonymously; He restores her not just physically but relationally, calling her 'Daughter.' The miracle reveals that genuine faith, even trembling and hidden, draws healing virtue from Christ.",
  },
  {
    id: "centurion",
    name: "Healing the Centurion's Servant",
    reference: "Matthew 8:5-13; Luke 7:1-10",
    type: "Healing",
    happened:
      "A Roman centurion asked Jesus to heal his paralyzed servant, but said he was not worthy to have Jesus enter his house — 'only say the word, and my servant will be healed.' He understood authority from his military life. Jesus marveled, declared He had not found such faith in Israel, and the servant was healed in that same hour.",
    significance:
      "A Gentile soldier grasps Jesus' authority more clearly than Israel: a mere word from Christ commands sickness as a centurion commands soldiers. The miracle reveals Jesus' authority is not bound by distance or presence, and foreshadows that many will come from east and west into the kingdom while some heirs are excluded — faith, not lineage, is decisive.",
  },
  {
    id: "blind-man",
    name: "Healing the Man Born Blind",
    reference: "John 9:1-41",
    type: "Healing",
    happened:
      "Jesus encountered a man blind from birth. Rejecting the assumption that sin caused it, He said it was so the works of God might be displayed. He made mud with saliva, anointed the man's eyes, and told him to wash in the pool of Siloam. The man came back seeing, and his healing provoked a long confrontation with the Pharisees.",
    significance:
      "This sign illustrates Jesus' declaration, 'I am the light of the world.' The healed man's growing confession contrasts with the Pharisees' deepening blindness, dramatizing that the truly blind are those who claim to see yet reject the light. It reveals Jesus as the giver of sight, both physical and spiritual.",
  },
  {
    id: "ten-lepers",
    name: "Cleansing the Ten Lepers",
    reference: "Luke 17:11-19",
    type: "Healing",
    happened:
      "Ten lepers called out to Jesus for mercy. He told them to go show themselves to the priests, and as they went they were cleansed. Only one — a Samaritan — turned back, praising God and falling at Jesus' feet to give thanks. Jesus asked where the other nine were, and told the grateful man his faith had made him well.",
    significance:
      "All ten were healed, but only one returned in worship — and he the despised foreigner. The miracle reveals Christ's mercy poured out widely, while exposing the rarity of true gratitude. The Samaritan's return models the proper response to grace: faith that culminates in worship and thanksgiving.",
  },
  {
    id: "storm",
    name: "Calming the Storm",
    reference: "Mark 4:35-41; Matthew 8:23-27; Luke 8:22-25",
    type: "Nature",
    happened:
      "Crossing the Sea of Galilee, the disciples were caught in a furious squall while Jesus slept in the stern. Terrified, they woke Him: 'Teacher, do you not care that we are perishing?' He rebuked the wind and said to the sea, 'Peace! Be still.' The wind ceased and there was a great calm. He asked, 'Why are you so afraid? Have you still no faith?'",
    significance:
      "In the Old Testament, only God rules the raging sea (Psalm 107:29). By commanding wind and wave with a word, Jesus exercises the Creator's authority over chaos, leaving the disciples asking, 'Who then is this?' The miracle reveals His divine identity and invites faith that He is present and sovereign even in the storm.",
  },
  {
    id: "walking-water",
    name: "Walking on Water",
    reference: "Matthew 14:22-33; Mark 6:45-52; John 6:16-21",
    type: "Nature",
    happened:
      "After feeding the five thousand, Jesus sent the disciples ahead by boat and went to pray. In the fourth watch of the night, He came to them walking on the sea. Terrified, they thought He was a ghost, but He said, 'Take heart; it is I. Do not be afraid.' Peter walked toward Him on the water until fear made him sink, and Jesus caught him.",
    significance:
      "Jesus' words 'It is I' echo the divine name 'I AM,' and treading upon the sea is a Creator's act. The miracle reveals His mastery over nature and His nearness in distress. Peter's walking and sinking dramatizes faith: as long as eyes are fixed on Christ, the impossible is possible; doubt sinks. The disciples worship Him as the Son of God.",
  },
  {
    id: "feeding-5000",
    name: "Feeding the Five Thousand",
    reference: "Matthew 14:13-21; Mark 6:30-44; Luke 9:10-17; John 6:1-14",
    type: "Nature",
    happened:
      "Faced with a vast hungry crowd in a remote place, Jesus took five loaves and two fish from a boy, gave thanks, broke them, and had the disciples distribute them. Everyone ate and was satisfied, and twelve baskets of leftovers were gathered. About five thousand men, besides women and children, were fed.",
    significance:
      "The only miracle in all four Gospels, it reveals Jesus as the new Moses providing bread in the wilderness, and as the true Bread of Life (John 6) who satisfies the deepest hunger. The twelve baskets signify abundance for Israel. Jesus is the compassionate Shepherd who feeds His sheep when human resources fail.",
  },
  {
    id: "feeding-4000",
    name: "Feeding the Four Thousand",
    reference: "Matthew 15:32-39; Mark 8:1-10",
    type: "Nature",
    happened:
      "A crowd of four thousand had been with Jesus three days with nothing to eat. Unwilling to send them away hungry, He took seven loaves and a few small fish, gave thanks, and distributed them. All ate and were filled, and seven baskets of broken pieces remained.",
    significance:
      "Occurring in largely Gentile territory (the Decapolis), this second feeding signals that the bread of life is for the nations, not Israel alone. The seven baskets may symbolize fullness for the Gentile world. It reveals the breadth of Jesus' compassion and the abundance of His provision beyond the boundaries of the covenant people.",
  },
  {
    id: "water-wine",
    name: "Turning Water into Wine",
    reference: "John 2:1-11",
    type: "Nature",
    happened:
      "At a wedding in Cana, the wine ran out. At His mother's prompting, Jesus had servants fill six stone water jars used for purification, then drew out wine of such quality the master of the feast marveled that the best had been saved for last. This was the first of His signs, and it manifested His glory.",
    significance:
      "The first sign reveals Jesus' glory and inaugurates the joy of the messianic age — the abundant new wine of the kingdom replacing the old order of ceremonial water. Set at a wedding, it hints at the marriage feast to come. It shows Jesus as Lord of creation who transforms and abundantly blesses, and grounds the disciples' faith.",
  },
  {
    id: "catch-fish",
    name: "The Miraculous Catch of Fish",
    reference: "Luke 5:1-11; cf. John 21:1-14",
    type: "Nature",
    happened:
      "After a fruitless night of fishing, Peter obeyed Jesus' word to let down the nets again. The catch was so great the nets began to break and two boats began to sink. Overwhelmed, Peter fell at Jesus' knees: 'Depart from me, for I am a sinful man, O Lord.' Jesus answered, 'Do not be afraid; from now on you will catch men.'",
    significance:
      "The miracle reveals Jesus' lordship over creation and over Peter's vocation, turning fishermen into fishers of men. Peter's response — awe mingled with a sense of his own sinfulness — is the right response to encountering divine holiness. A risen-Lord version (John 21) restores Peter to mission. It reveals that fruitfulness flows from obedience to Christ's word.",
  },
  {
    id: "fig-tree",
    name: "Withering the Fig Tree",
    reference: "Matthew 21:18-22; Mark 11:12-14, 20-25",
    type: "Nature",
    happened:
      "Hungry, Jesus approached a leafy fig tree but found no fruit. He said, 'May no one ever eat fruit from you again,' and by the next morning the tree had withered from the roots. The disciples marveled, and Jesus taught them about faith that can move mountains and the necessity of believing prayer.",
    significance:
      "This enacted parable judges fruitless religion — the tree, full of leaves but barren, pictures Israel's temple worship that looked alive but bore no fruit. It is the one destructive miracle, revealing Jesus' authority to judge and His expectation of genuine fruit. It also teaches the power of faith-filled prayer to His disciples.",
  },
  {
    id: "gerasene",
    name: "The Gerasene Demoniac",
    reference: "Mark 5:1-20; Matthew 8:28-34; Luke 8:26-39",
    type: "Exorcism",
    happened:
      "Among the tombs lived a violent man no chains could hold, possessed by a 'Legion' of demons. The demons recognized Jesus as 'Son of the Most High God' and begged not to be tormented, asking to enter a herd of pigs. Jesus permitted it; the herd rushed into the sea and drowned. The man was found clothed and in his right mind, and Jesus sent him home to tell what God had done.",
    significance:
      "The miracle reveals Jesus' absolute authority over the powers of darkness — even a 'legion' cannot resist a word from Him. It displays His restoring power, returning a tormented man to sanity, clothing, and community, and commissioning him as a witness to the Gentiles. The demons' confession shows that the spiritual realm knows exactly who Jesus is.",
  },
  {
    id: "mute-demoniac",
    name: "Casting Out a Mute Spirit",
    reference: "Matthew 9:32-34; cf. Matthew 12:22-28; Luke 11:14-23",
    type: "Exorcism",
    happened:
      "A demon-possessed man who could not speak was brought to Jesus. When the demon was driven out, the mute man spoke, and the crowds marveled, 'Never was anything like this seen in Israel.' The Pharisees, refusing to believe, claimed He cast out demons by the prince of demons.",
    significance:
      "The exorcism demonstrates that Jesus restores what evil has stolen — even the power of speech. Jesus answered the Pharisees' slander by declaring that if He casts out demons by the Spirit of God, then the kingdom of God has come upon them. The miracle reveals the kingdom invading enemy territory and the danger of attributing God's work to Satan.",
  },
  {
    id: "syrophoenician",
    name: "Delivering the Syrophoenician Woman's Daughter",
    reference: "Mark 7:24-30; Matthew 15:21-28",
    type: "Exorcism",
    happened:
      "A Gentile woman from the region of Tyre begged Jesus to free her daughter from a demon. Jesus tested her with the saying about not throwing the children's bread to the dogs. With remarkable faith and wit she replied that even the dogs eat the crumbs under the table. Jesus commended her great faith, and her daughter was healed from that hour, from a distance.",
    significance:
      "The miracle reveals the reach of Jesus' authority — He delivers a girl He never sees — and the welcome of Gentile faith. The woman's persistent, humble, believing response models faith that will not be put off. It foreshadows the gospel going to all nations and shows that great faith finds a generous Lord.",
  },
  {
    id: "epileptic-boy",
    name: "Healing the Demon-Possessed Boy",
    reference: "Mark 9:14-29; Matthew 17:14-21; Luke 9:37-43",
    type: "Exorcism",
    happened:
      "A father brought his son, seized by a spirit that threw him into fire and water, after the disciples failed to cast it out. The father cried, 'I believe; help my unbelief!' Jesus rebuked the unclean spirit, commanding it to come out and never return. The boy convulsed and lay as dead, but Jesus lifted him up. He told the disciples this kind comes out only by prayer.",
    significance:
      "The miracle reveals Jesus' power where even His disciples failed, exposing the limits of faithless effort. The father's honest cry — 'help my unbelief' — captures the nature of saving faith: imperfect yet reaching to Christ. Jesus teaches that confronting deep spiritual bondage requires dependent prayer, not technique.",
  },
  {
    id: "lazarus",
    name: "Raising Lazarus",
    reference: "John 11:1-44",
    type: "Raising the Dead",
    happened:
      "Lazarus of Bethany died, and Jesus deliberately arrived four days later, when the body was already decaying. He declared to Martha, 'I am the resurrection and the life.' Deeply moved and weeping, Jesus prayed, then cried with a loud voice, 'Lazarus, come out!' The dead man came out, bound in grave clothes, and Jesus said, 'Unbind him, and let him go.'",
    significance:
      "The climactic sign in John, raising a four-days-dead man, reveals Jesus as the resurrection and the life — the One with power over death itself. His tears reveal His true humanity and compassion; His command reveals His deity. The miracle points forward to His own resurrection and the promise of life for all who believe, and it triggers the plot to kill Him.",
  },
  {
    id: "jairus",
    name: "Raising Jairus's Daughter",
    reference: "Mark 5:21-43; Matthew 9:18-26; Luke 8:40-56",
    type: "Raising the Dead",
    happened:
      "Jairus, a synagogue ruler, begged Jesus to heal his dying daughter. Delayed on the way, news came that the girl had died. Jesus said, 'Do not fear, only believe.' At the house, amid mourning, He took the twelve-year-old by the hand and said, 'Talitha cumi' — 'Little girl, arise.' She got up at once and walked, and He told them to give her something to eat.",
    significance:
      "Jesus treats death as sleep from which He can wake the sleeper, revealing His authority over the grave. His tender words and the instruction to feed her show His care for the whole person. The miracle calls a grieving father from fear to faith, demonstrating that no situation is beyond hope when Christ is present.",
  },
  {
    id: "nain",
    name: "Raising the Widow's Son at Nain",
    reference: "Luke 7:11-17",
    type: "Raising the Dead",
    happened:
      "At the town of Nain, Jesus met a funeral procession carrying the only son of a widow. Moved with compassion, He told her not to weep, touched the bier, and said, 'Young man, I say to you, arise.' The dead man sat up and began to speak, and Jesus gave him back to his mother. Fear seized the crowd, and they glorified God.",
    significance:
      "Jesus acts on His own initiative, moved by compassion for a widow facing destitution. By touching the bier and raising the dead with a word, He reveals Himself as the Lord of life who answers human grief. The crowd's cry that 'a great prophet has arisen' and 'God has visited his people' echoes the works of Elijah and Elisha — and surpasses them.",
  },
];

type VideoItem = { videoId: string; title: string; channel: string };
const VIDEOS: VideoItem[] = [
  { videoId: "Hz3l_Rnk5wU", title: "The Miracles of Jesus — Overview", channel: "BibleProject" },
  { videoId: "1y4erVNz9_o", title: "Why Jesus Performed Miracles", channel: "Teaching" },
  { videoId: "I8aFcSCXJWg", title: "The Signs of John's Gospel", channel: "Bible Study" },
  { videoId: "VOIdM_Yt-cg", title: "Jesus' Authority Over Nature and Death", channel: "Sermon Series" },
];

const REVEAL_POINTS = [
  {
    title: "He Is the Creator",
    color: "#3B82F6",
    body:
      "When Jesus calms the storm, walks on the sea, multiplies loaves, and turns water into wine, He exercises authority that the Old Testament reserves for God alone. Only the LORD stills the raging waters (Psalm 107) and provides bread in the wilderness (Exodus 16). The nature miracles answer the disciples' awed question — 'Who then is this, that even wind and sea obey him?' — by revealing that the Creator has stepped into His creation.",
  },
  {
    title: "He Is the Great Physician",
    color: "#3a7d56",
    body:
      "The healings fulfill the messianic promise that 'the eyes of the blind shall be opened, and the ears of the deaf unstopped' (Isaiah 35:5). But Jesus heals the whole person — body and soul. He links healing to forgiveness (the paralytic), restores the unclean to community (the leper, the bleeding woman), and shows that He has come to make all things whole. His compassion is never detached; He touches, He weeps, He restores dignity.",
  },
  {
    title: "He Is Lord Over the Powers of Darkness",
    color: "#EF4444",
    body:
      "The exorcisms reveal that the kingdom of God has invaded enemy-occupied territory. Demons recognize and tremble before Jesus, confessing Him as the Son of God; a single word liberates those whom no chains could bind. 'If it is by the Spirit of God that I cast out demons, then the kingdom of God has come upon you' (Matthew 12:28). Jesus is the stronger man who binds the strong man and plunders his house.",
  },
  {
    title: "He Is the Resurrection and the Life",
    color: "#F59E0B",
    body:
      "Raising Jairus's daughter, the widow's son, and Lazarus reveals that death itself is subject to Jesus. He speaks to the dead as easily as to the sleeping, and they obey. These resurrections are signposts to His own — and a foretaste of the final resurrection He promises: 'I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live' (John 11:25).",
  },
  {
    title: "They Are Signs That Demand a Response",
    color: "#6B4FBB",
    body:
      "John calls the miracles 'signs' (sēmeia) — they point beyond themselves to the identity of Jesus and call for faith. They are not mere displays of power or acts of showmanship; Jesus refused to perform on demand for skeptics. The miracles authenticate His message, manifest His glory, and confront every witness with the question of who He is — and whether they will believe.",
  },
];

export default function MiraclesOfJesusPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_miracles-of-jesus_tab", "overview");
  const [type, setType] = usePersistedState<string>("vine_miracles-of-jesus_type", "All");
  const [openId, setOpenId] = useState<string | null>(MIRACLES[0].id);

  const filtered = type === "All" ? MIRACLES : MIRACLES.filter((m) => m.type === type);

  const tabBtn = (t: Tab, label: string) => (
    <button type="button"
      key={t}
      onClick={() => setActiveTab(t)}
      style={{
        padding: "10px 18px",
        borderRadius: 999,
        border: `1px solid ${activeTab === t ? GREEN : BORDER}`,
        background: activeTab === t ? GREEN : "transparent",
        color: activeTab === t ? BG : MUTED,
        fontWeight: 600,
        fontSize: 14,
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 60px" }}>
        {/* Hero */}
        <header style={{ textAlign: "center", padding: "56px 0 28px" }}>
          <span
            style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: 999,
              border: `1px solid ${PURPLE}`,
              color: PURPLE,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            The Works of Jesus
          </span>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              margin: "20px 0 12px",
              lineHeight: 1.05,
            }}
          >
            The Miracles of Jesus
          </h1>
          <p style={{ color: MUTED, fontSize: "1.15rem", maxWidth: 720, margin: "0 auto" }}>
            Signs and wonders that broke into a broken world — healing the sick, stilling the storm,
            casting out darkness, and raising the dead. Each miracle is a window into the identity
            of Jesus and a foretaste of the kingdom He brings.
          </p>
        </header>

        {/* Tabs */}
        <nav
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "10px 0 36px",
          }}
        >
          {tabBtn("overview", "Overview")}
          {tabBtn("miracles", "The Miracles")}
          {tabBtn("reveal", "What They Reveal")}
          {tabBtn("videos", "Videos")}
        </nav>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <section>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "32px 28px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", marginTop: 0 }}>
                More Than Wonders
              </h2>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.05rem" }}>
                The Gospels record more than three dozen distinct miracles of Jesus, with many more
                summarized in passing — &ldquo;he healed all who were sick&rdquo; (Matthew 8:16).
                These were not magic tricks or random displays of power. The New Testament uses three
                key words for them: <em>dynameis</em> (mighty works, demonstrations of power),
                <em> terata</em> (wonders that astonish), and especially in John, <em>sēmeia</em>
                (signs that point beyond themselves). A miracle of Jesus always means something — it
                reveals who He is and what His kingdom is like.
              </p>
              <blockquote
                style={{
                  fontFamily: SERIF,
                  fontSize: "1.35rem",
                  fontStyle: "italic",
                  color: TEXT,
                  borderLeft: `3px solid ${GREEN}`,
                  paddingLeft: 18,
                  margin: "24px 0",
                }}
              >
                &ldquo;Now Jesus did many other signs in the presence of the disciples, which are
                not written in this book; but these are written so that you may believe that Jesus
                is the Christ, the Son of God, and that by believing you may have life in his
                name.&rdquo;
                <span style={{ display: "block", fontSize: "0.95rem", color: MUTED, marginTop: 8 }}>
                  — John 20:30-31
                </span>
              </blockquote>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.05rem" }}>
                Jesus consistently refused to perform miracles merely to satisfy curiosity or
                silence skeptics on demand. Instead, the miracles flowed from compassion, confirmed
                His authority to teach and forgive, and announced that the long-promised kingdom of
                God had arrived. They are previews of the new creation — a world without sickness,
                hunger, demonic oppression, or death — breaking into the present.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {[
                { n: "37+", label: "Distinct miracles in the Gospels" },
                { n: String(TYPES.length - 1), label: "Major types of miracle" },
                { n: String(MIRACLES.filter(m => m.type === "Raising the Dead").length), label: "People raised from the dead" },
                { n: "1", label: "Miracle in all four Gospels (5,000 fed)" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    padding: "22px 18px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontFamily: SERIF, fontSize: "2.4rem", color: GREEN }}>{s.n}</div>
                  <div style={{ color: MUTED, fontSize: 14, marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "32px 28px",
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", marginTop: 0 }}>
                Four Kinds of Miracle
              </h2>
              <div style={{ display: "grid", gap: 14 }}>
                {[
                  {
                    name: "Healing",
                    desc: "Restoring sight, cleansing leprosy, curing paralysis and disease — the Great Physician making broken bodies whole.",
                  },
                  {
                    name: "Nature",
                    desc: "Calming storms, walking on water, multiplying food, turning water to wine — the Creator's mastery over creation.",
                  },
                  {
                    name: "Exorcism",
                    desc: "Liberating the demon-oppressed with a word — the King invading and plundering the kingdom of darkness.",
                  },
                  {
                    name: "Raising the Dead",
                    desc: "Calling the dead back to life — the Lord of life who holds the keys of death and the grave.",
                  },
                ].map((t) => (
                  <div key={t.name} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 12,
                        height: 12,
                        borderRadius: 999,
                        marginTop: 6,
                        background: TYPE_COLOR[t.name],
                      }}
                    />
                    <div>
                      <strong style={{ color: TEXT }}>{t.name}</strong>
                      <span style={{ color: MUTED }}> — {t.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* MIRACLES */}
        {activeTab === "miracles" && (
          <section>
            {/* Filters */}
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: 28,
              }}
            >
              {TYPES.map((t) => {
                const active = type === t;
                const color = t === "All" ? GREEN : TYPE_COLOR[t] ?? GREEN;
                return (
                  <button type="button"
                    key={t}
                    onClick={() => setType(t)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 999,
                      border: `1px solid ${active ? color : BORDER}`,
                      background: active ? color : "transparent",
                      color: active ? BG : MUTED,
                      fontWeight: 600,
                      fontSize: 14,
                      cursor: "pointer",
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            <p style={{ textAlign: "center", color: MUTED, marginBottom: 24, fontSize: 14 }}>
              Showing {filtered.length} {filtered.length === 1 ? "miracle" : "miracles"}
              {type !== "All" ? ` of type “${type}”` : ""}
            </p>

            <div style={{ display: "grid", gap: 16 }}>
              {filtered.map((m) => {
                const open = openId === m.id;
                const color = TYPE_COLOR[m.type];
                return (
                  <article
                    key={m.id}
                    style={{
                      background: CARD,
                      border: `1px solid ${open ? color : BORDER}`,
                      borderRadius: 16,
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <button type="button"
                      onClick={() => setOpenId(open ? null : m.id)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        background: "transparent",
                        border: "none",
                        color: TEXT,
                        padding: "22px 24px",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 16,
                      }}
                    >
                      <div>
                        <span
                          style={{
                            display: "inline-block",
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: 0.8,
                            textTransform: "uppercase",
                            color,
                            border: `1px solid ${color}`,
                            borderRadius: 999,
                            padding: "3px 10px",
                            marginBottom: 10,
                          }}
                        >
                          {m.type}
                        </span>
                        <h3
                          style={{
                            fontFamily: SERIF,
                            fontSize: "1.5rem",
                            margin: 0,
                            lineHeight: 1.2,
                          }}
                        >
                          {m.name}
                        </h3>
                        <p style={{ color: MUTED, fontSize: 13, margin: "6px 0 0" }}>
                          {m.reference}
                        </p>
                      </div>
                      <span style={{ color, fontSize: 28, lineHeight: 1 }}>{open ? "−" : "+"}</span>
                    </button>

                    {open && (
                      <div style={{ padding: "0 24px 26px" }}>
                        <div style={{ marginBottom: 18 }}>
                          <h4 style={{ color: GREEN, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 6px" }}>
                            What Happened
                          </h4>
                          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{m.happened}</p>
                        </div>
                        <div
                          style={{
                            borderLeft: `3px solid ${color}`,
                            paddingLeft: 16,
                            background: "rgba(255,255,255,0.02)",
                            borderRadius: 8,
                            padding: "14px 16px",
                          }}
                        >
                          <h4 style={{ color, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 6px" }}>
                            Theological Significance
                          </h4>
                          <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                            {m.significance}
                          </p>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* WHAT THEY REVEAL */}
        {activeTab === "reveal" && (
          <section>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "32px 28px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", marginTop: 0 }}>
                What the Miracles Reveal About Jesus
              </h2>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.05rem" }}>
                Every miracle is a sign pointing to the identity of the One who performed it. Taken
                together, the mighty works of Jesus form a coherent self-revelation: He is the
                Creator, the Healer, the Conqueror of darkness, the Lord of life — and ultimately
                the Son of God who calls every witness to believe.
              </p>
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              {REVEAL_POINTS.map((r) => (
                <div
                  key={r.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    padding: "24px 24px",
                    borderLeft: `4px solid ${r.color}`,
                  }}
                >
                  <h3 style={{ fontFamily: SERIF, fontSize: "1.45rem", margin: "0 0 10px", color: r.color }}>
                    {r.title}
                  </h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{r.body}</p>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 24,
                background: CARD,
                border: `1px solid ${PURPLE}`,
                borderRadius: 16,
                padding: "28px 28px",
              }}
            >
              <h3 style={{ fontFamily: SERIF, fontSize: "1.5rem", margin: "0 0 10px" }}>
                The Question Every Miracle Asks
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                The miracles do not let us remain spectators. Confronted with the One who commands
                wind and wave, forgives sins, casts out demons, and raises the dead, each of us must
                answer the disciples' question: &ldquo;Who then is this?&rdquo; The Gospels record
                these signs not to amaze us but to bring us to faith — that believing, we may have
                life in His name.
              </p>
            </div>
          </section>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <section>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "28px 28px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", margin: 0 }}>Watch &amp; Learn</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: "10px 0 0" }}>
                Teaching videos to deepen your understanding of the miracles of Jesus and what they
                reveal about who He is.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
              }}
            >
              {VIDEOS.map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allowFullScreen
                  />
                  <div style={{ padding: "16px 18px" }}>
                    <h3 style={{ fontSize: "1.05rem", margin: "0 0 4px" }}>{v.title}</h3>
                    <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>{v.channel}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
