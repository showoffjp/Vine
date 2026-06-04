"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "steps" | "programs" | "community" | "videos";

const RECOVERY_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "The Gospel and Addiction — Tim Keller", channel: "Gospel in Life", description: "Keller addresses addiction as a spiritual and anthropological problem, and why the gospel offers what no program alone can." },
  { videoId: "ACZbpLkY8To", title: "Grace and Recovery — The Theological Foundations", channel: "Ligonier Ministries", description: "How the doctrines of grace, repentance, and sanctification apply to the specific struggles of addiction and recovery." },
  { videoId: "fJnGJN6laqE", title: "Celebrate Recovery — The Story and the Method", channel: "Saddleback Church", description: "An overview of the Celebrate Recovery program — how it integrates 12 steps with Scripture and why it works." },
  { videoId: "Z8lkuuhVkOI", title: "Redemption Groups — Theology-Driven Recovery", channel: "The Gospel Coalition", description: "What happens when you build a recovery community on deep gospel theology rather than behavior management." },
];

const theologyItems = [
  {
    id: "addiction",
    title: "What Is Addiction? A Biblical Diagnosis",
    content:
      "Addiction is the condition of being enslaved to a substance, behavior, or pattern that promises life but delivers death — and from which the person cannot free themselves by willpower alone. The biblical vocabulary for this is bondage: 'For whatever overcomes a person, to that he is enslaved' (2 Peter 2:19). Paul describes the same experience from the inside in Romans 7: 'I do not do what I want, but I do the very thing I hate.' This is not merely a description of general sin — it is the phenomenology of addiction. The addict wants to stop; they do not stop; they condemn themselves for not stopping; and they start again. Understanding addiction as bondage — rather than merely as bad choices or character weakness — is theologically important: bondage requires liberation, not just willpower.",
  },
  {
    id: "grace",
    title: "Grace as the Foundation of Recovery",
    content:
      "Moralistic approaches to recovery (try harder, be better, make different choices) fail because they misdiagnose the problem. Addiction is a condition of powerlessness — and the person in bondage cannot free themselves by the effort of the will that is already in bondage. AA's First Step is: 'We admitted we were powerless over alcohol — that our lives had become unmanageable.' This is a theological confession before it is anything else: it is the admission that I am not my own savior. Christian recovery adds the identity of the Higher Power: the God of grace who frees the captive (Luke 4:18), who came to seek and save the lost (Luke 19:10), and who is 'able to do far more abundantly than all we ask or think' (Ephesians 3:20). Grace is not a supplement to recovery effort — it is the engine.",
  },
  {
    id: "idolatry",
    title: "Addiction as Disordered Worship",
    content:
      "Tim Keller's insight that sin is essentially misdirected worship — 'turning good things into ultimate things' — illuminates addiction with particular force. Every addiction is structured like worship: the substance or behavior becomes the thing that promises salvation from pain, boredom, loneliness, anxiety, or shame. Alcohol promises relief from anxiety. Pornography promises intimacy without vulnerability. Social media promises significance without suffering. These are not random preferences — they are the worship of false gods that 'have mouths but cannot speak... those who make them become like them' (Psalm 115:5-8). Recovery is therefore not merely behavioral change — it is the re-ordering of worship. And re-ordered worship requires not just stopping the old thing but being given a new object of ultimate hope: the living God.",
  },
  {
    id: "community",
    title: "The Church as Recovery Community",
    content:
      "Addiction thrives in isolation. The shame and secrecy that addiction generates are precisely the conditions it needs to survive. The church's role in recovery is not to make the addict feel judged (which deepens shame and drives the behavior underground) but to create the conditions for the honesty that James 5:16 describes: 'Confess your sins to one another and pray for one another, that you may be healed.' The healing James promises is linked to the practice of honest, mutual confession. This is the counter-cultural heart of every effective recovery program: saying the true thing out loud in front of other people who are saying their true thing. The church that makes this possible — that normalizes honest confession, that provides community without requiring performance — is providing genuine medical-grade treatment.",
  },
  {
    id: "forgiveness",
    title: "Forgiveness, Shame, and the Gospel",
    content:
      "Shame is the deepest driver of addictive behavior. The addict who has done genuinely shameful things — hurt their children, destroyed their marriage, stolen from their employer — carries a weight of shame that no self-help program can lift. The gospel's specific address to shame is the heart of Christian recovery: 'There is therefore now no condemnation for those who are in Christ Jesus' (Romans 8:1). The cross takes shame: Jesus was stripped naked, publicly humiliated, and died with criminals — bearing specifically the shame of sin. The resurrection reverses it: the one who bore shame is now glorified. For the recovering person carrying the specific shameful memories of their addiction, the gospel is precisely targeted medical care: 'Your guilt is taken away, and your sin atoned for' (Isaiah 6:7).",
  },
  {
    id: "relapse",
    title: "Relapse as Part of Recovery",
    content:
      "One of the most theologically significant realities in recovery is the normality of relapse. Most people who recover from serious addictions do not recover in a straight line — they have episodes of relapse, sometimes severe, before stable sobriety is achieved. The church's posture toward relapse determines whether the recovering person stays connected to the community of grace or disappears in shame. The parable of the prodigal son (Luke 15) is instructive: the father does not say 'I told you so' or 'this is the third time.' He runs. He throws a party. He restores the son's dignity publicly. Recovery communities that treat relapse as disqualifying rather than as an occasion for renewed grace are re-creating the shame cycle that drove the addiction in the first place.",
  },
];

