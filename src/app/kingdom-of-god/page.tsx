"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Kingdom Is Jesus's Central Message", verse: "Mark 1:15", body: "'The time has come. The kingdom of God has come near. Repent and believe the good news' (Mark 1:15). This was Jesus's first proclamation. Not 'how to have eternal life' or 'how to be saved' but the announcement of God's reign breaking into history. Understanding the kingdom is the key to understanding everything Jesus said and did. The parables, the miracles, the Sermon on the Mount — all are about the kingdom." },
  { title: "Already and Not Yet", verse: "Luke 17:20-21", body: "The kingdom is a present reality: 'the kingdom of God is in your midst' (Luke 17:21). It is also a future hope: 'your kingdom come' (Matthew 6:10). This tension — already inaugurated in Jesus's ministry, not yet fully consummated at his return — is the key to NT eschatology. Christians live in the overlap of the ages: the old age has not ended, and the new age has begun. The Holy Spirit is the presence of the future.", },
  { title: "The Kingdom and the Church", verse: "Matthew 16:18-19", body: "The church is not the kingdom — but it is the primary community through which the kingdom is made visible. Jesus gives Peter 'the keys of the kingdom' (Matthew 16:19), suggesting the church has an authorized role in kingdom proclamation and demonstration. The church witnesses to the kingdom; it does not control or fully embody it. The kingdom is larger than the church and precedes its existence.", },
  { title: "Kingdom Ethics", verse: "Matthew 5:3-12", body: "The Beatitudes describe the character of kingdom people — not to earn entry but as the portrait of those who already belong. Blessed are the poor in spirit, the mourning, the meek, the hungry and thirsty for righteousness. These are not personality types that happen to be blessed; they describe the posture of those who have nothing to offer and everything to receive from the King. Kingdom ethics are the ethics of dependence, not of achievement.", },
  { title: "The Kingdom's Presence in the World", verse: "Matthew 13:33", body: "The parables of the kingdom describe how it works: like yeast hidden in flour (Matthew 13:33), working invisibly but pervasively. Like a mustard seed (13:31-32) — tiny at first, becoming a home for birds. The kingdom does not arrive with power and fanfare but with hiddenness, weakness, and small beginnings. This is why it was missed by the powerful and received by the poor, the sick, and the outcast.", },
];

const PARABLES = [
  { name: "Sower and the Soils", ref: "Matthew 13:1-23", color: "#F59E0B", desc: "The kingdom's reception depends on the condition of the heart, not the power of the message. Shallow, distracted, and anxious hearts produce no lasting fruit. The good soil — receptive, honest, persevering — yields abundantly. The parable is a diagnostic: what kind of soil are you?", lesson: "Sustaining the word requires deliberate attention. Remove the thorns (worries and wealth) and the birds (distraction) by regular, unhurried engagement with Scripture." },
  { name: "Wheat and Tares", ref: "Matthew 13:24-30", color: "#EF4444", desc: "The kingdom contains both genuine citizens and impostors. The impulse to root out the tares (weeds) before the harvest risks destroying the wheat. God tolerates the mixed field until the judgment — which means the church will always contain the mixed.", lesson: "Do not expect a pure church. Do not try to create one through excessive discipline or exclusion. The sorting belongs to the Judge at the end." },
  { name: "Hidden Treasure & Pearl", ref: "Matthew 13:44-46", color: "#8B5CF6", desc: "The kingdom is worth selling everything for. Both parables describe people who discover something so valuable that all other possessions become trivial in comparison. The joy in the discovery is the engine of the surrender — not grim duty but exhilarated exchange.", lesson: "If the kingdom does not produce the joy of having found something supremely valuable, the theology may be right but the experience is not yet real. Joy is not optional in kingdom living." },
  { name: "Prodigal Son", ref: "Luke 15:11-32", color: "#3B82F6", desc: "The parable of the prodigal is really the parable of the father — whose response to the returning son (running, embracing, restoring before a word of repentance) reveals the kingdom's welcome. The elder brother's resentment at grace is also the parable of everyone who has earned their place and resents those who received it freely.", lesson: "The kingdom is defined by the Father's running embrace, not by the prodigal's worthiness or the elder's record. Both sons are lost; the one who knows it is the one who returns." },
  { name: "Good Samaritan", ref: "Luke 10:25-37", color: GREEN, desc: "In answer to 'Who is my neighbor?' Jesus tells a story that ends with 'Which one was a neighbor?' The shift moves from categorizing others (who qualifies?) to defining oneself (am I the kind of person who stops?). Kingdom citizenship is about what you do when you see need, not who you classify as deserving.", lesson: "The question 'who is my neighbor?' is the wrong question. The kingdom question is: 'am I being a neighbor to whoever is in front of me?'" },
];

const PRACTICES = [
  { title: "Pray the Lord's Prayer Slowly", desc: "'Your kingdom come, your will be done, on earth as it is in heaven' — pray this petition and mean it. Let it shape how you approach your day. The Lord's Prayer is a kingdom prayer, not a personal wish list.", icon: "🙏" },
  { title: "Seek the Kingdom First", desc: "Matthew 6:33: 'Seek first his kingdom and his righteousness, and all these things will be given to you as well.' What does kingdom-first look like in your schedule, your money, your career choices? Make it concrete.", icon: "🎯" },
  { title: "Practice Kingdom Economics", desc: "The kingdom reverses standard economics: the last are first, the greatest serve the smallest, and giving away creates abundance. Practice one kingdom-economics act weekly: give something away, serve someone beneath your station, choose the lower seat.", icon: "💛" },
  { title: "Read the Parables Regularly", desc: "Jesus's parables are not children's stories — they are subversive, unsettling, and surprisingly difficult. Read a parable slowly. Ask: what does this say about what the kingdom is like? What assumption does it overturn? Who in this story am I?", icon: "📖" },
  { title: "Live as Citizens of the Coming Kingdom", desc: "Christians are, in Paul's phrase, 'citizens of heaven' who live as ambassadors on earth. Ask in each situation: what would this look like if the kingdom were fully here? Then move toward that, knowing you are anticipating what is coming.", icon: "🌍" },
  { title: "Celebrate Kingdom Advances", desc: "When someone is converted, a broken relationship is healed, justice is done, or beauty is created — celebrate it as a kingdom advance. Not all progress is kingdom progress; but genuine kingdom advances are worth pausing to name and celebrate.", icon: "🎉" },
];

export default function KingdomOfGodPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "parables" | "practices">("theology");
  const [selectedParable, setSelectedParable] = useState("Sower and the Soils");

  const parable = PARABLES.find(p => p.name === selectedParable)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👑</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Kingdom of God</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The kingdom of God is Jesus's central message — God's reign breaking into history in his person and ministry, already present and not yet fully arrived. Everything else in his teaching flows from this.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "parables" as const, label: "Kingdom Parables", icon: "🌾" },
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

        {activeTab === "parables" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {PARABLES.map(p => (
                <button key={p.name} onClick={() => setSelectedParable(p.name)}
                  style={{ padding: "8px 12px", borderRadius: 20, border: `1px solid ${selectedParable === p.name ? p.color : BORDER}`, background: selectedParable === p.name ? `${p.color}15` : "transparent", color: selectedParable === p.name ? p.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {p.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${parable.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <h2 style={{ color: parable.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{parable.name}</h2>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{parable.ref}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{parable.desc}</p>
              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>THE LESSON</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{parable.lesson}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The kingdom is not only a doctrine to believe but a reality to inhabit — a present and future world whose values, economics, and ethics can be practiced now.
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
