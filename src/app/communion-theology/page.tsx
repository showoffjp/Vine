"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Institution of the Supper", verse: "1 Corinthians 11:23-26", body: "Paul records the tradition he received about the night Jesus was betrayed: he took bread, gave thanks, broke it and said, 'This is my body, which is for you; do this in remembrance of me.' After supper he took the cup: 'This cup is the new covenant in my blood; do this, whenever you drink it, in remembrance of me' (1 Corinthians 11:23-25). Three elements: the bread and cup, the interpretive words, and the command to repeat it. The Lord's Supper is not a human invention but a divinely instituted ordinance." },
  { title: "Proclamation Until He Comes", verse: "1 Corinthians 11:26", body: "'For whenever you eat this bread and drink this cup, you proclaim the Lord's death until he comes' (1 Corinthians 11:26). The Supper is a proclamation — a visible word. Every celebration is a sermon in action: the gospel enacted with bread and cup. It also has an eschatological dimension — 'until he comes' orients the Supper toward the messianic banquet of the kingdom (Matthew 26:29). The Supper is thus located between the past (his death) and the future (his return)." },
  { title: "Discerning the Body", verse: "1 Corinthians 11:29", body: "Paul's warning about eating 'in an unworthy manner' (11:27) and failing to 'discern the body' (11:29) is one of the most debated passages in the NT. Two interpretations: (1) 'the body' is Christ's body in the elements — failing to recognize the real presence of Christ in the Supper. (2) 'the body' is the church — the Corinthians' social divisions at the table violated the unity of the body they claimed to celebrate. Both readings are serious; both have strong exegetical support." },
  { title: "Communion with Christ", verse: "1 Corinthians 10:16", body: "'Is not the cup of thanksgiving for which we give thanks a participation in the blood of Christ? And is not the bread that we break a participation in the body of Christ?' (1 Corinthians 10:16). The Greek word translated 'participation' (koinonia) means genuine fellowship, sharing, communion. Whatever one's tradition, the Lord's Supper is a real encounter with the risen Christ — not merely a mental act of remembering. The question is how he is present, not whether." },
  { title: "New Covenant in My Blood", verse: "Luke 22:20", body: "'This cup is the new covenant in my blood, which is poured out for you' (Luke 22:20). The cup language connects the Supper to Jeremiah's new covenant promise (Jeremiah 31:31-34) and to the Passover's covenant blood (Exodus 24:8). Jesus is the Passover Lamb whose blood establishes the new covenant. Every Supper celebrates the exodus from sin's slavery, ratified in the blood of the Lamb." },
];

const TRADITIONS = [
  {
    name: "Roman Catholic",
    color: "#F59E0B",
    view: "Transubstantiation: the substance of the bread and wine are fully changed into the body and blood of Christ, while the outward appearances (accidents) remain. Christ is truly, really, and substantially present. The Mass is also a sacrifice — an unbloody re-presentation of Calvary, not a repetition of it.",
    emphasis: "Real presence; sacrificial offering; the priest's role in consecration",
    key_text: "CCC 1322-1419; Council of Trent (1545-1563)",
  },
  {
    name: "Lutheran",
    color: "#EF4444",
    view: "Sacramental union (often miscalled consubstantiation): Christ's body and blood are truly present 'in, with, and under' the bread and wine — both natures coexist. Luther insisted on a literal reading of 'This is my body.' The Supper is a means of grace through which forgiveness is genuinely distributed to the recipient.",
    emphasis: "Real bodily presence; means of grace; forgiveness distributed in the Supper",
    key_text: "Luther's Small Catechism; Augsburg Confession Article X",
  },
  {
    name: "Reformed",
    color: PURPLE,
    view: "Spiritual presence (Calvin): Christ is truly present in the Supper — not his physical body (which is in heaven at the Father's right hand), but his true self communicated through the Spirit. The Supper is a genuine means of grace in which we feed on Christ spiritually and truly. More than Zwingli, less than Luther.",
    emphasis: "Spiritual real presence; the Spirit as the bond of union; genuine nourishment",
    key_text: "Institutes of the Christian Religion IV.17 (Calvin); Westminster Confession XXIX",
  },
  {
    name: "Zwinglian / Memorial",
    color: GREEN,
    view: "The bread and wine are signs and memorials of Christ's sacrifice — they do not contain or convey Christ's body and blood but represent them. The Supper is a visible pledge and reminder of what Christ accomplished. The chief benefit is the recollection and proclamation of his death, not a sacramental impartation of grace.",
    emphasis: "Memorial; proclamation; sign rather than instrument of grace",
    key_text: "Zwingli's 'On the Lord's Supper' (1526); most Baptist and evangelical traditions",
  },
];

