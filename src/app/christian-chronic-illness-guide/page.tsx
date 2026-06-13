"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["The Body and Suffering", "Paul's Thorn in the Flesh", "When Prayers Aren't Answered", "Finding Meaning in Limitation", "How the Church Can Help", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Body and Suffering",
    heading: "The Body and Suffering: Living in a Body That Will Not Heal",
    paragraphs: [
      "Chronic illness confronts the Christian with the goodness and the brokenness of the body simultaneously. To live with a condition that does not resolve is to inhabit a paradox the faith has always held: the body is a good gift of God, and the body is a casualty of the fall. The same flesh that Scripture calls fearfully and wonderfully made (Ps 139:14) is the flesh that aches, fails, and betrays us. The chronically ill person cannot escape into a tidy spirituality that pretends the body does not matter, nor into a despair that concludes the body is worthless. They must hold both truths at once, in the very place where it costs the most to hold them.",
      "Christianity is not a religion that disdains the body &mdash; it affirms that God created the body good, that the Son took on a body in the incarnation, and that the final hope is not escape from the body but its resurrection. This sets Christianity sharply apart from the ancient philosophies that treated the body as a prison from which the soul longs to flee. The Christian creed confesses &ldquo;the resurrection of the body&rdquo; &mdash; not the immortality of a disembodied soul, but the redemption of the whole person, flesh included. The body matters to God; he made it, he entered it, and he intends to raise it. This means the suffering of the body is taken seriously in Christian theology, not waved away as irrelevant to the &ldquo;real&rdquo; spiritual self.",
      "Yet in a fallen world, bodies break down, and chronic illness &mdash; from autoimmune disease to chronic pain to degenerative conditions &mdash; means living in a body that does not work as it should, often with no cure and no end in sight. This is not the suffering of a wound that will heal, a fracture that will mend, an infection that will pass. It is the suffering of a condition that has become a permanent feature of life, woven into every day, shaping every plan. The person with lupus, with fibromyalgia, with multiple sclerosis, with chronic migraine, with long COVID, learns to live not toward a cure but within a limitation that has no foreseeable end.",
      "This is a particular kind of suffering: not the acute crisis that resolves, but the daily, grinding reality of limitation. The acute crisis has a certain clarity to it &mdash; it is dramatic, it calls forth support, it has a trajectory toward resolution. Chronic illness has none of these. It is unglamorous and exhausting precisely because it does not resolve; it simply continues, often invisibly, while the world expects the sufferer to have moved on. The relentlessness is its own form of affliction &mdash; the knowledge that tomorrow will bring the same pain, the same fatigue, the same limits, with no horizon of relief.",
      "The Christian faith does not minimize this. The Psalms are full of embodied suffering: &ldquo;My bones waste away&hellip; my strength is dried up&rdquo; (Ps 31, 32). Scripture does not offer the chronically ill a spirituality of denial. The psalmists describe their physical suffering in raw, specific, bodily terms &mdash; bones that ache, strength that fails, eyes that grow weak with grief, flesh that wastes away. This embodied honesty is a gift: it tells the sufferer that their experience is not beneath the notice of Scripture, that the God of the Bible is not embarrassed by the failing body, that complaint about physical suffering is a recognized and honored form of prayer.",
      "God does not ask the chronically ill to pretend their bodies are fine, but enters into the reality of embodied suffering with them. The incarnation is the ground of this assurance: the Son of God took on a body that grew tired, that hungered and thirsted, that bled and died. He knows from the inside what it is to inhabit vulnerable flesh. The chronically ill do not pray to a God who stands aloof from physical suffering but to one who has felt the weight of a body and bears its scars even now in his risen flesh. The wounds of the risen Christ are the eternal sign that embodied suffering is not foreign to God but taken up into the very life of God.",
      "To live faithfully in a body that will not heal, then, is not to despise the body, nor to pretend it is whole, but to hold it before God as it is &mdash; good, broken, beloved, and bound for resurrection. The chronically ill Christian carries in their own flesh a small parable of the whole creation, which Paul says &ldquo;groans&rdquo; as it waits for redemption (Rom 8:22-23). The groaning is real; so is the waiting; and so is the hope that the body which suffers now will one day be raised.",
    ],
  },
  {
    id: "Paul's Thorn in the Flesh",
    heading: "Paul's Thorn in the Flesh: Grace Sufficient in Unhealed Weakness",
    paragraphs: [
      "The most important biblical text for those with chronic conditions is Paul&rsquo;s &ldquo;thorn in the flesh&rdquo; (2 Cor 12:7-10). No other passage in Scripture speaks so directly to the experience of an affliction that does not go away despite earnest, repeated prayer. For the chronically ill Christian who has prayed for healing and not received it, who has watched others be healed and wondered why not them, Paul&rsquo;s words come not as cold comfort but as the testimony of an apostle who walked the same road and found, at the end of it, not a cure but something he came to value even more.",
      "Paul describes &ldquo;a thorn was given me in the flesh, a messenger of Satan to harass me.&rdquo; The language is striking. The thorn was &ldquo;given&rdquo; &mdash; a divine passive that hints God permitted it for a purpose &mdash; yet it was also &ldquo;a messenger of Satan,&rdquo; an instrument of harassment and torment. Paul holds these together without resolving the tension: the affliction is genuinely evil, an attack, and yet it is somehow within the permission and purpose of God. This refusal to flatten the mystery is itself instructive. The chronically ill need not decide whether their illness is &ldquo;from God&rdquo; or &ldquo;from the enemy&rdquo; in order to bring it to God; Paul did not.",
      "We do not know exactly what it was &mdash; perhaps a physical ailment, an eye condition, chronic pain. The text is deliberately unspecific, and this vagueness has been a gift to generations of sufferers, for it means the &ldquo;thorn&rdquo; can stand for almost any persistent affliction. Some have speculated it was a disease of the eyes, given Paul&rsquo;s reference elsewhere to writing in large letters and the Galatians&rsquo; willingness to give him their own eyes. Others suggest recurrent malaria, chronic pain, or some other bodily torment. What matters is not the diagnosis but the dynamic: an affliction in the flesh that Paul desperately wanted removed and that God chose not to remove.",
      "What matters is what happened: &ldquo;Three times I pleaded with the Lord about this, that it should leave me. But he said to me, &lsquo;My grace is sufficient for you, for my power is made perfect in weakness.&rsquo;&rdquo; Paul did not pray once and resign himself; he pleaded, three times, with the full earnestness of a man who believed God could heal and wanted to be healed. There is no rebuke for this praying; the desire for healing is right and good. But the answer he received was not the answer he sought. God did not remove the thorn. Instead, he promised sufficient grace within it &mdash; not deliverance from the affliction but his own presence and power supplied moment by moment in the midst of it.",
      "Paul&rsquo;s conclusion is staggering: &ldquo;Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me&hellip; For when I am weak, then I am strong.&rdquo; This is not stoic resignation or a brave face on a bad situation; it is a genuine reversal of values. Paul came to see his unhealed weakness not as the obstacle to Christ&rsquo;s power but as the very place where that power was displayed. The weakness became the venue of grace. This is not a denial that the thorn was painful; it remained &ldquo;a messenger of Satan.&rdquo; It is the discovery that the painful, unhealed place had become the dwelling of the power of Christ.",
      "This text does not promise healing; it promises something deeper &mdash; the presence and power of Christ precisely in the place of unhealed weakness. Here is where Paul&rsquo;s thorn parts ways with every theology that guarantees physical cure to those who believe rightly. Paul believed rightly; Paul prayed earnestly; Paul was not healed. The promise he received was better suited to reality than any guarantee of cure could be: not that the affliction would end, but that grace would be sufficient, that strength would be perfected in weakness, that he would never face the thorn alone or unsupplied.",
      "For the chronically ill, this is not a consolation prize but the heart of the gospel: God&rsquo;s power is displayed not by removing weakness but by sustaining the weak. The cross itself is the supreme instance of this pattern &mdash; the place where God&rsquo;s power looked most like weakness and accomplished the salvation of the world. The chronically ill Christian who lives with an unhealed thorn is not a second-class believer waiting for the &ldquo;real&rdquo; victory of healing; they are standing exactly where Paul stood, in the place where the power of Christ rests most fully upon the weak. Their endurance is not evidence of failed faith but a participation in the deepest logic of the gospel.",
    ],
  },
  {
    id: "When Prayers Aren't Answered",
    heading: "When Prayers Aren't Answered: The Wound of Unhealed Faith",
    paragraphs: [
      "One of the deepest wounds of chronic illness in the church is the theology of healing that implies that those who are not healed lack faith. This is a cruel and false teaching. It takes the genuine biblical truth that God heals and twists it into a guarantee that anyone who is not healed has failed &mdash; failed to believe enough, to confess enough, to claim the promise correctly. The chronically ill person, already bearing the weight of their illness, is handed an additional and crushing burden: the suspicion that their continued suffering is their own spiritual fault. This is a theological cruelty that the Bible itself does not support.",
      "Jesus healed many, but he did not heal all the sick in first-century Palestine. The Gospels record astonishing healings, and they reveal the in-breaking of God&rsquo;s kingdom in Jesus&rsquo;s ministry. But they do not record the emptying of every sickbed in Galilee. At the pool of Bethesda, surrounded by &ldquo;a multitude of invalids,&rdquo; Jesus healed one man and moved on (John 5:1-9). The kingdom had come, but it had not yet come in full. Even in the presence of the incarnate Son of God, not everyone who was sick was healed. To expect a guarantee of healing now that the Gospels themselves did not offer then is to misread the very ministry of Jesus.",
      "Paul, who healed others, was not himself healed of his thorn, and left Trophimus &ldquo;ill at Miletus&rdquo; (2 Tim 4:20). This detail is easy to overlook and devastating to the prosperity theology of healing. The apostle through whom God worked extraordinary miracles &mdash; even handkerchiefs that had touched him brought healing (Acts 19:11-12) &mdash; left a beloved coworker sick, unable to heal him. Timothy was counseled to take a little wine for his frequent stomach ailments (1 Tim 5:23), not promised instant cure. Epaphroditus was &ldquo;ill, near to death,&rdquo; and his recovery is described as God&rsquo;s mercy, not as a guaranteed entitlement (Phil 2:27). The New Testament itself is full of faithful, sick believers.",
      "Faithful prayer for healing is right and good &mdash; James 5 commends it &mdash; but God&rsquo;s answer is sometimes &ldquo;no&rdquo; or &ldquo;not yet&rdquo; or &ldquo;my grace is sufficient.&rdquo; James instructs the sick to call the elders, to be anointed with oil, to pray in faith (Jas 5:14-15), and this practice is to be honored, not abandoned. The Christian rightly prays for healing and rightly hopes for it. But to pray faithfully is not to obligate God to a particular answer. The God to whom we pray is free, wise, and good, and his &ldquo;no&rdquo; or &ldquo;not yet&rdquo; is not a sign of his absence or our failure but may be the answer of a love that sees what we cannot.",
      "The chronically ill must often grieve not only their illness but the well-meant but wounding words of fellow Christians who imply they could be healed if only they believed harder, confessed some hidden sin, or claimed the promise correctly. This second wound is sometimes harder to bear than the first. To be sick is one thing; to be told that one&rsquo;s sickness is the evidence of one&rsquo;s spiritual deficiency is another. These words, often spoken with sincere if misguided intent, isolate the sufferer, add guilt to pain, and drive a wedge between them and the community that should be their refuge. They are, in the end, the same error that Job&rsquo;s friends made &mdash; reasoning backward from suffering to secret sin.",
      "The honest biblical witness holds together genuine prayer for healing, the reality that not all are healed in this life, and the unshakable hope of final healing in the resurrection &mdash; without blaming the sufferer. This is the narrow path between two errors. On one side is the denial of God&rsquo;s power to heal, a faithless resignation that no longer asks. On the other is the false guarantee that makes healing automatic and blames the unhealed. The biblical path runs between them: pray boldly, expect nothing as an entitlement, grieve honestly when the answer is no, and hold fast to the certain hope that in the resurrection every disease will be undone forever. The sufferer is never to blame for the timing of that healing.",
      "There is a profound freedom in releasing the sufferer from the burden of their own cure. The chronically ill Christian who knows that their illness is not a verdict on their faith can pray for healing without the crushing fear that a &ldquo;no&rdquo; will expose some hidden failure. They can ask boldly and rest peacefully, entrusting the outcome to a God whose love is not measured by whether he heals them now but was proven once and for all at the cross.",
    ],
  },
  {
    id: "Finding Meaning in Limitation",
    heading: "Finding Meaning in Limitation: Worth Beyond Usefulness",
    paragraphs: [
      "Chronic illness strips away much of what the world counts as a meaningful life: productivity, independence, achievement, energy. The person who once defined themselves by what they accomplished finds those accomplishments slipping out of reach. Tasks that were once trivial become monumental; plans must be made around the unpredictable tides of symptoms; the calendar empties of the activities that once gave a sense of significance. This stripping is genuinely painful, a real loss to be grieved, and it forces a question that most people are able to avoid for much of their lives.",
      "This forces a profound theological question: what makes a life valuable? Most of us live by an unexamined answer &mdash; that our worth is bound up with what we produce, contribute, and achieve. We rarely test this assumption because, for most of our lives, we are productive enough to keep it comfortably out of sight. Chronic illness drags the question into the open and demands an answer, because the old answer now condemns the sufferer. If worth is usefulness, then the chronically ill are worth less &mdash; and something in the gospel rises up to say that this cannot be true.",
      "The world&rsquo;s answer &mdash; usefulness and output &mdash; condemns the chronically ill to a diminished existence. A culture that measures human value by economic productivity, independence, and visible contribution has no honest place for the person who cannot produce, who depends on others, whose contribution is invisible. Such a culture, taken to its logic, regards the chronically ill, the disabled, and the dying as problems to be managed rather than persons to be honored. This is not a neutral background assumption; it is a rival gospel, and it whispers to the sufferer that their life has lost its meaning along with its function.",
      "The gospel&rsquo;s answer is radically different: human worth is grounded in being made in God&rsquo;s image and loved by God, not in what one produces. The image of God is not a capacity that can be lost through illness; it is the dignity conferred on every human being by their Creator. The infant who has produced nothing, the person with advanced dementia who can no longer recognize their own family, the chronically ill person confined to bed &mdash; each bears the image of God as fully as the most accomplished and productive human alive. And the love of God, poured out in Christ, is not a reward for usefulness but a gift to the unworthy. The sick are loved by God exactly as much as the well.",
      "The contemplative tradition has always understood that a life of apparent inactivity &mdash; prayer, presence, endurance &mdash; can be among the most spiritually fruitful. The monastic vision of life held that the one who prays in a cell may be doing more for the world than the one who bustles in the marketplace. The chronically ill, often confined and limited, are positioned &mdash; if they will receive it &mdash; for exactly this kind of fruitfulness: a deepened life of prayer, an attentiveness to God forged in suffering, a ministry of intercession and presence that requires no physical strength. The world cannot see this fruit, but it is real, and it is gathered into the purposes of God.",
      "Joni Eareckson Tada, paralyzed in a diving accident at seventeen, has written that her wheelchair became the very thing that drew her into deeper dependence on God. Her testimony, given across decades of quadriplegia and later cancer and chronic pain, is not a denial of suffering but a witness from within it. She has said she would rather be in her wheelchair knowing God as she now knows him than be on her feet without that intimacy &mdash; not because the wheelchair is good, but because grace met her there in a way it might never have otherwise. Her life is a living argument that the limitation itself can become the place of encounter with God.",
      "This is not to romanticize suffering &mdash; illness is genuinely bad, an enemy &mdash; but to insist that even within it, by grace, meaning and even ministry can be found. The limitation itself can become the place of encounter with God. Scripture never calls sickness good; it is part of the brokenness Christ came to defeat, and it will be abolished in the end. To pretend otherwise is to lie about something God hates. But the God who brings light out of darkness and life out of death is able to bring meaning out of limitation &mdash; not by making the illness good, but by meeting the sufferer within it and weaving even this into a life that is not wasted but, in his hands, strangely fruitful.",
    ],
  },
  {
    id: "How the Church Can Help",
    heading: "How the Church Can Help Those Who Do Not Get Better",
    paragraphs: [
      "The church often does not know what to do with chronic illness because it does not resolve. The community of faith is well practiced at responding to crisis: the diagnosis, the surgery, the acute emergency. These have a shape &mdash; a beginning, a middle, and an expected end &mdash; that the church knows how to meet. Chronic illness has no such shape. It does not begin and end; it simply continues, and the church, lacking a script for the unresolving, often falls silent or drifts away, not from cruelty but from not knowing how to remain present to suffering that does not move toward resolution.",
      "The instinct is to pray for healing, bring a meal during the acute phase, and then &mdash; when the illness simply continues, year after year &mdash; to drift away, not out of malice but out of not knowing how to be present to ongoing, unresolving suffering. The casseroles arrive in the first weeks and then stop. The visits cluster around the diagnosis and then taper off. The prayer requests, once urgent, become routine and then disappear from the list. The chronically ill person, still sick a year later, two years later, five years later, finds that the community that surrounded them at the start has quietly moved on to the next crisis, leaving them more alone than before.",
      "What the chronically ill actually need is sustained presence rather than quick fixes. The most healing thing a church can offer is not a solution but a refusal to leave. The friend who keeps showing up in year three, who texts on the bad days, who does not need the illness to be interesting or improving in order to keep caring &mdash; this is the ministry of presence that the chronically ill need most and receive least. It asks little skill and great faithfulness: simply to remain, to remember, to keep coming back when the novelty has long worn off and the suffering remains.",
      "They also need practical help with the relentless logistics of life with illness. Chronic illness multiplies the ordinary burdens of living: meals to be made when there is no energy to cook, rides to medical appointments, help with housework and errands and the endless administration of insurance and prescriptions. These are not glamorous needs, but meeting them is a profound act of love. The church organized to provide sustained, practical help &mdash; not a two-week surge but a long, quiet commitment &mdash; functions as the body of Christ in the most literal sense, hands and feet doing for the sick what they cannot do for themselves.",
      "They need inclusion in the community in ways that accommodate their limitations &mdash; accessible spaces, flexible expectations, online connection when they cannot attend. Too often the chronically ill are excluded not by intention but by inattention: by buildings they cannot navigate, by events scheduled without regard for their capacities, by a tacit assumption that participation requires the energy and reliability they no longer have. A church that truly wants to include its chronically ill members will ask them what they need, will build flexibility into its life, and will create ways to remain connected even when physical attendance is impossible. Their absence from a service should not become absence from the community.",
      "Above all, they need to be treated as full members with gifts to offer, not merely as objects of ministry. The chronically ill are not only recipients of care; they are members of the body with gifts to give &mdash; wisdom forged in suffering, a ministry of prayer, an honesty about weakness and dependence that the strong desperately need to learn. To treat them only as projects to be served is to rob them of their dignity and the church of their gifts. The wisest churches receive from their chronically ill members even as they serve them, recognizing that those who suffer often see things about God and the gospel that the comfortable cannot.",
      "Above all, they need the church to resist the false theology that makes them responsible for their own healing, and instead to walk with them in honest lament and stubborn hope. The church that learns to love the chronically ill well learns something essential about the gospel: that we are saved not by our strength but by grace. To sit with someone in unresolved suffering, to lament with them without rushing them toward false resolution, to hold the hope of resurrection without using it to silence present grief &mdash; this is to embody the gospel itself, which meets us not in our strength but in our weakness, and which promises that the last word over every unhealed body belongs not to the illness but to the One who will raise the dead.",
    ],
  },
];

