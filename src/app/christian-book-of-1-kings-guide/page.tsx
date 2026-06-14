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
  "The Wisdom of Solomon",
  "Building the Temple",
  "The Kingdom Divided",
  "The Slide into Idolatry",
  "Elijah and the Prophets of Baal",
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
    id: "The Wisdom of Solomon",
    heading: "The Wisdom of Solomon",
    reference: "1 Kings 1&ndash;4",
    paragraphs: [
      "The Book of 1 Kings opens at the close of David&rsquo;s long reign, with the aged king on his deathbed and the question of succession hanging in the air. Adonijah, one of David&rsquo;s sons, attempts to seize the throne, but through the intervention of the prophet Nathan and Bathsheba, David confirms his oath that Solomon shall reign in his place. Solomon is anointed king, and after David&rsquo;s charge to walk in the ways of the Lord, the old king dies and the kingdom is &ldquo;firmly established in the hand of Solomon&rdquo; (2:46).",
      "The defining moment of Solomon&rsquo;s early reign comes at Gibeon. There the Lord appears to him in a dream by night and makes a staggering offer: &ldquo;Ask what I shall give you&rdquo; (3:5). Solomon does not ask for long life, or riches, or the death of his enemies. Instead he confesses that he is but a child who does not know how to go out or come in, and he asks for &ldquo;an understanding mind to govern your people, that I may discern between good and evil&rdquo; (3:9). It is a request born of humility and a sense of the weight of his calling.",
      "God is so pleased with this request that he grants not only wisdom but also what Solomon did not ask for &mdash; riches and honor surpassing every other king. &ldquo;I give you a wise and discerning mind, so that none like you has been before you and none like you shall arise after you&rdquo; (3:12). Solomon&rsquo;s wisdom becomes legendary, a gift from God for the sake of God&rsquo;s people.",
      "The famous demonstration follows immediately: two women come before the king, each claiming to be the mother of a single living child. With no witnesses to decide between them, Solomon calls for a sword and orders the child divided in two. The true mother, moved by compassion, cries out to give the child to the other woman rather than see him killed &mdash; and by this Solomon discerns the real mother. &ldquo;All Israel heard of the judgment that the king had rendered, and they stood in awe of the king, because they perceived that the wisdom of God was in him&rdquo; (3:28).",
      "Solomon&rsquo;s wisdom reached far beyond the courtroom. He spoke three thousand proverbs and composed a thousand and five songs; he discoursed on trees, beasts, birds, reptiles, and fish. People came from all nations and from all the kings of the earth to hear the wisdom of Solomon. Under his rule Israel reached the height of its glory &mdash; the nation dwelt in safety, &ldquo;every man under his vine and under his fig tree&rdquo; (4:25), from Dan to Beersheba.",
      "Yet even in these golden chapters there are quiet hints of trouble to come. The wisdom Solomon received was a gift, conditioned on his continued faithfulness; God&rsquo;s promise at Gibeon was tied to the charge, &ldquo;if you will walk in my ways&hellip; then I will lengthen your days&rdquo; (3:14). The story that begins with such promise will become, by its end, a sober lesson that wisdom received is not the same as wisdom retained, and that the heart of even the wisest of men can be turned away from God.",
    ],
  },
  {
    id: "Building the Temple",
    heading: "Building the Temple",
    reference: "1 Kings 5&ndash;8",
    paragraphs: [
      "The crowning achievement of Solomon&rsquo;s reign was the building of the Temple in Jerusalem &mdash; the permanent dwelling place for the name of the Lord that David had longed to build but was not permitted to. Solomon takes up his father&rsquo;s great ambition, declaring, &ldquo;I intend to build a house for the name of the Lord my God&rdquo; (5:5). The project would unite the worship of the nation around a single holy place and stand as the visible heart of Israel&rsquo;s covenant life.",
      "Solomon makes a treaty with Hiram, king of Tyre, who supplies cedar and cypress timber from Lebanon along with skilled craftsmen. A vast workforce is conscripted &mdash; tens of thousands of laborers in the quarries and the forests. The stone is dressed at the quarry itself, so that &ldquo;neither hammer nor axe nor any tool of iron was heard in the house while it was being built&rdquo; (6:7). The construction proceeds with a reverence befitting the sacred purpose of the work.",
      "The Temple itself, though modest in dimensions by the standards of the ancient world, was a marvel of beauty and craftsmanship. Its inner walls were lined with cedar carved with gourds and open flowers; its floor was overlaid with gold. At its heart stood the inner sanctuary, the Most Holy Place, a perfect cube overlaid entirely with pure gold, housing two great cherubim of olivewood whose outstretched wings spanned the room. Here the ark of the covenant would rest. The whole house was overlaid with gold until all of it was finished. The building took seven years to complete.",
      "When the work was done, Solomon assembled the elders of Israel to bring up the ark of the covenant into the inner sanctuary. As the priests came out of the Holy Place, &ldquo;a cloud filled the house of the Lord, so that the priests could not stand to minister because of the cloud, for the glory of the Lord filled the house of the Lord&rdquo; (8:10&ndash;11). The visible presence of God descended upon the completed Temple, the same glory that had once filled the tabernacle in the wilderness.",
      "Solomon then offers one of the great prayers of Scripture (ch. 8). He marvels that God, whom &ldquo;heaven and the highest heaven cannot contain&rdquo; (8:27), would dwell among his people. He pleads that the Lord would hear the prayers offered toward this house &mdash; prayers for forgiveness, for rain, for deliverance in battle, for the foreigner who comes from a far country drawn by God&rsquo;s name, and above all for a people who sin and are carried into exile, that if they repent and turn back, God would hear from heaven and forgive.",
      "The dedication concludes with overwhelming sacrifices and a feast of fourteen days, the people returning to their homes &ldquo;joyful and glad of heart for all the goodness that the Lord had shown to David his servant and to Israel his people&rdquo; (8:66). The Temple stood as the high-water mark of Israel&rsquo;s national and spiritual life &mdash; a sign of God&rsquo;s presence in the midst of his people, and a foreshadowing of a greater dwelling of God with man yet to come.",
    ],
  },
  {
    id: "The Kingdom Divided",
    heading: "The Kingdom Divided",
    reference: "1 Kings 11&ndash;12",
    paragraphs: [
      "The turning point of 1 Kings comes with the decline of Solomon himself. The king who had been given unmatched wisdom loved many foreign women, and &ldquo;when Solomon was old his wives turned away his heart after other gods, and his heart was not wholly true to the Lord his God&rdquo; (11:4). He built high places for Chemosh and Molech, the abominations of Moab and Ammon, on the hill east of Jerusalem. The wisest of kings was, in the end, led into idolatry by a divided heart.",
      "Because of this unfaithfulness, the Lord pronounces judgment: &ldquo;I will surely tear the kingdom from you and will give it to your servant&rdquo; (11:11). Yet for the sake of David his father, God will not do it in Solomon&rsquo;s days, and he will leave one tribe to Solomon&rsquo;s son for the sake of Jerusalem. The unity of Israel, won under David and glorified under Solomon, is now under a sentence of division that will fall upon the next generation.",
      "God raises up adversaries against Solomon, chief among them Jeroboam, an able young official whom the prophet Ahijah meets on the road. Ahijah tears his own new garment into twelve pieces and gives ten to Jeroboam, declaring that God will tear ten tribes from the house of Solomon and give them to him. Solomon seeks to kill Jeroboam, who flees to Egypt and waits there until Solomon&rsquo;s death.",
      "When Solomon dies, his son Rehoboam goes to Shechem to be made king. The people, led by the returned Jeroboam, ask him to lighten the heavy yoke of forced labor and taxation that Solomon had laid upon them. Rehoboam consults the old men who counsel restraint, but he rejects their advice and listens instead to the young men who grew up with him. His answer is harsh: &ldquo;My father made your yoke heavy, and I will add to your yoke. My father disciplined you with whips, but I will discipline you with scorpions&rdquo; (12:14).",
      "The result is catastrophe. The ten northern tribes reject the house of David, crying, &ldquo;What portion do we have in David? &hellip; To your tents, O Israel!&rdquo; (12:16). They make Jeroboam king over the northern kingdom of Israel, while only Judah and Benjamin remain loyal to Rehoboam in the south. The united monarchy, after only three reigns, is shattered in two &mdash; and it will never be reunited.",
      "The narrator is careful to show that this division, though it arose through human folly and pride, was also the working out of God&rsquo;s word of judgment. &ldquo;So the king did not listen to the people, for it was a turn of affairs brought about by the Lord&rdquo; (12:15). Sin had consequences that rippled across generations: the idolatry of Solomon&rsquo;s old age bore its bitter fruit in the tearing apart of the people of God.",
    ],
  },
  {
    id: "The Slide into Idolatry",
    heading: "The Slide into Idolatry",
    reference: "1 Kings 12&ndash;16",
    paragraphs: [
      "Having received the northern kingdom, Jeroboam immediately faces a political dilemma. The Temple, the appointed place of worship, lies in Jerusalem &mdash; the capital of the rival kingdom of Judah. Jeroboam fears that if his people go up to sacrifice there, their hearts will turn back to Rehoboam and the house of David. So he makes a fateful decision: he will create an alternative religion to keep his people from journeying south.",
      "Jeroboam fashions two golden calves and sets them up, one in Bethel and one in Dan, telling the people, &ldquo;Behold your gods, O Israel, who brought you up out of the land of Egypt&rdquo; (12:28) &mdash; words that echo the great apostasy at Sinai. He appoints priests who are not Levites, institutes a feast of his own devising, and offers sacrifices at the altar he has built. This counterfeit worship becomes the defining sin of the northern kingdom.",
      "So serious is this corruption that the recurring verdict on the kings of Israel becomes a refrain throughout 1 and 2 Kings: they &ldquo;walked in the way of Jeroboam and in his sin which he made Israel to sin&rdquo; (e.g. 15:34, 16:26). The &ldquo;sin of Jeroboam&rdquo; &mdash; the golden calves and false worship &mdash; becomes the original poison that infects the whole subsequent history of the north and seals its eventual destruction.",
      "A man of God from Judah confronts Jeroboam at the altar in Bethel, prophesying that a future king named Josiah will one day defile it, and giving a sign: the altar is torn down and Jeroboam&rsquo;s hand, stretched out against the prophet, withers until the prophet intercedes for him. Yet even this dramatic warning does not turn Jeroboam back; &ldquo;after this thing Jeroboam did not turn from his evil way&rdquo; (13:33), and his sin became the ruin of his house.",
      "The northern kingdom then descends into a grim cycle of instability and violence. Jeroboam&rsquo;s dynasty is wiped out; Baasha seizes the throne by assassination, only for his house to be destroyed in turn; Zimri reigns a mere seven days before burning the palace down around himself. Dynasty after dynasty rises by bloodshed and falls under judgment, each new king clinging to the idolatry of Jeroboam. The land knows no rest.",
      "The slide reaches its lowest point with the rise of Omri and then his son Ahab. Of Ahab the text says, &ldquo;Ahab the son of Omri did evil in the sight of the Lord, more than all who were before him&rdquo; (16:30). He marries Jezebel, daughter of the king of the Sidonians, and serves and worships Baal, erecting an altar and a temple for him in Samaria. With Ahab and Jezebel, Baal worship becomes the official religion of the state, and Israel&rsquo;s rebellion against the Lord reaches a crisis that sets the stage for the coming of the prophet Elijah.",
    ],
  },
  {
    id: "Elijah and the Prophets of Baal",
    heading: "Elijah and the Prophets of Baal",
    reference: "1 Kings 17&ndash;19",
    paragraphs: [
      "Into the darkness of Ahab&rsquo;s reign steps Elijah the Tishbite, perhaps the greatest of Israel&rsquo;s prophets, appearing suddenly and without introduction. His first word is one of judgment: &ldquo;As the Lord the God of Israel lives, before whom I stand, there shall be neither dew nor rain these years, except by my word&rdquo; (17:1). The drought is a direct challenge to Baal, the storm-god whom Israel had been worshiping as the giver of rain. The Lord, not Baal, controls the heavens.",
      "During the long drought Elijah is sustained by God in striking ways &mdash; fed by ravens at the brook Cherith, then sheltered by a widow at Zarephath whose jar of flour and jug of oil do not run out, and whose son Elijah raises from the dead. These miracles in the midst of famine demonstrate that the God of Israel is the true Lord of life and provision, even in the heartland of Baal worship.",
      "After three years the word of the Lord comes to Elijah to show himself to Ahab, and the great confrontation is set in motion. Elijah challenges Ahab to gather all Israel at Mount Carmel, along with the four hundred and fifty prophets of Baal. There he puts the decisive question to the people: &ldquo;How long will you go limping between two different opinions? If the Lord is God, follow him; but if Baal, then follow him&rdquo; (18:21). The people answer not a word.",
      "Elijah proposes a test. Two bulls are prepared on two altars, but no fire is set beneath them. &ldquo;The God who answers by fire, he is God&rdquo; (18:24). The prophets of Baal go first, calling on their god from morning until noon, crying aloud and cutting themselves with swords and lances. Elijah mocks them: perhaps Baal is musing, or relieving himself, or on a journey, or asleep and must be awakened. But there is no voice, no answer, no one who pays attention.",
      "Then Elijah repairs the altar of the Lord with twelve stones for the twelve tribes, digs a trench around it, and drenches the offering and the wood with water three times until the trench overflows &mdash; removing any suspicion of trickery. He prays simply that the people may know that the Lord is God and that he has turned their hearts back. &ldquo;Then the fire of the Lord fell and consumed the burnt offering and the wood and the stones and the dust, and licked up the water that was in the trench&rdquo; (18:38). The people fall on their faces, crying, &ldquo;The Lord, he is God; the Lord, he is God!&rdquo;",
      "Yet the story turns abruptly from triumph to despair. Jezebel vows to kill Elijah, and the prophet, exhausted and afraid, flees into the wilderness and asks to die. There, in his lowest moment, God meets him &mdash; not in wind, earthquake, or fire, but in &ldquo;a low whisper&rdquo; (19:12), a still small voice. The Lord gently recommissions his despondent servant, assures him that seven thousand in Israel have not bowed to Baal, and sends him on to anoint kings and to call Elisha as his successor. The God who answers by fire on the mountain also tends to the broken heart of his prophet in the wilderness.",
    ],
  },
];

