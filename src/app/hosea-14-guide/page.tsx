"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";
const ACCENT = GREEN;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

type Hos14Tab = "overview" | "themes" | "verse" | "application";

const OVERVIEW_SECTIONS = [
  {
    color: GREEN,
    title: "The Gracious Conclusion of a Difficult Book",
    body: "Hosea 14 arrives as a kind of dawn after the long night of Hosea 4-13. Those chapters are relentless in their accusation: Israel has played the harlot (4:15), forgotten the LORD (8:14), sown the wind and will reap the whirlwind (8:7). They are chapters of exposure, grief, and warning. Hosea 14 does not deny any of that indictment. But it does something extraordinary: it sets all of it aside in order to speak the last word, and the last word is mercy. The prophetic book that began with the names of judgment -- Jezreel, Lo-Ruhamah, Lo-Ammi -- closes with a liturgy of return, a promise of healing, and a wisdom saying about the ways of the LORD. The structure is deliberate: the entire book of Hosea is a movement from judgment to restoration, and chapter 14 is the destination.",
  },
  {
    color: GOLD,
    title: "God Provides the Words of Repentance",
    body: "One of the most theologically striking features of Hosea 14:1-3 is that God does not simply call Israel to return -- he provides the very words they are to use. 'Take with you words and return to the LORD; say to him, Take away all iniquity; accept what is good, and we will pay with bulls the vows of our lips' (14:2). This is extraordinary pastoral care. A people who have wandered so far from God that they no longer even know how to speak to him -- God gives them a script. He meets them not only in their moral failure but in their linguistic helplessness. The words themselves are theologically precise: the confession of iniquity, the request for pardon, the redirection of worship from the physical (actual bulls) to the verbal (the vows of our lips). The prayer of Hosea 14:2-3 is one of the most compressed and complete prayers of repentance in the Old Testament.",
  },
  {
    color: TEAL,
    title: "The Three Renunciations of Hosea 14:3",
    body: "Verse 3 contains a threefold renunciation that is the negative definition of true return. 'Assyria shall not save us; we will not ride on horses; and we will say no more Our God to the work of our hands.' Three things Israel had trusted instead of the LORD are here abandoned: (1) Assyria -- the great superpower to the north and east, which Israel had alternately appeased and courted as a guarantor of security; (2) horses -- the military technology of the age, the ancient equivalent of nuclear deterrence, which Israel had sought in Egypt and elsewhere; (3) idols -- the work of human hands that Israel had worshiped alongside or instead of the LORD. These three renunciations track the three dimensions of misplaced trust: political alliance, military power, and religious syncretism. True repentance in Hosea's vision means saying no to all three.",
  },
  {
    color: PURPLE,
    title: "I Will Love Them Freely: nedavah",
    body: "The divine response in Hosea 14:4 is one of the most arresting declarations in the prophetic literature: 'I will heal their apostasy; I will love them freely, for my anger has turned from them.' The Hebrew word translated 'freely' is nedavah -- a word that in other contexts describes voluntary, freewill offerings. It is love given not under compulsion or legal obligation but from the pure overflow of God's own character. Israel has not earned this love; they have done the opposite. But God's love is not transactional. It is nedavah -- spontaneous, overflowing, given because God is who he is. The declaration that 'my anger has turned from them' does not mean God was mistaken in his anger; it means the anger has done its work. The anger of God in Hosea is not vindictive; it is the anger of a spouse whose heart has been broken. And when the prodigal turns -- or even when God provides the words for the turning -- the anger gives way to the free-flowing love that was always underneath it.",
  },
  {
    color: ROSE,
    title: "The Accumulation of Blossoming Metaphors",
    body: "Hosea 14:5-7 is a cascade of botanical and agricultural imagery that is remarkable in its density and beauty. God will be 'like the dew' to Israel. Israel will blossom like a lily, take root like Lebanon, spread its branches, have 'beauty like the olive tree' and 'fragrance like Lebanon,' dwell again under God's shadow, flourish 'like the grain,' blossom like a vine, and produce wine with 'the fragrance of Lebanon.' The accumulation is intentional. Israel, which had been stripped of its prosperity, its land, and ultimately its national identity, is promised a fullness of restoration that exceeds what it had. Dew, lily, cedar, olive, grain, vine -- these are the basic realities of life in the land, the very things Israel had tried to secure through the Baals. God now promises to give them all, freely, as the natural result of Israel's return to him.",
  },
  {
    color: GREEN,
    title: "The Green Cypress and the Wisdom Conclusion",
    body: "Hosea 14:8 contains one of the most striking divine self-descriptions in the entire Hebrew Bible: 'I am like a green cypress; from me comes your fruit.' The cypress is an evergreen -- it does not lose its leaves, does not go dormant, does not depend on the rains of a good season. God presents himself as the permanent, unfailing source of Israel's fruitfulness. Israel had been going to the Baals for their fruit -- the fertility of flocks and grain and wine. God declares that he was always the source, has always been the source, and will be the source of all fruitfulness for those who return to him. The wisdom conclusion of 14:9 then reframes the entire book: 'Whoever is wise, let him understand these things; whoever is discerning, let him know them; for the ways of the LORD are right, and the upright walk in them, but transgressors stumble in them.' The prophetic book closes as a wisdom text -- an invitation to discern the pattern.",
  },
];

