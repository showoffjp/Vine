"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Set Your Mind on Things Above",
  "Put Off the Old Self",
  "Put On the New Self",
  "Whatever You Do Do It Heartily",
  "The Peace of Christ Rule",
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
    id: "Set Your Mind on Things Above",
    heading: "Set Your Mind on Things Above",
    reference: "Colossians 3:1&ndash;4",
    paragraphs: [
      "Colossians 3 opens with one of the most theologically charged imperatives in all of Paul&rsquo;s letters: &ldquo;If then you have been raised with Christ, seek the things that are above, where Christ is, seated at the right hand of God&rdquo; (3:1). The word &ldquo;if&rdquo; here is not a condition of doubt but a condition of certainty &mdash; it could rightly be translated &ldquo;since.&rdquo; Paul&rsquo;s call to seek the things above is grounded entirely in an accomplished fact: the believer has already been raised with Christ. Baptism and faith have united the Christian to Christ&rsquo;s resurrection in a real, if not yet fully visible, way.",
      "The logic of Paul&rsquo;s exhortation is deeply rooted in chapters 1 and 2 of Colossians. In those chapters Paul has established that Christ is &ldquo;the firstborn of all creation&rdquo; (1:15), the one in whom &ldquo;the whole fullness of deity dwells bodily&rdquo; (2:9), and the one through whose cross the powers of this age have been publicly disarmed and put to shame (2:15). The Colossian believers have been buried and raised with this Christ in baptism (2:12). The call of chapter 3 is simply to live out what has already been made true.",
      "The command &ldquo;set your minds on things that are above, not on things that are on earth&rdquo; (3:2) does not call believers to despise the material world or to live in an ungrounded mysticism that ignores earthly duties. Paul will spend the rest of chapter 3 addressing household relationships, workplace conduct, and concrete ethical choices. Rather, the command concerns the direction of the heart&rsquo;s deepest allegiance. The mind that is set on earthly things orders all of life around the passing values, pleasures, and securities of this age. The mind set on things above orders all of life around the risen Christ and the kingdom that will one day be fully revealed.",
      "The basis for this reordering is given in verse 3: &ldquo;For you have died, and your life is hidden with Christ in God.&rdquo; The Christian&rsquo;s true life is not now visible on the surface. It is hidden &mdash; secured and preserved in Christ, who is himself in God. The hiddenness of this life is not a deficiency but a protection. The world cannot see it, and therefore the world cannot destroy it. It is stored in a place beyond the reach of every earthly threat.",
      "Verse 4 stretches the horizon forward to the great unveiling: &ldquo;When Christ who is your life appears, you also will appear with him in glory.&rdquo; The word translated &ldquo;appears&rdquo; is the Greek &lsquo;phaneroo,&rsquo; which means to make manifest or bring into the open what was previously hidden. At the return of Christ, the hidden life of every believer will be made public in glory. The very thing that seemed invisible to this age &mdash; the union of the Christian with the risen and exalted Lord &mdash; will be displayed before all creation.",
      "This eschatological hope is the engine of the entire chapter. Paul is not merely asking for better behavior through sheer moral effort. He is asking believers to align their daily affections and choices with the future that is already certain in Christ. When a Christian truly grasps that she has died with Christ, that her real life is hidden with him in God, and that she will one day appear with him in glory, the things of this earth lose their power to enslave. The seeking of things above is not escapism; it is simply living in accordance with what is most ultimately real.",
      "Practically, setting the mind on things above involves a daily, habitual orientation of the inner life toward Christ: prayer, the word of Christ dwelling richly within (3:16), worship that is thankful and Trinitarian, and a constant reckoning that the old self has been put to death in Christ and that the new self is the true self. It is a posture of the will and the imagination, not merely a sentiment. The Christian who learns to set her mind on things above is not made less present to the world but more free within it &mdash; able to engage every earthly reality from the position of one who is already seated, in Christ, at the right hand of God.",
    ],
  },
  {
    id: "Put Off the Old Self",
    heading: "Put Off the Old Self",
    reference: "Colossians 3:5&ndash;11",
    paragraphs: [
      "Having established the theological foundation &mdash; you have been raised with Christ, your life is hidden in God, you will appear with Christ in glory &mdash; Paul now draws out the ethical consequence with uncommon sharpness: &ldquo;Put to death therefore what is earthly in you&rdquo; (3:5). The word &ldquo;therefore&rdquo; is critical. The imperatives of the Christian life do not generate the indicatives of the gospel; rather, the indicatives generate the imperatives. Because you have died with Christ, now kill what belongs to the old age. The logic is: become what you already are.",
      "The list that follows in verses 5 through 8 is sometimes called a &lsquo;vice list,&rsquo; and it falls into two groups. The first group in verse 5 &mdash; sexual immorality, impurity, passion, evil desire, and covetousness &mdash; addresses disordered appetites and the ways they enslave the human heart. Paul&rsquo;s identification of covetousness as idolatry is especially penetrating. The covetous person has placed the created thing where the Creator alone belongs; she has organized her life around the acquisition of what God has not given rather than around gratitude for what God has. In this sense covetousness is not simply a financial sin; it is a theological one, a form of practical atheism.",
      "The second group in verses 8 through 9 &mdash; anger, wrath, malice, slander, and obscene talk &mdash; addresses the eruptions of the disordered heart in the direction of other people. Where the first group concerned the heart&rsquo;s relationship with created goods, this group concerns the heart&rsquo;s relationship with image-bearers of God. The tongue that slanders and the mouth that speaks obscenely are doing violence to those made in God&rsquo;s likeness. Paul will later in the chapter call for speech that is gracious and seasoned with salt; here he demands that the poisonous speech of the old self be put away entirely.",
      "Verse 6 reminds the Colossians why these things must be put to death: &ldquo;On account of these the wrath of God is coming.&rdquo; The vices Paul lists are not merely distasteful or socially damaging; they are the things that draw the judgment of a holy God. Paul is not threatening his readers but sobering them. The &lsquo;put to death&rsquo; language is not a counsel of timidity &mdash; it is the recognition that the old patterns of sin have not merely been inconvenient; they have been genuinely dangerous, drawing on themselves the wrath of the God who will one day make all things right.",
      "Verse 9 introduces the corporate dimension of the old-self/new-self language: &ldquo;Do not lie to one another, seeing that you have put off the old self with its practices.&rdquo; The &lsquo;putting off&rsquo; language here is like the removal of a garment. In the ancient world, the imagery of changing clothes was sometimes used to describe conversion and initiation. The believers at Colossae, in coming to faith and being baptized, had stripped off the old-self identity like a filthy garment. To lie to a fellow believer is to reach back into the pile of discarded clothing and put on what has already been stripped away.",
      "Verse 11 announces the cosmic scope of what has happened in Christ: &ldquo;Here there is not Greek and Jew, circumcision and uncircumcision, barbarian, Scythian, slave, free; but Christ is all, and in all.&rdquo; The old self was defined in part by these social and ethnic identities and the hierarchies they created. In the new humanity constituted by union with Christ, those identities do not cease to exist, but they cease to be the ultimate determiners of status, worth, and belonging. Christ is all, and in all. He is the new center around which the community of the new self is organized, and in him every other marker of identity is relativized. The putting off of the old self is not merely an individual act; it is a participation in a new social reality that is already present in the church and will one day encompass all things.",
      "For the believer today, the command to put to death the deeds of the body is not a call to grim self-improvement but to Spirit-enabled alignment with what Christ has already accomplished. The Reformers called it &lsquo;mortification&rsquo; &mdash; the daily, prayerful, intentional turning away from the pull of the old patterns. It involves honesty about sin, the regular use of the means of grace, accountability within the community of faith, and a confident return to the cross each time one falls. The old self may be dead in Christ, but its patterns and grooves run deep; mortification is the daily work of refusing to walk in those grooves.",
    ],
  },
  {
    id: "Put On the New Self",
    heading: "Put On the New Self",
    reference: "Colossians 3:12&ndash;17",
    paragraphs: [
      "If the putting off of the old self is the negative movement of the Christian life, the putting on of the new self is its glorious positive counterpart. Paul introduces this section with an extraordinary phrase: &ldquo;Put on then, as God&rsquo;s chosen ones, holy and beloved&rdquo; (3:12). These three designations &mdash; chosen, holy, beloved &mdash; were the covenant titles of Israel in the Old Testament. Paul applies them here without qualification to a community of Jew and Gentile together who have been united to Christ. The new community is the continuation and fulfillment of God&rsquo;s purposes for his people, defined now not by ethnic identity but by union with the Messiah.",
      "The virtues Paul then lists are not random: &ldquo;compassionate hearts, kindness, humility, meekness, and patience&rdquo; (3:12). These are, in a remarkable way, the character of Christ himself as portrayed in the Gospels. The one who had compassion on the crowds, who showed kindness to lepers and tax collectors, who said &ldquo;I am gentle and lowly in heart&rdquo; (Matthew 11:29), who was meek and did not break the bruised reed, and who was patient with his slow-learning disciples &mdash; this Christ is the pattern of the new self. To put on these virtues is in some real sense to put on Christ himself.",
      "Verse 13 addresses the relational texture of life in the new community: &ldquo;bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive.&rdquo; The word translated &ldquo;bearing with&rdquo; carries the idea of patient toleration &mdash; of holding on to the relationship even when the other person is frustrating or difficult. The word translated &ldquo;forgiving&rdquo; is the Greek word for &lsquo;grace,&rsquo; used here as a verb: gracing one another, as the Lord has graced you. The standard of Christian forgiveness is not one&rsquo;s own capacity for generosity but the Lord&rsquo;s forgiveness of us. That forgiveness was total, costly, and given to the undeserving; it is the measure of what is now owed to one another.",
      "Verse 14 identifies love as the supreme virtue that gives coherence to all the others: &ldquo;And above all these put on love, which binds everything together in perfect harmony.&rdquo; The image is of a fastening belt or outer garment that holds all the rest in place. Without love, the other virtues can become performance &mdash; impressive in isolation but disconnected, fragile, and ultimately self-serving. Love is what gives the whole outfit its integrity. This is consistent with Paul&rsquo;s famous teaching in 1 Corinthians 13, where even the greatest gifts and most dramatic acts of service are worth nothing without love.",
      "The practical life of the new community is described in verses 15 through 17 in terms of three richly interrelated realities. First, the peace of Christ is to rule in the hearts of the believers as they were called into one body (3:15) &mdash; an image explored more fully in the next tab. Second, they are to let the word of Christ dwell in them richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs with thankfulness in their hearts to God (3:16). The word of Christ is not merely to be heard occasionally; it is to dwell &mdash; to make its home &mdash; in the corporate life of the community, overflowing into teaching, mutual correction, and worship.",
      "Third, verse 17 provides the overarching framework for the entire life of the new self: &ldquo;And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.&rdquo; This is one of the most comprehensive ethical summaries in all of Scripture. Every action, every word, every relationship, every task of ordinary life is to be performed as a representative of and in reliance upon the Lord Jesus. There is no sphere of life that is exempt from this mandate, and no sphere that is too small or mundane to be sanctified by it.",
      "The new self Paul describes here is not a utopian ideal to be achieved by spiritual athletes. It is the community life of ordinary people who have been chosen, made holy, and beloved in Christ, and who are learning, often slowly and imperfectly, to wear the clothing that has been given to them. The church at its best is a school for the new self &mdash; a place where compassion, kindness, humility, forgiveness, and love are not merely admired but practiced, failed at, repented of, and tried again, sustained by the word of Christ and the thankfulness that flows from knowing how much has been forgiven.",
    ],
  },
  {
    id: "Whatever You Do Do It Heartily",
    heading: "Whatever You Do, Do It Heartily",
    reference: "Colossians 3:23&ndash;25",
    paragraphs: [
      "One of the most practically transformative sentences in all of Paul&rsquo;s letters comes in Colossians 3:23: &ldquo;Whatever you do, work heartily, as for the Lord and not for men.&rdquo; This verse arrives in the middle of what scholars call the &lsquo;household code&rsquo; &mdash; Paul&rsquo;s instructions to wives and husbands, children and fathers, slaves and masters. The specific addressees in verse 22 are bondservants, but the principle Paul articulates transcends that context to touch every sphere of work in every era.",
      "The word translated &ldquo;heartily&rdquo; in the Greek is literally &ldquo;from the soul&rdquo; (ek psyches). It suggests not merely diligent outward effort but the kind of work that flows from the whole person &mdash; engaged, present, and invested. The contrast Paul sets up is telling: &ldquo;not for men&rdquo; (or, in some translations, &ldquo;not for human masters&rdquo;). The temptation in any working relationship is to calibrate one&rsquo;s effort to the visibility or power of the human supervisor. One works hard when the boss is watching and coasts when unobserved; one gives maximum effort to tasks that will be recognized and minimum effort to those that will not.",
      "Paul dismantles this calculus entirely. The real audience for every act of work is the Lord Jesus. Whether the task is visible or invisible, glamorous or menial, well-compensated or poorly compensated, performed before an appreciative audience or in complete obscurity &mdash; the audience that counts is always the same. This is not a counsel of indifference to human relationships in the workplace; Paul elsewhere instructs both employers and employees to act justly and to treat one another with dignity. It is rather the elevation of every work relationship to the level of an act of worship.",
      "The theological basis for this posture is given in verse 24: &ldquo;knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ.&rdquo; Two things are said here. First, the ultimate compensation for faithful work is not a human paycheck or performance review but an inheritance from the Lord. This language of inheritance is rich in Pauline theology: it points to the fullness of the new creation, the resurrection life, the sharing in the glory of God. The believer who works faithfully in the most overlooked corner of human society is storing up a reward that no earthly accounting system can measure.",
      "Second, and most strikingly, Paul identifies the slave who is working for a human master as in fact serving the Lord Christ. The bondservant pouring wine at a Roman dinner table, performing the work in the name of the Lord Jesus and from the soul, is at that moment rendering service to the risen and exalted King. This is a radical transformation of the meaning of ordinary work. No labor done in faith for the Lord is beneath the dignity of the one doing it, because no labor done in faith is ultimately rendered to a merely human master.",
      "Verse 25 adds the note of divine impartiality: &ldquo;For the wrongdoer will be paid back for the wrong he has done, and there is no partiality.&rdquo; This cuts both ways in context. Workers who cheat or give dishonest service cannot escape ultimate accountability by hiding behind the invisibility of their position. Masters or employers who abuse their power cannot escape accountability by virtue of their social standing. God sees all, rewards all faithfulness, and will right all wrongs. The playing field of divine judgment is perfectly level.",
      "For the Christian in any workplace today, Colossians 3:23 is a daily invitation to find sacred meaning in the ordinary. The teacher who prepares her lesson with care for a class of unruly teenagers, the technician who performs a routine maintenance task with precision, the parent who changes a diaper in the middle of the night &mdash; all of these, done heartily, as for the Lord, are acts of Christlike service. The risen Christ who descended to wash his disciples&rsquo; feet has sanctified humble service as the shape of kingdom greatness. To work heartily as for the Lord is not an escape from the mundane; it is the transfiguration of the mundane into worship.",
    ],
  },
  {
    id: "The Peace of Christ Rule",
    heading: "The Peace of Christ Rule",
    reference: "Colossians 3:15&ndash;16",
    paragraphs: [
      "Verse 15 of Colossians 3 contains one of the most memorable metaphors in the New Testament for the interior life of the Christian community: &ldquo;And let the peace of Christ rule in your hearts, to which indeed you were called in one body. And be thankful.&rdquo; The word translated &ldquo;rule&rdquo; is the Greek &lsquo;brabeuo,&rsquo; which means to serve as an umpire or arbiter &mdash; to function as the deciding authority that calls the play. In the ancient world it was used of the official who presided over athletic contests and made binding judgments. Paul&rsquo;s image is of the peace of Christ functioning as the internal umpire of the community&rsquo;s corporate heart.",
      "What is &ldquo;the peace of Christ&rdquo;? It is first the peace that Christ himself is and makes. Paul has already said in Colossians 1:20 that through Christ God was pleased &ldquo;to reconcile to himself all things, whether on earth or in heaven, making peace by the blood of his cross.&rdquo; The peace of Christ is not the peace that the world gives (John 14:27) &mdash; the temporary cessation of hostility, the comfortable management of competing interests. It is the peace of those who have been reconciled to God through the blood of his Son, who have been brought near (Ephesians 2:13), whose enmity with God has been abolished at the cross.",
      "This peace is to function as the arbiter of the community&rsquo;s decisions and conflicts. When questions arise about whether a proposed course of action is right, when relationships come under strain and the temptation is toward faction or bitterness, when individual preferences collide with the needs of the whole &mdash; the question to be asked is whether the peace of Christ is ruling. Is the proposed path one that maintains and deepens the reconciliation that Christ has achieved? Does it build the one body or divide it? Does it tend toward the harmony that flows from the cross or does it import the world&rsquo;s hierarchies and competitions back into the community of the new self?",
      "The phrase &ldquo;to which indeed you were called in one body&rdquo; is significant. The calling to the peace of Christ is not an individual calling but a corporate one. The &lsquo;you&rsquo; throughout this section of Colossians is plural; Paul is addressing a community, not a collection of individuals. The peace of Christ rules in the heart &mdash; but &ldquo;heart&rdquo; here (kardia) can refer to the communal heart of the gathered assembly, not merely to the private interior life of each believer. The one body is called to embody the peace of Christ as a visible social reality, a testimony to the watching world that the hostilities of the old age have been overcome.",
      "The command &ldquo;be thankful&rdquo; at the end of verse 15 might seem like a brief appendix, but in Paul&rsquo;s thought thankfulness is among the deepest indicators of spiritual health. Ingratitude was at the root of the idolatry Paul describes in Romans 1:21 &mdash; knowing God but neither glorifying him as God nor giving him thanks. The community that is learning to let the peace of Christ rule is a community that is increasingly aware of how much it has been given: reconciliation with God, union with Christ, membership in one body, the inheritance of glory. From that awareness wells up thanksgiving that permeates worship, work, and relationship.",
      "Verse 16 extends the theme: &ldquo;Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.&rdquo; The word of Christ is not something to be visited occasionally, like a resource one consults in times of crisis. It is to dwell &mdash; to make its permanent home, to inhabit the community richly. The Greek word for &ldquo;richly&rdquo; suggests abundance, overflow, lavishness. The community is to be soaked in the word of Christ.",
      "The outflow of this rich indwelling is both instructional and doxological: teaching and admonishing one another in wisdom, and singing together. The singing Paul envisions is not merely a warm-up for the &lsquo;real&rsquo; part of worship; it is itself a form of mutual instruction, a way of inscribing the word of Christ in the community&rsquo;s memory and affection. The psalms, hymns, and spiritual songs of the gathered people are the word of Christ set to music, and the thankfulness that animates them is the peace of Christ finding its natural expression. Worship, for Paul, is not a separate compartment of church life; it is the overflow of a community that is saturated with the word of Christ and governed by the peace he has made.",
      "For Christians in every era, the call to let the peace of Christ rule and the word of Christ dwell is a call to a particular quality of communal life: unhurried enough to be saturated by the word, humble enough to teach and receive admonition, grateful enough to sing with genuine joy, and peaceable enough to submit the community&rsquo;s conflicts and decisions to the arbitration of the cross. This is not a description of the church at its most spectacular. It is a description of the church at its most faithfully ordinary, and in that ordinary faithfulness, deeply beautiful.",
    ],
  },
];

const videoItems = [
  { videoId: "pXTF98HdCVQ", title: "BibleProject - Overview of Colossians" },
  { videoId: "ouSaFnb4dso", title: "Colossians 3 - The Risen Life in Christ Explained" },
  { videoId: "mHDH87o0kes", title: "Put On the New Self - Colossians 3 Bible Study" },
  { videoId: "kRL54mPMJ4o", title: "Whatever You Do Do It Heartily - Colossians 3:23" },
];

export default function Colossians3GuidePage() {
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
            Colossians 3: The Risen Life
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Since you have been raised with Christ, seek the things that are above &mdash; putting off the old self and putting on the new, letting the peace of Christ rule, and doing all things heartily as for the Lord.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
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
          </section>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Colossians 3 through visual teaching on the risen life in Christ, putting on the new self, the peace of Christ ruling, and working heartily as for the Lord.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Christ Is All and in All</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Colossians 3 calls the risen believer to a life reorganized around the exalted Christ &mdash; putting off every trace of the old self, putting on the character of the new creation, letting Christ&rsquo;s peace govern every conflict, saturating in his word, and performing every ordinary task as an act of worship rendered to the Lord himself.
          </p>
        </div>
      </main>
    </div>
  );
}
