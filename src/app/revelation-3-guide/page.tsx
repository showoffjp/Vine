"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Letter to Sardis",
  "The Faithful Few",
  "Letter to Philadelphia",
  "The Open Door",
  "Letter to Laodicea",
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
    heading: "Overview of Revelation 3",
    reference: "Revelation 3:1&ndash;22",
    paragraphs: [
      "Revelation 3 contains the last three of the seven letters that the risen Christ dictates to John for the churches of Asia Minor (modern western Turkey). Each letter follows a recognizable pattern: Christ introduces himself with a title drawn from the opening vision of chapter 1, delivers an assessment of the church&rsquo;s condition, issues a call to faithfulness or repentance, warns of consequences, and closes with a promise to the one who overcomes. In these three letters the full range of the church&rsquo;s spiritual condition is on display, from near-death to lukewarmness to genuine faithful endurance.",
      "The church at Sardis receives the most alarming diagnosis of all seven churches: &ldquo;You have a reputation for being alive, but you are dead&rdquo; (3:1). Outward form and reputation remain, but the inner life of the Spirit has departed. The church of Philadelphia, by contrast, receives nothing but commendation &mdash; one of only two churches in the seven letters that escape the Lord&rsquo;s rebuke. Small and apparently powerless, they have kept Christ&rsquo;s word and not denied his name, and he promises them an open door that no one can shut.",
      "The letter to Laodicea is the most famous of the seven, and the most devastating. The church there is neither cold nor hot &mdash; it is lukewarm &mdash; and Christ threatens to spit it out of his mouth. Wealthy, self-satisfied, and unaware of its spiritual poverty, Laodicea represents a particular danger for prosperous Christians in every age: the danger of mistaking material comfort for spiritual health, and of being so at ease in the world that the passionate love for Christ has cooled to comfortable indifference.",
      "What holds the three letters together is the theme of appearances versus reality. Sardis appears alive but is dead. Philadelphia appears weak but has real spiritual strength. Laodicea appears prosperous but is spiritually naked and blind. The risen Christ sees through every surface to the truth beneath &mdash; and his letters are the word of the one who holds the seven spirits of God and the seven stars, the one who has the key of David, the one who is the faithful and true witness. He sees what no human observer can see, and he speaks with the authority to make what he sees matter for eternity.",
      "The closing promises to the overcomers in these three letters are among the most breathtaking in all of Revelation. The overcomer in Sardis will be clothed in white and his name will never be erased from the book of life. The overcomer in Philadelphia will be made a pillar in the temple of God, bearing the names of God, the new Jerusalem, and the new name of Christ. The overcomer in Laodicea will sit with Christ on his throne &mdash; the most extravagant promise of the seven letters, given to the most rebuked of the seven churches. Grace abounds even where sin abounded.",
    ],
  },
  {
    id: "Letter to Sardis",
    heading: "The Letter to Sardis",
    reference: "Revelation 3:1&ndash;6",
    paragraphs: [
      "Christ introduces himself to Sardis as the one &ldquo;who has the seven spirits of God and the seven stars&rdquo; (3:1). The seven spirits represent the fullness of the Holy Spirit, the source of all life in the church. The seven stars are the angels or messengers of the seven churches. The Sardis church, which appears to have life but does not, is being addressed by the one who has and gives the very life it lacks &mdash; the one whose Spirit could revive what has all but died, and whose authority extends over the church&rsquo;s own leadership.",
      "The verdict is stark: &ldquo;I know your works. You have a reputation for being alive, but you are dead&rdquo; (3:1b). Sardis was one of the great cities of the ancient world &mdash; once the capital of the Lydian empire, famous for its wealth and its supposedly impregnable citadel. Twice in its history the city had fallen to enemies who scaled the cliffs the inhabitants believed were unassailable, because the guards grew complacent. The church had apparently absorbed the spirit of the city: relying on reputation and past glory, not noticing the decay that had set in beneath the surface.",
      "The assessment is nuanced, not absolute. &ldquo;Wake up, and strengthen what remains and is about to die, for I have not found your works complete in the sight of my God&rdquo; (3:2). Something remains &mdash; the church is not entirely past saving. But what remains is &ldquo;about to die.&rdquo; The call to &ldquo;wake up&rdquo; is urgent. This is the language of crisis, of a patient whose vital signs are failing. The works Christ has found are incomplete, unfinished, not carried through &mdash; a picture of a community that has gone through the motions of Christian life without the animating power of the Spirit.",
      "The remedy given is fourfold: remember what you have received and heard, keep it, repent, and wake up (3:3). Memory is the first move in repentance &mdash; to recall what the gospel actually is and what it demands. The church at Sardis apparently still possessed the apostolic teaching; the problem was not ignorance but neglect. They had heard the word; they were not keeping it. The repentance called for is not merely moral reformation but a return to the living gospel that had once brought life to the congregation.",
      "The warning that follows is severe: &ldquo;If you will not wake up, I will come like a thief, and you will not know at what hour I will come against you&rdquo; (3:3b). The imagery of Christ coming &ldquo;like a thief&rdquo; &mdash; unexpectedly, at an hour unknown &mdash; is used elsewhere in the New Testament of his final coming in judgment (Matthew 24:43; 1 Thessalonians 5:2). Here it seems to refer to a judgment on this particular church: the withdrawal of his presence, the extinction of its lampstand, if repentance does not come. The church that trusts in its reputation to protect it will find, as Sardis found in its history, that the unguarded wall is exactly where the enemy breaks through.",
    ],
  },
  {
    id: "The Faithful Few",
    heading: "The Faithful Few in Sardis",
    reference: "Revelation 3:4&ndash;6",
    paragraphs: [
      "Even in the nearly-dead church of Sardis there is a remnant of true life: &ldquo;Yet you have still a few names in Sardis, people who have not soiled their garments&rdquo; (3:4a). The few who remain unstained are not credited with extraordinary spiritual heroism; they have simply not done what the majority apparently did &mdash; they have not soiled themselves with the compromises, the moral laxity, or the accommodation to surrounding culture that had infected the congregation. In a church full of the spiritually complacent, faithfulness can be a matter of simply not joining the drift.",
      "The promise given to this faithful remnant is charged with meaning: &ldquo;They will walk with me in white, for they are worthy&rdquo; (3:4b). White garments in Revelation consistently represent the righteousness and purity of those who stand before God (7:9, 14; 19:8). To walk with Christ in white is to share in the life of the new creation, clothed not in one&rsquo;s own moral achievement but in the righteousness of the one who stands among the lampstands. The word &ldquo;worthy&rdquo; here does not imply earning the reward; it reflects the assessment of the one who sees truly: these few are, by grace, those to whom white garments rightfully belong.",
      "The promise to the overcomer builds on this image: &ldquo;The one who conquers will be clothed thus in white garments, and I will never blot his name out of the book of life. I will confess his name before my Father and before his angels&rdquo; (3:5). The book of life appears throughout Revelation as the register of those who belong to God and will share in his eternal kingdom (13:8; 17:8; 20:12, 15; 21:27). The promise that the overcomer&rsquo;s name will &ldquo;never&rdquo; be blotted out &mdash; the emphatic double negative in the Greek &mdash; is the strongest possible affirmation of security. No future failure, no accumulating guilt, no enemy accusation can erase what God has written.",
      "The confession before the Father and the angels echoes Jesus&rsquo; own words in the Gospels: &ldquo;So everyone who acknowledges me before men, I also will acknowledge before my Father who is in heaven&rdquo; (Matthew 10:32). In Revelation&rsquo;s vision of the heavenly throne room and the final judgment, this promise takes on its full cosmic weight. The risen Christ, who stands at the right hand of the Father, will name before the assembled hosts of heaven those who kept faith with him in the few remaining years of a fading congregation in a prosperous Roman city. Faithfulness in obscurity is never obscure to the one who holds the stars.",
      "The letter closes with the standard call: &ldquo;He who has an ear, let him hear what the Spirit says to the churches&rdquo; (3:6). The use of the plural &ldquo;churches&rdquo; reminds every reader that no letter is for one congregation only. Sardis&rsquo;s condition &mdash; the church that has a name for life but is dying &mdash; is a perennial danger for Christian communities in every age and culture. The call to wake up, to remember, to repent, and to keep the gospel &mdash; and the promise given to those who do &mdash; are addressed as much to the churches of the twenty-first century as to the churches of Asia Minor in the first.",
    ],
  },
  {
    id: "Letter to Philadelphia",
    heading: "The Letter to Philadelphia",
    reference: "Revelation 3:7&ndash;10",
    paragraphs: [
      "Christ introduces himself to Philadelphia with titles drawn from Isaiah: &ldquo;The words of the holy one, the true one, who has the key of David, who opens and no one will shut, who shuts and no one opens&rdquo; (3:7). The key of David is an image from Isaiah 22:22, where it described the authority of Eliakim, who was set as steward over the house of David with power to open and shut the royal treasury. Applied to the risen Christ, it means that all access to the kingdom of God &mdash; its blessings, its community, its eternal life &mdash; rests in his hands alone. No human institution, no synagogue that has expelled them, no Roman authority can lock or unlock what only Christ controls.",
      "The assessment of the Philadelphia church is almost entirely positive: &ldquo;I know your works. Behold, I have set before you an open door, which no one is able to shut. I know that you have but little power, and yet you have kept my word and have not denied my name&rdquo; (3:8). The church is small and apparently weak &mdash; &ldquo;little power&rdquo; may reflect their small numbers, limited social influence, or lack of prestigious membership. But weakness in the world&rsquo;s eyes and weakness in Christ&rsquo;s eyes are not the same thing. What Christ sees is a community that has kept his word and not denied his name &mdash; two hallmarks of genuine faithfulness.",
      "The open door that Christ has set before them is most likely a door of missionary opportunity &mdash; the same language Paul uses in 1 Corinthians 16:9, 2 Corinthians 2:12, and Colossians 4:3 for open doors of gospel proclamation. The church&rsquo;s apparent weakness makes this promise all the more remarkable: it is the small, powerless congregation that receives the promise of an open door that no opposition can close. God&rsquo;s purposes are not constrained by human estimates of institutional strength. The church that depends on Christ rather than on its own resources finds that Christ&rsquo;s resources are inexhaustible.",
      "Christ also promises to vindicate them before those who have opposed them: &ldquo;Behold, I will make those of the synagogue of Satan who say that they are Jews and are not, but lie &mdash; behold, I will make them come and bow down before your feet, and they will learn that I have loved you&rdquo; (3:9). The Jewish community in Philadelphia had apparently excluded the Christians from the synagogue, perhaps reporting them to Roman authorities, and had done so in the name of religious faithfulness. Christ calls this the &ldquo;synagogue of Satan&rdquo; &mdash; not because Jews as a people are demonic, but because those who claim to be God&rsquo;s people while actively opposing his people are serving the adversary&rsquo;s agenda, whatever their self-understanding.",
      "The promise of verse 10 is one of the most discussed in Revelation: &ldquo;Because you have kept my word about patient endurance, I will keep you from the hour of trial that is coming on the whole world, to try those who dwell on the earth.&rdquo; The phrase &ldquo;keep from&rdquo; (tereo ek) and its precise relationship to the great tribulation passages have fueled centuries of debate about the timing of the rapture and the sequence of end-time events. Whatever the precise eschatological referent, the primary pastoral weight of the promise is clear: the church that has endured faithfully in the present will be kept by Christ through whatever comes. The one who holds the key of David will not abandon those who have not denied his name.",
    ],
  },
  {
    id: "The Open Door",
    heading: "The Key of David and the Open Door",
    reference: "Revelation 3:11&ndash;13",
    paragraphs: [
      "&ldquo;I am coming soon. Hold fast what you have, so that no one may seize your crown&rdquo; (3:11). The exhortation to &ldquo;hold fast&rdquo; is the operative call for the Philadelphia church. They have been faithful; the danger is not that they will fall into gross sin or apostasy but that pressure, weariness, or the allure of compromise might cause them to loosen their grip on what they have already received. The crown in view is the victor&rsquo;s wreath awarded to those who finish the race; to lose it would be to abandon the endurance at the very end that makes the whole of the journey count.",
      "The promise to the overcomer is extraordinary: &ldquo;The one who conquers, I will make him a pillar in the temple of my God. Never shall he go out of it, and I will write on him the name of my God, and the name of the city of my God, the new Jerusalem, which comes down from my God out of heaven, and my own new name&rdquo; (3:12). Philadelphia was a city in an earthquake zone &mdash; it had been devastated by a major earthquake in AD 17 and its population had lived in fear of aftershocks for years, many preferring to camp outside the city rather than risk the unstable buildings. The image of being a pillar in a temple that never needs to be evacuated would have spoken directly to this experience of chronic instability.",
      "To be a pillar in the temple of God is to be a permanent, load-bearing part of the very structure of God&rsquo;s eternal dwelling. The image combines security with dignity &mdash; pillars are both essential and honorable, visible markers of the building&rsquo;s beauty and strength. &ldquo;Never shall he go out of it&rdquo; answers the anxiety of those who had been driven out of the synagogue and feared being driven out of everything: there is one community from which the overcomer will never be expelled, and that is the community of God&rsquo;s eternal temple.",
      "The threefold writing of names on the overcomer &mdash; the name of God, the name of the new Jerusalem, and the new name of Christ &mdash; represents total identification and belonging. In the ancient world, to bear someone&rsquo;s name was to belong to them, to be under their protection and patronage. The overcomer bears the name of God, indicating ownership and protection by the Almighty; the name of the new Jerusalem, indicating citizenship in the eternal city; and the new name of Christ, indicating the intimate new relationship that the consummation of history will bring. Three names, three dimensions of security and belonging.",
      "Once again the letter closes with the call to hear what the Spirit says to the churches. Philadelphia&rsquo;s example stands as a rebuke to the assumption that faithfulness requires numerical strength, social prestige, or institutional power. The church with little power that kept Christ&rsquo;s word and did not deny his name receives promises that dwarf anything the great and powerful of this age can offer: a permanent place in the eternal temple, bearing the very names of the Triune God and his city. The open door no one can shut leads, ultimately, to a home no earthquake can shake and a community no one can expel.",
    ],
  },
  {
    id: "Letter to Laodicea",
    heading: "The Letter to Laodicea",
    reference: "Revelation 3:14&ndash;22",
    paragraphs: [
      "Christ introduces himself to Laodicea as &ldquo;the Amen, the faithful and true witness, the beginning of God&rsquo;s creation&rdquo; (3:14). Each title is a rebuke embedded in a greeting. The Laodiceans are neither faithful nor true in their witness; but Christ is. They have lost sight of the origin and purpose of creation; but Christ is its &ldquo;beginning&rdquo; (arche), its source and governing principle. He who is the faithful and true witness now delivers his verdict, and as with Sardis, the verdict cuts through the comfortable self-assessment of a prosperous congregation to the truth beneath.",
      "&ldquo;I know your works: you are neither cold nor hot. Would that you were either cold or hot! So, because you are lukewarm, and neither hot nor cold, I will spit you out of my mouth&rdquo; (3:15&ndash;16). Laodicea stood near Hierapolis, whose hot springs were famous in the ancient world, and near Colossae, which had cold, refreshing water. Laodicea&rsquo;s own water supply came via aqueduct and arrived tepid &mdash; unrefreshing and unpleasant. The image Christ uses is vivid and visceral: the lukewarm church does not refresh like cold water or warm like hot; it is merely nauseating. The threat to &ldquo;spit you out&rdquo; (literally &ldquo;vomit you out&rdquo;) is the most physically revolting image in the seven letters.",
      "The root of the problem is self-deception rooted in prosperity: &ldquo;For you say, I am rich, I have prospered, and I need nothing, not realizing that you are wretched, pitiful, poor, blind, and naked&rdquo; (3:17). Laodicea was one of the wealthiest cities in Asia Minor &mdash; so wealthy that when a devastating earthquake struck the region in AD 60, the city refused imperial aid and rebuilt entirely from its own resources. The church had absorbed this spirit of self-sufficiency. Material wealth had become a substitute for spiritual reality, and the combination of comfort and religious routine had produced a congregation that no longer felt any need for God.",
      "Christ&rsquo;s remedy is stated with striking imagery drawn from Laodicea&rsquo;s own economy: &ldquo;I counsel you to buy from me gold refined by fire, so that you may be rich, and white garments so that you may clothe yourself and the shame of your nakedness may not be seen, and salve to anoint your eyes, so that you may see&rdquo; (3:18). Laodicea was famous for three things: its banking industry, its wool trade, and its medical school&rsquo;s eye salve. Christ inverts each &mdash; the real gold, real clothing, real healing for blindness all come only from him. The things the city was known for were the very areas in which the church was spiritually bankrupt.",
      "The word that follows is among the most tender in all the letters of Revelation: &ldquo;Those whom I love, I reprove and discipline, so be zealous and repent&rdquo; (3:19). The severity of the rebuke does not mean the absence of love; it is its expression. The God who disciplines is the God who loves as a father loves his children (Hebrews 12:5&ndash;6). The Laodiceans are called not to shame but to zealous repentance &mdash; to exchange comfortable indifference for passionate return. And then Christ does something extraordinary: he stands at the door of the very community he has just threatened to vomit out, and he knocks &mdash; waiting, not forcing &mdash; for anyone within to hear his voice and open the door so he may come in and eat with them (3:20). The rejected guest becomes the patient, longing suitor.",
      "The promise to the overcomer in Laodicea is the most staggering of all seven letters: &ldquo;The one who conquers, I will grant him to sit with me on my throne, as I also conquered and sat down with my Father on his throne&rdquo; (3:21). The repentant, zealous, door-opening overcomer from the most rebuked of the seven churches is promised the most exalted of the seven rewards: to share the throne of the Son of God, as the Son shares the throne of the Father. Grace escalates to the precise measure of the need. Where the church was poorest, the promise is richest. The final word of the seven letters is not condemnation but the widest-open invitation imaginable: anyone who hears, anyone who opens, anyone who overcomes will find themselves seated with Christ in the very heart of eternity.",
    ],
  },
];

