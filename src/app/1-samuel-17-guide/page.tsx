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
  "The Philistine Champion",
  "No One Would Fight Him",
  "David Comes to the Camp",
  "In the Name of the Lord",
  "The Giant Falls",
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
    id: "The Philistine Champion",
    heading: "The Philistine Champion",
    reference: "1 Samuel 17:1&ndash;11",
    paragraphs: [
      "The chapter opens on a scene of gathering armies and impending conflict. The Philistines have assembled their forces and camped between Socoh and Azekah, in Ephes-dammim, while Saul and the men of Israel take up their position in the Valley of Elah. The two armies face each other across the valley, Philistine on one hill and Israelite on another, with the valley lying between them. It is a military standoff, a stalemate shaped by geography and, as the chapter will reveal, by a spiritual paralysis that the Israelites do not yet know how to break.",
      "Out of the Philistine camp comes a champion, and the narrator describes him in unforgettable physical terms. His name is Goliath of Gath. He stands six cubits and a span tall &mdash; by the most common reckoning, something close to nine and a half feet, a giant by any measure. His armor is described with the precision of a military inventory: a bronze helmet on his head, a coat of scale armor weighing five thousand shekels of bronze, bronze armor on his legs, and a bronze javelin slung between his shoulders. The shaft of his spear is like a weaver&rsquo;s beam, and the iron point alone weighs six hundred shekels. A shield-bearer walks before him.",
      "The sheer weight of the description creates the effect the narrator intends: an atmosphere of dread and overwhelming physical presence. The armor weighing five thousand shekels of bronze would have been something like 125 pounds of metal. The spear&rsquo;s iron point alone would have been around fifteen pounds. This is not merely a large man; he is a walking engine of war, a military symbol designed to terrorize before a single blow is struck. In the ancient world, champions served a specific function &mdash; single combat was sometimes used to decide a larger battle, with the armies agreeing to be bound by the outcome of their champions&rsquo; fight.",
      "Goliath himself makes the terms explicit. He stands and shouts to the ranks of Israel: &ldquo;Why have you come out to draw up for battle? Am I not a Philistine, and are you not servants of Saul? Choose a man for yourselves, and let him come down to me. If he is able to fight with me and kill me, then we will be your servants. But if I prevail against him and kill him, then you shall be our servants and serve us&rdquo; (17:8&ndash;9). The challenge is clear and the terms are binding: one man will fight on behalf of each nation.",
      "The Philistine adds a final word of defiance: &ldquo;I defy the armies of Israel this day. Give me a man, that we may fight together&rdquo; (17:10). The response of Saul and all Israel is immediate and telling: &ldquo;When Saul and all Israel heard these words of the Philistine, they were dismayed and greatly afraid&rdquo; (17:11). The word translated &ldquo;dismayed&rdquo; carries the force of being shattered, shaken apart. The text does not say the Israelite army thought about tactics or looked for a plan. They heard Goliath and were simply afraid. This fear is the spiritual problem at the heart of the chapter: Israel has forgotten who fights for them.",
      "It is worth pausing here to notice what the text does not say. It does not say the Israelites had no warriors. Saul&rsquo;s army was a military force. It does not say they were without weapons. What the text reveals is a crisis of faith, not of equipment. The presence of Goliath was terrifying not merely because of his physical size but because Israel in that moment had no answer to the question he was implicitly posing: who is your God, and is he greater than the forces arrayed against you? That question would be answered &mdash; but the answer would come from an unexpected quarter, and in a way that no one in the valley had anticipated.",
    ],
  },
  {
    id: "No One Would Fight Him",
    heading: "No One Would Fight Him",
    reference: "1 Samuel 17:12&ndash;30",
    paragraphs: [
      "The narrator now introduces the young man who will become the chapter&rsquo;s central figure, and the introduction is deliberately understated. David is the son of Jesse the Ephrathite of Bethlehem in Judah. Jesse was old and advanced in years, and his three oldest sons had followed Saul to the battle. David himself, the youngest, goes back and forth from the camp to tend his father&rsquo;s sheep at Bethlehem. He is not yet a soldier. He is a shepherd boy running errands between the battlefield and his father&rsquo;s house.",
      "The daily rhythm of the standoff is described: Goliath comes out morning and evening and presents himself for forty days. Forty is a number thick with biblical resonance &mdash; the forty years in the wilderness, the forty days of Elijah&rsquo;s journey, the forty days Jesus spent in the desert. Here it marks a prolonged period of testing, a kind of extended trial in which Israel&rsquo;s fear is exposed and deepened day by day. Each morning and each evening the giant appears, and each morning and each evening the armies of Israel do nothing.",
      "Jesse sends David to his brothers with food: an ephah of roasted grain, ten loaves of bread for his brothers, and ten cuts of cheese for their commander. It is an ordinary act of family provision. David rises early, leaves the sheep with a keeper, takes the provisions, and arrives at the camp just as the army is going out to the battle line and shouting the war cry. He leaves his provisions with the keeper of baggage and runs to the ranks and asks how his brothers are doing. He has come not as a warrior but as a messenger and errand boy.",
      "Then Goliath steps forward, as he has for forty mornings, and speaks his challenge, and the men of Israel flee from him in great fear. David overhears the men around him discussing the situation, and they tell him what the king has promised: the man who strikes down the Philistine will be given great riches by the king, and the king&rsquo;s own daughter in marriage, and his father&rsquo;s house will be made free in Israel. It is a remarkable offer &mdash; wealth, royal connection, and freedom from taxes and conscription &mdash; yet apparently no one has come forward to claim it.",
      "David asks a question that reveals the framework through which he is seeing this situation: &ldquo;Who is this uncircumcised Philistine, that he should defy the armies of the living God?&rdquo; (17:26). The question contains a theological judgment. Goliath is &ldquo;uncircumcised&rdquo; &mdash; outside the covenant. He is not merely an opponent in a military conflict; he is someone who has raised his voice against the people who belong to the living God. David&rsquo;s question reframes the challenge entirely. This is not a military problem awaiting a military solution; it is a covenant problem that will require a covenant response.",
      "His oldest brother Eliab hears him speaking and burns with anger. &ldquo;Why have you come down? And with whom have you left those few sheep in the wilderness? I know your presumption and the evil of your heart, for you have come down to see the battle&rdquo; (17:28). Eliab&rsquo;s rebuke is sharp and dismissive &mdash; you have abandoned your little flock, you are presumptuous, you just want to watch the spectacle. It is the kind of contempt that older brothers sometimes have for younger ones, a contempt magnified by Eliab&rsquo;s own failure. He is there, after all, in the very army that has been paralyzed by fear for forty days, and yet he mocks the younger brother who is asking the right question. David answers with characteristic simplicity: &ldquo;What have I done now? Was it not but a word?&rdquo; (17:29) and turns away to ask the same question of others.",
    ],
  },
  {
    id: "David Comes to the Camp",
    heading: "David Comes to the Camp",
    reference: "1 Samuel 17:31&ndash;40",
    paragraphs: [
      "Word of what David has been saying reaches Saul, and Saul sends for him. When David stands before the king, his confidence is immediate and direct: &ldquo;Let no man&rsquo;s heart fail because of him. Your servant will go and fight with this Philistine&rdquo; (17:32). Saul&rsquo;s response is the response of human calculation: &ldquo;You are not able to go against this Philistine to fight with him, for you are but a youth, and he has been a man of war from his youth&rdquo; (17:33). The king sees the disparity of experience and skill, and it paralyzes him. He applies the logic of the visible world to a situation that belongs, as David understands, to a different order entirely.",
      "David does not argue military theory. He answers from his own history with God. As a shepherd, he tells Saul, he has killed a lion and a bear with his hands when they came against the flock. When the lion or bear took a lamb from the flock, David went after it and struck it and delivered the lamb out of its mouth. When the beast rose against him, he caught it by its beard and struck it and killed it. &ldquo;Your servant has struck down both lions and bears, and this uncircumcised Philistine shall be like one of them, for he has defied the armies of the living God&rdquo; (17:36).",
      "The testimony David offers here is not boasting; it is evidence presented to the only tribunal that matters. He is not arguing that he is strong enough to fight Goliath. He is arguing that the God who delivered him from the lion and the bear will deliver him from this Philistine. &ldquo;The Lord who delivered me from the paw of the lion and from the paw of the bear will deliver me from the hand of this Philistine&rdquo; (17:37). His confidence is entirely located in the character and faithfulness of God, not in his own ability. Past faithfulness becomes the ground of present trust.",
      "Saul finally agrees: &ldquo;Go, and the Lord be with you&rdquo; (17:37). Then he does what leaders often do when they cannot think of anything better: he tries to equip David in his own image. He clothes David with his armor &mdash; a bronze helmet on his head and a coat of mail. David straps on Saul&rsquo;s sword over his armor and tries in vain to walk, because he has not tested them. &ldquo;I cannot go with these, for I have not tested them,&rdquo; he tells Saul, and takes them off (17:39). The image is striking: Saul&rsquo;s solution to the Goliath problem is to make David into a smaller version of Saul, which is precisely the wrong answer.",
      "Instead David takes his staff in his hand, chooses five smooth stones from the brook, and puts them in his shepherd&rsquo;s pouch. He takes his sling in his hand and draws near to the Philistine. The equipment he carries is not military; it is pastoral. A shepherd&rsquo;s staff, a shepherd&rsquo;s bag, a sling and five smooth stones from a stream &mdash; this is the arsenal with which God&rsquo;s servant will go to war. The contrast with Goliath&rsquo;s impressive military hardware could not be sharper. Bronze helmet and scale armor against a shepherd&rsquo;s sling. An iron spear with a head weighing six hundred shekels against five smooth stones. The disparity is the entire point.",
      "The selection of five stones has sometimes been interpreted as evidence of practical prudence &mdash; David prepared for the possibility that the first stone might miss. But something else may be at work. The confidence David expressed to Saul was not the confidence of a man calculating odds; it was the confidence of a man who had been delivered before. Whether the number of stones reflects caution or simply the instinct of a practiced slinger, the text does not editorialize. It simply shows us a young man with pastoral tools walking toward a military giant, and it is clear which way the narrative current is running.",
    ],
  },
  {
    id: "In the Name of the Lord",
    heading: "In the Name of the Lord",
    reference: "1 Samuel 17:41&ndash;47",
    paragraphs: [
      "The Philistine advances toward David, his shield-bearer walking before him, and when he looks at David and sees a ruddy youth with a handsome appearance and a shepherd&rsquo;s staff, Goliath is contemptuous. &ldquo;Am I a dog, that you come to me with sticks?&rdquo; (17:43). The champion of the Philistines expected a warrior; he got a boy with a stick. The contempt is complete and entirely human. Goliath curses David by his gods and issues his final threat: &ldquo;Come to me, and I will give your flesh to the birds of the air and to the beasts of the field&rdquo; (17:44). He sees exactly what the human eye can see and draws the obvious conclusion.",
      "David&rsquo;s answer is one of the great speeches in all of Scripture. It is not a battle cry in the ordinary sense; it is a theological declaration. &ldquo;You come to me with a sword and with a spear and with a javelin, but I come to you in the name of the Lord of hosts, the God of the armies of Israel, whom you have defied&rdquo; (17:45). The contrast is precise and deliberate: Goliath comes with weapons of visible military power &mdash; sword, spear, javelin. David comes in a name. Not with a name as a slogan, but in a name as a power, in the authority and presence and covenant commitment of the Lord of hosts.",
      "The title &ldquo;Lord of hosts&rdquo; carries enormous weight. The word &ldquo;hosts&rdquo; refers to armies, both earthly and heavenly. The Lord of hosts is not merely the deity of one nation among many; he is the commander of all armies, seen and unseen, the sovereign over the powers of heaven and the powers of the earth. When David says he comes in this name, he is claiming that the battle is not simply between himself and Goliath, or between Israel and Philistia. It is between the Lord of hosts and a defiant Philistine warrior who has spoken against the people of the living God.",
      "David then makes a declaration that goes well beyond personal survival: &ldquo;This day the Lord will deliver you into my hand, and I will strike you down and cut off your head. And I will give the dead bodies of the host of the Philistines this day to the birds of the air and to the wild beasts of the earth, that all the earth may know that there is a God in Israel&rdquo; (17:46). The purpose of what is about to happen is not merely Israel&rsquo;s military victory. It is an act of proclamation: all the earth is to know that there is a God in Israel. The defeat of Goliath is to be a testimony to the nations.",
      "He presses the point further: &ldquo;and that all this assembly may know that the Lord saves not with sword and spear. For the battle is the Lord&rsquo;s, and he will give you into our hand&rdquo; (17:47). &ldquo;The battle is the Lord&rsquo;s&rdquo; &mdash; this is the theological center of the chapter. Israel did not need a bigger champion to defeat Goliath. They needed to remember that the battles of the people of God belong to God himself, and that he is not dependent on swords and spears to accomplish his purposes. The entire chapter has been building to this declaration.",
      "David&rsquo;s speech does something else that deserves attention: it identifies the offense. Goliath has &ldquo;defied&rdquo; the armies of Israel, which is to say, he has defied the living God who commands those armies. This is not merely military insolence; it is a kind of blasphemy, a declaration that the God of Israel is not to be feared or respected. David&rsquo;s response is not primarily driven by patriotism or personal ambition. He is provoked by what should provoke any person of genuine faith: the open contempt for the name and honor of God. The story of David and Goliath is, at its core, a story about zeal for the glory of God expressed in action.",
    ],
  },
  {
    id: "The Giant Falls",
    heading: "The Giant Falls",
    reference: "1 Samuel 17:48&ndash;58",
    paragraphs: [
      "When the Philistine moves to meet him, David runs quickly toward the battle line to meet the Philistine. This detail is worth pausing over. David does not walk cautiously or advance with hesitation. He runs. The confidence of his declarations was not mere bravado; it expressed itself in the most practical way possible &mdash; he rushed toward the thing that had paralyzed an entire army for forty days. He puts his hand in his bag, takes out a stone, and slings it. The stone sinks into the Philistine&rsquo;s forehead, and the giant falls on his face to the ground.",
      "The narrative is spare and rapid. There are no dramatic slow-motion descriptions of the stone&rsquo;s arc through the air, no extended account of Goliath&rsquo;s fall. The text simply says: the stone sank into his forehead, Goliath fell on his face, and David prevailed over the Philistine with a sling and a stone. The understatement mirrors the theological point: what was made such an overwhelming problem by human calculation was resolved with breathtaking economy when God acted. One stone. One sling. One shepherd who had remembered who fights for Israel.",
      "David then runs and stands over the fallen Philistine, takes Goliath&rsquo;s own sword out of its sheath, kills him, and cuts off his head with it. The detail of using Goliath&rsquo;s own sword to cut off Goliath&rsquo;s own head is poetically just: the giant is defeated by the symbol of his own power. The weapon he carried as a declaration of his invincibility becomes the instrument of his execution. The sword David could not carry into battle in the armor of Saul, he now picks up from the ground and uses against the man it was meant to terrify.",
      "When the Philistines see that their champion is dead, they flee. The men of Israel and Judah rise with a shout and pursue them all the way to Gath and to the gates of Ekron. The men of Israel return from chasing the Philistines and plunder their camp. David takes the head of the Philistine and brings it to Jerusalem &mdash; a detail that connects to the later royal city that will bear the name of David&rsquo;s throne. He keeps Goliath&rsquo;s weapons in his own tent as trophies of a victory that was, in the deepest sense, not his own to claim but God&rsquo;s to be praised for.",
      "The chapter closes with Saul asking whose son David is, a question that may seem puzzling given that David has been in the royal service since chapter 16. Several explanations have been offered, and the text simply records the inquiry without resolving the historical puzzle. What matters for the narrative is the final image: Abner brings David before Saul with the head of the Philistine in his hand. The shepherd boy who arrived that morning with bread and cheese for his brothers stands before the king with the head of the Philistine champion, and everything has changed.",
      "The theological implications of 1 Samuel 17 extend far beyond the military situation in the Valley of Elah. David&rsquo;s victory over Goliath is consistently read in the Christian tradition as a type, a pattern or foreshadowing, of the greater victory of Christ. David, the anointed king (his name connected to the word for beloved), goes up against the enemy that has paralyzed God&rsquo;s people, fights in the name of the Lord, defeats the enemy through what appears to the world as weakness, and sets his people free. The greater David &mdash; Jesus, the anointed Son &mdash; goes to the cross where every power of sin and death seems to have the upper hand, and through what the world saw as utter defeat, destroys the enemy entirely. &ldquo;The battle is the Lord&rsquo;s&rdquo; echoes through the whole of Scripture and finds its ultimate fulfillment in the resurrection.",
    ],
  },
];

