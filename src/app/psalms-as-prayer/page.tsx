"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "guide" | "types" | "psalms" | "howto" | "videos";

const PSALM_TYPES = [
  { type: "Lament (Individual)", color: "#EF4444", count: "~40 Psalms", examples: "3, 4, 5, 6, 7, 13, 22, 31, 38, 42-43, 51, 55, 57, 61, 64, 69, 71, 86, 88, 102, 109, 130, 140, 141, 142, 143", structure: "Address to God → Complaint → Confession of Trust → Petition → Vow of Praise", why_pray: "These psalms give voice to the darkest interior states — abandonment, betrayal, illness, depression, anger at God. They legitimize the full range of human experience before God and provide language for what feels unspeakable.", example_psalm: 88, example_note: "The only Psalm with no resolution or praise — it ends in darkness. Model for those who cannot yet move to hope." },
  { type: "Lament (Communal)", color: "#F59E0B", count: "~15 Psalms", examples: "12, 44, 58, 60, 74, 77, 79, 80, 83, 85, 90, 94, 123, 126, 137", structure: "Corporate cry to God → Description of disaster → Appeal to God's past faithfulness → Petition for deliverance", why_pray: "For praying with and for your community, nation, or church in times of corporate crisis. Psalm 44 is particularly powerful when the community feels abandoned by God despite faithfulness.", example_psalm: 44, example_note: "The psalm that begins: We have not forgotten you... yet you have rejected and humbled us. Honest communal prayer." },
  { type: "Praise & Hymn", color: GREEN, count: "~30 Psalms", examples: "8, 19, 29, 33, 46, 47, 48, 65, 66, 67, 68, 76, 84, 87, 93, 95-100, 103-106, 111-118, 135-136, 145-150", structure: "Call to praise → Reasons for praise (nature, history, salvation) → Renewed call to praise", why_pray: "These psalms lift the eyes from circumstances to the character and acts of God. They are medicine for self-absorption and discouragement — the worshipping self cannot simultaneously be the despairing self.", example_psalm: 103, example_note: "Bless the Lord, O my soul, and forget not all his benefits — arguably the greatest praise Psalm." },
  { type: "Thanksgiving", color: PURPLE, count: "~15 Psalms", examples: "9, 18, 21, 30, 32, 34, 40, 41, 66, 92, 107, 116, 118, 124, 138", structure: "Declaration of thanks → Description of crisis → Description of God's deliverance → Vow of continued praise", why_pray: "Thanksgiving Psalms close the lament cycle — they remember what God has done after the deliverance. They train the habit of explicitly thanking God for specific acts of help, preventing the human tendency to forget.", example_psalm: 30, example_note: "You turned my mourning into dancing — the completion of the lament arc." },
  { type: "Royal & Messianic", color: "#3B82F6", count: "~20 Psalms", examples: "2, 18, 20, 21, 45, 47, 72, 89, 101, 110, 132, 144", structure: "Address to the king → Oracle about the king → Prayer for the king → Trust in the king's reign", why_pray: "These psalms point beyond the historical kings of Israel to the promised Messiah — fulfilled in Christ. Praying them is praying in the light of Christ's reign, interceding for his kingdom, and expressing confidence in His ultimate victory.", example_psalm: 2, example_note: "Quoted more times in the NT than any other Psalm — Ask of me, and I will give you the nations." },
  { type: "Wisdom & Torah", color: "#10B981", count: "~15 Psalms", examples: "1, 19, 34, 37, 49, 73, 78, 91, 112, 119, 127, 128, 133, 139", structure: "Meditation on the blessed life → Reflection on Torah or divine wisdom → Application to daily life", why_pray: "These psalms invite you to meditate on the Word of God, the fear of the Lord, and the pattern of the wise life. Psalm 119 — the longest chapter in the Bible — is an extended meditation on loving God's law in all its dimensions.", example_psalm: 119, example_note: "176 verses of meditation on Scripture's value for every dimension of life." },
  { type: "Penitential", color: "#6366F1", count: "7 Classic Psalms", examples: "6, 32, 38, 51, 102, 130, 143", structure: "Confession of sin → Experience of God's discipline → Cry for forgiveness and restoration → Trust in God's mercy", why_pray: "The seven penitential Psalms have been used in the church's liturgy of repentance since the earliest centuries. Psalm 51 (David after Bathsheba) is the greatest prayer of repentance in all of Scripture.", example_psalm: 51, example_note: "Create in me a clean heart, O God — the model of biblical repentance: honest, specific, God-focused." },
];