type Step = {
  id: string;
  number: string;
  title: string;
  text: string;
  scripture: string;
};

const steps: Step[] = [
  {
    id: "s1",
    number: "1",
    title: "Admission: I Cannot Do This Alone",
    text: "We admitted we were powerless over our addiction — that our lives had become unmanageable. This is the step that pride and self-sufficiency most resist. It is also the most theologically precise step: it names the condition of bondage accurately. The person who admits powerlessness is not weak — they are honest. And honesty about powerlessness is the beginning of encountering the Power that can actually help.",
    scripture: "Romans 7:18 — 'I have the desire to do what is right, but not the ability to carry it out.'",
  },
  {
    id: "s2",
    number: "2",
    title: "Hope: There Is a Power Greater Than My Addiction",
    text: "We came to believe that a Power greater than ourselves could restore us to sanity. For the Christian, this is not an abstraction — it is the resurrection of Jesus Christ. The same power that raised Christ from the dead (Ephesians 1:19-20) is available for the person in bondage. Hope is not optimism — it is confident expectation based on what God has already done in Christ.",
    scripture: "Ephesians 3:20 — 'Now to him who is able to do far more abundantly than all that we ask or think, according to the power at work within us.'",
  },
  {
    id: "s3",
    number: "3",
    title: "Surrender: Turning My Will and Life Over to God",
    text: "We made a decision to turn our will and our lives over to the care of God. This is conversion language — the complete reorientation of the person toward God rather than toward the addiction. It is not a one-time decision but a daily practice: 'I cannot. He can. I will let him.' Every morning is an opportunity for this surrender.",
    scripture: "Romans 12:1 — 'Present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.'",
  },
  {
    id: "s4",
    number: "4",
    title: "Inventory: Honest Self-Examination",
    text: "We made a searching and fearless moral inventory of ourselves. The Examen tradition — daily review of conscience before God — is the spiritual practice that matches this step. The inventory is not for self-condemnation but for honesty: naming specifically what has been done, what patterns exist, what relationships have been harmed. You cannot repent of what you have not named.",
    scripture: "Psalm 139:23-24 — 'Search me, O God, and know my heart! Try me and know my thoughts!'",
  },
  {
    id: "s5",
    number: "5",
    title: "Confession: Admitting to God, Self, and Another Person",
    text: "We admitted to God, to ourselves, and to another human being the exact nature of our wrongs. This is James 5:16 as spiritual practice. The act of speaking the true thing out loud to another person who receives it without shock or condemnation is specifically healing. The pastoral tradition calls this 'auricular confession.' The specific healing that occurs when shame is spoken aloud and met with grace rather than judgment is documented in therapy, theology, and recovery communities.",
    scripture: "James 5:16 — 'Confess your sins to one another and pray for one another, that you may be healed.'",
  },
  {
    id: "s6",
    number: "6",
    title: "Readiness: Being Willing to Change",
    text: "We were entirely ready to have God remove all these defects of character. Readiness is not achievement — it is willingness. The addict who has failed many times may struggle to believe change is possible. This step is simply: 'Am I willing to be willing?' Even that limited willingness is sufficient for God to work. The healing of the paralytic in John 5 begins with Jesus's question: 'Do you want to get well?'",
    scripture: "Philippians 2:13 — 'It is God who works in you, both to will and to work for his good pleasure.'",
  },
  {
    id: "s7",
    number: "7",
    title: "Humility: Asking God to Remove Shortcomings",
    text: "We humbly asked God to remove our shortcomings. This is prayer of absolute dependence — which is the posture of the entire spiritual life. 'Apart from me you can do nothing' (John 15:5). The person in recovery who prays this prayer daily is practicing the same prayer the mystics describe as the highest form of spiritual attainment: complete dependence on God.",
    scripture: "Psalm 51:10 — 'Create in me a clean heart, O God, and renew a right spirit within me.'",
  },
  {
    id: "s8",
    number: "8",
    title: "Amends: Making a List and Being Willing",
    text: "We made a list of all persons we had harmed, and became willing to make amends to them all. Addiction causes real harm to real people. Recovery that bypasses this truth is not full recovery. But 'willing to make amends' comes before 'making amends' — the willingness is the spiritual work; the action follows. The Zacchaeus model: 'Behold, Lord, the half of my goods I give to the poor. And if I have defrauded anyone of anything, I restore it fourfold' (Luke 19:8).",
    scripture: "Matthew 5:23-24 — 'If you are offering your gift at the altar and remember that your brother has something against you, first be reconciled.'",
  },
  {
    id: "s9",
    number: "9",
    title: "Action: Making Amends Where Possible",
    text: "We made direct amends to such people wherever possible, except when to do so would injure them or others. This step requires pastoral wisdom — some amends do more harm than good. The purpose of amends is the healing of relationships and the release of guilt and shame, not the transfer of the addict's discomfort to the person they harmed. A sponsor or pastor should be consulted for guidance on complex amends.",
    scripture: "Luke 19:8 — 'Behold, Lord, the half of my goods I give to the poor. And if I have defrauded anyone of anything, I restore it fourfold.'",
  },
  {
    id: "s10",
    number: "10",
    title: "Maintenance: Continuing Personal Inventory",
    text: "We continued to take personal inventory and when we were wrong promptly admitted it. Recovery is not a destination — it is a daily practice. The Daily Examen is the Christian form of this step: each evening, reviewing the day with God, naming failures and receiving grace, noticing patterns before they become crises. The person who practices daily examination rarely arrives at the spiritual crisis that requires dramatic intervention.",
    scripture: "1 Corinthians 11:28 — 'Let a person examine himself.'",
  },
  {
    id: "s11",
    number: "11",
    title: "Prayer and Meditation: Seeking God's Will",
    text: "We sought through prayer and meditation to improve our conscious contact with God, praying only for knowledge of his will for us and the power to carry that out. The spiritual disciplines of prayer, Scripture meditation, and silence are not extras in recovery — they are the maintenance practices of the new life. The person who abandons these practices is not maintaining sobriety; they are managing sobriety — a much more fragile condition.",
    scripture: "Colossians 3:16 — 'Let the word of Christ dwell in you richly.'",
  },
  {
    id: "s12",
    number: "12",
    title: "Service: Carrying the Message",
    text: "Having had a spiritual awakening as a result of these Steps, we tried to carry this message to others who still struggle, and to practice these principles in all our affairs. The person who has been freed by grace is uniquely qualified to carry grace to others in bondage. Paul's recovery testimony (1 Tim 1:15-16) is precisely structured as a witness: 'Christ Jesus came into the world to save sinners, of whom I am the foremost — but I received mercy... as an example to those who were to believe.' Your story is your ministry.",
    scripture: "2 Corinthians 1:4 — 'God comforts us... so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God.'",
  },
];

