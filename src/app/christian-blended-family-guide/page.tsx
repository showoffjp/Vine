"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F"; const CARD = "#12121F"; const BORDER = "#1E1E32";
const ACCENT = "#D97706"; const TEXT = "#F2F2F8"; const MUTED = "#9898B3";

const TABS = [
  "The Blended Family Reality",
  "Biblical Complex Families",
  "Step-Parenting with Grace",
  "Loyalty and Grief",
  "Becoming One Family",
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
    id: "The Blended Family Reality",
    heading: "The Blended Family Reality",
    paragraphs: [
      "Blended families &mdash; formed when a remarriage brings together children from previous relationships &mdash; are increasingly common, and they face challenges that first-marriage families do not. The romantic ideal of instantly becoming &ldquo;one big happy family&rdquo; collides with reality: children who did not choose this arrangement, who may still grieve their parents&rsquo; divorce or a parent&rsquo;s death, who feel loyalty conflicts, and who must navigate two households with different rules. The research is clear that blended families take years &mdash; often five to seven &mdash; to truly integrate, and that unrealistic expectations are a primary source of conflict and a leading cause of second-marriage divorce. The Christian approach begins with honesty about the difficulty, patience with the process, and the recognition that God specializes in making families out of unlikely combinations. The blended family is not a second-class family; it is a family God can bless and use, but it requires wisdom, grace, and realistic expectations.",
      "The phrase &ldquo;one big happy family&rdquo; carries enormous emotional weight at the start of a remarriage, and it is precisely this expectation that does the most damage. The newly married couple, glowing with love and hope, naturally imagines that their joy will be contagious, that the children will catch the warmth and settle quickly into a new and happy unit. But the children stand in a very different emotional place. They did not fall in love; they did not choose this. They may be experiencing the remarriage not as a gain but as a loss &mdash; the final death of a hope that their original family might somehow be restored. The gap between the parents&rsquo; expectations and the children&rsquo;s reality is where much of the early conflict lives.",
      "The children of a blended family are often still carrying grief that the adults, caught up in their new happiness, can easily overlook. A child whose parents divorced may still mourn that loss; a child whose parent died may feel that loyalty to the deceased forbids welcoming a replacement; a child of any background may resent the rules, routines, and relationships imposed on them by a household they had no part in choosing. This grief and resentment are not signs of a bad child or a failed family; they are the natural response of a young person whose world has been rearranged without their consent. Honoring this reality, rather than resenting it, is the beginning of wisdom.",
      "The complication of two households compounds the difficulty. Many blended-family children move between homes with different rules, different values, different expectations, and sometimes open hostility between the adults involved. A child may face one set of bedtime rules at one house and another at the other, one approach to faith in one home and a different one across town. Navigating these differences is genuinely hard for a child, and the adults who can minimize the conflict between households &mdash; rather than using the child as a weapon or a messenger &mdash; spare the child an enormous burden.",
      "The research on blended families offers a sobering but clarifying timeline: genuine integration typically takes five to seven years, not five to seven months. Couples who expect quick cohesion are setting themselves up for disappointment and may interpret the normal slowness of the process as evidence that something is wrong. Unrealistic expectations are repeatedly identified as a primary driver of conflict and a leading cause of second-marriage divorce, which fails at even higher rates than first marriages. Knowing the realistic timeline in advance allows a couple to extend grace to themselves and to the children when integration takes longer than they hoped.",
      "The Christian approach to all of this begins not with denial but with honesty. The faith that refuses to pretend the difficulty away &mdash; that names the grief, the loyalty conflicts, and the long timeline for what they are &mdash; is far better equipped to persevere than the faith that papers over reality with forced cheerfulness. Patience becomes a central virtue: the patience to let relationships develop at their own pace, the patience to absorb rejection without retaliating, the patience to keep showing up across the years it takes for a family to genuinely form. This patience is not passive; it is the active, costly love the gospel describes.",
      "Above all, the blended family must reject the lie that it is a second-class family, a lesser arrangement that God merely tolerates. Scripture tells a different story &mdash; one of a God who specializes in making families out of unlikely combinations, who repeatedly works his purposes through complex and irregular households. The blended family is a family God can bless, use, and fill with genuine love. It is not a fallback or a consolation prize but a real family, requiring real wisdom and real grace, and capable of becoming a place of deep belonging. The difficulty is real, but so is the hope.",
    ],
  },
  {
    id: "Biblical Complex Families",
    heading: "Biblical Complex Families",
    paragraphs: [
      "Scripture is full of complex, blended, and frankly dysfunctional families &mdash; and God works through all of them. Abraham&rsquo;s family included Sarah, Hagar, Ishmael, and Isaac, with all the attendant jealousy and conflict. Jacob had children by four women, and the resulting rivalry shaped the twelve tribes of Israel. Joseph was raised among half-brothers who sold him into slavery &mdash; and God redeemed even that. Moses was raised in a blended cross-cultural situation, an adopted child in Pharaoh&rsquo;s household. Most strikingly, Jesus himself was raised by Joseph, who was not his biological father &mdash; the incarnate Son of God grew up in what we would now call a non-traditional family. The genealogy of Jesus (Matthew 1) includes Tamar, Rahab, Ruth, and Bathsheba &mdash; women whose family stories were marked by irregularity, loss, and redemption. The biblical witness offers no idealized nuclear family as the only vehicle of God&rsquo;s purposes; instead it shows God consistently working through complicated families to accomplish his good ends.",
      "Abraham&rsquo;s household is a case study in the tensions of a blended family. The arrival of Hagar and Ishmael, born of Sarah&rsquo;s impatience and Abraham&rsquo;s compliance, introduced a rivalry that fractured the home. When Isaac was finally born, the jealousy between the two mothers and the two sons erupted into a painful expulsion. Scripture does not sanitize this; it records the favoritism, the bitterness, and the lasting consequences with unflinching honesty. And yet God&rsquo;s covenant purposes moved forward through this troubled family, and God did not abandon Hagar and Ishmael but met them in the wilderness and made promises to them too. The dysfunction did not disqualify the family from God&rsquo;s work.",
      "Jacob&rsquo;s family was even more tangled. Children by four women &mdash; two wives and two servants &mdash; created a household riven by competition, favoritism, and resentment, as the women vied for status through the children they bore. The rivalry shaped the very identity of the nation, for the twelve sons became the twelve tribes of Israel. Here is a startling truth: the foundational family of God&rsquo;s chosen people was a deeply blended, deeply conflicted household. If God could build a nation on the back of such a family, the modern blended family need not despair of being used for good despite its complications.",
      "Joseph&rsquo;s story carries the theme further. Raised among half-brothers who hated him enough to sell him into slavery, Joseph endured the worst that a fractured family can inflict. Yet the arc of his story bends toward redemption: the very betrayal that should have destroyed him became the means by which God preserved many lives. Joseph&rsquo;s own summary &mdash; &ldquo;you meant evil against me, but God meant it for good&rdquo; &mdash; is the charter text for every blended family that has known betrayal and pain. God is able to redeem even the harm that family members do to one another.",
      "Moses, too, was a child of a blended and cross-cultural household, drawn from the water and raised as an adopted son in Pharaoh&rsquo;s palace, suspended between his Hebrew origins and his Egyptian upbringing. And then there is the most striking case of all: Jesus himself was raised by Joseph, who was not his biological father. The incarnate Son of God grew up in what we would now call a non-traditional family, with a stepfather&rsquo;s love and care shaping his earthly childhood. The Savior of the world was reared in a household that did not match the supposed ideal &mdash; a fact that ought to forever silence the notion that God only works through conventional families.",
      "The genealogy of Jesus in Matthew 1 drives the point home with deliberate force. The evangelist names four women in the lineage of the Messiah &mdash; Tamar, Rahab, Ruth, and Bathsheba &mdash; and each of their stories is marked by irregularity, loss, scandal, or redemption. Tamar&rsquo;s deception, Rahab&rsquo;s past, Ruth&rsquo;s foreignness, Bathsheba&rsquo;s tragedy: these are not the names one would invent for a sanitized royal pedigree. Their inclusion is intentional, a declaration that God weaves his redemptive purposes through exactly the kind of complicated family histories that the world considers disqualifying.",
      "Taken together, the biblical witness offers no idealized nuclear family as the sole vehicle of God&rsquo;s purposes. Instead it shows, again and again, God working through complicated, blended, irregular families to accomplish his good ends. This is profoundly liberating for the modern blended family. The Scriptures do not hold up a single household template and consign all others to second-class status; they reveal a God who delights to bring redemption out of complexity. The blended family stands in good company &mdash; the company of Abraham, Jacob, Joseph, Moses, and the very family of Jesus.",
    ],
  },
  {
    id: "Step-Parenting with Grace",
    heading: "Step-Parenting with Grace",
    paragraphs: [
      "The step-parent role is one of the most difficult in family life, lacking clear cultural scripts and biological bonds. The most common mistake is moving too quickly into a disciplinarian role: a step-parent who tries to immediately establish authority over stepchildren typically generates resentment and resistance. The wiser path, supported by both research and pastoral experience: the biological parent retains primary disciplinary authority, especially early on, while the step-parent first builds relationship and trust. The step-parent functions more like a caring adult mentor &mdash; an aunt or uncle figure &mdash; before gradually growing into a parental role as the relationship deepens. This requires patience and the surrender of ego. A step-parent may invest love for years before it is reciprocated, may be told &ldquo;you&rsquo;re not my real parent,&rdquo; and must love without the guarantee of return. This is, in fact, a profound imitation of God&rsquo;s own love &mdash; which adopts, pursues, and loves children who did not earn it and may resist it. &ldquo;See what kind of love the Father has given to us, that we should be called children of God&rdquo; (1 John 3:1).",
      "The difficulty of the step-parent role begins with the simple fact that our culture provides almost no script for it. A biological parent knows roughly what is expected; the role is ancient and intuitive. A step-parent steps into a relationship with no clear definition, no obvious template, and none of the biological bonding that smooths the way for a birth parent. Are they a parent? A friend? An authority? The ambiguity is genuine, and it leaves many step-parents anxious, uncertain, and prone to overcorrecting in one direction or another. Recognizing this ambiguity as normal, rather than as a personal failure, is the first step toward navigating it wisely.",
      "The single most common and most damaging mistake is moving too quickly into the role of disciplinarian. A step-parent eager to be taken seriously, or simply trying to help, may attempt to establish authority over the stepchildren from the outset &mdash; setting rules, correcting behavior, imposing consequences. The almost universal result is resentment and resistance. The child, who has no relationship of trust with this new adult, experiences the discipline not as care but as intrusion, and a wall goes up that can take years to come down. The step-parent who leads with authority before relationship is virtually guaranteed to provoke the very rebellion they hoped to prevent.",
      "The wiser path, confirmed by both research and pastoral experience, keeps disciplinary authority with the biological parent, especially in the early years. The birth parent, who already has a relationship of trust and love with the child, remains the primary enforcer of rules and consequences, while the step-parent is freed from that fraught role to do the more important early work of building relationship. This division of labor protects the fragile new bond between step-parent and child from being poisoned by conflict before it has had a chance to form. As the relationship deepens over time, the step-parent can gradually grow into greater parental authority &mdash; but it must be earned, not seized.",
      "In the meantime, the step-parent functions most effectively as a caring adult mentor rather than a parent &mdash; something like a favorite aunt or uncle. This is a figure who is warmly interested in the child, available and supportive, fun to be around, and trustworthy, but who does not carry the heavy freight of parental authority. Children can accept and even cherish such a figure far more readily than they can accept a new disciplinarian. From this position of mentor and friend, the step-parent builds the trust and affection that may, in time, ripen into something more like a parental bond &mdash; but only if the early years are not squandered on premature power struggles.",
      "All of this demands extraordinary patience and a deep surrender of ego. The step-parent may pour out love for years before any of it is returned. They may be told, in a moment of anger, &ldquo;you&rsquo;re not my real parent&rdquo; &mdash; a wound that lands all the harder because there is truth in it. They must learn to love without the guarantee of reciprocation, to keep showing up in the face of rejection, to absorb hostility without retaliating. This is among the hardest forms of love a person can be asked to practice, and it cannot be sustained by willpower alone; it requires a source of love deeper than the step-parent&rsquo;s own resources.",
      "That deeper source is the love of God himself, which the step-parent&rsquo;s vocation profoundly imitates. God adopts children who are not his by birth, pursues those who resist him, and loves those who have done nothing to earn it and may give nothing in return. The step-parent who loves a child not their own, patiently and without guarantee of reciprocation, is enacting in miniature the very heart of the gospel. &ldquo;See what kind of love the Father has given to us, that we should be called children of God&rdquo; (1 John 3:1). The step-parent who grasps this is no longer merely managing a difficult role; they are participating in the adopting, pursuing love of God.",
    ],
  },
  {
    id: "Loyalty and Grief",
    heading: "Loyalty and Grief",
    paragraphs: [
      "Children in blended families often carry deep, unspoken grief and loyalty conflicts. A child who warms to a step-parent may feel they are betraying their biological parent; a child whose parent died may feel a new step-parent is trying to replace someone irreplaceable; a child of divorce may still hold the fantasy that their parents will reunite, a hope the remarriage finally extinguishes. These dynamics are usually beneath the surface, expressed not in words but in behavior &mdash; withdrawal, anger, acting out. The adults&rsquo; task is to make space for this grief rather than demanding instant acceptance. This means never forcing a child to choose, never disparaging the other biological parent, never insisting a child call a step-parent &ldquo;Mom&rdquo; or &ldquo;Dad&rdquo; against their wishes, and patiently reassuring children that loving a new family member does not require abandoning love for an old one. The grief is real and must be honored, not rushed.",
      "The loyalty conflict is one of the most painful and least understood dynamics in a blended family. A child who begins to genuinely like a step-parent &mdash; to enjoy their company, to seek their approval, to feel affection for them &mdash; may be ambushed by guilt, as if warming to this new adult were an act of treason against their birth parent. The child may pull back precisely when the relationship is going well, sabotaging a budding bond in order to relieve the unbearable sense of betrayal. The adults who understand this dynamic can respond with patience rather than hurt, recognizing the child&rsquo;s withdrawal not as rejection but as the symptom of an impossible inner conflict.",
      "When a child has lost a parent to death, the loyalty conflict takes on an even sharper edge. The arrival of a step-parent can feel to the grieving child like an attempt to replace someone irreplaceable, to paper over a loss that the child is not ready to relinquish. To accept the step-parent can feel like agreeing that the deceased parent is truly gone and can be substituted &mdash; an agreement the child&rsquo;s heart may not be able to make. The step-parent who understands this will take great care never to position themselves as a replacement, but rather as a new and distinct presence who honors rather than erases the memory of the one who died.",
      "Children of divorce often carry a different but equally powerful burden: the lingering fantasy that their parents will somehow reunite. However unrealistic, this hope can persist for years, quietly shaping the child&rsquo;s emotional world. A parent&rsquo;s remarriage is the event that finally and decisively extinguishes that hope, and the child may grieve its death intensely &mdash; sometimes directing anger at the new step-parent, who has become, in the child&rsquo;s mind, the obstacle to the longed-for reunion. The adults who recognize this grief for what it is can avoid taking the child&rsquo;s hostility personally and can instead gently help the child mourn a hope that was never going to be fulfilled.",
      "What makes these dynamics so difficult to address is that they almost never surface in words. A young child cannot articulate &ldquo;I feel disloyal to my father when I enjoy your company,&rdquo; nor can a teenager easily say &ldquo;your remarriage just killed my hope that my family would be whole again.&rdquo; Instead the grief comes out sideways &mdash; in withdrawal, in sullenness, in sudden anger, in defiance and acting out. The adults who read these behaviors only at the surface will respond with frustration and discipline, missing the grief underneath. The adults who learn to see the hidden loyalty conflict and the buried grief can respond instead with compassion and patience.",
      "The fundamental task of the adults, then, is to make space for the child&rsquo;s grief rather than demanding instant acceptance and affection. This is a posture of patience and emotional generosity, a willingness to let the child take whatever time they need to grieve and adjust. It means resisting the very natural desire to be accepted quickly, to have the new family &ldquo;work&rdquo; on the adults&rsquo; timeline. The child who is given room to grieve, who is not pressured to perform an affection they do not yet feel, is far more likely to arrive at genuine acceptance in the end than the child who is rushed.",
      "Several concrete commitments flow from this posture. The adults must never force a child to choose between the new family and the old; never disparage the other biological parent, whatever the history between the adults; never insist that a child call a step-parent &ldquo;Mom&rdquo; or &ldquo;Dad&rdquo; against the child&rsquo;s wishes; and patiently, repeatedly reassure the child that loving a new family member does not require abandoning love for anyone they already love. The human heart is not a zero-sum container; there is room to love both the old and the new. The grief is real, and it must be honored and given time, not rushed or resented away.",
    ],
  },
  {
    id: "Becoming One Family",
    heading: "Becoming One Family",
    paragraphs: [
      "Integration is a long, patient work, not an event. It happens gradually, through shared experiences, accumulated trust, new family traditions, and the steady, undramatic faithfulness of adults who keep showing up. The marriage must be the secure foundation: when the husband-wife relationship is strong, unified, and prioritized, the children gain the security of a stable home, even amid the complexity. Practical wisdom: create new shared rituals and traditions that belong to this family (not imposing one side&rsquo;s old traditions on the other); allow relationships to develop at their own pace; hold family meetings to surface tensions; and seek outside help (a Christian counselor experienced with blended families) before problems become entrenched. Above all, the blended family needs grace &mdash; the grace the gospel models, in which strangers and even former enemies are made into one family. The church itself is a blended family, made one not by blood but by adoption in Christ. &ldquo;He settles the solitary in a home&rdquo; (Ps 68:6) &mdash; God&rsquo;s heart is to make families out of the scattered, and he can do so here.",
      "The first thing to grasp about integration is that it is a process, not an event. There is no single moment when a blended family suddenly becomes one; there is only the slow accumulation of shared experiences, the gradual building of trust, and the patient establishment of a common life. It happens through ordinary days far more than through dramatic breakthroughs &mdash; through meals eaten together, vacations taken, crises weathered, jokes shared, and the steady, undramatic faithfulness of adults who simply keep showing up. The family that understands integration as a years-long process will be spared the despair of expecting it to happen all at once.",
      "At the center of a healthy blended family stands the marriage, which must be the secure foundation on which everything else is built. When the husband-wife relationship is strong, unified, and consistently prioritized, it provides the stable center of gravity that allows the children to feel safe even amid all the complexity around them. A divided couple, by contrast &mdash; one who allows the children to drive a wedge between them, or who disagrees openly about parenting &mdash; leaves the whole family without a secure anchor. Protecting and prioritizing the marriage is therefore not a selfish neglect of the children but one of the most important gifts the couple can give them.",
      "New shared rituals and traditions are among the most powerful tools for building a sense of common identity. A blended family draws together people with different histories, different customs, and different memories of &ldquo;how things are done.&rdquo; The temptation to simply import one side&rsquo;s old traditions and impose them on everyone is a recipe for resentment, because it signals that one family&rsquo;s way is normative and the other&rsquo;s is not. Far wiser is the deliberate creation of new traditions that belong to this family and no other &mdash; a holiday celebrated in a fresh way, a weekly ritual invented together, customs that everyone helped shape and so can claim as their own.",
      "Several further practices support healthy integration. Relationships must be allowed to develop at their own pace, without forcing intimacy or affection on a timeline. Regular family meetings, where tensions can be surfaced and aired in a structured and safe way, prevent resentments from festering in silence. And the family should not hesitate to seek outside help &mdash; ideally a Christian counselor experienced specifically with the dynamics of blended families &mdash; before problems become entrenched. Seeking help early, while difficulties are still manageable, is a mark of wisdom and strength, not of failure, and it can spare a family years of avoidable pain.",
      "Beneath all the practical wisdom lies the family&rsquo;s deepest need, which is grace. The blended family is, almost by definition, a gathering of people who did not choose one another, who carry old wounds, and who must somehow learn to live as one. Nothing but grace &mdash; the patient, forgiving, unearned love that the gospel models &mdash; is sufficient for such a task. It is the grace by which God makes strangers and even former enemies into a single family, the grace that absorbs offense and keeps loving when love is not returned. The blended family that draws daily on this grace, rather than relying on goodwill or willpower alone, has access to a resource equal to its challenge.",
      "There is a profound encouragement in recognizing that the church itself is a blended family. The people of God are made one not by blood but by adoption in Christ &mdash; gathered from every background, made kin not by birth but by grace. The very thing a blended family is trying to do, the church does on a cosmic scale: it makes a family out of those who were strangers. And the God who does this delights to do it. &ldquo;He settles the solitary in a home&rdquo; (Psalm 68:6) reveals God&rsquo;s heart to gather the scattered and make families out of the lonely. The God who has done this throughout Scripture, and who does it still in his church, is fully able to do it in this home as well.",
    ],
  },
];

