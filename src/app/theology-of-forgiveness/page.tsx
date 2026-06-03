"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "jesus" | "process" | "hard" | "videos";

const THEOLOGY_ITEMS = [
  {
    title: "The Hebrew Roots",
    body: "Three Hebrew words map three dimensions of forgiveness. Nasa (נָשָׂא) means to lift up or carry away — 'Blessed is the one whose transgression is forgiven, whose sin is covered' (Ps 32:1), where forgiven translates nasa: the sin is lifted off the bearer. Kaphar (כָּפַר) means to cover or atone — the mechanism of the Day of Atonement (Lev 16), where the high priest lays hands on the goat and the community's sin is symbolically loaded onto the animal and sent into the wilderness. Salach (סָלַח) is God's exclusive word: it appears only with God as the subject. When Moses pleads for the rebellious people in the wilderness — 'Pardon the iniquity of this people' (Num 14:19-20) — the word is salach. Only God can salach. The three words together give the full texture: sin is a burden to be carried away, a defilement requiring covering, and an offense requiring a pardon only God can give.",
  },
  {
    title: "The Cross as Forgiveness",
    body: "The New Testament interprets the cross through the language of debt cancellation and release. Colossians 2:13-14 gives the most striking image: God has 'canceled the record of debt that stood against us with its legal demands. This he set aside, nailing it to the cross.' The ancient custom was to nail a paid debt certificate to a post — Paul applies the image to the cross itself as the cancellation receipt of every charge against us. Second Corinthians 5:19 frames it in terms of accounting: God was 'not counting their trespasses against them.' Ephesians 1:7 ties forgiveness directly to the blood of the cross: 'In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God's grace.' Forgiveness is not a theological abstraction; it is purchased at specific historical cost.",
  },
  {
    title: "Forgiveness as Release",
    body: "The Greek word for forgiveness in the New Testament is aphiemi (ἀφίημι) — to send away, to release, to let go. It is the same word used for releasing a prisoner, dismissing a debt, or setting someone free from an obligation. When Jesus says 'your sins are forgiven,' he is using the language of release: the claim is cancelled, the debt is sent away. This etymology gives the word its liberating weight. Forgiveness is not the pretense that the wrong did not happen — it is the release of the legal and relational claim the wrong created. The person who forgives gives up their claim to restitution or revenge, not their memory of the wrong. They release the debtor rather than denying the debt.",
  },
  {
    title: "Forgiveness ≠ Condoning",
    body: "Forgiveness is frequently misunderstood as the demand to minimize or excuse what was done. This confusion is both theologically wrong and pastorally harmful. What forgiveness is not: it is not denying the harm ('it wasn't that bad'), excusing the wrongdoing ('they couldn't help it'), pretending to forget ('let's never speak of this again'), or automatic reconciliation ('we're now fine'). What forgiveness is: the release of the debt ('I choose not to hold this against you'), the surrender of the right to revenge ('I will not be the instrument of your punishment'), and the transfer of the case to God's justice rather than one's own. You can name the harm with full seriousness — name it clearly, grieve it honestly — and still choose not to be controlled by it. The cross does not minimize the evil it absorbs; it absorbs it without being destroyed by it.",
  },
  {
    title: "Forgiving as Forgiven",
    body: "The logic of Christian forgiveness is grounded in what has been received. Matthew 18:21-35 makes this logic unavoidable: a servant who has been forgiven an unpayable debt — ten thousand talents, a sum beyond any realistic calculation — immediately seizes a fellow servant by the throat over a hundred denarii. The king's response is the indictment: 'Should you not have had mercy on your fellow servant, as I had mercy on you?' Ephesians 4:32 states the pattern directly: 'Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.' Colossians 3:13 uses the same structure: 'as the Lord has forgiven you, so you also must forgive.' The force of 'as' is not comparison but proportion. What God has forgiven in us infinitely exceeds anything we are asked to forgive in others. Unforgiveness in the forgiven is a kind of amnesia — it forgets what has been received.",
  },
  {
    title: "Vertical and Horizontal Forgiveness",
    body: "The Lord's Prayer places forgiveness at the intersection of the vertical and horizontal: 'Forgive us our debts, as we also have forgiven our debtors' (Matt 6:12). The following verses (6:14-15) press the point: 'If you forgive others their trespasses, your heavenly Father will also forgive you, but if you do not forgive others their trespasses, neither will your Father forgive your trespasses.' This reciprocal structure has produced serious theological debate. R.C. Sproul reads it as a genuine conditionality — God's forgiveness is contingent on our forgiving. John MacArthur emphasizes that the model prayer is pre-cross and the conditionality reflects the economy of the kingdom community. John Stott takes a mediating position: our forgiving is evidence that we have received forgiveness, not the condition of it. What is not in dispute: for Jesus, the capacity to extend forgiveness is inseparable from the experience of having received it. The person who cannot forgive raises questions about what they believe they have been forgiven.",
  },
];

