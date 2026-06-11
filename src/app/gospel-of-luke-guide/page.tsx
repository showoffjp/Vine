"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";


const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56",
  PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3", GOLD = "#D97706",
  TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = ["Overview","Great Reversal","Special Parables","Women & Outcasts","The Journey","Holy Spirit","Passion & Resurrection","Journal","Videos"];

const REVERSAL_ITEMS = [
  { q: "The Magnificat: Mary's Manifesto (1:46–55)", a: "'He has scattered those who are proud in their inmost thoughts. He has brought down rulers from their thrones but has lifted up the humble. He has filled the hungry with good things but has sent the rich away empty.' Mary's song announces the Great Reversal before Jesus is even born: the proud scattered, rulers dethroned, humble lifted, hungry filled, rich sent away. Luke's Gospel will embody this pattern in every encounter: the established are destabilized, the marginal are centered." },
  { q: "The Nazareth Manifesto (4:18–21)", a: "'The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free, to proclaim the year of the Lord's favor.' Jesus's inaugural sermon reads Isaiah 61 and declares: 'Today this scripture is fulfilled in your hearing.' The program of his ministry is announced: the poor, imprisoned, blind, oppressed — these are his constituency." },
  { q: "The Beatitudes and Woes (6:20–26)", a: "Luke's Sermon on the Plain opens with four beatitudes and four matching woes — the positive-negative pairing that Matthew does not include: 'Blessed are you who are poor... but woe to you who are rich.' 'Blessed are you who hunger now... but woe to you who are well fed now.' The reversals are economic and social, not only spiritual. Luke's beatitudes target social conditions; the woes warn those with present comfort that their comfort is temporary." },
  { q: "The Rich and Lazarus (16:19–31)", a: "Lazarus the beggar at the gate, covered with sores, eats what falls from the rich man's table. Both die. Lazarus goes to Abraham's side; the rich man to Hades. The rich man requests mercy; Abraham says: 'Son, remember that in your lifetime you received your good things, while Lazarus received bad things, but now he is comforted here and you are in agony.' The reversal is complete and eschatological. The parable ends with a Resurrection warning: even if someone rises from the dead, those who ignore Moses and the Prophets will not be persuaded." },
];

const SPECIAL_PARABLES = [
  { icon: "🐑", color: GREEN, title: "The Lost Sheep and Lost Coin (15:1–10)", text: "The two brief parables — the shepherd who leaves 99 to find 1, the woman who searches for 1 lost coin — set up the chapter's climax. Both end in disproportionate celebration: 'Rejoice with me.' The joy of finding exceeds the joy of keeping. This is the logic of grace: God's search for the lost is not resigned rescue but ecstatic pursuit, and the Father's welcome is not grudging restoration but lavish celebration. Heaven itself rejoices over one sinner who repents." },
  { icon: "🙏", color: PURPLE, title: "The Pharisee and the Tax Collector (18:9–14)", text: "'The Pharisee stood and prayed about himself: God, I thank you that I am not like other people — robbers, evildoers, adulterers — or even like this tax collector. I fast twice a week and give a tenth of all I get.' The tax collector: 'God, have mercy on me, a sinner.' Jesus: 'This man, rather than the other, went home justified before God. For all those who exalt themselves will be humbled, and those who humble themselves will be exalted.' The religious man's prayer is performance; the sinner's prayer is need. God justifies need, not performance." },
  { icon: "🍴", color: GOLD, title: "The Great Banquet (14:15–24)", text: "'Go out to the roads and country lanes and compel them to come in, so that my house will be full.' The invited guests all refuse with plausible excuses (fields, oxen, marriage). The host fills the feast with 'the poor, the crippled, the blind and the lame' — the exact people from verse 13 Jesus said to invite in the first place. The kingdom feast bypasses those who think themselves too comfortable for the invitation and welcomes those who know they have nothing to offer." },
  { icon: "💸", color: TEAL, title: "Zacchaeus: Salvation Comes to This House (19:1–10)", text: "'For the Son of Man came to seek and to save the lost' (19:10) — Luke's equivalent of Mark 10:45. Zacchaeus the chief tax collector, despised as a Roman collaborator, climbed a sycamore tree to see Jesus. Jesus calls him down and announces he must stay at his house. The crowd grumbles; Zacchaeus responds with radical restitution: half his possessions to the poor, fourfold repayment to anyone he cheated. Jesus: 'Today salvation has come to this house, because this man, too, is a son of Abraham.'" },
];

