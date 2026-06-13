"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Faith That Works",
  "Trials and Temptation",
  "The Sin of Favoritism",
  "Faith and Works",
  "The Tongue and True Wisdom",
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
    id: "Faith That Works",
    heading: "Faith That Works",
    reference: "Introduction",
    paragraphs: [
      "James, likely written by James the brother of Jesus and leader of the Jerusalem church, is the wisdom literature of the New Testament &mdash; practical, direct, and reminiscent of both Proverbs and the Sermon on the Mount. It reads less like a carefully argued treatise and more like a string of pointed exhortations, each pressing the reader from belief toward behavior. If Paul often soars into the heights of theology, James plants both feet firmly on the ground of everyday life.",
      "Its central concern is the integration of belief and behavior: a faith that does not transform how one lives is no real faith at all. For James, religion is not finally a matter of what one professes but of what one practices. He is relentless in exposing the gap between the words people say and the lives they live, and he insists that genuine faith will always show itself in concrete obedience, mercy, and self-control.",
      "James writes to Jewish Christians &ldquo;dispersed abroad,&rdquo; scattered believers facing trials and pressures from outside and temptations toward compromise within. He addresses a community tempted toward empty religiosity, partiality, and a divorce between profession and practice. These are not abstract dangers but the perennial temptations of every congregation: to honor the wealthy, to indulge the tongue, to hear the word without doing it.",
      "The letter is famously concrete. It names specific sins &mdash; favoritism, gossip, greed, presumptuous planning, the oppression of workers &mdash; and commends specific virtues: caring for widows and orphans, controlling the tongue, bearing trials with patience, praying for the sick. There is little here that cannot be applied directly on a Monday morning. James wants wisdom to walk out of the assembly and into the street.",
      "Martin Luther famously called James an &ldquo;epistle of straw,&rdquo; because he struggled to reconcile its emphasis on works with Paul&rsquo;s doctrine of justification by faith. He feared it might be read as teaching salvation by human effort. Yet a careful reading shows that James and Paul are addressing different errors entirely &mdash; Paul confronting those who would earn salvation by law-keeping, James confronting those who claim a faith that produces no fruit.",
      "Far from contradicting one another, the two are deeply complementary. Paul tells us how a sinner is justified before God; James tells us how that justifying faith proves itself genuine before the world. Together they guard the gospel from two opposite distortions: the legalism that trusts in works, and the dead orthodoxy that trusts in a faith that does nothing. James calls the church, then and now, to a living faith that works.",
    ],
  },
  {
    id: "Trials and Temptation",
    heading: "Trials and Temptation",
    reference: "James 1",
    paragraphs: [
      "James opens with a counterintuitive command: &ldquo;Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness&rdquo; (1:2&ndash;3). He does not say to rejoice because trials are pleasant, but because of what they accomplish. Trials are not meaningless interruptions of the Christian life; they are the furnace in which mature, steadfast faith is forged. Endurance, given its full effect, makes the believer &ldquo;perfect and complete, lacking in nothing.&rdquo;",
      "Such endurance requires wisdom, and James points the way to find it: &ldquo;If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him&rdquo; (1:5). God is no reluctant giver; he does not scold us for asking. But the asking must be in faith, &ldquo;with no doubting,&rdquo; for the doubter is like a wave of the sea, driven and tossed by the wind. The &ldquo;double-minded&rdquo; person, divided between trust and unbelief, is &ldquo;unstable in all his ways.&rdquo;",
      "James is careful to distinguish external trials, which God uses for good, from internal temptation toward sin. &ldquo;Let no one say when he is tempted, &lsquo;I am being tempted by God,&rsquo; for God cannot be tempted with evil, and he himself tempts no one&rdquo; (1:13). The source of temptation lies not in God but in the human heart: &ldquo;each person is tempted when he is lured and enticed by his own desire&rdquo; (1:14). Desire, when it conceives, gives birth to sin, and sin, fully grown, brings forth death.",
      "Over against the deadly progression of temptation, James sets the goodness of God: &ldquo;Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change&rdquo; (1:17). God does not tempt; he gives. He is the unchanging source of every good thing, who of his own will brought us forth by the word of truth, that we should be a kind of firstfruits of his creatures.",
      "The remedy James prescribes is the implanted word, &ldquo;which is able to save your souls,&rdquo; received with meekness. But hearing alone is not enough. &ldquo;Be doers of the word, and not hearers only, deceiving yourselves&rdquo; (1:22). The one who hears and does not do is like a man who glances at his face in a mirror and immediately forgets what he looks like; but the one who looks into the perfect law of liberty and perseveres, being a doer, &ldquo;will be blessed in his doing.&rdquo;",
      "James closes the chapter with a striking definition of authentic faith: &ldquo;Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world&rdquo; (1:27). True religion is not measured by ritual or profession but by mercy toward the helpless and holiness amid a corrupt world. From the very first chapter, James fuses inward devotion to God with outward compassion to the needy.",
    ],
  },
  {
    id: "The Sin of Favoritism",
    heading: "The Sin of Favoritism",
    reference: "James 2",
    paragraphs: [
      "James now confronts a specific sin festering within the assembly: showing partiality to the rich over the poor. He paints a vivid scene. If a man wearing gold rings and fine clothing enters your gathering, and a poor man in shabby clothing also comes in, and you give the rich man the good seat while telling the poor man, &ldquo;You stand over there,&rdquo; or &ldquo;Sit down at my feet,&rdquo; then &ldquo;have you not&hellip; become judges with evil thoughts?&rdquo; (2:4). The seating chart of the church betrays the values of its heart.",
      "This favoritism, James insists, violates the very character of the gospel. God has &ldquo;chosen those who are poor in the world to be rich in faith and heirs of the kingdom&rdquo; (2:5). To honor the rich and shame the poor is to reverse God&rsquo;s own pattern of grace, which lifts up the lowly and welcomes the unworthy. The community that bears Christ&rsquo;s name cannot mirror the world&rsquo;s contempt for those it deems insignificant.",
      "James appeals to what he calls the &ldquo;royal law&rdquo; found in Scripture: &ldquo;You shall love your neighbor as yourself&rdquo; (2:8). To fulfill this law is to do well; but to show partiality is to commit sin and be convicted by the law as a transgressor. He reminds his readers that the law is a unity &mdash; to fail in one point is to become accountable for all &mdash; so partiality cannot be dismissed as a small or harmless fault. It is lawbreaking.",
      "The deeper problem is that favoritism is not a minor social faux pas but a sin that contradicts the gospel itself. The gospel is the announcement that God shows no partiality, that he justifies the ungodly and welcomes the outsider purely by grace. A church that ranks people by their wealth has, at that point, stopped believing its own message. It has imported the world&rsquo;s scale of values into the household of faith.",
      "For the world ranks people relentlessly &mdash; by wealth, status, achievement, and usefulness. The church is called to be the one place on earth where those rankings are abolished, where the poor are honored, the lowly are seated with dignity, and every person is received as an image-bearer of God for whom Christ died. In a society obsessed with who matters, the assembly of Jesus is to be a community where all matter equally before the throne of grace.",
      "James thus turns a question of etiquette into a question of faith. How we treat the poor reveals what we truly believe about God. &ldquo;Mercy triumphs over judgment,&rdquo; he writes (2:13), warning that judgment will be without mercy to the one who has shown no mercy. The way of partiality leads to condemnation; the way of mercy reflects the heart of the God who showed mercy to us while we were yet unworthy.",
    ],
  },
  {
    id: "Faith and Works",
    heading: "Faith and Works",
    reference: "James 2",
    paragraphs: [
      "Here we reach the most theologically debated passage in the letter. &ldquo;What good is it, my brothers, if someone says he has faith but does not have works? Can that faith save him?&rdquo; (2:14). Notice James&rsquo;s careful wording: not faith in general, but a faith that is merely claimed and never embodied. The question is whether a profession of belief that produces no obedience can be called saving faith at all.",
      "James presses the point with a homely illustration. If a brother or sister is poorly clothed and lacking daily food, and you say to them, &ldquo;Go in peace, be warmed and filled,&rdquo; without giving them the things needed for the body, what good is that? Such words are empty, and so is such faith. &ldquo;So also faith by itself, if it does not have works, is dead&rdquo; (2:17). A faith that cannot move the hand to mercy is a corpse, however orthodox its words.",
      "He drives the nail deeper still: &ldquo;You believe that God is one; you do well. Even the demons believe&mdash;and shudder!&rdquo; (2:19). Mere intellectual assent to true doctrine is not faith in the saving sense; the demons have flawless theology and tremble at it. Genuine faith is not bare agreement with facts about God but a living trust that lays hold of God and reshapes the life. The proof is in the fruit.",
      "James then points to Abraham, &ldquo;justified by works when he offered up his son Isaac on the altar&rdquo; (2:21). His faith was &ldquo;active along with his works, and faith was completed by his works.&rdquo; The Scripture that said Abraham believed God and it was counted to him as righteousness was fulfilled and shown true when his faith bore the fruit of obedience. So too Rahab, who welcomed the spies. From these examples James concludes, &ldquo;a person is justified by works and not by faith alone&rdquo; (2:24).",
      "Is this a contradiction of Paul, who insists we are justified by faith apart from works of the law? No &mdash; the two are answering different questions. Paul opposes works of the law as a means of earning justification before God; James opposes a dead, intellectual &ldquo;faith&rdquo; that produces no fruit. Paul speaks of how a sinner is first declared righteous; James speaks of how that righteousness proves itself real. They use the same words to confront opposite errors.",
      "The resolution is simple and profound: for Paul, works are the wrong root; for James, works are the necessary fruit. To make works the ground of acceptance is legalism; to claim a faith that bears no works is self-deception. Both apostles agree that saving faith is a living faith that works through love &mdash; the very phrase Paul himself uses in Galatians 5:6. James and Paul stand together, guarding the one true gospel from two opposite distortions.",
    ],
  },
  {
    id: "The Tongue and True Wisdom",
    heading: "The Tongue and True Wisdom",
    reference: "James 3&ndash;5",
    paragraphs: [
      "James devotes remarkable attention to the tongue (ch. 3), warning that not many should become teachers, for they will be judged with greater strictness, and all of us stumble in what we say. Though small, the tongue holds astonishing power: like a bit in a horse&rsquo;s mouth or a tiny rudder steering a great ship, it directs the whole course of life. A small spark, James adds, sets a great forest ablaze.",
      "Yet for all our mastery over the animal world, the tongue defies our control: &ldquo;no human being can tame the tongue. It is a restless evil, full of deadly poison&rdquo; (3:8). The deepest scandal is its inconsistency: &ldquo;With it we bless our Lord and Father, and with it we curse people who are made in the likeness of God.&rdquo; From the same mouth come blessing and cursing &mdash; a contradiction as unnatural, James says, as a spring pouring out both fresh and salt water.",
      "Against this James sets &ldquo;the wisdom from above,&rdquo; which is &ldquo;first pure, then peaceable, gentle, open to reason, full of mercy and good fruits, impartial and sincere&rdquo; (3:17). This heavenly wisdom is recognized not by cleverness but by character &mdash; by a gentleness that produces a harvest of righteousness sown in peace. It stands in sharp contrast to the &ldquo;earthly, unspiritual, demonic&rdquo; wisdom marked by bitter jealousy and selfish ambition, which breeds disorder and every vile practice.",
      "The later chapters expose the worldliness and pride at the root of conflict. Quarrels come from passions at war within; people covet and cannot obtain, and so they fight. The friendship of the world is enmity with God. But God &ldquo;gives more grace,&rdquo; and James cites the proverb: &ldquo;God opposes the proud but gives grace to the humble&rdquo; (4:6). The remedy is to submit to God, resist the devil, draw near, and humble ourselves before the Lord, who will exalt us.",
      "James rebukes presumptuous planning that ignores God (4:13&ndash;17): those who boast, &ldquo;Today or tomorrow we will go into such and such a town and make a profit,&rdquo; forgetting they are &ldquo;a mist that appears for a little time and then vanishes.&rdquo; They ought instead to say, &ldquo;If the Lord wills, we will live and do this or that.&rdquo; And he thunders against the rich who oppress their workers (5:1&ndash;6), warning that the wages they have withheld by fraud cry out, and the cries have reached the ears of the Lord of hosts.",
      "The letter closes on notes of patience, prayer, and restoration. James calls for patience in suffering, &ldquo;as an example&hellip; the prophets,&rdquo; and the steadfastness of Job, knowing the Lord is compassionate and merciful. He urges the prayer of faith for the sick, that the elders anoint and pray, and confesses that &ldquo;the prayer of a righteous person has great power as it is working&rdquo; (5:16). Finally he commends the one who turns a wandering sinner back, saving a soul from death &mdash; a fitting end to a letter so devoted to a faith that works.",
    ],
  },
];

