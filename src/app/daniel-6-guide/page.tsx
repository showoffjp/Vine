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
  "Daniel Distinguished in Babylon",
  "The Plot Against Daniel",
  "My God Sent His Angel",
  "Darius Glorifies God",
  "The Integrity of Daniel",
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
    id: "Daniel Distinguished in Babylon",
    heading: "Daniel Distinguished in Babylon",
    reference: "Daniel 6:1&ndash;5",
    paragraphs: [
      "The sixth chapter of Daniel opens in the aftermath of a dramatic political transition. Darius the Mede has taken the kingdom &mdash; whether this refers to Cyrus the Persian acting under a Median throne name, or a governor set over the conquered Babylonian territory, remains a matter of scholarly discussion &mdash; and the machinery of imperial administration must be rebuilt and restaffed. Darius sets over the realm one hundred and twenty satraps, and over these he appoints three high officials, or presidents, to oversee them and protect the king&rsquo;s interests. Daniel is among these three.",
      "What happens next is stated with quiet simplicity that the narrator clearly intends the reader to notice: &ldquo;Then this Daniel became distinguished above all the other high officials and satraps, because an excellent spirit was in him, and the king planned to set him over the whole kingdom&rdquo; (6:3). Daniel rises not through intrigue, not through flattery, not through the careful cultivation of the right relationships, but because of something the text describes as &ldquo;an excellent spirit.&rdquo; The Hebrew and Aramaic vocabulary here points to a quality of character, diligence, wisdom, and integrity that cannot be manufactured by political skill alone.",
      "The phrase &ldquo;an excellent spirit&rdquo; recalls the repeated testimony about Daniel across the book. In chapter one it was evident in his wisdom and understanding that surpassed all others. In chapter two it was revealed in his ability to interpret dreams that no other wise man could decode. In chapter five it was attested by the queen mother herself, who urged Belshazzar to summon Daniel because &ldquo;an excellent spirit, knowledge, and understanding to interpret dreams, explain riddles, and solve problems were found in this Daniel&rdquo; (5:12). The excellence that distinguishes Daniel is not merely intellectual; it is a whole-person integrity that flows from his relationship with God.",
      "Darius&rsquo;s plan to set Daniel over the whole kingdom is the political trigger for everything that follows. The other officials&rsquo; jealousy is the engine of the plot, and that jealousy is itself revealing: Daniel&rsquo;s excellence was so genuine and so thoroughly acknowledged that his rivals cannot dismiss it. They do not question his competence. They do not accuse him of corruption or negligence. The text is explicit: &ldquo;they could find no ground for complaint or any fault, because he was faithful, and no error or fault was found in him&rdquo; (6:4). The only avenue of attack left open to them is his religion.",
      "This is an important observation for the contemporary reader. Daniel&rsquo;s integrity was not merely religious in a privatized sense &mdash; reserved for synagogue and personal devotion while his public professional life operated by a different standard. His excellence was of one piece. The same faithfulness that brought him to his knees three times a day toward Jerusalem was the faithfulness that made him incorruptible in the administration of the empire. His enemies could not separate the man of prayer from the man of affairs, because they were the same man. The worship and the work flowed from the same undivided heart.",
      "The declaration of his enemies in verse four is, unintentionally, one of the highest tributes ever paid to any public servant: &ldquo;We shall not find any ground for complaint against this Daniel unless we find it in connection with the law of his God.&rdquo; They are forced to admit that the only weakness Daniel has, from the perspective of those who want to destroy him, is his God. His God is his vulnerability. His worship is his exposure. And yet the story will show that this &ldquo;vulnerability&rdquo; is also his strength, because the God who becomes the target of the plot is the same God who will be his deliverance from it.",
    ],
  },
  {
    id: "The Plot Against Daniel",
    heading: "The Plot Against Daniel",
    reference: "Daniel 6:6&ndash;15",
    paragraphs: [
      "The conspiracy is carefully constructed. The high officials and satraps come before Darius together &mdash; the text emphasizes their collective appearance, suggesting coordinated pressure &mdash; and they propose a decree: for thirty days, anyone who prays to any god or man other than King Darius shall be cast into the den of lions. They tell the king that all the presidents, the prefects, the satraps, the counselors, and the governors have agreed to this &mdash; a claim that is itself a lie, since Daniel, one of the three presidents, has clearly not been consulted. Darius, flattered perhaps by the proposal to focus religious devotion exclusively on himself, signs the decree and makes it irrevocable under the law of the Medes and Persians, which cannot be changed.",
      "The irrevocability of the law of the Medes and Persians is a crucial detail in the narrative architecture of the chapter. The decree, once signed, cannot be altered even by the king himself. This will create the dramatic tension of the rest of the story: Darius will be caught in his own law, unable to protect the man he values most, unable to undo the decree he signed without thinking through its implications. The very mechanism designed to extend royal authority &mdash; the unchangeable decree &mdash; becomes a trap that ensnares the king as much as his intended victim. Human devices designed to be absolute discover their limits when they collide with the purposes of God.",
      "Daniel&rsquo;s response to the new law is one of the most quietly heroic moments in all of Scripture, precisely because of what it does not record. The text says nothing of Daniel agonizing over the decision, nothing of Daniel consulting advisors or calculating the odds, nothing of Daniel looking for a compromise that might satisfy both his conscience and the king&rsquo;s decree. What Daniel does is simply what he has always done: &ldquo;he went to his house where he had windows in his upper chamber open toward Jerusalem. He got down on his knees three times a day and prayed and gave thanks before his God, as he had done previously&rdquo; (6:10).",
      "The phrase &ldquo;as he had done previously&rdquo; is the key to understanding Daniel&rsquo;s response. He did not begin praying three times a day when the decree was issued as an act of conspicuous defiance. He did not stop praying three times a day as an act of pragmatic self-preservation. He simply continued the discipline of prayer that had characterized his entire life in Babylon. The windows were open as they had always been open. The knees went down at the customary times. The prayer and thanksgiving continued as before. The decree changed nothing about Daniel&rsquo;s prayer life because Daniel&rsquo;s prayer life was not something he had adopted recently or casually. It was the ordered rhythm of a life wholly given to God.",
      "His enemies find him exactly where they expected to find him, doing exactly what they expected him to be doing, and they report to the king with the formal precision of an accusation: Daniel, one of the exiles from Judah, pays no attention to you, O king, or the injunction you have signed, but makes his petition three times a day. The king&rsquo;s reaction is revealing. The text says he was &ldquo;much distressed and set his mind to deliver Daniel. And he labored till the sun went down to rescue him&rdquo; (6:14). Darius knows he has been manipulated. He understands what has happened. He spends the whole day searching for a legal way out. But there is none. The officials remind him that the law cannot be changed. He must command what he signed.",
      "There is a pastoral dimension to Darius&rsquo;s distress that is easy to overlook. The king who signed the decree without thinking is now suffering the consequences of his own thoughtlessness, and his suffering is genuine. He does not want Daniel to die. He respects and loves Daniel. He was deceived into setting a trap that has now caught his most valuable servant. The story presents Darius sympathetically, as a man of genuine good will who is nonetheless helpless against the mechanism of his own law. The contrast with Daniel is instructive: Daniel&rsquo;s life is ordered by a discipline that no external decree can disrupt; Darius&rsquo;s authority is undone by a decree he cannot retract. The man who prays has deeper resources than the king who signs.",
    ],
  },
  {
    id: "My God Sent His Angel",
    heading: "My God Sent His Angel",
    reference: "Daniel 6:16&ndash;24",
    paragraphs: [
      "Daniel is brought and cast into the den of lions. Before the stone is laid over the mouth of the den, the king speaks to Daniel: &ldquo;May your God, whom you serve continually, deliver you!&rdquo; (6:16). This is not the prayer of a man who has transferred his allegiance to the God of Israel. It is the desperate hope of a pagan king who has found that the one righteous man in his empire is beyond his power to protect, and who can do nothing now but call out to a God he barely knows. The stone is sealed with the king&rsquo;s own signet and with the signets of his lords, so that nothing can be changed concerning Daniel.",
      "The detail of the sealing is theologically significant and typologically rich. A sealed stone placed over the entrance of the den by the authority of the king, witnessed by the lords of the empire, designed to prevent any possibility of escape or rescue: this is the language of final imprisonment, of closure, of the certainty that whatever is inside cannot come out. The parallel with the sealed tomb of Jesus is not incidental. The power of Rome sealed a stone over the entrance; the authority of the empire bore its seal; witnesses confirmed there was no way out. And in both cases, God&rsquo;s power proved greater than the most definitive closure that human authority could devise.",
      "Darius spends the night fasting. He sends away the entertainers. He cannot sleep. The king who commands the greatest empire of his age lies awake through the darkness, tormented by what he has done and helpless to undo it. &ldquo;Then, at break of day, the king arose and went in haste to the den of lions. As he came near to the den where Daniel was, he cried out in a tone of anguish. The king declared to Daniel, &lsquo;O Daniel, servant of the living God, has your God, whom you serve continually, been able to deliver you from the lions?&rsquo;&rdquo; (6:19&ndash;20). The haste at dawn, the anguished tone, the trembling question: all of it conveys a man who has been awake all night dreading the answer.",
      "The answer comes out of the den, and it is one of the great declarations of Scripture: &ldquo;O king, live forever! My God sent his angel and shut the lions&rsquo; mouths, and they have not harmed me, because I was found blameless before him; and also before you, O king, I have done no harm&rdquo; (6:21&ndash;22). Daniel is alive. The angel has been there all night in the darkness with him, invisible to the king who sealed the stone, unknown to the lords who set their signets, but present and active in the den. God sent his messenger into the place of death and kept his servant safe.",
      "The specific mechanism of the miracle is worth noting: the angel shut the lions&rsquo; mouths. The lions were not removed. The den was not emptied of danger. Daniel spent the night in an enclosure with hungry lions whose mouths were supernaturally prevented from harming him. The danger was real; the deliverance was particular and miraculous. This pattern &mdash; not the elimination of the threat but the neutralization of the threat in the very place of its power &mdash; echoes the furnace in Daniel 3, where the fire was not extinguished but the men were preserved within it. God&rsquo;s deliverances in Daniel are consistently of this character: he enters the dangerous place and prevails there rather than removing his servants from it.",
      "Daniel&rsquo;s note that he was found blameless before both God and king is not self-righteousness but a statement of integrity that the whole narrative has established. His blamelessness before the king was precisely what his enemies confirmed when they could find no ground of complaint against him. His blamelessness before God was the orientation of a lifetime of faithful prayer and obedience. The two are not separate: the man who is found blameless before God, who has conducted himself in the administration of a pagan empire with complete integrity, is also blameless before the king. The seamlessness of Daniel&rsquo;s character is itself a part of his testimony.",
    ],
  },
  {
    id: "Darius Glorifies God",
    heading: "Darius Glorifies God",
    reference: "Daniel 6:25&ndash;28",
    paragraphs: [
      "Daniel is brought up out of the den, and the narrator adds a final confirming detail: &ldquo;no kind of harm was found on him, because he had trusted in his God&rdquo; (6:23). The causal link is explicit. The trust preceded the den. The trust was expressed in the continued practice of prayer even when prayer became a capital offense. The trust did not begin when the angel appeared but had been building for decades through every earlier test and trial and moment of discipline. And it was this trust &mdash; not luck, not natural advantage, not political maneuver &mdash; that was the ground of his preservation.",
      "The men who accused Daniel are brought and cast into the den along with their children and wives. The lions overpower them and break all their bones in pieces before they even reach the bottom of the den. This is disturbing to modern sensibilities and raises hard questions about collective punishment. Within the narrative logic of the chapter it serves two purposes. First, it demonstrates that the lions were fully capable of killing: the question of whether Daniel&rsquo;s survival might be explained by some natural factor about the lions&rsquo; behavior is answered definitively. The lions were ferociously lethal; what prevented them from touching Daniel was supernatural. Second, it is a form of the lex talionis &mdash; the accusers are punished by the very instrument they designed for their victim.",
      "Then Darius writes to all the peoples, nations, and languages that dwell in all the earth, and his proclamation is one of the most theologically rich confessions of the true God to be found outside the writings of Israel herself. He declares that all in his dominion must tremble and fear before the God of Daniel: &ldquo;for he is the living God, enduring forever; his kingdom shall never be destroyed, and his dominion shall be to the end. He delivers and rescues; he works signs and wonders in heaven and on earth, he who has delivered Daniel from the power of the lions&rdquo; (6:26&ndash;27).",
      "The content of the proclamation is carefully and accurately theological. Darius identifies God as &ldquo;living&rdquo; &mdash; in contrast to the dead idols of Babylon, the gods of wood and stone and gold that cannot see or hear or act. He identifies God as &ldquo;enduring forever,&rdquo; whose kingdom has no succession crisis, no decline, no replacement by inferior metals. He identifies God as the one whose dominion extends to the end &mdash; the very point that the book of Daniel has been making since chapter two with the dream of the great statue. He identifies God as the one who delivers and rescues, who works signs and wonders. This is not the testimony of a convert; it is the compelled witness of a man who has seen something he cannot deny.",
      "The pattern established across Daniel 3 and Daniel 6 is striking and theologically intentional. In both chapters, a foreign king who exercises absolute authority over the hero of the story is compelled by undeniable evidence to issue a public proclamation glorifying the God of the exiles. In both cases the proclamation comes not from persuasion or from Israel&rsquo;s military victory or from the superior sophistication of Hebrew theology but from the impossible survival of God&rsquo;s servant in a situation designed to destroy him. The furnace and the den become, in the economy of God&rsquo;s purposes, not merely trials to be endured but testimonies to be broadcast &mdash; the platform from which the truth about God is declared to the entire empire.",
      "The closing summary note &mdash; that Daniel prospered during the reign of Darius and the reign of Cyrus the Persian &mdash; is a quiet but weighty statement. Daniel, the exile who could have been executed under three different empires, who had every reason from the world&rsquo;s point of view to compromise and conform and survive by collaboration, continued to flourish precisely because he did not compromise. The man who would not bow to the golden image, the man who would not stop praying when prayer was outlawed, the man who was found blameless by his enemies and blameless before his God: this man prospered. God&rsquo;s faithfulness to those who are faithful to him is not always instantaneous, and it runs through the furnace and the den rather than around them, but it is real.",
    ],
  },
  {
    id: "The Integrity of Daniel",
    heading: "The Integrity of Daniel",
    reference: "Daniel 6:1&ndash;28",
    paragraphs: [
      "Reading Daniel 6 as a whole, one of the most profound and challenging themes is the nature of the integrity it depicts and the conditions under which that integrity was maintained. Daniel was not operating in a spiritually supportive environment. He was a member of a conquered people, serving in the administration of successive foreign empires that made no pretense of sharing his values or his God. He had held his position under the Babylonian kings and now under the Medes and Persians, navigating the treacherous politics of imperial courts for decades. He was surrounded by men who wanted him destroyed and used by kings who valued him but could not ultimately protect him. And through all of it, his character was so consistent that his enemies could only attack him through his religion.",
      "The discipline that grounded Daniel&rsquo;s integrity was prayer &mdash; not occasional or crisis-driven prayer but the structured, ordered, daily practice of getting down on his knees three times a day and praying and giving thanks before his God. The windows were open toward Jerusalem as a reminder of the covenant, of the temple, of the God who had bound himself to this people. The three times a day may reflect the practice of morning, afternoon, and evening prayer that runs through the psalms and that later became formalized in Jewish liturgical tradition. Whatever its specific form, the practice was regular enough that his enemies knew exactly when to find him at prayer and confident enough that a death penalty attached to it would not stop him.",
      "There is a connection between Daniel&rsquo;s prayer and his incorruptibility in public life that modern Western culture tends to miss, having largely accepted a division between the inner spiritual life and the outer professional life. For Daniel, these were not separate domains. The man who prayed three times a day, who kept his windows open toward the God of the covenant even in the capital of the empire that had destroyed his nation, was the same man who could not be bribed, who could not be compromised, who could not be found guilty of error or fault. The prayer sustained the integrity, and the integrity was the living expression of the prayer. To attack one was to encounter the other.",
      "The resurrection theme embedded in Daniel 6 is one the New Testament writers recognized and drew upon. Daniel goes into the sealed den at the command of the king; a stone is rolled over the mouth; royal seals are set. He emerges alive the next morning when the king comes &ldquo;in haste&rdquo; at the break of day. The linguistic and structural parallels with the burial and resurrection of Jesus are unmistakable, and they are not accidental. The book of Daniel is, among other things, a theological account of what it looks like when the God who vindicates the faithful overcomes the power of death and the authority of earthly empires. Jesus is the ultimate Daniel &mdash; the one who is perfectly blameless before God and man, who is sealed in a tomb by imperial authority, and who emerges on the third morning to the astonishment of all.",
      "The cost of Daniel&rsquo;s integrity was real and cumulative. Exile was not an easy condition. To serve in a foreign court, to watch Jerusalem destroyed and the temple desecrated, to live year after year in a culture that worshiped other gods and demanded conformity, to have political enemies who wanted you dead and were willing to construct elaborate legal traps to accomplish it: this was not a comfortable life. Daniel&rsquo;s faithfulness was not the faithfulness of a man who had nothing at stake. He had everything at stake &mdash; position, reputation, physical safety, life itself. And he maintained his integrity through all of it not because integrity was costless but because the God he served was worth the cost.",
      "The application to the contemporary believer is pointed and practical. The pressure to adjust one&rsquo;s public life to the expectations of a secular or pluralist culture, to find a private faith that does not intrude too noticeably into professional or social life, to keep the windows closed or at least not obviously open &mdash; this pressure is real and constant. Daniel&rsquo;s life answers it not with abstract theology but with a concrete example: a man who prayed with his windows open, who was found blameless by his enemies, who entered the den of lions still trusting in his God, and who came out of it alive because God sent his angel. The call of Daniel 6 is not to heroic individual willpower but to the sustained, structured, daily discipline of prayer that forms a character immune to the compromises that the world and its empires require.",
      "The chapter ends with Daniel prospering. But the prosperity is not what the story is about. It is simply the fruit of a life aligned with the God who endures forever, whose kingdom shall never be destroyed, who delivers and rescues, who works signs and wonders in heaven and on earth. The den of lions was not the end of Daniel&rsquo;s story. It was its fullest expression &mdash; the moment when everything that his prayer and his integrity had built was tested to its limit, and the limit turned out to be where God showed up. The living God, the enduring God, the delivering God: this is what the proclamation of Darius declares, and this is what the life of Daniel demonstrates. He is able to rescue. He sent his angel. And no sealed stone, no royal decree, no hungry lion, and no conspiracy of jealous officials can ultimately prevail against him.",
    ],
  },
];

