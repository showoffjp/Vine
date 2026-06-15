"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Vision by the Chebar",
  "The Wheels Within Wheels",
  "The Glory of the Lord",
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
    heading: "Ezekiel's Inaugural Vision",
    reference: "Ezekiel 1",
    paragraphs: [
      "Ezekiel 1 records the overwhelming inaugural vision granted to the prophet by the Chebar canal among the exiles in Babylon. &ldquo;In the fifth year of the exile of King Jehoiachin&hellip; the heavens were opened, and I saw visions of God&rdquo; (vv.1&ndash;3). Far from the temple in Jerusalem, in a foreign land and a season of national disaster, Ezekiel the priest receives a revelation of God&rsquo;s glory that will shape his entire prophetic ministry.",
      "The vision opens with a great stormy cloud coming out of the north, flashing with fire and surrounded by brightness, with gleaming amber at its center (vv.4&ndash;14). From the midst of it emerge four living creatures, each with four faces &mdash; human, lion, ox, and eagle &mdash; and four wings. They move straight forward wherever the Spirit goes, darting to and fro like flashes of lightning, with fire and torches moving among them.",
      "Beside the living creatures Ezekiel sees gleaming wheels, &ldquo;a wheel within a wheel,&rdquo; their rims tall and full of eyes all around (vv.15&ndash;21). The wheels move with the creatures wherever they go and rise with them when they rise, &ldquo;for the spirit of the living creatures was in the wheels.&rdquo; The whole apparatus can move in any direction without turning, an image of unlimited mobility and all-seeing awareness.",
      "Above the heads of the creatures stretches an expanse shining like awe-inspiring crystal, and above that is the likeness of a throne like sapphire (vv.22&ndash;28). Seated above the throne is a figure with a human appearance, gleaming amber and fire from the waist up and down, surrounded by a radiance like a rainbow in the cloud on a day of rain. This, the prophet says, was &ldquo;the appearance of the likeness of the glory of the Lord.&rdquo;",
      "Ezekiel&rsquo;s response captures the proper posture before such a vision: &ldquo;And when I saw it, I fell on my face, and I heard the voice of one speaking.&rdquo; The transcendent glory of God commissions the prophet, overwhelming him before a single word of his message is spoken. The vision establishes the authority and majesty of the One who sends him.",
      "Throughout the chapter, Ezekiel guards the mystery of God with careful, reverent language. He speaks repeatedly of the &ldquo;likeness&rdquo; and the &ldquo;appearance&rdquo; of what he sees, never claiming to describe God directly. The effect is both to convey the overwhelming reality of the vision and to protect the holiness of the One who cannot be fully captured in human words. Ezekiel 1 is a sustained act of worshipful restraint before the glory of the living God.",
    ],
  },
  {
    id: "The Vision by the Chebar",
    heading: "The Vision by the Chebar",
    reference: "Ezekiel 1:1&ndash;14",
    paragraphs: [
      "The vision is anchored precisely in time and place. &ldquo;In the thirtieth year, in the fourth month, on the fifth day of the month, as I was among the exiles by the Chebar canal, the heavens were opened, and I saw visions of God&rdquo; (v.1). Ezekiel, a priest carried into exile, finds that God is not absent from Babylon. The word of the Lord comes to him there, and &ldquo;the hand of the Lord was upon him&rdquo; (v.3), seizing him for this revelation.",
      "The vision begins with a storm advancing from the north. &ldquo;As I looked, behold, a stormy wind came out of the north, and a great cloud, with brightness around it, and fire flashing forth continually, and in the midst of the fire, as it were gleaming metal&rdquo; (v.4). The amber glow at the heart of the storm signals the presence of something far beyond an ordinary tempest. Out of this blazing cloud the central figures of the vision emerge.",
      "From the midst of the fire come four living creatures of human form. &ldquo;And this was their appearance: they had a human likeness, but each had four faces, and each of them had four wings&rdquo; (vv.5&ndash;6). Their legs are straight, their feet like a calf&rsquo;s, and they sparkle &ldquo;like burnished bronze&rdquo; (v.7). Under their wings on four sides are human hands, and their wings touch one another as they stand together.",
      "The four faces give the creatures a striking symbolic fullness. &ldquo;As for the likeness of their faces, each had a human face. The four had the face of a lion on the right side, the four had the face of an ox on the left side, and the four had the face of an eagle&rdquo; (v.10). The faces have long been understood to gather up the noblest aspects of creation, suggesting that all living things are represented before the throne of God.",
      "Their movement is unhindered and unified. &ldquo;And each went straight forward. Wherever the spirit would go, they went, without turning as they went&rdquo; (v.12). The creatures do not pivot or hesitate; they move instantly and directly wherever the Spirit directs, perfectly responsive to the divine will. Their unity of motion reflects a single purpose animating the entire vision.",
      "Among the creatures blazes a restless, living fire. &ldquo;In the midst of the living creatures there was something like burning coals of fire, like the appearance of torches moving to and fro&hellip; and out of the fire went forth lightning&rdquo; (v.13). The creatures themselves dart &ldquo;like a flash of lightning&rdquo; (v.14). The whole scene pulses with movement, brightness, and energy, conveying the awesome, dynamic life that surrounds the presence of God.",
    ],
  },
  {
    id: "The Wheels Within Wheels",
    heading: "The Wheels Within Wheels",
    reference: "Ezekiel 1:15&ndash;21",
    paragraphs: [
      "As Ezekiel watches the living creatures, his attention is drawn to what stands beside them. &ldquo;Now as I looked at the living creatures, I saw a wheel on the earth beside the living creatures, one for each of the four of them&rdquo; (v.15). The wheels rest upon the earth, connecting this heavenly vision to the ground, and they are paired with the creatures, moving as one with them in everything that follows.",
      "The wheels gleam with a precious brilliance and have an unusual construction. &ldquo;As for the appearance of the wheels and their construction: their appearance was like the gleaming of beryl. And the four had the same likeness, their appearance and construction being as it were a wheel within a wheel&rdquo; (v.16). The &ldquo;wheel within a wheel&rdquo; design, likely two wheels set at right angles, allows movement in any of the four directions without the need to turn.",
      "The rims of the wheels are both majestic and unsettling. &ldquo;And their rims were tall and awesome, and the rims of all four were full of eyes all around&rdquo; (v.18). The eyes covering the wheels speak of an all-seeing awareness; nothing escapes the notice of this throne-chariot. The image conveys the omniscience of the God whose presence rests above it, who sees all things in every direction at once.",
      "The wheels move in perfect concert with the living creatures. &ldquo;And when the living creatures went, the wheels went beside them; and when the living creatures rose from the earth, the wheels rose&rdquo; (v.19). There is no independent motion; creatures and wheels rise, move, and stop together, a single unified vehicle responding to one guiding will.",
      "The secret of this unity is then disclosed. &ldquo;Wherever the spirit wanted to go, they went&hellip; for the spirit of the living creatures was in the wheels&rdquo; (v.20). The same Spirit that directs the creatures animates the wheels, so that the entire apparatus moves as one living whole. The mysterious mobility is not mechanical but spiritual, driven by the will of God himself.",
      "The theological force of the vision now becomes clear. This omnidirectional, all-seeing throne-chariot reveals a God who is not confined to the temple in Jerusalem. He can go anywhere, even to his exiled people in distant Babylon by the Chebar canal. The wheels within wheels proclaim God&rsquo;s omnipresence and omniscience &mdash; his throne can move to wherever his people are, and no place lies beyond the reach of his presence or the gaze of his eyes.",
    ],
  },
  {
    id: "The Glory of the Lord",
    heading: "The Glory of the Lord",
    reference: "Ezekiel 1:22&ndash;28",
    paragraphs: [
      "Above the living creatures Ezekiel sees a shining canopy. &ldquo;Over the heads of the living creatures there was the likeness of an expanse, shining like awe-inspiring crystal, spread out above their heads&rdquo; (v.22). This dazzling, crystalline expanse forms the floor of a higher realm, separating the creatures below from the throne above and heightening the sense that the vision is ascending toward something even greater.",
      "Beneath the expanse the creatures lower their wings, and a tremendous sound fills the scene. &ldquo;And when they went, I heard the sound of their wings like the sound of many waters, like the sound of the Almighty, a sound of tumult like the sound of an army&rdquo; (v.24). The thunderous noise of the wings overwhelms the senses, conveying the majesty and might of the presence that the creatures serve.",
      "Above the expanse appears the throne. &ldquo;And above the expanse over their heads there was the likeness of a throne, in appearance like sapphire; and seated above the likeness of a throne was a likeness with a human appearance above it&rdquo; (v.26). The vision has been building toward this moment: above the creatures, above the wheels, above the crystal expanse, there is a throne, and upon it a figure with the appearance of a man.",
      "The figure on the throne blazes with fire and radiance. &ldquo;And upward from what had the appearance of his waist I saw as it were gleaming metal&hellip; and downward from what had the appearance of his waist I saw as it were the appearance of fire, and there was brightness around him&rdquo; (v.27). The amber glow and surrounding fire echo the storm at the vision&rsquo;s beginning, now revealed as the radiance of the One enthroned at its center.",
      "The radiance is then likened to a sign of mercy. &ldquo;Like the appearance of the bow that is in the cloud on the day of rain, so was the appearance of the brightness all around. Such was the appearance of the likeness of the glory of the Lord&rdquo; (v.28). The rainbow encircling the throne recalls God&rsquo;s covenant promise, hinting at grace even amid a vision of overwhelming majesty. With careful words, Ezekiel names what he has seen: the likeness of the glory of the Lord.",
      "The prophet&rsquo;s response is the only fitting one. &ldquo;And when I saw it, I fell on my face, and I heard the voice of one speaking&rdquo; (v.28). The overwhelming, transcendent vision commissions Ezekiel by first humbling him to the ground. Throughout, his guarded language of &ldquo;likeness&rdquo; and &ldquo;appearance&rdquo; reverently guards the mystery of the One who cannot be fully described, even as the glory of God lays hold of his servant and prepares him to speak.",
    ],
  },
];

