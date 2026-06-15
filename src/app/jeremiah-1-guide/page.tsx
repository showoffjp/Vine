"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Before I Formed You",
  "The Two Visions",
  "Commissioned and Fortified",
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
    heading: "The Call of Jeremiah",
    reference: "Jeremiah 1",
    paragraphs: [
      "Jeremiah 1 records the call and commissioning of one of the most remarkable prophets in all of Scripture. The superscription introduces &ldquo;Jeremiah son of Hilkiah, one of the priests who were in Anathoth in the land of Benjamin&rdquo; (vv.1&ndash;3), whose long ministry spans the reigns of Josiah, Jehoiakim, and Zedekiah, all the way to the exile of Jerusalem. From the very first verses we sense that this is a prophet set apart for a turbulent and decisive era in the history of God&rsquo;s people.",
      "The heart of the chapter is the Lord&rsquo;s sovereign call: &ldquo;Before I formed you in the womb I knew you, and before you were born I consecrated you; I appointed you a prophet to the nations&rdquo; (vv.4&ndash;10). Jeremiah objects that he is only a youth who does not know how to speak, but the Lord reassures him, touches his mouth, and puts his own words there. The young man is set over nations and kingdoms, &ldquo;to pluck up and to break down, to destroy and to overthrow, to build and to plant.&rdquo;",
      "Two visions then confirm the word that has come to Jeremiah (vv.11&ndash;16). The first is an almond branch, a Hebrew wordplay assuring that the Lord is watching over his word to perform it. The second is a boiling pot tilting away from the north, a sign of the coming judgment that the Lord will let loose upon all the inhabitants of the land because they have forsaken him and worshiped the works of their own hands.",
      "The chapter closes with the Lord&rsquo;s commissioning and strengthening of his servant (vv.17&ndash;19). Jeremiah is told to dress himself for work and to speak everything he is commanded, without dismay. Then comes the great promise: the Lord makes him &ldquo;a fortified city, an iron pillar, and bronze walls, against the whole land.&rdquo; Opposition is certain, but so is the Lord&rsquo;s deliverance.",
      "Together these movements form a foundational text on the nature of a divine call. Jeremiah&rsquo;s ministry will be marked by rejection, suffering, and tears, and yet the chapter insists from the outset that his calling rests not on his own strength or eloquence but on the sovereign purpose, presence, and protection of God. The weeping prophet is not promised an easy road, but an unbreakable, God-given resilience.",
      "Jeremiah 1 thus speaks powerfully to anyone wrestling with a sense of inadequacy before a daunting task. It reminds us that God knows and consecrates his servants before they are even born, that he supplies the words they are to speak, and that his presence is the answer to every fear. The call is sovereign, the enabling is divine, and the commission carries both the solemn weight of judgment and the hope of building and planting.",
    ],
  },
  {
    id: "Before I Formed You",
    heading: "Before I Formed You I Knew You",
    reference: "Jeremiah 1:4&ndash;10",
    paragraphs: [
      "The call of Jeremiah begins with the word of the Lord reaching back before his very existence. &ldquo;Before I formed you in the womb I knew you, and before you were born I consecrated you; I appointed you a prophet to the nations&rdquo; (vv.4&ndash;5). The prophet&rsquo;s calling is not a sudden idea or a later development but a purpose rooted in God&rsquo;s eternal knowledge and intention. Before Jeremiah could do anything to earn or forfeit it, he was known, set apart, and appointed.",
      "Faced with such a staggering commission, Jeremiah responds with honest fear and a sense of inadequacy. &ldquo;Ah, Lord God! Behold, I do not know how to speak, for I am only a youth&rdquo; (v.6). His objection is the natural cry of one who feels too young, too inexperienced, and too unequal to the task. It echoes the hesitations of Moses before him, and it gives voice to the reluctance that so often accompanies a genuine call from God.",
      "The Lord does not rebuke Jeremiah for his fear so much as reframe his focus. &ldquo;Do not say, I am only a youth; for to all to whom I send you, you shall go, and whatever I command you, you shall speak&rdquo; (v.7). The emphasis shifts from Jeremiah&rsquo;s qualifications to God&rsquo;s commission. The prophet&rsquo;s adequacy is not the issue; obedience to the One who sends and commands him is.",
      "Then comes the heart of the reassurance: &ldquo;Do not be afraid of them, for I am with you to deliver you, declares the Lord&rdquo; (v.8). The antidote to fear is not a promise that opposition will be absent, but the promise of God&rsquo;s own presence and deliverance. This single assurance, &ldquo;I am with you,&rdquo; will sustain Jeremiah through decades of hostility and will become the bedrock of his entire ministry.",
      "The Lord then enacts his enabling in a vivid gesture: &ldquo;Then the Lord put out his hand and touched my mouth. And the Lord said to me, Behold, I have put my words in your mouth&rdquo; (v.9). The very point of Jeremiah&rsquo;s objection, his inability to speak, is met by divine provision. He will not speak his own words but the words God places there. The prophet becomes a mouthpiece for the Lord himself.",
      "Finally the scope of the commission is unveiled. &ldquo;See, I have set you this day over nations and over kingdoms, to pluck up and to break down, to destroy and to overthrow, to build and to plant&rdquo; (v.10). The young man from Anathoth is given authority over nations through the word he proclaims. His twofold task embraces both judgment and restoration, both the tearing down of what is corrupt and the building of what God will yet establish. Sovereign call, divine enabling, and a commission of breaking and building together define the prophet&rsquo;s life.",
    ],
  },
  {
    id: "The Two Visions",
    heading: "The Almond Branch and the Boiling Pot",
    reference: "Jeremiah 1:11&ndash;16",
    paragraphs: [
      "Having called and commissioned Jeremiah, the Lord confirms his word through two visions. The first comes as a question: &ldquo;Jeremiah, what do you see? And I said, I see an almond branch&rdquo; (v.11). The almond tree, often the first to blossom in the year, becomes the vehicle for a profound assurance. The vision is simple, but its meaning rests on a striking play on words in Hebrew.",
      "The Lord replies, &ldquo;You have seen well, for I am watching over my word to perform it&rdquo; (v.12). The Hebrew word for almond (shaqed) sounds almost identical to the word for watching (shoqed). The wordplay drives home a vital truth: just as surely as the almond branch is what it appears to be, so surely is God alert and active over his word, ensuring that everything he has spoken will come to pass. His word will not return empty.",
      "A second time the question comes: &ldquo;What do you see? And I said, I see a boiling pot, facing away from the north&rdquo; (v.13). The image shifts from quiet assurance to looming threat. A pot boiling over and tilting away from the north suggests something dangerous about to spill out from that direction, an unmistakable sign that trouble is approaching from beyond the northern horizon.",
      "The Lord interprets the vision plainly: &ldquo;Out of the north disaster shall be let loose upon all the inhabitants of the land&rdquo; (v.14). He declares that he is calling &ldquo;all the tribes of the kingdoms of the north,&rdquo; whose kings will come and set their thrones at the entrance of the gates of Jerusalem (v.15). The northern threat, ultimately embodied in Babylon, will be the instrument by which God executes the judgment he has determined.",
      "The reason for this coming disaster is then laid bare. The Lord will &ldquo;declare my judgments against them, for all their evil in forsaking me&rdquo; (v.16). Their guilt is specific: they have made offerings to other gods and worshiped the works of their own hands. The judgment from the north is not arbitrary but a righteous response to a people who have abandoned the living God for idols of their own making.",
      "Taken together, the two visions hold the whole prophetic message in tension. The almond branch assures Jeremiah that God&rsquo;s word is certain and will surely be fulfilled, while the boiling pot reveals the content of that word for Judah in this hour: judgment is coming from the north. The prophet is to speak with absolute confidence, knowing that the God who watches over his word will perform both his warnings and his promises in their appointed time.",
    ],
  },
  {
    id: "Commissioned and Fortified",
    heading: "Commissioned and Fortified",
    reference: "Jeremiah 1:17&ndash;19",
    paragraphs: [
      "With the visions given and interpreted, the Lord turns to charge his prophet directly for the work ahead. &ldquo;But you, dress yourself for work; arise, and say to them everything that I command you&rdquo; (v.17). The image of girding up for labor calls Jeremiah to readiness and resolve. He is not to soften or edit the message but to declare everything the Lord commands, holding nothing back from the people who must hear it.",
      "The charge carries a sober warning about the danger of fear. &ldquo;Do not be dismayed by them, lest I dismay you before them&rdquo; (v.17). Jeremiah is told that if he allows the people to intimidate him into silence, he himself will be broken before them. The call to courage is therefore not optional; the very integrity of his ministry depends on his refusing to be cowed by those who oppose him.",
      "Then comes one of the great promises of strength in all of Scripture. &ldquo;Behold, I make you this day a fortified city, an iron pillar, and bronze walls, against the whole land&rdquo; (v.18). Three vivid images of immovable strength are piled together. The weeping prophet, so conscious of his own weakness, is to become as unyielding as a walled city and as solid as iron and bronze against everything arrayed against him.",
      "The opposition Jeremiah will face is named in full: the Lord makes him strong &ldquo;against the kings of Judah, its officials, its priests, and the people of the land&rdquo; (v.18). His resistance will not come from a single quarter but from every level of society, from the throne to the temple to the common people. He is set against the whole land, an entire nation that will resent and resist the word he brings.",
      "Yet the promise of God is greater than the threat of the people. &ldquo;They will fight against you, but they shall not prevail against you, for I am with you, declares the Lord, to deliver you&rdquo; (v.19). The conflict is real and certain; opposition is promised, not merely permitted. But the outcome is equally certain: they will not overcome him, for the Lord himself stands with his servant to deliver him through every assault.",
      "These three verses form a foundational text on calling, fear, and faithfulness under hostility. Jeremiah is promised not an easy road but an unbreakable, God-given resilience. The same assurance that opened his call, &ldquo;I am with you,&rdquo; now closes it, framing his entire ministry between the bookends of divine presence. For all who are called to stand for the truth in the face of resistance, this passage teaches that God&rsquo;s protection, not human approval, is the ground of perseverance.",
    ],
  },
];