const videoItems = [
  { videoId: "BGd2WGS-2us", title: "BibleProject - Overview - 1 Kings 1-11" },
  { videoId: "vmx4UjRFp0M", title: "BibleProject - Overview - 1 Kings 12 to 2 Kings 25" },
  { videoId: "rjT_FrHQXFs", title: "Solomon and the Wisdom of God - 1 Kings Explained" },
  { videoId: "JU2sjkVx0lA", title: "Elijah and the Prophets of Baal at Mount Carmel" },
];

export default function ChristianBookOf1KingsGuidePage() {
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
            The Book of 1 Kings
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The rise and fall of Israel&rsquo;s glory &mdash; the wisdom of Solomon, the building of the Temple, the tragic division of the kingdom under Rehoboam and Jeroboam, the slide into idolatry, and the fiery ministry of Elijah against the prophets of Baal.
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
              Deepen your study of 1 Kings through visual teaching on the reign of Solomon, the building of the Temple, the division of the kingdom, and the dramatic ministry of Elijah.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>If the Lord is God, Follow Him</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            1 Kings traces the heights of Israel&rsquo;s glory and the depths of its decline, showing that wisdom received is not wisdom retained, and that a divided heart leads a nation astray. Yet through Elijah&rsquo;s witness on Carmel its enduring call still sounds: stop limping between two opinions, and follow the one true God with an undivided heart.
          </p>
        </div>
      </main>
    </div>
  );
}
