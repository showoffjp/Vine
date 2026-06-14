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
  "The Vision of God",
  "Isaiah&apos;s Response",
  "Here I Am Send Me",
  "Application",
] as const;

const TABS_DISPLAY = [
  "Overview",
  "The Vision of God",
  "Isaiah&rsquo;s Response",
  "Here I Am Send Me",
  "Application",
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
    heading: "Isaiah 6 &mdash; Overview",
    reference: "Isaiah 6:1&ndash;13",
    paragraphs: [
      "Isaiah 6 stands as one of the most awe-inspiring passages in all of Scripture &mdash; a window into the throne room of heaven itself. The chapter records the prophet Isaiah&rsquo;s transforming encounter with the living God, and it functions as both his commissioning narrative and a defining theological vision for the entire book that bears his name. Everything that follows in Isaiah&rsquo;s long ministry &mdash; his proclamations of judgment and comfort, his portraits of the Suffering Servant, his visions of the new creation &mdash; flows from this foundational moment when he stood before the Holy One of Israel.",
      "The chapter opens with a historical marker: &ldquo;In the year that King Uzziah died&rdquo; (6:1). Uzziah had reigned for over fifty years in Judah, a long period of relative stability and prosperity. His death would have been a moment of national anxiety, the removal of a familiar human anchor. Into that moment of uncertainty, Isaiah receives a vision of the true King &mdash; the Lord seated upon a throne, high and lifted up, whose train filled the Temple. When earthly thrones totter, the heavenly throne stands eternal.",
      "The structure of the chapter follows a pattern repeated throughout Scripture when human beings encounter the holy God: a vision of divine majesty, a confession of human sinfulness, a gracious act of divine cleansing, a call to service, and a willing response. This sequence &mdash; seeing, confessing, being cleansed, being called, responding &mdash; traces the path of every genuine encounter with the living God, and it gives Isaiah 6 its enduring power as a template for understanding what it means to be called into God&rsquo;s service.",
      "The seraphim who attend the throne cry out the Trisagion &mdash; the threefold &ldquo;Holy, holy, holy&rdquo; (6:3) &mdash; the only attribute of God that is repeated three times in this way anywhere in Scripture. This triple repetition is the Hebrew idiom for the superlative degree: God is not merely holy, but holy beyond all measure, the very definition of holiness itself. The Apostle John sees the same scene in Revelation 4:8, and the same song echoes through eternity. The chapter thus serves as a hinge between the Old and New Testaments, and its vision of the enthroned Christ is confirmed by John 12:41, where John explicitly says that Isaiah saw the glory of Jesus.",
      "Isaiah 6 is not only a call narrative but also an act of prophetic judgment. The commission God gives Isaiah is a paradoxical one: proclaim the word, but expect the people&rsquo;s hearts to be hardened by it. The preaching of the truth will, for the unrepentant, deepen their blindness and deafen their ears. This difficult doctrine of judicial hardening echoes throughout the New Testament &mdash; Jesus quotes it directly when explaining why he speaks in parables (Matthew 13:14&ndash;15), and Paul invokes it at the close of Acts (28:26&ndash;27) when explaining Israel&rsquo;s rejection of the gospel. Yet the chapter ends not in total despair but with the promise of a holy seed, a remnant that will survive the judgment and become the source of new life.",
    ],
  },
  {
    id: "The Vision of God",
    heading: "The Vision of God",
    reference: "Isaiah 6:1&ndash;4",
    paragraphs: [
      "The vision begins with the sovereign Lord &mdash; Adonai, the Master of all &mdash; seated upon a throne that is &ldquo;high and lifted up&rdquo; (6:1). This language of elevation is not merely poetic; it declares the absolute transcendence of God over every earthly power. The train of his robe &mdash; the hem of his garment &mdash; fills the Temple, a detail that conveys both the overwhelming magnitude of the divine presence and the fact that God graciously condescends to dwell among his people. The Temple was the appointed meeting place between God and Israel, and here it becomes the stage for a vision that transcends anything the cult alone could convey.",
      "Attending the Lord are the seraphim &mdash; a Hebrew word related to the verb &ldquo;to burn&rdquo; &mdash; fiery, glorious celestial beings who serve as the guardians and worshipers of the divine throne. They have six wings each: two to cover their faces in reverence before the blinding holiness of God, two to cover their feet in humility, and two with which they fly in service. The detail about covering their faces is striking &mdash; even these exalted heavenly beings cannot bear the direct radiance of God&rsquo;s face. If the angels veil themselves before God, what should Isaiah, a sinful human being, expect?",
      "The seraphim cry out to one another in antiphonal praise: &ldquo;Holy, holy, holy is the Lord of hosts; the whole earth is full of his glory!&rdquo; (6:3). The word &ldquo;holy&rdquo; (Hebrew: qadosh) speaks fundamentally of separateness and otherness &mdash; God is wholly other than his creation, utterly distinct from all that is sinful, finite, and creaturely. Yet the holiness of God is not merely a negative category of separation; it radiates outward as blazing moral perfection, as glory. The whole earth is full of his glory, a declaration that the created order is itself a theater for the display of divine majesty, as Psalm 19 also affirms.",
      "The physical effects of the seraphic praise are themselves a testimony to the power of the divine presence: &ldquo;the foundations of the thresholds shook at the voice of him who called out, and the house was filled with smoke&rdquo; (6:4). This smoke recalls the cloud of glory that filled the Tabernacle and the Temple at their dedications (Exodus 40:34&ndash;35; 1 Kings 8:10&ndash;11), the visible manifestation of the divine presence. The shaking thresholds echo Sinai, where the whole mountain trembled at God&rsquo;s descent. Creation itself responds to the presence of its Creator with a kind of trembling adoration.",
      "It is worth pausing to consider what kind of vision this is, and what it reveals about the nature of God. Isaiah does not see a benevolent cosmic grandfather, a philosophical principle, or a vague spiritual force. He sees a King &mdash; personal, sovereign, enthroned, attended by burning holy servants. He sees a Lord whose holiness so pervades all things that heaven and earth alike declare his glory. He sees a presence so overwhelming that even the highest celestial beings shield their faces. This vision becomes the permanent foundation of Isaiah&rsquo;s ministry and the reason why his proclamations carry such weight: he has seen the King, and no earthly power or pressure can diminish the reality of what he has witnessed.",
      "The New Testament confirms that this vision was a vision of the pre-incarnate Christ. In John 12:41, immediately after quoting Isaiah 6:9&ndash;10 about the hardening of Israel&rsquo;s heart, the Apostle John writes: &ldquo;Isaiah said these things because he saw his glory and spoke of him.&rdquo; The &ldquo;him&rdquo; refers to Jesus. Paul in 1 Corinthians 10:4 identifies the divine presence in the wilderness with Christ, and Hebrews 1 elaborates on the glory of the Son. Isaiah&rsquo;s vision of the enthroned Lord of hosts is a Christophany &mdash; a pre-incarnate appearance of the Second Person of the Trinity, the one who would one day take on flesh and tabernacle among us (John 1:14).",
    ],
  },
  {
    id: "Isaiah&apos;s Response",
    heading: "Isaiah&rsquo;s Response",
    reference: "Isaiah 6:5&ndash;7",
    paragraphs: [
      "The response of the prophet to the vision of God&rsquo;s holiness is immediate and devastating: &ldquo;Woe is me! For I am lost; for I am a man of unclean lips, and I dwell in the midst of a people of unclean lips; for my eyes have seen the King, the Lord of hosts!&rdquo; (6:5). The word &ldquo;woe&rdquo; in Hebrew is a funeral cry, the lament uttered over the dead. Isaiah pronounces it over himself. The vision of perfect holiness does not produce in Isaiah a feeling of spiritual satisfaction or even mere awe &mdash; it produces a profound and terrifying awareness of his own sinfulness and the utter unfitness of every human being to stand in God&rsquo;s presence.",
      "This reaction is characteristic of every genuine encounter with God in Scripture. Moses hides his face, for he is afraid to look at God (Exodus 3:6). Job, after the whirlwind speech, despises himself and repents in dust and ashes (Job 40:4; 42:5&ndash;6). Peter, after the miraculous catch of fish, falls at Jesus&rsquo; knees and says, &ldquo;Depart from me, for I am a sinful man, O Lord&rdquo; (Luke 5:8). John falls at the feet of the glorified Christ &ldquo;as though dead&rdquo; (Revelation 1:17). The pattern is consistent: the closer one comes to the holy God, the more clearly one sees one&rsquo;s own moral bankruptcy.",
      "Isaiah&rsquo;s specific confession &mdash; that he is &ldquo;a man of unclean lips&rdquo; &mdash; is particularly striking for a prophet, a man whose very calling centers on speaking the word of God. The lips, the organ of speech and proclamation, are the very instrument of his vocation. And yet in the presence of the God who spoke the worlds into being and whose word the seraphim constantly proclaim, Isaiah recognizes that his own speech is defiled. The confession is both personal and corporate: he locates himself within a people of unclean lips, owning his solidarity with the sinful community of Israel, not imagining himself to stand apart from them.",
      "What follows is one of the most beautiful and theologically rich acts in Scripture &mdash; an act of divine grace that Isaiah neither expected nor requested. One of the seraphim flies to Isaiah with a burning coal taken from the altar with tongs. The coal is pressed to Isaiah&rsquo;s lips, and the seraph declares: &ldquo;Behold, this has touched your lips; your guilt is taken away, and your sin atoned for&rdquo; (6:7). The burning coal does not harm the prophet &mdash; it cleanses. The same fire that is associated with the divine holiness, which might be expected to consume a sinful human being, is here the instrument of purification.",
      "The theological significance of this act is enormous. Atonement is provided by God himself, through a divine initiative that precedes any request. The cleansing does not come through Isaiah&rsquo;s own efforts, his ritual purity, his years of prophetic faithfulness, or even his heartfelt confession. It comes through a gracious divine act &mdash; the burning coal from the altar, the place of sacrifice, the place where blood is shed for the forgiveness of sins. Here, in vivid prophetic symbol, is the principle that will be fully realized in the sacrifice of Christ: &ldquo;Without the shedding of blood there is no forgiveness of sins&rdquo; (Hebrews 9:22). The atonement that cleanses Isaiah is a foreshadowing of the atonement that cleanses all who come to God through Jesus.",
      "Once cleansed, Isaiah is fit to hear and to respond to the divine call. This sequence is crucial: there is no commission before the cleansing. God does not send out unclean messengers with the holy word. The purification must precede the proclamation. This pattern persists in the New Testament as well &mdash; the disciples receive the Holy Spirit and are empowered for witness only after the resurrection and ascension of Christ, whose atoning work had accomplished a far more thorough cleansing than any burning coal. The coal on Isaiah&rsquo;s lips is a type of the Pentecostal fire that would purify the lips and hearts of a whole community of redeemed people for their worldwide mission.",
    ],
  },
  {
    id: "Here I Am Send Me",
    heading: "Here I Am, Send Me",
    reference: "Isaiah 6:8&ndash;13",
    paragraphs: [
      "With Isaiah&rsquo;s guilt taken away and his sin atoned for, the divine call can now be issued. The Lord speaks: &ldquo;Whom shall I send, and who will go for us?&rdquo; (6:8). This is one of the most theologically suggestive verses in the entire Old Testament. The divine council is speaking &mdash; the heavenly assembly before which decisions are made and messengers are commissioned &mdash; and the question is thrown open. Who will carry the divine word? Who will be the messenger?",
      "The plural &ldquo;us&rdquo; in &ldquo;who will go for us&rdquo; has generated extensive theological discussion throughout church history. Ancient Jewish commentators often explained it as God speaking to the angelic court. Christian interpreters from the early church onward have heard in it an echo of the plural of Genesis 1:26 (&ldquo;Let us make man in our image&rdquo;) and understood it as a hint of the Trinitarian life within the Godhead. While the passage itself does not spell out a doctrine of the Trinity, it has consistently been read alongside the New Testament revelation as a pointer toward the plural unity of the divine being.",
      "Isaiah&rsquo;s response is one of the most celebrated in Scripture: &ldquo;Here I am! Send me&rdquo; (6:8). The two Hebrew words are among the simplest imaginable &mdash; a declaration of presence and an offer of availability. What makes this response extraordinary is its context. Isaiah has just seen the overwhelming holiness of God, confessed his own utter sinfulness, and received an unexpected act of divine cleansing. He does not yet know what the mission will involve, what hardship it will bring, or how long it will last. He simply makes himself available. It is a response of pure trust and joyful surrender, born not of ignorance of God&rsquo;s holiness but of a fresh experience of God&rsquo;s grace.",
      "The commission that God then gives Isaiah is one of the most sobering and paradoxical in Scripture: &ldquo;Go, and say to this people: Keep on hearing, but do not understand; keep on seeing, but do not perceive. Make the heart of this people dull, and their ears heavy, and blind their eyes; lest they see with their eyes, and hear with their ears, and understand with their hearts, and turn and be healed&rdquo; (6:9&ndash;10). The proclamation of God&rsquo;s word will itself become the instrument of judgment for those who refuse it. The truth, rejected and resisted over time, does not leave hearts in a neutral condition; it hardens them, deepens their blindness, and seals their doom.",
      "Isaiah responds to this terrible commission with a question: &ldquo;How long, O Lord?&rdquo; (6:11). The answer is devastating &mdash; until cities lie waste without inhabitant, houses without people, the land utterly desolate, the Lord having removed people far away. This is a prophecy of the Babylonian exile. The word will be preached; the people will refuse to hear; judgment will come in the form of destruction and deportation. And yet &mdash; the chapter does not end in total darkness. God promises a holy remnant: &ldquo;But as the terebinth and oak leave a stump when they are felled, the holy seed is its stump&rdquo; (6:13).",
      "The stump is the seed of hope. From the ruins of judgment, from the cut-down tree of Israel, a shoot will grow &mdash; a theme Isaiah will develop in chapter 11 in his famous vision of the Branch from the stump of Jesse. The holy seed that survives the judgment is ultimately the Messiah himself, and through him the remnant of faith that gathers around him. The New Testament writers see Isaiah&rsquo;s commission as finally fulfilled in the ministry of Jesus (John 12:40; Matthew 13:14&ndash;15; Acts 28:26&ndash;27), and yet even in the face of rejection, the promise of the seed, the remnant, the new shoot, stands as the ultimate word. Judgment is not the final word &mdash; grace and renewal are.",
    ],
  },
  {
    id: "Application",
    heading: "Isaiah 6 &mdash; Application for Today",
    reference: "Isaiah 6:1&ndash;13",
    paragraphs: [
      "The vision of Isaiah 6 is not merely a historical curiosity or a background note for understanding the prophet&rsquo;s credentials. It is a living word that speaks directly into the life of every believer. The first and most foundational application is the call to see God as he truly is &mdash; enthroned, holy, sovereign, and glorious. In an age that is tempted to domesticate God, to reduce him to a comforting concept or a supportive cosmic friend, Isaiah&rsquo;s vision confronts us with the terrifying and magnificent reality of divine holiness. The God of Scripture is not safe, but he is good; he is not manageable, but he is gracious; he is not cozy, but he is love.",
      "The second application flows from the first: a genuine encounter with the holiness of God will always produce a fresh awareness of personal sinfulness. Isaiah was a prophet, a man of God, a spiritual leader &mdash; and the sight of God&rsquo;s holiness undid him completely. If Isaiah needed to cry &ldquo;Woe is me!&rdquo; in the presence of God, how much more do ordinary believers need a regular reckoning with their own sinfulness and inadequacy? The vision of God&rsquo;s holiness is not meant to crush us in permanent despair, but it is meant to drive us from any confidence in our own righteousness to a complete reliance on divine grace.",
      "Third, the burning coal speaks powerfully to the sufficiency of divine atonement. God does not call Isaiah and then tell him to clean up his act before he can be used. God provides the cleansing himself, through an act that symbolizes the altar, the sacrifice, and the blood. The coal is pressed to the lips before the commission is issued. For believers living this side of the cross, the application is even richer: we come before God not with burning coals but with the blood of Jesus, which &ldquo;cleanses us from all sin&rdquo; (1 John 1:7). Because the atonement is complete and sufficient, we need not carry the weight of our guilt into God&rsquo;s presence; we can come boldly to the throne of grace (Hebrews 4:16).",
      "Fourth, Isaiah&rsquo;s response &mdash; &ldquo;Here I am; send me&rdquo; &mdash; models the posture of wholehearted availability that God calls every believer to. This is not the response of a man who has calculated the risks and decided the mission is manageable. It is the response of a man who has been so overwhelmed by the grace of God&rsquo;s cleansing that he holds nothing back. The mission before the church today &mdash; to proclaim the gospel to a world that is spiritually blind and deaf &mdash; is no easier than the mission Isaiah received. The faithful preaching of the truth will not always be received. But the One who sends us is the same enthroned Lord whose glory fills the whole earth, and his purposes will not be thwarted.",
      "Fifth, the doctrine of the holy remnant speaks profound comfort to faithful believers in difficult times. When the church seems to shrink, when the culture moves decisively away from the things of God, when it feels as though the tree of faith has been cut down, we can remember the stump. God always preserves a holy seed, a remnant chosen by grace (Romans 11:5). The preservation of the church through history is not a human achievement but a divine promise. The same God who promised a holy seed to Isaiah has promised that the gates of hell will not prevail against his church (Matthew 16:18), and that he will be with his people to the end of the age (Matthew 28:20).",
      "Finally, Isaiah 6 invites every worshiping community to recover the note of transcendence in its encounter with God. The seraphim do not sing a casual pop chorus &mdash; they cry out &ldquo;Holy, holy, holy&rdquo; with a voice that shakes the doorposts and fills the house with smoke. True worship begins not with what we want from God but with who God is &mdash; a recognition of his majesty, his moral splendor, his incomprehensible holiness. When worship loses this vertical dimension and becomes primarily about human comfort or experience, it has lost something irreplaceable. Isaiah 6 calls every generation back to the beginning: come before the enthroned King, be undone, receive his grace, and go where he sends you.",
    ],
  },
];

