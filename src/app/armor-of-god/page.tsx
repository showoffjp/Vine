"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SERIF = "var(--font-cormorant, Georgia, serif)";

type Piece = {
  id: string;
  name: string;
  greek: string;
  ref: string;
  color: string;
  icon: string;
  military: string;
  meaning: string;
  scripture: string;
  scriptureRef: string;
  application: string;
};

const PIECES: Piece[] = [
  {
    id: "belt",
    name: "The Belt of Truth",
    greek: "ἀλήθεια (alētheia)",
    ref: "Ephesians 6:14a",
    color: "#3B82F6",
    icon: "🟦",
    military: "The Roman legionary's belt (the cingulum or balteus) was the foundational piece of the armor. It was a wide leather band that gathered the loose tunic so the soldier could move freely, and it bore the loops and straps from which the scabbard, the breastplate fastenings, and supplies hung. To 'gird up the loins' was to tuck the long robe into the belt before running or fighting. Nothing else hung properly unless the belt was tight; an unbelted soldier was an unready soldier.",
    meaning: "Paul lists truth first because everything else in the Christian life depends on it. There are two layers here: objective truth — the gospel and the revealed Word of God — and subjective truthfulness, a life of integrity and sincerity with no concealment or hypocrisy. Satan is 'the father of lies' (John 8:44); his entire strategy is deception. The believer who is girded with truth has nothing for the deceiver to grip. Truth holds the rest of the armor in place: a man with a divided, double, or deceitful heart cannot stand.",
    scripture: "Stand therefore, having fastened on the belt of truth.",
    scriptureRef: "Ephesians 6:14",
    application: "Refuse small lies and self-deception. Saturate your mind in Scripture so that you recognize the enemy's distortions. Practice transparency before God and trusted believers — secrets and pretense are where the lie takes root. When tempted, name the lie behind the temptation and answer it with the truth of who God is and who you are in Christ.",
  },
  {
    id: "breastplate",
    name: "The Breastplate of Righteousness",
    greek: "δικαιοσύνη (dikaiosynē)",
    ref: "Ephesians 6:14b",
    color: "#EF4444",
    icon: "🛡️",
    military: "The breastplate (the lorica, often segmented bands of iron — the lorica segmentata) covered the soldier from neck to waist, guarding the heart, lungs, and vital organs. A blow that landed here was fatal; the breastplate turned a death-stroke into a glancing blow. It was heavy and required strength to bear, but no soldier entered battle without it.",
    meaning: "Righteousness guards the heart — the seat of the emotions, the will, and the conscience. There is a double sense again: the imputed righteousness of Christ, which is our standing before God and the answer to every accusation Satan brings (Romans 8:33–34), and the practiced righteousness of holy living, which gives the accuser no legitimate handle. Satan is 'the accuser of the brethren' (Revelation 12:10). When he assaults the conscience with guilt, the believer answers not with his own performance but with the perfect righteousness of Christ credited to him.",
    scripture: "...and having put on the breastplate of righteousness.",
    scriptureRef: "Ephesians 6:14",
    application: "When accused — by Satan, by others, or by your own conscience — rest your defense on Christ's righteousness, not your record. At the same time, refuse the sins that give the accuser ammunition; a clean conscience is a guarded heart. Confess quickly, walk in repentance, and let the gospel of justification silence condemnation.",
  },
  {
    id: "shoes",
    name: "The Shoes of the Gospel of Peace",
    greek: "εὐαγγέλιον τῆς εἰρήνης (euangelion tēs eirēnēs)",
    ref: "Ephesians 6:15",
    color: "#10B981",
    icon: "👞",
    military: "The Roman soldier wore the caligae — heavy, hobnailed sandals with thick soles studded with iron cleats. They gave traction and stability, allowing the soldier to hold his ground on uneven terrain and to advance without slipping. The Roman army's mobility — its ability to march vast distances and stand firm in formation — depended on these boots.",
    meaning: "The believer's footing is the gospel of peace. Because we have peace with God through Christ (Romans 5:1), we have a firm place to stand when the ground shakes. 'Readiness' (hetoimasia) carries the idea of a prepared foundation and also of preparedness to advance — to carry the good news. Isaiah 52:7 declares, 'How beautiful upon the mountains are the feet of him who brings good news.' The same gospel that gives us peace propels us forward into the world. Spiritual warfare is not only defensive standing; it is the advance of the kingdom of peace into enemy territory.",
    scripture: "...and, as shoes for your feet, having put on the readiness given by the gospel of peace.",
    scriptureRef: "Ephesians 6:15",
    application: "Ground your daily stability in your reconciliation with God — not in circumstances. When anxiety or instability comes, return to the settled fact of peace with God. Then advance: be ready to share the gospel, to bring reconciliation into conflicts, and to carry the message of peace wherever you go. A soldier who is sure of his footing can fight; a believer secure in the gospel can stand and advance.",
  },
  {
    id: "shield",
    name: "The Shield of Faith",
    greek: "πίστις (pistis)",
    ref: "Ephesians 6:16",
    color: "#F59E0B",
    icon: "🔰",
    military: "Paul names the scutum — the large rectangular Roman shield, about four feet tall, made of layered wood covered in leather. Before battle, soldiers soaked the leather in water so that incoming flaming arrows would be extinguished on impact rather than setting the shield ablaze. In formation, soldiers interlocked their shields into the testudo (tortoise) — a wall and roof of shields that advanced as one body, each man protected by his own shield and his neighbor's.",
    meaning: "Faith — active trust in God and his promises — is the shield that catches and quenches 'all the flaming darts of the evil one.' These darts are the fiery temptations, accusations, doubts, and lies the enemy launches to set the soul on fire. Faith does not merely block them; it extinguishes them, because faith holds fast to the character and promises of God against every contrary appearance. Note the corporate dimension: the shield wall works best together. Believers guard one another in faith.",
    scripture: "In all circumstances take up the shield of faith, with which you can extinguish all the flaming darts of the evil one.",
    scriptureRef: "Ephesians 6:16",
    application: "Meet each fiery dart — the sudden doubt, the seductive lie, the accusing thought — by lifting a specific promise of God against it. Faith is concrete: counter 'God has abandoned you' with 'I will never leave you nor forsake you' (Hebrews 13:5). Stand close to other believers, whose faith covers you when yours is weak. Faith grows by feeding on the Word (Romans 10:17), so a starved faith makes a small shield.",
  },
  {
    id: "helmet",
    name: "The Helmet of Salvation",
    greek: "σωτήριον (sōtērion)",
    ref: "Ephesians 6:17a",
    color: "#8B5CF6",
    icon: "⛑️",
    military: "The Roman helmet (the galea), forged of bronze or iron and lined with padding, protected the head — the command center of the body. A head wound was disabling or fatal, so the helmet was put on last and removed last. Its weight was considerable, but it guarded the one organ that, if struck, ended the fight instantly.",
    meaning: "Salvation guards the mind. Paul elsewhere calls it 'the hope of salvation' as a helmet (1 Thessalonians 5:8), pointing to its future dimension — the assurance of final deliverance. The mind is the battleground of doubt, despair, and discouragement; the enemy aims his blows at our hope. The certain hope of salvation — past justification, present sanctification, and future glorification — steadies the mind under assault. The believer thinks rightly because he knows how the story ends: in Christ's victory and his own resurrection.",
    scripture: "...and take the helmet of salvation.",
    scriptureRef: "Ephesians 6:17",
    application: "When despair attacks the mind, return to the certainty of your salvation — not your feelings about it but its objective ground in Christ's finished work. Rehearse the hope of glory. Renew your mind daily (Romans 12:2) so that your thinking is shaped by the gospel rather than by the enemy's discouragement. Guard what you allow into your mind; the helmet is for protection, not decoration.",
  },
  {
    id: "sword",
    name: "The Sword of the Spirit",
    greek: "μάχαιρα / ῥῆμα (machaira / rhēma)",
    ref: "Ephesians 6:17b",
    color: "#3a7d56",
    icon: "⚔️",
    military: "The machaira was the gladius — the short Roman stabbing sword, roughly two feet long, double-edged and razor-sharp. It was the weapon of close combat, wielded with precision rather than wide swinging strokes. The legionary's discipline with the gladius, thrusting in tight formation, made the Roman infantry nearly invincible. It was the soldier's single offensive weapon in this list.",
    meaning: "The sword is 'the word of God' — and Paul uses rhēma (a specific spoken word) rather than logos, suggesting the particular Scripture applied to the particular moment. This is the only offensive weapon in the armor, and it belongs to the Spirit: it is 'the sword of the Spirit,' wielded in the Spirit's power. The model is Jesus in the wilderness (Matthew 4), who met each temptation with 'It is written,' answering specific lies with specific Scripture. The Word is 'living and active, sharper than any two-edged sword' (Hebrews 4:12).",
    scripture: "...and the sword of the Spirit, which is the word of God.",
    scriptureRef: "Ephesians 6:17",
    application: "Memorize Scripture so that the sword is in your hand when the attack comes — you cannot wield a weapon you do not possess. Learn to apply the right verse to the right temptation, as Jesus did. Speak the Word aloud against lies and accusations. Study deeply so your handling of the sword is accurate (2 Timothy 2:15); a misused text is a blunted blade. Depend on the Spirit, who illuminates and empowers the Word.",
  },
];

