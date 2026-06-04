"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "body" | "purity" | "questions" | "videos";

// ── TAB 1 DATA ─────────────────────────────────────────────────────────────
const THEOLOGY_ITEMS = [
  {
    title: "Sex as Creation Gift",
    verse: "Genesis 1–2",
    body: "Before any commandment was given, before the Fall introduced shame, God looked at his creation — including human sexuality — and called it very good. Genesis 2 gives us the picture: naked and unashamed (2:25). The Fall didn't introduce sex; it introduced shame about sex. That shame is part of what redemption undoes. Song of Solomon exists in the canon as explicitly erotic poetry — eight chapters of unashamed celebration of embodied desire. The church has sometimes been more embarrassed by it than God was when he inspired it. A theology that treats sex as something regrettable, necessary only for procreation, or spiritually inferior has already departed from Genesis. Sex is a creation gift, not a concession.",
  },
  {
    title: "The Body Is Not Evil",
    verse: "1 Corinthians 6:19–20",
    body: "Gnosticism was the ancient heresy: matter is evil, spirit is good. The way out of this evil material world is escape — through secret knowledge, asceticism, or death. Christianity is the opposite. The Incarnation means that God became flesh — not appeared to be flesh, not borrowed flesh temporarily, but became embodied. The Resurrection confirms it: Jesus rose bodily, and the disciples touched his wounds. Christians believe in the resurrection of the body — not escape from it. Paul's argument in 1 Corinthians 6 isn't 'your body doesn't matter' but the reverse: 'your body is a temple of the Holy Spirit' (6:19). The body matters enormously — which is why what we do with it matters. The Christian case for sexual ethics is not body-denying but body-affirming.",
  },
  {
    title: "Sex as Covenant Sign",
    verse: "Genesis 2:24",
    body: "'Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh' (Gen 2:24). The 'one flesh' language is covenant language — the kind of total, permanent self-giving that marked ancient covenants, often sealed in blood. Sexual union was designed to be the physical consummation of a covenantal commitment, not a casual transaction or recreational activity. John Paul II's Theology of the Body — developed through 129 Wednesday audiences — articulates this as the 'nuptial meaning of the body': the body in its very structure speaks a language of total self-gift. Christopher West's popular summaries of this work have helped a new generation of evangelicals engage with a rich Catholic tradition that many had overlooked. The context for sex (covenant) shapes its meaning. Outside that context, the physical act says something the rest of life doesn't back up.",
  },
  {
    title: "Celibacy as Witness",
    verse: "Matthew 19:10–12 / 1 Cor 7",
    body: "When Jesus' disciples heard his teaching on marriage, their response was: 'It is better not to marry' (Matt 19:10). Jesus doesn't correct them — he agrees that celibacy is a calling for some: 'those who have renounced marriage because of the kingdom of heaven' (19:12). Paul in 1 Corinthians 7 goes further: celibacy is a gift (charisma) — not a second-class consolation prize for those who couldn't find a spouse, but a distinct calling with distinct kingdom advantages. Celibacy is an eschatological sign: it points forward to the age to come, where there is no marriage (Matt 22:30), where the Church is the Bride and Christ is the Bridegroom. Wesley Hill's work on celibate gay Christian life recovers this vision for a generation that has been given almost nothing to make celibacy a live, beautiful option. Singleness is not waiting-room Christianity — it is a full, valid, honored calling.",
  },
  {
    title: "The Song of Songs",
    verse: "Song of Solomon",
    body: "The Song of Songs is one of the strangest books in the Bible — and one of the most important for a healthy theology of sexuality. It contains no explicit mention of God. It is unambiguously erotic. It celebrates female desire and agency. The woman speaks more than the man. The church has historically read it allegorically (Israel and God; Christ and the Church), and that reading has genuine precedent and depth. But the plain-sense reading — two lovers celebrating each other's bodies — is also right. Tremper Longman III's commentary (NICOT) argues for the literal-erotic reading as primary. Mike Mason's 'The Mystery of Marriage' uses the Song as a lens for understanding how erotic love in marriage mirrors the soul's longing for God. That both readings can be true says something profound: erotic love is not merely tolerated in Scripture — it is used as an image of the divine.",
  },
  {
    title: "Sexuality and Identity",
    verse: "Psalm 139",
    body: "Contemporary debates often conflate three distinct things: orientation (what one is attracted to), identity (what one calls oneself), and behavior (what one does). The Bible speaks clearly to behavior. It does not address orientation in modern psychological terms. It says everything about who we fundamentally are: image-bearers, beloved, named before birth, held in the knowledge of God. Preston Sprinkle's 'People to Be Loved' is the most careful evangelical engagement with these questions — combining genuine pastoral warmth with rigorous exegesis. The current evangelical debate spans a wide range: from those who hold a traditional sexual ethic while rejecting the culture-war framing, to those rethinking the biblical texts from the ground up. What is not in dispute is that every person — regardless of orientation or experience — bears the full dignity of the image of God and deserves to be treated accordingly.",
  },
];