const SELECTED_PSALMS = [
  { number: 23, title: "The Lord is My Shepherd", color: GREEN, best_for: "Anxiety, fear, approaching death", what_it_does: "The most-memorized Psalm in history. Six verses that move through green pastures, dark valleys, enemies, and the house of God forever. Every line is a theological statement about what God provides for those who follow Him.", key_verse: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me." },
  { number: 46, title: "God is Our Refuge", color: PURPLE, best_for: "National crisis, personal catastrophe, chaos", what_it_does: "The Reformation Psalm — Luther's Psalm, which inspired A Mighty Fortress. The earth gives way, the mountains shake, the nations are in uproar — but God is our refuge and strength, a very present help in trouble. The Psalm ends with Be still and know that I am God.", key_verse: "God is our refuge and strength, a very present help in trouble." },
  { number: 51, title: "Create in Me a Clean Heart", color: "#EF4444", best_for: "After sin, repentance, spiritual restoration", what_it_does: "David's prayer after the prophet Nathan confronted him over Bathsheba and Uriah. The model of biblical repentance: specific, honest, not excusing, focused on God's mercy rather than on consequences. Three requests: purge me, wash me, create a clean heart. Not the prayer of a man escaping consequences — the prayer of a man who understands what sin actually is.", key_verse: "Create in me a clean heart, O God, and renew a right spirit within me." },
  { number: 62, title: "My Soul Finds Rest", color: "#3B82F6", best_for: "Anxiety, restlessness, spiritual dryness", what_it_does: "For God alone my soul waits in silence — the repeated refrain grounds a turbulent soul in stillness. A meditation on the worthlessness of human securities compared to God as rock, salvation, and fortress. Power belongs to God; love is his. Everything else is a breath.", key_verse: "For God alone my soul waits in silence; from him comes my salvation." },
  { number: 88, title: "In Darkest Night", color: "#6366F1", best_for: "Deep depression, chronic illness, unanswered prayer", what_it_does: "The darkest Psalm — the only one that ends without praise or resolution. Heman the Ezrahite prays as one who has been dying since youth, abandoned by companions, pressed by terrors. God does not answer. The Psalm ends: darkness is my closest friend. It models bringing absolute darkness to God and not requiring a tidy resolution.", key_verse: "O Lord, God of my salvation; I cry out day and night before you." },
  { number: 103, title: "Bless the Lord, O My Soul", color: GREEN, best_for: "Spiritual dryness, forgetfulness of grace, gratitude", what_it_does: "The greatest praise Psalm — a sustained meditation on the benefits of knowing God: forgiveness, healing, redemption, steadfast love. God removes sin as far as the east is from the west; He knows our frame and remembers we are dust. An antidote to self-pity and forgetfulness.", key_verse: "Bless the Lord, O my soul, and forget not all his benefits." },
  { number: 130, title: "Out of the Depths", color: "#F59E0B", best_for: "Guilt, shame, waiting on God", what_it_does: "De profundis — out of the depths I cry to you, O Lord. This short penitential Psalm moves from desperate prayer, through honest acknowledgment of sin, to confident waiting on God whose forgiveness is sure. Luther called it one of the Pauline Psalms — it anticipates the doctrine of justification by faith.", key_verse: "If you, O Lord, should mark iniquities, O Lord, who could stand? But with you there is forgiveness." },
  { number: 139, title: "You Search Me and Know Me", color: PURPLE, best_for: "Identity, anxiety about God's knowledge, wonder", what_it_does: "The Psalm of God's omniscience as pastoral comfort rather than threat. God knows every thought, every path, every word before it is spoken — and his knowledge is the ground of security, not exposure. Even darkness is not dark to him. The Psalm ends with the great prayer: Search me, O God, and know my heart.", key_verse: "Search me, O God, and know my heart! Try me and know my thoughts." },
];

const HOW_TO_STEPS = [
  { step: 1, title: "Choose a psalm with intention", color: GREEN, content: "Match your interior state to the Psalm type. In grief: go to Psalms 22, 42, 88. In joy: go to 103, 150, 145. In guilt: Psalm 51. In anxiety: Psalms 62, 46. In crisis of faith: Psalms 73, 77. Dietrich Bonhoeffer said the Psalms are the prayer book of the Bible — they teach us how to pray by giving us the words." },
  { step: 2, title: "Read it slowly — twice", color: PURPLE, content: "Read the Psalm once for the overall movement. Then read it again slowly, one verse at a time. Let each verse land. Notice what strikes you, what resonates, what seems foreign to your experience. The goal is not coverage but encounter." },
  { step: 3, title: "Pray it in your own words", color: "#3B82F6", content: "After reading, take a phrase that stood out and turn it into personal prayer. Psalm 51:10 — Create in me a clean heart — becomes: Lord, I cannot make my heart clean. I have tried. You are the only one who can do this. Do it. The Psalm gives the vocabulary; you supply the specificity of your situation." },
  { step: 4, title: "Let Christ pray it with you", color: "#F59E0B", content: "Jesus prayed the Psalms. On the cross He cried Psalm 22 (My God, my God, why have you forsaken me?) and Psalm 31 (Into your hands I commit my spirit). When you pray a Psalm, you are praying with Jesus — He has occupied every word of the Psalter in His own experience. This transforms even the darkest Psalm into a christological encounter." },
  { step: 5, title: "Sit in silence afterward", color: "#EF4444", content: "After praying the Psalm, remain in silence for 3-5 minutes. The Psalm has done its work of opening the heart toward God; now rest in that openness without immediately moving on. Contemplation follows the words." },
  { step: 6, title: "Return to the same Psalm", color: "#10B981, ", content: "Many of the great contemplatives returned to the same Psalm daily for weeks or months. Each time, new dimensions emerged. A Psalm prayed once is a greeting; a Psalm prayed for a month is a home. Let the best Psalms become permanent residents of your interior life." },
];

export default function PsalmsAsPrayerPage() {
  const [tab, setTab] = useState<Tab>("guide");
  const [selected, setSelected] = useState<string | null>(null);

  const psalm = SELECTED_PSALMS.find(p => p.number === parseInt(selected || "0"));
  const psalmType = PSALM_TYPES.find(t => t.type === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🙏</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Psalms as Prayer</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            The Psalter is the prayer book of the Bible — 150 psalms that together cover the entire range of human experience before God. Learning to pray the Psalms is learning to pray.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["guide", "types", "psalms", "howto", "videos"] as Tab[]).map(t => (
            <button key={t} onClick={() => { setTab(t); setSelected(null); }}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "guide" ? "Why Pray Psalms" : t === "types" ? "Psalm Types" : t === "psalms" ? "Key Psalms" : t === "howto" ? "How to Pray" : "Videos"}
            </button>
          ))}
        </div>

        {tab === "guide" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { title: "The Psalms gave Jesus his prayer language", color: GREEN, content: "Jesus quoted the Psalms more than any other book of Scripture. His last words from the cross were Psalms (22:1; 31:5). He taught his disciples to pray by directing them to the Psalter and by modeling prayer that was saturated with Psalm language. The Lord's Prayer echoes multiple Psalm themes. To pray the Psalms is to pray the prayers Jesus himself prayed." },
              { title: "The Psalter is a school of prayer", color: PURPLE, content: "Dietrich Bonhoeffer wrote in Psalms: The Prayer Book of the Bible that the Psalter is the only book in Scripture that is entirely prayer — and therefore the book that teaches us most directly how to pray. It teaches us to bring everything to God: triumph, failure, betrayal, joy, rage, confusion, and silence. Most Christian prayer is too narrow; the Psalter is comprehensive." },
              { title: "The Psalms legitimate the full range of experience", color: "#EF4444", content: "Western Christian culture often communicates that acceptable prayer is positive, thankful, and uplifting. The Psalter corrects this with brutal honesty: 40+ psalms are laments — raw complaints directed at God. Psalm 88 ends in darkness with no resolution. Psalm 44 accuses God of betrayal. This legitimacy — that the full range of human experience belongs in prayer — is itself healing for Christians who have been trained to perform spirituality." },
              { title: "The Psalms pray what we cannot pray alone", color: "#3B82F6", content: "Some interior states are too dark, too confused, or too overwhelming to find words. The Psalms provide pre-formed words that carry our experience when we cannot form words ourselves. This is why the church has prayed the Psalter at the bedside of the dying, over the bodies of the newly dead, and in the prison cells of the persecuted for 3,000 years." },
              { title: "Praying all 150 shapes the whole soul", color: "#F59E0B", content: "The Psalter as a whole is designed to be prayed through — not just mined for favorites. Praying all 150 Psalms (which takes about 4 weeks on a daily cycle) exposes you to the full range of Israelite theology, emotion, and prayer. You will pray things you have never prayed; feel things you have avoided feeling; and encounter a God who is larger than your comfort zone." },
            ].map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${p.color}25`, borderRadius: 12, padding: 24 }}>
                <div style={{ color: p.color, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>{p.title}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{p.content}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${GREEN}25`, borderRadius: 12, padding: 24 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>Resources for praying the Psalms</div>
              {[
                "The Psalms: The Prayer Book of the Bible — Dietrich Bonhoeffer (Augsburg Fortress)",
                "Praying with the Church — Scot McKnight (Paraclete Press)",
                "The Message: The Psalms — Eugene Peterson (poetic translation ideal for prayer)",
                "Psalms: The Prayer Book of the Bible — Christopher Wright (IVP)",
                "The Daily Office (Liturgy of the Hours) — built around the full Psalter in 4 weeks; available at universalis.com",
              ].map((r, i) => (
                <div key={i} style={{ color: TEXT, fontSize: 13, marginBottom: 6 }}>· {r}</div>
              ))}
            </div>
          </div>
        )}

        {tab === "types" && (
          <div style={{ display: "grid", gridTemplateColumns: psalmType ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {PSALM_TYPES.map((t, i) => (
                <button key={i} onClick={() => setSelected(selected === t.type ? null : t.type)}
                  style={{ background: selected === t.type ? `${t.color}12` : CARD, border: `1px solid ${selected === t.type ? t.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{t.type}</span>
                    <span style={{ background: `${t.color}15`, color: t.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{t.count}</span>
                  </div>
                </button>
              ))}
            </div>
            {psalmType && (
              <div style={{ background: CARD, border: `1px solid ${psalmType.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                <h2 style={{ color: psalmType.color, fontWeight: 900, fontSize: 17, margin: "0 0 10px" }}>{psalmType.type}</h2>
                <div style={{ background: `${psalmType.color}08`, border: `1px solid ${psalmType.color}15`, borderRadius: 8, padding: 10, marginBottom: 14 }}>
                  <div style={{ color: psalmType.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>STRUCTURE</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{psalmType.structure}</p>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{psalmType.why_pray}</p>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 14 }}>Examples: {psalmType.examples}</div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>EXAMPLE PSALM: {psalmType.example_psalm}</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{psalmType.example_note}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "psalms" && (
          <div style={{ display: "grid", gridTemplateColumns: psalm ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {SELECTED_PSALMS.map((p, i) => (
                <button key={i} onClick={() => setSelected(selected === String(p.number) ? null : String(p.number))}
                  style={{ background: selected === String(p.number) ? `${p.color}12` : CARD, border: `1px solid ${selected === String(p.number) ? p.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: `${p.color}20`, border: `1px solid ${p.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: p.color, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{p.number}</div>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                      <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{p.best_for}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            {psalm && (
              <div style={{ background: CARD, border: `1px solid ${psalm.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                <div style={{ color: psalm.color, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>Psalm {psalm.number}</div>
                <div style={{ color: TEXT, fontWeight: 800, fontSize: 16, marginBottom: 14 }}>{psalm.title}</div>
                <div style={{ background: `${psalm.color}08`, border: `1px solid ${psalm.color}15`, borderRadius: 8, padding: 10, marginBottom: 14 }}>
                  <div style={{ color: psalm.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>BEST FOR</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{psalm.best_for}</p>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{psalm.what_it_does}</p>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY VERSE</div>
                  <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>{psalm.key_verse}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "howto" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {HOW_TO_STEPS.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${s.color.split(",")[0]}25`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: `${s.color.split(",")[0]}20`, border: `1px solid ${s.color.split(",")[0]}40`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color.split(",")[0], fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{s.step}</div>
                  <div>
                    <div style={{ color: s.color.split(",")[0], fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{s.title}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{s.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "QgwzuFG5LCk", title: "Let the Psalms Teach You to Pray", channel: "Desiring God", description: "A practical guide to using the Psalter as a school of prayer, letting each psalm shape and expand your vocabulary before God." },
                  { videoId: "enxKd2YKgjI", title: "How Should You Read the Psalms?", channel: "Desiring God", description: "John Piper explains how to read the Psalms as prayer — slowly, personally, and with Christ as the primary voice." },
                  { videoId: "3VxyGP7z2rk", title: "If God Is Sovereign, Why Pray?", channel: "Ligonier Ministries", description: "R.C. Sproul shows why God's sovereignty is the foundation of prayer, not an objection to it — rooted in the theology of the Psalms." },
                  { videoId: "pJG8EWLEjQo", title: "Consistent Spiritual Discipline Is Not Legalism", channel: "Desiring God", description: "John Piper addresses the concern that structured, psalm-based prayer becomes mechanical, showing how discipline flows from desire." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