const videoItems = [
  { videoId: "EsB_46hBpMQ", title: "David and Goliath - 1 Samuel 17 Full Story Explained" },
  { videoId: "WkM0SiDZFZI", title: "BibleProject - Overview of 1 Samuel" },
  { videoId: "GkMzCcBxMpk", title: "The Giant Falls - Sermon on 1 Samuel 17" },
  { videoId: "UCz4rZb7GRY", title: "David and Goliath - The Battle Is the Lords" },
];

export default function Samuel17GuidePage() {
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
            1 Samuel 17 &mdash; David and Goliath
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The Valley of Elah, the champion of the Philistines, a shepherd boy with five smooth stones, and the declaration that has echoed through history: &ldquo;The battle is the Lord&rsquo;s.&rdquo;
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
              Deepen your study of 1 Samuel 17 through visual teaching on David and Goliath, the nature of faith in the face of overwhelming odds, and what it means to fight in the name of the Lord.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Battle Is the Lord&rsquo;s</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            1 Samuel 17 stands as one of the most vivid demonstrations in all of Scripture that God does not save by sword and spear. David&rsquo;s five smooth stones and his sling were not the real weapons in the Valley of Elah &mdash; the name of the Lord of hosts was. The chapter calls every generation of believers back to the same confidence: when God fights, the battle is already decided, however overwhelming the enemy may appear.
          </p>
        </div>
      </main>
    </div>
  );
}
