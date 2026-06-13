"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Hannahs Prayer",
  "Give Us a King",
  "The Rise and Fall of Saul",
  "God Looks at the Heart",
  "David and Goliath",
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
    id: "Hannahs Prayer",
    heading: "Hannah&rsquo;s Prayer and the Birth of Samuel",
    reference: "1 Samuel 1&ndash;3",
    paragraphs: [
      "The First Book of Samuel opens not in a palace or on a battlefield but in the quiet anguish of a barren woman. Hannah, one of the two wives of Elkanah, is loved by her husband yet tormented by her childlessness and provoked year after year by her rival Peninnah. In a culture where a woman&rsquo;s worth was bound up with bearing children, her sorrow runs deep, and she carries it to the one place where it can be laid down &mdash; before the LORD at the sanctuary in Shiloh.",
      "There she pours out her soul to God, weeping bitterly and praying so fervently that the priest Eli mistakes her silent, moving lips for drunkenness. Hannah explains that she is not drunk but a woman of sorrowful spirit pouring out her heart before the LORD. She makes a vow: if God will give her a son, she will give him back to the LORD all the days of his life. Her prayer is a model of honest, desperate, believing dependence on God.",
      "God remembers Hannah, and she conceives and bears a son whom she names Samuel, saying she has &ldquo;asked him of the LORD.&rdquo; True to her vow, once the boy is weaned she brings him to Eli at Shiloh and dedicates him to the LORD&rsquo;s service. The book thus begins with a woman&rsquo;s faith and a child given back to God &mdash; a reminder that God often begins his greatest works in the hidden places of personal trust and surrender.",
      "Hannah responds with a song of praise that soars far beyond her own circumstances (2:1&ndash;10). She exults that the LORD raises the poor from the dust, brings low and lifts up, that the bows of the mighty are broken while the feeble are girded with strength. Her hymn celebrates a God who reverses human fortunes and exalts the humble &mdash; and it anticipates Mary&rsquo;s Magnificat centuries later, when another lowly woman would magnify the same God for the same reversal in the coming of her Son.",
      "Young Samuel grows up ministering before the LORD in the temple under Eli, even as Eli&rsquo;s own sons prove corrupt and wicked, treating the offerings of the LORD with contempt. The contrast is sharp: the dedicated boy grows in stature and in favor with the LORD and with man, while the priestly house under judgment declines. God is quietly raising up a faithful servant to replace a failing one.",
      "Then comes the famous night when the LORD calls the boy Samuel. Three times Samuel runs to Eli, thinking the aged priest has called him, until Eli perceives that the LORD is speaking and instructs the boy to answer, &ldquo;Speak, for your servant hears&rdquo; (3:10). When the LORD calls again, Samuel responds, and God reveals to him the coming judgment on Eli&rsquo;s house. From that night Samuel is established as a prophet, and all Israel comes to know that the word of the LORD has been entrusted to him.",
      "This opening movement sets the spiritual tone for the whole book. It teaches that God hears the cry of the lowly, that he honors vows of dedication, and that he speaks to those who will listen and obey. Samuel becomes the bridge between the chaotic era of the judges and the age of the kings &mdash; the last of the judges, the first of the great prophets, and the man through whom God will both grant and govern Israel&rsquo;s monarchy.",
    ],
  },
  {
    id: "Give Us a King",
    heading: "Give Us a King",
    reference: "1 Samuel 8",
    paragraphs: [
      "As Samuel grows old, the elders of Israel come to him with a demand that will reshape the nation: &ldquo;Give us a king to judge us like all the nations&rdquo; (8:5). On the surface their request seems reasonable &mdash; Samuel&rsquo;s sons, whom he had made judges, are corrupt and take bribes. But beneath the practical complaint lies a deeper spiritual problem: a desire to be like the surrounding nations rather than to remain the distinct, God-ruled people they were called to be.",
      "Samuel is displeased by the request and brings it to the LORD in prayer. God&rsquo;s answer pierces to the heart of the matter: &ldquo;they have not rejected you, but they have rejected me from being king over them&rdquo; (8:7). Israel had been a theocracy, a people whose true King was the LORD himself. In demanding a human king to lead them and fight their battles, they were quietly turning from trust in God&rsquo;s direct rule to confidence in visible human leadership like everyone else.",
      "God instructs Samuel to grant their request, but first to warn them solemnly of what a king will be like. Samuel describes &ldquo;the ways of the king&rdquo; who will reign over them: he will take their sons for his armies and chariots, their daughters to serve in his household, the best of their fields and vineyards and flocks, and a tenth of their produce. The very institution they crave to ease their burdens will, in time, lay heavy burdens upon them.",
      "Samuel&rsquo;s warning reaches its sobering climax: &ldquo;and you shall be his slaves. And in that day you will cry out because of your king, whom you have chosen for yourselves, but the LORD will not answer you in that day&rdquo; (8:17&ndash;18). What the people imagine as freedom and security will carry a hidden cost. The desire to be like the nations always exacts a price, and the king they trust to save them will himself become a source of grievance.",
      "Yet the people refuse to listen. &ldquo;No! But there shall be a king over us, that we also may be like all the nations, and that our king may judge us and go out before us and fight our battles&rdquo; (8:19&ndash;20). Their insistence reveals the depth of their unbelief: they want a leader they can see going out before them rather than the unseen God who had fought for them at the Red Sea and throughout the conquest. Sight has eclipsed faith.",
      "So God tells Samuel, &ldquo;Obey their voice and make them a king.&rdquo; Here is one of the most striking tensions in Scripture: God grants what his people sinfully demand, even while declaring that the demand is a rejection of him. The monarchy is not, in itself, evil &mdash; God had long intended that kings would come from Israel, and David&rsquo;s line would lead to the Messiah. But it is given here in judgment as well as grace, a concession to a people who would not be content with God alone as their King.",
      "The episode stands as a perennial warning about the human heart. We are forever tempted to want what everyone else has, to trade unseen dependence on God for visible securities we can manage ourselves. Israel got the king they asked for &mdash; tall, impressive Saul &mdash; and would soon learn that a king after their own preferences was no substitute for the LORD. The story presses the question to every generation: who, truly, is our king?",
    ],
  },
  {
    id: "The Rise and Fall of Saul",
    heading: "The Rise and Fall of Saul",
    reference: "1 Samuel 9&ndash;15",
    paragraphs: [
      "Saul enters the story as everything Israel could have wanted in a king. A Benjaminite of the tribe, he is a handsome young man, and there is none more impressive among the people &mdash; standing head and shoulders above everyone else. While searching for his father&rsquo;s lost donkeys, he is brought to Samuel, who anoints him privately at God&rsquo;s direction, and the Spirit of God comes upon him. He is later publicly chosen by lot and acclaimed by the people with the cry, &ldquo;Long live the king!&rdquo;",
      "Saul&rsquo;s reign begins with promise. When the Ammonites threaten Jabesh-gilead, the Spirit of God rushes upon Saul, and he rallies Israel to a decisive victory, delivering the city. His early days show genuine courage and capability, and for a time it appears that Israel&rsquo;s gamble on monarchy may pay off. Samuel charges both king and people to fear the LORD and serve him faithfully, warning that obedience, not the institution of kingship, is what truly matters.",
      "But cracks soon appear, and they all center on a single fault: disobedience. At Gilgal, facing a Philistine army while Samuel is delayed, Saul grows impatient and presumptuously offers the burnt offering himself rather than waiting for the prophet. When Samuel arrives, he rebukes Saul: he has not kept the command of the LORD, and because of it his kingdom will not continue. Saul&rsquo;s impatience reveals a heart that trusts its own judgment over God&rsquo;s clear word.",
      "The decisive failure comes with the Amalekites (ch. 15). God commands Saul, through Samuel, to devote them and all their possessions to destruction as judgment. But Saul spares Agag their king and keeps the best of the sheep and oxen, destroying only what was despised and worthless. When confronted, he insists he has obeyed the LORD, blaming the people and claiming the animals were spared for sacrifice &mdash; a tangle of excuse and self-justification.",
      "Samuel&rsquo;s reply becomes one of the great statements of true religion in all of Scripture: &ldquo;Has the LORD as great delight in burnt offerings and sacrifices, as in obeying the voice of the LORD? Behold, to obey is better than sacrifice, and to listen than the fat of rams&rdquo; (15:22). External religious acts cannot substitute for the obedience of the heart. Saul had kept the form of worship while abandoning the substance of submission, and Samuel exposes the hollowness of it.",
      "The verdict is severe: &ldquo;Because you have rejected the word of the LORD, he has also rejected you from being king&rdquo; (15:23). Samuel equates rebellion with the sin of divination and stubbornness with idolatry. The kingdom is torn from Saul, and Samuel turns to grieve over him, never seeing him again until the day of his death. The king who began head and shoulders above the rest is brought low by the smallness of his obedience.",
      "Saul&rsquo;s tragedy is not that he sinned &mdash; every figure in Scripture sins &mdash; but that he would not truly repent. Caught in his disobedience, he made excuses, shifted blame, and clung to his crown and reputation. His story stands as a sober warning: privilege, gifting, and even the anointing of the Spirit cannot stand in for a heart that listens to and obeys God. The fall of Saul prepares the way for a different kind of king, one chosen not for his stature but for his heart.",
    ],
  },
  {
    id: "God Looks at the Heart",
    heading: "God Looks at the Heart",
    reference: "1 Samuel 16",
    paragraphs: [
      "After the rejection of Saul, God sends Samuel on a secret and dangerous errand: to Bethlehem, to the house of Jesse, to anoint a new king from among his sons (ch. 16). Samuel fears Saul&rsquo;s wrath, but God provides a way, and the prophet comes to Jesse and his family. What follows is one of the most quietly revolutionary scenes in the Old Testament, a lesson in how differently God sees from the way human beings see.",
      "When Samuel sees Eliab, Jesse&rsquo;s eldest &mdash; tall, strong, and impressive &mdash; he is certain this must be the LORD&rsquo;s anointed. But God corrects him with words that pierce to the center of the whole book: &ldquo;Do not look on his appearance or on the height of his stature, because I have rejected him. For the LORD sees not as man sees: man looks on the outward appearance, but the LORD looks on the heart&rdquo; (16:7). The very qualities that recommended Saul are exactly what God refuses to judge by.",
      "One by one Jesse&rsquo;s sons pass before Samuel &mdash; seven impressive young men &mdash; and to each the LORD says no. Samuel is left perplexed: has God really chosen none of these? He asks whether there is yet another son, and Jesse almost dismissively mentions the youngest, who is out keeping the sheep. The boy is so overlooked that he was not even summoned to the feast. Samuel insists they send for him, refusing to sit down until he comes.",
      "David is brought in &mdash; ruddy, with beautiful eyes, a shepherd boy, the least likely of the brothers. And the LORD says, &ldquo;Arise, anoint him, for this is he.&rdquo; Samuel takes the horn of oil and anoints David in the midst of his brothers, and the Spirit of the LORD rushes upon David from that day forward. The youngest, the forgotten, the keeper of sheep is chosen to be king over Israel, while his impressive elder brothers stand by.",
      "The choice of David embodies the great reversal that has run through the book from the start. Hannah sang that God raises the poor from the dust and seats them with princes; here that song takes flesh. God passes over the obvious candidates and selects the one whom no one would have picked, teaching Israel &mdash; and every reader since &mdash; that the kingdom of God advances not by human impressiveness but by hearts that belong to the LORD.",
      "It is striking that David&rsquo;s formation has been in the unseen faithfulness of the shepherd&rsquo;s field. There, alone with the sheep, he had learned to trust God, to defend the flock against lion and bear, and to worship with his harp. The character God prized was forged in obscurity long before it was displayed in public. God looks on the heart, and the heart is shaped in the hidden places where no one is watching but him.",
      "This chapter gives the book its spiritual key and offers enduring comfort and challenge. It comforts the overlooked: God is not impressed by the things that impress people, and he sees and chooses the lowly. It also searches every heart: since God looks past the outward show to what we truly are within, the question is not how we appear but what we are before him. A heart turned toward God is worth more than every advantage the world admires.",
    ],
  },
  {
    id: "David and Goliath",
    heading: "David and Goliath",
    reference: "1 Samuel 17&ndash;31",
    paragraphs: [
      "The most famous story in 1 Samuel pits a shepherd boy against a giant (ch. 17). In the Valley of Elah the armies of Israel and the Philistines face off, and out from the Philistine ranks strides Goliath of Gath, a champion over nine feet tall, clad in bronze, hurling defiance at Israel and at Israel&rsquo;s God. For forty days, morning and evening, he taunts them, and Saul and all Israel are dismayed and greatly afraid, paralyzed before his size and his scorn.",
      "David, sent by his father to bring provisions to his brothers, hears the giant&rsquo;s defiance and is indignant &mdash; not at the danger, but at the insult to the living God: &ldquo;Who is this uncircumcised Philistine, that he should defy the armies of the living God?&rdquo; Where the soldiers see an unbeatable enemy, David sees a blasphemer challenging the LORD. His perspective is not naive; it is simply governed by faith. He measures Goliath not against himself but against God.",
      "Brought before Saul, David recounts how, as a shepherd, the LORD delivered him from the paw of the lion and the bear, and he is sure the same God will deliver him from this Philistine. He refuses Saul&rsquo;s armor, which does not fit him, and goes out as he is: with his staff, his sling, and five smooth stones from the brook. His confidence rests not in weapons or armor but in the God who had proven faithful in the unseen battles of the wilderness.",
      "His words to Goliath ring across the centuries as a declaration of pure faith: &ldquo;You come to me with a sword and with a spear and with a javelin, but I come to you in the name of the LORD of hosts, the God of the armies of Israel, whom you have defied&rdquo; (17:45). And he adds the heart of the matter: &ldquo;the battle is the LORD&rsquo;s, and he will give you into our hand&rdquo; (17:47). The victory belongs to God; David is simply the instrument of faith.",
      "Then the deed: David runs toward the battle line, slings a single stone, and strikes the giant in the forehead. Goliath falls face down, and David finishes the victory with the Philistine&rsquo;s own sword. The Philistines flee, and Israel pursues. The lesson endures: faith in God overcomes fear, and the LORD delights to win great victories through small and unlikely instruments, so that the glory belongs unmistakably to him and not to human strength.",
      "But triumph soon gives way to trial. As the women sing that Saul has struck down his thousands and David his ten thousands, jealousy takes root in Saul&rsquo;s heart, and from that day he eyes David with suspicion and hatred. Saul hurls his spear at David, plots against his life, and pursues him relentlessly. The young hero who saved Israel becomes a fugitive, hunted across the wilderness by the very king he had served.",
      "Through these years two relationships shine. David and Jonathan, Saul&rsquo;s own son, form one of Scripture&rsquo;s deepest friendships, a covenant of loyal love in which Jonathan defends David even against his father and embraces God&rsquo;s choice of David over his own claim to the throne. And twice David has Saul at his mercy in a cave and at the camp yet refuses to harm him, saying he will not stretch out his hand against &ldquo;the LORD&rsquo;s anointed.&rdquo; The book closes with Saul&rsquo;s death in battle &mdash; the tragic end of the king Israel chose, and the threshold of the reign of the king after God&rsquo;s own heart.",
    ],
  },
];

const videoItems = [
  { videoId: "QJOju5Dw0V0", title: "BibleProject - 1 Samuel Overview" },
  { videoId: "uft-q02ckpA", title: "David and Goliath Explained" },
  { videoId: "1MtKvkbVtLY", title: "God Looks at the Heart - 1 Samuel 16" },
];

export default function ChristianBookOf1SamuelGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of 1 Samuel
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            From Hannah&rsquo;s prayer to the throne &mdash; the birth and call of Samuel, Israel&rsquo;s demand for a king, the rise and fall of Saul, the anointing of David, and the faith of a shepherd boy who faced a giant in the name of the LORD.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
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

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of 1 Samuel through visual teaching on the structure of the book, the story of David and Goliath, and the truth that God looks upon the heart.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>To Obey Is Better Than Sacrifice</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Samuel traces the journey from a barren woman&rsquo;s prayer to the rise of a shepherd king, and its message endures: God hears the lowly, honors the obedient heart, and chooses not by outward appearance but by what he sees within. The LORD looks on the heart &mdash; may ours be turned wholly toward him.
          </p>
        </div>
      </main>
    </div>
  );
}
