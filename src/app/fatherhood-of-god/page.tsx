"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Father in the Trinity", verse: "Matthew 3:17", body: "A voice from heaven said: 'This is my Son, whom I love; with him I am well pleased' (Matthew 3:17). God is Father first and eternally within the Trinity — the Father of the eternal Son, not first of all a father to creatures. The eternal generation of the Son from the Father is the immanent or ontological Fatherhood: an eternal relation of loving communication and self-giving. The Father's address at Jesus's baptism — love expressed before any achievement — is a window into the eternal Trinitarian life." },
  { title: "The Father of Israel", verse: "Deuteronomy 32:6", body: "'Is this the way you repay the Lord, you foolish and unwise people? Is he not your Father, your Creator, who made you and formed you?' (Deuteronomy 32:6). God reveals himself as Father to Israel in the Old Testament — not through natural generation but through election and covenant. The Exodus is the paradigmatic fatherly act: 'Israel is my firstborn son... let my son go' (Exodus 4:22-23). God's fatherly care is expressed through redemption, instruction, discipline, and provision. Israel is God's son by adoption, not nature." },
  { title: "Jesus's Unprecedented Address", verse: "Mark 14:36", body: "Jesus addressed God as Abba — the intimate Aramaic word for father, used within families, expressing close personal relationship. This was unprecedented in Jewish prayer (it does not appear in the Dead Sea Scrolls or rabbinic literature as a form of address to God). Jesus prayed from a unique position of sonship; but through the Spirit, his followers share in this address: 'Because you are his sons, God sent the Spirit of his Son into our hearts, the Spirit who calls out, Abba, Father' (Galatians 4:6)." },
  { title: "Adoption and the Father's Welcome", verse: "Romans 8:15-16", body: "'The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, Abba, Father. The Spirit himself testifies with our spirit that we are God's children' (Romans 8:15-16). Adoption is not a second-tier status — it is the full legal and relational standing of a son or daughter, with all the inheritance rights that belong to the firstborn. The Spirit's inner witness is the ongoing ground of assurance that the relationship is real." },
  { title: "The Father's Discipline", verse: "Hebrews 12:7-11", body: "'God is treating you as his children. For what children are not disciplined by their father?... No discipline seems pleasant at the time, but painful. Later on, however, it produces a harvest of righteousness and peace for those who have been trained by it' (Hebrews 12:7, 11). The Father's discipline (paideia — education, formation) is proof of sonship, not its absence. The disciplined child is recognized as beloved; the undisciplined child is treated as illegitimate. Suffering that shapes character is not punishment but fatherly formation." },
];

const ATTRIBUTES = [
  { attr: "Provision", icon: "🍞", verse: "Matthew 6:26-32", desc: "The Father feeds the birds of the air and clothes the lilies. He knows what his children need before they ask. The Father's provision is not automatic wealth but adequate care — he provides what is genuinely needed for his children's flourishing. Anxiety is a failure to trust the Father's provision; prayer is the proper expression of dependence on it." },
  { attr: "Discipline", icon: "📏", verse: "Hebrews 12:7-11", desc: "The Father disciplines because he loves, not in spite of it. The discipline is purposeful — producing 'a harvest of righteousness.' Unlike human fathers who may discipline imperfectly or abusively, the heavenly Father's discipline is always appropriate, always restorative in purpose, and always within his perfect knowledge of the child." },
  { attr: "Protection", icon: "🛡️", verse: "John 10:29", desc: "'My Father, who has given them to me, is greater than all; no one can snatch them out of my Father's hand.' The Father's protection of his children is absolute — not from all suffering (which discipline requires) but from ultimate loss. Those whom the Father has given to the Son cannot be snatched from the Father's hand. This is the foundation of the perseverance of the saints." },
  { attr: "Delight", icon: "💛", verse: "Zephaniah 3:17", desc: "'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.' The Father's attitude toward his children is not merely tolerant acceptance but active delight — joy, rejoicing, singing. This is the affective heart of the Father-child relationship: you are not merely forgiven; you are loved with delight." },
  { attr: "Listening", icon: "👂", verse: "Matthew 7:11", desc: "'If you, then, though you are evil, know how to give good gifts to your children, how much more will your Father in heaven give good gifts to those who ask him!' The Father listens and responds. Prayer is not speaking into a void but a conversation with a Father who attends, who hears, and who answers with good gifts. His answers may differ from our requests; but they are always good gifts from a Father who knows better than we do." },
  { attr: "Forgiveness", icon: "🕊️", verse: "Luke 15:20", desc: "The father in the parable of the prodigal son ran to meet his returning child while still a long way off — demonstrating proactive, eager forgiveness, not merely reluctant acceptance after adequate repentance. The Father's posture toward the returning sinner is characterized by speed (he ran), emotion (he threw his arms around him), and extravagance (he killed the fattened calf). This is what restoration to the Father looks like." },
];

