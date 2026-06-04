"use client";
import { useState } from "react";
import VerseRef from "@/components/VerseRef";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#c9a227";
const TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "what-is" | "why" | "how" | "stories" | "when-hard" | "videos";

const WHAT_IS_ITEMS = [
  {
    title: "Forgiveness Is Not Minimizing",
    color: "#EF4444",
    body: "One of the most common misunderstandings about forgiveness is that it requires you to minimize what happened — to say it wasn't that bad, it wasn't a big deal, or to offer the absolution 'It's okay.' Forgiveness does not require this. In fact, genuine forgiveness requires the opposite: you must acknowledge the full weight of what was done before you can release it. You cannot forgive what you have not truly reckoned with. The cross — the central symbol of Christian forgiveness — is not a minimization of sin. It is the most serious possible statement about sin: it cost the death of the Son of God. Forgiveness is serious precisely because sin is serious."
  },
  {
    title: "Forgiveness Is Not Forgetting",
    color: GOLD,
    body: "The phrase 'forgive and forget' is not in the Bible. God's declaration — 'I will remember their sins no more' (Hebrews 8:12) — is a declaration of legal release, not a statement about divine memory. God is omniscient; he knows everything. His 'not remembering' is covenantal: he chooses not to bring the record of forgiven sins against the forgiven person. This is a model for human forgiveness, but it does not require the amnesia of experience. You can forgive someone for a serious harm without forgetting that it occurred — and without placing yourself in the position of being harmed again. Forgiveness and wisdom about ongoing safety are not in conflict."
  },
  {
    title: "Forgiveness Is Not Reconciliation",
    color: PURPLE,
    body: "Forgiveness is the internal decision to release a debt. Reconciliation is the restoration of a relationship. They are not the same thing, and they are not always both possible or wise. Forgiveness is always possible — it is a choice that lives inside you and does not require the participation of the person who harmed you. Reconciliation requires both parties: the offender must show genuine change, the relationship must be safe, and trust must be rebuilt over time. A person can fully forgive an abusive parent while maintaining healthy distance. A woman can forgive an unfaithful spouse without restoring the marriage. This distinction is not a theological loophole — it is the difference between release and wisdom."
  },
  {
    title: "Forgiveness Is Not an Emotion",
    color: GREEN,
    body: "You do not have to feel like forgiving in order to forgive. Forgiveness is not a feeling; it is a decision — a choice to release a debt regardless of what you currently feel. The feeling sometimes follows the decision, sometimes years later, and sometimes not at all. Waiting to forgive until you feel ready or until the anger has subsided is waiting for something that may never arrive. The biblical command to forgive is not a command to feel something; it is a command to choose something. 'Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you' (Ephesians 4:32). This is an act of the will, enabled by grace, not a spontaneous emotion."
  },
  {
    title: "What Forgiveness Is",
    color: "#3B82F6",
    body: "Forgiveness is the decision to release a person from the debt they owe you for a harm they caused — not because they deserve it, not because it didn't matter, but because you choose to cancel the debt. It is an act of costly grace modeled on the grace of God: 'Forgive us our debts, as we also have forgiven our debtors' (Matthew 6:12). It frees the forgiver as much as the forgiven — the person who carries unforgiveness carries a weight that damages them; the person who releases it carries something lighter.\n\nLewis Smedes described forgiveness as 'the miracle of the second chance': a re-telling of the story in which the person who wronged you is no longer defined entirely by the worst thing they did. This is not easy. It is not natural. It is a supernatural act that requires something beyond normal human capacity — which is why it is enabled by the grace of God, not produced by human willpower."
  },
];

