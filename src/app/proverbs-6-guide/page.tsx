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
const TEAL = "#0D9488";
const ROSE = "#E11D48";
const PURPLE_LIGHT = "#a78bfa";

const videoItems = [
  { id: "mJ4kPsRtW8v", title: "Proverbs 6 - Six Things God Hates and Warnings Against Sin" },
  { id: "bG2nLxQhD5e", title: "Go to the Ant You Sluggard - Proverbs 6 Study" },
  { id: "cF7yZvNmK1s", title: "Proverbs 6 Explained - Debt Laziness and Adultery" },
  { id: "pT3wBrSjX9k", title: "What God Hates - Proverbs 6 Verse by Verse" },
];

const keyThemes = [
  {
    id: "financial",
    title: "The Danger of Financial Entanglement",
    color: GOLD,
    body: "Surety &mdash; co-signing or pledging oneself for another&apos;s debts &mdash; is treated in Proverbs 6 as a trap from which one must urgently escape. The chapter opens with this warning not because money is the greatest danger but because financial entanglement is a concrete, real-world test of wisdom. Godly living includes practical financial prudence. If you have given your hand in pledge for another, the father&apos;s advice is not to wait and see but to move immediately: &quot;Go, hasten, and plead urgently with your neighbor. Give your eyes no sleep and your eyelids no slumber; save yourself like a gazelle from the hand of the hunter, like a bird from the hand of the fowler.&quot; The imagery is of desperate escape &mdash; not managed withdrawal but urgent flight. The wise person recognizes a trap and treats it accordingly. Financial commitments made without adequate wisdom can enslave the soul and drain the life. The chapter&apos;s opening is a mercy: there is still time to escape, but do not delay.",
  },
  {
    id: "ant",
    title: "The Ant as Model of Diligence",
    color: GREEN,
    body: "The ant parable (vv.6-8) is one of the most memorable object lessons in Scripture. Go to the ant, consider her ways, and be wise. She has no commander, no overseer, no ruler &mdash; yet she prepares her food in summer and gathers her harvest in autumn. The ant works not under compulsion but by internal wisdom. This is the model of diligence Proverbs commends: not labor extracted by threat but work done because the wise person understands the seasons of life. Laziness is not merely a character flaw or a productivity problem &mdash; it is a spiritual danger. The sluggard&apos;s poverty &quot;will come upon you like a robber, and want like an armed man.&quot; The image is violent: deprivation does not arrive gently for those who refuse to work when the season for work is available. In our spiritual lives as in our physical, the summer season does not last forever. The disciplines of prayer, Scripture reading, and community must be built in the seasons when they are possible, or they will be absent when they are most needed.",
  },
  {
    id: "troublemaker",
    title: "The Troublemaker and Discord",
    color: ROSE,
    body: "Proverbs 6:12-15 describes a figure the Hebrew calls a man of belial &mdash; a worthless man, a scoundrel. His defining characteristic is not overt violence but subtle manipulation: crooked speech, winking eyes, shuffling feet, pointing fingers. He communicates through innuendo and code; he &quot;devises evil with perverted heart&quot; and &quot;continually sows discord.&quot; The description is chilling precisely because it sounds so familiar. The troublemaker is not a monster but a human being who has given himself over to the project of destroying community from within. His calamity will come suddenly, the father says, broken beyond healing in a moment. This is a sobering warning: the sower of discord is not building toward safety but toward sudden ruin. God takes the destruction of community so seriously that sowing strife among brothers appears at the climax of the list of seven abominations (v.19). The church and the family are both communities that the troublemaker threatens; wisdom arms us to recognize and refuse his patterns.",
  },
  {
    id: "seven",
    title: "The Seven Things God Hates",
    color: PURPLE_LIGHT,
    body: "Proverbs 6:16-19 contains one of the most memorable lists in all of Proverbs: six things the LORD hates, seven that are abominations to him. The rhetorical form (x, x+1) builds anticipation, and the climax is striking. The list begins with pride (&quot;haughty eyes&quot;) and ends with discord (&quot;one who sows discord among brothers&quot;). Between them: a lying tongue, hands that shed innocent blood, a heart that devises wicked plans, feet that make haste to run to evil, and a false witness who breathes out lies. The word &quot;abomination&quot; (to&apos;evah) is the strongest term in Hebrew for what is repugnant and unacceptable to God. These are not merely bad habits; they are the things that call forth God&apos;s revulsion. The list spans the inner life (proud heart, scheming mind) and the outer life (violent hands, lying tongue, discord-sowing relationships). Wisdom requires examining ourselves honestly against this list &mdash; particularly for the sins that seem less dramatic but appear here: pride, lying, rushing toward what is evil, and breaking the unity of brothers.",
  },
  {
    id: "adultery",
    title: "The Utter Folly of Adultery",
    color: TEAL,
    body: "The final section of Proverbs 6 (vv.20-35) returns to the theme of sexual wisdom. The father calls his son to keep his commandments as a lamp for the path &mdash; precisely so that they will guard him from the adulteress. What is remarkable about this passage is the economic comparison: even a thief who steals because he is hungry is not despised in the way an adulterer is. The thief has a comprehensible motivation; he must make sevenfold restitution and will give all the goods of his house, but he is not utterly destroyed. The adulterer is different: &quot;he who does it destroys himself.&quot; The wounds and dishonor he receives will not be wiped away. And the husband&apos;s fury &mdash; described as jealousy as fierce as the grave &mdash; will not be appeased by any payment. The chapter presents adultery as not merely sinful but irrational: it makes no sense by any standard of self-interest, honor, or wisdom. The law and commandments are presented not as restrictions of joy but as protective lamps that keep the son from a path that leads to wounds, shame, and ruin beyond repair.",
  },
];

