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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "versebyverse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "E7ZUdnKCIBs", title: "Isaiah 39 - Hezekiah Shows Babylon His Treasures" },
  { videoId: "g9zqBMiVVoo", title: "Isaiah 39 and the Transition to Exile" },
  { videoId: "2a_RLi3p5HE", title: "The Hinge of Isaiah - Chapters 36-39" },
  { videoId: "nIZU6bXA8Z8", title: "Pride and Its Consequences - Isaiah 39" },
];

const VERSE_SECTIONS = [
  {
    id: "v1",
    ref: "39:1-2",
    title: "The Babylonian Envoys and Hezekiah's Open Treasury",
    color: ROSE,
    content: "At that time Merodach-Baladan son of Baladan king of Babylon sent Hezekiah letters and a gift, because he had heard of his illness and recovery. Merodach-Baladan is a historically attested Babylonian king who ruled at the end of the eighth century BC and was a persistent thorn in the side of Assyrian dominance in Mesopotamia. His sending of envoys to Hezekiah is a political as well as personal gesture: Babylon and Judah share a common enemy in Assyria, and Hezekiah&rsquo;s miraculous recovery from illness makes him an interesting potential ally. The pretext of the embassy is the recovery &mdash; congratulations on your healing &mdash; but the subtext is geopolitical. Hezekiah received the envoys gladly and showed them what was in his storehouses &mdash; the silver, the gold, the spices, the fine olive oil &mdash; his entire armory and everything found among his treasures. There was nothing in his palace or in all his kingdom that Hezekiah did not show them. The Hebrew word otzar (treasury, storehouse) appears here &mdash; the word for the accumulated wealth and resources of the kingdom. And Hezekiah showed them everything. The word &ldquo;everything&rdquo; is emphasized in the Hebrew: kol, kol &mdash; all, all. There was nothing he did not show. The act is neither merely hospitable nor merely foolish; it is an act of pride dressed as generosity. Hezekiah wants the Babylonian envoys to see how wealthy, how resourced, how impressive Judah is. He is performing national greatness for foreign dignitaries. The irony is deep: the man who just received fifteen years from God as a gift, the man who just sang &ldquo;the LORD will save me,&rdquo; now seems to be trusting in treasuries rather than in God."
  },
  {
    id: "v2",
    ref: "39:3-4",
    title: "Isaiah's Interrogation: What Did They See?",
    color: GOLD,
    content: "Then Isaiah the prophet went to King Hezekiah and asked, &ldquo;What did those men say, and where did they come from?&rdquo; &ldquo;From a distant land,&rdquo; Hezekiah replied. &ldquo;They came to me from Babylon.&rdquo; Isaiah&rsquo;s questions are deceptively simple. He is not seeking information; he is drawing Hezekiah out to confront what he has done. The prophet asks where they came from before asking what they saw &mdash; establishing the identity of the visitors (Babylon) before the scope of what was revealed. Isaiah asked, &ldquo;What did they see in your palace?&rdquo; &ldquo;They saw everything in my palace,&rdquo; Hezekiah said. &ldquo;There is nothing among my treasures that I did not show them.&rdquo; The repetition of &ldquo;everything&rdquo; and &ldquo;nothing that I did not show them&rdquo; is deliberate. Hezekiah is almost boasting as he confesses. There is pride in the completeness of the display. He showed them everything &mdash; and he is not yet aware that this is the problem. The prophetic interrogation follows a pattern seen elsewhere in Scripture: Nathan&rsquo;s parable before his confrontation with David (2 Samuel 12), Elijah&rsquo;s &ldquo;What are you doing here, Elijah?&rdquo; (1 Kings 19:9). The prophet draws the king out to let his own words convict him before pronouncing judgment. Hezekiah has not read the situation. He does not see that displaying his entire treasury to representatives of the future empire that will sack Jerusalem is not a triumph of diplomacy; it is the beginning of the end."
  },
  {
    id: "v3",
    ref: "39:5-7",
    title: "Isaiah's Prophecy of the Babylonian Captivity",
    color: TEAL,
    content: "Then Isaiah said to Hezekiah, &ldquo;Hear the word of the LORD Almighty: The time will surely come when everything in your palace, and all that your predecessors have stored up until this day, will be carried off to Babylon. Nothing will be left, says the LORD. And some of your descendants, your own flesh and blood who will be born to you, will be taken away, and they will become eunuchs in the palace of the king of Babylon.&rdquo; The oracle is structured as a precise reversal of what Hezekiah has just done: he showed the Babylonians everything in his treasury; everything in his treasury will one day be carried off to Babylon. The Hebrew word galah (uncover, reveal, go into exile) is the key verb of the oracle &mdash; what Hezekiah has uncovered and revealed to the Babylonian envoys will itself be uncovered and taken. The same act of revealing that seemed like a triumph will become the template for dispossession. The prophecy extends beyond the material to the personal: Hezekiah&rsquo;s own descendants will be taken. They will become eunuchs in the palace of the king of Babylon &mdash; a fate that means not just captivity but the elimination of descendants, the end of the line. The Babylonian exile is here announced not as a distant theological abstraction but as the direct consequence of Hezekiah&rsquo;s act of pride. The historical fulfillment comes in 605-586 BC, roughly a century later, when Nebuchadnezzar carries off exactly what Isaiah predicted. Daniel, Shadrach, Meshach, and Abednego serve in the palace of the king of Babylon &mdash; in the role that Isaiah describes here."
  },
  {
    id: "v4",
    ref: "39:8",
    title: "Hezekiah's Troubling Response",
    color: PURPLE,
    content: "&ldquo;The word of the LORD you have spoken is good,&rdquo; Hezekiah replied. For he thought, &ldquo;There will be peace and security in my lifetime.&rdquo; This is one of the most troubling verses in the entire book of Isaiah. Hezekiah&rsquo;s response to the prophecy of Babylonian exile is not grief, not repentance, not intercession for his descendants. It is relief that the judgment will not fall in his own lifetime. The Hebrew word shalom appears here in a deeply ironic register: Hezekiah finds peace in the fact that the disaster will happen after he is dead. He will have peace (shalom) and truth (emet) in his days &mdash; and so he is satisfied. The contrast with Hezekiah&rsquo;s response to his own illness (chapter 38) is stark. When his own death was threatened, he wept bitterly and prayed. When his descendants&rsquo; captivity is threatened, he accepts the word as &ldquo;good&rdquo; because he personally will not suffer it. This is precisely what the requirement of love of neighbor and covenant responsibility demand that he resist: the shortening of his horizon to his own lifetime, the narrowing of his concern to his own skin. The irony is that Hezekiah has just received fifteen extra years from God precisely so that he could do more for God&rsquo;s people &mdash; and his response to the announcement of their future captivity is essentially: at least it won&rsquo;t be on my watch. Josiah&rsquo;s later response to a similar prophecy (2 Kings 22:19-20) is identical in structure &mdash; the king is spared personally, and that is enough. The text presents this as a failure of multigenerational faithfulness."
  },
];