const WHY_ITEMS = [
  {
    title: "The Parable of the Unforgiving Servant",
    verse: "Matthew 18:21-35",
    color: GOLD,
    body: "In Matthew 18, Jesus tells the story of a servant who owed an unpayable debt — ten thousand talents, roughly 200,000 years of wages — and had it cancelled by the king. The servant then went out and throttled a fellow servant who owed him a hundred denarii (a few months' wages) and had him thrown into prison. The king's response is fury: 'You wicked servant! I cancelled all that debt of yours because you begged me to. Shouldn't you have had mercy on your fellow servant just as I had on you?' (vv. 32-33).\n\nThe parable is not about the scale of human offenses against each other — it is about the scale of our debt to God compared to what anyone has done to us. Christian forgiveness is possible not because human offenses are small, but because the grace we have received is incomprehensibly larger than any debt we hold against another. The forgiven person who refuses to forgive has misunderstood — or forgotten — the magnitude of what they received."
  },
  {
    title: "Unforgiveness Holds You, Not Them",
    verse: "Hebrews 12:15",
    color: "#EF4444",
    body: "'See to it that no one misses the grace of God and that no bitter root grows up to cause trouble and defile many' (Hebrews 12:15). The imagery is precise: bitterness is a root, not a flower. It grows underground, invisibly, slowly — and then it defiles everything around it. The person you have not forgiven may have moved on entirely. They may not even know you are angry. But the root is growing in you, slowly poisoning relationships, perceptions, and capacity for joy that have nothing to do with the original offense.\n\nPsychological research is consistent with this biblical image: chronic unforgiveness is associated with elevated stress hormones, increased rates of depression and anxiety, weakened immune function, and cardiovascular disease. The body pays the price for carrying what the spirit refuses to release. Forgiveness is not just spiritual wisdom; it is physiological self-care."
  },
  {
    title: "Forgiveness Participates in the Redemption of the World",
    verse: "Colossians 3:13",
    color: PURPLE,
    body: "'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you' (Colossians 3:13). The standard is not reasonable, proportionate human forgiveness — it is the forgiveness of the Lord. The forgiveness of God is: undeserved, costly, complete, and released. This is the model. And when practiced, it participates in the same redemptive work — it breaks the cycle of harm, declares that the relationship and the person are worth more than the offense, and enacts in human form the grace of God.\n\nEvery act of genuine human forgiveness is a small sign of the kingdom of God: evidence that the cycle of retribution can be broken, that grace is real, and that the world does not have to work the way it usually does."
  },
  {
    title: "Anger Is Right — But Not Forever",
    verse: "Ephesians 4:26",
    color: GREEN,
    body: "'In your anger do not sin: Do not let the sun go down while you are still angry' (Ephesians 4:26). The command does not say 'don't be angry' — it assumes anger will come. Some anger is right: anger at injustice, at cruelty, at betrayal, is the appropriate response of a person with a moral compass. The question is not whether anger is felt but how long it is carried and what it becomes. Anger that refuses to move toward forgiveness becomes bitterness, which becomes resentment, which becomes contempt — and contempt destroys both the person who holds it and their capacity for relationship.\n\nThe sun-down principle is not legalistic — it does not demand that every offense be forgiven in 24 hours. It is directional: forgiveness should be pursued, not postponed indefinitely. It should be a destination, even if the journey is long."
  },
];

