"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const CHARACTERS = [
  {
    name: "Abraham",
    era: "Patriarch",
    color: "#F59E0B",
    testament: "OT",
    verse: "Genesis 12:1-4",
    summary: "The father of faith — called by God to leave everything for a land he had not seen, trusting a promise whose fulfillment he would not live to see fully. Abraham believed God, and it was credited to him as righteousness (Romans 4:3). The pattern of his life is paradigmatic: God calls, faith responds, and God is faithful across generations despite human failure.",
    character: "Brave and sometimes cowardly, faithful and sometimes duplicitous. His trust in God was real but not perfect — he twice lied about Sarah and tried to produce the promised heir through Hagar. His growth was not linear. Yet God called him friend (Isaiah 41:8).",
    lesson: "Faith is not the absence of doubt or failure — it is the orientation of a life toward God across time. Abraham failed repeatedly and God remained faithful. The covenant was never contingent on Abraham's performance.",
    nt_connection: "Paul's primary exhibit of justification by faith (Romans 4, Galatians 3). Hebrews 11 anchor. 'Friend of God' (James 2:23).",
  },
  {
    name: "Moses",
    era: "Exodus",
    color: "#EF4444",
    testament: "OT",
    verse: "Exodus 3:1-14",
    summary: "The liberator and lawgiver — raised in Pharaoh's court, fled to the desert, encountered God at the burning bush, and returned to Egypt to lead Israel out of slavery. Moses is the mediator of the Mosaic covenant and the primary lawgiver of the OT. He is also the most influential person in Judaism and shapes the entire OT narrative.",
    character: "Described as 'very humble, more than anyone else on the face of the earth' (Numbers 12:3) — yet capable of rage (breaking the tablets). His intercession for Israel repeatedly stayed divine judgment. He bore the weight of leadership for 40 years in the wilderness.",
    lesson: "Humility is not passivity or weakness — it is Moses commanding, confronting Pharaoh, and interceding for Israel. Humility is the absence of self-seeking, not the absence of action. The man most willing to be used was also the most willing to be overlooked.",
    nt_connection: "Transfiguration (Matthew 17). Jesus as the new and greater Moses (Deuteronomy 18:15, Acts 3:22). Hebrews contrasts Moses and Jesus as mediators.",
  },
  {
    name: "Ruth",
    era: "Judges",
    color: "#EC4899",
    testament: "OT",
    verse: "Ruth 1:16-17",
    summary: "A Moabite widow whose loyalty to her mother-in-law Naomi, and whose faith in the God of Israel, brought her into the covenant community and into the lineage of David and ultimately of Jesus. Her story is one of the most humanly beautiful in Scripture — and one of the most theologically significant, showing God's inclusion of Gentiles in his redemptive purposes.",
    character: "Ruth is characterized by hesed — the same word used for God's covenant love. Her loyalty to Naomi exceeds what obligation required. She worked with dignity and humility, acted with wisdom and courage (approaching Boaz at the threshing floor), and trusted in a God she had newly adopted as her own.",
    lesson: "Covenant loyalty is the defining virtue of God's people — and can be displayed as powerfully by an outsider as by the born-in member. Ruth's fidelity is held up as a model not just of family loyalty but of what love for God looks like in practice.",
    nt_connection: "Ancestor of Jesus (Matthew 1:5). Her story anticipates the inclusion of Gentiles in the new covenant community. James may allude to her story in his discussion of faith and works.",
  },
  {
    name: "Elijah",
    era: "Divided Kingdom",
    color: "#8B5CF6",
    testament: "OT",
    verse: "1 Kings 18:36-39",
    summary: "The prophet who confronted King Ahab, called fire from heaven on Mount Carmel, and fled in suicidal despair to the desert within days of his greatest triumph. Elijah's story is the most emotionally raw of the prophetic narratives — a man of enormous spiritual power who collapsed in exhaustion and asked to die.",
    character: "Bold in confrontation, prone to despair. His cave experience (1 Kings 19) reveals a man convinced he is the last faithful person in Israel. God's response is tender: food, rest, and a still small voice rather than spectacular display. He is raptured without dying — one of only two people in the OT.",
    lesson: "Spiritual highs and emotional lows can coexist. Elijah's post-Carmel despair is not faithlessness — it is human depletion. God's response is physical care before theological instruction. The body and spirit are not separate; exhaustion requires rest before it can receive revival.",
    nt_connection: "Appears at the Transfiguration. John the Baptist comes 'in the spirit and power of Elijah' (Luke 1:17). James uses his prayers as the model for intercessory faith (James 5:17-18).",
  },
  {
    name: "Mary (Mother of Jesus)",
    era: "New Testament",
    color: "#06B6D4",
    testament: "NT",
    verse: "Luke 1:38",
    summary: "The young woman chosen to bear the Son of God — her consent ('Let it be to me according to your word') is one of the most consequential acts in redemptive history. Mary's song (the Magnificat, Luke 1:46-55) is the most theologically sophisticated poetry in the NT and reveals a woman who understood the gospel before Christ's public ministry.",
    character: "Humble, theologically formed (the Magnificat reflects deep familiarity with the Psalms and Prophets), and willing to bear social shame for obedience. She 'treasured all these things and pondered them in her heart' (Luke 2:19) — a woman who received revelation slowly and deeply, not impulsively. Present at the cross; present at Pentecost.",
    lesson: "Obedience is consent, not compulsion. Mary's 'yes' was not passive — it was informed, costly, and freely given. The woman most honored in Christian tradition is honored precisely for her availability to God's purposes regardless of personal cost.",
    nt_connection: "Central to the Incarnation narratives (Luke 1-2, Matthew 1-2). Present at the cross (John 19:25-27). Present at Pentecost (Acts 1:14). Model of discipleship and of prophetic proclamation.",
  },
  {
    name: "Peter",
    era: "New Testament",
    color: "#3B82F6",
    testament: "NT",
    verse: "Matthew 16:16-18",
    summary: "The fisherman who became the rock — impulsive, warm-hearted, frequently wrong at critical moments, and ultimately transformed into the leader of the Jerusalem church and a martyr for the faith. Peter's story is the NT's most vivid portrait of how God uses deeply flawed people — and of what repentance and restoration look like after catastrophic failure.",
    character: "Impulsive (cutting off ears, walking on water then sinking, denying Christ three times), deeply loyal (the first resurrection appearance to an apostle was to Peter, 1 Corinthians 15:5), and capable of profound insight (the confession in Matthew 16) and profound cowardice (Galatians 2:11-14). His growth across the Gospels and Acts is visible and dramatic.",
    lesson: "Failure is not final. Peter's three denials are matched by three restorations (John 21). The person most visible for public failure became the founding preacher of the church. Shame over past failure is silenced by the specific, repeated love of a Savior who reinstates rather than discards.",
    nt_connection: "Pentecost sermon (Acts 2). Jerusalem Council (Acts 15). Author of 1 and 2 Peter. Paul's confrontation at Antioch (Galatians 2). Martyred in Rome under Nero.",
  },
  {
    name: "Mary Magdalene",
    era: "New Testament",
    color: "#10B981",
    testament: "NT",
    verse: "John 20:16-18",
    summary: "A woman delivered from seven demons who became one of Jesus's most devoted followers and the first witness to the resurrection. Mary Magdalene was present at the crucifixion, at the burial, and arrived first at the empty tomb. Jesus's first post-resurrection words were to her: 'Mary.' She is the Apostle to the Apostles.",
    character: "Loyal across the moments that tested loyalty most — she was at the cross and at the tomb when the male disciples had scattered. Her love was not conditional on understanding; she arrived at the tomb not knowing what she would find. The transformation from demonized woman to resurrection witness is one of the most dramatic in the Gospels.",
    lesson: "Those who have received much grace are those most capable of extravagant devotion. Mary's loyalty to Jesus through crucifixion and death is the fruit of liberation — her love was proportional to her deliverance. The people who love much are those who understand how much they have been forgiven.",
    nt_connection: "First resurrection witness (John 20:11-18, Mark 16:9). Present at crucifixion (Matthew 27:56). Present at burial (Mark 15:47). Long wrongly identified with other women in the Gospels.",
  },
  {
    name: "Paul",
    era: "New Testament",
    color: "#DC2626",
    testament: "NT",
    verse: "Philippians 3:7-8",
    summary: "The persecutor turned apostle — a trained Pharisee who considered Jesus a failed messiah, was confronted by the risen Christ on the Damascus road, and became the greatest missionary and theologian in Christian history. Paul wrote 13 letters that form much of the NT and established churches across the Roman Empire.",
    character: "Intellectually brilliant, emotionally intense, willing to suffer enormously for his convictions. He describes being 'crushed beyond measure' and yet finding contentment in all circumstances. He wept over his churches. He confronted Peter publicly. He wrote hymns of love (1 Corinthians 13) from prison. He was simultaneously the most confident and the most self-deprecating person in the NT.",
    lesson: "The person most opposed to Christ can become his most effective servant. Paul's conversion is not primarily about dramatic experience but about radical reorientation — everything he had counted as gain he now counted as loss for the sake of knowing Christ (Philippians 3:7-8). Conversion is a revaluation of everything.",
    nt_connection: "Author of Romans through Philemon. Missionary journeys in Acts 13-28. Martyr in Rome under Nero. Founder of churches in Galatia, Corinth, Ephesus, Philippi, Thessalonica.",
  },
];

