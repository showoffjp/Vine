"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = [
  { id: "what-heaven", label: "What Heaven Actually Is" },
  { id: "new-creation", label: "The New Creation" },
  { id: "intermediate", label: "The Intermediate State" },
  { id: "beatific", label: "The Beatific Vision" },
  { id: "hell", label: "Hell and Final Judgment" },
  { id: "videos", label: "Videos" },
];

const WHAT_HEAVEN_ITEMS = [
  {
    id: "wh1",
    title: "The Popular View vs. the Biblical View",
    body: "Most Christians, if pressed, imagine heaven as an ethereal realm of disembodied souls floating on clouds, doing nothing in particular forever. This picture owes more to medieval folk imagery and Greek philosophical dualism than to the Bible. The biblical picture is radically different: the Christian hope is bodily resurrection, the renewal of the physical creation, and God dwelling permanently with humanity in a transformed earth. N.T. Wright: “Most people imagine that Christians are supposed to believe in 'going to heaven when you die.' This is, in fact, a significant distortion of the New Testament's vision.” The popular view makes heaven sound boring. The biblical view is anything but.",
  },
  {
    id: "wh2",
    title: "N.T. Wright and Surprised by Hope",
    body: "N.T. Wright’s Surprised by Hope (2008) is the most influential modern treatment of Christian eschatology for a popular audience. Wright’s central argument: the New Testament’s primary hope is not disembodied heaven but resurrection and new creation. Jesus’s resurrection is not an isolated miracle but the first fruits (1 Cor 15:20) of a coming harvest — the general resurrection of the dead and the renewal of all creation. Wright distinguishes “life after death” (the intermediate state, believers with Christ) from “life after life after death” (the final resurrection state). Most Christians conflate the two, elevating the intermediate state to the place of the final hope when it is actually a temporary, provisional condition. Heaven matters — but it is not the end of the story.",
  },
  {
    id: "wh3",
    title: "The Greek Dualism Problem",
    body: "Greek philosophical dualism — the view that the body is a prison of the soul, that material reality is inferior to spiritual reality, and that salvation means the soul escaping its bodily prison — has profoundly distorted Christian theology. Plato’s Phaedo presents death as liberation of the soul from the body. This is emphatically not the Christian view. The Christian view: (1) God created the material world and declared it “very good” (Genesis 1:31); (2) The incarnation is God permanently taking on human flesh — the Son of God remains embodied even in his resurrection and ascension; (3) The resurrection hope is bodily — Paul’s entire argument in 1 Corinthians 15 insists on this; (4) The new creation is physical. Greek dualism, imported into Christianity, produces the damaging conclusion that the body and the earth do not ultimately matter. They do.",
  },
  {
    id: "wh4",
    title: "What “Eternal Life” Actually Means",
    body: "The Greek phrase is “zoe aionios” — often translated “eternal life.” But “aionios” in Greek does not primarily mean “lasting forever”; it means “of the age” or “belonging to the age to come.” Eternal life in the New Testament is the life of the coming age — resurrection life, the life of the new creation — breaking into the present age. This reframes everything: eternal life is not primarily about duration (living forever) but about quality and kind — the mode of life that belongs to God’s new world, begun now in the Spirit and consummated in the resurrection. John’s Gospel is particularly rich on this: eternal life can be a present possession (“whoever believes has eternal life”, John 6:47) because the age to come has broken in.",
  },
  {
    id: "wh5",
    title: "John 17:3 — “This Is Eternal Life”",
    body: "John 17:3: “Now this is eternal life: that they know you, the only true God, and Jesus Christ, whom you have sent.” This is Jesus’s own definition of eternal life — not a place, not a duration, but a relationship. To know God — the Hebrew “yada” sense of deep personal knowledge and intimacy — is itself eternal life. This means eternal life is not primarily a future destination but a present relationship that death cannot terminate. It means the center of heaven is not an environment or experience but a Person. Whatever the new creation looks like, its heart is knowing God as he is, face to face, fully and without barrier.",
  },
];

