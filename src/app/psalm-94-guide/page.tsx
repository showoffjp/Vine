"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = ROSE;

type VideoEntry = { videoId: string; title: string };

const VIDEOS: VideoEntry[] = [];

function VideoEmbed({ v }: { v: VideoEntry }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: "1rem" }}>
      {open ? (
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={`https://www.youtube.com/embed/${v.videoId}?autoplay=1`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
          />
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "1rem", cursor: "pointer", textAlign: "left", color: TEXT }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "1.25rem" }}>&#9654;</span>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{v.title}</div>
              <div style={{ fontSize: "0.85rem", color: MUTED }}>Click to play</div>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

const TABS = ["Overview", "Themes", "Verse by Verse", "Application"];

const KEY_DETAILS = [
  { label: "Author", value: "Anonymous (Book IV, Psalms 90-106)" },
  { label: "Collection", value: "Book IV -- Psalms 90-106" },
  { label: "Genre", value: "Communal lament with wisdom sections and personal testimony" },
  { label: "Structure", value: "Communal cry (vv. 1-7) + Wisdom rebuke (vv. 8-11) + Blessing & testimony (vv. 12-23)" },
  { label: "Key Theme", value: "God of vengeance vs. oppressive rulers; discipline as love" },
  { label: "Key Verse", value: "v. 22 -- But the LORD has become my stronghold, and my God the rock of my refuge" },
  { label: "NT Connection", value: "Romans 12:19 vengeance is mine; Hebrews 12:5-11 discipline as love" },
];

