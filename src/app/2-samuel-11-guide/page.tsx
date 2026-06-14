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
  "David Sees Bathsheba",
  "The Attempted Cover-up",
  "Uriah the Hittite",
  "The Death of Uriah",
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
    heading: "Overview of 2 Samuel 11",
    reference: "2 Samuel 11:1&ndash;27",
    paragraphs: [
      "Second Samuel 11 is one of the most devastating chapters in the entire Old Testament &mdash; devastating not because of foreign invasion or divine judgment but because of what it reveals about the man God himself called &ldquo;a man after his own heart&rdquo; (1 Samuel 13:14). David is at the height of his power. His kingdom is established, his enemies are being subdued, and yet precisely in this moment of security and success, he falls into a sequence of sins that will fracture his house, corrupt his legacy, and cost an innocent man his life. The chapter moves with terrible, inexorable logic from idle wandering to lust, from lust to adultery, from adultery to deception, and from deception to murder.",
      "The chapter opens with a detail that has the ring of an indictment: &ldquo;In the spring of the year, the time when kings go out to battle, David sent Joab and his servants with him, and all Israel. And they ravaged the Ammonites and besieged Rabbah. But David remained at Jerusalem&rdquo; (11:1). The word &ldquo;but&rdquo; is the pivot on which the whole chapter turns. David&rsquo;s place is with his army; David&rsquo;s place is in the field, leading his men. Instead he is in Jerusalem, at leisure, strolling on his roof in the late afternoon. Absence from duty is not the sin; but it is the condition that makes the sin possible. The greatest danger is often not persecution but prosperity.",
      "The Bathsheba incident leads immediately to a cover-up that is far more calculated and culpable than the original sin. When Bathsheba sends word that she is pregnant, David does not confess; he schemes. He summons Uriah the Hittite back from the front and tries twice to maneuver him into sleeping with his wife so that the pregnancy can be attributed to Uriah. When this fails &mdash; because Uriah&rsquo;s honor is greater than David&rsquo;s &mdash; David writes a letter condemning Uriah to death, and then uses Uriah himself to carry that letter to Joab. The sin compounds itself at every step, each act of concealment requiring a greater act of treachery than the last.",
      "The chapter ends with one of the most chilling sentences in the Old Testament: &ldquo;But the thing that David had done displeased the LORD&rdquo; (11:27). The understatement is devastating in context. David has committed adultery, deceived his loyal commander, arranged the murder of one of his finest soldiers, and taken the dead man&rsquo;s wife as his own &mdash; and the narrator summarizes it with a quiet sentence about divine displeasure. The calm of the narrator&rsquo;s tone only heightens the gravity of what has been said. God has seen everything. God is not deceived. And the consequences that will follow &mdash; announced by the prophet Nathan in chapter 12 &mdash; will unfold across the rest of David&rsquo;s life and kingdom.",
      "For readers of Scripture, 2 Samuel 11 serves as a profound warning about the nature of sin, the dynamics of power, and the capacity for self-deception in the human heart. It is also, in the larger narrative of Scripture, a chapter that sets the stage for grace &mdash; for the confrontation that will bring David to his knees, for the psalm of repentance that will become Psalm 51, and for the God who, even when his servant sins grievously, does not abandon him but disciplines him for his good. The story of David in 2 Samuel 11 and 12 is one of the most honest and theologically instructive accounts of sin and restoration in all of Scripture.",
      "The chapter must also be read with attention to the power dynamics at work. Bathsheba is not presented as a temptress or a willing partner in sin; she is summoned by the king. In the ancient Near Eastern world, a summons from the king is not an invitation one declines. The text does not describe Bathsheba as consenting; it describes David as sending, taking, and lying. The victim in this story is not only Uriah, though Uriah&rsquo;s fate is the most visible injustice; Bathsheba is also a victim of the abuse of royal power. David&rsquo;s sin is not merely a failure of personal morality; it is an abuse of the covenant authority entrusted to him as king, a violation of the neighbor-love that the law of God required.",
    ],
  },
  {
    id: "David Sees Bathsheba",
    heading: "David Sees Bathsheba",
    reference: "2 Samuel 11:1&ndash;5",
    paragraphs: [
      "The opening scene of 2 Samuel 11 is deceptively quiet. It is evening, and David has risen from his couch and is walking on the roof of the king&rsquo;s house. From that elevated vantage point he sees a woman bathing, and the woman is very beautiful. The scene is told in almost clinical brevity: &ldquo;It happened, late one afternoon, when David arose from his couch and was walking on the roof of the king&rsquo;s house, that he saw from the roof a woman bathing; and the woman was very beautiful&rdquo; (11:2). There is no melodrama, no villain&rsquo;s monologue; just a man, a roof, an afternoon, and a fatal glance that becomes a lingering gaze.",
      "David&rsquo;s first act is not adultery; it is inquiry. He sends and asks about the woman, and the answer he receives should have stopped everything: &ldquo;Is not this Bathsheba, the daughter of Eliam, the wife of Uriah the Hittite?&rdquo; (11:3). Every element of that answer is a barrier. She is identified by her family lineage &mdash; the daughter of Eliam, who is probably the same Eliam listed among David&rsquo;s thirty mighty men (2 Samuel 23:34). She is identified as a wife &mdash; not a widow, not an unattached woman, but a married woman. And she is the wife of Uriah the Hittite &mdash; a man who is himself named among David&rsquo;s thirty mighty men (2 Samuel 23:39), one of David&rsquo;s most loyal soldiers.",
      "The answer to David&rsquo;s inquiry was a complete account of why he should not proceed. Bathsheba is not an anonymous woman; she is a person embedded in a network of covenant relationships &mdash; to her father, to her husband, and to the community of Israel. To take her is to violate not a stranger but a sister of the covenant, the wife of a colleague and loyal soldier. David hears all of this and proceeds anyway: &ldquo;So David sent messengers and took her&rdquo; (11:4). The brevity of the verb &ldquo;took&rdquo; &mdash; the same word used for a king seizing plunder &mdash; captures the abusive nature of what David does. He does not woo; he takes.",
      "The narrative continues without any description of Bathsheba&rsquo;s response or inner state. She is purifying herself from her uncleanness &mdash; a detail that confirms she is not pregnant before the encounter, and that she has been observing the ritual purity requirements of the law. She returns to her house. And then &ldquo;the woman conceived, and she sent and told David, &lsquo;I am pregnant&rsquo;&rdquo; (11:5). The message is stark: three words in Hebrew. Bathsheba&rsquo;s sending word to David is the act of a woman who has no other recourse. She cannot hide what has happened; she can only inform the man responsible.",
      "The theological reading of this passage must grapple with the fact that David is, at this point, acting in direct contradiction to everything his kingship was meant to embody. The king of Israel was not supposed to be above the law; he was supposed to model the law. The king was forbidden to multiply wives (Deuteronomy 17:17); the law forbade adultery with crystal clarity (Exodus 20:14). Coveting a neighbor&rsquo;s wife was the tenth commandment (Exodus 20:17). David has not violated a peripheral requirement of the law; he has struck at its heart. And he has done so from a position of power that makes the violation a matter of public justice as well as personal morality.",
      "James 1:14&ndash;15 provides the theological anatomy of what happens in 2 Samuel 11:1&ndash;5: &ldquo;Each person is tempted when he is lured and enticed by his own desire. Then desire when it has conceived gives birth to sin, and sin when it is fully grown brings forth death.&rdquo; David&rsquo;s desire for Bathsheba, left unchecked at the first glance, conceives; the sin is committed; and by the end of the chapter, the sin has brought forth the death of Uriah. The progression is terrible in its regularity. Nothing in the chapter is surprising, except perhaps the speed with which a man of David&rsquo;s spiritual history can descend from the heights of covenant faithfulness to the depths of covenant violation.",
    ],
  },
  {
    id: "The Attempted Cover-up",
    heading: "The Attempted Cover-up",
    reference: "2 Samuel 11:6&ndash;13",
    paragraphs: [
      "When the word comes that Bathsheba is pregnant, David does not confess, repent, or seek forgiveness. He schemes. The cover-up that follows is a masterclass in the psychology of sin &mdash; the way that each attempt to conceal a transgression requires a greater transgression than the original act. David&rsquo;s first move is to recall Uriah from the front: &ldquo;Send me Uriah the Hittite&rdquo; (11:6). The plan is straightforward: if Uriah returns home, sleeps with his wife, and a child is born in the normal course of time, the pregnancy can plausibly be attributed to Uriah and David&rsquo;s sin concealed.",
      "Uriah arrives, and David plays the role of the attentive commanding officer. He asks how Joab is doing, how the people are doing, how the war is going. It is the performance of normalcy, and it is calculated. Then David tells Uriah: &ldquo;Go down to your house and wash your feet&rdquo; (11:8) &mdash; a euphemism that makes clear what David expects Uriah to do. He sends a gift after him, the hospitality of a king returning a soldier to his home. But Uriah does not go home. He sleeps at the door of the king&rsquo;s house with all the servants of the king.",
      "When David is told that Uriah did not go home, he summons him and asks why. Uriah&rsquo;s answer is one of the most morally devastating speeches in the Old Testament: &ldquo;The ark and Israel and Judah dwell in booths, and my lord Joab and the servants of my lord are camping in the open field. Shall I then go to my house, to eat and to drink and to lie with my wife? As you live, and as your soul lives, I will not do this thing&rdquo; (11:11). Uriah the Hittite &mdash; a foreigner, a mercenary soldier, a man not born into the covenant of Israel &mdash; demonstrates a greater fidelity to the covenant community than the covenant king. His loyalty to his comrades in the field will not allow him to enjoy domestic comforts while they are at war.",
      "The irony is suffocating. The man whose wife David has taken, whose household David has violated, now stands before David and invokes the very values of solidarity and honor that David has betrayed. Uriah does not know what has happened; he speaks in complete innocence. But his words constitute an implicit indictment of everything David has done. While the army of God suffers in the field, David was wandering on his roof. While Uriah refuses to sleep under his own roof out of solidarity with his brothers, David seduced a soldier&rsquo;s wife. The contrast between the king and the soldier could not be more complete.",
      "David tries once more. He invites Uriah to stay another day, and he gets him drunk at the royal table. Perhaps intoxication will lower Uriah&rsquo;s guard. But even drunk, Uriah sleeps at the door of the king&rsquo;s house and does not go down to his home (11:13). The cover-up has failed. The Hittite soldier&rsquo;s integrity is impervious to David&rsquo;s manipulation; his loyalty to his comrades holds even through a night of royal hospitality and wine. David now faces a choice: confess what he has done, or escalate.",
      "The dynamics of the cover-up reveal something important about the nature of sin as it compounds. David&rsquo;s original sin &mdash; taking Bathsheba &mdash; was committed in a moment of desire that overcame conscience. The cover-up is entirely different in character: it is calculated, deliberate, and extended over days. David has time to think, time to reconsider, time to repent &mdash; and at each juncture he doubles down. The Puritan Thomas Boston observed that one sin commonly leads to another because sin seeks to secure itself; the attempt to hide the first sin becomes the occasion for the second, and the second for the third, until the sinner is ensnared in a web of transgression that he himself has woven. David&rsquo;s cover-up is a case study in this principle.",
    ],
  },
  {
    id: "Uriah the Hittite",
    heading: "Uriah the Hittite: Honor and Integrity",
    reference: "2 Samuel 11:6&ndash;13",
    paragraphs: [
      "Uriah the Hittite is one of the minor characters of the Old Testament who, by the sheer force of his integrity, becomes one of its most memorable figures. He appears in only eight verses of 2 Samuel 11, speaks only a single speech, and dies without knowing the full truth of what has been done to him. Yet in those eight verses he exposes by contrast the moral failure of Israel&rsquo;s greatest king with a power that no direct accusation could match. Uriah&rsquo;s honor is the mirror in which David&rsquo;s dishonor is most clearly seen.",
      "The name Uriah means &ldquo;the LORD is my light&rdquo; in Hebrew &mdash; a striking name for a Hittite, a man of non-Israelite origin. He is listed among David&rsquo;s thirty mighty men in 2 Samuel 23:39, a catalog of David&rsquo;s most elite and loyal warriors. These were men who had proven themselves in battle, who had put their lives on the line for David&rsquo;s kingdom, who formed the inner core of David&rsquo;s military household. Uriah was not a conscript or a recent recruit; he was a decorated veteran, a trusted member of the royal guard, a man whose loyalty to David was beyond question.",
      "His refusal to go home is not stubbornness or a failure to understand the king&rsquo;s wishes; it is a principled stand based on a clear understanding of covenant solidarity. The ark &mdash; the visible symbol of God&rsquo;s presence with Israel in battle &mdash; was in the field. Israel and Judah were fighting. Uriah, who had sworn to fight with his brothers until the battle was won, would not enjoy domestic comfort while they were exposed to the dangers of the campaign. His vow to the king &mdash; &ldquo;As you live, and as your soul lives, I will not do this thing&rdquo; (11:11) &mdash; is an oath of honor that binds him more firmly than the king&rsquo;s manipulation can loosen.",
      "There is also something profoundly tragic in the detail that Uriah himself carries the letter that condemns him to death. &ldquo;In the morning David wrote a letter to Joab and sent it by the hand of Uriah&rdquo; (11:14). David trusts &mdash; correctly &mdash; that Uriah will deliver the sealed letter faithfully, without opening it, without reading his own death warrant. Uriah&rsquo;s trustworthiness, the very quality that makes him a valued soldier, is the quality that David exploits to accomplish his murder. The man&rsquo;s virtue becomes the instrument of his destruction at the hands of a man without virtue.",
      "The early church fathers and medieval commentators sometimes read Uriah typologically as a figure of Christ &mdash; the innocent one condemned by a corrupt king, the faithful servant done to death through the machinations of those in power. While this typological reading should not be pressed too far, there is something in Uriah&rsquo;s story that resonates with the pattern of the righteous sufferer in Israel&rsquo;s wisdom literature and in the prophecies of the Servant in Isaiah. Uriah dies not because of any fault of his own but because his innocence and loyalty have become inconvenient to a man of power who has chosen to sin rather than repent.",
      "For contemporary readers, Uriah stands as a model of integrity under pressure. He is a soldier in a foreign king&rsquo;s army, a man of non-Israelite origin who has adopted the values and obligations of the people he has joined. His refusal to violate his sense of duty even at the king&rsquo;s implicit encouragement, even after a night of royal wine, even under the most tempting circumstances, is a portrait of what loyalty to one&rsquo;s community and calling looks like in practice. Uriah is not a hero of faith in the theological sense that Caleb or Joshua are; but he is a hero of honor in the deepest human sense, and in this chapter his honor throws the dishonor of David into the sharpest possible relief.",
    ],
  },
  {
    id: "The Death of Uriah",
    heading: "The Death of Uriah and David's Response",
    reference: "2 Samuel 11:14&ndash;27",
    paragraphs: [
      "Having failed to maneuver Uriah into sleeping with Bathsheba, David moves to the final and most terrible step in his scheme. He writes a letter to Joab, his commander: &ldquo;Set Uriah in the forefront of the hardest fighting, and then draw back from him, that he may be struck down, and die&rdquo; (11:15). The letter is a death sentence. It is also a revelation of the depth to which David has sunk: from adultery to deception to the premeditated murder of an innocent man. What began on a rooftop has arrived at a letter ordering the judicial murder of one of his most loyal soldiers.",
      "Joab carries out the order. He assigns Uriah to a position in front of the city of Rabbah where the defenders are most fierce, and when the defenders come out from the city, Uriah is killed along with some of David&rsquo;s other soldiers. The plan works; but the execution is messier than David intended. In his report to David, Joab anticipates that David might be angry that his men advanced too close to the wall &mdash; a tactical error that normally would draw rebuke from the king. He instructs the messenger: if the king&rsquo;s anger rises at this news, tell him &ldquo;Uriah the Hittite is dead also&rdquo; (11:21).",
      "The messenger delivers the report, and when he adds that Uriah the Hittite is dead, David&rsquo;s response is chilling in its studied casualness: &ldquo;Thus shall you say to Joab, &lsquo;Do not let this matter trouble you, for the sword devours now one and now another. Strengthen your attack against the city and overthrow it.&rsquo; And encourage him&rdquo; (11:25). The calculated indifference &mdash; &ldquo;the sword devours now one and now another&rdquo; &mdash; is the language of a man performing detachment. David reduces Uriah&rsquo;s death to a military commonplace, as if the man who died at the front of the hardest fighting was simply a statistic of war rather than the victim of a royal assassination.",
      "When Bathsheba hears that Uriah her husband is dead, she laments for him. The lamentation is brief &mdash; a single verse &mdash; but it is there. Luke does not erase Bathsheba&rsquo;s grief. She mourned for her husband, the man David had murdered to take her. When the mourning period is over, David sends and brings her to his house, and she becomes his wife and bears him a son. The acquisition is completed: the adultery is covered, the inconvenient husband is dead, and the child will be born in wedlock. From a worldly perspective, David has succeeded. He has managed the crisis, controlled the narrative, and emerged with no visible consequence.",
      "And then comes the sentence that reverses everything: &ldquo;But the thing that David had done displeased the LORD&rdquo; (11:27). The chapter ends, but the story does not. The word &ldquo;but&rdquo; at the beginning of this sentence is the most important word in the chapter. Everything that David has accomplished in this chapter &mdash; the deception, the manipulation, the assassination, the acquisition of Bathsheba &mdash; is held up against the judgment of a God who sees all things and who is not deceived by silence or success. The LORD was displeased. The account in heaven is different from the account in Jerusalem.",
      "The word translated &ldquo;displeased&rdquo; in Hebrew is literally &ldquo;was evil in the eyes of the LORD.&rdquo; David&rsquo;s act is named for what it is &mdash; evil &mdash; and it is named so in the eyes of the God whose eyes see everything. Chapter 12 will bring the prophet Nathan to David&rsquo;s door, and Nathan&rsquo;s parable will strip away every layer of self-justification and self-deception until David is forced to say, &ldquo;I have sinned against the LORD.&rdquo; But even before the confrontation and the confession, the final verse of chapter 11 stands as a declaration that no sin, however carefully concealed, is hidden from God. The king may fool his court, his commanders, and his wife; he cannot fool the LORD.",
    ],
  },
  {
    id: "Application",
    heading: "Applying 2 Samuel 11 Today",
    reference: "2 Samuel 11 &mdash; Moral Failure, Restoration, and the Grace of God",
    paragraphs: [
      "The account of David and Bathsheba in 2 Samuel 11 is not included in Scripture to titillate or to destroy David&rsquo;s reputation, but to show with unflinching honesty what sin looks like in the life of even the most spiritually gifted person. David is not a villain in the simple sense of the term; he is a man of genuine faith, a poet and warrior and worshiper who has walked with God for decades. And yet, in a season of comfort and inattention, he falls into sins that violate the most basic requirements of the law he was called to embody. The chapter stands as a permanent warning that no one is beyond the reach of temptation, and that prosperity and success can be more dangerous than persecution and adversity.",
      "The pattern of David&rsquo;s sin in 2 Samuel 11 illustrates what the New Testament calls &ldquo;the deceitfulness of sin&rdquo; (Hebrews 3:13). Sin promises what it cannot deliver and hides what it will cost. David&rsquo;s first sin was driven by desire; the cover-up was driven by fear; the murder of Uriah was driven by the desperate need to protect what sin had created. Each step seemed to solve the problem of the previous step, but each step plunged David deeper into guilt. This is the dynamic that the author of Hebrews warns against: the hardening of the heart through the deceitfulness of sin, where each act of transgression makes the next one feel more necessary and the voice of conscience grows quieter.",
      "The figure of Uriah the Hittite presents the church with a sharp ethical challenge regarding the use and abuse of power. David&rsquo;s sin was not only a personal moral failure; it was an abuse of institutional power &mdash; the power of the king over the soldier, the powerful over the vulnerable. The call of Christian leadership, rooted in the servant-kingship of Jesus, is to use power in the service of the vulnerable rather than to exploit it for personal advantage. Every Christian who holds any form of authority &mdash; in the church, the family, the workplace, the state &mdash; is called to exercise that authority in ways that protect rather than exploit those in their care. David&rsquo;s failure is a warning; the servant-kingship of Jesus is the model.",
      "The ending of 2 Samuel 11 &mdash; &ldquo;the thing that David had done displeased the LORD&rdquo; &mdash; is a word to every generation that assumes its sins are successfully concealed. In an age of elaborate image management, of carefully constructed public narratives, and of institutional cultures that protect the powerful from accountability, the final verse of 2 Samuel 11 speaks with enduring clarity: the LORD sees. The things done in secret are not secret to God. This is not a threat designed to produce fear alone; it is also an invitation to transparency, to the kind of honest self-examination before God that leads to confession, forgiveness, and genuine restoration &mdash; the path that David will take in Psalm 51.",
      "The story that begins in 2 Samuel 11 does not end there. Chapter 12 brings Nathan&rsquo;s confrontation, David&rsquo;s confession, and the declaration of forgiveness &mdash; but also the announcement of consequences: &ldquo;the sword shall never depart from your house&rdquo; (12:10). The grace of God forgives; it does not always remove the consequences of sin. David is forgiven; he is not shielded from what his sin set in motion. The murders and rebellions and family tragedies that fill the rest of 2 Samuel are the bitter fruit of the seeds planted in chapter 11. This is not a failure of grace; it is the seriousness with which God takes human choices and their effects on the community. Forgiveness restores relationship; it does not always restore what sin has destroyed.",
      "And yet Psalm 51 &mdash; the great psalm of repentance that tradition associates with David after Nathan&rsquo;s confrontation &mdash; stands as the permanent testimony that restoration from moral failure is possible, that the God who was displeased is also the God who says, &ldquo;A broken and contrite heart, O God, you will not despise&rdquo; (Psalm 51:17). The story of 2 Samuel 11 and 12 is not ultimately about the magnitude of human sin, though the sin is very great. It is ultimately about the even greater magnitude of divine grace &mdash; a grace that can take a king who committed adultery and murder, bring him to his knees, restore him to fellowship, and weave even his failure into the story of redemption. David&rsquo;s son Solomon will build the Temple; and the greater Son of David, Jesus Christ, will be born through the line that runs through David and Bathsheba (Matthew 1:6). God&rsquo;s purposes are not defeated by the worst of human sin.",
    ],
  },
];