const videoItems = [
  { videoId: "wPV4M7C3Xpk", title: "Revelation 3 - Letters to Sardis, Philadelphia, and Laodicea" },
  { videoId: "GzT9hJHqRBE", title: "The Lukewarm Church - What Laodicea Teaches Us Today" },
  { videoId: "m4RqBs7Zd8N", title: "The Open Door - Philadelphia and the Key of David" },
  { videoId: "Hs5pLKjFX2A", title: "I Stand at the Door and Knock - Revelation 3:20 Explained" },
];

export default function Revelation3GuidePage() {
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
            Revelation 3 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Letters to Sardis, Philadelphia, and Laodicea &mdash; the risen Christ speaks to a church that has a reputation for life but is dead, a faithful few who have kept his word, a small church given an open door no one can shut, and a lukewarm church warned to repent before the one who stands at the door and knocks.
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
              Deepen your study of Revelation 3 through these video teachings on the letters to Sardis, Philadelphia, and Laodicea &mdash; the dead church, the faithful church, and the lukewarm church.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Behold, I Stand at the Door and Knock</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Revelation 3 confronts every church with the searching gaze of the risen Christ, who sees through reputation to reality, through apparent weakness to genuine strength, and through comfortable prosperity to spiritual poverty. To Sardis he says: wake up. To Philadelphia he says: hold fast. To Laodicea he says: be zealous and repent. And to all who hear his voice and open the door, he promises a share in his own throne.
          </p>
        </div>
      </main>
    </div>
  );
}
