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
  "Birth Pains and the Gospel",
  "The Abomination and Tribulation",
  "The Coming and Watchfulness",
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
    heading: "Overview of Matthew 24",
    reference: "Matthew 24:1&ndash;51",
    paragraphs: [
      "Matthew chapter 24 is the great prophetic discourse known as the Olivet Discourse, the most sustained word of our Lord concerning the future that the Gospels record. Spoken in the shadow of the temple and then upon the Mount of Olives, it gathers up the certainty of judgment, the troubles of the present age, and the glory of the Son of Man&rsquo;s return into a single solemn and searching word. It is at once a warning, a comfort, and a summons to watchfulness for every generation that waits for the coming of its Lord.",
      "The discourse opens with a startling pronouncement (24:1&ndash;2). As the disciples admire the magnificent buildings of the temple, Jesus declares, &ldquo;There will not be left here one stone upon another that will not be thrown down.&rdquo; The very center of Israel&rsquo;s worship, the pride of the nation, is appointed for destruction, and this announcement sets the disciples&rsquo; minds on fire with questions about when and how the end will come.",
      "On the Mount of Olives they ask him privately for the sign of his coming and of the end of the age (24:3). In answer Jesus describes what he calls &ldquo;the beginning of the birth pains&rdquo; (24:4&ndash;14): the rise of false messiahs, wars and rumors of wars, famines and earthquakes, persecution and betrayal, the cooling of love through lawlessness, and the proclamation of the gospel of the kingdom to all nations before the end comes. These are not the end itself, but the labor pains that precede it.",
      "He then speaks of the abomination of desolation and the great tribulation (24:15&ndash;28), days of distress unequaled from the beginning of the world, when those in Judea must flee without delay. He warns repeatedly against false christs and false prophets who perform great signs to lead astray, if possible, even the elect. The coming of the Son of Man will not be hidden in some inner room but will be as visible as lightning that flashes from the east to the west.",
      "The climax of the discourse is the coming of the Son of Man in power and great glory (24:29&ndash;31). After the tribulation the heavens are shaken, the sign of the Son of Man appears, and he sends his angels to gather his elect from the four winds. From the lesson of the fig tree (24:32&ndash;35) the disciples are to learn to read the season, knowing that when they see all these things, &ldquo;he is near, at the very gates,&rdquo; for though heaven and earth pass away, his words never will.",
      "Yet the day and the hour remain unknown, hidden even from the angels and the Son, known to the Father only (24:36&ndash;44). As in the days of Noah, life will carry on heedlessly until the day breaks unexpectedly, one taken and one left. Therefore the whole chapter presses toward a single charge, sharpened in the parable of the faithful and wicked servant (24:45&ndash;51): &ldquo;Stay awake.&rdquo; Readiness, faithfulness, and watchfulness in the Master&rsquo;s absence are the marks of those who truly wait for his return.",
    ],
  },
  {
    id: "Birth Pains and the Gospel",
    heading: "Birth Pains and the Gospel to All Nations",
    reference: "Matthew 24:1&ndash;14",
    paragraphs: [
      "&ldquo;Jesus left the temple and was going away, when his disciples came to point out to him the buildings of the temple&rdquo; (24:1). The disciples gaze with admiration at the great stones and gilded courts, the wonder of the ancient world and the heart of their nation&rsquo;s worship. But where they see permanence and glory, their Lord sees a house appointed for ruin, and he prepares to speak a word that will overturn all their settled expectations.",
      "&ldquo;You see all these, do you not? Truly, I say to you, there will not be left here one stone upon another that will not be thrown down&rdquo; (24:2). The pronouncement is absolute and devastating. The temple that seemed eternal is doomed to total destruction, not one stone spared. This word would be fulfilled in the terrible siege of Jerusalem, and it stands as a sign that all human glory, even the holiest, must give way before the purposes of God.",
      "&ldquo;Tell us, when will these things be, and what will be the sign of your coming and of the end of the age?&rdquo; (24:3). On the Mount of Olives the disciples press him for the timing and the sign. Their question knits together the fall of the temple and the end of the age, and the Lord&rsquo;s answer weaves through both, for the judgment on Jerusalem becomes a pattern and a foreshadowing of the final judgment of the world.",
      "&ldquo;See that no one leads you astray. For many will come in my name, saying, I am the Christ, and they will lead many astray&rdquo; (24:4&ndash;5). The very first word of the discourse is a warning against deception. The age between his ascension and his return will be marked by false messiahs and false claims, and the disciples must be vigilant, for the danger to the church is not only persecution from without but seduction by counterfeit saviors who borrow his name.",
      "&ldquo;And you will hear of wars and rumors of wars... For nation will rise against nation, and kingdom against kingdom, and there will be famines and earthquakes in various places&rdquo; (24:6&ndash;7). The age will be filled with upheaval, conflict, and disaster, yet the disciples are told, &ldquo;See that you are not alarmed, for this must take place, but the end is not yet.&rdquo; &ldquo;All these are but the beginning of the birth pains&rdquo; (24:8). These troubles are not the end, but the labor that announces a birth still to come.",
      "&ldquo;Then they will deliver you up to tribulation and put you to death, and you will be hated by all nations for my name&rsquo;s sake&rdquo; (24:9). The followers of Christ will share their Master&rsquo;s rejection. Hatred, betrayal, and martyrdom will mark the path of the faithful, and &ldquo;many will fall away and betray one another and hate one another&rdquo; (24:10). The pressure of persecution will test every profession of faith and reveal what is true and what is false.",
      "&ldquo;And because lawlessness will be increased, the love of many will grow cold. But the one who endures to the end will be saved&rdquo; (24:12&ndash;13). As wickedness multiplies, the warmth of love will freeze in many hearts, yet endurance is the mark of genuine faith. &ldquo;And this gospel of the kingdom will be proclaimed throughout the whole world as a testimony to all nations, and then the end will come&rdquo; (24:14). Before the end, the good news must run to every people, and only then does the consummation arrive.",
    ],
  },
  {
    id: "The Abomination and Tribulation",
    heading: "The Abomination of Desolation and the Great Tribulation",
    reference: "Matthew 24:15&ndash;28",
    paragraphs: [
      "&ldquo;So when you see the abomination of desolation spoken of by the prophet Daniel, standing in the holy place (let the reader understand)&rdquo; (24:15). The Lord points back to Daniel&rsquo;s ancient prophecy of a desecrating horror set up in the very sanctuary of God. The parenthetical call to understand signals that this is a sign laden with weight, a marker of the moment when the holy place is profaned and judgment stands at the door.",
      "&ldquo;Then let those who are in Judea flee to the mountains. Let the one who is on the housetop not go down to take what is in his house&rdquo; (24:16&ndash;17). The urgency is total and immediate. There is no time to gather possessions or look back, only time to flee. The warning is so pressing that the man on the roof must not even descend into his house, for the hour of escape is brief and the danger overwhelming.",
      "&ldquo;And alas for women who are pregnant and for those who are nursing infants in those days! Pray that your flight may not be in winter or on a Sabbath&rdquo; (24:19&ndash;20). The Lord&rsquo;s tenderness shows even amid the warning, for he grieves over the helpless who cannot flee swiftly, the mothers burdened with little ones. He bids his people pray that the hardship of the flight may be eased, that winter cold and Sabbath restriction may not add to their distress.",
      "&ldquo;For then there will be great tribulation, such as has not been from the beginning of the world until now, no, and never will be&rdquo; (24:21). Here is the heart of this section, a distress beyond all comparison. The suffering of those days will surpass every horror that came before and every horror that will follow, an unequaled tribulation that strains the very fabric of the world and tests the endurance of the saints to the uttermost.",
      "&ldquo;And if those days had not been cut short, no human being would be saved. But for the sake of the elect those days will be cut short&rdquo; (24:22). The mercy of God shines through the darkness. Were the tribulation allowed to run its full course, none would survive, but for the sake of his chosen ones God shortens the days. The elect are the reason the judgment is restrained, a precious people for whose sake the Lord tempers his severity.",
      "&ldquo;Then if anyone says to you, Look, here is the Christ! or There he is! do not believe it. For false christs and false prophets will arise and perform great signs and wonders&rdquo; (24:23&ndash;24). In days of distress the temptation to grasp at false hope is fierce. Deceivers will arise with such convincing signs that they would lead astray, if possible, even the elect. The disciples are forewarned, that they may not be swept away by counterfeit wonders and false announcements of his presence.",
      "&ldquo;So, if they say to you, Look, he is in the wilderness, do not go out. If they say, Look, he is in the inner rooms, do not believe it&rdquo; (24:26). The coming of the Son of Man will not be a secret whispered in hidden places. &ldquo;For as the lightning comes from the east and shines as far as the west, so will be the coming of the Son of Man&rdquo; (24:27). His appearing will be unmistakable, sudden, and universal, a blaze of glory visible to all, leaving no room for the deceiver&rsquo;s quiet claims.",
    ],
  },
  {
    id: "The Coming and Watchfulness",
    heading: "The Coming of the Son of Man and the Call to Watchfulness",
    reference: "Matthew 24:29&ndash;51",
    paragraphs: [
      "&ldquo;Immediately after the tribulation of those days the sun will be darkened, and the moon will not give its light, and the stars will fall from heaven, and the powers of the heavens will be shaken&rdquo; (24:29). The created order itself convulses at the approach of its King. The lights of heaven fail and the cosmic powers tremble, for the coming of the Son of Man is an event of such magnitude that the very heavens are unmade and remade before his face.",
      "&ldquo;Then will appear the sign of the Son of Man in heaven, and then all the tribes of the earth will mourn, and they will see the Son of Man coming on the clouds of heaven with power and great glory&rdquo; (24:30). The Judge appears at last in open splendor. Every eye beholds him, every tribe mourns, and the long-hidden Lord is revealed in power and great glory, fulfilling the vision of Daniel of one like a son of man coming with the clouds.",
      "&ldquo;And he will send out his angels with a loud trumpet call, and they will gather his elect from the four winds, from one end of heaven to the other&rdquo; (24:31). The same coming that brings judgment to the world brings ingathering to the saints. The angels are dispatched to assemble the chosen people from every corner of the earth, a great harvest home in which the scattered children of God are at last gathered to their King.",
      "&ldquo;From the fig tree learn its lesson: as soon as its branch becomes tender and puts out its leaves, you know that summer is near&rdquo; (24:32). The Lord teaches his people to read the seasons of his providence. &ldquo;So also, when you see all these things, you know that he is near, at the very gates&rdquo; (24:33). The signs are given not to satisfy curiosity but to keep the heart awake and the hope alive, watching for the nearness of the King.",
      "&ldquo;Heaven and earth will pass away, but my words will not pass away&rdquo; (24:35). The whole framework of creation is more fragile than a single word from the lips of Christ. The universe itself will dissolve, but his promises stand unshaken and unbreakable. Here is the bedrock of the believer&rsquo;s confidence, that the word of the Lord endures forever and will surely accomplish all that it foretells.",
      "&ldquo;But concerning that day and hour no one knows, not even the angels of heaven, nor the Son, but the Father only&rdquo; (24:36). The timing is sealed in the secret counsel of God. &ldquo;For as were the days of Noah, so will be the coming of the Son of Man&rdquo; (24:37). Life went on heedlessly until the flood swept them all away, and so it will be again: &ldquo;Two men will be in the field; one is taken and one is left&rdquo; (24:40), a sudden and dividing separation.",
      "&ldquo;Therefore, stay awake, for you do not know on what day your Lord is coming&rdquo; (24:42). The entire discourse converges on this charge. The faithful and wise servant is the one who is found doing his Master&rsquo;s will when the Master returns, while the wicked servant says in his heart, &ldquo;My master is delayed,&rdquo; and falls to abuse and self-indulgence (24:48&ndash;49). His Lord will come on a day he does not expect and will cut him in pieces. Readiness and faithfulness in the long night of waiting are the marks of those who truly love his appearing.",
    ],
  },
];

