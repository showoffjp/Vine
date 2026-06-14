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
  "God Rejects Saul",
  "The Sons of Jesse",
  "Man Looks on the Heart",
  "David Anointed",
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
    heading: "Overview of 1 Samuel 16",
    reference: "1 Samuel 16:1&ndash;23",
    paragraphs: [
      "First Samuel 16 is one of the most theologically rich chapters in the historical books of the Old Testament &mdash; a chapter whose events are momentous, whose single stated principle has shaped the whole of biblical anthropology, and whose central character will become the most celebrated figure in Israel&rsquo;s entire history. The chapter narrates the anointing of David, the youngest son of Jesse of Bethlehem, as the king whom God has chosen to replace Saul. But it is far more than a transition of power; it is a sustained meditation on the nature of divine choice, the inadequacy of human judgment, and the sovereign freedom of the God who looks on the heart.",
      "The chapter opens with the Lord confronting Samuel&rsquo;s grief: Samuel is mourning over Saul, the king whom God has rejected. The Lord&rsquo;s question is gently challenging: &ldquo;How long will you grieve over Saul, since I have rejected him from being king over Israel?&rdquo; (16:1). Samuel&rsquo;s grief is understandable &mdash; he anointed Saul, he loved him, and the rejection of Saul is in some sense the failure of a project that Samuel had poured himself into. But God will not allow grief to become paralysis. The rejected king is not the last word. God has already prepared his next move, and it involves a journey to Bethlehem and a man named Jesse.",
      "The anointing scene at the house of Jesse is organized around a deliberate dramatic structure. Seven sons of Jesse pass before Samuel, each one impressive, each one apparently a plausible candidate for the kingship. Samuel sees the eldest, Eliab, and is immediately convinced: surely this is the Lord&rsquo;s anointed. The Lord&rsquo;s response is the theological heart of the chapter and one of the most important sentences in the entire Old Testament: &ldquo;Do not look on his appearance or on the height of his stature, because I have rejected him. For the LORD sees not as man sees: man looks on the outward appearance, but the LORD looks on the heart&rdquo; (16:7).",
      "The repetition of the pattern &mdash; son presented, Samuel presumes, God withholds &mdash; seven times creates a mounting tension that is only resolved when the question is finally asked: are all the sons here? Jesse confesses that the youngest is absent, tending the sheep. David is summoned, described in terms that acknowledge his physical attractiveness but are immediately subordinated to the divine choice, and anointed. The Spirit of the LORD rushes upon David from that day forward. The chapter ends with David brought to play the lyre for the tormented Saul &mdash; a quietly ironic coda in which the newly anointed king becomes the servant of the man whose throne he will one day occupy.",
      "The theological stakes of 1 Samuel 16 are high. The chapter is not merely an account of how Israel got its second king; it is a revelation of the kind of kingdom God is building. The kingdom will not be built on the impressive, the established, or the socially visible. It will be built on the one God has chosen according to the criterion that only God can apply &mdash; the condition of the heart. David&rsquo;s later greatness will vindicate this choice, but his later failures will also complicate it: the man after God&rsquo;s own heart will prove to have a heart that is capable of terrible sin. The anointing of David is the beginning of a story that will require the coming of David&rsquo;s greater Son to reach its full resolution.",
      "For the Christian reader, 1 Samuel 16 is a chapter dense with typological resonance. David, the overlooked youngest son sent from the fields to be anointed king, foreshadows Jesus Christ, who came not in the form that human wisdom would have chosen &mdash; not as a conquering king or a Temple scholar, but as a carpenter from Galilee &mdash; and who was anointed by the Spirit at his baptism as the true and final King of Israel. The principle that the LORD looks on the heart finds its ultimate application in the one who not only is seen by God as he is but who himself sees every heart, and who came to transform the hearts that he sees.",
    ],
  },
  {
    id: "God Rejects Saul",
    heading: "God Rejects Saul",
    reference: "1 Samuel 15:26&ndash;16:1",
    paragraphs: [
      "To understand the anointing of David in 1 Samuel 16, one must understand the rejection of Saul that precedes it. The story of Saul&rsquo;s rejection is told in 1 Samuel 15, where Saul is commanded to utterly destroy the Amalekites and everything they possess. Instead, Saul spares King Agag and the best of the livestock, rationalized with the claim that the animals were saved for sacrifice to God. Samuel&rsquo;s response cuts to the theological heart of the matter: &ldquo;Has the Lord as great delight in burnt offerings and sacrifices, as in obeying the voice of the Lord? Behold, to obey is better than sacrifice, and to listen than the fat of rams&rdquo; (15:22).",
      "Saul&rsquo;s sin was not primarily strategic failure or military disobedience; it was a particular kind of spiritual failure. He had tried to serve God on his own terms rather than God&rsquo;s terms. He had substituted a religious gesture &mdash; sacrifice &mdash; for the actual requirement of God, which was obedience. This is precisely the pattern that the prophets later critique in Israel as a whole. And the result was the same: &ldquo;Because you have rejected the word of the Lord, he has also rejected you from being king&rdquo; (15:23). The rejection is symmetrical and just: the one who rejected the word of the Lord is himself rejected by the Lord.",
      "The personal pathos of this moment is rendered with unusual delicacy. Samuel mourns for Saul, and the text tells us that &ldquo;the Lord regretted that he had made Saul king over Israel&rdquo; (15:35). These words about divine regret have exercised biblical interpreters for centuries: if God knows the future, how can he regret a decision? The text does not attempt to resolve this philosophically; it simply reports the relational reality of God&rsquo;s genuine response to Saul&rsquo;s genuine failure. The covenant was real, the obedience required was real, the disobedience was real, and the resulting grief &mdash; both Samuel&rsquo;s and God&rsquo;s &mdash; was real.",
      "When 1 Samuel 16 opens, Samuel is still grieving. The Lord&rsquo;s command &mdash; &ldquo;How long will you grieve over Saul, since I have rejected him from being king over Israel? Fill your horn with oil, and go&rdquo; (16:1) &mdash; is not a dismissal of Samuel&rsquo;s grief but a call to move through it into obedience. The rejected king is still alive; Saul will not die until much later in the story. This creates the political danger that makes Samuel hesitate: if he anoints a new king while Saul still reigns, Saul could interpret it as treason and kill him. The Lord&rsquo;s instruction to go ostensibly to offer a sacrifice at Bethlehem provides Samuel with a legitimate cover story.",
      "The background of Saul&rsquo;s rejection throws the entire David narrative into sharp relief. David is being chosen to replace a man who failed not because he was incompetent or cowardly &mdash; Saul was in many ways an impressive and effective leader &mdash; but because his heart was not fully submitted to God. The search for a replacement is therefore a search for something that cannot be seen from the outside: a heart that is right before God. This is why the whole dramatic structure of the anointing scene is organized around the failure of outward appearance as a criterion of divine selection.",
      "There is also a note of sovereign grace in the rejection of Saul and the anointing of David. Neither man deserved his position; neither was chosen on the basis of personal righteousness earned in advance. David was chosen before he had demonstrated anything &mdash; he was tending sheep when Samuel arrived, absent from the assembly of candidates. The grace of God selects where human wisdom would not look, and sets aside where human wisdom would persist. The rejection of Saul and the anointing of David together declare that God&rsquo;s kingdom is not built on the foundations that human politics would choose.",
    ],
  },
  {
    id: "The Sons of Jesse",
    heading: "The Sons of Jesse",
    reference: "1 Samuel 16:6&ndash;11",
    paragraphs: [
      "The scene at the house of Jesse is one of the most carefully crafted dramatic sequences in the historical books. Samuel arrives in Bethlehem, consecrates Jesse and his sons, and then watches as the sons of Jesse parade before him. The deliberate repetition of the pattern &mdash; son presented, Samuel presumes, God withholds &mdash; across seven sons before the right one is even summoned creates a narrative suspense that is entirely in the service of the chapter&rsquo;s theological point. God is not going to be found at the head of a queue. The chosen one is the one who was not even considered worth including in the lineup.",
      "Eliab comes first. The text does not tell us what he looked like beyond the fact that Samuel was immediately struck by him &mdash; &ldquo;Surely the Lord&rsquo;s anointed is before him&rdquo; (16:6). The name Eliab means &ldquo;my God is father,&rdquo; a name with good theological resonance. He was apparently tall and impressive, since the subsequent divine word specifically mentions &ldquo;the height of his stature.&rdquo; In every visible respect, Eliab appeared to be exactly the kind of man who should be king. He was probably the sort of man who walked into a room and commanded attention without saying a word.",
      "And God says no. The word of the Lord to Samuel is immediate and unambiguous: &ldquo;Do not look on his appearance or on the height of his stature, because I have rejected him.&rdquo; The word &ldquo;rejected&rdquo; (&lsquo;ma&rsquo;as&rsquo;) is the same word used of Saul&rsquo;s rejection in 15:23 &mdash; a deliberate verbal echo that underscores the contrast. Eliab looked like the kind of man God would choose, and God rejected him, just as he rejected Saul, who also looked like the kind of man God would choose (1 Samuel 9:2 describes Saul as &ldquo;a handsome young man&rdquo; and &ldquo;taller than any of the people&rdquo;). The pattern of the impressive man rejected is a pattern.",
      "Six more sons pass &mdash; Abinadab, Shammah, and four others who are not even named. The text does not describe them individually; it simply reports that each one passed and that each one was met with the same divine word: &ldquo;Neither has the Lord chosen this one&rdquo; (16:8, 9, 10). The cumulative effect is one of mounting puzzlement. Samuel has come to Bethlehem to anoint a king. He has consecrated Jesse and his sons. He has watched seven men pass before him without a single one being confirmed. By the seventh, the reader shares Samuel&rsquo;s mounting confusion.",
      "Then comes the question that resolves the narrative: &ldquo;Are all your sons here?&rdquo; (16:11). Jesse&rsquo;s answer reveals the full social texture of the situation: &ldquo;There remains yet the youngest, but behold, he is tending the sheep.&rdquo; The youngest &mdash; in Hebrew, &lsquo;haqqatan&rsquo;, the small one, the insignificant one &mdash; was not even invited to the assembly. He was out doing his job, alone with the sheep. He was so far outside the category of &ldquo;plausible candidate for king&rdquo; that his own father did not think to include him when a prophet arrived to look for a king among his sons.",
      "Samuel&rsquo;s response is definitive: &ldquo;Send and get him, for we will not sit down till he comes here&rdquo; (16:11). The prophetic process is complete only when the one God has chosen is present. No substitute will do; no more impressive candidate can take his place. The meal waits, the assembly waits, Samuel waits &mdash; because God has already made his choice, and his choice is the youngest son of Jesse who is tending sheep in a field somewhere outside Bethlehem.",
    ],
  },
  {
    id: "Man Looks on the Heart",
    heading: "Man Looks on the Heart",
    reference: "1 Samuel 16:7",
    paragraphs: [
      "The verse at the center of 1 Samuel 16 is one of the most important sentences in the entire Bible: &ldquo;For the LORD sees not as man sees: man looks on the outward appearance, but the LORD looks on the heart&rdquo; (16:7). This sentence is the theological key that unlocks the whole narrative. It explains why Eliab was rejected. It explains why David &mdash; small, youngest, absent &mdash; was chosen. It explains the pattern of divine selection throughout the Old Testament. And it establishes a principle about the knowledge of God that has profound implications for every dimension of theology and ethics.",
      "The contrast between &ldquo;outward appearance&rdquo; and &ldquo;heart&rdquo; is a contrast between what is visible and what is real. In the ancient Near Eastern world, as in most human cultures, visible qualities &mdash; height, strength, age, appearance &mdash; were natural proxies for worth and capacity. They were not arbitrary criteria; they were the best available indicators that human beings had for qualities that mattered in a leader: physical courage, the capacity to inspire loyalty, the ability to command in battle. Samuel was using reasonable criteria, the criteria that any experienced judge of human character would use.",
      "The divine word does not criticize Samuel for looking at Eliab and being impressed &mdash; it would have been strange not to be. What it says is that Samuel&rsquo;s way of seeing is structurally different from God&rsquo;s way of seeing. Man is limited to the surface; God penetrates to the center. Man sees what is there; God sees what is true. The heart &mdash; in Hebrew, &lsquo;levav&rsquo; or &lsquo;lev&rsquo; &mdash; is not merely the emotional center in the biblical conception; it is the seat of the whole inner life: the will, the desires, the intentions, the dispositions, the entire orientation of a person toward God and toward others.",
      "The principle that God looks on the heart is both comforting and demanding. It is comforting because it means that no one is disqualified from God&rsquo;s regard by the accidents of birth, appearance, social status, or human assessment. David, the youngest and least significant of Jesse&rsquo;s sons, was chosen precisely because God saw something in his heart that outward indicators could not have predicted. The whole biblical narrative of God choosing the unexpected &mdash; the younger over the elder (Isaac over Ishmael, Jacob over Esau, Joseph over his brothers, David over his brothers) &mdash; is sustained by this principle.",
      "It is demanding because it means that the human tendency to manage one&rsquo;s external presentation as a substitute for genuine inner transformation is exposed as futile before God. The same God who rejected Saul for offering sacrifice instead of obeying will not be impressed by any external religious performance that is not backed by a heart genuinely oriented toward him. The heart that God looks on is not an idealized or sinless heart &mdash; David&rsquo;s subsequent history makes it abundantly clear that the man after God&rsquo;s own heart is capable of terrible sin. But it is a heart that is fundamentally, honestly, genuinely seeking God, a heart that when it falls is capable of genuine repentance rather than self-justification.",
      "The New Testament extends and deepens this principle in the person of Jesus Christ. Jesus himself is the one who sees the heart with perfect clarity &mdash; &ldquo;he knew all people and needed no one to bear witness about man, for he himself knew what was in man&rdquo; (John 2:24&ndash;25). His ministry was persistently oriented toward the unseen: the hidden motive behind the public deed, the secret sin behind the outward respectability, the faith that no one else had noticed in the woman who touched the hem of his garment. The God who looked on David&rsquo;s heart has, in Christ, become the man who looks on every heart, and who came not to approve hearts as they are but to transform them into something worthy of the kingdom he is building.",
    ],
  },
  {
    id: "David Anointed",
    heading: "David Anointed King",
    reference: "1 Samuel 16:12&ndash;23",
    paragraphs: [
      "When David finally arrives from the fields, the text pauses to describe him &mdash; and the description is striking in its mixture of the physical and the divine. David is &ldquo;ruddy and had beautiful eyes and was handsome&rdquo; (16:12). This detail is interesting: the narrative does not ignore David&rsquo;s appearance, but it is introduced only after the principle of 16:7 has already been established, and it is immediately followed by the divine command rather than serving as the reason for it. David is attractive, but he is not chosen because he is attractive. The appearance is noted; the choice is not based on it.",
      "The divine instruction is unambiguous: &ldquo;Arise, anoint him, for this is he&rdquo; (16:12). The Hebrew is emphatic &mdash; literally &ldquo;this one, this one.&rdquo; After seven rejections, after the mounting suspense of an empty lineup, after the revelation that the one being sought was not even considered worth summoning &mdash; here is the divine identification, certain and final. This is the one. Not the tall eldest son, not any of the six who followed him, but this one: the youngest, the sheep-tender, the one whose own father had not thought to include.",
      "Samuel anoints David in the midst of his brothers &mdash; a significant detail. The brothers who had passed before Samuel and been rejected are now witnesses to the anointing of the brother who was not even present for the initial presentation. There is no recorded reaction from the brothers in this chapter, though the story of David&rsquo;s future interactions with his brother Eliab (1 Samuel 17:28&ndash;30) will suggest that the memory of this day generated some bitterness. The anointing is public, witnessed, and irreversible.",
      "Then comes the verse that is perhaps the most important theological statement in the chapter after 16:7: &ldquo;And the Spirit of the Lord rushed upon David from that day forward&rdquo; (16:13). The language is strong &mdash; the Spirit does not merely come upon David or rest on him; it &ldquo;rushes&rdquo; (&lsquo;tsalach&rsquo;) upon him. This is the same word used of the Spirit coming upon Saul (10:6, 10) and upon Samson (14:6, 19; 15:14). But there is a crucial difference: for Saul and for Samson, the Spirit came and departed; for David, the Spirit rushes upon him &ldquo;from that day forward.&rdquo; The anointing marks the beginning of a sustained, abiding empowerment that will characterize the whole of David&rsquo;s reign.",
      "The contrast with Saul is made explicit in the very next verse: &ldquo;Now the Spirit of the Lord departed from Saul, and a harmful spirit from the Lord tormented him&rdquo; (16:14). The chapter stages the transition of divine empowerment with stark clarity. The Spirit that departs from Saul arrives in fullness upon David. The one who had the Spirit of God and lost it by disobedience is now tormented by a spirit of distress; the one on whom the Spirit has newly come will play the lyre to soothe the tormented king. The juxtaposition is both historically accurate and theologically intentional: the kingdom is passing from the one who disobeyed to the one whom God has chosen.",
      "The chapter closes with a remarkable scene: David is brought to Saul&rsquo;s court, not as the king-in-waiting but as a lyre player, a skilled musician who can calm the king&rsquo;s troubled spirit. Saul &ldquo;loved him greatly&rdquo; (16:21) and made him his armor-bearer. The anointed future king becomes the servant of the reigning king. This is not an accident; it is a pattern that the New Testament will recognize as the shape of God&rsquo;s kingdom: the greatest is the servant of all. David&rsquo;s years of service under Saul &mdash; years of patience, of playing the lyre while the Spirit of God was on him and the Spirit of God had left the king he served &mdash; are part of the preparation of the man after God&rsquo;s own heart.",
    ],
  },
  {
    id: "Application",
    heading: "Applying 1 Samuel 16 Today",
    reference: "1 Samuel 16 &mdash; For the Life of the Church",
    paragraphs: [
      "First Samuel 16 confronts the contemporary church with a set of questions that cut against the grain of most human institutions, including many Christian ones. The principle that God looks on the heart while man looks on the outward appearance does not simply describe a difference between divine and human perception; it summons the community of faith to evaluate and to choose according to criteria that are genuinely different from those that govern the surrounding culture. This is harder than it sounds, because the criteria of outward appearance are so deeply embedded in human social instinct that they operate almost invisibly.",
      "In the church, the equivalents of Eliab&rsquo;s height and impressive appearance are not difficult to identify: eloquence, educational credentials, social charisma, physical attractiveness, family connections, cultural fluency, leadership experience measured in conventional terms. None of these qualities is bad in itself; Samuel was not wrong to notice Eliab, and the church is not wrong to value genuine gifts. The problem arises when these external markers become the primary criteria by which the community discerns whom God has chosen and equipped for various forms of service &mdash; when the person who looks the part is assumed to have the part, and the sheep-tender in the field is never summoned to the assembly.",
      "The truth that God looks on the heart has deeply practical implications for how communities of faith form and make decisions. It means that the processes of discernment &mdash; calling, ordination, appointment, selection for leadership &mdash; must include genuine attention to what is invisible: the quality of a person&rsquo;s prayer life, the shape of their character in private, the testimony of those closest to them about who they are when no one is watching, the evidence of genuine transformation by the Spirit of God rather than merely conformity to the expectations of a religious subculture. These things are harder to measure than a r&eacute;sum&eacute;, but they are what God is looking for.",
      "The anointing of David and the subsequent departure of the Spirit from Saul raise the question of what it means to be a community on which the Spirit of God is present and active. The New Testament teaches that every believer is indwelt by the Holy Spirit, and that the corporate community of believers is the temple of the Holy Spirit (1 Corinthians 3:16&ndash;17). But the narrative of Saul and David also suggests that the presence of the Spirit is not unconditional and automatic; it is related to faithfulness and to the genuine seeking of God that constitutes the &ldquo;heart&rdquo; that God looks for. Communities, like individuals, can grieve and quench the Spirit.",
      "David&rsquo;s years as a servant in Saul&rsquo;s court &mdash; anointed but not yet enthroned, gifted by the Spirit but not yet in the place of power &mdash; are a model of a kind of faithfulness that the contemporary church often undervalues. The spiritually impatient culture of immediacy prizes rapid advancement, visible fruitfulness, and early recognition. David&rsquo;s example suggests that the preparation for the role God has appointed may be long, indirect, and involve serving the very institution or person that represents the old order passing away. The years of playing the lyre for Saul were not wasted years; they were the years in which the man after God&rsquo;s own heart was being formed.",
      "Ultimately, 1 Samuel 16 directs the church&rsquo;s attention toward Jesus Christ as the fulfillment of everything David foreshadowed. Jesus is the one who was not recognized or chosen by the institutions of his own day &mdash; &ldquo;he came to his own, and his own people did not receive him&rdquo; (John 1:11). He was not the kind of messiah that human expectation was looking for: not a military conqueror, not a Temple establishment figure, not a man whose appearance commended him (Isaiah 53:2&ndash;3). But the Father saw the heart of the Son and said, &ldquo;This is my beloved Son, with whom I am well pleased&rdquo; (Matthew 3:17). In Christ, the principle of 1 Samuel 16:7 reaches its ultimate expression: the one whom all human systems of assessment would have overlooked is the one whom God identifies as the anointed King, upon whom the Spirit rests without measure.",
    ],
  },
];

