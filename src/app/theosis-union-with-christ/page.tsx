"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const RED = "#EF4444";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const BLUE = "#3B82F6";
const MUTED = "#9898B3";
const TEXT = "#F2F2F8";

const TABS = ["overview", "biblical", "orthodox", "protestant", "catholic", "living", "voices", "journal"] as const;
type Tab = (typeof TABS)[number];

const BIBLICAL_FOUNDATIONS = [
  { ref: "2 Peter 1:4", verse: "Through these he has given us his very great and precious promises, so that through them you may participate in the divine nature, having escaped the corruption in the world caused by evil desires.", note: "The most direct biblical basis for theosis. 'Participate in the divine nature' (theia physis koinōnoi) — Paul's language says we share in God's nature. This is not pantheism (we do not become God) but genuine participation." },
  { ref: "John 17:21–23", verse: "I pray that all of them may be one, Father, just as you are in me and I am in you. May they also be in us… I have given them the glory that you gave me, that they may be one as we are one.", note: "Jesus prays that believers would be one in the same way the Trinity is one — the divine unity becomes the model for human-divine union. And Jesus gives them his glory — the radiance of divine character." },
  { ref: "2 Corinthians 3:18", verse: "We all, who with unveiled faces contemplate the Lord's glory, are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit.", note: "Transformation into the image of God through beholding God — glory to glory. This is the participatory dynamic of theosis: we become what we behold, through the Spirit's work." },
  { ref: "Galatians 2:20", verse: "I have been crucified with Christ and I no longer live, but Christ lives in me.", note: "Paul's paradox: dying to self, Christ lives in me. The Christian self is not annihilated but is now constituted by the indwelling Christ. This is real union, not metaphor." },
  { ref: "1 John 3:2", verse: "Dear friends, now we are children of God, and what we will be has not yet been made known. But we know that when Christ appears, we shall be like him, for we shall see him as he is.", note: "The goal of Christian existence is likeness to Christ — and this likeness is achieved by seeing him as he is. Union and vision are inseparable in the NT's vision of the eschatological goal." },
  { ref: "Colossians 3:3–4", verse: "For you died, and your life is now hidden with Christ in God. When Christ, who is your life, appears, then you also will appear with him in glory.", note: "Union with Christ is already real but hidden — awaiting revelation. The Christian life is already embedded in the life of Christ, waiting for the eschatological unveiling." },
];

const ORTHODOX_THEOSIS = [
  { title: "Athanasius's Famous Formula", body: "'God became man so that man might become God.' (De Incarnatione). This is not a metaphysical claim that humans become divine in essence, but a soteriological claim: the purpose of the Incarnation is to lift humanity into participation in God's nature and life." },
  { title: "Distinction Between Essence and Energies", body: "Gregory Palamas (14th c.) articulated the Orthodox doctrine most precisely: we can never share in God's essence (ousia) — which remains absolutely transcendent — but we genuinely share in his energies (energeia) — his love, light, life, and gracious activity. Theosis is real participation in God's energies, not his essence." },
  { title: "The Ladder of Divine Ascent", body: "John Climacus (7th c.) describes the stages of spiritual growth as a ladder: from renunciation of the world, through the practices of asceticism and prayer, toward apatheia (freedom from disordered passions) and finally theosis — rest in and with God. The goal is union, not merely ethical improvement." },
  { title: "Light and Transfiguration", body: "The Transfiguration (Mark 9:2–8) is central to Orthodox theosis theology: Jesus was transfigured and radiated uncreated light — the light that Moses saw in the burning bush, the light of Tabor. This light, the Orthodox argue, is not created but divine. The goal of Christian life is to be transformed by and radiate this uncreated light." },
];

