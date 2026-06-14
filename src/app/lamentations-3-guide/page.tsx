"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Depths of Grief",
  "New Mercies Morning",
  "Lord Is My Portion",
  "Application",
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
    heading: "Overview of Lamentations 3",
    reference: "Lamentations 3:1&ndash;66",
    paragraphs: [
      "Lamentations 3 is one of the most unusual and powerful chapters in the entire Bible &mdash; a chapter that descends into the darkest imaginable grief and then, from the very floor of that grief, rises into one of Scripture&rsquo;s most majestic declarations of hope. It stands at the structural center of the five-chapter book of Lamentations, and its central position is deliberate: the turn from lament to trust that happens in verses 19&ndash;33 is the theological heart not just of the chapter but of the entire book.",
      "The book of Lamentations was written in the aftermath of the most catastrophic event in Israel&rsquo;s history: the destruction of Jerusalem by the Babylonian army in 586 BC. The Temple, the symbol of God&rsquo;s presence among his people, was burned to the ground. The Davidic king was blinded, his sons killed before his eyes, and he was carried in chains to Babylon. The city that God had promised to defend &mdash; the city where his name dwelled &mdash; lay in ruins. For those who survived, it seemed as though God himself had become their enemy.",
      "The book of Lamentations does not flinch from any of that. It is raw, visceral, theologically honest in a way that makes many readers uncomfortable. The poet does not attempt to minimize the suffering or to offer quick consolation. He says plainly that it is the Lord who has caused his grief (3:1), that God has driven him into darkness and not into light (3:2), that he has been made to dwell in darkness like the dead (3:6), that he has been walled in so that he cannot escape and his prayer shut out (3:8). These are not the words of someone who has not yet arrived at faith; they are the words of someone whose faith is being tested to its absolute limits.",
      "And yet it is exactly this man, in this condition, who turns in verse 21 and says, &ldquo;This I call to mind, and therefore I have hope.&rdquo; The turn does not happen because the circumstances have changed. Jerusalem is still in ruins when he speaks those words. The exile has not ended. The loss has not been restored. The hope that arises in Lamentations 3 is hope that reaches through the darkness rather than around it &mdash; hope grounded not in changed circumstances but in the unchanging character of God.",
      "Lamentations 3 is an acrostic poem, like Psalms 119 and 34. In the Hebrew, each letter of the alphabet begins three consecutive verses, making sixty-six verses in all. This careful literary structure is itself a kind of theological statement: even in the midst of total devastation, there is order, intentionality, and craft. The poet has not abandoned the discipline of his art; he has used it to hold his grief in a form that can be passed on and shared and prayed by others who find themselves in similar darkness.",
      "The chapter has been described as the soul of Lamentations, and it has functioned across centuries as the go-to text for believers who face suffering, loss, and the apparent silence or hostility of God. It validates the full range of human grief without encouraging despair. It models a movement from raw honest lament to remembered faithfulness to renewed hope &mdash; not as a quick fix but as the hard-won fruit of persisting in faith through darkness. Great Is Thy Faithfulness, one of the best-known hymns in the English language, draws its title and central imagery directly from verses 22 and 23 of this chapter.",
    ],
  },
  {
    id: "The Depths of Grief",
    heading: "The Depths of Grief: Affliction and the Man Who Has Seen",
    reference: "Lamentations 3:1&ndash;20",
    paragraphs: [
      "The chapter opens with a declaration of extremity: &ldquo;I am the man who has seen affliction under the rod of his wrath&rdquo; (3:1). The speaker &mdash; who throughout the chapter is an individual voice rather than the corporate voice of city or nation that we hear elsewhere in Lamentations &mdash; begins by establishing the gravity of what he has experienced. He is not speaking in generalities about suffering. He has seen it. He has lived it. The language of &ldquo;the man who has seen&rdquo; carries the weight of witness: this is testimony, not theory.",
      "The first twenty verses of Lamentations 3 are among the most searing descriptions of suffering in all of human literature. God has driven him into darkness (3:2). He has besieged the poet and surrounded him with bitterness and tribulation (3:5). He has walled him in so he cannot get out and has made his chains heavy (3:7). When the man cries for help, God shuts out his prayer (3:8). He has been turned aside from God&rsquo;s ways and been torn apart (3:11). God has bent his bow and set him as a target for the arrow (3:12). This is not gentle imagery. It is the language of a man who feels hunted by the God he once trusted.",
      "The imagery becomes even more intense. He is &ldquo;filled with bitterness&rdquo; and &ldquo;sated with wormwood&rdquo; (3:15) &mdash; wormwood being one of the bitterest of all plants, its name synonymous in Hebrew with anguish. His teeth have been made to grind on gravel (3:16), an image of something alien and painful and crushing introduced into the most basic act of nourishment. He has been bowed down in ashes (3:16). His soul is bereft of peace, and he has forgotten what happiness is (3:17). He says that his endurance has perished and so has his hope from the Lord (3:18).",
      "This last statement &mdash; &ldquo;my endurance has perished; so has my hope from the Lord&rdquo; &mdash; is crucial and often misread. The poet is not abandoning faith; he is reporting an interior experience of devastation that has stripped away every consolation he formerly depended on. It is the experience that mystics in the Christian tradition have called the &ldquo;dark night of the soul&rdquo; &mdash; a season in which God seems absent, in which the spiritual resources that once sustained are dry, in which hope itself seems to have died. The Bible includes this testimony because it is a real human experience, and because faith that has never been tested in this way has not been fully formed.",
      "Verse 19 marks a shift that is often missed because it looks superficially like more of the same: &ldquo;Remember my affliction and my wanderings, the wormwood and the gall!&rdquo; The man is calling to mind his suffering &mdash; &ldquo;My soul continually remembers it and is bowed down within me&rdquo; (3:20). But this act of remembering, it turns out, is not the final act. Something happens in the interval between verse 20 and verse 21 that is one of the most decisive moments in all of Lamentations. The man is bowed down under the weight of remembered suffering, and then &mdash; something turns.",
      "What is remarkable about these opening verses is that they honor rather than dismiss the experience of abandonment. The book of Lamentations in general, and chapter 3 in particular, makes clear that Scripture has room for the believer who feels that God has become an enemy, who has prayed and heard nothing, who has sought help and found none. The answer to that experience is not to be told that it is not real, or that those feelings are sinful, or that the person just needs to try harder. The answer is the turn that comes in verse 21 &mdash; a turn that is only possible because the darkness was taken seriously rather than dismissed.",
    ],
  },
  {
    id: "New Mercies Morning",
    heading: "New Every Morning: The Turn to Hope",
    reference: "Lamentations 3:21&ndash;33",
    paragraphs: [
      "&ldquo;But this I call to mind, and therefore I have hope.&rdquo; Three words change everything: &ldquo;But this I&rdquo; &mdash; or more literally, &ldquo;This I call to my heart.&rdquo; The turn from despair to hope in Lamentations 3:21 is not a turn caused by changed circumstances. It is a deliberate act of memory &mdash; a choice to call something to mind. The man in the ashes of Jerusalem, his prayer shut out and his hope apparently dead, makes a decision to remember. What he remembers is not his own faithfulness or strength. He remembers who God is.",
      "&ldquo;The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness&rdquo; (3:22&ndash;23). These verses have been set to music and sung by Christians around the world for generations, but they did not originate as a pleasant devotional sentiment. They were forged in the ruins of a destroyed city, in the soul of a man who had reason to believe that God&rsquo;s mercy had in fact ceased and his faithfulness had failed. That they ring true even in that context &mdash; that the man can say them with conviction while Jerusalem smolders &mdash; is what gives them their extraordinary power.",
      "The word translated &ldquo;steadfast love&rdquo; is the Hebrew &rsquo;chesed&rsquo; &mdash; one of the great covenant words of the Old Testament, variously translated as lovingkindness, steadfast love, loyal love, faithfulness, or mercy. &rsquo;Chesed&rsquo; is not a sentimental or occasional affection; it is the kind of love that belongs to covenant relationship and does not waver or withdraw even when the beloved has failed. To say that the &rsquo;chesed&rsquo; of the Lord &ldquo;never ceases&rdquo; is to make a claim about the character of God that no circumstance can overturn, because it is grounded not in what God does from moment to moment but in who God essentially is.",
      "The declaration that his mercies are &ldquo;new every morning&rdquo; is both poetic and profoundly practical. The image is of morning itself as a kind of divine renewal &mdash; each dawn bringing not yesterday&rsquo;s leftovers but a fresh supply of God&rsquo;s compassion. The word &ldquo;mercies&rdquo; here (&rsquo;rachamim&rsquo;) is related to the Hebrew word for &ldquo;womb&rdquo; and carries overtones of the deepest, most tender, most intimate kind of love &mdash; the love of a mother for the child she carried. God&rsquo;s compassion toward his people is not a distant, formal benevolence; it is a womb-love, a love that aches with tender concern.",
      "Verse 24 moves from declaration to personal appropriation: &ldquo;The Lord is my portion, says my soul, therefore I will hope in him.&rdquo; The word &ldquo;portion&rdquo; comes from the language of land allotment in ancient Israel &mdash; each tribe and family received their portion of the land as their inheritance. The Levites, however, received no land portion, because the Lord himself was their portion (Numbers 18:20). To say &ldquo;the Lord is my portion&rdquo; is to say: I have staked my life on him, he is my inheritance, my claim, my share in the world. Everything else may be taken, but this cannot be removed.",
      "What follows in verses 25&ndash;33 is a series of meditation on the goodness of waiting on God, on bearing the yoke of suffering with patient endurance, and on the profound theological truth that God does not afflict from the heart or grieve the children of men (3:33). This last statement is easily misunderstood. It does not mean that God does not cause suffering or is uninvolved in it &mdash; the opening verses of the chapter have already established the opposite. It means that affliction is not his deepest desire for his people; his &ldquo;heart,&rdquo; his ultimate intention, is steadfast love. Suffering is purposeful and temporary; mercy is fundamental and permanent.",
    ],
  },
  {
    id: "Lord Is My Portion",
    heading: "The Lord Is My Portion: Covenant Hope in Loss",
    reference: "Lamentations 3:24&ndash;66",
    paragraphs: [
      "The declaration &ldquo;the Lord is my portion&rdquo; (3:24) is the pivot on which the whole of Lamentations 3 turns. Having descended into the pit of affliction and having called to mind the steadfast love of God, the poet now makes a statement that is simultaneously confession of faith, act of will, and ground of hope. The Lord is not merely one resource among many &mdash; he is the portion, the singular inheritance, the sufficient supply. From this declaration flows everything else.",
      "The practical implications of this confession unfold in verses 25&ndash;39. Verse 25 establishes the basic posture: &ldquo;The Lord is good to those who wait for him, to the soul who seeks him.&rdquo; Waiting and seeking are not passive activities; they are disciplines of faith that orient the soul toward God in the midst of uncertainty. The man who has seen affliction has not been told to stop feeling his pain. He has been redirected to a source of help that is greater than his pain. He is to wait and seek, confident that God is good even when circumstances are not.",
      "Verse 26 continues: &ldquo;It is good that one should wait quietly for the salvation of the Lord.&rdquo; The word &ldquo;quietly&rdquo; here is significant. There is a kind of stillness that is not resignation but trust &mdash; a quietness that has learned that God&rsquo;s timing, however foreign to our urgency, is itself a form of faithfulness. The ability to wait quietly for God&rsquo;s salvation is not a natural human capacity; it is formed in us through repeated experiences of seeing God act in his own time rather than ours, and repeated discoveries that his timing, in retrospect, was better than ours would have been.",
      "Verses 27&ndash;30 turn surprisingly to the value of suffering borne in youth. &ldquo;It is good for a man that he bear the yoke in his youth.&rdquo; The poet is not romanticizing suffering or suggesting that suffering is intrinsically good. He is recognizing that hardship, when borne with faith, forms something in a person &mdash; a depth of character, a knowledge of God, a capacity for compassion toward others in pain &mdash; that prosperity cannot produce. The one who has sat alone in silence, who has put his mouth in the dust and endured blows on the cheek, has been given the possibility of a wisdom that ease cannot cultivate.",
      "The lament returns in verses 40&ndash;47, but now it is prayed from within the framework of covenant rather than outside it. &ldquo;Let us test and examine our ways, and return to the Lord&rdquo; (3:40). The communal voice re-enters, and with it a confession: &ldquo;We have transgressed and rebelled, and you have not forgiven&rdquo; (3:42). The suffering is not denied or minimized; the request for help is not abandoned. But now the lament is offered within the relationship, not as a rejection of it. The poet is not crying to a God he has forsaken; he is crying to the God who is his portion, even in the darkness.",
      "The chapter closes in verses 52&ndash;66 with one of the most striking personal testimonies in all of Lamentations. The man recalls a time when enemies hunted him like a bird, when he was cut off and cast into a pit, when water rose over his head and he thought he was finished. And then: &ldquo;I called on your name, O Lord, from the depths of the pit; you heard my plea, &lsquo;Do not close your ear to my cry for help!&rsquo; You came near when I called on you; you said, &lsquo;Do not fear!&rsquo;&rdquo; (3:55&ndash;57). God answered from the pit. He came near in the darkness. He said &ldquo;do not fear&rdquo; to the man who was sinking. That testimony becomes the ground for asking him to do it again.",
    ],
  },
  {
    id: "Application",
    heading: "Application: Finding Hope in the Midst of Grief",
    reference: "Lamentations 3 Applied",
    paragraphs: [
      "Lamentations 3 has perhaps no equal in Scripture as a guide to grieving with faith. It does not tell us to suppress our grief, to move on quickly, or to pretend that things are better than they are. It models, with unflinching honesty, the full weight of human suffering &mdash; and then it shows us what faith looks like inside that suffering, not as a shortcut around it. The first and most important application is simply permission: permission to grieve fully, to say hard things to God, to lament without immediately producing answers or consolation.",
      "The model of lament in Lamentations 3 is actually a form of faith rather than an expression of its absence. The man who cries &ldquo;He has driven me into darkness and not into light&rdquo; (3:2) is still addressing God. He has not walked away. He has not concluded that God is irrelevant or non-existent. He is in relationship, albeit a relationship that is currently marked by anguish and confusion. The willingness to bring our full experience to God, including the experience of feeling abandoned by him, is itself a form of trust &mdash; the trust that God is big enough to receive our worst feelings and strong enough not to be damaged by our most honest prayers.",
      "The second application concerns the mechanics of the turn in verse 21: &ldquo;this I call to mind, and therefore I have hope.&rdquo; The turn is not a feeling that overtook the man; it was a decision. He called something to mind. He exercised a form of holy memory &mdash; deliberately recalling what he knew about God&rsquo;s character rather than allowing his perception of God to be entirely determined by his present experience. This is a learnable practice: when circumstances shout that God has abandoned us, we can deliberately call to mind what we know is true about who God is. Not to deny the circumstances, but to interpret them through a larger frame.",
      "The declaration &ldquo;great is your faithfulness&rdquo; (3:23) is most powerfully spoken, not in seasons of ease, but in seasons of darkness &mdash; because it is in those seasons that the declaration costs something and means something. Anyone can say &ldquo;great is your faithfulness&rdquo; when everything is going well. But the person who says it from the ruins of Jerusalem, or from the ruins of a marriage, or from the bedside of a dying child, or from the emptiness of a life that has not turned out as hoped &mdash; that person has discovered a dimension of God&rsquo;s faithfulness that prosperity could never have revealed. The hymn of trust forged in the fire carries a different weight than the hymn sung on a pleasant Sunday morning.",
      "The concept of &ldquo;new mercies every morning&rdquo; (3:23) has a deeply practical application for the way we order our daily lives. Each morning is, according to this text, a fresh supply of God&rsquo;s compassion. Yesterday&rsquo;s failures, yesterday&rsquo;s sins, yesterday&rsquo;s griefs &mdash; they do not exhaust the supply. Each morning we wake into a new provision of &rsquo;chesed&rsquo; and &rsquo;rachamim&rsquo;. This does not mean that consequences are cancelled or that hard things do not persist. But it does mean that the resource available to face each day is renewed, not depleted, by the passage of time. Morning, in the theology of Lamentations 3, is a theological category as much as a temporal one.",
      "Finally, Lamentations 3 calls the church to be a community that can hold grief well &mdash; that does not rush past suffering to resolution, that does not offer easy answers to people in pain, that can sit with the one who is in the pit and say, &ldquo;The Lord came near when you called on him before; he will come near again.&rdquo; A community formed by Lamentations 3 knows how to weep with those who weep before it knows how to speak. It holds the memory of God&rsquo;s faithfulness as a resource not just for its own comfort but for the sustaining of those who cannot yet see past their darkness. This is what it means to live as a people who believe that great is the faithfulness of God &mdash; even when everything around us contradicts it.",
    ],
  },
];

