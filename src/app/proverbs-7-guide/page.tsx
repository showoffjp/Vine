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
  { id: "dK9mNpTwL2v", title: "Proverbs 7 - The Seduction Scene and Sexual Wisdom" },
  { id: "fH5rZxQsB8e", title: "My Son Keep My Words - Proverbs 7 Study" },
  { id: "gY1cWvMkP6n", title: "Proverbs 7 Explained - The Wayward Woman and Wisdom" },
  { id: "hR4bSjXtD3w", title: "Guarding Against Seduction - Proverbs 7 Verse by Verse" },
];

const keyThemes = [
  {
    id: "anatomy",
    title: "The Anatomy of Temptation",
    color: ROSE,
    body: "Proverbs 7 is one of Scripture&apos;s most detailed analyses of how temptation actually works. The father does not merely say &quot;avoid the adulteress&quot; &mdash; he traces her methods with clinical precision so that his son can recognize them before they have landed. She knows the right time: twilight, the cover of darkness, when vision is reduced and judgment softened. She uses physical contact first (seizes him, kisses him) to break down defenses before speaking. Then she speaks &mdash; boldly, with prepared arguments: her obligations are met (she has fulfilled her vows), her house is ready (Egyptian linen, perfume of myrrh and cinnamon), the threat is removed (husband is away on a long journey, will not return until the full moon), and the invitation is urgent (come, let us take our fill of love until morning). Every element is calculated. The timing, the touch, the setting, the theological cover (&quot;peace offerings&quot;), the removal of risk, the urgency: these are the mechanics of seduction. The father&apos;s purpose in describing them so fully is to arm his son with recognition. Temptation seen clearly is temptation partially defused.",
  },
  {
    id: "naive",
    title: "The Naive Heart&apos;s Vulnerability",
    color: GOLD,
    body: "The young man of Proverbs 7 is described precisely: he is among &quot;the simple&quot; (v.7), a young man &quot;lacking sense&quot; (literally lacking heart &mdash; the Hebrew word for the seat of wisdom and discernment). He is not stupid; he is unformed. The Hebrew word for &quot;simple&quot; (peti) describes one who is open in the sense of being easily persuaded &mdash; not committed either to wisdom or to folly, but available to be shaped by whoever gets to him first. His vulnerability appears in his path: he passes near her corner, he goes the way to her house. He has not decided to commit adultery; he has simply not decided firmly enough to avoid the circumstances that lead to it. He wanders &mdash; the text does not say he strides purposefully. This is the warning the father is most anxious to communicate: naivety is not innocence. The simple person who has made no commitments about where he will and will not go, what he will and will not look at, who he will and will not spend time with, is prey to whoever finds him first. Formation of the will &mdash; the binding of wisdom on the heart &mdash; is the only answer to this vulnerability.",
  },
  {
    id: "sister",
    title: "Wisdom as Sister and Guardian",
    color: GREEN,
    body: "The remedy to the seductress is stated early in the chapter (vv.4-5): &quot;Say to wisdom, &apos;You are my sister,&apos; and call insight your intimate friend, to keep you from the forbidden woman, from the adulteress with her smooth words.&quot; The relational language is crucial. The father does not say &quot;obey the rule about adultery&quot; or &quot;remember the commandment.&quot; He says: call wisdom your sister. The sister relationship in the ancient Near East was one of the closest possible bonds &mdash; a sister was a permanent, intimate companion. The father is calling his son to cultivate wisdom as a relationship, not merely consult it as a reference. The word translated &quot;intimate friend&quot; (moda&apos;) is kinship language &mdash; a close relative, one who belongs to your household. Wisdom that keeps you from the forbidden woman is not external rule-keeping; it is a companion so close that her perspective is present in the moment of temptation. This is what daily engagement with Scripture and prayer is meant to produce: not knowledge of a list of rules but an intimate relationship with wisdom that shapes perception in real time.",
  },
  {
    id: "end",
    title: "The Vivid Picture of Sin&apos;s End",
    color: TEAL,
    body: "When the young man finally follows the woman (v.22), the father employs a sequence of images so vivid and concrete that they cannot be forgotten: &quot;he follows her immediately as an ox goes to the slaughter, or as a stag is caught fast till an arrow pierces its liver; as a bird rushes into a snare; he does not know that it will cost him his life.&quot; Three animals, three fates: the ox who goes willingly without understanding to be killed; the stag caught by an arrow that enters its most vital organ; the bird that rushes into a snare. Each image emphasizes different aspects of the tragedy: the willingness without understanding (ox), the lethal wound (stag), the entrapment of what rushed eagerly (bird). The repeated emphasis: he does not know. Sin never presents its end. The adulteress has described beginning (the bed, the perfume, the night of love) but never the middle or the end. The father, watching from his window, can see what the young man cannot: this is the road to Sheol. Every act of sin presents its most appealing face at the beginning. The task of wisdom is to see past the beginning to the destination.",
  },
  {
    id: "victims",
    title: "Many Victims Laid Low",
    color: PURPLE_LIGHT,
    body: "The chapter ends with a warning that enlarges its scope from the individual scene to a societal reality: &quot;For many a victim has she laid low, and all her slain are a mighty throng. Her house is the way to Sheol, going down to the chambers of death.&quot; The father has been telling a story about one young man and one woman on one street on one evening. But the final verses make clear that this story has been told countless times. The &quot;mighty throng&quot; of her slain is not metaphor but fact: sexual sin has destroyed the mighty, the wise, the noble, the strong. No one is immune except by wisdom and humility. Solomon himself &mdash; who may have collected or written these proverbs &mdash; was eventually brought low by exactly the kind of foolishness he warned against (1 Kings 11:1-4). The father speaks not as someone who is above the danger but as someone who understands it. The mighty throng of the fallen is a warning to all who think themselves too wise, too spiritually mature, or too experienced to be vulnerable. Humility and the daily renewal of commitment to wisdom are the only protections.",
  },
];