const WOMEN_ITEMS = [
  { q: "Women in Luke's Infancy Narrative", a: "Luke centers women in the birth stories: Mary's Annunciation and Magnificat, Elizabeth's filled-with-the-Spirit recognition of Jesus, Anna the prophetess (84 years, never leaving the temple) who speaks about the child to all who looked for redemption. Luke deliberately preserves the female perspective of the incarnation — the first responses to the Messiah's arrival are from women." },
  { q: "Women Who Follow and Support (8:1–3)", a: "'The Twelve were with him, and also some women who had been cured of evil spirits and diseases: Mary (called Magdalene)... Joanna the wife of Chuza, the manager of Herod's household; Susanna; and many others. These women were helping to support them out of their own means.' Luke names three women and notes many others — women of means who financially supported Jesus's itinerant ministry. Their inclusion in the traveling group was scandalous; their mention by name is Luke's acknowledgment of their integral role." },
  { q: "Mary and Martha: The Better Part (10:38–42)", a: "'Martha was distracted by all the preparations that had to be made. She came to him and asked, Lord, don't you care that my sister has left me to do the work by myself?' Mary sat at the Lord's feet, listening — the posture of a disciple, normally reserved for men. Jesus: 'Mary has chosen what is better, and it will not be taken away from her.' Jesus defends a woman's right to be a disciple, receiving theological instruction rather than being restricted to domestic service." },
  { q: "Sinful Woman Who Anoints Jesus (7:36–50)", a: "A woman 'who lived a sinful life' entered a Pharisee's house while Jesus reclined at table. She wept, wetting Jesus's feet with her tears, wiping them with her hair, kissing them, and anointing them with perfume. Simon the Pharisee: 'If this man were a prophet, he would know who is touching him and what kind of woman she is.' Jesus tells the parable of two forgiven debtors. 'Her many sins have been forgiven — as her great love has shown. But whoever has been forgiven little loves little.'" },
];

const JOURNEY_ITEMS = [
  { q: "The Travel Narrative (9:51–19:27)", a: "'As the time approached for him to be taken up to heaven, Jesus resolutely set out for Jerusalem.' Ten chapters of Luke are structured as a journey to Jerusalem — more than any other Gospel. The journey is the frame for the bulk of Luke's special material: parables, teachings, encounters, healings. Theologically, the journey is purposeful: Jesus is going to the cross deliberately. The repeated 'he was on his way to Jerusalem' makes the destination inescapable." },
  { q: "Cost of Discipleship on the Road (9:57–62)", a: "Three would-be disciples are tested on the road: one volunteers; Jesus warns of homelessness. The second is called; he asks to bury his father first (a legitimate duty). The third volunteers but wants to say goodbye. Jesus: 'No one who puts a hand to the plow and looks back is fit for service in the kingdom of God.' The demands are severe and the cost is total. Luke does not soften the call of Jesus to make it more appealing." },
  { q: "The Mission of the 72 (10:1–24)", a: "Luke alone records Jesus sending out 72 (or 70) disciples — a larger group than the Twelve. They go ahead in pairs to every town Jesus was about to visit. Instructions: carry no purse, no bag, no sandals; eat what is given; heal the sick; announce the kingdom. On return: 'Lord, even the demons submit to us in your name.' Jesus: 'I saw Satan fall like lightning from heaven.' The mission of the 72 anticipates the universal mission — 72 nations in Jewish tradition = all the nations." },
  { q: "Jerusalem as the City of the Prophets (13:33–34)", a: "'Surely no prophet can die outside Jerusalem! Jerusalem, Jerusalem, you who kill the prophets and stone those sent to you, how often I have longed to gather your children together, as a hen gathers her chicks under her wings, and you were not willing.' Jesus's lament over Jerusalem captures both his compassion (the hen image) and his knowledge of what awaits him there. He goes to Jerusalem not because he must but because the pattern of prophetic destiny — rejection in the holy city — demands it." },
];

const SPIRIT_CARDS = [
  { icon: "🕊️", color: TEAL, title: "The Spirit at the Jordan (3:21–22)", text: "At Jesus's baptism, the Holy Spirit descends on him 'in bodily form like a dove' and the Father speaks: 'You are my Son, whom I love; with you I am well pleased.' Luke emphasizes the Spirit's role in Jesus's entire ministry: led by the Spirit into the wilderness, returned to Galilee in the power of the Spirit, anointed by the Spirit for his Nazareth mission. Jesus is the Spirit-filled messiah par excellence." },
  { icon: "🔥", color: RED, title: "The Promise of the Spirit (24:49; Acts 1:4–5)", text: "'I am going to send you what my Father has promised; but stay in the city until you have been clothed with power from on high.' Luke's Gospel ends with a promise that Acts immediately fulfills: the Pentecost outpouring. Luke-Acts is a two-volume work; the Spirit who drives the Gospel drives the church. The disciples are not to do the mission in their own strength but to wait for the empowering presence of the Spirit." },
  { icon: "😇", color: PURPLE, title: "Spirit-Filled Characters", text: "Luke's birth narratives are saturated with Spirit-filling: Elizabeth (1:41), Zechariah (1:67), Simeon (2:25–27). This vocabulary anticipates Acts where the Spirit fills believers at Pentecost and repeatedly throughout. Luke's point: the Spirit active in the church is the same Spirit active in the OT prophets, in the birth of Jesus, and in Jesus's own ministry. The Spirit is the continuous thread of God's redemptive action." },
  { icon: "📢", color: GOLD, title: "Prayer and the Spirit in Luke", text: "Luke adds the Holy Spirit to Jesus's teaching on prayer: 'How much more will your Father in heaven give the Holy Spirit to those who ask him!' (11:13 — Matthew has 'good gifts'). Luke's Jesus prays at every major event: baptism, transfiguration, before choosing the Twelve, in Gethsemane. The Spirit is given in response to prayer; prayer is the means of ongoing Spirit-filling. Luke's spirituality is pneumatological (Spirit-centered) and doxological (praise-centered)." },
];

