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
const TEAL = "#0D9488";

const TABS = ["What Is the Incarnation", "Chalcedon (451 AD)", "The Kenosis", "The Virgin Birth", "Incarnation & Salvation", "Videos"];

const VIDEOS = [
  { videoId: "1lNX-VDcXSc", title: "Tim Keller on the Incarnation" },
  { videoId: "n_3tWWUVhWM", title: "N.T. Wright on Jesus as Fully God" },
  { videoId: "dS1Y9Kx_x0c", title: "R.C. Sproul on the Two Natures of Christ" },
];

export default function ChristianIncarnationGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #110a22 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: PURPLE + "22", border: `1px solid ${PURPLE}44`, borderRadius: 8, padding: "6px 16px", fontSize: 13, color: PURPLE, fontWeight: 600, marginBottom: 20, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            The Incarnation
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
            The Word Became Flesh
          </h1>
          <p style={{ fontSize: "1.15rem", color: MUTED, lineHeight: 1.7, maxWidth: 660, margin: "0 auto" }}>
            Fully God and fully human. The mystery of the Incarnation &mdash; what it means, why it matters, and how Chalcedon guards the miracle that makes salvation possible.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "16px 20px", background: "none", border: "none", borderBottom: activeTab === i ? `3px solid ${PURPLE}` : "3px solid transparent", color: activeTab === i ? PURPLE : MUTED, fontWeight: activeTab === i ? 700 : 500, fontSize: 14, cursor: "pointer", whiteSpace: "nowrap" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Tab 0: What Is the Incarnation */}
        {activeTab === 0 && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 8 }}>What Is the Incarnation?</h2>
            <p style={{ color: MUTED, marginBottom: 36 }}>Christianity&rsquo;s most audacious claim: the eternal God took on human flesh and became a particular person in a particular place and time.</p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, marginBottom: 28 }}>
              <div style={{ borderLeft: `4px solid ${PURPLE}`, paddingLeft: 20, marginBottom: 20 }}>
                <p style={{ fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: 8 }}>&ldquo;And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13 }}>John 1:14 (ESV)</p>
              </div>
              <p style={{ lineHeight: 1.8 }}>The prologue to John&rsquo;s Gospel makes the staggering claim: the eternal Logos &mdash; the one through whom all things were made &mdash; took on human flesh. The Incarnation is not a metaphor or a myth. Christianity claims something happened in history: the second person of the eternal Trinity became a specific human being.</p>
            </div>

            {[
              { title: "The Eternal Son Entering Created Time", color: TEAL, text: "The Incarnation is not the creation of the Son but the assumption of a human nature by the pre-existent Son. He who was in the beginning (John 1:1), through whom all things were made (1:3), came to his own (1:11). The Nicene Creed captures this: for us and for our salvation he came down from heaven and was incarnate. The movement is downward &mdash; from eternity into time, from uncreated to creaturely existence, while remaining fully divine." },
              { title: "The Scandal of Particularity", color: GOLD, text: "God did not become humanity in general &mdash; he became a particular Jewish man, born in Bethlehem, raised in Nazareth, during the reign of Augustus Caesar. This concreteness is theologically loaded. God did not work at the level of principles or ideals; he entered the messiness of a specific history, culture, and body. This is what makes the Incarnation scandalous &mdash; and powerful. The universal enters the particular." },
              { title: "Why Not Just a Great Teacher?", color: GREEN, text: "Liberal Christianity has sometimes reduced Jesus to a moral exemplar or a teacher of timeless wisdom. But the New Testament authors insist this misses the point entirely. Paul does not say Christ showed us how to live &mdash; he says Christ was raised for our justification (Romans 4:25). John does not say the Word gave wise teachings &mdash; he says the Word became flesh. The Incarnation is not a pedagogical strategy; it is a rescue mission requiring divine action." },
              { title: "The Magnificat and the Nativity", color: PURPLE, text: "Mary&rsquo;s song (Luke 1:46-55) places the Incarnation within Israel&rsquo;s story of God&rsquo;s faithfulness to the poor and lowly. The Son of God was not born in a palace but in a stable, announced not to Caesar but to shepherds. This is not incidental detail &mdash; it is the theology of the Incarnation enacted. God enters human life at its most vulnerable, from the bottom up. The Christmas story is simultaneously the most universal and the most particular story ever told." },
            ].map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", padding: "18px 22px", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontWeight: 700, color: s.color }}>{s.title}</span>
                  <span style={{ color: MUTED, fontSize: 18 }}>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <div style={{ padding: "0 22px 20px" }}><p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: s.text }} /></div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 1: Chalcedon */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 8 }}>The Council of Chalcedon (451 AD)</h2>
            <p style={{ color: MUTED, marginBottom: 36 }}>One person. Two natures. Without confusion, change, division, or separation. The four adverbs that guarded the mystery.</p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12 }}>The Chalcedonian Definition</h3>
              <p style={{ lineHeight: 1.8, fontStyle: "italic", color: MUTED, marginBottom: 16 }}>&ldquo;We confess one and the same our Lord Jesus Christ...the same perfect in Godhead, the same perfect in manhood, truly God and truly man...one and the same Christ, Son, Lord, Only-begotten, made known in two natures without confusion, without change, without division, without separation.&rdquo;</p>
              <p style={{ lineHeight: 1.8 }}>The four adverbs form a fence around the mystery. They do not explain how two natures can coexist in one person &mdash; they rule out the wrong answers. The Council spent more time saying what Christ is NOT than what he IS.</p>
            </div>

            <div style={{ display: "grid", gap: 20 }}>
              {[
                { title: "The Heresies Chalcedon Rejected", color: TEAL, items: ["Nestorianism: two separate persons loosely joined (rejected by “without division”)", "Eutychianism/Monophysitism: the human nature absorbed into the divine (rejected by “without confusion”)", "Apollinarianism: Jesus had no human mind or will, only a divine one (rejected by “truly man”)", "Docetism: Jesus only appeared human (rejected by “perfect in manhood”)"] },
                { title: "Why the Four Adverbs Matter", color: GOLD, items: ["Without confusion: the two natures remain distinct — divinity does not absorb humanity or vice versa", "Without change: neither nature is altered by the union", "Without division: the two natures do not make two persons — it is one person", "Without separation: the union is permanent — even after the resurrection, Christ has a human body"] },
                { title: "Monothelitism: The Next Controversy", color: GREEN, items: ["After Chalcedon, the church debated whether Christ had one will (monothelitism) or two wills (dyothelitism)", "The Third Council of Constantinople (680 AD) affirmed two wills: a human will and a divine will", "The human will was perfectly subordinate to the divine will (Gethsemane: “not my will but yours”)", "This matters: if Christ had no human will, his obedience in Gethsemane was not real human obedience"] },
              ].map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${s.color}33`, borderRadius: 10, padding: 24 }}>
                  <h3 style={{ color: s.color, fontWeight: 700, marginBottom: 14 }}>{s.title}</h3>
                  <ul style={{ margin: 0, padding: "0 0 0 20px" }}>
                    {s.items.map((item, j) => <li key={j} style={{ color: MUTED, lineHeight: 1.8, marginBottom: 6 }}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Kenosis */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 8 }}>The Kenosis: He Emptied Himself</h2>
            <p style={{ color: MUTED, marginBottom: 36 }}>Philippians 2:5-11 says Christ emptied himself (ekenosen). What did the Son lay aside in the Incarnation?</p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, marginBottom: 28 }}>
              <div style={{ borderLeft: `4px solid ${GOLD}`, paddingLeft: 20, marginBottom: 20 }}>
                <p style={{ fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 8 }}>&ldquo;Who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant, being born in the likeness of men.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13 }}>Philippians 2:6&ndash;7 (ESV)</p>
              </div>
              <p style={{ lineHeight: 1.8 }}>The Greek verb <em>kenoo</em> (to empty) gives us kenosis. Paul says Christ &ldquo;did not grasp&rdquo; his equality with God, but instead &ldquo;emptied himself by taking.&rdquo; The emptying is defined by what follows &mdash; it is an emptying BY taking the form of a servant. The Incarnation is an addition (human nature), not simply a subtraction.</p>
            </div>

            {[
              { title: "What Did He Lay Aside?", color: PURPLE, text: "Kenotic theologians debate what the Son set aside. Some say he laid aside the independent use of divine attributes (omniscience, omnipotence) while retaining the attributes themselves. Others say he voluntarily limited the exercise of these attributes. The key is: he did not lay aside his divine nature (that would make him less than God), but he submitted to the genuine limitations of human existence &mdash; hunger, tiredness, ignorance of certain things (Mark 13:32)." },
              { title: "How Did Jesus Grow in Wisdom?", color: TEAL, text: "Luke 2:52 says Jesus grew in wisdom and stature &mdash; a statement that puzzled the early church. If Jesus is fully God, how can he grow? The two-minds Christology (Thomas Morris) suggests the divine consciousness and the human consciousness existed in different modes. The human mind of Christ learned and developed genuinely. The divine mind, while always omniscient, did not always communicate that knowledge to the human mind. This is not deception but genuine incarnational limitation." },
              { title: "The Temptations Were Real", color: GREEN, text: "Hebrews 4:15 insists Christ was tempted in every way we are, yet without sin. If the kenosis means Jesus was never really limited, his temptations were theatrical &mdash; a performance. But the NT presents them as genuine. The temptation in the wilderness, the agony of Gethsemane, the cry of dereliction &mdash; these are the experiences of a person who genuinely faced the human condition. This is why he is able to sympathize (Heb 4:15) &mdash; he has been there." },
              { title: "Kenosis vs. Divine Impassibility", color: GOLD, text: "The classical tradition held that God is impassible &mdash; incapable of suffering. The Incarnation challenged this. Does the eternal Son suffer on the cross? Most orthodox theologians say the divine nature cannot suffer, but the human nature of Christ genuinely suffered. Jurgen Moltmann controversially argued for a God who suffers &mdash; the crucified God. This remains contested. What is clear: whatever the eternal Son experienced, the human Jesus genuinely suffered, thirsted, agonized, and died." },
            ].map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
                <button onClick={() => setOpen(open === i + 10 ? null : i + 10)} style={{ width: "100%", padding: "18px 22px", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontWeight: 700, color: s.color }}>{s.title}</span>
                  <span style={{ color: MUTED, fontSize: 18 }}>{open === i + 10 ? "−" : "+"}</span>
                </button>
                {open === i + 10 && <div style={{ padding: "0 22px 20px" }}><p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: s.text }} /></div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Virgin Birth */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 8 }}>The Virgin Birth</h2>
            <p style={{ color: MUTED, marginBottom: 36 }}>Not a biological curiosity but a theological sign: the last Adam enters the human race without a human father, inaugurating a new creation.</p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, marginBottom: 28 }}>
              <div style={{ borderLeft: `4px solid ${TEAL}`, paddingLeft: 20, marginBottom: 20 }}>
                <p style={{ fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 8 }}>&ldquo;Therefore the Lord himself will give you a sign. Behold, the virgin shall conceive and bear a son, and shall call his name Immanuel.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13 }}>Isaiah 7:14 (ESV), cited in Matthew 1:23</p>
              </div>
              <p style={{ lineHeight: 1.8 }}>The Hebrew <em>almah</em> (young woman) in Isaiah was rendered <em>parthenos</em> (virgin) in the Greek Septuagint. Matthew&rsquo;s use of this text is not primarily about biology &mdash; it is about identity. The child will be called &ldquo;God with us.&rdquo; The virginal conception is the mechanism that makes good on that name.</p>
            </div>

            <div style={{ display: "grid", gap: 20 }}>
              {[
                { title: "The Theological Significance", color: PURPLE, text: "The virgin birth serves several theological functions: (1) It identifies Jesus as the Son of God in a unique sense &mdash; he has a human mother but no human father. (2) It connects Jesus to the promise of Genesis 3:15 (the seed of the woman). (3) It signals new creation &mdash; just as the first creation involved divine creative action, the new creation begins with a fresh act of the Spirit. (4) As the last Adam, Christ begins a new humanity." },
                { title: "The Patristic Consensus", color: TEAL, text: "The virginal conception was affirmed without controversy across the major strands of early Christianity. Ignatius of Antioch (c.107 AD) writes of the virgin birth as a core confession. Justin Martyr, Irenaeus, Tertullian, Origen &mdash; all affirm it. It appears in the Apostles&rsquo; Creed (born of the Virgin Mary). This is not a medieval accretion but an early, universal conviction. Those who dispute it are disputing the ancient faith, not recovering it." },
                { title: "Objections and Responses", color: GOLD, text: "Common objections: (1) Legendary development &mdash; Matthew and Luke invented the story. Response: both Matthew and Luke independently include it, with different details that suggest independent sources rather than borrowing. (2) Pagan parallels &mdash; other gods were born of virgins. Response: those stories involve divine-human sexual intercourse; the NT story involves a creative act of the Spirit with no such element. (3) Only two gospels mention it. Response: Paul&rsquo;s “born of a woman” (Gal 4:4) and “born according to the flesh” (Rom 1:3) are consistent with virginal conception." },
              ].map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${s.color}33`, borderRadius: 10, padding: 24, marginBottom: 0 }}>
                  <h3 style={{ color: s.color, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: s.text }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Incarnation & Salvation */}
        {activeTab === 4 && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 8 }}>The Incarnation and Salvation</h2>
            <p style={{ color: MUTED, marginBottom: 36 }}>&ldquo;What is not assumed is not healed.&rdquo; Gregory of Nazianzus&rsquo;s axiom: the Incarnation is not merely the prelude to the cross &mdash; it is integral to salvation itself.</p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, marginBottom: 28 }}>
              <div style={{ borderLeft: `4px solid ${GREEN}`, paddingLeft: 20, marginBottom: 20 }}>
                <p style={{ fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: 8 }}>&ldquo;That which he has not assumed he has not healed; but that which is united to his Godhead is also saved.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13 }}>Gregory of Nazianzus, <em>Epistle 101</em> (c. 381 AD)</p>
              </div>
              <p style={{ lineHeight: 1.8 }}>Gregory was arguing against Apollinarius, who said Jesus had no human mind (only the divine Logos in place of a human soul). Gregory&rsquo;s response: if Jesus did not assume a human mind, then human minds are not saved. The principle extends: Christ had to be fully human &mdash; body, soul, mind, will &mdash; for the salvation of the whole person.</p>
            </div>

            <div style={{ display: "grid", gap: 20 }}>
              {[
                { title: "Active Obedience: The Life He Lived", color: PURPLE, text: "Protestant soteriology distinguishes the passive obedience of Christ (his death bearing our punishment) from his active obedience (his perfect life lived in our place). Romans 5:19: by one man&rsquo;s obedience the many will be made righteous. Christ did not merely die as our substitute &mdash; he lived the perfectly obedient life we should have lived. His righteousness, credited to us, is not an abstract accounting but the actual record of a human life." },
                { title: "The Whole Life of Christ as Atonement", color: TEAL, text: "Irenaeus (2nd century) developed the idea of recapitulation: Christ passed through every stage of human life, sanctifying each. He was an infant, a child, an adolescent, an adult &mdash; recapitulating and redeeming each stage of human existence. This is why Luke takes pains to show Jesus growing, learning, and developing. The salvation of human life begins not at Calvary but at Bethlehem." },
                { title: "The Resurrection Body as First Fruits", color: GOLD, text: "Paul calls the risen Christ the firstfruits of those who have died (1 Cor 15:20). The resurrection of Christ is not the resuscitation of a corpse but the transformation of a human body into the new creation mode of existence. The fact that the risen Christ bears the marks of the nails (John 20:27) while also being transformed suggests the new creation includes redeemed particularity. Our resurrection bodies will be our bodies, made new. The Incarnation is permanent &mdash; even now, Christ sits at the Father&rsquo;s right hand in a human body." },
                { title: "Implications for Embodied Life", color: GREEN, text: "The Incarnation is the definitive refutation of Christian Gnosticism &mdash; the idea that matter is bad, the body is a prison, and true spirituality is purely mental or spiritual. Because God took on a body, bodies matter. This has implications for: how we treat our bodies (1 Cor 6:19-20), care for the bodies of the poor and sick (Matt 25), the importance of physical disciplines (fasting, embodied worship), and the rejection of any spirituality that despises created, bodily existence." },
              ].map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${s.color}33`, borderRadius: 10, padding: 24, marginBottom: 0 }}>
                  <h3 style={{ color: s.color, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: s.text }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Videos */}
        {activeTab === 5 && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 8 }}>Video Teaching</h2>
            <p style={{ color: MUTED, marginBottom: 36 }}>Theologians and teachers on the Incarnation, Chalcedon, and the mystery of God becoming man.</p>
            <div style={{ display: "grid", gap: 28 }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "16px 20px" }}>
                    <p style={{ fontWeight: 600, fontSize: 15 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
