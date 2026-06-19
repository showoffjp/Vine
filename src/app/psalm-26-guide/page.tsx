"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 26 - Vindicate Me, O LORD" },
  { videoId: "Q2oNOlXzBhY", title: "Integrity and the Examined Heart Explained" },
  { videoId: "8phkAg8PMHE", title: "I Love the Habitation of Your House" },
  { videoId: "fNk_zzaMoSs", title: "Washing Hands in Innocence - From Psalm 26 to the Cross" },
];

interface ThemeItem {
  id: string;
  title: string;
  reference: string;
  body: string;
}

const themeItems: ThemeItem[] = [
  {
    id: "t-vindicate",
    title: "The Bold Plea to Be Examined",
    reference: "Psalm 26:1-2",
    body:
      "<p>Psalm 26 opens with one of the most arresting prayers in the Psalter: &ldquo;Vindicate me, O LORD, for I have walked in my integrity, and I have trusted in the LORD without wavering. Prove me, O LORD, and try me; test my heart and my mind&rdquo; (26:1-2). David does not shrink from God&rsquo;s scrutiny; he invites it. He asks to be assayed like metal in the fire, examined to the very depths of his thoughts and affections.</p>" +
      "<p>This is a daring request, and it can be badly misunderstood. David is not claiming sinless perfection, nor parading a self-righteous resume before God. The very next psalms in his life and in the Psalter make plain that he knew himself a sinner. Rather, this is the prayer of a man under false accusation, who asks the searching God to confirm that his heart truly belongs to the LORD and that his accusers slander him.</p>" +
      "<p>The same searching is welcomed by every honest believer: &ldquo;Search me, O God, and know my heart! Try me and know my thoughts!&rdquo; (Psalm 139:23). To pray this prayer is to want the truth about ourselves more than we want our comfort &mdash; to stand willingly in the light of the One who tests the heart.</p>",
  },
  {
    id: "t-integrity",
    title: "Integrity as Wholehearted Devotion",
    reference: "Psalm 26:1, 11",
    body:
      "<p>The Hebrew word translated &ldquo;integrity&rdquo; is tom, and it does not mean flawless innocence but rather wholeness, completeness, single-heartedness. To walk in one&rsquo;s integrity is to belong to God without reservation, to have an undivided heart that is not secretly serving two masters. It is the opposite of the double-minded life.</p>" +
      "<p>So when David says, &ldquo;I have walked in my integrity&rdquo; (26:1), and again, &ldquo;But as for me, I shall walk in my integrity&rdquo; (26:11), he is not boasting of a sinless record. He is confessing a settled allegiance: he has not gone over to the side of God&rsquo;s enemies; his trust has been in the LORD &ldquo;without wavering.&rdquo; His devotion, though imperfect in execution, is whole in its direction.</p>" +
      "<p>This is the integrity the gospel both requires and supplies. &ldquo;Blessed are the pure in heart, for they shall see God&rdquo; (Matthew 5:8). The pure in heart are not the sinless but the single-hearted, those whose deepest loyalty has been claimed by God &mdash; and in Christ that wholeness is restored to us and worked into us by the Spirit.</p>",
  },
  {
    id: "t-separation",
    title: "Separation from the Company of Evildoers",
    reference: "Psalm 26:4-5, 9-10",
    body:
      "<p>The integrity David describes is not only inward but visible in his companionships: &ldquo;I do not sit with men of falsehood, nor do I consort with hypocrites. I hate the assembly of evildoers, and I will not sit with the wicked&rdquo; (26:4-5). The single-hearted life turns away from the fellowship of those who are at war with God. The heart that loves God&rsquo;s house cannot at the same time be at home in the company of falsehood.</p>" +
      "<p>This is not the proud disdain of one who thinks himself better than others. It is the holy instinct of love &mdash; the soul that treasures God refuses to share its loyalty with deceit, scheming, and bribery: &ldquo;in whose hands are evil devices, and whose right hands are full of bribes&rdquo; (26:10). To love the truth is to refuse to make a home in the lie.</p>" +
      "<p>The New Testament carries the same call: &ldquo;Do not be deceived: &lsquo;Bad company ruins good morals&rsquo;&rdquo; (1 Corinthians 15:33), and &ldquo;Come out from among them, and be separate&rdquo; (2 Corinthians 6:17). Yet this separation is never mere isolation; it is consecration &mdash; a being set apart unto God, so that the life may belong to him alone.</p>",
  },
  {
    id: "t-altar",
    title: "Washing the Hands and Going About the Altar",
    reference: "Psalm 26:6-7",
    body:
      "<p>&ldquo;I wash my hands in innocence and go around your altar, O LORD, proclaiming thanksgiving aloud, and telling all your wondrous deeds&rdquo; (26:6-7). David draws on the ritual of the worshiper who washed before approaching the holy things, a sign of the purity required to draw near to God. The washing was outward, but it pointed to an inward cleanness without which worship is empty.</p>" +
      "<p>This connects directly to the question of Psalm 24: &ldquo;Who shall ascend the hill of the LORD? And who shall stand in his holy place? He who has clean hands and a pure heart&rdquo; (Psalm 24:3-4). The clean hands and pure heart are the credentials of the true worshiper &mdash; not those who have never sinned, but those whose hands and hearts have been washed and consecrated to God.</p>" +
      "<p>Under the new covenant the symbol is fulfilled in a deeper cleansing. &ldquo;Let us draw near with a true heart in full assurance of faith, with our hearts sprinkled clean from an evil conscience and our bodies washed with pure water&rdquo; (Hebrews 10:22). The blood of Christ accomplishes what ceremonial washing could only picture, so that we may go about the altar of God with clean hands indeed.</p>",
  },
  {
    id: "t-house",
    title: "Love for the House Where Glory Dwells",
    reference: "Psalm 26:8",
    body:
      "<p>At the emotional center of the psalm stands a confession of love: &ldquo;O LORD, I love the habitation of your house and the place where your glory dwells&rdquo; (26:8). This single verse reveals the spring of all the rest. David&rsquo;s integrity, his separation from evildoers, his washed hands &mdash; all flow from a heart captivated by the dwelling place of God&rsquo;s glory.</p>" +
      "<p>To love God&rsquo;s house is to love God himself, for the house is precious only because his glory rests there. This is the affection that runs through the Psalter: &ldquo;How lovely is your dwelling place, O LORD of hosts!&rdquo; (Psalm 84:1), and &ldquo;One thing have I asked of the LORD&hellip; that I may dwell in the house of the LORD all the days of my life, to gaze upon the beauty of the LORD&rdquo; (Psalm 27:4).</p>" +
      "<p>For the Christian this love finds its fullness in Christ, in whom the glory of God dwells bodily, and in his people, who are now &ldquo;a holy temple in the Lord&rdquo; (Ephesians 2:21). The love that David poured out upon the tabernacle is poured out by the believer upon the Lord himself, in whose presence is the place where glory dwells.</p>",
  },
  {
    id: "t-trust",
    title: "Trust in the LORD Without Wavering",
    reference: "Psalm 26:1, 3",
    body:
      "<p>Twice David names the ground of his confidence: &ldquo;I have trusted in the LORD without wavering&rdquo; (26:1), and &ldquo;your steadfast love is before my eyes, and I walk in your faithfulness&rdquo; (26:3). His integrity is not a self-generated virtue but the fruit of a trust that keeps God&rsquo;s steadfast love continually in view. He walks in God&rsquo;s faithfulness, not his own.</p>" +
      "<p>Here is the secret of the whole psalm: the wholehearted life is rooted in unwavering trust, and that trust is sustained by keeping the hesed of God &mdash; his covenant love &mdash; ever before the eyes. The one who never loses sight of God&rsquo;s steadfast love finds his own loyalty held steady, for love answers love.</p>" +
      "<p>This is faith as the New Testament describes it &mdash; &ldquo;the assurance of things hoped for, the conviction of things not seen&rdquo; (Hebrews 11:1) &mdash; a trust that does not waver because it rests not on the worth of the one who trusts but on the faithfulness of the One who is trusted. &ldquo;He who calls you is faithful; he will surely do it&rdquo; (1 Thessalonians 5:24).</p>",
  },
  {
    id: "t-level",
    title: "My Foot Stands on Level Ground",
    reference: "Psalm 26:12",
    body:
      "<p>The psalm closes on a note of settled stability: &ldquo;My foot stands on level ground; in the great assembly I will bless the LORD&rdquo; (26:12). After the trembling petitions and the plea to be vindicated, David arrives at firm footing. The level ground is the steadiness of the one who trusts God &mdash; ground that does not shift or give way beneath him.</p>" +
      "<p>This stability is not the achievement of David&rsquo;s strength but the gift of God&rsquo;s faithfulness. The one whose eyes are fixed on God&rsquo;s steadfast love is set on ground that holds. &ldquo;He only is my rock and my salvation, my fortress; I shall not be greatly shaken&rdquo; (Psalm 62:6). The level place is the place of trust.</p>" +
      "<p>And the response to such stability is worship. Having found his footing, David turns at once to praise: &ldquo;in the great assembly I will bless the LORD.&rdquo; The soul set on solid ground does not hoard its security but pours it out in thanksgiving among the people of God, where the love of God&rsquo;s house finds its voice.</p>",
  },
];

