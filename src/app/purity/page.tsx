"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Body Is Not the Enemy", verse: "1 Corinthians 6:19-20", body: "The Christian sexual ethic begins not with rules but with a theology of the body. 'Your body is a temple of the Holy Spirit' (1 Corinthians 6:19). The body is not a problem to be managed — it is a good gift from a good Creator, set apart for God's purposes. Purity is not body-hatred disguised as religion; it is the conviction that the body is worth protecting because it is holy." },
  { title: "Sex Is Good — and Bounded", verse: "Genesis 2:24-25", body: "Scripture's first picture of sexuality is utterly positive: naked, unashamed, wholly known (Genesis 2:24-25). The Song of Solomon celebrates erotic love without apology. The Christian teaching is not that sex is bad but that it is so good, so powerful, and so meaning-laden that it belongs only within the covenant of marriage — where it can bear the weight it was designed to carry." },
  { title: "Lust Versus Desire", verse: "Matthew 5:28", body: "Jesus' teaching on lust (Matthew 5:28) is not a condemnation of sexual desire itself — it is a condemnation of desire that depersonalizes, that treats another human being as a means to your gratification. Lust is desire that has severed from love. The goal is not the absence of desire but desire rightly ordered: toward the right person, in the right context, with the right intent." },
  { title: "The Gospel and Sexual Sin", verse: "1 Corinthians 6:11", body: "'Such were some of you. But you were washed, you were sanctified, you were justified' (1 Corinthians 6:11). Paul lists sexual sin among the gravest — and then declares it fully forgivable. The gospel does not offer a lower standard; it offers a power the law cannot provide. Sexual purity is not a prerequisite for coming to Christ; it is a fruit of Christ's work in us." },
  { title: "The Long War", verse: "Romans 7:23", body: "Paul describes the experience of every believer: 'I see another law at work in me, waging war against the law of my mind' (Romans 7:23). Sexual temptation is a long war, not a single battle. The expectation of instantaneous and permanent victory sets believers up for shame cycles. The normative experience is ongoing struggle, ongoing grace, ongoing growth — not arrival." },
];

const STRUGGLES = [
  {
    name: "Pornography",
    color: "#EF4444",
    reality: "Pornography is the defining sexual struggle of our generation. It rewires the brain's reward system, distorts expectations of intimacy, degrades the people it depicts, and is consumed in secret — compounding shame. It is not a 'lesser' sin; it is a serious addiction with serious consequences.",
    steps: ["Name it honestly to God and one trusted person. Secret sin grows in darkness.", "Install accountability software (Covenant Eyes, Bark) — not as punishment but as a structural aid.", "Identify your triggers: boredom, loneliness, stress, late nights. Address the root, not just the symptom.", "Replace the habit: when tempted, move immediately to a specific action (prayer, call a friend, go outside).", "Find a recovery community — groups like XXXchurch, Sex Addicts Anonymous (Christian track), or a counselor."],
  },
  {
    name: "Premarital Sex",
    color: "#F59E0B",
    reality: "Many Christians enter relationships having already been sexually active — or encounter pressure to become so. The question is not only 'how far is too far' but 'what does this relationship honor?' Physical intimacy that outpaces emotional and covenantal intimacy creates confusion, attachment, and pain.",
    steps: ["Decide your boundaries in advance, in prayer, not in the moment.", "Communicate clearly with your partner — not as a list of rules but as an expression of what you value.", "Avoid situations (alone, late, isolated) where decisions become difficult.", "If you have crossed a line, confess, receive grace, and establish new boundaries. The gospel makes fresh starts possible.", "Consider whether the relationship is moving toward marriage — and at what pace."],
  },
  {
    name: "Same-Sex Attraction",
    color: PURPLE,
    reality: "Many Christians experience same-sex attraction and hold to a traditional sexual ethic — meaning they believe sexual expression belongs within man-woman marriage. This is a genuine, often lifelong, cross to carry. The church has often responded with either cruelty or silence. Both fail.",
    steps: ["You are not defined by your attractions. Identity in Christ precedes and outweighs sexual identity.", "Find community — other Christians who experience SSA and live faithfully. You are not alone.", "Celibacy is a gift, not a punishment — explore what faithful, full life looks like in your context.", "See a counselor who can help you understand your history, patterns, and path forward.", "The goal is not the elimination of attraction but the ordering of desire toward God."],
  },
  {
    name: "Masturbation",
    color: "#10B981",
    reality: "Scripture does not address masturbation directly. The question is not primarily the act itself but what accompanies it: lust (Matthew 5:28), fantasy that depersonalizes others, compulsive patterns that reinforce isolation. The standard is not simply 'is it mentioned in the Bible?' but 'does this draw me toward God and genuine intimacy, or away?'",
    steps: ["Assess honestly: is this compulsive? Is it accompanied by lust? Is it isolating?", "If it is a pattern of sin, treat it with the same intentionality as any habitual sin: confession, community, structure.", "Don't allow shame to become identity. Struggle is not failure; pattern is not character.", "Address underlying loneliness or stress that the habit may be masking.", "Married Christians: pursue genuine intimacy with your spouse rather than isolation."],
  },
];