const videoItems = [
  { videoId: "Ez7kpV2Nb4L", title: "Ezekiel 1 - Visions of God by the Chebar Canal" },
  { videoId: "Cm5qR8Wx1Tp", title: "The Four Living Creatures and the Stormy Cloud" },
  { videoId: "Wh3nZ6Kb9Yr", title: "The Wheels Within Wheels - God's Omnipresence" },
  { videoId: "Gl8vT4Pq2Mk", title: "The Glory of the Lord - The Throne Like Sapphire" },
];

export default function Ezekiel1GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => setLoaded(true), []);
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
            Ezekiel 1
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            By the Chebar canal among the exiles in Babylon, &ldquo;the heavens were opened, and I saw visions of God.&rdquo; A stormy cloud from the north reveals four living creatures with four faces and four wings, gleaming wheels &ldquo;within wheels&rdquo; full of eyes, and above them a throne like sapphire with a figure of amber and fire wrapped in a rainbow radiance &mdash; &ldquo;the appearance of the likeness of the glory of the Lord.&rdquo;
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

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Ezekiel 1 through visual teaching on the opened heavens by the Chebar canal, the four living creatures emerging from the stormy cloud, the wheels within wheels that reveal God&rsquo;s omnipresence among his exiled people, and the overwhelming vision of the glory of the Lord enthroned above the crystal expanse.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>God Is Not Confined</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Ezekiel 1 proclaims that the glory of the Lord is not bound to the temple in Jerusalem. By a canal in Babylon, his throne-chariot &mdash; all-seeing, moving in every direction, animated by his Spirit &mdash; comes to his exiled people. The careful language of &ldquo;likeness&rdquo; and &ldquo;appearance&rdquo; guards the mystery of the One who cannot be fully described, even as his overwhelming glory lays hold of the prophet and sends him to speak.
          </p>
        </div>
      </main>
    </div>
  );
}
