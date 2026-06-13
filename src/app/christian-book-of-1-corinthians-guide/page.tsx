"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Divisions and the Cross",
  "The Body and Holiness",
  "Freedom and Love",
  "Spiritual Gifts",
  "Love and Resurrection",
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
    id: "Divisions and the Cross",
    heading: "Divisions and the Cross",
    reference: "1 Corinthians 1&ndash;4",
    paragraphs: [
      "Paul writes to a gifted but deeply troubled church in Corinth, a cosmopolitan and morally loose port city famous for its wealth, its commerce, and its vice. The believers there lacked no spiritual gift, yet they were spiritually immature, quarrelsome, and dazzled by the surrounding culture&rsquo;s love of status, eloquence, and worldly wisdom. The letter is Paul&rsquo;s patient, point-by-point response to a congregation he loved but had to correct.",
      "The very first problem is division. The Corinthians are forming factions around their favorite teachers: &ldquo;I follow Paul,&rdquo; &ldquo;I follow Apollos,&rdquo; &ldquo;I follow Cephas,&rdquo; and even, self-righteously, &ldquo;I follow Christ&rdquo; (1:12). They have turned the gospel&rsquo;s messengers into rival celebrities and treated the church like a collection of competing schools. Paul is appalled: &ldquo;Is Christ divided? Was Paul crucified for you?&rdquo; (1:13). The church belongs to Christ alone, not to any human leader.",
      "Paul confronts this party spirit by pointing to the cross, which overturns all human boasting. &ldquo;The word of the cross is folly to those who are perishing, but to us who are being saved it is the power of God&rdquo; (1:18). A crucified Messiah is a stumbling block to those who demand signs and foolishness to those who chase after wisdom &mdash; yet this very &ldquo;foolishness&rdquo; is the wisdom and power of God for salvation.",
      "God has acted this way deliberately. He &ldquo;chose what is foolish in the world to shame the wise; God chose what is weak in the world to shame the strong&rdquo; (1:27), so that no human being might boast in his presence. The Corinthians prized cleverness and rhetorical brilliance, but God bypassed the proud and called the lowly. The only legitimate boast is &ldquo;in the Lord&rdquo; (1:31). Salvation is gift, not achievement, and grace leaves no room for self-congratulation.",
      "True wisdom, then, is not the polished eloquence the Corinthians admired but &ldquo;Jesus Christ and him crucified&rdquo; (2:2). Paul reminds them that he came to them not with lofty speech but in weakness and trembling, so that their faith might rest on the power of God rather than the wisdom of men. The deep things of God are discerned not by human cleverness but by the Spirit, who reveals what no eye has seen nor ear heard.",
      "Finally Paul reframes the role of the apostles themselves. They are not party leaders to be exalted but mere &ldquo;servants&rdquo; and &ldquo;stewards of the mysteries of God&rdquo; (4:1). One plants, another waters, but God gives the growth; the workers are nothing, and God is everything. Paul describes the apostles as the lowest of all, &ldquo;the scum of the world,&rdquo; spectacles of weakness for Christ&rsquo;s sake &mdash; a deliberate rebuke to a church intoxicated with its own sense of arrival.",
      "The lesson of these opening chapters is timeless. Wherever the church measures itself by worldly standards of power, eloquence, and celebrity, it betrays the gospel of the cross. The way of Christ is the way of the crucified &mdash; humble, self-giving, and dependent on God&rsquo;s power rather than human applause. To boast in the cross is to renounce every rivalry that fractures the body of Christ.",
    ],
  },
  {
    id: "The Body and Holiness",
    heading: "The Body and Holiness",
    reference: "1 Corinthians 5&ndash;7",
    paragraphs: [
      "From division Paul turns to a series of serious moral failures that the Corinthians were tolerating with alarming complacency. Their pride in spiritual freedom had become a cover for sin, and Paul will not let it stand. A church may be rich in gifts, he insists, and yet desperately unholy &mdash; and holiness is not optional for those who belong to Christ.",
      "The first case is shocking: a man is living sexually with his father&rsquo;s wife, a sin so grave that &ldquo;even pagans do not tolerate it&rdquo; (5:1). Worse, the Corinthians are arrogant about it rather than grieved. Paul calls for decisive church discipline, comparing sin to leaven that spreads through the whole lump of dough. The community must &ldquo;cleanse out the old leaven&rdquo; (5:7), for the purity of the whole body is at stake.",
      "Next, the Corinthians are dragging one another before secular courts (ch. 6), airing their disputes before unbelievers and shaming the name of Christ. Paul is grieved that brothers cannot settle matters within the family of faith; better to suffer wrong, he says, than to defraud and litigate. Their willingness to wrong one another reveals how far short they fall of the kingdom they claim to inherit.",
      "Then Paul confronts a slogan the Corinthians were using to justify visiting prostitutes: &ldquo;All things are lawful for me.&rdquo; Christian freedom, they reasoned, extended even to the body. Paul answers with a profound theology of the body: the body is &ldquo;for the Lord, and the Lord for the body&rdquo; (6:13). To join oneself to a prostitute is to defile what belongs to Christ, for in sexual union two become one flesh.",
      "His climax is one of Scripture&rsquo;s great statements on human dignity: &ldquo;Do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body&rdquo; (6:19&ndash;20). The body is not a disposable shell but a dwelling of God&rsquo;s Spirit, purchased at the cost of the cross. Holiness, therefore, is rendered to God in and through the body.",
      "Chapter 7 turns to marriage, singleness, and sexuality, and handles them with remarkable balance. Paul affirms both marriage and celibacy as good gifts of God, neither one superior in itself. Within marriage he counsels mutual faithfulness and the giving of conjugal rights; outside it he commends the focused devotion that singleness allows. His repeated counsel is to &ldquo;remain&rdquo; in the situation in which one was called, content that one&rsquo;s standing before God does not depend on changing one&rsquo;s circumstances.",
      "Throughout these chapters Paul refuses to separate spirituality from bodily life. The gospel does not free us from our bodies but redeems them; it lays claim to our sexuality, our relationships, our conflicts, and our daily conduct. A people bought with the price of Christ&rsquo;s blood are summoned to glorify God in the most concrete and personal dimensions of their lives.",
    ],
  },
  {
    id: "Freedom and Love",
    heading: "Freedom and Love",
    reference: "1 Corinthians 8&ndash;11",
    paragraphs: [
      "The question of food sacrificed to idols becomes a case study in how Christian freedom must be governed by love. In Corinth most meat sold in the markets had passed through pagan temples, raising a real dilemma: could a believer eat it in good conscience? The &ldquo;strong&rdquo; said yes, reasoning that idols are nothing; the &ldquo;weak,&rdquo; recently converted from idolatry, felt that eating such meat dragged them back into their old worship.",
      "Paul grants the theological point &mdash; an idol is nothing, and there is only one God &mdash; but immediately qualifies it: &ldquo;knowledge puffs up, while love builds up&rdquo; (8:1). Being right is not enough; the question is whether one&rsquo;s conduct edifies or wounds a brother. Knowledge that wields itself without love merely inflates the ego and harms the community. Love, not information, is the measure of mature freedom.",
      "Paul is willing to limit his own freedom for the sake of a weaker believer&rsquo;s conscience: &ldquo;If food makes my brother stumble, I will never eat meat, lest I make my brother stumble&rdquo; (8:13). The strong must not parade their liberty in ways that damage the weak. To sin against a brother by wounding his conscience is, Paul says, to sin against Christ himself. Freedom that ignores its effect on others is no longer Christian freedom.",
      "He then offers himself as the supreme example (ch. 9). As an apostle he had every right to material support from the churches, yet he refused it, working with his own hands so as to put no obstacle in the way of the gospel. &ldquo;I have become all things to all people, that by all means I might save some&rdquo; (9:22). His freedom was real, but he gladly surrendered it for the sake of the mission. He disciplines himself like an athlete in training, lest after preaching to others he himself be disqualified.",
      "Yet Paul also warns the overconfident not to presume on their liberty. Looking back to Israel in the wilderness (ch. 10), he reminds the Corinthians that those who were baptized into Moses and fed with spiritual food still fell through idolatry and immorality. &ldquo;Let anyone who thinks that he stands take heed lest he fall&rdquo; (10:12). Freedom is no license to flirt with the demonic realities behind idol worship; one cannot share the table of the Lord and the table of demons.",
      "The governing principle pulls everything together: &ldquo;Whether you eat or drink, or whatever you do, do all to the glory of God&rdquo; (10:31). Liberty is not about asserting one&rsquo;s rights but about seeking God&rsquo;s glory and the good of others, giving no offense and seeking the salvation of many. Paul&rsquo;s ethic is neither rigid legalism nor careless license but love that gladly bends its freedom for the sake of the neighbor.",
      "Paul rounds out this section by addressing the order of public worship and the Lord&rsquo;s Supper (ch. 11), which the Corinthians were profaning through their divisions. The wealthy feasted while the poor went hungry, turning a meal of unity into a display of contempt. Paul recalls the words of institution and warns that to eat and drink &ldquo;in an unworthy manner&rdquo; is to sin against the body and blood of the Lord. The Supper that proclaims Christ&rsquo;s death must never become an occasion for despising his people.",
    ],
  },
  {
    id: "Spiritual Gifts",
    heading: "Spiritual Gifts",
    reference: "1 Corinthians 12, 14",
    paragraphs: [
      "The Corinthians prized showy gifts, especially tongues, and used them to establish a spiritual hierarchy. Possessing the more spectacular gifts became, in their hands, a badge of superior spirituality, a fresh occasion for the pride and division Paul had already condemned. So he devotes careful teaching to the nature and purpose of the gifts of the Spirit, correcting both the proud and the discouraged.",
      "His first point is that all genuine gifts come from the same source. &ldquo;There are varieties of gifts, but the same Spirit&hellip; To each is given the manifestation of the Spirit for the common good&rdquo; (12:4, 7). No gift is a private trophy; each is given for the building up of the whole community. The diversity of gifts is the Spirit&rsquo;s deliberate design, not a ranking of spiritual worth.",
      "Paul illustrates this with the image of the body (ch. 12): the church is one body with many members, each indispensable, each placed by God where he willed. The foot cannot resign because it is not a hand, nor can &ldquo;the eye say to the hand, &lsquo;I have no need of you&rsquo;&rdquo; (12:21). There is no place either for pride that despises others or for the false humility that feels itself worthless. God has arranged the members as he chose, giving greater honor to the parts that seem to lack it.",
      "When one member suffers, all suffer together; when one is honored, all rejoice together (12:26). The interdependence of the body means that the flourishing of each depends on the flourishing of all. The Corinthians&rsquo; competitive individualism is exposed as a contradiction of their very nature as the body of Christ, in which every member needs and serves every other.",
      "In chapter 14 Paul applies this directly to their fascination with tongues. He ranks prophecy above tongues, not because tongues are bad, but because prophecy builds up the whole church while uninterpreted tongues edify only the speaker. &ldquo;The one who prophesies is greater than the one who speaks in tongues, unless someone interprets, so that the church may be built up&rdquo; (14:5). A gift&rsquo;s value, for Paul, lies in its usefulness to others, not in its impressiveness.",
      "The governing principle of corporate worship is stated plainly: &ldquo;Let all things be done for building up&rdquo; (14:26). Worship is not a stage for individual display but a gathering for mutual edification. Even the most genuine gift must yield to the good of the assembly; where a tongue cannot be understood and interpreted, it should fall silent in the meeting.",
      "Paul closes with a call to order: &ldquo;God is not a God of confusion but of peace&rdquo; (14:33), and &ldquo;all things should be done decently and in order&rdquo; (14:40). The Spirit who gives the gifts is the same Spirit of peace, and a worship marked by chaos and self-assertion contradicts his character. Order and edification, not spectacle and rivalry, are the marks of a Spirit-filled congregation.",
    ],
  },
  {
    id: "Love and Resurrection",
    heading: "Love and Resurrection",
    reference: "1 Corinthians 13, 15",
    paragraphs: [
      "Between the two chapters on spiritual gifts, Paul places the greatest description of love in all literature (ch. 13). It is no mere poetic interlude but the very heart of his argument: the gifts the Corinthians prized are worthless without love. Though one speak in the tongues of angels, possess all knowledge and prophetic power, and give away everything, &ldquo;but have not love, I am nothing&rdquo; (13:2). Love is the indispensable measure of every gift.",
      "Paul then paints love&rsquo;s portrait in action: &ldquo;Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful&hellip; Love bears all things, believes all things, hopes all things, endures all things&rdquo; (13:4&ndash;7). Every quality here is precisely what the quarrelsome, boastful Corinthians lacked. Love is not a feeling but a way of treating others that mirrors the self-giving of Christ.",
      "Above all, love endures: &ldquo;Love never ends&rdquo; (13:8). Prophecies will pass away, tongues will cease, knowledge will be surpassed, for these belong to the present age of partial sight, when &ldquo;we see in a mirror dimly.&rdquo; But love belongs to eternity. &ldquo;Now faith, hope, and love abide, these three; but the greatest of these is love&rdquo; (13:13). The gifts are scaffolding for this life; love is the permanent reality that remains when faith becomes sight and hope is fulfilled.",
      "From the permanence of love Paul moves, in chapter 15, to the foundation of Christian hope: the resurrection. Some in Corinth, shaped by Greek thought, denied any future bodily resurrection. Paul answers by rehearsing the gospel he received and passed on: &ldquo;that Christ died for our sins&hellip; that he was buried, that he was raised on the third day&hellip; and that he appeared&rdquo; (15:3&ndash;5) to Peter, the Twelve, more than five hundred at once, and finally to Paul himself.",
      "He then presses the stakes home with relentless logic. If there is no resurrection of the dead, then Christ has not been raised; and if Christ has not been raised, the whole faith collapses. &ldquo;If Christ has not been raised, your faith is futile and you are still in your sins&rdquo; (15:17); the dead in Christ have perished, and believers are of all people most to be pitied. The resurrection is not a peripheral doctrine but the hinge on which everything turns.",
      "But Christ has in fact been raised, &ldquo;the firstfruits of those who have fallen asleep&rdquo; (15:20) &mdash; the guarantee and pattern of the harvest to come. As in Adam all die, so in Christ all will be made alive. The perishable body, sown in weakness and dishonor, will be raised imperishable, glorious, and spiritual, transformed at the last trumpet when &ldquo;this mortal body must put on immortality&rdquo; (15:53).",
      "The chapter ends in triumph: &ldquo;Death is swallowed up in victory. O death, where is your sting?&rdquo; (15:54&ndash;55). The grave has been robbed of its terror, and the sting of death &mdash; sin &mdash; has been drawn by Christ. So Paul concludes with a charge: &ldquo;Be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain&rdquo; (15:58). Because Christ is risen, the believer&rsquo;s faith, love, and labor all reach beyond the grave into eternal life.",
    ],
  },
];

const videoItems = [
  { videoId: "zvU-zdf2GDM", title: "BibleProject — 1 Corinthians Overview" },
  { videoId: "Sf2bnH3Ls-Q", title: "The Love Chapter — 1 Corinthians 13 Explained" },
  { videoId: "FZmoH8mtZbU", title: "The Resurrection Chapter — 1 Corinthians 15" },
];

export default function ChristianBookOf1CorinthiansGuidePage() {
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
            The Book of 1 Corinthians
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul&rsquo;s letter to a gifted but troubled church &mdash; divisions and the wisdom of the cross, the body and holiness, freedom governed by love, the right use of spiritual gifts, the great love chapter, and the resurrection of the dead.
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
              Deepen your study of 1 Corinthians through visual teaching on the structure of the letter, the great love chapter of 1 Corinthians 13, and the resurrection hope of 1 Corinthians 15.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Let All Things Be Done in Love</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Corinthians takes a divided, immature, and gifted church and points it back to the cross, to holiness, and above all to love. Its enduring summons is to a maturity measured not by spectacle but by self-giving love &mdash; grounded in the sure hope that, because Christ is risen, our labor in the Lord is never in vain.
          </p>
        </div>
      </main>
    </div>
  );
}
