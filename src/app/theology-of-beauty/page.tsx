"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { ChevronDown, ChevronUp, Star, Music } from "lucide-react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const GOLD = "#D97706";
const RED = "#EF4444";
const PINK = "#EC4899";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "creator", label: "The Creator God" },
  { id: "imago", label: "Image-Bearers" },
  { id: "arts", label: "Arts & Creativity" },
  { id: "music", label: "Music & Worship" },
  { id: "culture", label: "Engaging Culture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const BEAUTIFUL_TEXTS = [
  { ref: "Genesis 1:31", text: "God saw all that he had made, and it was very good.", color: GREEN, note: "The Creator's aesthetic response to creation — not just functional but good, beautiful, ordered." },
  { ref: "Psalm 27:4", text: "One thing I ask from the LORD... to gaze on the beauty of the LORD and to seek him in his temple.", color: GOLD, note: "Beauty as a category for experiencing God — not just ethical goodness but aesthetic beauty." },
  { ref: "Psalm 19:1", text: "The heavens declare the glory of God; the skies proclaim the work of his hands.", color: BLUE, note: "Creation as artwork — made to communicate the glory of its Maker." },
  { ref: "Exodus 31:1-5", text: "I have filled him with the Spirit of God, with wisdom, with understanding, with knowledge and with all kinds of skills — to make artistic designs for work in gold, silver and bronze.", color: PURPLE, note: "The first person described as 'filled with the Spirit' in Scripture is an artist — Bezalel. The Spirit enables craftsmanship." },
  { ref: "Philippians 4:8", text: "Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable — if anything is excellent or praiseworthy — think about such things.", color: TEAL, note: "Paul explicitly includes 'lovely' (prosphilē) and 'admirable' in the Christian mind's landscape. Beauty is a virtue to attend to." },
];

const BEAUTY_QUESTIONS = [
  {
    q: "Is beauty objective or subjective?",
    color: GOLD,
    a: "The Christian tradition affirms both: beauty is genuinely objective (rooted in God's nature and creation's order) and subjectively experienced (requiring a perceiving subject). Augustine's insight: beauty is the self-disclosure of God's goodness — it is real, not merely in the eye of the beholder. But our capacity to perceive beauty is cultivated or corrupted by formation. We can be trained to see more beauty or blinded to it.",
  },
  {
    q: "Is beauty morally good?",
    color: BLUE,
    a: "The Greek-Christian tradition linked Truth, Goodness, and Beauty as transcendentals — properties of being that reflect God. Augustine saw them as convertible. But the connection is not automatic: beautiful music can serve sinful ends; beautiful lies are still lies. Beauty is genuinely good but does not automatically produce moral goodness. The Christian is called to pursue beauty in the service of truth and love.",
  },
  {
    q: "What does God's beauty look like?",
    color: TEAL,
    a: "Jonathan Edwards argued that God's beauty is 'the infinite, spiritual, and original beauty' from which all created beauty derives. God's beauty is not aesthetic in the way a painting is beautiful — it is the harmony, proportion, and radiance of his triune being. The perichoretic love of Father, Son, and Spirit is the supreme beauty. We perceive it analogically through created beauty.",
  },
  {
    q: "How does beauty relate to the gospel?",
    color: PURPLE,
    a: "Hans Urs von Balthasar's theological aesthetics: if we lose the category of beauty, we lose the ability to communicate the gospel's attraction. The gospel is not only true and good — it is beautiful. A community that is not beautiful in its love, worship, and life fails to commend the gospel, even if its doctrine is correct.",
  },
];