const verseByVerse = [
  {
    id: "v1-5",
    ref: "Verses 1-5",
    heading: "Warning Against Surety: Escape Like a Gazelle",
    body: "The chapter opens mid-instruction, as if the father is responding to a situation his son has already entered: &quot;My son, if you have put up security for your neighbor, have given your pledge for a stranger, if you are snared in the words of your mouth, caught in the words of your mouth...&quot; The trap is already sprung &mdash; what matters now is urgency. &quot;Do this, my son, and save yourself, for you have come into the hand of your neighbor: go, hasten, and plead urgently with your neighbor. Give your eyes no sleep and your eyelids no slumber; save yourself like a gazelle from the hand of the hunter, like a bird from the hand of the fowler.&quot; The two animal images &mdash; gazelle and bird &mdash; are of small, swift creatures in danger of lethal capture. The father is not suggesting reflection; he is urging immediate, urgent action. Financial pledges made for others are not neutral matters of generosity; they are traps that can enslave the one who made them. Wisdom moves to undo what foolishness has done, and it does so now.",
  },
  {
    id: "v6-11",
    ref: "Verses 6-11",
    heading: "Go to the Ant: The Sluggard&apos;s Poverty",
    body: "The famous ant passage: &quot;Go to the ant, O sluggard; consider her ways, and be wise. Without having any chief, officer, or ruler, she prepares her bread in summer and gathers her food in harvest.&quot; The ant&apos;s virtue is not raw industriousness but internal wisdom: she works without compulsion because she understands the seasons. The contrast with the sluggard is sharp. The father addresses the sluggard directly with gentle but devastating irony: &quot;How long will you lie there, O sluggard? When will you arise from your sleep?&quot; The sluggard&apos;s answer is also given: &quot;A little sleep, a little slumber, a little folding of the hands to rest&quot; &mdash; not a decision to quit but an indefinite deferral of effort. The outcome is described with striking violence: &quot;poverty will come upon you like a robber, and want like an armed man.&quot; The image overturns the sluggard&apos;s illusion of safety; rest has not protected him. The seasons of preparation are finite, and those who sleep through them will be overtaken by what they refused to prepare for.",
  },
  {
    id: "v12-15",
    ref: "Verses 12-15",
    heading: "The Wicked Man: Discord and Sudden Calamity",
    body: "The father describes the character of the &apos;ish belial &mdash; the man of worthlessness, the scoundrel: &quot;A worthless person, a wicked man, goes about with crooked speech, winks with his eyes, signals with his feet, points with his finger, with perverted heart devises evil, continually sowing discord.&quot; The portrait is of a man whose entire body has become an instrument of deception and division: his mouth speaks crookedly, his eyes wink (communicating what words do not say openly), his feet signal, his fingers point. Every organ of communication is bent toward manipulation and the destruction of community. &quot;Continually sowing discord&quot; (v.14) is the defining summary: this is a full-time project. The outcome (v.15): &quot;therefore calamity will come upon him suddenly; in a moment he will be broken beyond healing.&quot; The suddenness mirrors the suddenness of the sluggard&apos;s poverty (v.11) &mdash; two kinds of presumption, two sudden ends. The scoundrel who assumed he could manipulate without consequence discovers that consequence comes without warning.",
  },
  {
    id: "v16-19",
    ref: "Verses 16-19",
    heading: "Six Things God Hates, Seven Are Abominations",
    body: "One of the most memorable passages in all of Proverbs: &quot;There are six things that the LORD hates, seven that are an abomination to him: haughty eyes, a lying tongue, and hands that shed innocent blood, a heart that devises wicked plans, feet that make haste to run to evil, a false witness who breathes out lies, and one who sows discord among brothers.&quot; The numerical form (x, x+1) is a wisdom device that builds anticipation toward the climactic final item. Note that the list begins with internal pride (&quot;haughty eyes&quot; &mdash; the outward sign of an inward contempt) and ends with relational destruction (sowing discord among brothers). Between them are the tongue (lying), the hands (violence), the heart (scheming), the feet (rushing to sin), and the witness (false testimony). The entire person &mdash; inside and out, in private and in community &mdash; is implicated. The word &quot;abomination&quot; (to&apos;evah) is the strongest Hebrew term for what calls forth divine repugnance. These are not minor infractions; they are the things God finds most revolting.",
  },
  {
    id: "v20-23",
    ref: "Verses 20-23",
    heading: "Keep the Commandments: A Lamp for Your Path",
    body: "The chapter&apos;s final section begins with a call to keep the father&apos;s commandments and the mother&apos;s teaching: &quot;My son, keep your father&apos;s commandment, and forsake not your mother&apos;s teaching. Bind them on your heart always; tie them around your neck. When you walk, they will lead you; when you lie down, they will watch over you; and when you awake, they will talk with you.&quot; The commandments are presented as living companions &mdash; guides by day, guardians by night, counselors in the morning. They are not external rules imposed from outside but internalized wisdom that accompanies every moment of the day. Verse 23 makes explicit why: &quot;For the commandment is a lamp and the teaching a light, and the reproofs of discipline are the way of life.&quot; The function of the lamp is navigational &mdash; it illuminates the path so that the walker can see what lies ahead. The son who has bound the commandments on his heart can see the adulteress&apos;s path for what it is before he has traveled far down it.",
  },
  {
    id: "v24-29",
    ref: "Verses 24-29",
    heading: "The Evil Woman: Can You Walk on Coals?",
    body: "&quot;To preserve you from the evil woman, from the smooth tongue of the adulteress. Do not desire her beauty in your heart, and do not let her capture you with her eyelashes.&quot; The father identifies two modes of seduction: visual (her beauty, her eyelashes) and verbal (her smooth tongue). Both must be resisted at the level of the heart &mdash; desire is the battlefield. Then come three rhetorical questions that make the point through analogy. &quot;Can a man carry fire next to his chest and his clothes not be burned? Or can one walk on hot coals and his feet not be scorched?&quot; The questions do not require answers; they make the answer obvious. Of course not. Fire burns, coals scorch &mdash; these are not random outcomes but necessary ones. The application: &quot;So is he who goes in to his neighbor&apos;s wife; none who touches her will go unpunished.&quot; The relationship between cause and effect is as inevitable as fire and burning. The son who thinks he can engage with the adulteress without consequence is as deluded as a man who thinks he can carry fire against his chest and remain unburned.",
  },
  {
    id: "v30-35",
    ref: "Verses 30-35",
    heading: "The Adulterer Destroys Himself: Worse Than a Thief",
    body: "The chapter closes with a legal and social comparison that illuminates how radical a sin adultery is: &quot;People do not despise a thief if he steals to satisfy his appetite when he is hungry, but if he is found, he will pay sevenfold; he will give all the goods of his house.&quot; Even theft has a comprehensible motivation and a pathway to restitution. The adulterer has no such excuse: &quot;He who commits adultery lacks sense; he who does it destroys himself. He will get wounds and dishonor, and his disgrace will not be wiped away.&quot; The word translated &quot;lacks sense&quot; literally means &quot;lacks heart&quot; &mdash; the seat of wisdom and moral discernment. This is not merely a sin; it is the act of a man who has lost his capacity for wisdom. The outcome is wounds, dishonor, and permanent disgrace. And the husband? &quot;For jealousy makes a man furious, and he will not spare when he takes revenge. He will accept no compensation; he will refuse though you multiply gifts.&quot; No payment can undo what has been done. The chapter that began with the trap of financial surety ends with a debt that cannot be repaid by any wealth: the honor destroyed by adultery.",
  },
];

