"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Excellence of Love",
  "What Love Is",
  "What Love Is Not",
  "Love Never Fails",
  "Faith Hope and Love",
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
    id: "The Excellence of Love",
    heading: "The Excellence of Love",
    reference: "1 Corinthians 13:1&ndash;3",
    paragraphs: [
      "First Corinthians 13 is rightly cherished as &ldquo;the Love Chapter,&rdquo; read at countless weddings and engraved on countless hearts. Yet it was not written for a wedding. It sits at the center of Paul&rsquo;s long argument about spiritual gifts (chapters 12&ndash;14), addressed to a church torn apart by rivalry over who possessed the most impressive gifts. The Corinthians prized tongues, prophecy, and knowledge as marks of status. Into that conflict Paul drops a sudden, radiant interruption: &ldquo;I will show you a still more excellent way&rdquo; (12:31). That way is love.",
      "Paul begins not by praising love but by exposing the emptiness of everything without it. &ldquo;If I speak in the tongues of men and of angels, but have not love, I am a noisy gong or a clanging cymbal&rdquo; (13:1). The most dazzling spiritual eloquence, the very gift the Corinthians coveted most, becomes mere noise &mdash; the hollow clatter of pagan temple instruments &mdash; if love is absent.",
      "He presses further into the gifts they esteemed. &ldquo;If I have prophetic powers, and understand all mysteries and all knowledge, and if I have all faith, so as to remove mountains, but have not love, I am nothing&rdquo; (13:2). Notice the escalation: not partial knowledge but all knowledge; not ordinary faith but mountain-moving faith. Even these, stripped of love, do not merely diminish the person &mdash; they reduce him to nothing.",
      "The climax is the most arresting of all: &ldquo;If I give away all I have, and if I deliver up my body to be burned, but have not love, I gain nothing&rdquo; (13:3). Extravagant generosity and even martyrdom, the apparent summit of self-sacrifice, profit nothing if love does not animate them. Paul dismantles every basis for spiritual pride. Gifts can be counterfeited by a loveless heart; love cannot.",
      "The logic is devastating to the Corinthian boasting. They had ranked one another by visible gifts, but Paul insists that the presence of a gift proves nothing about the presence of God&rsquo;s love in the soul. A gift is a tool given for the good of others; love is the very character of the giver. Without love, the most spectacular ministry is loud, empty, and worthless.",
      "This opening sets the stage for everything that follows. If love is the indispensable thing &mdash; greater than tongues, prophecy, knowledge, faith, generosity, and martyrdom &mdash; then we urgently need to know what this love actually is. Paul will not leave it as a vague feeling. In the verses that follow he defines it with surgical precision, in fifteen short strokes that describe not an emotion but a way of treating people.",
    ],
  },
  {
    id: "What Love Is",
    heading: "What Love Is",
    reference: "1 Corinthians 13:4&ndash;7",
    paragraphs: [
      "&ldquo;Love is patient and kind&rdquo; (13:4). Paul defines love not with adjectives describing a feeling but with verbs describing an action &mdash; love does things, and refuses to do others. The word translated &ldquo;patient&rdquo; means long-suffering, slow to anger, bearing with the faults and provocations of others over time. Love does not have a short fuse. It absorbs offense and keeps loving the difficult person.",
      "Patience is matched by kindness, its active counterpart. If patience is love enduring what others do to us, kindness is love doing good to them in return. The two together describe the very heart of God, who is &ldquo;slow to anger and abounding in steadfast love&rdquo; and whose kindness leads us to repentance. Love is not passive; it actively seeks the good of the other.",
      "Paul then turns to what love is not, listing a series of vices that had infected the Corinthian church. &ldquo;Love does not envy or boast; it is not arrogant or rude&rdquo; (13:4&ndash;5). Envy resents what others have; boasting parades what we have; arrogance puffs us up over others; rudeness disregards their dignity. Each is a form of self&ndash;exaltation, and love &mdash; which exists for others &mdash; refuses them all.",
      "&ldquo;It does not insist on its own way; it is not irritable or resentful&rdquo; (13:5). Here Paul touches the root of the Corinthian quarrels. Love does not demand its rights or always get its way. It is not touchy or quick to take offense. And it &ldquo;keeps no record of wrongs&rdquo; &mdash; love does not nurse a ledger of grievances to be produced later. It forgives and lets go.",
      "&ldquo;It does not rejoice at wrongdoing, but rejoices with the truth&rdquo; (13:6). Love takes no secret pleasure in another&rsquo;s sin or downfall, no satisfaction in scandal or gossip. Instead it celebrates what is right and true. Love is morally aligned with God; it delights in righteousness and grieves over evil, even when rejoicing at another&rsquo;s failure would flatter our pride.",
      "The portrait reaches its crescendo: love &ldquo;bears all things, believes all things, hopes all things, endures all things&rdquo; (13:7). Love covers and protects rather than exposing; it trusts rather than assuming the worst; it hopes for the best in people and situations; and it endures, holding fast under strain. There is no limit clause here &mdash; not most things, but all things. This is a love that does not quit.",
    ],
  },
  {
    id: "What Love Is Not",
    heading: "What Love Is Not",
    reference: "1 Corinthians 13:4&ndash;6",
    paragraphs: [
      "Paul&rsquo;s definition of love is as much a list of what love refuses to be as what it is. Eight of his fifteen descriptions are negatives, and they read like a diagnosis of the Corinthian church itself. The believers there were envious, boastful, arrogant, rude, self&ndash;seeking, irritable, and quick to keep score. Paul holds up love as a mirror, and the church&rsquo;s own faults stare back.",
      "Love &ldquo;does not envy.&rdquo; Envy is pain at another&rsquo;s blessing, the inability to rejoice when someone else is honored. In a church ranking itself by gifts, envy was rampant. Love does the opposite: it is glad when others are gifted, blessed, and praised, because love wants their good more than its own advancement.",
      "Love &ldquo;does not boast&rdquo; and &ldquo;is not arrogant.&rdquo; The Greek word for boast suggests a windbag, one who is always talking himself up. Arrogance is being &ldquo;puffed up&rdquo; &mdash; a word Paul uses repeatedly of the Corinthians, who were inflated with a sense of their own knowledge and spirituality. Love deflates self&ndash;importance; it does not need to be seen as superior.",
      "Love &ldquo;is not rude&rdquo; and &ldquo;does not insist on its own way.&rdquo; Rudeness is behaving disgracefully, with no regard for how one&rsquo;s conduct affects others. Insisting on one&rsquo;s own way is the demand to have rights honored and preferences served. Both are forms of selfishness, and love &mdash; which by definition lives for the other &mdash; lays them down.",
      "Love &ldquo;is not irritable or resentful.&rdquo; Irritability is the readiness to be provoked, the short temper that flares at the smallest slight. Resentment is the slow poison of stored&ndash;up grievance &mdash; literally, love does not &ldquo;reckon the evil,&rdquo; keeping no account of wrongs suffered. The loving heart neither erupts easily nor broods over old injuries.",
      "Finally, love &ldquo;does not rejoice at wrongdoing.&rdquo; There is a dark pleasure the human heart can take in scandal, in being proved right, in the failure of a rival. Love crucifies that instinct. By naming what love is not, Paul shows that love is not a warm feeling we fall into but a relentless war against our own selfishness &mdash; a war won only by the grace of God at work within us.",
    ],
  },
  {
    id: "Love Never Fails",
    heading: "Love Never Fails",
    reference: "1 Corinthians 13:8&ndash;12",
    paragraphs: [
      "&ldquo;Love never ends&rdquo; (13:8). Having defined love, Paul now declares its permanence, and in doing so puts the prized Corinthian gifts in their proper place. &ldquo;As for prophecies, they will pass away; as for tongues, they will cease; as for knowledge, it will pass away.&rdquo; The very gifts they treasured are temporary scaffolding; love is the building that endures forever.",
      "Why will the gifts pass away? Because they belong to an age of partial sight. &ldquo;For we know in part and we prophesy in part, but when the perfect comes, the partial will pass away&rdquo; (13:9&ndash;10). The gifts of knowledge and prophecy serve us now, in this incomplete age, but they are means to an end. When completeness comes, the partial instruments will no longer be needed.",
      "Paul illustrates with the image of growing up: &ldquo;When I was a child, I spoke like a child, I thought like a child, I reasoned like a child. When I became a man, I gave up childish ways&rdquo; (13:11). The gifts the Corinthians prized as marks of maturity are, in the grand scheme, like the speech of a child &mdash; good and right for their season, but destined to be left behind in the fullness of maturity.",
      "Then comes one of Scripture&rsquo;s most beautiful images: &ldquo;For now we see in a mirror dimly, but then face to face&rdquo; (13:12). Ancient mirrors were polished bronze, yielding only a dim, distorted reflection &mdash; and Corinth was famous for producing them. Our present knowledge of God is real but indirect, like a hazy reflection. The day is coming when we will see him directly, face to face.",
      "&ldquo;Now I know in part; then I shall know fully, even as I have been fully known&rdquo; (13:12). The contrast is staggering. Our knowing is fragmentary; God&rsquo;s knowing of us is complete. But a day is coming when our knowledge will be made whole &mdash; not omniscient, but clear, direct, and unhindered. The very thing the Corinthians boasted in, knowledge, is here exposed as partial and provisional.",
      "The point lands with quiet force. Why exalt gifts that are passing away? Why build your identity on knowledge that is partial and dim? Love is what remains when the scaffolding comes down, what carries over into the face&ndash;to&ndash;face fellowship of eternity. The gifts equip us for the journey; love is our home at the journey&rsquo;s end. To pursue love is to invest in what will never, ever fail.",
    ],
  },
  {
    id: "Faith Hope and Love",
    heading: "Faith Hope and Love",
    reference: "1 Corinthians 13:13",
    paragraphs: [
      "&ldquo;So now faith, hope, and love abide, these three; but the greatest of these is love&rdquo; (13:13). Against the passing gifts of tongues, prophecy, and knowledge, Paul sets three graces that &ldquo;abide&rdquo; &mdash; faith, hope, and love. This triad appears repeatedly in his letters as a summary of the whole Christian life. These endure where the gifts fade.",
      "Yet love is crowned the greatest of the three. In one sense faith and hope belong to this age: in heaven faith will give way to sight, and hope will be swallowed up in fulfillment. But love will never cease, for love is the very nature of God himself &mdash; &ldquo;God is love&rdquo; (1 John 4:8). When we see him face to face, we will not stop trusting and longing only to love; we will love perfectly and forever.",
      "This is why the chapter speaks so powerfully to marriage. The vows couples make &mdash; to be patient and kind, to bear and believe and hope and endure all things, to forsake envy, pride, and resentment &mdash; are simply 1 Corinthians 13 lived out between two people. A marriage thrives not on feeling but on this costly, durable, self&ndash;giving love that keeps no record of wrongs.",
      "It speaks just as powerfully to the church, which is where Paul aimed it first. A congregation gifted in teaching, worship, and knowledge but lacking love is a clanging cymbal. The measure of a healthy church is not the brilliance of its gifts but the patience, kindness, and forbearance of its members toward one another. Love is the bond that holds the body together.",
      "And it reaches into daily relationships of every kind &mdash; with neighbors, coworkers, the difficult relative, the irritating stranger. Paul&rsquo;s definition is endlessly searching: try substituting your own name for the word &ldquo;love&rdquo; in verses 4 through 7, and the gap between this love and our own hearts becomes painfully clear. None of us loves like this naturally.",
      "Which is why the chapter ultimately points us to Christ. Only one Name fits perfectly in every line: Jesus is patient and kind; Jesus does not envy or boast; Jesus is not arrogant or rude; Jesus bears, believes, hopes, and endures all things; Jesus never fails. He loved us to the end, giving up his body not in vain pride but in saving love at the cross. This is the love that defines us, the love that saves us, and the love we are now called to show &mdash; not in our own strength, but as those who have first been fully loved and fully known.",
    ],
  },
];