// ── TAB 2 DATA ─────────────────────────────────────────────────────────────
const BODY_FRAMEWORKS = [
  {
    id: "jpii",
    title: "Theology of the Body (JPII)",
    color: GREEN,
    summary: "The body speaks a language of love.",
    detail: "John Paul II delivered 129 Wednesday audience addresses between 1979 and 1984, collected as 'Man and Woman He Created Them: A Theology of the Body.' It is the most sustained Catholic — arguably Christian — reflection on human sexuality ever written. The central insight is the 'nuptial meaning of the body': the human body in its very structure communicates self-gift. The sexual union of husband and wife is not merely a biological function but a sacramental sign of the total self-donation that characterizes the inner life of the Trinity itself. JPII argues that the body has its own 'language' — and that contraception, pornography, and casual sex all speak a lie with the body, performing the words of total self-gift while withholding the full meaning. While rooted in Catholic theology, the framework has been adopted widely by evangelical Protestants. Christopher West, Jason and Crystalina Evert, and others have made it accessible beyond Catholic circles. It offers what purity culture largely failed to give: a positive, beautiful vision of human sexuality, not merely a list of prohibitions.",
  },
  {
    id: "augustine",
    title: "The Good of Marriage (Augustine)",
    color: PURPLE,
    summary: "Children, fidelity, permanence — the classic three goods.",
    detail: "Augustine's treatise 'De bono coniugali' (On the Good of Marriage, 401 AD) articulated what became the classic Catholic framework: marriage has three goods — proles (children), fides (fidelity), and sacramentum (permanence/indissolubility). This was a genuinely pro-marriage argument in a cultural moment when many (Manichaean, gnostic, ascetic) voices were dismissing marriage as spiritually inferior. Augustine's framework shaped Western sexual ethics for over a millennium. Where it falls short: Augustine's own deep ambivalence about sexual desire (shaped partly by his pre-conversion life and partly by Neoplatonist assumptions) meant he often treated concupiscence — sexual desire — as itself disordered, something to be managed rather than redeemed. The Theology of the Body corrects this: JPII recovers the goodness of erotic desire as such. But Augustine's three goods remain a useful starting framework for thinking about what marriage is for.",
  },
  {
    id: "covenant",
    title: "Covenantal vs. Contractual",
    color: "#4F8FBB",
    summary: "Covenant marriage changes everything about sex.",
    detail: "Tim Keller's 'The Meaning of Marriage' is the clearest popular articulation of this distinction. A contract is conditional — 'I will fulfill my obligations as long as you fulfill yours.' A covenant is unconditional — 'I give myself to you without a performance clause.' Modern Western marriage is overwhelmingly understood as a contract: a mutually beneficial arrangement, terminable if the benefits cease. Covenant marriage is categorically different: it is a binding of selves that creates a new entity. This distinction matters for sexual ethics not as a rule but as a framework: if sex is the physical sign of a covenantal union, then casual sex isn't merely breaking a rule — it is performing a covenant-sign without covenant, like signing a contract with no intention of fulfilling it. The covenantal frame also provides the theological rationale for permanence, exclusivity, and why affairs are not merely impolite but a kind of deep betrayal of the self.",
  },
  {
    id: "willard",
    title: "Embodied Spirituality",
    color: "#F59E0B",
    summary: "The body is spiritual, not an obstacle to be overcome.",
    detail: "Dallas Willard was one of the most important Christian thinkers of the 20th century, and his major contribution to sexual ethics was indirect but profound: recovering the body as a spiritual entity, not a spiritual obstacle. In 'The Spirit of the Disciplines' and 'Renovation of the Heart,' Willard argues that the body is not merely a container for the soul — it is a participant in spiritual formation. Bodily practices form character. Habits live in the body. Disciplines like fasting, solitude, and chastity are not exercises in body-denial but investments in the body as a vehicle for holiness. This has direct implications for sexual ethics: the body's habits and patterns form us. Sexual practices aren't spiritually neutral recreational choices — they shape the person. Chastity, in this framework, is not a cage but a kind of training — the same way an athlete's physical discipline isn't deprivation but formation toward greater freedom and excellence.",
  },
  {
    id: "celibacy",
    title: "Celibacy and Singleness",
    color: "#BB4F7A",
    summary: "The Church as primary family; singleness as vocation.",
    detail: "Rodney Clapp's 'Families at the Crossroads' makes a provocative argument: the nuclear family has become an idol in American Christianity, and the church's near-silence on celibacy as a genuine vocation is a symptom of that idolatry. The New Testament presents the church as the primary family: 'brothers and sisters' is not metaphor but reality (Mark 3:34-35). Marriage and biological family are real goods, but they are penultimate goods — subordinate to the kingdom community. Wesley Hill's 'Washed and Waiting' is the most important recent evangelical book on celibacy — a gay Christian account of living faithfully as a celibate believer, written with extraordinary literary grace. Hill recovers the ancient tradition of 'spiritual friendship' (Aelred of Rievaulx) as a resource for celibate people who need deep, committed, embodied love without sexual expression. A church that offers nothing to its celibate members except 'wait for the right person' has failed them.",
  },
];

