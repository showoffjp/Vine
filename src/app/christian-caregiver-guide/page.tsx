"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Caregiving as Vocation", "Honoring Father and Mother", "Burnout and Guilt", "Sustaining Your Own Soul", "Finding Support", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Caregiving as Vocation",
    heading: "Caregiving as Vocation: A Calling That Arrives Unbidden",
    paragraphs: [
      "For millions of people, caregiving is not a job they applied for but a calling that arrived unbidden &mdash; the aging parent whose memory is failing, the spouse diagnosed with a chronic illness, the child born with a disability. No one fills out an application to become a caregiver. The role descends suddenly, in a hospital corridor or a doctor&rsquo;s office, or it creeps in slowly as a parent&rsquo;s independence erodes year by year. The Christian frame transforms this from mere burden to vocation: a sphere of service to which God has called you, in which the love of Christ is made visible. The Latin word vocatio means &ldquo;calling,&rdquo; and the Reformers insisted that God calls people not only to pulpits and mission fields but to the ordinary stations of life &mdash; including the bedside of someone who can no longer care for themselves.",
      "Jesus identified himself with those in need: &ldquo;I was sick and you visited me&hellip; as you did it to one of the least of these my brothers, you did it to me&rdquo; (Matt 25:36-40). This is one of the most staggering claims in all of Scripture &mdash; that the King of glory hides himself in the frail body of the suffering, and that the cup of water given to the helpless is received by Christ as given to himself. The caregiver who bathes a parent, who spoons food into the mouth of one who can no longer feed themselves, who changes the dressing on a wound, is touching the body of Christ. The dignity of this work is not diminished by its messiness; it is exalted by its hiddenness, for the Lord sees what no one else sees.",
      "Caregiving is one of the purest forms of neighbor-love because it is so often unseen, unpaid, and unglamorous. There are no promotions in the work of caregiving, no annual reviews, no applause. The world celebrates the visible and the productive; it has little vocabulary for the person who spends years tending a body that will not recover. Yet Scripture insists that the value of a life is not measured by its visibility. The widow&rsquo;s two coins, given in obscurity, were worth more in the eyes of Jesus than the loud offerings of the rich (Mark 12:41-44). The caregiver&rsquo;s labor is offered into the same obscurity and received by the same Lord.",
      "Caregiving is the daily laying down of one&rsquo;s life &mdash; not in a dramatic moment of martyrdom but in the slow accumulation of small sacrifices: the interrupted sleep, the canceled plans, the endless logistics. Jesus said, &ldquo;Greater love has no one than this, that someone lay down his life for his friends&rdquo; (John 15:13). We usually imagine this as a single heroic act, a soldier falling on a grenade. But there is another way to lay down a life &mdash; one hour at a time, one canceled vacation at a time, one missed career opportunity at a time, over the course of years. This slow martyrdom of attention is no less a giving of one&rsquo;s life than the dramatic kind; it is simply spread out across a thousand ordinary days.",
      "This hidden faithfulness is precious in God&rsquo;s sight, even when no one else sees it. The Father &ldquo;who sees in secret&rdquo; (Matt 6:4) is the audience of the caregiver&rsquo;s work. Much of what a caregiver does will never be known, never be thanked, never be recorded anywhere except in the memory of God. But nothing is wasted in that economy. The medieval mystics spoke of the &ldquo;sacrament of the present moment&rdquo; &mdash; the conviction that God meets us not in some imagined future of recognition but in the concrete, often tedious tasks of the now. The diaper changed, the medication administered, the confused question answered for the hundredth time with patience &mdash; each of these is a place where eternity touches time.",
      "There is also a deep mystery in the way caregiving reshapes the caregiver. The work that seems only to give can also, over time, give something back: a patience that did not exist before, a tenderness toward weakness, a capacity to be present without fixing. The caregiver is being formed even as they serve, conformed slowly to the image of the One who &ldquo;did not come to be served, but to serve&rdquo; (Mark 10:45). This does not romanticize the cost &mdash; the cost is real and often crushing &mdash; but it names the strange grace by which God uses even our most depleting seasons to enlarge our souls.",
    ],
  },
  {
    id: "Honoring Father and Mother",
    heading: "Honoring Father and Mother in the Season of Their Decline",
    paragraphs: [
      "For those caring for aging parents, the fifth commandment takes on new weight: &ldquo;Honor your father and your mother&rdquo; (Exod 20:12). As children we tend to read this commandment as addressed to the young &mdash; obey your parents, do not talk back, respect their authority. But the command does not expire when we leave home. In the ancient world, this command was directed largely at adult children&rsquo;s care for elderly parents &mdash; the social security system of the day was the family. There were no nursing homes, no pensions, no government programs. When a parent grew too old to work, their survival depended entirely on the honor and provision of their grown children.",
      "Jesus sharply rebuked the Pharisees for using religious technicalities to avoid supporting their parents (Mark 7:9-13). They had developed a practice called Corban, by which a person could declare their resources &ldquo;dedicated to God&rdquo; and thereby exempt themselves from the obligation to support their aging father and mother. Jesus saw through this as a pious-sounding evasion of a fundamental duty: &ldquo;You have a fine way of rejecting the commandment of God in order to establish your tradition.&rdquo; The lesson is sobering: spiritual language can become a cover for the abandonment of concrete responsibilities. True religion does not float above the obligations of family; it descends into them.",
      "Paul writes that caring for one&rsquo;s own household is a way of &ldquo;showing godliness&rdquo; and that anyone who does not provide for relatives &ldquo;has denied the faith&rdquo; (1 Tim 5:4, 8). These are strong words. Paul places the care of aging parents not at the periphery of Christian discipleship but near its center &mdash; so central that to neglect it is to deny the faith itself. The early church developed structured systems of care for widows precisely because the provision for the vulnerable old was understood as a non-negotiable mark of the people of God. To be a Christian was, among other things, to be the kind of person who did not let their own flesh and blood fall through the cracks.",
      "Yet honoring aging parents is complicated when those relationships are strained, when the parent was abusive or absent, or when dementia has transformed a once-vibrant person into someone unrecognizable. The commandment to honor was never a commandment to pretend. For the adult child of an abusive parent, the call to honor cannot mean returning to a place of danger or submitting to ongoing harm. For the child of a parent who has been hollowed out by dementia, honor must be extended toward a person who may no longer recognize them, who may even lash out in fear and confusion. These are not the easy cases, and Scripture does not pretend they are.",
      "Honoring does not always mean obeying or even personally providing every form of care &mdash; it means treating them with the dignity owed to an image-bearer of God, ensuring they are cared for, even when boundaries are necessary. A daughter may honor an abusive father by ensuring he is safe and provided for through professional care while maintaining the distance her own safety requires. A son may honor a mother lost to dementia by making decisions in her best interest that she would protest if she could understand them. Honor is not the same as deference to every wish; it is the steady commitment to the person&rsquo;s genuine good and their inviolable dignity, held even when affection is hard and proximity is harmful.",
      "It helps, too, to remember that honoring a parent in decline is a form of honoring God&rsquo;s own faithfulness across the generations. The parent who is now confused and dependent was once strong; the relationship now inverted &mdash; the child caring for the parent who once cared for the child &mdash; is part of the long arc of a life under God. To bear with a parent&rsquo;s decline with patience is to say, in the language of action, that a person does not lose their worth when they lose their usefulness, their memory, or their strength. This is a deeply countercultural testimony in a world that prizes independence above almost everything else.",
      "Finally, the caregiver honoring a parent must also be honest about the grief woven through the task. To care for a parent who is fading is to grieve them while they are still alive &mdash; to lose, piece by piece, the person who raised you while their body remains. This anticipatory grief is real and deserves to be named before God. Honoring a parent does not require pretending the loss is not happening; it allows the caregiver to weep over what is being lost even as they faithfully tend what remains.",
    ],
  },
  {
    id: "Burnout and Guilt",
    heading: "Burnout and Guilt: The Hidden Wounds of the Caregiver",
    paragraphs: [
      "Caregiver burnout is real, measurable, and dangerous &mdash; physical exhaustion, emotional depletion, depression, anxiety, and the deterioration of the caregiver&rsquo;s own health. It is not a sign of spiritual weakness or insufficient love; it is the predictable consequence of sustained, depleting labor without adequate rest or support. The body and the soul were not designed to operate indefinitely in crisis mode, and the caregiver who tells themselves they should be able to keep going forever is operating on a theology of the self that Scripture does not teach. Even Elijah, having accomplished great things, collapsed under a juniper tree and asked to die; God&rsquo;s first response was not a rebuke but food and sleep (1 Kings 19:4-8).",
      "The research is sobering: long-term caregivers have higher rates of illness and mortality. The phenomenon is well documented &mdash; caregivers, particularly those caring for spouses with dementia, show elevated rates of depression, weakened immune function, and in some studies a markedly increased risk of death compared to their non-caregiving peers. The caregiver who neglects their own health in service of another is not being noble; they are, often unknowingly, jeopardizing the very capacity that the person they love depends upon. The instinct to pour out everything can become, paradoxically, a failure of stewardship.",
      "Compounding the exhaustion is guilt: guilt for feeling resentment, guilt for needing a break, guilt for not doing enough, guilt for the flashes of anger or the wish that it would end. This guilt is one of the heaviest and least-discussed burdens of caregiving. The caregiver loves the person they serve and is simultaneously worn down by them, and the coexistence of love and resentment produces a deep shame. They may find themselves wishing, in an exhausted moment, that the suffering would simply be over &mdash; and then recoil in horror at their own thought, certain that no good person could ever feel such a thing.",
      "This guilt is often false guilt &mdash; the product of an impossible standard rather than actual sin. There is a crucial difference between true guilt, which follows real wrongdoing and is healed by confession and forgiveness, and false guilt, which arises from failing to meet a standard that was never reasonable or never God&rsquo;s in the first place. The caregiver who feels guilty for being tired is measuring themselves against the standard of an infinite, inexhaustible God &mdash; a standard no creature can meet. To feel resentment in the midst of relentless demands is not a sin; it is a symptom. The flash of anger is not evidence of a wicked heart but of a finite one.",
      "The Christian response is twofold: first, honesty before God, who already knows the resentment and the exhaustion and invites you to cast it on him. The Psalms model exactly this kind of brutal honesty &mdash; the psalmists complain, accuse, and pour out their darkest feelings to God without sanitizing them first. &ldquo;Cast all your anxieties on him, because he cares for you&rdquo; (1 Pet 5:7). God is not shocked by the caregiver&rsquo;s anger or their exhaustion; he sees it already, and he does not require it to be cleaned up before it is brought to him. The caregiver who hides their resentment from God in shame cuts themselves off from the very grace that could meet them in it.",
      "Second is the recognition that you are a finite creature, not the savior of the person you care for. Only God is infinite; you are not required to be. This is perhaps the most liberating truth available to the exhausted caregiver: the salvation, the healing, and the ultimate well-being of the person you love do not finally rest on your shoulders. You are a creature with limits &mdash; a body that needs sleep, a soul that needs rest, a heart that can only bear so much. The Messiah complex that whispers &ldquo;if I do not do everything, all will be lost&rdquo; is not humility; it is a quiet form of pride that puts the caregiver in the place of God.",
      "Acknowledging your limits is not failure but truth. The caregiver who admits &ldquo;I cannot do this alone, I cannot do this perfectly, I cannot do this forever in my own strength&rdquo; is not giving up; they are aligning themselves with reality. Jesus himself did not heal every sick person in Israel; he did not meet every need that pressed upon him; he withdrew, he rested, he entrusted the outcome to his Father. To accept your finitude is to stop competing with God for a job that was never yours, and to receive instead the grace that is given to those who know they are weak.",
    ],
  },
  {
    id: "Sustaining Your Own Soul",
    heading: "Sustaining Your Own Soul in the Long Work of Care",
    paragraphs: [
      "The flight-safety instruction to &ldquo;secure your own oxygen mask before assisting others&rdquo; is a parable for caregivers. The logic is counterintuitive but undeniable: if you lose consciousness while trying to help the person next to you, you help no one. You cannot pour from an empty vessel. The caregiver who refuses all self-care in the name of devotion will eventually have nothing left to give &mdash; and the collapse, when it comes, harms not only the caregiver but the very person they were trying to protect. Sustaining yourself is not a distraction from the work of care; it is what makes the work of care possible over the long haul.",
      "Sustaining your soul is not selfishness but stewardship &mdash; you are caring for a person God loves (the one you serve) by caring for another person God loves (yourself). This reframing is essential. The caregiver has internalized that their own needs are an indulgence, that attending to themselves is a betrayal of the person who needs them. But you, too, are an image-bearer of God, a person for whom Christ died, a soul God delights to sustain. To tend your own well-being is not to take something away from the one you serve; it is to steward the instrument through which their care flows. A depleted, broken caregiver cannot care; a sustained one can.",
      "The practices that sustain are not grand. The first is protecting time for prayer and Scripture even in brief snatches &mdash; not the hour of uninterrupted devotion that may be impossible in this season, but the whispered prayer in the hallway, the single psalm read while the coffee brews, the line of Scripture held in the mind through a hard afternoon. God meets the caregiver not in some idealized future when life calms down but in the fragmented present. Brother Lawrence, who practiced the presence of God amid the clatter of a monastery kitchen, knew that holiness is available in the interruptions, not only in the silences.",
      "The second is maintaining at least one relationship where you are cared for rather than the caregiver. The danger of the caregiving role is that it can swallow a person&rsquo;s entire identity until they are only a caregiver, until every relationship flows outward and none flows in. The caregiver needs at least one person &mdash; a friend, a sibling, a counselor, a pastor &mdash; in whose presence they can simply be a person who is struggling, who is allowed to receive rather than give. Even Jesus had an inner circle, friends to whom he turned, a Gethsemane where he asked others to watch with him.",
      "The third is accepting help when it is offered, for the false heroism of refusing help is a form of pride. Many caregivers reflexively decline every offer &mdash; &ldquo;no, we&rsquo;re fine, I&rsquo;ve got it&rdquo; &mdash; out of a sense that to need help is to fail. But the body of Christ is designed for mutual dependence, and the caregiver who refuses all help denies others the privilege of serving and denies themselves the relief they desperately need. Using respite care without guilt belongs here too: stepping away for a few hours or a few days is not abandonment; it is the necessary withdrawal that makes return possible. The body that never rests breaks.",
      "The fourth is grieving the losses honestly, including the loss of the relationship as it was. Caregiving almost always involves the slow loss of someone who is still present &mdash; the spouse who can no longer share a real conversation, the parent who no longer knows your name, the child whose disability means a future utterly different from the one once imagined. These losses are real and must be mourned, not suppressed. The caregiver who refuses to grieve, who insists they must only be grateful and strong, drives the sorrow underground where it festers into bitterness or breakdown. Lament is not faithlessness; it is the honest speech of a heart that loves what it is losing.",
      "Jesus himself withdrew from the crowds to pray, even when there were more people to heal (Luke 5:15-16). This is one of the most striking facts in the Gospels: the Son of God, with the power to heal every sufferer who reached him, regularly stopped, stepped away, and went to a desolate place to be with his Father &mdash; leaving needs unmet, crowds unsatisfied, work undone. If the Son of God honored his own limits, so may you. The caregiver who learns to withdraw, to rest, to pray, to receive, is not abandoning their calling; they are following the very pattern of the One who called them to it.",
    ],
  },
  {
    id: "Finding Support",
    heading: "Finding Support: No One Is Meant to Caregive Alone",
    paragraphs: [
      "No one is meant to caregive alone, and the church is meant to be the primary community of mutual burden-bearing: &ldquo;Bear one another&rsquo;s burdens, and so fulfill the law of Christ&rdquo; (Gal 6:2). The Christian life is irreducibly communal. The image of the body in 1 Corinthians 12 is not decorative; it is a description of how the people of God are designed to function &mdash; with each member contributing what others lack, so that no one carries an unbearable weight alone. The isolated caregiver, struggling in silence, is living in contradiction to the very structure of the church. The burden was always meant to be distributed.",
      "Practical support to seek includes caregiver support groups, many of which churches and hospitals host. Sitting in a room with others who understand the particular exhaustion, the particular guilt, the particular grief of caregiving is a profound relief &mdash; the discovery that one is not uniquely failing, not uniquely resentful, not uniquely overwhelmed, but experiencing what caregivers experience. These groups offer not only emotional support but practical wisdom: the hard-won knowledge of those who have walked the same road and learned where the help is, what the resources are, and how to navigate the systems.",
      "Other practical supports include respite care services, adult day programs, and home health aides. Respite care provides temporary relief so the caregiver can rest, attend to their own needs, or simply breathe. Adult day programs offer structured, supervised care during the day, providing both stimulation for the person being cared for and relief for the caregiver. Home health aides bring professional assistance into the home for tasks that have grown too heavy to carry alone. To use these services is not to fail; it is to recognize, wisely, that the work of care is too large for one person and to assemble the team that the situation requires.",
      "Where needed, there is the difficult but sometimes necessary transition to assisted living or memory care &mdash; which is not abandonment but a different form of provision. Many caregivers carry crushing guilt over the decision to move a loved one into professional care, as though they have broken a sacred promise or failed in their duty. But there comes a point for many families when the level of care required exceeds what any individual can safely provide at home &mdash; when the person&rsquo;s needs, or their safety, or the caregiver&rsquo;s own collapsing health, make the transition the most loving option available. Providing for someone&rsquo;s care through skilled professionals is still providing for them; the form has changed, but the love has not.",
      "For the church, the call is to actively support caregivers in the congregation &mdash; not waiting to be asked, but offering meals, visits, errands, and presence. The caregiver is often the least likely person to ask for help, both because they have no time and because they have internalized that they should be able to manage. The church that waits for a request will wait forever. What is needed is proactive, specific, persistent care: not &ldquo;let me know if you need anything,&rdquo; but &ldquo;I&rsquo;m bringing dinner Tuesday&rdquo; and &ldquo;I&rsquo;ll sit with your mother Saturday so you can get out of the house.&rdquo; Specific offers are far easier to accept than open-ended ones.",
      "The isolated caregiver is one of the most overlooked people in many congregations. They have often disappeared from the life of the church &mdash; no longer at services, no longer in the small group, no longer visible &mdash; precisely because the caregiving has consumed every available hour. Their absence is read by some as disengagement when it is in fact a sign of need. The church that learns to notice who has vanished, and to go to them rather than waiting for them to return, practices a ministry of presence that mirrors the Shepherd who leaves the ninety-nine to seek the one.",
      "The body of Christ is designed so that &ldquo;if one member suffers, all suffer together&rdquo; (1 Cor 12:26) &mdash; and the caregiver, too, is a member who suffers and needs the body. It is easy for a congregation to focus its compassion on the visibly ill person while overlooking the caregiver standing beside them, equally in need, often more depleted. But the gospel does not permit this overlooking. The caregiver is not merely a resource for someone else&rsquo;s care; they are a beloved member of the body whose own suffering the whole body is called to share. A church that learns to carry its caregivers learns something essential about what it means to be the people of God.",
    ],
  },
];