const JESUS_EPISODES = [
  {
    id: "cross",
    title: '"Father, Forgive Them"',
    ref: "Luke 23:34",
    body: "The words from the cross — 'Father, forgive them, for they do not know what they are doing' (Luke 23:34) — are among the most theologically dense sentences in the New Testament. Scholars debate who 'them' includes: the Roman soldiers executing the sentence, the Jewish leaders who brought the charges, the crowds, or, in a wider application, all humanity whose sin makes the crucifixion necessary. The grammar does not resolve the question. What is clear is the act of intercession in extremity: Jesus, at the moment of maximum suffering and maximum injustice, turns his words not to accusation but to petition on behalf of those harming him. This is not passive resignation but active priestly intercession — the same role the Letter to the Hebrews describes as his ongoing ministry. The unknowing mentioned ('they do not know') is not a universal excuse but a specific observation about the soldiers carrying out orders and perhaps the leaders whose understanding of messiah could not accommodate crucifixion.",
  },
  {
    id: "paralytic",
    title: "The Paralytic",
    ref: "Mark 2:1-12",
    body: "When four men lower their paralyzed friend through the roof of a crowded house to reach Jesus, the first thing Jesus says is not about the paralysis: 'Son, your sins are forgiven' (Mark 2:5). Before any physical healing, Jesus addresses the spiritual-relational dimension. The scribes sitting in the room immediately recognize the theological claim: 'Who can forgive sins but God alone?' (Mark 2:7). Their objection is theologically precise — if salach belongs to God alone, this man is either divine or blasphemous. Jesus uses the accusation as the platform for his authority claim: he heals the paralysis as evidence that 'the Son of Man has authority on earth to forgive sins' (Mark 2:10). The sequence — forgiveness before healing — has significance for pastoral care: the connection between guilt/shame and physical symptoms is attested in both the Psalms (Ps 32:3-4) and modern psychology. Jesus treats the whole person, addressing the inner reality first.",
  },
  {
    id: "alabaster",
    title: "The Woman with the Alabaster Jar",
    ref: "Luke 7:36-50",
    body: "The scene is a dinner at the house of Simon the Pharisee. A woman known in the city as a sinner enters uninvited and anoints Jesus's feet with ointment, bathing them with her tears and wiping them with her hair. Simon's internal reaction is one of professional and moral contempt: 'If this man were a prophet, he would have known who and what sort of woman this is who is touching him.' Jesus answers the unspoken thought with a parable of two debtors — one forgiven five hundred denarii, one forgiven fifty — and asks which will love the creditor more. The theological point is then made explicit: 'Her sins, which are many, are forgiven — for she loved much. But he who is forgiven little, loves little' (Luke 7:47). The exegetical question is the 'for': is her love the basis of her forgiveness, or is her love the evidence that forgiveness has already happened? The parable's logic points to the second: her extravagant love is the fruit of having already been freed, not the price of her freedom.",
  },
  {
    id: "peter",
    title: "Peter's Restoration",
    ref: "John 21:15-19",
    body: "Peter has denied Jesus three times, with increasing vehemence, in the courtyard of the high priest. The risen Jesus meets him on the beach at dawn, and the restoration is structured to mirror the denial. Three times Jesus asks: 'Do you love me?' Three times Peter affirms it. Three times Jesus commissions him: feed my lambs, tend my sheep, feed my sheep. The repetition is not punitive but restorative — each question undoes one denial with an affirmation, each commission re-establishes what the denial had fractured. The Greek of the exchange is more textured than most translations show: the first two questions use agapas (do you love me with full commitment?), and Peter answers with philō (I am fond of you). The third question descends to Peter's word: 'Do you phileis me?' — a gracious accommodation to the level Peter can honestly claim after his failure. The pattern is pastorally significant: restoration after failure requires specific, named engagement, not general amnesty.",
  },
  {
    id: "seventy",
    title: "Seventy-Seven Times",
    ref: "Matt 18:21-22",
    body: "Peter comes to Jesus with what he likely thinks is a generous offer: 'Lord, how often will my brother sin against me, and I forgive him? As many as seven times?' Seven is already more than the rabbinical standard; Peter may be expecting approval. Jesus's answer is deliberately destabilizing: 'I do not say to you seven times, but seventy-seven times' — or in some manuscripts, seventy times seven: 490. The number is mathematically impossible to track as a limit, which is the point. Once you cannot keep count of how many times you have forgiven, you have left the domain of measured obligation and entered the domain of unlimited mercy. The idiom echoes Genesis 4:24, where Lamech boasts of seventy-sevenfold vengeance — Jesus inverts the logic of vengeance and makes it the measure of mercy instead. Unlimited forgiveness is the answer to unlimited offense.",
  },
];

