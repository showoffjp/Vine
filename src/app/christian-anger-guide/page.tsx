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
  "Anger in Scripture",
  "Righteous vs. Sinful Anger",
  "The Psychology of Anger",
  "Anger and Injustice",
  "Handling Anger Well",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Anger in Scripture",
    heading: "The Bible&rsquo;s Nuanced View of Anger",
    paragraphs: [
      "The Bible does not treat anger as uniformly sinful. &ldquo;Be angry and do not sin; do not let the sun go down on your anger&rdquo; (Ephesians 4:26) is a quotation of Psalm 4:4, and its logic is remarkable: it acknowledges that anger is sometimes the right response to the world, while insisting that the emotion must be handled without sin. The command is not &ldquo;do not be angry&rdquo; but &ldquo;be angry and do not sin.&rdquo; The distinction matters enormously. Anger is not forbidden; it is a moral emotion that can be expressed rightly or wrongly.",
      "James 1:19&ndash;20 offers the other side of the same coin: &ldquo;Let every person be quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness of God.&rdquo; The qualifier is important: it is the &ldquo;anger of man&rdquo; &mdash; human anger in its typical, fallen form &mdash; that fails to produce righteousness. James is not denying the possibility of righteous human anger; he is noting the statistical reality that human anger is usually driven by self-interest, pride, or wounded ego rather than genuine concern for justice. The prescription is slowness, not abolition.",
      "The Old Testament depicts God himself as angry. Psalm 7:11 declares that &ldquo;God is a righteous judge, and a God who feels indignation every day.&rdquo; The wrath of God is a sustained biblical theme &mdash; not a primitive anthropomorphism to be explained away but a morally serious claim that the God who is perfectly just is perfectly opposed to injustice. God&rsquo;s anger is not arbitrary, disproportionate, or self-serving; it is the consistent response of a holy character to the violation of what is right. Divine wrath is not the opposite of divine love but its expression &mdash; the form love takes when confronted with what destroys the beloved.",
      "The distinction between God&rsquo;s anger and human anger is instructive. God&rsquo;s anger is always just, always proportionate, always in service of restoration and redemption, and always intertwined with his mercy (&ldquo;slow to anger and abounding in steadfast love&rdquo; &mdash; a phrase that recurs throughout the Old Testament). Human anger is frequently distorted by selfishness, pride, and the desire for dominance. We tend to feel most intensely angry not when justice is violated but when our preferences are frustrated, our ego is threatened, or our sense of control is challenged. The biblical call to &ldquo;slow to anger&rdquo; is a recognition of this distortion.",
      "The New Testament does not abolish the possibility of righteous anger but raises the standard for it. In the Sermon on the Mount, Jesus addresses the disposition that underlies anger: &ldquo;everyone who is angry with his brother will be liable to judgment&rdquo; (Matthew 5:22). The word translated &ldquo;angry&rdquo; here is linked to a smoldering, harbored resentment &mdash; the kind of anger that nurses grievances and fantasizes about revenge. Jesus is not eliminating the sharp anger that flares in response to genuine injustice; he is addressing the chronic, corrosive anger that poisons relationships and corrodes the soul of the person who harbors it.",
      "Anger is not inherently sinful, but its management is a constant ethical challenge. The Psalms model a spiritually healthy relationship with anger: the psalmists bring their fury to God honestly and directly, without dissembling or spiritualizing. Psalm 109 contains prayers for the enemy&rsquo;s destruction that make modern readers uncomfortable &mdash; but these prayers are addressed to God, not acted upon by the psalmist. The lament psalms model something important: the right direction for strong emotion is toward God, not toward the object of anger in unmediated aggression.",
      "The canonical picture, taken as a whole, suggests that anger is a moral emotion &mdash; a signal that something has gone wrong, that a value has been violated, that justice is not being served. Like pain in the body, it carries information. The question is what to do with that information. The biblical prescriptions &mdash; slowness, prayer, directed lament, honest confrontation, and above all the avoidance of retaliation and harbored resentment &mdash; describe a way of handling anger that honors its legitimate signal function without succumbing to its destructive potential.",
    ],
  },
  {
    id: "Righteous vs. Sinful Anger",
    heading: "What Made Jesus&rsquo;s Anger in the Temple Righteous?",
    paragraphs: [
      "The cleansing of the temple is the most dramatic episode of anger in Jesus&rsquo;s ministry, and it provides the paradigm case for what righteous anger looks like. In John 2:13&ndash;17 and Mark 11:15&ndash;19, Jesus drives out those who were buying and selling in the temple courts, overturns the tables of the money-changers and the seats of those selling doves, and refuses to allow anyone to carry merchandise through the temple. In John&rsquo;s account, the disciples recall Psalm 69:9: &ldquo;Zeal for your house will consume me.&rdquo; The anger is fierce, physical, and unmistakable.",
      "What made this anger righteous rather than sinful? Several features distinguish it. First, it was directed at injustice rather than personal offense. Jesus was not angry because his dignity had been wounded or his preferences frustrated; he was angry because the worship of God was being corrupted and the poor were being exploited. The temple court where the commerce occurred was the Court of the Gentiles &mdash; the only place where non-Jews could pray. By turning it into a marketplace, the religious establishment was effectively excluding the nations from the house of prayer. Jesus&rsquo;s anger was on behalf of others, not himself.",
      "Second, the anger was proportionate to the offense. The response &mdash; driving out the merchants and overturning tables &mdash; was a symbolic act of prophetic disruption, not a violent rampage. Mark notes that Jesus &ldquo;would not allow anyone to carry merchandise through the temple&rdquo; (Mark 11:16) &mdash; a detail suggesting deliberateness and control. The action was decisive but not indiscriminate. John&rsquo;s account mentions a whip of cords that Jesus made himself &mdash; the preparation suggests intentionality rather than impulsive explosion.",
      "Third, the anger was accompanied by moral clarity and verbal explanation. Jesus does not simply act; he teaches: &ldquo;Is it not written, &lsquo;My house shall be called a house of prayer for all nations&rsquo;? But you have made it a den of robbers&rdquo; (Mark 11:17, quoting Isaiah 56:7 and Jeremiah 7:11). The anger is grounded in Scripture, articulate, and directed toward repentance and correction rather than mere punishment.",
      "The Sermon on the Mount provides a sharp contrast in Matthew 5:22, where Jesus addresses sinful anger. The word &ldquo;fool&rdquo; (Greek: &ldquo;m&omacr;re&rdquo;) in this context carries the sense of moral worthlessness &mdash; contempt for the personhood of another, a denial of their status as bearers of God&rsquo;s image. The rabbis discussed whether it was the equivalent of murder; Jesus says it is, in the sense that it destroys the person in the heart. What makes anger sinful here is not its intensity but its contempt &mdash; its treatment of another human being as worthless, as something to be dismissed or destroyed.",
      "The diagnostic question for distinguishing righteous from sinful anger is: what is this anger in service of? Righteous anger serves justice, truth, and the well-being of others. Sinful anger serves the self &mdash; its pride, its desire for dominance, its wounded ego. Righteous anger is outward-facing; sinful anger is self-referential. Righteous anger wants things to be made right; sinful anger wants to feel vindicated. This distinction is harder to apply in practice than in theory, because the self-deception that attaches to anger is significant &mdash; we are very good at dressing up self-interest as principle.",
      "The tradition has identified &ldquo;vices of anger&rdquo; that describe the degraded forms: wrath (explosive, disproportionate), resentment (chronic, festering), revenge (retaliation that goes beyond justice), and contempt (dehumanization of the other). Against these, the virtues of rightly-ordered anger include: the ability to be appropriately angry at injustice, the capacity to name harm clearly without exaggerating it, the discipline to pursue correction rather than punishment, and the spiritual practice of committing the outcome to God rather than taking matters into one&rsquo;s own hands.",
    ],
  },
  {
    id: "The Psychology of Anger",
    heading: "Understanding Anger from the Inside Out",
    paragraphs: [
      "One of the most practically significant insights from contemporary psychology is that anger is typically a secondary emotion. Behind virtually every episode of anger, if you trace it carefully, you will find a more primary emotion that the anger is covering: fear, grief, hurt, shame, or a sense of powerlessness. When a parent screams at a child who has run into the street, the visible emotion is anger, but the primary emotion is terror &mdash; the fear of losing the child. When a spouse lashes out after feeling ignored, the primary experience is loneliness or rejection. The anger is real, but it is downstream of something else. Learning to identify the primary emotion is one of the most important skills in emotional intelligence.",
      "The physiology of anger is well-documented. When a perceived threat triggers the amygdala (the brain&rsquo;s alarm system), it activates the fight-or-flight response: cortisol and adrenaline flood the bloodstream, heart rate and blood pressure rise, blood flows to the large muscles, and the prefrontal cortex &mdash; the seat of reasoning, judgment, and impulse control &mdash; is partially bypassed. This is sometimes called an &ldquo;amygdala hijack.&rdquo; In the grip of acute anger, cognitive function is genuinely impaired. The person is less capable of nuanced thinking, perspective-taking, and impulse control than at baseline. This is why the biblical prescription to be &ldquo;slow to anger&rdquo; and to not respond while the sun is still down on the anger is physiologically as well as morally wise.",
      "The distinction between acute anger and chronic anger matters greatly for understanding the psychology of anger. Acute anger is a sharp response to a specific perceived wrong. It rises quickly, is focused on the triggering event, and typically subsides as the threat passes. Chronic anger is a persistent background disposition &mdash; a state of readiness for anger that means the person is easily triggered, slow to de-escalate, and frequently hostile. Chronic anger is associated with much higher health risks, including cardiovascular disease, suppressed immune function, and impaired relationships. It is also associated with underlying conditions such as depression, anxiety, and trauma that may need treatment.",
      "The old advice to &ldquo;let it all out&rdquo; &mdash; that expressing anger fully is healthy and suppression is harmful &mdash; has been significantly complicated by subsequent research. Venting anger, particularly in aggressive ways (hitting pillows, shouting it out), tends to amplify rather than reduce the anger response. The catharsis hypothesis &mdash; that expressing anger releases it &mdash; is poorly supported by the evidence. What actually reduces anger more reliably is cognitive reappraisal (reconsidering the meaning of the triggering event), problem-solving (addressing the underlying injustice), and physical exercise that dissipates the physiological arousal without feeding the aggression.",
      "Anger disorders are real and require clinical attention. Intermittent explosive disorder, pathological anger, and rage attacks can be symptoms of underlying conditions including bipolar disorder, ADHD, traumatic brain injury, PTSD, and major depression. When a person&rsquo;s anger is disproportionate to triggers, difficult to de-escalate, or resulting in significant relational or vocational harm, professional evaluation is indicated. Spiritual counsel alone is insufficient when there is a neurological or psychiatric component. The wise pastor or spiritual director knows when to refer.",
      "The difference between assertiveness and aggression is another critical distinction for the Christian seeking to handle anger well. Assertiveness involves honestly and directly expressing one&rsquo;s needs, feelings, and limits without attacking the other person. &ldquo;I feel disrespected when you interrupt me in meetings&rdquo; is assertive. &ldquo;You are a disrespectful person&rdquo; is aggressive. The first addresses the behavior and its effect; the second attacks the person. Assertiveness honors both the self (by refusing to suppress legitimate needs) and the other (by not dehumanizing them). It is the middle path between the passive person who swallows everything and the aggressive person who unleashes everything.",
      "Research on forgiveness and anger suggests a deep connection between the two. Chronic unforgiveness is one of the most reliable generators of chronic anger. When we hold onto grievances &mdash; rehearsing the offense, nursing the injury, imagining revenge &mdash; we maintain the physiological and psychological state of anger indefinitely. This is not merely morally problematic; it is physiologically damaging. The person who nurses a grudge is not hurting the offender; they are maintaining themselves in a state of chronic stress. The path out of chronic anger almost always involves some form of forgiveness &mdash; not excusing the harm but releasing the claim to vengeance and choosing a different relationship to the past.",
    ],
  },
  {
    id: "Anger and Injustice",
    heading: "When Anger Is the Prophetic Response",
    paragraphs: [
      "The Hebrew prophets are among the most striking exemplars of anger in the biblical tradition, and their anger was almost entirely directed outward &mdash; at the structural injustices of their societies rather than at personal offenses against themselves. Amos thunders against the exploitation of the poor: &ldquo;They sell the righteous for silver, and the needy for a pair of sandals &mdash; they who trample the head of the poor into the dust of the earth&rdquo; (Amos 2:6&ndash;7). Isaiah pronounces woes against those who &ldquo;join house to house&rdquo; and &ldquo;add field to field&rdquo; while the poor are displaced (Isaiah 5:8). Jeremiah weeps and rages over the faithlessness of Judah and the suffering that will follow. These are not dispassionate social critics; they are people whose emotions are aligned with the emotions of God.",
      "The prophetic tradition suggests that there is a kind of anger that is a moral requirement &mdash; that the failure to be angry when anger is warranted is itself a form of moral failure. The prophet who surveys a society where the widow, the orphan, and the alien are systematically exploited and feels nothing has lost something important. Indifference in the face of injustice is not neutrality; it is a kind of implicit complicity. The capacity for anger &mdash; when rightly ordered and directed at genuine injustice &mdash; is part of what it means to be fully human in the image of a God who is himself wrathful toward injustice.",
      "This prophetic anger can be distinguished from personal anger by its reference point. Prophetic anger is triggered by the violation of others &mdash; particularly the vulnerable &mdash; rather than the frustration of the self. The prophet Amos was not personally disadvantaged by the practices he condemned; he was enraged on behalf of those who were. Martin Luther King Jr.&rsquo;s anger at segregation and racial violence was not primarily anger about personal offenses to himself (though he experienced those daily) but moral outrage at a system that violated the dignity of every Black American. This other-directed anger is the form that most closely approximates the divine wrath.",
      "The danger of passivity in the face of injustice is a recurring biblical theme. The parable of the Good Samaritan (Luke 10:25&ndash;37) implicitly indicts the priest and Levite not for active wrongdoing but for the failure to respond to suffering that was directly before them. Proverbs 24:11&ndash;12 is explicit: &ldquo;Rescue those who are being taken away to death; hold back those who are stumbling to the slaughter. If you say, &lsquo;Behold, we did not know this,&rsquo; does not he who weighs the heart perceive it?&rdquo; The failure of anger &mdash; the failure to feel the moral urgency that should motivate action &mdash; is not described as a safe neutral position.",
      "Anger as the appropriate emotional response to seeing the image of God violated in another person is a theological claim worth dwelling on. The Christian doctrine of the imago Dei &mdash; that every human being bears the image and likeness of God (Genesis 1:26&ndash;27) &mdash; has direct implications for emotional response. To harm a human being is to dishonor the image of God. To watch that harm passively and feel nothing is to be unmoved by the dishonoring of God in the person of the neighbor. The anger that arises when we see a child abused, a vulnerable person exploited, or a life destroyed by systemic injustice is, when rightly ordered, an appropriate response to a genuinely outrageous reality.",
      "The distinction between anger as a response to personal offense versus anger as a response to others&rsquo; suffering is a useful diagnostic. Personal-offense anger says, &ldquo;You have wronged me, and I am furious.&rdquo; Prophetic anger says, &ldquo;You have wronged them, and I am outraged on their behalf.&rdquo; The first is not necessarily sinful &mdash; legitimate grievances deserve legitimate anger &mdash; but it is far more susceptible to distortion by ego and self-interest. The second is harder to corrupt because it is not primarily about the self. Most of the explicitly commended anger in Scripture &mdash; God&rsquo;s wrath, the prophets&rsquo; indignation, Jesus&rsquo;s temple action &mdash; falls into the second category.",
      "The practical implication for Christians is that cultivating genuine concern for justice &mdash; developing the capacity to be moved by the suffering of others &mdash; is a spiritual discipline. Compassion and anger are not opposites; they are often companions. The person who is genuinely compassionate toward the oppressed will also be genuinely angry at the oppressor. Formation in love for the neighbor is formation in the capacity for the right kind of anger. Conversely, the person who has trained themselves out of all anger in the name of serenity may have also trained themselves out of genuine solidarity with those who suffer.",
    ],
  },
  {
    id: "Handling Anger Well",
    heading: "Biblical and Practical Disciplines for Anger",
    paragraphs: [
      "The biblical prescriptions for handling anger are remarkably practical. James 1:19 instructs believers to be &ldquo;quick to hear, slow to speak, slow to anger.&rdquo; The order is telling: hearing comes first. One of the most common drivers of disproportionate anger is misunderstanding &mdash; responding to what we assume the other person meant before we have genuinely heard what they actually said. The discipline of slowing down to listen before speaking and before becoming angry is both a communication skill and a spiritual practice. It is the application of love to the moment of conflict: treating the other person as someone whose perspective deserves a genuine hearing.",
      "Ephesians 4:26 &mdash; &ldquo;do not let the sun go down on your anger&rdquo; &mdash; is a prescription for the time management of anger. Anger that is not addressed tends to calcify into resentment. The longer a grievance sits unaddressed &mdash; the longer we lie awake rehearsing the offense, imagining conversations, nursing the injury &mdash; the more deeply embedded it becomes. The instruction is not to achieve perfect emotional resolution before bedtime but to refuse to let anger become a long-term resident. This may mean having a difficult conversation, naming the grievance, or at minimum praying through the anger and committing the person to God before sleep.",
      "Romans 12:19 &mdash; &ldquo;Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, &lsquo;Vengeance is mine, I will repay, says the Lord&rsquo;&rdquo; &mdash; addresses the most dangerous direction anger can take: retaliation. The instruction to leave room for God&rsquo;s wrath is not passivity but a theological act: trusting that the ultimate account belongs to God, not to us. This trust frees the Christian from the compulsive need to make sure the offender &ldquo;gets what they deserve&rdquo; &mdash; a need that, when acted on, almost always escalates conflict and produces further harm rather than genuine justice.",
      "The discipline of pausing before responding is physiologically supported. The amygdala hijack that characterizes acute anger typically peaks within seconds and begins to subside within minutes if no new provocation is added. The old advice to &ldquo;count to ten&rdquo; has a neurological basis: giving the prefrontal cortex time to re-engage. More sophisticated versions of this practice include physically leaving the situation temporarily, engaging in slow breathing to activate the parasympathetic nervous system, or using a pre-committed phrase (&ldquo;I need a few minutes to think about this&rdquo;) that buys time without escalating the conflict.",
      "The practice of naming the emotion behind the anger &mdash; &ldquo;I am afraid that...&rdquo; or &ldquo;I am hurt that...&rdquo; &mdash; is one of the most powerful tools for de-escalating conflict. When a person expresses the primary emotion beneath the anger, they communicate vulnerability rather than threat. The listener&rsquo;s defensive response (which anger typically triggers) is reduced. And the speaker is forced to do the internal work of identifying what is actually going on beneath the surface. This practice aligns with both contemporary emotional intelligence research and the biblical practice of honest speech: &ldquo;Let your speech always be gracious, seasoned with salt&rdquo; (Colossians 4:6).",
      "Matthew 18:15&ndash;17 provides the framework for direct conflict resolution in Christian community. The first step is one-on-one conversation with the person who has wronged you &mdash; not triangulation (involving third parties), not avoidance, not passive-aggressive behavior, but direct and honest engagement. This is harder than any of the alternatives, which is why it is so rarely done. The step requires both courage (to risk rejection or escalation) and love (the genuine desire for the relationship and the person&rsquo;s good, not merely the venting of grievance). When this step is practiced faithfully, many conflicts are resolved before they require further escalation.",
      "The place of confession and forgiveness in anger cycles is often underestimated. Many chronic patterns of anger in relationships are maintained by the absence of genuine acknowledgment on both sides. The person who wounded me is also wounded by me; the anger I carry is also carried about me. Breaking these cycles requires the rare combination of genuine acknowledgment of harm done, willingness to hear the impact of one&rsquo;s own actions, and the extension of forgiveness that releases the cycle. The Christian community, with its resources of confession, absolution, and reconciliation, has the theological framework to support this work. The regular practice of &ldquo;forgiving one another as God in Christ forgave you&rdquo; (Ephesians 4:32) is not merely a command but a lifelong practice that gradually reshapes the character of the person who undertakes it.",
    ],
  },
];

