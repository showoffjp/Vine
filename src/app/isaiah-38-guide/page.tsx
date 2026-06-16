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
  { videoId: "2a_RLi3p5HE", title: "Isaiah 38 - Hezekiah's Illness and Healing" },
  { videoId: "bDdaVkMr9ug", title: "The Shadow Goes Back - Isaiah 38 Commentary" },
  { videoId: "g9zqBMiVVoo", title: "Hezekiah's Song of Thanksgiving Isaiah 38" },
  { videoId: "3u5CUZ5tK2U", title: "Prayer in the Face of Death - Isaiah 38" },
];

const VERSE_SECTIONS = [
  {
    id: "v1",
    ref: "38:1-3",
    title: "Isaiah's Death Sentence and Hezekiah's Prayer",
    color: ROSE,
    content: "In those days Hezekiah became ill and was at the point of death. The prophet Isaiah son of Amoz went to him and said, &ldquo;This is what the LORD says: Put your house in order, because you are going to die; you will not recover.&rdquo; The phrase &ldquo;put your house in order&rdquo; is a direct death sentence delivered through the prophet. Isaiah does not soften it or surround it with comfort. There is no hedging, no &ldquo;unless you pray&rdquo; &mdash; just the word of God through the prophet: you will die. This represents God&rsquo;s general purpose at that moment, before the prayer that follows changes the situation. Hezekiah turned his face to the wall and prayed to the LORD, &ldquo;Remember, LORD, how I have walked before you faithfully and with wholehearted devotion and have done what is good in your eyes.&rdquo; And Hezekiah wept bitterly. The turning of the face to the wall is a gesture of utter vulnerability and prayer &mdash; a turning away from the world toward God alone. Hezekiah does not argue with the prophetic word or deny his condition. He prays. His appeal is covenantal: &ldquo;Remember, LORD, how I have walked before you faithfully.&rdquo; This is the language of covenant loyalty &mdash; the Hebrew word tamim (wholehearted, blameless) describes the kind of faithfulness that God himself requires. Hezekiah is not claiming sinlessness; he is claiming covenant loyalty. And he wept bitterly &mdash; the Hebrew is emphatic. This is not quiet resignation. This is grief at the prospect of death, grief that pours out before God without embarrassment."
  },
  {
    id: "v2",
    ref: "38:4-8",
    title: "God's Response: Fifteen More Years and Deliverance from Assyria",
    color: GOLD,
    content: "Then the word of the LORD came to Isaiah: &ldquo;Go and tell Hezekiah, &lsquo;This is what the LORD, the God of your father David, says: I have heard your prayer and seen your tears; I will add fifteen years to your life.&rsquo;&rdquo; The reversal is immediate and total. The death sentence of verse 1 is overturned before Isaiah has even left the middle court. God has heard the prayer and seen the tears &mdash; both the words and the emotion of the prayer are attended to. The appeal to God &ldquo;of your father David&rdquo; ties the answer to the Davidic covenant: the promises made to David are the ground of God&rsquo;s ongoing relationship with Hezekiah. The number fifteen is specific: this is not a vague promise of recovery but a precise grant of time. Hezekiah now has a calendar. And I will deliver you and this city from the hand of the king of Assyria. I will defend this city. The healing of Hezekiah is inseparable from the deliverance of Jerusalem &mdash; both are part of the same divine act of faithfulness. This is the same promise that will be fulfilled dramatically in chapter 37. The sign is provided: This is the LORD&rsquo;s sign to you that the LORD will do what he has promised: I will make the shadow cast by the sun go back the ten steps it has gone down on the stairway of Ahaz. So the sunlight went back the ten steps it had gone down. The sign of the sundial going back ten steps is one of the most extraordinary miracles in the Old Testament. The Hebrew word tselel (shadow) is key &mdash; the shadow of time itself seems to reverse. Whether this was a local optical phenomenon, a miraculous reversal of the earth&rsquo;s rotation, or a sign in some other form, the text presents it as a divine act confirming the prophetic promise. The sign is given not as a condition but as a confirmation &mdash; God grants the sign as a gift to strengthen faith."
  },
  {
    id: "v3",
    ref: "38:9-11",
    title: "Hezekiah's Writing: Introduction to the Miktam",
    color: TEAL,
    content: "A writing of Hezekiah king of Judah after his illness and recovery. This verse introduces what follows as a formal literary composition &mdash; Hezekiah&rsquo;s own account of his experience. The Hebrew word michtav (writing) suggests an official or significant document. What follows in verses 10-20 is a psalm &mdash; one of the very few biblical psalms attributed to a specific historical figure outside of David and Solomon. I said: &ldquo;In the prime of my life must I go through the gates of Sheol and be robbed of the rest of my years?&rdquo; The language of &ldquo;the gates of Sheol&rdquo; is the language of the underworld in ancient Near Eastern thought. Sheol in the Old Testament is the place of the dead &mdash; not a place of conscious punishment or bliss, but the shadowy realm beneath, the place of no return. Hezekiah&rsquo;s complaint is not primarily theological but existential: &ldquo;in the prime of my life&rdquo; &mdash; he is dying too soon. He has not finished. The years he expected to have are being taken from him. I said, &ldquo;I will not again see the LORD himself in the land of the living; no longer will I look on my fellow man, or be with those who now dwell in this world.&rdquo; What troubles Hezekiah most is not pain or suffering but the loss of relationship &mdash; with God, with his people, with the world of the living. The psalmists frequently express this concern: that Sheol is a place where one cannot praise God, cannot see his face, cannot participate in the community of the covenant. Death is loss of relationship. This is the theological anguish beneath the physical illness."
  },
  {
    id: "v4",
    ref: "38:12-14",
    title: "The Imagery of Illness: Weaver, Lion, and Swallow",
    color: PURPLE,
    content: "Like a shepherd&rsquo;s tent my house has been pulled down and taken from me. Like a weaver I have rolled up my life, and he has cut me off from the loom; day and night you made an end of me. The imagery of the weaver cutting off the thread is one of the most evocative in the entire psalm. Life is compared to a piece of weaving &mdash; the work in progress on the loom. God as the weaver cuts the thread before the work is complete. The incompleteness is the source of anguish: a life cut short is like a tapestry with no ending, a story with no resolution. The shepherd&rsquo;s tent pulled down is equally vivid: a tent is a temporary dwelling, but even that is removed. Hezekiah has no permanent dwelling &mdash; only the temporary tent of his mortal body, and that is being dismantled. I waited patiently till dawn, but like a lion he broke all my bones; day and night you made an end of me. The lion imagery is startling: God is the one who &ldquo;broke all my bones.&rdquo; Hezekiah is not blaming evil or chance or his enemies &mdash; he places the illness within the sovereign action of God. This is the theology of lament: bringing the suffering to God and addressing it directly to him, even when God seems to be the agent of the suffering. Like a swift or thrush, I chirped; I moaned like a mourning dove. My eyes grew weak as I looked to the heavens. I am being oppressed; Lord, come to my aid! The bird imagery moves from the mighty lion to the small bird &mdash; Hezekiah is reduced from a king to a chirping swift. The diminishment is total. And yet the direction of his gaze remains upward, toward heaven, toward God."
  },
  {
    id: "v5",
    ref: "38:15-17",
    title: "The Turn: Bitter Things Were for His Good",
    color: GREEN,
    content: "But what can I say? He has spoken to me, and he himself has done this. I will walk humbly all my years because of this anguish of my soul. The grammar of verse 15 marks the turn in the psalm &mdash; the Hebrew word umah (but what?) signals a shift from complaint to reflection. Hezekiah cannot respond with clever argument or protest. God has spoken, and God himself has done this. The appropriate response is walking humbly before God for all his remaining years. The Hebrew word dalah (walk humbly, go softly) suggests a deliberate, careful, reverent way of moving through life &mdash; shaped by the experience of mortal crisis. Lord, by such things people live; and my spirit finds life in all of them. You restored me to health and let me live. Surely it was for my benefit that I suffered such anguish. The climactic theological statement: the bitter things were for his good. The Hebrew is emphatic: &ldquo;Surely it was for my benefit (literally: for shalom/peace) that I had great bitterness.&rdquo; The word shalom here is arresting &mdash; the state of wholeness and well-being is said to have come through, not despite, the bitter experience. In your love you kept me from the pit of destruction; you have put all my sins behind your back. And here the psalm deepens unexpectedly: the healing is also forgiveness. God has put all Hezekiah&rsquo;s sins behind his back &mdash; the word used is the same word for the deliberate forgetting of the Suffering Servant in Isaiah 53:6. The pit of destruction is avoided not merely by physical healing but by divine forgiveness. Physical restoration and spiritual forgiveness are two aspects of the same divine act of love."
  },
  {
    id: "v6",
    ref: "38:18-20",
    title: "The Living Praise You: Hezekiah's Doxology",
    color: TEAL,
    content: "For the grave cannot praise you, death cannot sing your praises; those who go down to the pit cannot hope for your faithfulness. The theological argument for healing is praise: the dead cannot praise God. This is the same argument that appears throughout the Psalms (Ps 6:5; 30:9; 88:10-12; 115:17): if I die, who will praise you? The argument is not selfish; it is theological. The praise of God among the living is the purpose for which humans are made, and death ends the capacity for that praise in the earthly community. The living, the living &mdash; they praise you, as I am doing today; parents tell their children about your faithfulness. The repetition &ldquo;the living, the living&rdquo; is emphatic and jubilant. This is the voice of the one who has returned from the edge of death and who now understands what living is for: to praise God, and to pass on the knowledge of God&rsquo;s faithfulness to the next generation. The intergenerational dimension is explicit: &ldquo;parents tell their children about your faithfulness.&rdquo; Hezekiah&rsquo;s healing is not just for his own benefit; it is for the sake of testimony across generations. The LORD will save me, and we will sing with stringed instruments all the days of our lives in the temple of the LORD. The psalm ends with a declaration of worship in the temple. The healing is not merely physical recovery; it is restoration to the worship life of Israel. Hezekiah will spend his fifteen remaining years singing in the temple."
  },
  {
    id: "v7",
    ref: "38:21-22",
    title: "The Poultice of Figs and Hezekiah's Question",
    color: ROSE,
    content: "Isaiah had said, &ldquo;Prepare a poultice of figs and apply it to the boil, and he will recover.&rdquo; The practical instruction follows the oracle. A poultice of figs (deval&rsquo;ot te&rsquo;enim) was a standard ancient medical treatment &mdash; figs were known for their drawing properties, used to treat skin conditions and infections. The fact that God gives a physical remedy alongside the miracle is theologically significant: God&rsquo;s healing ordinarily works through natural means as well as supernatural intervention. Prayer and medicine are not in competition; they are complementary instruments of divine healing. Hezekiah had asked, &ldquo;What will be the sign that I will go up to the temple of the LORD?&rdquo; The placement of this verse at the end (after the psalm) rather than in its chronological location (before the sundial sign in vv. 7-8) is a literary choice. In the parallel account of 2 Kings 20, these verses appear in their chronological sequence. Isaiah&rsquo;s literary placement here gives priority to the psalm &mdash; the theological and poetic reflection on the experience &mdash; before returning to the narrative details. The sign Hezekiah asks for is not merely medical recovery but restoration to temple worship: &ldquo;that I will go up to the temple of the LORD.&rdquo; For Hezekiah, the measure of full recovery is being able to worship. This ties together the entire chapter: illness threatens not just life but the capacity to praise; healing restores not just breath but worship. The sundial going back, the poultice of figs, and the fifteen years are all elements of a single act of divine faithfulness &mdash; the restoration of a worshipping king to his worshipping life."
  },
];