const THEMES = [
  {
    color: ROSE,
    title: "O LORD God of Vengeance: The Biblical Case for Divine Justice",
    body: `Psalm 94 opens with an invocation that makes many modern readers uncomfortable: "O LORD, God of vengeance, O God of vengeance, shine forth!" The word "vengeance" (neqamah) appears twice in verse 1, a deliberate double emphasis. But to understand this opening correctly requires understanding what "divine vengeance" means in the OT -- which is not the same as human revenge.
<br/><br/>
Divine vengeance (neqamah) in the OT is not petty retaliation or personal injury avenged. It is the execution of justice by the supreme judicial authority in the universe -- the right of the sovereign God to judge those who abuse his creation and destroy his image-bearers. Deuteronomy 32:35 (quoted in Romans 12:19 and Hebrews 10:30) places vengeance in God's hands precisely because human retribution is too easily corrupted by self-interest: "Vengeance is mine, and recompense." The psalmist is not asking God to be his personal hit-man; he is appealing to the divine Judge to exercise the justice that only God can exercise perfectly.
<br/><br/>
The specific context makes this clear: the wicked being judged in Psalm 94 are not private enemies but institutional oppressors -- rulers who "decree iniquity by statute" (v. 20), who "condemn the innocent to death" (v. 21), who "crush your people, O LORD, and afflict your heritage" (v. 5). These are people with structural power who use that power to systematically destroy the vulnerable. For such people, there is no human court of appeal; only divine vengeance can bring justice.
<br/><br/>
Calvin notes: "When the psalmist calls upon God as the God of vengeance, he is not indulging a spirit of private revenge. He is appealing to the divine justice that alone can correct what human courts have corrupted. This prayer is born not from personal malice but from zeal for God's justice and compassion for God's people." Paul's instruction in Romans 12:19 -- "never avenge yourselves, but leave it to the wrath of God" -- is the NT development of exactly this logic: leave justice to the one who can execute it perfectly.`,
  },
  {
    color: PURPLE,
    title: "Does God See? The Proud Claim and Its Refutation",
    body: `Verses 5-7 identify the specific theology of the wicked: "They crush your people, O LORD, and afflict your heritage. They kill the widow and the sojourner, and murder the fatherless, and they say, 'The LORD does not see; the God of Jacob does not perceive.'" The most vulnerable members of society -- widows, sojourners (immigrants), the fatherless -- are the specific targets of the oppressors' violence. And the oppressors' confidence rests on the conviction that God does not see.
<br/><br/>
This is the practical atheism that underlies all systemic oppression: the belief that the universe is morally unmonitored, that powerful people can do whatever they like to powerless people without accountability. It is not usually expressed as philosophical atheism ("there is no God") but as practical deism ("there may be a God, but he is not paying attention"). The psalmist identifies this theology as the enabler of injustice: if the oppressors truly believed that the LORD sees and perceives, they could not continue.
<br/><br/>
The refutation in verses 8-11 is a devastating wisdom argument: "He who planted the ear, does he not hear? He who formed the eye, does he not see? He who disciplines the nations, does he not rebuke? He who teaches man knowledge -- the LORD -- knows the thoughts of man, that they are but a breath." The argument is from the greater to the lesser: God created the organs of perception; is it imaginable that the Creator of hearing cannot hear? The creator of sight cannot see? The designer of thought cannot know thoughts?
<br/><br/>
Tremper Longman III writes: "The psalmist's argument is the most basic form of natural theology: creation implies a Creator, and the Creator of percipient beings must himself be percipient. The wicked have reasoned themselves into a delusion -- a delusion that the psalmist exposes not with special revelation but with the logic embedded in creation itself." Jesus uses the same logic in Matthew 6:26-30: if God clothes the grass and feeds the birds, surely he perceives and cares for his people. The conviction that God sees is the foundation of all ethical accountability.`,
  },
  {
    color: GOLD,
    title: "Blessed Is the Man Whom You Discipline: Chastening as Love",
    body: `Verses 12-15 contain one of the most profound reversals in the Psalter: in the midst of a lament about oppression, the psalmist declares, "Blessed is the man whom you discipline, O LORD, and whom you teach out of your law." This is not a pious platitude inserted at random; it is a theologically precise response to the situation of the righteous under oppression.
<br/><br/>
The Hebrew word musar (discipline, chastening) appears throughout Proverbs as the essential means by which wisdom is acquired. A child without discipline is a child without love (Proverbs 13:24); a person without discipline has been abandoned to their own devices. To be disciplined by the LORD is therefore a mark of divine attention and parental care -- the opposite of abandonment. In the context of oppression, the psalmist is saying: even the suffering that comes from living under wicked rulers is not outside God's disciplinary purposes.
<br/><br/>
Hebrews 12:5-11 quotes Proverbs 3:11-12 in the same spirit: "Do not regard lightly the discipline of the Lord, nor be weary when reproved by him. For the Lord disciplines the one he loves, and chastises every son whom he receives." The passage goes on: "he disciplines us for our good, that we may share his holiness." The logic is identical to Psalm 94: what looks like divine absence or indifference -- the oppressor's success, the righteous person's suffering -- is actually divine discipline, aimed at the formation of holiness and wisdom.
<br/><br/>
Derek Kidner observes: "Verse 12 is not a detached philosophical reflection on suffering; it is a lifeline thrown to the person who is drowning in the apparent success of the wicked. It says: your suffering has a purpose. God knows your thoughts; he is teaching you from his law; he is giving you rest from days of trouble. This is not abandonment but intense divine attention." The cross of Christ is the supreme demonstration of this principle: the suffering of the innocent -- the ultimate case of righteous affliction by wicked rulers -- was simultaneously the ultimate act of disciplinary love for the world.`,
  },
  {
    color: TEAL,
    title: "Who Rises Up for Me Against the Wicked: The God Who Stands Alone",
    body: `Verses 16-19 contain one of the most personal and moving passages in Psalm 94: "Who rises up for me against the wicked? Who stands up for me against evildoers? If the LORD had not been my help, my soul would soon have lived in the land of silence. When I thought, 'My foot is slipping,' your steadfast love, O LORD, held me up. When the cares of my heart are many, your consolations cheer my soul."
<br/><br/>
The rhetorical questions of verse 16 have the same function as the counterfactual of Psalm 124:1 -- they force the psalmist (and the reader) to face the reality of what God's absence would mean. "Who rises up for me?" The implied answer is: no one. No human champion, no institutional protector, no political ally can stand in the gap that only God can fill when the rulers themselves are corrupt. The vulnerability exposed by these questions makes the answer in verse 17-19 all the more powerful.
<br/><br/>
The phrase "your steadfast love held me up" (v. 18) uses the Hebrew hesed -- the covenant love that is the backbone of the Psalter. At the moment the psalmist's foot was slipping (a metaphor for moral and spiritual collapse under pressure), it was not his own virtue that held him but God's hesed. This is the consistent testimony of the Psalter: the righteous person's righteousness is maintained not by their own resources but by the sustaining love of God.
<br/><br/>
"When the cares of my heart are many, your consolations cheer my soul" (v. 19) is among the most humanly relatable lines in Scripture. The Hebrew sar'appay (anxious thoughts, inner conflicts) describes the racing, proliferating anxieties that multiply in the night. The answer is not stoic suppression but divine consolation (tanchumim, a word related to comfort, from the same root as the name Nahum -- "comfort"). God's answer to the many cares is not the removal of all difficulty but the cheer (yesha'ashe'u -- "delight, refresh") that his consolations bring to the weary soul.`,
  },
  {
    color: GREEN,
    title: "The LORD Is My Stronghold: Refuge Despite Corrupt Institutions",
    body: `Verses 20-23 bring the psalm to its climax with a stark theological verdict on corrupt governance and a final confession of confidence. "Can wicked rulers be allied with you, those who frame iniquity by statute? They band together against the life of the righteous and condemn the innocent to death." The phrase "frame iniquity by statute" (choqeq 'amal) is remarkable: these rulers use the form of law to perpetuate injustice. The structures designed to protect the innocent are turned to destroy them.
<br/><br/>
This is not a description of openly lawless chaos but of systemic, institutionalized injustice: laws written to oppress, courts corrupted to convict the innocent, the machinery of justice turned against justice's own purposes. The psalmist asks: can such rulers be "allied with you" (YHWH)? The answer is implied: no. God cannot be in covenant with institutions that frame iniquity by statute, no matter how religious their rhetoric or how legitimate their formal authority.
<br/><br/>
But the conclusion in verse 22-23 is not despair: "But the LORD has become my stronghold, and my God the rock of my refuge. He will bring back on them their iniquity and wipe them out for their wickedness; the LORD our God will wipe them out." The personal confidence is stunning: the same God who cannot be allied with wicked rulers is the God who has become my personal stronghold (misgab -- high fortress) and rock of refuge. When human institutions fail, God himself becomes the institution of last resort.
<br/><br/>
Spurgeon comments: "The psalmist does not say the LORD is a stronghold but that he has become my stronghold -- the covenant claim is personal and appropriated. This is the language of saving faith: taking the promises of God and making them one's own in the moment of extreme need." For the New Testament believer, this is the theological foundation of Paul's instruction: "Be strong in the Lord and in the strength of his might" (Ephesians 6:10). When the principalities and powers frame iniquity by statute, the believer's refuge is not a rival political power but the LORD himself.`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-3",
    text: "O LORD, God of vengeance, O God of vengeance, shine forth! Rise up, O judge of the earth; repay to the proud what they deserve! O LORD, how long shall the wicked, how long shall the wicked exult?",
    comment: `The double invocation of God as "God of vengeance" (El neqamot) emphasizes the specific attribute being appealed to: God as the divine executor of cosmic justice. The title "judge of the earth" (shophet ha'arets) appears also in Genesis 18:25 (Abraham's appeal: "Will not the Judge of all the earth do right?") -- a title that encompasses both God's authority and his obligation to act justly. "Shine forth" (hofia'ah) is the same verb used in Deuteronomy 33:2 for the theophanic appearance of God at Sinai -- a summons to divine self-revelation in action. "How long?" (ad-matai) is the characteristic question of the lament genre (see Psalms 6:3; 13:1-2; 79:5; 80:4) -- an urgent cry for divine action, not a denial of God's existence.`,
  },
  {
    ref: "vv. 4-7",
    text: "They pour out their arrogant words; all the evildoers boast. They crush your people, O LORD...They kill the widow and the sojourner, and murder the fatherless, and they say, 'The LORD does not see; the God of Jacob does not perceive.'",
    comment: `The indictment of the wicked identifies them as those with institutional power (they "crush your people") who target the most legally vulnerable members of society: widows, sojourners (foreign residents without legal standing), and the fatherless. These three groups are the consistent objects of OT social legislation (Exodus 22:21-24; Deuteronomy 24:17-21; Isaiah 1:17). Their theological justification for this abuse is practical atheism: "The LORD does not see." This claim is the foundation of all oppression that has spiritual pretensions; it must be answered not just with political action but with theological refutation.`,
  },
  {
    ref: "vv. 8-11",
    text: "Understand, O dullest of the people! Fools, when will you be wise? He who planted the ear, does he not hear? He who formed the eye, does he not see?...The LORD knows the thoughts of man, that they are but a breath.",
    comment: `The wisdom refutation of the oppressors' theology uses the argument from creation (analogia creationis): the Creator of percipient faculties must himself be percipient. The design argument here is theological, not scientific -- it establishes that a God who gave humans the capacity to hear, see, and discipline must himself possess these capacities in supreme degree. The conclusion of verse 11 -- "the LORD knows the thoughts of man, that they are but a breath" -- echoes Psalm 90's meditation on human transience and directly counters the oppressors' confidence: their very thoughts, which they believe are unobserved, are fully transparent to the God they deny sees.`,
  },
  {
    ref: "vv. 12-15",
    text: "Blessed is the man whom you discipline, O LORD, and whom you teach out of your law, to give him rest from days of trouble, until a pit is dug for the wicked. For the LORD will not forsake his people; he will not abandon his heritage; for justice will return to the righteous, and all the upright in heart will follow it.",
    comment: `The beatitude of verse 12 ("Blessed is the man," 'ashrei) shifts the psalm from lament to wisdom. Discipline (musar) by God through law (torah) is presented not as punishment but as blessing -- the means by which God forms wisdom in those he loves (cf. Proverbs 3:11-12; Hebrews 12:5-11). The goal of this discipline is "rest from days of trouble" -- a respite that comes "until a pit is dug for the wicked," indicating that the trouble is temporary and the wicked's doom is certain. Verse 14 offers the foundational assurance: the LORD will not forsake his people or abandon his heritage -- a covenant promise that holds regardless of present appearances.`,
  },
  {
    ref: "vv. 16-19",
    text: "Who rises up for me against the wicked?...If the LORD had not been my help, my soul would soon have lived in the land of silence. When I thought, 'My foot is slipping,' your steadfast love, O LORD, held me up. When the cares of my heart are many, your consolations cheer my soul.",
    comment: `The rhetorical questions (v. 16) produce the answer: no one. This is not pessimism but realism about human limitations -- when rulers are corrupt, no human institution can fill the gap. The counterfactual of verse 17 ("if the LORD had not been my help") mirrors Psalm 124:1-5 and forces the same recognition of utter dependence. "Your steadfast love held me up" (v. 18) attributes the maintenance of the psalmist's moral integrity to God's hesed, not to personal virtue. The "many cares" (sar'appay) of verse 19 are the proliferating anxieties of the person under pressure; God's consolations (tanchumim) -- comforts -- are the specific answer, described as cheering or delighting the soul.`,
  },
  {
    ref: "vv. 20-23",
    text: "Can wicked rulers be allied with you, those who frame iniquity by statute?...But the LORD has become my stronghold, and my God the rock of my refuge. He will bring back on them their iniquity and wipe them out for their wickedness; the LORD our God will wipe them out.",
    comment: `The final section identifies the specific character of the opponents: they are not random criminals but institutional authorities who "frame iniquity by statute" -- they write law to accomplish injustice. The rhetorical question "can wicked rulers be allied with you?" expects the answer "never" -- the LORD cannot be co-opted by corrupt institutions, regardless of their religious claims. The double refrain "the LORD our God will wipe them out" (v. 23) provides certainty without timeline -- the destruction is assured, not immediate. The personal confession of verse 22 -- "the LORD has become my stronghold...the rock of my refuge" -- is the personal anchor in the midst of institutional corruption: when all human refuges fail, the Lord himself becomes the fortress.`,
  },
];

