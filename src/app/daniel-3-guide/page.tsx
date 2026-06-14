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
  "Nebuchadnezzar Golden Image",
  "We Will Not Serve Your Gods",
  "The Fiery Furnace",
  "A Fourth Man in the Fire",
  "The King Promotes the Three",
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
    id: "Nebuchadnezzar Golden Image",
    heading: "Nebuchadnezzar&rsquo;s Golden Image",
    reference: "Daniel 3:1&ndash;7",
    paragraphs: [
      "The third chapter of Daniel opens with a scene of breathtaking imperial arrogance. Nebuchadnezzar, king of Babylon and the most powerful monarch on earth, commands the construction of a golden image ninety feet high and nine feet wide &mdash; a colossus set up on the plain of Dura in the province of Babylon. The dimensions themselves carry a message: this is not merely a statue but a declaration of absolute sovereignty, a visible embodiment of the claim that Nebuchadnezzar&rsquo;s kingdom is ultimate, that his rule is total, and that his gods have conquered all rivals.",
      "The account says the image was of gold. Commentators have long noted the contrast with the dream of chapter two, in which Nebuchadnezzar himself had received the interpretation of the great statue &mdash; a statue whose head of gold represented his own kingdom but whose body descended through inferior metals, signifying that his empire would be succeeded by others. Here, it seems, the king responds to that vision not with humility but with defiance, erecting an image that is entirely gold, as if to insist that his kingdom will never be replaced. Human pride reasserts itself even in the face of divine revelation.",
      "The assembly commanded by the king is staggering in its comprehensiveness. Satraps, prefects, governors, counselors, treasurers, justices, magistrates, and all the officials of the provinces are summoned to the dedication of the image. The list of officials is repeated three times in the chapter with near-verbatim precision, a literary device that mimics the grinding machinery of imperial bureaucracy and underlines the totality of the king&rsquo;s demand. No one of rank or standing in the empire is exempted from attendance.",
      "The command is simple and absolute: when the signal is heard &mdash; the sound of the horn, pipe, lyre, trigon, harp, bagpipe, and every kind of music &mdash; all peoples, nations, and languages must fall down and worship the golden image. The musical trigger is also catalogued repeatedly in the chapter, each repetition reinforcing the relentless, inescapable nature of the summons. The music begins; everyone bows. Everyone, that is, except three.",
      "The text records the compliance with an almost mechanical brevity: &ldquo;all the peoples, nations, and languages fell down and worshiped the golden image that King Nebuchadnezzar had set up&rdquo; (3:7). The machinery of empire worked. The pressure of conformity was overwhelming. Against this backdrop of universal obeisance the coming refusal of Shadrach, Meshach, and Abednego shines with the greater force. Three exiles, servants of a conquered people, declined to bend the knee before the colossus of the greatest empire the world had ever seen.",
      "The chapter, even in these opening verses, raises the question that will press on every reader: what is it that holds a person upright when every force in the social and political world is pressing them to bow? The answer will not be military power or political calculation or the skill of the debater. It will be something far simpler and far harder &mdash; a settled conviction about who God is and what he is worth. The three men on the plain of Dura had not yet spoken a word. But they had already refused. The image stood ninety feet high. They stood straight.",
    ],
  },
  {
    id: "We Will Not Serve Your Gods",
    heading: "We Will Not Serve Your Gods",
    reference: "Daniel 3:8&ndash;18",
    paragraphs: [
      "The accusation comes swiftly and carries the cold precision of political calculation. Certain Chaldeans &mdash; officials likely jealous of the influence these Jewish exiles have gained over the province of Babylon &mdash; step forward to denounce Shadrach, Meshach, and Abednego before the king. The charge is formally made: the men whom the king has set over the affairs of the province of Babylon do not serve the king&rsquo;s gods and do not worship the golden image. The triple accusation mirrors the triple list of officials and the triple musical catalogue, embedding this confrontation in the deliberate literary architecture of the whole chapter.",
      "Nebuchadnezzar erupts in fury. The text says his &ldquo;visage was changed&rdquo; &mdash; his countenance distorted by rage &mdash; and he commands that the three men be brought before him. But even in his anger he grants them another chance, and his offer is almost tender in its condescension. He will play the music again; they may still bow; if they worship the image, well. But if not, they will be thrown immediately into the burning fiery furnace. And then comes the question that drips with contempt for the God they serve: &ldquo;And who is the god who will deliver you out of my hands?&rdquo; (3:15).",
      "The reply of Shadrach, Meshach, and Abednego is one of the great confessions of faith in all of Scripture. It occupies only three verses but contains a theological precision and a spiritual courage that have sustained believers through centuries of persecution. They do not hesitate, do not negotiate, do not ask for time to pray the matter over. Their answer is immediate and calm: &ldquo;O Nebuchadnezzar, we have no need to answer you in this matter&rdquo; (3:16). The question of whether they will bow has already been settled. There is nothing left to discuss.",
      "Then comes the positive declaration: &ldquo;If this be so, our God whom we serve is able to deliver us from the burning fiery furnace, and he will deliver us out of your hand, O king&rdquo; (3:17). This is not the hesitant hope of men who might be wrong. They confess with full confidence that their God is able. The omnipotence of God is not in question for them. The fiery furnace is not beyond his reach. Nebuchadnezzar&rsquo;s question &mdash; what god can deliver you out of my hands? &mdash; receives a direct answer: ours can.",
      "Yet the next clause is the one that has rung through the centuries of Christian reflection on this passage: &ldquo;But if not, be it known to you, O king, that we will not serve your gods or worship the golden image that you have set up&rdquo; (3:18). Three words in English &mdash; &ldquo;but if not&rdquo; &mdash; carry the full weight of unconditional faithfulness. The three men are not bargaining with God, not asserting that he must deliver them, not treating faith as a mechanism that guarantees a particular outcome. They are saying: even if deliverance does not come, even if the furnace is the last thing we ever see, even if our God chooses not to rescue us in the way we might hope, we still will not bow.",
      "This &ldquo;but if not&rdquo; faith is not a lesser faith than the confession of God&rsquo;s power; it is its completion. The willingness to obey regardless of outcome, to refuse idolatry even when the cost is death, reveals a relationship with God that is not merely transactional. They do not follow God because following God is safe. They follow God because he is God &mdash; because he is worthy of their allegiance no matter what the circumstance, no matter what the king decrees, no matter what the furnace demands. In this sense the three men of Daniel 3 anticipate the whole theology of the cross: faithfulness that runs toward suffering rather than away from it, trust that is not dissolved by the worst that the world can do.",
      "The application to the contemporary believer is clear and uncomfortable. Every age and every society sets up its own golden images &mdash; ideological, cultural, economic, political. The music plays, and the pressure to conform is intense. The question that echoes from the plain of Dura is not a historical curiosity but a living interrogation: when the music begins and every visible force in your world bows down, what will you do? And more deeply: is your faith in God one that will hold even in the &ldquo;but if not&rdquo; moment, the moment when deliverance does not seem to be coming and the furnace is heated and waiting?",
    ],
  },
  {
    id: "The Fiery Furnace",
    heading: "The Fiery Furnace",
    reference: "Daniel 3:19&ndash;23",
    paragraphs: [
      "The king&rsquo;s rage at the refusal of the three men is extreme. Nebuchadnezzar is so furious that his face is visibly distorted, and he commands that the furnace be heated seven times more than it is customarily heated. The number seven here is not necessarily literal arithmetic; in the ancient Near Eastern context it functions as a superlative, meaning &ldquo;to the maximum possible degree.&rdquo; The king is doing everything in his power to ensure that the punishment is not merely fatal but overwhelming, instantaneous, total. His anger at being defied is proportional to the absoluteness of the sovereignty he claims.",
      "Mighty men of the army are commanded to bind Shadrach, Meshach, and Abednego and to throw them into the furnace. The binding is deliberate; the king will leave no room for escape, no possibility of the condemned men simply walking away from the fire. The three men are thrown in wearing their garments &mdash; their cloaks, their tunics, their hats, and their other clothing &mdash; a detail the narrator records precisely because it will become significant when those same garments emerge from the fire untouched.",
      "Then comes one of the darkest and most dramatic ironies in the whole narrative. The furnace is so intensely hot, heated so far beyond its normal operating temperature at the king&rsquo;s command, that &ldquo;the flame of the fire killed those men who took up Shadrach, Meshach, and Abednego&rdquo; (3:22). The very soldiers who carried out the execution are themselves killed by the fire they used as a weapon. The fury of the king, pressed to its absolute limit, becomes the instrument of his own servants&rsquo; deaths. The men who wielded the power of the empire died by its excess. Shadrach, Meshach, and Abednego fell bound into the burning fiery furnace.",
      "The theological import of this moment should not be rushed past. The furnace heated seven times hotter was not a furnace that three men could survive. There is no natural mechanism by which bound men thrown into a superheated furnace emerge alive. The narrator is not leaving room for a naturalistic explanation. The three men did not survive because they were positioned near a cool air vent, or because the furnace had an inefficiency, or because the fire was not as bad as reported. They survived because God preserved them. The text will shortly make this explicit, but even before the fourth figure appears, the grammar of the story has already ruled out every explanation except the miraculous.",
      "The binding of the three men is an important detail for one further reason. Bound men cannot walk. Bound men cannot move freely. What the king and his court will see in moments is not three men who happened to avoid the worst of the fire but three men &mdash; and a fourth &mdash; walking freely in the midst of the fire. The very binding that was meant to ensure their total helplessness becomes the contrast that makes the miracle undeniable. They went in bound. They will be seen walking free. The power that can break the constraints of the furnace can also break the constraints of the binding. The worst that the empire can do turns out to be the theater in which God&rsquo;s power is most magnificently displayed.",
      "This section of the narrative is brief &mdash; only five verses &mdash; but it carries enormous theological density. Suffering that is real, danger that is genuine, death that came to others in the same fire: none of this is minimized or spiritualized away. The furnace was real. The binding was real. The heat that killed the soldiers was real. And into this real suffering, into this genuine danger, into this actual crisis, God stepped. The Christian reading of the passage cannot skip over the reality of the furnace in its haste to get to the deliverance. The &ldquo;but if not&rdquo; faith of the three men was tested in a genuinely lethal furnace. The presence of God in their suffering was presence in actual fire.",
    ],
  },
  {
    id: "A Fourth Man in the Fire",
    heading: "A Fourth Man in the Fire",
    reference: "Daniel 3:24&ndash;27",
    paragraphs: [
      "What Nebuchadnezzar sees when he looks into the furnace contradicts everything his military and political power had arranged. He had ordered three men thrown in; he sees four men walking. He had ordered them bound; they are free. He had ordered them consumed; they are unharmed. And the fourth figure, he announces, is one &ldquo;like a son of the gods&rdquo; (3:25). A pagan king, with no access to the Hebrew Scriptures and no preparation for this moment, looks into the fire and sees something that transcends the human &mdash; a being whose appearance belongs to a different order of existence entirely.",
      "The identity of the fourth figure has been debated across the centuries of Christian interpretation. The Aramaic phrase Nebuchadnezzar uses, &ldquo;a son of the gods,&rdquo; reflects his own polytheistic categories &mdash; a divine being, an angel, a heavenly messenger. The text does not in this verse explicitly identify the figure as the pre-incarnate Christ, though the ancient Christian reading of the passage consistently understood it as a Christophany &mdash; an appearance of the Son of God before the incarnation. Whether the fourth man is an angel sent as a representative of God or the divine Son himself present in the fire, the theological point is the same: God did not watch from a distance. He entered the fire with his servants.",
      "This detail &mdash; that God was present in the suffering rather than simply delivering from it &mdash; is one of the most precious truths in all of Christian theology. The three men did not come through the fire because the fire was turned off. They came through it because someone was in it with them. The furnace was not made comfortable; it was inhabited by the divine presence. And this divine presence did not remove the fire but made the fire unable to harm. The distinction matters enormously for the Christian experience of suffering: the promise is not that God will always prevent the furnace, but that he will enter it with those who are thrown into it for his name.",
      "Nebuchadnezzar&rsquo;s response is immediate and revealing. He approaches the door of the furnace and calls out to the three men by name &mdash; &ldquo;Shadrach, Meshach, and Abednego, servants of the Most High God&rdquo; &mdash; and commands them to come out. The king who had demanded that they call him lord is now addressing them as servants of a God higher than himself. The title he uses, &ldquo;Most High God,&rdquo; is a confession of sorts: whatever he believes about his own gods and his own divinity, he is compelled by what he has seen to acknowledge that the God these men serve is of a different category from anything his empire has encountered.",
      "The three men come out of the fire, and the officials gather around to inspect them. What they find is the completest possible testimony to the miracle: &ldquo;the fire had not had any power over the bodies of those men. The hair of their heads was not singed, their cloaks were not harmed, and no smell of fire had come upon them&rdquo; (3:27). The same garments that were carefully catalogued when the men were thrown in are now catalogued again in their unblemished state. Hair that should be ash, clothes that should be charred, skin that should be burned: all untouched. The witnesses are not a credulous crowd but the satraps, prefects, governors, and king&rsquo;s counselors &mdash; the very officials assembled for the dedication who are most invested in the authority of the empire and most motivated to deny the evidence if they could.",
      "The Christological resonance of this passage deepens when it is read alongside the New Testament theology of suffering. The one who was present in the furnace with Shadrach, Meshach, and Abednego is the same one who, in the fullness of time, himself entered into suffering and death, who was himself &ldquo;bound&rdquo; in a tomb and emerged unbound, who passed through death as these men passed through fire. The resurrection is the ultimate &ldquo;not a hair singed&rdquo; moment &mdash; the complete reversal of everything death had done, the vindication of the one who trusted God through the worst that the powers of this age could inflict. To read Daniel 3 through the lens of Easter is not to impose a foreign meaning on the text but to follow the inner logic of the story to its final and greatest fulfillment.",
    ],
  },
  {
    id: "The King Promotes the Three",
    heading: "The King Promotes the Three",
    reference: "Daniel 3:28&ndash;30",
    paragraphs: [
      "The chapter closes with a royal proclamation that is itself a kind of ironic reversal. Nebuchadnezzar, who had asked with contemptuous certainty &ldquo;who is the god who will deliver you out of my hands?&rdquo; (3:15), now gives the answer himself. He blessed the God of Shadrach, Meshach, and Abednego, and the words of his blessing constitute a remarkable theological statement from a pagan king: &ldquo;he has sent his angel and delivered his servants, who trusted in him, and set aside the king&rsquo;s command, and yielded up their bodies rather than serve and worship any god except their own God&rdquo; (3:28).",
      "Notice what Nebuchadnezzar has grasped and articulates in this blessing. First, he recognizes the agent: God sent his angel. The deliverance was not random good fortune or physical endurance; it was a divine act by a personal God. Second, he identifies the character of the men: they trusted in him. The king perceives that what made these men stand unbowed was not stubbornness or political calculation but trust in God &mdash; a deep relational confidence in the character and power of the one they served. Third, he acknowledges what they did: they set aside the king&rsquo;s command and yielded up their bodies. Even the king recognizes that this was a genuine act of defiance of royal authority and a genuine willingness to die. He is not reframing the story; he is describing it accurately.",
      "The proclamation that follows carries the full weight of imperial authority. Nebuchadnezzar decrees that any people, nation, or language that speaks anything against the God of Shadrach, Meshach, and Abednego shall be torn limb from limb and their houses laid in ruins, &ldquo;for there is no other god who is able to rescue in this way&rdquo; (3:29). This is not a conversion to monotheism; Nebuchadnezzar does not renounce his other gods or dismantle the golden image. But it is a forced public acknowledgment, extracted from the most powerful man on earth by the undeniable evidence of what his own eyes had seen, that the God of these exiles occupies a category all his own. The king who demanded worship now gives testimony.",
      "The promotion of the three men that follows &mdash; the king causes them to prosper in the province of Babylon &mdash; is a brief but significant coda. It recalls the pattern established in Daniel 1 and 2: those who remain faithful to God in the face of imperial pressure end up, by God&rsquo;s sovereign ordering of events, in positions of greater influence rather than lesser. This is not a promise that faithfulness always leads to earthly prosperity, and the three men themselves showed in their &ldquo;but if not&rdquo; answer that they did not expect deliverance as a reward for fidelity. But in God&rsquo;s wise providence, the witness of the three men in the furnace became the very thing that secured their standing in the empire.",
      "The chapter taken as a whole presents a coherent and challenging theology for believers living under any form of worldly pressure. The golden image is not a historical curiosity; every era and culture sets up its own versions of it &mdash; the demands for conformity that come with social status, economic participation, professional advancement, or political membership. The music plays in different keys in different ages but always with the same command: fall down and worship what we worship, affirm what we affirm, and you will be safe. The refusal of Shadrach, Meshach, and Abednego was not recklessness or political naivete; it was the expression of a prior and deeper loyalty that made every other loyalty secondary.",
      "The &ldquo;but if not&rdquo; of verse eighteen remains the heart of the chapter&rsquo;s application. There are moments in every life of faith when deliverance does not come, when the furnace consumes rather than purifies, when faithfulness costs everything and gains nothing visible. The three men did not know they would be rescued when they gave their answer to Nebuchadnezzar. They answered on the basis of who God is, not on the basis of what God would do. The God who is able to deliver is also the God who is worthy of trust when he does not deliver in the way we hope. And the promise embedded in the chapter is not that the furnace will always be survivable but that if you must enter it, you will not enter it alone. The fourth man in the fire is still present with his people in every furnace that fidelity to him requires them to enter.",
    ],
  },
];