const KEY_THEMES = [
  {
    title: "Hezekiah's Prayer and the Reversal of the Death Sentence (vv. 1-6)",
    color: PURPLE,
    text: "The most theologically striking feature of Isaiah 38:1-6 is the sequence: God pronounces a death sentence through his prophet, Hezekiah prays, and God reverses the sentence. This raises a profound question about the nature of prophetic words and divine sovereignty. The death sentence was not a prediction of something fixed and inevitable &mdash; it was a word that described God&rsquo;s purpose at that moment, a purpose that prayer could and did change. The Hebrew word shub (turn/return/repent) is central: just as God calls Israel to turn back to him, here God himself turns back from his declared purpose in response to prayer. This passage is a powerful argument for the efficacy of prayer &mdash; not because prayer changes God&rsquo;s essential nature or will, but because God has designed his governance of history to include and respond to the prayers of his people. The God who ordained both means and ends has ordained prayer as a genuine means by which his purposes are accomplished."
  },
  {
    title: "The Shadow on the Sundial: The Sign of tselel (vv. 7-8)",
    color: TEAL,
    text: "The sign of the shadow going back on the stairway of Ahaz is one of the most debated miracles in the Old Testament. The Hebrew word tselel (shadow) is related to the word for shelter, covering &mdash; a shadow cast by the sun. The stairway of Ahaz may have been a royal sundial or a stepped architectural feature that served to track time by the position of shadows. Whatever the physical mechanism, the sign is a reversal of time &mdash; the shadow goes back rather than forward. In the context of Hezekiah&rsquo;s illness and the grant of fifteen more years, the reversing shadow is a visible enactment of what God is doing in time: giving back what was being taken away. Astronomers have observed that a solar refraction event could cause shadows to behave anomalously, but the text makes no attempt to explain the mechanism. The sign is given to confirm the prophetic word, and its very inexplicability is part of its function as a sign."
  },
  {
    title: "The Imagery of the Miktam: Weaver, Lion, and the Gates of Sheol",
    color: ROSE,
    text: "The psalm of Hezekiah (vv. 9-20) deploys a remarkable range of imagery to describe the experience of near-death illness. The weaver cutting off the thread (v. 12) captures the sense of incompleteness &mdash; a life in progress, suddenly interrupted. The lion breaking all the bones (v. 13) captures the violence and power of serious illness &mdash; the body overwhelmed by something stronger than itself. The gates of Sheol (v. 10) invokes the ancient Near Eastern conception of the underworld as a fortified city with gates that do not open from the inside. The chirping swift and mourning dove (v. 14) capture the diminishment of the sufferer &mdash; reduced from royal dignity to small, helpless creature. Together, these images constitute a theology of illness: it is experienced as invasion, incompleteness, loss of relationship, and diminishment. The psalm does not sanitize the experience of mortal illness. It gives language to what the experience actually feels like &mdash; and then shows that experience being transformed by divine encounter."
  },
  {
    title: "Bitter Things Were for His Good: The Theology of Shalom Through Suffering",
    color: GREEN,
    text: "The central theological claim of Hezekiah&rsquo;s psalm is the statement of verse 17: &ldquo;Surely it was for my benefit that I suffered such anguish.&rdquo; The Hebrew underlying &ldquo;benefit&rdquo; is shalom &mdash; the state of wholeness, well-being, and flourishing. The paradox is that shalom came through bitterness. This is not a facile statement that suffering is good in itself; it is the retrospective recognition of one who has come through suffering and found that the crisis reshaped him. The bitterness of the illness forced Hezekiah into a more profound dependence on God, a more humble way of walking (v. 15), and a more urgent understanding of the purpose of his remaining years. The bitter things were, in retrospect, a gift. This theological insight anticipates the great theology of suffering in Romans 5 and James 1: trials produce endurance, endurance produces character, and character produces hope."
  },
  {
    title: "The Living, the Living Praise You: Theology of Worship and Life",
    color: GOLD,
    text: "The psalm&rsquo;s doxology (vv. 18-20) rests on a fundamental claim about the relationship between life and worship: the living praise God; the dead cannot. The word chazayon (vision/revelation) is related to the prophetic vocabulary of Isaiah &mdash; the same root appears in the title of the book (Isaiah&rsquo;s chazayon, his vision). But here the emphasis is on the capacity for praise as the defining characteristic of the living. This does not diminish the hope of resurrection (which Isaiah 26 has already anticipated), but it does establish that the life of faith is fundamentally a life of praise. The intergenerational dimension &mdash; parents telling children about God&rsquo;s faithfulness &mdash; is essential: the testimony of deliverance is not meant to remain private. It is meant to be transmitted. Hezekiah&rsquo;s fifteen years are fifteen years of testimony."
  },
];

