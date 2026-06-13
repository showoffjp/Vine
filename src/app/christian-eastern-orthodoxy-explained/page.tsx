"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Orthodox Church",
  "The Great Schism",
  "Theosis — Becoming Like God",
  "Icons and the Incarnation",
  "The Divine Liturgy",
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
    id: "The Orthodox Church",
    heading: "The Orthodox Church",
    paragraphs: [
      "Eastern Orthodoxy is the second-largest Christian communion, with roughly 220 million members, concentrated in Greece, Russia, Eastern Europe, and the Middle East, with a growing presence in the West. For many Western Christians it is the least familiar of the three great branches &mdash; ancient, beautiful, and largely unknown &mdash; yet it preserves a form of Christianity that reaches back, unbroken, to the apostolic age and the world of the early church.",
      "It is not a single centralized church but a communion of self-governing (autocephalous) churches &mdash; the Greek Orthodox, Russian Orthodox, Antiochian, Serbian, and others &mdash; united by shared faith, sacraments, and the recognition of the Ecumenical Patriarch of Constantinople as &ldquo;first among equals&rdquo; (but not a pope). This structure is one of the deepest differences between Orthodoxy and Rome: there is no single universal bishop with jurisdiction over the whole church, but a family of sister churches bound together by a common faith and mutual recognition rather than by a central authority.",
      "Orthodoxy understands itself as the original church of the apostles, having preserved the faith of the early church unchanged. Where Rome, in the Orthodox view, added to the faith (the filioque, papal supremacy, later Marian dogmas) and the Protestants subtracted from it, Orthodoxy claims simply to have kept it &mdash; neither innovating nor reforming, but holding fast to what was received. This conviction of continuity, of faithfulness across the centuries, is central to Orthodox self-understanding.",
      "Its theology is rooted in the seven Ecumenical Councils (325-787) and the Greek Church Fathers. The councils &mdash; from Nicaea, which gave the church the Nicene Creed and the doctrine of Christ&rsquo;s full deity, to the Second Council of Nicaea, which settled the question of icons &mdash; are for Orthodoxy the authoritative voice of the undivided church. The great Fathers of the East, such as Athanasius, the Cappadocians, John Chrysostom, Maximus the Confessor, and John of Damascus, shape Orthodox thought far more than the later Western scholastics.",
      "Where Western Christianity (both Catholic and Protestant) has often been shaped by legal and philosophical categories, Orthodoxy preserves a more mystical, liturgical, and apophatic approach &mdash; emphasizing the experience of God over the systematic definition of God. The Western mind tends to ask how things are to be defined and ordered; the Eastern mind is more content to stand before mystery, to worship, and to be transformed. Theology in the East is less a science to be mastered than a life to be lived in prayer.",
      "This different temperament colors everything. Orthodox worship is long, sensory, and ancient; Orthodox spirituality is centered on prayer, fasting, and the gradual transformation of the whole person; Orthodox theology is suspicious of too much precision about the things of God. To understand Orthodoxy is to enter a world where beauty and mystery are not decorations on the faith but the very means by which it is known and lived &mdash; a Christianity oriented less toward explanation than toward participation in the life of God.",
    ],
  },
  {
    id: "The Great Schism",
    heading: "The Great Schism",
    paragraphs: [
      "For its first thousand years, the church was officially one, though East and West were drifting apart culturally, linguistically (Greek East, Latin West), and theologically. The Mediterranean world that the early church had spanned was slowly splitting into two civilizations &mdash; one looking to Rome, the other to Constantinople &mdash; that increasingly could not read each other&rsquo;s languages, share each other&rsquo;s assumptions, or understand each other&rsquo;s instincts. Long before any formal break, the two halves of Christendom were becoming strangers.",
      "The break came to a head in 1054 &mdash; the Great Schism &mdash; when the Pope&rsquo;s legates and the Patriarch of Constantinople mutually excommunicated each other. The immediate event was almost absurdly small: a delegation from Rome laid a decree of excommunication on the altar of the great church of Hagia Sophia, and the Patriarch responded in kind. But the gesture crystallized centuries of accumulated estrangement, and what might have been one more reparable quarrel hardened, over time, into a permanent division.",
      "The causes were both political and theological. The central theological dispute was the &ldquo;filioque&rdquo; clause: the Western church had added to the Nicene Creed the phrase that the Holy Spirit proceeds &ldquo;from the Father and the Son&rdquo; (filioque), while the East insisted the Spirit proceeds from the Father alone, as the original creed stated, and objected to the West unilaterally altering an ecumenical creed. The objection was twofold &mdash; to the doctrine itself, which the East regarded as confusing the persons of the Trinity, and to the procedure, since no single part of the church had the right to change a creed that the whole church had agreed.",
      "Beneath this lay the deeper issue of authority: the East rejected the claim of the Bishop of Rome to universal jurisdiction over the whole church. The East was willing to honor the Pope as the first among the patriarchs, a primacy of honor in recognition of Rome&rsquo;s ancient dignity. What it would not accept was a primacy of jurisdiction &mdash; the claim that the Bishop of Rome possessed supreme authority over all other bishops and churches. On this point, more than any other, the two halves of Christendom could not be reconciled, and they remain divided over it to this day.",
      "The mutual excommunications were not lifted until 1965, when Pope Paul VI and the Ecumenical Patriarch Athenagoras, in a historic gesture of reconciliation, withdrew the ancient anathemas and expressed regret for the offenses of the past. It was a moment of real warmth and hope, and it opened a new era of dialogue between the two churches. But it did not, and could not, by itself heal the division; the underlying disagreements about authority and doctrine remained.",
      "The schism between East and West has never been fully healed. Nearly a thousand years after the legates and the Patriarch traded excommunications, Rome and the Orthodox churches remain out of communion, unable to share the Eucharist together. There is real and ongoing dialogue, real respect, and real recognition of how much the two traditions still hold in common &mdash; the creeds, the councils, the sacraments, the apostolic faith. But the wound of 1054 remains open, a standing reminder of how a thousand small estrangements can finally tear apart what Christ prayed would be one.",
    ],
  },
  {
    id: "Theosis — Becoming Like God",
    heading: "Theosis — Becoming Like God",
    paragraphs: [
      "The heart of Orthodox spirituality is theosis (deification or divinization) &mdash; the teaching that the goal of the Christian life is to be united with God and to participate in the divine nature (2 Peter 1:4). This single idea, more than any other, captures what is distinctive about the Orthodox vision of salvation. The Christian life is not chiefly about being acquitted of guilt, but about being transformed &mdash; drawn into the very life of God and made to share in it.",
      "The classic formulation comes from Athanasius: &ldquo;God became man so that man might become god.&rdquo; The great fourth-century defender of Christ&rsquo;s deity saw the incarnation as the key to the whole of salvation: the Son of God took on our humanity precisely so that we might be lifted into his divinity. The purpose of the incarnation, on this view, was not merely to pay a debt but to open a way &mdash; to join God and humanity so closely in Christ that human beings might be carried up into the divine life.",
      "This does not mean humans become God in essence. Orthodoxy carefully preserves the distinction between God&rsquo;s unknowable essence and his &ldquo;energies&rdquo; through which he is experienced &mdash; a distinction developed by Gregory Palamas in the fourteenth century. God&rsquo;s essence remains forever beyond us, utterly transcendent and incomprehensible; but his energies &mdash; his presence, his grace, his light, his action &mdash; reach out to us and draw us in. We are united to God not in his essence, which would obliterate the difference between Creator and creature, but in his energies, by which he truly gives himself.",
      "It means that through grace, the believer is progressively transformed, sharing more and more fully in the life of God, until they reflect the divine likeness. Theosis is not a single event but a lifelong ascent, worked out through prayer, the sacraments, fasting, repentance, and love &mdash; the slow remaking of a human being into the image of Christ. The saints are those in whom this process has gone furthest, who have become so transparent to God that his light shines visibly through them.",
      "Salvation in Orthodoxy is understood less as a legal transaction (the satisfaction of justice) and more as healing and transformation &mdash; the restoration of the image of God in humanity and the believer&rsquo;s growth into the divine likeness. Where much of Western theology has framed salvation in terms of guilt, punishment, and acquittal, the Orthodox frame it in terms of sickness and healing, death and life, corruption and incorruption. Sin is less a crime to be punished than a disease to be cured, and Christ is less a judge to be satisfied than a physician who restores.",
      "This is a different soteriological emphasis from much of Western Christianity. It is not, the Orthodox would say, a denial of the Western concerns &mdash; the language of justice and forgiveness is present in Orthodoxy too &mdash; but a different center of gravity. The question is not first &ldquo;How can a guilty sinner be declared righteous?&rdquo; but &ldquo;How can a mortal, broken human being be united with the living God and made whole?&rdquo; To grasp this difference of emphasis is to grasp much of what makes the Orthodox vision of the Christian life distinct.",
    ],
  },
  {
    id: "Icons and the Incarnation",
    heading: "Icons and the Incarnation",
    paragraphs: [
      "Icons &mdash; stylized religious images of Christ, Mary, and the saints &mdash; are central to Orthodox worship, and their theology is profound. To enter an Orthodox church is to be surrounded by them: covering the walls, screening the altar, held and kissed by the faithful. They are not mere decoration but, in Orthodox understanding, a kind of theology in color, a way of confessing the faith through sight as the creed confesses it through words.",
      "In the 8th and 9th centuries, the Iconoclast Controversy nearly tore the Eastern church apart: were icons idolatrous? A powerful movement, backed at times by emperors, held that images of the holy were a violation of the commandment against graven images, and across the empire icons were smashed, painted over, and burned. The controversy raged for more than a century, with martyrs on the side of the images, before it was finally resolved.",
      "The defenders of icons (especially John of Damascus and Theodore the Studite) won the day at the Seventh Ecumenical Council (787), and their argument was Christological: because God became visible in the incarnation &mdash; &ldquo;the Word became flesh&rdquo; &mdash; he can now be depicted. To forbid images of Christ is implicitly to deny that he truly took on visible human flesh. The Old Testament rightly forbade images of the invisible God; but in Christ, God has made himself visible, and to paint him is simply to confess that he has really come in the flesh. Iconoclasm, on this reasoning, is a subtle denial of the incarnation itself.",
      "Icons are not worshiped but venerated &mdash; they are &ldquo;windows into heaven,&rdquo; aids to prayer that direct the worshiper&rsquo;s attention through the image to the reality it represents. The honor given to the image, in the words of the council, passes to the one it depicts; the worshiper does not stop at the wood and paint but is carried through them to Christ, or to the saint portrayed. The distinction between veneration and worship, the same that governs the Orthodox understanding of the saints, is fundamental here: only God is adored, while his images and his friends are honored.",
      "The Orthodox kiss icons, light candles before them, and understand them as making present the communion of saints. To pray before an icon of a saint is to stand in that saint&rsquo;s presence, to be reminded that the great cloud of witnesses is real and near, that the church is not only the living gathered in the room but the whole company of the redeemed across all time. The icon makes the unseen church visible, and draws the worshiper into its prayer.",
      "This sacramental view of matter &mdash; that physical things can be vehicles of grace &mdash; pervades Orthodox theology. The same conviction that defends the icons defends the sacraments, the veneration of relics, the blessing of water, and the whole material texture of Orthodox worship. Because God took on a material body, matter itself has been hallowed and made capable of bearing the holy. The Orthodox refuse to drive a wedge between the spiritual and the physical; in Christ, the two have been joined, and the whole created world is summoned to become a vehicle of God&rsquo;s presence.",
    ],
  },
  {
    id: "The Divine Liturgy",
    heading: "The Divine Liturgy",
    paragraphs: [
      "Orthodox worship is among the most beautiful and ancient in Christianity. To attend it for the first time is often overwhelming: there are no pews to anchor the visitor, no printed program to follow, only a great flood of chant and incense and movement, of gold and candlelight and icons, going on for hours. It is worship designed not to inform the mind so much as to immerse the whole person &mdash; body, senses, and soul &mdash; in the presence of God.",
      "The Divine Liturgy (most commonly the Liturgy of St. John Chrysostom, dating to the 4th-5th centuries) is a multi-sensory experience: chanting, incense, icons, elaborate vestments, and the congregation often standing throughout. Almost nothing is spoken plainly; the prayers are sung or chanted, the air is thick with the smoke of incense, the priest moves in and out through the doors of the icon screen, and the worshipers cross themselves, bow, and venerate the images. Every sense is engaged, and the effect is cumulative, drawing the worshiper out of ordinary time into something timeless.",
      "Orthodoxy emphasizes worship as participation in the heavenly liturgy &mdash; when the church gathers, it joins the angels and saints already worshiping before the throne of God. The earthly liturgy is understood as a window onto the eternal one; in the singing of the Thrice-Holy hymn, the congregation joins the seraphim who cry &ldquo;Holy, Holy, Holy&rdquo; before the throne. To worship is not to begin something but to be caught up into something already and forever underway in heaven.",
      "The Eucharist (which Orthodox call the &ldquo;Holy Mysteries&rdquo;) is the center: the Orthodox affirm the real presence of Christ but, characteristically, decline to define the &ldquo;how&rdquo; with the precision of Catholic transubstantiation &mdash; it remains a mystery. That the bread and wine truly become the body and blood of Christ, the Orthodox firmly hold; but they resist the scholastic machinery of substance and accidents by which the West sought to explain it. The change is real, but the manner of it belongs to the realm of mystery, where, in the Orthodox instinct, explanation should give way to adoration.",
      "The Orthodox liturgical year, with its great feasts and its long seasons of fasting, gives the whole of life a rhythm shaped by the story of salvation. The fasts &mdash; including a rigorous Great Lent &mdash; are taken seriously as a discipline of the body in service of the soul, a participation through abstinence in the church&rsquo;s seasons of repentance and expectation. To live as an Orthodox Christian is to live within this calendar, marking time not by the secular year but by the unfolding commemoration of Christ&rsquo;s coming, dying, rising, and reigning.",
      "Practices like the Jesus Prayer (&ldquo;Lord Jesus Christ, Son of God, have mercy on me, a sinner&rdquo;) shape a whole way of life oriented toward union with God. Repeated countless times, breathed in rhythm with the body until it becomes as natural as breathing, the prayer is meant to descend from the lips into the mind and finally into the heart, so that the whole person prays without ceasing. In it, the great themes of Orthodoxy converge &mdash; the centrality of Christ, the cry for mercy, the longing for transformation &mdash; and the believer is carried, word by word, toward the theosis that is the goal of the whole Orthodox life.",
    ],
  },
];