const verseByVerse = [
  {
    id: "v1-5",
    ref: "Verses 1-5",
    heading: "Keep My Words: Wisdom as Sister and Guardian",
    body: "The chapter opens with the father&apos;s familiar call to attention: &quot;My son, keep my words and treasure up my commandments with you; keep my commandments and live; keep my teaching as the apple of your eye; bind them on your fingers; write them on the tablet of your heart.&quot; The phrases accumulate with deliberate intensity: keep, treasure, keep, live, keep, bind, write. The repetition is not literary excess but pastoral urgency &mdash; the father knows how quickly the untrained mind loses what it has been taught. &quot;Apple of your eye&quot; (literally &quot;little man of your eye,&quot; the reflection in the pupil) means the most carefully guarded thing you possess. The pupil is protected by reflexive blinking; the commandments must be guarded with the same instinctive, immediate reflex. Then the remedy: &quot;Say to wisdom, &apos;You are my sister,&apos; and call insight your intimate friend, to keep you from the forbidden woman, from the adulteress with her smooth words.&quot; The chapter is framed by this instruction: the entire scene that follows (vv.6-27) is the reason for the command in vv.1-5. Understanding what is coming on the street below is itself the motivation for binding wisdom close.",
  },
  {
    id: "v6-9",
    ref: "Verses 6-9",
    heading: "Looking Through the Window: The Setting",
    body: "The father&apos;s narrative voice shifts here into eyewitness testimony: &quot;For at the window of my house I have looked out through my lattice, and I have seen among the simple, I have perceived among the youths, a young man lacking sense, passing along the street near her corner, taking the road to her house in the twilight, in the evening, at the time of night and darkness.&quot; The father is watching, as fathers do, from an elevated vantage point. He sees what the young man does not know is being seen. The details are precisely chosen. The young man is among &quot;the simple&quot; (peti) &mdash; the open, unformed, easily influenced. He is &quot;lacking sense&quot; (literally lacking heart). His path is described with geographic specificity: near her corner, on the road to her house. He has not arrived randomly; he is moving in a direction. And the timing: twilight, evening, the time of night and darkness. The ancient world was genuinely dark at night &mdash; torches and lamps cast limited light. Night is the time of moral diminishment as well as physical: when accountability is lowest, when the city sleeps, when what is done can most plausibly be hidden. The father has identified the young man&apos;s error before the woman has even appeared: he is in the wrong place at the wrong time.",
  },
  {
    id: "v10-12",
    ref: "Verses 10-12",
    heading: "The Woman Appears: Dressed and Ready",
    body: "&quot;And behold, the woman meets him, dressed as a prostitute, wily of heart. She is loud and wayward; her feet do not stay at home; now in the street, now in the markets, and at every corner she lies in wait.&quot; Three descriptors capture her character. First: dressed as a prostitute &mdash; her clothing makes explicit what her intention is. She has chosen her appearance deliberately. Second: wily of heart (natsurah lev) &mdash; the word suggests a heart that is guarded, hidden, keeping its true contents concealed. Her appearance projects availability; her heart projects strategy. Third: loud and wayward (homiyah v&apos;sorarah). The word for loud (homiyah) is used elsewhere for the roar of the sea, the tumult of a city. She is not demure or quiet; she is conspicuous, filling public space. Wayward (sorarah) means rebellious, stubborn, refusing to be contained. &quot;Her feet do not stay at home&quot; &mdash; this is a pointed inversion of the virtuous woman of Proverbs 31, who manages her household from within it. The woman of Proverbs 7 is homeless in the deepest sense: she has no true dwelling, no center that grounds her. She lies in wait at every corner &mdash; not a passive presence but an active predator.",
  },
  {
    id: "v13-20",
    ref: "Verses 13-20",
    heading: "The Seduction Speech: Prepared, Perfumed, and Persuasive",
    body: "The seduction unfolds in stages. Physical contact first: &quot;She seizes him and kisses him, and with bold face she says to him...&quot; The boldness (literally &quot;hardened face&quot;) is the opposite of shame. She has moved past the internal restraints that should check this kind of encounter. Then the speech: &quot;I had to offer sacrifices, and today I have paid my vows; so now I have come out to meet you, to seek you eagerly, and I have found you.&quot; The theological framing is deliberate: she has fulfilled her religious obligations (peace offerings), so she is, in a sense, in good standing with the divine. This is the most chilling element of the seduction &mdash; she recruits the language of piety for the purpose of sin. Then the setting: &quot;I have spread my couch with coverings, colored linens from Egyptian linen; I have perfumed my bed with myrrh, aloes, and cinnamon.&quot; The sensory details engage imagination and appetite simultaneously: visual (colored linen), olfactory (myrrh, aloes, cinnamon). The bed is ready. And the risk-removal: &quot;for my husband is not at home; he has gone on a long journey; he took a bag of money with him; at full moon he will come home.&quot; The husband is far away, he has money (he is not desperate), and the timeline is specific: until the full moon. She has quantified the window of safety. Every obstacle has been addressed before the young man has raised it.",
  },
  {
    id: "v21-23",
    ref: "Verses 21-23",
    heading: "He Follows: The Ox, the Stag, the Bird",
    body: "&quot;With much seductive speech she persuades him; with her smooth talk she compels him. All at once he follows her, as an ox goes to the slaughter, or as a stag is caught fast till an arrow pierces its liver; as a bird rushes into a snare; he does not know that it will cost him his life.&quot; The summary of her success is stated in two verbs: persuades (hittachu) and compels (taddichenu). She did not force him; she moved him with words. And then the three animal images. The ox goes willingly to slaughter &mdash; no struggle, no resistance, because it does not understand the destination. The stag is caught fast by an arrow that reaches its liver &mdash; the liver in ancient thought was the seat of the emotions, the center of life. The wound is to the most vital place. The bird rushes into a snare &mdash; eagerly, swiftly, attracted by what the snare offers. The phrase &quot;he does not know that it will cost him his life&quot; appears as a refrain. This is the father&apos;s central point: the young man&apos;s ignorance is not incidental but essential to how the seduction works. She never mentioned cost. She described only sweetness: linen, perfume, love until morning. He followed what he was shown and walked into what was hidden.",
  },
  {
    id: "v24-27",
    ref: "Verses 24-27",
    heading: "Do Not Turn Her Way: The House of Death",
    body: "&quot;And now, O sons, listen to me, and be attentive to the words of my mouth. Let not your heart turn aside to her ways; do not stray into her paths, for many a victim has she laid low, and all her slain are a mighty throng. Her house is the way to Sheol, going down to the chambers of death.&quot; The father breaks from narration into direct address, and the shift is sudden and powerful. He has been watching, describing, analyzing &mdash; now he is pleading. &quot;O sons&quot; (plural, not singular) &mdash; this is not just his son&apos;s story; it is a story for all who will hear. The warnings are now both internal (&quot;do not let your heart turn aside&quot;) and external (&quot;do not stray into her paths&quot;). The chapter that began with binding wisdom on the fingers and writing it on the heart ends with the anatomy of a heart that has been turned and paths that have been strayed into. The connection is explicit: the young man at the window did not begin the evening planning to visit her house. He began it without strong enough commitments in the other direction, and the path took him where he did not plan to go. Her house is the way to Sheol &mdash; the word for the grave, the realm of the dead, the place of final separation from life and light. The chapter ends not with the bed or the perfume or the night of love, but with death.",
  },
];