interface VerseSection {
  id: string;
  reference: string;
  title: string;
  body: string;
}

const verseSections: VerseSection[] = [
  {
    id: "v-1",
    reference: "Psalm 26:1-3",
    title: "Vindicate Me, O LORD",
    body:
      "<p>&ldquo;Vindicate me, O LORD, for I have walked in my integrity, and I have trusted in the LORD without wavering. Prove me, O LORD, and try me; test my heart and my mind. For your steadfast love is before my eyes, and I walk in your faithfulness&rdquo; (26:1-3).</p>" +
      "<p>The psalm begins with a plea for vindication and a willing submission to God&rsquo;s testing. David asks the LORD to declare him in the right against his accusers, and he offers as evidence not a record of flawless deeds but a wholehearted devotion and an unwavering trust. He does not fear examination; he invites it: &ldquo;test my heart and my mind.&rdquo;</p>" +
      "<p>The ground of his confidence appears in verse 3: &ldquo;your steadfast love is before my eyes.&rdquo; David keeps God&rsquo;s hesed continually in view, and so he walks in God&rsquo;s faithfulness. His integrity is sustained by his gaze upon the covenant love of God. The examined life and the trusting life are one.</p>",
  },
  {
    id: "v-2",
    reference: "Psalm 26:4-5",
    title: "I Do Not Sit with Men of Falsehood",
    body:
      "<p>&ldquo;I do not sit with men of falsehood, nor do I consort with hypocrites. I hate the assembly of evildoers, and I will not sit with the wicked&rdquo; (26:4-5).</p>" +
      "<p>Having claimed an integrity of heart, David now shows its outward shape in his companionships. The single-hearted life refuses to make its home in the fellowship of falsehood. He will not sit with deceivers nor join the assembly of those who oppose God. His &ldquo;hatred&rdquo; here is not personal malice but a holy aversion to evil, the soul&rsquo;s recoil from what God hates.</p>" +
      "<p>The mention of &ldquo;hypocrites&rdquo; is pointed. David draws a line not only against open wickedness but against the deceit that wears a mask of piety. The wholehearted worshiper longs to be free of all pretense, both in others and in himself, and so keeps his distance from the company that trains the heart in falsehood.</p>",
  },
  {
    id: "v-3",
    reference: "Psalm 26:6-8",
    title: "I Love the Habitation of Your House",
    body:
      "<p>&ldquo;I wash my hands in innocence and go around your altar, O LORD, proclaiming thanksgiving aloud, and telling all your wondrous deeds. O LORD, I love the habitation of your house and the place where your glory dwells&rdquo; (26:6-8).</p>" +
      "<p>Here is the heart of the psalm. Separated from the company of evildoers, David turns toward the place of worship. He washes his hands in innocence &mdash; the sign of the purity required to draw near &mdash; and goes about the altar with a voice full of thanksgiving and testimony to God&rsquo;s wondrous deeds.</p>" +
      "<p>Then comes the verse that crowns the whole prayer: &ldquo;O LORD, I love the habitation of your house and the place where your glory dwells&rdquo; (26:8). This is the emotional center, the spring from which all the rest flows. David&rsquo;s integrity, his separation, his washed hands &mdash; all are the overflow of a heart captivated by the dwelling place of God&rsquo;s glory.</p>",
  },
  {
    id: "v-4",
    reference: "Psalm 26:9-10",
    title: "Do Not Sweep My Soul Away",
    body:
      "<p>&ldquo;Do not sweep my soul away with sinners, nor my life with bloodthirsty men, in whose hands are evil devices, and whose right hands are full of bribes&rdquo; (26:9-10).</p>" +
      "<p>David prays that his lot may not be the lot of the wicked. Having refused to sit with evildoers in life, he asks not to be swept away with them in judgment. The plea is urgent and humble: he does not presume upon his integrity but casts himself on God&rsquo;s mercy not to be numbered among those whose hands are full of scheming and bribery.</p>" +
      "<p>The description of the wicked is vivid &mdash; &ldquo;evil devices&rdquo; in their hands, &ldquo;bribes&rdquo; in their right hands. These are the hands David has refused to take. He has washed his own hands in innocence precisely so that they may not resemble these. The contrast underscores the whole prayer: two kinds of hands, two kinds of company, two destinies, and David pleads to be found on the side of God.</p>",
  },
  {
    id: "v-5",
    reference: "Psalm 26:11-12",
    title: "My Foot Stands on Level Ground",
    body:
      "<p>&ldquo;But as for me, I shall walk in my integrity; redeem me, and be gracious to me. My foot stands on level ground; in the great assembly I will bless the LORD&rdquo; (26:11-12).</p>" +
      "<p>The psalm ends with a renewed resolve and a settled peace. &ldquo;But as for me&rdquo; sets David apart from the wicked he has described: whatever others do, he will walk in his integrity. Yet in the same breath he prays, &ldquo;redeem me, and be gracious to me&rdquo; &mdash; proof that his integrity is no claim of self-sufficiency. The man of wholehearted devotion still casts himself wholly on grace.</p>" +
      "<p>And so he arrives at firm footing: &ldquo;My foot stands on level ground.&rdquo; The trembling plea for vindication gives way to the stability of one who trusts God. The final word is worship: &ldquo;in the great assembly I will bless the LORD.&rdquo; The love for God&rsquo;s house that beat at the center of the psalm now finds its voice in praise among the gathered people of God.</p>",
  },
];

