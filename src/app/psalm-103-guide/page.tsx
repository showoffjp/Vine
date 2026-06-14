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
  "Bless the Lord O My Soul",
  "Forget Not All His Benefits",
  "Slow to Anger Abounding in Love",
  "As Far as East from West",
  "As a Father Shows Compassion",
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
    id: "Bless the Lord O My Soul",
    heading: "Bless the Lord O My Soul",
    reference: "Psalm 103:1&ndash;2",
    paragraphs: [
      "Psalm 103, a psalm of David, is one of the great anthems of praise in all of Scripture, and it begins not with a command to others but with a summons to himself: &ldquo;Bless the Lord, O my soul, and all that is within me, bless his holy name!&rdquo; (103:1). Before David calls heaven and earth to worship, he calls his own soul. He preaches to himself, stirring up everything within him to give God the praise he is due.",
      "There is deep wisdom in this opening. The heart does not always feel like worshiping; gratitude often has to be roused, gathered, and directed. David does not wait for the mood to arrive &mdash; he commands his soul, speaks to his innermost self, and summons &ldquo;all that is within me&rdquo; to the single great task of blessing the holy name of God. Praise here is not a passive feeling but an act of the will, a deliberate turning of the whole person toward the Lord.",
      "To &ldquo;bless the Lord&rdquo; is to speak well of him, to honor him, to render back to him the adoration that his goodness deserves. We bless God not because he needs anything from us, but because he is supremely worthy and because the soul was made to find its joy in praising him. The name David exalts is God&rsquo;s &ldquo;holy name&rdquo; &mdash; the revealed character of the Lord, set apart in perfection, glorious in mercy.",
      "Then comes the line that holds the key to the whole psalm: &ldquo;Bless the Lord, O my soul, and forget not all his benefits&rdquo; (103:2). The great enemy of gratitude is forgetfulness. The human heart is prone to take God&rsquo;s gifts and overlook the Giver, to enjoy the blessings and forget the source. So David charges his soul to remember &mdash; to keep a careful account of all the good that God has done.",
      "&ldquo;Forget not&rdquo; is one of the most practical commands in the spiritual life. Ingratitude is rarely a deliberate choice; it is most often simple amnesia, the slow fading of memory under the weight of daily cares. To &ldquo;forget not all his benefits&rdquo; is to discipline the memory toward thankfulness, to cultivate a recollection of mercy that fuels ongoing praise.",
      "And so the opening of Psalm 103 sets the pattern for a grateful life. It begins within, addressing the soul. It directs the whole person toward God. It centers on his holy name. And it guards against the quiet erosion of forgetfulness by deliberately calling to mind the benefits of the Lord. What follows in the psalm is simply David listing, one by one, the reasons his soul has to bless God.",
    ],
  },
  {
    id: "Forget Not All His Benefits",
    heading: "Forget Not All His Benefits",
    reference: "Psalm 103:3&ndash;6",
    paragraphs: [
      "Having charged his soul to remember, David now begins the great inventory of God&rsquo;s benefits, and he opens with the deepest need of all: &ldquo;who forgives all your iniquity&rdquo; (103:3). Before health, before provision, before any other gift, David names forgiveness. The pardon of sin is set first because it is the foundation of every other mercy; a forgiven sinner is a person against whom God holds nothing, free to receive all his goodness.",
      "The benefits then cascade in a series of vivid clauses: &ldquo;who heals all your diseases, who redeems your life from the pit, who crowns you with steadfast love and mercy, who satisfies you with good so that your youth is renewed like the eagle&rsquo;s&rdquo; (103:3&ndash;5). Each phrase names a different face of God&rsquo;s grace &mdash; healing for the body, redemption for the life, a crown of love and mercy for the head, and satisfaction so deep that strength itself is renewed.",
      "&ldquo;Who heals all your diseases&rdquo; testifies to God as the source of all restoration, whether in this life through his ordinary mercies or finally in the resurrection, when every sickness will be undone. &ldquo;Who redeems your life from the pit&rdquo; pictures God reaching down into the place of death and destruction to buy his servant back &mdash; the language of rescue, of a kinsman-redeemer paying the price to set a captive free.",
      "&ldquo;Who crowns you with steadfast love and mercy&rdquo; is a breathtaking image. The forgiven sinner is not merely pardoned and dismissed but crowned, honored, surrounded as with a wreath of God&rsquo;s covenant love. The Hebrew word for that love &mdash; hesed, his steadfast, loyal, covenant-keeping love &mdash; runs like a golden thread through the whole psalm. It is the dominant note of who God is toward his people.",
      "&ldquo;Who satisfies you with good so that your youth is renewed like the eagle&rsquo;s&rdquo; speaks of a God who does not merely meet our needs but fills us with good, renewing strength and vigor as the eagle seems to renew its plumage. The weary, depleted soul finds in God a satisfaction that revives it from within. For all who are tired and worn, this is a benefit worth remembering.",
      "David then lifts his eyes from personal mercy to God&rsquo;s wider character: &ldquo;The Lord works righteousness and justice for all who are oppressed. He made known his ways to Moses, his acts to the people of Israel&rdquo; (103:6&ndash;7). The God who forgives the individual is also the God who defends the oppressed and reveals himself to his people. The benefits David remembers are not abstractions; they were displayed in history, made known at Sinai, woven through the whole story of God&rsquo;s dealings with Israel.",
    ],
  },
  {
    id: "Slow to Anger Abounding in Love",
    heading: "Slow to Anger Abounding in Love",
    reference: "Psalm 103:8&ndash;10",
    paragraphs: [
      "At the heart of the psalm stands a confession that echoes the very self-revelation of God to Moses on Mount Sinai: &ldquo;The Lord is merciful and gracious, slow to anger and abounding in steadfast love&rdquo; (103:8). When Moses asked to see God&rsquo;s glory, the Lord proclaimed his name in these words (Exodus 34:6), and David takes that ancient revelation and sets it to music. This is who God says he is, in his own words.",
      "&ldquo;Merciful and gracious&rdquo; &mdash; full of compassion for the suffering and undeserved favor for the guilty. &ldquo;Slow to anger&rdquo; &mdash; patient, long-suffering, not quick to condemn. &ldquo;Abounding in steadfast love&rdquo; &mdash; overflowing, lavish, never running short of covenant faithfulness. These are not occasional moods of God but the settled disposition of his heart toward his people. The God of Psalm 103 is not reluctant to bless; he abounds in love.",
      "David then presses the comfort further: &ldquo;He will not always chide, nor will he keep his anger forever&rdquo; (103:9). For the believer weighed down by a sense of God&rsquo;s displeasure, this is a healing word. God&rsquo;s correction is real, but it is not endless; he does not nurse a grudge or hold his anger over his children without limit. His anger is for a moment; his favor is for a lifetime.",
      "Then comes one of the most precious lines in all of Scripture for the guilty conscience: &ldquo;He does not deal with us according to our sins, nor repay us according to our iniquities&rdquo; (103:10). This is the gospel in the Old Testament. If God dealt with us as our sins deserve, none could stand; but he does not. He treats us not according to strict justice but according to abounding mercy. What we have earned, he withholds; what we could never earn, he gives.",
      "This verse quietly points forward to the cross, where the mystery of how God can be both just and merciful is finally answered. God does not deal with us according to our sins because, in Christ, he dealt with our sins on the One who bore them. The steadfast love that &ldquo;abounds&rdquo; in Psalm 103 reaches its fullest expression at Calvary, where mercy and justice meet and the believer is forever pardoned.",
      "For anyone burdened by guilt and shame, these verses are a refuge. They do not pretend that our sins are small or imaginary; they look squarely at our iniquities and then declare that God has chosen not to repay us according to them. The soul that has truly heard this cannot help but return to the psalm&rsquo;s opening cry: bless the Lord, O my soul, for he is merciful and gracious, slow to anger, and abounding in steadfast love.",
    ],
  },
  {
    id: "As Far as East from West",
    heading: "As Far as East from West",
    reference: "Psalm 103:11&ndash;12",
    paragraphs: [
      "To measure the greatness of God&rsquo;s mercy, David reaches for the largest distances he can imagine. &ldquo;For as high as the heavens are above the earth, so great is his steadfast love toward those who fear him&rdquo; (103:11). The love of God is not measured by the standards of earth but by the immeasurable height of the heavens. As far as the sky rises above the ground &mdash; a distance no eye can span &mdash; so vast is the steadfast love of the Lord toward his people.",
      "Then comes the verse that has brought relief to countless burdened souls: &ldquo;as far as the east is from the west, so far does he remove our transgressions from us&rdquo; (103:12). David chooses his imagery with exquisite care. He does not say &ldquo;as far as north is from south,&rdquo; for north and south have fixed points &mdash; the poles &mdash; and are therefore a measurable distance apart. But east and west never meet. Travel east forever and you will never arrive at west. The distance is infinite.",
      "That is how completely God has removed our transgressions from us. Not partly, not provisionally, not within reach of recall &mdash; but to an infinite, unbridgeable distance, never to be brought back against us. The sins that haunt the memory, the failures that the accuser loves to replay, the guilt that whispers in the dark &mdash; all of it God has carried away as far as the east is from the west.",
      "This promise is the answer to the shame that so often clings to the forgiven. Many believers accept in theory that God forgives, yet still drag their old sins behind them, rehearsing failures God has long since removed. Psalm 103:12 confronts that bondage directly. The God who forgives does not keep our sins near at hand; he removes them to an immeasurable distance and refuses to count them against us ever again.",
      "The whole of these verses is bound to the phrase &ldquo;those who fear him.&rdquo; The fear of the Lord here is not cringing terror but reverent trust &mdash; the posture of a child who honors a loving father. To such ones, God&rsquo;s love is as high as the heavens and his pardon as wide as the horizons. The fear of the Lord is the soil in which the immeasurable mercy of God takes root in a human life.",
      "When the conscience accuses and the past rises up, the believer may stand on this promise as on solid rock. Our transgressions are not hovering nearby, waiting to condemn; they have been carried away by the hand of God to a place from which they will never return. As far as the east is from the west &mdash; that is the measure of grace, and it is more than enough.",
    ],
  },
  {
    id: "As a Father Shows Compassion",
    heading: "As a Father Shows Compassion",
    reference: "Psalm 103:13&ndash;22",
    paragraphs: [
      "David now reaches for the tenderest image of all to describe God&rsquo;s heart: &ldquo;As a father shows compassion to his children, so the Lord shows compassion to those who fear him&rdquo; (103:13). The relationship between the believer and God is not that of a defendant before a stern judge but of a child before a loving father, who feels for his children, bears with their weakness, and tends their hurts. This is the disposition of God toward all who reverence him.",
      "And the reason for this fatherly compassion is profoundly humbling: &ldquo;For he knows our frame; he remembers that we are dust&rdquo; (103:14). God is not surprised by our weakness; he is the one who formed us from the dust and knows exactly how fragile we are. His mercy is not ignorance of our failings but full knowledge of our frailty. He remembers what we are made of, and he is gentle with us accordingly.",
      "From this David turns to the brevity of human life: &ldquo;As for man, his days are like grass; he flourishes like a flower of the field; for the wind passes over it, and it is gone, and its place knows it no more&rdquo; (103:15&ndash;16). Our lives are a passing bloom, here in the morning and withered by the evening wind. Set against eternity, the longest human life is a brief flowering of grass. We are dust, and to dust we return.",
      "But against the fading of the grass David sets the one thing that does not fade: &ldquo;But the steadfast love of the Lord is from everlasting to everlasting on those who fear him, and his righteousness to children&rsquo;s children&rdquo; (103:17). Here is the great contrast that anchors the psalm. We are temporary; his love is eternal. The flower withers, but the hesed of God runs from everlasting to everlasting, embracing not only us but our children and our children&rsquo;s children. The frailty of man is swallowed up by the permanence of God&rsquo;s love.",
      "The psalm then widens into a soaring summons to all creation. David calls the angels, &ldquo;you mighty ones who do his word,&rdquo; to bless the Lord; he calls &ldquo;all his hosts, his ministers, who do his will&rdquo;; he calls &ldquo;all his works, in all places of his dominion&rdquo; (103:20&ndash;22). The praise that began in one man&rsquo;s soul swells until it fills the courts of heaven and the whole of God&rsquo;s creation. Every angel, every servant, every work of God is summoned to the same blessing.",
      "And then, having called the universe to worship, David returns at last to where he began: &ldquo;Bless the Lord, O my soul!&rdquo; (103:22). The psalm ends as it started, with the individual heart. Heaven and earth may join the chorus, but David will not let his own soul be silent. For all who carry weariness, guilt, or grief, Psalm 103 is an invitation to remember the benefits, to rest in the compassion of the Father who knows we are dust, and to make this our own first and last word: bless the Lord, O my soul.",
    ],
  },
];