const APPLICATION = [
  {
    question: "Responding to Mortal Threat: Hezekiah's Model",
    color: PURPLE,
    text: "Hezekiah&rsquo;s response to the death sentence is instructive in its physicality and directness: he turns his face to the wall, prays, and weeps bitterly. He does not pretend. He does not perform stoic acceptance. He grieves honestly and openly before God. In a cultural moment that often prizes either denial of mortality or resignation to it, Hezekiah&rsquo;s response is a third way: honest grief brought directly to God. The appeal &mdash; &ldquo;remember how I have walked before you&rdquo; &mdash; is not a claim of perfect performance but of covenant relationship. It is the prayer of someone who has tried to live faithfully and is now calling on the God with whom that life was lived to remember and to act. When we or those we love face mortal crisis, Hezekiah models both the legitimacy of grief and the direction in which that grief should be turned."
  },
  {
    question: "Prayer That Changes Things: What Hezekiah Teaches About Intercession",
    color: GOLD,
    text: "The most challenging aspect of Isaiah 38 for modern readers may be the most obvious: Hezekiah prays, and God changes what he said he would do. This raises deep questions about divine sovereignty and the efficacy of prayer that theologians have wrestled with for centuries. But the text simply presents it as fact: God heard the prayer and saw the tears, and he reversed the sentence. The pastoral implication is that prayer matters &mdash; not as a mechanism by which we bend God&rsquo;s will to ours, but as a genuine participation in the way God governs his world. God has built into the structure of reality a place for human prayer. The appropriate response to serious illness &mdash; one&rsquo;s own or another&rsquo;s &mdash; is not passive acceptance but active, specific, honest prayer. James 5:14-16 takes up exactly this principle: the prayer of a righteous person is powerful and effective."
  },
  {
    question: "Bitter Things for My Good: Finding God in Suffering",
    color: TEAL,
    text: "Hezekiah&rsquo;s retrospective statement &mdash; &ldquo;for my benefit I suffered such anguish&rdquo; &mdash; is a statement that can only be made from the other side of the suffering. It would be cruel to say this to someone in the middle of crisis; it is the testimony of one who has come through. The psalm teaches us that suffering can be processed through prayer, lamentation, and honest address to God &mdash; and that on the other side of that processing, meaning can be found. Not that the suffering is therefore good in itself, but that God uses it for shalom &mdash; for the wholeness and depth of the person who went through it. The pastoral application: we do not need to explain suffering or justify it in the moment. We need to help people bring it to God honestly, as Hezekiah did, and trust that God who works all things together for good (Romans 8:28) can be found in the bitterness."
  },
  {
    question: "The Living Praise You: Recovering the Purpose of Life After Crisis",
    color: ROSE,
    text: "Hezekiah&rsquo;s psalm ends with a declaration of worship: &ldquo;we will sing with stringed instruments all the days of our lives in the temple of the LORD.&rdquo; The fifteen years he is given are not primarily years of political achievement or personal ambition; they are years of praise. This is the reorientation that mortal crisis can produce: the question shifts from &ldquo;what am I going to accomplish?&rdquo; to &ldquo;how am I going to live?&rdquo; The living praise God &mdash; and the awareness that life is finite, that it could have ended, intensifies the urgency of praise. Many people who have passed through serious illness or mortal crisis report exactly this reorientation. Hezekiah&rsquo;s psalm gives theological language to what they experience: the recognition that praising God and transmitting his faithfulness to the next generation are the central purposes of the years that remain."
  },
  {
    question: "The Poultice of Figs: Faith, Medicine, and Divine Healing",
    color: GREEN,
    text: "Isaiah prescribes a poultice of figs for Hezekiah&rsquo;s illness alongside the miraculous sign and the prophetic promise. God uses both the miraculous and the medical. This guards against two errors: the error of refusing medical treatment in favor of &ldquo;faith alone,&rdquo; and the error of treating medical treatment as the whole of the response to illness and excluding prayer. Hezekiah receives both the divine oracle and the fig poultice. Isaiah prescribes both the prophetic word and the medicinal treatment. In the biblical model, these are not in tension. The same God who reverses the death sentence also instructs the application of a fig poultice. Medical treatment is not a failure of faith; it is one of the instruments through which God heals. The appropriate response to illness is prayer, medical treatment, and trust in the God who works through both."
  },
];

