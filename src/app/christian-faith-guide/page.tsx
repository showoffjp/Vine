"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["What Is Biblical Faith", "Faith and Works", "Faith in Doubt", "The Heroes of Faith", "How Faith Grows", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "What Is Biblical Faith",
    heading: "What Is Biblical Faith?",
    paragraphs: [
      "Faith is one of the most misunderstood words in the Christian vocabulary. In popular usage it has come to mean something like wishful thinking, a leap into the dark, or the act of believing something for which there is no evidence. But this is not what the Bible means by faith. Biblical faith is not blind belief or a flight from reason; it is trust grounded in the trustworthiness of God. It is not a feeling that arises from nowhere but a confidence that rests on the character and the promises of a God who has shown himself faithful across the whole sweep of redemptive history. To have faith, in the biblical sense, is not to believe against the evidence but to entrust oneself to the One whom the evidence reveals.",
      "The classic definition comes from Hebrews 11:1: &ldquo;Now faith is the assurance of things hoped for, the conviction of things not seen.&rdquo; Two words anchor that sentence &mdash; &ldquo;assurance&rdquo; and &ldquo;conviction.&rdquo; Faith is not a vague hope that things might turn out well; it is an assurance, a settled confidence, about realities that have been promised but not yet seen. The things hoped for are not invented by the believer; they are the things God has pledged. Faith is therefore the faculty by which the unseen becomes present and the future becomes certain. It is the title deed of what is promised, the evidence of what cannot yet be observed, because it rests on the word of the One who cannot lie.",
      "The Greek word translated &ldquo;faith&rdquo; throughout the New Testament is <em>pistis</em>, and its primary meaning is relational trust rather than mere intellectual assent. This is a crucial distinction. To believe that God exists is not yet to have saving faith. James presses the point with devastating clarity: &ldquo;You believe that God is one; you do well. Even the demons believe &mdash; and shudder!&rdquo; (James 2:19). The demons have impeccable theology; their problem is not a deficient creed but the absence of trust and surrender. Biblical faith is not agreement with a set of propositions held at arm&rsquo;s length; it is the entrusting of one&rsquo;s whole self to a Person. It is the difference between believing that a surgeon is competent and lying down on the table to let her operate.",
      "The Reformers, refining a long tradition, identified three elements that together make up living faith: <em>notitia</em>, <em>assensus</em>, and <em>fiducia</em>. <em>Notitia</em> is knowledge &mdash; faith must have content; one must know something of who God is and what he has done. <em>Assensus</em> is assent &mdash; the conviction that this content is actually true, not merely a beautiful story. But the third element, <em>fiducia</em>, is the heart of saving faith: it is trust, the personal reliance of the whole self upon Christ. A person may have knowledge and even assent and still lack faith, for the demons have both. It is <em>fiducia</em> &mdash; resting, leaning, entrusting &mdash; that turns information about Christ into a relationship with him.",
      "Perhaps the most beautiful image of faith in the Reformation tradition is that of the empty hand. Faith, in this picture, contributes nothing of its own to salvation; it is simply the open, empty hand that receives the gift of grace. Faith does not earn, achieve, or merit anything &mdash; if it did, it would no longer be faith but works. Its entire function is reception. This is why the Bible can say that we are saved &ldquo;through faith&rdquo; and not &ldquo;because of faith&rdquo; as though faith were itself a meritorious act. The value is not in the hand but in the gift it receives. Faith looks away from itself entirely and fixes its gaze on Christ, the giver, holding out an empty hand to receive what only grace can supply.",
      "This means that faith is fundamentally about its object, not its strength. Much anxiety in the Christian life comes from measuring the intensity of one&rsquo;s faith rather than the reliability of its object. But a weak faith in a strong Savior saves; a strong faith in a weak object does not. The trembling hand that lays hold of Christ holds him as truly as the steady one. The thief on the cross, with the most rudimentary theology imaginable and only moments to live, exercised saving faith with the words, &ldquo;Jesus, remember me.&rdquo; Faith is not heroic certainty; it is the act of looking away from oneself to the One who is able to save.",
      "Biblical faith, then, is trust grounded in the trustworthiness of God &mdash; relational, not merely intellectual; receptive, not meritorious; resting on the object rather than on its own strength. It is the assurance of things hoped for and the conviction of things not seen, the empty hand that receives the gift of salvation, and the faculty by which the believer entrusts the whole of life to the God who has proven faithful and who has promised never to fail those who lean upon him.",
    ],
  },
  {
    id: "Faith and Works",
    heading: "Faith and Works: Resolving the Tension",
    paragraphs: [
      "Few questions have generated more controversy in the history of the church than the relationship between faith and works. On the surface, the New Testament seems to speak with two voices. Paul declares, &ldquo;For we hold that one is justified by faith apart from works of the law&rdquo; (Romans 3:28), and again, &ldquo;by works of the law no one will be justified&rdquo; (Galatians 2:16). James, by contrast, writes, &ldquo;a person is justified by works and not by faith alone&rdquo; (James 2:24), and concludes, &ldquo;faith apart from works is dead&rdquo; (James 2:26). To a casual reader these statements appear to be in flat contradiction, and the apparent tension has fueled debates from the Reformation onward.",
      "The resolution lies in recognizing that Paul and James are answering different questions and using the word &ldquo;works&rdquo; in different ways. Paul is confronting those who imagined that they could earn standing before God by keeping the law &mdash; by circumcision, by ritual observance, by moral effort offered as a basis for acceptance. Against this he insists that justification is by faith alone, entirely apart from any works that might serve as grounds for our acceptance. James is confronting the opposite error: a dead orthodoxy that claimed to have faith while showing none of its fruit, a profession of belief that left the hungry unfed and the naked unclothed. The &ldquo;faith&rdquo; James condemns is the bare assent of the demons; the &ldquo;works&rdquo; he commends are the evidence of living trust.",
      "The classic Protestant formulation captures the reconciliation in a single memorable line: we are saved by faith alone, but the faith that saves is never alone. Justification rests on faith and nothing else; no work contributes to our acceptance before God. Yet genuine faith is a living, active thing, and it inevitably bears fruit. A faith that produced no change, no love, no obedience, would not be weak faith but no faith at all &mdash; the dead faith James describes, faith as a corpse. The tree is made good before it bears fruit, and it is not the fruit that makes it a tree; but a living tree will bear fruit, and a tree that never does is dead.",
      "Paul himself makes exactly this point when his language is read whole. The verse immediately following his great statement that salvation is &ldquo;by grace&hellip;through faith&hellip;not a result of works&rdquo; (Ephesians 2:8-9) goes on to say: &ldquo;For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them&rdquo; (Ephesians 2:10). Works are excluded as the root of salvation and included as its fruit. We are not saved by good works, but we are saved for them. The same apostle who thunders against works-righteousness writes more about the practical shape of holy living than almost any other New Testament author.",
      "Paul&rsquo;s own summary phrase brings the two emphases together perfectly: &ldquo;For in Christ Jesus neither circumcision nor uncircumcision counts for anything, but only faith working through love&rdquo; (Galatians 5:6). Faith works. It is not idle; it expresses itself, and the form of its expression is love. This is the faith that James also has in view &mdash; not a barren confession but a trust so real that it spills over into action, feeding the hungry, caring for the orphan and the widow, loving the neighbor. The faith that justifies and the faith that works are not two faiths but one: living trust in a living Lord.",
      "It is essential to keep the order right, for to reverse it is to lose the gospel. Works are the fruit and the evidence of faith, never its root or its cause. The believer does not perform good works in order to be accepted; the believer is accepted in Christ and therefore performs good works out of gratitude, love, and the new life of the Spirit. The moment works become the ground of acceptance rather than its consequence, grace is emptied and the cross is made pointless. But the moment works are dismissed as unnecessary, faith is exposed as the dead thing James warns against. The truth holds both: justification by faith alone, and a faith that is never alone.",
      "Understood this way, the supposed contradiction dissolves into a rich and balanced whole. Paul guards the freeness of grace; James guards its reality. Paul ensures that no one trusts in their own performance; James ensures that no one mistakes empty profession for living faith. Together they describe the one faith of the gospel: an empty hand that receives Christ for righteousness, and a transformed heart that then walks in the good works God prepared, faith working through love, until the day faith gives way to sight.",
    ],
  },
  {
    id: "Faith in Doubt",
    heading: "Faith in Times of Doubt",
    paragraphs: [
      "Many sincere believers carry a secret burden: the fear that the doubts they feel are proof that their faith is failing. They have been taught, implicitly or explicitly, that a real Christian does not doubt, and so when questions arise they hide them, ashamed, convinced that to admit uncertainty is to betray the faith. But this assumption rests on a mistake. Doubt is not the opposite of faith. The opposite of faith is unbelief &mdash; the settled refusal to trust. Doubt is something else: it is faith wrestling, faith asking questions, faith reaching for solid ground. A faith that has never been tested by doubt is often a faith that has never been examined at all.",
      "Scripture itself gives doubt a voice and treats it with remarkable tenderness. When a desperate father brought his afflicted son to Jesus, he cried out one of the most honest prayers in all of Scripture: &ldquo;I believe; help my unbelief!&rdquo; (Mark 9:24). Here are faith and doubt in the very same breath, the same heart holding both at once. And Jesus did not rebuke him or send him away to come back when his faith was stronger. He healed the boy. The Lord received a faith mingled with doubt and honored it. This single verse has been a lifeline to countless believers who feared that their mixed and trembling trust was unacceptable to God.",
      "The Bible is full of doubters whom God did not discard. John the Baptist, the forerunner who had pointed to Jesus as the Lamb of God, later sat in prison and sent messengers to ask, &ldquo;Are you the one who is to come, or shall we look for another?&rdquo; (Matthew 11:3). This is the very prophet who had baptized Jesus, now wracked with uncertainty in the darkness of a cell. Jesus did not denounce him; he sent back evidence &mdash; the blind see, the lame walk, the poor have good news preached to them &mdash; and then told the crowds that among those born of women none was greater than John. Doubt did not cancel his greatness; the Lord met it with patience and proof.",
      "Thomas has been saddled for centuries with the name &ldquo;doubting,&rdquo; yet his story is one of grace, not condemnation. When he refused to believe in the resurrection without seeing the wounds for himself, Jesus did not refuse him. He appeared again, specifically for Thomas, and offered his hands and his side: &ldquo;Do not disbelieve, but believe&rdquo; (John 20:27). Thomas responded with the highest confession of the entire Gospel: &ldquo;My Lord and my God!&rdquo; The risen Christ accommodated the doubter, condescending to meet his need for evidence, and drew out of him a faith deeper than he had before. Jesus does not despise honest doubt; he engages it.",
      "There is, however, an important distinction to draw &mdash; between doubt that seeks and doubt that refuses. Honest doubt is on a journey; it wants to find the truth and is willing to follow the evidence and bring its questions to God. This is the doubt of John, of Thomas, of the struggling father. There is another kind of doubt that has already decided, that uses questions not as a search but as a shield, that demands proof while having no intention of believing whatever proof appears. The Pharisees who saw miracle after miracle and still would not believe were not doubting in the honest sense; they were refusing. Faith addresses its questions to God; settled unbelief uses questions to keep God at a distance.",
      "Far from destroying faith, honest doubt often deepens it. A faith never questioned tends to be a faith never owned &mdash; inherited, assumed, fragile. When doubt drives a believer to search the Scriptures, to pray more honestly, to think harder, and to lean more desperately on God, it can become the means by which a secondhand faith becomes a firsthand conviction. The believer who has walked through the valley of questioning and come out still trusting holds a faith that has been tested and proven, like gold refined in fire. The dark night is not the end of faith but, for many, the doorway into a deeper and more durable trust.",
      "The pastoral word, then, is one of profound reassurance. If you doubt, you are not thereby lost; you are in the company of John the Baptist and Thomas and the father who cried for help. Bring your doubt to God rather than away from him. Pray the honest prayer, &ldquo;I believe; help my unbelief.&rdquo; Keep coming to the One who did not break the bruised reed or quench the smoldering wick. Faith is not the absence of doubt but the decision, in the presence of doubt, to keep entrusting yourself to Christ &mdash; and the One who began a good work in you is faithful to carry it through, doubts and all, to the end.",
    ],
  },
  {
    id: "The Heroes of Faith",
    heading: "The Heroes of Faith",
    paragraphs: [
      "Hebrews 11 stands as the great roll call of faith, a sweeping procession of men and women across the long history of God&rsquo;s people who lived and died trusting his promises. The chapter opens with the definition &mdash; faith as the assurance of things hoped for, the conviction of things not seen &mdash; and then illustrates it with example after example. By faith Abel offered, by faith Enoch walked, by faith Noah built. The cumulative effect is overwhelming: these were not perfect people, and the chapter does not hide their failures, but they all shared one thing &mdash; they took God at his word and ordered their lives accordingly, often at enormous cost.",
      "Abraham is the towering figure of the chapter, the father of all who believe. &ldquo;By faith Abraham obeyed when he was called to go out to a place that he was to receive as an inheritance. And he went out, not knowing where he was going&rdquo; (Hebrews 11:8). That phrase captures the essence of faith&rsquo;s obedience: he left everything familiar on the strength of a promise, with no map and no guarantee but the word of God. He lived as a stranger in the land that had been promised to him, dwelling in tents, because he was looking ahead to something greater &mdash; &ldquo;the city that has foundations, whose designer and builder is God.&rdquo; His faith was a faith that obeyed before it understood and trusted before it saw.",
      "Moses chose faith over the wealth and security of Egypt. &ldquo;By faith Moses, when he was grown up, refused to be called the son of Pharaoh&rsquo;s daughter, choosing rather to be mistreated with the people of God than to enjoy the fleeting pleasures of sin&rdquo; (Hebrews 11:24-25). He weighed the treasures of the most powerful empire on earth against reproach for the sake of Christ and counted the reproach the greater wealth, &ldquo;for he was looking to the reward.&rdquo; Faith reorders values; it sees the unseen as more solid than the seen, the eternal as weightier than the immediate, and it chooses accordingly even when the choice means suffering.",
      "The chapter rises to a crescendo describing what faith accomplished: those who &ldquo;through faith conquered kingdoms, enforced justice, obtained promises, stopped the mouths of lions, quenched the power of fire, escaped the edge of the sword, were made strong out of weakness&rdquo; (Hebrews 11:33-34). This is the triumphant face of faith &mdash; deliverance, victory, vindication. But then the tone shifts dramatically, for faith does not always lead to triumph in this life, and the chapter refuses to pretend otherwise. It is one of Scripture&rsquo;s most important honesties about what trusting God can cost.",
      "&ldquo;Others were tortured, refusing to accept release, so that they might rise again to a better life. Others suffered mocking and flogging, and even chains and imprisonment. They were stoned, they were sawn in two&hellip;they went about in skins of sheep and goats, destitute, afflicted, mistreated&rdquo; (Hebrews 11:35-37). These too are heroes of faith &mdash; not because they were rescued but because they were not, and trusted God anyway. The text says of all of them, the conquerors and the tortured alike, that &ldquo;all these, though commended through their faith, did not receive what was promised&rdquo; (11:39). Faith that perseveres without receiving its reward in this life is not lesser faith; it may be the greatest faith of all.",
      "What held them was a forward gaze. They &ldquo;acknowledged that they were strangers and exiles on the earth&rdquo; and so made it clear &ldquo;that they are seeking a homeland&hellip;they desire a better country, that is, a heavenly one. Therefore God is not ashamed to be called their God, for he has prepared for them a city&rdquo; (Hebrews 11:13-16). This is the secret of enduring faith: it lives for a country it has not yet entered. The heroes endured because they believed the promise reached beyond the grave, that the God who called them was not ashamed of them, and that the better country was real even though they died still waiting for it. Faith looks past the visible horizon to the city God has prepared.",
      "The point of the whole roll call comes in the next chapter: &ldquo;Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us&rdquo; (Hebrews 12:1). The heroes are not merely admired from a distance; they are a cloud of witnesses surrounding us, a stadium of those who ran before, testifying that the God they trusted can be trusted. Their lives say to every struggling believer: he is faithful; the promise is sure; keep running. And the same chapter immediately turns our eyes from the witnesses to the goal &mdash; looking to Jesus, the founder and perfecter of our faith.",
    ],
  },
  {
    id: "How Faith Grows",
    heading: "How Faith Grows",
    paragraphs: [
      "If faith is trust in God, then it grows the way all trust grows &mdash; through deepening acquaintance with the One who is trusted. Faith is not static; it is a living thing that can be strong or weak, robust or faltering, and Scripture everywhere assumes that it can and should mature. The disciples prayed, &ldquo;Increase our faith!&rdquo; (Luke 17:5), and Paul gave thanks for churches whose faith was &ldquo;growing abundantly.&rdquo; The question of how faith grows is therefore one of the most practical in the Christian life, and the Bible answers it with clarity: faith grows through the means God has appointed for it.",
      "The foundational means is the Word of God. &ldquo;So faith comes from hearing, and hearing through the word of Christ&rdquo; (Romans 10:17). Faith is not generated by introspection or worked up by effort; it is born and nourished by hearing what God has said. This is why the regular intake of Scripture &mdash; reading it, hearing it preached, meditating on it, memorizing it &mdash; is the indispensable nutrient of a growing faith. Faith rests on the character and promises of God, and it is in Scripture that we come to know that character and lay hold of those promises. A faith starved of the Word will inevitably weaken; a faith fed on the Word will grow strong, because it is constantly being reminded of who God is and what he has pledged to do.",
      "Prayer is the second great means of growth, the exercise that strengthens faith as activity strengthens a muscle. In prayer the believer acts on trust &mdash; bringing needs, fears, and hopes to God and leaving them with him. Every answered prayer becomes a stone of remembrance, evidence of God&rsquo;s faithfulness that fortifies trust for the next trial. And even unanswered prayer, when held in submission to God&rsquo;s wisdom, teaches faith to rest in the goodness of his will rather than the granting of our requests. A prayerless Christian is necessarily a weak Christian, for prayer is the very breathing of the life of faith; to stop praying is to stop exercising the trust that grows by being used.",
      "Faith also grows in community, for it was never meant to be a solitary venture. &ldquo;Let us consider how to stir up one another to love and good works, not neglecting to meet together&hellip;but encouraging one another&rdquo; (Hebrews 10:24-25). The faith of others strengthens our own; their testimonies remind us of God&rsquo;s faithfulness, their encouragement lifts us when we falter, and their example shows us what trust looks like in action. We are part of a body, and a hand cut off from the body withers. In the fellowship of believers, faith is sustained through shared worship, mutual care, the bearing of one another&rsquo;s burdens, and the simple, steadying presence of others who are walking the same road.",
      "Perhaps most surprisingly, faith grows through the testing of trials. &ldquo;Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness&rdquo; (James 1:2-3). Trials are not the enemy of faith but, in God&rsquo;s hand, the forge of it. Just as muscle grows only under resistance, faith deepens only under pressure. When a believer is brought to the end of his own resources and finds God sufficient, his trust is strengthened in a way that ease could never accomplish. The hardest seasons, painful as they are, often turn out to be the seasons of greatest spiritual growth, as faith is driven down to bedrock and discovers that the bedrock holds.",
      "Worship and the sacraments are appointed channels of grace that nourish faith as well. In baptism and the Lord&rsquo;s Supper, God gives visible, tangible signs of his promises &mdash; the gospel made touchable, the broken body and shed blood set before our eyes. In worship, faith is exercised and fed as the believer beholds the glory of God, sings his praises, hears his Word, and remembers his works. These ordinary means &mdash; Word, prayer, fellowship, trial, sacrament, worship &mdash; are not magic, but they are the appointed paths along which the Spirit ordinarily works to build trust. The believer who gives himself diligently to them places himself where faith grows.",
      "Yet behind all these means lies a final, liberating truth: faith is ultimately a gift of God, not a human achievement. &ldquo;For by grace you have been saved through faith. And this is not your own doing; it is the gift of God&rdquo; (Ephesians 2:8). God not only gives faith its beginning; he sustains and perfects it. We are told to keep &ldquo;looking to Jesus, the founder and perfecter of our faith&rdquo; (Hebrews 12:2). He authored it; he will complete it. This means the growth of faith is not finally a burden resting on our shoulders but a work that God himself is committed to finishing. We pursue the means diligently, but we rest in the assurance that the One who began the good work will bring it to completion at the day of Christ Jesus.",
    ],
  },
];

