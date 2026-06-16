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
  { videoId: "tG_7KA5EFJE", title: "Revelation 10 - The Mighty Angel and the Little Scroll" },
  { videoId: "kEOhyiMQfPM", title: "No More Delay - Revelation 10 Commentary" },
  { videoId: "EJb5bVZsMXw", title: "Sweet Then Bitter - Eating the Scroll Revelation 10" },
  { videoId: "gxzjgBSCWgI", title: "The Mystery of God - Revelation 10:7" },
];

const KEY_THEMES = [
  {
    id: "mighty-angel",
    color: GOLD,
    title: "The Mighty Angel: Cloud, Rainbow, Face Like the Sun, Feet Like Fire (vv.1-4)",
    body: "Revelation 10 opens with one of the most majestic angelic descriptions in all of Scripture. A mighty angel (&ldquo;aggelos ischuros&rdquo;) comes down from heaven, clothed with a cloud, with a rainbow over his head, his face like the sun, and his legs like pillars of fire. He holds a little scroll, open in his hand. He plants his right foot on the sea and his left foot on the land &mdash; a posture of cosmic authority, straddling the created order. His appearance combines motifs from Revelation&rsquo;s own throne vision (the rainbow recalls the one around God&rsquo;s throne in 4:3), Old Testament theophany (the cloud and fire recalling God&rsquo;s appearance on Sinai and in the wilderness pillar), and the vision of the &lsquo;one like a son of man&rsquo; in 1:14-15 (face like the sun, feet like burnished bronze). Some interpreters have identified this angel as the pre-incarnate Christ; others argue that since he is called an angel and John is instructed to take the scroll from him rather than worship him, he is a high-ranking but creaturely angel. Whatever the precise identity, the description marks him as a being of extraordinary divine authority &mdash; a commissioned messenger carrying the very word of God into the created order. His stance with feet on sea and land declares that the word he carries has authority over all the earth."
  },
  {
    id: "seven-thunders",
    color: PURPLE,
    title: "The Seven Thunders and the Sealed Mystery (v.4)",
    body: "When the mighty angel cries out with a loud voice like a lion roaring, seven thunders sound their voices. John is about to write down what the seven thunders said &mdash; but a voice from heaven commands him: &ldquo;Seal up what the seven thunders have said and do not write it down.&rdquo; This is the most remarkable unsealed-sealed paradox in the book of Revelation: a book about divine revelation contains a deliberate gap &mdash; something spoken, heard, and then purposefully suppressed. The seven thunders form a pattern parallel to the seven seals and seven trumpets; they appear to be a third series of seven judgments that is abruptly cut short. Scholars have speculated about their content endlessly &mdash; but the text resists all speculation by design. The command to seal echoes Daniel 8:26 and 12:4, where Daniel is told to seal up his visions. But there is a reversal here: in Daniel, the sealed vision is for a distant time; in Revelation, the seven thunders are spoken in the present and then deliberately suppressed, not deferred. What the text communicates by this omission is itself theological: not all divine purposes are disclosed to human beings. There are mysteries within the mystery of God. Apocalyptic revelation, even in its fullest form, has a boundary &mdash; beyond which only God knows."
  },
  {
    id: "no-more-delay",
    color: ROSE,
    title: "The Oath: No More Delay &mdash; The Mystery of God Will Be Completed (vv.5-7)",
    body: "In one of the most dramatic moments in Revelation, the mighty angel raises his right hand to heaven and swears by the one who lives forever and ever &mdash; who created heaven, earth, the sea, and everything in them &mdash; that there will be no more delay (&ldquo;chronos ouketi estai&rdquo; &mdash; &lsquo;time will be no more&rsquo; or &lsquo;there will be no more delay&rsquo;). This oath echoes Daniel 12:7, where a figure dressed in linen takes an oath over the waters that the fulfillment will come after &lsquo;a time, times, and half a time.&rsquo; The language in v.6 is remarkable: the oath is sworn by God himself, the Creator of all things, in the most comprehensive terms possible (heaven, earth, sea and all they contain). The content of the oath is specified in v.7: when the seventh angel is about to sound his trumpet, the mystery of God (&ldquo;to mysterion tou theou&rdquo;) will be accomplished (&ldquo;telesthe&rdquo; &mdash; completed, fulfilled), just as he announced to his servants the prophets. The &lsquo;mystery of God&rsquo; that will be completed is the full outworking of God&rsquo;s redemptive purposes &mdash; the total reclamation of creation from sin and evil. The prophets were given partial glimpses; the seventh trumpet will bring the complete unveiling. For readers living in the middle of history&rsquo;s apparent chaos, this oath is an anchor: God himself has sworn that the delays will end and the purposes of history will reach their completion."
  },
  {
    id: "eating-scroll",
    color: TEAL,
    title: "Eating the Scroll: Sweet in the Mouth, Bitter in the Stomach (vv.8-10)",
    body: "The second great action of Revelation 10 is the command for John to eat the little scroll. The voice from heaven instructs him: &ldquo;Go, take the scroll that lies open in the hand of the angel.&rdquo; John approaches the mighty angel and asks for the scroll; the angel gives it and tells him to eat it, warning: &ldquo;It will turn your stomach sour, but &lsquo;in your mouth it will be as sweet as honey.&rsquo;&rdquo; John eats it. It is exactly as promised: sweet as honey in the mouth, but when swallowed it turns his stomach sour. This action is one of the most direct allusions in Revelation to an Old Testament prophetic act. In Ezekiel 2:8&mdash;3:3, Ezekiel is commanded to eat a scroll covered with words of lament, mourning, and woe; in his mouth it is as sweet as honey. In Psalm 119:103, God&rsquo;s words are sweeter than honey in the mouth. The sweetness represents the profound delight and nourishment that come from receiving and internalizing divine revelation. But the bitterness points to the cost of bearing a prophetic word that includes judgment: the prophetic vocation is not only a delight but a burden. Jeremiah knew this (&lsquo;Your words became a joy and a delight to me,&rsquo; Jeremiah 15:16; but also: &lsquo;Why did I ever come out of the womb?&rsquo; Jeremiah 20:18). The act of eating &mdash; rather than simply reading or receiving &mdash; signifies the internalization required of a true prophet: the word must become part of the prophet before it can be spoken to others."
  },
  {
    id: "prophesy-again",
    color: GREEN,
    title: "Prophesy Again: The Renewed Commission (v.11)",
    body: "The final verse of Revelation 10 issues a renewed prophetic commission: &ldquo;You must prophesy again about many peoples, nations, languages and kings.&rdquo; This verse marks a structural hinge in the book. Chapter 10 is an interlude between the sixth and seventh trumpets (paralleling the interlude in chapter 7 between the sixth and seventh seals). Like the interlude in chapter 7, which paused to seal and identify the people of God, chapter 10 pauses to recomission the prophet. The command to &lsquo;prophesy again&rsquo; (&ldquo;dei se palin propheteusai&rdquo;) implies that John has been prophesying &mdash; and that the rest of Revelation is the continuation of that prophecy. The universal scope of the commission is significant: &ldquo;many peoples, nations, languages and kings&rdquo; &mdash; the full breadth of the human community, not just Israel or the church. The prophetic word that John has eaten and that has been sweet-then-bitter is now to be spoken to the entire world. The form of that word will include both the sweetness of the gospel and the bitterness of judgment. The prophet does not choose which aspects to deliver; he delivers the whole scroll, as he has eaten it &mdash; sweet and bitter together."
  },
  {
    id: "scroll-symbols",
    color: PURPLE,
    title: "Key Symbols: Cloud, Rainbow, Scroll, Fire Pillars, Thunders",
    body: "Revelation 10 is extraordinarily dense with symbolic imagery, each element carrying a weight of Old Testament and apocalyptic tradition. The cloud in which the mighty angel is clothed echoes the pillar of cloud that led Israel through the wilderness (Exodus 13:21-22) and the cloud of divine presence (shekinah) that filled the tabernacle and temple (Exodus 40:34; 1 Kings 8:10-11). The rainbow over his head recalls not only Revelation 4:3 (the rainbow around God&rsquo;s throne) but Genesis 9:13 &mdash; the covenant sign that God made with all creation after the flood. Its presence signals that even in judgment, the God of covenant mercy is present. The face like the sun and the legs like pillars of fire link the angel to the vision of the glorified Christ in 1:14-16, suggesting that this messenger carries the authority of the risen Lord. The little scroll (&ldquo;biblaridion&rdquo; &mdash; diminutive of &ldquo;biblion,&rdquo; scroll/book) is distinct from the great scroll of the seven seals in chapters 4-8; its small size may signify its specific scope (the prophecy that follows in chapters 11-22) or its accessibility (it is open, available, to be eaten). The feet like pillars of fire echoes Revelation 1:15 and suggests unstoppable divine advance. The seven thunders suggest a parallel judgment series whose content is sealed, establishing the principle that divine purposes exceed what is revealed."
  },
];