const videoItems = [
  { videoId: "bKpCp9iJpDw", title: "Isaiah 6 &mdash; The Vision of God and the Call of Isaiah" },
  { videoId: "bPFBFalgFxU", title: "Holy Holy Holy &mdash; The Throne Room of Isaiah 6 Explained" },
  { videoId: "D7tECMmCPm8", title: "Here I Am Send Me &mdash; Isaiah&rsquo;s Commission and Our Calling" },
  { videoId: "9M2NnQQNGUs", title: "BibleProject &mdash; Isaiah Overview Part 1" },
];

export default function Isaiah6GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);
  const activeTabDisplay = TABS_DISPLAY[TABS.indexOf(activeTab)];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Isaiah 6 &mdash; The Vision of God
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Isaiah&rsquo;s transforming encounter with the enthroned Lord of hosts &mdash; the threefold holiness of God, the undoing of the prophet, the cleansing coal from the altar, and the willing commission: &ldquo;Here I am; send me.&rdquo;
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t, i) => (
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
              dangerouslySetInnerHTML={{ __html: TABS_DISPLAY[i] }}
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

        <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Deepen your study of Isaiah 6 through these video teachings on the vision of God, the threefold holiness, Isaiah&rsquo;s cleansing, and the call to willing service.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: v.title }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Holy, Holy, Holy Is the Lord of Hosts</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Isaiah 6 is not merely a commissioning account &mdash; it is an invitation to every believer to see the enthroned God as he truly is: perfectly holy, overwhelmingly glorious, and profoundly gracious. Before him, every mouth is stilled and every sin is exposed; but from him comes the cleansing coal of atoning grace. May every generation hear the seraphic song and respond with Isaiah&rsquo;s words: &ldquo;Here I am; send me.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