const videoItems = [
  { videoId: "9oJ1Vh0Cr1Y", title: "Building a Christian Blended Family" },
  { videoId: "5XbU8Fz2vK0", title: "Step-Parenting with Grace and Patience" },
  { videoId: "vQ7tQ0kK0nM", title: "Navigating Blended Family Challenges Biblically" },
];

export default function BlendedFamilyGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const currentSection = sections.find((s) => s.id === tab);
  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}1A`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "0.35rem 1rem", fontSize: "0.78rem", color: ACCENT, fontWeight: 600, marginBottom: "1rem", letterSpacing: 1, textTransform: "uppercase" as const }}>
            Family &amp; Faith &mdash; Blended Families
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Blended Family Guide
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto", marginBottom: "1.5rem" }}>
            Building a blended family on faith &mdash; the unique challenges of stepfamilies, biblical models of complex families, step-parenting with grace, loyalty conflicts and grief, and the long, patient work of becoming one family.
          </p>
          <div style={{ background: `${ACCENT}0D`, border: `1px solid ${ACCENT}33`, borderRadius: 14, padding: "1rem 1.5rem", maxWidth: 560, margin: "0 auto", textAlign: "left" as const }}>
            <p style={{ color: TEXT, fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
              &ldquo;God settles the solitary in a home; he leads out the prisoners to prosperity.&rdquo;
            </p>
            <p style={{ color: ACCENT, fontSize: "0.82rem", fontWeight: 600, marginTop: "0.5rem", marginBottom: 0 }}>Psalm 68:6</p>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? `${ACCENT}1A` : "transparent",
                color: tab === t ? ACCENT : MUTED,
                transition: "all 0.2s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4, color: TEXT }}>{currentSection.heading}</h2>
            {currentSection.paragraphs.map((para, i) => (
              <p
                key={i}
                style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </section>
        )}

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45, color: TEXT, margin: 0 }}>{v.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3rem", background: `${ACCENT}0D`, border: `1px solid ${ACCENT}33`, borderRadius: 14, padding: "1.5rem", textAlign: "center" as const }}>
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
            God settles the solitary in a home. The same grace that makes the church one family out of strangers can make one family here.
          </p>
        </div>
      </main>
    </div>
  );
}
