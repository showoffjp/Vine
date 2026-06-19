"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface AccordionItem {
  id: string;
  title: string;
  accent: string;
  body: string;
}

interface VerseSection {
  id: string;
  reference: string;
  label: string;
  body: string;
}

const THEME_ITEMS: AccordionItem[] = [
  {
    id: "theme-lifelong",
    title: "A Lifelong Resolve to Praise",
    accent: PURPLE,
    body:
      "<p style='margin:0 0 0.9rem'>The psalm opens with the worshipper turning to address his own soul: &ldquo;Praise the LORD, O my soul! I will praise the LORD as long as I live; I will sing praises to my God while I have my being&rdquo; (146:1&ndash;2). This is praise that engages the whole inner life and binds itself to the whole span of life. As long as breath remains, the psalmist resolves to sing. Praise is not reserved for the mountaintop or the festival; it is the steady occupation of an entire lifetime.</p>" +
      "<p style='margin:0 0 0.9rem'>There is something bracing about a soul commanding itself. The psalmist does not wait passively for worship to well up; he summons it: &ldquo;Praise the LORD, O my soul.&rdquo; Faith often means speaking truth to ourselves when our feelings lag behind, calling our own hearts back to the God who is worthy. And the horizon of this praise is the worshipper&rsquo;s whole &ldquo;being&rdquo; &mdash; every faculty and every day enlisted in the song.</p>" +
      "<p style='margin:0'>This lifelong note threads through the whole Psalter and into the New Testament, where Paul urges believers to be &ldquo;singing and making melody to the Lord with your heart&rdquo; (Ephesians 5:19) and to do &ldquo;everything in the name of the Lord Jesus, giving thanks to God the Father through him&rdquo; (Colossians 3:17). A life of praise is a life rightly aimed.</p>",
  },
  {
    id: "theme-princes",
    title: "Put Not Your Trust in Princes",
    accent: ROSE,
    body:
      "<p style='margin:0 0 0.9rem'>The psalm issues a sharp warning against misplaced trust: &ldquo;Put not your trust in princes, in a son of man, in whom there is no salvation. When his breath departs, he returns to the earth; on that very day his plans perish&rdquo; (146:3&ndash;4). However powerful a human ruler may seem, he is still &ldquo;a son of man&rdquo; &mdash; mortal, frail, made of dust. There is no salvation in him, not because he is wicked, but because he is finite. He will die, and when he does, the great schemes he built will perish with him in a single day.</p>" +
      "<p style='margin:0 0 0.9rem'>The point is not that earthly authorities are useless, but that they are the wrong foundation for ultimate hope. To anchor your deepest security in any human leader, institution, or movement is to build on something that breathes today and returns to the earth tomorrow. The psalmist clears away these false footings precisely so that he can point to the only sure one.</p>" +
      "<p style='margin:0'>Scripture sounds this warning often: &ldquo;It is better to take refuge in the LORD than to trust in princes&rdquo; (Psalm 118:9); &ldquo;Cursed is the man who trusts in man and makes flesh his strength&rdquo; (Jeremiah 17:5). And James reminds us how brief our plans are: our life &ldquo;is a mist that appears for a little time and then vanishes&rdquo; (James 4:14).</p>",
  },
  {
    id: "theme-blessed",
    title: "Blessed Is He Whose Hope Is in the LORD",
    accent: GOLD,
    body:
      "<p style='margin:0 0 0.9rem'>Over against the prince in whom there is no salvation stands the true ground of blessing: &ldquo;Blessed is he whose help is the God of Jacob, whose hope is in the LORD his God&rdquo; (146:5). This is the hinge of the whole psalm. Having warned us away from every fragile trust, the psalmist now names the one trust that will never fail &mdash; the covenant-keeping God of Jacob, who is also &ldquo;the LORD his God,&rdquo; personal and near.</p>" +
      "<p style='margin:0 0 0.9rem'>The title &ldquo;the God of Jacob&rdquo; is deliberate. Jacob was a flawed, struggling man whom God nonetheless chose, kept, and renamed Israel. To call God &ldquo;the God of Jacob&rdquo; is to invoke his covenant faithfulness &mdash; his proven habit of keeping promises to imperfect people across generations. The one whose help and hope rest there is &ldquo;blessed,&rdquo; truly happy, because his foundation cannot be shaken by death or time.</p>" +
      "<p style='margin:0'>This is the same blessedness Jeremiah describes: &ldquo;Blessed is the man who trusts in the LORD, whose trust is the LORD. He is like a tree planted by water&hellip; it does not fear when heat comes&rdquo; (Jeremiah 17:7&ndash;8). And it is the hope Peter celebrates, &ldquo;a living hope through the resurrection of Jesus Christ from the dead&rdquo; (1 Peter 1:3).</p>",
  },
  {
    id: "theme-maker",
    title: "The Maker of Heaven and Earth Who Keeps Faith",
    accent: TEAL,
    body:
      "<p style='margin:0 0 0.9rem'>Why is hope in the LORD so secure? The psalmist answers: because of who he is and what he does. He is the One &ldquo;who made heaven and earth, the sea, and all that is in them, who keeps faith forever&rdquo; (146:6). Unlike the prince whose breath departs, this God made everything that breathes. His power is the power that flung the stars into place and filled the seas. A hope grounded in the Creator rests on the firmest possible foundation.</p>" +
      "<p style='margin:0 0 0.9rem'>And this Creator &ldquo;keeps faith forever.&rdquo; Where the prince&rsquo;s plans perish in a day, God&rsquo;s faithfulness endures without end. He does not forget his promises, abandon his people, or change with the seasons. The same hands that made the world hold fast to every word he has spoken. Power without faithfulness would be frightening; faithfulness without power would be empty. In the LORD, almighty strength and unfailing fidelity are joined forever.</p>" +
      "<p style='margin:0'>This is the God of whom John writes, &ldquo;All things were made through him&rdquo; (John 1:3), and of whom Paul says, &ldquo;If we are faithless, he remains faithful &mdash; for he cannot deny himself&rdquo; (2 Timothy 2:13). To trust the Maker of heaven and earth who keeps faith forever is to build on rock.</p>",
  },
  {
    id: "theme-vulnerable",
    title: "The God Who Cares for the Vulnerable",
    accent: GREEN,
    body:
      "<p style='margin:0 0 0.9rem'>The center of the psalm unfolds a remarkable catalog of God&rsquo;s saving works, and every one of them is directed toward the weak and the overlooked. The LORD &ldquo;executes justice for the oppressed,&rdquo; &ldquo;gives food to the hungry,&rdquo; &ldquo;sets the prisoners free,&rdquo; &ldquo;opens the eyes of the blind,&rdquo; &ldquo;lifts up those who are bowed down,&rdquo; &ldquo;loves the righteous,&rdquo; &ldquo;watches over the sojourners,&rdquo; and &ldquo;upholds the widow and the fatherless&rdquo; (146:7&ndash;9). This is who the everlasting King concerns himself with: not the powerful, but the powerless.</p>" +
      "<p style='margin:0 0 0.9rem'>The list reads like a portrait of the people the world tends to forget &mdash; the oppressed, the hungry, the imprisoned, the blind, the crushed, the foreigner, the widow, the orphan. To each the LORD bends in active, rescuing love. And the catalog ends with a sober counterweight: &ldquo;but the way of the wicked he brings to ruin&rdquo; (146:9). The God who lifts the lowly will not let injustice stand forever.</p>" +
      "<p style='margin:0'>This catalog is strikingly echoed in the ministry of Jesus. In the synagogue at Nazareth he read from Isaiah, &ldquo;to proclaim good news to the poor&hellip; liberty to the captives and recovering of sight to the blind, to set at liberty those who are oppressed&rdquo; (Luke 4:18&ndash;19). And to John the Baptist&rsquo;s disciples he pointed to the evidence: &ldquo;the blind receive their sight&hellip; the poor have good news preached to them&rdquo; (Luke 7:22). In Christ, the saving works of Psalm 146 walked among us.</p>",
  },
  {
    id: "theme-reign",
    title: "The LORD Will Reign Forever",
    accent: PURPLE,
    body:
      "<p style='margin:0 0 0.9rem'>The psalm ends where it began, in praise, but now with its grandest note: &ldquo;The LORD will reign forever, your God, O Zion, to all generations. Praise the LORD!&rdquo; (146:10). The contrast with verse 4 could not be sharper. There, the prince&rsquo;s breath departs and his plans perish in a day; here, the LORD reigns forever, to all generations, world without end. Mortal rulers come and go like morning mist; the reign of God is everlasting.</p>" +
      "<p style='margin:0 0 0.9rem'>This is the answer to the psalm&rsquo;s opening warning. We are told not to trust in princes precisely because there is a King who never dies. To set our hope on him is to anchor ourselves to a throne that no death can vacate and no rebellion can topple. And he is &ldquo;your God, O Zion&rdquo; &mdash; not a distant despot but the covenant God of his people, reigning for their good.</p>" +
      "<p style='margin:0'>The everlasting reign of God is the hope toward which all Scripture leans. The angel told Mary that her Son would reign over a kingdom that &ldquo;will have no end&rdquo; (Luke 1:33), and the redeemed sing, &ldquo;The kingdom of the world has become the kingdom of our Lord and of his Christ, and he shall reign forever and ever&rdquo; (Revelation 11:15).</p>",
  },
];

