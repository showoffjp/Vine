"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";
const PINK = "#EC4899";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "constitution", label: "Body & Soul" },
  { id: "conscience", label: "Conscience" },
  { id: "emotions", label: "Emotions" },
  { id: "will", label: "Free Will" },
  { id: "gender", label: "Gender & Sexuality" },
  { id: "death", label: "Death & Afterlife" },
  { id: "journal", label: "Reflection" },
  { id: "videos", label: "Videos" },
];

const OVERVIEW_GRID = [
  { color: PURPLE, icon: "🌿", label: "Creaturely", text: "Humans are not divine — we are creatures, made from dust (Genesis 2:7). The first mistake of every utopian ideology is forgetting this. Human dignity is not infinite. We are finite, dependent, mortal — and that is good. Creatureliness is not a defect to be overcome but a gift to be received." },
  { color: GOLD, icon: "✨", label: "Image-Bearers", text: "Humans are uniquely made in the image of God (Genesis 1:26-27) — the only creatures of whom this is said. Whatever imago Dei entails (rationality, relationality, moral agency, representation), it grants every human being unique dignity and worth." },
  { color: TEAL, icon: "💔", label: "Fallen", text: "The Fall (Genesis 3) introduced sin, death, and distortion into human nature. We are not what we were made to be. This explains the mystery of human wickedness alongside human beauty: real image of God, genuinely marred by sin." },
  { color: GREEN, icon: "🔄", label: "Being Redeemed", text: "In Christ, humanity is being restored. The goal of redemption is not escape from the human but the renewal of the human — a new creation that fulfills what the first creation intended. The resurrection body is the destiny of redeemed humanity." },
];

const CONSTITUTION_ITEMS = [
  {
    id: "dichotomy", title: "Dichotomy: Body and Soul", ref: "Genesis 2:7; Matthew 10:28",
    body: "Dichotomy holds that humans consist of two parts: body (material) and soul (immaterial). 'The LORD God formed a man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being' (Genesis 2:7). Jesus distinguishes the one who 'can kill the body but cannot kill the soul' from God who 'can destroy both soul and body in hell' (Matthew 10:28). Most of Christian history has been broadly dichotomist, understanding the soul as the immaterial principle of life, identity, and relationship with God.",
    implication: "Human death is not the end of personal existence — the soul survives bodily death (Luke 23:43 — 'today you will be with me in paradise')."
  },
  {
    id: "trichotomy", title: "Trichotomy: Body, Soul, and Spirit", ref: "1 Thessalonians 5:23; Hebrews 4:12",
    body: "Trichotomy holds that humans consist of three parts: body, soul, and spirit. 1 Thessalonians 5:23 — 'May your whole spirit, soul and body be kept blameless.' Hebrews 4:12 — 'the word of God... it penetrates even to dividing soul and spirit.' Trichotomists distinguish soul (natural life/psyche) from spirit (the capacity for relationship with God). Many Pentecostals and charismatics favor this view. Most biblical scholars, however, see 'spirit' and 'soul' used interchangeably in Scripture, making true trichotomy hard to establish.",
    implication: "Trichotomy is not heretical but is less well-supported biblically. The distinction between soul and spirit, if maintained, highlights that humans have a unique capacity for God-relationship."
  },
  {
    id: "monism", title: "Christian Monism (Holistic Dualism)", ref: "John 5:28-29; 1 Corinthians 15:42-44",
    body: "Some contemporary theologians argue that Scripture presents humans as unified wholes rather than composites of separate parts — the body is not a container for the soul but constitutive of personhood. On this view, 'soul' language describes the whole person in relation to God. The resurrection of the body is central: the goal is not escape from the body to an immortal soul but bodily resurrection. While this corrects any platonic dualism that despises the body, classic Christian anthropology has always held that personal identity survives bodily death — requiring at minimum some immaterial principle.",
    implication: "The goodness of the body is non-negotiable. Christian spirituality is embodied spirituality — worship, fasting, sexuality, rest are all bodily practices with spiritual significance."
  },
  {
    id: "body", title: "The Goodness of the Body", ref: "1 Corinthians 6:19-20; Romans 12:1",
    body: "Gnosticism and neo-Platonic philosophy treated the body as a prison of the soul — the goal was escape. Christianity flatly rejects this. 'Your bodies are temples of the Holy Spirit' (1 Corinthians 6:19). 'Offer your bodies as a living sacrifice' (Romans 12:1). The incarnation — God taking on a human body permanently — is the supreme statement on the value of the body. The resurrection of the body is the eschatological confirmation. Christian ethics of the body follow from this: sexual purity, rest, eating, exercise — all are spiritual matters.",
    implication: "Taking care of your body is a spiritual act. Abusing it is spiritual negligence. The resurrection means the body matters eternally."
  },
];

