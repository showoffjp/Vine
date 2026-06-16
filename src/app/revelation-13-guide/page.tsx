"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import VerseRef from "@/components/VerseRef";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#D97706", TEAL = "#0D9488", ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const videoItems = [
  { videoId: "c8fzO3ZWmCk", title: "Revelation 13 - The Beast from the Sea" },
  { videoId: "4Q7I9IWJIl4", title: "The Mark of the Beast 666 Explained - Revelation 13" },
  { videoId: "kEOhyiMQfPM", title: "The False Prophet - Beast from the Earth Revelation 13" },
  { videoId: "pZ0h4VrFqiM", title: "Patient Endurance of the Saints - Revelation 13:10" },
];

const KEY_THEMES = [
  {
    id: "th1",
    color: ROSE,
    title: "The Beast from the Sea: Ten Horns, Seven Heads, the Dragon's Authority (vv. 1-4)",
    body: "And I saw a beast coming out of the sea. It had ten horns and seven heads, with ten crowns on its horns, and on each head a blasphemous name. The beast I saw resembled a leopard, but had feet like those of a bear and a mouth like that of a lion. The dragon gave the beast his power and his throne and great authority. The sea in Revelation (drawing on Daniel 7 and ancient Near Eastern mythology) represents the realm of chaos, the Gentile nations, and the source of evil powers hostile to God. The composite nature of the beast &mdash; leopard, bear, lion &mdash; is explicitly drawn from Daniel 7, where those three animals represent Babylon (lion), Medo-Persia (bear), and Greece (leopard). John&apos;s beast from the sea combines all three, with Rome as the fourth terrifying beast that subsumes them. The beast receives the dragon&apos;s authority: this is the satanic counterfeit of the Father giving all authority to the Son (Matthew 28:18). The whole earth is astonished and follows the beast because it has survived a mortal wound &mdash; a deliberate parody of the resurrection of Christ the Lamb (who appears in Revelation 5 as &ldquo;looking as if it had been slain&rdquo;). They worship the dragon because he has given authority to the beast, and they worship the beast."
  },
  {
    id: "th2",
    color: PURPLE,
    title: "The Beast's Blasphemies and 42 Months of Authority (vv. 5-8)",
    body: "The beast was given a mouth to utter proud words and blasphemies and to exercise its authority for forty-two months. It opened its mouth to blaspheme God, and to slander his name and his dwelling place and those who live in heaven. It was also given power to wage war against God&apos;s holy people and to conquer them. And it was given authority over every tribe, people, language and nation. All inhabitants of the earth will worship the beast &mdash; all whose names have not been written in the Lamb&apos;s book of life. The 42 months is the same symbolic period as the 1,260 days and &ldquo;a time, times and half a time&rdquo; from Revelation 12 and Daniel 7 &mdash; three and a half years, the era of tribulation and apparent beast-power. The word &ldquo;given&rdquo; (Greek: <em>edothe</em>) appears repeatedly: the beast was <em>given</em> a mouth, <em>given</em> authority, <em>given</em> power. This passive divine voice is crucial: even the beast&apos;s power is granted, not self-derived. The beast operates within the limits God has set. The blasphemy consists of the beast claiming the honor, titles, and worship that belong to God alone &mdash; exactly what Roman emperors demanded when they required the title <em>Kyrios</em> (Lord) and divine honors in the imperial cult."
  },
  {
    id: "th3",
    color: TEAL,
    title: "Patient Endurance of the Saints (vv. 9-10)",
    body: "Whoever has ears, let them hear. &ldquo;If anyone is to go into captivity, into captivity they will go. If anyone is to be killed with the sword, with the sword they will be killed.&rdquo; This calls for patient endurance and faithfulness on the part of God&apos;s people. These two verses are among the most important in all of Revelation for understanding the church&apos;s posture under imperial power. John seems to be drawing on Jeremiah 15:2 and 43:11, where God declares that some will go into captivity and some will be killed &mdash; and the appropriate response is not violent resistance but patient endurance (<em>hupomone</em>) and faithfulness (<em>pistis</em>). The church does not fight the beast with the beast&apos;s weapons. It does not respond to imperial violence with revolutionary violence. It bears witness, endures, and entrusts itself to the God who judges justly (1 Peter 2:23). This is not passive resignation; it is active, costly faithfulness that refuses to bow even when the cost is everything."
  },
  {
    id: "th4",
    color: GOLD,
    title: "The Beast from the Earth / The False Prophet (vv. 11-15)",
    body: "Then I saw a second beast, coming out of the earth. It had two horns like a lamb, but it spoke like a dragon. It exercised all the authority of the first beast on its behalf, and made the earth and its inhabitants worship the first beast, whose fatal wound had been healed. And it performed great signs, even causing fire to come down from heaven to the earth in full view of the people. Because of the signs it was given power to perform on behalf of the first beast, it deceived the inhabitants of the earth. It ordered them to set up an image in honor of the beast who was wounded by the sword and yet lived. The beast from the earth is the false prophet (explicitly named in Revelation 16:13, 19:20, 20:10). Its appearance is lamb-like &mdash; two horns like a lamb &mdash; a deliberate parody of Christ the Lamb. But it speaks like a dragon: its words serve the dragon&apos;s agenda. The false prophet&apos;s role is religious: it promotes the worship of the first beast. It performs signs (Greek: <em>semeia</em>) &mdash; including calling fire from heaven, imitating Elijah (1 Kings 18) and the two witnesses of Revelation 11. This is the counterfeit of the Holy Spirit, who in John 16 bears witness to Christ. The unholy trinity is complete: the dragon (counterfeiting the Father), the sea beast (counterfeiting the Son, with his parody resurrection), and the earth beast (counterfeiting the Spirit, the one who makes people worship)."
  },
  {
    id: "th5",
    color: GREEN,
    title: "The Mark of the Beast: Required to Buy or Sell (vv. 16-17)",
    body: "It also forced all people, great and small, rich and poor, free and slave, to receive a mark on their right hands or on their foreheads, so that they could not buy or sell unless they had the mark, which is the name of the beast or the number of its name. The mark (<em>charagma</em>) of the beast is one of the most misunderstood images in Revelation. In its first-century context, the <em>charagma</em> was the official stamp used on commercial documents and the imperial seal on merchandise &mdash; proof of participation in the imperial system. To have the mark is to be identified as a loyal subject of the emperor, participating in the economic system that required the acknowledgment of Caesar&apos;s lordship. In the context of Domitian&apos;s Asia Minor, this meant that Christians who refused to participate in the imperial cult (refusing to confess <em>Kyrios Kaisar</em>) faced economic exclusion: they could not buy or sell in the marketplace, join trade guilds, or participate fully in civic life. The mark on the right hand or forehead deliberately mirrors the <em>phylacteries</em> worn by Jewish men as a sign of covenant loyalty to God (Deuteronomy 6:8). Those who bear the beast&apos;s mark are the covenant people of the beast; those who bear the Lamb&apos;s name on their foreheads (Revelation 14:1) are the covenant people of God."
  },
  {
    id: "th6",
    color: ROSE,
    title: "666: The Number of the Beast, the Number of a Man (vv. 17-18)",
    body: "This calls for wisdom. Let the person who has insight calculate the number of the beast, for it is the number of a man. That number is 666. John invites calculation &mdash; this is a riddle to be solved, not a mystery to remain opaque. The most widely accepted solution uses the ancient practice of <em>gematria</em> (assigning numerical values to letters): in Hebrew letters, &ldquo;Nero Caesar&rdquo; (NRWN QSR) sums to 666. A variant manuscript tradition reads 616, which matches &ldquo;Nero Caesar&rdquo; in Latin letters &mdash; providing a double confirmation of the Nero identification. John&apos;s first readers would have recognized the code immediately: the beast from the sea, the one who wields imperial authority and demands worship, is identified with the Roman emperor whose persecution of Christians was legendary. But the theological significance goes deeper: 7 represents divine perfection or completeness in Revelation&apos;s numerical symbolism. 666 is the number that falls one short of perfection three times over &mdash; ultimate inadequacy, the pretense of divinity that can never achieve it. The beast, for all his power and apparent god-like authority, is still only human, still only fallen, still only a creature in rebellion against his Creator. Every version of beast-power throughout history is 666: impressive, terrifying, and ultimately inadequate."
  },
];

