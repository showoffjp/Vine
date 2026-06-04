"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "wounds" | "process" | "finding" | "voices" | "videos";

// ─── Tab 1: Wounds ───────────────────────────────────────────────────────────

const WOUNDS = [
  {
    id: "spiritual-abuse",
    title: "Spiritual Abuse",
    summary: "When spiritual authority is weaponized against you",
    body: `Spiritual abuse occurs when someone in a position of religious authority uses that power to manipulate, control, intimidate, or harm another person — often while framing it as God's will. It is coercive by nature, and it frequently employs DARVO tactics: Deny, Attack, Reverse Victim and Offender. The abuser denies wrongdoing, attacks the person raising concerns, and repositions themselves as the true victim.\n\nCommon patterns include: mandatory submission to leadership as a condition of spiritual standing; using Scripture to silence dissent; conditioning your access to community on compliance; and instilling shame about questioning leadership.\n\nSurvivors describe it this way:\n\n"I was told that questioning the pastor was the same as questioning God. I believed it for years." — Anonymous\n\n"When I finally left, they told everyone I had a 'rebellious spirit.' I lost 15 years of friendships overnight." — Former ministry leader\n\n"The scariest part wasn't the abuse. It was how long I defended it because I thought obedience to leaders was obedience to God." — Church trauma survivor`,
  },
  {
    id: "toxic-leadership",
    title: "Toxic Leadership Patterns",
    summary: "Narcissistic pastors and the misuse of authority",
    body: `Narcissistic leaders in ministry are particularly dangerous because the church structure can make accountability nearly impossible. The theology of "touch not God's anointed" (a misreading of 1 Samuel 24) gets weaponized to insulate abusive leaders from any correction. Boards are filled with loyalists. Questions become evidence of spiritual immaturity.\n\nSigns of toxic pastoral leadership include: a pattern of receiving but never giving apology; the leader's emotional state setting the temperature of the entire organization; disproportionate punishment for minor dissent; an inner circle that enables and a wider congregation kept at arm's length; grandiosity about the church's mission and the leader's unique role in it.\n\nChuck DeGroat, a therapist who has treated both narcissistic pastors and their victims, notes that narcissistic leaders often entered ministry precisely because it offers a ready supply of admiration, loyalty, and institutional protection — not because they were called.\n\nIf you were harmed by a toxic leader: the harm was real. The failure was theirs. Your instinct to question was not rebellion — it was spiritual health.`,
  },
  {
    id: "doctrinal-trauma",
    title: "Doctrinal Trauma",
    summary: "When theology itself becomes a wound — shame, purity culture, and fear",
    body: `Some of the deepest church wounds are not relational but theological. When core doctrines are consistently taught in ways that weaponize shame, instill fear, or reduce people to their worst moments, the result is doctrinal trauma — a wound inflicted by ideas.\n\nPurity culture is one of the most documented examples. Teaching sexual purity through metaphors of used chewing gum, crumpled paper, or a rose with petals torn away communicates not just behavioral expectations but an identity claim: you are damaged by your choices in a way that cannot be undone. Thousands of survivors describe lasting shame, disordered relationships, and inability to enjoy intimacy in marriage — all downstream of youth group lessons.\n\nHell as a control mechanism is equally damaging. When eternal torment is wielded as a behavioral motivator rather than taught as a serious theological reality, it produces fear-based compliance rather than genuine love for God. Many deconstructors report they stayed in harmful churches because the terror of leaving was too great.\n\nShame-based theology at its core communicates: you are fundamentally broken in a way that makes you unworthy of love apart from total compliance. The good news — the actual gospel — is the opposite of this. But for many, the wound was inflicted before they ever encountered the real thing.`,
  },
  {
    id: "community-betrayal",
    title: "Community Betrayal",
    summary: "Church splits, gossip, shunning, and the loss of belonging",
    body: `The church promises belonging — a family, a body, a community woven together by shared faith. When that community betrays you, the wound is uniquely devastating because it reaches the very thing you went looking for.\n\nChurch splits fragment friendships and force impossible choices. Long-term friends disappear to the other side of a theological or leadership dispute, and the relational collateral damage can last decades. Often the split itself is never honestly explained — members are given a sanitized version while the real conflict festers.\n\nGossip cloaked in prayer requests is nearly universal. "I just want to ask you to pray for Sarah — she's been really struggling with her marriage..." strips away dignity while performing concern. The information spreads. The relationship is damaged. No accountability follows.\n\nShunning — formal or informal — is among the most psychologically devastating church experiences. Being cut off from community as a consequence of leaving, questioning, or raising concerns attacks your identity at the level of belonging. Research on shunning survivors finds rates of depression and PTSD comparable to other relational trauma.\n\nIf your community disappeared when you needed them most, or when you simply stopped performing: that is a failure of the church, not evidence of your unworthiness.`,
  },
  {
    id: "racial-harm",
    title: "Racial and Cultural Harm",
    summary: "White evangelical erasure and cultural imperialism in the name of God",
    body: `For Christians of color, and particularly Black and Indigenous believers in predominantly white churches and denominations, the wounds run through history and into the present. White American evangelicalism has often functioned as a cultural system as much as a theological one — requiring assimilation into white worship styles, white theological concerns, and white political assumptions as the unmarked default of "Christian."\n\nThe wounds include: being told your cultural expressions of worship are "less reverent"; having your theological tradition dismissed as secondary to white evangelical scholarship; watching church leadership remain uniformly white while diverse attenders fill the pews; being expected to be patient when racial harm is raised and gracious when it is minimized; and navigating the exhausting labor of translating your experience for people unwilling to do the same in return.\n\nIn missions history, the church has carried the gospel alongside colonial structures that stripped Indigenous peoples of language, culture, and dignity. The line between evangelism and cultural imperialism was rarely drawn, and many Indigenous Christians today navigate a faith that arrived attached to the destruction of their people.\n\nThese are not incidental failures of the church. They are structural. Healing from them requires acknowledgment — not just generically, but specifically — and communities willing to do the slow work of genuine accountability.`,
  },
  {
    id: "sexual-financial-abuse",
    title: "Sexual and Financial Abuse",
    summary: "When trust was violated at the deepest level",
    body: `When pastors, ministry leaders, or trusted church figures exploit sexual or financial trust, the betrayal operates on multiple levels simultaneously: the individual violation, the institutional cover-up, and the theological framing that makes disclosure feel dangerous.\n\nSexual abuse by clergy is documented across every tradition and denomination. Survivors frequently report that when they came forward, they were disbelieved, pressured to forgive without accountability, told the disclosure would "damage the church," or quietly shuffled out while the abuser was protected. The secondary wound of the institutional response is often as damaging as the original abuse.\n\nFinancial exploitation — tithing pressure framed as spiritual testing, prosperity gospel manipulation, personal enrichment by leaders at the expense of congregants — exploits the religious devotion of people who are trying to be faithful. When someone gives sacrificially because they believe God requires it, and discovers the money funded a pastor's lifestyle, the betrayal is both financial and spiritual.\n\nIf you were harmed this way: you were not responsible. The fault belongs entirely to the person who violated trust and the institution that protected them. There is no spiritual framework in which what happened to you was God's will or your failing. Seeking professional support — therapists, legal counsel — is appropriate and important.`,
  },
];