const VERSE_SECTIONS: VerseSection[] = [
  {
    id: "v1",
    reference: "Psalm 146:1-2",
    label: "Praise as Long as I Live",
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;Praise the LORD! Praise the LORD, O my soul! I will praise the LORD as long as I live; I will sing praises to my God while I have my being&rdquo; (146:1&ndash;2).</p>" +
      "<p style='margin:0 0 0.9rem'>The psalm opens with the great &ldquo;Hallelujah&rdquo; &mdash; &ldquo;Praise the LORD!&rdquo; &mdash; that marks each of the five closing psalms of the Psalter. Then the worshipper turns inward and commands his own soul to praise. This is the discipline of faith: not waiting for the mood to arrive, but summoning the heart to its proper work. The soul is addressed as something that can be stirred, directed, and called back to God.</p>" +
      "<p style='margin:0'>The resolve that follows is total in its time-span: &ldquo;as long as I live&hellip; while I have my being.&rdquo; Praise is not a phase but a lifelong vocation, coextensive with breath itself. The worshipper binds his whole existence to the worship of God, so that the last word of his life, like the first, will be praise.</p>",
  },
  {
    id: "v2",
    reference: "Psalm 146:3-4",
    label: "The Frailty of Princes",
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;Put not your trust in princes, in a son of man, in whom there is no salvation. When his breath departs, he returns to the earth; on that very day his plans perish&rdquo; (146:3&ndash;4).</p>" +
      "<p style='margin:0 0 0.9rem'>Having resolved to praise the eternal God, the psalmist warns against anchoring hope in mortal rulers. The phrase &ldquo;son of man&rdquo; here underlines human frailty: the prince is made of the same dust as everyone else. &ldquo;In whom there is no salvation&rdquo; is not an accusation of malice but a statement of limitation &mdash; no human being, however exalted, can finally save.</p>" +
      "<p style='margin:0'>The reason is starkly physical: &ldquo;when his breath departs, he returns to the earth.&rdquo; The word for breath recalls the breath of life God breathed into the dust in Genesis; when it is withdrawn, the man returns to dust again. And with him go all his grand designs: &ldquo;on that very day his plans perish.&rdquo; The schemes that seemed to shape history dissolve in an instant. This is the wrong foundation for hope.</p>",
  },
  {
    id: "v3",
    reference: "Psalm 146:5-7",
    label: "The Help of the God of Jacob",
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;Blessed is he whose help is the God of Jacob, whose hope is in the LORD his God, who made heaven and earth, the sea, and all that is in them, who keeps faith forever; who executes justice for the oppressed, who gives food to the hungry. The LORD sets the prisoners free&rdquo; (146:5&ndash;7).</p>" +
      "<p style='margin:0 0 0.9rem'>Now the psalm pivots from warning to blessing. Over against the prince in whom there is no salvation stands the true help and hope &mdash; &ldquo;the God of Jacob,&rdquo; the covenant-keeping God, who is also intimately &ldquo;the LORD his God.&rdquo; The one whose trust rests there is truly &ldquo;blessed,&rdquo; happy with a happiness no death can steal.</p>" +
      "<p style='margin:0'>The psalmist then piles up reasons for this confidence: this God made heaven and earth and sea, keeps faith forever, executes justice for the oppressed, feeds the hungry, and frees the prisoners. Power and faithfulness and compassion meet in him. The Creator of all things stoops to do justice for the lowly &mdash; the very things no mortal prince can guarantee.</p>",
  },
  {
    id: "v4",
    reference: "Psalm 146:8-9",
    label: "Sight, Lifting, and Watchful Care",
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;The LORD opens the eyes of the blind. The LORD lifts up those who are bowed down; the LORD loves the righteous. The LORD watches over the sojourners; he upholds the widow and the fatherless, but the way of the wicked he brings to ruin&rdquo; (146:8&ndash;9).</p>" +
      "<p style='margin:0 0 0.9rem'>The catalog of God&rsquo;s saving works continues, and its repeated drumbeat &mdash; &ldquo;The LORD&hellip; The LORD&hellip; The LORD&rdquo; &mdash; hammers home that it is he, and he alone, who does these things. He opens blind eyes, lifts the crushed, loves the righteous, guards the foreigner, and upholds the widow and the orphan &mdash; the most defenseless members of any society. This is the heart of God laid bare.</p>" +
      "<p style='margin:0'>These verses are strikingly fulfilled in Jesus, who opened the eyes of the blind, lifted up the bowed-down, and pointed to such works as the sign of his identity (Luke 7:22). The section closes with justice&rsquo;s necessary other side: &ldquo;the way of the wicked he brings to ruin.&rdquo; The God who loves the vulnerable will not let those who prey on them prosper forever.</p>",
  },
  {
    id: "v5",
    reference: "Psalm 146:10",
    label: "The LORD Reigns Forever",
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;The LORD will reign forever, your God, O Zion, to all generations. Praise the LORD!&rdquo; (146:10).</p>" +
      "<p style='margin:0 0 0.9rem'>The psalm ends on its highest summit. After warning that the prince&rsquo;s plans perish on the day his breath departs, it now proclaims a King whose reign has no end: &ldquo;The LORD will reign forever&hellip; to all generations.&rdquo; This is the deliberate counterpoint to verse 4. Mortal rulers rise and fall; this King endures through every generation, world without end.</p>" +
      "<p style='margin:0'>And he is &ldquo;your God, O Zion&rdquo; &mdash; not a remote sovereign but the covenant God of his people, reigning for their good. The psalm closes as it opened, with &ldquo;Praise the LORD!&rdquo;, so that the whole song is bracketed by hallelujahs. Fittingly, Psalm 146 is the first of the five closing psalms (146&ndash;150), and it strikes the keynote of trust in the everlasting King that the rest will take up and amplify to the Psalter&rsquo;s glorious end.</p>",
  },
];

