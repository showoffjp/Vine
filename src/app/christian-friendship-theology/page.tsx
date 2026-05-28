"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Friendship as Love", verse: "John 15:13-15", body: "'Greater love has no one than this: to lay down one's life for one's friends. You are my friends if you do what I command. I no longer call you servants... Instead, I have called you friends' (John 15:13-15). Jesus defines friendship as willing self-sacrifice for another. The word 'friends' (philous) in Greek indicates a love relationship of genuine affection and chosen companionship. Jesus elevates friendship to the highest level of human relationship: not merely pleasant association but covenantal love that sacrifices at personal cost." },
  { title: "David and Jonathan", verse: "1 Samuel 18:1", body: "'After David had finished talking with Saul, Jonathan became one in spirit with David, and he loved him as himself' (1 Samuel 18:1). The friendship of David and Jonathan is the OT's paradigm of covenant friendship — a bond of loyalty, sacrifice, and delight that transcended political rivalry (Saul's persecution), social complexity (Jonathan's royal status), and enormous personal cost (Jonathan gave David his robe, armor, and protection). Their friendship is described with language normally reserved for marriage." },
  { title: "The Marks of True Friendship", verse: "Proverbs 17:17", body: "'A friend loves at all times, and a brother is born for a time of adversity' (Proverbs 17:17). Proverbs distinguishes the fair-weather companion from the genuine friend who is present precisely in difficulty. 'There is a friend who sticks closer than a brother' (18:24). The distinguishing marks of genuine friendship in Wisdom literature: constancy (at all times), loyalty (closer than family obligation), honesty (wounds from a friend are faithful, 27:6), and sharpening (iron sharpens iron, 27:17)." },
  { title: "Spiritual Friendship", verse: "Ecclesiastes 4:9-10", body: "'Two are better than one, because they have a good return for their labor: if either of them falls down, one can help the other up' (Ecclesiastes 4:9-10). Aelred of Rievaulx, the 12th-century Cistercian, wrote the Christian tradition's most extended treatment of spiritual friendship — describing it as a participation in God's own love. 'God is friendship,' Aelred said (parallel to 1 John 4:8). Spiritual friendship is the sharing of the spiritual journey — encouraging virtue, naming sin, and walking together toward God." },
  { title: "The Cost of Modern Loneliness", verse: "Genesis 2:18", body: "'It is not good for the man to be alone' (Genesis 2:18). Loneliness is one of the defining crises of contemporary life — adults report fewer close friends than any previous generation surveyed. The church's response to loneliness is not primarily programming but genuine friendship: the hard, slow, showing-up work of becoming known and knowing others. What people need is not a community but a friend — and in finding one friend, the community begins." },
];

const OBSTACLES = [
  { o: "Busyness", desc: "Friendship requires time — unstructured, unhurried time to be present with another person. Overscheduled lives crowd friendship out by leaving only the slots we have planned for it.", response: "Add specific people (not categories) to your calendar. Block time for friendship as you would a meeting. Give margin for the spontaneous conversations that deepened your best friendships." },
  { o: "Digital Substitution", desc: "Online connection feels like friendship but lacks its substance: you cannot sit with someone on social media, make eye contact, be genuinely moved by them, or notice when something is wrong.", response: "Count your real friendships (people who would know within a week if you were in crisis) and be honest about the number. Text is not friendship; it is friendship's scaffolding. Build the building." },
  { o: "Surface Norms", desc: "Most adult social environments — including churches — have strong norms of surface pleasantness. Genuine friendship requires moving below the surface, which requires someone to go first and bear the risk of not being met.", response: "Identify one person you want to know better. Share something genuinely personal with them — not crisis-level, but real. See if they reciprocate. Depth requires initiative." },
  { o: "Conflict Avoidance", desc: "Genuine friendship includes conflict — differing views, honest feedback, moments of disappointment. Friendships that avoid all conflict remain at the surface. 'Wounds from a friend are faithful' (Proverbs 27:6) — the friend who never challenges is not a true friend.", response: "When a friend does something that genuinely hurts or concerns you, say so — kindly, directly, without dramatizing. The friendship that survives honest conflict becomes deeper than the one that avoids it." },
  { o: "Stage of Life Transitions", desc: "Marriage, children, relocation, career changes — life transitions disrupt existing friendships and make forming new ones harder. The married person loses the time for friendship; the parent loses the energy for it; the relocated person loses the proximity that maintained existing friendships.", response: "Acknowledge the transition explicitly. Redefine what the friendship looks like in the new season. Invest in new friendships in the new context without abandoning the existing ones. Make friendship a priority that moves with you." },
];

const PRACTICES = [
  { title: "Choose Depth with Fewer", desc: "Pursue three to five friendships of genuine depth rather than dozens of acquaintances. Time is finite; the energy required for real friendship is significant. Better to be truly known by a few than pleasantly familiar with many.", icon: "🎯" },
  { title: "Initiate Without Waiting", desc: "Most people wait to be pursued rather than pursuing. Genuine friendship requires initiative — reaching out first, inviting first, showing up first. The person who waits for others to initiate will have many acquaintances and few friends.", icon: "📱" },
  { title: "Create Regular Rhythms", desc: "The friendships that endure are built on regularity — weekly dinners, monthly check-ins, annual retreats. The irregular friendship requires constant re-establishing; the regular one grows in depth because the relationship doesn't have to restart each time.", icon: "🔄" },
  { title: "Be Honest When Things Are Hard", desc: "The friend who hears only your curated highlights is not yet a genuine friend. Allow your friends to see you when things are difficult. Vulnerability creates depth; pleasantness alone creates distance.", icon: "💬" },
  { title: "Show Up in the Hard Moments", desc: "Presence in crisis is what distinguishes the friend from the acquaintance. Show up when people are diagnosed, when they lose someone, when they are in crisis. Don't just intend to go; go. The presence is what will be remembered.", icon: "🤝" },
  { title: "Pray for and With Friends", desc: "Praying together is one of the most intimate acts available in friendship. It breaks surface norms, creates shared vulnerability, and invites God into the relationship. Even texting 'I prayed for you today' and meaning it changes the character of a friendship.", icon: "🙏" },
];

export default function ChristianFriendshipTheologyPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "obstacles" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🤝</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Theology of Friendship</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Friendship is not a luxury or a supplement to the spiritual life — it is one of its primary forms. Jesus called his disciples friends. The tradition names friendship as one of the primary vehicles of grace in human life.
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
                The five most common barriers to genuine friendship in modern life — and how to overcome each one.
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
                Friendship is not accidental — it is built through deliberate investment, honest presence, and a willingness to do the unglamorous work of showing up.
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