// ─── Tab 2: Healing Process ───────────────────────────────────────────────────

const STEPS = [
  {
    n: 1,
    title: "Naming the Harm",
    desc: `The first step — and often the hardest — is simply saying: that was wrong. Not "I had a bad experience" or "we just didn't fit" or "it wasn't a good season." Something was done to you that should not have been done. Naming it clearly is not bitterness; it is the foundation of healing. Many survivors spend years minimizing the harm because the church context trained them to absorb damage rather than name it. Permission to say "what happened was wrong" is not optional — it is where everything else begins.`,
  },
  {
    n: 2,
    title: "Grief and Deconstruction",
    desc: `What dies in a church wound is often more than the relationship — it is a whole world: the certainty you had, the community you belonged to, the version of God you trusted. Deconstruction is not apostasy; it is the death of a false or distorted version of faith. Grief is appropriate here. The Elisabeth Kübler-Ross stages apply — denial, anger, bargaining, depression, acceptance — and they do not move in a straight line. Let the false version die. You cannot build something true on top of a foundation you never examined.`,
  },
  {
    n: 3,
    title: "Anger as Information",
    desc: `Anger is not the opposite of faith. It is not bitterness dressed up. Holy anger is a response to genuine injustice, and the Psalms are full of it — "How long, O Lord?"; "Do not be silent while the wicked prosper"; laments that name specific harm to a God who is expected to respond. Your anger about what was done to you is information: it tells you what was valuable, what was violated, what deserved better. Don't rush past it to forgiveness. Premature forgiveness — forgiveness that bypasses the reality of the harm — is not spiritual maturity. It is suppression.`,
  },
  {
    n: 4,
    title: "Distinguishing God from His People",
    desc: `One of the most critical moves in healing is the slow, difficult work of separating the behavior of humans from the character of God. The pastor who abused you is not God. The congregation that shunned you is not God. The theology used to control you may have been a distorted version of God — not God himself. This distinction does not excuse the institution. It simply refuses to allow human failure to be the final word on divine character. For many people, this step requires reading widely, encountering God through different traditions, and finding voices who represent faith without the toxicity.`,
  },
  {
    n: 5,
    title: "Therapy and Spiritual Direction",
    desc: `Church trauma is real trauma. It meets clinical criteria. A licensed therapist — ideally one familiar with religious trauma, though general trauma-competent therapists are also deeply helpful — can offer tools that sermons and small groups cannot. EMDR, somatic therapy, and trauma-focused CBT have documented effectiveness for religious trauma survivors. Spiritual direction — a one-on-one practice with a trained spiritual director — offers a slower, more contemplative space to rebuild a relationship with God apart from institutional religion. These are not replacements for each other; they address different dimensions of the wound.`,
  },
  {
    n: 6,
    title: "Rebuilding a Spiritual Practice",
    desc: `On your own terms. On your timeline. Without performance. Many survivors find that the spiritual practices they associated with the toxic church — certain prayer styles, worship music genres, specific liturgical rhythms — are too entangled with the harm to be useful yet. This is fine. You may need to find new forms: walking prayer, contemplative silence, reading widely across traditions, art, poetry, nature. The goal is reconnecting with something true and life-giving, not replicating what hurt you. Some practices may become accessible again later; others may not. Your spiritual life is yours, not the church's to dictate.`,
  },
  {
    n: 7,
    title: "Discerning Re-Entry",
    desc: `Not everyone should return to institutional church — and that's okay. Some people find their way back to healthy communities and are deeply grateful for it. Others find life-giving faith outside institutional structures. The question is not "when will you be fixed enough to go back" but "what do you actually need, and does a community exist that can offer it?" If you are considering re-entry, do it slowly, on your own terms, with high standards and no pressure. You are allowed to leave if it's wrong. You are allowed to take two years to decide. You are allowed to say "not yet" indefinitely.`,
  },
];