// ── TAB 3 DATA ─────────────────────────────────────────────────────────────
const PURITY_ITEMS = [
  {
    title: "What Went Wrong",
    verse: "Josh Harris recanted in 2019",
    body: "Josh Harris published 'I Kissed Dating Goodbye' in 1997 and it became the defining text of 1990s evangelical purity culture. In 2019, he publicly recanted it and announced he was no longer a Christian. The book itself was not uniquely dangerous — it was representative of a broader culture built on harmful metaphors: the used piece of tape that won't stick to anything, the chewed piece of gum, the rose with its petals torn off. These images were meant to communicate the value of purity but instead communicated that sexual sin (or even sexual experience without sin) permanently damages a person, reducing their worth. The framework was overwhelmingly directed at girls and women. Young men were taught that their temptation was their primary problem; young women were taught that their purity was their primary asset. Both distortions did damage.",
  },
  {
    title: "The Harm Done",
    verse: "Research and testimony",
    body: "The psychological research and personal testimony that emerged in the 2010s documented real harm. Linda Kay Klein's 'Pure: Inside the Evangelical Movement That Shamed a Generation of Young Women into Silence' is the most comprehensive account. Women reported shame responses that resembled PTSD symptoms — triggered by touch, by their own bodies, by intimacy in marriage. Couples who had 'done everything right' struggled to transition to healthy marital sexuality because they had been trained for years to associate sexual arousal with guilt and danger. Women who had experienced sexual assault were left carrying shame that the framework blamed them for. The burden was disproportionate: girls were told they were responsible for boys' temptation, that their dress was a stumbling block, that their worth was tied to their sexual history. This is not Christian sexual ethics — it is purity culture, and the distinction matters.",
  },
  {
    title: "What Was Right",
    verse: "1 Corinthians 6:18–20",
    body: "None of the above means that the underlying convictions were wrong. The church was right that sex is covenantal, that it carries moral and spiritual weight, that it forms us and is not spiritually neutral. It was right that sexual formation matters and that culture's 'whatever two consenting adults agree to' framework is insufficient. It was right that marriage is a holy thing worth protecting. It was right that pornography degrades, that hooking-up culture is built on lies about persons, and that there is wisdom in not giving away pieces of yourself before you are ready to give all of yourself. The failure of purity culture was not in its convictions but in its methods: shame, fear, and gender-biased enforcement of rules without roots in genuine theology. A better sexual ethic keeps the convictions and rebuilds the methods.",
  },
  {
    title: "Shame vs. Honor",
    verse: "1 Peter 2:9",
    body: "'You are a chosen people, a royal priesthood, a holy nation, God's special possession' (1 Peter 2:9). Identity-based purity says: you are precious, therefore you are worth protecting. Rule-based purity says: don't be dirty. The difference is not merely rhetorical — it is formative. A teenager who is told 'you are image-bearers of God, your body is the temple of the Holy Spirit, you are worth more than what the culture offers you' is receiving a gift. A teenager who is told 'don't have sex or you'll be a chewed piece of gum' is receiving a threat — and a lie. The Christian tradition's resources for this are rich: the imago dei, the Incarnation, the indwelling Spirit, the language of betrothal in Scripture. Shame management is a weak motivator and a poor discipleship strategy. Honor and identity are far more durable foundations.",
  },
  {
    title: "A Better Sexual Ethic",
    verse: "Romans 12:1–2",
    body: "Jenell Williams Paris's 'The End of Sexual Identity' is one of the most important books in this space — arguing that 'sexual identity' itself is a modern construction that the church has uncritically adopted, and that Scripture's categories are both richer and more demanding. Christine Gardner's 'Making Chastity Sexy' analyzes how abstinence movements have tried to re-brand chastity in market terms — with mixed results — and points toward a better framing. A better sexual ethic is theologically grounded (covenant, imago dei, eschatology), pastorally warm (grace-first, not shame-first), gender-equal in its demands and dignity, honest about complexity and failure, and capacious enough to hold both married and celibate people as first-class citizens of the kingdom. It begins not with 'don't' but with 'you are.'",
  },
  {
    title: "For Those Who've Been Hurt",
    verse: "1 Corinthians 6:11",
    body: "'And that is what some of you were. But you were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God' (1 Cor 6:11). The past tense is the grace. Whatever has happened — abuse survived, choices made, shame accumulated, damage done by the church itself — there is no sin, no experience, no history that puts a person outside the reach of that 'you were washed.' There is no such thing as 'sexual damage' in the sense purity culture sometimes implied — a permanent reduction in worth or capacity for love. There is trauma (real, worth treating, not to be minimized). There is sin (real, confessable, forgiven). There is grief (legitimate, to be honored). But there is no damage that outpaces grace. The healing of sexual shame is real, it is pastoral work, it often requires professional help, and the church's role is to be a place where healing is possible — not where the original wound was inflicted.",
  },
];