const videoItems = [
  { videoId: "p8GDFPdaQZQ", title: "Lamentations 3 - Great Is Your Faithfulness Explained" },
  { videoId: "dLIabZc0O4c", title: "BibleProject - Book of Lamentations Overview" },
  { videoId: "h3k3q9tNBMs", title: "New Every Morning - Lamentations 3:22-23 Sermon on God's Steadfast Love" },
  { videoId: "B7S5VFJJ29s", title: "Hope in the Darkest Hour - Preaching Lamentations 3" },
];

export default function Lamentations3GuidePage() {
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
            Old Testament Poetry
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Lamentations 3 &mdash; Great Is Your Faithfulness
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            From the ruins of Jerusalem, the man who has seen affliction descends into the deepest darkness &mdash; and then turns to declare the steadfast love that never ceases and the mercies that are new every morning. A guide to grieving with faith and finding hope in the character of God.
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
            >
              {t}
            </button>
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

        <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {videoItems.map((v) => (
            <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId={v.videoId} title={v.title} />
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Great Is Your Faithfulness</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            The steadfast love of the Lord never ceases; his mercies never come to an end. They are new every morning. This is not a statement written from a comfortable armchair but from the rubble of a burned city, by a man who had seen affliction in its full weight &mdash; and who found, in the very depths of his despair, a faithfulness that circumstances could not destroy.
          </p>
        </div>
      </main>
    </div>
  );
}