const applicationItems = [
  {
    id: "twilight",
    heading: "Identify Your Personal Twilight Hours and Wrong Streets",
    body: "The young man of Proverbs 7 was vulnerable at twilight, near her corner, on the road to her house. His failure was not the moment of seduction but the decisions that put him in the wrong place at the wrong time. Every person has their equivalent twilight hours and wrong streets &mdash; the circumstances, times, environments, and situations in which vulnerability to sexual temptation rises sharply. What are yours? Late at night alone with a device? Certain relationships that have become emotionally entangled? Business travel? Social settings where alcohol lowers inhibition? Identifying these with specificity is not paranoia but wisdom. The young man who refuses to name his wrong streets will eventually find himself on them &mdash; &quot;just passing through,&quot; he will tell himself, until he has arrived at her door.",
  },
  {
    id: "wisdom",
    heading: "Cultivate Wisdom as a Close Companion Through Daily Scripture and Prayer",
    body: "The father&apos;s instruction is relational, not merely informational: &quot;Say to wisdom, &apos;You are my sister.&apos;&quot; A sister is not a reference book; she is a constant presence. Daily engagement with Scripture is not a discipline for accumulating Bible knowledge &mdash; it is the practice of keeping wisdom close enough to speak in real time. When the seductress approaches, the young man who has been with wisdom that morning has her voice in his ear. The young man who has not met with wisdom in weeks has only his own unformed desires to consult. This is why the father can say with confidence that wisdom will &quot;keep you from the forbidden woman&quot; &mdash; not because it provides rules to remember but because it has become a companion whose perspective shapes perception.",
  },
  {
    id: "covenant",
    heading: "Make a Covenant with Your Eyes Before Temptation Arrives",
    body: "Job made a covenant with his eyes: &quot;I have made a covenant with my eyes; how then could I gaze at a virgin?&quot; (Job 31:1). The young man of Proverbs 7 allowed his eyes to lead him &mdash; near her corner, toward her house, into the twilight. The covenant with the eyes is not made at the moment of temptation but before it, in a moment of clear-headed decision. What specific commitments have you made about what you will look at, what content you will consume, what situations you will avoid? These commitments must be specific enough to be meaningful: not &quot;I will be careful online&quot; but &quot;I will not use this device alone after 10pm&quot; &mdash; not &quot;I will avoid temptation&quot; but &quot;I will not spend time alone with this person.&quot; Make the covenant in a clear season so it holds in a vulnerable one.",
  },
  {
    id: "accountability",
    heading: "Pursue Accountability with Trusted Believers",
    body: "The young man of Proverbs 7 was alone. No one else knew where he was going; no one asked. The father watching from the window is a picture of God&apos;s omniscience, but the young man had no human accountability. The New Testament pattern for resisting sin is communal: &quot;confess your sins to one another and pray for one another, that you may be healed&quot; (James 5:16). Find one or two people of the same sex with whom you can be radically honest about your struggles, your patterns, your twilight hours. Give them permission to ask hard questions and to speak truth without softening it. Accountability is not a shame exercise; it is the interruption of the secrecy that sexual temptation requires to survive.",
  },
  {
    id: "tactics",
    heading: "Recognize the Tactics of Temptation Before the Flattery Lands",
    body: "Proverbs 7 is unique in its detailed description of the seductress&apos;s methods: timing (twilight, darkness), physical initiation (seizes, kisses), religious cover (peace offerings, vows fulfilled), environmental preparation (prepared bed, perfumed sheets), removal of risk (husband away, long journey, specific return date), and urgent invitation (come, take our fill of love until morning). The father describes these not to titillate but to arm. When you recognize the pattern &mdash; the right timing, the flattery, the prepared setting, the suggestion that risk is low, the urgency &mdash; you can name it for what it is before you have been swept away. The seduction that is recognized and named in the moment of its operation loses a significant measure of its power. Wisdom is not the absence of temptation; it is the ability to see temptation clearly.",
  },
  {
    id: "end",
    heading: "Remember That Sin Presents Its Beginning but Hides Its End",
    body: "The adulteress described linen, perfume, and love. She did not describe wounds, dishonor, and Sheol &mdash; because she could not afford to and because she may not fully know it herself (Proverbs 7:26&apos;s victims include people like her). This asymmetry &mdash; sin presents its beginning but hides its end &mdash; is the structural feature of all temptation. The discipline of seeing all the way through is what Proverbs calls wisdom. When you are tempted, press the imagination forward past the beginning to the middle and the end. Not the first night, but the sixth month. Not the initial pleasure, but the wounds, dishonor, and disgrace that Proverbs 6:33 says will not be wiped away. Not the moment in her house, but Sheol and the chambers of death. Sin cannot survive this kind of honest imagination. It depends on keeping your vision short.",
  },
];