const CREATIVITY_PRINCIPLES = [
  { title: "Creativity is Derivative, Not Original", color: GREEN, content: "Only God creates ex nihilo. Human creativity is sub-creation — taking what God has made and re-arranging, re-presenting, re-imagining it. Tolkien's term 'sub-creation' captures this: we are 'made in the image of a Maker,' so when we make things, we reflect that Maker-nature. Our creativity honors God precisely by being genuinely creative." },
  { title: "Excellence Is a Theological Virtue", color: GOLD, content: "1 Corinthians 10:31: 'whatever you do, do it all for the glory of God.' This includes artistic and craft work. Mediocrity in service to God is not humility — it is a failure to steward the gifts he has given. Bezalel's work on the tabernacle (Exodus 35-36) was to the highest standard of craftsmanship. God does not require bad art as a sign of piety." },
  { title: "Art Can Be True Without Being Preachy", color: BLUE, content: "Flannery O'Connor, the Catholic novelist: 'the fiction writer should be characterized by a distrust of the sentimental, the simple, and the prettified.' Christian art that only tells the happy ending misrepresents creation's tragedy and redemption. The Psalms are not uniformly positive. The dark and complex are part of reality; art that engages them honestly serves truth." },
  { title: "Beauty Leads to Wonder, Wonder to Worship", color: PURPLE, content: "C.S. Lewis's argument from desire: our aesthetic experiences — the piercing beauty of music, the awe before a landscape, the ache of longing produced by a great poem — are signposts pointing beyond themselves. They produce a longing that no created thing can fully satisfy. This longing is pointing at God. 'Our heart is restless until it rests in Thee.'" },
  { title: "Redemption of All Things Includes Culture", color: TEAL, content: "Abraham Kuyper: art is not merely recreation but a specific domain of human activity under Christ's lordship. The mandate to 'take dominion' (Gen 1:28) includes cultural and artistic dominion. The cultural mandate is not suspended by the Fall but redirected — toward redemptive expression of creation's goodness and humanity's longing for restoration." },
];

const MUSIC_POINTS = [
  { aspect: "Music in Scripture", color: GOLD, content: "Music saturates Scripture: Miriam's song after the Red Sea (Exod 15), David's psalms, the Psalter as Israel's worship manual, the Song of Songs, the angels' song in Isaiah 6, and the song of the Lamb in Revelation 5. Music is not merely emotionally affecting but theologically laden — it embodies and communicates truth in ways that prose cannot." },
  { aspect: "The Psalm Types", color: BLUE, content: "The Psalter provides the full range of authentic human experience before God: praise (hallelujah psalms), lament (the majority), thanksgiving, wisdom, royal, historical. Modern worship has emphasized praise and thanksgiving while largely abandoning lament — distorting the emotional and theological range of corporate worship." },
  { aspect: "The Worship Wars", color: PURPLE, content: "Contemporary vs. traditional worship debates often generate more heat than light. Both extremes fail: a traditionalism that refuses all contemporary forms is not more faithful (the 'traditional' hymn was once contemporary), and a contemporaneity that abandons theological depth for emotional resonance loses the teaching function of worship." },
  { aspect: "Hymns as Theology in Song", color: GREEN, content: "The great hymns — Luther's 'A Mighty Fortress,' Isaac Watts's 'When I Survey the Wondrous Cross,' Charles Wesley's 'Love Divine, All Loves Excelling,' Stuart Townend's 'How Deep the Father's Love' — are compressed systematic theology. They teach doctrine through beauty. The congregation that sings good theology is being formed even when they don't realize it." },
];

const CULTURAL_APPROACHES = [
  { approach: "Rejection", color: RED, desc: "The monastic instinct: withdraw from culture to avoid contamination. Valid in extreme circumstances but not normative — the church is called into the world, not out of it. Jesus prays not that we be taken out of the world but kept from the evil one (John 17:15)." },
  { approach: "Absorption", color: GOLD, desc: "Uncritical embrace of contemporary culture, losing distinctiveness in the attempt to be relevant. The church that looks exactly like culture has nothing to say to culture. Salt that has lost its savor." },
  { approach: "Transformation / Kuyperian", color: GREEN, desc: "The church engages culture with the intent to bring it under Christ's lordship — not withdrawing or absorbing but transforming. Every square inch. Art, music, literature as domains of cultural faithfulness." },
  { approach: "Two Kingdoms", color: BLUE, desc: "The church's primary task is proclamation; culture is Christians' task as citizens, not the church's corporate mission. A healthy corrective to over-identification of church and cultural project, but can lead to privatized faith." },
];

const VIDEOS = [
  { videoId: "J7nX_eDYY6Q", title: "Francis Schaeffer: Art, Truth, and the Christian" },
  { videoId: "Bj8nSb9V-t8", title: "Makoto Fujimura: Theology of Making" },
  { videoId: "p0-EWCY_hRE", title: "Theology of Beauty and the Arts" },
  { videoId: "UlqFXy2RNfY", title: "Why Christians Should Care About Great Art" },
];

