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
  "The Son Superior to Angels",
  "Radiance of Glory",
  "Heir of All Things",
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
    heading: "Hebrews 1 &mdash; The Son of God Revealed",
    reference: "Hebrews 1:1&ndash;14",
    paragraphs: [
      "Hebrews opens not with a greeting or a statement of authorship but with one of the most majestic sentences in the entire New Testament. In two verses the author spans the whole sweep of divine speech &mdash; from the many ways and many portions in which God spoke of old through the prophets, to the final and definitive word spoken in these last days through his Son. The contrast is not between the inferior and the irrelevant, but between the partial and the complete, between the shadow and the substance. God has not been silent; he has been speaking all along. But now he has spoken fully, finally, and personally in the one who is both the content and the climax of all that came before.",
      "The recipients of the letter were almost certainly Jewish believers who were under intense pressure to abandon the Christian confession and return to the securities of the old covenant. The letter&rsquo;s argument is therefore not &ldquo;the old covenant was bad&rdquo; but rather &ldquo;the new covenant, inaugurated by the Son, is so vastly superior that to turn back from it is to turn away from God&rsquo;s own final word.&rdquo; Chapter 1 lays the Christological foundation for everything that follows: whatever was glorious in the old covenant &mdash; the angelic mediation, the Mosaic law, the Aaronic priesthood, the Levitical sacrifices, the tabernacle itself &mdash; finds its fulfillment and surpassing in the person of the Son.",
      "The first chapter is structured around two movements: first, a dense Christological prologue in verses 1&ndash;4 that introduces the Son through seven exalted descriptions; and second, a chain of seven Old Testament quotations in verses 5&ndash;14 that demonstrate the Son&rsquo;s superiority to the angels. The two movements are united by a single purpose: to show that the Son occupies a category entirely his own &mdash; not one among many heavenly beings, not merely the greatest of the prophets, but the eternal Son through whom God created all things and in whom all things will be brought to their consummation.",
      "The prologue of Hebrews 1 has often been compared to the prologue of John&rsquo;s Gospel, and the comparison is apt. Both begin not with the ministry of Jesus but with his eternal identity. Both locate him in the very life of God before creation. Both identify him as the agent of creation. Both describe him as the mediator of God&rsquo;s self-revelation to the world. Where John says &ldquo;the Word became flesh,&rdquo; Hebrews says the Son &ldquo;made purification for sins.&rdquo; Both the incarnation and the atonement flow from who the Son essentially is.",
      "The catena of Old Testament quotations that follows in verses 5&ndash;14 is perhaps the densest concentration of Scripture in a single chapter anywhere in the New Testament. The author draws from Psalm 2, 2 Samuel 7, Deuteronomy 32, Psalm 97, Psalm 104, Psalm 45, Psalm 102, and Psalm 110 &mdash; all applied to the Son. This is not random proof-texting but a carefully constructed argument: these are the highest things the Old Testament ever said about anyone, and they are all said of the Son. The angels, by contrast, are servants. There is no text in which God ever said to an angel what he said to the Son.",
      "Hebrews 1 is therefore not merely the opening of a letter; it is a theological vision. It invites its readers to see Christ not primarily through the categories of human achievement or even prophetic succession, but through the lens of eternal divine identity. Before the ministry begins, before the exhortations are given, before the warnings are sounded, the reader must first sit with this: who the Son is, and what it means that God has spoken in him.",
    ],
  },
  {
    id: "The Son Superior to Angels",
    heading: "The Son Superior to Angels",
    reference: "Hebrews 1:4&ndash;14",
    paragraphs: [
      "Having introduced the Son through the sevenfold prologue, the author of Hebrews pivots to a sustained argument that the Son is superior to the angels. This may seem an odd preoccupation to modern readers, but it was theologically urgent for the original audience. Angels were widely understood in Second Temple Judaism to be the mediators of the law (cf. Galatians 3:19, Acts 7:53). If the old covenant came through angels, and if the new covenant came through the Son, then the relative status of angels and the Son bears directly on the relative authority of the two covenants.",
      "The argument proceeds by means of contrast and quotation. &ldquo;Having become as much superior to angels as the name he has inherited is more excellent than theirs&rdquo; (v.4). The name in question is &ldquo;Son.&rdquo; The Son has inherited this name not in the sense that it was previously foreign to him, but in the sense that through the resurrection and exaltation &mdash; the completion of his atoning work &mdash; the eternal relationship expressed by that name has been publicly vindicated and displayed before all creation.",
      "The first quotation establishes the uniqueness of the Son&rsquo;s relationship with God: &ldquo;You are my Son, today I have begotten you&rdquo; (Ps 2:7). This is the coronation psalm of Israel&rsquo;s king, now applied to the risen and exalted Christ. The author then pairs it with the promise to David: &ldquo;I will be to him a father, and he shall be to me a son&rdquo; (2 Sam 7:14). Together these texts establish that the title &ldquo;Son&rdquo; belongs to Jesus in a way that has never been and can never be said of any angel. God never said to any angel: &ldquo;You are my Son.&rdquo;",
      "The second movement turns from the Son&rsquo;s unique relationship to God, to the posture of the angels toward the Son. &ldquo;Let all God&rsquo;s angels worship him&rdquo; (Deut 32:43, LXX). The angels are not peers of the Son; they are worshipers. Their proper posture in the presence of the Son is prostration and adoration. This is a remarkable assertion: the beings who stand closest to the throne of God, the ones described as burning with holiness and crying &ldquo;Holy, holy, holy,&rdquo; are themselves directed to bow before the Son.",
      "The author then makes explicit what the angels are: &ldquo;He makes his angels winds, and his ministers a flame of fire&rdquo; (Ps 104:4). Angels are not rulers; they are instruments. They are wind and fire in the hand of God &mdash; powerful, yes, glorious, certainly, but utterly at God&rsquo;s service. They have no throne of their own. They issue no eternal decrees. They bear no name that transcends the category of creature.",
      "By contrast, the Son is addressed directly in Psalm 45, a royal wedding psalm: &ldquo;Your throne, O God, is forever and ever, the scepter of uprightness is the scepter of your kingdom. You have loved righteousness and hated wickedness; therefore God, your God, has anointed you with the oil of gladness beyond your companions&rdquo; (vv.8&ndash;9). Here the Son is addressed as &ldquo;God,&rdquo; his throne declared eternal, his righteousness affirmed, and his anointing celebrated. The one who anoints and the one who is anointed are distinct, yet the one who is anointed is called God. The paradox of the Trinity hums beneath the text.",
      "The catena closes with the great Psalm 110: &ldquo;Sit at my right hand until I make your enemies your footstool.&rdquo; This is the most frequently quoted Old Testament verse in the New Testament, and here it functions as the capstone of the argument. The Son is enthroned at the right hand of the Majesty; the angels are sent out on assignment. The Son reigns; the angels serve those who are to inherit salvation. The contrast could not be more complete. To return to the mediation of angels, Hebrews implies, is not an upgrade &mdash; it is an abandonment of the one through whom God has spoken his final word.",
    ],
  },
  {
    id: "Radiance of Glory",
    heading: "Radiance of God&rsquo;s Glory",
    reference: "Hebrews 1:3",
    paragraphs: [
      "At the very center of the prologue stands one of the most exalted descriptions of Christ in all of Scripture: &ldquo;He is the radiance of the glory of God and the exact imprint of his nature, and he upholds the universe by the word of his power&rdquo; (1:3). These three phrases &mdash; radiance of glory, exact imprint of nature, upholder of all things &mdash; each deserve extended reflection, for together they locate the Son not merely in relation to God&rsquo;s acts in history but in relation to God&rsquo;s very being.",
      "The first phrase, &ldquo;radiance of the glory of God,&rdquo; employs the Greek word <em>apaugasma</em>, which can mean either &ldquo;reflection&rdquo; or &ldquo;effulgence&rdquo; (the outshining or radiating of light). Most modern scholars favor &ldquo;radiance&rdquo; or &ldquo;effulgence&rdquo; &mdash; the sense that the Son is not merely a mirror reflecting God&rsquo;s glory from a distance, but the very outshining of that glory, as the rays of the sun are of one substance with the sun and yet are genuinely distinct from it. The imagery recalls the Shekinah glory &mdash; the luminous, visible presence of God that filled the tabernacle and the Temple. That glory now has a human face.",
      "The Old Testament background to this language is rich. In Exodus, the glory of God was what Moses longed to see but could not see fully and live (Ex 33:18&ndash;23). It was the cloud and the fire that led Israel through the wilderness. It was the consuming presence that descended upon Sinai, that filled the tabernacle at its completion, that entered Solomon&rsquo;s Temple at its dedication. The glory of God was the visible manifestation of the invisible God, the sign that God himself was present among his people. Hebrews 1:3 says that Jesus Christ is that glory &mdash; not a symbol of it, not a container of it, but the radiance of it.",
      "The second phrase, &ldquo;exact imprint of his nature,&rdquo; uses the Greek <em>charakter</em>, the word for the impression made by a seal or a die. An ancient <em>charakter</em> was the exact representation of the seal that made it &mdash; every feature reproduced with precision. The Son is the exact imprint of the nature (Greek: <em>hypostasis</em>, the very substance or being) of God. Not an approximation, not a likeness that captures some features while omitting others, but a perfect, complete representation. Where the Son is, God is. To see the Son is to see the Father (John 14:9). The fourth-century church would fight enormous theological battles to defend this precise claim, and the language of Hebrews 1:3 would stand at the center of those debates.",
      "The third phrase &mdash; &ldquo;he upholds the universe by the word of his power&rdquo; &mdash; shifts from the Son&rsquo;s ontological relationship to the Father to his cosmic function. The word &ldquo;upholds&rdquo; (<em>pheron</em>) does not merely mean &ldquo;sustains&rdquo; in a static sense; it carries the idea of carrying forward, bearing along, moving toward a goal. The universe is not simply kept from collapse by the Son; it is being carried by him toward its appointed end. And the instrument of this cosmic governance is &ldquo;the word of his power&rdquo; &mdash; the same word that created, that commands, that in these last days has spoken definitively through the Son himself.",
      "Together these three phrases establish that the Son&rsquo;s work of revelation and redemption is not something he undertook as an outside contractor might take on a project. It flows from and expresses who he eternally is. He reveals God because he is the radiance of God&rsquo;s glory. He perfectly represents God because he is the exact imprint of God&rsquo;s nature. He sustains creation because he is its Lord and its goal. And it is this one &mdash; radiance, imprint, sustainer &mdash; who &ldquo;made purification for sins&rdquo; and &ldquo;sat down at the right hand of the Majesty on high.&rdquo; The atonement is not an emergency measure; it is the action of the eternal Son in history, bearing the full weight of the divine identity into the darkest place of human need.",
      "The phrase &ldquo;sat down&rdquo; at the end of verse 3 is quietly momentous. In the Temple, the Levitical priests never sat down &mdash; there were no chairs in the sanctuary, because their work was never finished; there was always another sacrifice to offer, another day&rsquo;s ministry to perform. But the Son &ldquo;sat down.&rdquo; His atoning work was complete. The purification he made was sufficient, final, unrepeatable. Hebrews will return to this image again and again (8:1, 10:12, 12:2), always with the same force: the sitting down of the Son is the posture of completed redemption, the eternal Sabbath rest of the once-for-all sacrifice.",
    ],
  },
  {
    id: "Heir of All Things",
    heading: "Heir of All Things &mdash; God&rsquo;s Final Word",
    reference: "Hebrews 1:1&ndash;4",
    paragraphs: [
      "The prologue of Hebrews opens with a temporal contrast: &ldquo;Long ago, at many times and in many ways, God spoke to our fathers by the prophets, but in these last days he has spoken to us by his Son&rdquo; (1:1&ndash;2). The phrase &ldquo;at many times and in many ways&rdquo; (Greek: <em>polumeros kai polutropos</em>) describes the diverse and fragmentary character of prophetic revelation. God spoke through visions, dreams, direct address, symbolic action, poetry, narrative, law, and wisdom. He spoke to patriarchs, to judges, to kings, to priests, to prophets across fifteen centuries. Every mode of speech was genuine, every word authoritative; yet each was partial, each awaited the fullness that was still to come.",
      "The contrast &ldquo;but in these last days&rdquo; marks a decisive shift in redemptive history. &ldquo;These last days&rdquo; is not a reference to the distant future; it is the author&rsquo;s description of the era inaugurated by the coming of the Son. The phrase echoes the prophets&rsquo; hope for the &ldquo;latter days&rdquo; when God would act decisively to save his people (Isaiah 2:2, Micah 4:1, Joel 2:28). Those days have arrived. The fulfillment the prophets foretold is now present &mdash; not as an idea or a further prophecy, but as a person.",
      "The author then identifies the Son with a series of seven descriptions, often called the &ldquo;sevenfold description&rdquo; of the Son, arranged in a kind of chiastic arc from eternity to time and back to eternity: (1) Heir of all things &mdash; the eschatological goal; (2) through whom he created the worlds &mdash; the primordial agency; (3) radiance of the glory of God &mdash; the eternal relationship; (4) exact imprint of his nature &mdash; the essential identity; (5) upholds the universe by the word of his power &mdash; the ongoing sovereignty; (6) made purification for sins &mdash; the historical act; (7) sat down at the right hand of the Majesty on high &mdash; the present reign. The structure is deliberate: from the end of history, back to the beginning, into the heart of the divine being, then through creation and atonement to the exaltation.",
      "The designation &ldquo;heir of all things&rdquo; placed first is striking. In the ancient world, an heir was not simply someone who received property after a death; the firstborn heir was the one to whom the father&rsquo;s name, authority, and estate ultimately belonged. To call the Son the &ldquo;heir of all things&rdquo; is to say that all of creation exists for him, moves toward him, and will ultimately be summed up in him (Eph 1:10). The universe is not an end in itself; it is an inheritance in transit, moving under the governance of the Son toward the day when &ldquo;every knee should bow &hellip; and every tongue confess that Jesus Christ is Lord&rdquo; (Phil 2:10&ndash;11).",
      "The instrument of creation &mdash; &ldquo;through whom he created the worlds&rdquo; (v.2) &mdash; is the same as the instrument of revelation and redemption. The Son through whom God made the ages is the Son through whom God has now spoken, the Son who made purification for sins. There is no discontinuity between the creative Word and the redeeming Word. The one who called light out of darkness is the one who entered the darkness of human sin to bring the light of life. Creation and new creation are one continuous work of the same eternal Son.",
      "The prologue reaches its climax in verse 4: &ldquo;having become as much superior to angels as the name he has inherited is more excellent than theirs.&rdquo; The word &ldquo;having become&rdquo; does not imply that the Son was not previously superior; it marks the historical moment of his exaltation following the humiliation of the cross. Through the resurrection and ascension, the Son has been publicly installed in the position that is his by eternal right. The name &ldquo;Son&rdquo; &mdash; which is the name above every name, the name that expresses the unique filial relationship between the first and second persons of the Trinity &mdash; has been displayed before all creation in its full, unveiled glory.",
      "For the original readers of Hebrews, tempted to retreat from their costly confession back to the safer ground of the old covenant, the prologue of chapter 1 delivers a single, urgent message: you cannot go higher than the Son. The prophets were great; the angels are glorious; the Temple was magnificent; but all of them were preparatory, all of them were partial, all of them were pointing forward to the one who is the radiance of God&rsquo;s glory, the heir of all things, the one through whom God has spoken his last and fullest word. To receive that word &mdash; to hold fast to the Son &mdash; is not to abandon the faith of Israel; it is to arrive at the destination toward which that faith was always traveling.",
      "Hebrews 1 is a call to lift the eyes of the heart to the enthroned Son and to see in him everything that God intends to say and do and be for his people. The chain of Old Testament quotations is not merely a scholarly argument; it is an invitation to worship. Seven times the Scripture speaks, and seven times the word is: look at the Son. He is the one who made the worlds. He is the one who carries them to their end. He is the one who purified your sins. He is seated, victorious, reigning, at the right hand of the Majesty on high. &ldquo;Sit at my right hand,&rdquo; God said, &ldquo;until I make your enemies your footstool.&rdquo; The enemies are being subdued. The reign continues. The word of God in the Son goes on being heard in all the earth.",
    ],
  },
];