const FILTERS = ["All", "OT", "NT", "Patriarch", "Exodus", "Judges", "Divided Kingdom", "New Testament"];

export default function BibleCharactersPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState("Abraham");

  const filtered = CHARACTERS.filter(c =>
    filter === "All" || filter === c.testament || filter === c.era
  );

  const character = CHARACTERS.find(c => c.name === selected)!;
  const displayCharacter = filtered.find(c => c.name === selected) ? character : filtered[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👤</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Bible Characters</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The Bible tells God's story through real people — complex, failing, faithful human beings whose lives illuminate both the character of God and the possibilities of grace-shaped humanity.
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${filter === f ? GREEN : BORDER}`, background: filter === f ? `${GREEN}15` : "transparent", color: filter === f ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {f}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          <div style={{ width: 160, flexShrink: 0 }}>
            {filtered.map(c => (
              <button key={c.name} onClick={() => setSelected(c.name)}
                style={{ width: "100%", background: selected === c.name && filtered.find(f => f.name === selected) ? `${c.color}15` : "transparent", border: `1px solid ${selected === c.name && filtered.find(f => f.name === selected) ? c.color + "60" : BORDER}`, borderRadius: 10, padding: "10px 12px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                <div style={{ color: selected === c.name && filtered.find(f => f.name === selected) ? c.color : TEXT, fontWeight: 700, fontSize: 13 }}>{c.name}</div>
                <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{c.era}</div>
              </button>
            ))}
          </div>

          {displayCharacter && (
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${displayCharacter.color}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div>
                    <h2 style={{ color: displayCharacter.color, fontWeight: 900, fontSize: 24, margin: 0, marginBottom: 4 }}>{displayCharacter.name}</h2>
                    <div style={{ color: MUTED, fontSize: 13 }}>{displayCharacter.era}</div>
                  </div>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{displayCharacter.verse}</span>
                </div>

                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{displayCharacter.summary}</p>

                <div style={{ background: BG, borderRadius: 10, padding: 16, marginBottom: 14 }}>
                  <div style={{ color: displayCharacter.color, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CHARACTER</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{displayCharacter.character}</p>
                </div>

                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16, marginBottom: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>LESSON</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{displayCharacter.lesson}</p>
                </div>

                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>NT CONNECTION</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{displayCharacter.nt_connection}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
