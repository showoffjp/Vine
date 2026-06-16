"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";

const TABS = [
  "Overview",
  "Key Themes",
  "Verse by Verse",
  "Application",
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
    heading: "Overview: Woe to Ariel",
    reference: "Isaiah 29:1&ndash;24",
    paragraphs: [
      "Isaiah 29 is one of the most dramatically structured chapters in the entire book of Isaiah. It opens as a woe oracle against Ariel &mdash; a cryptic name for Jerusalem, the city where David encamped &mdash; and it closes with a vision of cosmic renewal in which the deaf hear, the blind see, the meek rejoice, and the ruthless are brought to nothing. Between those two poles lies a passage of extraordinary theological density: siege and devastation, a dream that dissolves at waking, the sealing of vision, the perishing of human wisdom, and the woe against those who attempt to hide their plans from God. It is a chapter that confounds every expectation and leaves the reader marveling at a God who brings death out of death and sight out of blindness.",
      "The name &ldquo;Ariel&rdquo; is itself part of the oracle&rsquo;s unsettling texture. The word in Hebrew can mean &ldquo;lion of God&rdquo; or &ldquo;altar hearth,&rdquo; and Isaiah uses it with deliberate ambiguity. Jerusalem is the city of David&rsquo;s encampment, the city of feasts and religious observance &mdash; and it will become an altar hearth, the very place of burning, when God&rsquo;s judgment falls upon it. The religious festivities that mark the city&rsquo;s calendar (v.1: &ldquo;Add year to year; let the feasts run their round&rdquo;) are not a sign of God&rsquo;s favor but a bitter irony: the city goes through its rituals while its heart is far from the God it claims to worship.",
      "The structure of the chapter follows a pattern that Isaiah uses elsewhere: the woe moves through judgment to hope, through darkness to a light more brilliant precisely because the darkness was so deep. Verses 1&ndash;4 announce the besieging and humiliation of Ariel. Verses 5&ndash;8 reverse the scenario: the multitude of enemies will themselves be like a dream, a passing phantom that dissolves. Verses 9&ndash;12 describe the spiritual stupor that has settled over the people, a blindness so complete that the word of God has become like a sealed book to them. Verses 13&ndash;16 press to the root of the problem: the heart is far from God even when the lips draw near; the wisdom of the wise has become autonomous and self-serving. Verses 17&ndash;24 then open onto the great reversal in which everything is turned right-side-up: Lebanon becomes a fruitful field, the deaf hear, the blind see, the meek exult, and the scoffer is cut off.",
      "This chapter has had enormous influence on the New Testament. Jesus quotes verse 13 in his confrontation with the Pharisees over human traditions (Matthew 15:8&ndash;9; Mark 7:6&ndash;7), applying to his own generation the same diagnosis Isaiah applied to his: lips that draw near, hearts that are far away, worship that has been reduced to a human commandment. Paul quotes verse 14 in 1 Corinthians 1:19 (&ldquo;I will destroy the wisdom of the wise&rdquo;) in his great meditation on the cross as the confounding of human wisdom. These New Testament appropriations are not arbitrary proof-texting; they recognize in Isaiah 29 a perennial pattern of human religious failure and divine reversal that finds its ultimate expression in the cross and resurrection of Jesus Christ.",
      "To read Isaiah 29 is to be confronted with searching questions about the nature of one&rsquo;s own religious life. Are the feasts being kept while the heart grows cold? Has the Word of God become a sealed book, familiar in form but closed in meaning? Has the wisdom of the wise displaced humble dependence on the God who confounds all human cleverness? And yet the chapter ends not in despair but in the extravagant promise that God will act, that the deaf will hear, that the blind will see, and that those who wander in spirit will come to understanding. The same God who diagnoses the disease offers the cure.",
    ],
  },
  {
    id: "Key Themes",
    heading: "Key Themes of Isaiah 29",
    reference: "Isaiah 29:1&ndash;24",
    paragraphs: [
      "The first great theme of Isaiah 29 is the danger of ritual without heart. The chapter opens with a city that adds year to year and lets the feasts run their round &mdash; a picture of scrupulous religious observance. Jerusalem is not failing in outward religion; it is drowning in it. The feasts come and go in their proper seasons; the sacrifices are offered; the holy days are marked. But God looks at the heart, and what he finds there is distance, not devotion. The devastating diagnosis of verse 13 names the disease precisely: &ldquo;this people draw near with their mouth and honor me with their lips, while their hearts are far from me, and their fear of me is a commandment taught by men.&rdquo; Religion that has been reduced to technique, to learned responses, to the comfortable performance of inherited forms, is precisely the religion Isaiah is indicting. It is not too little religion but too much religion without God.",
      "The second great theme is God confounding human wisdom. Verse 14 is the hinge: &ldquo;therefore, behold, I will again do wonderful things with this people, with wonder upon wonder; and the wisdom of their wise men shall perish, and the discernment of their discerning men shall be hidden.&rdquo; The wise men of Jerusalem have become confident in their own political calculations, their strategic alliances, their reading of international dynamics. They hide their plans from the LORD (v.15), counsel without consulting him, seek to go deep from God. But God is not impressed by human cleverness, no matter how sophisticated. He will act in a way that overturns all their calculations &mdash; &ldquo;wonder upon wonder&rdquo; that cannot be explained by human analysis. Paul&rsquo;s use of this verse in 1 Corinthians 1 makes the point explicit: the cross is the supreme instance of God&rsquo;s wisdom confounding every human framework for understanding power, wisdom, and salvation.",
      "The third major theme is spiritual blindness and its cure. Verses 9&ndash;12 describe a people who have been blinded &mdash; not by external force but by their own choices. They have staggered and become blind; they have drunk from the wrong cup. The result is a strange collective stupor: the vision of all this has become to them like the words of a sealed book. Whether the book is given to one who can read, he says it is sealed; whether it is given to one who cannot read, he says he cannot read. The word of God is present but inaccessible, not because God has withheld it but because the people have lost the capacity to receive it. Yet the cure for this blindness is announced in verses 18&ndash;19: &ldquo;In that day the deaf shall hear the words of a book, and out of their gloom and darkness the eyes of the blind shall see.&rdquo; God himself will open the sealed book; God himself will give hearing to the deaf and sight to the blind. This is not something the blind can do for themselves; it is the sovereign work of the God who heals.",
      "A fourth theme, often overlooked, is the inversion of the powerful and the humble. Throughout verses 17&ndash;24 the reversal is total and systematic. The tyrant shall come to nothing (v.20); the scoffer shall cease (v.20); those who make a man out to be an offender are cut off (v.21). On the other side: the meek shall obtain fresh joy in the LORD (v.19); the poor among mankind shall exult in the Holy One of Israel (v.19); those who go astray in spirit will come to understanding (v.24). This pattern of reversal &mdash; the low lifted up, the proud brought down &mdash; is the characteristic shape of Isaiah&rsquo;s hope and, ultimately, of the gospel. The same God who brought low the proud city of Ariel is the God who raises up the humble in the dust.",
      "Finally, the theme of the potter and the clay in verses 15&ndash;16 speaks to the fundamental creature-Creator relationship. &ldquo;You turn things upside down! Shall the potter be regarded as the clay, that the thing made should say of its maker, &lsquo;He did not make me&rsquo;; or the thing formed say of him who formed it, &lsquo;He has no understanding&rsquo;?&rdquo; The arrogance of the wise who counsel without God is exposed as a category error: the creature attempting to reverse the roles of creature and Creator. This is not merely intellectual pride; it is an ontological confusion about who God is and who we are. The only proper posture before the God of Isaiah 29 is the posture of the clay: receptive, malleable, yielded to the hand of the one who formed us.",
    ],
  },
  {
    id: "Verse by Verse",
    heading: "Verse by Verse: Isaiah 29",
    reference: "Isaiah 29:1&ndash;24",
    paragraphs: [
      "<strong>Verses 1&ndash;4: Woe to Ariel.</strong> The oracle opens with a woe directed at Ariel, the city where David encamped. The command &ldquo;add year to year; let the feasts run their round&rdquo; drips with irony: continue your religious calendar, let the cycle of observance proceed &mdash; and see what it avails you when God himself becomes your adversary. &ldquo;I will distress Ariel, and there will be moaning and lamentation, and she will be to me like an Ariel&rdquo; (v.2). The city named &ldquo;altar hearth&rdquo; will become what its name implies: a place of consuming fire. Verse 4 pictures the utter humiliation of the city, brought so low that her voice will come from the ground like the voice of a ghost, whispering out of the dust. The proud city that raised its voice in worship and proclamation will be reduced to murmuring in the earth like the voice of the dead. This is the shocking bottom of God&rsquo;s judgment against superficial religion.",
      "<strong>Verses 5&ndash;8: The Dream That Vanishes.</strong> Just when the reader expects the devastation to continue, the direction reverses. The multitude of Ariel&rsquo;s enemies &mdash; all those foreign forces that God uses as instruments of judgment &mdash; will themselves be &ldquo;like small dust, and the multitude of the ruthless like passing chaff&rdquo; (v.5). The sudden reversal in verse 5 is one of Isaiah&rsquo;s characteristic moves: the instrument of God&rsquo;s judgment does not escape judgment. God will visit with thunder and earthquake and great noise, with whirlwind and tempest and the flame of a devouring fire (v.6). Then comes the dream image of verses 7&ndash;8: all the nations that fight against Ariel will be like a dream, like a vision of the night &mdash; as when a hungry man dreams he is eating and wakes to find his hunger unsatisfied, as when a thirsty man dreams he is drinking and wakes faint with thirst. The enemies of God&rsquo;s city are, in the end, dreamers grasping at phantoms. Their apparent victory will dissolve at the moment when God acts.",
      "<strong>Verses 9&ndash;12: The Sealed Book.</strong> The pivot of the chapter comes in verses 9&ndash;12, which turn from the external enemies to the internal spiritual condition of the people themselves. &ldquo;Astonish yourselves and be astonished; blind yourselves and be blind! Be drunk, but not with wine; stagger, but not with strong drink!&rdquo; (v.9). The prophet does not say God has blinded them in an arbitrary act of external compulsion; rather, the people have blinded themselves. The LORD has poured out upon them a spirit of deep sleep (v.10) &mdash; but this deep sleep is the consequence of a prior choice to stop their ears and close their eyes. The result is that the vision of all this &mdash; the word of God, the prophetic revelation &mdash; has become like a sealed book. It makes no difference whether the one who receives it can read or cannot: if he can read, the book is sealed and he cannot open it; if he cannot read, he lacks the skill to access it. The word of God is present among the people, but they have lost the capacity to receive it.",
      "<strong>Verses 13&ndash;16: Wisdom of the Wise Perishing.</strong> God&rsquo;s own diagnosis cuts to the root: &ldquo;Because this people draw near with their mouth and honor me with their lips, while their hearts are far from me, and their fear of me is a commandment taught by men&rdquo; (v.13). This is the pathology that explains the sealed book: when the heart has drifted far from God, the words of God stop penetrating. Therefore, God announces the most astonishing of his responses: &ldquo;I will again do wonderful things with this people, with wonder upon wonder; and the wisdom of their wise men shall perish, and the discernment of their discerning men shall be hidden&rdquo; (v.14). The wise political advisors who have been directing Judah&rsquo;s policy will find their wisdom collapsing. Then verses 15&ndash;16 indict those who hide their plans from God, who do their scheming in the dark as though God cannot see: &ldquo;Woe to those who hide deep from the LORD their counsel, whose deeds are in the dark, and who say, &lsquo;Who sees us? Who knows us?&rsquo;&rdquo; The potter-clay image concludes the section: the thing formed does not instruct the one who formed it.",
      "<strong>Verses 17&ndash;24: The Great Reversal.</strong> The closing section of Isaiah 29 is one of the most beautiful passages of hope in the entire Hebrew prophetic corpus. &ldquo;Is it not yet a very little while until Lebanon shall be turned into a fruitful field, and the fruitful field shall be regarded as a forest?&rdquo; (v.17). The transformation is total and swift &mdash; &ldquo;a very little while&rdquo; &mdash; and it runs through every category of human experience. In that day: the deaf shall hear the words of a book (v.18); the eyes of the blind shall see out of gloom and darkness (v.18); the meek shall obtain fresh joy in the LORD (v.19); the poor among mankind shall exult in the Holy One of Israel (v.19). On the negative side: the tyrant shall come to nothing (v.20); the scoffer shall cease (v.20); all who watch to do evil shall be cut off (v.20). And the chapter closes with a promise that encompasses both individual and communal transformation: &ldquo;those who go astray in spirit will come to understanding, and those who murmur will accept instruction&rdquo; (v.24). The God who sealed the vision will himself unseal it; the God who permitted the blindness will himself restore the sight.",
    ],
  },
  {
    id: "Application",
    heading: "Application: Living Before the God of Isaiah 29",
    reference: "Isaiah 29:1&ndash;24",
    paragraphs: [
      "The most searching application of Isaiah 29 is its diagnosis of the gap between outward religion and inward devotion. Jesus&rsquo; use of verse 13 in Matthew 15 and Mark 7 makes clear that this gap is not merely a first-century Israelite problem; it is a perennial human religious problem that can appear in any tradition, in any century, in any congregation. The danger is not that people stop performing religious acts but that they continue performing them while their hearts gradually drift away from the God those acts are meant to honor. The forms persist; the life drains out. The feasts run their round; the heart goes cold.",
      "The self-examination this text invites is therefore uncomfortable and necessary. Are the prayers being prayed, the songs being sung, the sermons being heard, the tithes being given &mdash; are these acts of genuine encounter with the living God, or have they become a comfortable routine, a commandment taught by men, a pattern of behavior that requires no particular engagement of the heart? Isaiah&rsquo;s indictment is not against formal worship as such; it is against formal worship that has become self-sufficient, that has stopped requiring the presence of God because the forms alone have become satisfying. The cure is not to abandon the forms but to press through them to the God they are meant to reach.",
      "The second great application concerns the danger of autonomous wisdom &mdash; of counseling and planning and directing one&rsquo;s life as though God is not the one who forms and guides and overrules. The counselors of Jerusalem in Isaiah&rsquo;s day were not stupid; they were politically shrewd, internationally experienced, skilled readers of power dynamics. But their wisdom had become self-referential. They planned without God and were confident that their own analysis was sufficient. The result, as Isaiah announces, was that their wisdom perished &mdash; not because God is opposed to human intelligence but because human intelligence exercised in independence from God is always finally insufficient. The application for the individual is the habit of prayer that precedes planning, the humility that asks God&rsquo;s guidance before setting a course, the willingness to have one&rsquo;s own best thinking overturned by the God who sees what we cannot see.",
      "The third application is the hope that Isaiah 29 offers to those who feel spiritually blind or deaf. There are seasons in the Christian life in which the word of God seems like a sealed book &mdash; familiar in form, inaccessible in power. The pages are turned; the words are read; the sermons are heard; but nothing seems to land, nothing seems alive, nothing opens. Isaiah 29 offers two things to those in that condition. First, a diagnosis: spiritual deafness often has identifiable causes &mdash; the drift of the heart, the gradual substitution of forms for encounter, the accommodation to surrounding culture. Second, a promise: &ldquo;In that day the deaf shall hear the words of a book.&rdquo; God himself, not human striving, will unseal the sealed book. The one who can close the eyes is the one who can open them, and he promises to do precisely that.",
      "Finally, Isaiah 29 calls every reader to the posture of the clay before the potter. This is the antidote to every form of autonomous wisdom and heart-distant religion. The clay does not instruct the potter; the creature does not direct the Creator. Humility before God&rsquo;s mysteries &mdash; not the manufactured humility of low self-esteem but the genuine humility that comes from knowing whose hands hold us &mdash; is the beginning of the openness through which God&rsquo;s word can penetrate again, through which the deaf can hear, and through which those who go astray in spirit can come to understanding. The last verse of the chapter (v.24) is the quiet promise that sustains: &ldquo;those who go astray in spirit will come to understanding.&rdquo; God has not given up on the wandering; he is working, by his own sovereign grace, to bring them home.",
    ],
  },
];