const VIDEOS = [
  { videoId: "XIb_dCIxzr0", title: "Gospel of Luke Overview – The Bible Project" },
  { videoId: "9DcLmEigU2E", title: "Luke's Special Parables of Grace" },
  { videoId: "3oLGRWi2nQ8", title: "The Great Reversal — Jesus and the Marginalized in Luke" },
];

export default function GospelOfLukeGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<string>("vine_luke_tab", "Overview");
  const [openRev, setOpenRev] = useState<number>(-1);
  const [openWom, setOpenWom] = useState<number>(-1);
  const [openJour, setOpenJour] = useState<number>(-1);
  const [journal, setJournal] = usePersistedState<string>("vine_luke_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui,sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>🕊️</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: TEXT, marginBottom: ".5rem" }}>The Gospel of Luke</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>A Comprehensive Study Guide — the Gospel of the Great Reversal: the poor, the outcast, women, Samaritans, and sinners as the objects of Jesus's grace, and the Spirit-filled journey to the cross.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ padding: ".5rem 1.1rem", borderRadius: 20, border: `1px solid ${activeTab === t ? GREEN : BORDER}`, background: activeTab === t ? `${GREEN}22` : CARD, color: activeTab === t ? GREEN : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", fontSize: ".85rem" }}>{t}</button>
          ))}
        </div>

        {/* Tab 0: Overview */}
        {activeTab === "Overview" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Overview of Luke's Gospel</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Luke-Acts is a two-volume work by a Gentile physician and companion of Paul, written around AD 80–85 for Theophilus and the wider Gentile church. Volume 1 (Luke) narrates the life, ministry, death, and resurrection of Jesus; Volume 2 (Acts) narrates the spread of the gospel through the Spirit-empowered church from Jerusalem to Rome.</p>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Luke's distinctive emphases: the poor and marginal as recipients of the kingdom; women as central characters; the Gentile mission anticipated throughout; prayer and the Holy Spirit at every major junction; parables found nowhere else (Good Samaritan, Prodigal Son, Rich Man and Lazarus, Pharisee and Tax Collector); and Jesus as the prophetic Servant on a purposeful journey to Jerusalem.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginTop: "1.5rem" }}>
              {[["Author","Luke, physician and Paul's companion"],["Date","c. AD 80–85"],["Audience","Theophilus and Gentile church"],["Structure","Luke-Acts (two volumes)"],["Key Emphasis","Great Reversal; Holy Spirit; prayer"],["Special Parables","Good Samaritan, Prodigal Son, etc."]].map(([k,v]) => (
                <div key={k} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".25rem" }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: Great Reversal */}
        {activeTab === "Great Reversal" && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Great Reversal</h2>
            {REVERSAL_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openRev === i ? RED : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenRev(openRev === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: RED, fontSize: "1.2rem" }}>{openRev === i ? "−" : "+"}</span>
                </button>
                {openRev === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Special Parables */}
        {activeTab === "Special Parables" && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Luke's Special Parables of Grace</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {SPECIAL_PARABLES.map(c => (
                <div key={c.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
                    <div>
                      <div style={{ color: c.color, fontWeight: 800, marginBottom: ".5rem" }}>{c.title}</div>
                      <div style={{ color: MUTED, lineHeight: 1.8 }}>{c.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${GREEN}`, padding: "1.5rem", marginTop: "1.5rem" }}>
              <div style={{ color: GREEN, fontWeight: 800, marginBottom: ".75rem" }}>The Good Samaritan (10:25–37)</div>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Asked 'Who is my neighbor?', Jesus tells of a Samaritan who helps a beaten Jewish man — a theological scandal, since Jews and Samaritans were mutual enemies. The priest and Levite pass by on the other side (ritual purity? fear? busyness?). The despised Samaritan stops, binds wounds, uses his own oil and wine, pays for lodging, promises to return. Jesus's question: which was neighbor? The answer: 'The one who had mercy on him.' Jesus: 'Go and do likewise.' The question flips: not who qualifies as my neighbor but am I a neighbor?</p>
            </div>
          </div>
        )}

        {/* Tab 3: Women & Outcasts */}
        {activeTab === "Women & Outcasts" && (
          <div>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Women and the Marginalized in Luke</h2>
            {WOMEN_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openWom === i ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenWom(openWom === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{openWom === i ? "−" : "+"}</span>
                </button>
                {openWom === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: The Journey */}
        {activeTab === "The Journey" && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Journey to Jerusalem (9:51–19:27)</h2>
            {JOURNEY_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openJour === i ? TEAL : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenJour(openJour === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: TEAL, fontSize: "1.2rem" }}>{openJour === i ? "−" : "+"}</span>
                </button>
                {openJour === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Holy Spirit */}
        {activeTab === "Holy Spirit" && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Holy Spirit in Luke</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {SPIRIT_CARDS.map(c => (
                <div key={c.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
                    <div>
                      <div style={{ color: c.color, fontWeight: 800, marginBottom: ".5rem" }}>{c.title}</div>
                      <div style={{ color: MUTED, lineHeight: 1.8 }}>{c.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Passion & Resurrection */}
        {activeTab === "Passion & Resurrection" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Luke's Passion and Resurrection (22–24)</h2>
            {[
              ["The Last Supper and the New Covenant (22:14–23)","Luke's Last Supper is richer in dialogue than the other Gospels. Jesus expresses longing: 'I have eagerly desired to eat this Passover with you before I suffer.' After the cup: 'This cup is the new covenant in my blood, which is poured out for you.' The disciples immediately argue about who is greatest — Luke places this debate at the table, making it maximally ironic. Jesus reframes greatness: 'I am among you as one who serves' (22:27)."],
              ["The Road to Emmaus (24:13–35)","Luke's distinctive post-resurrection appearance: two disciples walking to Emmaus, joined by the risen Jesus whom they do not recognize. Jesus walks through all the Scriptures showing how they speak of himself. At table, 'he took bread, gave thanks, broke it and began to give it to them. Then their eyes were opened and they recognized him, and he disappeared from their sight.' The Eucharistic pattern — take, bless, break, give — is the moment of recognition. Scripture + Table opens eyes."],
              ["The Commissioning (24:44–49)","'Everything must be fulfilled that is written about me in the Law of Moses, the Prophets and the Psalms.' Luke is the most explicit about the whole OT as Christ's story. The commission: repentance and forgiveness of sins will be proclaimed in his name to all nations, beginning at Jerusalem. The disciples are witnesses. They are to stay in Jerusalem until clothed with power from on high. Luke ends with an ascension and worship; Acts begins where Luke ends."],
              ["Luke's Unique Passion Details","Luke preserves details found nowhere else: Jesus healing the high priest's servant's ear at arrest (22:51), Jesus before Herod Antipas (23:6–12), the weeping daughters of Jerusalem (23:27–31), the penitent thief ('Today you will be with me in paradise,' 23:43), Jesus's prayer for his executioners ('Father, forgive them,' 23:34), and Jesus's last words: 'Father, into your hands I commit my spirit' — a death of trust rather than desolation."],
            ].map(([title, body], i) => (
              <div key={i} style={{ borderLeft: `3px solid ${RED}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: RED, fontWeight: 700, marginBottom: ".4rem" }}>{title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 7: Journal */}
        {activeTab === "Journal" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: ".5rem" }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1rem", fontSize: ".9rem" }}>Reflect on your study of Luke. Your notes are saved locally.</p>
            {[
              "Who in your community is in the position of Luke's 'poor, prisoner, blind, oppressed' — those Jesus came to? How is that a challenge to your assumptions?",
              "The Prodigal Son's father ran to him while he was still far off. What does this image of God say to your current experience of distance or nearness?",
              "The Road to Emmaus shows the risen Jesus recognized in Scripture and at the table. Where do you most encounter the risen Christ?",
            ].map((q, i) => <p key={i} style={{ color: GOLD, fontSize: ".85rem", fontStyle: "italic", marginBottom: ".4rem" }}>{i + 1}. {q}</p>)}
            <textarea
              value={journal}
              onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "1rem", fontSize: ".95rem", lineHeight: 1.7, resize: "vertical", marginTop: ".75rem", boxSizing: "border-box" }}
            />
            {journal && <p style={{ color: MUTED, fontSize: ".8rem", marginTop: ".5rem" }}>Saved automatically.</p>}
          </div>
        )}

        {/* Tab 8: Videos */}
        {activeTab === "Videos" && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Video Resources</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "1rem" }}>
                    <div style={{ color: TEXT, fontWeight: 700 }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
