"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "angels", label: "Angels" },
  { id: "types", label: "Types & Orders" },
  { id: "satan", label: "Satan" },
  { id: "demons", label: "The Demonic Realm" },
  { id: "warfare", label: "Spiritual Warfare" },
  { id: "balance", label: "Sober Balance" },
  { id: "journal", label: "Reflection" },
  { id: "videos", label: "Videos" },
];

const ANGELS_ITEMS = [
  { id: "a1", title: "Angels Are Real, Personal Beings", ref: "Hebrews 1:14; Psalm 103:20",
    body: "Angels are not metaphors, personifications of natural forces, or symbols for good influences. They are personal beings — creatures with intelligence (1 Peter 1:12), will (Jude 6 — fallen angels who 'did not keep their positions'), and emotion (Luke 15:10 — 'joy in the presence of the angels'). They are finite (unlike God), created beings (Nehemiah 9:6; Psalm 148:2-5). Hebrews 1:14 defines their primary function: 'Are not all angels ministering spirits sent to serve those who will inherit salvation?'" },
  { id: "a2", title: "What Angels Are Not", ref: "Matthew 22:30; Revelation 22:8-9",
    body: "Popular culture confuses several things with angels: (1) Humans do NOT become angels after death — angels and humans are different orders of being (Matthew 22:30); (2) The idea of a 'guardian angel assigned at birth' is folk theology with no clear scriptural basis, though Psalm 91:11 and Matthew 18:10 hint at protective angelic ministry; (3) Angels are not objects of prayer or worship — the angel in Revelation 22:9 rebukes John for bowing: 'Do not do it! I am a fellow servant.' Angels deflect glory; they do not receive it." },
  { id: "a3", title: "The Activity of Angels", ref: "Hebrews 1:14; Revelation 8:2; Luke 1:26",
    body: "Biblical angels: (1) Worship God (Revelation 5:11-12; Isaiah 6:2-3); (2) Carry out God's judgments (Revelation 8-9; 2 Samuel 24:16); (3) Bring divine messages (Luke 1:26 — Gabriel to Mary; Matthew 1:20 — to Joseph); (4) Protect and deliver God's people (Daniel 6:22 — Daniel in the lions' den; Acts 12:7 — Peter freed from prison); (5) Minister to Christ (Matthew 4:11 — after temptation; Luke 22:43 — in Gethsemane); (6) Escort believers at death (Luke 16:22 — angels carry Lazarus to Abraham's side)." },
  { id: "a4", title: "Angels and the Christian Today", ref: "Psalm 91:11-12; Daniel 10:13",
    body: "Do angels minister to Christians today? Hebrews 1:14 is present tense — they are 'ministering spirits sent to serve.' We cannot map their activity with precision, but several things are clear: (1) Angelic protection and ministry are part of God's providential care for his people; (2) We do not see them most of the time — they work in hiddenness; (3) We should not seek angelic encounters or focus our spiritual attention on angels — but neither should we dismiss the reality of their ministry. The proper response is gratitude to God who sends them, not fascination with them." },
];

const TYPES_DATA = [
  { type: "Seraphim", ref: "Isaiah 6:2-3", color: GOLD, desc: "Six-winged beings who stand in the immediate presence of God, calling 'Holy, holy, holy.' Their primary function appears to be perpetual worship. They appear only in Isaiah's throne-room vision. Their name may mean 'burning ones.'" },
  { type: "Cherubim", ref: "Genesis 3:24; Ezekiel 1; 10", color: PURPLE, desc: "Majestic beings closely associated with the divine presence and throne. They guard the Garden of Eden after the Fall (Genesis 3:24), are depicted on the Ark of the Covenant's mercy seat (Exodus 25:18-22), and feature prominently in Ezekiel's visions (Ezekiel 1; 10). The imagery is elaborate: four faces (lion, ox, human, eagle), four wings, and wheels within wheels." },
  { type: "Archangels", ref: "1 Thessalonians 4:16; Jude 9", color: BLUE, desc: "Named archangels in Scripture: Michael and Gabriel. Michael (Daniel 10:13 — 'one of the chief princes'; Jude 9 — 'the archangel'; Revelation 12:7 — leads the angelic host in battle) and Gabriel (Daniel 8:16; 9:21; Luke 1:19, 26 — the announcing angel). Raphael appears in the apocryphal book of Tobit but not canonical Scripture." },
  { type: "Principalities/Powers", ref: "Ephesians 6:12; Colossians 1:16", color: TEAL, desc: "Paul's language for ranks of spiritual beings — both good and fallen (Ephesians 6:12 distinguishes the fallen; Colossians 1:16 includes all created 'thrones, powers, rulers, authorities'). These terms likely describe organizational hierarchies in the angelic realm. Their exact nature and structure are not mapped out in Scripture." },
  { type: "The Angel of the LORD", ref: "Genesis 16:13; Exodus 3:2-6; Judges 13:21-22", color: GREEN, desc: "A distinctive figure in the OT who is sometimes identified with God himself (Genesis 16:13 — Hagar says 'You are the God who sees me'; Judges 13:22 — 'We are doomed to die! We have seen God!'). Most evangelical scholars see the Angel of the LORD as a pre-incarnate appearance of the Son of God (a theophany). He does not appear after the incarnation." },
];