const videoItems = [
  { videoId: "l9pH5Re5gHA", title: "BibleProject - The Word Study - Agape Love" },
  { videoId: "T4M_Ffh3iQc", title: "Overview - 1 Corinthians Explained" },
  { videoId: "Urv5Ha0VQbY", title: "The Love Chapter - 1 Corinthians 13 Exposition" },
  { videoId: "9Ix_Hns1aMc", title: "Love Is Patient and Kind - A Study of Agape" },
];

export default function FirstCorinthians13GuidePage() {
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
            1 Corinthians 13
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The Love Chapter &mdash; Paul&rsquo;s &ldquo;more excellent way&rdquo; set against the Corinthian conflict over spiritual gifts. Love is greater than tongues, prophecy, knowledge, mountain&ndash;moving faith, or even martyrdom; it is patient and kind, it never ends, and of faith, hope, and love, the greatest is love.
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
              Deepen your study of 1 Corinthians 13 through visual teaching on the meaning of agape love, the excellence of the more excellent way, and what it means to love as Christ has loved us.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Greatest of These Is Love</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Corinthians 13 strips away every basis for spiritual pride and holds up the one thing that lasts. Gifts pass away; love never ends. Put your own name in place of &ldquo;love&rdquo; in verses 4 through 7 and you feel how far short we fall &mdash; until you put in the name of Jesus, who is patient and kind, who bears all things and never fails, and who loved us to the end. His love both saves us and shows us the way.
          </p>
        </div>
      </main>
    </div>
  );
}