const videoItems = [
  { videoId: "Km7pVx4Lq9R", title: "BibleProject - The Olivet Discourse and the End of the Age" },
  { videoId: "Nb3cTw8Hs2M", title: "Birth Pains - Reading the Signs of Matthew 24" },
  { videoId: "Pq6fJz1Kn5D", title: "The Abomination of Desolation and the Great Tribulation" },
  { videoId: "Rt9gBx2Cm7L", title: "Coming on the Clouds - The Return of the Son of Man" },
];

export default function Matthew24GuidePage() {
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
            The Gospel of Matthew, Chapter 24
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            In the Olivet Discourse Jesus foretells the destruction of the temple and answers his disciples&rsquo; question about the sign of his coming and the end of the age. He describes the birth pains of false messiahs, wars, famines, and persecution, the abomination of desolation and the great tribulation, the coming of the Son of Man with power and great glory, and the lesson of the fig tree, pressing all toward a single charge: &ldquo;Stay awake, for you do not know on what day your Lord is coming.&rdquo;
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
              Deepen your study of Matthew 24 through visual teaching on the Olivet Discourse and the questions of the disciples, the birth pains of false messiahs, wars, and persecution that mark the present age, the abomination of desolation and the unequaled great tribulation, and the glorious coming of the Son of Man on the clouds of heaven with the call to faithful watchfulness.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Watch, for You Do Not Know the Hour</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Matthew 24 sets the troubles of the present age within the certainty of Christ&rsquo;s return, weaving together the fall of the temple, the birth pains of a groaning world, and the unequaled tribulation that precedes the appearing of the Son of Man in power and great glory. Yet the day and hour remain hidden in the counsel of the Father, and so the whole discourse presses toward a single charge: &ldquo;Stay awake.&rdquo; Faithfulness and readiness through the long night of waiting are the marks of those who truly love his appearing.
          </p>
        </div>
      </main>
    </div>
  );
}
