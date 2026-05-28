"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Created Male and Female", verse: "Genesis 1:27", body: "'So God created mankind in his own image, in the image of God he created them; male and female he created them' (Genesis 1:27). Sexual differentiation — the existence of male and female as distinct, complementary expressions of humanity — is not a cultural accident or a social construction but part of the created order. Both sexes bear the image of God fully, and the distinction between them is itself good and celebrated. The first human song is the recognition of 'bone of my bones, flesh of my flesh' (Genesis 2:23)." },
  { title: "Marriage as the Design", verse: "Genesis 2:24", body: "'That is why a man leaves his father and mother and is united to his wife, and they become one flesh' (Genesis 2:24). Jesus quotes this verse in Matthew 19:4-6, confirming it as the creational design for sexual union. The one-flesh union of husband and wife is the only context Scripture designates as appropriate for sexual expression. This is not primarily a negative boundary but a positive design — the one-flesh union between a man and a woman is itself a picture of something real: Christ's union with the church (Ephesians 5:31-32)." },
  { title: "Sexuality as Gift, Not Ultimate Good", verse: "1 Corinthians 7:7", body: "Paul holds singleness and marriage as parallel gifts (1 Corinthians 7:7). Neither is intrinsically superior. Jesus himself was unmarried and celibate — demonstrating that human sexuality, though good, is not essential to full human flourishing. The idolatry of sexual fulfillment — the belief that sexual expression is necessary for a complete life — is a cultural assumption, not a biblical one. The kingdom of God is one in which eunuchs 'who have made themselves eunuchs for the sake of the kingdom' are honored (Matthew 19:12)." },
  { title: "Lust and the Heart", verse: "Matthew 5:28", body: "'Anyone who looks at a woman lustfully has already committed adultery with her in his heart' (Matthew 5:28). Jesus's concern is not only with sexual behavior but with the sexual imagination — the interior life that generates behavior. The Sermon on the Mount drives every ethical issue inward, and sexuality is no exception. Lust is not simply intense attraction; it is the willful entertaining of desire for someone other than one's spouse, treating another person as an object for one's gratification." },
  { title: "Glorify God in Your Body", verse: "1 Corinthians 6:19-20", body: "'Do you not know that your bodies are temples of the Holy Spirit?... You are not your own; you were bought at a price. Therefore honor God with your bodies' (1 Corinthians 6:19-20). The body is not a private possession to do with as one wishes — it belongs to God by creation and redemption. Paul's appeal is not to the risks of sexual immorality but to the dignity of the body as the Spirit's temple. Sexual behavior is a theological issue, not merely a personal one." },
];

const QUESTIONS = [
  { q: "What about pornography?", color: "#EF4444", answer: "Pornography violates the dignity of both the user and the persons depicted. For the user, it trains the sexual imagination toward lust and fantasy rather than faithful love. For those depicted, it objectifies them — often in contexts of exploitation. Jesus's warning about the lustful gaze (Matthew 5:28) applies directly. Recovery from pornography addiction is possible through accountability, honest community, and — when needed — professional help. The compulsive nature of pornography use places it in the category of addiction as much as sin." },
  { q: "What about same-sex attraction?", color: PURPLE, answer: "Most Christians in the historic tradition hold that sexual expression is reserved for heterosexual marriage. This means that for those who experience same-sex attraction, the call is the same as for any unmarried person: celibacy and chastity, rather than sexual expression. Many faithful Christians hold this view while distinguishing between attraction (not chosen, not itself sinful) and behavior (chosen, morally significant). This is one of the most contested pastoral questions in contemporary Christianity; communities should hold convictions with compassion." },
  { q: "What about cohabitation?", color: "#F59E0B", answer: "Living together before marriage became statistically common in the late 20th century. The NT pattern is that sexual union belongs within the covenant of marriage — not as an arbitrary rule but because one-flesh union is covenant language. The pastoral challenge is that many couples already cohabiting come to faith and need pastoral wisdom rather than immediate disruption. For unmarried Christians considering it, the question is whether the arrangement can sustain the distinctiveness of the relationship before the covenant is made." },
  { q: "What about divorce and remarriage?", color: "#3B82F6", answer: "Jesus permits divorce in cases of sexual unfaithfulness (Matthew 5:32; 19:9); Paul permits separation in cases of desertion by an unbelieving spouse (1 Corinthians 7:15). Beyond these circumstances, the NT's consistent orientation is toward covenant preservation and reconciliation. Remarriage after divorce is one of the most debated pastoral questions in the church, with serious scholars holding different positions. The pastoral task is to take the marriage covenant seriously without treating divorced people as permanently disqualified." },
  { q: "What about sexual trauma?", color: GREEN, answer: "Sexual abuse and assault are serious violations of a person's dignity and should be named as such. The church has sometimes compounded trauma by minimizing it, blaming victims, or protecting abusers. Healing from sexual trauma is a long journey that typically requires professional Christian counseling alongside community support. The gospel's resources — the God who is near the brokenhearted (Psalm 34:18), the body's resurrection (affirming that damage done to the body is not permanent loss) — are genuine resources for healing." },
];