const THEME_ITEMS = [
  {
    color: GREEN,
    title: "God Providing the Words of Repentance",
    body: "The act of God providing Israel with the specific words of their repentance prayer (14:2-3) is one of the most tender moments in the prophetic literature. It reflects a pastoral theology that runs through the entire canon. The disciples ask Jesus, 'Lord, teach us to pray' (Luke 11:1) -- and he gives them the Lord's Prayer. Paul tells us that 'we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words' (Rom 8:26). The pattern is consistent: God does not leave his people to find their own words in the dark. He meets them in their speechlessness. Hosea 14 is the Old Testament instance of this pattern -- and it is particularly poignant because the people who need the words are the same people whose lips had been given to the Baals.",
  },
  {
    color: GOLD,
    title: "The Three Renunciations: No Assyria, No Horses, No Idols",
    body: "The three renunciations of Hosea 14:3 are not merely three items in a list; they represent three categories of misplaced trust that are perennial temptations for the people of God. No Assyria: the temptation to place ultimate security in the protection of a powerful nation or political alliance. No horses: the temptation to trust in military or technological superiority. No idols: the temptation to create manageable deities that serve our agendas rather than worshiping the LORD who makes demands on our lives. These three categories map directly onto contemporary equivalents: the security state, military power, and the gods of consumer capitalism and self-help spirituality. The prayer of Hosea 14 is not merely ancient liturgy; it is a renunciation that each generation must make in the terms of its own temptations.",
  },
  {
    color: TEAL,
    title: "Healing Apostasy as God's Initiative",
    body: "The verb in Hosea 14:4 is theologically critical: 'I will heal their apostasy.' The Hebrew word for apostasy here is meshuvah -- backsliding, turning away, the chronic condition of Israel's covenant unfaithfulness. But the verb 'heal' is God's. Israel did not heal its own apostasy; God did. This is not merely a statement about God's power; it is a statement about the nature of the problem. Apostasy is not primarily a behavioral issue that can be fixed by better effort; it is a disease of the will that requires healing from outside. The same pattern runs through the New Testament: 'for it is God who works in you, both to will and to work for his good pleasure' (Phil 2:13). Even the repentance of verse 1-3 -- Israel turning and speaking the words -- is, in the final analysis, a gift of God's initiating grace. The healing precedes the walking in health.",
  },
  {
    color: PURPLE,
    title: "Dew as Gentle, Life-Giving Divine Presence",
    body: "In the ancient Near East, dew was not a minor meteorological event; it was a crucial source of moisture for crops during the dry summer months when rain was absent. The image of God as dew to Israel (14:5) is therefore an image of quiet, daily, life-sustaining provision. Dew is also notably unlike rain: it is not a dramatic event but a gentle, almost imperceptible presence. It settles in the night when no one is watching, and its effects are revealed in the morning. This makes it a fitting image for the kind of divine presence that does not announce itself with trumpet blasts but quietly sustains life. The contrast with the 'roar' of Amos 1 could not be more marked. The same God who roars from Zion to announce judgment also comes like dew to sustain the life of those who return to him.",
  },
  {
    color: ROSE,
    title: "The Blossoming Metaphors: Lily, Cedar, Olive, Vine",
    body: "The botanical imagery of Hosea 14:5-7 draws on specific associations that would have resonated with an agricultural society. The lily (shoshannah) was a symbol of beauty and fragility -- the very thing that had been crushed by judgment is now promised in abundance. Roots 'like Lebanon' speak of permanence and stability: the cedars of Lebanon were famous for their massive root systems and their resistance to being uprooted. The olive tree was the most valuable agricultural asset in the ancient world -- a symbol not just of prosperity but of multigenerational wealth, since olive trees take decades to mature. The vine (with the fragrance and wine of Lebanon) completes the picture of agricultural abundance. Together these images promise that Israel's restoration will be not merely the restoration of what was lost but a fullness of life that is beautiful, stable, valuable, and productive.",
  },
  {
    color: GREEN,
    title: "nedavah: Free-Will Love, Not Coerced",
    body: "The word nedavah in Hosea 14:4 has a legal and cultic background: it refers to offerings made not because they were required by the law but because the worshiper chose to give them freely, from a heart of devotion. When God says he will love Israel with nedavah love, he is borrowing this category and applying it to his own commitment. He will love Israel not because he is under any obligation to do so -- they have forfeited every claim on his covenant faithfulness -- but because he chooses to, freely, from the overflow of his own nature. This is the closest the Old Testament comes to what the New Testament will call 'grace' (Greek: charis) in the technical Pauline sense: unmerited, unconditioned, freely bestowed. John's statement that 'God is love' (1 John 4:8) is the New Testament way of saying what Hosea 14:4 shows in action: the love that flows from God's character rather than from any claim Israel has on him.",
  },
  {
    color: GOLD,
    title: "The Green Cypress as Divine Shelter and Fruitfulness",
    body: "The image of God as a green cypress (14:8) is unique in the Hebrew Bible -- nowhere else does God use a tree as a self-description. It carries two distinct ideas: shelter and fruit. Cypresses were used in the ancient world for shade and shelter; their evergreen canopy provided constant cover. They were also known as sources of wood, resin, and fragrance. 'From me comes your fruit' -- God is not merely the ground from which Israel's fruitfulness springs; he is the tree that bears the fruit. Israel does not produce fruit independently and then offer it to God; the fruit itself comes from God. This is a radical statement about the relationship between divine initiative and human flourishing. It anticipates Jesus's words in John 15:5: 'apart from me you can do nothing.'",
  },
  {
    color: TEAL,
    title: "Wisdom as the Conclusion of the Prophetic Book",
    body: "The closing verse of Hosea (14:9) is explicitly sapiential -- it belongs to the genre of wisdom literature (Proverbs, Ecclesiastes): 'Whoever is wise, let him understand these things; whoever is discerning, let him know them; for the ways of the LORD are right, and the upright walk in them, but transgressors stumble in them.' This conclusion reframes the entire book. The prophetic oracles of Hosea are not merely historical messages to eighth-century Israel; they are wisdom for every generation. The pattern they reveal -- unfaithfulness leads to stumbling, return leads to fruitfulness -- is not a one-time historical event but a permanent feature of moral reality. The book of Hosea ends as an invitation to wisdom, to understanding the ways of the LORD, to choosing to be one of those who walk in them rather than those who stumble.",
  },
  {
    color: PURPLE,
    title: "The Righteous and Transgressors in the Same Paths",
    body: "The final verse of Hosea is theologically dense in a way that rewards careful reading: 'the ways of the LORD are right, and the upright walk in them, but transgressors stumble in them.' Both the upright and the transgressors are in the same paths -- 'the ways of the LORD.' But their experience of those ways is diametrically opposite. The upright walk; the transgressors stumble. This is not because the ways of God are different for different people; it is because the orientation of the person determines whether the path is life or death. The same word of God that calls the repentant home is a stumbling block to the one who refuses to repent. This paradox runs through the New Testament as well: the stone that the builders rejected (Ps 118:22) is the cornerstone for believers but a stumbling stone for those who disobey (1 Pet 2:7-8).",
  },
];