const programs = [
  {
    name: "Celebrate Recovery",
    color: "#3a7d56",
    founded: "1991",
    model: "12-step, Christ-centered",
    description:
      "Founded by John Baker at Saddleback Church (Rick Warren's church) in 1991. Celebrate Recovery is a 12-step program built around the Beatitudes rather than AA's 12 Steps — though the structure parallels AA. It explicitly addresses the 'Higher Power' as Jesus Christ and integrates prayer, Scripture, and worship into the recovery meeting format.",
    programs: [
      "Open Share Groups (same-issue support groups)",
      "Step Study (12-month curriculum through the steps)",
      "Solid Rock Groups (ongoing discipleship after steps)",
      "The Landing (teen program)",
      "Celebrate Recovery Jr. (children's program)",
    ],
    who: "Any 'hurt, habit, or hang-up' — not just substance addiction. Open to anyone struggling with: anger, codependency, eating disorders, financial issues, grief, sexual addiction, substance abuse.",
    website: "celebraterecovery.com",
  },
  {
    name: "Alcoholics Anonymous (AA) / Narcotics Anonymous (NA)",
    color: "#6B4FBB",
    founded: "1935 (AA), 1953 (NA)",
    model: "12-step, 'Higher Power'",
    description:
      "AA was founded in 1935 by Bill Wilson and Dr. Bob Smith. Its 12 Steps use 'Higher Power' language — deliberately non-specific to be inclusive. Many Christians in AA identify their Higher Power explicitly as Jesus Christ. The meetings, the sponsor relationship, and the step work have proven remarkably effective across decades and hundreds of thousands of participants.",
    programs: [
      "Open AA/NA meetings (anyone can attend)",
      "Closed meetings (only people with the specific addiction)",
      "Sponsorship (one-on-one relationship with someone in sustained recovery)",
      "Step work (working through the 12 Steps with a sponsor)",
      "Service (taking on meeting responsibilities)",
    ],
    who: "People struggling with alcohol addiction (AA) or drug addiction (NA). Works alongside Christian faith but does not require it.",
    website: "aa.org | na.org",
  },
  {
    name: "Reformers Unanimous",
    color: "#F59E0B",
    founded: "1996",
    model: "Biblical, church-based",
    description:
      "A church-based addiction recovery program rooted explicitly in Scripture. Reformers Unanimous (RU) was founded by Steve Curington and is based in many Independent Fundamental Baptist and other conservative evangelical churches. The program's distinctives: complete abstinence (not harm reduction), church accountability as the primary community of recovery, Scripture memorization as a central practice.",
    programs: [
      "Weekly Friday night meetings at host churches",
      "Discipleship curriculum through the Scriptures",
      "Scripture memorization program",
      "Family involvement component",
    ],
    who: "People recovering from substance addiction who want an explicitly Bible-based, church-centered program.",
    website: "reformersunanimous.com",
  },
  {
    name: "Pure Desire Ministries",
    color: "#EC4899",
    founded: "1992",
    model: "Sexual addiction recovery",
    description:
      "Founded by Ted Roberts after his own recovery from sexual addiction. Pure Desire specializes in sexual addiction and pornography recovery, with programs for men, women, spouses, and adolescents. Integrates neuroscience, trauma research, and biblical theology. One of the most respected evangelical ministries in the sexual addiction recovery space.",
    programs: [
      "Seven Pillars of Freedom (men's group program)",
      "Betrayal & Beyond (program for spouses of sex addicts)",
      "Unbreakable (teen boys program)",
      "Rescue (adolescent girls program)",
      "Church leader training and certification",
    ],
    who: "People (and their spouses/families) struggling with pornography and sexual addiction.",
    website: "puredesire.org",
  },
  {
    name: "Redeemed Recovery",
    color: "#3B82F6",
    founded: "2015",
    model: "Gospel-centered, Reformed",
    description:
      "A gospel-centered recovery ministry for the Reformed evangelical community. Redeemed Recovery emphasizes the theological roots of addiction as idolatry and uses a curriculum grounded in the doctrines of grace. Resources available for churches to launch their own recovery groups.",
    programs: [
      "Redeemed Recovery Groups (church-based)",
      "Gospel-centered 12-step curriculum",
      "Church planting support for recovery ministry",
    ],
    who: "People in theological contexts that prefer explicitly Reformed, grace-centered framing.",
    website: "redeemedrecovery.com",
  },
  {
    name: "Sober Truth on Predatory Marketing (STOP)",
    color: "#10B981",
    founded: "Ongoing",
    model: "Recovery support + advocacy",
    description:
      "Not a recovery program but an advocacy organization challenging predatory behavior in the rehab industry. Mentioned here as a reminder that the recovery industry has serious problems with unethical marketing and patient brokering. Always evaluate treatment centers carefully; church-based and non-profit models are often more trustworthy than for-profit rehabilitation centers.",
    programs: [
      "Resources for evaluating treatment centers",
      "Advocacy for ethical addiction treatment",
    ],
    who: "Families seeking to evaluate addiction treatment options.",
    website: "stoppr.org",
  },
];