const PROTESTANT_APPROACHES = [
  { title: "Luther: 'Happy Exchange' and Union", body: "Luther spoke of a 'wonderful exchange' (admirabile commercium) in justification — Christ takes our sin; we receive his righteousness. He also used strong union-with-Christ language: through faith, the believer and Christ are 'one flesh,' sharing all things. Luther's theosis language was sometimes stronger than his later followers." },
  { title: "Calvin: Union With Christ as the Root", body: "For Calvin, union with Christ is foundational — justification and sanctification both flow from it. We are incorporated into Christ through the Spirit. Salvation is not merely forensic declaration; it involves real communion with the person of Christ. Some Calvin scholars argue he held a form of theosis." },
  { title: "Jonathan Edwards: Participation in Divine Love", body: "Edwards taught that the goal of salvation is participation in the love that flows eternally between Father and Son in the Spirit. The Holy Spirit is, for Edwards, the divine love itself — and indwelling believers draws them into this eternal relational life. A genuinely participatory soteriology." },
  { title: "C.S. Lewis: 'Little Christs'", body: "'The Church exists for nothing else but to draw men into Christ, to make them little Christs. If they are not doing that, all the cathedrals, clergy, missions, sermons, even the Bible itself, are simply a waste of time.' — Mere Christianity. Lewis used theosis language freely and accessibly." },
  { title: "Modern Protestant Recovery", body: "Scholars like Michael Gorman (Inhabiting the Cruciform God), Tom Wright, and Finnish Luther scholars (Mannermaa) have significantly recovered theosis language within Protestant frameworks, arguing it is more central to NT soteriology than Protestant traditions have typically acknowledged." },
];

const HOW_TO_LIVE = [
  { practice: "Contemplative Prayer", body: "The classic path to theosis runs through prayer — not merely petition but union. Lectio divina, hesychasm, the Jesus Prayer, and silent contemplative prayer are all practices aimed at deeper communion with God rather than mere information exchange." },
  { practice: "The Sacraments", body: "In liturgical traditions, the Eucharist is the primary vehicle of theosis — receiving the body and blood of Christ is literal ingestion of divine life. Even in non-sacramental traditions, participation in worship embeds the believer in Christ's presence." },
  { practice: "Beholding Scripture", body: "2 Corinthians 3:18: transformation comes through beholding. Reading Scripture is not merely information-gathering but encountering the living God — being changed by what we see into what we see." },
  { practice: "Embodied Life in Community", body: "Theosis is not a private mystical journey. It happens in the body of Christ — the church — through love, service, forgiveness, and mutual submission. You cannot become like Christ while avoiding his people." },
  { practice: "Embracing Suffering", body: "The path of theosis runs through the cross, not around it. Suffering, when entered with Christ, participates in the paschal mystery — dying and rising with him. The Eastern tradition especially emphasizes that theosis requires the stripping away of self-will through ascesis (discipline) and suffering." },
];

const VOICES = [
  { name: "Athanasius (296–373)", tradition: "Eastern Orthodox", work: "On the Incarnation", note: "Articulated the principle that defines theosis theology: the Incarnation is the means by which humanity participates in divinity. His formula has been the touchstone for all subsequent theosis theology." },
  { name: "Gregory Palamas (1296–1359)", tradition: "Eastern Orthodox", work: "Triads; On the Divine Energies", note: "Defended hesychasm and articulated the essence-energies distinction that grounds Orthodox theosis: we participate in God's energies, not his essence. This protected both divine transcendence and real participation." },
  { name: "C.S. Lewis (1898–1963)", tradition: "Anglican", work: "Mere Christianity; The Weight of Glory", note: "Made theosis accessible to modern audiences. 'Weight of Glory' is perhaps his most moving articulation: 'It is a serious thing… to be next door to a man who will one day be a creature which could kneel and worship, or else a horror and a corruption such as you now meet, if at all, only in a nightmare.'" },
  { name: "Michael Gorman", tradition: "Protestant", work: "Inhabiting the Cruciform God", note: "Argues that Paul's soteriology is participatory and cruciform — 'theosis' is the right category, but it is Christ-shaped and cross-shaped, not the upward spiritual journey of Greek philosophical mysticism." },
  { name: "N.T. Wright", tradition: "Anglican", work: "Paul: In Fresh Perspective; The Day the Revolution Began", note: "Argues for a participatory reading of Paul in which union with Christ, not merely forensic justification, is central to soteriology. Uses the language of 'humans reflecting God's image back into creation' as theotic participation." },
  { name: "Pope Francis", tradition: "Roman Catholic", work: "Evangelii Gaudium; Laudato Si", note: "Draws on the Catholic/Orthodox tradition of theosis as transformation into divine love. His social theology is explicitly theotic: becoming like God means becoming love, which is inseparable from justice and care for the poor." },
];

const VIDEOS = [
  { id: "ORt4EBkEfQ8", title: "What Is Theosis? — Orthodox Christianity Explained" },
  { id: "6CKxQD7xeHY", title: "Union with Christ — Reformed Perspective" },
  { id: "rn7QqmR5APY", title: "C.S. Lewis on 'The Weight of Glory' — Theosis for Anglicans" },
  { id: "sIHX26oGIZg", title: "Participating in the Divine Nature — 2 Peter 1:4 Study" },
];

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