const VERSE_SECTIONS = [
  {
    ref: "Hosea 14:1",
    color: ROSE,
    title: "Return, O Israel: The Opening Call",
    body: "The chapter opens with an urgent call: 'Return, O Israel, to the LORD your God, for you have stumbled because of your iniquity' (14:1). The verb 'return' (shuv) is one of the most important words in the entire book of Hosea -- it appears repeatedly throughout the prophecy, always in the sense of turning back to the LORD from whom Israel has departed. The diagnosis is simple and direct: Israel has stumbled (kshalt) because of its iniquity. The fall is not explained in terms of external forces or political circumstances; it is iniquity that has caused the stumbling. This opening verse sets up the chapter's structure: first the diagnosis (stumbling because of iniquity), then the prescription (take with you words and return), then the promise (healing, free love, fruitfulness). The movement from stumbling to walking in the right ways of the LORD (14:9) is the arc of the entire chapter.",
  },
  {
    ref: "Hosea 14:2-3",
    color: PURPLE,
    title: "Take With You Words: The Prayer God Provides",
    body: "Verses 2-3 contain the prayer that God himself provides for Israel: 'Take with you words and return to the LORD; say to him, Take away all iniquity; accept what is good, and we will pay with bulls the vows of our lips. Assyria shall not save us; we will not ride on horses; and we will say no more Our God to the work of our hands. In you the orphan finds mercy.' The prayer has three movements: (1) a request for the removal of iniquity and acceptance of what is good; (2) the three renunciations of misplaced trust; (3) a declaration of the LORD as the helper of the orphan (which may be Israel's self-description in its helplessness). The phrase 'the vows of our lips' (literally 'bulls, our lips') is a wordplay: the expensive animal sacrifice is replaced by the verbal offering of lips consecrated to the LORD. This anticipates Hebrews 13:15: 'Through him then let us continually offer up a sacrifice of praise to God, that is, the fruit of lips that acknowledge his name.'",
  },
  {
    ref: "Hosea 14:4",
    color: GREEN,
    title: "I Will Heal Their Apostasy: The Divine Response",
    body: "The divine response to the prayer of 14:2-3 comes immediately in verse 4: 'I will heal their apostasy; I will love them freely, for my anger has turned from them.' Three declarations mark this as one of the great restoration promises in the Hebrew Bible. First: 'I will heal their apostasy' -- God does not merely forgive the record of Israel's wandering; he heals the disease of the will that produced it. Second: 'I will love them freely (nedavah)' -- the love God offers is not a calculated response to Israel's repentance but an outflowing of his own character, the way a freewill offering springs from devotion rather than obligation. Third: 'my anger has turned from them' -- the anger of God in Hosea has always been the anger of a faithful spouse whose covenant partner has been unfaithful. That anger is real and moral and just. But when Israel turns, the anger has accomplished its purpose, and what remains is the love that was always underneath. The logical structure is not: Israel repents therefore God loves; it is: God heals therefore Israel can repent therefore God pours out love freely.",
  },
  {
    ref: "Hosea 14:5-7",
    color: TEAL,
    title: "I Will Be Like the Dew: The Botanical Promise",
    body: "Verses 5-7 are among the most lyrical in the entire prophetic corpus: 'I will be like the dew to Israel; he shall blossom like the lily and take root like the trees of Lebanon; his shoots shall spread out; his beauty shall be like the olive tree, and his fragrance like Lebanon. They shall return and dwell under my shadow; they shall flourish like the grain; they shall blossom like the vine; their fame shall be like the wine of Lebanon.' Seven images in three verses: dew, lily, Lebanon roots, olive, Lebanon fragrance, grain, vine. The God who earlier in Hosea accused Israel of running after the Baals for grain and wine (2:8) now himself promises to be the source of grain and wine -- and of beauty and fragrance and deep roots as well. The phrase 'dwell under my shadow' (14:7) recalls the protective shadow of the booth at the feast of Tabernacles and looks forward to the eschatological rest under God's own shelter. The restoration Israel sought through foreign alliances and idol worship was available from God all along.",
  },
  {
    ref: "Hosea 14:8",
    color: GOLD,
    title: "O Ephraim, What Have I to Do with Idols?",
    body: "Verse 8 is a dialogue -- perhaps between God and Ephraim (the northern kingdom), perhaps a dramatic monologue: 'O Ephraim, what have I to do with idols? It is I who answer and look after you. I am like a green cypress; from me comes your fruit.' The rhetorical question 'What have I to do with idols?' expects the answer: nothing. God cannot be compared to idols; they are not in the same category. But the question also reflects God's astonishment that Israel would choose idols when he was available. The claim 'It is I who answer and look after you' is a direct contrast with the silence of idols: the Baals who do not speak, do not hear, do not answer. God answers. God looks after. And then the remarkable botanical self-description: 'I am like a green cypress; from me comes your fruit.' This is the corrective to all of Israel's misplaced agricultural piety. The fruitfulness they sought from the fertility gods was always available from the LORD.",
  },
  {
    ref: "Hosea 14:9",
    color: PURPLE,
    title: "The Wisdom Conclusion: The Ways of the LORD",
    body: "The final verse of Hosea is the hinge on which the book turns from prophecy to wisdom: 'Whoever is wise, let him understand these things; whoever is discerning, let him know them; for the ways of the LORD are right, and the upright walk in them, but transgressors stumble in them.' The verse functions as an editorial conclusion that invites the reader to take the whole book of Hosea as a wisdom text. The 'ways of the LORD' that are right are the patterns of the covenant: faithfulness is life, unfaithfulness is stumbling and death. These are not arbitrary rules; they are the grain of the moral universe. Walking in them is what humans were made for. Stumbling against them is the consequence of living against our nature as covenant people. The verse ends on a word of judgment ('transgressors stumble') but the overall movement of chapter 14 -- from stumbling (v. 1) to blossoming (vv. 5-7) -- shows that the stumbling is not the final word for those who take with them words and return.",
  },
];