const SATAN_ITEMS = [
  { id: "s1", title: "Satan's Origin: A Fallen Creature", ref: "Isaiah 14:12-15; Ezekiel 28:12-17",
    body: "Satan is not an eternal counterpart to God — he is a fallen creature. Two OT passages are often interpreted as describing Satan's original status and fall: Isaiah 14:12-15 (the taunt against the king of Babylon: 'How you have fallen from heaven, morning star, son of the dawn!') and Ezekiel 28:12-17 (against the king of Tyre: 'You were the model of perfection... in Eden... you were anointed as a guardian cherub... blameless in your ways from the day you were created till wickedness was found in you'). Both texts have an earthly referent but seem to point beyond it to a supernatural being whose pride led to catastrophic fall." },
  { id: "s2", title: "Names and Titles of Satan", ref: "John 8:44; Revelation 12:9; 2 Corinthians 4:4",
    body: "Satan ('adversary' or 'accuser' in Hebrew) is the primary biblical name. Other titles: (1) the devil (diabolos — 'slanderer'); (2) Lucifer ('light-bearer,' Latin for the Hebrew 'morning star' in Isaiah 14:12); (3) the dragon (Revelation 12:9); (4) the ancient serpent (Revelation 12:9; cf. Genesis 3); (5) the god of this age (2 Corinthians 4:4); (6) the ruler of this world (John 12:31); (7) the prince of the power of the air (Ephesians 2:2); (8) the father of lies (John 8:44); (9) the accuser (Revelation 12:10)." },
  { id: "s3", title: "Satan's Activity", ref: "1 Peter 5:8; Job 1-2; Zechariah 3:1",
    body: "Satan's activity in Scripture includes: (1) Temptation — he tempted Jesus (Matthew 4:1-11), Adam and Eve (Genesis 3), and tempts believers (1 Thessalonians 3:5); (2) Accusation — Zechariah 3:1 shows Satan standing as accuser before God; Revelation 12:10 calls him 'the accuser of our brothers and sisters'; (3) Deception — John 8:44 — 'he is a liar and the father of lies'; (4) Opposition to God's purposes — in Job 1-2 he appears before God, seeking to undermine Job's faith; (5) Affliction — 2 Corinthians 12:7 — Paul's 'thorn in the flesh,' described as 'a messenger of Satan.'" },
  { id: "s4", title: "Satan's Defeat and Destiny", ref: "John 12:31; Revelation 20:10; 1 John 3:8",
    body: "The cross is the decisive defeat of Satan. Jesus says 'Now is the time for judgment on this world; now the prince of this world will be driven out' (John 12:31). 1 John 3:8 — 'The reason the Son of God appeared was to destroy the devil's work.' The pattern in Revelation: Satan is bound during the present age in some sense (Revelation 20:1-3 — 'to keep him from deceiving the nations'), then released for a final assault, then cast into the lake of fire forever (Revelation 20:10). His ultimate destination is eternal punishment, not ruling hell." },
];

