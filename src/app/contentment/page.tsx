"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Contentment Is Learned, Not Given", verse: "Philippians 4:11", body: "'I have learned, in whatever state I am, to be content' (Philippians 4:11). Paul does not say contentment is natural or automatic — he says he learned it. It is a discipline, a skill, a virtue formed through practice under grace. He learned it through 'being abased and abounding' — through both poverty and plenty. Contentment is not the product of circumstances; it is an achievement of the soul forged through them." },
  { title: "Godliness with Contentment Is Great Gain", verse: "1 Timothy 6:6-8", body: "'Godliness with contentment is great gain. For we brought nothing into the world, and we can take nothing out of it. But if we have food and clothing, we will be content with that' (1 Tim. 6:6-8). Paul is not romanticizing poverty — he is reorienting desire. The person who needs little to be satisfied is wealthier than the person with much who is never satisfied. Contentment multiplies what you have by reducing what you feel you need." },
  { title: "Covetousness as Idolatry", verse: "Colossians 3:5", body: "Paul lists covetousness alongside sexual immorality and greed, then calls it 'idolatry' (Colossians 3:5). Covetousness is not merely wanting more — it is the functional worship of what we don't have. When our peace, identity, and hope are attached to what we might acquire, those things have become our gods. Contentment is the practical expression of worshiping the right God." },
  { title: "The Secret Paul Found", verse: "Philippians 4:13", body: "Immediately after saying he has learned contentment in all circumstances, Paul reveals the secret: 'I can do all this through him who gives me strength' (Phil. 4:13). The famous verse is not about athletic achievement or career success — it is about contentment. The 'all this' Paul says he can do through Christ is being content in hunger, in abundance, in difficulty, in ease. Christ is the source of contentment, not the removal of want." },
];

const DISCONTENTMENT_SOURCES = [
  { source: "Comparison", sign: "You feel fine until you see what someone else has.", remedy: "Social media comparison is specifically engineered to produce discontentment. Curate what you consume. Thank God for specific good things in your own life before seeing others' highlighted reels." },
  { source: "Consumerism", sign: "You believe that acquiring the next thing will bring the satisfaction the last thing didn't.", remedy: "Name the lie: 'When I get X, I'll be satisfied.' Track how often this turns out to be false. Practice delayed gratification as a spiritual discipline." },
  { source: "Unmet Expectations", sign: "You had a picture of what your life would look like, and it doesn't match.", remedy: "Grief is appropriate when real loss occurs. But entitlement to a specific life outcome is discontentment wearing grief's clothing. Distinguish the two honestly in prayer." },
  { source: "Ingratitude", sign: "You notice what's wrong before what's right. You are hard to thank or impress.", remedy: "Gratitude is a discipline. Keep a thanksgiving list. In prayer, name specific good things before making requests. The act of naming good re-trains attention." },
  { source: "Fear of Missing Out", sign: "You feel you must have every experience, opportunity, or relationship or you will have wasted your life.", remedy: "Your finite life is a gift, not a constraint. You cannot have everything, and trying to will exhaust and fragment you. Choose your 'yeses' carefully; they are the real measure of a life." },
];

const PRACTICES = [
  { title: "Gratitude List", desc: "Write three specific things you are grateful for each morning before your mind fills with the day's demands. Specificity matters: not 'my family' but 'the conversation I had with my daughter last night.'", verse: "1 Thessalonians 5:18" },
  { title: "Content-Enough Audit", desc: "Ask the question: 'Do I have enough food, shelter, and clothing today?' If yes — by the biblical standard (1 Tim. 6:8) — you are wealthy. The rest is bonus.", verse: "1 Timothy 6:8" },
  { title: "The Fast from Wanting", desc: "For one week, make no purchases beyond food and necessities. Notice what happens to desire — both the anxiety of restraint and the freedom that follows.", verse: "Matthew 6:25" },
  { title: "Reframe Comparison", desc: "When you notice envy or comparison, replace it with intercession. Pray for the person whose life seems better. This is both obedience (pray for others) and a spiritual judo move that dismantles envy.", verse: "Romans 12:15" },
  { title: "Name Your 'Enough'", desc: "Define in writing: 'Enough income for our family is ___.' 'Enough possessions means ___.' Having a defined 'enough' interrupts the perpetual expansion of desire that consumer culture presupposes.", verse: "Proverbs 30:8-9" },
  { title: "Delight in What You Have", desc: "Identify one thing you already own that you have stopped noticing. Use it this week with full attention and gratitude, as if it were new. Familiarity breeds contempt; intentionality reverses it.", verse: "Ecclesiastes 9:9" },
];

const QUOTES = [
  { text: "Contentment is not the fulfillment of what you want, but the realization of how much you already have.", author: "Unknown" },
  { text: "The secret of contentment is the realization that life is a gift, not a right.", author: "Rich Warren" },
  { text: "Man is the only creature who refuses to be what he is.", author: "Albert Camus" },
  { text: "The greatest wealth is to live content with little.", author: "Plato" },
  { text: "Godliness with contentment is great gain.", author: "The Apostle Paul (1 Timothy 6:6)" },
];

export default function ContentmentPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "discontentment" | "practices">("theology");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>😌</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Practice of Contentment</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Contentment is not a mood — it is a learned discipline. Paul says he learned it through both poverty and abundance. The secret is not different circumstances but a different orientation of soul.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "discontentment" as const, label: "Sources of Discontentment", icon: "🔍" },
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
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 14 }}>Wisdom on Contentment</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {QUOTES.map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: 16 }}>
                    <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.65, marginBottom: 6 }}>"{q.text}"</p>
                    <div style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>— {q.author}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "discontentment" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Discontentment is not one thing — it has several distinct sources, each requiring a different response. Diagnosing the source is the first step to addressing it faithfully.
              </p>
            </div>
            {DISCONTENTMENT_SOURCES.map((d, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: "#EF4444", fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{d.source}</div>
                <div style={{ marginBottom: 10 }}>
                  <span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>SIGN: </span>
                  <span style={{ color: TEXT, fontSize: 14 }}>{d.sign}</span>
                </div>
                <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25`, borderRadius: 8, padding: 12 }}>
                  <span style={{ color: GREEN, fontSize: 12, fontWeight: 700 }}>REMEDY: </span>
                  <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.65 }}>{d.remedy}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
            {PRACTICES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  <span style={{ color: MUTED, fontSize: 11, fontWeight: 700 }}>{p.verse}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