const NEW_CREATION_ITEMS = [
  {
    id: "nc1",
    title: "Revelation 21–22 Unpacked",
    body: "Revelation 21:1: “Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away, and there was no longer any sea.” The sea in Revelation represents chaos, threat, and separation — its absence signals the end of all that disrupts shalom. The New Jerusalem descends from heaven to earth (v. 2) — heaven comes to earth, not the reverse. God’s dwelling is now among humanity (v. 3). The river of the water of life flows from the throne of God (22:1). The tree of life reappears — barred since the fall (Genesis 3:24) — and its leaves are for the healing of the nations (22:2). The curse is lifted (22:3). They will see God’s face (22:4). They will reign forever (22:5). This is not ethereal or spiritual in the dualist sense — it is physical, relational, and political.",
  },
  {
    id: "nc2",
    title: "Isaiah 65:17–25 — The Wolf and the Lamb",
    body: "Isaiah 65:17–25 is one of the most vivid OT pictures of the new creation: “The wolf and the lamb will feed together, and the lion will eat straw like the ox... They will neither harm nor destroy on all my holy mountain.” The imagery is of creation restored to its proper order — predator and prey living in peace, human labor bearing fruit without futility, longevity and flourishing replacing death and mourning. This is not merely metaphorical: it describes a genuinely transformed physical world. God declares: “See, I will create new heavens and a new earth. The former things will not be remembered, nor will they come to mind” (v. 17). The continuity with the present world is implied — it is this creation renewed, not a wholly different creation from scratch.",
  },
  {
    id: "nc3",
    title: "Romans 8:19–23 — Creation Groaning",
    body: "Romans 8:19–23 is the most theologically important passage for a Christian theology of creation and new creation: “The creation waits in eager expectation for the children of God to be revealed... the creation itself will be liberated from its bondage to decay and brought into the freedom and glory of the children of God.” The nonhuman creation — animals, ecosystems, the physical world — is caught up in the consequences of the fall and will share in the redemption. Paul’s word is “liberation,” not destruction. The creation is not scrapped; it is redeemed. This is the ground for taking care of creation seriously now: the physical world is not ultimately disposable but destined for transformation.",
  },
  {
    id: "nc4",
    title: "Continuity and Discontinuity",
    body: "A key theological question: is the new creation this world renewed or a wholly different creation? The analogy Paul uses is the resurrection body (1 Corinthians 15:42–44): it is both continuous (the same person, recognizably themselves) and discontinuous (transformed, imperishable, glorious). The new creation will similarly be both recognizably this world and incomprehensibly more. Human achievements, relationships, and even the memory of redemption may all carry over — not unchanged but transfigured. The nations bring their glory into the New Jerusalem (Revelation 21:24–26), suggesting that the best of human culture is included and purified, not discarded.",
  },
  {
    id: "nc5",
    title: "What This Means for Care of Creation Now",
    body: "If the physical world is destined for redemption and not destruction, then how we treat it now matters eternally. Christian neglect of environmental stewardship is often rooted in an unbiblical view that the earth will be discarded anyway — so why care? But Romans 8 and Revelation 21–22 say otherwise. The new creation is this creation renewed. Acts of care, beauty, justice, and creation stewardship are not wasted — they are anticipations of the new creation, expressions of what God intends for his world. N.T. Wright: “What you do in the Lord is not in vain” (1 Cor 15:58) — and this includes how we treat the earth.",
  },
];

