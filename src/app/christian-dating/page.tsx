"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Purpose of Dating", verse: "Proverbs 18:22", body: "Christian dating exists to evaluate suitability for marriage — not as an end in itself. The question dating asks is: is this the person I should covenant with for life? This clarifies everything: how long you date, how physically intimate you become, what conversations you have, and when you end a relationship. If the answer becomes clearly no, the relationship has served its purpose and should end." },
  { title: "The Theology of Attraction", verse: "Genesis 2:23", body: "Physical attraction is not unspiritual. Adam's first response to Eve was poetry: 'This is now bone of my bones and flesh of my flesh' — an expression of delight. The Song of Solomon celebrates physical beauty and romantic attraction extravagantly. The question is not whether attraction is important (it is) but whether it is the only criterion (it cannot be). A spouse you are attracted to but cannot respect, trust, or share faith with is not a biblical spouse." },
  { title: "Do Not Be Unequally Yoked", verse: "2 Corinthians 6:14", body: "'Do not be unequally yoked with unbelievers' (2 Corinthians 6:14). The command is clear and the reason is practical: marriage to an unbeliever means a partnership in which the most fundamental commitment of your life (to Christ) is not shared. This does not mean superficial religion is sufficient — 'Christian on paper' and 'devoted follower of Jesus' are not the same. Look for someone who is growing, not just someone who labels themselves Christian." },
  { title: "Guarding the Heart", verse: "Proverbs 4:23", body: "The problem with most modern dating is the amount of emotional and physical intimacy it creates before the commitment that can bear it. Physical and emotional intimacy are designed to deepen and strengthen a covenant — when they precede it, they create attachment and confusion. 'Guard your heart' (Proverbs 4:23) is not about avoiding all vulnerability but about not opening yourself fully to someone who has not committed to you." },
  { title: "The Good Gift of Singleness", verse: "1 Corinthians 7:7", body: "Not every believer is called to marriage, and not every believer will be married by their preferred timeline. Paul's honest teaching: singleness is a gift, not a deficit. The person who has not yet found a spouse has not been overlooked by God — they may be in a season that has its own specific calling and freedom. Dating from a place of contentment produces better decisions than dating from desperation." },
];

const QUESTIONS = [
  { q: "How long should we date before getting engaged?", a: "Long enough to know someone's character in multiple contexts — including conflict. Most counselors recommend a minimum of 12-18 months for most people. Dating shorter than this often means you are making a permanent decision based on incomplete information. Longer than two years without movement toward engagement often signals ambivalence that will not resolve itself in marriage." },
  { q: "How physically intimate should we be before marriage?", a: "The Bible does not specify a line, which means the question requires wisdom rather than rule-following. The principle: physical intimacy is designed to strengthen and express covenant, not precede it. The practical guide: stop well before you would regret it in a context of accountability. Specifically, avoid the kind of sustained physical contact (long make-out sessions, sleeping together, mutual nakedness) that makes covenant-level commitment implicit while it remains absent." },
  { q: "Should we have serious spiritual conversations early in dating?", a: "Yes — and the earlier the better. Fundamental incompatibilities on faith, church, children, and values will not improve with time. Early conversations about what you believe, how you worship, whether you want children, and how you handle money are not unromantic — they are the foundation of informed covenant-making. A relationship that cannot sustain these conversations is not ready for marriage." },
  { q: "How do I know if someone is 'the one'?", a: "The concept of 'the one' is largely unbiblical. Scripture does not teach a unique soulmate chosen by fate. It teaches covenant — a choice you make and then sustain. The better questions: Is this person growing in Christ? Do I genuinely respect and trust them? Can I commit to their good for life? Would our union glorify God and strengthen both of us in faith? If yes — and if attraction is present — that is the basis for covenant, not a mystical certainty." },
  { q: "What if we have already been sexually active?", a: "Receive grace. The gospel provides fresh starts — genuine forgiveness, not just relief from guilt, but the actual removal of the sin. Confession to God and, where appropriate, to each other, then establishing new boundaries, is the path forward. The past does not determine the future. Many couples who began physically beyond their values have established healthy, God-honoring marriages. The failure was real; so is the grace." },
  { q: "What role should community play in dating?", a: "Significant. Dating in isolation — a private relationship between two people accountable to no one — makes both people vulnerable to decisions they would not make with accountability. Invite trusted friends and mentors to know your relationship. Ask them hard questions. Be willing to hear difficult feedback. The couple that refuses community accountability is often protecting something that community accountability would name as a problem." },
];

const PRACTICES = [
  { title: "Date with a Purpose", desc: "Know what you are doing and why. Before the relationship becomes serious, articulate what you are looking for and why. Not a rigid list of requirements, but clarity about your actual non-negotiables (faith, character, direction) vs. preferences.", icon: "🎯" },
  { title: "Involve Your Community", desc: "Tell your close friends you are dating someone early. Introduce them to people who know you well. Ask for honest feedback. The person your friends see is more complete than the person you see in the warmth of new attraction.", icon: "👥" },
  { title: "Have the Hard Conversations Early", desc: "Faith, church, children, money, location, extended family expectations — have these conversations before you are emotionally entangled enough that ending the relationship feels impossible. Incompatibilities discovered early are easier to act on.", icon: "💬" },
  { title: "Establish Physical Boundaries Together", desc: "Before temptation, decide together where you are drawing lines and why — not as a constraint but as an expression of what you value. Revisit the conversation if the lines are being crossed regularly.", icon: "🛡️" },
  { title: "Pray Together from the Beginning", desc: "A relationship that cannot include prayer is a relationship missing its most important dimension. If praying together feels awkward, name that and start anyway. Short and simple is fine. Shared prayer is one of the most intimate and revelatng practices in dating.", icon: "🙏" },
  { title: "End Well When Necessary", desc: "The most loving thing you can do for someone you are not called to marry is to end the relationship clearly, kindly, and sooner rather than later. Ambivalence that continues for months out of comfort or fear of hurting the other person is its own form of harm. End well.", icon: "🕊️" },
];

export default function ChristianDatingPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "questions" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💑</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Dating</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Dating exists to evaluate suitability for marriage — which changes everything: how long you date, what you talk about, how physically intimate you become, and when you end a relationship that isn't moving toward covenant.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "questions" as const, label: "Common Questions", icon: "❓" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "questions" && (
          <div>
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

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These practices are habits of dating that make covenant-making more likely and heartbreak less damaging when a relationship isn't the right one.
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