export default function Isaiah38GuidePage() {
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
          <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Isaiah &bull; Chapter 38 &bull; Major Prophet
          </div>
          <h1 style={{ color: TEXT, fontSize: 30, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.25 }}>
            Isaiah 38: Hezekiah&rsquo;s Illness, the Shadow Goes Back, and His Song of Thanksgiving
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: 0, maxWidth: 680 }}>
            Hezekiah becomes deathly ill and receives a death sentence from the prophet Isaiah. He prays and weeps, and God grants him fifteen more years. The sundial shadow reverses as a sign. Hezekiah then composes a psalm &mdash; the Miktam &mdash; celebrating his deliverance and reflecting on what it means to live in the face of death.
          </p>
        </div>

        {/* Quick-facts strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 32 }}>
          {[
            ["Date", "701 BC"],
            ["Parallel", "2 Kings 20"],
            ["Setting", "Jerusalem"],
            ["Key Figure", "Hezekiah"],
            ["The Sign", "Sundial Reversed"],
            ["Years Granted", "Fifteen Years"],
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
                border: `1px solid ${activeTab === t.id ? GOLD : BORDER}`,
                background: activeTab === t.id ? `${GOLD}20` : "transparent",
                color: activeTab === t.id ? GOLD : MUTED,
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
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>Chapter Summary</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 38 is a chapter of crisis and restoration that parallels 2 Kings 20 almost exactly. Hezekiah is struck by a life-threatening illness &mdash; likely a severe boil or infection &mdash; and Isaiah delivers what amounts to a death sentence from God: &ldquo;Put your house in order, because you are going to die; you will not recover.&rdquo; Hezekiah&rsquo;s response is immediate prayer, deep grief, and an appeal to his covenantal faithfulness before God. The divine response reverses the sentence with precision: fifteen more years, and a miraculous sign to confirm it." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter then pivots to a remarkable literary artifact: the Miktam of Hezekiah (vv. 9-20), a psalm composed in the aftermath of the illness and recovery. This is one of the few biblical psalms attributed to a historical figure other than David or Solomon, and it is a masterwork of lament-turned-thanksgiving. Its images &mdash; the weaver cutting off the thread, the lion breaking the bones, the gates of Sheol, the chirping swift, the living who praise God &mdash; constitute a sustained theological meditation on mortality, illness, divine sovereignty, and the purpose of life." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter ends with two practical details placed after the psalm in a literary rather than chronological order: the fig poultice Isaiah prescribed for the boil, and Hezekiah&rsquo;s question about the sign. These details are placed here to remind us that the poetry emerged from real bodily illness, real medical treatment, and real physical signs. The sublime psalm of verses 10-20 was written by a man with an infected sore who had just watched a shadow reverse on a sundial." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>The Narrative Structure of Isaiah 38</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { ref: "vv. 1-3", title: "Isaiah's death sentence; Hezekiah's prayer and tears", color: ROSE },
                  { ref: "vv. 4-6", title: "God's response: fifteen more years and deliverance from Assyria", color: GOLD },
                  { ref: "vv. 7-8", title: "The sign: the shadow on the sundial of Ahaz goes back ten steps", color: TEAL },
                  { ref: "vv. 9-11", title: "Introduction to Hezekiah's writing; the gates of Sheol", color: PURPLE },
                  { ref: "vv. 12-14", title: "The imagery of illness: weaver, lion, swift, and mourning dove", color: ROSE },
                  { ref: "vv. 15-17", title: "The turn: bitter things were for his good; sins forgiven", color: GREEN },
                  { ref: "vv. 18-20", title: "The doxology: the living praise you; parents tell their children", color: GOLD },
                  { ref: "vv. 21-22", title: "The fig poultice; Hezekiah's question about the temple", color: TEAL },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>{item.ref}</span>
                    <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.6 }}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>The Psalm of Hezekiah: A Structural Overview</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The Miktam of Hezekiah (vv. 10-20) follows the classic structure of the individual lament psalm, moving from complaint through reflection to praise:" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Initial Lament (vv. 10-11)", desc: "The gates of Sheol; the loss of the remaining years; the loss of relationship with God and people", color: ROSE },
                  { label: "The Imagery of Illness (vv. 12-14)", desc: "Weaver cutting the thread; lion breaking the bones; reduced to a chirping bird; gaze turned heavenward in weakness", color: PURPLE },
                  { label: "The Turn and Reflection (vv. 15-17)", desc: "What can I say? He has done this. I will walk humbly. Bitter things were for my good. Sins forgiven.", color: GREEN },
                  { label: "The Doxology (vv. 18-20)", desc: "The grave cannot praise you; the living, the living praise you; parents tell children; we will sing in the temple", color: GOLD },
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
                  { ref: "Isaiah 38:1", note: "Isaiah's death sentence to Hezekiah: put your house in order" },
                  { ref: "Isaiah 38:3", note: "Hezekiah's prayer of covenant loyalty and bitter tears" },
                  { ref: "Isaiah 38:5", note: "God's response: I have heard your prayer and seen your tears" },
                  { ref: "Isaiah 38:8", note: "The sign of the shadow on the sundial going back ten steps" },
                  { ref: "Isaiah 38:10", note: "The gates of Sheol -- the image of premature death" },
                  { ref: "Isaiah 38:12", note: "Like a weaver I have rolled up my life; he has cut me from the loom" },
                  { ref: "Isaiah 38:13", note: "Like a lion he broke all my bones" },
                  { ref: "Isaiah 38:17", note: "For my benefit I suffered such anguish -- bitter things were for good" },
                  { ref: "Isaiah 38:19", note: "The living, the living -- they praise you; parents tell their children" },
                  { ref: "2 Kings 20", note: "The parallel account in the historical books" },
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
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Isaiah 38</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 38 moves through three distinct registers: the narrative of illness and miraculous healing (vv. 1-8), the poetic psalm of lament and thanksgiving (vv. 9-20), and the practical details of treatment and sign (vv. 21-22). The themes below trace the theological logic that unifies all three." }}
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
                  { word: "choli", meaning: "Illness, sickness", usage: "The word for Hezekiah&rsquo;s illness in v. 9; the same root appears in Isaiah 53:4 (&ldquo;he took up our infirmities&rdquo;) &mdash; a striking connection between Hezekiah&rsquo;s illness and the suffering of the Servant" },
                  { word: "shub", meaning: "Turn, return, repent", usage: "The word underlying the reversal of the shadow (v. 8) and God&rsquo;s reversal of his purpose in response to prayer &mdash; the same word used throughout the prophets for Israel&rsquo;s call to repent and return to God" },
                  { word: "chizayon", meaning: "Vision, revelation", usage: "Related to the prophetic vocabulary of the book of Isaiah; here the &ldquo;vision&rdquo; or revelation of what is happening is given in the psalm itself &mdash; the psalm is Hezekiah&rsquo;s account of what he saw and experienced" },
                  { word: "tselel", meaning: "Shadow", usage: "The shadow on the sundial of Ahaz that went back ten steps; related to the word for shelter and covering; in the context of the chapter, the reversing shadow is a sign of God giving back time" },
                  { word: "yasha", meaning: "Save, deliver", usage: "The verb in v. 20: &ldquo;The LORD will save me&rdquo; &mdash; the same root as Isaiah&rsquo;s name (Yeshayahu) and Jesus&rsquo;s name (Yeshua); the chapter ends with the declaration that the LORD saves" },
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
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: Isaiah 38:1&ndash;22</h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "A close reading of all 22 verses of Isaiah 38, organized by the major movements of the chapter. Click any section to expand the commentary." }}
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
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>The Movement of Hezekiah&rsquo;s Psalm</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { step: "1", event: "Isaiah delivers the death sentence: &ldquo;Put your house in order&rdquo; (v. 1)" },
                  { step: "2", event: "Hezekiah turns to the wall, prays, and weeps bitterly (vv. 2-3)" },
                  { step: "3", event: "God sends Isaiah back with the reversal: fifteen years granted (vv. 4-6)" },
                  { step: "4", event: "The sign of the sundial: the shadow goes back ten steps (vv. 7-8)" },
                  { step: "5", event: "Hezekiah composes a written psalm (Miktam) recording his experience (v. 9)" },
                  { step: "6", event: "The lament section of the psalm: gates of Sheol, lost years, lost relationship (vv. 10-14)" },
                  { step: "7", event: "The turn: humble reflection; bitter things were for his good (vv. 15-17)" },
                  { step: "8", event: "The doxology: the living praise God; parents tell children (vv. 18-20)" },
                  { step: "9", event: "Practical note: Isaiah prescribes a fig poultice for the boil (v. 21)" },
                  { step: "10", event: "Hezekiah asks for the sign confirming his restoration to the temple (v. 22)" },
                ].map(item => (
                  <div key={item.step} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ background: `${GOLD}20`, border: `1px solid ${GOLD}40`, color: GOLD, fontWeight: 800, fontSize: 12, borderRadius: "50%", width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{item.step}</span>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.event }} />
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
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Living with Isaiah 38</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 38 is the chapter that asks the most existential question in the book: how do we respond when God says &ldquo;you are going to die&rdquo;? Hezekiah&rsquo;s response &mdash; honest prayer, honest grief, and a turn toward God rather than away from him &mdash; is both a historical narrative and a model for how faith handles mortality." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The psalm that emerges from Hezekiah&rsquo;s crisis is one of the most honest pieces of writing about mortal illness in all of Scripture. It does not sanitize the experience or rush to resolution. It lingers in the images of diminishment &mdash; the weaver&rsquo;s thread cut, the lion&rsquo;s bones broken, the small bird chirping &mdash; before arriving at the theological turn: bitter things were for my good. The application of this chapter is less about what to do in crisis and more about what crisis reveals about the purpose of life." }}
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
                  "Hezekiah prays honestly and weeps bitterly before God. Is there a fear or grief you have been holding back from God that needs to be named specifically in prayer?",
                  "Isaiah&rsquo;s death sentence was reversed by prayer. What does this teach us about the relationship between the declared word of God and the prayers of his people?",
                  "The sign of the reversing shadow gave Hezekiah something visible to hold onto. What signs of God&rsquo;s faithfulness have you witnessed that you return to in crisis?",
                  "Hezekiah says &ldquo;bitter things were for my good&rdquo; &mdash; but only from the other side of the suffering. Is there a past hardship you can now see in this light?",
                  "The psalm ends with a commitment to sing in the temple &ldquo;all the days of our lives.&rdquo; How does the awareness that your years are numbered change how you think about worship and testimony?",
                ].map((q, qi) => (
                  <div key={qi} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 18px", background: BG, borderRadius: 10 }}>
                    <span style={{ color: GOLD, fontWeight: 900, fontSize: 15, minWidth: 22, paddingTop: 1 }}>{qi + 1}.</span>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Teaching Videos on Isaiah 38</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Video teaching on Hezekiah&rsquo;s illness, the reversing shadow, and the psalm of thanksgiving in Isaiah 38.
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