export default function TheosisPage() {
  const [tab, setTab] = useLocalStorage("vine_theosis_tab", "overview");
  const [expandedLiving, setExpandedLiving] = useLocalStorage("vine_theosis_living", "");
  const [journalUnion, setJournalUnion] = useLocalStorage("vine_theosis_union", "");
  const [journalPractice, setJournalPractice] = useLocalStorage("vine_theosis_practice", "");

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <Link href="/dashboard" style={{ color: MUTED, display: "flex", alignItems: "center" }}>
          <ArrowLeft size={18} />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: GOLD + "22", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Star size={18} color={GOLD} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Theosis & Union with Christ</div>
            <div style={{ color: MUTED, fontSize: 12 }}>Participating in the divine nature — Orthodox, Catholic, and Protestant perspectives</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "0 20px", display: "flex", gap: 2, overflowX: "auto" }}>
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "12px 10px", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${GOLD}` : "2px solid transparent", color: tab === t ? TEXT : MUTED, fontWeight: tab === t ? 600 : 400, fontSize: 12, cursor: "pointer", whiteSpace: "nowrap", textTransform: "capitalize" }}>
            {t}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>

        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Becoming What God Is</h2>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              Theosis (from the Greek theos, God) is the teaching that the goal of the Christian life is genuine participation in the divine nature — not mere forgiveness, not merely getting to heaven, but actual transformation into the likeness of God through union with Christ and the indwelling of the Holy Spirit.
            </p>
            <div style={{ background: GOLD + "11", border: `1px solid ${GOLD}33`, borderRadius: 10, padding: 14, marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: "#FEF3C7", margin: 0, fontStyle: "italic", fontWeight: 600 }}>
                &ldquo;God became man so that man might become God.&rdquo;
              </p>
              <p style={{ fontSize: 11, color: GOLD, margin: "4px 0 0" }}>— Athanasius of Alexandria, De Incarnatione</p>
            </div>
            <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16, marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>What Theosis Is Not</div>
              {[
                { wrong: "Pantheism — we do not become God or lose our distinct personhood", right: "Participation — we share in God's life while remaining distinct creatures" },
                { wrong: "Self-deification — we become God by our own spiritual effort", right: "Gift — theosis is entirely by grace through Christ and the Spirit" },
                { wrong: "Absorption — our individual identity is dissolved into the divine", right: "Union — we are united to Christ while remaining ourselves, even more fully ourselves" },
                { wrong: "A second-tier 'mystical' Christianity for spiritual elites", right: "The normal goal of every Christian — discipleship fully realized" },
              ].map((item, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 6 }}>
                  <div style={{ background: RED + "11", borderRadius: 6, padding: "6px 8px" }}>
                    <span style={{ color: RED, fontSize: 10, fontWeight: 600 }}>NOT: </span>
                    <span style={{ fontSize: 11, color: MUTED }}>{item.wrong}</span>
                  </div>
                  <div style={{ background: GREEN + "11", borderRadius: 6, padding: "6px 8px" }}>
                    <span style={{ color: GREEN, fontSize: 10, fontWeight: 600 }}>BUT: </span>
                    <span style={{ fontSize: 11, color: MUTED }}>{item.right}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "biblical" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Biblical Foundations</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Theosis is not a Greek philosophical import — it emerges from specific NT texts.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {BIBLICAL_FOUNDATIONS.map((f, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${GOLD}33`, padding: 16 }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>{f.ref}</div>
                  <p style={{ fontSize: 13, fontStyle: "italic", color: TEXT, margin: "0 0 8px" }}>&ldquo;{f.verse}&rdquo;</p>
                  <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{f.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "orthodox" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Eastern Orthodox Theosis</h2>
            <p style={{ color: TEAL, fontSize: 12, marginBottom: 16 }}>The theological tradition where theosis has received its fullest development</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {ORTHODOX_THEOSIS.map((p, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${TEAL}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: TEAL, marginBottom: 8 }}>{p.title}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "protestant" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Protestant Perspectives on Union with Christ</h2>
            <p style={{ color: BLUE, fontSize: 12, marginBottom: 16 }}>Theosis language appears across the Protestant tradition, often under different terms</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {PROTESTANT_APPROACHES.map((p, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BLUE}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: BLUE, marginBottom: 8 }}>{p.title}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "catholic" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Roman Catholic and Western Mystical Tradition</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { title: "Beatific Vision", color: PURPLE, body: "The ultimate goal of Catholic soteriology: seeing God face-to-face as he is in himself (1 Cor 13:12; 1 John 3:2). Aquinas taught that in heaven, God himself becomes the form of the intellect — direct cognitive union with God. This is the Catholic form of theosis." },
                { title: "Mystical Theology (Carmelites)", color: PURPLE, body: "Teresa of Ávila (Interior Castle) and John of the Cross (Ascent of Mount Carmel, Dark Night of the Soul) describe the progressive stages of contemplative prayer toward mystical union. The Interior Castle's innermost room is the cell where the soul and God meet in spiritual marriage." },
                { title: "Francis de Sales — Accessible Theosis", color: PURPLE, body: "Introduction to the Devout Life made the path toward mystical union accessible to laypeople — not just monks and mystics. His teaching that theosis happens in the midst of ordinary life (work, marriage, parenting) is an important democratization." },
                { title: "Meister Eckhart — The Birth of the Word", color: PURPLE, body: "Dominican mystic who pushed theosis language to its limits: 'The eye through which I see God is the same eye through which God sees me.' His language was formally condemned by the Church as too radical — the line between union and identity is genuinely blurry in some of his work." },
              ].map((p, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${PURPLE}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: p.color, marginBottom: 8 }}>{p.title}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "living" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Living Toward Union</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>The practices through which theosis becomes real in daily Christian life.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {HOW_TO_LIVE.map((p) => {
                const isOpen = expandedLiving === p.practice;
                return (
                  <div key={p.practice} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <button onClick={() => setExpandedLiving(isOpen ? "" : p.practice)} style={{ width: "100%", background: "none", border: "none", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}>
                      <span style={{ fontWeight: 600, fontSize: 14 }}>{p.practice}</span>
                      {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 16px 14px" }}>
                        <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{p.body}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Voices</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VOICES.map((v, i) => {
                const col = v.tradition === "Eastern Orthodox" ? TEAL : v.tradition === "Anglican" ? BLUE : v.tradition === "Protestant" ? GOLD : PURPLE;
                return (
                  <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${col}33`, padding: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                      <span style={{ background: col + "22", color: col, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 700 }}>{v.tradition.toUpperCase()}</span>
                    </div>
                    <div style={{ color: col, fontSize: 11, fontWeight: 600, marginBottom: 6 }}>{v.work}</div>
                    <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{v.note}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Personal Reflection</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Saved to your device only.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>How does the idea of union with Christ — actually sharing in God's life — affect how you understand the Christian life?</label>
                <textarea value={journalUnion} onChange={(e) => setJournalUnion(e.target.value)} placeholder="I've thought of Christianity mainly as… The idea of real union with God makes me feel… changes my understanding of prayer / worship / suffering…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>Which practices do you most want to develop to grow in union with Christ?</label>
                <textarea value={journalPractice} onChange={(e) => setJournalPractice(e.target.value)} placeholder="I want to develop a deeper practice of… I've been neglecting… The thing that most helps me feel connected to God is…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              {(journalUnion || journalPractice) && (
                <p style={{ fontSize: 11, color: MUTED, textAlign: "center" }}>Saved automatically to your device.</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Videos */}
      <div style={{ padding: "0 20px", maxWidth: 720, margin: "0 auto" }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: MUTED }}>Video Teaching</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
          {VIDEOS.map((v) => (
            <div key={v.id} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
              <VideoEmbed videoId={v.id} title={v.title} />
              <div style={{ padding: "8px 10px" }}>
                <p style={{ fontSize: 11, fontWeight: 600, margin: 0 }}>{v.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related */}
      <div style={{ padding: "0 20px 32px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
          <p style={{ fontSize: 12, color: MUTED, marginBottom: 10 }}>Related Topics</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Spiritual Formation", href: "/spiritual-formation" },
              { label: "Eastern Orthodox", href: "/eastern-orthodox" },
              { label: "Contemplative Prayer", href: "/christian-mindfulness" },
              { label: "Sanctification", href: "/sanctification" },
              { label: "Heaven", href: "/heaven" },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 12, color: MUTED }}>
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