const VERSE_BY_VERSE = [
  {
    id: "v1",
    ref: "13:1",
    title: "The Dragon Stands on the Shore; The Beast Rises from the Sea",
    body: "The dragon stood on the shore of the sea. And I saw a beast coming out of the sea. It had ten horns and seven heads, with ten crowns on its horns, and on each head a blasphemous name. John&apos;s positioning at the end of chapter 12 &mdash; the dragon standing on the shore of the sea, having been expelled from heaven &mdash; sets up chapter 13 perfectly. The dragon, unable to attack the woman directly, summons allies. The beast rises from the sea (<em>thalassa</em>), the symbol of chaos and the Gentile nations in Jewish apocalyptic. The ten horns and seven heads echo Daniel&apos;s fourth beast (Daniel 7:7) and the dragon himself (Revelation 12:3). The crowns are on the horns (political power), not the heads (as with the dragon), suggesting that this beast exercises its authority through distributed political force. The blasphemous names on each head represent the divine titles claimed by Roman emperors: Augustus (&ldquo;the Revered&rdquo;), Divus (&ldquo;Divine&rdquo;), and most provocatively, the demand to be called &ldquo;Lord and God&rdquo; (Domitian&apos;s preferred title, Dominus et Deus)."
  },
  {
    id: "v2",
    ref: "13:2",
    title: "The Composite Beast: Leopard, Bear, Lion",
    body: "The beast I saw resembled a leopard, but had feet like those of a bear and a mouth like that of a lion. The dragon gave the beast his power and his throne and great authority. Daniel 7 presents four separate beasts: a lion (Babylon), a bear (Medo-Persia), a leopard (Greece), and a terrifying beast with iron teeth (Rome). John&apos;s beast from the sea combines all four into one creature &mdash; it is all the empire-powers of history rolled into a single composite entity. This is not merely Rome; it is every political power that has set itself against God and his people, with Rome as the primary contemporary referent. The dragon&apos;s giving of &ldquo;his power and his throne and great authority&rdquo; to the beast is the political counterfeit of the Father&apos;s giving of all authority to the risen Son (Matthew 28:18). Every legitimate government receives its authority from God (Romans 13:1); the beast receives its authority from the dragon &mdash; this is the mark of its illegitimacy."
  },
  {
    id: "v3",
    ref: "13:3-4",
    title: "The Mortal Wound Healed: Parody of Resurrection",
    body: "One of the heads of the beast seemed to have had a fatal wound, but the fatal wound had been healed. The whole world was filled with wonder and followed the beast. People worshiped the dragon because he had given authority to the beast, and they also worshiped the beast and asked, &ldquo;Who is like the beast? Who can wage war against it?&rdquo; The mortal wound healed is the most explicit parody of the resurrection in Revelation. The Lamb appears in Revelation 5:6 as &ldquo;looking as if it had been slain&rdquo; &mdash; death-marks that become the basis for worship. The beast similarly bears marks of a fatal wound, healed &mdash; and this becomes the basis for its worship. The question &ldquo;Who is like the beast?&rdquo; is a dark parody of the Hebrew name Michael, which means &ldquo;Who is like God?&rdquo; The world is seduced by power that survives death &mdash; but this is a counterfeit survival, a lie about resurrection, a demonic imitation of the only true resurrection."
  },
  {
    id: "v4",
    ref: "13:5-8",
    title: "Blasphemy, Authority, and War Against the Saints",
    body: "The beast was given a mouth to utter proud words and blasphemies and to exercise its authority for forty-two months. It opened its mouth to blaspheme God, and to slander his name and his dwelling place and those who live in heaven. It was also given power to wage war against God&apos;s holy people and to conquer them. And it was given authority over every tribe, people, language and nation. All inhabitants of the earth will worship the beast &mdash; all whose names have not been written in the Lamb&apos;s book of life, the Lamb who was slain from the creation of the world. The passive construction &ldquo;was given&rdquo; appears four times in these verses &mdash; a theological passive indicating that God is the ultimate authority behind even the beast&apos;s seeming omnipotence. The 42-month period of beast-power is bounded: it is not forever, it does not have the final word. The book of life is the decisive counter-register: those whose names are written there are not seduced by the beast, regardless of the pressure applied. The Lamb was slain &ldquo;from the creation of the world&rdquo; &mdash; the cross is not Plan B; it is the eternal purpose of God."
  },
  {
    id: "v5",
    ref: "13:9-10",
    title: "The Call to Patient Endurance",
    body: "Whoever has ears, let them hear. &ldquo;If anyone is to go into captivity, into captivity they will go. If anyone is to be killed with the sword, with the sword they will be killed.&rdquo; This calls for patient endurance and faithfulness on the part of God&apos;s people. The phrase &ldquo;whoever has ears, let them hear&rdquo; appears seven times in the letters to the seven churches (Revelation 2-3) &mdash; it is always a call to serious, discerning attention. The language about captivity and the sword is drawn from Jeremiah 15:2, where God declares judgment on unfaithful Israel. John applies it pastorally: the beast will take some captive, will kill some. The appropriate response is not armed resistance but <em>hupomone</em> (patient endurance, steadfast perseverance) and <em>pistis</em> (faith, faithfulness). This is one of the most counter-cultural statements in the entire New Testament. The church in Rome&apos;s cross-hairs is called not to revolutionary violence but to the cross-shaped path of the Lamb: faithful witness unto death."
  },
  {
    id: "v6",
    ref: "13:11-12",
    title: "The Beast from the Earth: Lamb-like, Dragon-voiced",
    body: "Then I saw a second beast, coming out of the earth. It had two horns like a lamb, but it spoke like a dragon. It exercised all the authority of the first beast on its behalf, and made the earth and its inhabitants worship the first beast, whose fatal wound had been healed. The second beast comes from the earth (<em>ge</em>) rather than the sea &mdash; some commentators see this as local (Asian Minor) religious power in the service of Rome, specifically the provincial priests of the imperial cult. The lamb-like appearance (two horns) is the ultimate deception: it looks like the Lamb of God, appears benign and religious, but its voice is the dragon&apos;s. This is Jesus&apos;s warning about false prophets who &ldquo;come to you in sheep&apos;s clothing, but inwardly are ferocious wolves&rdquo; (Matthew 7:15) played out on a cosmic scale. The earth beast&apos;s function is entirely promotional: it exercises authority for the benefit of the sea beast, directing worship toward it."
  },
  {
    id: "v7",
    ref: "13:13-15",
    title: "Signs, the Image, and the Breath of Life",
    body: "And it performed great signs, even causing fire to come down from heaven to the earth in full view of the people. Because of the signs it was given power to perform on behalf of the first beast, it deceived the inhabitants of the earth. It ordered them to set up an image in honor of the beast who was wounded by the sword and yet lived. The second beast was given power to give breath to the image of the first beast, so that the image could speak and cause all who refused to worship the image to be killed. The fire from heaven imitates Elijah (1 Kings 18:38) and the two witnesses of Revelation 11:5. This is the demonic counterfeit of prophetic power. The <em>eikon</em> (image) of the beast recalls the golden image of Nebuchadnezzar in Daniel 3, before which all must bow on pain of death. The breath given to the image (Greek: <em>pneuma</em>) is a parody of God&apos;s breath giving life in Genesis 2:7 and Ezekiel 37:9. The unholy trinity creates an unholy image and fills it with unholy life &mdash; a demonic counterfeit of the creation of humanity in God&apos;s image."
  },
  {
    id: "v8",
    ref: "13:16-18",
    title: "The Mark, the Number, and the Call to Wisdom",
    body: "It also forced all people, great and small, rich and poor, free and slave, to receive a mark on their right hands or on their foreheads, so that they could not buy or sell unless they had the mark, which is the name of the beast or the number of its name. This calls for wisdom. Let the person who has insight calculate the number of the beast, for it is the number of a man. That number is 666. The <em>charagma</em> (mark/brand) was used for the imperial seal on commercial documents, the brand on slaves, and the mark of soldiers. The economic dimension &mdash; &ldquo;could not buy or sell&rdquo; &mdash; points to the real cost of refusing the beast: not merely social exclusion but economic destruction. Trade guilds in first-century Asia Minor required participation in idol feasts and acknowledgment of the guild&apos;s patron deity (often connected to Rome). Christians who refused faced ruin. The calculation of 666: in Hebrew gematria, Nero Caesar (NRWN QSR) = 50+200+6+50+100+60+200 = 666. The variant 616 = Nero Caesar in Latin, providing double confirmation. The number is also a theological statement: 7 is divine perfection; 666 falls short three times."
  },
];

