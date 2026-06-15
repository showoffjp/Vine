"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Cain and Abel",
  "The First Murder",
  "After the Fall",
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
    heading: "Genesis 4: Overview",
    reference: "Genesis 4:1&ndash;26",
    paragraphs: [
      "Genesis 4 stands at the threshold between the garden and the world we inhabit. Eden is behind; the east is before us. The chapter narrates the first birth, the first act of worship, the first murder, the first exile, and &mdash; by its closing verse &mdash; the first recorded calling upon the name of the Lord. In fewer than thirty verses the author of Genesis traces a trajectory that encompasses the whole of human experience: love and envy, worship and rejection, violence and wandering, family and the slow construction of civilization.",
      "The chapter is structured around two family lines that emerge from Adam and Eve after the expulsion. The line of Cain moves east of Eden into the land of Nod, building cities and developing the arts of civilization &mdash; metalworking, music, animal husbandry &mdash; yet shadowed from its beginning by murder and magnified by Lamech&rsquo;s boastful song of revenge. The line of Seth, born as God&rsquo;s replacement gift after Abel&rsquo;s death (v.25), ends with Enosh and the notation that people &ldquo;began to call upon the name of the LORD&rdquo; (v.26), the first recorded corporate worship in human history.",
      "The chapter invites readers to ask deep questions: Why was Abel&rsquo;s offering accepted and Cain&rsquo;s not? What does it mean that sin is &ldquo;crouching at the door&rdquo; (v.7)? Why did God protect Cain after his crime? What is the relationship between the mark of Cain and the grace of God? These questions have occupied readers, rabbis, and theologians for millennia, and they press into some of the deepest themes of Scripture: the nature of genuine worship, the anatomy of sin and jealousy, the tension between divine justice and divine mercy, and the human capacity for both civilization and destruction.",
      "Theologically, Genesis 4 is the first great meditation on sin outside the garden. In Eden, sin was a temptation from without (the serpent); here sin is described as a force crouching at the door from within, desiring to master Cain but capable of being ruled over &mdash; if he chooses. The tragedy of Cain is that he does not choose to rule it. The New Testament returns to this chapter to make its moral and theological point: the author of Hebrews holds up Abel as a model of faith (Heb 11:4), while John warns against being &ldquo;like Cain, who was of the evil one and murdered his brother&rdquo; (1 John 3:12), and Jude refers to &ldquo;the way of Cain&rdquo; (Jude 11) as the archetype of faithless, violent religion.",
      "The literary artistry of the chapter should not be overlooked. The author uses wordplay, repetition, and irony to great effect. The ground that yielded to Adam in toil now refuses to yield to Cain at all; the voice that cried out in the serpent&rsquo;s temptation now cries out from the ground in Abel&rsquo;s blood; the exile from the garden becomes a deeper exile to the land of wandering. Every element of the fall story in Genesis 3 finds its intensified echo in Genesis 4. Sin does not merely continue; it accelerates.",
    ],
  },
  {
    id: "Cain and Abel",
    heading: "Cain and Abel: Offerings and God&rsquo;s Response",
    reference: "Genesis 4:1&ndash;7",
    paragraphs: [
      "The chapter opens with the most compressed birth narrative in Scripture: &ldquo;Now Adam knew Eve his wife, and she conceived and bore Cain, saying, &lsquo;I have gotten a man with the help of the Lord&rsquo;&rdquo; (v.1). Eve&rsquo;s exclamation is striking &mdash; a confession of divine partnership in the bringing of new life. The name Cain (qayin) carries the sound of the word &ldquo;gotten&rdquo; (qaniti), a pun the original readers would have heard immediately. Abel (hevel) means &ldquo;breath&rdquo; or &ldquo;vapor,&rdquo; a word used dozens of times in Ecclesiastes to evoke transience and futility. Even in the naming, Abel&rsquo;s brevity of life seems anticipated.",
      "The two brothers represent two of the foundational human vocations: Cain is a worker of the ground, a farmer; Abel is a keeper of sheep, a shepherd. Both vocations were honorable; both are necessary for human flourishing. When they bring their offerings to the Lord, the text is precise. Cain brings &ldquo;an offering of the fruit of the ground&rdquo; (v.3) &mdash; a general description with no further detail. Abel brings &ldquo;the firstborn of his flock and of their fat portions&rdquo; (v.4) &mdash; the best, the first, the finest.",
      "The Lord has regard for Abel and his offering but for Cain and his offering he has no regard. The text does not spell out the reason in these verses, and this silence has generated centuries of interpretation. Several streams of thought have emerged. First, the quality of the offerings: Abel gave the best he had; the text is silent about whether Cain gave his first and finest or simply &ldquo;some.&rdquo; Second, the heart behind the offering: the New Testament is most explicit here. Hebrews 11:4 says Abel offered &ldquo;by faith,&rdquo; and 1 John 3:12 says Cain&rsquo;s deeds were evil. The issue was not merely the content of the offering but the disposition of the worshiper. Third, a difference in obedience: some interpreters have argued that blood sacrifice was already understood to be required, though the text does not say this explicitly.",
      "Whatever the precise reason, what follows is unmistakable: &ldquo;Cain was very angry, and his face fell&rdquo; (v.5). The Hebrew is vivid &mdash; his face fell, collapsed, sank. God&rsquo;s response is not condemnation but a pastoral question and a warning: &ldquo;Why are you angry, and why has your face fallen? If you do well, will you not be accepted? And if you do not do well, sin is crouching at the door. Its desire is for you, but you must rule over it&rdquo; (vv.6&ndash;7).",
      "This verse (4:7) is one of the most important in the entire book of Genesis. It is the first explicit description of sin in the Bible &mdash; not as rule-breaking alone, but as a predatory, crouching force with a desire to master its host. The language echoes the description of the serpent&rsquo;s desire in Genesis 3:16, reversing it: as the serpent desired to lead humanity, sin now desires to lead Cain. But &mdash; crucially &mdash; God tells Cain that mastery is possible: &ldquo;you must rule over it.&rdquo; The door is not yet closed. The warning is also an invitation. Cain&rsquo;s subsequent action shows that he refuses to take it.",
      "This passage invites deep reflection on the nature of worship. True worship is not merely the performance of a ritual but an expression of the heart&rsquo;s orientation toward God. God cannot be manipulated or satisfied with external performance divorced from internal reality. He looks not only at the gift but at the giver. This is the constant refrain of the prophets (Isa 1:11&ndash;17; Amos 5:21&ndash;24; Mic 6:6&ndash;8) and of Jesus himself (Matt 5:23&ndash;24). Genesis 4 is the first chapter in that long canonical story.",
    ],
  },
  {
    id: "The First Murder",
    heading: "The First Murder: Cain Rises Against Abel",
    reference: "Genesis 4:8&ndash;16",
    paragraphs: [
      "Having refused God&rsquo;s warning, Cain speaks to his brother Abel. The text says he &ldquo;said to Abel his brother,&rdquo; but what he said is not recorded in the Hebrew &mdash; a gap that heightens the sense of premeditation and menace. The action follows without further elaboration: &ldquo;And when they were in the field, Cain rose up against his brother Abel and killed him&rdquo; (v.8). The first death in human history is also the first murder, and it is fratricide &mdash; a brother killing a brother. The intimacy of the crime compounds its horror.",
      "The divine interrogation that follows echoes the one in the garden. God asks Adam, &ldquo;Where are you?&rdquo; (3:9); now he asks Cain, &ldquo;Where is Abel your brother?&rdquo; (v.9). Cain&rsquo;s reply is famous for its combination of lie and defiance: &ldquo;I do not know; am I my brother&rsquo;s keeper?&rdquo; (v.9). The question is rhetorical and intended to deflect, but it contains a devastating irony: the very word &ldquo;keeper&rdquo; (shomer) is the word used for Abel&rsquo;s vocation &mdash; he was a keeper of sheep. Cain was indeed supposed to be his brother&rsquo;s keeper in the sense that we all bear responsibility for one another. The answer to Cain&rsquo;s dismissive question, the entire Bible suggests, is &ldquo;yes.&rdquo;",
      "God&rsquo;s response cuts through the lie: &ldquo;What have you done? The voice of your brother&rsquo;s blood is crying to me from the ground&rdquo; (v.10). Blood is life in the Hebrew worldview (Lev 17:11, 14), and spilled blood cries out for justice. The ground itself has become a witness. This cry from the ground is one of the most haunting images in all of Scripture &mdash; the murdered innocent whose voice does not fall silent simply because the murderer has walked away. The author of Hebrews uses this image to contrast Abel&rsquo;s blood with the blood of Jesus, which speaks &ldquo;a better word than the blood of Abel&rdquo; (Heb 12:24) &mdash; a word of mercy rather than accusation.",
      "The sentence God pronounces on Cain intensifies the curse already laid upon Adam. The ground, from which Adam was taken and which he was to till, will no longer yield its strength to Cain (vv.11&ndash;12). Cain becomes &ldquo;a fugitive and a wanderer on the earth&rdquo; &mdash; the one who killed while standing on the field will have no field, no settled life, no rootedness. Banishment from the land is in the ancient world a form of social death.",
      "Cain&rsquo;s response is a lament, not a confession of wrongdoing: &ldquo;My punishment is greater than I can bear&rdquo; (v.13). The Hebrew word translated &ldquo;punishment&rdquo; (avon) also means &ldquo;iniquity&rdquo; &mdash; Cain may be saying both &ldquo;my guilt is too great to be forgiven&rdquo; and &ldquo;my punishment is more than I can endure.&rdquo; His specific fear is that whoever finds him will kill him (v.14). This fear of retributive violence exposes the logic of what he has done: he now lives in a world where the murder he committed becomes the standard others may apply to him.",
      "Yet God, in an act of astonishing mercy, places a mark on Cain: &ldquo;whoever kills Cain, vengeance shall be taken on him sevenfold&rdquo; (v.15). The &ldquo;mark of Cain&rdquo; has been catastrophically misread in the history of interpretation, but the text is clear: it is a mark of protection, not condemnation. God shields the murderer from mob justice. This is not because the crime does not matter &mdash; the blood still cries from the ground &mdash; but because God reserves judgment to himself. The mark is a sign of grace in the midst of deserved consequence, a pattern that will recur throughout redemptive history. Cain goes out from the presence of the Lord and dwells in the land of Nod &mdash; the land of wandering &mdash; east of Eden.",
    ],
  },
  {
    id: "After the Fall",
    heading: "After the Fall: Two Lines, Two Trajectories",
    reference: "Genesis 4:17&ndash;26",
    paragraphs: [
      "The final section of Genesis 4 records the descendants of Cain and introduces the line of Seth, setting up the two genealogical streams that will run through the primeval history and into the patriarchal narratives. The genealogy of Cain (vv.17&ndash;24) is a remarkable compressed history of early civilization. Cain himself builds a city and names it after his son Enoch. The progression through the generations produces Jabal, the father of those who dwell in tents and have livestock (animal husbandry); Jubal, the father of those who play the lyre and pipe (music); and Tubal-cain, the forger of all instruments of bronze and iron (metallurgy). Civilization in all its material and cultural dimensions emerges from the line of the murderer.",
      "This is theologically significant. Genesis does not present human cultural achievement as inherently evil, nor does it associate civilization exclusively with the godly line. The arts of music, agriculture, metalworking, and city-building come through Cain&rsquo;s descendants. This suggests that common grace &mdash; God&rsquo;s gifts distributed across humanity regardless of covenant standing &mdash; is operative even in the line of one who has &ldquo;gone out from the presence of the Lord.&rdquo; Culture is neither automatically sacred nor automatically corrupt; it is a realm in which fallen human beings, using gifts from their Creator, build structures that are ambiguous, capable of beauty and of violence.",
      "The ambiguity is made explicit in the figure of Lamech, the seventh generation from Cain. Lamech takes two wives &mdash; the first recorded instance of polygamy in the Bible &mdash; and sings a chilling poem of revenge to them: &ldquo;I have killed a man for wounding me, a young man for striking me. If Cain&rsquo;s revenge is sevenfold, then Lamech&rsquo;s is seventy-sevenfold&rdquo; (vv.23&ndash;24). Lamech perverts God&rsquo;s protective declaration over Cain into a boast of unrestrained vengeance. What God had claimed as the prerogative of justice, Lamech claims as a personal license for disproportionate retaliation. The escalation of violence in Cain&rsquo;s line has reached its fullest expression: from one murder to a culture of magnified revenge.",
      "Jesus will reverse this logic precisely. When Peter asks whether forgiving a brother seven times is sufficient, Jesus answers not seventy-seven times but seventy times seven (Matt 18:22) &mdash; a deliberate allusion to Lamech&rsquo;s poem. The new community inaugurated by Christ inverts the logic of Cain&rsquo;s line: where Lamech escalated violence without limit, Jesus calls his people to extend forgiveness without limit. The gospel is the answer to the song of Lamech.",
      "The chapter&rsquo;s turn to Seth (v.25) is marked by a note of divine provision. Eve names her third son Seth, saying, &ldquo;God has appointed for me another offspring instead of Abel, for Cain killed him.&rdquo; The word &ldquo;appointed&rdquo; (shet) is the wordplay on Seth&rsquo;s name. Abel was gone; Cain was exiled; but God had not abandoned his purposes. Seth is a new beginning, a replacement seed, and the line through which the narrative of grace will continue. It is through Seth, not Cain, that the genealogy of Genesis 5 will run, ultimately leading to Noah and beyond to the patriarchs.",
      "The chapter closes with its most hopeful verse: &ldquo;To Seth also a son was born, and he called his name Enosh. At that time people began to call upon the name of the LORD&rdquo; (v.26). After the expulsion, the murder, the exile, and the culture of revenge, something new emerges: public, corporate worship. People &mdash; a community, not just an individual &mdash; calling together upon the Lord. The name of the Lord is invoked. This is the first dawn of what will become Israel&rsquo;s worship, the temple, the psalms, the prayer of the church. Out of the wreckage of the fall, the seed of worship is planted. It is a quiet verse, but it carries the weight of the entire future of redemptive history in it.",
    ],
  },
];