const VERSE_SECTIONS = [
  {
    id: "v1",
    color: GOLD,
    title: "Verse 1: The Mighty Angel Descends",
    body: "John sees another mighty angel coming down from heaven, clothed with a cloud, with a rainbow over his head; his face was like the sun, and his legs were like fiery pillars. The word &ldquo;another&rdquo; (Greek: &ldquo;allon&rdquo;) distinguishes this angel from the seven trumpet angels of chapters 8-9. &ldquo;Mighty&rdquo; (&ldquo;ischuros&rdquo;) also described the angel in 5:2 who asked &lsquo;Who is worthy to open the scroll?&rsquo; The combined imagery draws from multiple Old Testament theophanic traditions: the cloud (Exodus 13:21; 1 Kings 8:10-11; Daniel 7:13), the rainbow (Genesis 9:13; Revelation 4:3), the face like the sun (Matthew 17:2; Revelation 1:16), and the legs like fire pillars (Exodus 13:21; Revelation 1:15). The angel&rsquo;s appearance carries the visual vocabulary of divine presence &mdash; he comes as a commissioned representative bearing God&rsquo;s own authority and characteristics. Whether this is Christ himself or a high-ranking angelic messenger remains debated; the description shares features with both the glorified Christ vision (chapter 1) and other angelic figures (14:6-7; 18:1). The descent from heaven signals a new divine action in the narrative."
  },
  {
    id: "v2",
    color: TEAL,
    title: "Verse 2: The Open Scroll; Feet on Sea and Land",
    body: "The mighty angel holds a little scroll (&ldquo;biblaridion&rdquo;) that is open (&ldquo;eneogmenon&rdquo; &mdash; perfect passive participle, indicating it is already opened and remains open). The opened state contrasts sharply with the sealed scroll of chapters 4-8, whose seals were broken one by one. This scroll is immediately accessible &mdash; its contents available to be received. The angel places his right foot on the sea and his left foot on the land &mdash; a posture of cosmic dominion. This stance straddles the two realms that together constitute the habitable world in Revelation&rsquo;s symbolic geography. The sea in Revelation represents chaos, danger, and the source of the beast (13:1); the land is where the earth-dwellers live. The angel&rsquo;s posture declares that the prophetic word he carries has authority over the entire created order &mdash; over chaos and habitation, over danger and security. The image also prepares for v.6, where the oath is sworn by the creator of heaven, earth, sea, and all they contain: the angel&rsquo;s posture enacts the scope of the oath."
  },
  {
    id: "v3",
    color: ROSE,
    title: "Verse 3: The Cry Like a Lion; the Seven Thunders Respond",
    body: "The angel gives a loud cry (&ldquo;ekraxen phone megale&rdquo;) like the roar of a lion. The lion roar is associated in Scripture with divine speech (Amos 3:8: &lsquo;The lion has roared &mdash; who will not fear? The Sovereign Lord has spoken &mdash; who can but prophesy?&rsquo;; Hosea 11:10; Joel 3:16). It is also associated with Christ himself (Revelation 5:5, the Lion of the tribe of Judah). When the angel cries out, the seven thunders speak with their own voices. Thunder in Revelation is consistently associated with the presence and speech of God (4:5: &lsquo;From the throne came flashes of lightning, rumblings and peals of thunder&rsquo;; 8:5; 11:19; 16:18). The number seven gives the thunders the same structure as the seals (6:1 et al.) and trumpets (8:2 et al.), suggesting that what they speak is a complete, sevenfold judgment sequence. But this sequence is immediately suppressed in v.4. The loud cry that summons the seven thunders is itself part of the vision&rsquo;s drama: the mighty angel does not simply deliver a message; he summons the voice of heaven into action."
  },
  {
    id: "v4",
    color: PURPLE,
    title: "Verse 4: Seal Up What the Seven Thunders Said",
    body: "&ldquo;And when the seven thunders spoke, I was about to write; but I heard a voice from heaven say, &lsquo;Seal up what the seven thunders have said and do not write it down.&rsquo;&rdquo; This is one of the most theologically charged moments in Revelation: the writer of the apocalypse is explicitly forbidden to reveal something he has heard. The command to seal echoes Daniel 8:26 (&lsquo;Seal up the vision, for it concerns the distant future&rsquo;) and Daniel 12:4 (&lsquo;Close up and seal the words of the scroll until the time of the end&rsquo;). But here the sealing is different: it is not a deferral to a distant time but a deliberate omission from the revelation itself. The effect is a kind of narrative gap &mdash; an acknowledged mystery within the mystery. The theological implication is profound: even in the fullest act of divine self-disclosure (the book of Revelation), there remain things that God has not chosen to reveal to human beings. Deuteronomy 29:29 comes to mind: &lsquo;The secret things belong to the Lord our God, but the things revealed belong to us and to our children forever.&rsquo; The sealed thunders belong to God; the rest of Revelation belongs to us."
  },
  {
    id: "v5-6",
    color: GOLD,
    title: "Verses 5-6: The Oath Sworn by the Creator &mdash; No More Delay",
    body: "The mighty angel raises his right hand to heaven &mdash; the classic posture of oath-taking, known from Daniel 12:7 and the legal customs of the ancient Near East &mdash; and swears by the one who lives forever and ever, who created heaven and what is in it, the earth and what is in it, and the sea and what is in it, that there will be no more delay. The Greek &ldquo;chronos ouketi estai&rdquo; is sometimes translated &lsquo;time shall be no more&rsquo; but more precisely means &lsquo;there will be no more delay&rsquo; (as in most modern translations). The preceding trumpet visions, the sealed thunders, the interlude itself &mdash; all represent the delays of divine mercy that have allowed time for repentance (cf. 2 Peter 3:9: &lsquo;The Lord is not slow in keeping his promise... but is patient, not wanting anyone to perish, but everyone to come to repentance&rsquo;). Now the angel swears that this period of delay is ending. The scope of the oath &mdash; sworn by the Creator of heaven, earth, and sea &mdash; encompasses all of created reality. The God who made everything is the one who has authorized both the delay and its end. Nothing within creation stands outside his governance of this timeline."
  },
  {
    id: "v7",
    color: TEAL,
    title: "Verse 7: The Mystery of God Will Be Completed",
    body: "&ldquo;But in the days when the seventh angel is about to sound his trumpet, the mystery of God will be accomplished, just as he announced to his servants the prophets.&rdquo; This verse is the theological summit of Revelation 10. &ldquo;The mystery of God&rdquo; (&ldquo;to mysterion tou theou&rdquo;) is the full, comprehensive, long-delayed plan of God for the redemption and reclamation of all things. Paul uses &ldquo;mystery&rdquo; (&ldquo;mysterion&rdquo;) in a similar sense: the mystery hidden for ages but now disclosed in Christ (Colossians 1:26-27; Ephesians 3:3-9). In Revelation, the mystery that will be &ldquo;completed&rdquo; or &ldquo;accomplished&rdquo; (&ldquo;telesthe&rdquo; &mdash; a word related to &ldquo;telos,&rdquo; end/completion) when the seventh trumpet sounds is precisely what chapters 11-22 will unfold: the final judgment of evil, the wedding of the Lamb and the new Jerusalem, the renewal of all creation. The phrase &ldquo;just as he announced to his servants the prophets&rdquo; locates this completion within the long prophetic tradition &mdash; the prophets of Israel glimpsed it partially; Revelation will unfold it in full. The seventh trumpet, when it sounds in 11:15, will indeed bring the declaration: &lsquo;The kingdom of the world has become the kingdom of our Lord and of his Messiah, and he will reign for ever and ever.&rsquo;"
  },
  {
    id: "v8-9",
    color: ROSE,
    title: "Verses 8-9: The Voice Commands; John Approaches and Takes the Scroll",
    body: "The voice from heaven (the same voice that commanded John to seal up the thunders in v.4) now speaks again, instructing John: &ldquo;Go, take the scroll that lies open in the hand of the angel who is standing on the sea and on the land.&rdquo; John goes to the angel and asks for the little scroll. The angel says: &ldquo;Take it and eat it. It will turn your stomach sour, but in your mouth it will be as sweet as honey.&rdquo; The command to eat a scroll directly echoes Ezekiel 2:8&mdash;3:3, where Ezekiel is commanded to eat a scroll before being sent to prophesy to Israel. In Ezekiel, the scroll is covered with words of lament, mourning, and woe &mdash; yet in his mouth it tastes as sweet as honey. The Psalm tradition confirms the sweetness of God&rsquo;s word in the mouth: &ldquo;How sweet are your words to my taste, sweeter than honey to my mouth&rdquo; (Psalm 119:103). But the angel&rsquo;s warning adds what Ezekiel&rsquo;s account implies but does not say so explicitly: the scroll will turn the stomach sour. This bitterness is the internal cost of bearing a word of judgment. The prophet who truly receives and internalizes divine judgment experiences not only the sweetness of divine truth but the grief and distress of carrying a message that includes woe."
  },
  {
    id: "v10",
    color: PURPLE,
    title: "Verse 10: Sweet Then Bitter &mdash; John Eats the Scroll",
    body: "&ldquo;I took the little scroll from the angel&rsquo;s hand and ate it. It tasted as sweet as honey in my mouth, but when I had eaten it, my stomach turned sour.&rdquo; John eats the scroll and reports the experience exactly as the angel predicted. The physical sequence &mdash; sweet taste, sour stomach &mdash; is a bodily enactment of the prophetic word&rsquo;s two-sided character. First the sweetness: receiving divine revelation, being entrusted with God&rsquo;s word, knowing the final purposes of history &mdash; these are profound gifts that the prophet experiences as honey in the mouth. The sweetness is real. The word of God in Psalm 119 is described as sweeter than honey from the honeycomb (v.103), more desirable than gold (v.127). But the sour stomach represents the weight of what the prophet now must carry and proclaim. Jeremiah wept over Israel (Jeremiah 9:1). Ezekiel sat overwhelmed for seven days (Ezekiel 3:15). The prophetic ministry is not merely an intellectual enterprise; it involves the prophets&rsquo; whole persons &mdash; including their bodies, their sleep, their grief. The eating of the scroll signifies that the prophetic word is not external to John but has become part of him; he does not merely relay a message but bears a word that has entered his very body."
  },
  {
    id: "v11",
    color: GREEN,
    title: "Verse 11: The Renewed Commission to Prophesy Again",
    body: "&ldquo;Then I was told, &lsquo;You must prophesy again about many peoples, nations, languages and kings.&rsquo;&rdquo; This final verse of chapter 10 is both a commissioning and a structural signal. &ldquo;You must prophesy again&rdquo; (&ldquo;dei se palin propheteusai&rdquo;) indicates divine necessity (&ldquo;dei&rdquo; &mdash; it is necessary, it must be done) and repetition (&ldquo;palin&rdquo; &mdash; again). The prophecy that follows &mdash; chapters 11-22 &mdash; is not a continuation of a single linear chronology but a renewed, expanded prophetic vision that circles back and approaches the same ultimate reality from new angles. The scope of the commission is maximally universal: &ldquo;many peoples, nations, languages and kings.&rdquo; This fourfold formula appears repeatedly in Revelation (5:9; 7:9; 11:9; 13:7; 14:6; 17:15) and echoes Daniel&rsquo;s descriptions of universal empire (Daniel 3:4; 5:19; 6:25; 7:14). The prophecy is not only for the churches of Asia Minor; it is for the whole of humanity in every age. The scroll John has eaten &mdash; sweet then bitter &mdash; is the content of what follows: a word that is both the sweetest promise of redemption and the most searingly bitter indictment of evil."
  },
];