// ─── Tab 3: Finding a Healthy Church ─────────────────────────────────────────

const CHURCH_PANELS = [
  {
    id: "health-signs",
    title: "Signs of Health",
    icon: "✓",
    color: GREEN,
    content: `A healthy church is not a perfect church — it's one that handles imperfection honestly. Look for these markers:\n\n**Flat-ish, accountable leadership.** Healthy churches have real accountability structures — elder boards with genuine authority, not just rubber stamps. Pastors can be questioned, corrected, and if necessary removed. Power is distributed, not concentrated.\n\n**Financial transparency.** Annual budgets are shared with the congregation. Leadership salaries are disclosed or available upon request. There's no confusion about where the money goes.\n\n**A conflict resolution process.** Healthy churches have a defined, fair process for handling disputes — including disputes involving leadership. They don't just ask you to "trust the elders."\n\n**Women in meaningful leadership.** This is a meaningful marker not because every theological tradition that limits women's roles is abusive, but because churches that are comfortable with women leading, preaching, and holding authority tend to have healthier overall power dynamics.\n\n**Willingness to say "we were wrong."** Watch how a community handles its own failures. Can it acknowledge harm? Has it ever apologized publicly for something? Does it own its mistakes, or does leadership always have an explanation that exonerates itself?`,
  },
  {
    id: "red-flags",
    title: "Red Flags to Watch For",
    icon: "⚠",
    color: "#FF6B6B",
    content: `Trust your nervous system. If something feels off, it may be. Common red flags in churches:\n\n**Personality cult around the pastor.** The church is essentially named after, identified with, or emotionally organized around one person. Their story dominates every sermon. Their vision is unchallengeable.\n\n**Us-vs-them against other churches.** Dismissive or contemptuous language about other congregations, denominations, or "those churches that compromise" is a warning sign. Healthy churches don't need to define themselves by what they're against.\n\n**Shunning ex-members.** Ask discreetly: what happens when someone leaves? Are they still treated with dignity? Or do they disappear from relationships and become cautionary tales?\n\n**Financial opacity.** If you can't find out how the money is spent — or if the question makes someone defensive — that is a red flag.\n\n**Pressure to serve before you're ready.** A church that works hard to recruit you into volunteering before you've been there six months, or that frames service as the primary measure of commitment, may be more interested in your labor than your soul.\n\n**Love bombing on arrival, withdrawal if you don't fully commit.** This cycle is a known manipulation pattern.`,
  },
  {
    id: "questions",
    title: "Questions to Ask Before Joining",
    icon: "?",
    color: PURPLE,
    content: `Healthy churches welcome hard questions. If your questions are met with deflection, suspicion, or pressure, you have your answer.\n\n**"What's your eldership structure, and how are elders selected and removed?"**\nThis reveals who actually holds power and how accountability works.\n\n**"How do you handle abuse allegations — specifically against a staff member or pastor?"**\nListen for: external reporting, professional investigation, protection of the victim, transparency with the congregation. Be wary of: "we handle things internally," "we trust the Lord to bring correction," or a defensive reaction to the question itself.\n\n**"If I decide to leave, will there be relational consequences?"**\nThe honest answer in a healthy church: "No. We'd want to know why, but you're always free to leave, and you'd remain loved."\n\n**"What is your process for handling member-to-member conflict?"**\nIs there a defined process? Is it known? Has it been used? With what outcome?\n\n**"Has this church ever publicly acknowledged doing something wrong? What happened?"**\nThis question reveals institutional character. The inability to name a specific instance is itself informative.`,
  },
  {
    id: "denominations",
    title: "Healthier Denominations & Networks",
    icon: "⛪",
    color: "#4FBBAA",
    content: `No denomination is immune to abuse — every tradition has its horror stories. But some structures and cultures make health more likely. These are worth exploring:\n\n**PCUSA (Presbyterian Church USA)** — Presbyterian polity means power is distributed across sessions (elder boards) and up through presbyteries and general assembly. Significant accountability structures exist. Theologically moderate to progressive.\n\n**ELCA (Evangelical Lutheran Church in America)** — Lutheran heritage of grace-centered theology; robust denominational structure with oversight. Women in full leadership at all levels. Theologically mainline.\n\n**Vineyard USA** — Charismatic in expression but often with more accountability structures than independent charismatic churches. Emphasis on the Kingdom of God and a culture of pastoral care. Wide variation by congregation.\n\n**Church of the Brethren** — Historic peace church; flat leadership structures, consensus decision-making tradition, deep commitment to reconciliation and accountability. Small but significant.\n\n**Many independent/non-denominational churches** — These vary enormously. The absence of denominational accountability is a structural risk factor, but many healthy independent churches exist. Evaluate each on its own merits using the health signs above.\n\n**Anglican/Episcopal churches** — Liturgical tradition that provides structure; Episcopal polity with bishops provides oversight. Significant variation by diocese.`,
  },
  {
    id: "taking-it-slow",
    title: "Taking It Slow",
    icon: "→",
    color: "#F59E0B",
    content: `You do not owe any church your full commitment. You are allowed — and wise — to move slowly.\n\n**Attend without volunteering for at least six months.** This is a reasonable, healthy boundary. Observe how the community treats people who aren't useful yet. Notice whether you feel pressure to perform.\n\n**Adopt an observer posture.** You are not there to be recruited. You are there to observe, evaluate, and slowly determine whether this is a community you can trust. This is not cynicism — it is wisdom earned through experience.\n\n**Don't give financially until you understand the finances.** Wait until you've seen a budget, heard a clear explanation of how money is allocated, and feel genuinely confident about financial stewardship.\n\n**Rebuild trust incrementally.** Trust is not owed to any institution. It is earned through consistent behavior over time. Allow it to accumulate slowly based on evidence, not based on expectation or social pressure.\n\n**Give yourself permission to leave.** Before you commit to anything, remind yourself: I can leave at any time. Nothing I am doing here creates an obligation I cannot exit. This mental posture protects you and, paradoxically, makes genuine commitment possible when you're ready.`,
  },
];