const APPLICATIONS = [
  {
    color: ROSE,
    title: "Praying for Justice Without Taking Revenge: The Ethics of Imprecation",
    body: `Psalm 94 teaches Christians how to respond to institutional injustice in a way that honors God without taking revenge. The psalmist calls on the divine Judge; he does not take matters into his own hands. "Vengeance is mine, says the LORD" (Romans 12:19, quoting Deuteronomy 32:35) is not a command to passivity or indifference to injustice; it is a command to route the passion for justice through the proper channel -- prayer to the God of vengeance.
<br/><br/>
This means that imprecatory prayer (prayer for God to judge the wicked) is a legitimate and important form of Christian intercession, especially for those who suffer under corrupt governments, unjust laws, or abusive authorities. The prayer is not "let me destroy them" but "O LORD, God of vengeance, shine forth" -- bringing the case before the divine tribunal and trusting the verdict to God. Martin Luther prayed the imprecatory psalms regularly, seeing them as the only honest response to the persecution of the church.
<br/><br/>
<em>Prayer prompt</em>: Lord God of justice, I bring before you the specific injustices I have witnessed or suffered: [name them]. I do not ask to take revenge -- that belongs to you. I ask that you rise up as judge of the earth, that you see what those who suffer cannot escape seeing, and that you bring your justice to bear in your time and your way. Protect the widow, the sojourner, the fatherless. Do not let wicked rulers be allied with you. Amen.`,
  },
  {
    color: PURPLE,
    title: "God Does See: The Theology That Sustains Ethical Action",
    body: `The oppressors of Psalm 94 act with impunity because they believe "the LORD does not see." The refutation of verses 8-11 is not just a theological argument; it is the foundation of all ethical accountability. If God does not see, the most powerful thing in any room is whoever has the most human power. If God does see -- if the Creator of the eye perceives, if the LORD knows the thoughts of man -- then power relationships are radically relativized.
<br/><br/>
This theology sustains those who work for justice in circumstances where human observation and accountability are absent. The social worker who refuses to cut corners when no supervisor is present. The judge who rules fairly when no journalist is watching. The employer who treats workers justly when no law requires it. The prison guard who maintains dignity when the cameras are off. In each case, the motivation is the conviction that the LORD does see -- that no action is truly unobserved, that no injustice is truly hidden.
<br/><br/>
Hebrews 4:13 states the NT version of the same truth: "No creature is hidden from his sight, but all are naked and exposed to the eyes of him to whom we must give account." This is not a threat but a comfort for the righteous under oppression: your suffering is seen. The God who planted the ear hears every cry. The God who formed the eye sees every abuse. Justice is not deferred because it is unseen; it is deferred because God's timing is not ours.`,
  },
  {
    color: GOLD,
    title: "Blessed Is the Man Whom You Discipline: Receiving Hard Seasons as Formation",
    body: `One of the most counterintuitive movements in Psalm 94 is the turn to blessing in verse 12 in the middle of a lament about oppression. "Blessed is the man whom you discipline, O LORD, and whom you teach out of your law." This is not victim-blaming (as though the righteous suffer because they deserve to) but formation theology: God uses difficulty, including the difficulty of living under unjust authority, as the curriculum of wisdom.
<br/><br/>
Hebrews 12:7-11 develops this fully: "It is for discipline that you have to endure. God is treating you as sons. For what son is there whom his father does not discipline?...For the moment all discipline seems painful rather than pleasant, but later it yields the peaceful fruit of righteousness to those who have been trained by it." The key phrase is "trained by it" -- discipline produces fruit only in those who receive it as training rather than refusing it as injustice.
<br/><br/>
Practically, this means that when a hard season comes -- unjust treatment, institutional failure, persecution -- one of the questions to ask is: what is God teaching me out of his law in this? Not because suffering is always deserved or because God sends all suffering, but because God can redeem all suffering into formation. Psalm 94's wisdom turn is not passive resignation; it is active theological engagement with difficulty: Lord, what are you disciplining me toward in this?`,
  },
  {
    color: TEAL,
    title: "The LORD Is My Stronghold: When Human Institutions Fail",
    body: `Psalm 94 is remarkably relevant to situations where human institutions -- governments, courts, churches, organizations -- fail their mandates and harm rather than protect the people entrusted to them. The psalmist faces exactly this: rulers who "frame iniquity by statute" and "condemn the innocent to death." He has no human court of appeal. And his response is neither despair nor revolution but a personal declaration: "But the LORD has become my stronghold, and my God the rock of my refuge."
<br/><br/>
This does not mean that institutional reform is unimportant or that Christians should not advocate for just laws and structures. But it does mean that the ultimate confidence of the believer is not located in the reliability of any human institution. When institutions fail -- and they will -- the rock remains. "The LORD will not forsake his people; he will not abandon his heritage" (v. 14) is the covenant assurance that holds precisely when all human guarantors have proven unreliable.
<br/><br/>
Paul in Philippians 4:11-13, writing from prison under corrupt Roman authority, has found the same stronghold: "I have learned, in whatever situation I am, to be content...I can do all things through him who strengthens me." The "him" who strengthens is the same stronghold (misgab) of Psalm 94 -- the God who rises up for us when no human ally will, the rock of refuge when all human refuges have crumbled.`,
  },
];

