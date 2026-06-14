"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Come Lord Jesus",
  "Tree of Life New Jerusalem",
  "The Final Invitation",
  "Application",
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
    heading: "Overview: The Last Chapter of Scripture",
    reference: "Revelation 22:1&ndash;21",
    paragraphs: [
      "Revelation 22 is the final chapter of the entire Bible, and it carries the weight of that distinction on every line. What began in Genesis &mdash; a garden, a river, trees of life, humanity walking with God &mdash; comes full circle here in a vision of breathtaking restoration. The book of Revelation has traversed seven seals, seven trumpets, seven bowls, the fall of Babylon, the defeat of the beast, the millennium, and the last judgment. Now the angel brings John to see the consummation: the eternal city of God in which all things are made new.",
      "The chapter falls into three clear movements. First (vv. 1&ndash;5), the angel shows John the river of the water of life flowing from the throne of God and of the Lamb, and the tree of life bearing its fruit on either bank. Second (vv. 6&ndash;17), a series of short declarations and warnings authenticates the vision and extends an urgent invitation to all who hear: the Spirit and the Bride say, &ldquo;Come.&rdquo; Third (vv. 18&ndash;21), a solemn warning about adding to or taking from the words of this prophecy is given, and the book closes with the final longing cry of the church: &ldquo;Amen. Come, Lord Jesus.&rdquo;",
      "The chapter does not read like a conclusion so much as a beginning. Everything in it points forward &mdash; to a city not yet fully come, to a Lord who is coming quickly, to a thirst that will be fully satisfied. The word &ldquo;come&rdquo; appears seven times in the chapter, weaving through it like a refrain that refuses to let the reader simply close the book and settle down. Scripture ends not with a period but with an invitation, not with a finished story but with a door swung open.",
      "John&rsquo;s response to what he sees is deeply human: he falls at the feet of the angel in worship and must be corrected. The angel&rsquo;s rebuke &mdash; &ldquo;You must not do that! I am a fellow servant with you&rdquo; (22:9) &mdash; is itself a theological statement. In the new creation, no intermediary is needed between God and his people. The temple-less city of chapter 21 leads naturally here: the servants of God see his face and his name is on their foreheads. Direct, unmediated communion with God is the inheritance of the redeemed.",
      "Throughout the chapter Jesus speaks in the first person: &ldquo;I am coming soon&rdquo; (vv. 7, 12, 20); &ldquo;I am the Alpha and the Omega, the first and the last, the beginning and the end&rdquo; (v. 13); &ldquo;I, Jesus, have sent my angel to testify to you&rdquo; (v. 16). The book of Revelation began as a revelation &ldquo;of Jesus Christ&rdquo; (1:1), and it ends with Jesus himself speaking. He is the subject, the source, and the goal of everything the book contains. The final chapter makes unmistakably clear that the entire vision serves to unveil not merely events, but a Person.",
      "The name &ldquo;Revelation 22&rdquo; itself captures a double meaning that attentive readers will feel: it is the twenty-second chapter of Revelation, but it is also, in the deepest sense, the revelation that chapter 22 gives &mdash; the final unveiling of the shape of eternity. To read it slowly, to let its images settle in the imagination, to hear its repeated &ldquo;come&rdquo; as addressed to oneself &mdash; this is to receive Revelation 22 as it was intended.",
    ],
  },
  {
    id: "Come Lord Jesus",
    heading: "Come, Lord Jesus: The Promise of His Return",
    reference: "Revelation 22:7, 12, 20",
    paragraphs: [
      "Three times in the final chapter of Revelation, Jesus himself speaks the words, &ldquo;I am coming soon&rdquo; (vv. 7, 12, 20). The Greek word translated &ldquo;soon&rdquo; is &ldquo;tachy,&rdquo; which carries the sense of suddenly, swiftly, without delay once the time arrives &mdash; not necessarily immediately in human chronological terms, but with the certainty and quickness of a thing that, when it comes, comes fast. The threefold repetition is emphatic: whatever else may be uncertain, the return of Jesus Christ is not.",
      "The declaration in verse 7 comes with a beatitude attached: &ldquo;Blessed is the one who keeps the words of the prophecy of this book.&rdquo; This is the sixth of the seven beatitudes in Revelation (1:3; 14:13; 16:15; 19:9; 20:6; 22:7, 14), and it ties the blessing of the coming kingdom directly to present faithfulness. The return of the Lord is not merely a future event to be awaited passively; it is a reality that reshapes present behavior. Those who believe he is coming keep his words now.",
      "In verse 12, the announcement of his coming is paired with a declaration of justice: &ldquo;Behold, I am coming soon, bringing my recompense with me, to repay each one for what he has done.&rdquo; This is a word addressed to a suffering and persecuted church: the apparent triumph of the wicked is not the final word. The one who comes is the Alpha and the Omega, the beginning and the end (v. 13), and history bends toward his judgment. No injustice is ultimately swept under the rug of eternity; every account will be settled.",
      "Verse 20 brings the most intimate exchange in all of Scripture&rsquo;s closing pages. Jesus says, &ldquo;Surely I am coming soon,&rdquo; and the church, in the voice of John, replies, &ldquo;Amen. Come, Lord Jesus.&rdquo; The Aramaic form of this cry &mdash; &ldquo;Maranatha&rdquo; &mdash; appears in 1 Corinthians 16:22 as one of the earliest liturgical expressions of the Christian community. It is both a declaration of faith (we believe you are coming) and a prayer of longing (we want you to come). The cry &ldquo;Come, Lord Jesus&rdquo; is not passive resignation but active, eager, love-shaped desire.",
      "Early Christians lived in the posture implied by this cry. They gathered at the Lord&rsquo;s table proclaiming his death &ldquo;until he comes&rdquo; (1 Cor. 11:26); they prayed for his return; they read letters that circulated among the churches with this word alive in them. Revelation 22:20 gives that posture its fullest scriptural expression. The whole sweep of redemptive history &mdash; creation, fall, exodus, temple, incarnation, cross, resurrection, Pentecost, church age &mdash; all of it flows into and through this moment: the church crying out across time, &ldquo;Come, Lord Jesus.&rdquo;",
      "The promise of his return is not given merely to satisfy curiosity about end-times chronology. It is given to sustain the church through suffering, to relativize the empires and powers that seem permanent but are not, to keep the flame of hope burning in dark seasons, and to remind every generation that the story is still being told. The last word of the Bible, substantively speaking, is not a description of heaven but a promise: &ldquo;I am coming.&rdquo; And the last prayer of the Bible is the church&rsquo;s answer to that promise: &ldquo;Come.&rdquo;",
    ],
  },
  {
    id: "Tree of Life New Jerusalem",
    heading: "The Tree of Life and the New Jerusalem",
    reference: "Revelation 22:1&ndash;5",
    paragraphs: [
      "The opening verses of Revelation 22 describe what the angel shows John after the vision of the New Jerusalem in chapter 21. &ldquo;Then the angel showed me the river of the water of life, bright as crystal, flowing from the throne of God and of the Lamb through the middle of the street of the city&rdquo; (vv. 1&ndash;2). The source of this river is not a mountain spring or an underground aquifer but the throne &mdash; the very seat of divine sovereignty. Life flows from God himself, endlessly and without cost.",
      "On either side of the river stands the tree of life, bearing twelve kinds of fruit, yielding its fruit each month, with its leaves for the healing of the nations (v. 2). The singular &ldquo;tree of life&rdquo; growing on both sides of a river may evoke Psalm 1&rsquo;s image of the righteous man as a tree planted by streams of water, or the vision of Ezekiel 47 where trees along the life-giving river from the temple bear fruit each month whose leaves do not wither and whose fruit is for food and whose leaves are for healing. John here is drawing on the full sweep of biblical imagery to describe something genuinely unprecedented.",
      "The tree of life takes the reader immediately back to Genesis 2&ndash;3, where the tree of life stood at the center of the Garden of Eden. After the fall, the way to the tree was blocked by cherubim with a flaming sword (Gen. 3:24) &mdash; an exclusion from the source of life that signaled humanity&rsquo;s broken relationship with God. Now, in Revelation 22, the tree of life appears again, but the cherubim are gone and the gate is open. The long exile from the source of life is over. The curse reversed by Christ&rsquo;s death and resurrection achieves its full effect: &ldquo;No longer will there be anything accursed, but the throne of God and of the Lamb will be in it, and his servants will worship him&rdquo; (v. 3).",
      "The phrase &ldquo;leaves for the healing of the nations&rdquo; is striking because, by this point in Revelation, God&rsquo;s judgment on the nations has already occurred. What, then, needs healing? The most likely reading is that this language is drawn from the prophetic tradition (Ezek. 47) and signals the complete flourishing of the nations in the eternal order &mdash; the undoing of all that sin has caused, the health and shalom of all peoples, the reaching of the nations that the mission of the church was always moving toward. It pictures the goal of the great commission finally and fully attained.",
      "The five statements of verses 3&ndash;5 are among the most compressed and powerful sentences in Scripture. No more curse. The throne of God is in the city. His servants worship him. They see his face. His name is on their foreheads. They reign forever. Each statement reverses a catastrophe of the fall: the curse lifted, the exile ended, worship restored, the face of God seen at last (Exod. 33:20 said no one can see it and live &mdash; but death itself is gone), the name of belonging imprinted, the vocation of ruling renewed for eternity.",
      "The New Jerusalem is not a gated community floating somewhere above the clouds. It is the fulfillment of every human longing for home, for beauty, for belonging, for purpose, for the face of the one who made us. The river, the tree, the fruit, the leaves &mdash; all these images say: in the new creation, there is abundance for every need, healing for every wound, life for every thirst. And at the center of it all, not a building or a monument, but a throne, and on it the Lamb who was slain, and around it the endless worship of those who are finally, fully, irreversibly home.",
    ],
  },
  {
    id: "The Final Invitation",
    heading: "The Final Invitation: Come to the Water Freely",
    reference: "Revelation 22:14&ndash;17",
    paragraphs: [
      "Revelation 22:17 contains what may be the most extraordinary verse in the final chapter of Scripture: &ldquo;The Spirit and the Bride say, &lsquo;Come.&rsquo; And let the one who hears say, &lsquo;Come.&rsquo; And let the one who is thirsty come; let the one who desires take the water of life without price.&rdquo; Four times the word &ldquo;come&rdquo; appears in a single verse. The entire triune God &mdash; the Spirit &mdash; and the entire redeemed community &mdash; the Bride &mdash; and every hearer of this prophecy &mdash; and every thirsty soul &mdash; are all gathered into one great, welcoming cry.",
      "The word &ldquo;freely&rdquo; (or &ldquo;without price&rdquo; in some translations) is the Greek word &ldquo;dorean,&rdquo; which means as a gift, gratis, for nothing. This is the same word used in Romans 3:24 where Paul says we are &ldquo;justified freely by his grace through the redemption that is in Christ Jesus.&rdquo; The water of life is not sold; it is given. It cannot be earned by religious performance, purchased by wealth, or merited by moral achievement. It is offered to the thirsty, and the only qualification for receiving it is desire &mdash; &ldquo;let the one who desires take it.&rdquo;",
      "This is not the first time water of life appears in connection with a free gift. In John 4, Jesus tells the Samaritan woman at the well that if she knew who was speaking to her she would ask him, and he would give her living water, and whoever drinks of it will never be thirsty again (John 4:10&ndash;14). In John 7:37, on the last day of the Feast of Tabernacles, Jesus cried out, &ldquo;If anyone thirsts, let him come to me and drink.&rdquo; In Isaiah 55:1, centuries before, the prophet issued the same invitation: &ldquo;Come, everyone who thirsts, come to the waters; and he who has no money, come, buy and eat!&rdquo; Revelation 22:17 is the final, fullest echo of this invitation that threads through all of Scripture.",
      "The verse places the invitation in the mouths of the Spirit, the Bride, and every hearer. This means the church&rsquo;s mission, while it remains on earth, is inseparable from the cry &ldquo;Come.&rdquo; The community of the redeemed is not a closed club maintaining its own comfort; it is a voice &mdash; the voice of the Spirit through the Bride &mdash; calling the thirsty world to the water. Evangelism, at its deepest level, is not a program or a technique but a participation in the cry that fills the final pages of the Bible.",
      "The beatitude of verse 14 frames those who will be admitted to the tree of life: &ldquo;Blessed are those who wash their robes, so that they may have the right to the tree of life and that they may enter the city by the gates.&rdquo; The washing of robes is an image from Revelation 7:14, where the great multitude from every nation have &ldquo;washed their robes and made them white in the blood of the Lamb.&rdquo; The access to life is through the blood of Christ &mdash; a point the book of Revelation never allows to recede into the background. The free gift costs nothing for the recipient but cost everything for the Giver.",
      "Outside the city are those who have refused the invitation &mdash; the dogs, the sorcerers, the sexually immoral, the murderers, the idolaters, and everyone who loves and practices falsehood (v. 15). This list is not designed to suggest that certain categories of sinners are beyond grace &mdash; the invitation of the next verse is precisely to all who are thirsty, which includes those who have been these things. Rather, it describes the condition of those who have refused the washing, who have loved the darkness more than the light, who have preferred their idols to the living God. The city is open; the choice to remain outside is made, not imposed.",
    ],
  },
  {
    id: "Application",
    heading: "Application: Living in Light of the End",
    reference: "Revelation 22:7&ndash;21",
    paragraphs: [
      "The closing chapter of Revelation is not meant to remain safely in the distant future. It is meant to bend the present. Jesus says three times, &ldquo;I am coming soon,&rdquo; and the implied question is always: how then should you live? John&rsquo;s beatitude in verse 7 answers: &ldquo;Blessed is the one who keeps the words of the prophecy of this book.&rdquo; The blessing of the coming kingdom belongs to those who, in the meantime, are faithful to the word of God. Keeping his words is not a condition of salvation but the shape of a life that genuinely believes he is coming.",
      "One of the most practical implications of Revelation 22 is the recovery of hope as a present-tense power. The church is called the Bride precisely because she is in a relationship with the coming Bridegroom, and a bride awaiting her wedding day is not passive or despondent &mdash; she is expectant, joyful, preparing, adorning herself (Rev. 19:7&ndash;8). The hope of Christ&rsquo;s return is not escapism from the world but a reorientation toward what is ultimately real. It frees the Christian from the idolatry of treating any earthly system, nation, or empire as ultimate.",
      "The cry &ldquo;Come, Lord Jesus&rdquo; has an immediate implication for how we face suffering. The persecuted churches of Asia Minor, to whom Revelation was first addressed, needed to hear that the apparent triumph of Rome was not the final word. They needed the courage that comes from knowing that their suffering is seen by the throne, that justice will come, that the one who died and rose is coming again. Revelation 22 gives that courage. To pray &ldquo;Come, Lord Jesus&rdquo; in the middle of suffering is to stake a claim that the present darkness is not the last chapter.",
      "The invitation of verse 17 &mdash; &ldquo;let the one who is thirsty come&rdquo; &mdash; has a direct application for personal spiritual life. Thirst is a metaphor for deep, aching need. The person who is spiritually thirsty knows that something is missing; that the pleasures and achievements of earthly life do not finally satisfy; that the soul was made for more than what the world can give. Revelation 22 does not tell thirsty people to suppress their thirst or to settle for substitutes. It says: come. The water of life is real. Jesus gives it freely. The only requirement is to want it enough to come.",
      "The warning against adding to or subtracting from the words of this prophecy (vv. 18&ndash;19) is a call to receive Scripture as it is &mdash; not to domesticate its visions into mere symbols, not to inflate it into a newspaper for decoding current events, but to hear it as the word of God that it is, with its full demand and its full promise. This means letting Revelation 22 do what it is designed to do: destabilize our comfort with the status quo, kindle our longing for the new creation, align our loves with what will last, and keep us watchful.",
      "Finally, Revelation 22 calls the church to be a people who say &ldquo;come&rdquo; in two directions simultaneously: upward to the Lord whom they long to see (&ldquo;Come, Lord Jesus&rdquo;), and outward to every thirsty soul they encounter (&ldquo;Come to the water of life&rdquo;). These two cries are not in competition; they are two aspects of the same posture. The community that is most urgently awaiting the Lord&rsquo;s return is the same community that is most urgently inviting others to come before he does. Longing for his coming and laboring for his name go together, and Revelation 22 holds them together on its final pages.",
    ],
  },
];