const videoItems = [
  { videoId: "GGaruQQg9Wo", title: "BibleProject - Psalms Overview" },
  { videoId: "Hs6jQ4Ub_oQ", title: "Bless the Lord O My Soul - A Study of Psalm 103" },
  { videoId: "DXDGE_lRI0E", title: "10000 Reasons - Bless the Lord" },
  { videoId: "vTfNqyG6lYw", title: "The Mercy of God in Psalm 103" },
];

export default function Psalm103GuidePage() {
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
            Psalm 103
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            &ldquo;Bless the Lord, O my soul, and forget not all his benefits&rdquo; &mdash; a deep look at David&rsquo;s great anthem of gratitude, the God who forgives all our iniquity, removes our transgressions as far as the east is from the west, and shows compassion as a father to his children.
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
              Deepen your study of Psalm 103 through visual teaching on the God who forgives all our iniquity, removes our sins as far as the east is from the west, and shows compassion as a father to his children.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Bless the Lord, O My Soul</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Psalm 103 is the soul preaching gratitude to itself. It forgets not the benefits of the Lord &mdash; pardon for all our iniquity, healing, redemption, and a love as high as the heavens. He does not deal with us according to our sins, and he removes our transgressions as far as the east is from the west. So whatever your weariness or guilt, let this be your first word and your last: bless the Lord, O my soul.
          </p>
        </div>
      </main>
    </div>
  );
}