const KEY_THEMES = [
  {
    title: "The Hinge of Isaiah: How Chapter 39 Explains Chapters 40-66",
    color: PURPLE,
    text: "Isaiah 39 is structurally essential to understanding the entire book. Chapters 1-39 have been largely focused on the Assyrian crisis and the faithfulness or unfaithfulness of Judah in that context. Chapters 40-66 will be focused on comfort, restoration, and the return from a Babylonian exile. The question of why chapters 40-66 are needed &mdash; why there will be a Babylonian exile to be comforted from &mdash; is answered in chapter 39: Hezekiah&rsquo;s act of pride before the Babylonian envoys sets in motion the prophetic logic by which Babylon becomes the instrument of judgment. Chapter 39 is the moral explanation for the historical event that chapters 40-66 will comfort. The book is not a random collection; it is a carefully structured argument in which each section prepares for the next. Without 39, the opening words of chapter 40 (&ldquo;Comfort, comfort my people&rdquo;) have no context. With 39, they are the response to a specific failure in a specific historical moment."
  },
  {
    title: "The Word otzar: Treasury, Storehouse, and the Idolatry of Security",
    color: TEAL,
    text: "The Hebrew word otzar (treasury, storehouse) is the central object in Isaiah 39. Hezekiah shows the envoys his otzar &mdash; everything in it. And the oracle promises that everything in his otzar will be carried off to Babylon. The theology of the storehouse in Isaiah and the prophets is consistent: the tendency to store up material security as a substitute for trust in God is a form of idolatry. Isaiah 2 mocks those who fill their land with silver and gold; Isaiah 31 rebukes those who go down to Egypt for horses (military security) rather than looking to the Holy One of Israel. Hezekiah in chapter 38 had just praised God for his deliverance and vowed to worship in the temple all his days. In chapter 39, within what appears to be a very short time, he is performing his wealth before foreign dignitaries as though the treasure in his storehouses is what makes Judah significant. The storehouse has become a substitute for the God who filled it."
  },
  {
    title: "The Word galah: Uncovering, Exile, and the Reversal of Revelation",
    color: ROSE,
    text: "The Hebrew word galah (to uncover, reveal, expose, go into exile) provides the theological wordplay that unifies Isaiah 39. What Hezekiah reveals to the Babylonian envoys will itself be revealed &mdash; that is, stripped away and carried off. The exile (galut) is the ultimate uncovering: it strips away every source of false security and leaves the people with God alone. The prophets consistently interpret the exile in these terms: the loss of land, temple, king, and treasury is the stripping away of every substitute for God so that the people must return to God himself. Isaiah 40-55 is the comfort that follows this stripping. The exile that Hezekiah&rsquo;s pride sets in motion will, paradoxically, produce the purified remnant that chapters 40-55 address. Gaavah (pride, arrogance) is the word for what drives Hezekiah in this chapter &mdash; the pride that the prophets consistently identify as the root of Israel&rsquo;s unfaithfulness."
  },
  {
    title: "Short-Sighted Faith vs. Multigenerational Faithfulness",
    color: GREEN,
    text: "Hezekiah&rsquo;s response in verse 8 &mdash; &ldquo;there will be peace and security in my lifetime&rdquo; &mdash; is the defining diagnostic of a failure the prophets identify repeatedly: the collapse of the covenantal horizon to one&rsquo;s own lifetime. The covenant of God with Israel is explicitly multigenerational (Genesis 17, Deuteronomy 7, 2 Samuel 7). The faithfulness that God requires is faithfulness on behalf of those who come after as well as those who are present. Abraham is called to be faithful so that his descendants will inherit the land. David is promised a dynasty that will endure. The covenant envisions a chain of faithfulness across generations. Hezekiah breaks this chain by contracting his concern to his own lifetime. The pastoral application is direct: faith that is only concerned with my own prosperity and my own peace in my own years is not covenant faith. It is spiritual self-interest dressed in religious language. Multigenerational faithfulness asks: what am I doing now that will bear fruit for those who come after me?"
  },
  {
    title: "Isaiah's Prophetic Interrogation: The Pattern of the Confronting Prophet",
    color: GOLD,
    text: "Isaiah&rsquo;s questioning of Hezekiah in verses 3-4 follows a recognizable prophetic pattern: draw the king out through questions before pronouncing judgment. Nathan does this with David (&ldquo;What do you think of the man who did this?&rdquo;); Elijah does this with Ahab (&ldquo;Have you not murdered a man and seized his property?&rdquo;); Jesus does this throughout the Gospels. The prophet asks not because he does not know the answer but because confession from the mouth of the offender is part of the work of prophetic confrontation. Hezekiah&rsquo;s answers almost compound his guilt: &ldquo;From a distant land; from Babylon&rdquo; and &ldquo;There was nothing in my treasuries that I did not show them&rdquo; are stated almost with pride. The prophet lets the king indict himself, then delivers the word of the LORD. This pattern is a model for pastoral confrontation: draw out the acknowledgment of the action before pronouncing the consequence. The goal is not punishment but clarity &mdash; the king needs to hear himself say what he did before he can understand what he has done."
  },
];

