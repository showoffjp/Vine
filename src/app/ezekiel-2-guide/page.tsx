"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";

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
    heading: "Ezekiel 2 &mdash; Son of Man, I Send You",
    reference: "Ezekiel 2:1&ndash;10",
    paragraphs: [
      "Ezekiel 2 begins exactly where the overwhelming inaugural vision of chapter 1 leaves off. The prophet has fallen on his face before the appearance of the likeness of the glory of the Lord &mdash; the only appropriate human response to such a vision. He lies prostrate, undone, before he has yet heard a single word of the commission that is about to be given to him. Into that silence and that posture of creaturely humility, God speaks. And the very first word God speaks to Ezekiel is a title that will define his ministry for the rest of his life: &ldquo;Son of man, stand on your feet, and I will speak with you&rdquo; (2:1).",
      "The Hebrew phrase translated &ldquo;son of man&rdquo; is ben adam, meaning literally &ldquo;son of Adam&rdquo; or &ldquo;son of earth.&rdquo; It is not a title of honor or elevation; it is a title of creaturely solidarity. Adam is the word for the human being formed from the adamah, the ground. To be called ben adam is to be reminded that you are dust, a mortal creature standing before the immortal and eternal God. God will use this address more than ninety times in the book of Ezekiel &mdash; a deliberate, repeated emphasis on Ezekiel&rsquo;s humanity in the face of the overwhelming divine presence he has just encountered.",
      "The Spirit enters Ezekiel and sets him on his feet (2:2). He does not rise by his own strength or resolve; the same Spirit that animated the living creatures and the wheels in chapter 1 now acts upon the prophet himself, lifting him from prostration and enabling him to stand and hear. This detail is theologically significant: the prophetic ministry is not merely human courage or religious zeal. It is Spirit-enabled from first to last. Ezekiel can only stand because the Spirit stands him up.",
      "Then the commission unfolds in direct and startling language. &ldquo;Son of man, I send you to the people of Israel, to nations of rebels, who have rebelled against me. They and their fathers have transgressed against me to this very day&rdquo; (2:3). The word &ldquo;rebels&rdquo; is hard and intentional. God does not soften the description of his own people. They are described without euphemism as those who have persistently, generationally rebelled against the very God who is now commissioning a prophet to go to them. The word &ldquo;nations&rdquo; (plural) is striking &mdash; Israel, the people of the covenant, has become in their rebellion like the surrounding nations, plural and fragmented in their apostasy.",
      "The character of the people to whom Ezekiel is sent is described with equally blunt language: they are &ldquo;impudent and stubborn&rdquo; (2:4). The Hebrew behind &ldquo;impudent&rdquo; is literally &ldquo;hard of face&rdquo; &mdash; shameless, brazen. The word for &ldquo;stubborn&rdquo; is literally &ldquo;stiff of heart.&rdquo; Hard faces and stiff hearts: these are people who have closed themselves not merely intellectually but volitionally and affectively against God. Yet God sends his prophet to them anyway. The commission does not depend on the receptivity of the audience.",
      "The mission statement that follows is perhaps the most arresting sentence in Ezekiel 2: &ldquo;And whether they hear or refuse to hear (for they are a rebellious house) they will know that a prophet has been among them&rdquo; (2:5). The commission is not contingent on success. Ezekiel is not told to go and see how many he can win over, to measure his faithfulness by the response. He is told to go and speak. The outcome belongs to God. Whether the house of Israel hears or refuses to hear &mdash; and the parenthetical &ldquo;for they are a rebellious house&rdquo; suggests that refusal is the more likely outcome &mdash; they will know, eventually, that a prophet of the living God stood among them and spoke.",
      "Three times in 2:6 God says to Ezekiel: do not be afraid. This repetition is instructive. It acknowledges that there is something genuinely frightening about the commission being given. The people Ezekiel is being sent to are compared to thorns, briers, and scorpions (2:6) &mdash; painful, sharp, hostile, dangerous. This is not a comfortable mission to a receptive audience. God knows it, Ezekiel knows it, and the repeated command &ldquo;do not be afraid&rdquo; is the divine acknowledgment of that danger paired with the divine assurance of presence and protection. God does not minimize the hostility; he commands courage in the face of it.",
      "The chapter ends with the extraordinary gift of the scroll. Stretched out before Ezekiel &mdash; spread in front of him like an open book &mdash; a scroll written on both its front and its back (2:9-10). The content of this scroll is announced: &ldquo;lamentation and mourning and woe.&rdquo; The message Ezekiel has been called to deliver is not a comfortable one. It is dense with grief and warning. It is written on both sides because there is no room left; the weight of God&rsquo;s word against a rebellious people has filled the scroll entirely. And in chapter 3, Ezekiel is commanded to eat it &mdash; to internalize the word of God before he speaks it to anyone else.",
    ],
  },
  {
    id: "Key Themes",
    heading: "Key Themes in Ezekiel 2",
    reference: "Ezekiel 2:1&ndash;10",
    paragraphs: [
      "The dominant theological theme of Ezekiel 2 is the nature of prophetic calling. A prophet in the Old Testament is not a person who has volunteered for an interesting religious career or chosen a meaningful vocation. A prophet is someone seized by the word and Spirit of God, set on their feet by divine initiative, and sent into a situation that may offer little in the way of human reward or visible success. The calling of Ezekiel is a clarifying window into what prophetic ministry actually looks like at its core.",
      "Ben adam &mdash; son of man &mdash; is the first and most pervasive theme of the chapter, and indeed of the entire book of Ezekiel. The title is used here for the first time in the book, and its meaning is foundational. It is not a messianic title in its Ezekielian context (that significance develops later in Daniel and then in the New Testament on the lips of Jesus). In Ezekiel, it is a creatureliness marker. God addresses the prophet consistently as the human one, the mortal one, the earth-creature. The overwhelming divine glory of chapter 1 requires that the one sent by that glory never forget what he is: dust animated by the breath of God, a son of Adam standing before the Ancient of Days.",
      "The rebellious house is the second great theme. The phrase &ldquo;house of rebellion&rdquo; (beth hameri) occurs again and again in the early chapters of Ezekiel. It is not merely a description of past failures but a characterization of a settled, habitual orientation of the will. Rebellion in Ezekiel is not accidental or occasional; it is structural, generational, and deep. God names it with unusual frankness. This honesty about the spiritual condition of his people is itself an act of grace &mdash; the God who sees clearly still sends a prophet, still speaks, still refuses to simply abandon the house of rebellion to its own devices.",
      "The principle of faithfulness without guaranteed response is one of the most important and most neglected themes in all of prophetic literature, and Ezekiel 2 gives it its clearest expression. &ldquo;Whether they hear or refuse to hear &mdash; they will know that a prophet has been among them.&rdquo; This is God&rsquo;s definition of prophetic success: not audience conversion statistics, but faithful presence and faithful speech. The prophet&rsquo;s obligation is to go and to speak. The response belongs to the sovereignty of God and to the wills of the hearers. Ezekiel cannot control outcomes; he can only be obedient.",
      "The threefold command not to be afraid addresses a real human fear: the fear of hostile reception, of rejection, of the social and personal cost of speaking difficult truth to people who do not want to hear it. God does not pretend the danger away. He names the thorns and briers and scorpions honestly (2:6). But the command &ldquo;do not be afraid&rdquo; rests on the implicit foundation of divine presence. The God who commissions also accompanies. The repeated command to courage in the face of acknowledged danger is one of the most pastoral moments in the book.",
      "The scroll of lamentation, mourning, and woe introduces the theme of prophetic internalization. Before the prophet can speak God&rsquo;s word, he must receive it &mdash; and in Ezekiel&rsquo;s case, he must eat it (chapter 3 develops this). The word of God is not something external to the prophet, a message he carries at arm&rsquo;s length and delivers without personal cost. It is something he takes into himself, something that becomes part of him. This theme of the word internalized before it is proclaimed anticipates Jeremiah&rsquo;s image of the word as a fire shut up in his bones (Jeremiah 20:9), and ultimately it points to the incarnation, in which the Word itself becomes flesh and dwells among us.",
      "The Spirit as the animating power of the prophetic life is the final major theme. The Spirit enters Ezekiel and sets him on his feet (2:2). Without the Spirit, the prophet lies prostrate and helpless. With the Spirit, he stands and speaks. This is not a secondary detail; it is the foundation of everything that follows in the book. Ezekiel&rsquo;s ministry is not a human achievement. It is a Spirit-sustained obedience through decades of difficult, unrewarded proclamation to a people who for the most part refuse to hear.",
    ],
  },
  {
    id: "Verse by Verse",
    heading: "Verse by Verse Through Ezekiel 2",
    reference: "Ezekiel 2:1&ndash;10",
    paragraphs: [
      "Verses 1&ndash;2: &ldquo;And he said to me, &lsquo;Son of man, stand on your feet, and I will speak with you.&rsquo; And as he spoke to me, the Spirit entered into me and set me on my feet, and I heard him speaking to me.&rdquo; The movement from verse 1 to verse 2 is a compressed theology of prophetic calling. God speaks; the Spirit acts; Ezekiel stands. The command and the enablement arrive together. God does not command what he refuses to equip. The address &ldquo;son of man&rdquo; here is the inaugural use of the phrase in Ezekiel, and it sets the tone for the entire ministry that follows. Ezekiel is not commissioned as a great man but as a man &mdash; creature before Creator, mortal before eternal, dust before glory.",
      "Verses 3&ndash;5: &ldquo;And he said to me, &lsquo;Son of man, I send you to the people of Israel, to nations of rebels, who have rebelled against me. They and their fathers have transgressed against me to this very day. The descendants also are impudent and stubborn: I send you to them, and you shall say to them, &lsquo;Thus says the Lord God.&rsquo; And whether they hear or refuse to hear (for they are a rebellious house) they will know that a prophet has been among them.&rsquo;&rdquo; These three verses contain the whole of the prophetic commission in miniature. The sending is from God (&ldquo;I send you&rdquo;). The audience is defined honestly (rebels, transgressors, impudent, stubborn). The mandate is simple (say to them, &ldquo;Thus says the Lord God&rdquo;). And the criterion for faithfulness is freedom from outcome (&ldquo;whether they hear or refuse to hear&rdquo;). The final clause &mdash; &ldquo;they will know that a prophet has been among them&rdquo; &mdash; promises not conversion but recognition, not repentance but accountability. The presence of a faithful prophet among a rebellious people is itself a testimony that will not be erased.",
      "Verse 6: &ldquo;And you, son of man, be not afraid of them, nor be afraid of their words, though briers and thorns are with you and you sit on scorpions. Be not afraid of their words, nor be dismayed at their looks, for they are a rebellious house.&rdquo; The specificity of the warning is striking. God does not simply say &ldquo;do not be afraid.&rdquo; He says: do not be afraid of them, do not be afraid of their words, do not be afraid of their looks. Three different objects of fear are named, suggesting that Ezekiel &mdash; and every servant of God sent into hostile territory &mdash; may feel fear from multiple directions at once. The images of briers, thorns, and scorpions are vivid: these are things that pierce, scratch, sting, and wound. The life of a prophet among the rebellious house will not be comfortable.",
      "Verse 7: &ldquo;But you shall speak my words to them, whether they hear or refuse to hear, for they are a rebellious house.&rdquo; The &ldquo;but&rdquo; that opens this verse is the turn from fear to faithfulness. Whatever they do, whatever they say, whatever expressions cross their faces &mdash; speak. The word is non-negotiable. It is God&rsquo;s word, not Ezekiel&rsquo;s, and its proclamation is not dependent on the audience&rsquo;s posture. The repetition of &ldquo;whether they hear or refuse to hear&rdquo; from verse 5 to verse 7 is a deliberate structural emphasis, hammering home the unconditional nature of the obligation to speak.",
      "Verse 8: &ldquo;But you, son of man, hear what I say to you. Be not rebellious like that rebellious house; open your mouth and eat what I give you.&rdquo; There is an implicit and sobering contrast in this verse. Ezekiel is being sent to a rebellious house. The danger God warns him against is becoming like them &mdash; becoming one who, like them, closes his ears and refuses to hear. The phrase &ldquo;be not rebellious like that rebellious house&rdquo; implies that the prophet himself is capable of the same self-willed refusal. The command &ldquo;open your mouth and eat what I give you&rdquo; is the positive counterpart: active, receptive obedience to the divine word.",
      "Verses 9&ndash;10: &ldquo;And when I looked, behold, a hand was stretched out to me, and behold, a scroll of a book was in it. And he spread it before me. And it had writing on the front and on the back, and there were written on it words of lamentation and mourning and woe.&rdquo; The scroll is given &mdash; not dictated, not summarized, but placed physically before the prophet. Written on front and back, it is full. There is no empty space left on this scroll; the content is dense and complete. The three nouns &mdash; lamentation, mourning, woe &mdash; are the Hebrew words qinah, hegeh, and hi, each carrying its own weight of grief. The message Ezekiel carries is not primarily a message of comfort. It is a message about the cost of rebellion, delivered by a God who grieves his people&rsquo;s destruction even as he announces it.",
    ],
  },
  {
    id: "Application",
    heading: "Application &mdash; Faithful in a Rebellious House",
    reference: "Ezekiel 2:1&ndash;10",
    paragraphs: [
      "Ezekiel 2 speaks with startling directness to anyone who has been called to serve God in a context where the response has been largely indifferent or hostile. The first and most liberating application of this chapter is the uncoupling of faithfulness from results. God commissions Ezekiel not to convert the house of Israel but to speak to it. Whether they hear or refuse to hear is not Ezekiel&rsquo;s department. This is an enormous pastoral gift. It frees the servant of God from the crushing burden of measuring his faithfulness by audience response, by numbers, by visible transformation. It redefines success as obedient speech in the power of the Spirit, not as the production of a particular outcome.",
      "The identity of ben adam &mdash; son of man, son of earth, creaturely mortal &mdash; is the second great application. Living in an age of personal branding, platform-building, and the cultivation of spiritual celebrity, the consistent address of Ezekiel as ben adam is a bracing corrective. Before God, you are a human being. You are dust animated by grace. The overwhelming divine glory of Ezekiel 1 &mdash; the wheels and the wings and the sapphire throne and the amber fire &mdash; is the glory of the One who sends. The one sent is ben adam: a mortal, a creature, entirely dependent on the Spirit to stand on his own feet. This is not degrading. It is freeing. Your calling does not depend on your qualifications but on the One who calls and sends.",
      "The importance of eating the word before speaking it is a third application with deep practical force. Ezekiel must receive the scroll and eat it before he opens his mouth to prophesy. For those who teach, preach, counsel, or speak God&rsquo;s word in any form, this sequence is not merely interesting; it is prescriptive. The word must be internalized before it is proclaimed. The preacher who has not eaten the text &mdash; who has not chewed it, digested it, let it work its way into the interior of his own life &mdash; will speak it differently from the one who has. There is a difference between carrying a message and being transformed by one.",
      "The command &ldquo;do not be afraid&rdquo; has immediate application to every person who has felt the social and relational cost of speaking difficult truth. God names the thorns and the briers and the scorpions and then says: speak anyway. He does not promise that the hostility will disappear. He does not promise that the audience will become friendly. He promises his presence and repeats his command. For anyone who has held back a word of truth out of fear of how it will be received &mdash; fear of looks, fear of words, fear of the social cost &mdash; Ezekiel 2:6-7 is a word directly from God: do not be afraid of their words, nor be dismayed at their looks. Open your mouth. Speak my words.",
      "The grief-laden content of the scroll &mdash; lamentation, mourning, and woe &mdash; warns against a shallow triumphalism in prophetic speech. Not every word from God is a word of comfort or encouragement. Some messages carry the weight of grief, of warning, of the cost of rebellion. The prophet who cannot speak such words, who reshapes every message into one that his audience will enjoy, has ceased to be a prophet and has become an entertainer. Ezekiel is given the words of lamentation, mourning, and woe, and in chapter 3 he eats them and finds them sweet as honey. True prophetic speech holds together the bitterness of the content and the sweetness of the word of God &mdash; because even a word of warning from the living God is better than the silence of abandonment.",
    ],
  },
  {
    id: "Videos",
    heading: "Video Teaching on Ezekiel 2",
    reference: "Ezekiel 2:1&ndash;10",
    paragraphs: [
      "These video resources offer deeper engagement with the themes of Ezekiel 2: the commissioning of the prophet as son of man, the significance of the ben adam address across the book of Ezekiel, the command to speak without fear into a rebellious context, and the extraordinary image of the scroll of lamentation, mourning, and woe that the prophet is commanded to eat before he speaks.",
    ],
  },
];