const videoItems = [
  { videoId: "s9iKGI-WFlc", title: "BibleProject - Genesis Overview" },
  { videoId: "h7HRpBaFPYs", title: "Cain and Abel - Genesis 4 Explained" },
  { videoId: "AoFiRZP7kKk", title: "The First Murder: Sin Crouching at the Door" },
  { videoId: "T9bqCcZPfFk", title: "The Mark of Cain and the Grace of God" },
];

export default function Genesis4GuidePage() {
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
            Genesis 4: Cain and Abel
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The first siblings, the first act of worship, the first murder, the mark of God&rsquo;s protection, and the birth of human civilization &mdash; Genesis 4 presses into the deepest questions of sin, grace, justice, and the cry of innocent blood from the ground.
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
              Deepen your understanding of Genesis 4 &mdash; Cain and Abel, the nature of acceptable worship, the anatomy of sin, and the mark of God&rsquo;s mercy &mdash; through these video resources.
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
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Am I My Brother&rsquo;s Keeper?</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            The answer Scripture gives to Cain&rsquo;s dismissive question is a resounding yes. Abel&rsquo;s blood speaks from the ground; Jesus&rsquo; blood speaks a better word. Where Cain refused to rule over sin and descended into murder, Christ absorbed the full weight of human violence to inaugurate a community defined not by Lamech&rsquo;s seventy-sevenfold revenge but by seventy times seven forgiveness. Genesis 4 is not just ancient history &mdash; it is the anatomy of every human heart that has refused God&rsquo;s warning and let sin master it, and the beginning of the long story of the God who pursues even the exile with mercy.
          </p>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Key New Testament Connections</h3>
          <ul style={{ color: MUTED, lineHeight: 2, margin: 0, paddingLeft: "1.5rem" }}>
            <li><strong style={{ color: TEXT }}>Hebrews 11:4</strong> &mdash; Abel offered &ldquo;by faith&rdquo; a more acceptable sacrifice than Cain; through his faith he still speaks even though he is dead.</li>
            <li><strong style={{ color: TEXT }}>1 John 3:11&ndash;12</strong> &mdash; We should love one another and not be like Cain, who was of the evil one and murdered his brother because Cain&rsquo;s own deeds were evil and his brother&rsquo;s were righteous.</li>
            <li><strong style={{ color: TEXT }}>Jude 11</strong> &mdash; &ldquo;Woe to them! For they walked in the way of Cain&rdquo; &mdash; the archetype of faithless, violent religion.</li>
            <li><strong style={{ color: TEXT }}>Hebrews 12:24</strong> &mdash; Jesus&rsquo; sprinkled blood speaks a better word than the blood of Abel, whose cry was for justice; Jesus&rsquo; cry is for mercy.</li>
            <li><strong style={{ color: TEXT }}>Matthew 18:22</strong> &mdash; Jesus&rsquo; command to forgive &ldquo;seventy-seven times&rdquo; (or seventy times seven) deliberately reverses Lamech&rsquo;s boast of seventy-sevenfold vengeance.</li>
          </ul>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Study Questions for Reflection</h3>
          <ol style={{ color: MUTED, lineHeight: 2, margin: 0, paddingLeft: "1.5rem" }}>
            <li>What does it reveal about true worship that God had regard for Abel and his offering but not Cain and his? What might Cain have done differently, and what might that mean for our own approach to God?</li>
            <li>God warns Cain that &ldquo;sin is crouching at the door&rdquo; and that he must rule over it. What does this image tell us about the nature of temptation and the possibility of obedience? How does this tension between crouching sin and commanded mastery relate to Paul&rsquo;s teaching in Romans 6?</li>
            <li>The mark of Cain is a mark of protection, not condemnation. What does this tell us about how God holds together justice and mercy? How does it foreshadow the gospel?</li>
            <li>Cain&rsquo;s line produces music, agriculture, and metallurgy &mdash; the foundations of civilization. What does it mean that cultural achievement can emerge from a line that begins in murder? How does this shape a Christian theology of culture and common grace?</li>
            <li>The chapter ends with people calling on the name of the Lord. After everything that has happened in this chapter, why is this small verse so significant? What does it mean for us that worship emerged even from this context of exile and violence?</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