const communityItems = [
  {
    id: "confession",
    title: "Creating a Culture of Honest Confession",
    content:
      "The church that creates conditions for honest confession will become a recovery community whether it intends to or not. This requires: pastoral leadership that models vulnerability (the pastor who shares their own struggles makes room for others to share theirs); explicit preaching on grace that names specific struggles, not only vague 'we all sin' platitudes; small groups structured for honest sharing rather than Bible information transfer; and a culture where asking for help is celebrated rather than stigmatized. The most effective addiction recovery churches are not those with the best programs — they are those with the most honest cultures.",
  },
  {
    id: "sponsors",
    title: "Sponsorship and Spiritual Direction",
    content:
      "The sponsor relationship — a person in sustained recovery walking alongside a person in early recovery — is one of the most effective interventions in addiction treatment. The church's equivalent is spiritual direction and discipleship mentoring. An effective sponsor: shares their own recovery story honestly; holds the person accountable without shaming; is available for crisis calls; guides the step work; celebrates milestones. A church that trains its members to serve as recovery sponsors and spiritual directors has built something more valuable than any formal program.",
  },
  {
    id: "family",
    title: "Supporting Families of Addicts",
    content:
      "The family of an addict is often as wounded and as in need of care as the addict themselves. Al-Anon (for families of alcoholics) and Nar-Anon (for families of drug addicts) exist because the family system around an addict develops codependent and enabling patterns that require their own recovery. Churches should: offer a Celebrate Recovery group for families; connect family members with support groups; recognize that the spouse who 'enables' is not simply complicit — they are traumatized. Pastoral care for families of addicts is a significant and often overlooked ministry.",
  },
  {
    id: "aftercare",
    title: "Aftercare and Long-Term Community",
    content:
      "Recovery is a lifelong process. The most dangerous moment in recovery is often the first year after significant sobriety — when a person may feel 'cured' and let down their guard. Long-term aftercare requires: ongoing meeting attendance (not just early recovery); a sustained relationship with a sponsor or accountability partner; continued engagement with the recovery community; and annual 'step inventory' to identify new patterns. The church that continues to invest in a person's recovery five years in — not just in the crisis — is providing genuinely excellent pastoral care.",
  },
  {
    id: "stigma",
    title: "Confronting Stigma",
    content:
      "The church has not always been a safe place for addicts. The stigma of addiction — the moral judgment that addicts are weak, irresponsible, or spiritually deficient — drives people away from the community that could most help them. Confronting stigma means: preaching explicitly about addiction as a condition of bondage, not simply bad choices; welcoming people in active addiction as well as those in recovery; having explicit policies against gossip about those who have shared their struggles; and naming specific addictions (not just vague 'sins') from the pulpit. Tim Keller's Redeemer Presbyterian in New York was known for its 'AA culture' — the willingness to be honest about specific struggles in a way that made it accessible to people the traditional church had excluded.",
  },
  {
    id: "chaplaincy",
    title: "Recovery Chaplaincy and Institutional Ministry",
    content:
      "Many people in addiction recovery pass through institutional contexts — treatment centers, hospitals, prisons, and jails. Christian chaplains in these contexts are uniquely positioned to offer pastoral care, the gospel, and community at moments of maximum crisis and openness. If your church supports a chaplain, ask specifically about their addiction recovery ministry. Consider whether any members with recovery backgrounds could serve as volunteer chaplains or chaplain assistants. Prison Fellowship's work (see /prison-ministry) overlaps significantly with addiction recovery — the incarcerated population has dramatically high rates of substance use disorders.",
  },
];

