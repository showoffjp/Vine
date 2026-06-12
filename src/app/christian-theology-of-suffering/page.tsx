"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";

const TABS = [
  "The Problem of Evil",
  "The Book of Job",
  "Lament Psalms",
  "Romans 5 and 8",
  "The Cross as Answer",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

export default function ChristianTheologyOfSufferingPage() {
  const [tab, setTab] = useState<Tab>("The Problem of Evil");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? GOLD : BORDER}`,
    background: active ? "rgba(217, 119, 6, 0.12)" : "transparent",
    color: active ? GOLD : MUTED,
    cursor: "pointer",
    fontSize: "0.88rem",
    fontWeight: active ? 600 : 400,
    transition: "all 0.15s ease",
  });

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
  };

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
              color: GOLD,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "0.6rem",
            }}
          >
            Theology &amp; Suffering
          </div>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Christian Theology of Suffering
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Why suffering? The problem of evil, the book of Job, the lament psalms, Romans 5 and 8,
            and the cross as God&rsquo;s answer &mdash; not an explanation but a presence. This guide
            traces the theology of suffering from Epicurus&rsquo;s trilemma through Plantinga,
            Moltmann, and the resurrection.
          </p>
          <div
            style={{
              marginTop: "1.75rem",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${GOLD}`,
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
            }}
          >
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
              &ldquo;For I consider that the sufferings of this present time are not worth comparing
              with the glory that is to be revealed to us.&rdquo;
            </p>
            <p style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 600 }}>Romans 8:18</p>
          </div>
        </header>

        {/* Tabs */}
        <nav
          aria-label="Page sections"
          style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "2.25rem" }}
        >
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={tabButtonStyle(tab === t)}>
              {t}
            </button>
          ))}
        </nav>

        {/* Tab: The Problem of Evil */}
        {tab === "The Problem of Evil" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              The problem of evil is both the most serious intellectual challenge to theism and the most
              urgent pastoral question in the church. This section traces its classical formulations,
              the philosophical responses, and the distinction that shapes how we minister to suffering
              people.
            </p>

            {[
              {
                title: "Epicurus&rsquo;s Trilemma &mdash; The Classical Formulation",
                body: "The ancient philosopher Epicurus posed the problem in its sharpest form: If God is willing to prevent evil but not able, then he is not omnipotent. If he is able but not willing, he is malevolent. If both willing and able, why does evil exist? This trilemma has defined the problem of evil in Western philosophy ever since. It rests on three premises: God is all-powerful; God is all-good; evil exists. All three cannot be simultaneously true &mdash; or so the argument runs. Every theodicy in the Christian tradition is, in part, a response to this trilemma, attempting to show that the three propositions are in fact compatible.",
              },
              {
                title: "Leibniz and the Birth of Theodicy",
                body: "The word &ldquo;theodicy&rdquo; was coined by the philosopher Gottfried Wilhelm Leibniz in 1710 &mdash; from the Greek theos (God) and dike (justice). It names the project of vindicating God&rsquo;s goodness and justice in the face of evil and suffering. Leibniz argued that God, being perfectly good and omnipotent, must have created the best of all possible worlds &mdash; a position famously satirized by Voltaire in Candide. While Leibniz&rsquo;s specific answer has few defenders today, his framing of the problem as a rational one requiring a rational response has shaped the entire discussion. The question is whether the existence of evil is logically incompatible with the existence of a good and powerful God, or merely evidentially awkward.",
              },
              {
                title: "Intellectual vs. Emotional Problem of Evil",
                body: "One of the most important distinctions in contemporary philosophy of religion is between the intellectual and the emotional problem of evil. The intellectual problem asks: is the existence of evil logically inconsistent with the existence of an omnipotent, omnibenevolent God? The emotional problem asks: how do I go on believing in God when I am in profound suffering &mdash; when my child has died, when the cancer has returned, when the violence has not stopped? These are different questions requiring different responses. The philosopher who has successfully answered the intellectual problem has not thereby helped the grieving mother. The pastor who sits with the grieving mother may not need to resolve the intellectual problem at all. Conflating the two questions produces bad philosophy and worse pastoral care.",
              },
              {
                title: "Alvin Plantinga&rsquo;s Free Will Defense",
                body: "The most influential contemporary response to the logical problem of evil comes from the philosopher Alvin Plantinga. His free will defense argues that it is possible that God could not create free creatures who always freely choose the good &mdash; because a free creature who could only choose the good would not be genuinely free. If God wished to create beings capable of genuine love and relationship, he had to create beings capable of genuine rejection and cruelty. The existence of moral evil (evil caused by free human choices) is therefore not logically incompatible with the existence of an omnipotent, perfectly good Creator. Plantinga&rsquo;s argument is widely regarded as having successfully answered the logical problem of evil, even by philosophers who do not share his theism.",
              },
              {
                title: "Open Theism and the Problem of Natural Evil",
                body: "The free will defense works better for moral evil (war, murder, cruelty) than for natural evil (earthquakes, cancer, pandemic disease). Open theism, associated with theologians like Greg Boyd and Clark Pinnock, responds to natural evil by limiting divine foreknowledge: God does not foreknow the specific future free choices of creatures, and the world is genuinely open. This allows God to be genuinely surprised by suffering and grief over it without having predetermined it. Critics argue that open theism reduces God&rsquo;s sovereignty and comfort: a God who does not know the future cannot give the assurance that all things will work together for good. The debate remains live, and different pastoral contexts may call for different emphases.",
              },
              {
                title: "Why This Matters Pastorally",
                body: "The theology of suffering shapes how we sit with people who are suffering. The pastor who believes suffering is always disciplinary will tell people what God is trying to teach them &mdash; often the worst possible response. The pastor who believes God is never involved in suffering will have nothing to offer but sympathy. The pastor who has grappled with the distinction between the intellectual and emotional problems, who knows that the cross is God&rsquo;s solidarity with the sufferer, and who has learned the ministry of presence from Job&rsquo;s friends&rsquo; first seven days of silence, will be able to offer something that neither philosophy nor therapy alone can provide: the God who has himself suffered, who has not explained the suffering but entered it.",
              },
            ].map((item) => (
              <article key={item.title} style={cardStyle}>
                <h2
                  style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, lineHeight: 1.35, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </article>
            ))}
          </section>
        )}

        {/* Tab: The Book of Job */}
        {tab === "The Book of Job" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              The book of Job is the Bible&rsquo;s most sustained wrestling with innocent suffering. It
              refuses easy answers, exposes bad theology dressed as comfort, and ends not with an
              explanation but with a divine presence that reframes everything.
            </p>

            {[
              {
                title: "Job&rsquo;s Complaint &mdash; The Honesty of Anguish",
                body: "Job&rsquo;s opening lament in chapters 3 and following is among the most raw expressions of human suffering in world literature. He curses the day of his birth. He demands an audience with God. He refuses the easy theology his friends offer. He insists that his suffering is undeserved and that God owes him an answer. What is remarkable is that God, at the end of the book, vindicates Job&rsquo;s complaint over the friends&rsquo; theology: &ldquo;You have not spoken of me what is right, as my servant Job has&rdquo; (Job 42:7). The implication is striking: honest anguish directed toward God, even when it includes accusation, is more theologically faithful than pious-sounding explanations that misrepresent God&rsquo;s character. Lament is not faithlessness. It is a form of faith.",
              },
              {
                title: "The Three Friends &mdash; Bad Theology Dressed as Comfort",
                body: "Eliphaz, Bildad, and Zophar represent a theology of retributive causation: if you are suffering, you must have sinned. This was the dominant wisdom theology of the ancient world &mdash; and it remains a significant strand in contemporary Christian thought, in forms ranging from prosperity gospel to the common intuition that suffering must be punishment. The friends&rsquo; theology is internally coherent, theologically sophisticated, and pastorally catastrophic. They know how to speak of God; they do not know how to speak to Job. They mistake their theological system for the reality of God, and they mistake their friend&rsquo;s need for a theological lecture for a need for presence. God&rsquo;s verdict: they are wrong. Their comfort is miserable (Job 16:2). The best pastoral move they make in the entire book is the seven days of silent sitting before they open their mouths (Job 2:13).",
              },
              {
                title: "God&rsquo;s Answer from the Whirlwind &mdash; Presence, Not Explanation",
                body: "When God finally speaks in chapters 38-41, he does not answer Job&rsquo;s questions. He does not explain why Job has suffered. He does not offer a theodicy. Instead, he speaks from the whirlwind: Where were you when I laid the foundation of the earth? (38:4). The questions are not rhetorical dismissals but invitations into a larger frame: Job&rsquo;s suffering is real, but it is occurring within a universe of which Job knows only a fragment. God&rsquo;s response is not an explanation but a presence &mdash; the overwhelming, humbling, and paradoxically comforting presence of the Creator who holds everything that Job cannot see. Job&rsquo;s response is revealing: &ldquo;I had heard of you by the hearing of the ear, but now my eye sees you&rdquo; (42:5). The suffering has not been explained; it has been reframed by encounter.",
              },
              {
                title: "Job&rsquo;s Restoration &mdash; What It Does and Does Not Mean",
                body: "Job 42 records Job&rsquo;s restoration: his fortunes are doubled, new children are given, his life is extended. This ending has troubled readers across the centuries. Does it imply that suffering always ends in blessing? That the friends&rsquo; theology was right after all? The key is that the restoration comes after, not instead of, the divine confrontation from the whirlwind. Job&rsquo;s vindication is not primarily the new children and cattle but God&rsquo;s declaration that Job has spoken rightly. The material restoration is not the point; the relational restoration &mdash; the encounter with God, the vindication, the intercession Job makes for his friends &mdash; is the point. The book refuses to promise that innocent suffering will always end in earthly restoration, but it does promise that honest anguish directed toward God is heard.",
              },
              {
                title: "What Job Teaches About Pastoral Care",
                body: "The book of Job is one of the most important texts for pastoral formation. Its negative lesson: don&rsquo;t be Eliphaz, Bildad, or Zophar. Don&rsquo;t explain. Don&rsquo;t theologize. Don&rsquo;t tell the person what God is teaching them. Don&rsquo;t turn their suffering into a sermon illustration. Its positive lesson: be present. Sit in the dust. Stay. Job&rsquo;s friends were at their best in the seven days of silence before they spoke. When they opened their mouths, the quality of their presence collapsed into the quality of their theology. The ministry of presence &mdash; showing up, staying, saying less and bearing more &mdash; is what Job needed and what the friends could have offered if they had not been so eager to defend God. The book suggests that suffering people do not primarily need theodicy; they need companions.",
              },
            ].map((item) => (
              <article key={item.title} style={cardStyle}>
                <h2
                  style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, lineHeight: 1.35, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </article>
            ))}
          </section>
        )}

        {/* Tab: Lament Psalms */}
        {tab === "Lament Psalms" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Approximately one-third of the Psalter consists of lament psalms &mdash; the church&rsquo;s
              authorized language for honest suffering. This section explores their anatomy, their
              darkest expression, and what they teach about prayer in pain.
            </p>

            {[
              {
                title: "The Anatomy of Lament",
                body: "Biblical scholars have identified a consistent structure in the lament psalms: (1) Address &mdash; the psalm is directed to God, not merely expressed into the void; (2) Complaint &mdash; the specific pain is named honestly, often with accusation; (3) Petition &mdash; a specific request is made; (4) Trust &mdash; the psalmist reorients toward what he knows of God&rsquo;s character, not because the complaint is resolved but as an act of will; (5) Vow of praise &mdash; a commitment to praise when the deliverance comes. This structure is theologically important: lament is not despair, because it addresses God and expresses trust even while naming pain. The anatomy of lament holds grief and faith together without collapsing one into the other.",
              },
              {
                title: "Psalm 22 &mdash; The Cry Jesus Quotes from the Cross",
                body: "&ldquo;My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?&rdquo; (Ps 22:1). Jesus quotes these opening words from the cross (Matt 27:46), which means that the lament psalm &mdash; with its raw accusation of divine abandonment &mdash; is the language Jesus chose to pray in his deepest suffering. This is theologically staggering. God incarnate, on the cross, uses the authorized language of lament to name his experience. This validates the lament tradition as the most Christ-like response to overwhelming suffering: not forced praise, not theological explanation, but honest accusation addressed to a God who is still somehow &ldquo;my&rdquo; God even in the abandonment. The psalm moves from desolation (vv. 1-21) to trust and praise (vv. 22-31) &mdash; but it does not skip the desolation.",
              },
              {
                title: "Psalm 88 &mdash; The Darkest Psalm",
                body: "Psalm 88 is unique in the Psalter: it is the only lament psalm with no resolution. No turn to trust. No vow of praise. It ends with the word &ldquo;darkness&rdquo; &mdash; &ldquo;darkness is my closest friend&rdquo; (v. 18). The psalmist is near death, abandoned by friends, and feels that God himself has turned against him. There is no relief. The psalm simply stops. The theological significance of Psalm 88 is enormous: God himself, through the inspired Psalter, has placed this text in the mouth of his people. There is a form of suffering so profound that the only honest response is unresolved lament &mdash; and God does not require us to resolve it before he will receive it. Psalm 88 gives people in the darkest depression, the most unrelenting grief, permission to be exactly where they are.",
              },
              {
                title: "The Theology of Complaint Before God",
                body: "The lament psalms establish an extraordinary theological principle: you may bring your full experience to God, including accusation, without thereby abandoning faith. In fact, bringing the complaint to God rather than away from him is itself an act of faith &mdash; it assumes that God is real, that he cares, that he is capable of responding, and that the relationship between the psalmist and God can hold the weight of honest grievance. The person who cannot lament before God has either a theology of God that makes honest address impossible (a God too transcendent to be spoken to, or too fragile to be challenged) or a relationship with God too formal or fearful to bear honesty. The lament psalms democratize grief: anyone may use this language. The cry of &ldquo;How long, O Lord?&rdquo; is not faithlessness; it is faith.",
              },
              {
                title: "Walter Brueggemann on Psalms of Disorientation",
                body: "The Old Testament scholar Walter Brueggemann has offered one of the most influential theological interpretations of the lament psalms in his book The Message of the Psalms. He organizes the Psalter into psalms of orientation (settled, confident faith), disorientation (lament, complaint, grief), and new orientation (praise born from the other side of darkness). His critical pastoral observation is that the church has systematically excised psalms of disorientation from its worship &mdash; sanitizing its liturgy to include only orientation and new orientation. The result, he argues, is a community that cannot hold genuine suffering: people are implicitly told that honest grief is incompatible with faith, and those in the darkest seasons find that the church&rsquo;s worship does not speak their language. Restoring lament to corporate worship is, for Brueggemann, a pastoral and political necessity.",
              },
            ].map((item) => (
              <article key={item.title} style={cardStyle}>
                <h2
                  style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, lineHeight: 1.35, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </article>
            ))}
          </section>
        )}

        {/* Tab: Romans 5 and 8 */}
        {tab === "Romans 5 and 8" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Romans 5 and 8 contain Paul&rsquo;s most developed theology of suffering &mdash; its
              productive logic, its comparative weight against future glory, its location within the
              groaning of all creation, and the intercessory presence of the Spirit in the midst of it.
            </p>

            {[
              {
                title: "Romans 5:3-5 &mdash; Suffering, Perseverance, Character, Hope",
                body: "We rejoice in our sufferings, knowing that suffering produces perseverance, and perseverance produces character, and character produces hope, and hope does not put us to shame, because God&rsquo;s love has been poured into our hearts through the Holy Spirit who has been given to us (Rom 5:3-5). Paul presents a causal chain: suffering does not merely coexist with Christian hope; it produces the very character from which hope flows. The word for &ldquo;produces&rdquo; is katergazetai &mdash; to work out, to accomplish, to bring to completion. Suffering is not random; it is working something. The chain runs through perseverance (hupomone &mdash; remaining under the pressure rather than escaping it) and character (dokime &mdash; the proven quality that emerges from testing) to hope. The sequence is not automatic: it describes what happens when suffering is received by faith rather than met with bitterness.",
              },
              {
                title: "Romans 8:18 &mdash; Present Suffering vs. Future Glory",
                body: "&ldquo;For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us&rdquo; (Rom 8:18). Paul does not minimize present suffering; he compares it to something so vast that the comparison makes the suffering &ldquo;not worth&rdquo; the comparison. The word translated &ldquo;glory&rdquo; (doxa) refers to the unveiled presence and beauty of God &mdash; what Paul elsewhere calls the weight of eternal glory (2 Cor 4:17), a glory that is heavy, solid, substantial, in contrast to the &ldquo;light and momentary troubles&rdquo; of the present age. This is not denial of suffering&rsquo;s reality but an insistence on its relative weight when set against the eschatological horizon. Paul is doing eschatological arithmetic: the future is so large that it changes the comparative weight of the present.",
              },
              {
                title: "Romans 8:28 &mdash; All Things Work Together",
                body: "&ldquo;And we know that in all things God works for the good of those who love him, who have been called according to his purpose&rdquo; (Rom 8:28). This is the most quoted and most misapplied verse in the Christian experience of suffering. What it does not mean: that everything that happens is good, that bad things have silver linings visible to us, or that we must feel cheerful about our suffering because God is using it. What it does mean: God is actively working &mdash; sunergei, cooperating, working alongside &mdash; in all things, not merely the pleasant ones. The scope is radical: all things. Including the diagnosis, the betrayal, the loss. The good toward which God is working is defined in verse 29: conformity to the image of his Son. It is a good so large that the most excruciating suffering is raw material for it, without ceasing to be excruciating.",
              },
              {
                title: "The Groaning of Creation &mdash; Romans 8:22-23",
                body: "&ldquo;We know that the whole creation has been groaning as in the pains of childbirth right up to the present time. Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies&rdquo; (Rom 8:22-23). Paul locates human suffering within a cosmic frame: the creation itself is suffering, waiting for liberation from its bondage to decay. Suffering is not an anomaly in an otherwise good world; it is the signature experience of a world under the curse awaiting its redemption. The image of childbirth is deliberate: the groaning is painful, but it is purposive. Something is being born. The Spirit&rsquo;s firstfruits in the believer are the down payment of the coming liberation &mdash; enough to taste, not yet enough to satisfy. We groan because we have tasted enough to want more.",
              },
              {
                title: "The Intercession of the Spirit &mdash; Romans 8:26-27",
                body: "&ldquo;The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. And he who searches our hearts knows the mind of the Spirit, because the Spirit intercedes for God&rsquo;s people in accordance with the will of God&rdquo; (Rom 8:26-27). This passage is among the most pastorally significant in all of Paul. In the darkest suffering, when we cannot find words to pray, when the pain has reduced language to incoherent groaning, the Spirit takes our very wordlessness and intercedes with it. The groan of the believer becomes the prayer of the Spirit. The one who cannot pray is not cut off from prayer; the Holy Spirit translates their suffering into intercession. This is the most intimate form of divine participation in human pain in the New Testament.",
              },
            ].map((item) => (
              <article key={item.title} style={cardStyle}>
                <h2
                  style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, lineHeight: 1.35, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </article>
            ))}
          </section>
        )}

        {/* Tab: The Cross as Answer */}
        {tab === "The Cross as Answer" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              The Christian answer to suffering is not primarily a philosophical argument but a person
              and an event: the crucified and risen Christ. This section explores the cross as
              God&rsquo;s solidarity with suffering, the resurrection as vindication, and the pastoral
              application of Easter to the deepest pain.
            </p>

            {[
              {
                title: "Jürgen Moltmann &mdash; The Theology of the Crucified God",
                body: "The German theologian Jürgen Moltmann, shaped by his experience as a prisoner of war who survived while friends died, wrote The Crucified God (1972) as a sustained argument that the cross reveals a God who suffers with us. Against the traditional philosophical theism that affirmed divine impassibility (God cannot suffer), Moltmann argued that the crucifixion is the event in which God himself enters human suffering, abandonment, and death. The Father suffers the loss of the Son; the Son suffers abandonment by the Father; the Spirit is the love that holds them together through the dereliction. This is not the God who watches suffering from the outside; it is the God who is found at the bottom of every abyss because he has been there. For the person in profound suffering, Moltmann&rsquo;s God is not a problem to be explained but a companion to be met.",
              },
              {
                title: "The Cry of Dereliction &mdash; Matthew 27:46",
                body: "&ldquo;My God, my God, why have you forsaken me?&rdquo; (Matt 27:46). Jesus, quoting Psalm 22 from the cross, voices the experience of divine abandonment &mdash; the sense that God is absent, silent, far away, unresponsive. This is not a theological mistake by Jesus; it is the deepest solidarity God could offer to every human being who has ever felt abandoned by the God they trusted. The God of the universe has himself experienced, in human flesh, what it feels like to be in the place where God seems most absent. The cross is not the place where God was absent from Jesus; it is the place where the experience of God&rsquo;s absence was taken up into the Trinitarian life. Nothing the sufferer experiences is outside the scope of what God in Christ has entered.",
              },
              {
                title: "The Resurrection as Vindication, Not Avoidance",
                body: "The resurrection is not the cancellation of the cross; it is its vindication. Jesus is not raised instead of having suffered; he is raised after having suffered, bearing the marks of the wounds (John 20:27). The resurrection does not erase the suffering but transforms its ultimate meaning: the suffering is real, it happened, it left marks &mdash; and it is not the final word. This is the structure of the Christian answer to suffering: not that the suffering did not happen, not that it was not as bad as it seemed, but that it is not the last thing. The resurrection vindicates the sufferer: what you have endured is seen, it is real, it is not nothing &mdash; and it is not the end. The Easter answer to Good Friday is not &ldquo;that wasn&rsquo;t really suffering&rdquo; but &ldquo;suffering is not the final word.&rdquo;",
              },
              {
                title: "Your Pain Is Not the Final Word",
                body: "The pastoral application of the resurrection to suffering is not the cheap comfort of &ldquo;everything will be fine.&rdquo; It is the costly comfort of &ldquo;this is not the last thing.&rdquo; The resurrection establishes that God&rsquo;s ultimate word over suffering, death, loss, and abandonment is life, presence, restoration, and vindication. This does not make the present pain less painful; it locates it within an eschatological frame that holds the future. The person in the darkest suffering is not being promised a resolution on this side of eternity &mdash; though that may come. They are being promised that the One who raised Jesus from the dead is the One who holds their pain, and that his last word has already been spoken: resurrection. The cross was real and the tomb was sealed; and it was not the end.",
              },
              {
                title: "The Pastoral Application of Easter to Suffering",
                body: "The theology of the cross and resurrection, rightly understood, produces a distinctive pastoral posture. It does not produce explanation (&ldquo;here is why God allowed this&rdquo;). It does not produce bypassing (&ldquo;God must have needed another angel&rdquo;). It produces solidarity and eschatological hope: the God of Jesus has been here; the God of Jesus has raised Jesus; the God of Jesus holds this suffering and will not abandon the sufferer. Practically, this means: sitting with people in their Good Fridays without rushing them to Easter; naming the reality of suffering without domesticating it; offering the resurrection as genuine hope rather than false comfort. Easter does not make Good Friday less dark; it makes it survivable. And it does so not by explanation but by the presence of the One who has been through it.",
              },
            ].map((item) => (
              <article key={item.title} style={cardStyle}>
                <h2
                  style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, lineHeight: 1.35, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </article>
            ))}

            <div
              style={{
                ...cardStyle,
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                The answer the cross gives
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                The cross does not answer the philosophical problem of evil. It answers the existential
                and relational problem: are you alone in this? Has God been here? Is there any hope beyond
                the present darkness? The cross says: God has been in the worst place; the resurrection
                says: the worst place is not the last place. This is not theodicy. It is gospel &mdash;
                and it is enough.
              </p>
            </div>
          </section>
        )}

        {/* Tab: Videos */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Three video teachings on suffering, the theology of pain, and the hope of the
              resurrection &mdash; from Tim Keller, N.T. Wright, and John Piper.
            </p>

            {[
              {
                videoId: "dPrPxsMpBqo",
                title: "Tim Keller — Making Sense of God: Suffering",
                description:
                  "Tim Keller addresses the problem of evil and suffering from a philosophical and pastoral angle, exploring why Christianity offers a unique answer to the question of suffering that other worldviews cannot match.",
              },
              {
                videoId: "b9ywXbEqMbg",
                title: "N.T. Wright on Suffering and Hope",
                description:
                  "N.T. Wright explores the New Testament theology of suffering and hope, grounding the Christian response to pain in the resurrection and the cosmic renewal promised in Romans 8.",
              },
              {
                videoId: "Xhp7qiCkZjE",
                title: "John Piper — Suffering and the Sovereignty of God",
                description:
                  "John Piper examines what Scripture says about God’s sovereignty in suffering, including the difficult question of how God can be both good and in control when his people face profound pain.",
              },
            ].map((video) => (
              <article key={video.videoId} style={cardStyle}>
                <VideoEmbed videoId={video.videoId} title={video.title} />
                <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: "1rem 0 0.4rem" }}>
                  {video.title}
                </h3>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                  {video.description}
                </p>
              </article>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