const APP_SECTIONS: AccordionItem[] = [
  {
    id: "app-examine",
    title: "Examine Where Your Trust Really Rests",
    accent: ROSE,
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;Put not your trust in princes&hellip; in whom there is no salvation&rdquo; (146:3). The first practical work of this psalm is honest self-examination. Where, in practice, does your deepest security lie? It may be a leader, a political movement, a bank balance, a career, a relationship, or your own competence. None of these is evil, but none can finally save, and all of them breathe today and may return to the earth tomorrow.</p>" +
      "<p style='margin:0'>Consider what you turn to first when you are afraid, and what would shatter you if it were lost. That is often where your real trust is. The psalm gently dismantles every fragile foundation, not to leave you without support, but to redirect you to the one help that will never fail &mdash; the God of Jacob, whose faithfulness outlasts every prince.</p>",
  },
  {
    id: "app-hope",
    title: "Anchor Your Hope in the Covenant God",
    accent: GOLD,
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;Blessed is he whose help is the God of Jacob, whose hope is in the LORD his God&rdquo; (146:5). The psalm does not merely warn; it offers a better hope. The God of Jacob is the covenant-keeping God who chose and kept a flawed man and his descendants across generations. To anchor your hope here is to build on the Maker of heaven and earth who &ldquo;keeps faith forever.&rdquo;</p>" +
      "<p style='margin:0'>Practically, this means returning again and again to God&rsquo;s proven faithfulness &mdash; in Scripture, in the testimony of his people, in your own life. When circumstances shake and human supports fail, preach this blessing to your own soul: my help is the God of Jacob; my hope is in the LORD my God. That hope, grounded in his unchanging character, cannot be put to shame.</p>",
  },
  {
    id: "app-vulnerable",
    title: "Join God in Caring for the Vulnerable",
    accent: GREEN,
    body:
      "<p style='margin:0 0 0.9rem'>The catalog of verses 7&ndash;9 reveals the heart of God for the oppressed, the hungry, the imprisoned, the blind, the bowed-down, the sojourner, the widow, and the fatherless. If this is what God loves to do, then those who hope in him are drawn to love the same people. Worship that does not move toward the vulnerable has not yet understood the God it claims to praise.</p>" +
      "<p style='margin:0'>Ask where, in your own circles, you might reflect this divine care &mdash; the lonely stranger, the struggling single parent, the prisoner, the hungry, the forgotten. Jesus took up this very catalog as the signature of his ministry (Luke 4:18&ndash;19; 7:22). To follow him is to let his compassion become ours, embodied in concrete acts of mercy and justice.</p>",
  },
  {
    id: "app-live",
    title: "Make Praise the Habit of a Lifetime",
    accent: PURPLE,
    body:
      "<p style='margin:0 0 0.9rem'>&ldquo;I will praise the LORD as long as I live; I will sing praises to my God while I have my being&rdquo; (146:2). The psalm begins and ends with praise, framing every warning and every promise in worship. The everlasting reign of God in verse 10 is meant to produce an everlasting song in us. Knowing that the King never dies, the believer resolves to praise him for a whole lifetime.</p>" +
      "<p style='margin:0'>Like the psalmist, learn to address your own soul &mdash; to call your heart to worship even when feelings lag behind. Build rhythms of praise into your days, in song, in prayer, in gratitude, so that praising God becomes not an occasional event but the settled atmosphere of your life, from this day until the day your hope becomes sight.</p>",
  },
];

