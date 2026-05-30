"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Body is Good", verse: "Genesis 1:31", body: "God created the human body and called it very good (Genesis 1:31). The body is not a prison for the soul, not a mistake, not a lower reality to be transcended — it is a good gift from a good Creator. The Incarnation confirms this: God became flesh (John 1:14). The resurrection confirms it again: the future holds embodied existence, not escape from the body. The body is not the problem; sin, shame, and comparison are." },
  { title: "Made in the Image of God", verse: "Genesis 1:27", body: "Every human body — regardless of size, ability, skin color, or appearance — is made in the image of God. The imago Dei is not located in a particular physique; it is the mark of every human person. A theology of body image begins here: your body is not primarily an object to be evaluated but a person to be loved — a person who bears God's image." },
  { title: "The Temple of the Holy Spirit", verse: "1 Corinthians 6:19-20", body: "'Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies' (1 Corinthians 6:19-20). The body is where God's Spirit dwells. Treating the body with contempt — through disordered eating, self-harm, shame, or neglect — is at odds with the sacredness of the body as a divine dwelling place." },
  { title: "Fearfully and Wonderfully Made", verse: "Psalm 139:14", body: "'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well' (Psalm 139:14). David does not say this after viewing himself in a culture that matches his body type. He says it in the context of meditating on God's intimate knowledge and care in forming him. Body satisfaction grounded in God's craftsmanship is independent of cultural standards." },
  { title: "The Renewal of the Mind", verse: "Romans 12:2", body: "Body image is primarily a mind issue. 'Be transformed by the renewing of your mind' (Romans 12:2). The patterns of thought about the body — comparison, shame, disgust, obsession — are formed by the world and must be renewed by the Spirit. This is not positive thinking but a genuine reorientation of perception toward what God declares true about the body." },
];

const STRUGGLES = [
  { struggle: "Eating Disorders", desc: "Anorexia, bulimia, binge eating, and orthorexia are serious mental health conditions with physical consequences. They are often rooted in control, shame, trauma, or cultural pressure.", response: "Professional treatment is necessary — eating disorders have the highest mortality rate of any mental health condition. Spiritual care supplements but does not replace professional support. The church's role is acceptance without enabling, presence without judgment, and prayer alongside treatment." },
  { struggle: "Comparison and Social Media", desc: "Constant exposure to curated, filtered, and professionally lit bodies creates an impossible standard against which real bodies are constantly compared and found lacking.", response: "Audit your social media. Unfollow accounts that produce shame. Follow accounts that represent body diversity. Limit time on platforms that trigger comparison. Name the comparison when it happens: 'I am comparing myself to an image designed to make me feel inadequate.' This naming reduces the comparison's power." },
  { struggle: "Shame About Disability or Illness", desc: "Bodies that don't function as expected — through chronic illness, disability, or pain — can become sources of deep shame, grief, and identity confusion.", response: "Christian theology affirms the dignity of disabled bodies. Paul's thorn was not removed; God's grace was sufficient in weakness. The new creation includes the resurrection of bodies that have suffered — not the elimination of the history of the body but its glorification. The body's limitations are not a divine judgment on the person." },
  { struggle: "Aging Bodies", desc: "A culture that worships youth produces shame in those whose bodies visibly change with time. The marks of age — wrinkles, gray hair, weight changes — are treated as failures rather than as the natural progress of a human life.", response: "'Gray hair is a crown of splendor; it is attained in the way of righteousness' (Proverbs 16:31). The body's aging is not a defeat but the natural completion of its course. Christian formation should produce people who age gracefully — without either denial or despair." },
  { struggle: "Post-Pregnancy Bodies", desc: "Pregnancy and birth permanently change the body — and cultural pressure to 'bounce back' immediately creates shame and grief about a body that did something extraordinary.", response: "The body that carried a child has done something remarkable. The marks of pregnancy are not damage but evidence. Naming what the body has been through — including its losses — is necessary before receiving the body as it now is. Postpartum support for body image is a legitimate spiritual and pastoral need." },
];

const PRACTICES = [
  { title: "Practice Gratitude for Function", desc: "Rather than evaluating the body aesthetically, practice gratitude for what it does: breathes, walks, digests, heals, senses. The body as instrument of life, relationship, and service is a different frame than the body as visual object to be assessed.", icon: "🙏" },
  { title: "Clothe Yourself in Who You Are", desc: "Each morning, consciously remind yourself of your identity: made in God's image, indwelt by his Spirit, loved unconditionally. Dress and prepare your body for the day from this identity, not from the anxiety of how you will be perceived.", icon: "👗" },
  { title: "Limit Mirrors and Scales", desc: "Not eliminating them but reducing obsessive use. The person who checks their appearance or weight multiple times per day is feeding an anxiety that the frequency does not resolve. Reducing checking reduces the power of appearance over mood and identity.", icon: "🪞" },
  { title: "Feed Your Body Well", desc: "Not as a weight-management strategy but as stewardship of a temple. Eat foods that nourish, in amounts that sustain, with pleasure and gratitude. Reject both restriction as punishment and indulgence as comfort. Eat like a person who believes their body matters.", icon: "🥗" },
  { title: "Move with Joy", desc: "Exercise motivated by punishment or appearance is different from movement motivated by joy, health, and gratitude. Find movement you enjoy — walking, dancing, swimming — and practice it as care for a gift, not penance for a body that isn't good enough.", icon: "🏃" },
  { title: "Pray in and With Your Body", desc: "Incorporate physical postures into prayer: kneeling, bowing, raising hands, prostration. Using the body in prayer reconnects the spiritual and the physical and resists the dualism that treats the body as irrelevant to spiritual life.", icon: "🕊️" },
];

export default function BodyImagePage() {
  const [activeTab, setActiveTab] = useState<"theology" | "struggles" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌿</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Body Image & Faith</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The body is a good gift from a good Creator — the place where God's Spirit dwells, made in the divine image, destined for resurrection. A Christian theology of the body changes how we see ourselves.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "struggles" as const, label: "Common Struggles", icon: "⚠️" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "struggles" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Body image struggles are common and serious. These are the most frequent challenges and how faith speaks to each of them.
              </p>
            </div>
            {STRUGGLES.map((s, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === s.struggle ? null : s.struggle)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === s.struggle ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{s.struggle}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === s.struggle ? "−" : "+"}</span>
                </button>
                {expanded === s.struggle && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{s.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{s.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                A Christian body image is not achieved by willpower but formed by practices — repeated ways of relating to the body that over time reshape perception and feeling.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