const INTERMEDIATE_ITEMS = [
  {
    id: "im1",
    title: "The Biblical Data",
    body: "Several key texts address the intermediate state. 2 Corinthians 5:8: “We... prefer to be away from the body and at home with the Lord.” Philippians 1:23: Paul desires “to depart and be with Christ, which is better by far.” Luke 23:43: Jesus to the thief — “Today you will be with me in paradise.” 1 Thessalonians 4:13–17: believers who have “fallen asleep” will rise at Christ’s return. The consistent witness: death for the believer is not annihilation or unconsciousness but entry into conscious fellowship with Christ, in a state that is genuinely good but still awaits the fullness of resurrection.",
  },
  {
    id: "im2",
    title: "Sheol/Hades vs. Heaven",
    body: "In the OT, Sheol is the realm of the dead — all the dead, both righteous and wicked, in a shadowy, diminished existence. The NT Greek equivalent is Hades. By NT times, Jewish thought had developed a differentiated picture: Hades has two sections — one of comfort (Abraham’s bosom/paradise) and one of torment (Luke 16:19–31). The NT uses “paradise” positively (Luke 23:43; 2 Corinthians 12:4; Revelation 2:7) to describe the place of blessing where believers await resurrection. The full Christian picture distinguishes the intermediate state (Hades/paradise) from the final state (new creation/resurrection) — though popular Christianity often collapses them.",
  },
  {
    id: "im3",
    title: "The Communion of Saints",
    body: "Christians who have died are not absent from the community of faith — they are the “cloud of witnesses” (Hebrews 12:1), already with Christ in the intermediate state, awaiting the resurrection. Hebrews 11–12 moves from the heroes of faith directly into the assembly of the firstborn whose names are written in heaven (12:23). The communion of saints — the fellowship between living and dead members of the body of Christ — is a traditional doctrine that finds its ground here. The dead in Christ are not lost but present with him.",
  },
  {
    id: "im4",
    title: "Prayers for the Dead — Catholic View",
    body: "The Roman Catholic tradition includes prayers for the dead, especially those in purgatory — a state of purification after death for those who die in God’s grace but still imperfectly purified. The biblical basis is thin (2 Maccabees 12:46, deuterocanonical; 1 Corinthians 3:15, which most Protestants read differently). The theological logic: if holiness is required to see God (Hebrews 12:14) and most believers die imperfectly holy, a process of purification makes sense. Protestant objection: Christ’s atonement is complete and sufficient — there is no remaining debt for the believer to pay. The prayer for the dead question touches deep issues of what the atonement accomplishes and when.",
  },
  {
    id: "im5",
    title: "Soul Sleep — Adventist View",
    body: "Soul sleep (conditional immortality) is the view that the dead are unconscious between death and resurrection. Advocated by Seventh-day Adventists and some other groups. The biblical argument: the dead are described as “sleeping” (1 Thessalonians 4:13; John 11:11); the dead “know nothing” (Ecclesiastes 9:5); there is no consciousness apart from the body. The problems: Luke 23:43 (“today” implies immediate conscious experience); Philippians 1:23 (being “with Christ” is better, implying rich experience); Revelation 6:9–11 (souls under the altar are speaking). Most evangelicals find soul sleep inconsistent with these texts, though they acknowledge the state of the dead is genuinely mysterious.",
  },
  {
    id: "im6",
    title: "The Majority Protestant View and Honest Uncertainty",
    body: "The majority Protestant view: believers at death enter a conscious intermediate state of fellowship with Christ, awaiting the bodily resurrection. This is the view of the Westminster Confession (XXII), the Heidelberg Catechism (Q&A 57), and most Reformed and evangelical confessions. But honest theological humility is appropriate: the Bible does not give a detailed map of the intermediate state. The precise nature of personal identity without a body, the experience of time in the intermediate state, and the exact nature of paradise are not fully revealed. What is clear: the dead in Christ are with Christ, and that is genuinely better. The fullness of what God has prepared awaits.",
  },
];

