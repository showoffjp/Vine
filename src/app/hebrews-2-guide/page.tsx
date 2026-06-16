"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

interface Block {
  heading: string;
  reference?: string;
  accent: string;
  paragraphs: string[];
}

const overviewBlocks: Block[] = [
  {
    heading: "Pay Closer Attention, Lest We Drift",
    reference: "Hebrews 2:1&ndash;4",
    accent: ROSE,
    paragraphs: [
      "Hebrews 2 opens with the first of the letter&rsquo;s great warning passages: &ldquo;Therefore we must pay much closer attention to what we have heard, lest we drift away from it.&rdquo; The word &ldquo;therefore&rdquo; ties this exhortation to the soaring portrait of the Son in chapter 1, who is superior to the angels and seated at the right hand of the Majesty on high. Because the Son is so great, the message he brings demands the most serious attention.",
      "The author reasons from the lesser to the greater. If &ldquo;the message declared by angels proved to be reliable, and every transgression or disobedience received a just retribution&rdquo; &mdash; a reference to the Law given through angelic mediation &mdash; then the stakes are immeasurably higher with the gospel. The piercing question follows: &ldquo;how shall we escape if we neglect such a great salvation?&rdquo; Neglect, the quiet drift of inattention, is itself a deadly peril.",
      "This salvation carries impeccable credentials. It &ldquo;was declared at first by the Lord, and it was attested to us by those who heard.&rdquo; It came from the lips of Jesus himself, was confirmed by eyewitnesses, and was further authenticated by God &ldquo;by signs and wonders and various miracles and by gifts of the Holy Spirit distributed according to his will.&rdquo; The message rests on the testimony of the Lord, the apostles, and God himself.",
      "The danger Hebrews names is not dramatic apostasy but slow drift. The image is of a boat slipping its moorings, carried imperceptibly away by the current until it is lost. The remedy is to &ldquo;pay much closer attention&rdquo; to what we have heard. This warning sets the pastoral tone of the whole letter, which repeatedly urges a wavering community to hold fast and not fall away.",
    ],
  },
  {
    heading: "The World to Come and the Son of Man",
    reference: "Hebrews 2:5&ndash;9",
    accent: PURPLE,
    paragraphs: [
      "The author resumes the comparison with angels from a new angle: &ldquo;It was not to angels that God subjected the world to come, of which we are speaking.&rdquo; The destiny of the renewed creation does not belong to angelic beings. To establish to whom it does belong, the author turns to Psalm 8 and the question it raises about humanity&rsquo;s place in God&rsquo;s purposes.",
      "He quotes the psalm: &ldquo;What is man, that you are mindful of him, or the son of man, that you care for him? You made him for a little while lower than the angels; you have crowned him with glory and honor, putting everything in subjection under his feet.&rdquo; This was the original human vocation &mdash; to be crowned with glory and to exercise dominion over all things as God&rsquo;s image-bearers. In subjecting all things, God left nothing outside human dominion.",
      "Yet the author candidly acknowledges the gap between this promise and present experience: &ldquo;At present, we do not yet see everything in subjection to him.&rdquo; The world is plainly not yet ordered under redeemed humanity. Sin and death still reign, and the glorious destiny of Psalm 8 appears unfulfilled. The tension is real and is not glossed over.",
      "The resolution comes in a single luminous sentence: &ldquo;But we see him who for a little while was made lower than the angels, namely Jesus, crowned with glory and honor because of the suffering of death, so that by the grace of God he might taste death for everyone.&rdquo; What we do not yet see in ourselves we already see in Jesus. He has fulfilled humanity&rsquo;s destiny by descending into death and being crowned in glory, and he did it for everyone.",
    ],
  },
  {
    heading: "The Founder of Salvation Perfected Through Suffering",
    reference: "Hebrews 2:10&ndash;13",
    accent: GOLD,
    paragraphs: [
      "The author now states why this path of suffering was fitting: &ldquo;For it was fitting that he, for whom and by whom all things exist, in bringing many sons to glory, should make the founder of their salvation perfect through suffering.&rdquo; The God for whom and through whom everything exists chose to bring his children to glory not by bypassing suffering but through it, and through the suffering of their leader.",
      "The word translated &ldquo;founder&rdquo; is the Greek archegos, a rich term meaning pioneer, trailblazer, champion, or founder. Jesus is the one who goes ahead and opens the path that others may follow. He does not merely point to salvation from a distance; he forges it by his own journey through suffering and death into glory, becoming the pioneer who leads many sons home.",
      "To be made &ldquo;perfect&rdquo; through suffering does not imply Jesus was previously sinful or deficient. The word (teleioo) means to be completed, brought to the appointed goal, fully qualified for his task. Through his suffering Jesus was made completely fit to be the merciful and faithful high priest and the captain of our salvation, perfected as the one who has fully traveled the road of human obedience.",
      "Jesus is not ashamed to identify with those he saves: &ldquo;He who sanctifies and those who are sanctified all have one source. That is why he is not ashamed to call them brothers.&rdquo; The author then strings together quotations from Psalm 22:22 and Isaiah 8:17&ndash;18, placing on Jesus&rsquo; lips the words, &ldquo;I will tell of your name to my brothers,&rdquo; and &ldquo;Behold, I and the children God has given me.&rdquo; The Savior gladly calls the saved his family.",
    ],
  },
  {
    heading: "Victory Over Death and the Merciful High Priest",
    reference: "Hebrews 2:14&ndash;18",
    accent: TEAL,
    paragraphs: [
      "Because the children share in flesh and blood, &ldquo;he himself likewise partook of the same things.&rdquo; The incarnation was not optional ornament but necessary strategy. The Son took on real human nature, flesh and blood, in order to act on behalf of humanity from within humanity. He entered fully into our condition to rescue us from it.",
      "His aim was nothing less than to overthrow the tyrant: &ldquo;that through death he might destroy the one who has the power of death, that is, the devil, and deliver all those who through fear of death were subject to lifelong slavery.&rdquo; By dying, Jesus disarmed the very weapon the devil wielded over humanity. The fear of death that held people in lifelong bondage is broken by the death and resurrection of the one who tasted death for everyone.",
      "The author clarifies whom this rescue is for: &ldquo;For surely it is not angels that he helps, but he helps the offspring of Abraham.&rdquo; Therefore &ldquo;he had to be made like his brothers in every respect, so that he might become a merciful and faithful high priest in the service of God, to make propitiation for the sins of the people.&rdquo; Here the letter&rsquo;s great theme of Christ&rsquo;s high priesthood is first introduced and will be developed at length in the chapters to come.",
      "The chapter ends on a deeply pastoral note: &ldquo;For because he himself has suffered when tempted, he is able to help those who are being tempted.&rdquo; The same suffering that perfected the pioneer also equipped the priest with sympathy. Because Jesus genuinely endured temptation and suffering, he is not a distant Savior but one able to help his brothers and sisters in their struggles.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "The Danger of Drifting and Neglect",
    accent: ROSE,
    paragraphs: [
      "Hebrews 2 contains the first of several solemn warnings woven through the letter. The peril it names is not loud rebellion but quiet drift &mdash; the gradual slipping away of those who fail to &ldquo;pay much closer attention to what we have heard.&rdquo; The image of a vessel drifting from its anchorage warns that spiritual loss often happens not by a decisive turn but by sheer inattention.",
      "The argument moves from the lesser to the greater. If the law mediated by angels carried binding force and just retribution, how much more does the salvation declared by the Lord himself? To &ldquo;neglect such a great salvation&rdquo; is to court a graver danger than any that attended the old covenant. Neglect is treated as a serious spiritual condition, not a minor lapse.",
      "These warning passages have long fueled discussion about perseverance and assurance. Whatever one&rsquo;s theological framework, their pastoral function is plain: they are the means by which God keeps his people. The warnings are not meant to torment the faithful but to rouse the drifting, summoning the whole community to hold fast to the Lord they have heard.",
    ],
  },
  {
    heading: "Psalm 8 and the Destiny of Humanity in Christ",
    accent: PURPLE,
    paragraphs: [
      "By quoting Psalm 8, the author frames the chapter around the question of humanity&rsquo;s destiny. Human beings were created a little lower than the angels yet crowned with glory and honor and given dominion over all things. This is the vocation of the image-bearer, the calling to rule creation under God. It echoes the mandate first given to Adam in the garden.",
      "Yet the author honestly admits that &ldquo;we do not yet see everything in subjection to him.&rdquo; The grand destiny remains unrealized in fallen humanity, which is enslaved rather than enthroned. Sin has frustrated the original calling, and the world stubbornly refuses to lie in obedient subjection beneath redeemed human feet.",
      "The answer is Jesus, the true and last Adam, in whom the destiny of Psalm 8 is fulfilled. We do not yet see all things subjected to humanity, &ldquo;but we see Jesus,&rdquo; crowned with glory and honor through the suffering of death. As the second Adam, he recovers and secures the human vocation, and through union with him the many sons and daughters are brought to the glory he has already entered.",
    ],
  },
  {
    heading: "The Incarnation and the Defeat of Death",
    accent: TEAL,
    paragraphs: [
      "At the heart of Hebrews 2 stands the necessity of the incarnation. &ldquo;Since therefore the children share in flesh and blood, he himself likewise partook of the same things.&rdquo; The Son did not merely appear human or hover above our nature; he genuinely took flesh and blood, entering the full reality of human life and death in order to redeem it from within.",
      "The purpose of this descent was conquest: &ldquo;that through death he might destroy the one who has the power of death, that is, the devil.&rdquo; This is the great theme later named Christus Victor &mdash; Christ the conqueror who defeats the powers of evil through his own death and resurrection. The devil&rsquo;s grip on humanity, exercised through death, is shattered by the death of the deathless One.",
      "The fruit of this victory is freedom from fear. Those who &ldquo;through fear of death were subject to lifelong slavery&rdquo; are delivered. The dread of death is one of the deepest bondages of the human heart, and Christ&rsquo;s triumph dissolves it. Because the pioneer has passed through death and emerged crowned in glory, his people may face death without terror.",
    ],
  },
  {
    heading: "The Pioneer and the Merciful High Priest",
    accent: GOLD,
    paragraphs: [
      "Two great images of Christ converge in this chapter. He is the archegos, the pioneer and founder of salvation, who blazes the trail through suffering into glory and leads many sons after him. And he is the high priest, &ldquo;merciful and faithful in the service of God,&rdquo; who makes propitiation for the sins of the people. The leader who goes before is also the priest who intercedes.",
      "The word &ldquo;propitiation&rdquo; (from hilaskomai) carries us to the mercy seat, the place of atonement where sin was covered and divine favor secured. Christ&rsquo;s priestly work deals decisively with sin, turning aside wrath and reconciling the people to God. This brief introduction of the priesthood blooms into the extended argument of chapters four through ten.",
      "Crucially, Christ&rsquo;s qualification for this office came through his own suffering and temptation. &ldquo;Because he himself has suffered when tempted, he is able to help those who are being tempted.&rdquo; He is not a remote functionary but a sympathetic brother who knows our trials from the inside. His mercy is not theoretical; it is forged in the furnace of his own tested obedience.",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "Verses 1 to 4: The First Warning",
    reference: "Hebrews 2:1&ndash;4",
    accent: ROSE,
    paragraphs: [
      "Verse 1 draws the conclusion from chapter 1: &ldquo;Therefore we must pay much closer attention to what we have heard, lest we drift away from it.&rdquo; The greatness of the Son demands the closest attention to his message, and the danger is the quiet drift of neglect. Verses 2 and 3 argue from lesser to greater: if the law spoken through angels was binding, with every transgression justly punished, then escape is impossible for those who neglect &ldquo;such a great salvation.&rdquo;",
      "The credentials of this salvation are then traced in verses 3 and 4. It &ldquo;was declared at first by the Lord&rdquo; &mdash; by Jesus himself &mdash; and &ldquo;attested to us by those who heard,&rdquo; the eyewitnesses and apostles. God himself added his testimony &ldquo;by signs and wonders and various miracles and by gifts of the Holy Spirit distributed according to his will.&rdquo; The message is sealed by the Lord, the apostles, and God.",
      "The whole unit functions as a pastoral alarm. The threat to this community is not philosophical doubt but a slow loosening of attention that ends in drift and loss. The exhortation to &ldquo;pay much closer attention&rdquo; is the safeguard, anchoring the hearers to the word they first received.",
    ],
  },
  {
    heading: "Verses 5 to 9: But We See Jesus",
    reference: "Hebrews 2:5&ndash;9",
    accent: PURPLE,
    paragraphs: [
      "Verse 5 establishes that the world to come was not subjected to angels but to humanity, as Psalm 8 declares. Verses 6 through 8 quote the psalm: man, made for a little while lower than the angels, is crowned with glory and honor with all things under his feet. The author stresses that in subjecting all things, God left nothing outside human dominion.",
      "Verse 8 then confronts the obvious tension: &ldquo;At present, we do not yet see everything in subjection to him.&rdquo; The promised dominion is plainly unrealized in fallen humanity. The author neither denies this nor explains it away but holds it up honestly before turning to its resolution.",
      "Verse 9 supplies the answer: &ldquo;But we see him who for a little while was made lower than the angels, namely Jesus, crowned with glory and honor because of the suffering of death, so that by the grace of God he might taste death for everyone.&rdquo; What is not yet seen in us is already accomplished in Jesus. He has walked the path of Psalm 8 to its glorious end and did so on behalf of all.",
    ],
  },
  {
    heading: "Verses 10 to 13: Brothers Made One",
    reference: "Hebrews 2:10&ndash;13",
    accent: GOLD,
    paragraphs: [
      "Verse 10 declares it &ldquo;fitting&rdquo; that God, for whom and by whom all things exist, should perfect the founder (archegos) of salvation through suffering as he brings many sons to glory. The path to glory for both the pioneer and his people runs through suffering, not around it. Perfection here means being completed and fully qualified for the task, not made morally better.",
      "Verse 11 grounds the family bond: &ldquo;He who sanctifies and those who are sanctified all have one source. That is why he is not ashamed to call them brothers.&rdquo; The sanctifier and the sanctified belong to one family, and Jesus owns this kinship without shame. This solidarity is the basis for everything that follows.",
      "Verses 12 and 13 supply the scriptural proof, weaving together Psalm 22:22 and Isaiah 8:17&ndash;18: &ldquo;I will tell of your name to my brothers,&rdquo; &ldquo;I will put my trust in him,&rdquo; and &ldquo;Behold, I and the children God has given me.&rdquo; These texts place on Jesus&rsquo; own lips his confession of trust and his glad acknowledgment of his brothers and the children God has entrusted to him.",
    ],
  },
  {
    heading: "Verses 14 to 18: Death Destroyed, the Priest Prepared",
    reference: "Hebrews 2:14&ndash;18",
    accent: TEAL,
    paragraphs: [
      "Verses 14 and 15 unfold the logic of the incarnation. Because the children share in flesh and blood, the Son partook of the same, &ldquo;that through death he might destroy the one who has the power of death, that is, the devil, and deliver all those who through fear of death were subject to lifelong slavery.&rdquo; By his own death he defeats the lord of death and frees those bound by dread.",
      "Verse 16 specifies the beneficiaries: he helps not angels but &ldquo;the offspring of Abraham.&rdquo; Verse 17 then draws the necessary conclusion: &ldquo;he had to be made like his brothers in every respect, so that he might become a merciful and faithful high priest in the service of God, to make propitiation for the sins of the people.&rdquo; The incarnation qualifies him for the priesthood and for the work of atonement.",
      "Verse 18 closes with comfort: &ldquo;For because he himself has suffered when tempted, he is able to help those who are being tempted.&rdquo; The tested Savior is the sympathetic helper. His own experience of suffering and temptation makes his mercy real and his help available to every struggling believer.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "Guard Against Drift",
    accent: ROSE,
    paragraphs: [
      "Hebrews warns that the great danger to faith is not always dramatic denial but quiet neglect. We rarely decide to abandon Christ; we simply stop paying close attention, let the moorings loosen, and find ourselves carried off by the current. The application is to attend deliberately and continually to the word we have heard, anchoring ourselves before we drift.",
      "Such attention is sustained in the ordinary disciplines of the Christian life &mdash; in Scripture, prayer, the fellowship of the church, and the Lord&rsquo;s Table. Hebrews calls a wavering community not to a single heroic act but to steady, daily faithfulness, holding fast to so great a salvation that has been declared by the Lord and confirmed to us.",
    ],
  },
  {
    heading: "Look to Jesus When You Cannot See Yet",
    accent: PURPLE,
    paragraphs: [
      "We do not yet see everything in subjection, and often we do not see it in our own lives &mdash; sin persists, suffering continues, and death still casts its shadow. Hebrews 2 redirects our gaze: &ldquo;but we see Jesus,&rdquo; already crowned with glory and honor. When our own progress is hidden from us, we steady ourselves by looking to the pioneer who has already reached the goal.",
      "Because Jesus has fulfilled humanity&rsquo;s destiny as the second Adam, our future is secured in him even when our present is unfinished. Faith looks away from the discouraging evidence of our own incompleteness to the finished glory of our pioneer, trusting that where he has gone we will follow.",
    ],
  },
  {
    heading: "Live Free From the Fear of Death",
    accent: TEAL,
    paragraphs: [
      "Christ entered our flesh and died our death precisely to break the power of the one who held us in bondage through the fear of death. For the believer, death is a defeated enemy, its sting drawn by the resurrection of the pioneer who tasted death for everyone. This frees us to live courageously, to spend ourselves for others, and to face our own mortality without terror.",
      "Knowing that our high priest is merciful and faithful, and that he himself suffered when tempted, we may draw near to him in every trial. He is not a distant Savior but a sympathetic brother who helps those who are being tempted. We bring our weakness to one who fully understands it and who is able to help.",
    ],
  },
];

const reflectionQuestions = [
  "Where in your life do you sense yourself slowly drifting &mdash; not rejecting Christ outright, but quietly neglecting the word you once held closely? What would paying closer attention look like this week?",
  "When you cannot see growth or victory in your own life, how does the call to &ldquo;see Jesus&rdquo; crowned with glory reshape your hope?",
  "In what ways does the fear of death &mdash; or the smaller fears that flow from it &mdash; still hold you in bondage, and how does Christ&rsquo;s victory over the devil set you free?",
  "How does it change your prayers to know that your high priest suffered when tempted and is able to help those who are being tempted?",
  "Jesus is not ashamed to call you his brother or sister. How might living in the security of that family bond transform the way you face temptation, suffering, and shame?",
];

const videoItems = [
  { videoId: "nH7gZ2pVmKq", title: "Hebrews 2 - So Great a Salvation" },
  { videoId: "bF3xY9cQwLt", title: "But We See Jesus: Psalm 8 and the Son of Man" },
  { videoId: "dK6vR4mTzAp", title: "The Pioneer of Our Salvation - Hebrews 2:10-13" },
  { videoId: "qZ8wN1jXsRb", title: "Victory Over Death and the Merciful High Priest" },
];

function BlockView({ block }: { block: Block }) {
  return (
    <section style={{ marginBottom: "2.75rem" }}>
      <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 6px", color: TEXT }} dangerouslySetInnerHTML={{ __html: block.heading }} />
      {block.reference && (
        <div style={{ color: block.accent, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.1rem" }} dangerouslySetInnerHTML={{ __html: block.reference }} />
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", borderLeft: `3px solid ${block.accent}55`, paddingLeft: "1.25rem" }}>
        {block.paragraphs.map((para, i) => (
          <p
            key={i}
            style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}
      </div>
    </section>
  );
}

export default function Hebrews2GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${TEAL}22`, color: TEAL, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Hebrews Chapter 2
          </h1>
          <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", color: TEXT, lineHeight: 1.6, margin: "0 0 1rem", fontWeight: 600 }}>
            So Great a Salvation and the Pioneer of Our Salvation
          </p>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: MUTED, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;But we see him who for a little while was made lower than the angels, namely Jesus, crowned with glory and honor because of the suffering of death.&rdquo; &mdash; Hebrews 2:9" }}
          />
        </header>

        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1rem", paddingTop: "0.5rem", background: BG }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? TEAL : BORDER}`,
                background: activeTab === t ? TEAL : CARD,
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

        {activeTab === "Overview" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Overview of Hebrews 2</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Hebrews 2 follows the dazzling portrait of the Son in chapter 1 with a sober warning and a profound meditation on why the divine Son became human. The chapter opens with the first of the letter&rsquo;s warning passages &mdash; the danger of drifting from so great a salvation &mdash; and then turns to Psalm 8 to show that the destiny of humanity, unrealized in us, is fulfilled in Jesus. He is the pioneer of salvation perfected through suffering, the brother who shares our flesh and blood, the conqueror who through death defeats the devil and frees us from the fear of death, and the merciful and faithful high priest who makes propitiation for sins and helps those who are tempted." }}
            />
            {overviewBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Key Themes</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Several of Hebrews&rsquo; richest themes are introduced in this chapter. It sounds the first warning against drifting and neglect, sets the destiny of Psalm 8 within the story of Christ the second Adam, unveils the necessity of the incarnation and the defeat of death, and presents Jesus as both the pioneer who leads us to glory and the merciful high priest who makes propitiation for our sins." }}
            />
            {themeBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Verse by Verse</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Moving through Hebrews 2 section by section reveals a careful argument that flows from warning to wonder. It begins with the peril of neglect, moves to Psalm 8 and the sight of Jesus crowned through suffering, unfolds his solidarity with the brothers he is not ashamed to claim, and culminates in his victory over death and his qualification as the merciful high priest." }}
            />
            {verseBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Application</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Hebrews 2 speaks directly to the everyday struggles of faith. It warns us against the slow drift of neglect, lifts our eyes to Jesus when we cannot yet see our own victory, frees us from the fear of death, and assures us of a merciful high priest who has suffered as we suffer and is able to help us." }}
            />
            {applicationBlocks.map((b) => <BlockView key={b.heading} block={b} />)}

            <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 1.1rem", fontSize: "1.25rem" }}>Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>
          </div>
        )}

        <section style={{ marginTop: "3.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
            dangerouslySetInnerHTML={{ __html: "Go deeper into Hebrews 2 with these video teachings on so great a salvation, the destiny of humanity fulfilled in Jesus, the pioneer perfected through suffering, and the victory over death won by our merciful high priest." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Pioneer Who Brings Many Sons to Glory</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "Hebrews 2 holds together warning and wonder. It urges us not to drift from so great a salvation, and then shows us why that salvation is so great: the divine Son became our brother, tasted death for everyone, destroyed the power of the devil, and became a merciful and faithful high priest. We do not yet see all things subjected to us &mdash; but we see Jesus, crowned with glory, leading many sons home." }}
          />
        </div>
      </main>
    </div>
  );
}