// ── TAB 4 DATA ─────────────────────────────────────────────────────────────
const QUESTION_ITEMS = [
  {
    title: "What does the Bible actually say about homosexuality?",
    icon: "📖",
    body: "There are six passages historically cited: Genesis 19 (Sodom), Leviticus 18:22 and 20:13, Romans 1:26-27, 1 Corinthians 6:9, and 1 Timothy 1:10. Robert Gagnon's 'The Bible and Homosexual Practice' is the most comprehensive traditional exegetical case; Matthew Vines' 'God and the Gay Christian' is the most careful revisionist case. The current evangelical debate is real and serious — not between people who take Scripture seriously and those who don't, but between careful exegetes who read the texts differently. The 'Side B' position — held by Wesley Hill, Greg Coles, and others — represents gay Christians who hold a traditional sexual ethic and choose celibacy, offering a third voice beyond the binary. Whatever one's exegetical conclusion, the pastoral imperative is clear: every gay person in your congregation is a full human being made in God's image, and the church's first word to them must be welcome, not warning.",
  },
  {
    title: "Is pornography a sin?",
    icon: "🔒",
    body: "Matthew 5:28 is the starting point: 'Anyone who looks at a woman lustfully has already committed adultery with her in his heart.' The neurological research on pornography's effects — dopamine pathway hijacking, desensitization, distorted expectations of real sex and real people — is increasingly robust and not contested. Pornography reduces people (mostly women) to objects, is fueled by an industry with documented exploitation and trafficking, and trains the viewer to consume persons rather than love them. The distinction between temptation and sin matters: being tempted by a billboard is not the same as pornography use, which involves deliberate, extended use. Resources: Covenant Eyes (accountability software), Pure Desire (recovery community), and Jay Stringer's 'Unwanted' (which treats pornography use as a symptom of deeper wounds, not merely a habit problem). Shame-based approaches have a poor track record; curiosity about what the attraction is serving tends to be more fruitful.",
  },
  {
    title: "What if I've already had sex before marriage?",
    icon: "🙏",
    body: "The answer is the same as to every other sin: 1 John 1:9, 1 Corinthians 6:11, and the full weight of the gospel. There is no asterisk on justification for sexual sin. There is no second tier of Christians who had to settle for less grace because their sin was in this category. The false idea that one has been 'damaged' — that past sexual experience permanently affects one's worth, one's purity before God, or one's capacity for a healthy marriage — is not Christian theology. It is a lie that has caused enormous harm and needs to be named as such. Moving forward means: genuine repentance where that's appropriate, honest conversation with a future spouse, and refusing the shame spiral that says 'I am what I've done.' You are what Christ has made you. That's the whole gospel.",
  },
  {
    title: "Is masturbation addressed in the Bible?",
    icon: "❓",
    body: "Honest answer: no, not clearly. The passage historically cited (Genesis 38:9-10 — Onan) is about coitus interruptus to avoid levirate duty and the specific sin condemned is his refusal of duty to his dead brother's wife, not the act itself. There is no New Testament passage that addresses it directly. This does not mean the topic is irrelevant to Christian ethics — Matthew 5:28 (lust), 1 Corinthians 6:12-13 (not mastered by anything), and the broader framework of bodily self-discipline all apply. The honest pastoral conversation acknowledges the lack of clear prohibition while taking seriously the questions of what it reinforces, whether it is bound up with pornography or objectifying fantasy, and how it relates to one's formation as a person. Rigid prohibition without biblical grounding tends to produce shame; dismissing it as trivial tends to avoid real questions. The goal is not a rule but wisdom.",
  },
  {
    title: "What about sexual trauma?",
    icon: "💛",
    body: "Not your fault. Full stop, no qualifications, no 'but.' Sexual trauma is something done to a person — it carries no moral weight for the person who experienced it. The shame that often attaches to survivors is one of trauma's cruelest features, and the church has a poor track record of either handling abuse well or supporting survivors. Healing is possible — genuinely, not merely theoretically. It typically requires professional care (trauma-informed therapist, not just pastoral counsel), community that can hold the weight, and time. Resources: GRACE (Godly Response to Abuse in the Christian Environment) for institutional accountability; 'Rid of My Disgrace' by Justin and Lindsey Holcomb for theological and pastoral engagement with sexual assault. The church's calling is to be a place where survivors are believed, protected, and accompanied — not re-victimized by silence, minimization, or demands for premature forgiveness.",
  },
  {
    title: "How do I talk to my kids about sex?",
    icon: "👨‍👩‍👧",
    body: "Start earlier than you think, use accurate language from the beginning, and build a framework before culture does. By age 8-10, children will have encountered explicit content online — on average, well before most parents have had 'the talk.' The goal is not a single conversation but an ongoing, open relationship where the topic is normalized rather than shameful. Age-appropriate means: for toddlers, correct anatomical terms; for 4-6 year olds, basic body safety and consent; for 7-10, how babies are made; for 11+, puberty, relationships, and values. Resources: 'God Made All of Me' (Justin and Lindsey Holcomb, ages 3-8); 'The Talk' (Luke Gilkerson); 'Passport2Purity' (FamilyLife, ages 10-12). The framework you want to give them: your body is good, sex is good, this is what it is designed for, you are worth protecting, and you can always come to me.",
  },
];