const videoItems = [
  { videoId: "DycEYL5p7zQ", title: "What Is Eastern Orthodoxy? An Introduction" },
  { videoId: "yY8Fk2P3sQk", title: "Orthodox vs Catholic vs Protestant — The Differences" },
  { videoId: "Yc5pE6Fn6Yc", title: "Theosis and Orthodox Spirituality Explained" },
];

export default function ChristianEasternOrthodoxyExplainedPage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);
  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.75rem" };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: "uppercase" }}>Christianity &amp; the Church</span>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, margin: "0.75rem 0 1rem" }}>
            Eastern Orthodoxy Explained
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680, margin: 0 }}>
            Understanding Eastern Orthodox Christianity &mdash; the Great Schism of 1054, theosis (deification), icons and the incarnation, the Divine Liturgy, apophatic theology, and how Orthodoxy differs from Catholicism and Protestantism.
          </p>
        </header>

        <aside style={{ marginBottom: "2rem", padding: "1.5rem 1.75rem", background: `${ACCENT}0F`, border: `1px solid ${ACCENT}33`, borderRadius: 16 }}>
          <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: "&ldquo;God became man so that man might become god&rdquo; (Athanasius). The goal of the Christian life, in Orthodox understanding, is theosis &mdash; union with God and participation in the divine nature (2 Peter 1:4)." }} />
        </aside>

        <nav style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)}
              style={{
                padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t ? ACCENT : "transparent",
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                cursor: "pointer", transition: "all .18s",
              }}>
              {t}
            </button>
          ))}
        </nav>

        {currentSection && (
          <article style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.4rem", marginBottom: "1.25rem", color: ACCENT }}>{currentSection.heading}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p key={i} style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          </article>
        )}

        {tab === "Videos" && (
          <section style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.4rem", marginBottom: "1.25rem", color: ACCENT }}>Video Teaching</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {videoItems.map((v) => (
                <div key={v.videoId}>
                  <div style={{ fontWeight: 700, color: TEXT, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{v.title}</div>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                </div>
              ))}
            </div>
          </section>
        )}

        <aside style={{ marginTop: "2.5rem", padding: "1.5rem 1.75rem", background: `${ACCENT}0F`, border: `1px solid ${ACCENT}33`, borderRadius: 16 }}>
          <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: "Orthodoxy offers the West a different center of gravity &mdash; mystery over definition, healing over acquittal, participation over explanation. Its worship, its icons, and its vision of theosis preserve a Christianity reaching back, unbroken, to the early church." }} />
        </aside>
      </main>
    </div>
  );
}
