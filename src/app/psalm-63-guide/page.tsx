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
  "Thirsting in the Desert",
  "Satisfaction and Clinging",
  "Confidence Over Enemies",
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
    heading: "A Psalm of Longing in a Dry Land",
    reference: "Psalm 63",
    paragraphs: [
      "Psalm 63 carries one of the most evocative superscriptions in the Psalter: &ldquo;A psalm of David, when he was in the Desert of Judah.&rdquo; That single line frames everything that follows. We are reading the prayer of a man who is not in the comfort of the sanctuary but in the harsh, sun-scorched wilderness, where water is scarce and danger is near. Out of that physical hardship rises one of the most intense expressions of spiritual desire ever written: &ldquo;You, God, are my God, earnestly I seek you; I thirst for you, my whole being longs for you, in a dry and parched land where there is no water&rdquo; (vv.1&ndash;2).",
      "The psalm moves through a clear emotional arc. It opens in desperate thirst, with the soul fainting for God as the body faints for water. It rises to a confident expectation of satisfaction: &ldquo;My soul will be satisfied as with the richest of foods&rdquo; (v.5). It deepens into the quiet intimacy of meditation through &ldquo;the watches of the night&rdquo; (v.6), the believer clinging to God while God&rsquo;s right hand upholds him (v.8). Finally it turns outward and forward, to confidence that those who seek the psalmist&rsquo;s life will be destroyed, while the king rejoices in God and the mouths of liars are silenced (vv.9&ndash;11).",
      "What makes Psalm 63 so beloved across the centuries is the way it holds together longing and fulfillment. The same heart that confesses an aching thirst also testifies to being satisfied as with rich food. This is the great paradox of the life of faith: God is both the one we desperately seek and the one in whom we are already deeply content. Desire and satisfaction are not opposites here but two movements of a single love for God.",
      "The setting in the Judean wilderness is significant. Many readers connect it with David&rsquo;s flight from his son Absalom (2 Samuel 15&ndash;17), when David crossed the Kidron and went up the Mount of Olives weeping, or alternatively with his earlier years as a fugitive from Saul. Either way, this is a prayer forged in exile and hardship. It is precisely because David is cut off from the place of worship that his hunger for God&rsquo;s presence becomes so sharp. The absence of the sanctuary intensifies, rather than diminishes, his desire to behold God.",
      "The psalm has a long and honored place in Christian worship. From the earliest centuries the church appointed Psalm 63 for morning prayer, so that believers would begin each day by waking with the words &ldquo;earnestly I seek you&rdquo; on their lips. John Chrysostom records that it was a fixed part of the morning office, sung daily by the whole congregation. Its movement from darkness toward light, from thirst toward satisfaction, made it a natural prayer for the dawn.",
      "For the believer today, Psalm 63 speaks directly to the experience of spiritual dryness. There are seasons when God feels distant, when worship is difficult, when the soul seems parched. This psalm does not pretend such seasons away. Instead it teaches us to bring our very thirst to God as an act of worship, to seek him earnestly precisely when he seems far off, and to trust that the God who is sought in the desert is also the God who satisfies the soul with the richest of foods. It is, finally, one of the great psalms of desire &mdash; a hymn for everyone whose deepest longing is for God himself.",
    ],
  },
  {
    id: "Thirsting in the Desert",
    heading: "Thirsting for God in the Desert",
    reference: "Psalm 63:1&ndash;4",
    paragraphs: [
      "The psalm begins with a declaration of belonging before it voices its longing: &ldquo;You, God, are my God.&rdquo; David does not approach an unknown deity but the covenant Lord he already knows and possesses by faith. It is out of this settled relationship that the thirst arises. He does not seek God in order to make God his own; he seeks because God is already his own and therefore the one his whole being craves. The longing of the psalm is not the restlessness of doubt but the hunger of love.",
      "&ldquo;Earnestly I seek you&rdquo; renders a Hebrew verb that carries the sense of seeking at dawn, seeking early, seeking with the first energy of the day. The same root lies behind the noon and the word for dawn. To seek God earnestly is to make him the first business of the morning and the priority of the soul, turning to him before the demands of the day crowd in. David&rsquo;s seeking is not casual or occasional; it is the dedicated, sunrise pursuit of one whose heart is set on God above all things.",
      "The imagery of thirst is drawn straight from the surrounding wilderness. &ldquo;My whole being longs for you, in a dry and parched land where there is no water.&rdquo; In the Judean desert, thirst is not a metaphor but a daily reality, and the body&rsquo;s craving for water becomes a perfect picture of the soul&rsquo;s craving for God. The physical landscape mirrors the spiritual condition: just as the land is dry and cracked, so the soul without God is barren and faint. David lets the desert preach to him about his deepest need.",
      "From thirst David turns to memory and worship: &ldquo;I have seen you in the sanctuary and beheld your power and your glory&rdquo; (v.2). Even in the desert, far from the tent of meeting, he recalls what he has witnessed of God in the place of worship. The vision of God&rsquo;s power and glory sustains him in the wilderness. This is a vital pattern of faith: what we behold of God in seasons of nearness becomes the treasure we draw upon in seasons of dryness. Worship stores up a memory that feeds the soul in the desert.",
      "The center of these opening verses is a stunning confession of value: &ldquo;Because your love is better than life, my lips will glorify you&rdquo; (v.3). The Hebrew word translated &ldquo;love&rdquo; is hesed &mdash; God&rsquo;s steadfast, covenant-keeping, loyal love. David declares that this love is worth more than life itself. Life is the most precious thing a person naturally possesses, yet God&rsquo;s love outranks even that. This is not a denial of the goodness of life but a recognition that the love of God is the supreme good, the one treasure for which everything else may be surrendered.",
      "Because God&rsquo;s love is better than life, worship becomes the natural and inevitable response. &ldquo;I will praise you as long as I live, and in your name I will lift up my hands&rdquo; (v.4). The lifting of hands was the posture of prayer and surrender, of empty hands raised to be filled by God. Notice that this worship flows out of desperate need and supreme valuation. David does not wait until his circumstances improve to praise; he praises in the desert, because the worth of God&rsquo;s love does not depend on the comfort of his situation. Worship that is born in scarcity and rooted in the supreme value of God&rsquo;s steadfast love is worship that endures.",
    ],
  },
  {
    id: "Satisfaction and Clinging",
    heading: "Satisfaction and Clinging to God",
    reference: "Psalm 63:5&ndash;8",
    paragraphs: [
      "At the heart of the psalm comes one of its most remarkable images: &ldquo;My soul will be satisfied as with the richest of foods; with singing lips my mouth will praise you&rdquo; (v.5). The older translations speak of being satisfied &ldquo;as with marrow and fatness&rdquo; &mdash; the choicest, richest parts of a feast. David, who began the psalm fainting with thirst in a waterless land, now speaks of a soul filled to satisfaction as at a banquet. The contrast could not be sharper, and it reveals the deep logic of the psalm.",
      "This is the great paradox of Psalm 63: satisfaction in a place of scarcity. In the very wilderness where there is no water, David&rsquo;s soul feasts. The richness he describes is not the abundance of his circumstances but the abundance of God himself. God is the feast. When the soul finds its satisfaction in God, then even a desert becomes a banqueting table, and the believer can sing for joy in a place that offers nothing to the body. The hunger of verse one and the fullness of verse five are not contradictions; they are the testimony of a soul that has learned where its true food is found.",
      "The scene then shifts to the night: &ldquo;On my bed I remember you; I think of you through the watches of the night&rdquo; (v.6). The wilderness night, with its sleeplessness and its dangers, becomes an occasion for meditation rather than anxiety. The &ldquo;watches of the night&rdquo; were the divisions by which the night was measured, and David fills them not with worry but with the remembrance of God. Sleeplessness, so often the enemy of peace, is here turned into an extended time of communion. The wakeful hours become hours of worship.",
      "The fruit of this nighttime meditation is song: &ldquo;Because you are my help, I sing in the shadow of your wings&rdquo; (v.7). The image of the shadow of God&rsquo;s wings evokes both the wings of the cherubim over the ark and the tender picture of a bird sheltering its young. In the wilderness, exposed to enemies and the elements, David finds covering in God. The shadow that protects him is not the shade of a desert rock but the overshadowing presence of the Lord himself. Where God is the shelter, the heart can sing even in the open desert.",
      "Then comes the verse that has shaped countless Christian descriptions of the life of faith: &ldquo;My soul clings to you; your right hand upholds me&rdquo; (v.8). Here is a beautiful mutuality. The believer clings, holding fast to God with all the strength of desire and dependence; and at the same time God&rsquo;s right hand upholds, doing the real work of keeping. We hold to him, but it is his grip that holds us. Our clinging is genuine and necessary, yet our security rests not in the strength of our grasp but in the firmness of his.",
      "Taken together, verses 5 through 8 offer a model of contemplative dependence. They show a soul that has learned to feast on God in want, to meditate on God in sleeplessness, to sing under the shadow of his wings, and to cling to him while resting in his upholding hand. This is the posture the psalm commends to every believer: not a passive waiting, but an active reaching after God that is met and sustained by his greater hold upon us. To cling to God who upholds us is the whole secret of perseverance in the desert seasons of the soul.",
    ],
  },
  {
    id: "Confidence Over Enemies",
    heading: "Confidence Over Enemies",
    reference: "Psalm 63:9&ndash;11",
    paragraphs: [
      "The psalm takes a sudden and striking turn in its final verses. Having dwelt on intimate longing and quiet trust, David now lifts his eyes to those who oppose him: &ldquo;Those who want to kill me will be destroyed; they will go down to the depths of the earth&rdquo; (vv.9&ndash;10). The desert was a place of real danger, and David&rsquo;s enemies were not abstractions but armed men seeking his life. The tenderness of the psalm does not mean naivety about the reality of evil.",
      "The language of judgment is vivid and unsparing: those who seek his ruin &ldquo;will be given over to the sword and become food for jackals&rdquo; (v.10). In the ancient world, to be left unburied as carrion for the scavengers of the wilderness was the most shameful of ends. David expresses a settled confidence that those who set themselves against God&rsquo;s anointed and against God&rsquo;s purposes will not finally prevail but will be swept away. Their plotting in the dark will come to nothing.",
      "It is worth pausing on how the psalm holds two things together that we are often tempted to separate. The very same psalm that sings of clinging to God under the shadow of his wings also speaks with stark confidence of the destruction of the wicked. Tender intimacy with God and firm trust in God&rsquo;s justice are not in tension here; they are two sides of one faith. The God who shelters the faithful is also the God who will not allow evil to triumph forever. To love God truly is to long for the day when his righteousness sets all things right.",
      "The final verse turns to the king and to the joy of all who belong to God: &ldquo;But the king will rejoice in God; all who swear by God will glory in him, while the mouths of liars will be silenced&rdquo; (v.11). David, the anointed king, models the response of faith: not vengeance taken into his own hands, but rejoicing in God. The reference to the king may also point beyond David to the greater King, the Messiah, whose kingdom is established in righteousness and whose enemies are finally put to silence.",
      "The silencing of the mouths of liars is a quiet but powerful note on which to end. Throughout David&rsquo;s trials, much of his suffering came from slander and false accusation &mdash; the lies that turned hearts against him and drove him into the wilderness. The psalm closes with the confidence that lies will not have the last word. The voices that spread falsehood will be stopped, and truth, which belongs to God, will stand. For all who are wounded by the deceit of others, this is a profound comfort.",
      "Psalm 63 endures because it refuses to flatten the life of faith into a single mood. It teaches us to thirst and to feast, to lie awake in worship and to cling while being upheld, to know the tenderness of God&rsquo;s love and the certainty of his justice. For the believer in a season of spiritual dryness, it offers a pattern of prayer: bring your thirst to God, remember what you have seen of his glory, count his love better than life, and rest in the hand that holds you. Whether prayed at dawn through the centuries of the church or whispered in a personal wilderness, this psalm leads the longing heart home to the God who alone can satisfy it.",
    ],
  },
];