export default function ChristianSexualityPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_christian-sexuality_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [activeFramework, setActiveFramework] = usePersistedState("vine_christian-sexuality_active_framework", "jpii");

  const toggle = (key: string) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const framework = BODY_FRAMEWORKS.find(f => f.id === activeFramework) ?? BODY_FRAMEWORKS[0];

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "theology", label: "Theology of Sex", icon: "📖" },
    { id: "body", label: "Body & Soul", icon: "✝️" },
    { id: "purity", label: "Purity Culture", icon: "🌱" },
    { id: "questions", label: "Honest Questions", icon: "❓" },
    { id: "videos", label: "Videos", icon: "🎬" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* ── HEADER ─────────────────────────────────────────────────────── */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>💍</div>
          <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 10, color: TEXT }}>
            Christian Sexuality
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto", lineHeight: 1.75 }}>
            Sex is a creation gift, not a necessary evil. The body is not a cage for the soul — it is a temple of the Holy Spirit. A serious, non-prudish, theologically grounded exploration of what Christianity actually teaches.
          </p>
        </div>

        {/* ── TAB BAR ────────────────────────────────────────────────────── */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {tabs.map(t => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "10px 8px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* ── TAB 1: THEOLOGY OF SEX ─────────────────────────────────────── */}
        {activeTab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Christianity did not invent sexual shame — it inherited it. A recovery of the biblical vision of sexuality begins with Genesis, not with evangelical subculture. These {THEOLOGY_ITEMS.length} topics build a theological foundation that is frank, rich, and honest.
              </p>
            </div>
            {THEOLOGY_ITEMS.map((item, i) => {
              const key = `theology-${i}`;
              const isOpen = !!expanded[key];
              return (
                <div
                  key={key}
                  style={{
                    background: CARD,
                    border: `1px solid ${isOpen ? `${GREEN}40` : BORDER}`,
                    borderRadius: 12,
                    marginBottom: 12,
                    overflow: "hidden",
                  }}
                >
                  <button type="button"
                    onClick={() => toggle(key)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "18px 20px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: 12,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
                      <div style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: `${GREEN}18`,
                        color: GREEN,
                        fontSize: 13,
                        fontWeight: 900,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        {i + 1}
                      </div>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 16 }}>{item.title}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                      <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 11, fontWeight: 700 }}>
                        {item.verse}
                      </span>
                      <span style={{ color: MUTED, fontSize: 18 }}>{isOpen ? "−" : "+"}</span>
                    </div>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 20px" }}>
                      <div style={{ height: 1, background: BORDER, marginBottom: 16 }} />
                      <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>{item.body}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ── TAB 2: BODY AND SOUL ───────────────────────────────────────── */}
        {activeTab === "body" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Five theological frameworks for understanding the body, embodied love, and human sexuality — from ancient Augustine to contemporary Willard. Select a framework to explore it in depth.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              {/* Left: framework list */}
              <div style={{ width: 220, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {BODY_FRAMEWORKS.map(f => (
                  <button type="button"
                    key={f.id}
                    onClick={() => setActiveFramework(f.id)}
                    style={{
                      padding: "14px 16px",
                      borderRadius: 10,
                      border: `1px solid ${activeFramework === f.id ? f.color : BORDER}`,
                      background: activeFramework === f.id ? `${f.color}12` : CARD,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ color: activeFramework === f.id ? f.color : TEXT, fontWeight: 800, fontSize: 13, marginBottom: 4 }}>
                      {f.title}
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.4 }}>{f.summary}</div>
                  </button>
                ))}
              </div>
              {/* Right: detail panel */}
              <div style={{ flex: 1, background: CARD, border: `1px solid ${framework.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: framework.color, flexShrink: 0 }} />
                  <h2 style={{ color: framework.color, fontWeight: 900, fontSize: 20, margin: 0 }}>{framework.title}</h2>
                </div>
                <div style={{ height: 1, background: `${framework.color}20`, marginBottom: 20 }} />
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>{framework.detail}</p>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 3: PURITY CULTURE ──────────────────────────────────────── */}
        {activeTab === "purity" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                An honest reckoning with what purity culture got wrong — and what it was trying to protect — and a path toward a sexual ethic that is genuinely Christian: grace-first, body-affirming, and honest about the harm done.
              </p>
            </div>
            {PURITY_ITEMS.map((item, i) => {
              const key = `purity-${i}`;
              const isOpen = !!expanded[key];
              const accentColor = i < 2 ? "#BB4F7A" : i < 4 ? GREEN : PURPLE;
              return (
                <div
                  key={key}
                  style={{
                    background: CARD,
                    border: `1px solid ${isOpen ? `${accentColor}40` : BORDER}`,
                    borderRadius: 12,
                    marginBottom: 12,
                    overflow: "hidden",
                  }}
                >
                  <button type="button"
                    onClick={() => toggle(key)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "18px 20px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: 12,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
                      <div style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: accentColor,
                        flexShrink: 0,
                        marginLeft: 2,
                      }} />
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 16 }}>{item.title}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                      <span style={{ background: `${accentColor}18`, color: accentColor, padding: "2px 10px", borderRadius: 10, fontSize: 11, fontWeight: 700 }}>
                        {item.verse}
                      </span>
                      <span style={{ color: MUTED, fontSize: 18 }}>{isOpen ? "−" : "+"}</span>
                    </div>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 20px" }}>
                      <div style={{ height: 1, background: BORDER, marginBottom: 16 }} />
                      <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>{item.body}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ── TAB 4: HONEST QUESTIONS ────────────────────────────────────── */}
        {activeTab === "questions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Real questions deserve real answers — not deflection, not shame, not oversimplification. These are the questions people actually have, addressed with pastoral honesty and theological seriousness.
              </p>
            </div>
            {QUESTION_ITEMS.map((item, i) => {
              const key = `question-${i}`;
              const isOpen = !!expanded[key];
              return (
                <div
                  key={key}
                  style={{
                    background: CARD,
                    border: `1px solid ${isOpen ? `${PURPLE}50` : BORDER}`,
                    borderRadius: 14,
                    marginBottom: 14,
                    overflow: "hidden",
                  }}
                >
                  <button type="button"
                    onClick={() => toggle(key)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "20px 22px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: 14,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14, flex: 1 }}>
                      <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15, lineHeight: 1.4 }}>{item.title}</span>
                    </div>
                    <div style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      border: `1px solid ${isOpen ? PURPLE : BORDER}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isOpen ? PURPLE : MUTED,
                      fontSize: 16,
                      flexShrink: 0,
                      fontWeight: 700,
                    }}>
                      {isOpen ? "−" : "+"}
                    </div>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 22px 22px" }}>
                      <div style={{ height: 1, background: `${PURPLE}25`, marginBottom: 18 }} />
                      <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>{item.body}</p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Grace footer */}
            <div style={{
              marginTop: 32,
              background: `${GREEN}08`,
              border: `1px solid ${GREEN}25`,
              borderRadius: 14,
              padding: 28,
              textAlign: "center",
            }}>
              <p style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", marginBottom: 10 }}>
                A WORD BEFORE YOU CLOSE THIS
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 auto", maxWidth: 560 }}>
                Whatever question brought you here — curiosity, shame, pain, confusion, genuine theological interest — you are not disqualified from grace. Not by what you have done, not by what was done to you, not by what you feel. The gospel is not a reward for the sexually pure; it is medicine for the broken. Everyone qualifies.
              </p>
              <p style={{ color: MUTED, fontSize: 13, marginTop: 14, fontStyle: "italic" }}>
                &ldquo;And that is what some of you were. But you were washed, you were sanctified, you were justified.&rdquo; — 1 Corinthians 6:11
              </p>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on sexuality, marriage, and biblical ethics.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "WaYKyRLjxzI", title: "Sexuality and Christian Hope", channel: "Timothy Keller", description: "Tim Keller explores Christianity's revolutionary view of sex, singleness, and marriage — and why it offers more hope than the culture's alternatives." },
                  { videoId: "jUWnE6GeOiE", title: "Love and Lust", channel: "Timothy Keller", description: "A comprehensive biblical view of sexuality, desire, and what Scripture says about the difference between love and lust." },
                  { videoId: "ZACkRe_W4Gg", title: "Marriage for the Glory of God", channel: "Paul Washer / John Piper / Voddie Baucham", description: "Paul Washer, John Piper, and Voddie Baucham on the foundational biblical concept that marriage is God's doing and exists for his glory." },
                  { videoId: "XoxYPXqqO34", title: "The Meaning of Marriage — Session One", channel: "Timothy & Kathy Keller", description: "Tim and Kathy Keller teach the biblical framework for marriage from their widely-used Bible study series." },
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
      </main>
      <Footer />
    </div>
  );
}
