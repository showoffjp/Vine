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
  "The Man of God and the Altar",
  "The Old Prophet's Deception",
  "Judgment on the Road",
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
    heading: "Overview of 1 Kings 13",
    reference: "1 Kings 13:1&ndash;34",
    paragraphs: [
      "First Kings chapter 13 is one of the most solemn and strange narratives in all the historical books, a haunting meditation on the seriousness of obeying the word of God exactly. It follows hard upon the account of Jeroboam&rsquo;s great sin, the golden calves set up at Bethel and Dan, and it brings into that scene of idolatry an unnamed man of God from Judah, sent by the word of the Lord to cry out against the altar. What unfolds is a story of prophecy and sign, of obedience and disobedience, of deception and judgment, told with a stark economy that leaves the reader trembling at the weight of God&rsquo;s word.",
      "The opening section recounts how the man of God from Judah confronts Jeroboam at the altar in Bethel (vv.1&ndash;10). He prophesies that a future king of the house of David, Josiah by name, will one day defile that very altar, and he gives a sign, declaring that the altar will be torn apart and its ashes poured out. When the king stretches out his hand to seize the prophet, his hand withers and dries up, and the altar is split, just as the sign had foretold. At the prophet&rsquo;s prayer the king&rsquo;s hand is restored, yet the man of God refuses all reward and hospitality.",
      "The central section turns to the old prophet of Bethel, who hears of these things and rides out after the man of God (vv.11&ndash;19). Finding him resting under an oak, he invites him home to eat, and when the man of God repeats the Lord&rsquo;s prohibition, the old prophet lies, claiming that an angel had spoken to him by the word of the Lord, commanding that the man of God be brought back. The text bluntly records, &ldquo;But he lied to him,&rdquo; and the man of God, trusting this false word over the clear command he had received, goes back and eats and drinks in the old prophet&rsquo;s house.",
      "The closing section records the swift and sobering judgment that follows (vv.20&ndash;32). As they sit at the table, the word of the Lord comes, ironically, to the very old prophet who had deceived him, declaring that because the man of God disobeyed, his body would not come to the tomb of his fathers. On the road a lion meets him and kills him, yet stands beside the body without devouring it or harming the donkey, a clear sign that this is divine judgment and not mere accident. The old prophet buries him with mourning, and the chapter ends by noting that Jeroboam did not turn from his evil way.",
      "Throughout the chapter the word of the Lord is the true and terrible protagonist, a word that strikes the altar, withers the hand, foretells a king three centuries before his birth, and finally falls in judgment upon the prophet who disobeyed it. The narrative refuses to soften the lesson it teaches, that the command of God is not to be set aside by any new and contradicting revelation, however plausibly it may be delivered. Even a genuine prophet, having heard the voice of God directly, must not exchange that clear word for the persuasive lie of another.",
      "Read as a whole, 1 Kings 13 stands as a sober warning planted in the heart of the account of Israel&rsquo;s apostasy. It shows the power of God&rsquo;s prophetic word to confront kings and overturn altars, and at the same time the deadly seriousness with which that word must be obeyed by those who bear it. The chapter closes with the chilling note that Jeroboam, having seen the altar split and his own hand restored, still did not turn from his evil way, so that this thing became sin to his house, to cut it off and destroy it from the face of the earth.",
    ],
  },
  {
    id: "The Man of God and the Altar",
    heading: "The Man of God Confronts the Altar",
    reference: "1 Kings 13:1&ndash;10",
    paragraphs: [
      "&ldquo;And behold, a man of God came out of Judah by the word of the Lord to Bethel. Jeroboam was standing by the altar to make offerings&rdquo; (13:1). The scene opens with the king himself standing by the false altar he had raised, playing the part of priest in his own counterfeit worship. Into this moment of brazen idolatry the Lord sends an unnamed man of God from Judah, the southern kingdom where the true temple stood, to bear his word against the apostasy of the north.",
      "&ldquo;And the man cried against the altar by the word of the Lord and said, &lsquo;O altar, altar, thus says the Lord: Behold, a son shall be born to the house of David, Josiah by name, and he shall sacrifice on you the priests of the high places who make offerings on you, and human bones shall be burned on you&rsquo;&rdquo; (13:2). The prophet addresses not the king but the altar itself, and utters a prophecy of astonishing specificity, naming Josiah, a king who would not be born for some three hundred years, who would one day defile this altar utterly.",
      "&ldquo;And he gave a sign the same day, saying, &lsquo;This is the sign that the Lord has spoken: Behold, the altar shall be torn down, and the ashes that are on it shall be poured out&rsquo;&rdquo; (13:3). To confirm the distant prophecy, the man of God offers a present sign, a pledge given in the immediate moment that the far-off word will surely come to pass. The torn altar and the spilled ashes will be the seal upon the promise concerning Josiah, a visible token of the certainty of God&rsquo;s word.",
      "&ldquo;And when the king heard the saying of the man of God, which he cried against the altar at Bethel, Jeroboam stretched out his hand from the altar, saying, &lsquo;Seize him.&rsquo; And his hand, which he stretched out against him, dried up, so that he could not draw it back to himself&rdquo; (13:4). The king answers the word of God with the violence of command, but his outstretched hand is struck and withered, frozen in the very gesture of rebellion. The instrument of his fury becomes the sign of his helplessness before the Lord.",
      "&ldquo;The altar also was torn down, and the ashes poured out from the altar, according to the sign that the man of God had given by the word of the Lord&rdquo; (13:5). In the same moment the altar itself is split apart and its ashes scattered upon the ground, exactly as the prophet had foretold. The sign is fulfilled before the eyes of all, a public and undeniable demonstration that the word spoken against the altar carries the full authority of God.",
      "&ldquo;And the king said to the man of God, &lsquo;Entreat now the favor of the Lord your God, and pray for me, that my hand may be restored to me.&rsquo; And the man of God entreated the Lord, and the king&rsquo;s hand was restored to him and became as it was before&rdquo; (13:6). The proud king is humbled to plead for mercy, and the prophet, in compassion, intercedes for him. The hand is healed, yet the healing brings no true repentance, for Jeroboam will soon return to his evil way as though nothing had been shown him.",
      "&ldquo;And the king said to the man of God, &lsquo;Come home with me, and refresh yourself, and I will give you a reward.&rsquo; And the man of God said to the king, &lsquo;If you give me half your house, I will not go in with you&rsquo;&rdquo; (13:7&ndash;8). The king offers hospitality and gift, but the man of God refuses utterly, for the Lord had commanded him, &ldquo;You shall neither eat bread nor drink water nor return by the way that you came&rdquo; (13:9). So he departs by another road, a striking confrontation closed by a remarkable prophecy that would be fulfilled three centuries later.",
    ],
  },
  {
    id: "The Old Prophet's Deception",
    heading: "The Old Prophet's Deception",
    reference: "1 Kings 13:11&ndash;19",
    paragraphs: [
      "&ldquo;Now an old prophet lived in Bethel. And his sons came and told him all that the man of God had done that day in Bethel&rdquo; (13:11). The narrative introduces a second figure, an old prophet dwelling in Bethel itself, in the very seat of Jeroboam&rsquo;s idolatry. His sons report to him the wonders of the day, the cry against the altar, the withered and restored hand, the torn altar and scattered ashes, and the refusal of the man of God to eat or drink in that place.",
      "&ldquo;And their father said to them, &lsquo;Which way did he go?&rsquo;... And he said to his sons, &lsquo;Saddle the donkey for me.&rsquo; So they saddled the donkey for him, and he mounted it&rdquo; (13:12&ndash;13). The old prophet sets out in pursuit, riding after the man of God along the road he had taken. Whether from curiosity, admiration, or some darker motive, he is determined to overtake the stranger from Judah and bring him back to his house.",
      "&ldquo;And he went after the man of God and found him sitting under an oak. And he said to him, &lsquo;Are you the man of God who came from Judah?&rsquo; And he said, &lsquo;I am.&rsquo;&rdquo; (13:14). He finds the man of God resting beneath an oak, weary perhaps from his journey, and confirms his identity. Then he extends the invitation that the king had already offered and been refused: &ldquo;Come home with me and eat bread.&rdquo;",
      "&ldquo;And he said, &lsquo;I may not return with you, or go in with you, neither will I eat bread nor drink water with you in this place, for it was said to me by the word of the Lord, You shall neither eat bread nor drink water there&rsquo;&rdquo; (13:16&ndash;17). The man of God repeats the prohibition faithfully, holding firm to the clear command he had received. His resolve before the old prophet appears no less than his resolve before the king, and for a moment it seems that nothing will move him from the word of the Lord.",
      "&ldquo;And he said to him, &lsquo;I also am a prophet as you are, and an angel spoke to me by the word of the Lord, saying, Bring him back with you into your house that he may eat bread and drink water.&rsquo; But he lied to him&rdquo; (13:18). Here is the heart of the deception. The old prophet claims a fresh revelation, an angelic word that supposedly overrides the original command. The narrator strips away all ambiguity with four blunt words, &ldquo;But he lied to him,&rdquo; exposing the falsehood for what it is.",
      "&ldquo;So he went back with him and ate bread in his house and drank water&rdquo; (13:19). Tragically, the man of God yields. Trusting the persuasive claim of a fellow prophet over the clear command he had received directly from God, he turns back, enters the house, and eats and drinks in the place forbidden to him. The disobedience is complete, and the reader senses at once that it cannot pass without consequence.",
      "This sober scene stands as a lasting warning to every servant of God. Even a genuine word from the Lord, plainly heard and rightly understood, must not be overturned by a contradicting new revelation, however plausibly it may be delivered or by whatever respected voice it may come. The man of God had the truth in his own mouth, yet he exchanged it for a lie dressed in the language of prophecy, and in so doing he set his face toward judgment on the road.",
    ],
  },
  {
    id: "Judgment on the Road",
    heading: "Judgment on the Road",
    reference: "1 Kings 13:20&ndash;34",
    paragraphs: [
      "&ldquo;And as they sat at the table, the word of the Lord came to the prophet who had brought him back&rdquo; (13:20). In a turn of deep irony, the true word of the Lord now comes not to the disobedient man of God but to the very prophet who had deceived him. The lying mouth becomes, for this moment, the channel of a genuine and terrible oracle, pronouncing judgment upon the guest seated at his own table.",
      "&ldquo;Because you have disobeyed the word of the Lord and have not kept the command that the Lord your God commanded you... your body shall not come to the tomb of your fathers&rdquo; (13:21&ndash;22). The sentence is clear and grave. The man of God had heard the command of God plainly, and had set it aside, and for this his body shall be denied burial with his fathers, a mark of dishonor and a sign of the seriousness with which God regards the obedience of those who bear his word.",
      "&ldquo;And after he had eaten bread and drunk, he saddled the donkey for the prophet whom he had brought back. And as he went away a lion met him on the road and killed him, and his body was thrown in the road&rdquo; (13:23&ndash;24). The judgment falls swiftly. On the very road of his disobedience the man of God is met by a lion and slain, his body left in the way, a stark and sudden end to the prophet who had so boldly confronted a king only hours before.",
      "&ldquo;The donkey stood beside it; the lion also stood beside the body. The lion had not eaten the body or torn the donkey&rdquo; (13:25&ndash;28). Here is the unmistakable sign that this is no mere accident of the wild. A lion that kills yet does not devour, that stands quietly beside both the body and the trembling donkey, is plainly under a restraining hand. The whole scene is ordered by God, a judgment carried out and at the same time marked as divine.",
      "&ldquo;And the prophet took up the body of the man of God and laid it on the donkey and brought it back... and he mourned over him, saying, &lsquo;Alas, my brother!&rsquo;&rdquo; (13:29&ndash;30). The old prophet retrieves the body and brings it into the city, mourning over the man he had deceived, burying him in his own grave. His grief is real, however tangled with his guilt, and his cry &ldquo;Alas, my brother&rdquo; carries the sorrow of one who knows his own part in the death he laments.",
      "&ldquo;And he charged his sons, saying, &lsquo;When I die, bury me in the grave in which the man of God is buried; lay my bones beside his bones. For the saying that he called out by the word of the Lord against the altar in Bethel... shall surely come to pass&rsquo;&rdquo; (13:31&ndash;32). The old prophet, now certain of the truth of the man&rsquo;s prophecy, desires that his own bones rest beside his, that they might be spared in the day when Josiah comes to defile the altar. Even the deceiver bows at last before the certainty of God&rsquo;s word.",
      "&ldquo;After this thing Jeroboam did not turn from his evil way, but made priests for the high places again from among all the people... and this became sin to the house of Jeroboam, so as to cut it off and to destroy it from the face of the earth&rdquo; (13:33&ndash;34). The chapter ends on its most haunting note. Despite the split altar, the withered and restored hand, and the death of the disobedient prophet, Jeroboam hardens his heart and continues in his idolatry, and that sin becomes the doom of his entire house, a final witness to the deadly seriousness of refusing the word of God.",
    ],
  },
];