const videoItems = [
  { videoId: "xpnNRkJvCCw", title: "BibleProject - Book of Isaiah Overview" },
  { videoId: "d0CjQoovk8w", title: "Isaiah 29 - Woe to Ariel and the Sealed Book" },
  { videoId: "qJ4JqGqDYQE", title: "God Confounding Human Wisdom - Isaiah and 1 Corinthians 1" },
  { videoId: "8lnFLPxSrH0", title: "Spiritual Blindness and the Hope of Isaiah 29" },
];

export default function Isaiah29GuidePage() {
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
            Isaiah 29: Woe to Ariel and the Vision of Transformation
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A woe oracle against Jerusalem that becomes a vision of total reversal &mdash; the deaf shall hear the words of a book, the blind shall see, the meek shall exult, and the wisdom of the wise shall perish before the wonder-working God.
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

        {currentSection && activeTab !== "Videos" && (
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
              Deepen your study of Isaiah 29 through visual teaching on the woe against Ariel, the sealed book, God confounding human wisdom, spiritual blindness, and the great reversal when the deaf hear and the blind see.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Those Who Go Astray in Spirit Will Come to Understanding</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Isaiah 29 moves from woe to wonder, from the sealed book to the opened hearing, from the perishing of human wisdom to the fresh joy of the meek in the LORD. The same God who diagnoses the gap between lips and heart is the God who promises to close it &mdash; by wonder upon wonder that no human wisdom could have predicted or achieved.
          </p>
        </div>

        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Key Verse</div>
            <p style={{ color: TEXT, fontSize: "0.98rem", lineHeight: 1.7, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;In that day the deaf shall hear the words of a book, and out of their gloom and darkness the eyes of the blind shall see.&rdquo; &mdash; Isaiah 29:18" }} />
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>New Testament Connection</div>
            <p style={{ color: TEXT, fontSize: "0.98rem", lineHeight: 1.7, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "Jesus quotes Isaiah 29:13 in Matthew 15:8&ndash;9; Paul quotes 29:14 in 1 Corinthians 1:19, applying the divine overturning of human wisdom to the cross of Christ." }} />
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Central Warning</div>
            <p style={{ color: TEXT, fontSize: "0.98rem", lineHeight: 1.7, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "Ritual observance without heart devotion is the disease Isaiah names. The feasts may run their round while the heart grows ever more distant from the God those feasts are meant to honor." }} />
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>The Shape of Isaiah 29</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { ref: "vv. 1&ndash;4", label: "Woe to Ariel", note: "The city of David&rsquo;s feasts brought low, speaking from the dust" },
              { ref: "vv. 5&ndash;8", label: "The Dream That Vanishes", note: "Enemies like small dust; their apparent victory dissolves like an unfulfilled dream" },
              { ref: "vv. 9&ndash;12", label: "The Sealed Book", note: "Spiritual stupor; the word of God inaccessible to those who have closed their eyes" },
              { ref: "vv. 13&ndash;16", label: "Heart Far From God", note: "Lips near, heart far; the wisdom of the wise shall perish; woe to those who hide from the LORD" },
              { ref: "vv. 17&ndash;24", label: "The Great Reversal", note: "The deaf hear, the blind see, the meek rejoice, the scoffer ceases, the wanderer returns" },
            ].map((row) => (
              <div key={row.ref} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ minWidth: 90, color: ACCENT, fontWeight: 700, fontSize: 13 }} dangerouslySetInnerHTML={{ __html: row.ref }} />
                <div>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: row.label }} />
                  <div style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginTop: 2 }} dangerouslySetInnerHTML={{ __html: row.note }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.1rem" }}>Reflection Questions</h3>
          <ol style={{ color: MUTED, lineHeight: 1.85, margin: 0, paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: 10 }}>
            <li dangerouslySetInnerHTML={{ __html: "In what areas of your religious life might there be a gap between the words of your lips and the engagement of your heart?" }} />
            <li dangerouslySetInnerHTML={{ __html: "Where have you been tempted to counsel and plan as though God is not in the equation &mdash; trusting your own wisdom rather than seeking his?" }} />
            <li dangerouslySetInnerHTML={{ __html: "Have you experienced seasons when the Word of God seemed like a sealed book? What did you learn from that experience about the causes and the cure?" }} />
            <li dangerouslySetInnerHTML={{ __html: "How does Paul&rsquo;s application of Isaiah 29:14 in 1 Corinthians 1:19 help you understand what God was doing at the cross?" }} />
            <li dangerouslySetInnerHTML={{ __html: "What does it mean for you personally to take the posture of clay before the potter? Where is God currently shaping you in ways you did not choose?" }} />
          </ol>
        </div>
      </main>
    </div>
  );
}
