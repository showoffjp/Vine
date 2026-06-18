"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const VERSE_SECTIONS = [
  {
    id: "v1",
    ref: "Jer 7:1-7",
    color: PURPLE,
    title: "Stand at the Gate -- Amend Your Ways",
    body: "The oracle begins with God commanding Jeremiah to take his stand at the gate of the LORD&apos;s house&mdash;the most public, most trafficked place in Jerusalem. Everyone entering to worship would hear. The command is to proclaim the word of the LORD to all of Judah who enter through these gates to worship (7:2). Then comes the central conditional promise: &ldquo;Amend your ways and your deeds, and I will let you dwell in this place&rdquo; (7:3). The promise is real&mdash;continued dwelling in the land is on offer&mdash;but it is not unconditional. God does not say &ldquo;you will certainly dwell here.&rdquo; He says: if you amend. The conditions are ethical and social, not ceremonial: executing justice between one person and another; not oppressing the alien, the orphan, and the widow; not shedding innocent blood in this place; not going after other gods (7:5&ndash;6). The triad of the vulnerable&mdash;alien, orphan, widow&mdash;appears repeatedly in the Law (Exod 22:21&ndash;24, Deut 10:18, 27:19) and in the prophets. Their treatment was a diagnostic of whether covenant faithfulness was genuine. A society that exploited its most vulnerable members could not claim to be worshipping the God of the covenant, no matter how regularly it appeared at the temple.",
  },
  {
    id: "v2",
    ref: "Jer 7:8-15",
    color: ROSE,
    title: "Do Not Trust Deceptive Words -- The Shiloh Precedent",
    body: "Here is the heart of the Temple Sermon. The people are trusting in deceptive words: &ldquo;the temple of the LORD, the temple of the LORD, the temple of the LORD&rdquo; (7:4). The triple repetition is striking&mdash;it mirrors the liturgical incantation the people were actually using, a kind of sacred formula that was supposed to guarantee divine protection. Jeremiah demolishes it completely. You steal, murder, commit adultery, swear falsely, burn incense to Baal, go after other gods&mdash;and then come and stand before me in this house which is called by my name and say &ldquo;We are delivered!&rdquo; (7:9&ndash;10). The temple has become a den of robbers (7:11). Jesus quotes this exact phrase in his own temple cleansing (Matt 21:13, Mark 11:17, Luke 19:46)&mdash;a direct echo that indicates Jesus is performing the same prophetic act as Jeremiah. Then God invokes the Shiloh precedent: &ldquo;Go now to my place that was in Shiloh, where I made my name dwell at first, and see what I did to it because of the evil of my people Israel&rdquo; (7:12). Shiloh was where the ark of the covenant resided before the Philistines captured it (1 Sam 4). The site was presumably destroyed. If God allowed Shiloh to be destroyed, he will allow Jerusalem&apos;s temple to suffer the same fate. Sacred space is not immune to the moral failure of the people who worship there.",
  },
  {
    id: "v3",
    ref: "Jer 7:16-20",
    color: GOLD,
    title: "Forbidden to Pray -- The Queen of Heaven",
    body: "One of the most startling commands in the book of Jeremiah: &ldquo;As for you, do not pray for this people, or lift up a cry or prayer for them, and do not intercede with me, for I will not hear you&rdquo; (7:16). The prophet who was called from birth to stand before the people and before God is forbidden from interceding. This is not a permanent revocation of prayer in general; it is a specific statement about where the people are in their covenant relationship at this moment. The intercession of the prophet could not avail when the people themselves refused to turn. Then God asks: &ldquo;Do you not see what they are doing in the cities of Judah and in the streets of Jerusalem?&rdquo; (7:17). The answer is the Queen of Heaven cult. Children gather wood, fathers kindle fire, women knead dough, to make cakes for the queen of heaven (7:18). The Queen of Heaven was likely Ishtar (Mesopotamian) or Astarte (Canaanite)&mdash;a fertility goddess. The whole family participates: children, fathers, mothers. This is not a fringe practice but a domestic one embedded in family life. God&apos;s response is not indifferent anger but wounded love: &ldquo;Is it I whom they provoke? Is it not themselves, to their own shame?&rdquo; (7:19). The wrath poured out on man and beast and tree and ground will not be quenched (7:20).",
  },
  {
    id: "v4",
    ref: "Jer 7:21-28",
    color: TEAL,
    title: "Burnt Offerings vs. Obedience -- Walking in Stubbornness",
    body: "God&apos;s word here is devastating to a sacrificial theology divorced from ethics. &ldquo;Add your burnt offerings to your sacrifices, and eat the flesh&rdquo; (7:21)&mdash;a bitter irony. If the sacrifices are not offered in the context of genuine covenant faithfulness, they might as well be consumed by the offerers themselves; they accomplish nothing before God. Then the historical argument: &ldquo;For in the day that I brought them out of the land of Egypt, I did not speak to your fathers or command them concerning burnt offerings and sacrifices. But this command I gave them: Obey my voice, and I will be your God, and you shall be my people&rdquo; (7:22&ndash;23). This is one of the most debated passages in Old Testament theology. It does not mean God gave no sacrificial laws at Sinai&mdash;Leviticus and Numbers demonstrate otherwise. It means that obedience was the primary thing, the foundational command; the sacrificial system was embedded in and subordinate to the covenant of obedience. Sacrifice was never designed to substitute for obedience. And Israel&apos;s history was one of persistent failure: they did not obey or incline their ear, but walked in their own counsels and the stubbornness of their evil hearts, and went backward and not forward (7:24). Each generation received prophets and rejected them (7:25&ndash;26). Jeremiah himself is warned: they will not listen to you (7:27). The reason is staggering: &ldquo;Truth has perished; it is cut off from their lips&rdquo; (7:28).",
  },
  {
    id: "v5",
    ref: "Jer 7:29-34",
    color: GREEN,
    title: "Topheth -- The Valley of Slaughter",
    body: "The chapter closes with its most horrifying material. &ldquo;Cut off your hair and cast it away; raise a lamentation on the bare heights, for the LORD has rejected and forsaken the generation of his wrath&rdquo; (7:29). The cutting of hair was a sign of mourning (Job 1:20). Then the accusation: the people of Judah have set their abominations in the house called by my name, to defil it (7:30). They have built the high places of Topheth in the Valley of the Son of Hinnom, to burn their sons and daughters in the fire&mdash;which God did not command and did not enter into his heart (7:31). The Valley of the Son of Hinnom (Ge-Hinnom, which becomes &ldquo;Gehenna&rdquo; in the New Testament) was the site of child sacrifice outside Jerusalem. The specific phrase &ldquo;it never entered my heart&rdquo; is God&apos;s emphatic repudiation of any claim that this was worship offered to him. Child sacrifice to Molech was practiced in Canaan and apparently infiltrated Israelite practice. God&apos;s judgment is proportional: the days are coming when Topheth and the valley will be called the Valley of Slaughter, for there will be no room to bury so many dead (7:32). The bodies will be food for birds and beasts, and there will be no one to fright them away (7:33). The sounds of joy and gladness, the voice of bride and bridegroom, will be silenced from the cities of Judah and the streets of Jerusalem (7:34). Silence where there was celebration&mdash;the fullness of covenant curse.",
  },
];

