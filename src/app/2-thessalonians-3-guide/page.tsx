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

type Tab = "overview" | "themes" | "versebyverse" | "application";

export default function Thessalonians3GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "kKv6KFXKJ3o", title: "2 Thessalonians 3 - Idleness and Work Ethic" },
    { videoId: "4T4YK9Zp7gY", title: "If Anyone Will Not Work Let Him Not Eat - Expository Preaching" },
    { videoId: "Hm8AS1Tgre8", title: "Church Discipline and Restoration - 2 Thessalonians 3" },
    { videoId: "BVZr3jJmJVs", title: "Do Not Grow Weary in Doing Good - Perseverance and Calling" },
  ];

  const TABS: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Key Themes" },
    { id: "versebyverse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #0d0d1a 0%, #12121F 60%, #07070F 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GREEN}18`, border: `1px solid ${GREEN}40`, borderRadius: 8, padding: "4px 14px", marginBottom: 18 }}>
            <span style={{ color: GREEN, fontSize: 13, fontWeight: 700, letterSpacing: "0.06em" }}>2 THESSALONIANS 3</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 18, letterSpacing: "-0.02em" }}>
            Work, Idleness, and the&nbsp;
            <span style={{ color: GREEN }}>Faithfulness of God</span>
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.75, maxWidth: 640, margin: "0 auto 28px" }}
            dangerouslySetInnerHTML={{ __html: "The practical conclusion of Paul&rsquo;s second letter to Thessalonica &mdash; a charge about prayer, the Lord&rsquo;s faithfulness, the theology of work as calling, and the church&rsquo;s responsibility to the idle and disorderly." }}
          />
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ background: `${CARD}`, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "10px 20px", textAlign: "center" }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: 20 }}>18</div>
              <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Verses</div>
            </div>
            <div style={{ background: `${CARD}`, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "10px 20px", textAlign: "center" }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 20 }}>c. 52 AD</div>
              <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Written</div>
            </div>
            <div style={{ background: `${CARD}`, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "10px 20px", textAlign: "center" }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 20 }}>Paul</div>
              <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Author</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "16px 24px",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${GREEN}` : "2px solid transparent",
                color: activeTab === tab.id ? GREEN : MUTED,
                fontWeight: activeTab === tab.id ? 700 : 500,
                fontSize: 14,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            {/* Context card */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 32, marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 16, margin: "0 0 16px" }}>Setting and Context</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Second Thessalonians was written by Paul from Corinth, likely within months of his first letter. The Thessalonian church was young, largely Gentile, and suffering under persecution. One of Paul&rsquo;s most pressing pastoral concerns throughout both letters is the problem of eschatological excitement gone wrong: some members of the congregation had apparently concluded that because the Day of the Lord was imminent (or perhaps had already arrived), there was no point continuing to work. Why labor if the end is near?" }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Chapter 3 is the practical, pastoral conclusion to the letter. After addressing the theology of the Day of the Lord in chapters 1 and 2, Paul turns to the ground-level reality of church life: prayer for gospel workers, the steadfastness of the Lord against evil, and the specific problem of those who are &ldquo;walking in idleness&rdquo; &mdash; the ataktoi, the disorderly or out-of-step ones. His response is neither dismissive nor harsh: it combines an apostolic command, a personal example, a firm instruction, and a remarkable pastoral qualifier." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The famous verse &ldquo;if anyone is not willing to work, let him not eat&rdquo; (v.10) has been quoted across centuries of church history, social philosophy, and political theory. But it is important to read it in context: Paul is not making a statement about welfare policy or the deserving poor. He is addressing a specific, identifiable group within the church who were using eschatological enthusiasm as a pretext for depending on the generosity of others while refusing to contribute themselves. The chapter closes with a prayer for peace and a grace benediction." }}
              />
            </div>

            {/* Two column: Author intent + Historical backdrop */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 16, marginBottom: 12, margin: "0 0 12px" }}>Paul&rsquo;s Pastoral Purpose</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s concern in chapter 3 is threefold: (1) to enlist the church in prayer for the gospel mission, (2) to comfort them with confidence in the Lord&rsquo;s faithfulness against the schemes of evil, and (3) to correct the specific problem of idleness with apostolic authority while maintaining a tone of brotherly love. He does not write as a stern magistrate but as a father who is simultaneously firm and affectionate. The repetition of the word &ldquo;brothers&rdquo; (vv. 1, 6, 13) throughout the chapter is deliberate: even the most pointed corrections remain within the frame of family." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 16, marginBottom: 12, margin: "0 0 12px" }}>The Ataktoi: Who Were They?</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "The Greek word ataktos (and its cognates ataktos, atakteo) appears three times in this chapter. Its basic meaning is &ldquo;out of rank&rdquo; or &ldquo;out of step&rdquo; &mdash; military language for a soldier who has broken formation. It implies not merely laziness but a disruptive, counter-productive pattern of behavior. These were likely people who had stopped working, were living off the patronage of wealthier believers, and were instead spending their time as &ldquo;busybodies&rdquo; (v.11, periergazomai &mdash; working around others rather than at their own task). Their idleness was creating social disruption and was likely tied to a mistaken eschatology." }}
                />
              </div>
            </div>

            {/* Central verse */}
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}35`, borderRadius: 14, padding: 28, marginBottom: 28, textAlign: "center" }}>
              <p style={{ color: MUTED, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 12, margin: "0 0 12px" }}>KEY VERSE &mdash; 2 THESSALONIANS 3:13</p>
              <p style={{ color: TEXT, fontSize: 20, lineHeight: 1.6, fontStyle: "italic", margin: "0 0 10px" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;As for you, brothers, do not grow weary in doing good.&rdquo;" }}
              />
              <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>ESV</p>
            </div>

            {/* Structure overview */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 20, margin: "0 0 20px" }}>Structure of the Chapter</h2>
              {[
                { ref: "vv. 1-5", title: "Prayer Request and Confidence in God", color: TEAL, desc: "Paul asks for prayer for the spread of the gospel and for deliverance from unreasonable men. He pivots immediately to the Lord&rsquo;s faithfulness: the same God who is to be prayed to is the one who will establish and guard his people. The section closes with an apostolic blessing directed at the Thessalonians&rsquo; hearts." },
                { ref: "vv. 6-10", title: "The Command Concerning the Idle", color: GOLD, desc: "Using the full authority of apostolic command &mdash; &ldquo;in the name of the Lord Jesus Christ&rdquo; &mdash; Paul charges the church to withdraw from brothers walking in idleness. He grounds this in his own example: when he was among them, he worked night and day, not because he had no right to support, but to give them a model to imitate. The rule is stark: if anyone is not willing to work, neither let him eat." },
                { ref: "vv. 11-13", title: "Specific Address and Encouragement", color: PURPLE, desc: "Paul acknowledges specific reports of idlers who are &ldquo;busybodies.&rdquo; His command to them is quiet work and earned bread. His encouragement to the faithful is the counter-charge that anchors the chapter: do not grow weary in doing good. Tiredness in service is real; Paul acknowledges it directly and commands perseverance." },
                { ref: "vv. 14-18", title: "Discipline, Benediction, and Signature", color: GREEN, desc: "If someone does not obey the letter&rsquo;s instruction, note that person and withdraw &mdash; not as an enemy but as a brother who needs correction. The chapter closes with Paul&rsquo;s signature as authentication, a peace blessing, and the grace benediction." },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < 3 ? 20 : 0, alignItems: "flex-start" }}>
                  <div style={{ background: `${s.color}18`, border: `1px solid ${s.color}40`, borderRadius: 8, padding: "6px 12px", whiteSpace: "nowrap", flexShrink: 0 }}>
                    <span style={{ color: s.color, fontWeight: 700, fontSize: 13 }}>{s.ref}</span>
                  </div>
                  <div>
                    <h4 style={{ color: s.color, fontWeight: 700, fontSize: 15, marginBottom: 6, margin: "0 0 6px" }}>{s.title}</h4>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: s.desc }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Theological significance */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 16, margin: "0 0 16px" }}>Theological Significance</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Second Thessalonians 3 occupies a unique position in the Pauline corpus as the most extended apostolic treatment of the theology of work. While Colossians 3:23 and Ephesians 6:7 address the attitude of workers, this chapter addresses the structure of work itself as a creational and communal obligation. The link between eschatology and ethics is explicit: it is precisely because the Day of the Lord has not yet come that believers must continue to work faithfully in the present age." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The section on church discipline (vv. 14-15) is also theologically significant. Paul&rsquo;s distinction between treating the offender &ldquo;not as an enemy but as a brother&rdquo; establishes a crucial principle: church discipline is restorative, not punitive. Its goal is not to punish or exclude but to bring the erring member to shame that leads to repentance (v.14: &ldquo;that he may be ashamed&rdquo;). This is continuous with Matthew 18 and 1 Corinthians 5 while adding the distinctive note that the relationship of brotherhood must frame even the most severe correction." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The prayer for peace that closes the chapter (v.16) is not decorative. Peace &mdash; shalom, the comprehensive well-being of people rightly related to God and to each other &mdash; is the goal toward which all the preceding corrections point. Paul wants a community at peace: at peace with God through the gospel, at peace with each other through honest correction, and at peace in the ordinary rhythms of work and contribution. The &ldquo;Lord of peace&rdquo; is the one who supplies what human effort cannot produce." }}
              />
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Six major theological themes run through 2 Thessalonians 3, each deserving careful attention in its own right and in relation to the others." }}
            />
            {[
              {
                color: TEAL,
                title: "Prayer for Gospel Workers",
                ref: "vv. 1-2",
                body: "Paul&rsquo;s request for prayer is strikingly specific: he does not ask for personal comfort or safety as primary concerns but for the rapid spread of the word of the Lord and for deliverance from &ldquo;wicked and evil men.&rdquo; The phrase &ldquo;the word of the Lord may speed ahead and be honored&rdquo; (v.1, ESV) reflects the same urgency that runs through all of Paul&rsquo;s letters: the gospel mission is the central concern of his life, and he enlists his churches as partners in it through prayer. This is not a passive request &mdash; it is a mobilization of the whole congregation as participants in the apostolic mission. It also models the kind of intercessory prayer that undergirds all gospel work: not prayers for circumstances to be comfortable but for the word to advance whatever the circumstances.",
              },
              {
                color: GREEN,
                title: "The Faithfulness of the Lord",
                ref: "vv. 3-5",
                body: "One of the most comforting passages in Paul&rsquo;s letters, these verses pivot from prayer request to assurance: &ldquo;the Lord is faithful. He will establish you and guard you against the evil one&rdquo; (v.3). The contrast between &ldquo;not all have faith&rdquo; (v.2) and &ldquo;the Lord is faithful&rdquo; (v.3) is deliberate and pointed. Human faithlessness is real &mdash; even among those near the apostle. But God&rsquo;s faithfulness is not contingent on human faithfulness. His ability to establish his people and guard them is independent of their track record. This is not license for carelessness; it is the ground of confidence for those who are struggling and persecuted. The promise is double: establishment (a firm, grounded identity in Christ) and guard (active protection against the evil one&rsquo;s ongoing assaults).",
              },
              {
                color: GOLD,
                title: "The Theology of Work",
                ref: "vv. 6-12",
                body: "Paul&rsquo;s engagement with work in this chapter is the most theologically rich in the New Testament. Several key affirmations emerge: (1) Work is a creation ordinance that does not disappear with the arrival of the new age. Even within an eschatological framework, work remains obligatory. (2) Paul&rsquo;s own example of working &ldquo;with toil and labor, night and day&rdquo; was not merely pragmatic but deliberately exemplary &mdash; he was &ldquo;giving you in ourselves an example to imitate&rdquo; (v.9). (3) The link between work and sustenance (v.10) is not moralistic but structural: work is how human beings participate in the sustaining of the community. (4) The person who refuses to work without cause has abandoned their role in the creational order. None of this is a blanket condemnation of those who cannot work; the context is those who &ldquo;will not&rdquo; work, not those who are unable.",
              },
              {
                color: PURPLE,
                title: "Do Not Grow Weary in Doing Good",
                ref: "v. 13",
                body: "This brief verse is easily overlooked in the midst of the discussion of idleness, but it carries an enormous pastoral load. The implication is clear: those who have been doing good, working faithfully, and supporting others are at risk of fatigue. The repeated burden of carrying those who refuse to contribute, while continuing to do their own work, is wearying. Paul does not deny this. He names it and commands perseverance directly. The Greek (me enkakesete) is strong: do not give in to evil in the matter of doing good, do not let the tiredness win. This verse is the positive counterpart to the negative instruction about the idle: while the idle must work, those who are working must not stop.",
              },
              {
                color: TEAL,
                title: "Church Discipline as Restoration",
                ref: "vv. 14-15",
                body: "The discipline Paul prescribes is carefully calibrated. The action is &ldquo;take note of that person, and have nothing to do with him&rdquo; (v.14) &mdash; a form of social separation within the community, not formal excommunication. The goal stated is that he may &ldquo;be ashamed&rdquo; (v.14) &mdash; not humiliated but brought to the shame that is the beginning of repentance. The crucial qualifier: &ldquo;Do not regard him as an enemy, but warn him as a brother&rdquo; (v.15). This is disciplinary love: it refuses to pretend the problem does not exist (which would be sentimental), but it also refuses to write off the person (which would be punitive). The warning must be brotherly in spirit, not adversarial.",
              },
              {
                color: GREEN,
                title: "Peace as the Goal of Community Life",
                ref: "vv. 16-18",
                body: "The prayer for peace that concludes the chapter is not a pious sign-off. It is the telos &mdash; the goal &mdash; of everything Paul has been working toward in the letter. Peace in the biblical tradition is shalom: comprehensive flourishing, right relationship with God and with each other, the absence of destructive conflict and the presence of genuine well-being. Paul prays that the &ldquo;Lord of peace himself&rdquo; would give this peace &ldquo;at all times in every way&rdquo; (v.16). The comprehensiveness is deliberate: not peace in some moments or some areas but at all times and in every dimension of community life. This is what the corrective work of the chapter is ultimately aimed at producing.",
              },
            ].map((theme, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${theme.color}30`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ background: `${theme.color}18`, border: `1px solid ${theme.color}50`, borderRadius: 8, padding: "4px 12px" }}>
                    <span style={{ color: theme.color, fontWeight: 700, fontSize: 12 }}>{theme.ref}</span>
                  </div>
                  <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 18, margin: 0 }}>{theme.title}</h3>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "versebyverse" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "A verse-by-verse exposition of 2 Thessalonians 3, attending to the Greek text, the flow of argument, and the theological weight of each section." }}
            />
            {[
              {
                ref: "vv. 1-2",
                heading: "Finally, Brothers &mdash; Pray for Us",
                color: TEAL,
                verses: [
                  {
                    v: "v.1",
                    text: "Finally, brothers, pray for us, that the word of the Lord may speed ahead and be honored, as happened among you",
                    comment: "The word &ldquo;finally&rdquo; (to loipon) signals the transition to the letter&rsquo;s practical conclusion, not exhaustion. Paul&rsquo;s first request is for the word of the Lord to &ldquo;speed ahead&rdquo; (trecho, literally &ldquo;run&rdquo;). The athletic imagery conveys urgency and momentum. The parallel between Thessalonica and Paul&rsquo;s current situation is encouragement by analogy: the same gospel that ran and was honored in their city can do the same wherever Paul proclaims it, if the church will pray.",
                  },
                  {
                    v: "v.2",
                    text: "and that we may be delivered from wicked and evil men. For not all have faith.",
                    comment: "The prayer request is honest about the opposition Paul faces. The phrase &ldquo;wicked and evil men&rdquo; (atopos kai poneros) is strong and likely refers to those actively hostile to the gospel mission. The final clause &mdash; &ldquo;not all have faith&rdquo; &mdash; is a sober reminder that not everyone who hears the gospel believes it. This is not cynicism but realism: it prepares for the contrast with divine faithfulness in verse 3.",
                  },
                ],
              },
              {
                ref: "vv. 3-5",
                heading: "The Lord Is Faithful: Establishment and Guard",
                color: GREEN,
                verses: [
                  {
                    v: "v.3",
                    text: "But the Lord is faithful. He will establish you and guard you against the evil one.",
                    comment: "The conjunction &ldquo;but&rdquo; (de) marks the contrast from human unfaithfulness to divine faithfulness. Two promises are given: establishment (sterixei, the same word used in 2:17 for the strengthening of hearts) and guard (phylaxei, protection, watchfulness). The &ldquo;evil one&rdquo; (tou ponerou) almost certainly refers to Satan rather than &ldquo;evil&rdquo; in general &mdash; the same adversarial figure mentioned in Ephesians 6:16. The Thessalonians are under active spiritual pressure, and Paul assures them that the Lord is their guard.",
                  },
                  {
                    v: "v.4",
                    text: "And we have confidence in the Lord about you, that you are doing and will do the things that we command.",
                    comment: "Paul&rsquo;s confidence is grounded &ldquo;in the Lord,&rdquo; not merely in his observation of the Thessalonians&rsquo; behavior. This is important: the basis of his confidence is the Lord&rsquo;s work in them, not their own track record. The verb tenses (present and future) indicate both current obedience and expected continuance.",
                  },
                  {
                    v: "v.5",
                    text: "May the Lord direct your hearts to the love of God and to the steadfastness of Christ.",
                    comment: "This is an apostolic blessing in the form of a prayer. &ldquo;Direct&rdquo; (kateuthynai) means to straighten, to clear a path toward. The two objects &mdash; the love of God and the steadfastness of Christ &mdash; can be read as genitives of source: the love that God has for us, and the steadfastness that Christ himself demonstrated. In the midst of persecution and the fatigue of dealing with the disorderly, the Thessalonians need their hearts anchored in divine love and Christlike endurance.",
                  },
                ],
              },
              {
                ref: "vv. 6-10",
                heading: "Keep Away from the Idle and Disorderly",
                color: GOLD,
                verses: [
                  {
                    v: "v.6",
                    text: "Now we command you, brothers, in the name of the Lord Jesus Christ, that you keep away from any brother who is walking in idleness and not in accord with the tradition that you received from us.",
                    comment: "The shift from prayer to command is emphatic. &ldquo;In the name of the Lord Jesus Christ&rdquo; is the highest possible level of apostolic authority &mdash; this is not Paul&rsquo;s opinion but a dominical instruction. The object of the command is &ldquo;any brother who is walking in idleness (ataktos) &mdash; the word implies a persistent, habitual pattern, not an occasional lapse. &ldquo;Keep away&rdquo; (stello, to contract, draw back from) does not mean total shunning but a deliberate withdrawal from close association.",
                  },
                  {
                    v: "vv. 7-9",
                    text: "For you yourselves know how you ought to imitate us, because we were not idle when we were with you, nor did we eat anyone's bread without paying for it, but with toil and labor we worked night and day, that we might not be a burden to any of you. It was not because we do not have that right, but to give you in ourselves an example to imitate.",
                    comment: "Paul&rsquo;s appeal to his own example is striking. He explicitly acknowledges that he had the right to receive material support from the church (1 Cor 9 develops this at length) but chose not to exercise it in Thessalonica. His reason was deliberately exemplary: he was giving them a model to imitate. This is apostolic example as pastoral pedagogy. The phrase &ldquo;toil and labor, night and day&rdquo; is identical to 1 Thessalonians 2:9 &mdash; Paul is appealing to what they personally witnessed.",
                  },
                  {
                    v: "v.10",
                    text: "For even when we were with you, we would give you this command: If anyone is not willing to work, let him not eat.",
                    comment: "This is not a new command; Paul delivered it verbally when he was present (note &ldquo;even when we were with you&rdquo;). The key word is &ldquo;willing&rdquo; (thelo): the command targets those who refuse to work, not those who are unable. The connection between work and eating is both practical (labor produces food; the community&rsquo;s resources are finite) and theological (participation in the community&rsquo;s sustaining work is part of what it means to be a member). This verse is not a prescription for withholding food from the poor or the incapacitated; it is a disciplinary measure for those who deliberately exploit community generosity.",
                  },
                ],
              },
              {
                ref: "vv. 11-13",
                heading: "Busybodies, Quiet Work, and Not Growing Weary",
                color: PURPLE,
                verses: [
                  {
                    v: "v.11",
                    text: "For we hear that some among you walk in idleness, not busy at work, but busybodies.",
                    comment: "Paul confirms that the problem is real and specific: &ldquo;some among you.&rdquo; The famous wordplay in the Greek &mdash; me den ergazomenous alla periergazomenous &mdash; is untranslatable in English: &ldquo;not working (ergazomai) but working around (periergazomai).&rdquo; They are energetic, but their energy is directed at other people&rsquo;s affairs rather than their own productive work. This is the parasitic dynamic: living off others while interfering with them.",
                  },
                  {
                    v: "v.12",
                    text: "Now such persons we command and encourage in the Lord Jesus Christ to do their work quietly and to earn their own living.",
                    comment: "The tone is notable: Paul both commands (parangellomen, strong imperative) and encourages (parakaloumen, exhorts, comforts). He is not merely threatening; he is inviting the idle into a better way of life. &ldquo;Quietly&rdquo; (meta hesychias) describes the undramatic, unassuming pattern of daily labor &mdash; in contrast to the noisy, intrusive pattern of the busybody. To &ldquo;earn their own living&rdquo; is literally to eat their own bread &mdash; the satisfaction and dignity of self-sufficiency within a community of mutual contribution.",
                  },
                  {
                    v: "v.13",
                    text: "As for you, brothers, do not grow weary in doing good.",
                    comment: "This is the verse that carries the weight of the whole chapter for those who are doing what they should. The faithful, working members of the community need their own encouragement. Paul gives it with brevity and power: do not grow weary. The Greek me enkakesete comes from kakos (evil) &mdash; it means &ldquo;do not give in to the evil&rdquo; in the context of doing good. Weariness in service is a spiritual battle as much as a physical reality. The antidote is not a technique but a command: keep going.",
                  },
                ],
              },
              {
                ref: "vv. 14-18",
                heading: "Note That Person, Pursue Peace, Grace to You All",
                color: GREEN,
                verses: [
                  {
                    v: "v.14",
                    text: "If anyone does not obey what we say in this letter, take note of that person, and have nothing to do with him, that he may be ashamed.",
                    comment: "The condition is specific: disobedience to the letter&rsquo;s commands, which in context means refusal to address the idleness problem. &ldquo;Take note&rdquo; (semeioo, mark, note, flag) is a deliberate communal action &mdash; the community as a body is to identify the unresponsive person. &ldquo;Have nothing to do with him&rdquo; is a form of social separation within the community, less severe than the full excommunication of 1 Corinthians 5. The stated goal is shame &mdash; not the crushing shame of condemnation but the productive shame that precedes repentance.",
                  },
                  {
                    v: "v.15",
                    text: "Do not regard him as an enemy, but warn him as a brother.",
                    comment: "This is the crucial qualifier that prevents discipline from becoming punishment. The action of withdrawal is real; the spirit of the action must be brotherly. &ldquo;Warn&rdquo; (noutheto) means to instruct by admonition &mdash; to put right into someone&rsquo;s mind. The image is of a family member taking aside a sibling who has gone wrong, not of a tribunal rendering a verdict. Church discipline is pastoral; its frame is always love that aims at restoration.",
                  },
                  {
                    v: "vv. 16-18",
                    text: "Now may the Lord of peace himself give you peace at all times in every way. The Lord be with you all. I, Paul, write this greeting with my own hand. This is the sign of genuineness in every letter of mine; it is the way I write. The grace of our Lord Jesus Christ be with you all.",
                    comment: "The chapter and letter close with three distinct moves: (1) a prayer for comprehensive peace from the Lord of peace himself &mdash; the one who is not only the giver of peace but its source and substance; (2) Paul&rsquo;s own signature as authentication against forgery (cf. 2 Thess 2:2, where Paul warned about false letters); (3) a grace benediction that is Paul&rsquo;s signature closing in every letter. The movement from correction to peace to grace is the shape of the whole chapter in miniature.",
                  },
                ],
              },
            ].map((section, si) => (
              <div key={si} style={{ background: CARD, border: `1px solid ${section.color}30`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ background: `${section.color}18`, border: `1px solid ${section.color}50`, borderRadius: 8, padding: "5px 14px" }}>
                    <span style={{ color: section.color, fontWeight: 700, fontSize: 13 }}>{section.ref}</span>
                  </div>
                  <h3 style={{ color: section.color, fontWeight: 800, fontSize: 18, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: section.heading }}
                  />
                </div>
                {section.verses.map((vv, vi) => (
                  <div key={vi} style={{ marginBottom: vi < section.verses.length - 1 ? 22 : 0, paddingBottom: vi < section.verses.length - 1 ? 22 : 0, borderBottom: vi < section.verses.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ background: `${section.color}18`, color: section.color, fontWeight: 700, fontSize: 12, padding: "3px 8px", borderRadius: 6, flexShrink: 0 }}>{vv.v}</span>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, fontStyle: "italic", margin: 0, opacity: 0.9 }}
                        dangerouslySetInnerHTML={{ __html: "&ldquo;" + vv.text + "&rdquo;" }}
                      />
                    </div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 0 2px" }}
                      dangerouslySetInnerHTML={{ __html: vv.comment }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Five areas of personal and communal application drawn from 2 Thessalonians 3, with questions for reflection and practical steps for communities." }}
            />
            {[
              {
                color: TEAL,
                icon: "Pray",
                title: "Praying for Gospel Workers",
                body: "Paul&rsquo;s request for prayer in verses 1-2 is a model for the kind of intercession the church is called to make for those engaged in frontline gospel mission. Notice the specificity: not vague prayers for blessing but targeted prayers for the word to advance and for protection from hostile opposition. The church&rsquo;s prayer is not passive support but active partnership in the mission.",
                questions: [
                  "Who are the gospel workers &mdash; missionaries, church planters, evangelists &mdash; whose work you can name and pray for specifically?",
                  "How might your church cultivate a culture of intercession for gospel advancement rather than primarily for personal needs?",
                  "Paul prays for &ldquo;deliverance from wicked and evil men.&rdquo; How does this kind of honest prayer differ from a triumphalist expectation that ministry will always go smoothly?",
                ],
              },
              {
                color: GREEN,
                icon: "Trust",
                title: "Anchoring in the Lord&rsquo;s Faithfulness",
                body: "The transition from &ldquo;not all have faith&rdquo; to &ldquo;the Lord is faithful&rdquo; in verses 2-3 is one of the most important theological moves in the letter. When ministry is hard, when opposition comes, when some fall away &mdash; the answer is not to work harder or trust better people, but to trust the faithful Lord who guards his own. This is not passivity; it is the active, anchored confidence that allows sustained engagement with difficulty.",
                questions: [
                  "Where in your life or ministry are you relying on human faithfulness rather than divine faithfulness as your primary security?",
                  "How does the promise that the Lord will &ldquo;establish and guard&rdquo; change your posture toward the pressures you are currently facing?",
                  "What does it mean practically to have your heart directed &ldquo;to the love of God and to the steadfastness of Christ&rdquo; (v.5)?",
                ],
              },
              {
                color: GOLD,
                icon: "Work",
                title: "Work as Calling: The Theology of Labor",
                body: "Second Thessalonians 3 grounds the obligation to work not in economic necessity alone but in creational order, apostolic example, and community responsibility. Work is how human beings participate in sustaining the common life. This has profound implications for how Christians think about their vocations: not merely as means to an income but as participation in the ordering of the world that God intended from creation. The idle person is not just economically irresponsible &mdash; they have abandoned their creaturely role.",
                questions: [
                  "How does viewing your work as a creational calling &mdash; not merely a paycheck &mdash; change how you approach it on Monday morning?",
                  "The command is to those who are &ldquo;not willing to work&rdquo; (v.10). What distinguishes unwillingness to work from genuine inability, and how should the church respond differently to each?",
                  "Paul worked &ldquo;night and day&rdquo; as an example, not out of obligation. What does exemplary, non-exploitative work look like in your specific context?",
                ],
              },
              {
                color: PURPLE,
                icon: "Persevere",
                title: "Not Growing Weary in Doing Good",
                body: "Verse 13 is addressed to those who are bearing the burden of faithful service while others fail to contribute. The weariness Paul names is real &mdash; social, emotional, and physical. But his command is not to find better management techniques or reduce expectations: it is a direct charge to keep going. This is a word for caregivers, long-term servants, faithful employees, and anyone who has been faithfully doing what is right while watching others get away with not doing it.",
                questions: [
                  "Where are you most tempted to give up on doing good because the cost outweighs the visible return?",
                  "What would it look like to treat the weariness in service as a spiritual battle rather than merely a personal energy problem?",
                  "Who in your community is at risk of giving up on faithful contribution? How can you specifically encourage them this week?",
                ],
              },
              {
                color: GREEN,
                icon: "Discipline",
                title: "Church Discipline as Restorative Love",
                body: "Verses 14-15 provide a model of church discipline that is simultaneously firm and brotherly. The goal is restoration through shame that leads to repentance, not punishment. The method is communal (the church notes and withdraws together) but the spirit is relational (you are correcting a brother, not expelling an enemy). This kind of discipline requires both courage and gentleness &mdash; qualities that are rarely found together without intentional cultivation.",
                questions: [
                  "How does your church or community handle the kind of habitual disorderly behavior Paul describes? Is there a culture of avoidance, or a culture of loving correction?",
                  "What makes the difference between discipline that restores and discipline that alienates? How do you maintain the &ldquo;brotherly&rdquo; spirit in the midst of confrontation?",
                  "Are there situations in your own life where you need to receive the kind of correction Paul describes here? How does understanding its purpose as restorative change your openness to it?",
                ],
              },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ background: `${item.color}18`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "4px 14px" }}>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 12, letterSpacing: "0.06em" }}>{item.icon.toUpperCase()}</span>
                  </div>
                  <h3 style={{ color: item.color, fontWeight: 800, fontSize: 18, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 18 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
                <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: 12, letterSpacing: "0.06em", marginBottom: 12 }}>REFLECTION QUESTIONS</div>
                  {item.questions.map((q, qi) => (
                    <div key={qi} style={{ display: "flex", gap: 10, marginBottom: qi < item.questions.length - 1 ? 10 : 0, alignItems: "flex-start" }}>
                      <span style={{ color: item.color, fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 2 }}>{qi + 1}.</span>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: q }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Closing exhortation */}
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}35`, borderRadius: 14, padding: 28, textAlign: "center" }}>
              <p style={{ color: TEXT, fontSize: 18, lineHeight: 1.7, fontStyle: "italic", margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Now may the Lord of peace himself give you peace at all times in every way.&rdquo;" }}
              />
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>2 Thessalonians 3:16</p>
            </div>
          </div>
        )}

        {/* VIDEO SECTION - always visible below tabs */}
        <div style={{ marginTop: 56, paddingTop: 48, borderTop: `1px solid ${BORDER}` }}>
          <div style={{ marginBottom: 28 }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 24, marginBottom: 8, margin: "0 0 8px" }}>Teaching Videos</h2>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "Video teachings on 2 Thessalonians 3 &mdash; exploring work, idleness, church discipline, and the faithfulness of God from pastors and teachers who have studied this text carefully." }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{item.title}</h4>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>2 Thessalonians 3 &mdash; The Vine Bible Study</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