const videoItems = [
  { videoId: "RvKcP8wZmQo", title: "Ezekiel 2: Son of Man I Send You (Verse by Verse)" },
  { videoId: "TxMtN5vJbNs", title: "Ben Adam - Son of Man in Ezekiel 2 Explained" },
  { videoId: "VzNpY7uBwLk", title: "Do Not Be Afraid of Them - Ezekiel 2 Study" },
  { videoId: "XbQrT3xZfVm", title: "Eating the Scroll - Ezekiel 2 and Prophetic Calling" },
];

export default function Ezekiel2GuidePage() {
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
            Prophets Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Ezekiel 2 &mdash; Son of Man, I Send You
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Having fallen on his face before the glory of God, Ezekiel is raised by the Spirit and commissioned as ben adam &mdash; son of man &mdash; to speak God&rsquo;s words to a rebellious house, without fear of thorns or briers, whether they hear or refuse to hear, and to eat a scroll of lamentation, mourning, and woe.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: "2rem" }}>
          {[
            { label: "Address Used", value: "90+ times", sub: "ben adam in Ezekiel" },
            { label: "Commission", value: "Ezek 2:3", sub: "I send you to rebels" },
            { label: "Content", value: "3 words", sub: "lamentation, mourning, woe" },
            { label: "Command", value: "3 times", sub: "do not be afraid" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.25rem", textAlign: "center" }}>
              <div style={{ color: ACCENT, fontSize: "1.5rem", fontWeight: 800, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ color: TEXT, fontSize: 13, fontWeight: 700, marginTop: 4 }}>{stat.label}</div>
              <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{stat.sub}</div>
            </div>
          ))}
        </div>

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

        {activeTab === "Key Themes" && (
          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { title: "Ben Adam &mdash; Son of Man", body: "Used over 90 times in Ezekiel, this address is not a messianic title in its original context but a creatureliness marker. Ezekiel is repeatedly reminded that he is mortal, human, a son of the ground &mdash; a creature standing before the overwhelming divine presence. The address is both humbling and sustaining: it is the human one whom God chooses as his mouthpiece." },
              { title: "The Rebellious House", body: "Beth hameri &mdash; the house of rebellion &mdash; is a recurring designation throughout Ezekiel for the people of Israel. It is not accidental or temporary rebellion but settled, generational, structural apostasy. Hard of face and stiff of heart, they have turned from God across generations. Yet God sends a prophet to them precisely because they are rebels. The commission does not wait for a more receptive audience." },
              { title: "Faithfulness Without Guaranteed Response", body: "Perhaps the most distinctive feature of Ezekiel&rsquo;s commission is its explicit decoupling of faithfulness from results. &ldquo;Whether they hear or refuse to hear.&rdquo; The prophet&rsquo;s obligation is to speak; the response belongs to God and to the people. This is not resignation but freedom &mdash; freedom from the crushing weight of making the outcome happen, and freedom to be simply and fully obedient." },
              { title: "The Scroll Eaten &mdash; The Word Internalized", body: "Before Ezekiel speaks, he must eat. The scroll of lamentation, mourning, and woe is not a message he carries at arm&rsquo;s length; it is something he takes into himself. This is the pattern of true prophetic speech: the word is first internalized, digested, and allowed to work its transformation in the messenger before it is proclaimed to the audience. A word that has not first been eaten cannot be spoken with full authenticity." },
              { title: "Do Not Be Afraid", body: "Three times in 2:6 God commands Ezekiel not to fear. The threefold repetition acknowledges the genuine danger of the mission &mdash; thorns, briers, scorpions. God does not minimize the hostility. He commands courage in the face of acknowledged danger, and the implicit ground of that courage is the divine presence that accompanies the divine commission. The one who sends does not abandon." },
            ].map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: GOLD, fontWeight: 700, fontSize: "1rem", marginBottom: "0.6rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, fontSize: "0.97rem", lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Ezekiel 2 through video teaching on the commissioning of the prophet as son of man, the repeated address ben adam and its theological significance across the book of Ezekiel, the divine command to speak without fear to a rebellious house whether they hear or refuse to hear, and the powerful image of eating the scroll of lamentation, mourning, and woe before opening the mouth to prophesy.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            Whether They Hear or Refuse to Hear
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Ezekiel 2 liberates the servant of God from the burden of manufacturing outcomes. The commission is to speak &mdash; faithfully, fearlessly, with the word of God internalized before it is proclaimed &mdash; and to leave the hearing or refusing to the sovereignty of God and the wills of the hearers. The ben adam who speaks God&rsquo;s words into a rebellious house does not do so in his own strength. The same Spirit who set Ezekiel on his feet sustains every faithful voice that speaks in hostile territory, because the word that goes out from God does not return empty.
          </p>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            Key Cross-References
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { ref: "Ezekiel 3:1&ndash;3", note: "Ezekiel eats the scroll and finds it sweet as honey in his mouth &mdash; the lamentation and woe that God gives is not bitter to receive but sweet, because it is the word of the living God." },
              { ref: "Jeremiah 20:9", note: "&ldquo;If I say I will not mention him, or speak any more in his name, there is in my heart as it were a burning fire shut up in my bones.&rdquo; The word internalized becomes impossible to contain." },
              { ref: "Isaiah 6:8", note: "Isaiah&rsquo;s commissioning: &ldquo;Whom shall I send, and who will go for us? Then I said, Here I am! Send me.&rdquo; The pattern of divine commission and prophetic response recurs across the prophetic books." },
              { ref: "Matthew 10:14", note: "Jesus sends his disciples with the same logic: &ldquo;And if anyone will not receive you or listen to your words, shake off the dust from your feet.&rdquo; Faithful proclamation is not rendered void by rejection." },
              { ref: "Revelation 10:8&ndash;10", note: "John is given a scroll to eat, sweet in his mouth but bitter in his stomach &mdash; the prophetic internalization of the word of God before speaking echoes directly from Ezekiel 2&ndash;3." },
            ].map((cr) => (
              <div key={cr.ref} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ color: GOLD, fontWeight: 700, fontSize: "0.85rem", minWidth: 130, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: cr.ref }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: cr.note }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Study Questions for Reflection</h3>
          <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: "1.5rem", margin: 0, fontSize: "0.97rem" }}>
            <li>What does it mean to you personally that God addresses Ezekiel consistently as &ldquo;son of man&rdquo; &mdash; mortal, creaturely, dependent? How does that address reshape how you think about your own calling or gifts?</li>
            <li>Is there a situation in your life or ministry where you have been measuring your faithfulness by visible results rather than by obedient speech? How does Ezekiel 2:5 speak to that?</li>
            <li>God names the thorns, briers, and scorpions honestly and then says &ldquo;do not be afraid.&rdquo; What is the difference between denying that something is frightening and choosing courage in full view of the fear?</li>
            <li>What would it look like practically in your own life to &ldquo;eat&rdquo; a passage of Scripture before you speak it to someone else? What does internalization of the word actually look like in your devotional practice?</li>
            <li>The scroll is full on both sides with lamentation, mourning, and woe. Are there difficult words from God that you have been reluctant to receive or to pass on? What makes those words hard to hold?</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