const videoItems = [
  { videoId: "Hf4EoJGhLGw", title: "Tim Keller on Anger and the Gospel" },
  { videoId: "oRrJkSOv6c8", title: "John Piper on Sinful Anger" },
  { videoId: "lBmHR7UBoFQ", title: "Righteous Anger vs. Sinful Anger — A Biblical Look" },
];

export default function ChristianAngerGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.5rem" }}>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Anger
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            What the Bible says about anger &mdash; righteous vs. sinful anger, Jesus in the temple, the psychology of anger, and how to handle anger without sinning.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;Be angry and do not sin; do not let the sun go down on your anger.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Ephesians 4:26</p>
          </div>
        </header>

        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                padding: "0.5rem 1.1rem",
                borderRadius: 8,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? "rgba(225, 29, 72, 0.12)" : "transparent",
                color: tab === t ? ACCENT : MUTED,
                cursor: "pointer",
                fontSize: "0.88rem",
                fontWeight: tab === t ? 600 : 400,
                transition: "all 0.15s ease",
                whiteSpace: "nowrap" as const,
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        {currentSection && tab !== "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            {currentSection.paragraphs.map((para, i) => (
              <p key={i} style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </section>
        )}

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

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Anger Redeemed</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
            Anger is not the enemy of the spiritual life &mdash; misdirected anger is. The same capacity for fierce emotion that drives destructive rage can, rightly ordered, fuel prophetic courage, sacrificial love, and passionate advocacy for the vulnerable. The goal is not the elimination of anger but its redemption: aligning our fiercest feelings with what God himself is fierce about.
          </p>
        </div>
      </main>
    </div>
  );
}