const CONSCIENCE_POINTS = [
  { color: BLUE, title: "What Is the Conscience?", body: "The conscience (syneidesis in Greek — 'with knowledge') is the inner faculty of moral self-awareness by which humans evaluate their own actions as right or wrong. Paul says Gentiles who do not have the law 'show that the requirements of the law are written on their hearts, their consciences also bearing witness, and their thoughts sometimes accusing them and at other times even defending them' (Romans 2:15). The conscience is a universal human faculty, evidence of the moral law written on every heart." },
  { color: TEAL, title: "The Conscience Can Be Calibrated Wrong", body: "The conscience is not infallible. It reflects training, culture, and experience as much as objective morality. Paul speaks of a 'weak conscience' that is overly scrupulous (1 Corinthians 8:7-12) and of those whose 'consciences have been seared as with a hot iron' (1 Timothy 4:2) — numbed by repeated violations. A conscience must be educated by Scripture and aligned with God's word to function properly. The goal is not a clear conscience (which can be achieved by searing it) but a good conscience — one calibrated to truth." },
  { color: GREEN, title: "Conscience and Christian Liberty", body: "Romans 14-15 and 1 Corinthians 8-10 address conscience in the context of Christian freedom — 'disputable matters' where Scripture does not give a clear command (eating meat sacrificed to idols, observing special days). The principle: strong believers should not violate the conscience of weak believers. 'Everything that does not come from faith is sin' (Romans 14:23) — acting against conscience is sin, even if the act itself is objectively permissible. Conscience sets a floor that must not be violated for anyone." },
  { color: GOLD, title: "Conscience Before God", body: "The ultimate purpose of conscience is to keep us oriented toward God's judgment. The conscience is a preview of the final judgment — the inner court that anticipates the outer one. 'I care very little if I am judged by you or by any human court... It is the Lord who judges me' (1 Corinthians 4:3-4). A good conscience before God — maintained through confession, repentance, and honest living — is one of the greatest Christian resources for peace." },
];

const EMOTION_POINTS = [
  { color: PINK, title: "God Has Emotions — And So Do We", body: "Scripture attributes emotions to God: grief (Genesis 6:6), joy (Zephaniah 3:17), anger (Psalm 7:11), compassion (Psalm 103:13). These are not metaphors for emotional states God doesn't actually have — they reveal something real about his relational nature. Since humans are made in God's image, human emotions are not evolutionary holdovers to be managed but part of what it means to be a person made in the image of a relational God." },
  { color: BLUE, title: "Emotions Are Not the Enemy", body: "Stoicism (ancient and modern) treats emotion as weakness or distortion to be overcome by reason. Biblical anthropology disagrees. Jesus wept (John 11:35). Jesus felt compassion (Matthew 9:36). He experienced joy (John 15:11), anger (Mark 3:5), distress (Luke 12:50), and agony in Gethsemane (Luke 22:44). Emotion is part of what it means to be fully human. The goal is not emotionlessness but emotions that are aligned with truth — holy anger at injustice, appropriate grief over sin, genuine joy in the Lord." },
  { color: GREEN, title: "The Psalms as Emotional Curriculum", body: "The Psalter covers the full range of human emotion: joy (Psalm 100), rage (Psalm 137:8-9), desire (Psalm 42:1), fear (Psalm 56:3), despair (Psalm 88), gratitude (Psalm 138), jealousy (Psalm 73), and love (Psalm 45). The Psalms are God's inspired gift for emotional formation — they teach us not only what to feel but how to bring every emotion into God's presence. They show that no emotion is too dark, too raw, or too uncomfortable for honest speech to God." },
  { color: TEAL, title: "Emotional Health and Spiritual Health", body: "Emotionally Healthy Spirituality (Peter Scazzero) argues that you cannot be spiritually mature while remaining emotionally immature. Unprocessed grief, buried anger, and chronic anxiety show up as spiritual dysfunction — controlling behavior, legalism, projection, or collapse. Biblical community involves emotional honesty (James 5:16 — 'confess to each other'), lament, and vulnerability. Formation that ignores the emotional life produces a spirituality that is either brittle or performative." },
];