const APPLICATION = [
  {
    id: "ap1",
    color: ROSE,
    title: "Recognizing the Beast Pattern in Every Age",
    body: "Revelation 13 was not written primarily about a single future individual. It was written about a pattern &mdash; the pattern of political power that sets itself against God, demands ultimate allegiance, and enforces that demand through economic coercion and violence. Nero was the primary contemporary referent for John&apos;s first readers; but the beast-pattern recurs. The NT authors themselves see this: Paul writes about the &ldquo;man of lawlessness&rdquo; in 2 Thessalonians 2; John writes about &ldquo;antichrist&rdquo; as a spirit that &ldquo;is already in the world&rdquo; (1 John 4:3). Every political system that demands the absolute loyalty that belongs only to God &mdash; that requires citizens to confess its authority above conscience, above God, above truth &mdash; is operating in the beast-pattern. The question for Christians in every age is not &ldquo;Who is the specific individual who will be the Antichrist?&rdquo; but &ldquo;Where am I being asked to give the beast&apos;s mark &mdash; to place my economic security above my loyalty to Christ?&rdquo;"
  },
  {
    id: "ap2",
    color: PURPLE,
    title: "False Religion: The Earth Beast in Our Time",
    body: "The beast from the earth is perhaps the more subtle and more dangerous of the two beasts, precisely because it looks like a lamb. It is religious in form, prophetic in its signs, and persuasive in its speech &mdash; but it serves the dragon&apos;s agenda. Jesus warned about exactly this: &ldquo;Watch out for false prophets. They come to you in sheep&apos;s clothing, but inwardly they are ferocious wolves. By their fruit you will recognize them&rdquo; (Matthew 7:15-16). The false prophet&apos;s fruit is that it directs worship toward political power rather than God, conflates the nation or empire with the kingdom of God, and uses signs and miracles to consolidate loyalty to an earthly system. In any age, religious leaders who align the church&apos;s witness with the agenda of political power &mdash; who baptize the empire&apos;s agenda with divine authorization &mdash; are functioning in the role of the false prophet. The test is always: toward what or whom does this teaching direct ultimate worship, loyalty, and allegiance?"
  },
  {
    id: "ap3",
    color: TEAL,
    title: "Economic Faithfulness: The Mark and the Modern Marketplace",
    body: "The beast&apos;s mark was fundamentally an economic instrument: &ldquo;so that they could not buy or sell unless they had the mark.&rdquo; The beast uses economic access as a tool of enforcement. In first-century Asia Minor, this was concrete: participation in trade guilds required participation in the imperial cult. Today, the economic dimension of faithfulness looks different but the principle is the same. Where does our economic security tempt us to compromise our confession of Christ? What forms of participation in unjust economic systems are we tempted to excuse because the cost of refusal is too high? The &ldquo;patient endurance and faithfulness&rdquo; called for in verse 10 has an economic dimension: the willingness to accept economic disadvantage rather than bear the beast&apos;s mark &mdash; rather than place our security in the empire&apos;s system above our loyalty to the Lamb."
  },
  {
    id: "ap4",
    color: GOLD,
    title: "Patient Endurance: The Church's Weapon Is Not Violence",
    body: "Revelation 13:10 is one of the most counter-cultural verses in the New Testament: the church&apos;s response to the beast&apos;s power is patient endurance and faithfulness, not violent resistance. This does not mean passive acceptance of injustice &mdash; the prophets of Israel spoke truth to power; Jesus confronted the religious authorities of his day; Paul appealed to Caesar&apos;s courts. But the primary weapon of the church in every age is the same as in Revelation 12:11: the blood of the Lamb and the word of testimony, not the sword. The history of the church&apos;s persecution shows this pattern: the martyrs&apos; faithful deaths were more powerful testimonies than any military victory could have been. Tertullian&apos;s famous statement &mdash; &ldquo;The blood of the martyrs is the seed of the church&rdquo; &mdash; is the historical commentary on Revelation 13:10. The Lamb wins not by conquering Rome&apos;s armies but by filling Rome with his witnesses."
  },
  {
    id: "ap5",
    color: GREEN,
    title: "666 as Theological Truth: The Beast Is Always Inadequate",
    body: "The deepest theological insight in the number 666 is not identification but evaluation. Seven is the number of divine completeness in Revelation; 666 is the number that falls short of perfection three times over. The beast, for all its impressive power &mdash; authority over every tribe, people, language, and nation; the ability to make fire fall from heaven; the power to control who can participate in the economy &mdash; is still inadequate. Still only human. Still only a creature in rebellion. Still operating within the 42 months that God has allotted. The power of Babylon &mdash; of every imperial system that has seemed invincible &mdash; is 666-power: impressive but incomplete, terrifying but temporary, world-dominating but ultimately unable to win. The book of life is the counter-register that 666-power cannot touch. Those whose names are written there will not be ultimately seduced, conquered, or destroyed &mdash; because the Lamb who was slain has already secured the final verdict."
  },
];

