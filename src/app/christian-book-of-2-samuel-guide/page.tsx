"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "David Becomes King",
  "The Davidic Covenant",
  "David and Bathsheba",
  "The Consequences of Sin",
  "A King After Gods Heart",
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
    id: "David Becomes King",
    heading: "David Becomes King",
    reference: "2 Samuel 1&ndash;6",
    paragraphs: [
      "The Second Book of Samuel opens in the shadow of loss. Word reaches David of the deaths of Saul and Jonathan on Mount Gilboa, and his response is not triumph but grief. Though Saul had hunted him for years, David composes a lament of aching beauty for both the king and his beloved friend, with the refrain &ldquo;How the mighty have fallen!&rdquo; (1:19). His sorrow reveals a heart free of vengeance, honoring even the man who had been his enemy as the LORD&rsquo;s anointed.",
      "David does not seize the throne but waits on God&rsquo;s timing. He is first anointed king over Judah at Hebron, while the house of Saul, through Abner and Saul&rsquo;s son Ish-bosheth, clings to power over the northern tribes. There follows a long and painful struggle between the house of David and the house of Saul, in which David grows steadily stronger and his rivals weaker, until at last the path to the throne of all Israel lies open before him.",
      "When Ish-bosheth and Abner are gone, the elders of all the tribes come to David at Hebron and anoint him king over all Israel (ch. 5). At thirty years old David begins to reign, and he will reign forty years in all. The shepherd boy of Bethlehem, anointed in obscurity by Samuel, now sits enthroned over the united nation &mdash; a vivid demonstration that what God promises he brings to pass, though often through long years of waiting and testing.",
      "One of David&rsquo;s first acts as king of all Israel is strategic and symbolic: he captures the fortress city of Jerusalem from the Jebusites and makes it his capital, the City of David. Centrally located and belonging to no single tribe, Jerusalem becomes the political and spiritual heart of the kingdom. From this city God&rsquo;s purposes will radiate, and to it the hopes of Israel &mdash; and ultimately of the world &mdash; will be bound for all of redemptive history.",
      "David then turns his heart to worship, resolving to bring the ark of the covenant &mdash; the symbol of God&rsquo;s presence among his people &mdash; up to Jerusalem. An early attempt ends in tragedy when Uzzah touches the ark and dies, teaching that God&rsquo;s holiness must be approached on his terms, not according to human convenience. Chastened, David later brings the ark up properly, with the Levites bearing it as God had commanded, amid sacrifice and rejoicing.",
      "As the ark enters the city, David dances before the LORD with all his might, girded in a linen ephod, leading the whole house of Israel in shouting and the sound of the trumpet (6:14). His wife Michal despises him for it, thinking such abandon beneath a king&rsquo;s dignity, but David answers that he will be even more undignified than this, for he dances before the LORD who chose him. Here is a king whose greatness lies in unembarrassed, wholehearted worship.",
      "These opening chapters portray David at his best: patient under God&rsquo;s timing, generous toward his enemies, devoted to God&rsquo;s presence, and unashamed in his praise. The kingdom is united, the capital established, the ark restored to its place at the center of national life. It is a season of blessing and ascent &mdash; the high point from which the rest of the book will descend, making the king&rsquo;s coming fall all the more sobering by contrast.",
    ],
  },
  {
    id: "The Davidic Covenant",
    heading: "The Davidic Covenant",
    reference: "2 Samuel 7",
    paragraphs: [
      "At the summit of David&rsquo;s reign comes a moment that ranks among the most important in all of Scripture. Settled in his palace of cedar, with the kingdom at peace, David is troubled by an apparent imbalance: he dwells in a house of cedar while the ark of God remains in a tent. He resolves to build a permanent house &mdash; a temple &mdash; for the LORD, and the prophet Nathan at first encourages him, saying the LORD is with him.",
      "But that night the word of the LORD comes to Nathan with a great reversal. David will not build God a house; instead, God will build David a &ldquo;house.&rdquo; Through Nathan the LORD recounts how he took David from the pasture, from following the sheep, to be prince over Israel, and has been with him wherever he went. The initiative, God makes clear, belongs entirely to him &mdash; David&rsquo;s greatness is a gift, not an achievement, and so too will be what follows.",
      "The promise unfolds in a magnificent play on the word &ldquo;house.&rdquo; David wished to build God a house of stone; God instead promises to build David a house of dynasty &mdash; an enduring royal line. God will raise up David&rsquo;s offspring after him and establish his kingdom; that son will build the house for God&rsquo;s name, and God will establish the throne of his kingdom. The temple David longed to build will be raised by his son Solomon, but the deeper structure God is building is a lineage.",
      "At the heart of the covenant stands a promise of breathtaking scope: &ldquo;Your house and your kingdom shall be made sure forever before me. Your throne shall be established forever&rdquo; (7:16). God binds himself to David&rsquo;s line with a steadfast love that will not be removed as it was from Saul. Even when David&rsquo;s sons sin, God will discipline them, but he will not take his covenant love away. This unconditional commitment becomes a bedrock of Israel&rsquo;s hope.",
      "David&rsquo;s response is one of humble wonder. He goes in and sits before the LORD and prays, &ldquo;Who am I, O Lord GOD, and what is my house, that you have brought me thus far?&rdquo; He marvels that God should speak of his servant&rsquo;s house for a great while to come, and he worships the God who has revealed such grace. The proper answer to covenant promise is not pride but awe &mdash; gratitude that God should stoop to bless so freely.",
      "The Davidic covenant becomes one of the great rivers of biblical theology, carrying the messianic hope forward through the centuries. When kings fail and the throne seems lost, the prophets keep returning to this promise of an everlasting throne from David&rsquo;s line. The longing for a coming Son of David, an anointed King who would reign forever, is rooted here, in the word God spoke to a shepherd-turned-king who only wanted to build God a house.",
      "The New Testament announces the fulfillment. The angel tells Mary that her son will be given &ldquo;the throne of his father David,&rdquo; and that &ldquo;of his kingdom there will be no end.&rdquo; Jesus is the Son of David whose throne truly is established forever, the King in whom this ancient covenant finds its yes and amen. Second Samuel chapter seven thus reaches far beyond its own page, opening onto the everlasting kingdom of Christ.",
    ],
  },
  {
    id: "David and Bathsheba",
    heading: "David and Bathsheba",
    reference: "2 Samuel 11",
    paragraphs: [
      "The eleventh chapter of 2 Samuel marks the great fault line of the book and of David&rsquo;s life. It opens with a telling detail: &ldquo;in the spring of the year, the time when kings go out to battle,&rdquo; David sent Joab and the army to fight, but David remained at Jerusalem. The king who once ran toward Goliath now lingers idle at home, away from the post and the duty that were his. Sin so often finds its opening where calling is abandoned.",
      "From the roof of his house David sees a woman bathing, very beautiful, and he inquires after her. She is Bathsheba, the wife of Uriah the Hittite, one of David&rsquo;s loyal soldiers away at war. Knowing she is another man&rsquo;s wife, David sends for her and lies with her. A single glance, indulged rather than resisted, gives way to lust, and lust to action. The man after God&rsquo;s own heart commits adultery, abusing the very power God had entrusted to him.",
      "When word comes that Bathsheba is pregnant, David does not repent but schemes to cover his sin. He summons Uriah home from the front, hoping he will sleep with his wife and so appear to be the child&rsquo;s father. But Uriah, in his integrity, refuses to enjoy the comforts of home while his comrades and the ark are in the field. The faithfulness of the soldier stands in painful contrast to the faithlessness of the king he serves.",
      "His scheme thwarted by Uriah&rsquo;s honor, David descends further. He sends Uriah back to the battle carrying his own death warrant: a letter to Joab instructing that Uriah be placed where the fighting is fiercest and then abandoned, so that he will be struck down and die. Joab obeys, Uriah falls, and David takes Bathsheba as his wife. Adultery has now bred deceit and murder &mdash; one sin concealed by another in a deepening spiral.",
      "The narrative is unflinching and sobering. It records the failure of God&rsquo;s chosen king in all its ugliness, refusing to airbrush the hero. Here is the man whose psalms have led God&rsquo;s people in worship for three thousand years, the giant-slayer, the recipient of the everlasting covenant &mdash; and he is capable of adultery, betrayal, and cold-blooded murder when he abandons his post and indulges his desires. No one stands so secure that he cannot fall.",
      "The chapter ends with a verdict that hangs over everything that follows: &ldquo;But the thing that David had done displeased the LORD&rdquo; (11:27). For a time David may imagine the matter buried, the cover-up complete, the scandal contained. But God has seen, and God is not mocked. The quiet weight of that final sentence sets the stage for the reckoning to come and reminds every reader that nothing is hidden from the eyes of the One to whom we must give account.",
      "David and Bathsheba stands as one of Scripture&rsquo;s most searching mirrors. It warns against idleness and the unguarded eye, against the abuse of power and the deepening lies that sin demands. Yet it is told not to crush but to caution &mdash; for the same David who falls so far in this chapter will, in the next, be broken open in repentance. The depth of his sin sets in relief the depth of the grace that will meet it.",
    ],
  },
  {
    id: "The Consequences of Sin",
    heading: "The Consequences of Sin",
    reference: "2 Samuel 12",
    paragraphs: [
      "Into David&rsquo;s false peace God sends the prophet Nathan with a story (ch. 12). He tells of a rich man with great flocks who, to feed a traveler, spared his own and instead took the one little ewe lamb of a poor man &mdash; a lamb the poor man had raised like a daughter, that ate from his plate and lay in his arms. David burns with anger at the injustice and declares that the man deserves to die and must restore fourfold.",
      "Then Nathan turns the blade: &ldquo;You are the man!&rdquo; (12:7). With four devastating words the prophet strips away every covering. David, given so much by God &mdash; the kingdom, the wives, the throne &mdash; had despised the word of the LORD to seize what was not his and to kill the man he had wronged. The parable had drawn out David&rsquo;s own sense of justice, only to turn it upon himself. He stands condemned by his own verdict.",
      "Here the road forks decisively between David and his predecessor Saul. Confronted in his sin, Saul had made excuses and shifted blame; David, confronted, simply confesses: &ldquo;I have sinned against the LORD.&rdquo; There is no defense, no minimizing, no scapegoat. His repentance is immediate and unguarded, the response of a heart that, for all its grievous failure, still belongs to God and still trembles at his word.",
      "From the depths of this season comes Psalm 51, David&rsquo;s great prayer of contrition, traditionally tied to Nathan&rsquo;s confrontation. &ldquo;Have mercy on me, O God, according to your steadfast love&hellip; Create in me a clean heart, O God, and renew a right spirit within me.&rdquo; He pleads not for the restoring of his reputation but for the cleansing of his soul; he asks not to escape consequence but to be made new. It is one of Scripture&rsquo;s deepest expressions of penitence.",
      "Nathan announces that the LORD has put away David&rsquo;s sin; he will not die. Grace meets him fully and freely &mdash; the guilt is forgiven. Yet forgiveness does not erase consequence. The same word that pardons also declares that the child born of the union will die, and that, because David gave occasion to the enemies of the LORD to blaspheme, trouble will not depart from his house. Sin forgiven can still leave a long shadow of sorrow.",
      "The consequences unfold with grievous weight. The child sickens and dies despite David&rsquo;s fasting and prayer. And the sword that David brought into another man&rsquo;s house now will not depart from his own: &ldquo;the sword shall never depart from your house&rdquo; (12:10). The remainder of 2 Samuel chronicles the bitter harvest &mdash; violence, betrayal, and rebellion among David&rsquo;s own children &mdash; the rippling aftermath of a king&rsquo;s great sin.",
      "Yet this chapter holds the gospel in seed. It shows that the way back to God is not denial or self-justification but honest confession, and that God&rsquo;s steadfast love is deeper than our sin. David is forgiven not because his sin was small but because God&rsquo;s mercy is great. The distinction between Saul and David is not that one sinned and the other did not, but that one hardened his heart and the other broke it open before the LORD.",
    ],
  },
  {
    id: "A King After Gods Heart",
    heading: "A King After God&rsquo;s Heart",
    reference: "2 Samuel 13&ndash;24",
    paragraphs: [
      "The latter chapters of 2 Samuel show the sword fulfilling Nathan&rsquo;s word within David&rsquo;s own family. Tragedy multiplies: the violation of Tamar, the murder of Amnon by Absalom, and then Absalom&rsquo;s long-nursed bitterness ripening into open revolt. The consequences of David&rsquo;s sin are not abstract; they play out in the anguish of a household torn apart, a sobering picture of how the seeds of sin bear fruit across a lifetime and a family.",
      "Absalom&rsquo;s rebellion drives David from Jerusalem, forced to flee his own capital as his handsome, charismatic son steals the hearts of Israel and seizes the throne. David crosses the Kidron weeping, climbing the Mount of Olives with his head covered and barefoot &mdash; a king in exile, humbled and grieving. Even here, however, his trust in God persists; he submits to the LORD&rsquo;s hand, willing to be restored only if God wills it.",
      "When the decisive battle comes and Absalom is killed against David&rsquo;s express command to deal gently with the young man, the king&rsquo;s response is not relief but inconsolable grief. &ldquo;O my son Absalom, my son, my son Absalom! Would I had died instead of you, O Absalom, my son, my son!&rdquo; (18:33). It is the cry of a father whose love outruns even the wrong done to him &mdash; and an echo, however faint, of a Father&rsquo;s heart toward rebellious children.",
      "The portrait that emerges across the whole book is of a deeply flawed yet genuinely faithful man. David is no idealized saint; he is an adulterer, a deceiver, a man whose sins wreak havoc. Yet through every failure his heart keeps returning to God. He worships, he repents, he submits, he trusts. The title given him &mdash; a man after God&rsquo;s own heart &mdash; describes not a sinless man but one whose fundamental orientation, even through grievous falls, is toward the LORD.",
      "The contrast with Saul remains the interpretive key. Both kings sinned, but Saul&rsquo;s heart hardened under rebuke while David&rsquo;s broke in contrition. Saul clung to his crown and reputation; David clung, finally, to the mercy of God. It is this difference &mdash; not the absence of sin but the presence of true repentance &mdash; that sets David apart and makes his messy, painful story a lasting school of grace for every believer who falls and gets up again.",
      "The book closes with David&rsquo;s song and last words exalting the LORD as his rock and his salvation, and with an account of a final sin &mdash; the census &mdash; that ends, fittingly, at a threshing floor in Jerusalem where David builds an altar and refuses to offer to God what costs him nothing. The future site of the temple is thus marked by sacrifice and mercy, the meeting place of human failure and divine grace that has defined David&rsquo;s whole reign.",
      "Above all, David&rsquo;s life points beyond itself. For all his greatness, he could not be the everlasting king his own covenant promised; his sins and sorrows cry out for a better Son of David &mdash; a sinless King who would reign in perfect righteousness and never fall. Second Samuel thus leaves its readers looking forward, past the flawed shepherd-king of Bethlehem to the One born in that same town, Jesus the true Son of David, whose throne is established forever.",
    ],
  },
];

const videoItems = [
  { videoId: "G3Ig5x1Y_ro", title: "BibleProject - 2 Samuel Overview" },
  { videoId: "NiVpvgRpL_w", title: "The Davidic Covenant - 2 Samuel 7" },
  { videoId: "JmHo3Oh4yQc", title: "David and Bathsheba - Sin and Repentance" },
];

export default function ChristianBookOf2SamuelGuidePage() {
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
            The Book of 2 Samuel
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The reign of David &mdash; his rise to the throne and the ark brought to Jerusalem, the everlasting Davidic covenant, his fall with Bathsheba and his repentance, the consequences of sin in his house, and the portrait of a flawed king after God&rsquo;s own heart.
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
              Deepen your study of 2 Samuel through visual teaching on the structure of the book, the everlasting Davidic covenant, and the account of David&rsquo;s sin and repentance.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Throne Established Forever</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Second Samuel holds together the glory and the grief of David&rsquo;s reign &mdash; the everlasting covenant and the grievous fall, the dancing before the ark and the weeping for a son. Through a flawed yet repentant king it points beyond itself to a greater Son of David, Jesus, whose throne is truly established forever.
          </p>
        </div>
      </main>
    </div>
  );
}
