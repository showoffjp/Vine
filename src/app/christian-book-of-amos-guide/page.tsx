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
  "The Shepherd Prophet",
  "Judgment on the Nations",
  "Let Justice Roll Down",
  "The Visions of Amos",
  "The Promise of Restoration",
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
    id: "The Shepherd Prophet",
    heading: "The Shepherd Prophet",
    reference: "Amos 1; 7",
    paragraphs: [
      "Amos stands among the earliest of the writing prophets, sent by God in the middle of the eighth century before Christ, &ldquo;in the days of Uzziah king of Judah and in the days of Jeroboam the son of Joash, king of Israel, two years before the earthquake&rdquo; (1:1). It was a season of outward prosperity and peace for the northern kingdom, but beneath the surface lay a rot of injustice, greed, and hollow religion that Amos was called to expose.",
      "The prophet himself was no professional clergyman or court official. He was a herdsman from Tekoa, a rugged village in the wilderness of Judah, and a dresser of sycamore figs. By his own testimony he was a man of the soil: &ldquo;I was no prophet, nor a prophet&rsquo;s son, but I was a herdsman and a dresser of sycamore figs. But the Lord took me from following the flock, and the Lord said to me, &lsquo;Go, prophesy to my people Israel&rsquo;&rdquo; (7:14&ndash;15). His authority rested not on training or pedigree but on the bare fact of God&rsquo;s call.",
      "What makes Amos remarkable is that he was a southerner sent north. A man of Judah, he was commissioned to carry a message of judgment to Israel and its religious center at Bethel. This made him an outsider, an unwelcome voice, and his ministry would provoke fierce opposition from those who profited from the very corruption he denounced.",
      "The book opens with a roar: &ldquo;The Lord roars from Zion and utters his voice from Jerusalem; the pastures of the shepherds mourn, and the top of Carmel withers&rdquo; (1:2). The image is of a lion springing on its prey &mdash; God himself rising up against the sin of the nations and of his own people. From the first verse the tone is set: this is a word of warning, urgent and severe, delivered by a shepherd who knew well the sound of a lion in the night.",
      "Amos brought with him the moral clarity of a man who lived close to the earth and far from the corridors of wealth. He had watched the powerful grow fat while the poor were ground down, and he would not soften the message to flatter his hearers. His prophecy stands as a thunderclap of conscience, a reminder that God hears the cry of the oppressed and will not forever overlook injustice cloaked in piety.",
    ],
  },
  {
    id: "Judgment on the Nations",
    heading: "Judgment on the Nations",
    reference: "Amos 1&ndash;2",
    paragraphs: [
      "Amos begins his prophecy with a masterful rhetorical strategy. In a series of oracles against the surrounding nations, he pronounces God&rsquo;s judgment with the repeated formula, &ldquo;For three transgressions of &hellip; and for four, I will not revoke the punishment&rdquo; (1:3 and following). One by one he names the enemies of Israel and the crimes for which they will answer.",
      "He turns first to Damascus, the capital of Syria, condemned for its brutal cruelty in war. Then to Gaza and the Philistine cities for carrying whole peoples into slavery. Then to Tyre for breaking the covenant of brotherhood, to Edom for pursuing his brother with the sword and casting off all pity, to the Ammonites for the savagery of ripping open pregnant women to enlarge their borders, and to Moab for desecrating the bones of the king of Edom.",
      "One can imagine the audience at Bethel nodding in grim approval as the prophet denounces their neighbors and enemies. Each oracle would have been welcome news, a confirmation that God stood against the surrounding pagan powers. The net of judgment seemed to be tightening around everyone but Israel.",
      "But Amos was setting a trap. After circling the foreign nations, he draws the noose closer: judgment falls on Judah, the southern kingdom, &ldquo;because they have rejected the law of the Lord, and have not kept his statutes&rdquo; (2:4). And then, in the climactic and longest oracle of all, the prophet turns the full weight of God&rsquo;s indictment upon Israel itself.",
      "The crimes of Israel are not those of distant pagans but the sins of God&rsquo;s own covenant people: &ldquo;They sell the righteous for silver, and the needy for a pair of sandals &mdash; those who trample the head of the poor into the dust of the earth&rdquo; (2:6&ndash;7). They oppress the weak, abuse the vulnerable, profane the holy, and silence the prophets. The chosen nation, redeemed from Egypt and given the land, had become as guilty as those it despised.",
      "This is the heart of Amos&rsquo;s message and the sting in his rhetoric: privilege does not exempt a people from accountability. &ldquo;You only have I known of all the families of the earth; therefore I will punish you for all your iniquities&rdquo; (3:2). To be chosen by God was not a license to sin but a heightened responsibility, and judgment would begin at the house of God.",
    ],
  },
  {
    id: "Let Justice Roll Down",
    heading: "Let Justice Roll Down",
    reference: "Amos 4&ndash;5",
    paragraphs: [
      "At the core of Amos&rsquo;s prophecy lies a searing denunciation of social injustice. The prophet saw a society where the wealthy elite lived in luxury while the poor were crushed, and he gave voice to God&rsquo;s outrage. He condemns those who &ldquo;turn justice to wormwood and cast down righteousness to the earth&rdquo; (5:7), who &ldquo;trample on the poor and take from him exactions of wheat&rdquo; (5:11).",
      "He singles out the pampered women of Samaria, mocking them as &ldquo;cows of Bashan &hellip; who oppress the poor, who crush the needy, who say to their husbands, &lsquo;Bring, that we may drink&rsquo;&rdquo; (4:1). He decries the corruption of the courts, where the powerful &ldquo;afflict the righteous, who take a bribe, and turn aside the needy in the gate&rdquo; (5:12). The very places meant to secure justice had become instruments of oppression.",
      "Most striking of all is Amos&rsquo;s assault on empty religion. The people of Israel were diligent in their worship &mdash; they kept the feasts, brought their offerings, sang their songs &mdash; yet their devotion was a stench in the nostrils of God because it was divorced from righteousness. The Lord speaks with withering contempt: &ldquo;I hate, I despise your feasts, and I take no delight in your solemn assemblies &hellip; Take away from me the noise of your songs; to the melody of your harps I will not listen&rdquo; (5:21&ndash;23).",
      "God does not want ceremony from people who oppress the poor. What he requires instead is summed up in the book&rsquo;s most famous and enduring verse: &ldquo;But let justice roll down like waters, and righteousness like an ever-flowing stream&rdquo; (5:24). True worship cannot be separated from just living; the God of Israel will not be bought off with sacrifices offered by hands stained with the blood of the poor.",
      "This verse has echoed across the centuries, taken up by reformers and preachers of justice in every age. It captures the prophetic conviction that God&rsquo;s primary concern is not the externals of religion but the moral character of his people &mdash; whether they deal justly, love mercy, and care for the weak. Amos calls his hearers to &ldquo;seek good, and not evil, that you may live&rdquo; (5:14).",
      "Yet the warning is grave, for the people had repeatedly refused to return. In chapter 4 a haunting refrain recounts the disasters God had sent &mdash; famine, drought, blight, pestilence, defeat &mdash; each followed by the sorrowful indictment, &ldquo;yet you did not return to me&rdquo; (4:6 and following). Because they would not turn, Amos issues the dreadful summons: &ldquo;Prepare to meet your God, O Israel!&rdquo; (4:12).",
    ],
  },
  {
    id: "The Visions of Amos",
    heading: "The Visions of Amos",
    reference: "Amos 7&ndash;9",
    paragraphs: [
      "In the closing chapters Amos recounts a series of five visions through which the Lord revealed the certainty and severity of coming judgment. These visions move from warning to finality, charting the hardening of God&rsquo;s resolve against an unrepentant nation.",
      "In the first two visions the prophet sees a swarm of locusts devouring the land and then a consuming fire devouring the great deep. In each case Amos intercedes, crying, &ldquo;O Lord God, please forgive! How can Jacob stand? He is so small!&rdquo; (7:2). And in his mercy the Lord relents: &ldquo;It shall not be,&rdquo; says the Lord (7:3, 6). The prophet&rsquo;s prayers hold back the judgment for a season, a glimpse of God&rsquo;s willingness to forgive.",
      "But in the third vision the tone shifts decisively. Amos sees the Lord standing beside a wall with a plumb line in his hand &mdash; the builder&rsquo;s tool for measuring whether a wall stands true. &ldquo;Behold, I am setting a plumb line in the midst of my people Israel; I will never again pass by them&rdquo; (7:8). Israel had been measured against the standard of God&rsquo;s righteousness and found crooked beyond repair. Here the intercession ceases; the time for relenting has passed.",
      "It is at this point that the priest Amaziah confronts Amos at Bethel, accusing him of conspiracy and ordering him to flee back to Judah: &ldquo;O seer, go, flee away to the land of Judah, and eat bread there, and prophesy there, but never again prophesy at Bethel, for it is the king&rsquo;s sanctuary&rdquo; (7:12&ndash;13). Amos answers with the unflinching reminder that he speaks not by his own choosing but by the call of God.",
      "The fourth vision shows a basket of summer fruit, ripe and ready &mdash; a play on words signaling that the end has come ripe upon Israel. &ldquo;The end has come upon my people Israel; I will never again pass by them&rdquo; (8:2). The prophet foresees a famine not of bread or water but of hearing the words of the Lord (8:11), a terrible silence in which a people who spurned God&rsquo;s word will search for it in vain.",
      "The fifth and final vision is the most awful: the Lord standing beside the altar, commanding that the temple be struck so that it collapses on the heads of the worshipers. There is no escape &mdash; though they dig into Sheol or climb to heaven, though they hide on Carmel or at the bottom of the sea, the hand of God will find them out. The God who measures with the plumb line is also the Lord of all creation, from whom none can flee.",
    ],
  },
  {
    id: "The Promise of Restoration",
    heading: "The Promise of Restoration",
    reference: "Amos 9",
    paragraphs: [
      "After chapter upon chapter of unrelenting judgment, the book of Amos closes with a sudden and breathtaking turn toward hope. The God who roars in justice is also the God who restores in mercy, and the final verses lift the eyes of the reader beyond destruction to a promised renewal.",
      "The Lord declares, &ldquo;In that day I will raise up the booth of David that is fallen and repair its breaches, and raise up its ruins and rebuild it as in the days of old&rdquo; (9:11). The fallen tent of David &mdash; the collapsed dynasty and kingdom &mdash; will be raised again. What sin had torn down, grace would rebuild. The judgment, though real and severe, would not be the final word over the people of God.",
      "This promise reaches beyond Israel to embrace the nations. The restored kingdom of David will draw in &ldquo;all the nations who are called by my name&rdquo; (9:12). The New Testament takes up this very passage at the Council of Jerusalem, where James cites it to show that God had always intended to gather the Gentiles into his people (Acts 15:16&ndash;17). The rebuilt house of David is fulfilled in Christ, the son of David, in whom Jew and Gentile alike find a home.",
      "The closing oracle paints a picture of overflowing abundance: &ldquo;the plowman shall overtake the reaper and the treader of grapes him who sows the seed; the mountains shall drip sweet wine, and all the hills shall flow with it&rdquo; (9:13). The land that mourned under judgment will one day brim with fruitfulness, a vision of restored creation and renewed blessing.",
      "And the final word is one of permanence and belonging: &ldquo;I will plant them on their land, and they shall never again be uprooted out of the land that I have given them, says the Lord your God&rdquo; (9:15). The people who were to be scattered will be planted, secure and at rest, in the gift of God&rsquo;s grace.",
      "So the book that began with a lion&rsquo;s roar ends with a song of restoration. Amos holds together two truths that the modern heart is tempted to separate: that God is fiercely opposed to injustice and false religion, and that God is unfailingly committed to redeem and restore his people. Judgment is real, but mercy has the last word.",
    ],
  },
];

const videoItems = [
  { videoId: "mGgWaPGpGz4", title: "BibleProject - Overview - Amos" },
  { videoId: "Oin2vRWZxgg", title: "The Prophet Amos and the Call for Justice" },
  { videoId: "_AHCFKKvT5Q", title: "Let Justice Roll Down - Amos 5 Explained" },
  { videoId: "1Ae_Kd1qWYg", title: "Introduction to the Minor Prophets - Bible Study" },
];

export default function ChristianBookOfAmosGuidePage() {
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
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of Amos
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The thunderous word of a shepherd from Tekoa &mdash; God&rsquo;s judgment on the nations and on Israel, a fierce cry against injustice and empty religion, the five visions of judgment, and the closing promise to restore the fallen tent of David.
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
              Deepen your study of Amos through visual teaching on the shepherd prophet, his oracles against the nations, his cry for justice to roll down like waters, and the closing promise of restoration.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Let Justice Roll Down Like Waters</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Amos confronts every age with the truth that God will not accept worship from hands that oppress the poor. Yet the lion that roars in judgment is also the Lord who promises to raise up the fallen tent of David &mdash; a hope fulfilled in Christ, in whom mercy has the last word.
          </p>
        </div>
      </main>
    </div>
  );
}