const DEMONS_DATA = [
  { color: RED, title: "Demons: Fallen Angels", body: "Demons appear to be fallen angels — spiritual beings who joined Satan's rebellion and now form his kingdom. Revelation 12:7-9 describes Satan's angels cast to earth. Jesus casts out demons (Matthew 8:16; 12:22-28), demonstrating his authority over them. They recognize Jesus as the Son of God (Matthew 8:29 — 'Have you come here to torture us before the appointed time?') and fear judgment." },
  { color: PURPLE, title: "Possession vs. Oppression", body: "Christian theology distinguishes between demonic possession (or 'demonization' — a demon exercising strong control over a person) and demonic oppression/harassment (external attack without internal control). Most theologians hold that a genuine believer indwelt by the Holy Spirit cannot be 'possessed' in the full sense — but believers can be oppressed, harassed, and attacked. The NT cases of possession occur among the unbelieving, not among disciples of Jesus." },
  { color: GOLD, title: "Demonic Activity Today", body: "The NT suggests demonic activity is real and ongoing. Paul warns against 'doctrines of demons' (1 Timothy 4:1), 'schemes of the devil' (Ephesians 6:11), and the 'flaming arrows of the evil one' (Ephesians 6:16). The battlefield appears to be primarily spiritual and cognitive — deception, lies about God, spiritual strongholds in the mind (2 Corinthians 10:4-5). While dramatic cases of possession may be less common in contexts saturated with the gospel, spiritual warfare is normative Christian experience." },
  { color: TEAL, title: "Discernment and False Spirits", body: "1 John 4:1 commands: 'Test the spirits to see whether they are from God.' 1 Corinthians 12:10 lists 'distinguishing between spirits' as a spiritual gift. Not every spiritual manifestation is from God. The test: 'Every spirit that acknowledges that Jesus Christ has come in the flesh is from God, but every spirit that does not acknowledge Jesus is not from God' (1 John 4:2-3). Spiritual discernment requires both doctrinal soundness and Spirit-given sensitivity." },
];

const WARFARE_POINTS = [
  { id: "w1", title: "The Armor of God (Ephesians 6:10-18)", ref: "Ephesians 6:10-18",
    body: "Paul's most complete teaching on spiritual warfare. The armor: (1) Belt of truth — grounding in objective truth counters the father of lies; (2) Breastplate of righteousness — the imputed righteousness of Christ guards the heart from accusation; (3) Shoes of the gospel of peace — firm footing in the peace the gospel brings; (4) Shield of faith — trust in God 'extinguishes all the flaming arrows of the evil one'; (5) Helmet of salvation — protection of the mind with the assurance of salvation; (6) Sword of the Spirit — the word of God, the only offensive weapon listed. The whole armor is received through prayerful dependence on God (v. 18)." },
  { id: "w2", title: "The Mind as Battlefield", ref: "2 Corinthians 10:3-5; Romans 12:2",
    body: "2 Corinthians 10:4-5: 'The weapons we fight with are not the weapons of the world... we demolish arguments and every pretension that sets itself up against the knowledge of God, and we take captive every thought to make it obedient to Christ.' The primary location of spiritual warfare in Paul is the mind — thoughts, imaginations, arguments, and ideologies that are contrary to the knowledge of God. The answer is not dramatic exorcism but the renewing of the mind (Romans 12:2) through the word, prayer, and Spirit-filled community." },
  { id: "w3", title: "James 4:7 — Resist the Devil", ref: "James 4:7; 1 Peter 5:8-9",
    body: "'Submit yourselves, then, to God. Resist the devil, and he will flee from you' (James 4:7). Two parts: (1) The primary movement is toward God — submission, humility, drawing near (v. 8); (2) Then resistance of the devil. The order matters: trying to resist the devil without being submitted to God is spiritually dangerous presumption. 1 Peter 5:9: 'Resist him, standing firm in the faith, because you know that the family of believers throughout the world is undergoing the same kind of sufferings.'" },
  { id: "w4", title: "Deliverance Ministry", ref: "Mark 16:17; Luke 9:1; Acts 16:16-18",
    body: "Jesus gave his disciples authority over demons (Luke 9:1; 10:17-19). Paul cast out a spirit of divination (Acts 16:18). The NT authorizes the church to engage in ministry that confronts demonic power. The evangelical mainstream is cautious about overly routinizing deliverance and about seeing demons behind every difficulty (the 'a demon made me do it' error). At the same time, dismissing demonic influence as merely psychological is equally unbiblical. The Christus Victor tradition emphasizes that the gospel announcement — Jesus is Lord — is the primary weapon of deliverance." },
];