type Tab = "overview" | "pieces" | "warfare" | "videos";

const WARFARE = [
  {
    title: "The Reality of the Enemy",
    ref: "Ephesians 6:12",
    body: "Paul is emphatic: 'We do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places.' Spiritual warfare is real but invisible. Our true conflict is not with the people who oppose us but with the unseen powers that animate evil. This reframes how the believer responds to opposition: the human adversary is not the ultimate enemy, which is why we can love enemies and refuse to fight with the world's weapons (2 Corinthians 10:3–4).",
  },
  {
    title: "Strength Is Not Our Own",
    ref: "Ephesians 6:10",
    body: "'Be strong in the Lord and in the strength of his might.' The command that frames the whole passage is not 'be strong' but 'be strong in the Lord.' The armor is not a self-improvement program; it is God's own armor, lent to the believer. In Isaiah 59:17, it is the LORD himself who 'put on righteousness as a breastplate, and a helmet of salvation on his head.' We wear our Commander's armor. Every piece is ultimately Christ — he is our truth, our righteousness, our peace, our salvation, the living Word.",
  },
  {
    title: "The Posture: Stand",
    ref: "Ephesians 6:11, 13, 14",
    body: "Four times Paul commands the believer to 'stand' or 'withstand.' The Christian's warfare is largely defensive: the ground has already been won by Christ, and our task is to hold it. We do not fight for victory but from victory. 'Stand' implies that the enemy will press hard — 'the evil day' will come — but the well-armored believer is called not to advance recklessly nor to retreat in fear, but to hold the line in the strength God supplies.",
  },
  {
    title: "Put On the Whole Armor",
    ref: "Ephesians 6:11, 13",
    body: "Twice Paul says 'the whole armor of God' (panoplia — the complete equipment of the heavily armed soldier). The pieces are not optional or interchangeable. A soldier with a breastplate but no shield, or a sword but no helmet, is exposed at exactly the point he neglected. The enemy probes for the gap. The Christian life is not lived well by emphasizing one virtue while ignoring others; spiritual readiness requires the whole armor, put on deliberately and daily.",
  },
  {
    title: "Prayer: The Atmosphere of the Battle",
    ref: "Ephesians 6:18",
    body: "After the six pieces, Paul adds what is not a seventh piece but the air in which all the armor is worn: 'praying at all times in the Spirit, with all prayer and supplication.' Notice the comprehensiveness — all times, all prayer, all perseverance, all the saints. Prayer is how the soldier stays in communion with the Commander, how the strength of the Lord is received, and how the battle is fought for others. The armor is worn in an atmosphere of constant, Spirit-empowered, watchful prayer. Without prayer, the armor is a costume; with it, the armor is power.",
  },
  {
    title: "The Pattern of Christ",
    ref: "Matthew 4:1–11",
    body: "Jesus' temptation in the wilderness is the master class in spiritual warfare. Led by the Spirit, fasting and weak in body, he met the tempter not with novel strategies but with Scripture — three times, 'It is written.' He stood on truth, refused the lie, trusted the Father, and wielded the Word. He did not negotiate, debate, or improvise. The believer's warfare is patterned after his: resist the devil, and he will flee (James 4:7); but resist standing in Christ, clothed in his armor, wielding his Word.",
  },
];