const APPLICATION_SECTIONS = [
  {
    id: "app1",
    color: TEAL,
    title: "What Does It Mean to &lsquo;Eat&rsquo; God&rsquo;s Word?",
    body: "The central image of Revelation 10 &mdash; John eating the scroll &mdash; raises the most important practical question the chapter poses: what does it mean to internalize God&rsquo;s word? In the biblical tradition, the eating metaphor appears in Ezekiel 2-3, where Ezekiel must eat the scroll before prophesying. Jeremiah says: &lsquo;Your words became a joy and a delight to me&rsquo; (Jeremiah 15:16). Psalm 119 returns again and again to the sweetness and sustaining power of divine words. In the New Testament, Jesus identifies himself as the bread of life (&lsquo;Unless you eat the flesh of the Son of Man... you have no life in you,&rsquo; John 6:53) and quotes Deuteronomy 8:3 (&lsquo;Man does not live on bread alone, but on every word that comes from the mouth of God&rsquo;, Matthew 4:4). The spiritual tradition has long distinguished between reading the Bible as information (external, cognitive) and receiving it as nourishment (internal, transformative). The former treats Scripture as a reference book; the latter treats it as bread. Lectio divina &mdash; the ancient practice of slow, prayerful reading in which the reader allows the text to penetrate beyond the intellect into the heart and will &mdash; is perhaps the closest contemporary equivalent to John&rsquo;s scroll-eating. To truly receive God&rsquo;s word is to let it enter you so deeply that it changes how you feel, think, grieve, and hope &mdash; not merely what you know."
  },
  {
    id: "app2",
    color: ROSE,
    title: "The Bitter Stomach: Why Faithful Proclamation Is Sometimes Costly",
    body: "The bitterness John experiences after eating the scroll is not incidental &mdash; it is part of the prophetic calling. The word of God includes both the sweetness of the gospel and the bitterness of judgment, warning, and lament. Any proclamation that only offers the sweetness without the bitterness has eaten only half the scroll. The pastoral cost of bearing a full prophetic word is real. Jeremiah was thrown into a cistern (Jeremiah 38:6). Ezekiel was overwhelmed and sat in silence for seven days (Ezekiel 3:15). Paul speaks of being hard-pressed, perplexed, persecuted, and struck down (2 Corinthians 4:8-9). In contemporary ministry, the bitterness of the scroll shows up in many forms: the cost of speaking hard truths in a culture that resists them; the grief of watching people you love choose paths that lead to destruction; the weight of interceding for a world in crisis; the sorrow of seeing the church fail to live up to the word it claims. None of this cancels the sweetness. Revelation 10 does not say the scroll became only bitter; it says both experiences were real. The prophet who has truly eaten the scroll carries both simultaneously. This is the mark of genuine prophetic ministry: not cheerful optimism (only sweetness) or bleak doom (only bitterness) but the complex, embodied witness of one who has eaten the whole word."
  },
  {
    id: "app3",
    color: GOLD,
    title: "The End of Delay: What the Oath Means for Prayer and Endurance",
    body: "The oath of the mighty angel in vv.5-6 (&ldquo;there will be no more delay&rdquo;) is one of the most hope-sustaining declarations in the entire Bible for those who live in the middle of history&rsquo;s apparent chaos. The theme of divine delay and the cry &lsquo;How long?&rsquo; runs throughout Scripture: the martyrs under the altar in Revelation 6:10 cry &lsquo;How long?&rsquo;; the psalmists cry &lsquo;How long, O Lord?&rsquo; repeatedly (Psalm 13:1; 35:17; 74:10; 79:5; 80:4; 89:46; 90:13; 94:3); Habakkuk opens with the protest &lsquo;How long, Lord, must I call for help?&rsquo; (Habakkuk 1:2). The oath of Revelation 10 is God&rsquo;s answer to every &lsquo;how long?&rsquo; prayer: the delay has a terminus. The mystery of God &mdash; his full redemptive purpose &mdash; will be completed. This oath does not resolve every question about timing (it is not a calendar; it does not answer when); it resolves the question of whether (yes, it will happen; God himself has sworn). For the suffering church, for those who have prayed for decades for the same broken situation, for those who wonder whether God sees the injustice that seems never to end &mdash; the oath of Revelation 10 is a word of divine commitment: I see it; I have appointed its end; I have sworn by my own name that the delay will not last forever."
  },
  {
    id: "app4",
    color: GREEN,
    title: "Sealed Mysteries and the Humility of Not Knowing Everything",
    body: "The command to seal up what the seven thunders said (v.4) is a gift to the church, though it may not feel like one. The history of biblical interpretation is littered with attempts to fill in the gaps that Scripture leaves unsealed &mdash; to decode what cannot be decoded, to map what has not been disclosed. The sealed thunders of Revelation 10 are a deliberate boundary marker: God has revealed what we need to know; he has not revealed everything. Deuteronomy 29:29 articulates the principle: &lsquo;The secret things belong to the Lord our God, but the things revealed belong to us and to our children forever, that we may follow all the words of this law.&rsquo; The things revealed are for obedience; the secret things belong to God. Healthy Christian reading of Revelation &mdash; and healthy Christian living in general &mdash; requires a certain epistemic humility: we know what God has disclosed; we trust what God has not disclosed. The sealed thunders are not a failure of revelation but a feature of it. God has given us what we need in order to be faithful witnesses; the rest is in his hands. The church that insists on knowing everything beyond what has been revealed tends toward one of two errors: either anxiety (because what cannot be known is treated as a threat) or arrogant speculation (because the gap is filled with human opinion). The sealed thunders say simply: there are things God knows that you do not need to know. Trust the God who sealed them."
  },
];