const videoItems = [
  { videoId: "bE3KFmEQOyQ", title: "BibleProject - Overview - Daniel 1-6" },
  { videoId: "Q8YMaIsgrZM", title: "Daniel in the Lions Den - Daniel 6 Study" },
  { videoId: "7aRBDoOgAaE", title: "The Integrity of Daniel - Character Study" },
  { videoId: "r9DFWC6IYOA", title: "Darius and Daniel - Faithfulness Under Empire" },
];

export default function Daniel6GuidePage() {
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
            Daniel 6 &mdash; The Den of Lions
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Daniel&rsquo;s excellent spirit in Babylon, the jealous conspiracy of officials who could find no fault except in his religion, the decree that made prayer a capital offense, a night in the den of lions, and the angel who shut their mouths &mdash; a study in integrity that cannot be interrupted, and in a God who delivers from the sealed place of death.
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
              Deepen your study of Daniel 6 through visual teaching on Daniel&rsquo;s integrity in Babylon, the plot of the officials, the den of lions, and the proclamation of Darius glorifying the living God.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Living God Who Delivers</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Daniel 6 calls every believer to the discipline of prayer that cannot be outlawed, to the integrity that leaves enemies speechless, and to the trust that enters sealed places knowing that the living God &mdash; whose kingdom shall never be destroyed, who delivers and rescues, who works signs and wonders &mdash; is able to send his angel and shut the mouths of whatever lions await us.
          </p>
        </div>
      </main>
    </div>
  );
}