const APPLICATION = [
  {
    question: "How Pride Blinds Us to Consequences",
    color: PURPLE,
    text: "Hezekiah&rsquo;s pride in chapter 39 is all the more striking because it comes immediately after the profound humility of chapter 38. The man who wept bitterly before God, who prayed in desperation, who composed a psalm celebrating his deliverance &mdash; this same man, apparently very soon after, is performing his wealth for Babylonian diplomats without any apparent awareness that he is doing something wrong. This is the anatomy of pride: it does not present itself as pride. Hezekiah almost certainly experienced the embassy as an opportunity to build alliances, to present Judah as a significant player on the international stage, to be a good host. The problem is the motive beneath the action: the desire to be seen, to be impressive, to have one&rsquo;s significance confirmed by foreign dignitaries. The pastoral point is that pride is almost always invisible to the person who is operating under it. We need prophetic voices in our lives willing to ask, as Isaiah asked: &ldquo;What did they see?&rdquo;"
  },
  {
    question: "Short-Sighted Faith and the Multigenerational Call",
    color: GOLD,
    text: "Hezekiah&rsquo;s response to the prophecy of Babylonian exile reveals the deep structure of his failure: his horizon of concern has collapsed to his own lifetime. &ldquo;There will be peace and security in my lifetime&rdquo; is the voice of someone for whom &ldquo;my lifetime&rdquo; is the relevant unit of calculation. The covenant of God with Israel is explicitly about generations &mdash; Abraham&rsquo;s descendants, David&rsquo;s line, the children and children&rsquo;s children of the faithful. The psalms celebrate the God whose faithfulness extends to a thousand generations. The question for every generation of believers is: what am I doing now for those who will come after me? What kind of faith am I modeling and transmitting? What kind of community am I building or degrading? Hezekiah&rsquo;s failure here becomes, ironically, a transmission &mdash; but a transmission of warning rather than faithfulness. The exile he does not grieve becomes the crisis that shapes Israel&rsquo;s spirituality for centuries."
  },
  {
    question: "What Hezekiah's Response Reveals About the Heart",
    color: TEAL,
    text: "The response &ldquo;the word of the LORD you have spoken is good&rdquo; is not technically wrong; it is always right to receive the word of the LORD as good. The problem is what follows: &ldquo;for there will be peace and security in my lifetime.&rdquo; Hezekiah&rsquo;s acceptance of the prophetic word is conditioned on it not affecting him personally. This reveals the heart: his primary concern is his own shalom, not the shalom of his descendants or his people. Compare the responses of other biblical figures to prophecy about future disaster: Abraham intercedes for Sodom (Genesis 18); Moses intercedes for Israel (Exodus 32); Josiah weeps and repents for the sins of his fathers (2 Kings 22). Hezekiah does none of these. His response is relief that the disaster is scheduled for after his death. The measure of the depth of our faith is often how we respond to bad news about those who will come after us &mdash; whether we grieve and pray and intercede, or whether we calculate the timeline and are satisfied that it will not be our problem."
  },
  {
    question: "Pride as Spiritual Amnesia",
    color: ROSE,
    text: "There is a theological dimension to Hezekiah&rsquo;s pride that the chapter&rsquo;s structure makes unavoidable: this is the chapter immediately after Hezekiah&rsquo;s psalm celebrating God&rsquo;s deliverance. He has just sung &ldquo;the LORD will save me&rdquo; and &ldquo;for my benefit I suffered such anguish.&rdquo; He has just acknowledged that his life, his recovery, his fifteen remaining years are gifts from God. And yet he is now displaying the treasury of the kingdom to Babylonian envoys as though it were his own achievement. This is what the prophets call forgetting &mdash; the spiritual amnesia that settles over the people after God delivers them and they become prosperous. Deuteronomy 8 warned explicitly about this: &ldquo;Be careful that you do not forget the LORD your God... when you eat and are satisfied, when you build fine houses and settle down, and when your herds and flocks grow large and your silver and gold increase... then your heart will become proud and you will forget the LORD your God who brought you out of Egypt.&rdquo; Hezekiah is demonstrating Deuteronomy 8 within a chapter of his deliverance."
  },
  {
    question: "Receiving Prophetic Rebuke: What Hezekiah Did Not Do",
    color: GREEN,
    text: "One of the most instructive aspects of Isaiah 39 is what it does not record: Hezekiah does not repent. He does not grieve. He does not intercede. He does not tear his clothes (as he had done in chapter 37). He does not go to the temple. He receives the prophetic word as &ldquo;good&rdquo; and is satisfied. By contrast, when Josiah hears the words of the Book of the Law (2 Kings 22), he tears his robes, weeps, and initiates a national covenant renewal. When Nineveh hears Jonah&rsquo;s prophecy, the king puts on sackcloth and decrees a fast. The appropriate response to prophetic rebuke &mdash; even rebuke that announces judgment delayed to future generations &mdash; is intercession, repentance, and renewed faithfulness. Hezekiah&rsquo;s non-response is a model of what not to do. The pastoral application: when the prophetic word confronts us with the consequences of our choices, the question is whether we are concerned only with our own welfare or whether we feel the weight of what our choices mean for those who come after us."
  },
];