const videoItems = [
  { videoId: "Iwpi1Lm6dko", title: "Joni Eareckson Tada on Suffering and Hope" },
  { videoId: "ujQ7dRMclJk", title: "Chronic Illness and the Christian Faith" },
  { videoId: "Ty4lW2x9pTk", title: "When God Doesn't Heal — Faith and Chronic Illness" },
];

export default function ChristianChronicIllnessGuidePage() {
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
            Faith &amp; Chronic Illness
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Chronic Illness
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Living with chronic illness as a Christian &mdash; the theology of suffering and the body, Paul&rsquo;s thorn in the flesh, the wound of unanswered prayers for healing, finding meaning in limitation, and how the church can care for those who do not get better.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;My grace is sufficient for you, for my power is made perfect in weakness.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>2 Corinthians 12:9</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(107, 79, 187, 0.12)` : "transparent",
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>When You Are Weak, Then You Are Strong</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Chronic illness is a real enemy, and Scripture never pretends otherwise. But the unhealed weakness in your body is not a verdict on your faith &mdash; it is the very place where the power of Christ comes to rest. Paul pleaded three times and was not healed; he received instead a grace sufficient for every day. Your worth is not your usefulness, your healing is not your achievement, and the last word over your body belongs not to the illness but to the One who will raise the dead.</p>
        </div>
      </main>
    </div>
  );
}