const videoItems = [
  { videoId: "1YnSHIwgmXE", title: "Hebrews 1 - The Son of God, Radiance of the Father's Glory" },
  { videoId: "C1yDdlqCrVE", title: "BibleProject - Book of Hebrews Overview" },
  { videoId: "oYHDRdDBDxI", title: "Hebrews 1 - Superior to Angels - Verse by Verse" },
  { videoId: "N6bvvuBJJTk", title: "Hebrews 1 - Heir of All Things, The Sevenfold Description" },
];

export default function Hebrews1GuidePage() {
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
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Hebrews 1 &mdash; The Son, Radiance of God&rsquo;s Glory
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The magnificent Christological prologue of Hebrews &mdash; God who spoke in many ways through the prophets has now spoken finally and fully through his Son: the radiance of his glory, the exact imprint of his nature, heir of all things, superior to angels, seated at the right hand of the Majesty on high.
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
              <h2
                style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: currentSection.heading }}
              />
            </div>
            <div
              style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }}
              dangerouslySetInnerHTML={{ __html: currentSection.reference }}
            />
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

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }}>Video Teaching on Hebrews 1</h3>
          <p
            style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, margin: "0 0 1.5rem" }}
            dangerouslySetInnerHTML={{ __html: "Deepen your study of Hebrews 1 through these video teachings on the Son of God, his superiority to angels, the meaning of &ldquo;radiance of glory&rdquo; and &ldquo;exact imprint of his nature,&rdquo; and the great chain of Old Testament quotations that anchor the chapter." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "10px 14px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            God Has Spoken in His Son
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "Hebrews 1 sets the entire letter on its Christological foundation: every argument, every warning, every encouragement that follows rests on the incomparable identity of the Son. He is not one voice among many; he is the final, full, and living Word of God. To see him is to see the glory of God. To hear him is to hear God himself. And he has sat down &mdash; his purifying work complete &mdash; at the right hand of the Majesty on high, reigning until every enemy is made his footstool. This is the one the letter of Hebrews calls its readers to hold fast to, without drifting, without shrinking back, with full assurance of faith." }}
          />
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Key Old Testament Quotations in Hebrews 1</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { ref: "Psalm 2:7", text: "&ldquo;You are my Son, today I have begotten you&rdquo; &mdash; the unique Sonship of Christ, applied at his resurrection and exaltation." },
              { ref: "2 Samuel 7:14", text: "&ldquo;I will be to him a father, and he shall be to me a son&rdquo; &mdash; the Davidic covenant, fulfilled and transcended in the eternal Son." },
              { ref: "Deuteronomy 32:43 (LXX)", text: "&ldquo;Let all God&rsquo;s angels worship him&rdquo; &mdash; the angels are worshipers, not peers, of the Son." },
              { ref: "Psalm 104:4", text: "&ldquo;He makes his angels winds, and his ministers a flame of fire&rdquo; &mdash; angels are instruments; the Son is the Lord of angels." },
              { ref: "Psalm 45:6&ndash;7", text: "&ldquo;Your throne, O God, is forever and ever&rdquo; &mdash; the Son addressed as God, his kingdom eternal, his righteousness absolute." },
              { ref: "Psalm 102:25&ndash;27", text: "&ldquo;You, Lord, laid the foundation of the earth &hellip; they will perish, but you remain&rdquo; &mdash; the Son as Creator and the one who outlasts all creation." },
              { ref: "Psalm 110:1", text: "&ldquo;Sit at my right hand until I make your enemies your footstool&rdquo; &mdash; the reigning Son, whose victory over all opposition is assured." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", padding: "0.75rem 1rem", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 160, flexShrink: 0 }}>{item.ref}</span>
                <span
                  style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
