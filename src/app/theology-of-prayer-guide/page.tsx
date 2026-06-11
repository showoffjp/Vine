"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";


const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56",
  PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3", GOLD = "#D97706",
  TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = ["Overview","Lord's Prayer","Why Prayer Works","Praying the Psalms","Intercession","Unanswered Prayer","Contemplative Prayer","Journal","Videos"];

const LORDS_PRAYER_ITEMS = [
  { q: "Our Father — The Foundation of Address", a: "'Our Father in heaven' establishes the entire theology of prayer: we approach God as children address a father — with the intimacy of relationship, not the distance of formal petition. 'Our' (not 'my') grounds all prayer in community: even private prayer is an act within the communion of the church. 'In heaven' preserves transcendence — this Father is not domesticated; he is holy, sovereign, beyond. The address balances intimacy and reverence." },
  { q: "Hallowed Be Your Name — The First Priority", a: "'Hallowed be your name.' The first petition of the prayer is not about human need but about God's name — his reputation, his honor, his character being treated as holy throughout the world. Karl Barth: the Lord's Prayer establishes that God's concerns come first. We pray for our own needs from within a larger orientation: the sanctification of God's name is the frame in which all our requests are placed. Proper prayer begins with God, not ourselves." },
  { q: "Your Kingdom Come — The Eschatological Petition", a: "'Your kingdom come, your will be done, on earth as in heaven.' The kingdom petition is a request for the future to invade the present — for the realities of heaven (perfect justice, perfect love, perfect peace) to become realities on earth. N.T. Wright: every time we pray this prayer, we are asking God to act in the world, and implicitly committing ourselves to be agents of that action. We cannot pray for God's kingdom and then disengage from its concrete manifestation in the world." },
  { q: "Daily Bread — The Middle Petition", a: "'Give us today our daily bread.' The centerpiece petition is shockingly mundane: food for today. The Greek epiousios (translated 'daily' or 'for today' or 'for tomorrow') is extremely rare — possibly a coined word. The petition grounds prayer in the material, embodied, daily reality of life: God is interested in whether we eat. It echoes the manna story: enough for today, trust for tomorrow. It is the anti-anxiety prayer: release worry about the future by receiving provision for today." },
  { q: "Forgiveness and Forgiving (6:12)", a: "'Forgive us our debts, as we also have forgiven our debtors.' The only petition in the Lord's Prayer with a condition attached: our reception of forgiveness is connected to our extension of it. Jesus reinforces this immediately after (6:14–15): 'if you do not forgive others their sins, your Father will not forgive your sins.' This is not a threat but a description: the person who genuinely understands and receives God's forgiveness cannot refuse to extend it. Unforgiveness is a sign that forgiveness has not been received." },
  { q: "Deliver Us from the Evil One", a: "'Lead us not into temptation, but deliver us from evil' (or 'from the evil one'). The final petition acknowledges human vulnerability: we are susceptible to temptation and to the malice of spiritual opposition. The petition is a request for divine protection against both internal temptation (our own desires) and external attack (the Accuser). It ends the prayer where James 4:7 ends its exhortation: resist the devil, and he will flee." },
];

const WHY_PRAYER = [
  { q: "Does Prayer Change God's Mind?", a: "The question of whether prayer influences God is one of Christian theology's most difficult. If God is sovereign and omniscient, can human prayer change what he does? At least two answers: (1) Compatibilist — God ordains both the outcome and the prayers that bring it about; prayer is one of the means God uses to accomplish his purposes. (2) Open Theist — God genuinely responds to prayer in ways that would not have happened without it; creation is an open system with genuine divine-human collaboration. Both positions affirm: prayer matters; God hears and responds." },
  { q: "Why Jesus Prayed", a: "If anyone had no need to pray, it would be the incarnate Son of God. Yet Jesus prayed constantly: before his baptism, before choosing the Twelve, at the Transfiguration, in Gethsemane, from the cross. Luke notes Jesus often withdrew to pray. He prayed all night before major decisions. His prayer life was not compensating for lack of knowledge or power — it was the expression of a perfect Son's continuous communion with the Father. Prayer is not weakness; it is the form that divine sonship takes in history." },
  { q: "The Spirit's Intercession (Romans 8:26–27)", a: "'In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. And he who searches our hearts knows the mind of the Spirit, because the Spirit intercedes for God's people in accordance with the will of God.' The Spirit prays for us when we cannot pray — when exhaustion, grief, confusion, or darkness makes articulate prayer impossible. The prayer that matters most is the one the Spirit prays." },
  { q: "Prayer as Participation", a: "Eugene Peterson: 'Prayer is not getting man's will done in heaven; it is getting God's will done on earth.' But it is more than passive receptivity. Prayer is participation in the divine conversation — God inviting humans to be co-participants in his governance of creation. When we intercede for others, we are doing what the Bible understands as real work: spiritual labor with concrete effects. Paul consistently asks for prayer (Rom 15:30; Eph 6:18–20), treating it as essential partnership in gospel ministry." },
];

