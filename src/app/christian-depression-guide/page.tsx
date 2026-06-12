"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEAL = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Depression in Scripture",
  "The Lament Psalms",
  "The Dark Night of the Soul",
  "Clinical Depression",
  "Hope and Resurrection",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface TabSection {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const tabSections: TabSection[] = [
  {
    id: "Depression in Scripture",
    heading: "Depression in Scripture",
    paragraphs: [
      "One of the most striking features of the Bible is how honestly it portrays the inner lives of its heroes &mdash; including their darkest moments. Far from presenting a sanitized portrait of unbroken faith, Scripture includes multiple accounts of figures who experienced what we would today recognize as depression: deep despair, exhaustion, suicidal ideation, and the sense of God&rsquo;s absence. This is not incidental to Scripture&rsquo;s message; it is part of the gospel&rsquo;s claim that God enters the full depth of human experience.",
      "The story of Elijah in 1 Kings 19 is one of the most psychologically realistic accounts of burnout and depression in the ancient world. It comes immediately after one of the greatest moments of prophetic triumph &mdash; the defeat of the prophets of Baal on Mount Carmel. And then, within days, Elijah is under a juniper tree asking to die: &ldquo;It is enough; now, O Lord, take away my life, for I am no better than my fathers&rdquo; (1 Kings 19:4). The profile is recognizable: the crash after extraordinary exertion, the isolation, the suicidal ideation, the distorted self-assessment (&ldquo;I alone am left&rdquo;). God&rsquo;s response is not a rebuke, a theological lecture, or a call to stronger faith. He sends an angel. The angel touches Elijah and says: &ldquo;Arise and eat, for the journey is too great for you.&rdquo; Food. Rest. Gentle questioning. Physical care precedes spiritual renewal. This is the God of depression.",
      "Jeremiah&rsquo;s laments are among the rawest material in all of Scripture. In Jeremiah 20:14-18, the prophet curses the day of his birth: &ldquo;Cursed be the day on which I was born! The day when my mother bore me, let it not be blessed!&rdquo; This is not metaphor; it is the expression of a man who has reached the limits of his endurance. Job, in chapter 3, speaks a similar dark wish: &ldquo;Why did I not die at birth, come out from the womb and expire?&rdquo; These are the words of someone for whom life has become unbearable. They are in Scripture not as warnings but as testimony: God can receive the full weight of human despair.",
      "Psalm 88 stands in its own category among the Psalms. It is the only lament that ends without resolution &mdash; no turn to praise, no affirmation of trust, no &ldquo;yet I will hope in God.&rdquo; The psalmist Heman begins, &ldquo;O Lord, God of my salvation; I cry out day and night before you&rdquo; (v.1), and ends: &ldquo;Darkness is my closest friend&rdquo; (v.18, NIV). The final word of the psalm is darkness. This is canonical Scripture. The church did not excise it because it was too honest. It remains in the Psalter as testimony that there are seasons of human experience where the arc does not bend toward resolution &mdash; and God is still addressed in them.",
      "Jonah&rsquo;s death wish in Jonah 4:3 &mdash; &ldquo;Therefore now, O Lord, please take my life from me, for it is better for me to die than to live&rdquo; &mdash; comes not from tragedy but from anger and disappointment. Depression&rsquo;s triggers are not always what we expect. Paul&rsquo;s &ldquo;thorn in the flesh&rdquo; in 2 Corinthians 12:7-10 suggests chronic suffering that God, three times asked, chose not to remove: &ldquo;My grace is sufficient for you, for my power is made perfect in weakness.&rdquo; The sufficiency of grace is not the absence of the thorn. Scripture normalizes dark emotion without celebrating it &mdash; it neither condemns those who cry out in despair nor encourages them to remain there. It simply tells the truth about what human life can look like, and shows a God who does not turn away from it.",
    ],
  },
  {
    id: "The Lament Psalms",
    heading: "The Lament Psalms",
    paragraphs: [
      "More than one-third of the 150 Psalms are laments &mdash; poems of complaint, grief, confusion, accusation, and desperate petition addressed to God. This is the largest single genre in the Psalter, and the one the contemporary church has most thoroughly suppressed. In a culture of praise songs and victory testimonies, the lament psalm is almost never sung on Sunday morning. This is a significant pastoral failure, because lament is the biblical practice the depressed, the grieving, and the suffering most need.",
      "The anatomy of biblical lament follows a recognizable pattern, though not a rigid formula: address (the psalmist speaks to God, not about him), complaint (the honest statement of what is wrong), petition (the specific request for God to act), expression of trust (often introduced by &ldquo;yet&rdquo; or &ldquo;but&rdquo;), and vow (a commitment to praise when deliverance comes). This structure is important: lament moves from complaint to trust not by suppressing the complaint but by refusing to let it have the last word. The movement is honest, not performed.",
      "Psalm 22 is the most theologically significant lament in the Psalter. It begins, &ldquo;My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?&rdquo; (v.1). These are the words Jesus quotes from the cross (Matthew 27:46; Mark 15:34). This is not accidental. Jesus, in his dying, reaches for the words of a depressed psalmist &mdash; connecting his suffering to the full tradition of human anguish held within the Psalter. The God-forsakenness Jesus experiences on the cross is not a new, unprecedented horror; it is the entry of God himself into the kind of suffering the psalmists had cried out about for centuries. Psalm 22 ends in praise and vindication (vv.24-31), but the path runs through the valley of abandonment.",
      "Psalm 88 demands separate attention because of its anomaly: it ends in darkness. &ldquo;I am a man who has no strength&rdquo; (v.4), &ldquo;You have put me in the depths of the pit&rdquo; (v.6), &ldquo;Your wrath has swept over me&rdquo; (v.16). Heman&rsquo;s final word, after thirty years of walking with God, is darkness. This psalm is not a failure of faith &mdash; it is faith expressing itself in the only language available in that moment: honest complaint to a God still being addressed. The very act of crying out to God is itself an act of faith, even when the cry is one of abandonment. Psalm 88 gives the church permission to stop manufacturing resolution it does not have.",
      "Why does the church need to recover lament as a valid spiritual practice? Because when lament is absent, suffering people have two options: perform faith they do not feel (spiritual bypassing), or conclude that their faith is inadequate and leave quietly. Both outcomes are tragic. The presence of lament in Scripture signals that God has anticipated seasons when his people cannot muster praise, when the darkness is real and unresolved, and that he has provided language for those seasons. Lament is not the absence of faith; it is faith refusing to disconnect from God even when disconnection would be more comfortable.",
      "The danger of praise-only worship cultures is not simply that they are emotionally one-dimensional. It is that they communicate implicitly, powerfully, and falsely that God is most present in victory, that depression is a sign of inadequate faith, and that the suffering person should sort herself out before returning to the community. This is the inverse of the gospel. Jesus is present most explicitly &mdash; most shockingly, most concretely &mdash; in the cry of dereliction: &ldquo;My God, my God, why have you forsaken me?&rdquo; The church that cannot lament cannot reach the people in Psalm 88.",
    ],
  },
  {
    id: "The Dark Night of the Soul",
    heading: "The Dark Night of the Soul",
    paragraphs: [
      "John of the Cross (1542-1591) was a 16th-century Spanish Carmelite mystic, poet, and theologian whose two major works &mdash; <em>The Dark Night of the Soul</em> and <em>The Ascent of Mount Carmel</em> &mdash; describe with extraordinary precision the interior spiritual experience he called the dark night. Written partly in prison, where he was held by his own religious order for his reform efforts, the texts remain the most sophisticated account in Christian spirituality of what happens when God seems to withdraw from a soul that has previously known his presence.",
      "John distinguishes two phases of the dark night. The dark night of the senses is the first: a withdrawal of spiritual consolations &mdash; the felt sense of God&rsquo;s presence, the joy of prayer, the emotional warmth of devotional life. The person who has previously found prayer easy, Scripture alive, and worship moving suddenly finds all of these flat, dry, and apparently empty. This withdrawal, John argues, is not punishment or abandonment but a form of divine weaning: God draws the soul away from its dependence on spiritual feelings so that it can learn to rest in faith rather than feeling.",
      "The dark night of the spirit is deeper and rarer: an experience of apparent divine absence that touches the soul at its foundations &mdash; a sense of unworthiness, of being rejected by God, of the complete inadequacy of one&rsquo;s spiritual life. Thomas Merton described this as the place where all the usual supports of religious life have been stripped away and the soul is left with nothing but naked faith. This is not depression, strictly speaking &mdash; though it may accompany depression, and distinguishing between them requires pastoral wisdom and sometimes clinical discernment.",
      "The purpose of the dark night, in John&rsquo;s account, is purification and union: God removes what is merely human in our approach to him &mdash; the consolations, the religious feelings, the ego satisfaction of spiritual experience &mdash; so that what remains is a purer love, less dependent on what faith makes us feel and more anchored in who God is. Teresa of Avila&rsquo;s <em>Interior Castle</em>, written by John&rsquo;s colleague and collaborator, maps the same journey: the soul moving through successive &ldquo;dwelling places&rdquo; toward the innermost room where union with God is found, often through sustained periods of darkness and dryness.",
      "The most striking modern testimony to the dark night is the posthumous publication of Mother Teresa&rsquo;s private letters in <em>Come Be My Light</em> (2007). The letters, written to her spiritual directors over five decades, reveal that from shortly after she began her work in the slums of Calcutta in 1948 until her death in 1997 &mdash; fifty years &mdash; she experienced what she described as almost complete spiritual darkness: the absence of God&rsquo;s felt presence, the silence of heaven, the sense of God&rsquo;s rejection. &ldquo;In my soul I feel just that terrible pain of loss, of God not wanting me, of God not being God, of God not really existing.&rdquo; She continued her ministry regardless. The woman whose face has become synonymous with compassion in action was sustained, for fifty years, by naked faith rather than felt experience. The dark night is not a sign of spiritual failure.",
      "The gift of darkness, in the contemplative tradition, is that it teaches the soul to love God for himself rather than for the experiences he provides. It is the spiritual analogue of the maturing of human love: the love that survives the loss of romantic feeling, the long fidelity that remains when the emotion has given way to something deeper. Thomas Merton wrote: &ldquo;Do not be too quick to assume your enemy is your enemy. Perhaps he is your friend. Your darkness may be hiding a light.&rdquo; The dark night does not end faith; for those who persist through it, it deepens faith beyond what consolation could have produced.",
    ],
  },
  {
    id: "Clinical Depression",
    heading: "Clinical Depression",
    paragraphs: [
      "The difference between sadness, grief, and clinical depression is one of the most important distinctions a pastor, counselor, or friend can understand. Sadness is a normal emotional response to loss, disappointment, or pain &mdash; it is proportionate to its cause, it resolves as circumstances change or time passes, and it does not impair global functioning. Grief is sadness in response to significant loss &mdash; deeper, longer, requiring a process, but still essentially proportionate and ultimately resolving. Clinical depression &mdash; Major Depressive Disorder (MDD) &mdash; is categorically different: a persistent, impairing condition that does not resolve with changed circumstances, is not proportionate to identifiable cause, and is characterized by a cluster of symptoms that affect the whole person.",
      "The diagnostic criteria for MDD (DSM-5) require five or more of the following symptoms, present most of the day nearly every day for at least two weeks, representing a change from previous functioning: depressed mood; markedly diminished interest or pleasure in almost all activities (anhedonia); significant weight loss or gain, or decrease or increase in appetite; insomnia or hypersomnia; psychomotor agitation or retardation; fatigue or loss of energy; feelings of worthlessness or excessive or inappropriate guilt; diminished ability to think or concentrate; recurrent thoughts of death or suicidal ideation. At least one of the first two symptoms must be present. The condition must cause significant distress or impairment in social, occupational, or other areas of functioning.",
      "The neuroscience of depression has advanced significantly in the past three decades. While the early &ldquo;chemical imbalance&rdquo; model (depression as serotonin deficiency) was always an oversimplification, the neurobiological dimension of depression is real: differences in serotonin, dopamine, and norepinephrine transmission; reduced activity in the prefrontal cortex (the seat of executive function, planning, and emotional regulation); heightened activity in the amygdala (the threat-detection center); reduced hippocampal volume (affecting memory and stress regulation). Critically, the brain can heal: antidepressant medications, effective psychotherapy, exercise, and sleep all demonstrate measurable neuroplastic effects &mdash; they change the brain&rsquo;s structure and function, not just its subjective experience.",
      "Why is telling someone with clinical depression to just pray more pastoral malpractice? Because clinical depression involves a brain that is not functioning normally &mdash; one in which the capacity to feel hope, experience pleasure, sustain attention, and regulate emotion is impaired at a neurological level. Telling a clinically depressed person to try harder at spiritual practices is like telling a person with a broken leg to walk in faith. The intention may be kind; the effect is harm. It delays appropriate treatment, deepens shame, and communicates that the person&rsquo;s suffering is a spiritual failure rather than a medical condition requiring care.",
      "The role of therapy is well-established in the treatment of depression. Cognitive Behavioral Therapy (CBT) is the most researched psychotherapy for depression, addressing the distorted thought patterns that both accompany and perpetuate depressive episodes. Acceptance and Commitment Therapy (ACT) works with values and psychological flexibility rather than thought challenge. Interpersonal therapy addresses the relational dimensions of depression. All three have strong evidence bases. The CCEF (Christian Counseling and Educational Foundation) has developed an approach to biblical counseling that takes both Scripture and clinical research seriously &mdash; a resource particularly valued in reformed and evangelical communities.",
      "Antidepressants are not a lack of faith. This bears repeating with clarity: medication for depression is not a spiritual compromise, a sign of insufficient trust, or a bypass of divine healing. It is a legitimate medical treatment for a legitimate medical condition. Many Christians, raised in traditions that implicitly or explicitly treated mental illness as primarily a spiritual problem, carry significant shame about taking psychiatric medication. This shame has no theological warrant. The brain is part of the body; caring for it medically is part of the stewardship of the life God has given. Many people find that antidepressants reduce depression to a level where spiritual practices and therapy can take hold &mdash; the medication creates the neurological conditions in which other forms of healing can occur.",
    ],
  },
  {
    id: "Hope and Resurrection",
    heading: "Hope and Resurrection",
    paragraphs: [
      "The Christian hope is not optimism &mdash; the sunny disposition of someone who expects things will probably work out. It is anchored expectation: hope that rests on an event that has already occurred. The resurrection of Jesus Christ from the dead is the foundation of Christian hope, and it transforms the theological significance of depression and suffering. If Jesus is raised, then death is not the final word on human experience &mdash; and neither is depression. The same power that raised Christ from the dead is at work in the bodies and souls of those who belong to him (Romans 8:11). This does not mean depression will lift tomorrow; it means that depression does not have the final word.",
      "2 Corinthians 4:8-10 is Paul&rsquo;s description of apostolic suffering that reads like a clinical depression checklist turned inside out: &ldquo;We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed. We always carry around in our body the death of Jesus, so that the life of Jesus may also be revealed in our body.&rdquo; The &ldquo;but not&rdquo; is the grammar of resurrection hope applied to present suffering. The suffering is real and named; the &ldquo;but not&rdquo; is not denial but a stronger reality pressing in from the other direction.",
      "Romans 8:18 provides the eschatological frame: &ldquo;For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.&rdquo; This is not a minimization of present suffering &mdash; Paul knows suffering at a depth most of us do not. It is a statement about proportion: the weight of present suffering, real as it is, is outweighed by the coming weight of glory. And Romans 8:38-39 provides the indestructible foundation for depressed Christians who feel the distance from God that depression creates: &ldquo;For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.&rdquo; The separation depression feels is real as an experience; it is not real as a fact.",
      "1 Corinthians 15:55-57 is Paul&rsquo;s triumphant declaration at the chapter&rsquo;s end: &ldquo;O death, where is your victory? O death, where is your sting? The sting of death is sin, and the power of sin is the law. But thanks be to God, who gives us the victory through our Lord Jesus Christ.&rdquo; The resurrection is not merely a promise for the future; it is the basis of present courage. Because Christ is raised, death &mdash; and all that anticipates death, including the death-like experience of depression &mdash; has been decisively defeated. The sting remains, but the victory has been decided.",
      "John 11:35 &mdash; &ldquo;Jesus wept&rdquo; &mdash; is the shortest verse in the English Bible and one of the most theologically dense. Standing at the tomb of Lazarus, knowing he is about to raise him, Jesus weeps. He is not weeping because he does not know what is about to happen; he weeps because sorrow is the appropriate response to death, and God is not distant from appropriate sorrow. The God who raised Lazarus wept before he did it. This means that hope and sorrow can coexist; that the God of resurrection is also the God who enters into grief rather than bypassing it. Depression, on this reading, is not a place from which God is absent but a place into which he has already entered.",
      "Revelation 21:4 is the eschatological promise that grounds all Christian hope for those in suffering: &ldquo;He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.&rdquo; This is not consolation at a safe distance; it is God himself, personally, wiping the tears from the faces of those who have wept. The image is intimate, physical, specific. The God of resurrection is also the God of tenderness. Depression, grief, and suffering are not permanent features of human experience &mdash; they belong to the old order that is passing away. The new order, already inaugurated in the resurrection of Jesus, will be consummated in the final restoration of all things. Hope is not the denial of present darkness; it is the certainty that present darkness is not the last word.",
    ],
  },
];

const videoItems = [
  {
    videoId: "xaaMVNPPVW0",
    title: "Tim Keller on Depression and Suffering",
  },
  {
    videoId: "hLBB2Y7LRSU",
    title: "Elijah and Depression &mdash; Pastoral Reflection",
  },
  {
    videoId: "VCg8r2CFKWI",
    title: "Christian Response to Depression",
  },
];

export default function ChristianDepressionGuidePage() {
  const [tab, setTab] = useState<Tab>("Depression in Scripture");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? TEAL : BORDER}`,
    background: active ? "rgba(13, 148, 136, 0.12)" : "transparent",
    color: active ? TEAL : MUTED,
    cursor: "pointer",
    fontSize: "0.88rem",
    fontWeight: active ? 600 : 400,
    transition: "all 0.15s ease",
    whiteSpace: "nowrap" as const,
  });

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
  };

  const currentSection = tabSections.find((s) => s.id === tab);

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              fontSize: "0.78rem",
              color: TEAL,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "0.6rem",
            }}
          >
            Faith &amp; Mental Health
          </div>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Christian Guide to Depression
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Elijah&rsquo;s breakdown, the lament psalms, the dark night of the soul, what the Bible
            says about sadness and despair, when depression becomes clinical, therapy and
            medication, and the hope of resurrection.
          </p>
          <div
            style={{
              marginTop: "1.75rem",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${TEAL}`,
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
            }}
          >
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
              &ldquo;He will wipe every tear from their eyes. There will be no more death or mourning
              or crying or pain, for the old order of things has passed away.&rdquo;
            </p>
            <p style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 600 }}>Revelation 21:4</p>
          </div>
        </header>

        {/* Tabs */}
        <nav
          aria-label="Page sections"
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: "2.25rem",
          }}
        >
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={tabButtonStyle(tab === t)}>
              {t}
            </button>
          ))}
        </nav>

        {/* Tab content: text sections */}
        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>
              {currentSection.heading}
            </h2>
            {currentSection.paragraphs.map((para, i) => (
              <p
                key={i}
                style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </section>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>
              Videos on Depression and Faith
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Teaching on depression, suffering, lament, and the hope of resurrection &mdash; from
              Tim Keller and others who have engaged these questions with theological depth and
              pastoral compassion.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 20,
              }}
            >
              {videoItems.map((video) => (
                <div
                  key={video.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={video.videoId} title={video.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3
                      style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}
                      dangerouslySetInnerHTML={{ __html: video.title }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing callout */}
        <div
          style={{
            marginTop: "3rem",
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderLeft: `3px solid ${TEAL}`,
            borderRadius: 12,
            padding: "1.5rem",
          }}
        >
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
            You are not beyond hope
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
            Elijah wanted to die. Jeremiah cursed the day of his birth. Psalm 88 ends in darkness.
            And God did not abandon any of them. If you are in a dark place, you are in good
            scriptural company &mdash; and you are not beyond the reach of the God who weeps at
            tombs and raises the dead. Explore the other tabs for the lament psalms, the dark
            night of the soul, clinical resources, and the hope of resurrection that anchors
            everything.
          </p>
        </div>
      </main>
    </div>
  );
}