const videoItems = [
  { videoId: "YvoWDXNDJgs", title: "BibleProject - Overview of 1 Samuel" },
  { videoId: "6FHAoBRaKBQ", title: "1 Samuel 16 - David Anointed King - Sermon and Study" },
  { videoId: "9Lv9VfgVyKQ", title: "Man Looks on the Outward Appearance - God Looks on the Heart" },
  { videoId: "tEBc2gSSW04", title: "David - A Man After God's Own Heart - 1 Samuel 16 Explained" },
];

export default function Samuel16GuidePage() {
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
            1 Samuel 16 &mdash; David Anointed King
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            God sends Samuel to Bethlehem to anoint a new king from the sons of Jesse. Seven impressive sons pass before him; God rejects them all. The youngest &mdash; David, tending the sheep &mdash; is summoned and anointed. &ldquo;Man looks on the outward appearance, but the LORD looks on the heart.&rdquo; The Spirit of the LORD rushes upon David from that day forward.
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
              Deepen your study of 1 Samuel 16 through these video teachings on the anointing of David, the principle that God looks on the heart, and the beginning of David&rsquo;s remarkable story.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The LORD Looks on the Heart</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Samuel 16 declares that God&rsquo;s way of choosing is not man&rsquo;s way. The impressive eldest son is rejected; the youngest, absent, forgotten son &mdash; tending the sheep in a field &mdash; is the one God has chosen. When Samuel anoints David, the Spirit of the LORD rushes upon him from that day forward. In David&rsquo;s greater Son, Jesus Christ, the principle reaches its fullest expression: the one the world overlooked is the one the Father declares &ldquo;my beloved Son.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