const PSALMS_CARDS = [
  { icon: "📖", color: PURPLE, title: "The Psalter as Prayer Book", text: "The 150 Psalms are the prayer book of Israel and the church. Every human emotion is present: joy, grief, anger, confusion, trust, despair, ecstasy. Dietrich Bonhoeffer argued that we should pray the Psalms as Jesus prayed them — the Psalms are the prayer book of Jesus, and when we pray them, we join Christ's own prayer. The Psalms teach us the vocabulary of prayer: they expand our emotional range and give us words for experiences we might not otherwise bring to God." },
  { icon: "😭", color: RED, title: "Permission to Lament (Ps 22, 88)", text: "The lament psalms give permission to voice anguish before God. Psalm 88 ends in darkness with no resolution. Psalm 22 begins in desolation and moves to praise — Jesus prayed it from the cross. The Psalter's inclusion of unresolved lament is a theological statement: God can handle our raw, honest pain. Prayer that includes only praise and thanksgiving is not more spiritual — it is less honest. The God who accepts Job's protest accepts the psalmist's complaint." },
  { icon: "🎉", color: GREEN, title: "The Praise Psalms", text: "Psalms 146–150 are the Great Hallel — a sustained climactic burst of praise. 'Let everything that has breath praise the Lord' (150:6). The Psalter ends with praise, not because suffering has been explained but because God has been encountered. The movement from lament to praise within individual psalms (and across the Psalter) models the arc of prayer: honest complaint held in the context of God's trustworthiness leads ultimately to praise." },
  { icon: "⚔️", color: GOLD, title: "The Imprecatory Psalms", text: "Psalms that call down divine judgment on enemies (Ps 69, 109, 137) disturb readers. They are not models for personal revenge but honest expressions of the desire for justice, laid before God rather than acted upon. They teach: (1) we can bring our anger to God rather than suppressing or acting on it; (2) we leave vengeance in God's hands (Rom 12:19); (3) the church that reads them prays them as Jesus — who experienced the hatred they describe — is also the one who prays 'Father, forgive them.'" },
];

const INTERCESSION_ITEMS = [
  { q: "What Is Intercession?", a: "Intercession is prayer on behalf of others — standing before God for another person, carrying their need into God's presence. The Hebrew word for intercessor is paga (to touch, to strike, to meet) — it suggests an active encounter. Abraham's intercession for Sodom (Gen 18:22–33) is the model: sustained, specific, and rooted in God's character. Moses's intercession for Israel after the golden calf — 'if you will not forgive their sin, blot me out of your book' (Ex 32:32) — models the sacrificial intercessor." },
  { q: "Praying for All People (1 Tim 2:1–4)", a: "'I urge, then, first of all, that petitions, prayers, intercession and thanksgiving be made for all people — for kings and all those in authority, that we may live peaceful and quiet lives in all godliness and holiness. This is good, and pleases God our Savior, who wants all people to be saved and to come to a knowledge of the truth.' The scope of intercession is universal — including political leaders regardless of their relationship to God. The motive: God desires all people to be saved." },
  { q: "The High Priestly Prayer (John 17)", a: "Jesus's longest recorded prayer is for his disciples and for all future believers: 'My prayer is not for them alone. I pray also for those who will believe in me through their message, that all of them may be one, Father, just as you are in me and I am in you' (17:20–21). The unity of the church is the content of Christ's intercession. He is praying for us right now — the current high priestly intercession of the risen Christ (Heb 7:25) is the ground of all our prayers." },
  { q: "Paul's Intercessory Prayers", a: "Paul's letters contain some of the NT's richest intercessory prayers. Ephesians 1:17–19: 'I keep asking that the God of our Lord Jesus Christ, the glorious Father, may give you the Spirit of wisdom and revelation, so that you may know him better.' Ephesians 3:16–19: 'I pray that out of his glorious riches he may strengthen you with power through his Spirit in your inner being, so that Christ may dwell in your hearts through faith.' Paul prays for spiritual depth, not just circumstantial relief." },
];

const VIDEOS = [
  { videoId: "5USAhTMZCTI", title: "The Lord's Prayer — Line by Line" },
  { videoId: "mRFEagF47CQ", title: "Why Does God Answer Some Prayers and Not Others?" },
  { videoId: "DHNkEIb5K4A", title: "Praying the Psalms – A Biblical Practice" },
];