export default function Psalm94Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openTheme, setOpenTheme] = useState<number | null>(null);
  const [openVerse, setOpenVerse] = useState<number | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #1a0507 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ background: ACCENT, color: "#fff", fontSize: "0.75rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.08em", padding: "0.25rem 0.75rem", borderRadius: "999px", textTransform: "uppercase" }}>Psalm 94</span>
            <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif" }}>Book IV &bull; 23 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 1rem" }}>
            O LORD God of Vengeance, Shine Forth
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: "680px", margin: "0 0 1.5rem" }}>
            A communal lament calling on the God of justice to rise against rulers who frame iniquity by statute -- paired with a wisdom meditation on divine discipline, God's all-seeing knowledge, and the personal confession that the LORD is my stronghold when all human institutions fail.
          </p>
          <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1.25rem", margin: "0", color: TEXT, fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7 }}>
            &ldquo;When the cares of my heart are many, your consolations cheer my soul.&rdquo;
            <span style={{ display: "block", fontSize: "0.85rem", color: MUTED, fontStyle: "normal", marginTop: "0.5rem" }}>&mdash; Psalm 94:19</span>
          </blockquote>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: activeTab === i ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === i ? ACCENT : MUTED, fontWeight: activeTab === i ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "sans-serif", fontSize: "0.95rem", transition: "color 0.2s" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1.5rem" }}>

        {/* OVERVIEW */}
        {activeTab === 0 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", color: ACCENT }}>Overview of Psalm 94</h2>
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Psalm 94 is one of the most theologically complex psalms in Book IV, weaving together communal lament, wisdom instruction, and personal testimony into a sustained engagement with the problem of institutional injustice. It opens with the invocation of God as the "God of vengeance" (El neqamot) -- a title that immediately signals the psalm's primary concern: divine justice in a world where human justice has been corrupted.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The psalm divides into three movements. The first (vv. 1&ndash;7) is a communal lament: the wicked exult, they crush God's people, they kill the vulnerable, and they do so with the theological confidence that "the LORD does not see." The second movement (vv. 8&ndash;15) is a wisdom rebuttal: the argument from creation refutes the claim that God does not see, and a beatitude reframes the righteous person's suffering as divine discipline and teaching. The third movement (vv. 16&ndash;23) is personal testimony: the psalmist recounts God's sustaining help when his foot was slipping, names the many cares that God's consolations have cheered, and concludes with the confident confession that the LORD has become his stronghold.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The specific injustice described in Psalm 94 is particularly sobering: the oppressors are not random criminals but rulers who "frame iniquity by statute" (v. 20) &mdash; they use the legal and legislative machinery of the state to systematically harm the innocent. This is not lawless violence but lawful violence: oppression laundered through the formal apparatus of governance. Against this form of injustice, the psalm's appeal to divine vengeance is especially appropriate: when the courts are corrupt, only the divine Judge can give justice.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Scholars have noted structural links between Psalm 94 and Psalms 91&ndash;93 that situate it in a larger meditation on divine sovereignty. After the theophanic praise of Psalm 93 ("The LORD reigns; he is robed in majesty"), Psalm 94 asks: if the LORD reigns, why do the wicked exult? The answer developed across the psalm is not that God's sovereignty is in doubt but that divine justice operates on a timeline and with methods that require faith to trust.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: `Paul quotes Psalm 94:11 in 1 Corinthians 3:20 ("The LORD knows the thoughts of the wise, that they are futile") and echoes its theology of vengeance in Romans 12:19 ("Vengeance is mine, I will repay, says the Lord"). Hebrews 12:5&ndash;11 develops the discipline theology of verse 12. Revelation 6:9&ndash;11 presents the martyrs crying "how long?" in exact echo of Psalm 94:3, and is answered in Revelation 19:11&ndash;21 with the divine Judge riding out to execute justice. The psalm's theology is woven throughout the NT.` }} />

            {/* Key Details */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: ACCENT, fontFamily: "sans-serif" }}>Key Details</h3>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {KEY_DETAILS.map(({ label, value }) => (
                  <div key={label} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "0.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "0.75rem" }}>
                    <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif", fontWeight: 600 }}>{label}</span>
                    <span style={{ color: TEXT, fontSize: "0.95rem" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: TEXT, fontFamily: "sans-serif" }}>Video Resources</h3>
            {VIDEOS.map((v) => <VideoEmbed key={v.videoId} v={v} />)}
          </div>
        )}

        {/* THEMES */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Major Themes</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>Click each theme to expand the full discussion.</p>
            {THEMES.map((theme, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: "10px", marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => setOpenTheme(openTheme === i ? null : i)} style={{ width: "100%", background: openTheme === i ? CARD : "transparent", border: "none", padding: "1.25rem 1.5rem", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                    <span style={{ color: TEXT, fontWeight: 600, fontSize: "1rem" }}>{theme.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: "1.25rem", flexShrink: 0 }}>{openTheme === i ? "-" : "+"}</span>
                </button>
                {openTheme === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ height: "1rem" }} />
                    <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Verse-by-Verse Commentary</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>Click each verse to expand the commentary.</p>
            {VERSES.map((v, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: "10px", marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => setOpenVerse(openVerse === i ? null : i)} style={{ width: "100%", background: openVerse === i ? CARD : "transparent", border: "none", padding: "1.25rem 1.5rem", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                    <div>
                      <span style={{ color: ACCENT, fontWeight: 700, fontFamily: "sans-serif", fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>{v.ref}</span>
                      <span style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.6 }}>&ldquo;{v.text}&rdquo;</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.25rem", flexShrink: 0 }}>{openVerse === i ? "-" : "+"}</span>
                  </div>
                </button>
                {openVerse === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ height: "1rem" }} />
                    <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: v.comment }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Application</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>How Psalm 94 shapes prayer for justice, formation through difficulty, and trust when institutions fail.</p>
            {APPLICATIONS.map((app, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${app.color}`, borderRadius: "10px", padding: "1.5rem", marginBottom: "1.25rem" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: app.color, marginBottom: "0.75rem", fontFamily: "sans-serif" }}>{app.title}</h3>
                <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: app.body }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
