"use client";

import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const BLUE = "#3B82F6";

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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "beatitudes", label: "Beatitudes" },
  { id: "salt-light", label: "Salt & Light" },
  { id: "antitheses", label: "Six Antitheses" },
  { id: "piety", label: "Giving, Prayer, Fasting" },
  { id: "anxiety", label: "Anxiety & Trust" },
  { id: "judging", label: "Judging & Asking" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const BEATITUDES = [
  { ref: "5:3", title: "Blessed are the poor in spirit", body: "Poverty of spirit is not timidity or low self-esteem — it is the recognition that before God we are bankrupt, with nothing to bring and no standing to claim. It is the opposite of the Pharisaic self-sufficiency Jesus condemned. 'For theirs is the kingdom of heaven' — the kingdom is a gift, not an achievement, and the prerequisite is recognizing you have nothing with which to purchase it. Martin Luther: 'God cannot give great things to those who consider themselves great.'" },
  { ref: "5:4", title: "Blessed are those who mourn", body: "Mourning over sin — genuine godly sorrow that produces repentance (2 Corinthians 7:10) — and mourning over the brokenness of the world, are both in view. The comfort promised is eschatological (Revelation 21:4) and present (Isaiah 61:1-3). The person who never mourns has never seen what is actually wrong with themselves or the world. The comforted mourner is not sad all the time — she carries a clear-eyed sorrow that makes joy more real when it comes." },
  { ref: "5:5", title: "Blessed are the meek", body: "Meekness is not weakness — it is power under control. The Greek praus was used for a powerful war horse trained to respond to its rider's direction. Jesus calls himself meek (11:29) — the one who could call ten thousand angels chose the cross. The meek will inherit the earth: this echoes Psalm 37:11 and anticipates the new creation. The aggressive self-promoter achieves at most this present age; the meek receive the age to come." },
  { ref: "5:6", title: "Blessed are those who hunger and thirst for righteousness", body: "Physical hunger and thirst are urgent, elemental needs. To hunger and thirst for righteousness is to want right standing before God and right living in the world with that same elemental urgency. This is not occasional spiritual appetite — it is the dominant drive of the renewed heart. 'They will be satisfied': the promise is complete fulfillment, a feast, not a snack. The person who is only mildly interested in righteousness will never be filled." },
  { ref: "5:7", title: "Blessed are the merciful", body: "Mercy (eleēmones) is compassion in action — not just feeling for the unfortunate but doing something about it. The promise is mercy received: 'they will be shown mercy.' This is not merit-based salvation — it is the principle that the transformed heart that gives mercy in the kingdom is the same heart that is disposed to receive it. James 2:13: 'mercy triumphs over judgment.' The unmerciful servant (Matthew 18) illustrates the reverse: withholding mercy forfeits it." },
  { ref: "5:8", title: "Blessed are the pure in heart", body: "The heart in Hebrew thought is the seat of will, thought, and emotion — the whole inner person. Purity of heart is singleness of devotion: Kierkegaard's 'to will one thing.' The impure heart is the divided heart, the one trying to serve both God and money (6:24), seeking approval of both heaven and the crowd. 'They will see God' — the beatific vision, the fullness of knowing God face to face (Revelation 22:4). Purity is the preparation for presence." },
  { ref: "5:9", title: "Blessed are the peacemakers", body: "Peacemakers, not peacekeepers. Peacekeeping avoids conflict; peacemaking actively works to restore relationships, reconcile enemies, and create shalom. The children of God are those who reflect their Father's own peacemaking work — who sent his Son to reconcile the world to himself (2 Corinthians 5:19). In a culture of polarization, the Christian's distinctive calling is to be agents of reconciliation rather than participants in tribalism." },
  { ref: "5:10-12", title: "Blessed are the persecuted", body: "The final beatitude is the longest — persecution for righteousness' sake. Jesus says 'Rejoice and be glad, because great is your reward in heaven, for in the same way they persecuted the prophets who were before you' (5:12). Three responses: expect it, rejoice in it, and remember you're in good company (the prophets). The persecuted for Christ are not unlucky — they are participating in the prophetic tradition and accruing eschatological joy." },
];

const ANTITHESES = [
  { ref: "5:21-26", title: "Murder → Anger", body: "Jesus intensifies the sixth commandment: the law forbids murder; the kingdom forbids murderous anger and contempt. 'Raca' (empty-head) and 'fool' (moral reprobate) are escalating insults that sever relationship. The remedy is radical: leave your gift at the altar and be reconciled first. The vertical (worship) depends on the horizontal (reconciliation). Anger not acted on festers into contempt, contempt into hatred, hatred into murder — Jesus stops the sequence at the root." },
  { ref: "5:27-30", title: "Adultery → Lust", body: "The law forbids adultery as external act; Jesus forbids it as inner attitude. 'Anyone who looks at a woman lustfully has already committed adultery with her in his heart' (5:28). The 'look' is not a glance but a sustained, intentional gaze that entertains desire. The remedy is hyperbolic: gouge out the eye, cut off the hand — not literal self-harm but the decisive, drastic severing of whatever feeds the sin. No sin is worth losing your soul over." },
  { ref: "5:31-32", title: "Divorce Restriction", body: "Jesus tightens the Mosaic certificate of divorce (Deuteronomy 24) by limiting legitimate divorce to the single exception of sexual immorality (porneia). The context is men using divorce as a tool to discard wives — Jesus protects women's dignity and the sanctity of covenant. This is not a comprehensive divorce theology (Paul adds the desertion exception in 1 Corinthians 7) but a counter to the casual divorce culture of Jesus' day where the debate was only about sufficient grounds." },
  { ref: "5:33-37", title: "Oaths → Simple Yes/No", body: "'Let your yes be yes and your no be no' — the kingdom person doesn't need elaborate oath systems because they are always truthful. The Pharisaic use of oaths had produced a system where some oaths were binding and others had loopholes. Jesus replaces the oath system with radical truthfulness: the person who always tells the truth never needs to swear. James 5:12 echoes this: let your yes be yes and your no be no." },
  { ref: "5:38-42", title: "Retaliation → Generosity", body: "The lex talionis (eye for eye) was a limitation on retaliation in the law — don't take more than what was taken. Jesus replaces the entire framework: turn the other cheek (absorb insult without retaliating), give your cloak as well (voluntarily give beyond what's demanded), go the second mile (exceed compelled service). This is not passive victimhood — it is the active exercise of the stronger power: refusing to be defined by the offender's actions." },
  { ref: "5:43-48", title: "Love Enemies", body: "'Love your enemies and pray for those who persecute you' — the most radical ethical teaching in all of Jesus' ministry. The scope of love is extended from neighbor to enemy. The reason: 'that you may be children of your Father in heaven. He causes his sun to rise on the evil and the good.' The motivation is not duty but family resemblance — God loves his enemies (Romans 5:8) and his children do the same. The standard: 'Be perfect, therefore, as your heavenly Father is perfect.'" },
];

const PIETY_ITEMS = [
  {
    id: "giv",
    label: "Giving (6:1-4)",
    content: "Do not give to be seen. 'When you give to the needy, do not let your left hand know what your right hand is doing, so that your giving may be in secret. Then your Father, who sees what is done in secret, will reward you' (6:3-4). Giving done for human applause has already received its full reward — the praise. Giving done for God is rewarded by God. The issue is not whether to give (Jesus assumes giving), but the heart orientation: the audience before whom we give. Kingdom generosity is invisible generosity.",
  },
  {
    id: "pray",
    label: "Prayer & The Lord's Prayer (6:5-15)",
    content: "Avoid the hypocrisy of public performance prayer and the 'babbling' of pagan quantity-prayer. Jesus gives a pattern: Father → thy kingdom come → daily bread → forgiveness (conditional on forgiving) → deliverance from evil. The address 'Our Father in heaven' establishes the relationship: we come as children to a father, not as subjects to a monarch. Every petition is framed in collective (our/us) language — even personal prayer is communal in its orientation. Note: forgiveness is the only petition Jesus comments on: it is interlocked with forgiving others.",
  },
  {
    id: "fast",
    label: "Fasting (6:16-18)",
    content: "Don't fast to be noticed. 'When you fast, put oil on your head and wash your face, so that it will not be obvious to others that you are fasting, but only to your Father, who is unseen' (6:17-18). Again, the same structure: hypocrites receive their reward (public recognition); secret fasting is rewarded by the Father. Jesus assumes fasting is a normal Christian discipline — 'when you fast,' not 'if.' The three acts (giving, prayer, fasting) together constitute the basic rhythm of kingdom piety, all to be practiced with God rather than the crowd as audience.",
  },
];

const ANXIETY_ITEMS = [
  {
    title: "Do Not Worry About Your Life",
    ref: "Matthew 6:25-34",
    color: BLUE,
    body: "'Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear' (6:25). The word 'therefore' connects this to the treasure/two masters passage: the person whose treasure is in heaven and whose master is God has a secure foundation from which not to worry. Worry is not banned out of stoic self-sufficiency but out of trust in a providing Father.",
  },
  {
    title: "Consider the Birds and Lilies",
    ref: "Matthew 6:26-30",
    color: GREEN,
    body: "Two illustrations from creation: birds are fed without sowing or reaping (v. 26); lilies are clothed more gloriously than Solomon without toiling or spinning (v. 28-29). The argument from lesser to greater: if God provides for birds and wildflowers, 'will he not much more clothe you — you of little faith?' The phrase 'O you of little faith' (oligopistoi) is gentle rebuke, not condemnation. Worry is practical atheism: behaving as if God is either absent or uncaring.",
  },
  {
    title: "Seek First His Kingdom",
    ref: "Matthew 6:33",
    color: GOLD,
    body: "'But seek first his kingdom and his righteousness, and all these things will be given to you as well' (6:33). The promise of provision is conditional on priority: when the kingdom is first, material needs are not neglected but covered by the Father. This is not a prosperity formula — 'all these things' is food and clothing, not wealth. It is a reorientation of life's basic architecture: when God's reign and character are the primary pursuit, everything else falls into place.",
  },
  {
    title: "One Day at a Time",
    ref: "Matthew 6:34",
    color: TEAL,
    body: "'Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own' (6:34). Jesus does not eliminate trouble — 'each day has enough trouble of its own' is honest about the real difficulties of life. But he limits the temporal scope of our worry: this day, not tomorrow. Anxiety compounds as we project future troubles onto the present. Kingdom living is day-by-day dependence on the Father, which is what the petition 'give us today our daily bread' (6:11) practices.",
  },
];

const VIDEOS = [
  { videoId: "cNKVWE6kO5s", title: "The Sermon on the Mount — Dallas Willard" },
  { videoId: "WAvHVzJSqoA", title: "The Beatitudes Explained — Tim Keller" },
  { videoId: "YcRJuB2bAIs", title: "Sermon on the Mount Overview — BibleProject" },
  { videoId: "D4G2h2sMwYg", title: "Love Your Enemies — John Piper" },
  { videoId: "OvLSFUk3HsA", title: "The Lord's Prayer — R.C. Sproul" },
];

export default function SermonOnTheMountGuide() {
  const [tab, setTab] = useLocalStorage("vine_sotm_tab", "overview");
  const [beatOpen, setBeatOpen] = useLocalStorage("vine_sotm_beat", "");
  const [antOpen, setAntOpen] = useLocalStorage("vine_sotm_ant", "");
  const [pietyOpen, setPietyOpen] = useLocalStorage("vine_sotm_piety", "");
  const [journal, setJournal] = useLocalStorage("vine_sotm_journal", "");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: GOLD + "22", color: GOLD, padding: "0.2rem 0.7rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1 }}>MATTHEW 5–7</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.5rem" }}>The Sermon on the Mount</h1>
        <p style={{ color: MUTED, fontSize: "1rem", marginBottom: "2rem", maxWidth: 680 }}>
          The most concentrated ethical and spiritual teaching of Jesus — the manifesto of the kingdom of heaven.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                borderColor: tab === t.id ? GOLD : BORDER, background: tab === t.id ? GOLD + "22" : "transparent", color: tab === t.id ? GOLD : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>The Kingdom Manifesto</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Matthew 5–7 is arguably the most important block of teaching in the New Testament. Delivered on a Galilean hillside, echoing Moses on Sinai, the Sermon on the Mount is Jesus's description of what kingdom life looks like from the inside — not how to get in, but what characterizes those who are already citizens. It is not a new law replacing the old but a radical intensification that goes after the heart beneath the behavior.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Location", value: "A mountainside in Galilee", color: BLUE },
                { label: "Audience", value: "Disciples + crowds", color: GREEN },
                { label: "Theme", value: "Kingdom of Heaven ethics", color: GOLD },
                { label: "Conclusion", value: "Build on the rock", color: TEAL },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 12, padding: "1.2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
                  <div style={{ color: item.color, fontWeight: 700 }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.8rem", color: GOLD }}>Structure of the Sermon</h3>
              <ul style={{ color: MUTED, lineHeight: 2, paddingLeft: "1.2rem" }}>
                <li><strong style={{ color: TEXT }}>5:3–12</strong> — The Beatitudes: character of kingdom citizens</li>
                <li><strong style={{ color: TEXT }}>5:13–16</strong> — Salt and light: calling of kingdom citizens</li>
                <li><strong style={{ color: TEXT }}>5:17–48</strong> — Six antitheses: kingdom ethics vs. law-minimalism</li>
                <li><strong style={{ color: TEXT }}>6:1–18</strong> — Piety: giving, prayer (Lord's Prayer), fasting</li>
                <li><strong style={{ color: TEXT }}>6:19–34</strong> — Treasure, two masters, anxiety and trust</li>
                <li><strong style={{ color: TEXT }}>7:1–12</strong> — Judging others, the Golden Rule, asking and receiving</li>
                <li><strong style={{ color: TEXT }}>7:13–29</strong> — Two ways, false prophets, the two builders</li>
              </ul>
            </div>
            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 14, padding: "1.3rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>How to Read It</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>
                The Sermon is not a checklist for earning God's favor — it begins with grace (the Beatitudes declare blessedness before prescribing behavior) and assumes the new birth, not human effort, produces kingdom character. It is also not impossible perfectionism designed to drive us to despair. It is the Spirit-empowered life described from the outside, the natural outflow of those who have received the kingdom as a gift.
              </p>
            </div>
          </div>
        )}

        {/* BEATITUDES */}
        {tab === "beatitudes" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Beatitudes</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Eight declarations of blessedness (makarios: happy, favored, flourishing). Each reverses ordinary assumptions about who is blessed — the spiritually bankrupt, the mourners, the meek — and locates their blessing in the future promise of the kingdom.
            </p>
            {BEATITUDES.map((b, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${beatOpen === b.ref ? GOLD : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setBeatOpen(beatOpen === b.ref ? "" : b.ref)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "0.97rem", cursor: "pointer", textAlign: "left" }}>
                  <span><span style={{ color: GOLD, fontSize: "0.8rem", marginRight: "0.6rem" }}>{b.ref}</span>{b.title}</span>
                  <span style={{ color: GOLD, fontSize: "1.2rem", flexShrink: 0 }}>{beatOpen === b.ref ? "−" : "+"}</span>
                </button>
                {beatOpen === b.ref && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{b.body}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* SALT AND LIGHT */}
        {tab === "salt-light" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Salt and Light (Matthew 5:13–16)</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Two metaphors for the calling of kingdom citizens in the world — not withdrawal from it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                { title: "Salt of the Earth (5:13)", color: GREEN, body: "Salt in the ancient world was a preservative and a seasoning — it prevented decay and enhanced flavor. 'But if the salt loses its saltiness, how can it be made salty again? It is no longer good for anything, except to be thrown out and trampled underfoot.' The warning is against cultural assimilation: Christians who blend so completely into surrounding culture that they have no distinctive flavor have lost their function. Salt must retain its distinctiveness to do its work." },
                { title: "Light of the World (5:14-16)", color: GOLD, body: "'A city on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl.' The light is to be visible — not for the sake of the Christian's reputation but so that 'they may see your good deeds and glorify your Father in heaven.' The purpose of visible good works is not self-promotion but God-glorification. The disciples' conduct in the world is meant to point beyond themselves to the Father. Christian distinctiveness is always penultimate; God's glory is the goal." },
                { title: "Fulfilling the Law (5:17-20)", color: PURPLE, body: "'Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them' (5:17). The antitheses that follow (5:21-48) are not replacements of the law but intensifications — Jesus fulfills by going deeper, hitting the interior life the law was always aimed at but couldn't reach without the Spirit. The scribes and Pharisees were externally law-compliant; kingdom righteousness exceeds theirs by going all the way to the heart (5:20)." },
              ].map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SIX ANTITHESES */}
        {tab === "antitheses" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Six Antitheses</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Six times Jesus says: "You have heard that it was said... but I tell you..." — not abolishing the law but intensifying it to reach the heart beneath the behavior.
            </p>
            {ANTITHESES.map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${antOpen === item.ref ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setAntOpen(antOpen === item.ref ? "" : item.ref)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "0.97rem", cursor: "pointer", textAlign: "left" }}>
                  <span><span style={{ color: PURPLE, fontSize: "0.8rem", marginRight: "0.6rem" }}>{item.ref}</span>{item.title}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem", flexShrink: 0 }}>{antOpen === item.ref ? "−" : "+"}</span>
                </button>
                {antOpen === item.ref && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* PIETY */}
        {tab === "piety" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Three Acts of Piety (Matthew 6:1–18)</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Three acts — giving, prayer, fasting — with a common structure: do not perform for human audience; your Father who sees in secret will reward you. Each assumes these practices as normal Christian disciplines.
            </p>
            {PIETY_ITEMS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${pietyOpen === item.id ? TEAL : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setPietyOpen(pietyOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: TEAL, fontSize: "1.2rem" }}>{pietyOpen === item.id ? "−" : "+"}</span>
                </button>
                {pietyOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ANXIETY AND TRUST */}
        {tab === "anxiety" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Treasure, Two Masters, Anxiety (Matthew 6:19–34)</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The section moves from piety to economics to anxiety — all connected by the question of where the heart is anchored. Treasure in heaven, one master, and the Father's provision are the antidote to anxious materialism.
            </p>
            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 14, padding: "1.3rem", marginBottom: "1rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: "0.5rem", fontSize: "1rem" }}>Treasure (6:19-21)</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>
                "Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal. But store up for yourselves treasures in heaven" (6:19-20). The problem with earthly treasure is not that it is bad but that it is insecure and temporary. "For where your treasure is, there your heart will be also" (6:21) — the heart follows the treasure. The way to redirect the heart is to redirect the investment: generosity toward kingdom causes is a reorientation of the whole person.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: "1.3rem", marginBottom: "1rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: "0.5rem", fontSize: "1rem" }}>Two Masters (6:24)</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>
                "No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and Money." The Greek word for money (mammon) suggests a personified rival deity — not merely a medium of exchange but a competing lord with claims on ultimate allegiance. Jesus does not say it is difficult to serve two masters; he says it is impossible. The question is not how much of each we have, but who is master.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {ANXIETY_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title} <span style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 400 }}>— {item.ref}</span></h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JUDGING AND ASKING */}
        {tab === "judging" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Judging, Asking, and Two Ways (Matthew 7)</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The Sermon's final chapter includes the most misused verse in the Bible, the most encouraging promise in prayer, and the most sobering conclusion in all of Jesus' teaching.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "Do Not Judge (7:1-5)", color: BLUE, ref: "7:1-5", body: "'Do not judge, or you too will be judged' (7:1) is the most misquoted verse in the Sermon. It does not ban evaluation of truth, wisdom, or moral behavior — Jesus commands such evaluation in 7:6, 15-20. It bans hypocritical judgment: the person with a plank in their eye criticizing the speck in another's eye. The prohibition is on judging while blind to your own greater failure. The command is: remove your plank first, then help your brother with his speck (7:5). Judgment requires self-examination, not self-exemption." },
                { title: "Don't Give Dogs What Is Sacred (7:6)", color: TEAL, ref: "7:6", body: "Immediately after the prohibition on hypocritical judging, Jesus commands discernment: 'Do not give dogs what is sacred; do not throw your pearls to pigs.' Dogs and pigs are used elsewhere in Jewish literature for Gentiles or opponents of God's word. The point: wisdom and discernment about who receives what are required. Non-judgmentalism that has no discernment whatsoever becomes naive. The kingdom calls for both humility (7:1-5) and wisdom (7:6)." },
                { title: "Ask, Seek, Knock (7:7-11)", color: GREEN, ref: "7:7-11", body: "'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you' (7:7). Three imperatives, all present tense (ongoing: keep asking, keep seeking, keep knocking). The argument: if evil human parents give good gifts to their children, 'how much more will your Father in heaven give good gifts to those who ask him!' (7:11). Luke's parallel reads: 'give the Holy Spirit to those who ask him' — the ultimate good gift. This is kingdom prayer: persistent, trusting, oriented to the Father's goodness." },
                { title: "Golden Rule (7:12)", color: GOLD, ref: "7:12", body: "'So in everything, do to others what you would have them do to you, for this sums up the Law and the Prophets' (7:12). The Golden Rule is not unique to Jesus — variants exist in Confucius, Hillel, and Stoic philosophy — but Jesus states it positively (do), not just negatively (don't do). More importantly, he grounds it in the law and the prophets: it is the summary of all moral obligation, not an independent maxim. The test for any action: would I want this done to me?" },
                { title: "Two Ways, Two Trees, Two Builders (7:13-29)", color: PURPLE, ref: "7:13-29", body: "Three closing antitheses: narrow vs. wide gate (two roads); good vs. bad trees (two kinds of prophets, known by fruit); wise vs. foolish builder (rock vs. sand foundation). The common thread: hearing Jesus' words is not enough — the obedient doer is the wise builder. 'Everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock' (7:24). The Sermon ends with a christological claim: Jesus' word is the rock. The crowd's amazement was at his authority — 'not as their teachers of the law' (7:28-29)." },
              ].map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Reflection Journal</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Use these prompts to interact personally with the Sermon.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                "Which Beatitude most challenges or convicts you? Which one most encourages you?",
                "In the six antitheses, which area does Jesus most need to address in your own heart?",
                "Is your piety (giving, prayer, fasting) done before God or before people? How would you know?",
                "What does Jesus say about worry? What specific thing are you tempted to worry about that you need to bring to the Father?",
                "What is the foundation you are actually building on? How would you know if it were sand?",
              ].map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem" }}>
                  <div style={{ color: GOLD, fontWeight: 600, fontSize: "0.9rem" }}>{q}</div>
                </div>
              ))}
            </div>
            <textarea value={journal} onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here — saved locally in your browser..."
              style={{ width: "100%", minHeight: 220, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, color: TEXT, padding: "1rem", fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Video Teaching</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Teaching on the Sermon on the Mount from trusted biblical teachers.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "0.9rem 1rem" }}>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
