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
  "The Silver Cup",
  "Judah Approaches Joseph",
  "Judah's Plea",
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
    heading: "Joseph's Final Test of His Brothers",
    reference: "Genesis 44",
    paragraphs: [
      "Genesis 44 brings Joseph&rsquo;s long, deliberate testing of his brothers to its climax. Still unrecognized by the men who once sold him into slavery, Joseph devises a final trial designed to reveal whether their hearts have truly changed. He has his steward fill their sacks with grain and secretly hide his silver divining cup in Benjamin&rsquo;s sack, setting a trap that will force the brothers to choose between saving themselves and saving the youngest son of their father.",
      "The chapter opens with the planting of the cup (vv.1&ndash;5). At dawn the brothers set out, confident and relieved, only to be overtaken by Joseph&rsquo;s steward, who accuses them of repaying good with evil and stealing the cup by which his master practices divination. The brothers, certain of their innocence, rashly declare that whoever has the cup shall die and the rest become slaves. The search proceeds from the eldest to the youngest, and the cup is found in Benjamin&rsquo;s sack (vv.6&ndash;13).",
      "The discovery shatters their confidence. &ldquo;Then they tore their clothes&rdquo; and returned together to the city in grief, refusing to abandon Benjamin even though only he had been implicated (v.13). Their solidarity is the first sign that these are not the same men who once let Joseph be carried off without a backward glance. They come back as one, bound to share whatever fate awaits the youngest brother.",
      "Back before Joseph, Judah leads the brothers in humbling themselves to the ground (vv.14&ndash;17). When Joseph offers to keep only the guilty one and let the others go in peace, Judah cannot accept such mercy at Benjamin&rsquo;s expense. He steps forward and begins one of the most moving speeches in all of Scripture, recounting their father&rsquo;s love for the boy and the promise that bound Judah to bring him home safely.",
      "The speech rises to a climactic offer of self-sacrifice (vv.18&ndash;34). Judah &mdash; the very brother who had once proposed selling Joseph &mdash; now begs to remain as a slave in Benjamin&rsquo;s place, unable to bear the thought of returning to his father without the boy. His willingness to trade his own freedom for his brother&rsquo;s, and to spare his father&rsquo;s grief, marks the complete reversal of the heart that sold Joseph long ago.",
      "This chapter is the turning point of the whole Joseph narrative. The testing that began with accusations of spying and a demand to bring Benjamin reaches its purpose here: the brothers are revealed as changed men, and Judah&rsquo;s self-offering breaks through Joseph&rsquo;s carefully maintained disguise. Genesis 44 sets the stage for the great revelation of chapter 45, when Joseph can no longer restrain himself and makes himself known to the brothers who have finally proven the depth of their transformation.",
    ],
  },
  {
    id: "The Silver Cup",
    heading: "The Silver Cup in Benjamin's Sack",
    reference: "Genesis 44:1&ndash;13",
    paragraphs: [
      "Joseph sets his final test in motion with careful instructions to his steward. &ldquo;Fill the men&rsquo;s sacks with food, as much as they can carry, and put each man&rsquo;s money in the mouth of his sack&rdquo; (v.1). Then comes the crucial command: &ldquo;and put my cup, the silver cup, in the mouth of the sack of the youngest, with his money for the grain&rdquo; (v.2). The trap is laid with deliberate precision, aimed squarely at Benjamin.",
      "As the brothers leave at first light, Joseph sends the steward after them. &ldquo;When they had gone only a short distance from the city, Joseph said to his steward, Up, follow after the men, and when you overtake them, say to them, Why have you repaid evil for good?&rdquo; (v.4). The accusation is sharp: &ldquo;Is it not from this that my lord drinks, and by this that he practices divination? You have done evil in doing this&rdquo; (v.5). The charge of theft is dressed in the language of a grave personal offense.",
      "The brothers respond with the confidence of the genuinely innocent. They protest that they had even brought back the money found in their sacks from the first journey, so why would they now steal silver or gold (vv.7&ndash;8). Then they make a rash and fateful vow: &ldquo;Whichever of your servants is found with it shall die, and we also will be my lord&rsquo;s slaves&rdquo; (v.9). So sure are they of their innocence that they stake their very lives on it.",
      "The steward narrows the terms but presses the search forward. &ldquo;Let it be as you say: he who is found with it shall be my servant, and the rest of you shall be innocent&rdquo; (v.10). Then the tense search begins, and the narrator draws out the suspense: &ldquo;And he searched, beginning with the eldest and ending with the youngest&rdquo; (v.12). Sack after sack is opened, each one clear, the tension mounting as the search moves down the line toward Benjamin.",
      "The dreaded moment arrives. &ldquo;And the cup was found in Benjamin&rsquo;s sack&rdquo; (v.12). The very brother whose safety their father had so feared for, the one Judah had pledged to protect, is the one in whose possession the incriminating cup appears. In an instant their confidence collapses, and the brothers are confronted with a catastrophe that threatens to repeat the loss their father had already suffered.",
      "Their reaction reveals how much they have changed. &ldquo;Then they tore their clothes, and every man loaded his donkey, and they returned to the city&rdquo; (v.13). They could have let Benjamin face his fate alone, as the steward&rsquo;s narrowed terms allowed. Instead, every one of them turns back. The men who once sold a brother into slavery now refuse to abandon one, returning together in grief to share whatever judgment lies ahead.",
    ],
  },
  {
    id: "Judah Approaches Joseph",
    heading: "Judah Approaches Joseph",
    reference: "Genesis 44:14&ndash;23",
    paragraphs: [
      "The brothers come back to the very seat of power they had hoped to leave behind. &ldquo;When Judah and his brothers came to Joseph&rsquo;s house, he was still there. They fell before him to the ground&rdquo; (v.14). The repeated image of the brothers bowing before Joseph fulfills the dreams of his youth, yet they have no idea that the man before whom they prostrate themselves is the brother they betrayed.",
      "Joseph confronts them with the weight of his assumed authority. &ldquo;What deed is this that you have done? Do you not know that a man like me can indeed practice divination?&rdquo; (v.15). The question is designed to press hard on their consciences, to make them feel utterly exposed before a man who seems able to discern hidden things. It deepens the sense that there is no escape, no explanation they can offer that will clear them.",
      "Judah&rsquo;s answer reveals a profoundly changed heart. &ldquo;What shall we say to my lord? What shall we speak? Or how can we clear ourselves?&rdquo; (v.16). He does not protest their innocence regarding the cup, for he knows of no theft; instead he speaks as a man who senses a deeper reckoning at work. &ldquo;God has found out the guilt of your servants,&rdquo; he says, acknowledging a guilt that reaches back far beyond this moment.",
      "Then Judah makes a remarkable offer of solidarity. &ldquo;Behold, we are my lord&rsquo;s servants, both we and he also in whose hand the cup has been found&rdquo; (v.16). He does not seek to save the others by surrendering Benjamin alone; he binds the whole company together, offering all of them as slaves rather than letting the youngest bear the penalty by himself. The men who once divided are now determined to stand or fall as one.",
      "Joseph, however, presses the test to its sharpest point. &ldquo;Far be it from me that I should do so! Only the man in whose hand the cup was found shall be my servant. But as for you, go up in peace to your father&rdquo; (v.17). He offers the brothers exactly the escape that once would have tempted them: they may go home free, leaving only Benjamin behind. It is the precise scenario that exposes whether they have truly changed.",
      "Judah cannot accept such freedom. He steps forward and begins his great plea, recounting how &ldquo;my lord asked his servants, saying, Have you a father, or a brother?&rdquo; (v.19) and how they had told him of an aged father and a young brother, the only surviving son of his mother. He recalls the lord&rsquo;s insistence that the brother be brought down, and their father&rsquo;s reluctance to let him go. With these memories Judah lays the groundwork for the impassioned appeal that follows, refusing to abandon Benjamin or to wound his father again.",
    ],
  },
  {
    id: "Judah's Plea",
    heading: "Judah's Plea: A Substitute for Benjamin",
    reference: "Genesis 44:24&ndash;34",
    paragraphs: [
      "Judah&rsquo;s speech reaches its heart as he recounts his father&rsquo;s anguish over Benjamin. He tells how Jacob had spoken of his beloved wife Rachel: &ldquo;You know that my wife bore me two sons. One left me, and I said, Surely he has been torn to pieces, and I have never seen him since&rdquo; (vv.27&ndash;28). Without knowing it, Judah speaks of Joseph himself, recalling the lie the brothers had once told and the grief it had brought their father.",
      "The father&rsquo;s fear for the remaining son is desperate. &ldquo;If you take this one also from me, and harm happens to him, you will bring down my gray hairs in evil to Sheol&rdquo; (v.29). Jacob has already lost one son of Rachel, as he believes, and the loss of Benjamin would be more than the old man could bear. Judah understands that the boy&rsquo;s life and his father&rsquo;s life are bound together, and that to lose the one is to destroy the other.",
      "Judah then reveals the personal pledge that has driven him. &ldquo;For your servant became a pledge of safety for the boy to my father, saying, If I do not bring him back to you, then I shall bear the blame before my father all my life&rdquo; (v.32). He had made himself surety for Benjamin, staking his own standing with his father on the boy&rsquo;s safe return. This is no abstract concern; Judah is personally bound, and he will not break his word.",
      "From this pledge flows the climactic offer of substitution. &ldquo;Now therefore, please let your servant remain instead of the boy as a servant to my lord, and let the boy go back with his brothers&rdquo; (v.33). Judah asks to take Benjamin&rsquo;s place, to spend his own life in slavery so that the youngest may go free. It is the language of substitution, one man stepping into the doom that hangs over another.",
      "His reason is rooted in love for his father. &ldquo;For how can I go back to my father if the boy is not with me? I fear to see the evil that would find my father&rdquo; (v.34). Judah cannot face returning home to watch his father die of grief. The thought of that sorrow is unbearable to him, and so he offers himself in the boy&rsquo;s place rather than be the cause of such anguish. His plea is selfless, sacrificial, and complete.",
      "The wonder of this moment lies in who is speaking. Judah is the very brother who had once said, &ldquo;Let us sell him,&rdquo; the one who profited from Joseph&rsquo;s betrayal. Now that same Judah offers his own freedom to save his brother and spare his father&rsquo;s grief. The transformation is total, and it comes from the line of Judah, the messianic line through which the great Substitute would one day come. This self-giving intercession breaks Joseph&rsquo;s heart and sets the stage for the revelation of chapter 45, when the brother they wronged can restrain himself no longer.",
    ],
  },
];

