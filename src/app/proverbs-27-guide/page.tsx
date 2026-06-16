"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Proverbs27Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "huwFgEhkRhY", title: "Proverbs 27 -- Iron Sharpens Iron and the Wisdom of Friendship" },
    { videoId: "xH5veFUPMFo", title: "Do Not Boast About Tomorrow -- Proverbs 27 Bible Study" },
    { videoId: "p7oHhRvq5Sg", title: "Know the Condition of Your Flocks -- Proverbs 27 on Stewardship" },
    { videoId: "RY9avU3M3GQ", title: "The Wounds of a Friend -- Proverbs 27 Faithful Correction" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "key-themes", label: "Key Themes" },
    { id: "verse-by-verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(160deg, #110e1a 0%, #07070F 60%)", borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GOLD}22`, border: `1px solid ${GOLD}44`, borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 18 }}>
            Old Testament &mdash; Wisdom Literature
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, margin: "0 0 16px", lineHeight: 1.15, color: TEXT }}>
            Proverbs 27
          </h1>
          <p style={{ fontSize: 18, color: MUTED, maxWidth: 660, margin: "0 auto 24px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "A rich collection of wisdom sayings about friendship, the heart, faithful correction, the danger of flattery, and faithful stewardship &mdash; practical wisdom for every dimension of daily life." }}
          />
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 18px", fontSize: 13, color: MUTED }}>
              <span style={{ color: GOLD, fontWeight: 700 }}>Author:</span> Solomon (primarily)
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 18px", fontSize: 13, color: MUTED }}>
              <span style={{ color: GOLD, fontWeight: 700 }}>Date:</span> c. 950&ndash;700 BC
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 18px", fontSize: 13, color: MUTED }}>
              <span style={{ color: GOLD, fontWeight: 700 }}>Genre:</span> Wisdom Poetry / Proverbs
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 18px", fontSize: 13, color: MUTED }}>
              <span style={{ color: GOLD, fontWeight: 700 }}>Verses:</span> 27 sayings
            </div>
          </div>
        </div>
      </div>

      {/* Key Verse Banner */}
      <div style={{ background: `${PURPLE}0f`, borderBottom: `1px solid ${PURPLE}22` }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "20px 24px", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: 16, fontStyle: "italic", color: TEXT, lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;Iron sharpens iron, and one man sharpens another.&rdquo; &mdash; <strong style=\"color:" + PURPLE + "\">Proverbs 27:17</strong>" }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", padding: "0 20px", overflowX: "auto" }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "16px 24px",
                border: "none",
                borderBottom: activeTab === t.id ? `2px solid ${GOLD}` : "2px solid transparent",
                background: "transparent",
                color: activeTab === t.id ? GOLD : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 14,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 32, marginBottom: 24 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 16 }}>What Is Proverbs 27?</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 27 is one of the richest chapters in the book of Proverbs &mdash; a concentrated collection of wisdom sayings that cover an unusually broad range of life&rsquo;s most important relationships and responsibilities. Unlike some chapters of Proverbs that feel loosely connected, Proverbs 27 has a thematic coherence: it is deeply concerned with two things above all else &mdash; the quality of our relationships and the faithfulness of our stewardship." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The chapter opens with a warning against presuming on tomorrow (v.1) and moves through sayings on praise and humility (v.2), heavy burdens (vv.3-4), the extraordinary value of honest friendship (vv.5-6), the sweetness of community (vv.7-9), loyalty to friends and family (v.10), and the wisdom of the prudent person who sees danger (v.12). The second half of the chapter moves toward stewardship: the condition of a person&rsquo;s flock (vv.23-27) is the test of faithful care." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "Perhaps the most famous verse in the chapter &mdash; and one of the most quoted verses in all of Proverbs &mdash; is v.17: &ldquo;Iron sharpens iron, and one man sharpens another.&rdquo; This image has shaped the Christian understanding of discipleship, accountability, and deep friendship for centuries. No one reaches their full potential alone. We are sharpened by the friction of honest, caring relationships." }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginBottom: 24 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: TEAL, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Literary Form</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Proverbs 27 consists of individual mashal &mdash; the Hebrew wisdom saying. These are not promises but observations about how life generally works when God&rsquo;s order is honored. They use comparison (&ldquo;as iron sharpens iron&rdquo;), contrast, numerical patterns, and vivid concrete imagery to make truth memorable and transferable." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: BLUE, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Book Context</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Chapter 27 falls within the second collection of Solomon&rsquo;s proverbs (25-29), described in 25:1 as copied by the men of Hezekiah. Chapters 25-27 have a slightly more agricultural and relational flavor than the earlier collections. Chapter 27 in particular feels like the wisdom of a senior person passing down hard-won insight about the most important things in life." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Theological Grounding</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Proverbs is grounded in the conviction that &ldquo;the fear of the LORD is the beginning of wisdom&rdquo; (1:7). Chapter 27 never uses the phrase &ldquo;fear of the LORD,&rdquo; but every proverb assumes it: genuine friendship, honest correction, faithful stewardship, and humility before tomorrow all flow from a rightly ordered relationship with God." }}
                />
              </div>
            </div>

            <div style={{ background: `${GOLD}0c`, border: `1px solid ${GOLD}28`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 12 }}>Major Topics at a Glance</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "v.1", label: "Humility before tomorrow", desc: "Do not boast about tomorrow; you do not know what a day may bring" },
                  { ref: "vv.2-4", label: "Praise, flattery, and jealousy", desc: "Let another praise you, not your own mouth; jealousy is cruel as the grave" },
                  { ref: "vv.5-6", label: "Faithful friendship", desc: "Better is open rebuke than hidden love; faithful are the wounds of a friend" },
                  { ref: "vv.7-10", label: "The sweetness of community", desc: "Oil and perfume gladden the heart &mdash; so the sweetness of a friend&rsquo;s counsel" },
                  { ref: "vv.11-14", label: "Wisdom and prudence", desc: "The prudent sees danger and hides; greeting a friend loudly at dawn is a curse" },
                  { ref: "vv.15-16", label: "The quarrelsome person", desc: "A continual dripping on a rainy day is a quarrelsome wife" },
                  { ref: "v.17", label: "Iron sharpening iron", desc: "One person sharpens the character of another through honest engagement" },
                  { ref: "vv.18-22", label: "Character and the heart", desc: "As water reflects a face, so the heart of a person reflects who they are" },
                  { ref: "vv.23-27", label: "Faithful stewardship", desc: "Know well the condition of your flocks &mdash; riches do not last forever" },
                ].map((s) => (
                  <div key={s.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ background: `${GOLD}22`, border: `1px solid ${GOLD}44`, borderRadius: 6, padding: "3px 10px", fontSize: 11, fontWeight: 700, color: GOLD, whiteSpace: "nowrap", flexShrink: 0 }}>{s.ref}</div>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{s.label}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}
                        dangerouslySetInnerHTML={{ __html: s.desc }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>Why This Chapter Matters</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 27 speaks with unusual directness to some of the most pressing questions of contemporary life: How do we find and maintain friendships that actually make us better? How do we handle correction without becoming defensive? How do we practice faithful stewardship of what we have been given without presuming that tomorrow is guaranteed? How do we cultivate the kind of inner life that produces genuine wisdom rather than mere cleverness?" }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "The proverbs of chapter 27 are the kind of wisdom that takes a lifetime to learn from experience &mdash; but that a mentor or a chapter of Scripture can hand to you in concentrated form. Reading Proverbs 27 carefully is an act of receiving accumulated wisdom from those who have gone before us and observed how God has ordered life to work." }}
              />
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "key-themes" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, marginBottom: 8 }}>Key Themes in Proverbs 27</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 32, lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{ __html: "Five major themes run through Proverbs 27, each illuminating an essential dimension of a wise and godly life." }}
            />

            {[
              {
                color: GOLD,
                icon: "I",
                title: "The Uncertainty of Tomorrow",
                ref: "Proverbs 27:1",
                body1: "&ldquo;Do not boast about tomorrow, for you do not know what a day may bring.&rdquo; This opening proverb is among the most countercultural statements in wisdom literature. In a world that rewards confidence, planning, and self-promotion, the sage says: hold tomorrow loosely. You do not know what it will bring. Boasting about tomorrow &mdash; treating the future as something you control and can bank on &mdash; is a form of pride that denies the fundamental creatureliness of human existence.",
                body2: "James 4:13-14 is the New Testament echo: &ldquo;Come now, you who say, &lsquo;Today or tomorrow we will go into such and such a town and spend a year there&rsquo;&hellip; yet you do not know what tomorrow will bring. What is your life? For you are a mist that appears for a little time and then vanishes.&rdquo; The antidote is not paralysis but humility: planning with open hands, holding tomorrow as a steward rather than an owner. &ldquo;Instead you ought to say, &lsquo;If the Lord wills, we will live and do this or that.&rsquo;&rdquo; (James 4:15).",
              },
              {
                color: PURPLE,
                icon: "II",
                title: "The Faithful Wounds of a Friend",
                ref: "Proverbs 27:5-6",
                body1: "&ldquo;Better is open rebuke than hidden love. Faithful are the wounds of a friend; profuse are the kisses of an enemy.&rdquo; This proverb makes a claim that cuts against our instincts: an honest wound from a friend is more valuable than endless affirmation. The &ldquo;hidden love&rdquo; of v.5a is the love that cares too much about the relationship to risk honesty &mdash; and paradoxically, by protecting the relationship from tension, it undermines the very thing it is trying to protect.",
                body2: "The &ldquo;wounds of a friend&rdquo; are called &ldquo;faithful&rdquo; &mdash; they come from someone who is committed to your wellbeing, not your comfort. Contrast this with &ldquo;the kisses of an enemy&rdquo; &mdash; profuse flattery that makes you feel good while hiding ulterior motives or omitting necessary truth. A true friend tells you what you need to hear, not only what you want to hear. This proverb is the foundation of biblical accountability and spiritual direction.",
              },
              {
                color: TEAL,
                icon: "III",
                title: "Iron Sharpening Iron",
                ref: "Proverbs 27:17",
                body1: "&ldquo;Iron sharpens iron, and one man sharpens another.&rdquo; This is one of the most memorable images in all of Proverbs &mdash; and it repays close attention. When two pieces of iron are rubbed together, both are affected. The process involves friction. Sparks may fly. But the result is that both edges become sharper. So with human relationships: genuine engagement &mdash; challenge, disagreement, honest conversation, even conflict &mdash; shapes and sharpens character.",
                body2: "The implication is deeply communal: you cannot fully become who God made you to be in isolation. You need the friction of real relationships with people who will tell you the truth, push back on your assumptions, model virtues you have not yet developed, and call out the blind spots you cannot see from the inside. This proverb is the basis of mentoring, accountability groups, spiritual friendship, and the kind of community where real formation happens rather than mere social niceness.",
              },
              {
                color: ROSE,
                icon: "IV",
                title: "The Heart Reflected in the Face",
                ref: "Proverbs 27:19",
                body1: "&ldquo;As in water face reflects face, so the heart of man reflects the man.&rdquo; This proverb observes something both simple and profound: a person&rsquo;s heart is expressed in who they are, just as a face is reflected in still water. You cannot separate who you are from what is in your heart. The heart is not a private inner room that can be kept entirely separate from public life &mdash; it leaks out in words, decisions, reactions, and the shape of a life over time.",
                body2: "This proverb connects to the broader biblical teaching on the centrality of the heart: &ldquo;Keep your heart with all vigilance, for from it flow the springs of life&rdquo; (Proverbs 4:23). Jesus makes the same point: &ldquo;Out of the abundance of the heart the mouth speaks&rdquo; (Matthew 12:34). Character formation &mdash; the work of sanctification &mdash; is therefore primarily a work of the heart. What you cultivate internally will inevitably appear externally. This is both a warning and a hope: a changed heart produces a changed person.",
              },
              {
                color: GREEN,
                icon: "V",
                title: "Know the Condition of Your Flocks",
                ref: "Proverbs 27:23-27",
                body1: "&ldquo;Know well the condition of your flocks, and give attention to your herds, for riches do not last forever; and does a crown endure to all generations?&rdquo; The chapter closes with an extended reflection on faithful stewardship in the agricultural world &mdash; but the principle is universal. The wise person does not simply assume that what they have will always be there. They pay attention. They tend. They are present to what has been entrusted to them.",
                body2: "The closing proverbs (vv.23-27) paint a picture of sustainable abundance: the person who tends their flock carefully will have enough. The grass grows back, the lambs provide clothing, the goats provide milk for the family. This is not a picture of anxious hoarding but of faithful presence to the responsibilities God has given. It is the stewardship parable of the talents translated into agricultural terms: those who tend what they have been given discover that it multiplies; those who neglect it lose it.",
              },
            ].map((theme) => (
              <div key={theme.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${theme.color}22`, border: `2px solid ${theme.color}55`, display: "flex", alignItems: "center", justifyContent: "center", color: theme.color, fontWeight: 900, fontSize: 13, flexShrink: 0 }}>{theme.icon}</div>
                  <div>
                    <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 17, margin: 0, lineHeight: 1.3 }}
                      dangerouslySetInnerHTML={{ __html: theme.title }}
                    />
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>{theme.ref}</div>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}
                  dangerouslySetInnerHTML={{ __html: theme.body1 }}
                />
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body2 }}
                />
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse-by-verse" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, marginBottom: 8 }}>Verse by Verse Commentary</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 32, lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{ __html: "A close reading of each section of Proverbs 27, attending to the imagery, the Hebrew background, and the practical wisdom embedded in each proverb." }}
            />

            {[
              {
                ref: "Proverbs 27:1",
                heading: "Do Not Boast About Tomorrow",
                color: GOLD,
                text: "&ldquo;Do not boast about tomorrow, for you do not know what a day may bring.&rdquo;",
                commentary: "This is the chapter&rsquo;s opening line and it sets the tone for everything that follows. The Hebrew word translated &ldquo;boast&rdquo; (halal) is related to the word for &ldquo;praise&rdquo; but here it has the sense of confident self-congratulation. To boast about tomorrow is to treat the future as if it were yours to control and display. The sage punctures this with devastating brevity: &ldquo;you do not know what a day may bring.&rdquo;",
                notes: "James 4:13-15 is the New Testament parallel, applying the same principle to business planning. The wisdom here is not against planning but against the subtle pride of treating tomorrow as a possession. The antidote is what James calls &ldquo;if the Lord wills.&rdquo; Every plan held loosely before God becomes an act of worship rather than a declaration of autonomy.",
              },
              {
                ref: "Proverbs 27:2",
                heading: "Let Another Praise You",
                color: PURPLE,
                text: "&ldquo;Let another praise you, and not your own mouth; a stranger, and not your own lips.&rdquo;",
                commentary: "The sage understands that self-promotion is both unattractive and unreliable. When we praise ourselves, we are both the witness and the defendant &mdash; a position that has obvious credibility problems. Real praise &mdash; the kind that actually means something &mdash; comes from others who have no stake in the verdict. The &ldquo;stranger&rdquo; of the second line is even more striking: the person who has nothing to gain from praising you is the most credible witness to your character.",
                notes: "The practical application is significant: seek to earn a reputation through consistent faithfulness rather than through self-advertisement. Jesus makes a similar point in Matthew 6 about almsgiving, prayer, and fasting: don&rsquo;t do them to be seen, but in secret, and your Father who sees in secret will reward you. The Christian understanding of honor runs opposite to the world&rsquo;s: we receive honor by not seeking it.",
              },
              {
                ref: "Proverbs 27:3-4",
                heading: "Stone, Sand, and Jealousy",
                color: ROSE,
                text: "&ldquo;A stone is heavy, and sand is weighty, but a fool&rsquo;s provocation is heavier than both. Wrath is cruel, anger is overwhelming, but who can stand before jealousy?&rdquo;",
                commentary: "These two proverbs use the technique of graduated comparison: as heavy as these burdens are, something is heavier. The fool&rsquo;s provocation &mdash; the relentless stupidity and irritation of a foolish person &mdash; is heavier than the physical weight of stone or sand. And among the destructive emotions, jealousy stands in a category of its own. Wrath is cruel, anger is overwhelming, but jealousy surpasses them.",
                notes: "The Hebrew word for jealousy (qin&rsquo;ah) can also be translated &ldquo;zeal&rdquo; &mdash; it describes an intense, consuming emotional energy. What makes jealousy more dangerous than anger is its comprehensive nature: anger typically targets a specific offense, but jealousy eats away at the soul over time, corroding character from the inside. The New Testament lists jealousy among the &ldquo;works of the flesh&rdquo; (Galatians 5:20). The story of Cain and Abel (Genesis 4) is the paradigmatic biblical picture of where unaddressed jealousy leads.",
              },
              {
                ref: "Proverbs 27:5-6",
                heading: "Open Rebuke and the Wounds of a Friend",
                color: GREEN,
                text: "&ldquo;Better is open rebuke than hidden love. Faithful are the wounds of a friend; profuse are the kisses of an enemy.&rdquo;",
                commentary: "This pair of proverbs makes a deeply counterintuitive claim: the person who corrects you honestly is more valuable than the person who loves you silently. &ldquo;Hidden love&rdquo; is love that withholds the truth for fear of conflict &mdash; a love that, in protecting its own comfort, fails its object. &ldquo;Open rebuke&rdquo; is correction that takes the risk of speaking, trusting that the relationship can bear honesty. The comparison is stark: hidden love is not as good as open rebuke. But the second proverb goes further: the wounds of a friend are &ldquo;faithful&rdquo; &mdash; they come from a committed, trustworthy source. Contrast this with the &ldquo;profuse kisses of an enemy&rdquo; &mdash; flattery is a more reliable indicator of enmity than honest criticism.",
                notes: "The word translated &ldquo;faithful&rdquo; (ne&rsquo;emanim) carries the weight of the Hebrew emet &mdash; faithfulness, reliability, truth. The wounds of a true friend are not random cruelty but faithful intervention. This is the foundation of biblical accountability: not a culture of attack but a culture of deep enough commitment that honesty is possible. Jesus extends this in Matthew 18:15-17 into the practice of church discipline: &ldquo;If your brother sins against you, go and tell him his fault.&rdquo; Going is the act of faithful friendship.",
              },
              {
                ref: "Proverbs 27:7-9",
                heading: "The Sweetness of Community and Friendship",
                color: TEAL,
                text: "&ldquo;One who is full loathes honey, but to one who is hungry everything bitter is sweet. Like a bird that strays from its nest is a man who strays from his home. Oil and perfume make the heart glad, and the sweetness of a friend comes from his earnest counsel.&rdquo;",
                commentary: "Verse 7 observes a fundamental truth about human desire: fullness creates contempt, and hunger creates appreciation. The same honey that a full person refuses is devoured by a hungry one. The sage uses this not as a comment on food but as a comment on the human tendency to take our blessings for granted. Verse 8 applies it to home and community: the person who wanders from their place of belonging is like a bird far from its nest &mdash; exposed, disoriented, vulnerable. Verse 9 arrives at the heart of the section: as oil and perfume are pleasant to the physical senses, so the earnest counsel of a true friend is pleasant to the soul.",
                notes: "The Hebrew of v.9 is somewhat debated, but the image is clear: the right friend, at the right moment, speaking from genuine care and wisdom, is an experience of profound delight. The word &ldquo;earnest&rdquo; (translated various ways) suggests depth &mdash; counsel that comes from the soul rather than the surface. This is contrasted implicitly with the empty pleasantries of the merely sociable person. Friendship at this level is increasingly rare and increasingly precious in an age of shallow connectivity.",
              },
              {
                ref: "Proverbs 27:10",
                heading: "Do Not Forsake Your Friend",
                color: BLUE,
                text: "&ldquo;Do not forsake your friend or your father&rsquo;s friend, and do not go to your brother&rsquo;s house in the day of your calamity. Better is a neighbor who is near than a brother who is far away.&rdquo;",
                commentary: "This proverb is about the importance of maintaining long-term relational commitments rather than only turning to relationships when you need them. The friend who has been consistently present and faithful over years may be more available and more useful in a crisis than a biological brother who lives far away. Proximity and consistent investment matter in relationships. You cannot neglect a friendship for years and then expect it to function in a crisis.",
                notes: "The mention of &ldquo;your father&rsquo;s friend&rdquo; is striking &mdash; there is wisdom in honoring the relationships that have been built across generations. Long friendships, friendships that span decades, and friendships that connect across generations, carry a depth and rootedness that newer relationships cannot. The ancient world understood this better than the modern: relationship networks were maintained carefully because they were survival networks. The church, as the household of God, is meant to function as this kind of multi-generational community of reliable presence.",
              },
              {
                ref: "Proverbs 27:11-14",
                heading: "Wisdom, Prudence, and Social Foolishness",
                color: PURPLE,
                text: "&ldquo;Be wise, my son, and make my heart glad, that I may answer him who reproaches me. The prudent sees danger and hides himself, but the simple go on and suffer for it. Take a man&rsquo;s garment when he has put up security for a stranger, and hold it in pledge when he puts up security for foreigners. Whoever blesses his neighbor with a loud voice, rising early in the morning, will be counted as cursing.&rdquo;",
                commentary: "This section moves from a general call to wisdom (v.11 &mdash; the parent will be vindicated when the child lives wisely) to three specific pictures of prudence and its failures. The prudent person sees danger ahead and acts to avoid it (v.12) &mdash; a virtue that requires both perception (seeing what is coming) and humility (being willing to hide rather than face it with bravado). Verse 13 is a warning about financial foolishness &mdash; putting up security for a stranger is risky enough that even his garment should be held. Verse 14 is delightfully practical: excessive early-morning praise of a neighbor will be received as a nuisance rather than as a compliment. Context, timing, and manner all matter in social wisdom.",
                notes: "The prudence of v.12 echoes Proverbs 22:3 almost exactly. The repetition of this proverb in the book suggests that seeing danger and avoiding it was considered a marker of genuine wisdom. There is no virtue in walking into preventable disaster. Wisdom is not the same as courage &mdash; sometimes wisdom looks like retreat, caution, or patience. The person who charges into every situation without forethought is not brave but foolish.",
              },
              {
                ref: "Proverbs 27:15-16",
                heading: "The Quarrelsome Person",
                color: ROSE,
                text: "&ldquo;A continual dripping on a rainy day and a quarrelsome wife are alike; to restrain her is to restrain the wind or to grasp oil in one&rsquo;s right hand.&rdquo;",
                commentary: "This proverb uses a brilliant sensory image: the relentless drip of water on a rainy day, when every drop falls in the same place and the sound never stops. A quarrelsome person creates the same psychological experience &mdash; relentless, wearing, unavoidable. Verse 16 adds two images of futility: trying to stop the quarrelsome person is as impossible as stopping the wind or holding oil in your palm. Both substances slip away the moment you try to grip them.",
                notes: "While the proverb uses the specific image of a quarrelsome wife (a recurring image in Proverbs: see also 19:13 and 21:9, 19), the principle applies broadly to any person in any close relationship who weaponizes conflict. The sage is not simply criticizing women &mdash; Proverbs celebrates the capable wife at extraordinary length in chapter 31. The specific proverb may address the marital relationship because that is where perpetual conflict is most acutely felt. The wisdom here is both practical (such a person is truly difficult to live with) and a call to examine our own patterns of conflict in intimate relationships.",
              },
              {
                ref: "Proverbs 27:17",
                heading: "Iron Sharpens Iron",
                color: TEAL,
                text: "&ldquo;Iron sharpens iron, and one man sharpens another.&rdquo;",
                commentary: "This is the most celebrated verse in Proverbs 27 and one of the most quoted proverbs in Christian circles. The image is from the workshop: to sharpen an iron blade, you press it against another piece of iron and apply friction. The process is not gentle &mdash; it produces sparks and requires force. But the result is an edge that cuts cleanly where it previously could not. The transfer of this image to human relationships is precise: genuine engagement &mdash; including challenge, confrontation, and honest disagreement &mdash; sharpens character. Two people who only agree, who never challenge each other, who smooth over all friction, do not sharpen each other. They go dull together.",
                notes: "Note what the proverb does not say: it does not say iron is destroyed by iron, or that one person must be sacrificed to sharpen the other. Both are sharpened. The metaphor envisions a mutually beneficial relationship in which both parties are changed by honest engagement. This is a picture of discipleship, accountability, and genuine spiritual friendship &mdash; not a culture of attack but a culture of committed, honest, mutual investment in each other&rsquo;s growth. The verb &ldquo;sharpens&rdquo; (yahed) is used only here in the Old Testament, emphasizing the uniqueness of this relational dynamic.",
              },
              {
                ref: "Proverbs 27:18",
                heading: "Tending What You Have Been Given",
                color: GREEN,
                text: "&ldquo;Whoever tends a fig tree will eat its fruit, and he who guards his master will be honored.&rdquo;",
                commentary: "This proverb pairs two images of faithful care: the fig tree tender who eats the fruit of consistent cultivation, and the servant who faithfully guards his master and receives honor in return. Both images emphasize the principle of patient, consistent investment. The fig tree does not produce overnight &mdash; it requires years of cultivation, pruning, and care. The servant who is honored is not the one who performs brilliantly in a single crisis but the one who has consistently proven trustworthy over time.",
                notes: "The fig tree is a prominent image throughout Scripture for peace, fruitfulness, and settled abundance (1 Kings 4:25; Micah 4:4; John 1:48). In Jesus&rsquo;s teaching, the fig tree appears as a sign of the kingdom and as a test of fruitfulness. The principle embedded in this proverb &mdash; that faithful tending produces fruitfulness &mdash; is the same principle that underlies the parable of the talents and Paul&rsquo;s agricultural metaphors in 1 Corinthians 3 and Galatians 6: &ldquo;whatever one sows, that will he also reap.&rdquo;",
              },
              {
                ref: "Proverbs 27:19-22",
                heading: "The Heart, Sheol, and the Crucible",
                color: PURPLE,
                text: "&ldquo;As in water face reflects face, so the heart of man reflects the man. Sheol and Abaddon are never satisfied, and never satisfied are the eyes of man. The crucible is for silver, and the furnace is for gold, and a man is tested by his praise.&rdquo;",
                commentary: "Verse 19 is one of the most psychologically astute observations in all of Proverbs: the heart reveals who you really are, just as water reveals your face. You cannot permanently hide your heart from those who observe you closely over time. What you love, what you fear, what you desire &mdash; these will appear in your patterns of behavior. Verse 20 adds a sobering note: Sheol and Abaddon (the realm of death) are never satisfied, and neither are human eyes &mdash; there is a capacity for insatiable desire built into human nature that nothing finite can fill. Verse 22 (which follows v.21 on the crucible for metals) adds: a man is tested by what he receives in praise. Character is revealed not only in adversity but in prosperity. How a person handles flattery, success, and praise shows who they really are.",
                notes: "Verse 20&rsquo;s observation about insatiable desire connects to Ecclesiastes&rsquo; extended meditation on the &ldquo;vanity&rdquo; of chasing satisfaction through created things (Ecclesiastes 1-2). Augustine&rsquo;s famous prayer: &ldquo;You have made us for yourself, and our heart is restless until it rests in Thee.&rdquo; The insatiability described in v.20 is not a defect to be cured by finding the right finite satisfaction &mdash; it is a sign that human beings were made for the infinite God.",
              },
              {
                ref: "Proverbs 27:23-27",
                heading: "Know the Condition of Your Flocks",
                color: GOLD,
                text: "&ldquo;Know well the condition of your flocks, and give attention to your herds, for riches do not last forever; and does a crown endure to all generations? When the grass is gone and the new growth appears and the vegetation of the mountains is gathered, the lambs will provide your clothing, and the goats the price of a field. There will be enough goats&rsquo; milk for your food, for the food of your household and maintenance for your girls.&rdquo;",
                commentary: "The chapter closes with one of the most practical passages in Proverbs &mdash; a sustained meditation on agricultural stewardship that carries universal application. The fundamental principle of vv.23-24 is clear: pay attention to what you have been given, because riches and power do not perpetuate themselves. A crown does not endure to all generations simply because it has been worn. A flock does not maintain itself without a shepherd. Everything entrusted to us requires active, attentive tending.",
                notes: "The closing vision (vv.25-27) is one of sustainable abundance: when you tend faithfully, there is enough. The grass grows back, the lambs provide clothing, the goats provide milk. The picture is not of hoarding or of anxious accumulation but of faithful presence to the natural rhythms of what God has given. The person who knows the condition of their flock &mdash; who pays attention, who is present, who adjusts to what is needed &mdash; will have enough for themselves, their household, and even their servants. Faithful stewardship is the path to lasting provision, not the quick grab at momentary riches.",
              },
            ].map((section) => (
              <div key={section.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ display: "inline-block", background: `${section.color}18`, border: `1px solid ${section.color}44`, borderRadius: 6, padding: "3px 12px", fontSize: 12, fontWeight: 700, color: section.color, marginBottom: 10 }}>{section.ref}</div>
                  <h3 style={{ color: section.color, fontWeight: 800, fontSize: 18, margin: 0, lineHeight: 1.3 }}
                    dangerouslySetInnerHTML={{ __html: section.heading }}
                  />
                </div>

                <div style={{ background: BG, border: `1px solid ${section.color}22`, borderRadius: 10, padding: 18, marginBottom: 18 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 10 }}>Scripture Text (ESV)</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0, fontStyle: "italic" }}
                    dangerouslySetInnerHTML={{ __html: section.text }}
                  />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>Commentary</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: section.commentary }}
                  />
                </div>

                <div style={{ background: `${PURPLE}0a`, border: `1px solid ${PURPLE}22`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>Notes &amp; Cross-References</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: section.notes }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, marginBottom: 8 }}>Application</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 32, lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{ __html: "How does Proverbs 27 shape the life and practices of the Christian today? Four core areas of formation from this chapter of concentrated wisdom." }}
            />

            <div style={{ background: `${TEAL}0c`, border: `1px solid ${TEAL}28`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ background: `${TEAL}22`, border: `1px solid ${TEAL}55`, borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 700, color: TEAL, flexShrink: 0 }}>Prov 27:17</div>
                <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 19, margin: 0, lineHeight: 1.3 }}>Cultivating Deep Friendships That Sharpen</h3>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "The image of iron sharpening iron (v.17) demands a deliberate response: most of us have far more shallow friendships than sharpening ones. A sharpening friendship is characterized by enough commitment that honesty is possible, enough safety that vulnerability is real, and enough time that patterns become visible. It is not formed instantly &mdash; it is cultivated intentionally over months and years." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "In an age of social media, most of us have hundreds of &ldquo;connections&rdquo; and very few friends who actually know us. The ancient wisdom of Proverbs 27 calls us back to the hard, slow work of deep friendship: meeting regularly, asking real questions, sharing real struggles, receiving real feedback, and investing in the growth of another person over time." }}
              />
              <div style={{ background: `${TEAL}10`, borderLeft: `3px solid ${TEAL}`, borderRadius: "0 8px 8px 0", padding: "12px 16px" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
                  dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + TEAL + "\">Practice:</strong> Identify one or two people in your life who could be a &ldquo;sharpening friend&rdquo; &mdash; someone whose judgment you respect and who knows you well enough to be honest with you. Invest specifically in those friendships: schedule regular time, ask deeper questions, share what you are actually struggling with, and invite honest feedback. Tell them explicitly: &ldquo;I want you to tell me what you actually think, not just what I want to hear.&rdquo;" }}
                />
              </div>
            </div>

            <div style={{ background: `${PURPLE}0c`, border: `1px solid ${PURPLE}28`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ background: `${PURPLE}22`, border: `1px solid ${PURPLE}55`, borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 700, color: PURPLE, flexShrink: 0 }}>Prov 27:5-6</div>
                <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 19, margin: 0, lineHeight: 1.3 }}>Accepting Correction from Trusted Friends</h3>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "The &ldquo;wounds of a friend&rdquo; (v.6) only help if they are received. Most of us are far better at giving correction than receiving it. When someone tells us something hard about our character, our first instinct is defensiveness, counter-attack, or dismissal. But the sage says the faithful wound is more valuable than flattery. To receive the wound well is to honor the friendship and to honor the truth being offered." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "A culture of correction requires two things: people who are willing to speak (vv.5-6), and people who are willing to receive (implicitly modeled throughout Proverbs in the &ldquo;wise son&rdquo; who listens to his father&rsquo;s instruction). Both are acts of humility. The person who cannot be corrected is the person who has made themselves unteachable &mdash; and according to Proverbs, that is the definition of a fool." }}
              />
              <div style={{ background: `${PURPLE}10`, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 8px 8px 0", padding: "12px 16px" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
                  dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + PURPLE + "\">Practice:</strong> Think of the last time someone offered you a criticism or correction. What was your first internal response? Did you receive it, dismiss it, or get defensive? Ask God for the grace to receive correction as a gift. When the next correction comes, practice saying &ldquo;thank you&rdquo; before responding. Take 24 hours before deciding whether the criticism is valid &mdash; but give it a genuinely fair hearing." }}
                />
              </div>
            </div>

            <div style={{ background: `${GREEN}0c`, border: `1px solid ${GREEN}28`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ background: `${GREEN}22`, border: `1px solid ${GREEN}55`, borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 700, color: GREEN, flexShrink: 0 }}>Prov 27:23</div>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 19, margin: 0, lineHeight: 1.3 }}>Faithful Stewardship of What God Entrusts</h3>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Know well the condition of your flocks&rdquo; &mdash; this is a principle of faithful attention. Whatever God has entrusted to us &mdash; finances, time, relationships, vocational work, a business, a family, a community &mdash; requires the same active, attentive tending that the shepherd gives to the flock. The flock does not maintain itself. Neither does anything else of value." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "The warning of v.24 &mdash; &ldquo;riches do not last forever&rdquo; &mdash; is a call to active stewardship rather than passive possession. What you have today may not be there tomorrow. The wise person is not anxious about this but attentive to it: regularly assessing the condition of their resources, relationships, and responsibilities, and adjusting their care accordingly." }}
              />
              <div style={{ background: `${GREEN}10`, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "12px 16px" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
                  dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + GREEN + "\">Practice:</strong> Conduct a &ldquo;flock inventory&rdquo; &mdash; an honest assessment of the most important things God has entrusted to you. Your finances: do you know their condition? Your closest relationships: are you attending to them, or assuming they will maintain themselves? Your health, your vocational work, your spiritual disciplines: where is faithful attention most needed? Name one area where you have been neglecting to &ldquo;know the condition of your flock&rdquo; and take one concrete step toward tending it this week." }}
                />
              </div>
            </div>

            <div style={{ background: `${GOLD}0c`, border: `1px solid ${GOLD}28`, borderRadius: 14, padding: 28, marginBottom: 36 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ background: `${GOLD}22`, border: `1px solid ${GOLD}55`, borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 700, color: GOLD, flexShrink: 0 }}>Prov 27:1</div>
                <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 19, margin: 0, lineHeight: 1.3 }}>Not Presuming on Tomorrow</h3>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "The opening proverb &mdash; &ldquo;do not boast about tomorrow, for you do not know what a day may bring&rdquo; &mdash; is not a counsel of despair but of humility. We are creatures, not creators. We inhabit time but do not control it. Every day is a gift, not a possession. This knowledge, taken seriously, produces the kind of gratitude and present-tense attentiveness that wisdom consistently calls us toward." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}
                dangerouslySetInnerHTML={{ __html: "James 4:14 frames the same insight in terms of the brevity of life: &ldquo;you are a mist that appears for a little time and then vanishes.&rdquo; This is not morbid but liberating: if tomorrow is not mine to command, then today is fully sufficient for what God is calling me to. The burden of constructing and securing the future can be laid down. Today&rsquo;s faithfulness is enough." }}
              />
              <div style={{ background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0", padding: "12px 16px" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
                  dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + GOLD + "\">Practice:</strong> Begin each morning this week with a simple prayer of surrender: &ldquo;Lord, today is yours. I do not know what it will bring. I hold my plans loosely and trust you with the outcome. Let me be faithful today with what you have given me today.&rdquo; Notice at the end of the day what surprises came &mdash; both challenges and gifts &mdash; that you could not have anticipated. Let this build a habit of held-open hands before God each morning." }}
                />
              </div>
            </div>

            {/* Discussion Questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 36 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 20, marginBottom: 18 }}>Discussion Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Proverbs 27:1 warns against boasting about tomorrow. Where in your life do you most tend to treat tomorrow as a possession rather than a gift? How does the uncertainty of the future change how you hold your plans?",
                  "Verses 5-6 say &ldquo;better is open rebuke than hidden love.&rdquo; Have you ever withheld an honest word from someone to protect the relationship &mdash; and later realized you were actually failing them? What makes honest friendship so difficult?",
                  "Verse 17: &ldquo;iron sharpens iron.&rdquo; Who has sharpened you most significantly in your life? What did that relationship require from you? Do you currently have a sharpening friendship, or is that something you need to actively cultivate?",
                  "Verse 19 says the heart of a man reflects the man. When you look at the outward shape of your life &mdash; your words, your patterns, your decisions &mdash; what does it tell you about the condition of your heart?",
                  "The danger of flattery appears in multiple places in this chapter (vv.2, 6, 14, 21). What is the difference between genuine encouragement and flattery? How do you tell the difference when you receive it?",
                  "Verses 23-27 call for faithful attention to what we have been given. Where in your life have you been assuming things will maintain themselves without active tending? What is God calling you to tend more faithfully?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${GOLD}22`, border: `1px solid ${GOLD}44`, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD, fontWeight: 800, fontSize: 12, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIDEO SECTION (always visible at bottom) */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
          <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}
            dangerouslySetInnerHTML={{ __html: "Video teachings on Proverbs 27 &mdash; exploring faithful friendship, the dangers of flattery, iron sharpening iron, and stewardship of what God entrusts." }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GOLD, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.5 }}>Proverbs 27 &mdash; The Vine Bible Study</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer strip */}
      <div style={{ borderTop: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "28px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Proverbs 27 Bible Study Guide</div>
            <div style={{ color: MUTED, fontSize: 13 }}
              dangerouslySetInnerHTML={{ __html: "Part of The Vine&rsquo;s Scripture library &mdash; deep study for every chapter of the Bible." }}
            />
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}33`, borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700, color: GOLD }}>Proverbs 26</div>
            <div style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}33`, borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700, color: GREEN }}>Proverbs 28</div>
          </div>
        </div>
      </div>

    </div>
  );
}