const videoItems = [
  { videoId: "jCq0WxiC7Eg", title: "Revelation 22 Explained - Come Lord Jesus" },
  { videoId: "18Fn-PPSXPU", title: "BibleProject - Overview of Revelation 8-22" },
  { videoId: "Kv5_oBSBaEg", title: "The Tree of Life and the New Jerusalem - Revelation 21-22" },
  { videoId: "G2g1zzMCLgc", title: "The Final Invitation of Scripture - Revelation 22:17" },
];

export default function Revelation22GuidePage() {
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
            Revelation 22: Come, Lord Jesus
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The final chapter of Scripture &mdash; the river of the water of life, the tree of life in the New Jerusalem, the threefold promise of Christ&rsquo;s return, and the Spirit and the Bride saying &ldquo;Come&rdquo; to every thirsty soul.
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

        <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {videoItems.map((v) => (
            <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId={v.videoId} title={v.title} />
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Spirit and the Bride Say Come</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Revelation 22 is not merely the end of a book &mdash; it is the destination of all history, the reversal of every loss, and the fulfillment of every promise. The river flows; the tree bears fruit; the curse is lifted; his servants see his face. And the last word of Scripture is not a period but an open door: &ldquo;Let the one who is thirsty come.&rdquo; Come.
          </p>
        </div>
      </main>
    </div>
  );
}