export default function Isaiah39GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Page header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Isaiah &bull; Chapter 39 &bull; Major Prophet
          </div>
          <h1 style={{ color: TEXT, fontSize: 30, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.25 }}>
            Isaiah 39: Hezekiah&rsquo;s Fatal Pride and Isaiah&rsquo;s Prophecy of Babylonian Exile
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: 0, maxWidth: 680 }}>
            The final chapter of Isaiah 1-39. Babylon&rsquo;s envoys visit Hezekiah, who shows them everything in his treasury. Isaiah rebukes him and prophecies that all of it &mdash; and Hezekiah&rsquo;s own descendants &mdash; will be carried off to Babylon. This chapter is the hinge between the Assyrian crisis and the Babylonian comfort of Isaiah 40-66.
          </p>
        </div>

        {/* Quick-facts strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 32 }}>
          {[
            ["Date", "c. 700 BC"],
            ["Parallel", "2 Kings 20"],
            ["Visitors", "Babylonian Envoys"],
            ["Key Figure", "Hezekiah"],
            ["The Failure", "Pride and Display"],
            ["Consequence", "Babylonian Exile"],
          ].map(([k, v]) => (
            <div key={k} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 16px" }}>
              <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
              <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? PURPLE : BORDER}`,
                background: activeTab === t.id ? `${PURPLE}20` : "transparent",
                color: activeTab === t.id ? PURPLE : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB: OVERVIEW */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>Chapter Summary</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 39 is one of the shortest and most consequential chapters in the book &mdash; only eight verses, but those eight verses turn the entire prophetic trajectory of Isaiah from Assyria to Babylon and explain why the great consolation of chapters 40-66 will be needed. The Babylonian king Merodach-Baladan sends envoys to Jerusalem, ostensibly to congratulate Hezekiah on his recovery. Hezekiah welcomes them and shows them everything in his treasury &mdash; everything. Isaiah arrives and interrogates the king, and when the full scope of what Hezekiah has done becomes clear, he delivers one of the most precise prophetic judgments in Scripture: everything you showed them will be carried off to Babylon. Your descendants will serve in the palace of the king of Babylon." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter is all the more devastating for its placement. It follows immediately after chapter 38, in which Hezekiah composed a psalm of profound humility and dependence on God &mdash; &ldquo;the LORD will save me; we will sing with stringed instruments all the days of our lives in the temple of the LORD.&rdquo; The contrast between that posture and the pride of chapter 39 is the theological heart of the book&rsquo;s first half. Hezekiah is at once a model of faith (chapters 37-38) and a model of failure (chapter 39). The book holds both together without resolving the tension." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Hezekiah&rsquo;s response to Isaiah&rsquo;s oracle is the most troubling element: &ldquo;The word of the LORD you have spoken is good,&rdquo; he says, &ldquo;for there will be peace and security in my lifetime.&rdquo; He accepts the judgment as good news because it will not affect him personally. This is the failure of multigenerational faithfulness &mdash; the contraction of spiritual concern to one&rsquo;s own lifetime &mdash; and it sets the stage for everything that follows in the rest of the book." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>The Structural Significance of Isaiah 39</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { ref: "Chs. 1-12", title: "Judgment on Judah and Israel; the Messianic hope", color: ROSE },
                  { ref: "Chs. 13-27", title: "Oracles against the nations; eschatological vision", color: GOLD },
                  { ref: "Chs. 28-35", title: "Woes against those who trust in Egypt; the highway of holiness", color: TEAL },
                  { ref: "Chs. 36-37", title: "The Assyrian crisis; Hezekiah&rsquo;s prayer; miraculous deliverance", color: GREEN },
                  { ref: "Ch. 38", title: "Hezekiah&rsquo;s illness, healing, and psalm of thanksgiving", color: PURPLE },
                  { ref: "Ch. 39", title: "Hezekiah&rsquo;s pride; Isaiah&rsquo;s prophecy of Babylonian exile -- THE HINGE", color: ROSE },
                  { ref: "Chs. 40-55", title: "Comfort, comfort my people; the Servant Songs; return from exile", color: GOLD },
                  { ref: "Chs. 56-66", title: "The restored community; the new creation; the glory of Zion", color: TEAL },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>{item.ref}</span>
                    <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.6 }}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>Short-Sighted Faith vs. Multigenerational Faithfulness</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Hezekiah&rsquo;s response to Isaiah&rsquo;s prophecy reveals a fundamental contraction of his covenantal vision. The table below contrasts two approaches to faith across time:" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Short-sighted faith", desc: "Concerned with peace and security within my own lifetime; accepts judgment that falls on future generations without grief or intercession; horizon of concern is personal and immediate", color: ROSE },
                  { label: "Multigenerational faithfulness", desc: "Concerned with what is planted now that will bear fruit for those who come after; weeps and intercedes when future generations are threatened; horizon of concern is the covenant across generations", color: GREEN },
                  { label: "Hezekiah in ch. 38", desc: "Weeps bitterly about his own death; prays with desperation; turns his face to the wall; composes a psalm for transmission to future generations about God&rsquo;s faithfulness", color: GOLD },
                  { label: "Hezekiah in ch. 39", desc: "Accepts the prophecy of his descendants&rsquo; captivity as good news because it will not happen in his lifetime; no tears, no prayer, no intercession, no repentance", color: PURPLE },
                ].map(item => (
                  <div key={item.label} style={{ padding: "14px 18px", background: BG, borderRadius: 10, borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ color: item.color, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{item.label}</div>
                    <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>Key Scripture References</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { ref: "Isaiah 39:1", note: "Merodach-Baladan of Babylon sends envoys to Hezekiah" },
                  { ref: "Isaiah 39:2", note: "Hezekiah shows them everything in his treasury -- nothing withheld" },
                  { ref: "Isaiah 39:3", note: "Isaiah's interrogation: where did they come from? What did they see?" },
                  { ref: "Isaiah 39:5", note: "Isaiah's oracle: everything will be carried off to Babylon" },
                  { ref: "Isaiah 39:7", note: "Your descendants will become eunuchs in the palace of Babylon" },
                  { ref: "Isaiah 39:8", note: "Hezekiah's troubling response: there will be peace in my lifetime" },
                  { ref: "Isaiah 40:1", note: "Comfort, comfort my people -- the opening of the Babylonian comfort section" },
                  { ref: "2 Kings 20:12-19", note: "The parallel account of the Babylonian embassy and Isaiah's oracle" },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <VerseRef reference={item.ref} inline={false}>{item.ref}</VerseRef>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB: KEY THEMES */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Isaiah 39</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 39 is a chapter of failure, irony, and structural significance. Its eight verses carry enormous theological weight because they explain why everything that follows in the book of Isaiah will be necessary. The themes below trace the logic of Hezekiah&rsquo;s failure and its implications for the rest of the book." }}
              />
            </div>
            {KEY_THEMES.map((theme, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${openTheme === String(i) ? theme.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 12,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenTheme(openTheme === String(i) ? null : String(i))}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "18px 22px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ color: theme.color, fontWeight: 700, fontSize: 15 }}>{theme.title}</span>
                  <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, fontWeight: 400 }}>{openTheme === String(i) ? "-" : "+"}</span>
                </button>
                {openTheme === String(i) && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: theme.text }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Hebrew Words Worth Knowing</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { word: "otzar", meaning: "Treasury, storehouse", usage: "The central object of the chapter &mdash; what Hezekiah showed to the Babylonian envoys and what Isaiah prophesied would be carried off; the accumulation of material security that becomes a substitute for trust in God" },
                  { word: "galut", meaning: "Exile, captivity", usage: "The condition Isaiah prophesies for Hezekiah&rsquo;s descendants &mdash; the state of being in exile in Babylon; the great crisis of Israel&rsquo;s history that Isaiah 40-55 will address" },
                  { word: "galah", meaning: "Uncover, reveal, go into exile", usage: "The key verb of Isaiah&rsquo;s oracle &mdash; what Hezekiah revealed to the Babylonians will itself be revealed and stripped away; the theological irony of uncovering leading to exile" },
                  { word: "gaavah", meaning: "Pride, arrogance", usage: "The root of Hezekiah&rsquo;s failure in this chapter &mdash; the pride that causes him to perform his wealth before foreign dignitaries instead of crediting God; the same pride the prophets condemn in Israel&rsquo;s kings throughout the narrative" },
                  { word: "shalom", meaning: "Peace, wholeness, well-being", usage: "Used ironically in v. 8: Hezekiah finds shalom in the prophecy because the disaster will not happen in his lifetime; the word for the fullness of God&rsquo;s blessing is reduced to a personal timeline calculation" },
                ].map(item => (
                  <div key={item.word} style={{ padding: "14px 18px", background: BG, borderRadius: 10 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "baseline", marginBottom: 6 }}>
                      <span style={{ color: TEAL, fontWeight: 800, fontSize: 15, fontStyle: "italic" }}>{item.word}</span>
                      <span style={{ color: GOLD, fontWeight: 700, fontSize: 12 }}>&mdash; {item.meaning}</span>
                    </div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.usage }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB: VERSE BY VERSE */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "versebyverse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: Isaiah 39:1&ndash;8</h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "A close reading of all 8 verses of Isaiah 39, organized by the major movements of the chapter. Click any section to expand the commentary." }}
              />
            </div>
            {VERSE_SECTIONS.map(section => (
              <div
                key={section.id}
                style={{
                  background: CARD,
                  border: `1px solid ${openVerse === section.id ? section.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 12,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenVerse(openVerse === section.id ? null : section.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "18px 22px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ background: `${section.color}20`, border: `1px solid ${section.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: section.color, fontWeight: 700, whiteSpace: "nowrap" }}>{section.ref}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{section.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, fontWeight: 400 }}>{openVerse === section.id ? "-" : "+"}</span>
                </button>
                {openVerse === section.id && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>The Narrative Movement of Isaiah 39</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { step: "1", event: "Merodach-Baladan of Babylon sends envoys and a gift to Hezekiah (v. 1)" },
                  { step: "2", event: "Hezekiah receives the envoys gladly and shows them everything in his treasury (v. 2)" },
                  { step: "3", event: "Isaiah arrives and asks: where did those men come from? (v. 3)" },
                  { step: "4", event: "Hezekiah answers: from Babylon; and I showed them everything (vv. 3-4)" },
                  { step: "5", event: "Isaiah delivers the oracle: everything will be carried off to Babylon (v. 6)" },
                  { step: "6", event: "The oracle extends to Hezekiah&rsquo;s descendants: they will serve in Babylon (v. 7)" },
                  { step: "7", event: "Hezekiah responds: the word of the LORD is good; there will be peace in my lifetime (v. 8)" },
                  { step: "8", event: "The chapter ends without repentance, intercession, or further prophetic word" },
                ].map(item => (
                  <div key={item.step} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, color: PURPLE, fontWeight: 800, fontSize: 12, borderRadius: "50%", width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{item.step}</span>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.event }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Isaiah 39 and Its Fulfillment in the Historical Books</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The oracle of Isaiah 39 finds its fulfillment approximately a century later in the Babylonian campaigns of Nebuchadnezzar. The following connections between the oracle and its fulfillment are worth noting:" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { oracle: "Everything in the palace carried off (v. 6)", fulfillment: "2 Kings 24:13 -- all the treasures of the house of the LORD and the palace; 2 Kings 25:13-17 -- the bronze pillars and vessels carried to Babylon", color: ROSE },
                  { oracle: "Your descendants will become eunuchs (v. 7)", fulfillment: "Daniel 1:3-7 -- Daniel, Hananiah, Mishael, and Azariah taken to serve in Nebuchadnezzar&rsquo;s palace", color: GOLD },
                  { oracle: "Nothing will be left (v. 6)", fulfillment: "2 Kings 25:9 -- Nebuchadnezzar&rsquo;s army burned the temple, the palace, and all Jerusalem", color: TEAL },
                  { oracle: "Carried off to Babylon (v. 6)", fulfillment: "2 Kings 25:11 -- the population of Jerusalem exiled to Babylon; Daniel 1:1-2 -- Nebuchadnezzar carried off vessels from the temple", color: PURPLE },
                ].map(item => (
                  <div key={item.oracle} style={{ padding: "14px 18px", background: BG, borderRadius: 10, borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ color: item.color, fontWeight: 700, fontSize: 12, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Oracle (Isaiah 39)</div>
                    <div style={{ color: TEXT, fontSize: 13, marginBottom: 8 }}>{item.oracle}</div>
                    <div style={{ color: item.color, fontWeight: 700, fontSize: 12, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Fulfillment</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.fulfillment }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB: APPLICATION */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Living with Isaiah 39</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 39 is the chapter that holds a mirror up to the persistent human tendency to contract our spiritual vision to our own lifetime and our own welfare. Hezekiah is not a villain; he is a complicated believer whose faith was genuine (chapters 37-38) and whose pride was real (chapter 39). This makes him recognizable." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The pastoral challenge of this chapter is to hold together the call to multigenerational faithfulness &mdash; planting seeds that will not be harvested in our own lifetime, grieving over what our choices mean for those who come after us &mdash; with the reality that we are limited, finite, and unable to control what happens after we die. The answer is not control but faithfulness: living in such a way that the faith, the testimony, and the community we hand on are stronger than the one we received." }}
              />
            </div>

            {APPLICATION.map((item, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${openApp === String(i) ? item.color : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 12,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenApp(openApp === String(i) ? null : String(i))}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "18px 22px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ color: item.color, fontWeight: 700, fontSize: 14 }}>{item.question}</span>
                  <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, fontWeight: 400 }}>{openApp === String(i) ? "-" : "+"}</span>
                </button>
                {openApp === String(i) && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Hezekiah showed the Babylonian envoys everything in his treasury. Where in your life do you find yourself performing your achievements or possessions for the admiration of others?",
                  "Isaiah asked Hezekiah two questions: where did they come from, and what did they see? If someone asked those questions about a recent decision you made, what would the answers reveal?",
                  "Hezekiah found peace in the fact that the disaster would not happen in his lifetime. Is there a consequence of your choices that you have accepted because it will not affect you personally but will affect those who come after you?",
                  "The chapter ends without Hezekiah repenting or interceding. What would genuine repentance have looked like in that moment, and what does that suggest for how we respond when we hear hard prophetic words?",
                  "Isaiah 39 is the hinge that explains why Isaiah 40 begins with comfort. What &ldquo;hinges&rdquo; in your own story explain why certain chapters of comfort or renewal became necessary?",
                ].map((q, qi) => (
                  <div key={qi} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 18px", background: BG, borderRadius: 10 }}>
                    <span style={{ color: PURPLE, fontWeight: 900, fontSize: 15, minWidth: 22, paddingTop: 1 }}>{qi + 1}.</span>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Teaching Videos on Isaiah 39</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Video teaching on Hezekiah&rsquo;s pride, Isaiah&rsquo;s prophecy of exile, and the structural significance of Isaiah 39 as the hinge of the book.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <p style={{ color: TEXT, fontSize: 14, fontWeight: 600, margin: 0 }}>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
