"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Sabbath as Creation Pattern", verse: "Genesis 2:2-3", body: "'By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done' (Genesis 2:2-3). God's rest on the seventh day is not a divine nap — it is the completion of creation, the crowning of the week. The Sabbath is written into the structure of time before the Law. It is a creation ordinance, not merely a Mosaic regulation." },
  { title: "Sabbath as Liberation", verse: "Deuteronomy 5:15", body: "'Remember that you were slaves in Egypt and that the Lord your God brought you out of there with a mighty hand and an outstretched arm. Therefore the Lord your God has commanded you to observe the Sabbath day' (Deuteronomy 5:15). In Deuteronomy, the Sabbath is grounded in the Exodus: you are no longer slaves defined by your productivity. Slaves cannot rest; free people can. The weekly Sabbath is an enacted declaration of freedom — a refusal to be defined by economic output." },
  { title: "Jesus as Lord of the Sabbath", verse: "Mark 2:27-28", body: "'The Sabbath was made for man, not man for the Sabbath. So the Son of Man is Lord even of the Sabbath' (Mark 2:27-28). Jesus does not abolish the Sabbath but fulfills and deepens it. He is himself the rest — 'Come to me, all you who are weary and burdened, and I will give you rest' (Matthew 11:28). The Hebrews letter builds on this: 'There remains, then, a Sabbath-rest for the people of God' (4:9) — a rest both present (entered by faith) and future (eschatological consummation).' " },
  { title: "The Sabbath and the New Covenant", verse: "Colossians 2:16-17", body: "'Therefore do not let anyone judge you by what you eat or drink, or with regard to a religious festival, a New Moon celebration or a Sabbath day. These are a shadow of the things that were to come; the reality, however, is found in Christ' (Colossians 2:16-17). The Mosaic Sabbath was a shadow pointing to Christ. Christians are divided on whether weekly rest is still required: some hold that Sunday worship is the new covenant Sabbath (Lord's Day theology); others hold that every day is equally holy; most agree that rhythmic rest is a creation gift that remains wise and good." },
  { title: "Rest as Resistance", verse: "Matthew 6:25", body: "'Therefore I tell you, do not worry about your life' (Matthew 6:25). In a culture of productivity, busyness, and overwork, Sabbath is a countercultural act. It refuses the identity that says worth is produced. It challenges the anxiety that says if I stop, something will unravel. It protests the idolatry of achievement that can find no peace outside work. True rest is not merely physical cessation — it is an act of trust: God holds the world while I sleep." },
];

const PRACTICES = [
  { title: "Protect a Weekly Day", desc: "Choose a day — Sunday or another — and treat it as structurally different from the rest of the week. Not a day of inactivity but a day of ceasing: from work, from production, from the tasks that normally define your hours. The specific practice matters less than the consistent rhythm.", icon: "📅" },
  { title: "Cease from Productive Work", desc: "The Hebrew word shabbat means 'to cease.' The practice requires actual stopping — not doing work in your head while appearing to rest, not checking email once, not just doing different work. The discipline is in the stopping. What you cease from reveals what owns you.", icon: "🛑" },
  { title: "Rest the Body and the Mind", desc: "Physical rest — sleep, stillness, walks without destination, meals without schedule — addresses the body's need. Mental rest — choosing not to consume news, social media, or productive content — addresses the mind's need. Both are part of the gift. The Sabbath is bodily because we are embodied.", icon: "😴" },
  { title: "Celebrate Rather Than Simply Recuperate", desc: "The Jewish Sabbath tradition is festive — special meals, family gathering, joy. Christian Sabbath need not be grim or religiously heavy. Rest includes delight: food, friends, beauty, play. If your Sabbath produces only guilt about what you are not doing, the practice needs reorientation toward gratitude and pleasure.", icon: "🎉" },
  { title: "Worship as the Sabbath's Center", desc: "The gathered worship of the church on Sunday is not merely a nice addition to the day off — it is the Sabbath's orientation. Worship on the Lord's Day is both the appropriate culmination of the week and the proper launching point for the new week. Rest receives its meaning from the God in whose presence it is practiced.", icon: "🙏" },
  { title: "Practice Daily Mini-Sabbaths", desc: "Augustine: 'Our heart is restless until it rests in you.' The Sabbath's logic applies to the day as well: brief pauses, moments of prayer, transitions between activities, the regular interruption of the screen or the work — these mini-Sabbaths cultivate the habit of rest that makes the weekly Sabbath possible.", icon: "⏸️" },
];

const OBSTACLES = [
  { o: "Productivity Guilt", desc: "The feeling that stopping is irresponsible or indulgent — that there is always something more that should be done. This guilt is often the most significant barrier to Sabbath practice.", response: "Sabbath is not earned by completing everything — it is taken as a declaration that everything does not rest on you. Build it into the calendar as a commitment rather than a reward for finishing." },
  { o: "Digital Encroachment", desc: "Smartphones carry work, anxiety, comparison, and information-consumption into every space that once belonged to rest. Digital Sabbath — turning the phone off or away for a defined period — is increasingly necessary for genuine rest.", response: "Define a digital boundary for your Sabbath. Start with phones in a drawer during a meal. Grow from there. The discomfort of the first hour reveals how much the phone has colonized your capacity for presence." },
  { o: "Irregular Work Schedules", desc: "Shift workers, caregivers, clergy, and many others cannot observe Sunday as a day off. The principle of Sabbath is weekly; the day is not necessarily Sunday.", response: "Identify which day in your week functions as Sabbath. Protect it with the same intention Sunday-keepers give to Sunday. The rhythm matters more than the day." },
  { o: "Family Complexity", desc: "Parents of young children often find Sabbath a fantasy — children need care every day. Couples may disagree on what rest looks like.", response: "Negotiate a shared practice rather than waiting for a perfect one. Even an hour of protected rest, mutual support, and worship together advances the Sabbath principle. Imperfect rest is better than none." },
  { o: "The Guilt of Enjoyment", desc: "Some Christians have internalized a version of holiness that treats pleasure as suspect. Sabbath rest that includes genuine pleasure — food, creativity, recreation — feels impious.", response: "The Sabbath is called a 'delight' (Isaiah 58:13). God blessed it. Joy is the appropriate response to rest in the presence of the One who made the world good. Receive pleasure without guilt." },
];

export default function ChristianRestPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "obstacles" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>😴</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Rest and the Sabbath</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Rest is not laziness — it is creation ordinance, liberation from slavery, and resistance to the idolatry of productivity. The Sabbath is one of God's best gifts to his people and one of the church's most neglected disciplines.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "obstacles" as const, label: "Obstacles", icon: "⚠️" },
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

        {activeTab === "obstacles" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The most common reasons Christians fail to practice meaningful rest — and how to move past them.
              </p>
            </div>
            {OBSTACLES.map((o, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === o.o ? null : o.o)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === o.o ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{o.o}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === o.o ? "−" : "+"}</span>
                </button>
                {expanded === o.o && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{o.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{o.response}</p>
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
                Sabbath is not primarily about doing nothing — it is about doing the right things in the right posture. These six practices shape a sustainable rhythm of rest.
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