const BEATIFIC_ITEMS = [
  {
    id: "bv1",
    title: "Seeing God Face to Face",
    body: "1 Corinthians 13:12: “For now we see only a reflection as in a mirror; but then we will see face to face. Now I know only in part; then I will know fully, even as I have been fully known.” 1 John 3:2: “We know that when he appears, we shall be like him, because we shall see him as he is.” The beatific vision is the direct, unmediated knowledge of God — not as a proposition but as a Person, face to face. This is the supreme end of human existence: to know God as he knows us, to see him as he is. All the longing of the soul for beauty, truth, love, and meaning is finally and infinitely satisfied in this vision.",
  },
  {
    id: "bv2",
    title: "The Thomistic Tradition",
    body: "Thomas Aquinas developed the most sophisticated theology of the beatific vision in the Catholic tradition. For Aquinas, the beatific vision is the intellect’s direct apprehension of God’s essence — not mediated by creatures or concepts but by the “lumen gloriae” (light of glory) that elevates the intellect above its natural capacity. This vision is the “summum bonum” — the supreme good — the final end for which humanity was created. It is received, not achieved — it requires divine gift, not human effort. The soul is fulfilled beyond its natural capacity in seeing what only God can show. Catholic theology has maintained this vision as the heart of eschatological hope ever since.",
  },
  {
    id: "bv3",
    title: "The Protestant Hesitation",
    body: "The main Protestant hesitation about the beatific vision is not the vision itself but the machinery around it — purgatory, merit, the lumen gloriae as a quasi-natural endowment. Protestants affirm the language of seeing God (1 Corinthians 13:12; 1 John 3:2; Matthew 5:8 — “Blessed are the pure in heart, for they will see God”). The hesitation is about framing this vision as the end of a meritorious journey rather than a gift of grace. Reformed theology tends to speak of union with Christ as the supreme eschatological reality — in which the beatific vision is included but within a framework of grace through faith throughout.",
  },
  {
    id: "bv4",
    title: "Jonathan Edwards — Ever-Expanding Joy",
    body: "Jonathan Edwards developed one of the most beautiful accounts of the beatific vision in the Protestant tradition. For Edwards, the joy of heaven is not static but dynamic — an ever-increasing, ever-deepening delight in the infinite God who can never be exhausted. The saints will grow in their knowledge and love of God for eternity, never reaching a ceiling, never experiencing satiation that becomes boredom. God is infinite; the creature’s capacity to know and love him is finite but can expand perpetually. The result is an eternity of progressive discovery, deepening joy, and expanding love — not a fixed state but a living, growing relationship with the inexhaustible God.",
  },
  {
    id: "bv5",
    title: "The Resurrected Christ as the Face of God",
    body: "A distinctively Christian contribution to the beatific vision: we do not see God as an abstract divine essence but in the face of Jesus Christ. 2 Corinthians 4:6: “the light of the knowledge of God’s glory displayed in the face of Christ.” John 14:9: “Anyone who has seen me has seen the Father.” The resurrected, ascended, permanently embodied Son of God is the form in which God has chosen to be known. The beatific vision — seeing God face to face — is not the vision of an abstract deity but the vision of the incarnate Son, the Lamb who was slain and now reigns, whose face is the face of God.",
  },
];

