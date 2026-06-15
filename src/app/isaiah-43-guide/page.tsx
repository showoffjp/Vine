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
  "Fear Not I Have Redeemed You",
  "Waters and Fire",
  "New Exodus",
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
    heading: "Isaiah 43 &mdash; Fear Not, I Have Redeemed You",
    reference: "Isaiah 43:1&ndash;28",
    paragraphs: [
      "Isaiah 43 stands among the most luminous chapters in all of Scripture &mdash; a chapter so saturated with the grace, power, and personal love of God that it has sustained the faith of believers through exile, suffering, and death for millennia. It opens with one of the most breathtaking sentences in the Bible: &ldquo;But now thus says the Lord, he who created you, O Jacob, he who formed you, O Israel: Fear not, for I have redeemed you; I have called you by name, you are mine&rdquo; (v.1). The word &ldquo;but now&rdquo; is a great hinge, swinging the reader from the darkness of chapter 42 &mdash; where Israel is blind and deaf, plundered and looted, with no one to deliver them &mdash; into a sudden, overwhelming declaration of divine tenderness.",
      "The chapter belongs to the section of Isaiah often called the &ldquo;Book of Consolation&rdquo; (chapters 40&ndash;55), addressed to a people anticipating the horrors of Babylonian exile. The nation that was supposed to be a light to the Gentiles had instead gone blind and deaf to the Lord&rsquo;s word. Judgment was coming. Yet before describing what that judgment would look like, God speaks first and most urgently of redemption. Isaiah 43 is the Lord&rsquo;s great personal address to his frightened, failing, soon-to-be-exiled people &mdash; and its message is that their identity is not defined by their failures but by their Creator&rsquo;s claim upon them.",
      "The chapter moves through several distinct but interlocking movements. First (vv.1&ndash;7), God promises his personal presence through every form of danger &mdash; waters, rivers, fire, flame &mdash; and declares that he values Israel so highly that he will give entire nations as their ransom price. Second (vv.8&ndash;13), Israel is called to serve as God&rsquo;s witnesses before the nations &mdash; eyewitnesses to the unique identity of the Lord, the only God who declares the end from the beginning. Third (vv.14&ndash;21), God announces a new exodus, one so staggering in its scope that he will command his people not to dwell on the first one. Fourth (vv.22&ndash;28), in a stinging turn, God acknowledges Israel&rsquo;s persistent failure to worship him even in the best of times &mdash; and then, astonishingly, declares that he blots out their transgressions not because they deserve it but &ldquo;for my own sake&rdquo; (v.25). Grace, not merit, is the final word.",
      "The theological architecture of Isaiah 43 is remarkable. The chapter begins and ends with grace: grace that precedes obedience (v.1), and grace that forgives despite disobedience (v.25). In between, God&rsquo;s absolute sovereignty is established &mdash; he is the Creator who formed Israel, the only God who saves, the first and the last, the one before whom no other god exists. Yet this sovereign God is not a distant monarch; he is a Father who knows his children by name, a Redeemer who pays their ransom, a Shepherd who gathers them from the ends of the earth. Isaiah 43 is not merely a chapter about God&rsquo;s power &mdash; it is about the direction that power takes: always toward his people, always in rescue, always in love.",
      "The chapter&rsquo;s central theme of the divine name runs throughout. God does not merely speak in generalities; he addresses &ldquo;Jacob,&rdquo; &ldquo;Israel,&rdquo; and his people by name. The Hebrew verb &ldquo;I have called you by name&rdquo; (v.1) uses the same word that appears when a shepherd knows each sheep individually. The God of the universe is personally acquainted with his people &mdash; not just their collective history but their individual identities. This is not a contract between a distant deity and a nation; it is a covenant between a Father and his beloved children who bear his name.",
      "For the Christian reader, Isaiah 43 echoes through the New Testament in ways both explicit and implicit. When Jesus is baptized in the Jordan and a voice from heaven says, &ldquo;You are my beloved Son; with you I am well pleased,&rdquo; the language recalls the beloved servant whom God calls by name in Isaiah. When Jesus walks on the storm-tossed water and says &ldquo;It is I&rdquo; &mdash; literally in Greek, &ldquo;I AM&rdquo; &mdash; the divine self-declaration of Isaiah 43:10&ndash;13 resonates behind his words. When Paul writes that &ldquo;all Israel will be saved&rdquo; and that God&rsquo;s gifts and calling are irrevocable, the logic of Isaiah 43 underlies the argument. Isaiah 43 is a lens through which the whole drama of redemption comes into clearer focus.",
    ],
  },
  {
    id: "Fear Not I Have Redeemed You",
    heading: "&ldquo;Fear Not, for I Have Redeemed You&rdquo;",
    reference: "Isaiah 43:1&ndash;7",
    paragraphs: [
      "The opening movement of Isaiah 43 is structured as a direct divine address, and its very first word in Hebrew is a particle of contrast &mdash; &ldquo;But now.&rdquo; The preceding chapter had ended with Israel as a people robbed and plundered, deaf and blind, handed over to spoilers because of their sin. The situation was objectively bleak. But the God of Israel does not allow his people to remain in that darkness without a word of countermovement. &ldquo;But now thus says the Lord, he who created you, O Jacob, he who formed you, O Israel&rdquo; (v.1). Before any command is given, God introduces himself twice &mdash; as Creator and as Former. The one who speaks is not a stranger making promises; he is the one who made Jacob from nothing and shaped Israel into a nation. His word carries the weight of his creative authority.",
      "Then come the three imperatives that have sustained God&rsquo;s people across every generation of suffering: &ldquo;Fear not, for I have redeemed you; I have called you by name, you are mine&rdquo; (v.1). The command &ldquo;fear not&rdquo; is the most frequently repeated command in the Bible &mdash; occurring in one form or another 365 times, once for every day of the year, as some have observed. But here the command comes equipped with its reasons. Why should Israel not fear? Because three things are already true: God has redeemed them, God has called them by name, and they belong to God. Not &ldquo;fear not, try harder and perhaps I will redeem you.&rdquo; Not &ldquo;fear not if you perform well.&rdquo; The redemption is past tense; the naming is accomplished fact; the belonging is settled. The command rests entirely on what God has already done.",
      "The word &ldquo;redeemed&rdquo; (Hebrew: ga&rsquo;al) carries the specific connotation of a kinsman-redeemer &mdash; the goel who had the right and responsibility to buy back a family member sold into slavery or to reclaim property that had been lost. God is not merely a rescuer in a general sense; he is acting as the closest relative of his people, the one with both the obligation and the power to set them free. This word echoes the Exodus &mdash; &ldquo;I have redeemed you out of the house of slavery&rdquo; &mdash; and projects forward to a redemption yet to come.",
      "Verse 2 contains one of the most beloved promises in all of Scripture: &ldquo;When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you.&rdquo; Notice the grammar carefully: not &ldquo;if&rdquo; but &ldquo;when.&rdquo; God does not promise his people exemption from the waters and fire of life. He promises them his presence through those waters and fires. The question he answers is not &ldquo;Will I suffer?&rdquo; but &ldquo;Will I be alone in my suffering?&rdquo; And the answer is a thunderous no. I will be with you.",
      "The waters and rivers in verse 2 almost certainly evoke the Exodus itself &mdash; the crossing of the Red Sea &mdash; and possibly also the crossing of the Jordan into the Promised Land. Fire recalls the burning bush, the pillar of fire, and perhaps also the furnace of Egypt&rsquo;s slavery. But the imagery is also universal: every generation of God&rsquo;s people has known what it means to feel waters rising around them and flames drawing near. The promise is timeless. Daniel&rsquo;s three friends walking unharmed in Nebuchadnezzar&rsquo;s furnace (Daniel 3) stand as a vivid enacted parable of Isaiah 43:2 &mdash; not exemption from the fire, but a fourth figure walking with them in its midst.",
      "Verse 3 gives the theological ground for all of God&rsquo;s promises: &ldquo;For I am the Lord your God, the Holy One of Israel, your Savior.&rdquo; Three names in one verse: Lord (YHWH, the covenant name), the Holy One of Israel (Isaiah&rsquo;s distinctive title for God, emphasizing his otherness and majesty), and Savior (one who rescues and delivers). The accumulation is deliberate. The God making these promises is not a minor deity of a small tribe; he is the sovereign Lord of creation, the one who is utterly set apart and yet has bound himself to Israel in a saving covenant. His being their Savior is not separate from his being holy &mdash; it is the expression of who he is.",
      "Verses 3b&ndash;4 contain some of the most startling language in the chapter: &ldquo;I give Egypt as your ransom, Cush and Seba in exchange for you. Because you are precious in my eyes, and honored, and I love you, I give men in return for you, peoples in exchange for your life.&rdquo; God speaks here as though the salvation of his people has a price tag &mdash; and the price is the nations themselves. This is the logic of ransom: something of value is surrendered to purchase the freedom of the beloved. Egypt, Cush, and Seba may refer to historical events under Cyrus the Persian, but the theological point is staggering: God considers his people more valuable than entire empires. The word translated &ldquo;precious&rdquo; (yaqar) is the same word used for costly jewels and treasured things. Israel is God&rsquo;s treasure.",
      "The movement closes in verses 5&ndash;7 with a sweeping vision of divine gathering: &ldquo;Fear not, for I am with you; I will bring your offspring from the east, and from the west I will gather you. I will say to the north, Give up, and to the south, Do not withhold; bring my sons from afar and my daughters from the end of the earth.&rdquo; The command goes to all four compass points, to north and south, to forces that might hold God&rsquo;s people in captivity &mdash; Give up, give them back. The scattering of exile is not the final word; the final word is gathering. And the scattered ones are called &ldquo;my sons&rdquo; and &ldquo;my daughters,&rdquo; created for God&rsquo;s glory (v.7). The family language is tender and intentional: these are not refugees or exiles but children coming home to their Father.",
    ],
  },
  {
    id: "Waters and Fire",
    heading: "Israel as God&rsquo;s Witnesses",
    reference: "Isaiah 43:8&ndash;13",
    paragraphs: [
      "Having established the basis of his people&rsquo;s security in his own identity as Creator, Redeemer, and Savior, God now pivots to give Israel a calling that is both humbling and exalted: they are to be his witnesses in a cosmic courtroom. &ldquo;Bring out the people who are blind, yet have eyes, who are deaf, yet have ears&rdquo; (v.8). The description is remarkable &mdash; Israel is blind and deaf, the same indictment lodged in chapter 42, and yet they are summoned to give testimony. God&rsquo;s witnesses are not impressive candidates; they are a people who have often failed to see or hear the very God they are meant to proclaim.",
      "The setting of verses 9&ndash;10 is a great international trial. All the nations are summoned, and a challenge is issued: &ldquo;Let them bring their witnesses to prove them right, and let them hear and say, It is true&rdquo; (v.9). The question before the court is simple: Which god can declare what is coming and prove it by fulfillment? Which deity has a track record of announcing the future and bringing it to pass? The implicit answer &mdash; none of them, not one of the gods of Egypt or Babylon or Assyria &mdash; is left for the evidence to demonstrate.",
      "&ldquo;You are my witnesses, declares the Lord, and my servant whom I have chosen, that you may know and believe me and understand that I am he. Before me no god was formed, nor shall there be any after me&rdquo; (v.10). This is one of the most absolute monotheistic declarations in the entire Old Testament. Not &ldquo;I am greater than the other gods&rdquo; &mdash; but &ldquo;before me no god was formed.&rdquo; The other gods do not exist except as human fabrications. The Lord alone is God, without predecessor and without successor. He is not a deity who emerged within a pantheon; he is the uncreated source of all that is.",
      "Verse 11 presses the exclusivity: &ldquo;I, I am the Lord, and besides me there is no savior.&rdquo; The doubling of the first person pronoun in Hebrew (&ldquo;I, I&rdquo;) is emphatic, almost thunderous. Salvation &mdash; real salvation, not the false promises of idols that cannot see or hear &mdash; belongs to him alone. This is not religious imperialism but ontological fact: if the Lord is the only God, then he is necessarily the only Savior. No other being has the capacity to save because no other being exists with the power of being itself.",
      "Verse 12 makes Israel&rsquo;s witness concrete and historical: &ldquo;I declared and saved and proclaimed, when there was no strange god among you; and you are my witnesses, declares the Lord, and I am God.&rdquo; The argument is simple but devastating for idolatry: when did Israel experience real deliverance? At the Exodus, when they had no strange gods among them &mdash; or rather, when no strange god was responsible for their rescue. It was the Lord who declared what he would do, did it, and proclaimed it. That track record is Israel&rsquo;s testimony.",
      "Verse 13 closes this section with the most absolute divine self-declaration: &ldquo;Also henceforth I am he; there is none who can deliver from my hand; I work, and who can turn it back?&rdquo; The phrase &ldquo;I am he&rdquo; (Hebrew: &rsquo;ani hu&rsquo;) appears repeatedly in Isaiah and is one of the most significant self-designations in Scripture. It echoes the divine name revealed to Moses &mdash; I AM WHO I AM &mdash; and carries the force of absolute, unconditioned existence. God does not become; he is. And the power that flows from this absolute being cannot be frustrated: when he works, there is no force capable of reversing his action. The courtroom verdict is not in doubt.",
      "For the Christian reader, the phrase &ldquo;I am he&rdquo; from Isaiah 43 resonates powerfully in the Gospel of John, where Jesus uses the same form repeatedly &mdash; &ldquo;Before Abraham was, I AM&rdquo; (John 8:58), &ldquo;I AM the resurrection and the life,&rdquo; and most remarkably, when soldiers come to arrest him in Gethsemane and he says &ldquo;I am he,&rdquo; they draw back and fall to the ground (John 18:6). The God who declared in Isaiah 43:13 that none can work against his purpose is, in the Gospel, the one who goes to the cross not because his enemies overpower him but because he himself lays down his life. The sovereignty of Isaiah 43 is not contradicted by the cross; it is fulfilled there.",
      "The calling to be witnesses is one that Israel largely failed to fulfill before the exile &mdash; they assimilated to the nations, worshiped their gods, and lost their distinctive testimony. Yet the calling was not revoked. The early church understood itself as the renewed Israel, the community in whom the calling of Isaiah 43:10 was finally taking root: witnesses to the one God and his saving work, sent to declare among the nations that &ldquo;I am he&rdquo; is Jesus of Nazareth, risen from the dead.",
    ],
  },
  {
    id: "New Exodus",
    heading: "The New Exodus and Grace Beyond Merit",
    reference: "Isaiah 43:14&ndash;28",
    paragraphs: [
      "The final two sections of Isaiah 43 contain both the most spectacular promise and the most sober assessment in the chapter. Beginning in verse 14, God pivots to announce what he is about to do: &ldquo;Thus says the Lord, your Redeemer, the Holy One of Israel: For your sake I have sent to Babylon and brought all of them down as fugitives, even the Chaldeans, in the ships in which they rejoice.&rdquo; The reference to Babylon is striking &mdash; Babylon was the supreme world power, the city whose walls and hanging gardens were among the wonders of the ancient world. Yet God speaks of its fall as casually as though it were already accomplished. He is already sending against it; its proud sailors will become refugees. The nation that took Israel captive will itself be brought low.",
      "Verse 15 reinforces the divine identity behind this action: &ldquo;I am the Lord, your Holy One, the Creator of Israel, your King.&rdquo; Four titles, each pressing a different facet of who God is in relation to his people. He is not merely a powerful force; he is their King, and the fate of Babylon is a matter of royal politics at the cosmic level. The King of all creation will not allow his people to remain in captivity indefinitely.",
      "Then come some of the most astonishing verses in the chapter. God looks back at the Exodus &mdash; the defining event of Israel&rsquo;s national history, the miracle by which an entire nation was born out of slavery: &ldquo;Thus says the Lord, who makes a way in the sea, a path in the mighty waters, who brings forth chariot and horse, army and warrior; they lie down, they cannot rise, they are extinguished, quenched like a wick&rdquo; (vv.16&ndash;17). The Exodus is described with power &mdash; the parting of the sea, the drowning of Pharaoh&rsquo;s army. It was the great miracle. And then God says something extraordinary:",
      "&ldquo;Remember not the former things, nor consider the things of old. Behold, I am doing a new thing; now it springs forth, do you not perceive it? I will make a way in the wilderness and rivers in the desert&rdquo; (vv.18&ndash;19). Do not dwell on the Exodus. The new thing I am about to do will make the Exodus look like a prelude. This is not an erasure of the past but a surpassing of it. The first Exodus was a way through the sea; the new exodus will be a way through the wilderness. The first Exodus rescued Israel from Egypt; the new exodus will bring them home from Babylon &mdash; and beyond Babylon, from every exile the human heart has ever known.",
      "Verse 20 deepens the wonder: &ldquo;The wild beasts will honor me, the jackals and the ostriches, for I give water in the wilderness, rivers in the desert, to give drink to my chosen people.&rdquo; Creation itself will worship as God provides for his people in impossible places. The desert &mdash; the place of death and thirst and desolation &mdash; will become a place of rivers. This is the God who brings life from death, water from rock, a way where there is no way. The promise is not of easy travel but of supernatural provision in the hardest terrain.",
      "Jesus explicitly evoked this imagery when he stood at the Feast of Tabernacles and cried out, &ldquo;If anyone thirsts, let him come to me and drink. Whoever believes in me, as the Scripture has said, &lsquo;Out of his heart will flow rivers of living water&rsquo;&rdquo; (John 7:37&ndash;38). The wilderness water of Isaiah 43 finds its ultimate fulfillment not in a geographical journey but in the person of Christ himself, who becomes the living water in the desert of human need. The new exodus Isaiah announced is the exodus from sin and death that Jesus accomplished through his own death and resurrection.",
      "The final section of the chapter, verses 22&ndash;28, constitutes one of the most bracing passages in Isaiah. After all the magnificent promises, God turns to deliver a charge against his people that is hard to hear: &ldquo;Yet you did not call upon me, O Jacob; but you have been weary of me, O Israel!&rdquo; (v.22). The people who were called to be God&rsquo;s witnesses had not even been faithful to call upon him. They had not brought their burnt offerings; they had not honored him with their sacrifices. In fact, the accusation is reversed: &ldquo;But you have burdened me with your sins; you have wearied me with your iniquities&rdquo; (v.24).",
      "This is one of the only places in Scripture where God speaks of being wearied. The God who does not grow weary or faint (Isaiah 40:28) can yet be worn down by the persistent iniquity of his people. It is the language of a grieved parent, not a distant judge &mdash; and it makes what follows all the more astonishing. Because immediately after this charge &mdash; without a pause, without demanding a plan for reformation, without listing conditions &mdash; God declares: &ldquo;I, I am he who blots out your transgressions for my own sake, and I will not remember your sins&rdquo; (v.25).",
      "For my own sake. Not for Israel&rsquo;s sake. Not because they have earned it or proved themselves worthy or shown signs of improvement. God forgives because of who he is, not because of what they have done. This is perhaps the most breathtaking statement of divine grace in the Old Testament. The blotting out of sin &mdash; the same metaphor used in Psalm 51 (&ldquo;blot out my transgressions&rdquo;) &mdash; is an act of pure mercy rooted in God&rsquo;s own character. He cannot allow his name to be dishonored forever by leaving his people in their sins; his own glory requires that he act to rescue them. Grace is not in competition with God&rsquo;s holiness; grace is the expression of his holiness toward a people who cannot save themselves.",
      "The final verses (26&ndash;28) return to the courtroom language of vv.9&ndash;13 but now with Israel as the accused: &ldquo;Put me in remembrance; let us argue together; set forth your case, that you may be proved right&rdquo; (v.26). God dares his people to bring evidence of their righteousness. The case is impossible to make. &ldquo;Your first father sinned, and your mediators transgressed against me. Therefore I will profane the princes of the sanctuary, and deliver Jacob to utter destruction and Israel to reviling&rdquo; (vv.27&ndash;28). The exile was not accidental; it was judgment. The sin ran from the beginning &mdash; &ldquo;your first father sinned&rdquo; may refer to Jacob himself or to Adam, the progenitor of all.",
      "Yet the chapter does not end in judgment. Its last note is ruin &mdash; &ldquo;Jacob to utter destruction&rdquo; &mdash; but the chapter is framed by grace: it opened with &ldquo;I have redeemed you&rdquo; and the promise of God&rsquo;s presence through fire and water, and v.25 has already declared the unconditional forgiveness of sin. The judgment of vv.27&ndash;28 is real and historical &mdash; exile did come &mdash; but it is not the final answer. The God who blots out transgressions for his own sake will not ultimately forsake the people he has redeemed and called by name. Isaiah 43 ends, as it began, with the inescapable gravity of divine grace.",
    ],
  },
];