interface AppSection {
  id: string;
  title: string;
  body: string;
}

const appSections: AppSection[] = [
  {
    id: "a-examine",
    title: "Welcome the Searching of God",
    body:
      "<p>Psalm 26 invites us to a courage most of us avoid: &ldquo;Prove me, O LORD, and try me; test my heart and my mind&rdquo; (26:2). It is far easier to ask God to bless us than to ask him to examine us. Yet the single-hearted life begins by welcoming his scrutiny, wanting the truth about ourselves more than our comfort.</p>" +
      "<p>Pray David&rsquo;s prayer slowly, joining it to Psalm 139: &ldquo;Search me, O God, and know my heart!&rdquo; (Psalm 139:23). Ask God to show you anything in your heart and mind that is divided, hidden, or false. To pray this way is not to invite condemnation but to step into the light, where the One who tests the heart also heals it.</p>",
  },
  {
    id: "a-whole",
    title: "Pursue Wholehearted Devotion, Not Perfectionism",
    body:
      "<p>The integrity of Psalm 26 is tom &mdash; wholeness, single-heartedness &mdash; not sinless perfection. This frees us from two errors at once: the despair that says &ldquo;I have failed, so I cannot pray this,&rdquo; and the pride that says &ldquo;I have never sinned.&rdquo; David pleads for vindication while also praying, &ldquo;redeem me, and be gracious to me&rdquo; (26:11).</p>" +
      "<p>Ask God for an undivided heart &mdash; not a flawless record, but a settled, unwavering loyalty to him. &ldquo;Unite my heart to fear your name&rdquo; (Psalm 86:11). The goal is not to be without sin but to be without a rival, to belong to God whole and entire.</p>",
  },
  {
    id: "a-company",
    title: "Guard Your Companionships",
    body:
      "<p>&ldquo;I do not sit with men of falsehood&rdquo; (26:4). The wholehearted life is shaped by the company it keeps. We become like those with whom we make our home, and the heart that loves God&rsquo;s house cannot also be at home in the fellowship of falsehood and deceit.</p>" +
      "<p>This is not a call to arrogance or isolation &mdash; Christ himself was the friend of sinners. It is a call to consecration: to choose our deepest companionships and influences wisely, refusing to let the assembly of evildoers train our hearts. &ldquo;Bad company ruins good morals&rdquo; (1 Corinthians 15:33). Surround yourself with those who love what God loves.</p>",
  },
  {
    id: "a-love-house",
    title: "Cultivate a Love for God&rsquo;s Presence",
    body:
      "<p>At the heart of the psalm is an affection: &ldquo;O LORD, I love the habitation of your house and the place where your glory dwells&rdquo; (26:8). Notice that David does not merely attend God&rsquo;s house; he loves it, because he loves the God whose glory dwells there. Worship is not duty but delight.</p>" +
      "<p>Ask God to give you this love &mdash; a heart that treasures his presence, that longs for the gathering of his people, that finds the place where his glory dwells to be the most precious place on earth. For the Christian, that dwelling is Christ himself and his people, the temple of the living God (Ephesians 2:21-22). Let your worship be the overflow of love.</p>",
  },
  {
    id: "a-clean",
    title: "Draw Near with Clean Hands and a True Heart",
    body:
      "<p>David washed his hands in innocence before going about the altar (26:6), enacting the truth of Psalm 24: only those with &ldquo;clean hands and a pure heart&rdquo; may ascend the hill of the LORD. We cannot manufacture such cleanness; the ceremonial washing pointed beyond itself to a deeper need.</p>" +
      "<p>That need is met in Christ. &ldquo;Let us draw near with a true heart in full assurance of faith, with our hearts sprinkled clean from an evil conscience&rdquo; (Hebrews 10:22). Before you worship, come to the One whose blood cleanses, and draw near not in your own innocence but in his. Then your hands, washed in his grace, may go about the altar with thanksgiving.</p>",
  },
];

