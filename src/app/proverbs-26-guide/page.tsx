"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

export default function Proverbs26Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "T8brCFmNxMY", title: "Proverbs 26 - The Fool, Sluggard, and Quarrelsome (Bible Study)" },
    { videoId: "mWpgKP7n8aQ", title: "How to Handle the Fool - Proverbs 26:4-5 Explained" },
    { videoId: "Hs2dLvRqFp8", title: "The Danger of Gossip - Proverbs 26:17-22 Sermon" },
    { videoId: "cJ4wXbNz7eK", title: "Laziness vs. Rest - The Sluggard in Proverbs 26" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "key-themes", label: "Key Themes" },
    { id: "verse-by-verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: "#07070F", color: "#F2F2F8", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero Section */}
      <section style={{ background: "linear-gradient(180deg, #0e0e1c 0%, #07070F 100%)", borderBottom: "1px solid #1E1E32", padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#12121F", border: "1px solid #1E1E32", borderRadius: "999px", padding: "0.35rem 1rem", marginBottom: "1.25rem" }}>
            <span style={{ color: "#0D9488", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Bible Study Guide</span>
            <span style={{ color: "#1E1E32", fontSize: "0.75rem" }}>|</span>
            <span style={{ color: "#9898B3", fontSize: "0.75rem" }}>Old Testament &mdash; Proverbs</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 1rem", letterSpacing: "-0.02em" }}>
            Proverbs <span style={{ color: "#0D9488" }}>26</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#9898B3", maxWidth: "640px", margin: "0 auto 1.5rem", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "A concentrated study in three timeless character types: the fool who cannot receive wisdom, the sluggard whose laziness defeats him at every turn, and the quarrelsome person whose flattery and gossip destroy community." }}
          />
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "8px", padding: "0.5rem 1rem", textAlign: "center" }}>
              <div style={{ color: "#0D9488", fontWeight: 700, fontSize: "1.1rem" }}>28</div>
              <div style={{ color: "#9898B3", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Verses</div>
            </div>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "8px", padding: "0.5rem 1rem", textAlign: "center" }}>
              <div style={{ color: "#6B4FBB", fontWeight: 700, fontSize: "1.1rem" }}>Prov. 26</div>
              <div style={{ color: "#9898B3", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Reference</div>
            </div>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "8px", padding: "0.5rem 1rem", textAlign: "center" }}>
              <div style={{ color: "#D97706", fontWeight: 700, fontSize: "1.1rem" }}>Wisdom</div>
              <div style={{ color: "#9898B3", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Genre</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div style={{ borderBottom: "1px solid #1E1E32", background: "#07070F", position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", gap: "0", overflowX: "auto", scrollbarWidth: "none" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === tab.id ? "2px solid #0D9488" : "2px solid transparent",
                color: activeTab === tab.id ? "#F2F2F8" : "#9898B3",
                padding: "1rem 1.25rem",
                fontSize: "0.9rem",
                fontWeight: activeTab === tab.id ? 700 : 400,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s, border-color 0.15s",
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "1.25rem", color: "#F2F2F8" }}>Overview of Proverbs 26</h2>
            <p style={{ color: "#9898B3", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "1rem" }}
              dangerouslySetInnerHTML={{ __html: "Proverbs 26 is one of the most densely organized chapters in the entire book. Unlike many wisdom texts that scatter their observations across various subjects, this chapter deliberately groups its material into three concentrated portraits: the fool (vv. 1&ndash;12), the sluggard (vv. 13&ndash;16), and the quarrelsome troublemaker (vv. 17&ndash;28). The compression is intentional &mdash; each portrait becomes more vivid by accumulation." }}
            />
            <p style={{ color: "#9898B3", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "1rem" }}
              dangerouslySetInnerHTML={{ __html: "The chapter is famous for its apparent contradiction in verses 4 and 5: &ldquo;Answer not a fool according to his folly... Answer a fool according to his folly.&rdquo; Far from being a textual error, these two proverbs are a masterclass in wisdom thinking: sometimes you engage folly directly; sometimes engagement only draws you in. Wisdom is knowing which situation you are in." }}
            />
            <p style={{ color: "#9898B3", lineHeight: 1.8, marginBottom: "2rem", fontSize: "1rem" }}
              dangerouslySetInnerHTML={{ __html: "Throughout the chapter, the Hebrew word &ldquo;kesil&rdquo; (fool) appears ten times in the first twelve verses alone. This is not careless repetition &mdash; it is a literary technique designed to make the reader uncomfortable with familiarity. By the end, the wise reader asks: &ldquo;In what ways am I the fool described here?&rdquo;" }}
            />

            {/* Key verse callout */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderLeft: "4px solid #0D9488", borderRadius: "0 8px 8px 0", padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <div style={{ color: "#0D9488", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>Key Verse &mdash; Proverbs 26:12</div>
              <p style={{ color: "#F2F2F8", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Do you see a man who is wise in his own eyes? There is more hope for a fool than for him.&rdquo;" }}
              />
            </div>

            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderLeft: "4px solid #D97706", borderRadius: "0 8px 8px 0", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
              <div style={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>Key Verse &mdash; Proverbs 26:20</div>
              <p style={{ color: "#F2F2F8", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;For lack of wood the fire goes out, and where there is no whisperer, quarreling ceases.&rdquo;" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "10px", padding: "1.25rem" }}>
                <div style={{ color: "#E11D48", fontSize: "1.3rem", marginBottom: "0.5rem" }}>&#9660;</div>
                <div style={{ color: "#F2F2F8", fontWeight: 700, marginBottom: "0.35rem" }}>The Fool (vv. 1-12)</div>
                <p style={{ color: "#9898B3", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Honor, curses, proverbs, and wisdom &mdash; all are wasted on or weaponized by the fool who cannot receive correction." }}
                />
              </div>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "10px", padding: "1.25rem" }}>
                <div style={{ color: "#D97706", fontSize: "1.3rem", marginBottom: "0.5rem" }}>&#9675;</div>
                <div style={{ color: "#F2F2F8", fontWeight: 700, marginBottom: "0.35rem" }}>The Sluggard (vv. 13-16)</div>
                <p style={{ color: "#9898B3", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "The sluggard&rsquo;s excuses are bottomless and his self-regard is enormous &mdash; he is wiser in his own eyes than seven men who answer discreetly." }}
                />
              </div>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "10px", padding: "1.25rem" }}>
                <div style={{ color: "#6B4FBB", fontSize: "1.3rem", marginBottom: "0.5rem" }}>&#9650;</div>
                <div style={{ color: "#F2F2F8", fontWeight: 700, marginBottom: "0.35rem" }}>The Quarrelsome (vv. 17-28)</div>
                <p style={{ color: "#9898B3", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Flattery, deception, gossip, and meddling &mdash; the quarrelsome person destroys friendships and communities while hiding behind smooth words." }}
                />
              </div>
            </div>

            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "10px", padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#F2F2F8", marginBottom: "1rem" }}>Context: Proverbs and the Wisdom Tradition</h3>
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Proverbs belongs to the tradition of Israelite wisdom literature alongside Job and Ecclesiastes. Wisdom (&apos;chokmah&apos;) is not merely cleverness &mdash; it is skilled living in God&rsquo;s ordered world. The &ldquo;fool&rdquo; (&apos;kesil&apos;) is not someone with low intelligence but someone who refuses to order their life according to God&rsquo;s design. The fool&rsquo;s problem is moral and spiritual before it is intellectual." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Chapter 26 is part of a larger Solomonic collection (chapters 25&ndash;29) described as &ldquo;copied by the men of Hezekiah&rdquo; (25:1). It is a carefully edited anthology of wisdom observations, not a random collection. The thematic grouping of chapter 26 suggests editorial sophistication &mdash; these proverbs have been deliberately arranged for maximum cumulative effect." }}
              />
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "key-themes" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.5rem", color: "#F2F2F8" }}>Key Themes in Proverbs 26</h2>
            <p style={{ color: "#9898B3", lineHeight: 1.7, marginBottom: "2rem", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "Proverbs 26 surfaces several enduring truths about human nature, wisdom, and the dangers of characteristic patterns of sin." }}
            />

            {/* Theme 1 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#E11D4820", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#E11D48", fontWeight: 800, fontSize: "1rem" }}>1</span>
                </div>
                <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>The Absurdity of the Fool</h3>
              </div>
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Verses 1&ndash;12 pile up one vivid image after another to capture the essential wrongness of the fool&rsquo;s life. &ldquo;Like snow in summer or rain in harvest, so honor is not fitting for a fool&rdquo; (v. 1). Snow in summer is not just unusual &mdash; it is destructive to the crops. Honoring a fool similarly produces harm, not blessing." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "The images accumulate: a fluttering sparrow (v. 2 &mdash; a curse without cause goes nowhere), a whip for a horse and a rod for a fool&rsquo;s back (v. 3), cutting off one&rsquo;s own feet (v. 6), a lame man with legs that hang useless (v. 7), a dog returning to its vomit (v. 11). These are not gentle descriptions &mdash; they are meant to produce revulsion at the pattern being described." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "The climax of this section is verse 12: &ldquo;Do you see a man who is wise in his own eyes? There is more hope for a fool than for him.&rdquo; Self-deception is worse than outright folly, because the self-deceived person cannot even begin to seek correction. This is the Pharisee of Luke 18, confident he needs nothing, passing the repentant tax collector on his way out." }}
              />
            </div>

            {/* Theme 2 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#D9770620", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#D97706", fontWeight: 800, fontSize: "1rem" }}>2</span>
                </div>
                <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>The Tension of Engaging Folly</h3>
              </div>
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "The famous paradox of verses 4&ndash;5 has generated centuries of commentary: &ldquo;Answer not a fool according to his folly, lest you be like him yourself. Answer a fool according to his folly, lest he be wise in his own eyes.&rdquo; Both proverbs are true. The tension is the point." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Sometimes engaging a fool on his own terms drags you down to his level &mdash; you become reactive, defensive, petty. The fool has won by making you play his game. Other times, silence or non-engagement allows the fool to conclude he is right, which harms him and those who listen to him. Wisdom is situational judgment about which response fits which moment." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Jesus modeled both postures. Before Pilate, he remained silent (Matthew 27:14). Before the Pharisees&rsquo; trick questions about taxes and marriage, he answered directly and decisively (Matthew 22:15&ndash;40). The difference was discernment about what each moment required, not a fixed rule applied mechanically." }}
              />
            </div>

            {/* Theme 3 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#6B4FBB20", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#6B4FBB", fontWeight: 800, fontSize: "1rem" }}>3</span>
                </div>
                <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>The Self-Defeating Sluggard</h3>
              </div>
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Verses 13&ndash;16 are among the most wryly humorous in all of Proverbs. The sluggard says &ldquo;there is a lion in the road! There is a lion in the streets!&rdquo; (v. 13) &mdash; an excuse so exaggerated it reveals the true problem: not external danger but internal resistance to movement. As the door turns on its hinges, so does the sluggard on his bed (v. 14)." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "The image of verse 15 is pathetic in the best sense: &ldquo;The sluggard buries his hand in the dish; it wears him out to bring it back to his mouth.&rdquo; He has sat down to eat but cannot complete even that action. And yet the punchline of verse 16 is biting: this same person is &ldquo;wiser in his own eyes than seven men who can answer sensibly.&rdquo; The sluggard&rsquo;s laziness is compounded by his self-satisfaction." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "The sluggard is not lazy out of ignorance &mdash; he has elaborate rationalizations for every failure to act. He is not just passive; he is actively constructing a worldview in which his inaction is justified and everyone else is wrong. This makes him nearly unteachable." }}
              />
            </div>

            {/* Theme 4 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#0D948820", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#0D9488", fontWeight: 800, fontSize: "1rem" }}>4</span>
                </div>
                <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>The Destructive Power of Gossip and Flattery</h3>
              </div>
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Verses 17&ndash;22 turn to the community-destroying power of words used recklessly. The meddler &ldquo;who passes by and meddles in a quarrel not his own is like one who takes a passing dog by the ears&rdquo; (v. 17) &mdash; you will get bitten, and deservedly. The person who deceives and says &ldquo;I am only joking&rdquo; (v. 19) uses humor as a cover for cruelty." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "The gossip section (vv. 20&ndash;22) is especially powerful. Like charcoal adding fuel to embers (v. 21), the whisperer stirs conflict that would otherwise die. Gossip &ldquo;goes down into the inner parts of the belly&rdquo; (v. 22) &mdash; it penetrates deeper than we think, lodging in the soul and poisoning relationships long after the words are forgotten." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Verses 23&ndash;28 close with an extended reflection on the person who covers malice with flattery: &ldquo;Smooth lips with an evil heart are like a glaze covering an earthen vessel&rdquo; (v. 23). The exterior is beautiful; the interior is cheap clay. Flattery is not kindness dressed up &mdash; it is manipulation dressed as kindness." }}
              />
            </div>

            {/* Theme 5 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#3a7d5620", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#3a7d56", fontWeight: 800, fontSize: "1rem" }}>5</span>
                </div>
                <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>Undeserved Curses and Divine Justice</h3>
              </div>
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Verse 2 contains one of Proverbs&rsquo; most reassuring observations: &ldquo;Like a fluttering sparrow or a darting swallow, an undeserved curse does not alight.&rdquo; Words intended to harm you cannot land without a legitimate moral basis. This does not mean curses and false accusations are harmless &mdash; they can cause significant damage &mdash; but they do not have ultimate, binding power over those who walk in integrity." }}
              />
              <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "This connects to the chapter&rsquo;s closing observation in verse 27: &ldquo;Whoever digs a pit will fall into it, and a stone will come back on him who starts it rolling.&rdquo; The chapter&rsquo;s final moral is that evil schemes boomerang. The liar, the flatterer, the gossip, the meddler &mdash; all plant seeds that they will themselves harvest. There is a moral order to the universe that human wickedness cannot permanently evade." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse-by-verse" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.5rem", color: "#F2F2F8" }}>Verse by Verse: Proverbs 26</h2>
            <p style={{ color: "#9898B3", lineHeight: 1.7, marginBottom: "2rem", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "A close reading of each section, tracing the three major portraits of folly and their implications for life in community." }}
            />

            {/* Section 1: vv.1-3 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <div style={{ background: "#E11D4815", borderBottom: "1px solid #1E1E32", padding: "0.9rem 1.5rem" }}>
                <span style={{ color: "#E11D48", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>Verses 1&ndash;3</span>
                <span style={{ color: "#9898B3", fontSize: "0.85rem", marginLeft: "0.75rem" }}>Honor Is Not Fitting for a Fool</span>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ background: "#07070F", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1rem", borderLeft: "3px solid #E11D48" }}>
                  <p style={{ color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;Like snow in summer or rain in harvest, honor is not fitting for a fool. Like a fluttering sparrow or a darting swallow, a curse that is causeless does not alight. A whip for the horse, a bridle for the donkey, and a rod for the back of fools.&rdquo;" }}
                  />
                </div>
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "Snow in summer is not just unusual &mdash; in an agricultural society, summer frost destroys crops. Honoring a fool is similarly counterproductive: it gives him a platform, validates his approach, and signals to observers that his pattern of life leads to social reward. The community suffers when folly is honored." }}
                />
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "Verse 2 is immensely comforting for anyone who has suffered false accusation or malicious speech. A curse without moral grounds has no spiritual landing place. And verse 3 establishes that fools, like animals, respond to external force rather than reason &mdash; a sobering observation about what motivates change in those who will not receive instruction." }}
                />
              </div>
            </div>

            {/* Section 2: vv.4-5 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <div style={{ background: "#D9770615", borderBottom: "1px solid #1E1E32", padding: "0.9rem 1.5rem" }}>
                <span style={{ color: "#D97706", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>Verses 4&ndash;5</span>
                <span style={{ color: "#9898B3", fontSize: "0.85rem", marginLeft: "0.75rem" }}>The Famous Tension: To Answer or Not to Answer</span>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ background: "#07070F", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1rem", borderLeft: "3px solid #D97706" }}>
                  <p style={{ color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;Answer not a fool according to his folly, lest you be like him yourself. Answer a fool according to his folly, lest he be wise in his own eyes.&rdquo;" }}
                  />
                </div>
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "These two proverbs were placed side by side intentionally. They are not contradictory but complementary &mdash; two genuine truths that describe two genuine dangers in any encounter with foolishness. The danger of answering: you can be pulled down to the fool&rsquo;s level, becoming reactive and petty. The danger of not answering: the fool concludes his position is unassailable and becomes more entrenched." }}
                />
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "Wisdom here is not a rule but a judgment call. The book of Proverbs operates on the assumption that the reader is growing in discernment, not looking for algorithms. We must read the situation: Who is the audience? What is at stake? Can the fool receive correction? Is my engagement serving his growth or feeding his pride? These questions shape the response." }}
                />
              </div>
            </div>

            {/* Section 3: vv.6-12 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <div style={{ background: "#6B4FBB15", borderBottom: "1px solid #1E1E32", padding: "0.9rem 1.5rem" }}>
                <span style={{ color: "#6B4FBB", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>Verses 6&ndash;12</span>
                <span style={{ color: "#9898B3", fontSize: "0.85rem", marginLeft: "0.75rem" }}>The Fool&rsquo;s Catalog: A Man Wise in His Own Eyes</span>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ background: "#07070F", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1rem", borderLeft: "3px solid #6B4FBB" }}>
                  <p style={{ color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;Whoever sends a message by the hand of a fool cuts off his own feet and drinks violence. Like the legs of a lame man that hang useless is a proverb in the mouth of fools... Like a dog that returns to his vomit is a fool who repeats his folly. Do you see a man who is wise in his own eyes? There is more hope for a fool than for him.&rdquo;" }}
                  />
                </div>
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "Verse 6 warns against entrusting responsibility to a fool: the message will be distorted, delayed, or weaponized. &ldquo;Cuts off his own feet&rdquo; is vivid &mdash; you are actively harming yourself by making this delegation. Verse 7 is equally striking: a proverb in the fool&rsquo;s mouth is like legs on a lame man &mdash; it dangles there, useless, unable to carry any weight." }}
                />
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The dog-and-vomit image of verse 11 is quoted in 2 Peter 2:22 to describe those who return to false teaching after knowing the truth. Peter uses it to show that the patterns described in Proverbs are not merely social observations &mdash; they describe spiritual realities about the nature of true repentance versus superficial change. Real change leaves the old pattern behind; returning to it reveals that the transformation was incomplete." }}
                />
              </div>
            </div>

            {/* Section 4: vv.13-16 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <div style={{ background: "#D9770615", borderBottom: "1px solid #1E1E32", padding: "0.9rem 1.5rem" }}>
                <span style={{ color: "#D97706", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>Verses 13&ndash;16</span>
                <span style={{ color: "#9898B3", fontSize: "0.85rem", marginLeft: "0.75rem" }}>The Sluggard: The Lion and the Doorstep</span>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ background: "#07070F", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1rem", borderLeft: "3px solid #D97706" }}>
                  <p style={{ color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;The sluggard says, &lsquo;There is a lion in the road! There is a lion in the streets!&rsquo; As a door turns on its hinges, so does a sluggard on his bed. The sluggard buries his hand in the dish; it wears him out to bring it back to his mouth. The sluggard is wiser in his own eyes than seven men who can answer sensibly.&rdquo;" }}
                  />
                </div>
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The lion excuse is comical, but the comedy cuts deep. The sluggard does not lack imagination &mdash; he uses his considerable creativity to construct reasons why action is impossible. Each excuse is technically not a lie (lions do exist!), but the implicit claim &mdash; that the danger is real, immediate, and unavoidable &mdash; is false rationalization." }}
                />
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The door hinge metaphor is perfect: the door is in constant motion but goes nowhere. The sluggard rolls endlessly on his bed, moving without any progress toward a goal. And yet verse 16 delivers the most damning verdict: the sluggard is confident he is smarter than everyone trying to correct him. His laziness is insulated by pride from the one thing that might cure it &mdash; teachability." }}
                />
              </div>
            </div>

            {/* Section 5: vv.17-22 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <div style={{ background: "#0D948815", borderBottom: "1px solid #1E1E32", padding: "0.9rem 1.5rem" }}>
                <span style={{ color: "#0D9488", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>Verses 17&ndash;22</span>
                <span style={{ color: "#9898B3", fontSize: "0.85rem", marginLeft: "0.75rem" }}>Meddling, Deception, and the Gossiping Whisperer</span>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ background: "#07070F", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1rem", borderLeft: "3px solid #0D9488" }}>
                  <p style={{ color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;Whoever meddles in a quarrel not his own is like one who takes a passing dog by the ears... For lack of wood the fire goes out, and where there is no whisperer, quarreling ceases. As charcoal to hot embers and wood to fire, so is a quarrelsome man for kindling strife. The words of a whisperer are like delicious morsels; they go down into the inner parts of the belly.&rdquo;" }}
                  />
                </div>
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The dog-by-the-ears image in verse 17 captures the absurdity of uninvited involvement in others&rsquo; disputes. The dog you grab will bite you; the conflict you insert yourself into will turn on you. There is wisdom in discerning which quarrels are truly your concern and which ones you must let pass." }}
                />
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "Verses 20&ndash;22 offer a masterclass on conflict: without fuel, fire dies. Gossip is the fuel of quarrels. Remove the whisperer and the conflict loses oxygen. The &ldquo;delicious morsels&rdquo; metaphor in verse 22 captures gossip&rsquo;s appeal &mdash; it tastes good going down, but what it nourishes is poison. Gossip is presented as a moral appetite that must be disciplined, not indulged." }}
                />
              </div>
            </div>

            {/* Section 6: vv.23-28 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <div style={{ background: "#3a7d5615", borderBottom: "1px solid #1E1E32", padding: "0.9rem 1.5rem" }}>
                <span style={{ color: "#3a7d56", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>Verses 23&ndash;28</span>
                <span style={{ color: "#9898B3", fontSize: "0.85rem", marginLeft: "0.75rem" }}>Smooth Lips, Evil Heart: Flattery&rsquo;s Exposure</span>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ background: "#07070F", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1rem", borderLeft: "3px solid #3a7d56" }}>
                  <p style={{ color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;Like the glaze covering an earthen vessel are fervent lips with an evil heart... He who hates disguises himself with his lips and harbors deceit in his heart; when he speaks graciously, believe him not, for there are seven abominations in his heart; though his hatred be covered with deception, his wickedness will be exposed in the assembly. Whoever digs a pit will fall into it, and a stone will come back on him who starts it rolling.&rdquo;" }}
                  />
                </div>
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The glaze metaphor is brilliant. A glazed earthen vessel looks like precious metal from a distance but is revealed as cheap clay up close. Flattery &mdash; &ldquo;fervent lips&rdquo; &mdash; similarly presents an attractive surface that conceals a base interior. This is not compliment or genuine praise; it is a social weapon used to manipulate and disarm." }}
                />
                <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: "The chapter&rsquo;s final note in verse 27 is morally satisfying: the pit-digger falls in it; the stone-roller is crushed by it. The moral universe of Proverbs has a certain trajectory: evil schemes eventually turn against their designers. Verse 28 closes with a devastating insight: &ldquo;A lying tongue hates its victims, and a flattering mouth works ruin.&rdquo; Flattery is not love with bad boundaries &mdash; it is hatred wearing love&rsquo;s face." }}
                />
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.5rem", color: "#F2F2F8" }}>Applying Proverbs 26 Today</h2>
            <p style={{ color: "#9898B3", lineHeight: 1.7, marginBottom: "2rem", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "Proverbs 26 is ruthlessly practical. Its observations about foolishness, laziness, and quarrelsomeness are as accurate today as the day they were written." }}
            />

            {/* App 1 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#E11D4820", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <span style={{ fontSize: "1.2rem" }}>&#128064;</span>
                </div>
                <div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.6rem" }}>Develop Wisdom in Responding to Foolishness</h3>
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "The paradox of verses 4&ndash;5 calls for ongoing discernment rather than fixed rules. Before responding to provocative or foolish speech, ask: Will my engagement help this person, or will it only provide a platform for more folly? Is there an audience who needs to hear the truth addressed? Am I being pulled into the fool&rsquo;s frame, or can I respond on more solid ground?" }}
                  />
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "In digital culture, this wisdom is urgently needed. Social media rewards engagement, which means foolish provocations often &ldquo;win&rdquo; simply by generating responses. Sometimes the wisest move is non-engagement. Other times, truth must be spoken even if the immediate audience is hostile, because others are watching who need to hear it." }}
                  />
                </div>
              </div>
            </div>

            {/* App 2 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#D9770620", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <span style={{ fontSize: "1.2rem" }}>&#9998;</span>
                </div>
                <div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.6rem" }}>Cultivate Self-Awareness About Your Own Folly</h3>
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "The most dangerous verse in the chapter may be verse 12: &ldquo;There is more hope for a fool than for a man wise in his own eyes.&rdquo; Every reader of Proverbs 26 is tempted to see the fool, the sluggard, and the quarrelsome person in others rather than themselves. But the accumulation of these portraits is designed to hold up a mirror." }}
                  />
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "Where do you make elaborate excuses to avoid necessary action? Where do you repeat patterns of behavior that have consistently failed, like a dog returning to vomit? Where do you pass judgment on others while being blind to the same tendencies in yourself? The wise person reads Proverbs 26 as an invitation to self-examination, not as a guide to identifying fools." }}
                  />
                </div>
              </div>
            </div>

            {/* App 3 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#0D948820", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <span style={{ fontSize: "1.2rem" }}>&#128442;</span>
                </div>
                <div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.6rem" }}>Guard Your Tongue Against Gossip and Flattery</h3>
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "Proverbs 26:20&ndash;22 provides the simplest possible diagnosis of quarreling communities: &ldquo;For lack of wood the fire goes out.&rdquo; You can stop a conflict without resolving every underlying issue simply by refusing to be the whisperer who keeps adding fuel. This is a remarkable piece of practical wisdom for anyone navigating conflict in a church, workplace, or family." }}
                  />
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "The flattery warning (vv. 23&ndash;28) challenges us to distinguish genuine encouragement from manipulative praise. Ask yourself: Am I speaking this to help the person grow and feel genuinely valued, or am I seeking to gain favor, avoid a difficult truth, or position myself advantageously? Flattery and honest affirmation can look identical on the surface &mdash; the difference is the heart behind them." }}
                  />
                </div>
              </div>
            </div>

            {/* App 4 */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#3a7d5620", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <span style={{ fontSize: "1.2rem" }}>&#9675;</span>
                </div>
                <div>
                  <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.6rem" }}>Do Not Be a Quarrel-Starter</h3>
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "Verse 17 warns against inserting yourself into conflicts that are not yours. This requires wisdom: Christians are not called to indifference about injustice, and sometimes intervention is the loving thing. But there is a difference between principled advocacy for someone genuinely wronged and habitual meddling in other people&rsquo;s quarrels for the stimulation or sense of importance it provides." }}
                  />
                  <p style={{ color: "#9898B3", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: "Verse 27 offers a sobering long view: those who dig pits for others fall into them. Schemes for another&rsquo;s downfall tend to become the schemer&rsquo;s own undoing. This is not automatic or immediate, but it is a pattern that Proverbs observes consistently. The person who builds their life on manipulation is building on sand &mdash; the moral structure of the universe does not support it indefinitely." }}
                  />
                </div>
              </div>
            </div>

            {/* Discussion questions */}
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 1rem" }}>Discussion Questions</h3>
              <ol style={{ color: "#9898B3", lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem", fontSize: "0.95rem" }}>
                <li style={{ marginBottom: "0.6rem" }}
                  dangerouslySetInnerHTML={{ __html: "Think of a time you had to decide whether to &ldquo;answer a fool&rdquo; or remain silent. What helped you decide? How did it turn out?" }}
                />
                <li style={{ marginBottom: "0.6rem" }}
                  dangerouslySetInnerHTML={{ __html: "The sluggard is described as &ldquo;wiser in his own eyes than seven men who answer discreetly.&rdquo; How does pride fuel procrastination and avoidance? Where do you see this in yourself?" }}
                />
                <li style={{ marginBottom: "0.6rem" }}
                  dangerouslySetInnerHTML={{ __html: "Proverbs 26:20 says quarreling ceases without a whisperer. Have you ever seen a conflict die down simply because someone stopped feeding it? What did that teach you?" }}
                />
                <li style={{ marginBottom: "0.6rem" }}
                  dangerouslySetInnerHTML={{ __html: "Verse 22 says gossip &ldquo;goes down into the inner parts of the belly.&rdquo; What makes gossip so appealing and so difficult to resist? How can a community create accountability around this?" }}
                />
                <li style={{ marginBottom: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Verse 12 says there is more hope for a fool than for someone wise in their own eyes. What does that tell us about the role of humility in receiving wisdom? What would it look like to actively cultivate teachability in your own life?" }}
                />
              </ol>
            </div>

            <div style={{ background: "linear-gradient(135deg, #0D948818 0%, #6B4FBB10 100%)", border: "1px solid #0D948840", borderRadius: "12px", padding: "1.5rem" }}>
              <div style={{ color: "#0D9488", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>A Prayer from Proverbs 26</div>
              <p style={{ color: "#F2F2F8", fontStyle: "italic", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Lord, you are the source of all true wisdom. As I read these portraits of folly, guard me against the temptation to see them only in others. Show me where I rationalize like the sluggard, where I repeat destructive patterns like the fool, where my words add fuel to fires that should go out. Give me a tongue that heals rather than wounds, a spirit that is teachable rather than self-assured, and the discernment to know when to speak and when to be silent. Make me quick to hear and slow to speak, for the sake of those around me and for your glory. Amen." }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Video Section */}
      <section style={{ background: "#07070F", borderTop: "1px solid #1E1E32", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#F2F2F8", marginBottom: "0.5rem" }}>Video Resources: Proverbs 26</h2>
            <p style={{ color: "#9898B3", fontSize: "0.95rem" }}
              dangerouslySetInnerHTML={{ __html: "Sermons, overviews, and teachings on the fool, the sluggard, and the quarrelsome person in Proverbs 26." }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "1.5rem" }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "12px", overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "0.875rem 1rem" }}>
                  <div style={{ color: "#F2F2F8", fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.4 }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer callout */}
      <section style={{ background: "#12121F", borderTop: "1px solid #1E1E32", padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.75rem" }}>Continue Studying Proverbs</h3>
          <p style={{ color: "#9898B3", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "1.25rem" }}
            dangerouslySetInnerHTML={{ __html: "Proverbs 26 is part of the larger Solomonic collection in chapters 25&ndash;29. Continue into chapter 27 for wisdom on friendship, self-knowledge, and the stewardship of praise (&ldquo;Let another praise you, and not your own mouth&rdquo;). Or explore Proverbs 31 for the climactic portrait of wisdom embodied in a life of character and virtue." }}
          />
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <span style={{ background: "#1E1E32", color: "#9898B3", padding: "0.4rem 0.9rem", borderRadius: "6px", fontSize: "0.85rem" }}>Proverbs 25&ndash;29</span>
            <span style={{ background: "#1E1E32", color: "#9898B3", padding: "0.4rem 0.9rem", borderRadius: "6px", fontSize: "0.85rem" }}>Wisdom Literature</span>
            <span style={{ background: "#1E1E32", color: "#9898B3", padding: "0.4rem 0.9rem", borderRadius: "6px", fontSize: "0.85rem" }}>Character Formation</span>
            <span style={{ background: "#1E1E32", color: "#9898B3", padding: "0.4rem 0.9rem", borderRadius: "6px", fontSize: "0.85rem" }}>The Tongue</span>
          </div>
        </div>
      </section>

    </div>
  );
}