export default function ChristianRecoveryPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_christian-recovery_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  function toggle(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 40px" }}>
        {/* Header */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {["🔄 Recovery", "❤️ Healing"].map((tag) => (
            <span key={tag} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 13, color: MUTED }}>
              {tag}
            </span>
          ))}
        </div>
        <h1 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
          Christian Recovery Guide
        </h1>
        <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.7, margin: "0 0 32px", maxWidth: 680 }}>
          Recovery is not about getting your life back together. It is about discovering, perhaps for the first time, a life built on the grace of God — who frees the captive, restores the broken, and turns the testimony of the worst years into the most powerful witness.
        </p>

        {/* Stats banner */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 40 }}>
          {[
            { num: "21M", label: "Americans with substance use disorder" },
            { num: "1 in 7", label: "Americans will face substance use disorder in their lifetime" },
            { num: "40M+", label: "People in AA and NA worldwide" },
            { num: "70%+", label: "Celebrate Recovery participants not previously in church" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 16px", textAlign: "center" }}>
              <div style={{ color: GREEN, fontSize: 28, fontWeight: 800, marginBottom: 6 }}>{stat.num}</div>
              <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {(
            [
              { id: "theology", label: "Theology of Recovery" },
              { id: "steps", label: "The 12 Steps" },
              { id: "programs", label: "Programs" },
              { id: "community", label: "Church & Community" },
              { id: "videos", label: "▶️ Videos" },
            ] as { id: Tab; label: string }[]
          ).map((t) => (
            <button type="button"
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: `1px solid ${tab === t.id ? GREEN : BORDER}`,
                background: tab === t.id ? `${GREEN}18` : CARD,
                color: tab === t.id ? GREEN : MUTED,
                fontWeight: tab === t.id ? 700 : 400,
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: Theology */}
        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>A Biblical Theology of Recovery</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {theologyItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button type="button"
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", padding: "18px 20px", background: "transparent", border: "none", color: TEXT, textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 16, fontWeight: 600 }}
                  >
                    {item.title}
                    <span style={{ color: GREEN, fontSize: 20, fontWeight: 300 }}>{expanded[item.id] ? "−" : "+"}</span>
                  </button>
                  {expanded[item.id] && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.75, fontSize: 15 }}>{item.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: 12 Steps */}
        {tab === "steps" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>The 12 Steps: A Biblical Reading</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>
              The 12 Steps were developed by Bill Wilson and Dr. Bob Smith in Alcoholics Anonymous (1935). They are not explicitly Christian — but they are deeply compatible with Christian theology of grace, confession, and community. Here is each step with its biblical parallel.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {steps.map((step, i) => (
                <div key={step.id} style={{ display: "flex", gap: 0, marginBottom: 12 }}>
                  {/* Number column */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 48, flexShrink: 0 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${PURPLE}33`, border: `2px solid ${PURPLE}`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 800, fontSize: 14, zIndex: 1 }}>
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div style={{ width: 2, flex: 1, background: BORDER, minHeight: 20 }} />
                    )}
                  </div>
                  {/* Content */}
                  <div style={{ flex: 1, paddingLeft: 12, paddingBottom: 8 }}>
                    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 20px" }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 10px", color: TEXT }}>{step.title}</h3>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 12px" }}>{step.text}</p>
                      <div style={{ background: `${GREEN}11`, border: `1px solid ${GREEN}22`, borderRadius: 8, padding: "10px 14px" }}>
                        <div style={{ color: GREEN, fontSize: 13, fontStyle: "italic" }}>{step.scripture}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Programs */}
        {tab === "programs" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Recovery Programs</h2>
            <div style={{ display: "flex", gap: 24 }}>
              {/* Left: program list */}
              <div style={{ flex: "0 0 200px", display: "flex", flexDirection: "column", gap: 10 }}>
                {programs.map((p) => (
                  <button type="button"
                    key={p.name}
                    onClick={() => setSelectedProgram(p)}
                    style={{
                      padding: "12px 14px",
                      borderRadius: 10,
                      border: `1px solid ${selectedProgram.name === p.name ? p.color : BORDER}`,
                      background: selectedProgram.name === p.name ? `${p.color}18` : CARD,
                      color: selectedProgram.name === p.name ? p.color : TEXT,
                      textAlign: "left",
                      cursor: "pointer",
                      fontWeight: selectedProgram.name === p.name ? 700 : 400,
                      fontSize: 13,
                    }}
                  >
                    {p.name}
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{p.model}</div>
                  </button>
                ))}
              </div>

              {/* Right: program detail */}
              <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, position: "sticky", top: 24, alignSelf: "flex-start" }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 4px", color: selectedProgram.color }}>{selectedProgram.name}</h3>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Founded: {selectedProgram.founded} | Model: {selectedProgram.model}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: "0 0 16px" }}>{selectedProgram.description}</p>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Programs</div>
                  <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                    {selectedProgram.programs.map((prog) => (
                      <li key={prog} style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, marginBottom: 4 }}>{prog}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: `${selectedProgram.color}11`, border: `1px solid ${selectedProgram.color}33`, borderRadius: 8, padding: "12px 14px", marginBottom: 12 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 4 }}>Who It's For</div>
                  <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }}>{selectedProgram.who}</div>
                </div>
                <div style={{ color: GREEN, fontWeight: 600, fontSize: 14 }}>{selectedProgram.website}</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Community */}
        {tab === "community" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>The Church as Recovery Community</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {communityItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button type="button"
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", padding: "18px 20px", background: "transparent", border: "none", color: TEXT, textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 16, fontWeight: 600 }}
                  >
                    {item.title}
                    <span style={{ color: GREEN, fontSize: 20, fontWeight: 300 }}>{expanded[item.id] ? "−" : "+"}</span>
                  </button>
                  {expanded[item.id] && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.75, fontSize: 15 }}>{item.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Videos */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {RECOVERY_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