const HELL_ITEMS = [
  {
    id: "hj1",
    title: "Eternal Conscious Torment (ECT)",
    body: "The traditional majority view in Western Christianity: the wicked are raised bodily at the final judgment and suffer conscious punishment for eternity in hell. Matthew 25:46: “these will go away into eternal punishment.” Revelation 14:11: “the smoke of their torment goes up forever and ever.” Revelation 20:10: the devil is thrown into the lake of fire “where they will be tormented day and night forever and ever.” ECT takes the language of “eternal” (aionios) at face value as unending duration and emphasizes the infinite seriousness of sin against an infinite God. It has been the dominant view of Roman Catholicism, Eastern Orthodoxy, and most of Protestantism through history.",
  },
  {
    id: "hj2",
    title: "Annihilationism / Conditional Immortality",
    body: "Annihilationism (also called conditional immortality) holds that the wicked are not immortal by nature — immortality is a gift to the redeemed — and that after final judgment the wicked cease to exist. John Stott: “I find the concept [of eternal torment] intolerable and do not understand how people can live with it without either cauterizing their feelings or cracking under the strain.” Edward Fudge’s The Fire That Consumes (1982) is the most thorough evangelical defense. Key texts: Matthew 10:28 (“destroy both soul and body in hell”); 2 Thessalonians 1:9 (“everlasting destruction”); Malachi 4:1 (the wicked will be “stubble”, utterly burned). The “eternal” of punishment refers to the eternal consequences of the destruction, not the duration of the process.",
  },
  {
    id: "hj3",
    title: "Universal Reconciliation",
    body: "Universal reconciliation holds that all people will ultimately be saved — not universalism by nature but by the redemptive work of Christ which, given enough time or opportunity, will be embraced by all. George MacDonald, the 19th-century Scottish preacher and novelist who influenced C.S. Lewis, was the most famous advocate. Robin Parry’s The Evangelical Universalist (2006) makes the case from Scripture. Key texts: Colossians 1:20 (reconciling “all things”); Romans 5:18 (justification for “all”); 1 Corinthians 15:28 (God “all in all”); the Greek “apocatastasis” (restoration of all things, Acts 3:21). The objections: the persistent language of eternal judgment, the seriousness of human choice, and the asymmetry of the atonement texts.",
  },
  {
    id: "hj4",
    title: "What Scripture Actually Says",
    body: "Jesus uses “Gehenna” (the valley of Hinnom, a refuse dump outside Jerusalem associated with fire and defilement) for hell — 12 of 13 NT uses are by Jesus. The language of fire, outer darkness, and weeping and gnashing of teeth is consistent but also often clearly metaphorical (fire and darkness cannot coexist literally). The key word “aionios” is used for both eternal life and eternal punishment in Matthew 25:46 — if eternal life is unending, so is eternal punishment; if eternal means “of the age to come,” both may refer to the decisive final state rather than necessarily unending duration. Honest scholarship acknowledges genuine exegetical debate. What is clear: final judgment is real, serious, and determined by one’s relationship to Christ.",
  },
  {
    id: "hj5",
    title: "The Justice and Love of God",
    body: "Every view of hell must grapple with the character of God. ECT defenders: sin against an infinite God deserves infinite punishment; the severity of hell reflects the seriousness of rejecting God. Annihilationists: the punishment fits the crime in severity (death, not endless torment); God’s justice is satisfied without eternal cruelty. Universalists: God’s love ultimately wins — a God who “wills all to be saved” (1 Timothy 2:4) surely succeeds. The pastoral challenge: hell must be preached in a way that reflects both the justice of God (sin has real consequences) and the love of God (his will is for all to repent, 2 Peter 3:9). Neither casual dismissal nor gleeful declaration is appropriate.",
  },
];

const VIDEOS = [
  { videoId: "p9NNkMK0bHI", title: "N.T. Wright — Surprised by Hope" },
  { videoId: "ZAZjBN2YPQU", title: "Tim Keller on Heaven and New Creation" },
  { videoId: "gF-GpHWURSs", title: "John Piper on Heaven and Eternity" },
];