const VOICES = [
  {
    id: "lewis",
    name: "C.S. Lewis",
    era: "1898 – 1963",
    context: "Oxford scholar, Mere Christianity and The Four Loves",
    bio: "C.S. Lewis wrote about sexuality with unusual candor and wisdom in Mere Christianity (Book 3, Chapter 5) and The Four Loves. He firmly rejected the idea that Christianity is anti-sex: 'If anyone thinks that Christians regard unchastity as the supreme vice, he is quite wrong... The sins of the flesh are bad, but they are the least bad of all sins.' What Christianity opposes is not sexual desire but sexual desire disordered — directed at the wrong object or in the wrong context. Lewis also diagnosed the modern obsession with sex as a symptom of something gone wrong, not a sign of health: a world that talks as much about sex as ours does is a world in which something has gotten out of proportion.",
    quote: "Chastity is the most unpopular of the Christian virtues. There is no getting away from it; the old Christian rule is 'Either marriage, with complete faithfulness to your partner, or else total abstinence.'",
    contribution: "Lewis helped many Christians hold a positive theology of sexuality without capitulating to its disordering. His analysis — that sexual sin is the least bad of sins, though still genuinely sinful — prevented the shame spiral that makes Christians treat sexual failure as uniquely catastrophic. His distinction between eros (romantic love) and agape in The Four Loves helped readers understand what healthy sexual love is meant to point toward: the divine love that is its ultimate source and model.",
  },
  {
    id: "butterfield",
    name: "Rosaria Butterfield",
    era: "Born 1962",
    context: "Former lesbian academic, Presbyterian pastor's wife, The Secret Thoughts of an Unlikely Convert",
    bio: "Rosaria Butterfield was a tenured professor of English and women's studies at Syracuse University, in a long-term lesbian relationship, and — by her own account — a committed enemy of Christianity when she began researching the Religious Right for a book project. A friendship with a Reformed Presbyterian pastor and his wife led to a conversion she calls 'the train wreck of my life.' Her memoir The Secret Thoughts of an Unlikely Convert (2012) is one of the most honest accounts of conversion from outside Christianity in recent memory. She did not experience conversion as healing from same-sex attraction but as a reordering of identity: Christ became the center, and everything else — including her sexuality — found its proper place relative to him.",
    quote: "The cost of following Jesus is high. But it is not higher than the cost of not following him. Costly grace told me that Jesus had to die to forgive me. The gospel told me that my life was not my own.",
    contribution: "Butterfield has given the church a model for engaging people with same-sex attraction that is neither cruel nor accommodating — it takes the reality of the attraction seriously, takes the cost of obedience seriously, and takes the sufficiency of Christ seriously. Her subsequent books (Openness Unhindered, The Gospel Comes with a House Key) address how the local church should provide genuine community — including hospitality in homes — as an alternative to the social belonging that LGBT identity and community provides.",
  },
  {
    id: "hill",
    name: "Wesley Hill",
    era: "Born 1981",
    context: "Gay celibate Anglican theologian, Washed and Waiting, Spiritual Friendship",
    bio: "Wesley Hill is a New Testament scholar and professor who experiences same-sex attraction, holds to a traditional sexual ethic, and has written with unusual candor and beauty about what celibate faithfulness looks like for gay Christians. His first book, Washed and Waiting (2010), named the experience and the calling with unusual precision: washed (the gospel has claimed this person) and waiting (the eschatological hope that the resurrection will bring full healing and wholeness). His second book, Spiritual Friendship (2015), recovers the tradition of deep, covenantal friendship as a vocation available to celibate Christians — not a consolation prize for the unmarried but a genuine form of love.",
    quote: "Celibacy is not the absence of desire. It is the commitment to bring desire into conformity with a different pattern — the pattern of the new creation that is breaking in.",
    contribution: "Hill opened a space in the evangelical conversation for gay Christians who neither 'change' nor capitulate to revisionist theology — a space that had been largely invisible before his writing. His recovery of spiritual friendship has been particularly significant: the Christian tradition has always recognized bonds of covenant friendship deeper than casual social ties, and Hill argues these bonds are the primary community available to celibate Christians. His work invites the whole church to take friendship more seriously — as vocation, not as lesser-than-marriage.",
  },
  {
    id: "west",
    name: "Christopher West",
    era: "Born 1969",
    context: "Catholic speaker and author, Theology of the Body Explained",
    bio: "Christopher West spent 30 years making Pope John Paul II's dense philosophical Theology of the Body accessible to ordinary Catholics and Christians of all traditions. John Paul II delivered 129 Wednesday audiences from 1979-1984 that together constitute the most systematic Catholic treatment of human sexuality, marriage, and the body in history. West's contribution is translation: he turned dense phenomenology into comprehensible catechesis and popular writing. His central claim — faithful to John Paul II — is that human sexuality is a sign: the union of husband and wife in one flesh is a bodily sign pointing to the union of Christ and the church (Ephesians 5) and ultimately to the life of love within the Trinity.",
    quote: "The body tells a story. Human sexuality, understood through the lens of Scripture, is not primarily about biology or pleasure or even intimacy. It is about what it means to be made in the image of a God who is love.",
    contribution: "West's work recovered a thoroughly positive and theologically rich vision of human sexuality for a generation of Christians who had received only prohibitions. The theology of the body says not merely 'don't' but 'here is what sex is for, here is its meaning, here is the dignity it carries.' This positive vision — rooted in the nuptial meaning of the body — has been more transformative for many Christians than any list of rules, because it gives them something worth protecting.",
  },
  {
    id: "tripp",
    name: "Paul David Tripp",
    era: "Born 1950",
    context: "Reformed counselor and author, Sex in a Broken World (2018)",
    bio: "Paul David Tripp is a Reformed pastor, counselor, and author who has spent decades helping people understand how the gospel speaks to the deepest struggles of human life. Sex in a Broken World (2018) is his treatment of sexuality — a pastorally rich, theologically grounded engagement with the sexual brokenness that every person experiences in some form. Tripp's distinctive contribution is identity: he argues that most sexual sin is an identity problem before it is a behavior problem. When we seek in sexual experience what only God can provide — acceptance, belonging, worth, comfort — we inevitably distort both the experience and our relationship with God. The remedy is not behavioral modification but identity renovation: understanding who you are in Christ, deeply and existentially.",
    quote: "The fundamental question of sexuality is not 'what should I do?' but 'who am I?' Your identity shapes your sexuality more than your decisions shape it.",
    contribution: "Tripp's pastoral approach addresses sexual sin at a deeper level than accountability and behavioral modification — he goes to the heart. His analysis of the idol factory at the center of sexual sin (what are you seeking in this that only God can give?) opens a path to genuine change that rule-keeping cannot. His work is particularly valuable for those who have tried accountability structures and found them insufficient — because the problem was never primarily behavioral.",
  },
];