const HOW_ITEMS = [
  {
    step: 1,
    title: "Acknowledge What Happened",
    color: "#EF4444",
    body: "Begin with honesty. Name what was done to you, how it affected you, what it cost you. Do not minimize, spiritualize, or rush past this step. Forgiveness that skips the honest reckoning with harm is not forgiveness — it is suppression. Write it out if necessary. Tell a trusted person. Bring it to God in prayer. Let it be real before you try to release it.",
    verse: "Psalm 22:1 — Name the darkness before moving toward light"
  },
  {
    step: 2,
    title: "Acknowledge Your Anger",
    color: GOLD,
    body: "Anger is not a problem to be solved on the way to forgiveness — it is part of the process. Suppressed anger does not disappear; it goes underground and becomes bitterness or depression. Bring your anger to God honestly: 'Lord, I am furious. Here is what was done to me. Here is how it hurt me. Here is what I wanted to do in return.' The Psalms model this kind of honest, angry prayer. God can handle your anger. He invites it.",
    verse: "Psalm 55:1-3 — Give your anger to God before you give the debt to grace"
  },
  {
    step: 3,
    title: "Choose to Forgive",
    color: PURPLE,
    body: "At some point, after honest reckoning and honest feeling, comes the choice. It may be a single decision; it may be a decision you make repeatedly as the wound resurfaces. It may need to be spoken aloud or written down: 'I choose to forgive [name] for [specific harm]. I release the debt they owe me. I am no longer going to hold this against them.' This is not a feeling; it is a declaration. You may need to make it many times before it settles.",
    verse: "Colossians 3:13 — Forgive as the Lord forgave you"
  },
  {
    step: 4,
    title: "Pray for the Person",
    color: GREEN,
    body: "Jesus's command — 'pray for those who persecute you' (Matthew 5:44) — is both a moral directive and a psychological one. It is nearly impossible to pray genuinely for someone and continue to hate them simultaneously. The prayer does not need to be warm or generous. Start with: 'God, I am choosing to pray for [name]. I don't want to. But you love them. Please work in their life.' Let the prayer be honest. The act of praying, not the feelings with which you pray, is the practice that slowly changes the heart.",
    verse: "Matthew 5:44 — Pray for those who have wronged you"
  },
  {
    step: 5,
    title: "Maintain Forgiveness Over Time",
    color: "#3B82F6",
    body: "Forgiveness for serious harm is not a single event — it is a practice over time. The wound will resurface. Anger will return. The temptation will be to conclude that the forgiveness didn't work or wasn't real. This is almost always wrong. The recurrence of pain is not the failure of forgiveness; it is the normal experience of healing from real harm. When the anger returns, return to the decision: 'I have chosen to release this. I release it again now.' Over time, the distance between recurrences increases. The grip loosens. This is not forgetting — it is healing.",
    verse: "Matthew 18:22 — Seventy-seven times: forgiveness is a practice, not an event"
  },
];

const STORIES_ITEMS = [
  {
    name: "Joseph",
    source: "Genesis 37-50",
    color: GOLD,
    icon: "📜",
    story: "Joseph was sold into slavery by his own brothers — the people who should have been his closest protectors. He spent years in slavery and prison, falsely accused, forgotten. When God elevated him to power in Egypt and his brothers came to him in desperate need, Joseph had every legitimate reason to exact revenge. Instead, he wept (Genesis 45:2) and said: 'Do not be distressed and do not be angry with yourselves for selling me here, because it was to save lives that God sent me ahead of you' (45:5). His forgiveness was not the denial of the wrong — it was a re-reading of the story through the lens of God's redemptive purposes. He did not minimize the harm. He placed it within a larger narrative.",
    quote: "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives. — Genesis 50:20"
  },
  {
    name: "Corrie ten Boom",
    source: "1947 — after the concentration camps",
    color: PURPLE,
    icon: "✝️",
    story: "Corrie ten Boom survived the Nazi concentration camps where her sister Betsie died. She spent years after the war speaking on forgiveness — and describing it as the hardest thing she ever did. In 1947 in Munich, a man who had been a guard at Ravensbruck — one of the cruellest — approached her after a talk and extended his hand, saying he had become a Christian and asking for her forgiveness. She writes: 'I had to do it — I knew that. The message that God forgives has a prior condition: that we forgive those who have injured us... And still I stood there with the coldness clutching my heart. But forgiveness is not an emotion — I knew that too. Forgiveness is an act of the will, and the will can function regardless of the temperature of the heart. Jesus, help me! I prayed silently. I can lift my hand. I can do that much. You supply the feeling.' She reached out her hand. And in that moment, she reports, she felt the warmth of forgiveness flood her — not before the act, but through it.",
    quote: "Forgiveness is an act of the will, and the will can function regardless of the temperature of the heart."
  },
  {
    name: "Immaculée Ilibagiza",
    source: "Rwanda Genocide, 1994",
    color: "#EF4444",
    icon: "🕊️",
    story: "Immaculée Ilibagiza lost most of her family in the Rwandan genocide of 1994. She survived by hiding in a small bathroom with seven other women for 91 days while the killing raged outside. In the weeks that followed, holding her rosary and praying for hours each day, she made the decision to forgive the men who had killed her family — not because it was easy, but because she understood that the alternative was to become something like them. She later visited the man who had killed her mother and brother in prison, looked at him, and said 'I forgive you.' Her memoir 'Left to Tell' is one of the most powerful accounts of forgiveness under the most extreme conditions ever written.",
    quote: "I realized that my hatred toward the killers was slowly killing me. I could not let hate take away what they had already tried to take."
  },
  {
    name: "Mina Anderson — Parents of a Drunk Driver",
    source: "True story, North Carolina",
    color: GREEN,
    icon: "🚗",
    story: "When a drunk driver killed their son, Eric Anderson's parents were consumed by grief and rage. What happened in the years that followed is an extraordinary story of forgiveness: they eventually met the young man who had killed their son, forgave him, and advocated for a sentence that included restorative justice elements rather than only punitive ones. They did not minimize what he had done. They did not pretend their grief was less than it was. But they chose to release the debt — for their own sake, for his, and for the sake of what they believed about God. Their story has been told in churches and schools across the country as an account of what forgiveness actually looks like — costly, difficult, and real.",
    quote: "Forgiveness is not for them. It's for us. It set us free."
  },
];