// ─── Tab 4: Voices ────────────────────────────────────────────────────────────

const VOICES = [
  {
    name: "Rachel Held Evans",
    years: "1981–2019",
    books: ["A Year of Biblical Womanhood", "Searching for Sunday", "Inspired", "Evolving in Monkey Town"],
    color: "#E879A0",
    quote: "I used to think that doubt was the enemy of faith. Then I read the Psalms.",
    desc: `Rachel Held Evans was the voice a generation of doubters didn't know they needed. Writing with disarming honesty about her own deconstruction, her evangelical upbringing, and her stubborn refusal to give up on the church, she created space for millions of people to hold doubt and faith at the same time. "Searching for Sunday" is particularly important for church wound survivors — it is simultaneously a grief memoir and a love letter to the church at its best. She died in 2019 at 37, leaving behind a community that still gathers in her memory. Her work remains essential.`,
  },
  {
    name: "Diane Langberg",
    years: "Psychologist & Author",
    books: ["Redeeming Power", "Suffering and the Heart of God", "Counseling Survivors of Sexual Abuse"],
    color: "#60A5FA",
    quote: "Trauma is not a weakness of faith. It is the cost of living in a broken world.",
    desc: `Diane Langberg is a clinical psychologist with decades of experience treating trauma survivors, including clergy abuse victims and the perpetrators themselves. Her book "Redeeming Power" is perhaps the most important book currently written on power dynamics in the church — why institutions protect abusers, what genuine accountability looks like, and what healing can mean for survivors. She is also deeply committed to the church and does not write as an outsider — which makes her critique all the more credible. Her work is grounded, careful, and unflinchingly honest about institutional failure without giving up on institutional redemption.`,
  },
  {
    name: "Wade Mullen",
    years: "Author & Researcher",
    books: ["Something's Not Right"],
    color: GREEN,
    quote: "Abusive organizations don't just harm their victims. They alter reality for everyone inside.",
    desc: `Wade Mullen spent years researching how abusive organizations — particularly churches — use language, image management, and spin to protect themselves at the expense of victims. "Something's Not Right" is a field guide to recognizing these patterns in real time. He identifies the specific rhetorical moves abusive institutions make: minimizing, deflecting, appealing to their own good reputation, framing disclosure as the real problem. Reading Mullen does something important for survivors: it gives language to patterns you may have experienced but couldn't articulate. Understanding the mechanism of manipulation is one of the most powerful tools for healing and for protecting yourself going forward.`,
  },
  {
    name: "Scot McKnight & Laura Barringer",
    years: "Authors & Educators",
    books: ["A Church Called Tov", "Pivot"],
    color: PURPLE,
    quote: "The opposite of a toxic church culture is not a perfect church culture. It's a tov culture — a culture of goodness.",
    desc: `Scot McKnight is a New Testament scholar; Laura Barringer is his daughter and co-author. Together in "A Church Called Tov," they build a constructive theology of healthy church culture from the Hebrew concept of "tov" — goodness. The book is remarkable because it moves beyond critique into construction: what does a genuinely healthy church look like, feel like, and do differently? It examines real cases of church abuse — including Willow Creek — and asks what patterns allowed it to persist and what patterns could have prevented it. For people trying to imagine what a good church might look like after experiencing a terrible one, this book offers a concrete, theologically grounded vision.`,
  },
  {
    name: "Chuck DeGroat",
    years: "Therapist & Author",
    books: ["When Narcissism Comes to Church", "Wholeheartedness", "Leaving Egypt"],
    color: "#F59E0B",
    quote: "The most dangerous narcissists are those who are entirely convinced of their own virtue.",
    desc: `Chuck DeGroat is a licensed therapist, seminary professor, and former pastor who has spent years treating narcissistic leaders and their victims in church contexts. "When Narcissism Comes to Church" is the essential read for understanding how narcissistic personality disorder operates in ministry — why it is so common, why it is so hard to stop, what it does to the people around it, and what genuine recovery looks like for both victims and (rarely) perpetrators. DeGroat writes with clinical precision and pastoral warmth, and the book neither demonizes everyone in leadership nor minimizes what genuine narcissistic abuse does to people. For survivors trying to make sense of their experience, his framework is clarifying and healing.`,
  },
  {
    name: "Morgan Harper Nichols",
    years: "Poet & Artist",
    books: ["All Along You Were Blooming", "How Far Is the Ocean from Here", "Peace Is a Practice"],
    color: "#C084FC",
    quote: "You are allowed to be both a masterpiece and a work in progress.",
    desc: `Morgan Harper Nichols doesn't write about church hurt directly — she writes about beauty, becoming, and the long slow work of flourishing. For people exhausted by theological argument and institutional analysis, her poetry and art offer something different: a reminder that your humanity is worth tending, that slow growth is real growth, that you are not behind. Her work is widely loved across traditions and by people who have left tradition entirely. In the healing journey from church wounds, there comes a point when what you need is not another critique or another framework but something that simply sees you and says you are worth seeing. Nichols does that, consistently, with grace.`,
  },
];