const REFLECTION_QUESTIONS = [
  "The psalmist commands his own soul to praise (146:1). What would it look like for you to actively summon your heart to worship, rather than waiting until you feel like it?",
  "&ldquo;Put not your trust in princes&hellip; in whom there is no salvation&rdquo; (146:3). What human or worldly foundation are you most tempted to lean on for ultimate security, and why can it not finally save?",
  "Verse 5 calls the one whose hope is in the LORD &ldquo;blessed.&rdquo; How does grounding your hope in the covenant-keeping &ldquo;God of Jacob&rdquo; change the way you face uncertainty?",
  "The psalm describes God as the Maker of heaven and earth &ldquo;who keeps faith forever&rdquo; (146:6). Where have you personally seen God keep faith with you over time?",
  "The catalog of verses 7&ndash;9 shows God&rsquo;s heart for the vulnerable. Which group named there &mdash; the oppressed, hungry, imprisoned, blind, bowed-down, sojourner, widow, or orphan &mdash; might God be calling you to care for?",
  "Verse 10 declares that &ldquo;the LORD will reign forever,&rdquo; in sharp contrast to the perishing princes of verse 4. How does the everlasting reign of God reshape your hopes, fears, and priorities?",
];

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 146 Explained: The First of the Hallelujah Psalms" },
  { videoId: "OjJ7GkWCHvA", title: "Put Not Your Trust in Princes: Where True Hope Rests" },
  { videoId: "pHBzJ2dVXgk", title: "The God Who Cares for the Vulnerable in Psalm 146" },
  { videoId: "3sO5FH2ybPY", title: "The LORD Reigns Forever: The Everlasting King" },
];