const videoItems = [
  { videoId: "8oVz9OQGwTo", title: "Caregiving as a Christian Calling" },
  { videoId: "FvVHvfHFmTM", title: "Avoiding Caregiver Burnout — A Faith Perspective" },
  { videoId: "u3Cm2Mtbi2k", title: "Honoring Aging Parents — A Biblical View" },
];

export default function ChristianCaregiverGuidePage() {
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
            Faith &amp; Caregiving
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Caregiver Guide
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Caring for an aging parent, a sick spouse, or a disabled child as a Christian &mdash; the theology of caregiving as vocation, the weight of honoring father and mother, caregiver burnout and guilt, sustaining your own soul, and finding the support no caregiver was meant to do without.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;I was sick and you visited me&hellip; as you did it to one of the least of these my brothers, you did it to me.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Matthew 25:36-40</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(13, 148, 136, 0.12)` : "transparent",
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>You Are Not the Savior &mdash; and You Are Not Alone</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Caregiving is a calling that arrives unbidden and asks more than seems possible. But you are a finite creature, not the savior of the one you love &mdash; only God is infinite. Honor your limits as Jesus honored his, cast your exhaustion on the One who already sees it, and let the body of Christ carry the burden with you. The hidden faithfulness no one else sees is precious in the sight of the God who hides himself in the least of these.</p>
        </div>
      </main>
    </div>
  );
}