const videoItems = [
  { videoId: "qn-hLHWwRYY", title: "BibleProject — Book of James Overview" },
  { videoId: "5xIeQNgfYbc", title: "Faith and Works in James — Explained" },
  { videoId: "0Q5Cs1Q4N1A", title: "Taming the Tongue — James 3" },
];

export default function ChristianBookOfJamesGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of James
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The wisdom literature of the New Testament &mdash; a faith that works, the testing of faith through trials, the danger of favoritism, faith without works, the taming of the tongue, the wisdom from above, and patience in suffering.
          </p>
        </header>

        <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.5rem 1.75rem", marginBottom: "2.5rem" }}>
          <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, margin: 0, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;Be doers of the word, and not hearers only, deceiving yourselves&hellip; faith by itself, if it does not have works, is dead.&rdquo;" }} />
          <p style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", margin: "0.75rem 0 0" }}>James 1:22; 2:17</p>
        </div>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
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

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of James through visual teaching on the structure of the letter, the relationship of faith and works, and the call to tame the tongue.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Living Faith</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            James presses every believer past mere profession into practice &mdash; to be doers of the word and not hearers only. The faith he commends endures trials with joy, shows no partiality, bridles the tongue, walks in the wisdom from above, and proves itself genuine in works of mercy and love. Real faith is never idle; it works.
          </p>
        </div>
      </main>
    </div>
  );
}