const PRACTICES = [
  { title: "Pray 'Our Father'", desc: "Jesus did not give us the Lord's Prayer as a formula to recite but as a pattern to inhabit. When Jesus says 'pray like this,' the first thing he establishes is: God is your Father. Slow down the opening words of the Lord's Prayer. 'Our Father' is not a warm-up; it is the whole of the prayer in two words.", icon: "🙏" },
  { title: "Receive His Love Before You Perform", desc: "The Father spoke his love over Jesus at the baptism before any ministry ('before he had done anything' — this was the beginning, not the climax, of his ministry). You are loved before you achieve. The Father's approval is not waiting at the end of your performance — it is given in Christ, now, before you do anything today.", icon: "💝" },
  { title: "Bring Your Real Self to Him", desc: "Children bring their problems to fathers without first cleaning them up to make them presentable. The Father knows what you are carrying. The invitation of prayer is to bring it — not the cleaned-up version, not the version where you have already sorted it out, but the raw, as-yet-unresolved reality of your actual life.", icon: "💬" },
  { title: "Receive Discipline Without Bitterness", desc: "When suffering arrives, identify it first as potentially formative before treating it as only punitive or random. The Father's discipline 'produces a harvest of righteousness.' Ask in the middle of difficulty: what is the Father forming in me through this? Not every suffering is directly disciplinary, but all of it can be received in trust.", icon: "⚖️" },
  { title: "Let the Father Heal Father Wounds", desc: "Many people carry damage from earthly fathers — absent, harsh, abusive, or emotionally unavailable. This damage distorts the experience of God as Father. Honest acknowledgment of this distortion, usually with a counselor or trusted community, is necessary for the healing that allows genuine prayer as a child to a Father.", icon: "❤️" },
  { title: "Speak of God as Father, Not Just God", desc: "The church's vocabulary for God matters. Consistently using impersonal terms ('the divine,' 'the universe,' 'higher power') gradually erodes the relational precision of Christian prayer. 'Father' is the primary Christian address to God. Use it specifically; let it shape your sense of who you are speaking to.", icon: "🗣️" },
];

export default function FatherhoodOfGodPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "attributes" | "practices">("theology");
  const [selectedAttr, setSelectedAttr] = useState("Provision");

  const attrItem = ATTRIBUTES.find(a => a.attr === selectedAttr)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👐</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Fatherhood of God</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Jesus's most radical revelation was how to address God: Abba, Father. The relationship is not metaphor — it is the deepest reality of the Christian life: adopted sons and daughters of the God who delights, provides, disciplines, and runs to meet us.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "attributes" as const, label: "Fatherly Attributes", icon: "💛" },
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

        {activeTab === "attributes" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {ATTRIBUTES.map(a => (
                <button key={a.attr} onClick={() => setSelectedAttr(a.attr)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedAttr === a.attr ? GREEN : BORDER}`, background: selectedAttr === a.attr ? `${GREEN}20` : "transparent", color: selectedAttr === a.attr ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {a.icon} {a.attr}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 30 }}>{attrItem.icon}</span>
                  <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: 0 }}>{attrItem.attr}</h2>
                </div>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{attrItem.verse}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{attrItem.desc}</p>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Knowing God as Father is not only a doctrinal position — it is an experiential reality meant to shape prayer, identity, and daily life. These six practices cultivate the lived experience of being God's child.
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
