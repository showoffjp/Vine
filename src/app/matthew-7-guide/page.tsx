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

const ACCENT = TEAL;

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Overview of Matthew 7",
    reference: "Matthew 7:1&ndash;29",
    paragraphs: [
      "Matthew 7 brings the Sermon on the Mount, the greatest body of teaching ever delivered, to its searching and dramatic conclusion. Having proclaimed the blessedness of the kingdom in the Beatitudes, called his disciples salt and light, deepened the law from the outside in, and taught them to pray and to trust their Father, Jesus now gathers everything into a series of urgent calls to genuine, fruitful, obedient discipleship. The chapter is less a collection of separate sayings than a sustained appeal: do not merely admire this teaching, but build your life upon it.",
      "The chapter opens with the famous and frequently misused words, &ldquo;Judge not, that you be not judged&rdquo; (7:1). Jesus warns against the hypocrisy of condemning others while ignoring our own faults, picturing a man trying to remove a speck from his brother&rsquo;s eye while a log protrudes from his own (7:3&ndash;5). Yet this is not a blanket prohibition of all moral discernment, for in the very next breath Jesus speaks of not giving what is holy to dogs or casting pearls before pigs (7:6), which requires careful judgment about people and situations.",
      "Jesus then turns to prayer with one of the most encouraging promises in all of Scripture: &ldquo;Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you&rdquo; (7:7). He reasons from the lesser to the greater, observing that even evil human fathers know how to give good gifts to their children, so how much more will the heavenly Father give good things to those who ask him (7:11). This flows directly into the Golden Rule, the summary of the whole law: &ldquo;Whatever you wish that others would do to you, do also to them, for this is the Law and the Prophets&rdquo; (7:12).",
      "From the midpoint of the chapter onward, Jesus presents a series of stark contrasts that force a decision. There are two gates and two ways - the narrow gate leading to life and the wide gate leading to destruction (7:13&ndash;14). There are two kinds of trees and two kinds of fruit, the test by which false prophets are recognized (7:15&ndash;20). There are two kinds of confessors, those who merely say &ldquo;Lord, Lord&rdquo; and those who actually do the will of the Father (7:21&ndash;23). And finally there are two builders, the wise man on the rock and the foolish man on the sand (7:24&ndash;27).",
      "The Sermon ends with a description of the crowd&rsquo;s response: &ldquo;And when Jesus finished these sayings, the crowds were astonished at his teaching, for he was teaching them as one who had authority, and not as their scribes&rdquo; (7:28&ndash;29). The scribes taught by citing other teachers; Jesus taught on his own authority, repeatedly saying &ldquo;But I say to you.&rdquo; The chapter thus closes by raising the deepest question the Sermon presses upon every hearer: who is this man, that he speaks with such authority, and will you build your life upon his words?",
      "Read as a whole, Matthew 7 is a great sorting. Again and again Jesus divides humanity into two groups, two paths, two destinies, and refuses to allow any neutral middle ground. The Sermon is not a gentle collection of ideals to be admired from a distance; it is a summons to enter the narrow gate, to bear good fruit, to do the will of the Father, and to build on the rock. Everything depends on hearing these words and doing them, for the storm is coming, and only one foundation will stand.",
    ],
  },
  {
    id: "Key Themes",
    heading: "Key Themes in Matthew 7",
    reference: "Major Teachings of the Sermon",
    paragraphs: [
      "The first theme is right judgment versus hypocritical condemnation. &ldquo;Judge not&rdquo; (7:1) is among the most quoted and most abused verses in the Bible, often weaponized to silence any moral evaluation whatsoever. But Jesus is not forbidding discernment; he is forbidding the self-righteous, censorious, hypocritical judging that magnifies the faults of others while excusing our own. The log-and-speck image is deliberately absurd and even comic, exposing the blindness of those eager to correct others while ignoring their own glaring sin. Once the log is removed, Jesus says, you will &ldquo;see clearly to take the speck out of your brother&rsquo;s eye&rdquo; (7:5) - so discernment is the goal, but it must begin with humble self-examination.",
      "The second theme is the balance of discernment, sharpened by the difficult verse about dogs and pigs (7:6). Having warned against harsh judging, Jesus immediately makes clear that disciples must still evaluate people and situations wisely. Not everyone is ready to receive what is holy; some will trample the gospel and turn to attack the one who offers it. The Christian life therefore requires a delicate balance: neither the hypocritical condemnation Jesus forbids nor a naive indiscriminateness that fails to recognize hardness and hostility. Love is not blind, and wisdom is not censoriousness.",
      "The third theme is persistent, confident prayer. The threefold command to ask, seek, and knock (7:7&ndash;8) uses present-tense verbs that imply continued, persevering action - keep asking, keep seeking, keep knocking. Jesus grounds the promise not in our worthiness but in the fatherly goodness of God, arguing from the lesser to the greater: if sinful human fathers give good gifts, &ldquo;how much more will your Father who is in heaven give good things to those who ask him&rdquo; (7:11). Prayer in the Sermon is the natural language of children who trust their Father.",
      "The fourth theme is the Golden Rule as the summary of the whole law. &ldquo;Whatever you wish that others would do to you, do also to them, for this is the Law and the Prophets&rdquo; (7:12) takes the ethical heart of the entire Old Testament and distills it into a single positive principle. Earlier teachers had stated the rule negatively - do not do to others what you would not want done to you - but Jesus states it positively and proactively. It is not enough to refrain from harming; we are to actively seek the good of others as we would seek our own. This single sentence functions as the practical center of the Sermon.",
      "The fifth theme is the two ways and the narrow gate. &ldquo;Enter by the narrow gate&rdquo; (7:13), Jesus says, for the way to destruction is wide and easy and crowded, while &ldquo;the gate is narrow and the way is hard that leads to life, and those who find it are few&rdquo; (7:14). This echoes the ancient two ways tradition found in Deuteronomy 30, where Moses sets before Israel life and death, and in Psalm 1, which contrasts the way of the righteous with the way of the wicked. Discipleship is not the broad, comfortable path of the majority; it is a deliberate, costly, narrow road.",
      "The sixth theme is fruit as the evidence of authentic faith, which ties together the warnings about false prophets and false confessors. &ldquo;You will recognize them by their fruits&rdquo; (7:16), Jesus says, for a healthy tree cannot bear bad fruit and a diseased tree cannot bear good fruit. This standard applies not only to detecting false teachers but to testing the reality of our own profession. Those who cry &ldquo;Lord, Lord&rdquo; but do not do the Father&rsquo;s will hear the most terrifying words in the Gospels: &ldquo;I never knew you; depart from me&rdquo; (7:23). The lordship of Christ is inseparable from obedience to Christ.",
    ],
  },
  {
    id: "Verse by Verse",
    heading: "Walking Through Matthew 7",
    reference: "Matthew 7:1&ndash;29",
    paragraphs: [
      "Jesus begins with the command, &ldquo;Judge not, that you be not judged. For with the judgment you pronounce you will be judged, and with the measure you use it will be measured to you&rdquo; (7:1&ndash;2). The principle is one of reciprocity: the standard we apply to others will be applied to us. Then comes the vivid image of the speck and the log: &ldquo;Why do you see the speck that is in your brother&rsquo;s eye, but do not notice the log that is in your own eye?&rdquo; (7:3). The hypocrite must first &ldquo;take the log out of your own eye, and then you will see clearly to take the speck out of your brother&rsquo;s eye&rdquo; (7:5). Self-examination precedes correction.",
      "Verse 6 introduces a striking qualification: &ldquo;Do not give dogs what is holy, and do not throw your pearls before pigs, lest they trample them underfoot and turn to attack you.&rdquo; In the ancient world dogs and pigs were unclean scavengers, and the saying warns against offering sacred things to those who will only despise and desecrate them. After the warning against harsh judging, this verse restores balance, reminding disciples that genuine wisdom must still discern when and to whom holy things should be entrusted. Both indiscriminate condemnation and indiscriminate openness are foolish.",
      "Jesus then turns to prayer with rising intensity: &ldquo;Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and the one who seeks finds, and to the one who knocks it will be opened&rdquo; (7:7&ndash;8). He illustrates with a homely picture: no father gives his son a stone when he asks for bread, or a serpent when he asks for a fish (7:9&ndash;10). &ldquo;If you then, who are evil, know how to give good gifts to your children, how much more will your Father who is in heaven give good things to those who ask him!&rdquo; (7:11). The argument moves from the lesser to the greater, anchoring prayer in the Father&rsquo;s character.",
      "The Golden Rule follows as a summary and climax of this entire section: &ldquo;So whatever you wish that others would do to you, do also to them, for this is the Law and the Prophets&rdquo; (7:12). The little word &ldquo;so&rdquo; connects it to what precedes - because we have a generous Father who gives good gifts, we are freed to be generous toward others. In a single sentence Jesus gathers up the entire ethical teaching of the Old Testament and turns it into an active, imaginative principle: put yourself in the place of the other and act for their good as you would want them to act for yours.",
      "Jesus now sets before his hearers two gates and two ways: &ldquo;Enter by the narrow gate. For the gate is wide and the way is easy that leads to destruction, and those who enter by it are many. For the gate is narrow and the way is hard that leads to life, and those who find it are few&rdquo; (7:13&ndash;14). The imagery demands a choice. There is no third option, no comfortable middle path. The way of life is found by few, is entered by a narrow gate, and is hard - yet it alone leads to life, while the broad and crowded road leads only to destruction.",
      "Next comes the warning about false prophets: &ldquo;Beware of false prophets, who come to you in sheep&rsquo;s clothing but inwardly are ravenous wolves&rdquo; (7:15). The test is fruit: &ldquo;You will recognize them by their fruits&rdquo; (7:16). Just as grapes are not gathered from thornbushes, so &ldquo;every healthy tree bears good fruit, but the diseased tree bears bad fruit&rdquo; (7:17). A good tree cannot bear bad fruit, nor can a diseased tree bear good fruit, and &ldquo;every tree that does not bear good fruit is cut down and thrown into the fire&rdquo; (7:19). Character and conduct, not charisma or claims, reveal the truth about a teacher.",
      "Jesus then issues a chilling warning about false profession: &ldquo;Not everyone who says to me, Lord, Lord, will enter the kingdom of heaven, but the one who does the will of my Father who is in heaven&rdquo; (7:21). On the last day many will protest that they prophesied, cast out demons, and did mighty works in his name (7:22). Yet to them he will declare, &ldquo;I never knew you; depart from me, you workers of lawlessness&rdquo; (7:23). The most sobering feature of this passage is that these people are religiously active and outwardly impressive, yet they were never truly known by Christ. Profession without obedience is no salvation.",
      "The Sermon climaxes with the parable of the two builders: &ldquo;Everyone then who hears these words of mine and does them will be like a wise man who built his house on the rock&rdquo; (7:24), while the one who hears and does not do them is like a foolish man who built on sand. When the rain fell, the floods came, and the winds blew and beat against both houses, the house on the rock stood, but the house on the sand fell, &ldquo;and great was the fall of it&rdquo; (7:27). The difference between the two builders was not whether they heard, but whether they did. The Sermon closes by noting that the crowds &ldquo;were astonished at his teaching, for he was teaching them as one who had authority, and not as their scribes&rdquo; (7:28&ndash;29).",
    ],
  },
  {
    id: "Application",
    heading: "Living Matthew 7 Today",
    reference: "Personal and Community Application",
    paragraphs: [
      "Matthew 7 first calls us to honest self-examination before we presume to correct others. The image of the log and the speck is a permanent rebuke to the censorious spirit that delights in exposing the faults of others. Before we speak a word of correction, Jesus tells us to deal with the greater fault in ourselves. This does not mean we never address sin in others - for once the log is removed, we will see clearly to help our brother - but it means that all true correction flows from humility and self-knowledge, not from superiority. The goal is restoration, not condemnation.",
      "The chapter calls us to recover a confident, persevering prayer life. Many believers pray timidly, half-expecting to be refused, but Jesus commands us to ask, seek, and knock with the boldness of children who know their Father is good. The application is to bring our real needs and desires to God repeatedly, to refuse to give up when answers are delayed, and to trust that the Father will give good things - not always what we demand, but always what is genuinely good. Prayer is not wresting gifts from a reluctant deity but receiving from a Father whose generosity exceeds the best of earthly fathers.",
      "The Golden Rule offers a wonderfully practical compass for everyday life. Whenever we are unsure how to treat someone - a difficult coworker, a needy neighbor, a family member who has wronged us - we can ask a simple question: how would I want to be treated in their place? This single principle cuts through endless ethical complexity and turns love into concrete action. It moves us beyond the passive avoidance of harm into the active pursuit of others&rsquo; good, making us imitators of the generous Father who gives good gifts to his children.",
      "The teaching on the narrow gate confronts the comfortable assumption that the majority must be right and that the broad, easy path is the safe one. Jesus warns that the crowded road leads to destruction and that the way to life is hard and found by few. The application is sobering: we cannot drift into the kingdom by following the cultural current. Genuine discipleship requires a deliberate decision to enter the narrow gate and a willingness to walk a difficult road that most people decline. Yet the narrowness is not arbitrary harshness; it is the realism of a Lord who tells us the truth about the only path that leads to life.",
      "The repeated emphasis on fruit demands that we examine the reality of our own faith and the trustworthiness of those who teach us. We are to test teachers not by their eloquence, popularity, or apparent power, but by the fruit of their character and the conformity of their lives to Christ. And we must apply the same test to ourselves, for it is possible to say &ldquo;Lord, Lord,&rdquo; to be religiously busy, even to do impressive works, and yet to be unknown by Christ. The question Matthew 7 presses is not merely whether we profess faith but whether our lives bear the fruit of genuine obedience to the Father&rsquo;s will.",
      "Finally, the parable of the two builders gives the whole Sermon its decisive application: it is not enough to hear these words; we must do them. The wise and foolish builders both heard the same teaching and both faced the same storm; the only difference was obedience. Christian maturity is not measured by how much truth we have heard or how well we can explain it, but by whether we have built our lives upon the words of Jesus. The storm of testing and judgment will come to every life, and in that day only the house founded on the rock of Christ&rsquo;s words - heard and obeyed - will stand.",
    ],
  },
];

