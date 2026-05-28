"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const PASSAGES = [
  { title: "Count the Cost", verse: "Luke 14:25-33", body: "Jesus does not recruit with a prosperity promise. He sits down and urges those following him to count the cost before committing — like a builder calculating before laying a foundation or a king assessing before declaring war. The conclusion is stark: 'Any of you who does not give up everything he has cannot be my disciple' (14:33). Jesus is not looking for enthusiastic beginners; he wants committed finishers. He would rather have fewer disciples who counted the cost than masses who turned back when the road hardened." },
  { title: "Take Up Your Cross", verse: "Mark 8:34-38", body: "'Whoever wants to be my disciple must deny themselves and take up their cross and follow me' (Mark 8:34). Cross-bearing in the first century had one specific meaning: walking toward your own execution. Jesus says this before his crucifixion — the disciples did not yet know what the cross meant, but they knew it meant death, shame, and the surrender of any claim to self-direction. The call to discipleship is a call to die to the agenda of the self." },
  { title: "Hate Father and Mother", verse: "Luke 14:26", body: "'If anyone comes to me and does not hate father and mother, wife and children, brothers and sisters — yes, even their own life — such a person cannot be my disciple' (Luke 14:26). The Semitic idiom of 'hate' means to love less by comparison. Jesus is not commanding relational hostility but declaring that loyalty to him must be primary and uncompromising. Every other loyalty — even the deepest family bonds — must be subordinate to following him. This is the most radical claim of the discipleship summons." },
  { title: "The Rich Young Man", verse: "Mark 10:17-22", body: "A man who has done everything right asks Jesus what he lacks. Jesus identifies the one thing: 'Go, sell everything you have and give to the poor, and you will have treasure in heaven. Then come, follow me.' The man leaves sad because he had great wealth (Mark 10:22). Jesus does not chase him. The cost of discipleship varies by person — Jesus identified the man's specific attachment — but the cost is always complete. Discipleship cannot coexist with a reservation about any ultimate allegiance." },
  { title: "Blessed Are the Persecuted", verse: "Matthew 5:10-12", body: "'Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven' (Matthew 5:10). Jesus pronounces blessing on the outcome that most people would do anything to avoid. Persecution is not incidental to discipleship in a hostile world — it is expected. Peter confirms: 'If you suffer as a Christian, do not be ashamed, but praise God that you bear that name' (1 Peter 4:16). The cross was not Jesus's deviation from the path; it was the path itself, and disciples walk the same road." },
];

const MYTHS = [
  { myth: "Once you commit, it gets easier", truth: "Jesus promised the opposite. The call to follow is also a call to endure. The road narrows; the demands increase as you go deeper. What changes is not the difficulty but the capacity — and even that comes from grace, not improvement." },
  { myth: "God won't give you more than you can handle", truth: "Paul describes being 'utterly and unbearably crushed' (2 Corinthians 1:8) — well beyond his own handling capacity. The point is that God is the handler. The verse actually says God provides the way out, not that the thing itself fits your capacity." },
  { myth: "Real disciples never doubt or struggle", truth: "John the Baptist, from prison, sent messengers asking if Jesus was the one (Matthew 11:3). Elijah asked to die. David wrote dozens of psalms of complaint and disorientation. Doubt is not the opposite of faith; it is faith's companion in hard seasons." },
  { myth: "Following Jesus improves your circumstances", truth: "Paul: shipwrecked three times, flogged, imprisoned, sleepless, hungry, and cold (2 Corinthians 11:23-27). Hebrews 11 catalogs the faithful who 'did not receive what was promised' in this life. Jesus's cross precedes resurrection; the pattern is not reversed for disciples." },
  { myth: "The cost is just Sunday morning plus tithing", truth: "Bonhoeffer's 'cheap grace' names this error: 'grace without discipleship, grace without the cross, grace without Jesus Christ.' Discipleship makes total claims on every area of life — time, money, relationships, vocational decisions, and political allegiances." },
];

const PRACTICES = [
  { title: "Name What You Hold Back", desc: "Discipleship requires identifying the thing you are unwilling to surrender — and bringing that specific thing to God. For the rich young man it was wealth. For others it is reputation, control, romantic relationship, or a particular sin. The unarticulated cost is still cost; naming it is the beginning of dealing with it.", icon: "🪞" },
  { title: "Find a Costly Community", desc: "Cheap grace is easy to maintain in isolation. Discipleship requires community that will ask the hard question, name the inconsistency, and keep you accountable to what you professed. Look for community that costs you something — time, transparency, vulnerability.", icon: "👥" },
  { title: "Practice Small Deaths Daily", desc: "The cross is not one dramatic moment; it is a daily way of living. Fasting, saying no to an impulse, choosing someone else's preference, giving away what you could keep — small deaths train the capacity for the larger ones. Bonhoeffer: 'When Christ calls a man, he bids him come and die.'", icon: "✝️" },
  { title: "Read the Martyrs and the Persecuted", desc: "Foxe's Book of Martyrs, The Heavenly Man (Brother Yun), Through the Gates of Splendor (Elisabeth Elliot) — reading about Christians who paid the ultimate cost recalibrates what we call sacrifice. The persecuted church rebukes comfortable discipleship without a word.", icon: "📖" },
  { title: "Redefine Success", desc: "The metrics of the kingdom are not those of the culture: not wealth, status, comfort, or numbers. Jesus's beatitudes describe blessedness in categories the world calls cursed. Regularly ask: by what standard am I measuring my life? Is it the standard of Matthew 5 or of Madison Avenue?", icon: "📊" },
  { title: "Sit with Luke 14 Regularly", desc: "Return to the counting-the-cost passage (Luke 14:25-33) annually. What was the cost you assessed when you first committed to following Christ? Has that cost remained, grown, or been subtly reduced to something more comfortable? Renewal begins with honest assessment.", icon: "🔄" },
];

export default function DiscipleshipCostPage() {
  const [activeTab, setActiveTab] = useState<"passages" | "myths" | "practices">("passages");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Cost of Discipleship</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            'Whoever wants to be my disciple must deny themselves and take up their cross and follow me.' Jesus was not vague about the terms. Counting the cost is not pessimism — it is the first act of genuine commitment.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid #EF444420`, borderRadius: 12, padding: 18, marginBottom: 28, textAlign: "center" }}>
          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
            'Cheap grace is the grace we bestow on ourselves... Cheap grace is grace without discipleship, grace without the cross, grace without Jesus Christ.' — Dietrich Bonhoeffer, <em>The Cost of Discipleship</em>
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "passages" as const, label: "Key Passages", icon: "📖" },
            { id: "myths" as const, label: "Common Myths", icon: "⚠️" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "passages" && (
          <div>
            {PASSAGES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{p.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{p.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "myths" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These myths make discipleship seem safer and more comfortable than Jesus described it. Each one reduces the cost — and in doing so, reduces the disciple.
              </p>
            </div>
            {MYTHS.map((m, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === m.myth ? null : m.myth)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === m.myth ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{m.myth}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === m.myth ? "−" : "+"}</span>
                </button>
                {expanded === m.myth && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{m.truth}</p>
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
                The cost of discipleship is not counted once at conversion — it is reassessed daily. These practices help maintain the honesty that Jesus called for in Luke 14.
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