const applicationItems = [
  {
    id: "financial",
    heading: "Guard Financial Commitments Carefully and Avoid Over-Leveraging",
    body: "Proverbs 6:1-5 takes financial wisdom with complete seriousness as a dimension of godly living. The urgency of the father&apos;s advice about surety &mdash; escape like a gazelle, give your eyes no sleep &mdash; reflects the real danger that financial entanglement poses to one&apos;s freedom and peace. Practically: before co-signing a loan, pledging collateral, or entering financial partnership, apply the same spiritual discernment you would to any major decision. If you have already made commitments that are becoming traps, move urgently and wisely to understand your obligations and where possible to reduce your exposure. &quot;The rich rules over the poor, and the borrower is the slave of the lender&quot; (Proverbs 22:7). Financial wisdom is not a lower tier of spiritual concern; it is concrete faithfulness.",
  },
  {
    id: "diligence",
    heading: "Emulate the Ant&apos;s Diligence in Work and Spiritual Preparation",
    body: "The ant works without a commander because she is internally motivated by wisdom: she understands the seasons. In your work, pursue the kind of diligence that does not require external compulsion but flows from inner conviction about what matters and what will be needed. In your spiritual life, the same principle applies. The seasons for building spiritual habits &mdash; prayer, Scripture, community, worship &mdash; will not always be equally available. Build them when you can so they sustain you when the pressure comes. The sluggard&apos;s tragedy is not that she refused to work forever but that she deferred indefinitely, one &quot;a little longer&quot; at a time. Each small deferral feels harmless; the cumulative pattern is ruinous.",
  },
  {
    id: "seven",
    heading: "Examine Yourself Against the Seven Things God Hates",
    body: "Proverbs 6:16-19 gives a diagnostic list. Use it for honest self-examination. Are there areas of pride &mdash; haughty eyes &mdash; where you regard others with contempt? Is there dishonesty in your speech, your business dealings, or your self-presentation? Are there ways your heart devises plans that harm others? Are your feet swift to run toward what is evil &mdash; do you seek opportunities for sin rather than fleeing them? Do you speak false witness &mdash; gossip, distortion, half-truths? And most pointedly: are you a sower of discord among brothers and sisters? The last item in the list is perhaps the most subtle &mdash; people who stir up division often believe they are pursuing truth or justice. Proverbs places discord-sowing alongside lying and violence as an abomination. Pursue reconciliation and unity with the same energy you would give to avoiding violence.",
  },
  {
    id: "marriage",
    heading: "Protect Your Marriage and Relationships from Sexual Temptation",
    body: "Proverbs 6:20-35 presents the commandments as a lamp that keeps the son from the path of the adulteress. The practical application is to surround your marriage with active protection rather than passive hope. This means making intentional decisions about what you watch, what you read, what relationships you cultivate, and what environments you place yourself in. The rhetorical questions of vv.27-28 &mdash; can you carry fire against your chest and not be burned? &mdash; make explicit what wisdom already knows: proximity to certain situations is not neutral. Every marriage needs investment, not merely the absence of infidelity. Cultivate delight in your spouse (building on the vision of Proverbs 5) and erect the protective structures that make faithfulness sustainable.",
  },
  {
    id: "lamp",
    heading: "Let God&apos;s Word Be the Lamp That Guides Your Daily Decisions",
    body: "Verse 23: &quot;the commandment is a lamp and the teaching a light.&quot; The image of the lamp in a dark world is not occasional illumination but continuous guidance. Daily engagement with Scripture &mdash; not as a ritual to be completed but as a lamp to be carried &mdash; is what makes the right path visible before you have wandered far off it. The father describes the commandments as guides when you walk, guardians when you sleep, and counselors when you awake (vv.22). This is a total-life rhythm of wisdom, not a weekly consultation of moral rules. The person who has bound God&apos;s Word on their heart is not better at resisting temptation because they have stronger willpower; they can see further ahead on the path, and what was once tempting begins to look like what it is.",
  },
  {
    id: "laziness",
    heading: "Confront Laziness in Your Spiritual Life as You Would in Your Physical Life",
    body: "The same urgency the father brings to financial danger and sexual temptation, he brings to laziness. This is instructive. We tend to treat spiritual laziness &mdash; neglect of prayer, Scripture, community, service &mdash; as a lesser failure than moral failing. Proverbs does not make this distinction. The sluggard&apos;s poverty &quot;comes like a robber&quot; &mdash; suddenly, violently, without a gentle warning first. Spiritual sluggishness does the same: a person can live for years in the illusion that their nominal Christianity is adequate, until a crisis arrives and they discover that the habits of faith were never built when they were available. Treat spiritual formation with the same seriousness the ant applies to her harvest: this is the season for building. Do not defer indefinitely.",
  },
];