const videoItems = [
  { videoId: "Jr1bKn4Mz7T", title: "Jeremiah 1 - The Call of the Weeping Prophet" },
  { videoId: "Hw5pQ2Vb9Lx", title: "Before I Formed You I Knew You - The Sovereign Call" },
  { videoId: "Kd3xN7Wq1Rp", title: "The Almond Branch and the Boiling Pot - Two Visions" },
  { videoId: "Mb8vT4Pn6Yk", title: "A Fortified City - Commissioned and Strengthened" },
];

export default function Jeremiah1GuidePage() {
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
            Jeremiah 1
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The Lord calls Jeremiah before he is born: &ldquo;Before I formed you in the womb I knew you.&rdquo; The young priest of Anathoth objects that he is only a youth, but God touches his mouth, puts his words there, and sets him over nations and kingdoms. Two visions &mdash; the almond branch and the boiling pot from the north &mdash; confirm the certainty of God&rsquo;s word and the coming judgment, while the Lord makes his prophet a fortified city, an iron pillar, and bronze walls against the whole land.
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
              Deepen your study of Jeremiah 1 through visual teaching on the sovereign call of the prophet before birth, the divine enabling that puts God&rsquo;s words in his mouth, the two confirming visions of the almond branch and the boiling pot, and the great promise that makes a fearful young man a fortified city against the whole land.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Called, Enabled, Protected</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Jeremiah 1 grounds an entire ministry in the sovereign purpose of God. The prophet is known and consecrated before birth, enabled by the touch of God upon his mouth, and protected by the promise &ldquo;I am with you to deliver you.&rdquo; The weeping prophet is not spared opposition but is made &ldquo;a fortified city, an iron pillar, and bronze walls&rdquo; &mdash; an unbreakable resilience given by the One who watches over his word to perform it.
          </p>
        </div>
      </main>
    </div>
  );
}
