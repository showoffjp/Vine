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
  "Sound Doctrine",
  "Worship and Prayer",
  "Church Leadership",
  "Godliness with Contentment",
  "Fight the Good Fight",
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
    id: "Sound Doctrine",
    heading: "Sound Doctrine",
    reference: "1 Timothy 1",
    paragraphs: [
      "First Timothy belongs to a small group of letters known as the &ldquo;pastoral epistles,&rdquo; written not to a whole congregation but to an individual minister charged with the care of a church. Paul writes to Timothy, his young protege and trusted coworker, whom he had left behind in Ephesus to guard the health of the church there. The letter reads like the counsel of a seasoned apostle to a younger pastor, full of practical wisdom about doctrine, worship, leadership, and personal godliness.",
      "The very first task Paul presses upon Timothy is the defense of sound doctrine against false teachers. He had urged Timothy to &ldquo;remain at Ephesus&hellip; that you may charge certain persons not to teach any different doctrine, nor to devote themselves to myths and endless genealogies, which promote speculations rather than the stewardship from God that is by faith&rdquo; (1:3&ndash;4). The errorists at Ephesus were trafficking in religious novelties &mdash; speculative fables and genealogical fancies that puffed up the mind but built nothing.",
      "These would-be teachers had a particular fascination with the law, yet without real understanding. Paul says they desire &ldquo;to be teachers of the law, without understanding either what they are saying or the things about which they make confident assertions&rdquo; (1:7). They had the confidence of experts and the comprehension of novices &mdash; a dangerous combination in those who presume to instruct the people of God. Their teaching produced controversy rather than the love and faith the gospel is meant to nourish.",
      "Against all this hollow speculation Paul sets the true goal of all Christian instruction: &ldquo;The aim of our charge is love that issues from a pure heart and a good conscience and a sincere faith&rdquo; (1:5). Sound doctrine is never an end in itself, nor a playground for clever debate; its purpose is to produce love &mdash; love springing from a heart made pure, a conscience kept clear, and a faith without pretense. Teaching that fails to bear this fruit has missed its very reason for being.",
      "Paul then grounds his concern for sound doctrine in his own astonishing testimony. He recalls that he was once &ldquo;a blasphemer, persecutor, and insolent opponent,&rdquo; yet received mercy, and he sets down a saying he calls trustworthy and deserving of full acceptance: &ldquo;Christ Jesus came into the world to save sinners, of whom I am the foremost&rdquo; (1:15). The apostle does not place himself above his readers as a model of attainment but beneath them as the chief of sinners, a living display of the patience of Christ.",
      "Indeed, Paul understands his own conversion as a pattern of grace for all who would believe: he received mercy &ldquo;as an example to those who were to believe in him for eternal life&rdquo; (1:16). The man who had violently opposed the church became the foremost recipient of its message of mercy, so that no sinner might ever despair of grace. Sound doctrine, for Paul, is never merely correct ideas; it is the gospel of a mercy he had tasted to the depths.",
      "Overwhelmed by this grace, Paul breaks into praise, and the chapter rises into one of Scripture&rsquo;s great doxologies: &ldquo;To the King of ages, immortal, invisible, the only God, be honor and glory forever and ever. Amen&rdquo; (1:17). Right doctrine, rightly held, does not end in argument but in adoration. The defense of the truth and the worship of the God of truth belong together, and the charge to guard sound teaching is finally a charge to guard the glory of the eternal King.",
    ],
  },
  {
    id: "Worship and Prayer",
    heading: "Worship and Prayer",
    reference: "1 Timothy 2",
    paragraphs: [
      "Having charged Timothy to guard sound doctrine, Paul turns in the second chapter to the ordering of the church&rsquo;s worship, and he begins with prayer. &ldquo;First of all, then, I urge that supplications, prayers, intercessions, and thanksgivings be made for all people&rdquo; (2:1). Prayer is to hold the first and central place in the gathered life of the church, and its scope is to be as wide as the world &mdash; offered not for believers only but for all people.",
      "Paul gives this universal prayer a particular focus: it is to be made &ldquo;for kings and all who are in high positions, that we may lead a peaceful and quiet life, godly and dignified in every way&rdquo; (2:2). The church is to intercede even for the governing authorities of a pagan empire, asking God for the kind of social peace in which the gospel can spread and a quiet, godly life can flourish. The praying church seeks the good of the very society around it.",
      "The deep motive behind this worldwide intercession is the heart of God himself: such prayer &ldquo;is good, and it is pleasing in the sight of God our Savior, who desires all people to be saved and to come to the knowledge of the truth&rdquo; (2:3&ndash;4). The church prays for all people because God&rsquo;s saving desire reaches toward all people. The breadth of Christian prayer is shaped by the breadth of the divine compassion.",
      "Paul anchors this saving purpose in one of the great compact statements of the gospel: &ldquo;For there is one God, and there is one mediator between God and men, the man Christ Jesus, who gave himself as a ransom for all&rdquo; (2:5&ndash;6). There is a single God and a single bridge to him &mdash; not a ladder of angelic mediators, not many competing ways, but one Mediator, the man Christ Jesus, who gave his own life as the ransom. This is the truth the church is called to proclaim to all.",
      "From the foundation of prayer Paul moves to the conduct of worship, addressing both men and women. The men are to pray &ldquo;lifting holy hands without anger or quarreling&rdquo; (2:8) &mdash; for worship offered with hands clean of bitterness and strife. True prayer cannot rise from hearts at war with one another; the disposition of the worshiper matters as much as the words on his lips.",
      "Paul then counsels the women to adorn themselves &ldquo;with modesty and self-control,&rdquo; not chiefly with elaborate hairstyles, gold, pearls, or costly attire, but &ldquo;with good works, as is proper for women who profess godliness&rdquo; (2:9&ndash;10). The true ornament of those who worship God is not outward display but a character clothed in good works. Paul calls for a learning posture of quietness and submission, instructions that have been much discussed, yet which arise from his concern for order and reverence in the worshiping assembly.",
      "Throughout the chapter Paul&rsquo;s vision of worship is unmistakable. The church gathered is to be marked by wide-hearted prayer that mirrors the saving desire of God, by a clear confession of the one God and one Mediator, and by a conduct &mdash; in men and women alike &mdash; that adorns the gospel with peaceableness, modesty, and good works. Worship rightly ordered is itself a witness to the God who desires all people to be saved.",
    ],
  },
  {
    id: "Church Leadership",
    heading: "Church Leadership",
    reference: "1 Timothy 3",
    paragraphs: [
      "In the third chapter Paul takes up the qualifications for those who would lead the church, and what is striking is where his emphasis falls. He is far more concerned with character than with charisma, with who a leader is than with how impressive his gifts may appear. The aspiration to lead is itself commendable &mdash; &ldquo;if anyone aspires to the office of overseer, he desires a noble task&rdquo; (3:1) &mdash; but the office must be filled by those whose lives commend the gospel.",
      "The overseer, or elder, &ldquo;must be above reproach, the husband of one wife, sober-minded, self-controlled, respectable, hospitable, able to teach, not a drunkard, not violent but gentle, not quarrelsome, not a lover of money&rdquo; (3:2&ndash;3). Almost every item on this list concerns moral and relational character; only one &mdash; &ldquo;able to teach&rdquo; &mdash; touches skill. The leader is to be a person whose self-control, gentleness, and integrity are evident to all, so that his life backs up his words.",
      "Paul gives particular attention to the leader&rsquo;s home, for the household is a proving ground for ministry. The overseer &ldquo;must manage his own household well, with all dignity keeping his children submissive&rdquo; (3:4), and Paul adds a pointed reason: &ldquo;for if someone does not know how to manage his own household, how will he care for God&rsquo;s church?&rdquo; (3:5). The care of a family in love and order is a kind of apprenticeship for the care of the family of God.",
      "He also warns against elevating recent converts: an overseer must not be &ldquo;a recent convert, or he may become puffed up with conceit and fall into the condemnation of the devil&rdquo; (3:6). And he must have a good reputation even with outsiders, lest he fall into disgrace and the snare of the devil. Maturity, humility, and a credible witness before the watching world are essential to those who would shepherd Christ&rsquo;s flock.",
      "Paul then sets out the qualifications for deacons, those who serve the practical needs of the church. They likewise are to be &ldquo;dignified, not double-tongued, not addicted to much wine, not greedy for dishonest gain&rdquo;, and above all they must be &ldquo;holding the mystery of the faith with a clear conscience&rdquo; (3:8&ndash;9). They too are to be tested first and then to serve if they prove blameless, for those who serve well &ldquo;gain a good standing for themselves and also great confidence in the faith&rdquo; (3:13).",
      "Once more the accent throughout falls on tested character rather than natural talent. Both overseers and deacons are to be people of proven integrity, self-mastery, sound reputation, and clear conscience. The church is not to be led by the gifted and ungodly, but by the humble and faithful, whose ordinary virtues &mdash; honesty, hospitality, gentleness, freedom from the love of money &mdash; make them trustworthy stewards of the people of God.",
      "Paul grounds all these instructions in a lofty vision of what the church actually is. He writes so that Timothy may know &ldquo;how one ought to behave in the household of God, which is the church of the living God, a pillar and buttress of the truth&rdquo; (3:15). The church is no mere human institution but the household of the living God, charged with upholding and displaying the truth before the world &mdash; which is precisely why the character of its leaders matters so much.",
    ],
  },
  {
    id: "Godliness with Contentment",
    heading: "Godliness with Contentment",
    reference: "1 Timothy 4 and 6",
    paragraphs: [
      "Among the recurring themes of the letter is godliness &mdash; a deep, practical reverence for God that shapes the whole of life. Over against the false teachers who promoted bodily asceticism and abstinence as a path to holiness, Paul sets the genuine pursuit of godliness, urging Timothy: &ldquo;train yourself for godliness&rdquo; (4:7). The word evokes the discipline of an athlete; godliness does not come by drifting but by purposeful, sustained spiritual exercise.",
      "Paul weighs bodily training against spiritual training and finds the latter incomparably greater: &ldquo;for while bodily training is of some value, godliness is of value in every way, as it holds promise for the present life and also for the life to come&rdquo; (4:8). Physical discipline has its limited benefit, but godliness profits in every direction and stretches into eternity. To invest oneself in growing reverence and obedience toward God is the most far-reaching of all pursuits.",
      "Yet Paul knows that one of the gravest threats to godliness is the love of money, and he confronts it directly in the sixth chapter. He exposes false teachers who imagine &ldquo;that godliness is a means of gain&rdquo; &mdash; who treat religion as a path to profit. Paul agrees that there is great gain in godliness, but redefines it entirely: &ldquo;godliness with contentment is great gain&rdquo; (6:6). The true profit of godliness is not riches but a heart at rest in God.",
      "He reinforces this with a sober reflection on the brevity and emptiness of material wealth: &ldquo;for we brought nothing into the world, and we cannot take anything out of the world&rdquo; (6:7). We arrive with empty hands and depart the same way; the accumulation that consumes so many is finally something we must leave behind. Having food and clothing, Paul says, let us be content with these &mdash; for contentment, not abundance, is the secret of a rich life.",
      "Then comes one of the most famous and often misquoted lines in Scripture: &ldquo;For the love of money is a root of all kinds of evils. It is through this craving that some have wandered away from the faith and pierced themselves with many pangs&rdquo; (6:10). It is not money itself but the love of it that corrupts &mdash; the craving that lures people away from God and impales them on countless sorrows. The pursuit of riches has shipwrecked many a soul.",
      "Paul does not, however, simply condemn the wealthy; he gives them a charge. The rich are commanded &ldquo;not to be haughty, nor to set their hopes on the uncertainty of riches, but on God&rdquo;, and instead &ldquo;to do good, to be rich in good works, to be generous and ready to share&rdquo; (6:17&ndash;18). Wealth held loosely and given freely becomes a means of laying up &ldquo;a good foundation for the future,&rdquo; so that one may &ldquo;take hold of that which is truly life.&rdquo;",
      "The whole teaching presses toward a single, liberating truth: real gain is not found in what we accumulate but in who God is to us. Godliness joined to contentment frees the heart from the tyranny of having more and anchors it in the unfailing God. The contented believer, rich or poor, possesses what no wealth can buy and no loss can take away, and so discovers what Paul calls that which is truly life.",
    ],
  },
  {
    id: "Fight the Good Fight",
    heading: "Fight the Good Fight",
    reference: "1 Timothy 4 and 6",
    paragraphs: [
      "As the letter draws toward its close, Paul charges Timothy with the language of a soldier and a steward: &ldquo;Fight the good fight of faith. Take hold of the eternal life to which you were called&rdquo; (6:12). The Christian life, and the pastoral life in particular, is no leisurely stroll but a contest to be waged with resolve. Timothy is to throw himself into the struggle for the faith and to lay hold of the eternal life that is its prize.",
      "Paul also frames Timothy&rsquo;s ministry as a sacred trust to be protected. &ldquo;O Timothy, guard the deposit entrusted to you. Avoid the irreverent babble and contradictions of what is falsely called knowledge&rdquo; (6:20). The gospel is a precious deposit handed down to be kept intact and passed on unspoiled. Timothy is its guardian, charged to defend it against the empty speculations that had so captivated the false teachers, and to hand it on undiminished.",
      "The good minister, Paul says, is one who is himself nourished by the truth he teaches: &ldquo;If you put these things before the brothers, you will be a good servant of Christ Jesus, being trained in the words of the faith and of the good doctrine that you have followed&rdquo; (4:6). The pastor cannot feed others on bread he has not himself eaten; he must be continually nourished on the words of faith if his ministry is to have life and substance.",
      "Because Timothy was young, Paul knew he might be despised or dismissed, and so he gives him a stirring word: &ldquo;Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity&rdquo; (4:12). The answer to the disadvantage of youth is not assertiveness but exemplary holiness. A life that models the gospel in word and deed, in love and purity, silences contempt and earns a hearing that mere age never could.",
      "Paul presses Timothy to a relentless self-watchfulness and devotion to teaching: &ldquo;Keep a close watch on yourself and on the teaching. Persist in this, for by so doing you will save both yourself and your hearers&rdquo; (4:16). The two great fronts of a faithful ministry are personal holiness and doctrinal fidelity &mdash; watching one&rsquo;s own life and watching one&rsquo;s teaching. Neglect either, and the whole work falters; persist in both, and souls are kept.",
      "In place of the love of money and the empty pursuits he has just condemned, Paul calls Timothy &mdash; and every &ldquo;man of God&rdquo; &mdash; to a higher pursuit: &ldquo;flee these things. Pursue righteousness, godliness, faith, love, steadfastness, gentleness&rdquo; (6:11). The Christian life is at once a fleeing and a pursuing: turning away with all haste from what corrupts, and chasing after the cluster of graces that make up the character of Christ. The good fight is finally a fight for godliness of life.",
      "And undergirding the whole summons is the glory of the God Timothy serves, whom Paul exalts in the doxology that crowns the first chapter: &ldquo;To the King of ages, immortal, invisible, the only God, be honor and glory forever and ever. Amen&rdquo; (1:17). The good fight is not waged for personal reputation or reward, but for the honor of the eternal King. To guard the deposit, to set an example, to pursue godliness, and to fight the good fight &mdash; all of it is finally for the glory of the only God.",
    ],
  },
];

const videoItems = [
  { videoId: "7RoqnGcEjcs", title: "BibleProject - 1 Timothy Overview" },
  { videoId: "I6Bkz6Ftj9c", title: "Qualifications for Church Leaders - 1 Timothy 3" },
  { videoId: "0jHvz0jiwpw", title: "Godliness with Contentment - 1 Timothy 6" },
];

export default function ChristianBookOf1TimothyGuidePage() {
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
            The Book of 1 Timothy
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul&rsquo;s pastoral charge to his young protege &mdash; guarding sound doctrine against false teachers, ordering the church&rsquo;s worship and prayer, the qualifications for elders and deacons, godliness with contentment over the love of money, and the call to fight the good fight of faith.
          </p>
        </header>

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
              Deepen your study of 1 Timothy through visual teaching on the structure of the letter, the qualifications for church leaders, and the call to godliness with contentment.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Guard the Good Deposit</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Timothy remains the great handbook for healthy church life &mdash; sound doctrine that issues in love, worship marked by wide-hearted prayer, leaders proven in character, and a godliness joined to contentment that frees the heart from the love of money. Its closing charge still summons every believer: guard the deposit, set an example in word and life, and fight the good fight of faith.
          </p>
        </div>
      </main>
    </div>
  );
}