const PRACTICES = [
  { title: "Confession Without Shame Spiral", desc: "Confess specifically and move on. Don't rehearse the sin or wallow in self-condemnation. 1 John 1:9 is not a suggestion — it is a promise. After confessing, receive the forgiveness. The enemy uses shame to keep you confessing rather than walking in grace.", icon: "🕊️" },
  { title: "Accountability That Actually Works", desc: "Accountability relationships fail when they are based on willpower and reporting. They work when they include real friendship, honest conversation about roots and triggers, and prayer that gets beneath behavior to heart issues. Find one person, not an app.", icon: "👥" },
  { title: "Understand Your Triggers", desc: "Sexual sin rarely comes out of nowhere. Common triggers: late nights alone, specific websites, certain emotional states (loneliness, stress, boredom, rejection), relational conflict. Map your pattern. Address the triggers, not just the behavior.", icon: "🗺️" },
  { title: "Renew Your Mind", desc: "Romans 12:2 is the sexual ethic strategy: transformation through mind renewal. What you consume shapes what you desire. A steady diet of sexual imagery in entertainment, social media, and advertising shapes desire toward lust. Deliberate choices about consumption matter.", icon: "🧠" },
  { title: "Community, Not Isolation", desc: "Sexual sin thrives in secrecy. The moment you tell one trusted person, the power of the secret breaks. This is not weakness — it is wisdom. Hebrews 3:13 speaks of daily encouragement against sin's deceitfulness. We need each other.", icon: "🤝" },
  { title: "A Theology of the Body", desc: "Read and internalize a positive theology of sexuality — not rules but a vision of what sex is for and why it is good and bounded. C.S. Lewis, Tim Keller, Christopher West, and Wesley Hill all write helpfully from different traditions.", icon: "📚" },
];