const videoItems = [
  { videoId: "Gq3tZ8nB2Mp", title: "Genesis 44 - Joseph's Final Test of His Brothers" },
  { videoId: "Hc7vW4Rk5Jn", title: "The Silver Cup - A Trap Laid in Benjamin's Sack" },
  { videoId: "Kp1xN6Mz8Hr", title: "Judah Approaches Joseph - A Changed Heart Revealed" },
  { videoId: "Md9wT3Qb4Ky", title: "Judah's Plea - A Substitute for Benjamin" },
];

export default function Genesis44GuidePage() {
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
            Genesis Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Genesis 44
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Joseph&rsquo;s final test of his brothers: he hides his silver cup in Benjamin&rsquo;s sack, and when it is &ldquo;found,&rdquo; the brothers return in dismay. Judah leads them in humbling themselves and then delivers one of Scripture&rsquo;s most moving speeches, offering himself as a slave in Benjamin&rsquo;s place to spare their father&rsquo;s life.
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
              Deepen your study of Genesis 44 through visual teaching on Joseph&rsquo;s final test of his brothers, the silver cup hidden in Benjamin&rsquo;s sack, Judah&rsquo;s approach to the unrecognized brother he once betrayed, and the climactic plea in which Judah offers himself as a substitute to save Benjamin and spare their father&rsquo;s grief.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Heart of a Substitute</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 44 is the turning point of the Joseph story. Judah &mdash; who once said &ldquo;let us sell him&rdquo; &mdash; now offers his own freedom in Benjamin&rsquo;s place, unable to bear the thought of his father&rsquo;s grief. This self-sacrificial intercession, from the messianic line of Judah, proves the brothers&rsquo; transformation and breaks Joseph&rsquo;s heart, setting the stage for the great revelation of chapter 45.
          </p>
        </div>
      </main>
    </div>
  );
}