const THEME_SECTIONS = [
  {
    id: "t1",
    color: PURPLE,
    title: "False Security in Religion vs. Genuine Covenant Faithfulness",
    body: "The temple of the LORD, the temple of the LORD, the temple of the LORD&rdquo; (7:4)&mdash;this threefold repetition captures the theological disease Jeremiah is diagnosing: the belief that proximity to sacred space, sacred ritual, or sacred formula can substitute for genuine covenant faithfulness. The people of Judah had not become atheists. They were worshipping at the temple regularly. They were performing sacrifices. They were saying the right liturgical words. And God rejected it all as self-deception. The theological mistake was treating the temple as a talisman&mdash;as an object whose presence guaranteed divine protection regardless of the moral and spiritual condition of those who came to it. This is not a mistake unique to ancient Israel. Every religious community is susceptible to the temptation of substituting institutional membership, doctrinal correctness, attendance at services, or use of sacred language for genuine relationship with and obedience to God. Jeremiah&apos;s sermon is a permanent warning against the religious sleight of hand that allows people to feel spiritually secure while practicing ethical injustice and worshipping other gods.",
  },
  {
    id: "t2",
    color: ROSE,
    title: "The Shiloh Precedent -- Sacred Space Is Not Immune",
    body: "God&apos;s appeal to Shiloh in 7:12 is one of the most theologically significant arguments in the entire chapter. Shiloh was where the tabernacle and ark rested during the period of the judges. It was the first permanent sanctuary, the place where God&apos;s name dwelt before David brought the ark to Jerusalem and before Solomon built the temple. According to Psalm 78:60, God forsook his dwelling at Shiloh and abandoned the ark to captivity. The site was presumably destroyed. When God says &ldquo;go to Shiloh and see what I did to it,&rdquo; he is appealing to a historical precedent that the people themselves could verify. The presence of God&apos;s name in a location did not make that location permanently inviolable. God had already destroyed one of his dwelling places. He could do the same to another. This argument demolishes what scholars call &ldquo;Zion theology&rdquo;&mdash;the belief, rooted partly in the Davidic covenant and partly in the Psalms celebrating God&apos;s presence on Zion (Ps 46, 48, 76), that Jerusalem was permanently protected by divine decree. Jeremiah insists that the covenant conditions still apply. No sacred site is exempt from the logic of covenant faithfulness.",
  },
  {
    id: "t3",
    color: GOLD,
    title: "Temple Theology vs. Prophetic Theology",
    body: "Jeremiah 7 crystallizes the tension between two streams of Israelite theology. Temple theology (represented by the priestly tradition, certain psalms, and popular Zion theology) emphasized the permanent, unconditional presence of God in the temple and the protection that presence guaranteed. Prophetic theology (represented by Amos, Hosea, Isaiah 1, Micah 3:12, and supremely Jeremiah) insisted that the covenant was conditional, that obedience was primary, and that God was not bound to protect a people who had violated the covenant. This is not a contradiction between two competing religions; it is a tension within the Mosaic covenant itself. Deuteronomy both promises great blessing and warns of terrible curse. The conditional structure of the covenant means that the temple and the city and the land are gifts that can be removed if the conditions of the gift are violated. Micah 3:12 had already declared: &ldquo;Zion shall be plowed as a field; Jerusalem shall become a heap of ruins.&rdquo; Jeremiah stands in this tradition. The elders who cite Micah&apos;s precedent in defense of Jeremiah after the Temple Sermon (Jer 26:17&ndash;19) understood this connection.",
  },
  {
    id: "t4",
    color: TEAL,
    title: "Obedience Over Sacrifice",
    body: "The passage in 7:21&ndash;23 articulates one of the prophetic tradition&apos;s most consistent themes: God desires obedience more than sacrifice. This is the message of 1 Samuel 15:22 (&ldquo;to obey is better than sacrifice&rdquo;), Hosea 6:6 (&ldquo;I desire steadfast love and not sacrifice, the knowledge of God rather than burnt offerings&rdquo;), Amos 5:21&ndash;24 (&ldquo;I hate, I despise your feasts&rdquo;), Isaiah 1:11&ndash;17, and Micah 6:6&ndash;8 (&ldquo;what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God&rdquo;). Jeremiah&apos;s version is particularly radical in its historical framing: when God brought Israel out of Egypt, the primary command was obedience to his voice, not the performance of burnt offerings. The sacrificial system was embedded in and subordinate to the covenant of obedience. Jesus quotes Hosea 6:6 twice in Matthew (9:13, 12:7): &ldquo;Go and learn what this means: I desire mercy, and not sacrifice.&rdquo; The prophetic critique of sacrifice-without-obedience is not an abolition of worship but a restoration of it to its proper order.",
  },
  {
    id: "t5",
    color: GREEN,
    title: "The Queen of Heaven and Syncretism",
    body: "The Queen of Heaven cult described in 7:17&ndash;20 is a case study in religious syncretism&mdash;the blending of covenant faith with surrounding religious practices. The whole family participated: children gathered wood, fathers lit fire, women kneaded dough to make cakes in her image. The worship of the Queen of Heaven (probably Astarte or Ishtar) was not replacing temple worship but coexisting with it. The people were worshipping at the LORD&apos;s temple and baking cakes for the Queen of Heaven. They saw no contradiction. This is the nature of syncretism: it does not demand that you abandon your primary religious identity; it simply adds additional religious practices alongside it, usually practices that address felt needs the primary religion seems not to be meeting&mdash;in this case, fertility and domestic security. Jeremiah&apos;s critique (and God&apos;s through him) is that the addition of the Queen of Heaven worship is not a harmless supplement but a fundamental violation of the first commandment. The God of Israel is jealous (Exod 20:5); he does not share worship. The syncretism that felt like religious abundance to the people was, in God&apos;s view, idolatry.",
  },
  {
    id: "t6",
    color: PURPLE,
    title: "The Valley of Hinnom and Child Sacrifice",
    body: "The Valley of Hinnom (Topheth) material in 7:29&ndash;34 represents the outer edge of covenant violation: child sacrifice. God&apos;s repudiation is explicit and emphatic: &ldquo;which I did not command, and it did not enter into my heart&rdquo; (7:31). This phrasing rules out any claim that child sacrifice was ever intended or acceptable. It was a pagan practice imported from Canaanite religion (the god Molech) that had crept into Israelite practice under various kings (2 Kings 16:3, 21:6, 23:10). King Josiah had defiled Topheth to prevent its use (2 Kings 23:10), but the practice apparently returned. The Valley of Hinnom later became associated with the burning of refuse outside Jerusalem and, in Jewish apocalyptic literature, with the fires of divine judgment. By the time of the New Testament, &ldquo;Gehenna&rdquo; (from Ge-Hinnom) was used as a term for the place of final judgment. Jeremiah&apos;s announcement that the valley would become the Valley of Slaughter, with unburied bodies left for birds and beasts, is a covenant curse of the most extreme kind&mdash;a reversal of everything the covenant promised.",
  },
  {
    id: "t7",
    color: ROSE,
    title: "Jeremiah Forbidden to Intercede",
    body: "The command in 7:16&mdash;&ldquo;do not pray for this people, or lift up a cry or prayer for them, and do not intercede with me, for I will not hear you&rdquo;&mdash;is one of the most theologically jarring in the entire book. It is repeated in Jeremiah 11:14 and 14:11. Jeremiah&apos;s role was that of a prophetic intercessor in the tradition of Moses (Exod 32:11&ndash;14), Samuel (1 Sam 7:5, 12:23), and Amos (Amos 7:1&ndash;6). The prophets stood between God and the people, delivering God&apos;s word in one direction and carrying the people&apos;s need to God in the other. To be forbidden to intercede is to have one half of the prophetic role removed. It signals that a threshold has been crossed: the people&apos;s refusal to hear has reached the point where even prophetic intercession cannot change the trajectory of events. This is not God becoming indifferent to his people&mdash;the wounded question &ldquo;Is it I whom they provoke?&rdquo; (7:19) shows the opposite. It is the solemn acknowledgment that genuine covenant response from the people is the only thing that can now alter the situation, and the people are not responding.",
  },
];