const PRACTICES = [
  { title: "Cultivate Purity of Heart", desc: "The purity Jesus calls for (Matthew 5:8) is not the absence of sexual desire but the absence of lust — the willful use of others as objects for gratification. Guard the sexual imagination through thoughtful choices about what you consume and how you direct your attention. Purity is a positive orientation of desire toward God and toward faithful love.", icon: "💎" },
  { title: "Build Accountability", desc: "Sexual sin thrives in secrecy and isolation. Build a specific accountability relationship with a same-sex friend or mentor who asks hard questions and is told honest answers. The research on pornography recovery consistently shows that accountability and community are among the most effective factors in sustained change.", icon: "🤝" },
  { title: "Honor the Single and the Married", desc: "The church should honor both vocations equally. Singles should not be treated as incomplete people awaiting marriage; married couples should not be treated as the normative Christian unit. Both celibacy and marriage are genuine callings; both can be lived faithfully or unfaithfully. Create community that genuinely embraces both.", icon: "❤️" },
  { title: "Be Honest About Struggle", desc: "Sexual sin and struggle are universal in a fallen world. The church that pretends otherwise is not holy — it is dishonest. Create a culture where people can be honest about sexual temptation without shame, so that sin can be addressed before it becomes entrenched and consequences become irreversible.", icon: "💬" },
  { title: "Speak about Sex Theologically", desc: "Most Christians receive their theology of sexuality from culture, not the church. Teach the positive theology of sexuality — creation, the one-flesh union, the eschatological symbolism of marriage — not merely the prohibitions. A positive theology is more compelling and more formative than a list of rules.", icon: "📖" },
  { title: "Seek Help Without Shame", desc: "Sexual addiction, trauma, confusion, and struggle are common enough that professional help is often appropriate — Christian counselors, therapists, and recovery programs exist for precisely these challenges. Seeking help is wisdom, not weakness. The shame that prevents people from seeking it is the enemy's tool, not God's.", icon: "🏥" },
];

export default function ChristianSexualityPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "questions" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Sexuality</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Sexuality is one of the most contested and pastoral topics in contemporary Christianity. The biblical vision is not primarily prohibition — it is a positive theology of the body, of union, and of what human love is designed to picture.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "questions" as const, label: "Hard Questions", icon: "❓" },
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

        {activeTab === "questions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These are not simple questions — they deserve honest, careful, pastorally sensitive engagement. These answers represent historic Christian teaching; the conversations they open are as important as the answers themselves.
              </p>
            </div>
            {QUESTIONS.map((q, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === q.q ? null : q.q)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${expanded === q.q ? q.color : BORDER}`, borderRadius: expanded === q.q ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span style={{ color: expanded === q.q ? q.color : TEXT }}>{q.q}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === q.q ? "−" : "+"}</span>
                </button>
                {expanded === q.q && (
                  <div style={{ background: BG, border: `1px solid ${q.color}30`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{q.answer}</p>
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
                Faithful Christian sexuality is not primarily about following rules — it is about forming habits of the heart that honor God, protect others, and position us for genuine love and flourishing.
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