const videoItems = [
  { videoId: "Bp4kTx9Hn2W", title: "The Man of God Confronts the Altar at Bethel" },
  { videoId: "Cq7bVx3Km8D", title: "The Prophecy of Josiah and the Withered Hand" },
  { videoId: "Dr2cWz5Ln6P", title: "The Old Prophet&rsquo;s Lie and the Disobedient Prophet" },
  { videoId: "Es9gBy1Cn4M", title: "Judgment on the Road and the Sin of Jeroboam" },
];

export default function FirstKings13GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => setLoaded(true), []);
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
            The First Book of Kings, Chapter 13
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A solemn and strange narrative of prophetic obedience and disobedience. A man of God from Judah cries out against Jeroboam&rsquo;s altar at Bethel, prophesying that a future king, Josiah, will defile it, and gives a sign &mdash; the altar splits and the king&rsquo;s hand withers and is healed. An old prophet lures the man of God to eat with him by lying that an angel had spoken, and for his disobedience the man of God is killed by a lion on the road. The chapter closes noting that Jeroboam did not turn from his evil way.
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
              Deepen your study of 1 Kings 13 through visual teaching on the man of God who confronts Jeroboam&rsquo;s altar at Bethel and foretells the coming of Josiah, the sign of the split altar and the withered and restored hand, the deception of the old prophet who lures the man of God back with a false claim of angelic revelation, and the swift and sobering judgment on the road that marks the deadly seriousness of obeying the word of God exactly.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Seriousness of God&rsquo;s Word</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Kings 13 stands as a sober warning planted in the heart of the account of Israel&rsquo;s apostasy. It shows the power of God&rsquo;s prophetic word to confront kings and overturn altars, and at the same time the deadly seriousness with which that word must be obeyed by those who bear it. Even a genuine word from God, plainly heard, must not be overturned by a contradicting new revelation, however plausibly delivered. The chapter ends with the chilling note that Jeroboam, having seen the altar split and his hand restored, still did not turn from his evil way.
          </p>
        </div>
      </main>
    </div>
  );
}