const PRACTICES = [
  { title: "Come with Examination", desc: "Paul's instruction is to 'examine yourself' before eating (1 Corinthians 11:28). This is not a perfectionism test but a preparation: am I coming in faith? Is there unconfessed sin? Am I at peace with those I will share the table with? Brief, honest self-examination transforms the Supper from ritual to encounter.", icon: "🔍" },
  { title: "Come with Faith, Not Fear", desc: "The warning about 'eating unworthily' is sometimes misread as a warning to stay away unless you are holy enough. The opposite is true: the Supper is medicine for the sick, not a reward for the healthy. Come as a sinner who needs what the table offers — not as someone whose moral record earns a seat.", icon: "🙏" },
  { title: "Receive It Frequently", desc: "The early church celebrated the Lord's Supper weekly (Acts 2:42; 20:7). Most Protestant churches celebrate it far less frequently — monthly or quarterly. The Reformers wanted weekly communion. Consider whether your church's frequency matches the Supper's intended role as a regular means of grace.", icon: "📅" },
  { title: "Let It Form Community", desc: "The Supper is a communal meal, not a private religious exercise. Paul's rebuke of the Corinthians was precisely about their failure to see it as a shared table. Come to the table as a member of the body. Sit with people you know and people you don't. The table creates what the sermon proclaims.", icon: "🍷" },
  { title: "Connect It to the Passover", desc: "The Supper was instituted during Passover. Reading Exodus 12 alongside the institution narrative illuminates the meal's meaning: the blood on the doorpost, the lamb, the departure from slavery. Jesus is the Passover Lamb of the new exodus. This connection deepens every celebration.", icon: "📖" },
  { title: "Anticipate the Feast", desc: "'Until he comes' — the Supper is not merely backward-looking. It is also an anticipation of the marriage supper of the Lamb (Revelation 19:9) and the messianic banquet of the kingdom. Each celebration is a foretaste. Let that eschatological expectation shape the experience — hope as well as memory.", icon: "✨" },
];

export default function CommunionTheologyPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "traditions" | "practices">("theology");
  const [selectedTrad, setSelectedTrad] = useState("Roman Catholic");

  const trad = TRADITIONS.find(t => t.name === selectedTrad)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🍞</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Lord's Supper</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Every celebration of the Lord's Supper proclaims the gospel in visible form — the bread and cup re-presenting Christ's death and anticipating his return. How Christ is present at the table has divided Christendom for five centuries.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "traditions" as const, label: "Traditions", icon: "⛪" },
            { id: "practices" as const, label: "Practices", icon: "🍷" },
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

        {activeTab === "traditions" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {TRADITIONS.map(t => (
                <button key={t.name} onClick={() => setSelectedTrad(t.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedTrad === t.name ? t.color : BORDER}`, background: selectedTrad === t.name ? `${t.color}20` : "transparent", color: selectedTrad === t.name ? t.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {t.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${trad.color}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: trad.color, fontWeight: 900, fontSize: 22, marginBottom: 16 }}>{trad.name}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{trad.view}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: `${trad.color}08`, border: `1px solid ${trad.color}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: trad.color, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>EMPHASIS</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{trad.emphasis}</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>KEY TEXT</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{trad.key_text}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The Lord's Supper is meant to be received often, with preparation, in community. These six practices help it move from obligation to nourishment.
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
