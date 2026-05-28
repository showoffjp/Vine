"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Generosity as Response to Grace", verse: "2 Corinthians 8:9", body: "For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you through his poverty might become rich (2 Corinthians 8:9). Paul grounds the call to generous giving not in obligation or guilt but in Christology — in what Jesus did. The Incarnation is the supreme act of generosity: the infinite becoming poor so that the finite might become rich. Christian giving, at its deepest, is a participation in and a response to that giving. We give because we have received a gift that cost the giver everything." },
  { title: "The Tithe and Its Meaning", verse: "Malachi 3:10", body: "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the Lord Almighty, and see if I will not throw open the floodgates of heaven (Malachi 3:10). The tithe (10%) was the OT covenant baseline for giving — a recognition that everything belongs to God and that the first portion is returned to him. Christians debate whether the tithe is binding under the new covenant: some hold it remains the biblical norm; others hold that the new covenant calls to radical generosity that exceeds the tithe. All agree that the tithe is a useful floor, not a ceiling — and that the NT pattern consistently calls to go beyond it." },
  { title: "Cheerful Giving", verse: "2 Corinthians 9:7", body: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver (2 Corinthians 9:7). The Greek word for cheerful is hilaros — the root of hilarious. The God who loves a cheerful giver is not interested in guilt-driven giving, compelled giving, or giving performed for human approval. This is not a command to feel good about giving regardless of your heart; it is a call to do the inner work of understanding what has been received until giving from abundance becomes more natural than hoarding from scarcity. Generosity is a fruit of believing the gospel, not a way of earning God's favor." },
  { title: "The Widow's Offering", verse: "Mark 12:43-44", body: "This poor widow has put more into the treasury than all the others. They all gave out of their wealth; but she, out of her poverty, put in everything — all she had to live on (Mark 12:43-44). Jesus evaluates giving not by the amount but by the proportion and the heart. The widow gave everything — not because she was imprudent or unaware of her poverty, but because she trusted God with everything she had. This teaching does not require literal penury of all Christians, but it does resist the comfortable calculus of giving from surplus alone. Generosity that does not touch my standard of living is not yet the generosity Jesus describes." },
  { title: "Generosity and the New Creation", verse: "Acts 2:44-45", body: "All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need (Acts 2:44-45). The early church in Acts practiced a radical sharing that went beyond charity to structural redistribution — not communism (the giving was voluntary) but something far more radical than occasional donation. This pattern reflects the new creation breaking in: in the kingdom, there are no needy among you (Deuteronomy 15:4 fulfilled in Acts 4:34). Christian generosity is not merely nice personal behavior — it is an enacted sign of the kingdom, a present-tense participation in the economics of the age to come." },
];

const OBSTACLES = [
  { o: "The Scarcity Mindset", desc: "The deep fear that there will not be enough — that giving away decreases what I have and endangers my security. This is often unconscious, operating below explicit theology, driven by anxiety rather than greed.", response: "Practice giving as a trust exercise. Begin with what you can do without difficulty, and gradually increase. Notice whether the feared catastrophe materializes. Jesus consistently connects the scarcity mindset with small faith (Matthew 6:25-34) — the antidote is genuine trust in God's provision, built through experience." },
  { o: "Giving for Status", desc: "Jesus's sharpest warnings about giving target this: giving to be seen, to be thanked, to have your name on the building. The religious performance of generosity is worse than secular giving because it claims God's name while seeking human approval.", response: "Give anonymously when you can. Remove your name from gifts where removal is possible. Develop practices of secret giving — where only you and God know. Matthew 6:3-4: do not let your left hand know what your right hand is doing. The audience for your giving is one." },
  { o: "Compartmentalizing Money from Faith", desc: "Many Christians have a fully integrated faith in every area except finances — where secular financial logic (maximize ROI, minimize risk, maximize consumption) operates without theological interference.", response: "Bring your financial decisions under the same scrutiny you bring to your other decisions. Ask: Is this consistent with what I say I believe? Does my bank statement reflect my stated values? What would a non-Christian observe about my financial life? These questions are not for guilt but for integrity." },
  { o: "Giving to the Wrong Things", desc: "Not all giving is equally wise. Giving that creates dependency, giving that funds ineffective programs, giving without attention to how resources are used — these are common ways generosity is well-intended but poorly directed.", response: "Give generously AND wisely. Research the organizations you give to. Give primarily through your local church, which has accountability to a known community. Ask hard questions about effectiveness. Generosity is not absolved of prudence — it is enriched by it." },
  { o: "Postponing Generosity", desc: "When I have more, when the mortgage is paid off, when the kids are through college — the generosity that is always future tends to remain always future. The conditions for giving rarely arrive on their own.", response: "Give now, from what you have. The widow gave from poverty. The Macedonian churches gave from severe trial (2 Corinthians 8:2). Generosity is not a posture reached after financial security — it is one of the disciplines that, practiced now, actually produces the inner freedom that no financial security can provide." },
];

const PRACTICES = [
  { title: "Give Before You Spend", desc: "The financial practice of giving first — not from what is left over, but from the first portion of income — enacts the theological conviction that everything belongs to God and the first is returned to him. It also prevents the experience most people have: giving whatever is left, which is usually less than intended.", icon: "💳" },
  { title: "Give to Your Local Church First", desc: "The local church is the primary vehicle for Christian giving — the storehouse that funds the preaching of the word, the care of the community, and the mission to the world. Give generously to your local congregation before diversifying to parachurch organizations and personal causes.", icon: "⛪" },
  { title: "Practice Anonymous Giving", desc: "Give in ways that cannot return to you — anonymously, without expecting acknowledgment or relationship. This trains the heart away from giving-for-status and toward giving-for-God. It also frees the recipient from the awkwardness of indebtedness.", icon: "🔒" },
  { title: "Invite Others Into Generosity", desc: "Generosity is culturally contagious. When you give visibly (appropriately, without performance), you create space for others to give. Talk about giving with your children, your friends, your small group. The church that talks about money only apologetically produces giving that is reluctant rather than joyful.", icon: "💬" },
  { title: "Track and Review Your Giving", desc: "Review your giving at least annually: where did it go, what did it accomplish, does it reflect your stated values? The discipline of reviewing giving is one of the few financial practices that tends to increase generosity rather than decrease it — because you see what your giving has done.", icon: "📊" },
  { title: "Experience Need Firsthand", desc: "Proximity to poverty changes giving. Volunteering in food banks, visiting underserved communities, forming relationships across economic lines — these experiences make abstract giving concrete and make comfortable Christianity uncomfortable in the best way. You give more freely to what you have seen.", icon: "🌍" },
];

export default function TheologyOfGenerosityPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "obstacles" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💛</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theology of Generosity</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Christian generosity is not a financial strategy or a moral duty — it is a response to the grace of a God who gave everything. The cheerful giver gives from overflow, not obligation.
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
                The most common ways Christians fall short of the generosity they intend — and what overcomes each obstacle.
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
                Generosity is a spiritual discipline — not a personality type. It grows through intentional practice, honest self-examination, and proximity to the poor.
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