export default function TheologyOfPrayerGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<string>("vine_pray_tab", "Overview");
  const [openLords, setOpenLords] = useState<number>(-1);
  const [openWhy, setOpenWhy] = useState<number>(-1);
  const [openInt, setOpenInt] = useState<number>(-1);
  const [journal, setJournal] = usePersistedState<string>("vine_pray_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui,sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>🙏</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: TEXT, marginBottom: ".5rem" }}>A Theology of Prayer</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>A Comprehensive Christian Guide — the Lord's Prayer, why prayer works, praying the Psalms, intercession, unanswered prayer, contemplative practices, and what Scripture says about the life of prayer.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ padding: ".5rem 1.1rem", borderRadius: 20, border: `1px solid ${activeTab === t ? BLUE : BORDER}`, background: activeTab === t ? `${BLUE}22` : CARD, color: activeTab === t ? BLUE : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", fontSize: ".85rem" }}>{t}</button>
          ))}
        </div>

        {/* Tab 0: Overview */}
        {activeTab === "Overview" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: BLUE, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Overview: What Is Prayer?</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Prayer is the practice of conscious communication with God — speaking and listening, requesting and resting, lamenting and praising, confessing and receiving. It is the primary means by which the covenant relationship between God and his people is maintained and deepened. It is also the primary battlefield of the spiritual life: nothing reveals faith more clearly than what we do (or don't do) in prayer.</p>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Karl Barth wrote extensively that prayer is not a human technique for getting divine assistance but the God-given form of covenant partnership. When we pray, we are invited into a conversation that already exists within the Trinity. The Spirit prays in us (Rom 8:26), the Son intercedes for us (Heb 7:25), and the Father hears — prayer is participation in the divine life.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1rem", marginTop: "1.5rem" }}>
              {[["Foundation","Lord's Prayer (Matt 6:9–13)"],["NT Command","Pray without ceasing (1 Thess 5:17)"],["Spirit's Role","Romans 8:26–27"],["Model","Jesus's prayer life (Luke)"],["Practice","Praying the Psalms"],["Challenge","Unanswered prayer"]].map(([k,v]) => (
                <div key={k} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".25rem" }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: Lord's Prayer */}
        {activeTab === "Lord's Prayer" && (
          <div>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Lord's Prayer (Matthew 6:9–13)</h2>
            {LORDS_PRAYER_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openLords === i ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenLords(openLords === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{openLords === i ? "−" : "+"}</span>
                </button>
                {openLords === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Why Prayer Works */}
        {activeTab === "Why Prayer Works" && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Why and How Prayer Works</h2>
            {WHY_PRAYER.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openWhy === i ? GOLD : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenWhy(openWhy === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: GOLD, fontSize: "1.2rem" }}>{openWhy === i ? "−" : "+"}</span>
                </button>
                {openWhy === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Praying the Psalms */}
        {activeTab === "Praying the Psalms" && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Praying the Psalms</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {PSALMS_CARDS.map(c => (
                <div key={c.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
                    <div>
                      <div style={{ color: c.color, fontWeight: 800, marginBottom: ".5rem" }}>{c.title}</div>
                      <div style={{ color: MUTED, lineHeight: 1.8 }}>{c.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Intercession */}
        {activeTab === "Intercession" && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Ministry of Intercession</h2>
            {INTERCESSION_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openInt === i ? TEAL : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenInt(openInt === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: TEAL, fontSize: "1.2rem" }}>{openInt === i ? "−" : "+"}</span>
                </button>
                {openInt === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Unanswered Prayer */}
        {activeTab === "Unanswered Prayer" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Unanswered Prayer</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>Every honest Christian confronts prayers that seem unanswered: the healing that did not come, the prodigal who has not returned, the door that remained closed, the silence that greeted the most desperate plea. The Bible does not pretend this is not the case — it records it (Ps 88, Hab 1:2, 2 Cor 12:8–9) and wrestles with it.</p>
            {[
              ["Jesus's Own Unanswered Prayer","'My Father, if it is possible, may this cup be taken from me. Yet not as I will, but as you will' (Matt 26:39). Jesus prayed three times for the cup to pass; it did not. This is the most important datum for a theology of unanswered prayer: the Son of God prayed a prayer that was not granted as asked. The 'yet not as I will' is not resignation but the deepest form of trust — aligning one's will with God's even when it costs everything."],
              ["Possible Reasons for Apparent Non-Answer","Scripture suggests several: (1) Sin in the petitioner or un-forgiveness (Mark 11:25; 1 Pet 3:7); (2) Wrong motives — asking to spend on pleasures (Jas 4:3); (3) Lack of faith (Jas 1:6); (4) God's timing is different from ours — answers come at a different time; (5) God's answer is 'no' or 'not yet' — his wisdom perceives that what we ask for is not good for us or others; (6) The thorn-in-the-flesh pattern — God's glory is better served through the unanswered prayer than the answered one."],
              ["Pray Without Ceasing (1 Thess 5:17)","'Pray continually' does not mean unintelligible babbling 24 hours a day but a lifestyle of prayerful attentiveness — living in the awareness of God's presence and bringing every dimension of life into dialogue with him. Brother Lawrence called it the practice of the presence of God. The Jesus Prayer — 'Lord Jesus Christ, Son of God, have mercy on me, a sinner' — is a breath prayer that can be prayed continuously, anchoring the heart in God throughout the day's ordinary activities."],
              ["What to Do When Prayer Feels Dead","Seasons of prayerlessness and dry, silent prayer are not evidence of spiritual failure but are common experiences recorded by mystics and ordinary Christians alike. John of the Cross's Dark Night of the Soul: God withdraws felt consolation to deepen naked faith — trust that does not depend on felt experience. In these seasons: continue the practice (even if it feels empty), lean on the prayers of others, return to the Psalms, and trust that the Spirit intercedes when we cannot (Rom 8:26)."],
            ].map(([title, body], i) => (
              <div key={i} style={{ borderLeft: `3px solid ${RED}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: RED, fontWeight: 700, marginBottom: ".4rem" }}>{title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 6: Contemplative Prayer */}
        {activeTab === "Contemplative Prayer" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Contemplative and Formative Prayer</h2>
            {[
              ["Lectio Divina — Sacred Reading","Lectio Divina is the ancient four-movement practice of praying Scripture: Lectio (read the passage slowly, attentively — what word or phrase catches your attention?); Meditatio (meditate — repeat it, chew on it, let it speak); Oratio (pray — respond to God with what the text has stirred in you, in petition, praise, or confession); Contemplatio (rest in God's presence — silent receptivity). The practice treats Scripture not as information to be extracted but as an encounter to be experienced."],
              ["Centering Prayer (Thomas Keating)","Centering Prayer is a contemporary form of contemplative prayer drawn from the tradition of The Cloud of Unknowing (14th c.). Method: choose a sacred word as a symbol of consent to God's presence; when thoughts arise, gently return to the sacred word; sit in silence for 20 minutes. The practice aims at resting in God's presence beneath the level of thought and activity — not emptying the mind (Buddhist) but consenting to God's action in the depths of the self. Critics within evangelicalism caution about lack of biblical content; proponents note its patristic roots."],
              ["The Jesus Prayer","The Jesus Prayer — 'Lord Jesus Christ, Son of God, have mercy on me, a sinner' — is rooted in the Eastern Orthodox tradition of hesychasm (stillness/rest). It can be prayed with the breath, synchronized with breathing in and out. The Philokalia (a collection of Eastern Christian writings on prayer) contains extensive guidance. The prayer combines Christological confession, the cry for mercy (kyrie eleison), and the honest self-assessment of the tax collector (Luke 18:13). Its simplicity makes it available in every moment of the day."],
              ["Examen — The Daily Review","The Examen (Ignatius of Loyola, 16th c.) is a twice-daily prayer of reflection: (1) Gratitude — review the past hours for gifts and graces; (2) Awareness — how was I moved (toward or away from God)?; (3) Sorrow — name any failures honestly before God; (4) Forgiveness — receive grace; (5) Renewal — ask for grace for the next part of the day. The Examen trains attentiveness to God's movements in ordinary life and integrates faith and experience."],
            ].map(([title, body], i) => (
              <div key={i} style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: TEAL, fontWeight: 700, marginBottom: ".4rem" }}>{title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 7: Journal */}
        {activeTab === "Journal" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: ".5rem" }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1rem", fontSize: ".9rem" }}>Reflect on your prayer life. Your notes are saved locally.</p>
            {[
              "Walk through the Lord's Prayer slowly. Which petition most challenges or surprises you? Which do you tend to rush past?",
              "Have you had an unanswered prayer — something you prayed earnestly and God did not answer as you asked? How has that shaped your faith and your understanding of God?",
              "Which contemplative practice (Lectio Divina, Examen, Jesus Prayer, Psalms) most appeals to you, and what would it look like to incorporate it into a regular rhythm?",
            ].map((q, i) => <p key={i} style={{ color: GOLD, fontSize: ".85rem", fontStyle: "italic", marginBottom: ".4rem" }}>{i + 1}. {q}</p>)}
            <textarea
              value={journal}
              onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "1rem", fontSize: ".95rem", lineHeight: 1.7, resize: "vertical", marginTop: ".75rem", boxSizing: "border-box" }}
            />
            {journal && <p style={{ color: MUTED, fontSize: ".8rem", marginTop: ".5rem" }}>Saved automatically.</p>}
          </div>
        )}

        {/* Tab 8: Videos */}
        {activeTab === "Videos" && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Video Resources</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