const FREE_WILL_ITEMS = [
  {
    id: "libertarian", title: "Libertarian Free Will", ref: "Deuteronomy 30:19; Joshua 24:15",
    body: "Libertarian free will (LFW) holds that for a choice to be genuinely free, the chooser must have been able to do otherwise in exactly the same circumstances. This is the standard Arminian and open theist position. LFW is required, on this view, for moral responsibility — if you could not have done otherwise, you cannot be held accountable. Scripture's 'choose this day whom you will serve' (Joshua 24:15) implies real choice. The problem: LFW seems incompatible with exhaustive divine foreknowledge, and most theologians find it philosophically problematic."
  },
  {
    id: "compatibilism", title: "Compatibilism (Calvinist Free Will)", ref: "Romans 9:16; John 6:37; Acts 2:23",
    body: "Compatibilism holds that free will (defined as acting according to your desires without external coercion) is compatible with determinism (all events determined by God). On this view, humans always act freely — in the sense of acting according to what they want — but God sovereignly determines what they want. Acts 2:23: the crucifixion was 'by God's deliberate plan and foreknowledge' and yet carried out by 'the hands of lawless men' who were morally responsible. Both divine sovereignty and human responsibility are fully real. Most Reformed theologians hold this view."
  },
  {
    id: "bondage", title: "The Bondage of the Will (Luther)", ref: "Romans 3:10-12; John 8:34; Romans 8:7-8",
    body: "Luther's De Servo Arbitrio (1525) — written against Erasmus on free will — argues that the fallen human will is in bondage to sin. It is free to move in the direction of its desires, but its fundamental desires are disordered by sin. 'The sinful mind is hostile to God; it does not submit to God's law, nor can it do so' (Romans 8:7). Humans are free to choose among earthly things but cannot, by natural will, choose God above all. Salvation requires God's grace to liberate the will — not because God overrides the will but because he transforms the desires."
  },
  {
    id: "middle", title: "Middle Knowledge (Molinism)", ref: "1 Samuel 23:12; Matthew 11:21-23",
    body: "Molinism (after Luis de Molina) proposes that God has 'middle knowledge' — knowledge of what every free creature would do in every possible circumstance. God uses this knowledge to arrange circumstances so that his purposes are achieved while humans freely choose. Matthew 11:21 — Jesus knows what the people of Tyre would have done if they had seen his miracles. This attempts to preserve both exhaustive divine sovereignty and genuine libertarian freedom. Critics question whether middle knowledge is coherent or whether it merely delays the problem."
  },
];