const videoItems = [
  { videoId: "bE3KFmEQOyQ", title: "BibleProject - Overview - Daniel 1-6" },
  { videoId: "9cSC9uE5eSk", title: "The Fiery Furnace - Daniel 3 Explained" },
  { videoId: "ANQFEqBSqwg", title: "Shadrach Meshach and Abednego - But If Not" },
  { videoId: "XxHBDccgias", title: "Daniel 3 - Fourth Man in the Fire Sermon" },
];

export default function Daniel3GuidePage() {
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
            Daniel 3 &mdash; The Fiery Furnace
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Nebuchadnezzar&rsquo;s golden image, the courage of three exiles who would not bow, the furnace heated seven times hotter, and the fourth man who walked with them in the fire &mdash; a timeless declaration that God is present with his people in their suffering and worthy of trust even in the &ldquo;but if not&rdquo; moment.
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
              Deepen your study of Daniel 3 through visual teaching on the golden image, the courage of Shadrach, Meshach, and Abednego, the fiery furnace, and the fourth man in the fire.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>But If Not &mdash; Unconditional Faithfulness</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Daniel 3 calls every believer to the &ldquo;but if not&rdquo; faith of Shadrach, Meshach, and Abednego &mdash; a trust in God that does not require the guarantee of deliverance, that stands upright when every earthly pressure commands it to bow, and that discovers in the furnace what no comfortable life can reveal: the presence of God with his people in their deepest suffering.
          </p>
        </div>
      </main>
    </div>
  );
}