const videoItems = [
  { videoId: "qZ7n4Kx2Vd0", title: "Psalm 63 - Thirsting for God in a Dry Land" },
  { videoId: "Lm0pQ3R7sWh", title: "BibleProject - The Book of Psalms Overview" },
  { videoId: "Bp9wK4Tz1Hq", title: "Earnestly I Seek You - A Study of Psalm 63" },
  { videoId: "Yc6dR2Lm8Vn", title: "Satisfied as with Rich Food - Longing for God" },
];

export default function Psalm63GuidePage() {
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
            Psalms Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 63
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A psalm of David in the Desert of Judah &mdash; a soul thirsting for God in a dry and parched land, satisfied as with the richest of foods, clinging to God through the watches of the night, and confident in God&rsquo;s justice over every enemy.
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
              Deepen your study of Psalm 63 through visual teaching on thirsting for God in the desert, the satisfaction of the soul, clinging to God through the night, and confidence in God&rsquo;s justice.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Your Love Is Better Than Life</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Psalm 63 teaches the longing heart to seek God earnestly at the dawn, to count his steadfast love more precious than life itself, and to feast on him even in a waterless land. Its enduring call still sounds: cling to the God who upholds you, and let your soul be satisfied in him alone.
          </p>
        </div>
      </main>
    </div>
  );
}