const reflectionQuestions = [
  "Where are you more eager to point out the speck in someone else&rsquo;s eye than to deal with the log in your own, and what would honest self-examination look like?",
  "How would your prayer life change if you truly believed the Father is more generous than the best earthly parent and delights to give good gifts to those who ask?",
  "Is there a relationship or situation right now where applying the Golden Rule would change how you act, and what concrete step would that require?",
  "What evidence of fruit do you look for when evaluating teachers and influences in your life, and what fruit is your own life producing?",
  "In what areas have you been hearing the words of Jesus without doing them, and what would it mean to build your life on the rock in those areas?",
];

const videoItems = [
  { videoId: "8aShfolHUlw", title: "Matthew 7 - The Conclusion of the Sermon on the Mount" },
  { videoId: "Nf7-7lCa3i0", title: "Judge Not - Discernment Without Hypocrisy" },
  { videoId: "1iWpQ6OBI8M", title: "The Narrow Gate and the Two Ways" },
  { videoId: "Mg7rLnzM5jA", title: "The Wise and Foolish Builders - Hearing and Doing" },
];

export default function Matthew7GuidePage() {
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
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Matthew 7 &mdash; The Sermon Concludes
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Everyone then who hears these words of mine and does them will be like a wise man who built his house on the rock.&rdquo; &mdash; Matthew 7:24" }} />
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem", position: "sticky", top: "var(--header-height, 80px)", background: BG, zIndex: 10 }}>
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

            {activeTab === "Application" && (
              <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${PURPLE}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
                <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.25rem" }}>Questions for Reflection</h3>
                <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                  {reflectionQuestions.map((q, i) => (
                    <li
                      key={i}
                      style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.7 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  ))}
                </ol>
              </div>
            )}
          </section>
        )}

        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Matthew 7 through these video teachings on judging rightly, persistent prayer, the narrow way, recognizing false prophets by their fruit, and building your life on the rock of Christ&rsquo;s words." }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${GREEN}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Build on the Rock</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Matthew 7 ends not with a request for admiration but with a demand for obedience. The wise builder and the foolish builder heard exactly the same words and faced exactly the same storm; the only difference between standing and falling was doing. Jesus taught as one who had authority, and the whole Sermon presses a single question upon every hearer: will you build your life on the rock of his words, or watch it fall when the storm comes? Great is the fall of the house built on sand, but the house built on the rock will stand." }} />
        </div>
      </main>
    </div>
  );
}