export default function Psalm146Guide() {
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
          <div style={{ display: "inline-block", background: `${GOLD}22`, color: "#f0b454", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 146: Hope in the LORD
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }}
            dangerouslySetInnerHTML={{ __html: "The first of the five closing &ldquo;Hallelujah&rdquo; psalms &mdash; a song about where to place ultimate trust. It warns against leaning on mortal princes whose plans perish, and lifts our eyes to the Maker of heaven and earth who keeps faith forever, cares for the vulnerable, and reigns to all generations." }} />
          <div style={{ background: CARD, border: `1px solid ${GOLD}55`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
            <div style={{ color: "#f0b454", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>
              Key Verse &middot; Psalm 146:5
            </div>
            <p style={{ margin: 0, fontSize: "1.2rem", lineHeight: 1.7, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;Blessed is he whose help is the God of Jacob, whose hope is in the LORD his God.&rdquo;" }} />
          </div>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? GOLD : BORDER}`,
                background: tab === t ? GOLD : CARD,
                color: tab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>

        {tab === "overview" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Overview</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: MUTED, fontSize: "1.05rem", lineHeight: 1.85 }}>
              <p dangerouslySetInnerHTML={{ __html: "Psalm 146 opens the grand finale of the Psalter &mdash; the five closing &ldquo;Hallelujah&rdquo; psalms (146&ndash;150), each of which begins and ends with the ringing command &ldquo;Praise the LORD!&rdquo; (in Hebrew, <em>Hallelu-Yah</em>). After the long and varied journey of the Psalms, through lament and confession and thanksgiving, the book ends in an unbroken crescendo of praise, and Psalm 146 strikes the opening chord." }} />
              <p dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>Structure.</strong> The psalm moves in a clear and deliberate pattern. It opens with a personal resolve to praise God for a whole lifetime (vv.1&ndash;2). It then issues a sharp warning against trusting in mortal princes, whose plans perish when their breath departs (vv.3&ndash;4). At its hinge it pronounces blessed the one whose hope is in the LORD (v.5), and supports that blessing with a soaring description of God as Creator, faithful promise-keeper, and rescuer of the vulnerable (vv.6&ndash;9). It closes with the triumphant declaration that the LORD will reign forever (v.10)." }} />
              <p dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>Context.</strong> At its heart, Psalm 146 is a psalm about where to place ultimate trust. It sets two foundations side by side: the mortal prince, whose breath departs and whose plans perish in a single day (v.4), and the eternal LORD, who reigns forever and to all generations (v.10). The whole psalm is an argument, framed in praise, for building one&rsquo;s hope on the everlasting King rather than on anything that breathes and dies." }} />
              <p dangerouslySetInnerHTML={{ __html: "The catalog of God&rsquo;s care for the vulnerable in verses 7&ndash;9 &mdash; justice for the oppressed, food for the hungry, freedom for prisoners, sight for the blind, lifting for the bowed-down, protection for the sojourner, widow, and orphan &mdash; is strikingly echoed in the ministry of Jesus. He read just such a list from Isaiah in the synagogue at Nazareth (Luke 4:18&ndash;19) and pointed to these very works as the sign of his identity when John the Baptist sent to ask if he was the one to come (Luke 7:22). In Christ, the saving works of Psalm 146 took on flesh and walked among us." }} />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Key Themes</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Tap each theme to explore the message of the first Hallelujah psalm, with cross-references tracing its threads through Scripture and into the ministry of Jesus.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {THEME_ITEMS.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${open === item.id ? item.accent : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", color: TEXT, cursor: "pointer", padding: "1.1rem 1.4rem", fontSize: "1.1rem", fontWeight: 700, fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>{item.title}</span>
                    <span style={{ color: item.accent, fontSize: "1.4rem", flexShrink: 0, lineHeight: 1 }} dangerouslySetInnerHTML={{ __html: open === item.id ? "&minus;" : "&#43;" }} />
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 1.4rem 1.4rem", color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, borderTop: `1px solid ${BORDER}` }}>
                      <div style={{ paddingTop: "1.1rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Verse by Verse</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Walk through Psalm 146 section by section, from the lifelong resolve to praise, through the frailty of princes and the help of the God of Jacob, to the everlasting reign of the LORD. Tap each passage to open the commentary.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VERSE_SECTIONS.map((vs) => (
                <div key={vs.id} style={{ background: CARD, border: `1px solid ${open === vs.id ? TEAL : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
                  <button
                    onClick={() => toggle(vs.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", color: TEXT, cursor: "pointer", padding: "1.1rem 1.4rem", fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <span style={{ fontSize: "1.1rem", fontWeight: 700 }}>{vs.reference}</span>
                      <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: TEAL }}>{vs.label}</span>
                    </span>
                    <span style={{ color: TEAL, fontSize: "1.4rem", flexShrink: 0, lineHeight: 1 }} dangerouslySetInnerHTML={{ __html: open === vs.id ? "&minus;" : "&#43;" }} />
                  </button>
                  {open === vs.id && (
                    <div style={{ padding: "0 1.4rem 1.4rem", color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, borderTop: `1px solid ${BORDER}` }}>
                      <div style={{ paddingTop: "1.1rem" }} dangerouslySetInnerHTML={{ __html: vs.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Application</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              How might the trust of Psalm 146 reshape the way you live, hope, and love? Consider these invitations, then sit with the reflection questions below.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: "3rem" }}>
              {APP_SECTIONS.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${open === item.id ? item.accent : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", color: TEXT, cursor: "pointer", padding: "1.1rem 1.4rem", fontSize: "1.1rem", fontWeight: 700, fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>{item.title}</span>
                    <span style={{ color: item.accent, fontSize: "1.4rem", flexShrink: 0, lineHeight: 1 }} dangerouslySetInnerHTML={{ __html: open === item.id ? "&minus;" : "&#43;" }} />
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 1.4rem 1.4rem", color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, borderTop: `1px solid ${BORDER}` }}>
                      <div style={{ paddingTop: "1.1rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}55`, borderRadius: 12, padding: "1.75rem 2rem", marginBottom: "3rem" }}>
              <h3 style={{ color: "#f0b454", fontWeight: 700, margin: "0 0 1.25rem", fontSize: "1.25rem" }}>Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {REFLECTION_QUESTIONS.map((q, i) => (
                  <li key={i} style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>

            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Video Teaching</h3>
            <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your meditation on Psalm 146 through teaching on the first of the Hallelujah psalms, the warning against trusting in princes, God&rsquo;s tender care for the vulnerable, and the everlasting reign of the King who never dies.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: "3rem" }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: "#f0b454", fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Closing Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Everlasting LORD, Maker of heaven and earth, you keep faith forever, and your reign endures to all generations. Forgive us for the many times we have trusted in princes and in our own fading strength, in foundations that breathe today and return to the earth tomorrow. Teach us to make you our help and our hope, to find true blessing in the God of Jacob alone. Open our eyes to the vulnerable as you do &mdash; the oppressed and the hungry, the prisoner and the stranger, the widow and the fatherless &mdash; and make us instruments of your justice and mercy. We praise you as long as we live, and we rejoice that you, our God, O Zion, will reign forever. Praise the LORD! Through Jesus Christ our King. Amen." }} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