// ─── Accordion Component ──────────────────────────────────────────────────────

function Accordion({ items, expanded, setExpanded }: {
  items: typeof WOUNDS;
  expanded: Record<string, boolean>;
  setExpanded: (v: Record<string, boolean>) => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map(item => {
        const open = !!expanded[item.id];
        return (
          <div key={item.id} style={{ background: CARD, border: `1px solid ${open ? PURPLE : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.2s" }}>
            <button type="button"
              onClick={() => setExpanded({ ...expanded, [item.id]: !open })}
              style={{ width: "100%", background: "transparent", border: "none", padding: "18px 20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left", gap: 12 }}
            >
              <div>
                <div style={{ color: TEXT, fontWeight: 700, fontSize: 16, marginBottom: 2 }}>{item.title}</div>
                <div style={{ color: MUTED, fontSize: 13 }}>{item.summary}</div>
              </div>
              <span style={{ color: PURPLE, fontSize: 20, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
            </button>
            {open && (
              <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                <div style={{ paddingTop: 16, color: TEXT, fontSize: 15, lineHeight: 1.7, whiteSpace: "pre-line" }}>
                  {item.body}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ChurchForSkepticsPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_church-for-skeptics_tab", "wounds");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedPanel, setSelectedPanel] = usePersistedState<string>("vine_church-for-skeptics_selected_panel", "health-signs");

  const tabs: { id: Tab; label: string }[] = [
    { id: "wounds", label: "Understanding the Wounds" },
    { id: "process", label: "The Healing Process" },
    { id: "finding", label: "Finding a Healthy Church" },
    { id: "voices", label: "Voices That Help" },
    { id: "videos", label: "🎬 Videos" },
  ];

  const currentPanel = CHURCH_PANELS.find(p => p.id === selectedPanel) ?? CHURCH_PANELS[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-block", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: PURPLE, letterSpacing: "0.08em", marginBottom: 16, textTransform: "uppercase" }}>
            A Re-Entry Guide
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 12, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Church for Skeptics
          </h1>
          <p style={{ color: MUTED, fontSize: 17, maxWidth: 580, margin: "0 auto", lineHeight: 1.6 }}>
            For people who've been burned, disillusioned, or deeply wounded by a church experience — and aren't sure whether anything could be trusted again. You're not broken for questioning. You're human.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
            {["No pressure", "No performance", "No platitudes"].map(tag => (
              <span key={tag} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 12, color: MUTED }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 36, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, overflowX: "auto" }}>
          {tabs.map(t => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: "1 1 auto",
                padding: "10px 14px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.15s, color 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Tab 1: Wounds ── */}
        {activeTab === "wounds" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Understanding the Wounds</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.6 }}>
                Before anything else, it helps to name what happened. Church hurt comes in many forms, and each one leaves a specific kind of damage. You may recognize yourself in one of these — or several.
              </p>
            </div>
            <Accordion items={WOUNDS} expanded={expanded} setExpanded={setExpanded} />
            <div style={{ marginTop: 28, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                <span style={{ color: GREEN, fontWeight: 700 }}>A note on reading this:</span> You may find that naming these categories brings up grief, anger, or other strong reactions. That's appropriate. This content is here to validate your experience, not to re-traumatize you. Take it at whatever pace you need.
              </p>
            </div>
          </div>
        )}

        {/* ── Tab 2: Healing Process ── */}
        {activeTab === "process" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>The Healing Process</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.6 }}>
                This is not a checklist. These are not sequential requirements. They are waypoints that many people move through, often non-linearly and sometimes more than once. There is no timeline and no destination you're required to reach.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div style={{ position: "absolute", left: 28, top: 0, bottom: 0, width: 2, background: BORDER }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {STEPS.map((step, i) => (
                  <div key={step.n} style={{ display: "flex", gap: 24, paddingBottom: i < STEPS.length - 1 ? 36 : 0 }}>
                    {/* Number circle */}
                    <div style={{ flexShrink: 0, width: 56, height: 56, borderRadius: "50%", background: CARD, border: `2px solid ${PURPLE}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, color: GREEN, zIndex: 1, position: "relative" }}>
                      {step.n}
                    </div>
                    {/* Content */}
                    <div style={{ flex: 1, paddingTop: 8 }}>
                      <div style={{ fontWeight: 800, fontSize: 17, marginBottom: 8, color: TEXT }}>{step.title}</div>
                      <div style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 40, background: CARD, border: `1px solid ${GREEN}22`, borderRadius: 12, padding: 24 }}>
              <div style={{ fontWeight: 800, color: GREEN, marginBottom: 8, fontSize: 15 }}>You are not obligated to forgive on anyone else's timeline.</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Forgiveness is real, and it matters — but it is not the same as reconciliation, trust, or returning to proximity with someone who harmed you. Forgiveness does not require the other party to have apologized or changed. It also doesn't happen by deciding to forgive. It is a process, not an event. And it cannot be rushed by external pressure without becoming one more way the church asks you to absorb damage for its benefit.
              </p>
            </div>
          </div>
        )}

        {/* ── Tab 3: Finding a Healthy Church ── */}
        {activeTab === "finding" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Finding a Healthy Church</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.6 }}>
                If and when you're ready. No church is perfect — but some are genuinely healthier than others, and there are patterns that distinguish them. Select a topic to explore.
              </p>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              {/* Left panel — list */}
              <div style={{ flexShrink: 0, width: 220, display: "flex", flexDirection: "column", gap: 4, position: "sticky", top: 20 }}>
                {CHURCH_PANELS.map(panel => (
                  <button type="button"
                    key={panel.id}
                    onClick={() => setSelectedPanel(panel.id)}
                    style={{
                      width: "100%",
                      background: selectedPanel === panel.id ? CARD : "transparent",
                      border: `1px solid ${selectedPanel === panel.id ? panel.color : "transparent"}`,
                      borderRadius: 8,
                      padding: "12px 14px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.15s",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: panel.color, fontWeight: 900, fontSize: 15, width: 20, textAlign: "center" }}>{panel.icon}</span>
                      <span style={{ color: selectedPanel === panel.id ? TEXT : MUTED, fontWeight: selectedPanel === panel.id ? 700 : 400, fontSize: 13, lineHeight: 1.3 }}>{panel.title}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right panel — detail */}
              <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, minHeight: 400 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${currentPanel.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: currentPanel.color, fontWeight: 900 }}>
                    {currentPanel.icon}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, margin: 0, color: TEXT }}>{currentPanel.title}</h3>
                </div>
                <div style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, whiteSpace: "pre-line" }}>
                  {currentPanel.content.split(/\*\*(.+?)\*\*/).map((part, i) =>
                    i % 2 === 1
                      ? <strong key={i} style={{ color: TEXT, fontWeight: 700 }}>{part}</strong>
                      : <span key={i}>{part}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Tab 4: Voices ── */}
        {activeTab === "voices" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Voices That Help</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.6 }}>
                These authors, therapists, and poets have helped thousands of wounded people find their footing. They don't all agree on everything — and that's fine. Read the ones that seem most useful for where you are right now.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {VOICES.map(voice => (
                <div key={voice.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
                  {/* Top accent */}
                  <div style={{ height: 3, borderRadius: 2, background: voice.color }} />
                  {/* Name + years */}
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16, color: TEXT, marginBottom: 3 }}>{voice.name}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{voice.years}</div>
                  </div>
                  {/* Quote */}
                  <div style={{ borderLeft: `3px solid ${voice.color}`, paddingLeft: 12 }}>
                    <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>"{voice.quote}"</p>
                  </div>
                  {/* Description */}
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{voice.desc}</p>
                  {/* Books */}
                  <div>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 8 }}>Key Works</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      {voice.books.map(book => (
                        <div key={book} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ color: voice.color, fontSize: 10 }}>▸</span>
                          <span style={{ color: MUTED, fontSize: 12, fontStyle: "italic" }}>{book}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <div style={{ fontWeight: 800, fontSize: 15, color: TEXT, marginBottom: 8 }}>A note on these recommendations</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                These voices represent a range of theological positions. Some hold more traditional views; others are more progressive. What they share is intellectual honesty, pastoral care for wounded people, and a refusal to minimize harm for the sake of institutional comfort. You don't have to agree with everything any of them says to find their work valuable.
              </p>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "qOE6jJ4EGqg", title: "Questioning Christianity: Faith and Proof", channel: "Timothy Keller", description: "The first episode of Keller's seven-part series for skeptics — addressing how faith and reason relate and why doubting is not incompatible with genuine Christianity." },
                  { videoId: "4uIvOniW8xA", title: "Making Sense of God: An Invitation to the Skeptical", channel: "Tim Keller / Talks at Google", description: "Keller's talk at Google headquarters on why Christianity makes more sense of the human experience than secular alternatives, given before a largely skeptical audience." },
                  { videoId: "AYLEymhsEHg", title: "Pastor to Skeptics: Becoming a Christian and Dealing with Doubt", channel: "Tim Keller / Unbelievable?", description: "Keller reflects on his urban ministry to doubters and skeptics — what draws people toward faith, how to hold questions honestly, and what genuine conversion looks like." },
                  { videoId: "QXZ2qN1XBPQ", title: "Questioning Christianity: Meaning", channel: "Timothy Keller", description: "Keller explores how Christianity offers a richer account of meaning and purpose than secular alternatives — and why the skeptic's own longings point toward the gospel." },
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
      </main>
      <Footer />
    </div>
  );
}