export default function Jeremiah7GuidePage() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const videoItems = [
    { id: "lZ5TcWY5RGE", title: "Jeremiah 7: The Temple Sermon Explained" },
    { id: "T2hQFyXUNCI", title: "Do Not Trust Deceptive Words - Jeremiah 7 Study" },
    { id: "V5sVdpLxQZc", title: "Shiloh and the Temple - Jeremiah 7 Commentary" },
    { id: "m9kbP0s4eBE", title: "Obedience Over Sacrifice - Jeremiah 7:21-28" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${PURPLE}22, ${ROSE}22)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Major Prophets &middot; OT</div>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem", margin: "0 0 1rem" }}>Jeremiah 7: The Temple Sermon</h1>
        <p style={{ color: MUTED, maxWidth: 680, margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.7 }}>
          Jeremiah stands at the gate of the LORD&apos;s house and delivers the most searing indictment of false religion in the Old Testament &mdash; do not trust in deceptive words like &ldquo;the temple of the LORD.&rdquo; True security comes from amending ways and deeds, not from proximity to sacred space.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", padding: "1.5rem 1rem", flexWrap: "wrap" }}>
        {TABS.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "0.5rem 1.2rem",
              borderRadius: 999,
              border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : "transparent",
              color: tab === t ? "#fff" : MUTED,
              cursor: "pointer",
              fontWeight: tab === t ? 700 : 400,
              fontSize: 14,
            }}
          >
            {TAB_LABELS[t]}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1rem 4rem" }}>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>The Chapter at a Glance</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Jeremiah 7 contains what scholars call the Temple Sermon&mdash;one of the most theologically explosive passages in the entire Old Testament. A parallel account of the event surrounding this sermon appears in Jeremiah 26, which narrates the dramatic aftermath: the priests, prophets, and people arrested Jeremiah and threatened him with death, calling his words treason against the holy city. That chapter reveals how dangerous these words were. In chapter 7 we have the sermon itself, in remarkable fullness, with all of its challenges preserved." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The setting is deliberate and significant. God commands Jeremiah to stand at the gate of the LORD&apos;s house (7:2)&mdash;not in the inner courts, not in a private meeting, but at the gate where every worshipper entering the temple precinct would pass. This was the most public, most sacred spot in Jerusalem. To stand there and say what Jeremiah was about to say required extraordinary courage and unambiguous divine command." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The central accusation is startling: the people have made the temple a den of robbers (7:11). Not because the temple itself was a site of robbery, but because thieves and murderers and adulterers were fleeing to it for sanctuary&mdash;performing the rituals, pronouncing the magic formula &ldquo;the temple of the LORD&rdquo;&mdash;and expecting God&apos;s protection regardless of how they had lived outside its walls. The temple had become a refuge not for the repentant but for the unrepentant who believed that proximity to sacred space absolved them of ethical accountability." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "God&apos;s response is to invoke the Shiloh precedent (7:12&ndash;15): go and see what I did to Shiloh. The ark of the covenant rested at Shiloh. The tabernacle stood there. God&apos;s name dwelt there. And God allowed it to be destroyed. If God did not spare Shiloh, he will not spare Jerusalem&apos;s temple. The chapter then expands beyond the temple sermon itself to address the Queen of Heaven worship spreading through Judean households (7:17&ndash;20), the emptiness of sacrifice divorced from obedience (7:21&ndash;28), and the horror of child sacrifice in the Valley of Hinnom (7:29&ndash;34)." }}
              />
            </div>

            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 14, marginBottom: 24 }}>
              {[
                ["Book", "Jeremiah"],
                ["Chapter", "7"],
                ["Period", "~627&ndash;587 BC"],
                ["Audience", "Judah &amp; Jerusalem"],
                ["Key Theme", "False Security in Religion"],
                ["Key Verse", "Jer 7:4, 7:11"],
              ].map(([k, v]) => (
                <div key={k} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                  <div
                    style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}
                    dangerouslySetInnerHTML={{ __html: v }}
                  />
                </div>
              ))}
            </div>

            {/* Key passage highlight */}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: 18, margin: "0 0 16px" }}>The Deceptive Words (Jer 7:3&ndash;4)</h3>
              <blockquote style={{ borderLeft: `4px solid ${PURPLE}`, paddingLeft: 20, margin: "0 0 16px" }}>
                <p style={{ color: TEXT, fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>
                  &ldquo;Amend your ways and your deeds, and I will let you dwell in this place. Do not trust in these deceptive words: &lsquo;This is the temple of the LORD, the temple of the LORD, the temple of the LORD.&rsquo;&rdquo;
                </p>
                <cite style={{ color: MUTED, fontSize: 13, marginTop: 8, display: "block" }}>&mdash; Jeremiah 7:3&ndash;4 (ESV)</cite>
              </blockquote>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The threefold repetition of &ldquo;the temple of the LORD&rdquo; in 7:4 almost certainly reflects the actual liturgical chant the people were using&mdash;a magical formula, a sacred incantation that was supposed to guarantee God&apos;s protection by invoking the name of his dwelling place. Jeremiah calls it deceptive. The deception is not that the temple is a lie; it is that the temple&apos;s presence means nothing without covenant faithfulness. Sacred words without sacred living are the most dangerous kind of deception, because they are self-deception." }}
              />
            </div>

            {/* Den of Robbers */}
            <div style={{ background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: ROSE, fontWeight: 700, fontSize: 18, margin: "0 0 16px" }}>A Den of Robbers (Jer 7:11)</h3>
              <blockquote style={{ borderLeft: `4px solid ${ROSE}`, paddingLeft: 20, margin: "0 0 16px" }}>
                <p style={{ color: TEXT, fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>
                  &ldquo;Has this house, which is called by my name, become a den of robbers in your eyes? Behold, I myself have seen it, declares the LORD.&rdquo;
                </p>
                <cite style={{ color: MUTED, fontSize: 13, marginTop: 8, display: "block" }}>&mdash; Jeremiah 7:11 (ESV)</cite>
              </blockquote>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Jesus quotes this verse directly in all three synoptic gospels during his cleansing of the temple (Matt 21:13, Mark 11:17, Luke 19:46). By doing so, Jesus identifies himself as performing the same prophetic act as Jeremiah and announces the same judgment on the second temple that Jeremiah announced on the first. The &ldquo;den of robbers&rdquo; is not primarily a reference to commercial abuse in the temple courts; it is a reference to the ancient practice of bandits using a cave as a hiding place&mdash;a refuge where they retreat after committing crimes, feeling safe precisely because of the geography. The temple had become a place where people committed moral and religious crimes and then retreated to its precincts for safety, believing God&apos;s presence would shield them." }}
              />
            </div>

            {/* Chapter structure */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 18, margin: "0 0 16px" }}>Chapter Structure</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "Jer 7:1-7", label: "Stand at the Gate", color: PURPLE, desc: "The setting and the conditional promise: amend your ways and you may dwell here" },
                  { ref: "Jer 7:8-15", label: "Do Not Trust Deceptive Words", color: ROSE, desc: "The threefold temple formula demolished; the Shiloh precedent" },
                  { ref: "Jer 7:16-20", label: "Forbidden to Intercede", color: GOLD, desc: "Jeremiah may not pray for the people; the Queen of Heaven cult" },
                  { ref: "Jer 7:21-28", label: "Obedience Over Sacrifice", color: TEAL, desc: "Burnt offerings without obedience are meaningless; Israel&apos;s history of stubborn refusal" },
                  { ref: "Jer 7:29-34", label: "Topheth and the Valley of Slaughter", color: GREEN, desc: "Child sacrifice in the Valley of Hinnom; the coming desolation" },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 13, minWidth: 100, paddingTop: 2 }}>{item.ref}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 600, fontSize: 14, marginBottom: 3 }}>{item.label}</div>
                      <div
                        style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Jeremiah 7</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Jeremiah 7 is a theological minefield and a pastoral treasure. Its themes cut to the heart of what authentic religion looks like&mdash;and what it most commonly becomes when communities drift from covenant faithfulness. The Temple Sermon stands alongside Amos 5, Isaiah 1, and Micah 6 as one of the prophetic canon&apos;s most important critiques of religion that has lost its moral and relational core." }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {THEME_SECTIONS.map(s => (
                <div key={s.id} style={{ background: CARD, border: `1px solid ${open === s.id ? s.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggle(s.id)}
                    style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{s.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 22, lineHeight: 1 }}>{open === s.id ? "-" : "+"}</span>
                  </button>
                  {open === s.id && (
                    <div style={{ padding: "0 22px 18px 44px", borderTop: `1px solid ${BORDER}` }}>
                      <p
                        style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "14px 0 0" }}
                        dangerouslySetInnerHTML={{ __html: s.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Cross-references */}
            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 14, padding: 28, marginTop: 32 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, fontSize: 18, margin: "0 0 16px" }}>Key Cross-References</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "Jer 26:1-19", note: "The narrative account of the Temple Sermon and its aftermath; Jeremiah nearly executed" },
                  { ref: "1 Sam 4:1-11", note: "The capture of the ark at Shiloh&mdash;the event God references as the Shiloh precedent" },
                  { ref: "Ps 78:60", note: "God forsook his dwelling at Shiloh&mdash;confirming the historical judgment Jeremiah appeals to" },
                  { ref: "Micah 3:12", note: "&ldquo;Zion shall be plowed as a field&rdquo;&mdash;the precedent the elders cite in defense of Jeremiah in Jer 26:18" },
                  { ref: "Amos 5:21-24", note: "&ldquo;I hate, I despise your feasts&rdquo;&mdash;the same prophetic critique of worship without justice" },
                  { ref: "Hosea 6:6", note: "&ldquo;I desire steadfast love and not sacrifice&rdquo;&mdash;the theme of 7:21-23 in Hosea&apos;s idiom" },
                  { ref: "Matt 21:12-13", note: "Jesus&apos;s temple cleansing; he quotes Jer 7:11 directly: &ldquo;a den of robbers&rdquo;" },
                  { ref: "2 Kings 23:10", note: "Josiah defiling Topheth to prevent child sacrifice in the Valley of Hinnom" },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 14, padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 110, paddingTop: 2 }}>{item.ref}</span>
                    <span
                      style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: item.note }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VERSE BY VERSE */}
        {tab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: Jeremiah 7</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Jeremiah 7 moves through five distinct sections. The opening (7:1&ndash;7) establishes the setting and the conditional promise. The temple indictment (7:8&ndash;15) delivers the central blow against false religious security. The forbidden prayer and Queen of Heaven material (7:16&ndash;20) reveals the domestic dimension of the crisis. The sacrifice-without-obedience argument (7:21&ndash;28) deepens the theological critique. The Topheth section (7:29&ndash;34) closes the chapter with its most horrifying disclosure." }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {VERSE_SECTIONS.map(s => (
                <div key={s.id} style={{ background: CARD, border: `1px solid ${open === s.id ? s.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggle(s.id)}
                    style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <span style={{ background: `${s.color}20`, border: `1px solid ${s.color}44`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: s.color, fontWeight: 700, whiteSpace: "nowrap" }}>{s.ref}</span>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{s.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 22, lineHeight: 1, marginLeft: 10, flexShrink: 0 }}>{open === s.id ? "-" : "+"}</span>
                  </button>
                  {open === s.id && (
                    <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                      <p
                        style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0" }}
                        dangerouslySetInnerHTML={{ __html: s.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Commentary note */}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: 28, marginTop: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: 18, margin: "0 0 12px" }}>The Temple Sermon in Its Canonical Context</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Jeremiah 7 does not stand alone in the biblical canon. It is part of a long prophetic tradition of challenging the belief that God&apos;s presence in sacred space guarantees the safety of those who abuse that space. The same tradition informs Jesus&apos;s temple action (Matt 21, Mark 11, Luke 19, John 2), where he quotes Jeremiah 7:11 directly. Stephen&apos;s speech in Acts 7 draws on the same prophetic critique, citing the tabernacle and temple as pointing beyond themselves to the One who does not dwell in houses made by human hands." }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The new covenant announced in Jeremiah 31:31&ndash;34 is the positive resolution to the problem diagnosed in chapter 7. The problem in chapter 7 is external religion without internal transformation. The solution in chapter 31 is God writing his law on human hearts&mdash;producing the internal reality that external religious practice was always meant to express. Chapter 7 creates the theological need; chapter 31 announces the divine provision. The Temple Sermon is not the end of the story; it is the diagnosis that makes the new covenant promise intelligible." }}
              />
            </div>
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Application: Living the Truths of Jeremiah 7</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Jeremiah 7 is one of the most uncomfortably contemporary chapters in the Old Testament. Its diagnosis of religious self-deception, its insistence on the inseparability of worship and social ethics, its critique of sacred language used as magical protection&mdash;all of these speak directly into the life of modern Christian communities. The Temple Sermon is not a historical artifact; it is a mirror." }}
              />
            </div>

            {/* Application cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {[
                {
                  color: PURPLE,
                  title: "Identifying Our Own &ldquo;Temple of the LORD&rdquo; Phrases",
                  body: "Every generation develops its own versions of the deceptive words Jeremiah condemns. &ldquo;I am a Christian.&rdquo; &ldquo;I go to church.&rdquo; &ldquo;I believe the right things.&rdquo; &ldquo;I was baptized.&rdquo; &ldquo;I pray regularly.&rdquo; None of these are lies; all of them can be true while the inner life remains unchanged and the ethical life remains unchanged. The deception Jeremiah targets is not in the statements themselves but in the use of those statements as guarantees of divine protection independent of how one actually lives. A useful self-examination question from Jeremiah 7: What sacred phrase or status do I rely on to feel safe before God that might be functioning more as a formula than as a reality? The answer to that question is the starting point of genuine repentance."
                },
                {
                  color: ROSE,
                  title: "The Call to Amend Ways, Not Just Attend Services",
                  body: "God&apos;s conditional promise in 7:3 is explicit: &ldquo;Amend your ways and your deeds, and I will let you dwell in this place.&rdquo; The Greek word for repentance (metanoia) means a change of mind that leads to a change of direction. In Jeremiah&apos;s terms, it is &ldquo;amending ways and deeds.&rdquo; The amendment God has in mind is specific: execute justice between one person and another; do not oppress the alien, the orphan, and the widow; do not shed innocent blood; do not go after other gods (7:5&ndash;6). These are not vague spiritual improvements; they are concrete behavioral changes. The application is to ask not just &ldquo;am I more spiritual?&rdquo; but &ldquo;am I treating the most vulnerable people in my sphere differently?&rdquo; and &ldquo;have I removed the things that compete with God for my allegiance?&rdquo;"
                },
                {
                  color: TEAL,
                  title: "Social Ethics as Inseparable from Worship",
                  body: "The triad of alien, orphan, and widow in 7:6 is the covenant&apos;s shorthand for those most vulnerable to exploitation: those without the social protection of citizenship, family, or a husband&apos;s income. Their treatment was consistently identified in the Law and the Prophets as the diagnostic test of genuine covenant faithfulness. A community that worshipped God while oppressing the vulnerable was, in God&apos;s view, not worshipping God at all. This has direct implications for how Christian communities today evaluate their faithfulness. Attending services, maintaining correct doctrine, and participating in religious culture are not sufficient measures of covenant fidelity. The questions that reveal the reality of our faith include: How does our community treat immigrants and refugees? How do we care for children without parental advocates? How do we support widows and those without family networks? These are not optional social concerns attached to the real business of religion; they are the real business of religion."
                },
                {
                  color: GOLD,
                  title: "Receiving God&apos;s Judgment on False Worship as an Invitation",
                  body: "It is tempting to read the Temple Sermon purely as condemnation&mdash;God&apos;s wrath unleashed against a faithless people. But the sermon is delivered as an invitation, not a verdict. The conditional promise in 7:3 is real: &ldquo;Amend your ways and your deeds, and I will let you dwell in this place.&rdquo; The judgment is coming, but it is not yet complete. The sermon is being preached precisely because there is still time to respond. This is the pastoral dimension of prophetic warning: the announcement of judgment is itself an act of mercy, because it gives the hearers the information they need to change direction before the consequences arrive. When we read the Temple Sermon and feel its force, we are not primarily learning about ancient Judah&apos;s failures; we are receiving an invitation to examine whether we have made similar substitutions and to return to genuine covenant faithfulness while there is still time."
                },
                {
                  color: GREEN,
                  title: "The Danger of Syncretism in Contemporary Life",
                  body: "The Queen of Heaven cult in 7:17&ndash;20 is a case study in syncretism: the addition of alternative religious practices to one&apos;s primary faith identity. The families of Judah were not abandoning the LORD; they were adding the Queen of Heaven to their household religious life, presumably because she met needs they felt the covenant God was not meeting. Contemporary syncretism takes different forms: blending Christian faith with nationalistic religion (making national identity a quasi-sacred loyalty alongside God); blending it with therapeutic spirituality that makes human psychological wellbeing rather than God&apos;s glory the center; blending it with prosperity theology that re-centers religious life around material blessing. These are not additions to Christian faith that leave it intact. They are competitors for the allegiance that the first commandment claims exclusively. The diagnostic question from Jeremiah 7: What other loyalty or framework do I rely on alongside God to secure the things I most deeply need?"
                },
              ].map(card => (
                <div key={card.title} style={{ background: CARD, border: `1px solid ${card.color}33`, borderRadius: 12, padding: 24 }}>
                  <h3
                    style={{ color: card.color, fontWeight: 700, fontSize: 16, margin: "0 0 12px" }}
                    dangerouslySetInnerHTML={{ __html: card.title }}
                  />
                  <p
                    style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: card.body }}
                  />
                </div>
              ))}
            </div>

            {/* Reflection questions */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 14, padding: 28, marginBottom: 32 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "What sacred phrase, status, or practice do you rely on to feel secure before God? Is it functioning as a genuine reality or as a &ldquo;deceptive word&rdquo; in Jeremiah&apos;s sense?",
                  "God commands: amend your ways and deeds. What specific behavior change&mdash;not just attitude change&mdash;is the Spirit highlighting in your life right now?",
                  "How does your community treat the alien, the orphan, and the widow? What would it look like to take 7:5&ndash;6 as a concrete community evaluation checklist?",
                  "Jeremiah was forbidden to intercede for the people because they had reached a certain threshold of refusal. Is there an area of your life where you have been repeatedly warned and repeatedly refused to respond?",
                  "The Queen of Heaven cult was a domestic, family practice embedded in everyday life. What competing allegiances or frameworks have become embedded in your household that might be functioning as gods alongside God?",
                  "God&apos;s warning in this chapter was ultimately an invitation to return. How does receiving prophetic warning as an act of mercy rather than an act of condemnation change how you respond to conviction?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: GREEN, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                    <span
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Videos */}
            <div style={{ marginBottom: 8 }}>
              <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 20, margin: "0 0 8px" }}>Video Teaching</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 24px" }}
                dangerouslySetInnerHTML={{ __html: "Deepen your study of Jeremiah 7 through verse-by-verse teaching, thematic exposition, and historical background." }}
              />
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {videoItems.map(v => (
                  <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "14px 18px" }}>
                      <p style={{ color: TEXT, fontWeight: 600, fontSize: 15, margin: 0 }}>{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