const BALANCE_POINTS = [
  { color: GREEN, title: "Neither Obsession nor Dismissal", body: "C.S. Lewis in The Screwtape Letters: 'There are two equal and opposite errors into which our race can fall about the devils. One is to disbelieve in their existence. The other is to believe, and to feel an excessive and unhealthy interest in them. They themselves are equally pleased by both errors.' The Christian posture: take spiritual warfare seriously as the NT teaches while keeping attention primarily on Christ, not on the demonic." },
  { color: BLUE, title: "Don't Give the Devil Too Much Credit", body: "Not every trial, temptation, illness, or sinful desire is demonic. The world (fallen creation), the flesh (fallen human nature), and the devil are all sources of temptation and suffering — and not all suffering is spiritual warfare in the dramatic sense. Many Christians overattribute to Satan what is better explained by sin in the flesh or ordinary human brokenness. Spiritual maturity includes accurate diagnosis, not inflating the demonic's role." },
  { color: GOLD, title: "The Greater One Is in You", body: "'You, dear children, are from God and have overcome them, because the one who is in you is greater than the one who is in the world' (1 John 4:4). The fundamental posture of spiritual warfare is confidence, not anxiety. Christ has already decisively defeated Satan at the cross. The armor is not defensive cowering but Spirit-enabled standing. The Christian fights from victory, not toward it. Fear of demons is the wrong orientation — reverence for God and trust in Christ is the right one." },
  { color: TEAL, title: "Ordinary Disciplines as Warfare", body: "The most powerful spiritual warfare is not dramatic confrontation but faithful ordinary practice: reading Scripture, praying daily, participating in Christian community, practicing confession, guarding the mind, walking in obedience. These close the doors that demonic influence enters through. Many 'spiritual warfare' problems dissolve under sustained Scriptural engagement, prayer, community accountability, and the slow work of sanctification. The extraordinary (deliverance ministry) presupposes the ordinary." },
];

const VIDEOS = [
  { videoId: "7Mg1RG1TBn8", title: "Angels, Demons, and Spiritual Warfare — Tim Keller" },
  { videoId: "uOKGYTwh6ZU", title: "What Does the Bible Teach About Angels? — R.C. Sproul" },
  { videoId: "2IhEBXiVxCo", title: "Who Is Satan? — John Piper" },
  { videoId: "rC2NvimKjAQ", title: "Spiritual Warfare in Ephesians 6 — D.A. Carson" },
  { videoId: "HQBi_-5N_tU", title: "The Screwtape Letters — C.S. Lewis Discussion" },
];