const APPLICATION_ITEMS = [
  {
    color: GREEN,
    title: "Receiving the Words God Gives Us for Repentance",
    body: "One of the most practical gifts of Hosea 14 is the model of God providing the words of repentance. Many people remain in a state of chronic spiritual distance from God not because they are unwilling to return but because they do not know how to begin. The silence feels impenetrable. Hosea 14:2-3 offers a starting point: take these words. Take away all iniquity. Accept what is good. We will pay with the vows of our lips. There is profound relief in having a prayer given to you. The Psalms function the same way -- they give voice to experiences (lament, praise, confusion, trust) that we cannot articulate on our own. Hosea 14 is a scriptural template for the prayer of return, and it is offered precisely to those who have stumbled because of their iniquity. You do not have to find eloquent words. Take these.",
  },
  {
    color: GOLD,
    title: "Making the Three Renunciations Our Own",
    body: "The three renunciations of Hosea 14:3 -- no Assyria, no horses, no idols -- are not merely ancient political renunciations. They are a template for the contemporary act of return. What is your Assyria -- the political or institutional power you have been trusting for security that only God can provide? What are your horses -- the technological advantage, the financial firewall, the career strategy that you have been relying on as your ultimate backup plan? What are the works of your hands -- the manageable, controllable spiritual alternatives to the demanding love of the real God? The act of return that Hosea 14 calls for involves naming these substitutes honestly and making the same threefold renunciation that God provides in the liturgy of verse 3. This is not a one-time event for most of us; it is a practice of regular, honest renegotiation of our actual allegiances.",
  },
  {
    color: TEAL,
    title: "Experiencing God's Healing of Long-Standing Patterns",
    body: "The promise 'I will heal their apostasy' (14:4) addresses something deeper than individual sins -- it addresses the pattern, the chronic disposition, the backsliding tendency (meshuvah) that keeps reasserting itself even after sincere repentance. Many people know the experience of returning to God, experiencing restoration, and then finding themselves gradually drifting again, stumbling again, in need of return again. Hosea 14 does not dismiss this experience; it addresses it at the level of healing rather than merely behavior management. The promise is not merely that God will forgive the latest episode; it is that he will heal the apostasy itself -- the deep orientation of the heart toward the Baals, toward self-sufficiency, toward the works of human hands. This kind of healing is not instantaneous in human experience, but it is what God promises. And the promise is enough to keep returning.",
  },
  {
    color: PURPLE,
    title: "The Promise of Blossoming After Drought",
    body: "The botanical imagery of Hosea 14:5-7 speaks directly to anyone who has experienced a long season of spiritual dryness. The dew, the lily, the roots of Lebanon, the olive tree, the grain, the vine -- all of these are images of a life that is not merely surviving but genuinely flourishing. Spiritual drought is real. There are seasons when prayer feels like talking to a wall, when worship is mechanical, when the things of God seem distant and unreal. Hosea 14 does not promise that these seasons will not come; it promises that they are not the final condition of those who return. God will be like the dew -- not like the dramatic rainfall that fills the wadis but like the quiet, daily moisture that sustains life through the dry season. And from that daily sustaining will come blossoming. This is the eschatological promise worked out in the ordinary rhythms of return and growth.",
  },
  {
    color: ROSE,
    title: "God as the Green Cypress: Shelter and Fruit",
    body: "The image of God as a green cypress (14:8) deserves extended meditation. A cypress is a tree you dwell near as much as a tree you use. Its shade is cover; its fragrance is presence; its evergreen character is constancy. God as a green cypress is God as the permanent environment of the person who returns to him -- not a resource to be consulted in emergencies but a habitat to live in. 'From me comes your fruit' means that the productivity of a life hidden in God flows from that proximity. The fruit does not come from striving, from better techniques of spiritual discipline, from more earnest effort. It comes from the cypress -- from staying near to the God who is always green, always giving shade, always present. This image corrects the performative anxiety that drives much contemporary Christian life: the frantic sense that we must produce fruit through intense effort. The cypress gives the fruit. We dwell near the cypress.",
  },
];