const PROCESS_STEPS = [
  {
    n: 1,
    title: "Acknowledge the Harm",
    body: "The first movement in the forgiveness process is the refusal of minimizing. Name what was done with accuracy: not 'he was difficult' but 'he betrayed my trust'; not 'it was just words' but 'those words were designed to wound and they did.' Spiritual bypassing — jumping immediately to forgiveness without allowing the harm to be named — produces a false peace that does not last and often produces shame when the anger resurfaces. The harm must be witnessed before it can be released.",
  },
  {
    n: 2,
    title: "Feel the Anger Rightly",
    body: "Scripture does not require the suppression of anger as the price of forgiveness. 'Be angry and do not sin; do not let the sun go down on your anger' (Ps 4:4, Eph 4:26). Anger is the natural and appropriate response to injustice — it registers that something wrong has occurred, that the created order has been violated. The danger is not anger but anger that curdles into bitterness through unprocessed rumination. Skipping the anger produces a false forgiveness; allowing it to fester produces bitterness. The path is through the anger, not around it.",
  },
  {
    n: 3,
    title: "Grieve the Loss",
    body: "Serious harm involves loss: of trust, of safety, of innocence, of the relationship as it was or could have been, sometimes of years. Grief is the appropriate response to loss, and it needs time and space. The mourning process is not weakness or unfaith — it is the honest reckoning with what has been taken. The rush to forgiveness without grief bypasses the mourning that gives the forgiveness its weight. What has been lost should be named and mourned before it is released.",
  },
  {
    n: 4,
    title: "Choose to Forgive",
    body: "Forgiveness is a decision before it is a feeling. The choice to release the debt, to not pursue personal revenge, to surrender the right to hold the offense over the offender — this is an act of the will that precedes the emotions and often arrives long before the relief or peace that is associated with forgiveness. This decision may need to be made again and again as the feelings cycle back. Each renewal of the decision is itself forgiveness. The feelings will eventually follow the will, but the will goes first.",
  },
  {
    n: 5,
    title: "Pray for the Offender",
    body: "'Pray for those who persecute you' (Matt 5:44). This practice is counter-intuitive and often initially mechanical — the prayer may feel hollow or even dishonest. That is acceptable. The practice of praying for the one who harmed you works on the heart over time, gradually shifting the emotional landscape. It is nearly impossible to sustain prayer for someone and simultaneously sustain consuming hatred of them. The prayer does not require warmth; it begins with obedience and allows warmth to follow.",
  },
  {
    n: 6,
    title: "Release the Right to Revenge",
    body: "'Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, Vengeance is mine, I will repay, says the Lord' (Rom 12:19). The release of personal revenge is not the release of accountability — governing authorities remain God's instruments of justice (Rom 13:4). The release is of the internal claim: the fantasy of the offender's suffering, the rumination on what they deserve, the grip of bitterness as a form of control. Handing the case to God is not passive resignation; it is the transfer of the administration of justice to the One who handles it perfectly.",
  },
  {
    n: 7,
    title: "Trust the Process",
    body: "For serious harm, forgiveness is complete as a legal or relational act — the debt is released — but the emotional healing is ongoing and may take years. This is not failure. The scar is not the wound; the soreness of a healing wound is not the wound reopened. The recurrence of pain, anger, or grief after the forgiveness decision does not mean the forgiveness was not real — it means the healing is continuing. Be patient with the process. The difference between legal forgiveness and emotional healing is real, and both matter.",
  },
];