const WHEN_HARD_ITEMS = [
  {
    q: "What if the person hasn't apologized — or won't?",
    a: "Forgiveness does not require an apology. It requires a decision on your part — a unilateral release of the debt regardless of the other person's response. This is both the hardest thing about forgiveness and its most transformative feature: it gives you power over something the other person's behavior cannot take away. You do not have to wait for them to apologize before you can begin to be free. You can choose to release the debt today, even while the other person denies or minimizes what they did. This is the hardest form of forgiveness — and the most freeing."
  },
  {
    q: "What about abuse — must I forgive my abuser?",
    a: "Yes — and no. Forgiveness (releasing the debt internally) is commanded for all Christians, and it is ultimately for your freedom, not theirs. Reconciliation (restoring the relationship) is not always safe, required, or wise. You can forgive an abusive parent, spouse, or partner while maintaining healthy, firm limits on contact. Forgiveness does not require you to place yourself back in harm's way. Forgiveness is not the same as restoration of relationship. Wisdom about your safety and the safety of your children is not in conflict with forgiveness — it is part of the same commitment to honoring the image of God in yourself that forgiveness requires."
  },
  {
    q: "What if the person is dead?",
    a: "Forgiveness is an internal process — it does not require the physical presence of the person who harmed you. You can forgive someone who has died: you can write them a letter you will never send, speak your forgiveness aloud in prayer, or work through it with a counselor. The harm was real, your anger is real, and the release is real — even if they will never know you released it. This kind of forgiveness is often the most important for the living person who carries it."
  },
  {
    q: "What if I forgive and the anger comes back?",
    a: "This is normal and does not mean the forgiveness was not real. Forgiveness for deep harm is a decision that must be renewed, sometimes repeatedly, as the wound resurfaces. When the anger returns, it is an invitation to return to the decision: 'I have chosen to release this debt. I release it again now.' Over time, the distance between recurrences typically grows. The grip loosens. Forgiveness is a practice, not a one-time transaction — and the recurrence of pain is evidence of the depth of the harm, not evidence that the forgiveness failed."
  },
  {
    q: "What about forgiving yourself?",
    a: "Self-forgiveness is one of the most neglected aspects of Christian spirituality. Many Christians accept intellectually that God has forgiven them while continuing to condemn themselves. This is not humility — it is a failure to receive grace. If God has forgiven you in Christ — fully, finally, and freely — then refusing to accept that forgiveness is a kind of refusal of the gospel. The appropriate response to genuine sin is: genuine repentance, genuine restitution where possible, genuine reception of God's forgiveness, and genuine release of the debt you hold against yourself. You are not more morally serious than God. If he has forgiven you, you may forgive yourself."
  },
  {
    q: "What if forgiveness feels impossible?",
    a: "It may be. Some harms are so deep that forgiveness cannot be achieved by human effort alone — it requires grace that only God can supply. The appropriate response when forgiveness feels impossible is not to try harder but to ask differently: not 'God, make me feel like forgiving' but 'God, make me willing to forgive. Make me willing to be willing.' This is the prayer Corrie ten Boom prayed when she extended her hand. The willingness is the door. God does the rest. Start with the smallest possible act of the will — and trust him for the rest."
  },
];