export default function ChristianTheologyOfHeaven() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("what-heaven");
  const [whOpen, setWhOpen] = useState("");
  const [ncOpen, setNcOpen] = useState("");
  const [imOpen, setImOpen] = useState("");
  const [bvOpen, setBvOpen] = useState("");
  const [hjOpen, setHjOpen] = useState("");

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const activeColor = GOLD;

  function Accordion({
    items,
    openId,
    setOpenId,
    accentColor,
  }: {
    items: { id: string; title: string; body: string }[];
    openId: string;
    setOpenId: (v: string) => void;
    accentColor: string;
  }) {
    return (
      <div style={{ display: "grid", gap: 8 }}>
        {items.map((it) => (
          <div
            key={it.id}
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setOpenId(openId === it.id ? "" : it.id)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "1rem 1.25rem",
                background:
                  openId === it.id
                    ? `rgba(${accentColor === GOLD ? "217,119,6" : accentColor === PURPLE ? "107,79,187" : accentColor === TEAL ? "13,148,136" : "58,125,86"},0.07)`
                    : "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem" }}>
                {it.title}
              </span>
              <span style={{ color: MUTED, fontSize: "1.1rem", flexShrink: 0 }}>
                {openId === it.id ? "−" : "+"}
              </span>
            </button>
            {openId === it.id && (
              <div
                style={{
                  padding: "0 1.25rem 1.25rem",
                  borderTop: `1px solid ${BORDER}`,
                }}
              >
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    marginTop: "1rem",
                  }}
                >
                  {it.body}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  function SectionHeader({
    title,
    subtitle,
    color,
  }: {
    title: string;
    subtitle: string;
    color: string;
  }) {
    return (
      <div
        style={{
          background: CARD,
          border: `1px solid ${BORDER}`,
          borderRadius: 16,
          padding: "1.5rem",
          marginBottom: "1.5rem",
          borderLeft: `4px solid ${color}`,
        }}
      >
        <h2
          style={{
            fontWeight: 800,
            color: TEXT,
            fontSize: "1.15rem",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </h2>
        <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>
          {subtitle}
        </p>
      </div>
    );
  }

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
      <main
        style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}
      >
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(217,119,6,0.12)",
              border: `1px solid rgba(217,119,6,0.25)`,
              borderRadius: 20,
              padding: "0.35rem 1rem",
              fontSize: "0.78rem",
              color: GOLD,
              fontWeight: 600,
              marginBottom: "1rem",
              letterSpacing: "0.05em",
            }}
          >
            ESCHATOLOGY &middot; THEOLOGY OF HEAVEN
          </div>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Christian Theology of Heaven
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: 660,
              margin: "0 auto",
            }}
          >
            What does the Bible actually say about heaven? The answer is far more
            physical, relational, and glorious than popular Christianity imagines
            &mdash; and far more demanding of how we live now.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: "2rem",
            justifyContent: "center",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
                border: `1px solid ${tab === t.id ? activeColor : BORDER}`,
                background:
                  tab === t.id ? "rgba(217,119,6,0.12)" : "transparent",
                color: tab === t.id ? activeColor : MUTED,
                transition: "all 0.18s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: What Heaven Actually Is */}
        {tab === "what-heaven" && (
          <div>
            <SectionHeader
              title="What Heaven Actually Is"
              subtitle="The popular picture vs. the biblical picture &mdash; and why the difference matters enormously for Christian life and hope."
              color={GOLD}
            />
            <div
              style={{
                background: "rgba(217,119,6,0.07)",
                border: `1px solid rgba(217,119,6,0.2)`,
                borderRadius: 14,
                padding: "1.25rem 1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  color: MUTED,
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                }}
              >
                &ldquo;Heaven is important, but it&rsquo;s not the end of the world.&rdquo;
                <span
                  style={{ color: GOLD, fontWeight: 600, fontStyle: "normal" }}
                >
                  {" "}
                  &mdash; N.T. Wright, Surprised by Hope
                </span>
              </p>
            </div>
            <Accordion
              items={WHAT_HEAVEN_ITEMS}
              openId={whOpen}
              setOpenId={setWhOpen}
              accentColor={GOLD}
            />
          </div>
        )}

        {/* Tab: The New Creation */}
        {tab === "new-creation" && (
          <div>
            <SectionHeader
              title="The New Creation"
              subtitle="Revelation 21&ndash;22, Isaiah 65, Romans 8 &mdash; the ultimate Christian hope is not escape from the earth but its renewal and transformation."
              color={GREEN}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              {[
                {
                  color: GOLD,
                  label: "New Heavens & Earth",
                  text: "Revelation 21:1 — the first heaven and earth pass away; God creates the new.",
                },
                {
                  color: GREEN,
                  label: "No More Sea",
                  text: "The sea (chaos, separation) is gone — all that threatens shalom is removed forever.",
                },
                {
                  color: BLUE,
                  label: "River of Life",
                  text: "Revelation 22:1–2 — the river flows from the throne; the tree of life restored.",
                },
                {
                  color: TEAL,
                  label: "Creation Redeemed",
                  text: "Romans 8:21 — creation itself liberated from bondage to decay.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: "1.1rem",
                    borderTop: `3px solid ${card.color}`,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      color: card.color,
                      fontSize: "0.85rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {card.label}
                  </div>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.82rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
            <Accordion
              items={NEW_CREATION_ITEMS}
              openId={ncOpen}
              setOpenId={setNcOpen}
              accentColor={GREEN}
            />
          </div>
        )}

        {/* Tab: The Intermediate State */}
        {tab === "intermediate" && (
          <div>
            <SectionHeader
              title="The Intermediate State"
              subtitle="What happens between death and resurrection? The biblical data, the key debates (soul sleep, purgatory), and honest uncertainty."
              color={PURPLE}
            />
            <div
              style={{
                background: "rgba(107,79,187,0.07)",
                border: `1px solid rgba(107,79,187,0.2)`,
                borderRadius: 14,
                padding: "1.25rem 1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  color: MUTED,
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                }}
              >
                The intermediate state is the period between an individual&rsquo;s death and
                the final resurrection &mdash; when believers are with Christ but have not yet
                received their resurrection bodies. This is the &ldquo;heaven&rdquo; people go to
                when they die &mdash; but it is not the final state. Resurrection and new
                creation are still ahead.
              </p>
            </div>
            <Accordion
              items={INTERMEDIATE_ITEMS}
              openId={imOpen}
              setOpenId={setImOpen}
              accentColor={PURPLE}
            />
          </div>
        )}

        {/* Tab: The Beatific Vision */}
        {tab === "beatific" && (
          <div>
            <SectionHeader
              title="The Beatific Vision"
              subtitle="Seeing God face to face &mdash; the Catholic and Orthodox tradition, the Protestant response, and Jonathan Edwards on ever-expanding joy."
              color={TEAL}
            />
            <div
              style={{
                background: "rgba(13,148,136,0.07)",
                border: `1px solid rgba(13,148,136,0.2)`,
                borderRadius: 14,
                padding: "1.25rem 1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  color: MUTED,
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                }}
              >
                &ldquo;Now I know only in part; then I will know fully, even as I have been
                fully known.&rdquo;
                <span
                  style={{ color: TEAL, fontWeight: 600, fontStyle: "normal" }}
                >
                  {" "}
                  &mdash; 1 Corinthians 13:12
                </span>
              </p>
            </div>
            <Accordion
              items={BEATIFIC_ITEMS}
              openId={bvOpen}
              setOpenId={setBvOpen}
              accentColor={TEAL}
            />
          </div>
        )}

        {/* Tab: Hell and Final Judgment */}
        {tab === "hell" && (
          <div>
            <SectionHeader
              title="Hell and Final Judgment"
              subtitle="Eternal conscious torment, annihilationism, universal reconciliation &mdash; what the evangelical spectrum actually teaches, and what Scripture actually says."
              color={ROSE}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              {[
                {
                  color: ROSE,
                  label: "ECT",
                  text: "Eternal Conscious Torment — the traditional majority view. The wicked suffer consciously forever.",
                },
                {
                  color: GOLD,
                  label: "Annihilationism",
                  text: "The wicked cease to exist after judgment. John Stott, Edward Fudge.",
                },
                {
                  color: GREEN,
                  label: "Universal Reconciliation",
                  text: "All are ultimately saved. George MacDonald, Robin Parry.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: "1.1rem",
                    borderLeft: `4px solid ${card.color}`,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      color: card.color,
                      fontSize: "0.82rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {card.label}
                  </div>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.82rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
            <Accordion
              items={HELL_ITEMS}
              openId={hjOpen}
              setOpenId={setHjOpen}
              accentColor={ROSE}
            />
          </div>
        )}

        {/* Tab: Videos */}
        {tab === "videos" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <h2
                style={{
                  fontWeight: 800,
                  color: TEXT,
                  fontSize: "1.15rem",
                  marginBottom: "0.5rem",
                }}
              >
                Video Teaching
              </h2>
              <p style={{ color: MUTED, fontSize: "0.88rem" }}>
                N.T. Wright, Tim Keller, and John Piper on heaven, resurrection, and the
                new creation.
              </p>
            </div>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId}>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {v.title}
                  </p>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
