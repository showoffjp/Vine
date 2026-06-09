"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "samuel", label: "Samuel" },
  { id: "saul", label: "Saul" },
  { id: "david", label: "David" },
  { id: "covenant", label: "Davidic Covenant" },
  { id: "failure", label: "David's Failure" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const SAMUEL_SECTIONS = [
  {
    color: GOLD,
    title: "Hannah's Prayer — 1 Samuel 1–2",
    body: "The books of Samuel open with Hannah, a barren woman weeping and praying at the tabernacle. She vows that if God gives her a son, she will give him back to the LORD for life. God opens her womb; Samuel is born. Her prayer in chapter 2 is one of the most theologically rich prayers in the OT: 'The LORD kills and brings to life; he brings down to Sheol and raises up. The LORD makes poor and makes rich; he brings low and he exalts' (2:6–7). Mary's Magnificat in Luke 1:46–55 echoes Hannah's prayer almost verbatim — it is the template for understanding how God works through reversals. The powerful are brought down; the humble are raised. This reversal will define the entire arc of the books.",
  },
  {
    color: BLUE,
    title: "Samuel's Call — 1 Samuel 3",
    body: "Samuel, as a young boy sleeping in the temple, hears his name called in the night. Three times he runs to Eli thinking it is the old priest. Eli finally recognizes the pattern: 'It is the LORD who is calling you. Go, lie down, and if he calls you, you shall say: Speak, LORD, for your servant hears.' The fourth time, Samuel says exactly this — and God delivers a devastating message of judgment on Eli's house. The story establishes Samuel as the model prophet: he listens, he speaks what God gives him, and he does not soften the word. 'Samuel grew, and the LORD was with him and let none of his words fall to the ground' (3:19). The prophetic standard is set.",
  },
  {
    color: TEAL,
    title: "The People Demand a King — 1 Samuel 8",
    body: "When the people demand a king 'like all the nations,' Samuel is troubled. God tells him: 'They have not rejected you, but they have rejected me from being king over them' (8:7). The request is not simply political pragmatism — it is a theological rejection of theocracy. God permits it but warns them through Samuel of exactly what a king will take: their sons for his armies, their daughters for his kitchens, their best land for his officials, a tenth of their flocks. 'You will cry out because of your king, whom you have chosen for yourselves, but the LORD will not answer you in that day' (8:18). The warning is prophetic: it describes exactly what Solomon will do. The people insist anyway.",
  },
];

const SAUL_SECTIONS = [
  {
    color: GOLD,
    title: "The Anointing and the Tall Man — 1 Samuel 9–10",
    body: "Saul is introduced with the most impressive resume imaginable: 'There was not a man among the people of Israel more handsome than he. From his shoulders upward he was taller than any of the people' (9:2). He is the people's idea of a king — tall, impressive, from the right tribe. Samuel anoints him privately, then publicly. God gives Saul 'another heart' (10:9) and the Spirit comes upon him. He begins well. But the outward impressiveness conceals an inward instability that will prove fatal.",
  },
  {
    color: RED,
    title: "The Two Rejections — 1 Samuel 13 and 15",
    body: "Saul is rejected twice. In chapter 13, facing Philistine threat, Saul presumes to offer the burnt offering himself rather than waiting for Samuel — a fundamental violation of the priestly-kingly boundary. Samuel's verdict: 'You have done foolishly. You have not kept the command of the LORD your God... now your kingdom will not continue' (13:13–14). In chapter 15, Saul is commanded to completely destroy the Amalekites. He spares King Agag and the best livestock. His excuse: 'I have obeyed the voice of the LORD' (15:20). Samuel's devastating reply: 'Has the LORD as great delight in burnt offerings and sacrifices, as in obeying the voice of the LORD? Behold, to obey is better than sacrifice' (15:22). Saul's religion is performance, not obedience. This is the moment Samuel mourns for Saul — and the LORD regrets making Saul king.",
  },
  {
    color: PURPLE,
    title: "Saul and the Torment — 1 Samuel 16–18",
    body: "After the Spirit of the LORD departs from Saul, an evil spirit torments him. The palace physicians recommend music therapy; young David is brought to play the lyre for the king. When David is calm, the torment eases. After David kills Goliath and becomes a national hero, Jonathan binds himself to David in covenant love ('Jonathan's soul was knit to the soul of David,' 18:1) while Saul becomes increasingly paranoid. The women's song — 'Saul has killed his thousands, and David his ten thousands' — tips Saul into jealousy and rage. From this point forward, Saul's story is one of progressive spiritual and psychological deterioration.",
  },
  {
    color: TEAL,
    title: "The Tragic End — 1 Samuel 31",
    body: "Saul's final night is among the most poignant passages in the OT. Before the battle of Mount Gilboa, he consults a medium at Endor — the supreme act of apostasy for a king who had expelled mediums from Israel. The shade of Samuel speaks the last word of judgment: 'The LORD has torn the kingdom out of your hand and given it to your neighbor, David... Tomorrow you and your sons shall be with me' (28:17–19). The next day the Philistines rout Israel, Saul's sons are killed, and Saul falls on his own sword. The men of Jabesh-gilead, who owed Saul their lives from his first great victory (chapter 11), travel through the night to recover his body and give him a proper burial. Even at the end, there is this grace.",
  },
];

const DAVID_SECTIONS = [
  {
    color: GREEN,
    title: "The Anointing — 1 Samuel 16",
    body: "Samuel is sent to the house of Jesse to anoint the next king. When he sees Eliab — tall, impressive — he thinks: surely this is the LORD's anointed. The LORD's response is the theological centerpiece of the David narrative: 'Do not look on his appearance or on the height of his stature, because I have rejected him. For the LORD sees not as man sees: man looks on the outward appearance, but the LORD looks on the heart' (16:7). Seven sons pass before Samuel. The eighth — the youngest, the one keeping the sheep — is David. He is sent for. He is anointed. The Spirit of the LORD rushes upon him from that day forward.",
  },
  {
    color: BLUE,
    title: "David and Goliath — 1 Samuel 17",
    body: "The Goliath story is the most famous in Samuel and the most theologically misread. It is not primarily about human courage against impossible odds. It is about the nature of faith and who fights whom. When Saul and Israel hear Goliath, they are 'dismayed and greatly afraid' (17:11). When David hears Goliath, he asks: 'Who is this uncircumcised Philistine, that he should defy the armies of the living God?' (17:26). The contrast is everything. Israel sees an impossible human problem. David sees an enemy of the living God who has already guaranteed the outcome. 'The battle is the LORD's,' David tells Goliath (17:47). He takes no sword — just a sling, five stones, and his theological convictions.",
  },
  {
    color: GOLD,
    title: "David as Refugee — 1 Samuel 19–31",
    body: "The longest section of 1 Samuel covers David's years as a fugitive from Saul. He flees, gathers a ragtag band of four hundred men, lives in caves and enemy territory. Twice he has Saul in his power and refuses to kill 'the LORD's anointed' (24:6; 26:11). His restraint is not weakness but theological conviction: it is not David's place to remove what God has put in place. The Psalms from this period (especially Psalm 57, 63, 142) capture the inner life of someone who waits on God in dangerous circumstances. God is shaping the king before he gives him the kingdom.",
  },
  {
    color: TEAL,
    title: "David Brings the Ark to Jerusalem — 2 Samuel 6",
    body: "David's first great act as king of a unified Israel is to bring the ark of the covenant to Jerusalem. The procession is exuberant — music, dancing, sacrifices. Uzzah reaches out to steady the ark when the oxen stumble; he is struck dead. The holiness of God is not managed by human good intentions. David is terrified and angry, then leaves the ark at the house of Obed-edom for three months. When blessing flows to that household, David brings the ark the rest of the way — dancing 'with all his might' before the LORD in a linen ephod. Michal watches from a window and despises him. David's response: 'It was before the LORD... I will celebrate before the LORD' (6:21). Worship that looks undignified to the proud looks right to God.",
  },
];

const COVENANT_SECTIONS = [
  {
    title: "2 Samuel 7 — The Davidic Covenant",
    body: "David wants to build a house for God. God's reply through Nathan is the most significant oracle in 2 Samuel: 'The LORD declares to you that the LORD will make you a house. When your days are fulfilled and you lie down with your fathers, I will raise up your offspring after you, who shall come from your body, and I will establish his kingdom. He shall build a house for my name, and I will establish the throne of his kingdom forever' (7:11–13). God promises an eternal dynasty — a son of David on the throne forever. This is the Davidic covenant. Its immediate fulfillment is Solomon. Its ultimate fulfillment — 'I will be to him a father, and he shall be to me a son' (7:14) — is cited in Hebrews 1:5 and Acts 13:22–23 as fulfilled in Jesus, the Son of David.",
  },
  {
    title: "The Son of David Thread",
    body: "The Davidic covenant (2 Sam 7) launches a theological thread that runs through the entire OT. The Psalms repeatedly invoke the promise (Ps 89, 110, 132). The prophets promise a coming King from David's line: 'There shall come forth a shoot from the stump of Jesse, and a branch from his roots shall bear fruit' (Isaiah 11:1). 'Behold, the days are coming, declares the LORD, when I will raise up for David a righteous Branch, and he shall reign as king' (Jer 23:5). Matthew opens his Gospel with 'the genealogy of Jesus Christ, the son of David' (Matt 1:1) — claiming the covenant is now fulfilled. Every OT reader who knew 2 Samuel 7 would understand immediately what Matthew is saying.",
  },
  {
    title: "David's Prayer — 2 Samuel 7:18–29",
    body: "After Nathan delivers the covenant promise, David goes in and sits before the LORD and prays one of the most theologically profound prayers in the Bible. He is overwhelmed: 'Who am I, O LORD God, and what is my house, that you have brought me thus far?' (7:18). He moves from personal gratitude to cosmic wonder: 'There is none like you, and there is no God besides you' (7:22). He ends with confident petition based entirely on God's character and word: 'Do as you have spoken' (7:25). David does not ask God to do what seems good to David. He asks God to do what God has already promised. This is covenant prayer — holding God to his word.",
  },
];

const FAILURE_SECTIONS = [
  {
    title: "2 Samuel 11 — David, Bathsheba, and Uriah",
    body: "The hinge of 2 Samuel. 'In the spring of the year, the time when kings go out to battle, David sent Joab, and his servants with him, and all Israel... but David remained at Jerusalem' (11:1). The sin begins with a single misplaced step: David is where he shouldn't be. He sees Bathsheba bathing, inquires, sends for her. She becomes pregnant. David's attempts to cover the adultery with a polished moral fiction — have Uriah come home from battle, sleep with his wife, and the pregnancy appears legitimate — fail because Uriah refuses to sleep at home while his men are in the field. David then arranges Uriah's death by putting him in the front of the fiercest fighting and then withdrawing support. The loyal soldier who refused to do what his king did is killed on David's orders.",
  },
  {
    title: "Nathan's Confrontation — 2 Samuel 12",
    body: "God sends Nathan the prophet to David. Nathan tells a story about a rich man who took a poor man's only beloved lamb. David burns with righteous anger: 'The man who has done this deserves to die!' Nathan's reply is one of the most famous lines in Scripture: 'You are the man.' David's sin is exposed not by accusation but by story — he has condemned himself. Then the consequences: the sword will never depart from his house, his wives will be taken publicly, the child of the adultery will die. David's confession is immediate and total: 'I have sinned against the LORD.' Nathan responds: 'The LORD also has put away your sin; you shall not die.' The mercy is real — David is not executed, as the law would require. But the consequences are not removed. The rest of 2 Samuel fulfills the prophecy.",
  },
  {
    title: "Psalm 51 — A Penitent's Theology",
    body: "The superscription of Psalm 51 dates it to Nathan's confrontation: 'when Nathan the prophet went to him, after he had gone in to Bathsheba.' It is the greatest penitential psalm and one of the most theologically precise prayers in Scripture. 'Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions' (51:1). David doesn't appeal to his track record or his service — only to God's hesed. 'Against you, you only, have I sinned' (51:4) — not denial that Bathsheba and Uriah were wronged, but recognition that all sin is ultimately against the holy God. 'Create in me a clean heart, O God' (51:10) — not restoration, but new creation. The psalm ends with social justice: when the penitent is restored, he will teach transgressors God's ways.",
  },
  {
    title: "Absalom's Rebellion — 2 Samuel 15–18",
    body: "The prophetic word that the sword will not depart from David's house is fulfilled in Absalom — David's own son who drives him from Jerusalem. Absalom has stolen the hearts of Israel with flattery and populist politics, then raises a rebellion. David flees across the Jordan, weeping, barefoot, his head covered. The humiliation is complete. But Absalom's military strategy fails — he listens to Hushai (David's secret agent) over Ahithophel (the wise counselor who then takes his own life). In the battle, Joab kills Absalom against David's explicit orders. David's lament is one of the most human moments in the entire Bible: 'O my son Absalom, my son, my son Absalom! Would I had died instead of you, O Absalom, my son, my son!' (18:33). The father who paid no price for his sin pays it in the death of the son he loves most.",
  },
];

const THEMES = [
  { icon: "❤️", color: GREEN, title: "A Man After God's Own Heart", body: "The phrase 'a man after God's own heart' (1 Sam 13:14) has been misunderstood as a character endorsement. It is better read as a description of orientation: David's heart is aimed toward God. He is not sinless — the Bathsheba episode proves that catastrophically. But his response to exposure (Psalm 51), his refusal to harm Saul (1 Sam 24, 26), his concern for the ark (2 Sam 6), and his prayer after the covenant promise (2 Sam 7) all show a person whose fundamental direction is toward YHWH. The phrase is a compass reading, not a performance review." },
  { icon: "👑", color: GOLD, title: "The Theology of Kingship", body: "Samuel-Kings develops a theology of human kingship that is deeply ambivalent. The people's demand for a king is a rejection of God (1 Sam 8). Yet God chooses to work through kings — anointing Saul and David, promising an eternal Davidic line. The king is meant to be the embodiment of the covenant community: when the king obeys, blessing flows; when the king apostasizes, the nation follows. David's failure in 2 Samuel 11 is not just personal sin — it is a paradigm for how unchecked power corrupts even the most gifted leaders." },
  { icon: "🙏", color: BLUE, title: "The Psalms as Inner Life", body: "More than any other figure, David gives us access to the inner life of someone walking with God through glory and failure. The superscriptions of Psalms 3, 18, 51, 52, 54, 56, 57, 59, 60, 63, 142 all tie specific psalms to specific moments in Samuel. Reading the narrative alongside the psalms shows that David processed his experience through prayer — the praise, the grief, the petition, the confession. The Psalter is the prayer book of a man who took seriously the reality of God in every circumstance." },
  { icon: "⚔️", color: RED, title: "The Consequences of Sin", body: "2 Samuel is unusual in the ancient world for its honest portrayal of royal failure. David sins and suffers real consequences. Nathan's oracle in 12:10–12 is precisely fulfilled: the sword in his house (Amnon killed by Absalom, Absalom killed by Joab), his wives taken publicly (Absalom and David's concubines, 16:22). The text does not let the king off the hook. The moral seriousness of sin — that it has consequences that outlast the moment of repentance — is one of 2 Samuel's most important teachings. Forgiveness does not always mean the removal of consequences." },
  { icon: "🌱", color: TEAL, title: "Grace After Failure", body: "Despite the catastrophe of 2 Samuel 11–20, God's covenant with David holds. Nathan says 'the LORD has put away your sin' (12:13). The child Bathsheba bears after the first child dies is Solomon — 'and the LORD loved him' (12:24). Joab and Abishai remain loyal through Absalom's rebellion. David returns to Jerusalem. The promise of 2 Samuel 7 is not revoked. The arc of the books is not from glory to ruin — it is from failure through grief to a restoration that carries forward the covenant promise. Grace is not the absence of consequences; it is God continuing to work despite them." },
  { icon: "✡️", color: PURPLE, title: "The Davidic Covenant and the NT", body: "The Davidic covenant (2 Sam 7) is arguably the most important OT passage for understanding the NT. Matthew's genealogy (Matt 1), Luke's announcement (Luke 1:32–33: 'he will be great, the throne of his father David'), Peter's Pentecost sermon (Acts 2:29–36), Paul's gospel summary (Acts 13:22–23), the book of Revelation (Rev 22:16: 'I am the root and the offspring of David') — all explicitly fulfill 2 Samuel 7. Jesus is not just a morally good king; he is the fulfillment of a 1,000-year-old unconditional covenant. The NT reads the whole of Israel's history as pointing to this moment." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type SamTab = "overview" | "samuel" | "saul" | "david" | "covenant" | "failure" | "themes" | "journal" | "videos";

export default function SamuelGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<SamTab>("vine_samuel_tab", "overview");
  const [openSamuel, setOpenSamuel] = useState<string | null>(null);
  const [openSaul, setOpenSaul] = useState<string | null>(null);
  const [openDavid, setOpenDavid] = useState<string | null>(null);
  const [openCovenant, setOpenCovenant] = useState<string | null>(null);
  const [openFailure, setOpenFailure] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_samuel_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_samuel_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveJEntry = useCallback(() => {
    if (!jForm.verse.trim() && !jForm.reflection.trim()) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), verse: jForm.verse, reflection: jForm.reflection, prayer: jForm.prayer };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2500);
  }, [jForm]);

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12 };
  const accent = GOLD;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: `linear-gradient(135deg, rgba(217,119,6,0.15) 0%, rgba(58,125,86,0.10) 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>👑</div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>1 & 2 Samuel</h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 640, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
              From Hannah&apos;s prayer to David&apos;s grief over Absalom — the rise of the monarchy, the anointing of Israel&apos;s greatest king, the Davidic covenant, and what happens when a man after God&apos;s own heart catastrophically sins and lives with the consequences.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[{ label: "1 Samuel — 31 Chapters", color: BLUE }, { label: "2 Samuel — 24 Chapters", color: GOLD }, { label: "OT History", color: GREEN }, { label: "Davidic Covenant", color: PURPLE }].map(b => (
                <span key={b.label} style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}44`, borderRadius: 20, padding: "0.3rem 0.9rem", fontSize: "0.8rem", fontWeight: 600 }}>{b.label}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderBottom: `1px solid ${BORDER}`, background: `${CARD}CC`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto", padding: "0 1rem" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id as SamTab)}
                style={{ padding: "0.9rem 1.1rem", fontSize: "0.82rem", fontWeight: activeTab === t.id ? 700 : 500, color: activeTab === t.id ? accent : MUTED, borderBottom: `2px solid ${activeTab === t.id ? accent : "transparent"}`, background: "none", border: "none", borderBottomWidth: 2, borderBottomStyle: "solid", cursor: "pointer", whiteSpace: "nowrap", transition: "color 150ms" }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
                <div style={{ ...card, padding: "2rem", borderTop: `3px solid ${BLUE}` }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>📖</div>
                  <h2 style={{ color: BLUE, fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>1 Samuel: The Transition to Monarchy</h2>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.9rem" }}>The book spans Israel&apos;s transition from the judges period to the monarchy: Samuel the last judge/first major prophet, Saul the first king (his rise, anointing, two rejections, and tragic end), and David&apos;s emergence as the anointed-but-not-yet-king who spends the second half of the book as a fugitive.</p>
                </div>
                <div style={{ ...card, padding: "2rem", borderTop: `3px solid ${GOLD}` }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>⭐</div>
                  <h2 style={{ color: GOLD, fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>2 Samuel: David&apos;s Kingdom</h2>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.9rem" }}>David becomes king of Judah, then all Israel. He captures Jerusalem, brings the ark there, receives the eternal covenant promise in chapter 7, and then — in one of Scripture&apos;s most devastating narrative turns — commits adultery with Bathsheba and murders Uriah. The second half of 2 Samuel fulfills Nathan&apos;s prophecy of consequences.</p>
                </div>
              </div>
              <div style={{ ...card, padding: "2rem" }}>
                <h3 style={{ color: accent, fontWeight: 700, marginBottom: "1rem" }}>The Central Question</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>Samuel-Kings wrestles with a question that dominates the OT historical books: what does faithful leadership look like, and what happens when leaders fail? Saul fails through presumption and disobedience. David fails through unchecked desire and abuse of power. Neither failure annuls the covenant promises — but both demonstrate that the human king Israel demanded cannot be the final answer. The books end with longing for a king who will truly embody covenant faithfulness. The NT answers: Jesus, the Son of David.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                {[
                  { label: "Hannah&apos;s prayer", ref: "1 Sam 2", color: GOLD },
                  { label: "LORD looks at the heart", ref: "1 Sam 16:7", color: BLUE },
                  { label: "Davidic covenant", ref: "2 Sam 7", color: GREEN },
                  { label: "You are the man", ref: "2 Sam 12:7", color: RED },
                  { label: "Psalm 51", ref: "After Nathan", color: PURPLE },
                  { label: "O Absalom, my son", ref: "2 Sam 18:33", color: TEAL },
                ].map(k => (
                  <div key={k.label} style={{ background: `${k.color}11`, border: `1px solid ${k.color}33`, borderRadius: 10, padding: "0.9rem 1rem" }}>
                    <div style={{ color: k.color, fontWeight: 700, fontSize: "0.85rem" }} dangerouslySetInnerHTML={{ __html: k.label }} />
                    <div style={{ color: MUTED, fontSize: "0.78rem", marginTop: 3 }}>{k.ref}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "samuel" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GOLD, marginBottom: "0.5rem" }}>Samuel: The Last Judge, The First Prophet</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Samuel is the hinge figure of the OT — the last judge, the first major prophet, the kingmaker who anoints both Saul and David. His story begins with his mother&apos;s prayer and ends with his ghost speaking judgment from beyond the grave.</p>
              </div>
              {SAMUEL_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenSamuel(openSamuel === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openSamuel === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openSamuel === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "saul" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: RED, marginBottom: "0.5rem" }}>Saul: The Tragedy of the Impressive Man</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Saul is one of the most tragic figures in Scripture — gifted with everything the people wanted in a king, undone by a pattern of performing religion without the heart to match it. His story is a study in how outward compliance is not the same as genuine obedience.</p>
              </div>
              {SAUL_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenSaul(openSaul === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openSaul === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openSaul === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "david" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GOLD, marginBottom: "0.5rem" }}>David: The Man After God&apos;s Own Heart</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>From anointing in a shepherd&apos;s field to dancing before the ark, David is the towering figure of the historical books — soldier, poet, king, sinner, penitent. The LORD looks not at his appearance but at his heart, and shapes him through years of waiting and danger before giving him the kingdom.</p>
              </div>
              {DAVID_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenDavid(openDavid === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openDavid === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openDavid === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "covenant" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: PURPLE, marginBottom: "0.5rem" }}>The Davidic Covenant — 2 Samuel 7</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>2 Samuel 7 is the theological summit of the Samuel books and one of the most important passages in the entire OT. It launches a promise — an eternal Davidic dynasty — that the entire NT claims is fulfilled in Jesus Christ.</p>
              </div>
              <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}`, borderRadius: 14, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, marginBottom: 8 }}>2 Samuel 7:12–16</div>
                <div style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.9, fontSize: "0.95rem" }}>
                  &quot;When your days are fulfilled and you lie down with your fathers, I will raise up your offspring after you, who shall come from your body, and I will establish his kingdom. He shall build a house for my name, and I will establish the throne of his kingdom forever... And your house and your kingdom shall be made sure forever before me. Your throne shall be established forever.&quot;
                </div>
              </div>
              {COVENANT_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenCovenant(openCovenant === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: PURPLE, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openCovenant === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openCovenant === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "failure" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: RED, marginBottom: "0.5rem" }}>David&apos;s Greatest Failure and Its Consequences</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>2 Samuel 11 is the pivot on which the whole book turns. Everything before it describes David&apos;s ascent; everything after describes the consequences of one catastrophic failure of character. The narrative is told with brutal honesty and theological precision.</p>
              </div>
              {FAILURE_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenFailure(openFailure === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: RED, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openFailure === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openFailure === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "themes" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {THEMES.map(item => (
                <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "journal" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", color: accent, marginBottom: "1.5rem" }}>Samuel Journal</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>VERSE OR PASSAGE</label>
                    <input value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. 1 Samuel 16:7, 2 Samuel 7:28-29" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>REFLECTION</label>
                    <textarea value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="Where do you see yourself in the Samuel narratives — waiting with David? Mourning with Hannah? Confronted like David by Nathan?" rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>PRAYER RESPONSE</label>
                    <textarea value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="Create in me a clean heart, O God, and renew a right spirit within me." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <button onClick={saveJEntry} style={{ background: accent, color: "#fff", border: "none", borderRadius: 8, padding: "0.85rem 2rem", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem", alignSelf: "flex-start" }}>{jSaved ? "✓ Saved" : "Save Entry"}</button>
                </div>
              </div>
              {jEntries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {jEntries.map(entry => (
                    <div key={entry.id} style={{ ...card, padding: "1.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                        <span style={{ color: accent, fontWeight: 600, fontSize: "0.9rem" }}>{entry.verse || "Reflection"}</span>
                        <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                      </div>
                      {entry.reflection && <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "0.5rem" }}>{entry.reflection}</p>}
                      {entry.prayer && <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, fontStyle: "italic" }}>🙏 {entry.prayer}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>1 & 2 Samuel — Video Library</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Overviews and deep studies of the Samuel narratives.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {[
                  { id: "QJOju5Dw0V0", title: "1 Samuel Overview", channel: "BibleProject" },
                  { id: "YvoWDXNDJgs", title: "2 Samuel Overview", channel: "BibleProject" },
                  { id: "Md0HiCvRAbk", title: "David — A Man After God's Own Heart", channel: "Desiring God" },
                  { id: "k9HHQjHjGd8", title: "The Davidic Covenant — 2 Samuel 7", channel: "Bible Study" },
                ].map(v => (
                  <div key={v.id} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div>
                      <p style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem" }}>{v.title}</p>
                      <p style={{ color: MUTED, fontSize: "0.8rem" }}>{v.channel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      <Footer />
    </div>
  );
}