export default function Revelation10GuidePage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0a0a1a 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ background: GOLD, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>REVELATION</span>
            <span style={{ color: MUTED, fontSize: 14 }}>Chapter 10 &bull; 11 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 900, margin: "0 0 16px", lineHeight: 1.15, color: TEXT }}>
            Revelation 10: The Mighty Angel, the Little Scroll, and the End of Delay
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,2vw,1.1rem)", color: MUTED, maxWidth: 700, lineHeight: 1.75, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "Revelation 10 is an interlude between the sixth and seventh trumpets. A mighty angel descends from heaven, clothed in cloud and rainbow, face like the sun. He carries a little scroll and swears a cosmic oath: there will be no more delay. John is commanded to eat the scroll &mdash; sweet in the mouth, bitter in the stomach &mdash; and to prophesy again to peoples, nations, languages, and kings." }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto", background: CARD }}>
        <div style={{ display: "flex", maxWidth: 900, margin: "0 auto", padding: "0 16px" }}>
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "16px 20px",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
                color: activeTab === t ? GOLD : MUTED,
                borderBottom: activeTab === t ? `2px solid ${GOLD}` : "2px solid transparent",
                transition: "color 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "Overview" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Overview of Revelation 10</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Revelation 10 is one of two major interludes in the trumpet sequence (the other being chapter 7&rsquo;s interlude in the seal sequence). It occurs between the sixth trumpet (chapter 9) and the seventh trumpet (11:15). Like chapter 7, this interlude pauses the judgment sequence to recalibrate the reader&rsquo;s perspective and recommission the prophet. Its three great moments are the vision of the mighty angel (vv.1-4), the oath of no more delay (vv.5-7), and John&rsquo;s eating of the scroll and renewed prophetic commission (vv.8-11)." }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
              {[
                { label: "Book", value: "Revelation" },
                { label: "Chapter", value: "10" },
                { label: "Verse Count", value: "11" },
                { label: "Literary Type", value: "Prophetic interlude" },
                { label: "Position", value: "Between 6th and 7th trumpets" },
                { label: "Central Act", value: "John eats the little scroll" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: TEXT }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12 }}>Structure of Chapter 10</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Revelation 10 divides cleanly into three sections. Verses 1-4 present the vision of the mighty angel and the sealed seven thunders. Verses 5-7 present the cosmic oath that there will be no more delay and that the mystery of God will be completed. Verses 8-11 present the command to eat the scroll, the experience of sweetness-then-bitterness, and the renewed commission to prophesy. The chapter as a whole functions as a hinge: it closes the first half of Revelation&rsquo;s central prophetic section and opens the second half with a renewed commission." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${GOLD}33`, padding: 14 }}>
                  <div style={{ color: GOLD, fontWeight: 700, marginBottom: 8, fontSize: 13 }}>The Vision (vv.1-4)</div>
                  <ul style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, paddingLeft: 14, margin: 0 }}>
                    <li>Mighty angel descends</li>
                    <li>Cloud, rainbow, face like sun</li>
                    <li>Feet like fire pillars</li>
                    <li>Little scroll open in hand</li>
                    <li>Seven thunders speak; sealed</li>
                  </ul>
                </div>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${ROSE}33`, padding: 14 }}>
                  <div style={{ color: ROSE, fontWeight: 700, marginBottom: 8, fontSize: 13 }}>The Oath (vv.5-7)</div>
                  <ul style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, paddingLeft: 14, margin: 0 }}>
                    <li>Angel raises right hand</li>
                    <li>Swears by the Creator</li>
                    <li>No more delay</li>
                    <li>Mystery of God completed</li>
                    <li>At the seventh trumpet</li>
                  </ul>
                </div>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${TEAL}33`, padding: 14 }}>
                  <div style={{ color: TEAL, fontWeight: 700, marginBottom: 8, fontSize: 13 }}>The Commission (vv.8-11)</div>
                  <ul style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, paddingLeft: 14, margin: 0 }}>
                    <li>Take and eat the scroll</li>
                    <li>Sweet in the mouth</li>
                    <li>Bitter in the stomach</li>
                    <li>Prophesy again</li>
                    <li>All peoples, nations, kings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 16, color: TEXT }}>Chapter 10 at a Glance</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "10:1", color: GOLD, label: "Mighty Angel", desc: "Angel clothed with cloud; rainbow over head; face like sun; legs like fire pillars" },
                  { ref: "10:2", color: TEAL, label: "Little Scroll", desc: "Open scroll in hand; right foot on sea, left on land &mdash; cosmic authority" },
                  { ref: "10:3", color: PURPLE, label: "Seven Thunders", desc: "Angel cries like a lion roaring; the seven thunders speak with their voices" },
                  { ref: "10:4", color: ROSE, label: "Sealed Mystery", desc: "John is told: &lsquo;Seal up what the seven thunders said; do not write it down&rsquo;" },
                  { ref: "10:5-6", color: GOLD, label: "The Oath", desc: "Angel raises right hand; swears by the Creator: no more delay" },
                  { ref: "10:7", color: GREEN, label: "Mystery Complete", desc: "At the seventh trumpet, the mystery of God will be accomplished as announced to the prophets" },
                  { ref: "10:8-9", color: TEAL, label: "Command to Eat", desc: "John takes the scroll; angel says: it will be sweet in your mouth, bitter in your stomach" },
                  { ref: "10:10", color: ROSE, label: "Sweet Then Bitter", desc: "John eats; sweet as honey in the mouth; his stomach turns sour" },
                  { ref: "10:11", color: PURPLE, label: "Prophesy Again", desc: "John is commissioned: you must prophesy again about peoples, nations, languages, and kings" },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 13, minWidth: 60, paddingTop: 2 }}>{item.ref}</span>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 13, minWidth: 120, paddingTop: 2 }}>{item.label}</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12 }}>The Interlude Pattern in Revelation</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Revelation uses a consistent structural device: interludes between the sixth and seventh members of each judgment sequence. Between the sixth and seventh seals (chapter 7), the interlude identifies and seals the people of God &mdash; 144,000 from the tribes of Israel and a great multitude from all nations. Between the sixth and seventh trumpets (chapters 10-11), the interlude recommissions the prophet and introduces the two witnesses. These interludes serve a pastoral function: they pause the relentless forward movement of judgment to ask the question &lsquo;Where is the church in all of this?&rsquo; The answer in both interludes is the same: the people of God are not absent from history&rsquo;s great events but are being sealed, equipped, and commissioned within them. The seventh seal (8:1) opened into silence before releasing the trumpets; the seventh trumpet (11:15) will open into the declaration of Christ&rsquo;s eternal reign." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12, color: TEXT }}>Old Testament Background</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Revelation 10 draws primarily on Ezekiel and Daniel, with echoes of Exodus, Psalms, and the prophetic tradition throughout. The scroll-eating echoes Ezekiel 2:8&mdash;3:3 most directly. The cosmic angel&rsquo;s appearance echoes Daniel 10:5-6. The sealed thunders echo Daniel 12:4. The oath formula echoes Daniel 12:7. The face-like-sun imagery echoes both Daniel 10:6 and Revelation 1:16. The cloud and fire pillar recall Exodus 13:21-22. The rainbow recalls Genesis 9:13 and Revelation 4:3. The honey-sweetness of the word echoes Psalm 119:103 and Psalm 19:10." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Ezekiel 2:8",
                  "Ezekiel 3:3",
                  "Daniel 10:5",
                  "Daniel 12:4",
                  "Daniel 12:7",
                  "Psalm 119:103",
                  "Genesis 9:13",
                  "Exodus 13:21",
                  "Amos 3:8",
                ].map(ref => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Key Themes in Revelation 10</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Though only 11 verses, Revelation 10 contains some of the richest theological material in the entire book. Its major themes &mdash; the nature of prophetic commissioning, the sealed mysteries of God, the end of divine delay, and the sweet-then-bitter character of the prophetic word &mdash; have shaped Christian reflection on Scripture, prophecy, and ministry for two millennia." }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {KEY_THEMES.map(section => (
                <div key={section.id} style={{ background: CARD, border: `1px solid ${open === section.id ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpen(open === section.id ? null : section.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                    </div>
                    <span style={{ color: section.color, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>{open === section.id ? "-" : "+"}</span>
                  </button>
                  {open === section.id && (
                    <div style={{ padding: "0 20px 20px 42px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12 }}>Greek Word Study</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
                {[
                  { word: "aggelos", transliteration: "(ANG-el-os)", meaning: "angel or messenger &mdash; the word is the same for both; in Revelation, context determines whether a divine messenger (angel) or human messenger (prophet) is in view. The mighty angel of ch.10 is &lsquo;aggelos ischuros&rsquo; &mdash; a powerful commissioned messenger bearing the very word and authority of God." },
                  { word: "ischuros", transliteration: "(is-khu-ROS)", meaning: "mighty, strong, powerful &mdash; from &lsquo;ischus,&rsquo; strength. Used of the mighty angel here and in 5:2. The word emphasizes not just rank but capacity: this angel has the strength to bear and deliver the word of God on behalf of the Creator of all things." },
                  { word: "chronos", transliteration: "(KHRO-nos)", meaning: "time &mdash; specifically a period or duration of time (as opposed to &lsquo;kairos,&rsquo; an appointed moment). &lsquo;Chronos ouketi estai&rsquo; in v.6 &mdash; &lsquo;time will be no more&rsquo; or &lsquo;there will be no more delay&rsquo; &mdash; declares that the era of divine patience allowing for repentance is ending." },
                  { word: "pikraino", transliteration: "(pi-krai-NO)", meaning: "to make bitter, to embitter &mdash; the verb form of &lsquo;pikros&rsquo; (bitter). In v.10, John&rsquo;s stomach is made bitter after eating the scroll. The same root appears in Colossians 3:19 (&lsquo;husbands, do not be harsh/bitter toward your wives&rsquo;). The bitterness of the prophetic word is the bitterness of bearing a message that includes judgment and grief." },
                  { word: "propheteuo", transliteration: "(pro-phe-TEU-o)", meaning: "to prophesy &mdash; from &lsquo;prophetes&rsquo; (prophet), from &lsquo;pro&rsquo; (before/for) + &lsquo;phemi&rsquo; (speak). Prophesying in the biblical sense is not primarily predicting the future but speaking forth God&rsquo;s word &mdash; declaring his character, purposes, and demands to specific people in specific situations. In v.11, John is commanded to prophesy again to all peoples and nations." },
                ].map(item => (
                  <div key={item.word} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "14px 16px" }}>
                    <div style={{ color: GOLD, fontWeight: 800, fontSize: 16, fontStyle: "italic", marginBottom: 4 }}>{item.word}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginBottom: 6 }}>{item.transliteration}</div>
                    <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.meaning }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>Ezekiel 2-3 Parallel: The Scroll-Eating Tradition</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The most important Old Testament parallel for Revelation 10:8-10 is Ezekiel 2:8&mdash;3:3. The parallels are striking: in both texts, a prophet receives a command to eat a scroll; in both, the scroll is sweet in the mouth; in both, the eating precedes a renewed prophetic commission to speak to a reluctant audience. But there are differences that illuminate Revelation&rsquo;s distinctive development of the tradition. In Ezekiel, the scroll is covered with words of lament, mourning, and woe &mdash; the bitterness is in the content of the message; in Revelation, the scroll is sweet in the mouth but turns the stomach bitter afterward, suggesting that the bitterness is the experience of bearing and proclaiming the word, not merely its content. Ezekiel goes on to prophesy to rebellious Israel; John goes on to prophesy to &lsquo;many peoples, nations, languages and kings&rsquo; &mdash; a universal scope that exceeds Ezekiel&rsquo;s. The shared tradition establishes that the prophetic ministry requires not just reception of the word but internalization of it &mdash; digestion, in the most literal possible metaphor." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${TEAL}33`, padding: 14 }}>
                  <div style={{ color: TEAL, fontWeight: 700, marginBottom: 8 }}>Ezekiel 2:8&mdash;3:3</div>
                  <ul style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, paddingLeft: 14, margin: 0 }}>
                    <li>Scroll covered with lament, mourning, woe</li>
                    <li>Sweet as honey in the mouth</li>
                    <li>Commission to speak to Israel</li>
                    <li>Audience is rebellious and stubborn</li>
                    <li>No explicit mention of bitterness afterward</li>
                  </ul>
                </div>
                <div style={{ background: BG, borderRadius: 10, border: `1px solid ${GOLD}33`, padding: 14 }}>
                  <div style={{ color: GOLD, fontWeight: 700, marginBottom: 8 }}>Revelation 10:8-11</div>
                  <ul style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, paddingLeft: 14, margin: 0 }}>
                    <li>Little scroll already open</li>
                    <li>Sweet as honey in the mouth</li>
                    <li>Commission to speak to all peoples</li>
                    <li>Universal scope: nations, languages, kings</li>
                    <li>Bitterness explicitly follows sweetness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Verse by Verse: Revelation 10:1-11</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "A careful walk through all 11 verses of Revelation 10, examining the structure, Old Testament background, and meaning of each passage. Click any section to expand the commentary." }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {VERSE_SECTIONS.map(section => (
                <div key={section.id} style={{ background: CARD, border: `1px solid ${open === section.id ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpen(open === section.id ? null : section.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                    </div>
                    <span style={{ color: section.color, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>{open === section.id ? "-" : "+"}</span>
                  </button>
                  {open === section.id && (
                    <div style={{ padding: "0 20px 20px 40px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: 24, marginTop: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12 }}>Verse References in Context</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16, fontSize: 14 }}
                dangerouslySetInnerHTML={{ __html: "Hover over any reference to see the verse text. These are the key passages that illuminate Revelation 10&rsquo;s Old Testament background and theological significance." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Revelation 10:1",
                  "Revelation 10:4",
                  "Revelation 10:6",
                  "Revelation 10:7",
                  "Revelation 10:9",
                  "Revelation 10:11",
                  "Ezekiel 3:3",
                  "Daniel 12:7",
                  "Psalm 119:103",
                  "Genesis 9:13",
                  "Amos 3:8",
                  "2 Peter 3:9",
                ].map(ref => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Application: Eating the Word, Bearing the Commission</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Revelation 10 is a chapter about what it means to receive, internalize, and faithfully bear the word of God. The scroll-eating, the sweet-then-bitter experience, the sealed mysteries, and the renewed commission to prophesy again all speak to the nature of the prophetic and pastoral vocation &mdash; and by extension, to every Christian called to bear witness to the word they have received." }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {APPLICATION_SECTIONS.map(section => (
                <div key={section.id} style={{ background: CARD, border: `1px solid ${open === section.id ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpen(open === section.id ? null : section.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                    </div>
                    <span style={{ color: section.color, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>{open === section.id ? "-" : "+"}</span>
                  </button>
                  {open === section.id && (
                    <div style={{ padding: "0 20px 20px 42px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12 }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "John eats the scroll and it is sweet in the mouth but bitter in the stomach. When has receiving a particular word from God been deeply sweet to you &mdash; and when has bearing or proclaiming that word become costly or painful?",
                  "The seven thunders speak and John is told to seal their words. What is your relationship to the things God has not revealed? Are you at peace with the sealed mysteries, or does the unsealed feel threatening? What practices help you trust God with what you cannot know?",
                  "The mighty angel swears: &lsquo;There will be no more delay.&rsquo; For what in your life or the world around you are you crying &lsquo;How long, O Lord?&rsquo; How does the oath of Revelation 10:6 speak to that cry?",
                  "The angel&rsquo;s stance &mdash; right foot on sea, left on land &mdash; declares cosmic authority over the whole created order. In what areas of your life do you struggle to believe that God&rsquo;s word has real authority? What would it look like to invite that word to stand on the &lsquo;sea&rsquo; as well as the &lsquo;land&rsquo; of your experience?",
                  "John is told to &lsquo;prophesy again&rsquo; to peoples, nations, languages, and kings. What does the universal scope of the prophetic commission mean for your own context of witness? Who are the &lsquo;peoples, nations, languages, and kings&rsquo; in your sphere of influence?",
                  "The mystery of God (&lsquo;to mysterion tou theou&rsquo;) will be completed at the seventh trumpet. In what sense do you live in the awareness that history is moving toward a completion that God himself has ordained and sworn? How does that awareness shape your priorities and your hope?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: GOLD, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12 }}>Video Resources: Revelation 10</h3>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Deepen your study of the mighty angel, the little scroll, the oath of no more delay, and the meaning of John&rsquo;s scroll-eating commission through these video resources." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "10px 14px" }}>
                      <div style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `linear-gradient(135deg, #05050f 0%, ${CARD} 100%)`, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: 28 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12 }}>Closing: Sweet Then Bitter &mdash; The Fullness of the Prophetic Word</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Revelation 10 is perhaps the most personal chapter in the entire book. The trumpet visions of chapters 8-9 and the cosmic visions of chapters 4-7 show us the great movements of divine judgment and redemption at the scale of heaven and earth. Revelation 10 zooms in to a single act: a prophet takes a scroll, eats it, and is sent to speak. The sweetness of receiving the word is real and must not be minimized &mdash; the gospel is genuinely good news, the promises of God are genuinely beautiful, the revelation of his purposes is genuinely a gift. But the bitterness that follows in the stomach is equally real: to carry the full word of God &mdash; including its warnings, its laments, its call to costly faithfulness &mdash; is to carry a weight that affects the whole person. The great prophets knew this. John knew this. And every pastor, preacher, teacher, and ordinary Christian who has tried to bear faithful witness to the full counsel of God has known something of this too. Revelation 10 does not call us to choose between the sweetness and the bitterness. It calls us to eat the whole scroll and then to go and speak." }}
              />
              <blockquote style={{ borderLeft: `4px solid ${GOLD}`, paddingLeft: 20, margin: 0 }}>
                <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;You must prophesy again about many peoples, nations, languages and kings.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13 }}>-- Revelation 10:11 (NIV)</cite>
              </blockquote>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