const videoItems = [
  { videoId: "AdElu29GnVA", title: "What Is Biblical Faith" },
  { videoId: "8kK8eDFLb8E", title: "Faith and Works - Paul and James Reconciled" },
  { videoId: "j3xtq8wDhqk", title: "Faith in Times of Doubt" },
];

export default function ChristianFaithGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "0.78rem", color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.6rem" }}>
            Faith &amp; Trust
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Faith
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Faith through a Christian lens &mdash; what biblical faith actually is, the relationship between faith and works, faith in times of doubt, the great heroes of faith in Hebrews 11, and how faith grows through the Word, prayer, community, and trial.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;Now faith is the assurance of things hoped for, the conviction of things not seen.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Hebrews 11:1</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(59, 130, 246, 0.12)` : "transparent",
              color: tab === t ? ACCENT : MUTED,
              cursor: "pointer", fontSize: "0.88rem", fontWeight: tab === t ? 600 : 400,
              transition: "all 0.15s ease", whiteSpace: "nowrap" as const,
            }}>
              {t}
            </button>
          ))}
        </nav>

        {/* Text tab content */}
        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>{currentSection.heading}</h2>
            {currentSection.paragraphs.map((para, i) => (
              <p key={i} style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </section>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((video) => (
                <div key={video.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={video.videoId} title={video.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Faith Looks to Christ</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Faith is not the strength of your believing but the worthiness of the One believed. It is the empty hand that receives grace, the trust that perseveres through doubt, and the gift that God himself sustains. Keep looking to Jesus, the founder and perfecter of our faith &mdash; the One who began the good work in you and will bring it to completion.</p>
        </div>
      </main>
    </div>
  );
}