export default function Revelation13GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>

        {/* Hero */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: `${ROSE}20`, border: `1px solid ${ROSE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: ROSE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
            Revelation &mdash; Chapter 13
          </div>
          <h1 style={{ fontSize: "clamp(1.5rem,4vw,2.3rem)", fontWeight: 900, color: TEXT, marginBottom: "0.75rem", lineHeight: 1.25 }}>
            Revelation 13: The Beast from the Sea, the Beast from the Earth, and 666
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, maxWidth: 700, fontSize: "1rem" }}
            dangerouslySetInnerHTML={{ __html: "Revelation 13 introduces the unholy trinity: the dragon (Satan), the beast from the sea (Rome/political power/the antichrist pattern), and the beast from the earth (the false prophet/religious power). This is the counterpart to the Holy Trinity &mdash; a satanic parody of Father, Son, and Spirit. The chapter confronts believers with the cost of faithfulness: economic exclusion, persecution, and the demand to worship the beast or bear the consequences. Yet the text ends not with despair but with a call to wisdom and patient endurance." }}
          />
        </div>

        {/* At-a-glance cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "0.75rem", marginBottom: "2rem" }}>
          {[
            ["Book", "Revelation"],
            ["Chapter", "13"],
            ["Verses", "1-18"],
            ["Key Theme", "The Unholy Trinity"],
            ["Key Verse", "Rev 13:10"],
            ["Greek Focus", "charagma (mark)"],
          ].map(([k, v]) => (
            <div key={k} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "0.85rem 1rem" }}>
              <div style={{ color: MUTED, fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{k}</div>
              <div style={{ color: TEXT, fontWeight: 700, fontSize: "0.95rem" }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Context block */}
        <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ color: PURPLE, fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.75rem" }}>Chapter Context</div>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
            dangerouslySetInnerHTML={{ __html: "Revelation 13 follows directly from the dragon&apos;s rage at the end of chapter 12. Having been expelled from heaven and having failed to destroy the woman, the dragon recruits allies: two beasts who will carry out his war against the saints. The chapter introduces the &ldquo;unholy trinity&rdquo; that mirrors and parodies the Holy Trinity: the dragon (counterfeiting the Father&apos;s authority), the beast from the sea (counterfeiting the Son, with his parody resurrection from the mortal wound), and the beast from the earth/false prophet (counterfeiting the Spirit, directing worship to the Son-figure). The Greek words central to this chapter: <em>therion</em> (beast/wild animal), <em>charagma</em> (mark/brand/seal), <em>pneuma</em> (spirit/breath), <em>eikon</em> (image/icon), and <em>arithmos</em> (number). The chapter&apos;s context is the Roman Empire under Domitian (c. AD 95), but its pattern applies wherever political and religious power conspire to demand the worship and absolute loyalty that belong only to God." }}
          />
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveTab(t)}
              style={{
                padding: "0.55rem 1.25rem",
                borderRadius: 20,
                border: `1px solid ${activeTab === t ? PURPLE : BORDER}`,
                background: activeTab === t ? `${PURPLE}22` : "transparent",
                color: activeTab === t ? PURPLE : MUTED,
                fontWeight: activeTab === t ? 700 : 500,
                cursor: "pointer",
                fontSize: "0.875rem",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "Overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: "1.25rem", marginBottom: "1rem" }}>The Unholy Trinity of Revelation 13</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Revelation 12&ndash;13 presents the satanic parody of the Trinity. Just as the Holy Trinity consists of Father, Son, and Holy Spirit &mdash; each distinct, yet sharing one divine purpose &mdash; so the unholy trinity consists of the dragon, the beast from the sea, and the beast from the earth, each playing a role that mirrors and inverts the divine persons." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1rem" }}>
                {[
                  { color: ROSE, label: "The Dragon", role: "Counterfeit Father", desc: "Gives his power and throne to the sea beast &mdash; a parody of the Father giving all authority to the Son (Matthew 28:18)" },
                  { color: PURPLE, label: "The Sea Beast", role: "Counterfeit Son", desc: "Bears a mortal wound that has healed &mdash; a parody resurrection; receives worship as the Father receives it through the Son" },
                  { color: GOLD, label: "The Earth Beast", role: "Counterfeit Spirit", desc: "Speaks not of itself but promotes the sea beast; performs signs; gives breath to the image &mdash; a parody of the Spirit bearing witness to Christ" },
                ].map(c => (
                  <div key={c.label} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                    <div style={{ color: c.color, fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{c.role}</div>
                    <div style={{ color: TEXT, fontWeight: 700, marginBottom: 6 }}>{c.label}</div>
                    <div style={{ color: MUTED, fontSize: "0.82rem", lineHeight: 1.6 }}>{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>Key Symbols Explained</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { sym: "The Sea", meaning: "In Jewish apocalyptic tradition, the sea represents chaos, the Gentile nations, and the source of powers hostile to God (drawing on Daniel 7 and the ancient Near Eastern chaos-sea mythology)." },
                  { sym: "Seven Heads / Ten Horns", meaning: "The same configuration as the dragon in Revelation 12:3 &mdash; the beast derives its structure from the dragon. The ten horns echo Daniel 7:7&apos;s fourth beast; the seven heads represent the totality of world empires." },
                  { sym: "Mortal Wound Healed", meaning: "A parody of the resurrection of Christ. The Lamb appears &ldquo;as if it had been slain&rdquo; in Revelation 5:6; the beast appears to have survived a fatal wound. Death-marks are the basis for worship in both cases, but one is genuine victory over death, the other a counterfeit." },
                  { sym: "The Image (eikon)", meaning: "The image (<em>eikon</em>) set up for worship recalls the golden image of Nebuchadnezzar in Daniel 3. The breath given to the image parodies God breathing life into Adam in Genesis 2:7. To worship the image is to commit idolatry; to refuse is potentially a death sentence." },
                  { sym: "The Mark (charagma)", meaning: "The imperial seal/brand, used on documents, merchandise, and slaves in the Roman world. The mark&apos;s placement &mdash; right hand or forehead &mdash; deliberately mirrors the Jewish <em>phylacteries</em> (Deuteronomy 6:8): the beast claims covenant-loyalty as an economic requirement." },
                  { sym: "666", meaning: "In Hebrew gematria: Nero Caesar = 666. In Latin gematria: 616 (variant manuscripts). Theologically: the number that falls short of divine perfection (7) three times over &mdash; the ultimate inadequacy of human/demonic power posing as divine." },
                ].map(s => (
                  <div key={s.sym} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ background: `${TEAL}20`, border: `1px solid ${TEAL}44`, borderRadius: 8, padding: "2px 10px", fontSize: "0.75rem", color: TEAL, fontWeight: 700, whiteSpace: "nowrap", marginTop: 2 }}>{s.sym}</span>
                    <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.meaning }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>Key Greek Words</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "0.75rem" }}>
                {[
                  { word: "therion", meaning: "beast/wild animal &mdash; an animal ruled by instinct and violence, not reason or restraint; the antithesis of the cultivated human order under God" },
                  { word: "charagma", meaning: "mark/brand/seal &mdash; the imperial stamp used on commercial documents; here, the sign of loyalty to the beast over against God" },
                  { word: "pneuma", meaning: "spirit/breath &mdash; the breath given to the image of the beast parodies God&apos;s breath of life in Genesis 2:7 and Ezekiel 37:9" },
                  { word: "eikon", meaning: "image/icon &mdash; the same word used for human beings made in God&apos;s image (Genesis 1:26) and for Christ as the image of the invisible God (Colossians 1:15)" },
                  { word: "arithmos", meaning: "number &mdash; the number of the beast is also &ldquo;the number of a man&rdquo; or &ldquo;a human number,&rdquo; emphasizing the beast&apos;s creatureliness despite its divine pretensions" },
                ].map(g => (
                  <div key={g.word} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "0.85rem" }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontStyle: "italic", fontSize: "1rem", marginBottom: 4 }}>{g.word}</div>
                    <div style={{ color: MUTED, fontSize: "0.82rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: g.meaning }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.75rem" }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>Video Resources</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((item) => (
                  <div key={item.videoId} style={{ background: BG, borderRadius: 12, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "0.85rem 1rem" }}>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: "0.9rem" }}>{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "Key Themes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem", marginBottom: "0.5rem" }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem" }}>Six Major Themes in Revelation 13</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "Revelation 13 is one of the most misread chapters in all of Scripture &mdash; sensationalized by popular prophecy culture, flattened into a hunt for a single future individual, and stripped of its pastoral power for the present age. Below are the six major themes as they appear in the text, examined in their first-century context and applied to the perennial patterns of beast-power that recur throughout history." }}
              />
            </div>

            {KEY_THEMES.map((theme) => (
              <div key={theme.id} style={{ background: CARD, border: `1px solid ${openTheme === theme.id ? theme.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenTheme(openTheme === theme.id ? null : theme.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "1.1rem 1.3rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <span style={{ color: theme.color, fontWeight: 700, fontSize: "0.95rem", paddingRight: "1rem" }}>{theme.title}</span>
                  <span style={{ color: theme.color, fontSize: "1.2rem", flexShrink: 0 }}>{openTheme === theme.id ? "-" : "+"}</span>
                </button>
                {openTheme === theme.id && (
                  <div style={{ padding: "0 1.3rem 1.2rem", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: "1rem 0 0", fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "Verse by Verse" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem", marginBottom: "0.5rem" }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem" }}>Revelation 13:1-18 &mdash; Verse by Verse</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "A detailed walk through all eighteen verses of Revelation 13, examining the OT background, first-century context, and theological significance of each section. The chapter divides naturally into two halves: the beast from the sea (vv. 1-10) and the beast from the earth (vv. 11-18), with the call to patient endurance at the pivot (vv. 9-10)." }}
              />
            </div>

            {VERSE_BY_VERSE.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${openVerse === item.id ? TEAL : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenVerse(openVerse === item.id ? null : item.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "1.1rem 1.3rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ background: `${TEAL}20`, border: `1px solid ${TEAL}44`, borderRadius: 8, padding: "2px 10px", fontSize: "0.75rem", color: TEAL, fontWeight: 700, whiteSpace: "nowrap" }}>
                      <VerseRef reference={`Revelation ${item.ref}`}>{item.ref}</VerseRef>
                    </span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: "0.9rem" }}>{item.title}</span>
                  </div>
                  <span style={{ color: TEAL, fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>{openVerse === item.id ? "-" : "+"}</span>
                </button>
                {openVerse === item.id && (
                  <div style={{ padding: "0 1.3rem 1.2rem", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: "1rem 0 0", fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${GOLD}`, padding: "1.5rem", marginTop: "0.5rem" }}>
              <div style={{ color: GOLD, fontWeight: 800, marginBottom: "0.75rem", fontSize: "0.95rem" }}>The Call to Wisdom &mdash; Revelation 13:18</div>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem", margin: "0 0 1rem", fontStyle: "italic", color: TEXT, lineHeight: 1.8, fontSize: "1rem" }}>
                &ldquo;This calls for wisdom. Let the person who has insight calculate the number of the beast, for it is the number of a man. That number is 666.&rdquo;
              </blockquote>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.875rem" }}
                dangerouslySetInnerHTML={{ __html: "The invitation to calculate is an invitation to recognize &mdash; to see through the beast&apos;s impressive display of power to its essential nature: human, fallen, inadequate, and temporary. The <em>sophia</em> (wisdom) called for here is the same wisdom that Proverbs describes as rooted in the fear of the Lord: the ability to see reality clearly, to unmask pretension, to evaluate power in the light of God&apos;s ultimate sovereignty. The beast is 666; the Lamb is the eternal Lord." }}
              />
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "Application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem", marginBottom: "0.5rem" }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem" }}>Application: Faithful Witness When the Cost Is Real</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "Revelation 13 was written to believers who faced concrete costs for their faithfulness: they could not participate in trade guilds (and thus could not make a living) if they refused to acknowledge the imperial cult. The chapter does not minimize these costs &mdash; it names them directly and calls for wisdom and patient endurance. Below are five areas where Revelation 13&apos;s theology applies to faithful Christian witness in any age when the cost of following Christ is real." }}
              />
            </div>

            {APPLICATION.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${openApp === item.id ? item.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenApp(openApp === item.id ? null : item.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "1.1rem 1.3rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <span style={{ color: item.color, fontWeight: 700, fontSize: "0.95rem", paddingRight: "1rem" }}>{item.title}</span>
                  <span style={{ color: item.color, fontSize: "1.2rem", flexShrink: 0 }}>{openApp === item.id ? "-" : "+"}</span>
                </button>
                {openApp === item.id && (
                  <div style={{ padding: "0 1.3rem 1.2rem", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: "1rem 0 0", fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${PURPLE}`, padding: "1.5rem", marginTop: "0.5rem" }}>
              <div style={{ color: PURPLE, fontWeight: 800, marginBottom: "0.75rem" }}>Reflection Questions</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Where in your life do you feel the most pressure to place economic security or social belonging above your loyalty to Christ &mdash; to take the beast&apos;s mark rather than bear the cost of the Lamb&apos;s name?",
                  "How do you recognize false prophets in your context &mdash; religious voices that appear lamb-like but are directing worship toward political power, national identity, or cultural ideology rather than toward Christ?",
                  "What would &ldquo;patient endurance and faithfulness&rdquo; (verse 10) look like for you specifically &mdash; not violent resistance, not passive capitulation, but costly witness that accepts disadvantage rather than compromise?",
                  "How does the theological reading of 666 &mdash; the number that falls short of divine completeness three times over &mdash; change how you evaluate the impressive but ultimately inadequate powers that compete for your loyalty?",
                ].map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                    <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", marginRight: 8 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${ROSE}`, padding: "1.5rem", marginTop: "0.5rem" }}>
              <div style={{ color: ROSE, fontWeight: 800, marginBottom: "0.75rem" }}>A Prayer for Discernment and Patient Endurance</div>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "Lord Jesus Christ, Lamb of God &mdash; give me wisdom to recognize the beast&apos;s mark when it is presented to me, often in forms more subtle and seductive than raw power. Give me eyes to see the false prophet&apos;s lamb-like appearance for what it is: the dragon&apos;s agenda wearing a religious costume. Where the cost of faithfulness is economic exclusion, social ostracism, or the loss of influence &mdash; grant me the patient endurance and faithfulness of verse 10, knowing that my name is written in the Lamb&apos;s book of life, that the 42 months are bounded, and that the beast who appears to conquer is already 666: impressive, terrifying, and ultimately inadequate. You are the Alpha and the Omega; 666 will fall; your kingdom will not be destroyed. Amen." }}
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