const reflectionQuestions = [
  "David boldly asks God to &ldquo;test my heart and my mind&rdquo; (26:2). What holds you back from inviting God to examine you so honestly? What might he find that needs to be brought into the light?",
  "The integrity of Psalm 26 means wholeness and single-heartedness, not sinless perfection. Where in your life do you sense a divided heart &mdash; a loyalty to God that competes with some rival?",
  "How do your companionships and influences shape your heart? Are there places where you &ldquo;sit with falsehood&rdquo; in ways that pull you from God?",
  "David says, &ldquo;I love the habitation of your house&rdquo; (26:8). Is your worship more duty or delight? What would it look like to truly love the place where God&rsquo;s glory dwells?",
  "How does the deeper cleansing of Hebrews 10:22 &mdash; hearts sprinkled clean by Christ &mdash; change the way you draw near to God in worship?",
  "David ends with &ldquo;My foot stands on level ground&rdquo; (26:12). Where do you most need the stability that comes from trusting God rather than standing on your own footing?",
];

const closingPrayer =
  "<p>O LORD, vindicate me, for I have trusted in you. Prove me and try me; test my heart and my mind, for your steadfast love is before my eyes, and I would walk in your faithfulness. Search me and know me, and where you find anything false or divided within me, cleanse and restore it, that I may belong to you whole and entire.</p>" +
  "<p>Keep me from the company of falsehood and the assembly of evildoers, and unite my heart to fear your name. I wash my hands not in my own innocence but in the blood of Christ; sprinkle my heart clean from an evil conscience, that I may draw near to you with a true heart and full assurance of faith.</p>" +
  "<p>O LORD, I love the habitation of your house and the place where your glory dwells. Set my foot on level ground; redeem me, and be gracious to me. And in the great assembly of your people, let me bless your name forever, through Jesus Christ our Lord, in whom your glory dwells and your steadfast love is revealed. Amen.</p>";