const HARD_ITEMS = [
  {
    title: "Forgiving When They're Not Sorry",
    body: "The most common and most painful forgiveness question: must I forgive someone who has shown no remorse, may not acknowledge the harm, and may not even be aware of it? The inner disposition of forgiveness — releasing bitterness, not pursuing personal vengeance — is required regardless of the offender's response, both because bitterness destroys the one carrying it and because God's command to forgive is not conditional on the offender's cooperation. The transactional forgiveness — the restoration of relationship and trust — appropriately awaits repentance. Jesus intercedes from the cross for those actively killing him (Luke 23:34). Joseph, before his brothers have any idea he is alive and long before they repent, has already done the interior work that allows him to say 'God meant it for good' (Gen 50:20). Forgiveness and reconciliation are distinct: the first is required; the second requires two willing parties.",
  },
  {
    title: "Forgiving Abuse",
    body: "The pastoral complexity of forgiveness in the context of abuse demands honesty that popular forgiveness teaching often avoids. Diane Langberg and Dan Allender, both of whom have spent careers working with trauma survivors, are clear: forgiveness does not mean staying in danger, maintaining contact with an abuser, remaining silent about the harm, or forgoing appropriate legal or protective action. The command to forgive does not override the command to protect the vulnerable — including oneself. The forgiveness journey in abuse contexts is longer, more complex, and requires skilled pastoral accompaniment rather than early pressure to 'just forgive.' The process may also include the recognition that what was experienced was not a failure to forgive but a failure to recognize and name abuse — and that accurate naming is the necessary precondition for any genuine forgiveness.",
  },
  {
    title: "Forgiving God",
    body: "People carry real anger at God — for unanswered prayer, for suffering, for the deaths of those they loved, for the apparent silence of heaven in the face of catastrophe. The language of 'forgiving God' is theologically complicated: God has not sinned, and the framework of debt and forgiveness does not technically apply. But the anger is real and spiritually significant. The Psalms model the practice of bringing raw anger directly to God without softening it for theological propriety: Psalm 22 ('My God, my God, why have you forsaken me?'), Lamentations ('The Lord is in the right, for I have rebelled against his word; but hear me, all you peoples, and see my suffering'), and the whole tradition of lament. Walter Brueggemann has argued that the lament psalms model a form of prayer that is essentially accusatory — bringing the case against God's apparent absence — and that this is a legitimate and necessary mode of faith. The journey is not from anger at God to forgiveness of God but from raw anger to lament to trust — which may take a long time.",
  },
  {
    title: "Self-Forgiveness",
    body: "Is self-forgiveness a biblical concept? The theological debate is real. Some argue the concept is absent from Scripture — forgiveness is a relational category requiring a party to forgive and a party to be forgiven, and the self cannot occupy both positions. Others argue that receiving God's forgiveness necessarily involves releasing one's own self-condemnation. First John 1:9 is the anchor: 'If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.' The reception of this forgiveness, taking it seriously as a declaration about one's actual standing, is in practice what self-forgiveness means. The danger runs in two directions: cheap self-forgiveness that bypasses genuine repentance and avoids the sorrow that real sin requires; and unending self-condemnation that refuses to believe what God has declared in Christ about the genuinely repentant person. Romans 8:1 — 'There is therefore now no condemnation for those who are in Christ Jesus' — is a statement of fact about status, not an emotion to be generated.",
  },
  {
    title: "Forgiving the Dead",
    body: "When the person who harmed you is dead — a parent, a sibling, a former partner — the usual path of forgiveness (naming the harm to the offender, receiving acknowledgment, offering or withholding forgiveness in relational context) is closed. The grief dimension is doubled: grief for the harm and grief for the closure that death has permanently foreclosed. The process of forgiveness toward the dead is necessarily internal and symbolic — naming the harm aloud (in therapy, in prayer, in writing), grieving what was taken and what will never be given, choosing to release the dead person from the debt even without any transaction between you. Some find significant help in letter-writing (unsent, or burned, or read aloud in a therapeutic context) or in formal rituals of release. The theological grounding is that forgiveness is primarily about the one doing the forgiving rather than the one being forgiven — it releases the living from the weight they carry.",
  },
  {
    title: "The Unforgivable Sin",
    body: "'Whoever speaks a word against the Son of Man will be forgiven, but whoever speaks against the Holy Spirit will not be forgiven, either in this age or in the age to come' (Matt 12:31-32). This text has caused more pastoral harm through misapplication than almost any other in the Gospels — the person who fears they have committed the unforgivable sin is, by the very fact of their fear, demonstrating that they have not. The sin Jesus describes is the specific and final rejection of the work of the Holy Spirit: the Pharisees watch Jesus cast out demons by the power of the Spirit and conclude that the power is satanic. It is not a moment of doubt, a sinful thought, a serious sin, or anything in the range of ordinary moral failure. The unforgivable sin is the hardened, deliberate, final attribution of the Spirit's work to the devil — a state that, by definition, produces no desire for forgiveness and no fear of having missed it. Anyone troubled by this text can be pastorally reassured: the trouble itself is evidence of the sensitivity to the Spirit that the sin destroys.",
  },
];