export default function Proverbs6GuidePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const tabs = ["Overview", "Key Themes", "Verse by Verse", "Application"];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 940, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", padding: "48px 0 40px" }}>
          <div style={{ display: "inline-block", background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 8, padding: "4px 16px", fontSize: 13, color: GOLD, fontWeight: 700, marginBottom: 16, letterSpacing: "0.08em" }}>
            PROVERBS 6
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 12, lineHeight: 1.15, color: TEXT }}>
            The Sluggard, Six Sins God Hates, and Warning Against Adultery
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "Proverbs 6 delivers three distinct but related warnings &mdash; on financial surety, laziness and discord, and the devastating folly of adultery &mdash; anchored by the famous list of seven things God hates." }}
          />
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <span style={{ background: `${GOLD}20`, color: GOLD, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>35 Verses</span>
            <span style={{ background: `${GREEN}18`, color: GREEN, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>Diligence vs. Laziness</span>
            <span style={{ background: `${ROSE}18`, color: ROSE, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>Seven Abominations</span>
            <span style={{ background: `${TEAL}18`, color: TEAL, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>Warning Against Adultery</span>
          </div>
        </div>

        {/* Video Grid */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 20, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
            Teaching Videos
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {videoItems.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.id} title={v.title} />
                <div style={{ padding: "12px 14px" }}>
                  <p style={{ color: TEXT, fontSize: 13, fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, marginBottom: 32, display: "flex", overflowX: "auto" }}>
          {tabs.map((label, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setTab(i)}
              style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: tab === i ? "2px solid #6B4FBB" : "2px solid transparent", cursor: "pointer", color: tab === i ? PURPLE_LIGHT : MUTED, fontWeight: tab === i ? 700 : 500, fontSize: 15, whiteSpace: "nowrap" }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab 0: Overview */}
        {tab === 0 && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 32, marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: GOLD, marginBottom: 18 }}>Overview of Proverbs 6</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 6 covers three distinct but related warnings from a father to his son. The chapter moves with deliberate structure: financial danger, moral danger, and sexual danger &mdash; three fronts on which the young man must be alert." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The first section (vv.1-5) addresses financial surety &mdash; the trap of pledging oneself for another&apos;s debts. If you have already done this, the father&apos;s counsel is not patient waiting but urgent action: free yourself like a gazelle from the hunter&apos;s hand. Practical financial wisdom is not a lower tier of godly living; it is part of the comprehensive life of wisdom." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The second section (vv.6-19) contains two of the chapter&apos;s most famous passages: the ant parable (vv.6-8) and the list of seven abominations (vv.16-19). Between them is a portrait of the wicked man (the &apos;ish belial) who sows discord with every organ of his body &mdash; crooked mouth, winking eyes, shuffling feet, pointing fingers. His end is sudden calamity. The seven abominations list escalates to its climactic final entry: the discord-sower, the one who destroys community among brothers." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "The third section (vv.20-35) returns to the sexual wisdom theme that runs through chapters 5-7. The father calls his son to bind the commandments on his heart as a lamp for the path, precisely so that they will guard him from the adulteress. The chapter ends with one of Scripture&apos;s starkest warnings: the adulterer destroys himself, receives wounds and dishonor that cannot be wiped away, and provokes a husband&apos;s jealousy that no amount of payment can appease." }}
              />
            </div>

            {/* Context Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 28 }}>
              <div style={{ background: CARD, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: GOLD, fontWeight: 800, fontSize: 13, marginBottom: 10, letterSpacing: "0.07em" }}>POSITION IN PROVERBS</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Proverbs 6 stands in the middle of chapters 5-7, which form the most extended treatment of sexual wisdom in the Old Testament. Chapter 5 establishes the warning and positive alternative; chapter 6 broadens into financial and moral wisdom before returning to sexual danger; chapter 7 presents the fullest dramatic portrait of seduction. The three chapters work together as a comprehensive instruction for the young man at the threshold of life." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${ROSE}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: ROSE, fontWeight: 800, fontSize: 13, marginBottom: 10, letterSpacing: "0.07em" }}>THE SEVEN ABOMINATIONS</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "The list of seven abominations (vv.16-19) is unique in Proverbs for its explicit statement of what God hates. The numerical device (six... seven) builds toward the climax. Note that the list is not dominated by dramatic crimes: it begins with the look of pride and ends with the breaking of community. Interior attitudes and relational destruction are placed alongside violence and lying as equally abominable to God." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 10, letterSpacing: "0.07em" }}>THE ANT PARABLE</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "The ant parable (vv.6-8) has no parallel in the rest of Proverbs and stands as one of the most elegant object lessons in the wisdom literature. The ant&apos;s virtue is not mere industriousness but internally-motivated wisdom: she knows what the seasons require and acts accordingly without being told. This is the model of the wise person &mdash; not driven by external compulsion but by internalized understanding of what life demands." }}
                />
              </div>
            </div>

            {/* Key Verse */}
            <div style={{ background: `${ROSE}10`, border: `1px solid ${ROSE}30`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ color: ROSE, fontWeight: 800, fontSize: 13, marginBottom: 14, letterSpacing: "0.07em" }}>KEY VERSE &mdash; PROVERBS 6:16-19</div>
              <blockquote style={{ margin: 0, padding: 0 }}>
                <p style={{ color: TEXT, fontSize: 18, fontStyle: "italic", lineHeight: 1.65, fontWeight: 600, margin: "0 0 12px" }}
                  dangerouslySetInnerHTML={{ __html: "&quot;There are six things that the LORD hates, seven that are an abomination to him: haughty eyes, a lying tongue, and hands that shed innocent blood, a heart that devises wicked plans, feet that make haste to run to evil, a false witness who breathes out lies, and one who sows discord among brothers.&quot;" }}
                />
                <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Proverbs 6:16-19 (ESV)</p>
              </blockquote>
            </div>
          </div>
        )}

        {/* Tab 1: Key Themes */}
        {tab === 1 && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 8 }}>Key Themes in Proverbs 6</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Five theological and pastoral themes that run through Proverbs 6 &mdash; each with direct application for life today." }}
              />
            </div>
            {keyThemes.map((theme) => (
              <div key={theme.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => toggle(theme.id)}
                  style={{ width: "100%", background: "none", border: "none", padding: "20px 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                    <span style={{ color: theme.color, fontWeight: 700, fontSize: 16 }} dangerouslySetInnerHTML={{ __html: theme.title }} />
                  </div>
                  <span style={{ color: MUTED, fontSize: 22, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>{open === theme.id ? "-" : "+"}</span>
                </button>
                {open === theme.id && (
                  <div style={{ padding: "0 24px 24px" }}>
                    <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20 }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Study note */}
            <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderRadius: 12, padding: 24, marginTop: 24 }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 12, letterSpacing: "0.07em" }}>STUDY NOTE: NEW TESTAMENT CONNECTIONS</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}
                dangerouslySetInnerHTML={{ __html: "The seven abominations list finds deep New Testament resonance. Jesus expands the scope of the commandment against murder in Matthew 5:21-22 by including anger and contempt &mdash; connecting the inner attitude of pride (&quot;haughty eyes&quot;) to the outward act of violence. Paul echoes the Proverbs 6 concern for discord in his letters: &quot;I urge you, brothers and sisters, to watch out for those who cause divisions... Keep away from them&quot; (Romans 16:17). The New Testament takes the unity of the body of Christ with such seriousness that discord-sowing is treated as a sin against the gospel itself." }}
              />
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "On the ant parable: Paul writes to the Thessalonians that &quot;anyone who is not willing to work shall not eat&quot; (2 Thessalonians 3:10) &mdash; a New Testament echo of Proverbs 6&apos;s concern that idleness destroys those who practice it. Diligence in work is not a cultural value separate from the gospel but a dimension of the new-creation life." }}
              />
            </div>
          </div>
        )}

        {/* Tab 2: Verse by Verse */}
        {tab === 2 && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 8 }}>Verse by Verse: Proverbs 6</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "A close reading of all 35 verses &mdash; attending to the father&apos;s structure, imagery, and the cumulative force of his three-part instruction." }}
              />
            </div>
            {verseByVerse.map((section, idx) => (
              <div key={section.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => toggle(section.id)}
                  style={{ width: "100%", background: "none", border: "none", padding: "20px 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${GOLD}20`, border: `1px solid ${GOLD}60`, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD, fontWeight: 800, fontSize: 12, flexShrink: 0 }}>
                      {idx + 1}
                    </div>
                    <div>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", marginBottom: 2 }}>{section.ref}</div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: section.heading }} />
                    </div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 22, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>{open === section.id ? "-" : "+"}</span>
                </button>
                {open === section.id && (
                  <div style={{ padding: "0 24px 24px" }}>
                    <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20 }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Quick reference */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 24 }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: 13, marginBottom: 16, letterSpacing: "0.07em" }}>QUICK REFERENCE: ALL 35 VERSES</div>
              {[
                { ref: "v.1-5", summary: "Warning against surety; if you&apos;ve pledged yourself, free yourself like a gazelle from the hunter&apos;s hand" },
                { ref: "v.6-11", summary: "Go to the ant, consider her ways; she has no commander but prepares her food in summer; sluggard&apos;s poverty comes suddenly" },
                { ref: "v.12-15", summary: "The wicked man (Belial) with crooked speech, winking eyes, shuffling feet, pointing fingers; devises evil, sows discord; calamity comes suddenly" },
                { ref: "v.16-19", summary: "Six things the LORD hates, seven are abominations: haughty eyes, lying tongue, hands that shed innocent blood, heart that devises wicked plans, feet swift to evil, false witness, one who sows discord" },
                { ref: "v.20-23", summary: "Keep father&apos;s commandment, mother&apos;s teaching; bind them on your heart; when you walk they lead you, when you sleep they watch; commandment is a lamp, teaching is light" },
                { ref: "v.24-29", summary: "To keep you from the evil woman; can a man carry fire next to his chest and not be burned? One who commits adultery lacks sense" },
                { ref: "v.30-35", summary: "Thief is not despised if he steals from hunger; but the adulterer destroys himself; wounds and dishonor; husband&apos;s fury; no amount of payment will appease him" },
              ].map((row) => (
                <div key={row.ref} style={{ display: "flex", gap: 16, padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                  <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 56, flexShrink: 0 }}>{row.ref}</span>
                  <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: row.summary }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Application */}
        {tab === 3 && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 8 }}>Application: Proverbs 6 for Today</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Six ways to live the wisdom of Proverbs 6 &mdash; covering finances, diligence, the seven abominations, sexual integrity, Scripture as lamp, and spiritual laziness." }}
              />
            </div>
            {applicationItems.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", background: "none", border: "none", padding: "20px 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}
                >
                  <span style={{ color: GOLD, fontWeight: 700, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.heading }} />
                  <span style={{ color: MUTED, fontSize: 22, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 24px 24px" }}>
                    <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20 }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Reflection questions */}
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28, marginTop: 28 }}>
              <div style={{ color: PURPLE_LIGHT, fontWeight: 800, fontSize: 13, marginBottom: 14, letterSpacing: "0.07em" }}>REFLECTION QUESTIONS</div>
              {[
                "Are there financial commitments in your life that have become traps? What would it look like to move urgently toward freedom?",
                "Where in your life does laziness show up most &mdash; in your work, your spiritual disciplines, your relationships? What &quot;summer&quot; is available to you right now that you are not using?",
                "When you read the seven abominations list, which one convicts you most? Why?",
                "Are you a peace-maker or a discord-sower in your community, church, or family? Be honest.",
                "How is Scripture functioning in your daily life &mdash; as a lamp you carry, or as a resource you consult occasionally?",
                "What protective structures do you have in place around your marriage and sexual integrity? Are they adequate?",
              ].map((q, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${PURPLE}30`, border: `1px solid ${PURPLE}`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE_LIGHT, fontWeight: 800, fontSize: 11, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                </div>
              ))}
            </div>

            {/* Prayer prompt */}
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: 13, marginBottom: 14, letterSpacing: "0.07em" }}>PRAYER PROMPT</div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Lord, search me and show me where I carry the things you hate &mdash; the haughty eyes, the crooked speech, the plans that harm rather than bless, the feet swift to evil. Forgive me and reorient my whole person toward you. Make me a person who works with the wisdom of the ant, who uses the seasons you give me to build what I will need. Protect me from the traps of financial foolishness and sexual sin. Let your commandments be a lamp so bright that the path of the adulteress looks dark by comparison. Make me a sower of peace among brothers, not discord. May the things you hate be the things I flee, and may the things you love be what I pursue. Amen." }}
              />
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
