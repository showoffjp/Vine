"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Created in the Image of God", verse: "Genesis 1:27", body: "The foundation of all Christian ethics for women (and men) is the imago dei: 'So God created mankind in his own image, in the image of God he created them; male and female he created them' (Genesis 1:27). Women bear the image of God completely and fully. Dignity, worth, and value are not derived from role or marital status — they are inherent in what God declared at creation." },
  { title: "Woman in Creation and Fall", verse: "Genesis 2-3", body: "The woman is created as 'ezer' — helper, ally, rescuer — a word used elsewhere in Scripture for God himself. This is not subordinate assistance but coequal partnership. In the fall, both the man and woman sin and are accountable — but the consequences are different (Genesis 3:16). The fall introduces hierarchy and pain into what was created as partnership; redemption in Christ works to restore the creation pattern." },
  { title: "The Women Around Jesus", verse: "Luke 8:1-3", body: "Women were among Jesus' closest disciples — traveling with him, supporting his ministry from their own resources (Luke 8:1-3). Jesus spoke to the Samaritan woman (scandalous for the time), appeared first to Mary Magdalene after the resurrection (choosing women as the first witnesses in a culture that didn't accept women's testimony in court), and defended Mary's choice to sit at his feet (Luke 10). His treatment of women was consistently countercultural and dignifying." },
  { title: "Daughters of Abraham", verse: "Galatians 3:28", body: "'There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus' (Galatians 3:28). This declaration of unity in Christ is often cited in debates about gender — and rightly so. It does not erase difference but declares equality of standing before God. In the New Covenant, women receive the Spirit directly (Acts 2:17), prophesy (Acts 21:9), teach, lead, and are addressed by Paul as full members of the body." },
  { title: "The Proverbs 31 Woman", verse: "Proverbs 31:10-31", body: "The famous passage is often used to prescribe a specific lifestyle for women. But its form (an alphabetic acrostic, a poem of praise) suggests it is wisdom poetry, not a checklist. The woman described is entrepreneurial (v.16, 18, 24), physically strong (v.17), publicly respected (v.31), wise and kind in speech (v.26), and caring for both household and the poor (v.20). She is not primarily defined by her role but by her character — 'a woman who fears the Lord is to be praised' (v.30)." },
];

const QUESTIONS = [
  { q: "Can women teach and lead in the church?", a: "This is one of the most contested questions in evangelical Christianity. The main interpretive passages are 1 Corinthians 14:34-35 and 1 Timothy 2:12. Complementarians (most Reformed/Baptist) restrict women from preaching/eldership based on these texts. Egalitarians argue these were situational instructions, not universal prohibitions, citing passages like Romans 16 (Phoebe as deacon/minister, Junia as an apostle), Acts 18:26 (Priscilla teaching Apollos), and the broader NT pattern of women in ministry. Both positions are held by orthodox, Scripture-committed Christians." },
  { q: "What is the biblical view of submission in marriage?", a: "Ephesians 5:22 instructs wives to submit to husbands 'as to the Lord' — but this follows the mutual submission command of 5:21 and is immediately qualified by the instruction to husbands to love their wives as Christ loved the church (5:25) — a self-sacrificial, servant love. The structure is not one-sided dominance but mutual self-giving in which the husband's headship is modeled on Christ's servant leadership. Abuse or domination is not taught or permitted by the biblical text." },
  { q: "Is celibacy an option for Christian women?", a: "Yes — and in some traditions, a particularly honored one. Paul explicitly states that singleness is a gift that allows undivided devotion to God (1 Corinthians 7:32-34). Women's callings are not limited to marriage and motherhood. Throughout history, women in religious orders, in mission, and in church leadership have served celibately with full faithfulness to their calling. The church should honor single women as it honors married ones." },
  { q: "How should the church respond to women who have experienced abuse?", a: "Abuse — including within marriage — is sin, not God's design. 'Submission' does not require a woman to remain in danger. The church's first responsibility to women in abusive situations is protection and care, not preservation of the marriage. Jesus' care for the vulnerable, his defense of those the system exploited, and the general command to protect the weak all speak to this. Seek qualified counsel and support organizations immediately when abuse is present." },
  { q: "What about women in ministry history?", a: "Women have led, taught, preached, and shaped the church throughout its history: Priscilla (1st century), Perpetua and Felicitas (martyrs, 203 AD), Julian of Norwich (theologian, 1300s), Teresa of Avila (mystic and reformer, 1500s), Susanna Wesley (shaped John Wesley's theology), Harriet Beecher Stowe (anti-slavery), Corrie ten Boom (Holocaust survivor and teacher), and countless others. The story of Christian women is not one of passive domesticity." },
];

const FIGURES = [
  { name: "Mary Magdalene", desc: "First witness to the resurrection. Jesus appeared to her first (John 20:11-18) and commissioned her to tell the disciples — making her the apostle to the apostles (apostola apostolorum) in early church tradition. In a culture that did not accept women's testimony, God chose a woman as the first witness to the central event of history.", ref: "John 20:11-18" },
  { name: "Deborah", desc: "Judge and prophet in Israel — one of the most powerful leaders in the Old Testament. She judged Israel (a legal and governmental role), heard from God, delivered Israel from Canaanite oppression, and composed and sang the victory song (Judges 5). Her leadership was not apologized for in the text.", ref: "Judges 4-5" },
  { name: "Esther", desc: "Used her position (as queen) and her courage (approaching the king unbidden risked death) to save the Jewish people from genocide. Her famous response to Mordecai: 'I will go to the king... and if I perish, I perish' (Esther 4:16) is a model of faithful courage under impossible pressure.", ref: "Esther 4-5" },
  { name: "Mary of Bethany", desc: "Chose the 'better part' — sitting at Jesus' feet as a student (the position of a disciple) rather than serving in the kitchen (Luke 10:38-42). Jesus defended her choice against her sister's complaint. She also anointed Jesus with expensive perfume before his death, which Jesus interpreted as preparation for his burial and said would be remembered wherever the gospel is preached.", ref: "Luke 10:38-42; John 12:1-8" },
  { name: "Phoebe", desc: "Paul calls her a deacon (diakonos) of the church at Cenchreae and a prostatis (a word meaning patron, helper, or even leader) — and asks the Roman church to receive her and help her in whatever she needs (Romans 16:1-2). She likely carried Paul's letter to Rome and may have been responsible for presenting and explaining it.", ref: "Romans 16:1-2" },
];

export default function BiblicalWomanhoodPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "questions" | "figures">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👩</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Women in the Bible</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Women are prophets, judges, apostles, deacons, teachers, and martyrs throughout Scripture. A biblical theology of womanhood begins with the imago dei and cannot be reduced to a single role or text.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "questions" as const, label: "Hard Questions", icon: "❓" },
            { id: "figures" as const, label: "Biblical Women", icon: "⭐" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "questions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These questions are genuinely debated among faithful, orthodox Christians. We present the landscape honestly rather than settling debates that the church has not settled.
              </p>
            </div>
            {QUESTIONS.map((q, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === q.q ? null : q.q)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === q.q ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{q.q}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === q.q ? "−" : "+"}</span>
                </button>
                {expanded === q.q && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{q.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "figures" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Scripture is filled with women whose faith, courage, and leadership shaped redemptive history. These are not footnotes — they are central figures in the story of God's work in the world.
              </p>
            </div>
            {FIGURES.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 16 }}>{f.name}</div>
                  <span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>{f.ref}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