const GENDER_POINTS = [
  { color: PURPLE, title: "Created Male and Female", body: "'So God created mankind in his own image, in the image of God he created them; male and female he created them' (Genesis 1:27). Sexual differentiation is part of the created order — not a cultural construction or a spectrum of biological states. Male and female both fully bear the image of God. Their differentiation is complementary, not hierarchical in essence — the hierarchy addressed in Ephesians 5 is post-Fall redemptive ordering, not a statement of essential worth." },
  { color: TEAL, title: "The Body and Gender", body: "Christian anthropology ties gender to the body — not as social performance but as creational reality. The Christian account runs counter to both rigid gender essentialism (gender determines all social roles) and gender nominalism (gender is pure social construct with no bodily grounding). The body is given, not chosen, and it carries meaning — it is oriented toward union with another and toward fruitfulness (biological or otherwise). Gender dysphoria is a real phenomenon that requires pastoral compassion, not dismissal." },
  { color: GOLD, title: "Sexuality and Covenant", body: "Scripture's consistent teaching is that sexual expression belongs within the covenant of marriage between a man and a woman (Genesis 2:24; Matthew 19:4-6; 1 Corinthians 7). This applies to homosexual activity, heterosexual sex outside marriage, and all other sexual activity outside that covenant. The Christian sexual ethic is not primarily about prohibition but about the nature and purpose of the body, covenant, and the image of God. Those who experience same-sex attraction and live celibately are not second-class Christians but witnesses to the coming kingdom where 'they neither marry nor are given in marriage' (Matthew 22:30)." },
  { color: BLUE, title: "The Complementarian/Egalitarian Debate", body: "Within Christian marriage and church leadership, there is significant debate: (1) Complementarians hold that men and women are equal in dignity but have distinct, complementary roles — the husband as servant-head in the home, male eldership in the church; (2) Egalitarians hold that the NT passages on gender roles reflect cultural accommodation that is no longer binding, and that all ministry roles are open to all believers. Both are held by serious evangelicals. The debate turns on how to read Ephesians 5:22-33, 1 Corinthians 14:34-35, and 1 Timothy 2:11-15 in light of Galatians 3:28." },
];

const DEATH_POINTS = [
  { color: RED, title: "Death as Consequence", body: "'Just as sin entered the world through one man, and death through sin, and in this way death came to all people' (Romans 5:12). Death is not natural in the sense of being originally intended — it entered as the consequence of the Fall. The 'wages of sin is death' (Romans 6:23). This gives death a moral weight and seriousness that secular anthropology lacks. Death is not merely biological cessation but separation — first from God (spiritual death), then from the body (physical death), and finally the 'second death' (Revelation 20:14) — eternal separation from God." },
  { color: TEAL, title: "The Intermediate State", body: "What happens between death and resurrection? The main views: (1) Soul sleep — the soul is unconscious until the resurrection (some Baptists, Adventists); (2) Immediate presence with Christ — at death, believers enter conscious fellowship with Christ (2 Corinthians 5:8 — 'away from the body and at home with the Lord'; Philippians 1:23 — 'to depart and be with Christ, which is better by far'). The majority of Reformed and evangelical theologians hold the second view: the soul survives death in a state of conscious communion with God, awaiting the resurrection." },
  { color: GREEN, title: "Resurrection as the Destiny", body: "Christian hope is not immortality of the soul but resurrection of the body. 'The dead will be raised imperishable' (1 Corinthians 15:52). The resurrection body is continuous with but transformed from the present body — it is raised imperishable, in glory, in power, as a 'spiritual body' (1 Corinthians 15:42-44). The new creation is not a disembodied heaven but a renewed physical universe where redeemed humanity lives in resurrected bodies in the presence of God. N.T. Wright: 'Heaven is important, but it's not the end of the world.'" },
  { color: PURPLE, title: "Pastoral Engagement with Death", body: "Christian anthropology gives a framework for pastoral care in the face of death: (1) Death is a real enemy — do not minimize grief or tell people to 'rejoice because they're in heaven'; (2) Death is a defeated enemy — Christ's resurrection is the firstfruits of ours (1 Corinthians 15:20); (3) Death is not the last word — the mourning is real and the hope is real simultaneously. 1 Thessalonians 4:13: 'We do not want you to be uninformed... so that you do not grieve like the rest of mankind, who have no hope.' Grieve — but with hope." },
];