export default function Proverbs7GuidePage() {
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
          <div style={{ display: "inline-block", background: `${ROSE}18`, border: `1px solid ${ROSE}40`, borderRadius: 8, padding: "4px 16px", fontSize: 13, color: ROSE, fontWeight: 700, marginBottom: 16, letterSpacing: "0.08em" }}>
            PROVERBS 7
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 12, lineHeight: 1.15, color: TEXT }}>
            The Seduction of the Foolish Young Man
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "A dramatic narrative poem &mdash; the father watches from his window as a naive young man wanders into seduction at twilight. One of Scripture&apos;s most vivid portraits of how temptation works and where it leads." }}
          />
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <span style={{ background: `${ROSE}20`, color: ROSE, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>27 Verses</span>
            <span style={{ background: `${GREEN}18`, color: GREEN, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>Wisdom as Sister</span>
            <span style={{ background: `${TEAL}18`, color: TEAL, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>Anatomy of Seduction</span>
            <span style={{ background: `${GOLD}18`, color: GOLD, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>The Way to Sheol</span>
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
              <h2 style={{ fontSize: 22, fontWeight: 800, color: ROSE, marginBottom: 18 }}>Overview of Proverbs 7</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 7 is a dramatic narrative poem &mdash; unlike most of Proverbs, which deals in proverbs and maxims, chapter 7 tells a story. The father positions himself at his window and narrates what he sees in the street below: a naive young man, a waiting woman, a seduction, a catastrophe." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The chapter is framed by instruction (vv.1-5, 24-27) and filled by narrative (vv.6-23). The instruction calls the son to bind wisdom like a sister on his heart; the narrative shows what happens when wisdom is absent. The contrast is total: the young man who lacks wisdom encounters a woman of great preparation and skill, and he goes like an ox to the slaughter." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "What makes Proverbs 7 distinctive is its purpose. The father is not merely retelling gossip from the street. He is anatomy &mdash; dissecting the mechanics of seduction so that his son (and all who hear) can recognize the pattern before it has fully unfolded. Timing, location, touch, speech, setting, flattery, risk-removal, urgency: these are the components he identifies. Named and recognized, they are partially disarmed." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "The chapter ends with the father&apos;s most sobering statement: &quot;many a victim has she laid low, and all her slain are a mighty throng.&quot; This is not the story of one weak young man. It is the story of countless men &mdash; the wise, the strong, the noble &mdash; who walked the same street and made the same choices. The antidote is wisdom bound close, commandments written on the heart, and eyes clear enough to see past the linen and perfume to the chambers of death." }}
              />
            </div>

            {/* Context Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 28 }}>
              <div style={{ background: CARD, border: `1px solid ${ROSE}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: ROSE, fontWeight: 800, fontSize: 13, marginBottom: 10, letterSpacing: "0.07em" }}>NARRATIVE POETRY IN PROVERBS</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Proverbs 7 is the most extended narrative poem in the book of Proverbs. The father is both character (he watches from the window) and narrator (he describes what he sees). This double role gives him authority: he is not speculating about what might happen but reporting what he has observed. The dramatic scene brings the father&apos;s warnings to life in a way that abstract instruction cannot." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${TEAL}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 10, letterSpacing: "0.07em" }}>THE WOMAN&apos;S IDENTITY</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "The woman is described as &quot;the wife of another&quot; (v.19 refers to &quot;my husband&quot;), dressed as a prostitute, loud and wayward. She uses religious language (&quot;I have paid my vows&quot;) to make her proposal appear legitimate. On one level she is a specific figure; on another she represents the voice of Folly, who calls from the heights of the city just as Lady Wisdom does (Proverbs 9). The theological contrast with Wisdom (Proverbs 8-9) is built into the structure of the book." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 10, letterSpacing: "0.07em" }}>THE SIMPLE YOUNG MAN</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "The young man is described as among &quot;the simple&quot; (peti) and as &quot;lacking sense&quot; (literally lacking heart &mdash; the seat of wisdom in Hebrew thought). He is not evil; he is unformed. The peti is open to be shaped by whoever finds him first. Proverbs 1:4 says the book is written precisely &quot;to give prudence to the simple&quot; &mdash; the young man in chapter 7 is the person the entire book is trying to reach before the woman does." }}
                />
              </div>
            </div>

            {/* Key Verse */}
            <div style={{ background: `${ROSE}10`, border: `1px solid ${ROSE}30`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ color: ROSE, fontWeight: 800, fontSize: 13, marginBottom: 14, letterSpacing: "0.07em" }}>KEY VERSE &mdash; PROVERBS 7:24-25</div>
              <blockquote style={{ margin: 0, padding: 0 }}>
                <p style={{ color: TEXT, fontSize: 18, fontStyle: "italic", lineHeight: 1.65, fontWeight: 600, margin: "0 0 12px" }}
                  dangerouslySetInnerHTML={{ __html: "&quot;And now, O sons, listen to me, and be attentive to the words of my mouth. Let not your heart turn aside to her ways; do not stray into her paths.&quot;" }}
                />
                <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Proverbs 7:24-25 (ESV)</p>
              </blockquote>
            </div>
          </div>
        )}

        {/* Tab 1: Key Themes */}
        {tab === 1 && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 8 }}>Key Themes in Proverbs 7</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Five theological and pastoral themes from the most dramatic chapter in the sexual wisdom section of Proverbs." }}
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
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: 24, marginTop: 24 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 12, letterSpacing: "0.07em" }}>STUDY NOTE: WISDOM VERSUS FOLLY</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 7 sets up the great contrast that reaches its climax in chapters 8-9: the Woman of Folly (present here in chapter 7) versus Lady Wisdom (who speaks in chapters 8-9). Both call from the city; both address the simple and unformed. Both promise something: Folly promises love until morning; Wisdom promises life, honor, riches, and righteousness. The young man who wanders in Proverbs 7 is the very person Lady Wisdom addresses in chapter 9: &quot;Whoever is simple, let him turn in here.&quot; The same invitation offered to the same person &mdash; but by Wisdom rather than Folly, and with life rather than Sheol as the destination." }}
              />
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Jesus extends the theme of Proverbs 7 in the Sermon on the Mount when he locates the beginning of adultery in the heart rather than the body: &quot;everyone who looks at a woman with lustful intent has already committed adultery with her in his heart&quot; (Matthew 5:28). The young man of Proverbs 7 did not plan what happened &mdash; but his wandering heart led his wandering feet, which led him to her door. Jesus&apos;s teaching addresses the root that Proverbs identifies as the problem: the unformed, uncommitted, naively open heart." }}
              />
            </div>
          </div>
        )}

        {/* Tab 2: Verse by Verse */}
        {tab === 2 && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 8 }}>Verse by Verse: Proverbs 7</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "A close reading of all 27 verses &mdash; attending to the father&apos;s narrative craft, the woman&apos;s methods, and the tragedy of the young man&apos;s choice." }}
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
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${ROSE}20`, border: `1px solid ${ROSE}60`, display: "flex", alignItems: "center", justifyContent: "center", color: ROSE, fontWeight: 800, fontSize: 12, flexShrink: 0 }}>
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
              <div style={{ color: ROSE, fontWeight: 800, fontSize: 13, marginBottom: 16, letterSpacing: "0.07em" }}>QUICK REFERENCE: ALL 27 VERSES</div>
              {[
                { ref: "v.1-5", summary: "My son, keep my words; keep commandments and live; bind them on fingers, write them on heart; say to wisdom &apos;You are my sister&apos;; they keep you from the forbidden woman" },
                { ref: "v.6-9", summary: "For at the window of my house I looked out; I saw among the simple a young man lacking judgment; passing through the street near her corner; going the way to her house in the twilight, the evening, the darkness of night" },
                { ref: "v.10-12", summary: "And behold, the woman meets him, dressed as a prostitute, wily of heart; she is loud and wayward, her feet do not stay at home; now in the street, now in the market, at every corner she lies in wait" },
                { ref: "v.13-20", summary: "She seizes him, kisses him, speaks with bold face; peace offerings are due, vows fulfilled; bed spread with Egyptian linen, perfumed with myrrh, aloes, cinnamon; husband not at home, gone on a long journey, will not be home till the full moon" },
                { ref: "v.21-23", summary: "With much seductive speech she persuades him; with her smooth talk she compels him; he follows her immediately like an ox to the slaughter, like a stag caught fast, like a bird rushing into a snare; he does not know it will cost him his life" },
                { ref: "v.24-27", summary: "Now sons listen to me; do not let your heart turn aside to her ways; many victims has she laid low; her house is the way to Sheol, going down to the chambers of death" },
              ].map((row) => (
                <div key={row.ref} style={{ display: "flex", gap: 16, padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                  <span style={{ color: ROSE, fontWeight: 700, fontSize: 13, minWidth: 56, flexShrink: 0 }}>{row.ref}</span>
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
              <h2 style={{ fontSize: 22, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 8 }}>Application: Proverbs 7 for Today</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Six ways to live the wisdom of Proverbs 7 &mdash; covering vulnerability, wisdom cultivation, covenantal commitments, accountability, temptation recognition, and long-view thinking." }}
              />
            </div>
            {applicationItems.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", background: "none", border: "none", padding: "20px 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}
                >
                  <span style={{ color: ROSE, fontWeight: 700, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.heading }} />
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
                "What are your personal &quot;twilight hours&quot; &mdash; the times and circumstances when you are most vulnerable to sexual temptation? Have you been honest with yourself about what they are?",
                "Is wisdom a &quot;sister&quot; to you &mdash; a constant companion you consult &mdash; or a reference book you open occasionally? What would daily closeness with wisdom look like practically?",
                "What specific covenant with your eyes have you made? Is it specific enough to be meaningful?",
                "Who knows your actual struggles with sexual temptation? Are you genuinely accountable to someone, or is the accountability mostly theoretical?",
                "When you are tempted, can you see the pattern the father describes in Proverbs 7? Have you practiced recognizing it before the flattery has landed?",
                "Can you press your imagination through the full arc of the sin you are tempted by &mdash; past the beginning, through the middle, to the end? What do you see?",
              ].map((q, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${PURPLE}30`, border: `1px solid ${PURPLE}`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE_LIGHT, fontWeight: 800, fontSize: 11, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                </div>
              ))}
            </div>

            {/* Prayer prompt */}
            <div style={{ background: `${ROSE}10`, border: `1px solid ${ROSE}30`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <div style={{ color: ROSE, fontWeight: 800, fontSize: 13, marginBottom: 14, letterSpacing: "0.07em" }}>PRAYER PROMPT</div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Lord, I confess that I am sometimes the simple young man &mdash; wandering near corners I should avoid, in hours I should not be there, without the strong commitments that would protect me. Give me the wisdom that is closer than a sister. Let your Word be written on my heart, not just stored in my memory. Show me clearly where my twilight hours and wrong streets are, and give me the grace to avoid them before I am standing at her door. When temptation comes with its linen and perfume and clever arguments, let me see past the beginning to the end &mdash; to the wounds, the dishonor, the chambers of death. Keep me humble enough to know that I am not too strong or too wise to fall. Surround me with people who will speak truth. Make me a person who sees clearly and chooses well. Amen." }}
              />
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