const VIDEOS = [
  { videoId: "PG5_ajXRaXs", title: "Forgiveness: Why It's So Difficult", channel: "Tim Keller", description: "Keller explores the theology and psychology of forgiveness — why it is both commanded and genuinely costly, and what it means to forgive as God has forgiven us." },
  { videoId: "DH9mGMPBIoM", title: "The Joseph Story: Forgiveness and Providence", channel: "Tim Keller", description: "An exploration of the most sustained biblical narrative of forgiveness — Joseph and his brothers — and what it teaches about God's redemptive purposes in human harm." },
  { videoId: "rGoZcMWmSmQ", title: "Left to Tell — Immaculée Ilibagiza", channel: "Focus on the Family", description: "Immaculée Ilibagiza tells her story of surviving the Rwandan genocide and the extraordinary forgiveness she chose in the aftermath." },
  { videoId: "H7q_lezfF-I", title: "What Forgiveness Is Not", channel: "Gospel Coalition", description: "A careful theological treatment of the common misconceptions about forgiveness — what it doesn't require, and what it actually accomplishes." },
];

export default function ForgivenessPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_forgiveness_tab", "what-is");
  const [openWhatIs, setOpenWhatIs] = useState<number | null>(0);
  const [openWhy, setOpenWhy] = useState<number | null>(null);
  const [openHow, setOpenHow] = useState<number | null>(0);
  const [activeStory, setActiveStory] = useState(0);
  const [openWhenHard, setOpenWhenHard] = useState<number | null>(null);

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "what-is", label: "What Is Forgiveness", icon: "❓" },
    { id: "why", label: "Why Forgive", icon: "💡" },
    { id: "how", label: "How to Forgive", icon: "🛤️" },
    { id: "stories", label: "Stories", icon: "📜" },
    { id: "when-hard", label: "When It's Hard", icon: "⚡" },
    { id: "videos", label: "Videos", icon: "🎬" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main>

      {/* Hero */}
      <div style={{
        background: `linear-gradient(160deg, ${CARD} 0%, #1a1a0a 50%, ${BG} 100%)`,
        borderBottom: `1px solid ${BORDER}`,
        padding: "100px 20px 60px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>🕊️</div>
        <h1 style={{
          fontFamily: "var(--font-cormorant, Georgia, serif)",
          fontSize: "clamp(36px, 5vw, 58px)",
          fontWeight: 700,
          marginBottom: 16,
          background: `linear-gradient(135deg, ${GOLD}, ${TEXT})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>The Practice of Forgiveness</h1>
        <p style={{ color: MUTED, fontSize: 18, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.7 }}>
          Forgiveness is not minimizing, forgetting, or requiring reconciliation. It is the costly, supernatural decision to release a debt — and in doing so, to be released yourself.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          {["Matthew 18", "Genesis 50:20", "Colossians 3:13", "Ephesians 4:32"].map(ref => (
            <span key={ref} style={{ background: `${GOLD}20`, border: `1px solid ${GOLD}40`, color: GOLD, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>{ref}</span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Tab Nav */}
        <div style={{ display: "flex", gap: 4, margin: "32px 0", background: CARD, borderRadius: 14, padding: 6, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)} style={{
              flex: "1 1 auto",
              padding: "10px 12px",
              borderRadius: 10,
              border: "none",
              background: activeTab === t.id ? GOLD : "transparent",
              color: activeTab === t.id ? BG : MUTED,
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
              transition: "all 0.2s",
              minWidth: 100,
            }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* WHAT IS FORGIVENESS TAB */}
        {activeTab === "what-is" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GOLD, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>What Forgiveness Actually Is (and Isn't)</h2>
              <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                Before we can practice forgiveness, we need to understand what it actually is — and what it is not. Most people avoid forgiveness not because they are unwilling but because they misunderstand it. Clearing up the misconceptions is the first step.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {WHAT_IS_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${openWhatIs === i ? item.color + "60" : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <button type="button" onClick={() => setOpenWhatIs(openWhatIs === i ? null : i)} style={{
                    width: "100%", padding: "18px 24px", background: "transparent", border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0, display: "block" }} />
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 16 }}>{item.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18, transform: openWhatIs === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", flexShrink: 0, marginLeft: 12 }}>+</span>
                  </button>
                  {openWhatIs === i && (
                    <div style={{ padding: "0 24px 22px" }}>
                      {item.body.split("\n\n").map((para, pi) => (
                        <p key={pi} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: `${GOLD}12`, border: `1px solid ${GOLD}30`, borderRadius: 14, padding: 28, marginTop: 24, textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: TEXT, fontSize: 22, fontStyle: "italic", lineHeight: 1.6, marginBottom: 12 }}>
                &ldquo;Forgiveness is the miracle of the second chance — a re-telling of the story in which the person who wronged you is no longer defined entirely by the worst thing they did.&rdquo;
              </p>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>— Lewis Smedes, <em>Forgive and Forget</em></p>
            </div>
          </div>
        )}

        {/* WHY FORGIVE TAB */}
        {activeTab === "why" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GOLD, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Why We Must Forgive</h2>
              <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                The command to forgive is one of the most consistent, uncompromising instructions in the New Testament. Jesus teaches it, demonstrates it, and builds it into the Lord&apos;s Prayer. Understanding why makes the command less arbitrary — and more urgent.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {WHY_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${openWhy === i ? item.color + "60" : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <button type="button" onClick={() => setOpenWhy(openWhy === i ? null : i)} style={{
                    width: "100%", padding: "18px 24px", background: "transparent", border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0, display: "block" }} />
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                      <span style={{ background: `${item.color}20`, color: item.color, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={item.verse} /></span>
                      <span style={{ color: MUTED, fontSize: 18, transform: openWhy === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                    </div>
                  </button>
                  {openWhy === i && (
                    <div style={{ padding: "0 24px 22px" }}>
                      {item.body.split("\n\n").map((para, pi) => (
                        <p key={pi} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HOW TO FORGIVE TAB */}
        {activeTab === "how" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GOLD, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>How to Forgive: A Practical Guide</h2>
              <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                Forgiveness is not a single moment — it is a process. For minor offenses, the process may be brief. For deep harms, it may take months or years. These steps are not a formula but a framework for moving toward the release that forgiveness ultimately requires.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {HOW_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${openHow === i ? item.color + "60" : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <button type="button" onClick={() => setOpenHow(openHow === i ? null : i)} style={{
                    width: "100%", padding: "18px 24px", background: "transparent", border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${item.color}25`, border: `2px solid ${item.color}60`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{item.step}</div>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18, transform: openHow === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", flexShrink: 0, marginLeft: 12 }}>+</span>
                  </button>
                  {openHow === i && (
                    <div style={{ padding: "0 24px 22px" }}>
                      <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{item.body}</p>
                      <div style={{ background: `${item.color}10`, border: `1px solid ${item.color}30`, borderRadius: 10, padding: 12 }}>
                        <p style={{ color: item.color, fontSize: 13, fontStyle: "italic", margin: 0 }}><VerseRef reference={item.verse} /></p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STORIES TAB */}
        {activeTab === "stories" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GOLD, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Stories of Extraordinary Forgiveness</h2>
              <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                These are people who chose to forgive under conditions that most of us will never face — and whose stories demonstrate what forgiveness actually looks like when the cost is real.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              {STORIES_ITEMS.map((s, i) => (
                <button type="button" key={i} onClick={() => setActiveStory(i)} style={{
                  flex: "1 1 auto",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: `1px solid ${activeStory === i ? s.color : BORDER}`,
                  background: activeStory === i ? `${s.color}18` : CARD,
                  color: activeStory === i ? s.color : MUTED,
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "all 0.2s",
                }}>
                  <span>{s.icon}</span> {s.name}
                </button>
              ))}
            </div>
            {(() => {
              const s = STORIES_ITEMS[activeStory];
              return (
                <div style={{ background: CARD, border: `1px solid ${s.color}40`, borderRadius: 14, padding: 28 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                    <span style={{ fontSize: 32 }}>{s.icon}</span>
                    <div>
                      <h3 style={{ color: s.color, fontWeight: 800, fontSize: 22, margin: 0 }}>{s.name}</h3>
                      <div style={{ color: MUTED, fontSize: 13 }}>{s.source}</div>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{s.story}</p>
                  <div style={{ background: BG, borderLeft: `3px solid ${s.color}`, borderRadius: "0 10px 10px 0", padding: "14px 18px" }}>
                    <p style={{ color: s.color, fontSize: 16, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-cormorant, Georgia, serif)" }}>&ldquo;{s.quote}&rdquo;</p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* WHEN IT'S HARD TAB */}
        {activeTab === "when-hard" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GOLD, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>When Forgiveness Is Hard</h2>
              <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                The command to forgive is consistent. The practice is often agonizing. These are the hardest questions — addressed honestly, without minimizing the difficulty or the cost.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {WHEN_HARD_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${openWhenHard === i ? PURPLE + "60" : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <button type="button" onClick={() => setOpenWhenHard(openWhenHard === i ? null : i)} style={{
                    width: "100%", padding: "18px 24px", background: "transparent", border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left"
                  }}>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.q}</span>
                    <span style={{ color: MUTED, fontSize: 18, transform: openWhenHard === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", flexShrink: 0, marginLeft: 12 }}>+</span>
                  </button>
                  {openWhenHard === i && (
                    <div style={{ padding: "0 24px 22px" }}>
                      <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28, marginTop: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: 18, marginBottom: 12 }}>A Prayer for When Forgiveness Feels Impossible</h3>
              <div style={{ background: BG, borderRadius: 10, padding: 20, borderLeft: `3px solid ${GREEN}` }}>
                <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>
                  &ldquo;Lord, I cannot forgive this in my own strength. I do not feel like forgiving. I am still angry, still hurt, still carrying this. But I know that you command forgiveness and that you supply the grace to do what you command. Make me willing to forgive. Make me willing to be willing. I give you the debt I am holding — I do not know how to release it, but I ask you to release it through me. Do what I cannot do. For your glory, and for my freedom. Amen.&rdquo;
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GOLD, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0 }}>Sermons, lectures, and stories about the theology and practice of forgiveness — from the deeply personal to the extraordinarily costly.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allowFullScreen
                  />
                  <div style={{ padding: "16px 20px" }}>
                    <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 17, marginBottom: 4 }}>{v.title}</h4>
                    <p style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