const videoItems = [
  { videoId: "tH-YRgTTLik", title: "Isaiah 43 - Fear Not, I Have Redeemed You" },
  { videoId: "SHj8YQc98lI", title: "Isaiah 40-55 Overview - BibleProject" },
  { videoId: "9VBPhbZ_KvE", title: "The New Exodus in Isaiah - Teaching" },
  { videoId: "JvqGJ4dJ1VE", title: "Isaiah 43:1-7 - God Calls You By Name" },
];

export default function Isaiah43GuidePage() {
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
            Isaiah 43
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            &ldquo;Fear not, for I have redeemed you; I have called you by name, you are mine&rdquo; &mdash; a magnificent oracle of divine redemption, tracing God&rsquo;s promise to be present through waters and fire, his call for Israel to be his witnesses, his announcement of a new exodus surpassing the first, and his extraordinary declaration that he blots out transgressions for his own sake.
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
            >
              {t}
            </button>
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

        <section style={{ marginTop: "3.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Deepen your study of Isaiah 43 through visual teaching on God&rsquo;s promise to redeem, the new exodus, and the declaration &ldquo;I have called you by name.&rdquo;
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

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>You Are Mine</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Isaiah 43 frames everything in grace &mdash; grace that precedes obedience in verse 1, and grace that forgives despite disobedience in verse 25. The God who calls his people by name through the waters and fire of exile is the same God who blots out transgressions not for their merit but for his own sake. This is the heartbeat of biblical redemption: not what we have done for him, but what he has declared over us &mdash; &ldquo;You are mine.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