export default function ArmorOfGodPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_armor-of-god_tab", "overview");
  const [selected, setSelected] = usePersistedState("vine_armor-of-god_selected", "belt");

  const piece = PIECES.find((p) => p.id === selected)!;

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 60px" }}>
        <header style={{ textAlign: "center", padding: "48px 0 36px" }}>
          <span style={{ display: "inline-block", background: `${PURPLE}22`, color: PURPLE, border: `1px solid ${PURPLE}55`, padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", marginBottom: 18 }}>
            Ephesians 6:10–18
          </span>
          <h1 style={{ fontFamily: SERIF, fontSize: 52, fontWeight: 700, lineHeight: 1.05, margin: "0 0 14px" }}>
            The Armor of God
          </h1>
          <p style={{ color: MUTED, fontSize: 18, maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
            Six pieces of divine equipment for the believer&apos;s spiritual battle — plus the prayer that surrounds them all. Stand firm in the strength of the Lord against the schemes of the devil.
          </p>
          <blockquote style={{ fontFamily: SERIF, fontStyle: "italic", color: TEXT, fontSize: 22, maxWidth: 720, margin: "28px auto 0", lineHeight: 1.6 }}>
            &ldquo;Put on the whole armor of God, that you may be able to stand against the schemes of the devil.&rdquo;
            <span style={{ display: "block", fontFamily: "system-ui, sans-serif", fontStyle: "normal", color: PURPLE, fontSize: 13, fontWeight: 700, marginTop: 10 }}>— Ephesians 6:11</span>
          </blockquote>
        </header>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "overview" as const, label: "Overview", icon: "📖" },
            { id: "pieces" as const, label: "The Six Pieces", icon: "🛡️" },
            { id: "warfare" as const, label: "Spiritual Warfare", icon: "⚔️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map((t) => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginTop: 0, marginBottom: 12 }}>An Imprisoned Apostle and a Roman Guard</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                Paul wrote Ephesians from prison in Rome, likely chained to a Roman soldier (Ephesians 6:20; Acts 28:16). As he dictated the letter&apos;s closing exhortation, the equipment of his guard was before his eyes. He took the most recognizable image of Roman power — the fully armed legionary — and turned it into a portrait of the Christian prepared for spiritual conflict. The letter has moved from the heights of doctrine (chapters 1–3) through practical holiness (chapters 4–6) to this final reality: the believer who lives the gospel will be opposed by unseen powers, and must be equipped to stand.
              </p>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginTop: 0, marginBottom: 12 }}>God&apos;s Armor, Not Ours</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }}>
                It is called &ldquo;the armor of God&rdquo; (Greek: <span style={{ fontStyle: "italic" }}>panoplia tou theou</span>) not merely because God commands us to wear it, but because it is his own armor. In Isaiah 59:17 the LORD himself &ldquo;put on righteousness as a breastplate, and a helmet of salvation on his head.&rdquo; The Messiah of Isaiah 11:5 wears &ldquo;righteousness&rdquo; and &ldquo;faithfulness&rdquo; as a belt. The armor, then, is ultimately Christ himself: he is our truth, our righteousness, our peace, our salvation, and the living Word. To &ldquo;put on the armor&rdquo; is to &ldquo;put on the Lord Jesus Christ&rdquo; (Romans 13:14).
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                This is why the passage opens not with a call to effort but to dependence: &ldquo;Be strong in the Lord and in the strength of his might&rdquo; (6:10). The armor is a gift to be received and worn, not a virtue to be manufactured.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
              {PIECES.map((p) => (
                <button key={p.id} onClick={() => { setSelected(p.id); setActiveTab("pieces"); }}
                  style={{ textAlign: "left", background: BG, border: `1px solid ${p.color}40`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                  <div style={{ fontSize: 26, marginBottom: 8 }}>{p.icon}</div>
                  <div style={{ color: p.color, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ color: MUTED, fontSize: 12 }}>{p.ref}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === "pieces" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ width: 230, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {PIECES.map((p) => (
                <button key={p.id} onClick={() => setSelected(p.id)}
                  style={{ width: "100%", background: selected === p.id ? `${p.color}18` : "transparent", border: `1px solid ${selected === p.id ? p.color + "70" : BORDER}`, borderRadius: 10, padding: "11px 13px", cursor: "pointer", textAlign: "left", display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ fontSize: 18 }}>{p.icon}</span>
                  <span style={{ color: selected === p.id ? p.color : MUTED, fontWeight: 700, fontSize: 13, lineHeight: 1.3 }}>{p.name}</span>
                </button>
              ))}
            </div>

            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${piece.color}35`, borderRadius: 16, padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: 34 }}>{piece.icon}</span>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{piece.ref}</span>
                </div>
                <h2 style={{ color: piece.color, fontWeight: 900, fontSize: 26, margin: "0 0 4px" }}>{piece.name}</h2>
                <p style={{ color: MUTED, fontSize: 14, fontStyle: "italic", margin: "0 0 22px", fontFamily: SERIF }}>{piece.greek}</p>

                <blockquote style={{ margin: "0 0 22px", padding: "14px 18px", borderLeft: `3px solid ${piece.color}`, background: `${piece.color}0C`, borderRadius: "0 8px 8px 0" }}>
                  <p style={{ color: TEXT, fontSize: 17, lineHeight: 1.6, margin: 0, fontStyle: "italic", fontFamily: SERIF }}>&ldquo;{piece.scripture}&rdquo;</p>
                  <span style={{ color: piece.color, fontSize: 12, fontWeight: 700, display: "block", marginTop: 8 }}>{piece.scriptureRef}</span>
                </blockquote>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 12, marginBottom: 8, letterSpacing: 0.5 }}>MILITARY BACKGROUND</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{piece.military}</p>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8, letterSpacing: 0.5 }}>SPIRITUAL MEANING</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{piece.meaning}</p>
                </div>

                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8, letterSpacing: 0.5 }}>PRACTICAL APPLICATION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{piece.application}</p>
                </div>
              </div>

              <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 14, padding: 24, marginTop: 18 }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>🙏</div>
                <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 6px" }}>And Then — Prayer</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                  After all six pieces, Paul adds prayer (6:18) — not a seventh piece of armor but the atmosphere in which all the armor is worn. &ldquo;Praying at all times in the Spirit, with all prayer and supplication. To that end, keep alert with all perseverance, making supplication for all the saints.&rdquo; The fully armed soldier still depends on constant communion with his Commander.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "warfare" && (
          <div>
            {WARFARE.map((w, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{w.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{w.ref}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: 0 }}>{w.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginTop: 0, marginBottom: 8 }}>Teaching Videos</h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 22, lineHeight: 1.7 }}>
              Sermons and teachings on the armor of God and spiritual warfare from trusted pastors and teachers.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { videoId: "yp3eDg2_Gj4", title: "The Armor of God", channel: "Priscilla Shirer", description: "Priscilla Shirer teaches on the believer's spiritual armor and the strategy of standing firm against the enemy's schemes — the heart of her Armor of God study." },
                { videoId: "1cUYIfHQDz8", title: "Spiritual Warfare and the Armor of God", channel: "Tony Evans", description: "Tony Evans unpacks Ephesians 6, explaining each piece of armor and how the believer fights from victory rather than for it." },
                { videoId: "B7C7Vq6Vz0c", title: "Stand Firm — Putting On the Whole Armor", channel: "John Piper / Desiring God", description: "John Piper exposits the call to be strong in the Lord and to take up the whole armor of God for the evil day." },
                { videoId: "9j8u2KQYsZk", title: "The Sword of the Spirit and the Power of Prayer", channel: "Bible Teaching", description: "A study of the only offensive weapon in the armor — the Word of God — and the all-surrounding ministry of prayer in Ephesians 6:17–18." },
              ].map((v) => (
                <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allowFullScreen
                  />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, margin: "0 0 4px" }}>{v.title}</h4>
                    <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, margin: "0 0 6px" }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