export default function Psalm26Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: PURPLE + "22", color: PURPLE, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "2.5rem", lineHeight: 1.1, margin: "0 0 0.75rem", fontWeight: 800 }}>
            Psalm 26
          </h1>
          <p style={{ fontSize: "1.2rem", color: MUTED, margin: "0 0 1.75rem", fontWeight: 500 }}>
            A Prayer for Vindication Grounded in Love for God&rsquo;s House
          </p>
          <div style={{ background: CARD, border: "1px solid " + BORDER, borderLeft: "4px solid " + GOLD, borderRadius: 10, padding: "1.5rem 1.75rem" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: GOLD, marginBottom: 10 }}>
              Key Verse &mdash; Psalm 26:8
            </div>
            <p
              style={{ margin: 0, fontSize: "1.18rem", lineHeight: 1.6, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;O LORD, I love the habitation of your house and the place where your glory dwells.&rdquo;",
              }}
            />
          </div>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem", borderBottom: "1px solid " + BORDER, paddingBottom: 12 }}>
          {TABS.map((t) => {
            const active = t === tab;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  background: active ? PURPLE : "transparent",
                  color: active ? "#fff" : MUTED,
                  border: "1px solid " + (active ? PURPLE : BORDER),
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </nav>

        {tab === "overview" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1rem" }}>Overview</h2>
            <div
              style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#D9D9E8" }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>Psalm 26 is a prayer of David, the cry of a man under false accusation who asks God to vindicate him. It opens with the bold and startling request to be examined &mdash; &ldquo;Prove me, O LORD, and try me; test my heart and my mind&rdquo; (26:2) &mdash; and it is sustained throughout by a wholehearted devotion that does not fear the light. This is not the boast of a sinless man but the appeal of a single-hearted one, whose trust has been &ldquo;in the LORD without wavering&rdquo; (26:1).</p>" +
                  "<p>At the emotional center of the psalm stands a confession of love: &ldquo;O LORD, I love the habitation of your house and the place where your glory dwells&rdquo; (26:8). Everything else &mdash; the integrity, the separation from evildoers, the washing of hands in innocence &mdash; flows from this affection for the dwelling place of God&rsquo;s glory. The psalm closes on firm footing: &ldquo;My foot stands on level ground; in the great assembly I will bless the LORD&rdquo; (26:12).</p>",
              }}
            />
            <div style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, padding: "1.5rem 1.75rem", margin: "1.5rem 0" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 0.75rem", color: TEAL }}>Structure</h3>
              <div
                style={{ fontSize: "1.02rem", lineHeight: 1.7, color: "#D9D9E8" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<p>The psalm moves in a clear progression from plea to confession to settled peace:</p>" +
                    "<ul style='margin: 0.5rem 0 0; padding-left: 1.25rem;'>" +
                    "<li><strong>26:1-3</strong> &mdash; The plea to be vindicated and the welcome of God&rsquo;s testing.</li>" +
                    "<li><strong>26:4-5</strong> &mdash; Separation from the company of falsehood and evildoers.</li>" +
                    "<li><strong>26:6-8</strong> &mdash; Washed hands at the altar and love for the house where glory dwells.</li>" +
                    "<li><strong>26:9-10</strong> &mdash; The plea not to be swept away with sinners.</li>" +
                    "<li><strong>26:11-12</strong> &mdash; Renewed resolve, the cry for grace, and the stability of level ground.</li>" +
                    "</ul>",
                }}
              />
            </div>
            <div
              style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#D9D9E8" }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p><strong>Context.</strong> Psalm 26 belongs to the prayers of David, and its key word is tom &mdash; &ldquo;integrity&rdquo; &mdash; which means not sinless perfection but wholeness and single-hearted devotion. The bold request to be &ldquo;tested&rdquo; assumes a clear conscience before God, not a record of flawlessness; it is the prayer of a slandered man who asks the searching God to confirm that his heart truly belongs to the LORD. The washing of hands in innocence (26:6) echoes Psalm 24:4 &mdash; &ldquo;clean hands and a pure heart&rdquo; &mdash; and points forward to the deeper cleansing accomplished in Christ, by which we &ldquo;draw near with a true heart&hellip; with our hearts sprinkled clean from an evil conscience&rdquo; (Hebrews 10:22). And the closing image, &ldquo;My foot stands on level ground&rdquo; (26:12), captures the stability of all who keep God&rsquo;s steadfast love before their eyes and trust in him without wavering.</p>",
              }}
            />
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Key Themes</h2>
            {themeItems.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", padding: "1.1rem 1.5rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>
                      <span style={{ display: "block", fontSize: "1.1rem", fontWeight: 700, color: TEXT }}>{item.title}</span>
                      <span style={{ display: "block", fontSize: 13, color: PURPLE, marginTop: 4, fontWeight: 600 }}>{item.reference}</span>
                    </span>
                    <span style={{ color: MUTED, fontSize: 22, flexShrink: 0 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{ padding: "0 1.5rem 1.4rem", fontSize: "1.02rem", lineHeight: 1.75, color: "#D9D9E8", borderTop: "1px solid " + BORDER }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Verse by Verse</h2>
            {verseSections.map((sec) => {
              const isOpen = open === sec.id;
              return (
                <div key={sec.id} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggle(sec.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", padding: "1.1rem 1.5rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>
                      <span style={{ display: "block", fontSize: 13, color: TEAL, fontWeight: 700, letterSpacing: 0.5 }}>{sec.reference}</span>
                      <span style={{ display: "block", fontSize: "1.1rem", fontWeight: 700, color: TEXT, marginTop: 4 }}>{sec.title}</span>
                    </span>
                    <span style={{ color: MUTED, fontSize: 22, flexShrink: 0 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{ padding: "0 1.5rem 1.4rem", fontSize: "1.02rem", lineHeight: 1.75, color: "#D9D9E8", borderTop: "1px solid " + BORDER }}
                      dangerouslySetInnerHTML={{ __html: sec.body }}
                    />
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Application</h2>
            {appSections.map((sec) => (
              <div key={sec.id} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, padding: "1.4rem 1.6rem", marginBottom: 14 }}>
                <h3
                  style={{ fontSize: "1.18rem", fontWeight: 700, margin: "0 0 0.6rem", color: GREEN }}
                  dangerouslySetInnerHTML={{ __html: sec.title }}
                />
                <div
                  style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "#D9D9E8" }}
                  dangerouslySetInnerHTML={{ __html: sec.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: "1px solid " + BORDER, borderLeft: "4px solid " + ROSE, borderRadius: 10, padding: "1.5rem 1.75rem", margin: "1.75rem 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0 0 1rem", color: ROSE }}>Questions for Reflection</h3>
              <ol style={{ margin: 0, paddingLeft: "1.3rem", display: "flex", flexDirection: "column", gap: 12 }}>
                {reflectionQuestions.map((q, i) => (
                  <li
                    key={i}
                    style={{ fontSize: "1.02rem", lineHeight: 1.65, color: "#D9D9E8" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, margin: "2rem 0 1.25rem" }}>Watch and Reflect</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.9rem 1.1rem", fontSize: "0.95rem", fontWeight: 600, color: TEXT, lineHeight: 1.4 }}>{v.title}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: "1px solid " + BORDER, borderLeft: "4px solid " + PURPLE, borderRadius: 10, padding: "1.75rem 1.9rem", marginTop: "2.25rem" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 1rem", color: PURPLE }}>A Closing Prayer</h3>
              <div
                style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#E4E4F0", fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: closingPrayer }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