function AccordionItem({
  title,
  body,
  isOpen,
  onToggle,
}: {
  title: string;
  body: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ marginBottom: 10 }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: CARD,
          border: `1px solid ${BORDER}`,
          borderRadius: isOpen ? "10px 10px 0 0" : 10,
          padding: "14px 18px",
          color: TEXT,
          fontWeight: 700,
          fontSize: 14,
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
        }}
      >
        <span style={{ color: isOpen ? GREEN : TEXT }}>{title}</span>
        <span style={{ color: MUTED, flexShrink: 0, marginLeft: 12, fontSize: 18 }}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            background: BG,
            border: `1px solid ${BORDER}`,
            borderRadius: "0 0 10px 10px",
            borderTop: "none",
            padding: "18px 20px",
          }}
        >
          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{body}</p>
        </div>
      )}
    </div>
  );
}

export default function TheologyOfForgivenessPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [activeEpisode, setActiveEpisode] = useState<string>("cross");

  function toggle(key: string) {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Forgiveness" },
    { id: "jesus", label: "Jesus and Forgiveness" },
    { id: "process", label: "The Process of Forgiveness" },
    { id: "hard", label: "Hard Cases" },
    { id: "videos", label: "🎬 Videos" },
  ];

  const currentEpisode = JESUS_EPISODES.find((e) => e.id === activeEpisode) ?? JESUS_EPISODES[0];

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
        paddingTop: 80,
      }}
    >
      <Navbar />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1
            style={{
              fontSize: 34,
              fontWeight: 900,
              marginBottom: 10,
              letterSpacing: "-0.5px",
            }}
          >
            Theology of Forgiveness
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Forgiveness is one of Christianity&apos;s most demanding and most liberating teachings. We
            forgive because we have been forgiven — and the scale of what we have received should
            overwhelm every reason not to.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 36,
            background: CARD,
            borderRadius: 12,
            padding: 5,
            border: `1px solid ${BORDER}`,
            flexWrap: "wrap",
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: "1 1 auto",
                padding: "10px 14px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology of Forgiveness */}
        {activeTab === "theology" && (
          <div>
            {THEOLOGY_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                title={item.title}
                body={item.body}
                isOpen={!!expanded[`theology-${i}`]}
                onToggle={() => toggle(`theology-${i}`)}
              />
            ))}
          </div>
        )}

        {/* Tab 2: Jesus and Forgiveness */}
        {activeTab === "jesus" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            {/* Left list */}
            <div
              style={{
                width: 240,
                flexShrink: 0,
                position: "sticky",
                top: 20,
              }}
            >
              {JESUS_EPISODES.map((ep) => (
                <button
                  key={ep.id}
                  onClick={() => setActiveEpisode(ep.id)}
                  style={{
                    width: "100%",
                    background: activeEpisode === ep.id ? CARD : "transparent",
                    border: `1px solid ${activeEpisode === ep.id ? PURPLE : BORDER}`,
                    borderRadius: 10,
                    padding: "12px 14px",
                    color: activeEpisode === ep.id ? TEXT : MUTED,
                    fontWeight: activeEpisode === ep.id ? 700 : 500,
                    fontSize: 13,
                    cursor: "pointer",
                    textAlign: "left",
                    marginBottom: 6,
                    display: "block",
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{ marginBottom: 2 }}>{ep.title}</div>
                  <div
                    style={{
                      fontSize: 11,
                      color: activeEpisode === ep.id ? PURPLE : MUTED,
                      fontWeight: 600,
                    }}
                  >
                    {ep.ref}
                  </div>
                </button>
              ))}
            </div>

            {/* Right detail panel */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "28px 28px",
                }}
              >
                <div style={{ marginBottom: 16 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 900, color: GREEN, margin: "0 0 4px" }}>
                    {currentEpisode.title}
                  </h2>
                  <span
                    style={{
                      background: `${PURPLE}20`,
                      color: PURPLE,
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: 8,
                    }}
                  >
                    {currentEpisode.ref}
                  </span>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                  {currentEpisode.body}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: The Process of Forgiveness */}
        {activeTab === "process" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 28,
              }}
            >
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                These seven movements describe a realistic journey through forgiveness — not a
                formula to complete in sequence, but a map of the terrain. Most people cycle through
                them repeatedly before the forgiveness becomes settled.
              </p>
            </div>

            <div style={{ position: "relative", paddingLeft: 40 }}>
              {/* Vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: 15,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: `linear-gradient(to bottom, ${PURPLE}, ${GREEN})`,
                  borderRadius: 2,
                }}
              />

              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    marginBottom: 24,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 18,
                  }}
                >
                  {/* Step number circle */}
                  <div
                    style={{
                      position: "absolute",
                      left: -40,
                      top: 14,
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: i < 3 ? PURPLE : i < 5 ? `#4B7FBB` : GREEN,
                      color: i === 6 ? "#07070F" : "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      fontWeight: 900,
                      flexShrink: 0,
                      border: `2px solid ${BG}`,
                    }}
                  >
                    {step.n}
                  </div>

                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      padding: "18px 20px",
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        color: GREEN,
                        fontWeight: 800,
                        fontSize: 15,
                        marginBottom: 8,
                      }}
                    >
                      {step.title}
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Hard Cases */}
        {activeTab === "hard" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 20,
              }}
            >
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                These are the cases where easy forgiveness teaching breaks down — where honest
                pastoral engagement is required rather than simple answers.
              </p>
            </div>
            {HARD_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                title={item.title}
                body={item.body}
                isOpen={!!expanded[`hard-${i}`]}
                onToggle={() => toggle(`hard-${i}`)}
              />
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on forgiveness — its biblical foundation, its practice, and its hardest cases.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "k0W7h8zLztQ", title: "Guilt and Forgiveness: Pleasing God", channel: "Ligonier Ministries (R.C. Sproul)", description: "R.C. Sproul examines the central message of Scripture — forgiveness — and what it means for the guilty conscience to be fully and finally released." },
                  { videoId: "WZMY748_U1o", title: "Forgiveness, Resurrection, and Life Everlasting", channel: "Ligonier Ministries (R.C. Sproul)", description: "Because of our sin, all human beings share one desperate need: the need for forgiveness. Sproul traces how the resurrection grounds the promise of forgiveness." },
                  { videoId: "SWe1E8AMMr8", title: "Preaching to the Heart", channel: "The Gospel Coalition (Tim Keller)", description: "Tim Keller on how the gospel — including the message of forgiveness — must reach the heart, not just the mind, to produce genuine transformation." },
                  { videoId: "iEwtnsEuLJc", title: "John Piper and Tim Keller on Expositional Preaching", channel: "The Gospel Coalition", description: "Piper and Keller discuss preaching the whole gospel, including the difficult dimensions of sin, judgment, and the radical forgiveness that only the cross can provide." },
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