const videoItems = [
  { videoId: "YvoWDXNDJgs", title: "BibleProject - Overview: 1-2 Samuel" },
  { videoId: "X4wBiPXzONY", title: "David and Bathsheba - The Weight of Sin and Grace" },
  { videoId: "r8S8RRK72-Q", title: "Uriah the Hittite - Integrity in the Face of Power" },
  { videoId: "j6Gs8jJMJwo", title: "Psalm 51 - A Broken and Contrite Heart" },
];

export default function Samuel11GuidePage() {
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
            2 Samuel 11 &mdash; David, Bathsheba, and the Death of Uriah
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            David remains in Jerusalem while his army is at war. From his roof he sees Bathsheba bathing and sends for her. When she becomes pregnant, David attempts a cover-up &mdash; recalling Uriah from battle and trying to get him to sleep at home. Uriah&rsquo;s honor is greater than David&rsquo;s. David writes his death warrant and sends it by Uriah&rsquo;s own hand. &ldquo;But the thing that David had done displeased the LORD.&rdquo;
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
              Deepen your study of 2 Samuel 11 through these video teachings on David and Bathsheba, the integrity of Uriah the Hittite, the nature of power and sin, and the path of restoration through Psalm 51.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Broken and Contrite Heart He Will Not Despise</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Second Samuel 11 is one of the most honest chapters in all of Scripture &mdash; honest about the capacity for moral failure even in the most spiritually gifted person, honest about the compounding logic of sin and cover-up, and honest about the fact that nothing is hidden from God. But the story does not end with &ldquo;the thing that David had done displeased the LORD.&rdquo; It ends, chapters later, with a king on his knees, a psalm of repentance, and a God who does not despise the broken and contrite heart. The grace that reaches David in the depths of his failure is the same grace that reaches every sinner who turns to God in honest confession.
          </p>
        </div>
      </main>
    </div>
  );
}