const VIDEO_ITEMS = [
  { id: "PkBcN7wZmQo", title: "Hosea 14: Return to the LORD (Final Chapter Study)" },
  { id: "RmDtP4vJbNs", title: "I Will Love Them Freely &mdash; Hosea 14:4 Explained" },
  { id: "TnFpY9uBwLk", title: "I Will Be Like the Dew &mdash; Hosea 14 Bible Study" },
  { id: "VpHrT2xZfVm", title: "Hosea 14 Commentary &mdash; The Book of Hosea Concluded" },
];

export default function Hosea14GuidePage() {
  const [tab, setTab] = usePersistedState<Hos14Tab>("vine_hos14_tab", "overview");
  const [openOverview, setOpenOverview] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const toggleOverview = (id: string) => setOpenOverview(openOverview === id ? null : id);
  const toggleTheme = (id: string) => setOpenTheme(openTheme === id ? null : id);
  const toggleVerse = (id: string) => setOpenVerse(openVerse === id ? null : id);
  const toggleApp = (id: string) => setOpenApp(openApp === id ? null : id);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>

          {/* Hero */}
          <div style={{ background: "linear-gradient(135deg, #001a0a 0%, #12121F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, fontFamily: "system-ui, sans-serif" }}>HOSEA 14</span>
                <span style={{ color: MUTED, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>Chapter Study &middot; Minor Prophets</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                Return, O Israel, to the LORD Your God
              </h1>
              <p
                style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 700, lineHeight: 1.7, margin: "0 0 20px", fontFamily: "system-ui, sans-serif" }}
                dangerouslySetInnerHTML={{ __html: "The final chapter of Hosea is one of the most tender passages in the prophets &mdash; a liturgy of return, God&rsquo;s promise to heal apostasy and love freely, the blossoming of Israel like a lily and a cedar, and a wisdom conclusion about understanding the ways of the LORD." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  { label: "Author", value: "Hosea son of Beeri" },
                  { label: "Setting", value: "Northern Israel, c. 750-715 BC" },
                  { label: "Key Verse", value: "Hosea 14:4, 14:9" },
                  { label: "Genre", value: "Prophetic Liturgy / Wisdom Conclusion" },
                ].map(item => (
                  <div key={item.label} style={{ background: `${CARD}cc`, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 16px", fontFamily: "system-ui, sans-serif" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Verse Banner */}
          <div style={{ background: `${GREEN}12`, borderBottom: `1px solid ${GREEN}33`, padding: "24px 24px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <blockquote style={{ borderLeft: `4px solid ${GREEN}`, paddingLeft: 20, margin: 0 }}>
                <p
                  style={{ fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 6, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;I will heal their apostasy; I will love them freely, for my anger has turned from them.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>-- Hosea 14:4 (ESV)</cite>
              </blockquote>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as Hos14Tab)}
                  style={{ padding: "16px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", fontFamily: "system-ui, sans-serif", color: tab === t.id ? ACCENT : MUTED, borderBottom: tab === t.id ? `2px solid ${ACCENT}` : "2px solid transparent", transition: "color 0.15s" }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

            {/* OVERVIEW */}
            {tab === "overview" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Overview</h2>
                <p
                  style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Hosea 14 brings the entire book to a gracious conclusion. After chapters of indictment, judgment, and lament, God provides the very words of repentance Israel should use &mdash; and then promises to love them freely, heal their apostasy, and cause them to blossom like a garden in full flower." }}
                />

                <div style={{ background: CARD, border: `1px solid ${GREEN}33`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Shape of Hosea 14</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "14:1", desc: "The call to return -- you have stumbled because of your iniquity" },
                      { ref: "14:2-3", desc: "The prayer God provides -- take away iniquity -- no Assyria, no horses, no idols" },
                      { ref: "14:4", desc: "The divine response -- I will heal their apostasy -- I will love them freely" },
                      { ref: "14:5-7", desc: "The botanical promises -- dew, lily, Lebanon, olive, fragrance, grain, vine" },
                      { ref: "14:8", desc: "The green cypress -- I am your shelter; from me comes your fruit" },
                      { ref: "14:9", desc: "The wisdom conclusion -- the ways of the LORD are right -- upright walk, transgressors stumble" },
                    ].map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "system-ui, sans-serif" }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 40, paddingTop: 2 }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { color: ROSE, label: "The Stumbling", desc: "Israel has stumbled because of its iniquity (14:1)" },
                    { color: GREEN, label: "The Return", desc: "God provides the very words of repentance and renunciation (14:2-3)" },
                    { color: GOLD, label: "The Blossoming", desc: "God heals freely; Israel flowers like lily, olive, cedar, vine (14:4-8)" },
                  ].map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: item.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4, fontFamily: "system-ui, sans-serif" }}>{item.label}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.desc}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {OVERVIEW_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleOverview(s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openOverview === s.title ? "-" : "+"}</span>
                      </button>
                      {openOverview === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Hosea 14 and the Arc of the Book</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The book of Hosea is often summarized as a movement between two poles: unfaithfulness and restoration, judgment and mercy, exile and return. Hosea 14 is the destination of that movement. The names of judgment that opened the book &mdash; Jezreel, Lo-Ruhamah, Lo-Ammi &mdash; have been reversed in chapters 2-3. Now chapter 14 shows what the positive side of the reversal looks like in practice: a people who return with the words God has given them, receive healing and free love, and blossom into full flourishing." }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The wisdom conclusion of 14:9 then pulls the camera back and invites every reader &mdash; ancient and modern &mdash; to receive the entire prophetic book as a lesson in the ways of the LORD: that unfaithfulness leads to stumbling, that the LORD is patient and relentless in calling his people back, that his anger is real but temporary, and that his free love is available to any who will take with them words and return." }}
                  />
                </div>
              </div>
            )}

            {/* THEMES */}
            {tab === "themes" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Key Themes</h2>
                <p
                  style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Hosea 14 concentrates some of the most important theological themes of the entire prophetic corpus into nine verses: divine initiative in repentance, the renunciation of false securities, free-will love (nedavah), healing as God&rsquo;s work, the blossoming of creation at restoration, and wisdom as the frame for understanding the prophetic message." }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {THEME_ITEMS.map(t => (
                    <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleTheme(t.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: t.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{t.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openTheme === t.title ? "-" : "+"}</span>
                      </button>
                      {openTheme === t.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{t.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 28, marginTop: 32 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>The Botanical Imagery of Restoration: A Survey</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { image: "Dew (14:5)", meaning: "Quiet, daily, life-sustaining presence -- moisture in the dry season" },
                      { image: "Lily (14:5)", meaning: "Beauty and fragility restored -- the crushed flower blooms again" },
                      { image: "Roots like Lebanon (14:5)", meaning: "Permanence and stability -- unmovable, deep-rooted identity" },
                      { image: "Olive tree (14:6)", meaning: "Multigenerational wealth and beauty -- the most prized agricultural tree" },
                      { image: "Fragrance like Lebanon (14:6-7)", meaning: "The cedar perfume of the forest -- sensory fullness of restoration" },
                      { image: "Grain (14:7)", meaning: "Daily bread secured -- the basic staff of life returned" },
                      { image: "Vine (14:7)", meaning: "Joy and celebration restored -- the vine of communal feast" },
                      { image: "Green cypress (14:8)", meaning: "God himself as shelter and source of all fruitfulness" },
                    ].map(item => (
                      <div key={item.image} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 160, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{item.image}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.meaning}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 28, marginTop: 24 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>Hosea 14 Echoes Through the Canon</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { ref: "Romans 8:26", note: "The Spirit helps us in our weakness; when we do not know what to pray, he intercedes" },
                      { ref: "Philippians 2:13", note: "God who works in you to will and to act -- healing the will, not just forgiving acts" },
                      { ref: "Hebrews 13:15", note: "The sacrifice of praise, the fruit of lips -- fulfillment of the vows of our lips in Hos 14:2" },
                      { ref: "John 15:5", note: "Apart from me you can do nothing -- from me comes your fruit (Hos 14:8)" },
                      { ref: "1 John 4:8", note: "God is love -- the nedavah love of Hos 14:4 in its NT theological culmination" },
                      { ref: "1 Peter 2:7-8", note: "The ways of the LORD -- cornerstone to believers, stumbling stone to disobedient (cf. Hos 14:9)" },
                    ].map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: TEAL, fontWeight: 700, fontSize: 13, minWidth: 130, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VERSE BY VERSE */}
            {tab === "verse" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Verse by Verse</h2>
                <p
                  style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Hosea 14 is nine verses that function as a complete liturgical and theological unit: call to return, prayer of return, divine response of healing, promise of blossoming, and wisdom conclusion. Each verse carries weight and repays careful attention." }}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {VERSE_SECTIONS.map(s => (
                    <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleVerse(s.ref)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ background: s.color, color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 700, fontFamily: "system-ui, sans-serif", flexShrink: 0 }}>{s.ref}</span>
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openVerse === s.ref ? "-" : "+"}</span>
                      </button>
                      {openVerse === s.ref && (
                        <div style={{ padding: "0 20px 20px 20px" }}>
                          <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0, fontFamily: "system-ui, sans-serif" }}>{s.body}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 28, marginTop: 32 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Prayer of Hosea 14:2-3</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The prayer God provides in verses 2-3 has three structural movements that can serve as a template for the prayer of return in any generation:" }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { num: "1", move: "Petition", content: "Take away all iniquity; accept what is good -- asking for forgiveness and positive acceptance" },
                      { num: "2", move: "Offering", content: "We will pay with bulls the vows of our lips -- redirecting worship from costly sacrifice to consecrated speech" },
                      { num: "3", move: "Renunciation", content: "No Assyria, no horses, no idols -- the threefold abandonment of misplaced trust" },
                    ].map(item => (
                      <div key={item.num} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: PURPLE, fontWeight: 800, flexShrink: 0, fontSize: 16, fontFamily: "system-ui, sans-serif" }}>{item.num}.</span>
                        <div>
                          <div style={{ color: TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3, fontFamily: "system-ui, sans-serif" }}>{item.move}</div>
                          <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${GREEN}33`, borderRadius: 12, padding: 24, marginTop: 24 }}>
                  <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>The Wisdom Frame: Reading Hosea as Wisdom</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The closing verse of Hosea (14:9) places the entire prophetic book within the wisdom tradition. The pattern it identifies &mdash; the ways of the LORD are right; the upright walk in them; transgressors stumble in them &mdash; is presented not as a temporary historical observation but as a permanent feature of moral reality. Scholars note that this kind of wisdom conclusion is also found at the end of other prophetic books (cf. Micah 7:18-20), suggesting that the editors of the prophetic canon understood the prophets not merely as historical announcements but as ongoing instruction in the ways of the LORD." }}
                  />
                  <div style={{ background: BG, borderRadius: 8, padding: 16, border: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic", fontFamily: "system-ui, sans-serif" }}
                      dangerouslySetInnerHTML={{ __html: "&ldquo;Whoever is wise, let him understand these things; whoever is discerning, let him know them; for the ways of the LORD are right, and the upright walk in them, but transgressors stumble in them.&rdquo; &mdash; Hosea 14:9 (ESV)" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* APPLICATION */}
            {tab === "application" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Application</h2>
                <p
                  style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: "Hosea 14 is a chapter that is meant to be inhabited, not merely studied. Its call to return, its gift of words, its promise of healing and blossoming &mdash; all of these are addressed to the reader who recognizes that they have stumbled, and who is willing to take with them words and return." }}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {APPLICATION_ITEMS.map(a => (
                    <div key={a.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => toggleApp(a.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: a.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>{a.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 20, fontFamily: "system-ui, sans-serif" }}>{openApp === a.title ? "-" : "+"}</span>
                      </button>
                      {openApp === a.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14, fontFamily: "system-ui, sans-serif" }}>{a.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${GREEN}33`, borderRadius: 12, padding: 28, marginBottom: 32 }}>
                  <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>Reflection Questions</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      "What does it mean to you that God provides the words of repentance rather than leaving you to find them yourself?",
                      "Identify your own version of the three renunciations: what is your Assyria (political security), your horses (strategic control), your idols (manageable substitutes for God)?",
                      "Is there an area of your life where you need healing of apostasy rather than merely forgiveness of individual acts?",
                      "Which of the botanical images in Hosea 14:5-7 most speaks to your current season? Are you in need of dew? Roots? Fragrance? Grain?",
                      "What would it mean for you to dwell under the shadow of the green cypress -- to inhabit closeness to God as an environment rather than a resource?",
                      "The wise understand these things; the discerning know them. What would greater wisdom look like in your pattern of returning to God after seasons of wandering?",
                    ].map((q, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: GREEN, fontWeight: 800, flexShrink: 0, fontFamily: "system-ui, sans-serif" }}>{i + 1}.</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 28, marginBottom: 32 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Hosea 14 and the Gospel of Free Love</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: "The declaration of Hosea 14:4 &mdash; &lsquo;I will love them freely&rsquo; &mdash; is the Old Testament foundation for the New Testament doctrine of grace. The word nedavah (free-will, spontaneous, unconditioned love) anticipates the Greek charis and the Pauline proclamation that God justifies the ungodly (Rom 4:5). God does not wait for Israel to become lovable; he heals their apostasy and then loves them freely. The sequence is important: healing first, then love poured out; God&rsquo;s initiative all the way. The New Testament version of this is the cross: while we were still sinners, Christ died for us (Rom 5:8). Hosea 14 is not a foretaste of cheap grace; the chapter calls for genuine repentance and the naming of specific misplaced trusts. But it is unambiguous that the love God offers is not earned. It is nedavah &mdash; free." }}
                  />
                </div>

                <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 12, padding: 28, marginBottom: 40 }}>
                  <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Further Study in the Prophets</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { ref: "Hosea 2:14-23", note: "The valley of Achor as a door of hope; the reversal of the names of judgment" },
                      { ref: "Hosea 6:1-6", note: "Come, let us return to the LORD -- the earlier call to return and God's longing" },
                      { ref: "Hosea 11:1-9", note: "When Israel was a child I loved him -- the father-son version of Hosea's tender love" },
                      { ref: "Jeremiah 31:31-34", note: "The new covenant -- I will put my law within them -- God writing on hearts" },
                      { ref: "Ezekiel 36:25-27", note: "I will give you a new heart -- God healing the apostasy of the will" },
                      { ref: "Isaiah 55:1-7", note: "Seek the LORD while he may be found -- the great invitation to return" },
                    ].map(item => (
                      <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: ROSE, fontWeight: 700, fontSize: 13, minWidth: 120, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{item.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>{item.note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>Video Teaching</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
                  {VIDEO_ITEMS.map(v => (
                    <div key={v.id}>
                      <VideoEmbed videoId={v.id} title={v.title} />
                      <p
                        style={{ color: MUTED, fontSize: 13, marginTop: 8, fontFamily: "system-ui, sans-serif" }}
                        dangerouslySetInnerHTML={{ __html: v.title }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