export default function TheologyOfBeautyPage() {
  const [tab, setTab] = useLocalStorage("vine_beauty_tab", "overview");
  const [openQ, setOpenQ] = useLocalStorage("vine_beauty_q", "");
  const [journal, setJournal] = useLocalStorage("vine_beauty_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{ background: `${PINK}20`, color: PINK, border: `1px solid ${PINK}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Theology of Culture</span>
            <span style={{ background: `${PURPLE}20`, color: PURPLE, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Aesthetics</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>
            Theology of Beauty &amp; the Arts
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 700 }}>
            God is not only true and good — he is beautiful. And he made image-bearers in his likeness who make beautiful things. A Christian theology of beauty, creativity, art, and music rooted in the character of the Creator.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer", border: `1px solid ${tab === t.id ? PINK : BORDER}`, background: tab === t.id ? `${PINK}20` : "transparent", color: tab === t.id ? PINK : MUTED, transition: "all 0.15s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ background: `${PINK}10`, border: `1px solid ${PINK}30`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>The Transcendentals</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>
                The classical Christian tradition — from Augustine through Aquinas — identified Truth, Goodness, and Beauty as the three &ldquo;transcendentals&rdquo;: properties of being itself that ultimately point to God. They are convertible — wherever there is genuine truth, there is also goodness and beauty; wherever there is genuine beauty, there is also truth and goodness.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                {[
                  { t: "Truth", color: BLUE, desc: "Correspondence to reality — what theology and philosophy seek" },
                  { t: "Goodness", color: GREEN, desc: "Moral excellence — what ethics seeks" },
                  { t: "Beauty", color: PINK, desc: "Radiance and proportion — what aesthetics seeks" },
                ].map((item, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${item.color}30`, borderRadius: 10, padding: "14px 16px", textAlign: "center" }}>
                    <div style={{ color: item.color, fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{item.t}</div>
                    <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Key Thinkers</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { name: "Augustine", period: "354-430", quote: "Our heart is restless until it rests in Thee — the longing beauty produces points beyond itself to God." },
                  { name: "Thomas Aquinas", period: "1225-1274", quote: "Beauty has three conditions: wholeness, proportion, and radiance (integritas, consonantia, claritas)." },
                  { name: "Jonathan Edwards", period: "1703-1758", quote: "The beauty of God is 'the infinite, spiritual, original beauty' from which all created beauty derives." },
                  { name: "C.S. Lewis", period: "1898-1963", quote: "The 'weight of glory' — our longing for transcendent beauty is a longing for God himself." },
                  { name: "Hans Urs von Balthasar", period: "1905-1988", quote: "Theological aesthetics: the form of Jesus Christ is the supreme beauty that draws us toward God." },
                  { name: "Makoto Fujimura", period: "Contemporary", quote: "Artists are 'border-stalkers' — they inhabit the margins where culture faces its own brokenness and longing." },
                ].map((t, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "baseline", marginBottom: 4 }}>
                      <span style={{ color: PINK, fontWeight: 700, fontSize: 13 }}>{t.name}</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>{t.period}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "creator" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>The Creator God</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Any theology of beauty begins with God — who is beautiful, who created a beautiful world, and who fills artists with his Spirit to make beautiful things.
            </p>
            {BEAUTIFUL_TEXTS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ color: t.color, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>{t.ref}</div>
                <blockquote style={{ margin: "0 0 8px", paddingLeft: 12, borderLeft: `3px solid ${t.color}`, fontStyle: "italic", color: TEXT, fontSize: 14, lineHeight: 1.7 }}>&ldquo;{t.text}&rdquo;</blockquote>
                <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, background: `${t.color}10`, padding: "8px 12px", borderRadius: 8 }}>{t.note}</div>
              </div>
            ))}
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: GOLD, marginBottom: 8 }}>Key Insight: Beauty Is Part of Reality, Not a Luxury</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                When God created, he didn&apos;t create the minimum viable creation — a gray, functional universe with just enough to sustain life. He created with extravagance: 10,000 species of birds, 25,000 species of orchids, snowflakes that no one would see for millennia, colors outside the visible spectrum. This overflowing generosity in creation reflects God&apos;s nature — beauty is not incidental to creation but intrinsic to it.
              </p>
            </div>
          </div>
        )}

        {tab === "imago" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Image-Bearers as Sub-Creators</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Humans are made in the image of God (imago Dei). Among God&apos;s most distinctive attributes is that he is a Creator — and when humans create, they reflect that divine attribute.
            </p>
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: PURPLE, marginBottom: 8 }}>Tolkien&apos;s &ldquo;Sub-Creation&rdquo;</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                In his essay &ldquo;On Fairy-Stories&rdquo; (1947), J.R.R. Tolkien argued that human creative imagination is not a deviation from but a reflection of being made in God&apos;s image. We are &ldquo;sub-creators&rdquo; — made by the supreme Creator to make things. Our secondary creation (fiction, music, art) participates in and honors God&apos;s primary creation. When we tell stories of redemption, we are echoing the true story.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Big Questions About Beauty</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {BEAUTY_QUESTIONS.map((q, i) => {
                  const isOpen = openQ === String(i);
                  return (
                    <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
                      <button onClick={() => setOpenQ(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <span style={{ color: q.color, fontWeight: 600, fontSize: 13 }}>{q.q}</span>
                        {isOpen ? <ChevronUp size={14} color={MUTED} /> : <ChevronDown size={14} color={MUTED} />}
                      </button>
                      {isOpen && <div style={{ padding: "0 14px 14px" }}><p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{q.a}</p></div>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {tab === "arts" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Creativity &amp; the Arts</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Christian theology provides a robust foundation for creative work — neither dismissing art as worldly nor sacralizing it unrealistically.
            </p>
            {CREATIVITY_PRINCIPLES.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${pt.color}30`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ color: pt.color, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{pt.title}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{pt.content}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "music" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Music &amp; Worship</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Augustine: &ldquo;He who sings prays twice.&rdquo; Music occupies a unique place in Christian worship — it embodies and transmits theology through a medium that bypasses rational resistance and speaks to the whole person.
            </p>
            {MUSIC_POINTS.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${pt.color}30`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ color: pt.color, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{pt.aspect}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{pt.content}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "culture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Engaging Culture</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              H. Richard Niebuhr&apos;s classic Christ and Culture identified five postures Christians have taken toward culture. The most useful is probably a synthetic approach: Christians engage culture critically, with both appreciation and discernment.
            </p>
            {CULTURAL_APPROACHES.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ color: item.color, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{item.approach}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
            <div style={{ background: `${PINK}10`, border: `1px solid ${PINK}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: PINK, marginBottom: 8 }}>Francis Schaeffer&apos;s Principle</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Francis Schaeffer argued that Christians should be the best critics and the best appreciators of art — capable of recognizing genuine beauty wherever it appears (common grace) and naming falsehood wherever it hides in beautiful packaging. The Christian&apos;s task is not to produce &ldquo;Christian art&rdquo; as a separate category but to produce genuinely excellent art informed by a Christian worldview.
              </p>
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Personal Reflection</div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <label style={{ display: "block", color: MUTED, fontSize: 13, marginBottom: 8 }}>
                What forms of beauty have moved you most deeply — music, visual art, literature, nature, architecture? Have you ever experienced beauty as an encounter with something beyond itself — a pointer toward God? What creative gifts have you been given, and are you stewarding them?
              </label>
              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                placeholder="Reflect on beauty and creativity in your own life..."
                style={{ width: "100%", minHeight: 160, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "12px 14px", resize: "vertical", outline: "none", fontFamily: "inherit", lineHeight: 1.6, boxSizing: "border-box" }}
              />
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Video Teaching</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {VIDEOS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "10px 14px" }}>
                    <div style={{ color: TEXT, fontSize: 13, fontWeight: 600, lineHeight: 1.5 }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}` }}>
          <div style={{ color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>Related Topics</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Calling & Vocation", href: "/calling-vocation" },
              { label: "Worship Theology", href: "/worship-theology" },
              { label: "Christian Music", href: "/christian-music" },
              { label: "Image of God", href: "/image-of-god" },
              { label: "Theology of Work", href: "/theology-of-work" },
              { label: "Christian Art", href: "/christian-art-guide" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "6px 14px", color: MUTED, fontSize: 13, textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