type Tab = "theology" | "struggles" | "voices" | "practices" | "videos";

export default function PurityPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [selectedStruggle, setSelectedStruggle] = useState<string | null>("Pornography");
  const [selectedVoice, setSelectedVoice] = useState("lewis");

  const struggle = STRUGGLES.find(s => s.name === selectedStruggle);
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🛡️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Sexuality & Purity</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The Christian sexual ethic begins not with rules but with a vision: the body is a temple, sex is a gift, and purity is not body-hatred but the conviction that the body is worth protecting because it is holy.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "struggles" as const, label: "Struggles", icon: "⚔️" },
            { id: "voices" as const, label: "Voices", icon: "💡" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "struggles" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 180, flexShrink: 0 }}>
              {STRUGGLES.map(s => (
                <button key={s.name} onClick={() => setSelectedStruggle(s.name)}
                  style={{ width: "100%", background: selectedStruggle === s.name ? `${s.color}15` : "transparent", border: `1px solid ${selectedStruggle === s.name ? s.color + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <span style={{ color: selectedStruggle === s.name ? s.color : TEXT, fontWeight: 700, fontSize: 14 }}>{s.name}</span>
                </button>
              ))}
            </div>
            {struggle && (
              <div style={{ flex: 1 }}>
                <div style={{ background: CARD, border: `1px solid ${struggle.color}30`, borderRadius: 14, padding: 24 }}>
                  <h2 style={{ color: struggle.color, fontWeight: 900, fontSize: 22, marginBottom: 16 }}>{struggle.name}</h2>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{struggle.reality}</p>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 12 }}>PRACTICAL STEPS</div>
                  {struggle.steps.map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${struggle.color}20`, border: `1px solid ${struggle.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: struggle.color, fontWeight: 800, fontSize: 12, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {VOICES.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", background: selectedVoice === v.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: selectedVoice === v.id ? GREEN : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 26 }}>
              <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: 0 }}>{voice.name}</h2>
              <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 16 }}>{voice.context}</p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{voice.bio}</p>
              <blockquote style={{ margin: "0 0 20px", padding: "12px 16px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}08`, borderRadius: "0 8px 8px 0" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{voice.quote}"</p>
              </blockquote>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Purity is not achieved through willpower alone. It requires community, structure, mind renewal, and an ongoing encounter with the grace that makes fresh starts possible.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian pastors on sexuality, purity, and the grace that enables holiness.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "VCBLVWKviso", title: "Paul Washer on Purity and Sexual Sin", channel: "HeartCry Missionary Society (Paul Washer)", description: "A candid and biblically grounded conversation about sexual sin, purity, and the power of the gospel to break strongholds and produce genuine holiness." },
                  { videoId: "HDGGeXiU4bo", title: "Fight for Purity — Sermon Jam", channel: "HeartCry Missionary Society (Paul Washer)", description: "Paul Washer calls Christians to fight for holiness with urgency — not from fear but from love, and not by willpower alone but through the Spirit's power." },
                  { videoId: "vb2VA6SYUMg", title: "Flee from Lust and Sexual Sin!", channel: "HeartCry Missionary Society (Paul Washer)", description: "A powerful sermon jam on the biblical call to flee sexual immorality — not manage it, not moderate it, but flee. Based on 1 Corinthians 6:18." },
                  { videoId: "LekUgWtWG2c", title: "The Holiness of God", channel: "HeartCry Missionary Society (Paul Washer)", description: "Understanding God's holiness is the foundation for any genuine pursuit of purity. This message reframes purity not as rule-keeping but as delight in a holy God." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
