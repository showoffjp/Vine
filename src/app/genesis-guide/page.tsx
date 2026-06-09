"use client";

import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "creation", label: "Creation" },
  { id: "fall", label: "The Fall" },
  { id: "flood", label: "Flood & Tower" },
  { id: "abraham", label: "Abraham" },
  { id: "jacob", label: "Isaac & Jacob" },
  { id: "joseph", label: "Joseph" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const CREATION_ITEMS = [
  {
    id: "cr1",
    title: "Genesis 1 — The Seven-Day Framework",
    content: "Genesis 1 is a highly structured, literary text. The seven days form two parallel panels: Day 1 (light/darkness) corresponds to Day 4 (luminaries); Day 2 (sky/water) to Day 5 (birds/fish); Day 3 (land/vegetation) to Day 6 (animals/humans); Day 7 (Sabbath rest). The creation is a cosmic temple — God builds the dwelling place and then fills it. The genre debate: is Genesis 1 literal 24-hour days, a literary framework, analogical days, or a temple inauguration text? Each view has serious scholars. All agree: the theological point is God\'s sovereign creative power and the goodness of material reality.",
  },
  {
    id: "cr2",
    title: "Image of God (Imago Dei)",
    content: "\'So God created mankind in his own image, in the image of God he created them; male and female he created them\' (1:27). Three main interpretations: (1) the substantive view — image refers to rational, moral, or spiritual capacity; (2) the functional view — image refers to the royal role of exercising dominion (as the king\'s image in the ancient Near East represented the king\'s presence and authority); (3) the relational view — image refers to the capacity for relationship with God. Most contemporary scholars combine: humans are royal representatives of God, created to rule as his vicegerents, in relationship with him. This grounds human dignity absolutely — every person bears the divine image.",
  },
  {
    id: "cr3",
    title: "Genesis 2 — The Garden and the Covenant",
    content: "Genesis 2 zooms in on the sixth day, focusing on the creation of the man (from the dust of the earth — adamah) and the woman (from the man\'s side — not from his head to lord over him, not from his foot to be walked on, but from his side to be beside him). The garden of Eden is a sanctuary — God \'walked\' there (the same verb used of God\'s presence in the tabernacle). The tree of life and the tree of the knowledge of good and evil represent the choice: trust God\'s rule over what is good, or seize that knowledge for yourselves. Genesis 2 ends with the institution of marriage: \'That is why a man leaves his father and mother and is united to his wife, and they become one flesh\' (2:24).",
  },
  {
    id: "cr4",
    title: "Creation and Science",
    content: "Four main Christian views on how Genesis 1–2 relates to modern science: Young Earth Creationism (literal six 24-hour days, ~6,000 years ago, universal flood); Old Earth Creationism (days are long epochs, earth is billions of years old); Evolutionary Creationism (BioLogos — accepts mainstream cosmology and biology, reads Genesis 1–2 as theological rather than scientific narrative); Intelligent Design (science detects design but does not specify the age of the earth). The church has held different positions throughout history. The non-negotiables: God is the creator, creation is good, humans are uniquely made in God\'s image.",
  },
];

const FALL_ITEMS = [
  {
    title: "Genesis 3 — The Anatomy of Temptation",
    color: GOLD,
    body: "The serpent (identified in Rev 12:9 with Satan) begins with a question: \'Did God really say...?\' — casting doubt on God\'s word. Then contradicts it: \'You will not certainly die.\' Then offers an alternative narrative: \'your eyes will be opened and you will be like God, knowing good and evil.\' The temptation is to determine good and evil independently of God — to be autonomous moral agents. Eve sees the fruit is \'good for food, pleasing to the eye, and desirable for gaining wisdom\' (3:6) — corresponding to 1 John 2:16\'s triad: lust of the flesh, lust of the eyes, pride of life. The woman takes and eats; the man (standing with her) does the same.",
  },
  {
    title: "The Consequences of the Fall",
    color: GREEN,
    body: "God\'s curse follows the chain of responsibility: the serpent (you will crawl on your belly; I will put enmity between you and the woman\'s offspring); the woman (pain in childbearing; desire for your husband, but he will rule over you — a disruption of equality, not its institution); the man (the ground is cursed; by the sweat of your brow you will eat; you are dust and to dust you will return). The Fall introduces death, suffering, relational brokenness, and alienation from God. Romans 5:12: \'sin entered the world through one man, and death through sin, and in this way death came to all people.\' Total depravity flows from Genesis 3.",
  },
  {
    title: "The Proto-Evangelion (Gen 3:15)",
    color: TEAL,
    body: "In the curse on the serpent, God speaks the first promise of redemption: \'I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel.\' This is the proto-evangelion — the first gospel. The seed of the woman will crush the serpent\'s head (a fatal blow) while the serpent strikes his heel (non-fatal). The rest of the Bible is the story of which child of the woman will fulfill this promise. The answer: Jesus Christ, who at the cross crushed the head of Satan (Col 2:15; Heb 2:14) while dying — heel-strike — in the process.",
  },
  {
    title: "Genesis 4–11 — The Spread of Sin",
    color: PURPLE,
    body: "Sin spreads immediately: Cain murders Abel (Gen 4). Lamech boasts of vengeance seventy-sevenfold (4:24) — which Jesus reverses with forgiveness seventy-seven times (Matt 18:22). The genealogy of Genesis 5 repeats the refrain \'and then he died\' — death now defines human existence. By Genesis 6, human wickedness is so great that \'every inclination of the thoughts of the human heart was only evil all the time\' (6:5) — the deepest OT statement of total depravity. The narrative of Gen 1–11 shows sin\'s exponential growth: disobedience → murder → pride → universal corruption.",
  },
];

const FLOOD_ITEMS = [
  {
    title: "The Flood (Gen 6–9) — Judgment and Grace",
    color: GOLD,
    body: "God sees universal wickedness and grieves (6:6 — the only place in Genesis where God is described as grieving). He sends the flood as judgment — an uncreation: the waters of chaos return over the earth. Noah finds grace (6:8 — the first occurrence of \'grace\' in the Bible). Through the ark, the remnant is preserved. After the flood, God makes a covenant with Noah and all creation — the Noahic covenant — promising never again to destroy the earth by flood. The rainbow is its sign. This is an unconditional, universal covenant: God commits himself to the preservation of creation regardless of human behavior.",
  },
  {
    title: "The Tower of Babel (Gen 11:1–9)",
    color: GREEN,
    body: "All humanity speaks one language and builds a city with a tower reaching to the heavens: \'Let us make a name for ourselves\' (11:4). This is the same temptation as Eden: human self-sufficiency, independence from God, building upward to divinity. God \'comes down\' (ironic: the tower wasn\'t so tall) and confuses their language, scattering them. Babel explains the diversity of languages and nations — but also anticipates Pentecost (Acts 2), where the Spirit reverses the confusion of languages. The calling of Abraham (Gen 12) is the answer to Babel: God will make Abraham\'s name great — not by human pride but by divine promise.",
  },
];

const ABRAHAM_ITEMS = [
  {
    id: "ab1",
    title: "The Call of Abraham (Gen 12:1–3)",
    content: "God calls Abram out of Ur (Mesopotamia) with no explanation: \'Go from your country, your people and your father\'s household to the land I will show you.\' The promises: a great nation, great name, blessing, land. \'All peoples on earth will be blessed through you\' (12:3) — the universal scope of the Abrahamic covenant is established immediately. Every subsequent blessing in the Bible flows through this promise. Paul\'s argument in Galatians 3: the gospel was \'announced in advance to Abraham\' — the blessing of all nations through Abraham\'s seed is the gospel of justification by faith reaching the Gentiles.",
  },
  {
    id: "ab2",
    title: "The Covenant with Abraham (Gen 15; 17)",
    content: "Genesis 15: God establishes the covenant by the ancient ceremony of cutting animals in half and passing between them — the one who passes takes the oath. Remarkably, God alone passes through (as a smoking firepot and blazing torch) while Abraham sleeps. This is an unconditional divine commitment: \'To your descendants I give this land\' (15:18). Genesis 17: the sign of circumcision is given — the covenant is sealed in Abraham\'s body and in every male in his household. God changes his name from Abram (\'exalted father\') to Abraham (\'father of many nations\'). The covenant is everlasting.",
  },
  {
    id: "ab3",
    title: "The Testing of Abraham (Gen 22)",
    content: "\'Take your son, your only son, whom you love — Isaac — and go to the region of Moriah. Sacrifice him there.\' The greatest test in Genesis. Abraham obeys — and Hebrews 11:19 says he reasoned that God could raise the dead. On Mount Moriah, as the knife is raised, the angel stops him: \'Now I know that you fear God.\' God provides a ram. \'The Lord will provide\' (YHWH-Jireh). This is one of the most profound OT Christological typologies: a father offering his beloved only son on a mountain — but God provides a substitute. The ram caught by its head in the thicket = the Lamb of God who bears our sins.",
  },
  {
    id: "ab4",
    title: "Abraham as Father of Faith (Rom 4; Gal 3; Heb 11)",
    content: "Paul\'s entire argument for justification by faith in Romans 4 rests on Abraham. Abraham was declared righteous (Gen 15:6: \'Abram believed God, and it was credited to him as righteousness\') before circumcision — therefore it cannot be circumcision that makes one righteous. He was 100 years old, and Sarah\'s womb was dead — yet he \'did not waver through unbelief\' but \'was fully persuaded that God had power to do what he had promised\' (Rom 4:20–21). Abraham believed in a God who gives life to the dead — the same faith that justifies us when we believe in the God who raised Jesus from the dead.",
  },
];

const JOSEPH_ITEMS = [
  {
    title: "Joseph and His Brothers (Gen 37–45)",
    color: GOLD,
    body: "Joseph is his father\'s favored son — given a \'robe of many colors\' (or \'richly ornamented robe\'). His brothers\' jealousy boils over: they sell him to slave traders heading to Egypt. Joseph rises in Potiphar\'s household but is falsely accused by Potiphar\'s wife and imprisoned. In prison, he interprets dreams for the cupbearer and baker. Two years later, Pharaoh dreams; the cupbearer remembers Joseph. Joseph interprets: seven years of plenty, seven years of famine. Pharaoh appoints him second-in-command. The famine drives his brothers to Egypt — and Joseph is in charge of grain distribution.",
  },
  {
    title: "The Revelation and Reconciliation",
    color: GREEN,
    body: "Three times Joseph\'s brothers come to Egypt without knowing who he is (he recognizes them but speaks through interpreters). He tests them: plants his silver cup in Benjamin\'s sack, threatens to keep him as a slave. Judah offers himself in Benjamin\'s place (44:33) — the same Judah who suggested selling Joseph (37:26). The transformation is complete. Joseph can no longer contain himself: \'I am Joseph!\' Tears, embraces, restoration. He brings the whole family to Egypt. The Joseph story is one of the greatest reconciliation narratives in world literature.",
  },
  {
    title: "Providence: \'You Intended Evil, God Intended Good\'",
    color: TEAL,
    body: "The theological climax of the Joseph story is 50:20: \'You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.\' Joseph does not minimize his brothers\' sin — it was real evil. But God worked through the evil to accomplish a purpose beyond anyone\'s design. This is the OT\'s clearest statement of divine providence: God is not the author of evil, but he is the sovereign Lord who overrules it. The parallel to the cross is explicit in the NT: the greatest evil in history (the murder of the Son of God) was also the greatest act of God\'s saving love (Acts 2:23; 4:27–28).",
  },
  {
    title: "Joseph as a Type of Christ",
    color: PURPLE,
    body: "Joseph is one of the richest OT types of Christ: beloved son of his father; betrayed by his brothers for silver; falsely condemned though innocent; descends into a pit (death); rises to highest authority; saves his people through suffering; forgives those who betrayed him. This is not allegory imposed on the text — it is the intentional typological pattern that Luke 24:27 points toward when Jesus \'explained to them what was said in all the Scriptures concerning himself.\' The Joseph narrative shows that the cross was not Plan B — it was the ancient pattern of God\'s redemptive work.",
  },
];

const VIDEOS = [
  { videoId: "GQI72THyO5I", title: "The Book of Genesis — BibleProject Overview" },
  { videoId: "78xasD_yt48", title: "Genesis Part 1 (Ch 1–11) — BibleProject" },
  { videoId: "F4isSyennFo", title: "Genesis Part 2 (Ch 12–50) — BibleProject" },
  { videoId: "eLV5aBVBkIQ", title: "The Image of God in Genesis 1" },
  { videoId: "UBc8QFoFBZE", title: "The Fall in Genesis 3 — Deep Dive" },
  { videoId: "N0u1_AJeqaY", title: "The Covenant with Abraham — Genesis 15 & 17" },
];

export default function GenesisGuide() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_gen_tab", "overview");
  const [openCreation, setOpenCreation] = useLocalStorage("vine_gen_creat", "");
  const [openAbr, setOpenAbr] = useLocalStorage("vine_gen_abr", "");
  const [journal, setJournal] = useLocalStorage("vine_gen_journal", "");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: GOLD, fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Bible Study</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>The Book of Genesis</h1>
        <p style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }}>
          Genesis — &#8220;In the Beginning&#8221; — is the foundation of the entire biblical story. It answers the deepest questions: Who is God? Who are we? What went wrong? What is God doing about it? From creation and the fall through the patriarchs and Joseph, Genesis establishes the patterns of sin, grace, covenant, and redemption that run through all of Scripture.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#fff" : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Introduction to Genesis</h2>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                Genesis is the first book of the Torah (Pentateuch) — traditionally attributed to Moses, though the text itself doesn&apos;t name its author. It divides naturally into two main sections: primeval history (Genesis 1–11, covering creation through Babel) and patriarchal history (Genesis 12–50, covering Abraham through Joseph). The two sections are linked by Genesis 12 — the call of Abraham is God&apos;s answer to the problem of Genesis 3–11.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                The book is structured by eleven uses of the Hebrew word <em>toledot</em> (&#8220;these are the generations of / this is the account of&#8221;): &#8220;This is the account of the heavens and the earth&#8221; (2:4), &#8220;This is the written account of Adam&apos;s family line&#8221; (5:1), etc. Each section advances the story of God&apos;s purposes through a family line — ultimately the line that will produce the promised Seed of the woman (3:15).
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12 }}>The Big Picture of Genesis</h3>
              {[
                "Genesis 1–2: Creation — the good world God made",
                "Genesis 3: The Fall — what went wrong",
                "Genesis 4–11: The spread of sin and God\'s judgment",
                "Genesis 12: The call of Abraham — God\'s plan of rescue begins",
                "Genesis 12–25: Abraham — covenant, faith, testing",
                "Genesis 25–36: Isaac and Jacob — promise continues through imperfect people",
                "Genesis 37–50: Joseph — providence, suffering, and redemption",
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                  <span style={{ color: GOLD, fontWeight: 700, minWidth: 24 }}>{i + 1}.</span>
                  <span style={{ color: MUTED, lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CREATION */}
        {activeTab === "creation" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Creation (Genesis 1–2)</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Genesis 1–2 is both the most loved and most debated passage in the Bible. Understanding what the text is doing — and what it is not doing — is essential for reading it faithfully.</p>
            {CREATION_ITEMS.map((item) => {
              const isOpen = openCreation === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenCreation(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* FALL */}
        {activeTab === "fall" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>The Fall &amp; Its Aftermath</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {FALL_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FLOOD & TOWER */}
        {activeTab === "flood" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Flood &amp; Tower of Babel</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {FLOOD_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABRAHAM */}
        {activeTab === "abraham" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Abraham (Genesis 12–25)</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Abraham is the father of faith — the one through whom God begins his great rescue operation. His story establishes the covenant framework that structures the rest of the Bible.</p>
            {ABRAHAM_ITEMS.map((item) => {
              const isOpen = openAbr === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenAbr(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ISAAC & JACOB */}
        {activeTab === "jacob" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Isaac &amp; Jacob (Genesis 25–36)</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {[
                { title: "Isaac — The Son of Promise", color: GOLD, body: "Isaac is remarkable largely for what happens to him rather than what he does. Born to a 100-year-old father and a barren mother, he is the miracle child — the living proof that God keeps impossible promises. He is nearly sacrificed and replaced by a ram — the great type of Christ. His marriage to Rebekah (Gen 24 — the longest chapter in Genesis) is a love story arranged by divine providence. Like his father, he lies about his wife to a king, demonstrating that faith in the promises of God does not automatically produce perfect character. The promise continues despite human failure." },
                { title: "Jacob — The Deceiver Who Is Transformed", color: GREEN, body: "Jacob is one of the Bible\'s most psychologically complex figures. He steals Esau\'s birthright (25:27–34) and then his blessing (27:1–40) through deception. He flees to Laban, where he is out-deceived (married Leah instead of Rachel). He wrestles with God at the Jabbok ford (32:22–32) — demanding a blessing, receiving a new name (Israel — \'one who struggles with God\') and a limp. The transformation is real but incomplete: Jacob remains capable of favoritism (Joseph over his other sons). God works through flawed people — the covenant continues not because of Israel\'s faithfulness but God\'s." },
                { title: "The Twelve Tribes — From Chaos to Family", color: TEAL, body: "Jacob\'s family is deeply dysfunctional: multiple wives and concubines, rivalry, jealousy, violence (the rape of Dinah and Simeon and Levi\'s revenge in Gen 34), and the great family rupture when the brothers sell Joseph. Yet from this family come the twelve tribes of Israel — the covenant people through whom the world will be blessed. Genesis shows that God\'s plan does not depend on ideal families or perfect faith. He works through the mess of real human relationships. This is both humbling and hopeful." },
                { title: "The Abrahamic Promise Advances", color: PURPLE, body: "Throughout the Isaac and Jacob narratives, the pattern repeats: God reaffirms the Abrahamic covenant to each patriarch (26:3–5 to Isaac; 28:13–15 at Bethel to Jacob; 35:9–13 to Jacob again). The promise does not depend on the recipient\'s faithfulness — it depends on God\'s. Even when Jacob flees from his sin, God meets him with the covenant promise: \'I am with you and will watch over you wherever you go, and I will bring you back to this land\' (28:15). Covenant grace pursues the patriarch even into exile." },
              ].map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOSEPH */}
        {activeTab === "joseph" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Joseph (Genesis 37–50)</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {JOSEPH_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {activeTab === "journal" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: 16, lineHeight: 1.6 }}>Reflect on Genesis. Where do you see yourself in these stories? What does the Providence of God in Joseph&apos;s story mean for your own life?</p>
            <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }} />
            <p style={{ color: MUTED, fontSize: 12, marginTop: 8 }}>Saved locally to your device.</p>
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Video Teaching</h2>
            <div style={{ display: "grid", gap: 20 }}>
              {VIDEOS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "12px 16px" }}>
                    <p style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