export default function AngelologyGuide() {
  const [tab, setTab] = useLocalStorage("vine_angel_tab", "overview");
  const [angelOpen, setAngelOpen] = useLocalStorage("vine_angel_angels", "");
  const [satanOpen, setSatanOpen] = useLocalStorage("vine_angel_satan", "");
  const [warfareOpen, setWarfareOpen] = useLocalStorage("vine_angel_warfare", "");
  const [journal, setJournal] = useLocalStorage("vine_angel_journal", "");

  const card = (body: React.ReactNode) => (
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" }}>{body}</div>
  );

  const accordion = (
    items: { id: string; title: string; ref?: string; body: string }[],
    openKey: string,
    setOpen: (v: string) => void,
    accentColor = BLUE
  ) => items.map((it) => (
    <div key={it.id} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 8, overflow: "hidden" }}>
      <button
        onClick={() => setOpen(openKey === it.id ? "" : it.id)}
        style={{ width: "100%", textAlign: "left", padding: "1rem 1.25rem", background: openKey === it.id ? `rgba(59,130,246,0.06)` : "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <div>
          <span style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem" }}>{it.title}</span>
          {it.ref && <span style={{ color: MUTED, fontSize: "0.78rem", marginLeft: 12 }}>{it.ref}</span>}
        </div>
        <span style={{ color: MUTED, fontSize: "1.1rem" }}>{openKey === it.id ? "−" : "+"}</span>
      </button>
      {openKey === it.id && (
        <div style={{ padding: "0 1.25rem 1.25rem", borderTop: `1px solid ${BORDER}` }}>
          <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, marginTop: "1rem" }}>{it.body}</p>
        </div>
      )}
    </div>
  ));

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: "rgba(59,130,246,0.12)", border: `1px solid rgba(59,130,246,0.25)`, borderRadius: 20, padding: "0.35rem 1rem", fontSize: "0.78rem", color: BLUE, fontWeight: 600, marginBottom: "1rem" }}>
            SYSTEMATIC THEOLOGY · ANGELOLOGY
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Angels, Demons, and Spiritual Warfare
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
            The Bible takes the invisible spiritual realm seriously — angelic beings who worship and serve, fallen angels who oppose God's purposes, and the ongoing warfare of the Christian life. A biblical framework for the supernatural.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1.1rem", borderRadius: 20, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", border: `1px solid ${tab === t.id ? BLUE : BORDER}`, background: tab === t.id ? "rgba(59,130,246,0.12)" : "transparent", color: tab === t.id ? BLUE : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ background: "rgba(59,130,246,0.07)", border: `1px solid rgba(59,130,246,0.2)`, borderRadius: 16, padding: "1.5rem", marginBottom: "2rem" }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.75rem" }}>The Invisible Realm</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                Scripture reveals a rich invisible world alongside the visible one: angelic beings of different kinds, a great enemy who opposes God's work, a cosmic battle that has been decisively won but is not yet over, and the Christian's calling to stand firm in spiritual warfare. Angelology is not a peripheral curiosity — it is woven into the narrative of creation, fall, redemption, and new creation.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                C.S. Lewis: <em>"There are two equal and opposite errors into which our race can fall about the devils. One is to disbelieve in their existence. The other is to believe, and to feel an excessive and unhealthy interest in them. They themselves are equally pleased by both errors."</em>
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {[{ color: BLUE, icon: "✨", title: "Angels Are Real", body: "Personal created beings, not symbols. They worship, minister, deliver messages, and serve God's people." },
                { color: RED, icon: "🐉", title: "Satan Is Real", body: "A fallen creature — not God's equal, but a real adversary who deceives, accuses, and attacks." },
                { color: GOLD, icon: "⚔️", title: "The War Is Won", body: "Christ's death and resurrection decisively defeated Satan. The church fights from victory, not toward it." },
                { color: GREEN, icon: "🛡️", title: "We Have Armor", body: "The armor of God (Ephesians 6) is real, effective, and required for Christian life in this age." }
              ].map((g, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{g.icon}</div>
                  <div style={{ fontWeight: 800, color: g.color, marginBottom: "0.4rem" }}>{g.title}</div>
                  <p style={{ color: MUTED, fontSize: "0.84rem", lineHeight: 1.6 }}>{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "angels" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Nature and Ministry of Angels</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>What are angels? What do they do? Scripture provides more information about angelic beings than many Christians realize — enough to build a careful theology while acknowledging significant mystery.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(ANGELS_ITEMS, angelOpen, setAngelOpen)}</div>
          </div>
        )}

        {tab === "types" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Types and Orders of Angelic Beings</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Scripture mentions several distinct categories of heavenly beings — not all of which are angels in the generic sense. The organizational structure of the heavenly realm remains largely mysterious to us.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {TYPES_DATA.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${t.color}` }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div>
                      <h3 style={{ fontWeight: 800, color: t.color, fontSize: "1rem", marginBottom: "0.25rem" }}>{t.type}</h3>
                      <span style={{ color: BLUE, fontSize: "0.78rem" }}>{t.ref}</span>
                    </div>
                  </div>
                  <p style={{ color: MUTED, fontSize: "0.86rem", lineHeight: 1.65, marginTop: "0.75rem" }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "satan" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Satan: The Adversary</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Satan is not God's equal — he is a created being who fell through pride and now opposes God's purposes. Understanding who he is keeps us neither dismissive nor obsessed.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(SATAN_ITEMS, satanOpen, setSatanOpen)}</div>
          </div>
        )}

        {tab === "demons" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Demonic Realm</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Demons are real spiritual beings who have joined Satan's rebellion. The NT takes them seriously without providing a complete taxonomy. The key question for believers: how does the demonic realm interact with human life?</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {DEMONS_DATA.map((d, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${d.color}` }}>
                  <h3 style={{ fontWeight: 800, color: d.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{d.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "warfare" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Spiritual Warfare</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Spiritual warfare is not optional for the Christian — it is the normal condition of life in 'this present evil age' (Galatians 1:4). Paul's Ephesian letter gives the most complete practical teaching on how to engage it.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(WARFARE_POINTS, warfareOpen, setWarfareOpen)}</div>
          </div>
        )}

        {tab === "balance" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Maintaining Sober Balance</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The greatest risk in angelology is imbalance — either dismissing the reality of the invisible realm or becoming fixated on it. Scripture calls us to sobriety and watchfulness, not anxiety.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {BALANCE_POINTS.map((b, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${b.color}` }}>
                  <h3 style={{ fontWeight: 800, color: b.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{b.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>Where do you tend toward imbalance — dismissing the spiritual realm or being overly focused on it? How does the armor of God speak to your current season? Where do you need to resist the devil by drawing near to God?</p>
              <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", color: TEXT, fontSize: "0.9rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
              {journal && <p style={{ color: GREEN, fontSize: "0.78rem", marginTop: "0.5rem" }}>Saved automatically.</p>}
            </div>)}
          </div>
        )}

        {tab === "videos" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Video Teaching</h2><p style={{ color: MUTED, fontSize: "0.88rem" }}>Recommended videos on angels, Satan, demons, and spiritual warfare.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.9rem" }}>{v.title}</p>
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