const VIDEOS = [
  { videoId: "v2Lws9cPbmk", title: "What Does the Bible Say About Being Human? — Tim Keller" },
  { videoId: "rXh1hLLbS5s", title: "The Body, Soul, and Human Nature — John Cooper" },
  { videoId: "A2iFnD3JLWM", title: "Free Will and God's Sovereignty — R.C. Sproul" },
  { videoId: "yJc3vT2IaJk", title: "Gender, Sexuality, and Christian Anthropology — Sam Allberry" },
  { videoId: "H-U5DJKJ7_g", title: "Death, Resurrection, and What Comes After — N.T. Wright" },
];

export default function ChristianAnthropologyGuide() {
  const [tab, setTab] = useLocalStorage("vine_anthropo_tab", "overview");
  const [constOpen, setConstOpen] = useLocalStorage("vine_anthropo_const", "");
  const [willOpen, setWillOpen] = useLocalStorage("vine_anthropo_will", "");
  const [journal, setJournal] = useLocalStorage("vine_anthropo_journal", "");

  const card = (body: React.ReactNode) => (
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" }}>{body}</div>
  );

  const accordion = (
    items: { id: string; title: string; ref?: string; body: string; implication?: string }[],
    openKey: string,
    setOpen: (v: string) => void
  ) => items.map((it) => (
    <div key={it.id} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 8, overflow: "hidden" }}>
      <button
        onClick={() => setOpen(openKey === it.id ? "" : it.id)}
        style={{ width: "100%", textAlign: "left", padding: "1rem 1.25rem", background: openKey === it.id ? "rgba(13,148,136,0.08)" : "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <div>
          <span style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem" }}>{it.title}</span>
          {it.ref && <span style={{ color: MUTED, fontSize: "0.78rem", marginLeft: 12 }}>{it.ref}</span>}
        </div>
        <span style={{ color: MUTED, fontSize: "1.1rem" }}>{openKey === it.id ? "−" : "+"}</span>
      </button>
      {openKey === it.id && (
        <div style={{ padding: "0 1.25rem 1.25rem", borderTop: `1px solid ${BORDER}` }}>
          <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, marginTop: "1rem" }}>{it.body}</p>
          {it.implication && (
            <div style={{ marginTop: "0.75rem", padding: "0.75rem 1rem", background: "rgba(58,125,86,0.07)", borderLeft: `3px solid ${GREEN}`, borderRadius: 6 }}>
              <p style={{ color: GREEN, fontSize: "0.82rem", fontWeight: 600, marginBottom: 2 }}>Implication</p>
              <p style={{ color: MUTED, fontSize: "0.84rem", lineHeight: 1.6 }}>{it.implication}</p>
            </div>
          )}
        </div>
      )}
    </div>
  ));

  const cards4 = (items: { color: string; title: string; body: string }[]) => (
    <div style={{ display: "grid", gap: "1rem" }}>
      {items.map((p, i) => (
        <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
          <h3 style={{ fontWeight: 800, color: p.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{p.title}</h3>
          <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{p.body}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 4rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: "rgba(13,148,136,0.12)", border: `1px solid rgba(13,148,136,0.25)`, borderRadius: 20, padding: "0.35rem 1rem", fontSize: "0.78rem", color: TEAL, fontWeight: 600, marginBottom: "1rem" }}>
            SYSTEMATIC THEOLOGY · CHRISTIAN ANTHROPOLOGY
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            What Does It Mean to Be Human?
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
            Christian anthropology is the biblical theology of the human person — creaturely, image-bearing, fallen, and being redeemed. It answers the foundational questions of personal identity, the body and soul, free will, gender, emotion, conscience, and death.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1.1rem", borderRadius: 20, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", border: `1px solid ${tab === t.id ? TEAL : BORDER}`, background: tab === t.id ? "rgba(13,148,136,0.12)" : "transparent", color: tab === t.id ? TEAL : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === "overview" && (
          <div>
            <div style={{ background: "rgba(13,148,136,0.07)", border: `1px solid rgba(13,148,136,0.2)`, borderRadius: 16, padding: "1.5rem", marginBottom: "2rem" }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.75rem" }}>The Human Question</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                "What is man that you are mindful of him?" (Psalm 8:4). Anthropology — the study of the human — is contested from every direction: secular science, progressive ideology, conservative reaction. Christian anthropology proposes that the human person is intelligible only in relation to God — created from dust yet bearing the image of eternity, fallen yet being redeemed, fully embodied yet spiritually alive.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                Blaise Pascal: <em>"What a chimera then is man! What a novelty, what a monster, what a chaos, what a contradiction, what a prodigy! Judge of all things, imbecile worm of the earth; repository of truth, a sink of uncertainty and error; the glory and the scum of the universe."</em>
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              {OVERVIEW_GRID.map((g) => (
                <div key={g.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{g.icon}</div>
                  <div style={{ fontWeight: 800, color: g.color, marginBottom: "0.4rem" }}>{g.label}</div>
                  <p style={{ color: MUTED, fontSize: "0.84rem", lineHeight: 1.6 }}>{g.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Constitution */}
        {tab === "constitution" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Body and Soul: The Human Constitution</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>What makes up a human being? Scripture presents humans as both material (body, from dust) and immaterial (soul/spirit, breath of God). The main positions — dichotomy, trichotomy, and holistic monism — agree that the body is good and that personhood is not reducible to the physical.</p>
            </div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(CONSTITUTION_ITEMS, constOpen, setConstOpen)}</div>
          </div>
        )}

        {/* Conscience */}
        {tab === "conscience" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Conscience</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The conscience is one of the most practically important concepts in Christian anthropology — it governs daily moral experience, shapes relationships, and ultimately orients us toward the judgment of God. Understanding the conscience well is essential to pastoral care.</p>
            </div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(CONSCIENCE_POINTS)}</div>
          </div>
        )}

        {/* Emotions */}
        {tab === "emotions" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Human Emotions</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Are emotions spiritual or merely psychological? Can you be deeply spiritual while remaining emotionally shut down? Christian anthropology insists on the goodness and necessity of the full range of human emotional experience.</p>
            </div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(EMOTION_POINTS)}</div>
          </div>
        )}

        {/* Free Will */}
        {tab === "will" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Free Will and Human Agency</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The question of free will sits at the intersection of theology, philosophy, and pastoral practice. Are humans genuinely free? Is freedom compatible with divine sovereignty? What does the Fall do to the will? These questions drive the Calvinist-Arminian debate and shape how we preach the gospel.</p>
            </div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(FREE_WILL_ITEMS, willOpen, setWillOpen)}</div>
          </div>
        )}

        {/* Gender */}
        {tab === "gender" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Gender, Sexuality, and the Human Body</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Few areas of Christian anthropology are more contested in contemporary culture. The biblical account grounds gender and sexuality in creation, not culture — while demanding pastoral compassion for those who experience this area as a site of struggle or suffering.</p>
            </div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(GENDER_POINTS)}</div>
          </div>
        )}

        {/* Death */}
        {tab === "death" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Death, the Intermediate State, and Resurrection</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Christian anthropology determines Christian eschatology: what we believe about the human person shapes what we believe about death and what comes after. The Christian answer is neither pure soul-immortality (Plato) nor simple extinction (secularism) but resurrection.</p>
            </div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(DEATH_POINTS)}</div>
          </div>
        )}

        {/* Journal */}
        {tab === "journal" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>Which aspect of Christian anthropology most challenges your current self-understanding? Where do you need to receive your humanity — body, emotions, will, conscience — as a gift from God rather than a problem to be managed?</p>
              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", color: TEXT, fontSize: "0.9rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }}
              />
              {journal && <p style={{ color: GREEN, fontSize: "0.78rem", marginTop: "0.5rem" }}>Saved automatically.</p>}
            </div>)}
          </div>
        )}

        {/* Videos */}
        {tab === "videos" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Video Teaching</h2><p style={{ color: MUTED, fontSize: "0.88rem" }}>Recommended videos on Christian anthropology — the theology of what it means to be human.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.9rem" }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
