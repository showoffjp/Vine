"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "hard" | "stories" | "practices";

const THEOLOGY = [
  { title: "Forgiveness is Not Optional", verse: "Matthew 6:14-15", body: "'If you forgive other people when they sin against you, your heavenly Father will also forgive you. But if you do not forgive others their sins, your Father will not forgive your sins' (Matthew 6:14-15). Jesus's language is stark. The Lord's Prayer ties divine forgiveness and human forgiveness together in a single breath. The person who refuses to forgive has not yet understood what they themselves have been forgiven." },
  { title: "Forgiveness is Not the Same as Reconciliation", verse: "Romans 12:18", body: "Forgiveness is unilateral — you can forgive someone who has not apologized, is not present, or is dead. Reconciliation is bilateral — it requires both parties and cannot be forced. 'As far as it depends on you, live at peace with everyone' (Romans 12:18) — the qualifier 'as far as it depends on you' acknowledges that some relationships cannot be reconciled. You can forgive without restoring the relationship, especially where safety is at risk." },
  { title: "Forgiveness as Release", verse: "Colossians 3:13", body: "'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you' (Colossians 3:13). The root word for forgiveness in Greek (aphiemi) means to release or send away. Forgiveness is the act of releasing the debt — not declaring that no wrong was done, not pretending the pain didn't happen, but releasing the claim to collect the debt. It frees the forgiver at least as much as the forgiven." },
  { title: "Seventy Times Seven", verse: "Matthew 18:22", body: "When Peter asks if forgiving seven times is sufficient, Jesus replies: seventy times seven (Matthew 18:22). This is not a mathematical limit (490) but a statement that there is no limit. The parable that follows (the unforgiving servant) makes the point explicit: the servant who was forgiven an infinite debt then refused to forgive a tiny one. The capacity to forgive is proportional to the understanding of how much one has been forgiven." },
  { title: "The Parable of the Prodigal", verse: "Luke 15:20", body: "The father sees the returning son 'while he was still a long way off' — he was watching. He ran, embraced, and restored before a single word of repentance was spoken. The father's forgiveness was prior to and independent of the son's performance. This is the picture of divine forgiveness — not earned by repentance but responding to it. And it is the model for human forgiveness: offered first, welcomed when received." },
];

const HARD_CASES = [
  { case: "Forgiving Abuse", desc: "One of the most pastorally fraught applications. Biblical forgiveness does not require returning to an abusive situation or pretending the harm was not real.", response: "Forgiveness releases the debt; it does not require continued exposure to harm. Forgiving an abusive parent does not require maintaining a relationship with them. Safety is a legitimate consideration that is separate from the spiritual work of forgiveness. Seek pastoral and professional support for this work." },
  { case: "Forgiving the Unrepentant", desc: "The hardest case: the person who harmed you shows no remorse, no acknowledgment, and no change.", response: "Forgiveness does not require the other person's participation. It is a transaction between you and God. You release the debt; God handles the account. Waiting for repentance before forgiving gives the offender continued control over your healing. Forgive for your own sake and God's command — not for theirs." },
  { case: "Forgiving God", desc: "Many people carry anger toward God for unanswered prayer, tragedy, or perceived abandonment. This is not a category the Bible technically recognizes (God does not sin) — but the emotional reality is common.", response: "Bring the anger directly to God. The lament psalms model this: honest, even accusatory speech to God. God is not threatened by anger; he is present to it. The 'forgiveness of God' is better understood as releasing the expectation of how God should have acted and receiving the relationship again as it actually is." },
  { case: "Forgiving Yourself", desc: "Self-forgiveness is not a biblical category — but self-condemnation after genuine repentance is a spiritual problem. 'There is now no condemnation for those who are in Christ Jesus' (Romans 8:1).", response: "The solution to self-condemnation is not self-forgiveness but receiving divine forgiveness. If God has forgiven the sin, refusing to accept that forgiveness is a form of pride — placing your judgment above God's. Receive the forgiveness that has already been given. Act in accordance with forgiven status, not condemned status." },
  { case: "When Forgiveness Doesn't Feel Real", desc: "Forgiveness is a choice, not a feeling. It is possible to decide to forgive and still experience waves of anger, grief, or resentment.", response: "Forgiveness is not a single moment but often a process — especially for deep wounds. The decision is made; the feelings are processed over time. Each time resentment resurfaces, re-choose forgiveness. This is what C.S. Lewis called forgiving 'again' — not that the first forgiveness failed, but that the wound requires repeated release." },
];

const STORIES = [
  {
    id: "corrie",
    name: "Corrie Ten Boom",
    context: "Post-WWII Germany",
    color: "#3B82F6",
    story: "Corrie Ten Boom survived Ravensbruck concentration camp. Her sister Betsie died there. After the war she lectured on forgiveness across Germany. At one of her talks, a man approached her and extended his hand — he had been one of the cruelest guards at Ravensbruck. 'I became a Christian,' he said. 'I know God has forgiven me, but I would like to hear it from you as well.' She describes feeling nothing — a woodenness and coldness. She prayed silently: 'Jesus, I cannot forgive this man. Give me your forgiveness.' As she reached out to shake his hand, she felt a warmth running through her arm and shoulder. 'I forgive you, brother,' she said with all her heart.",
    lesson: "Forgiveness is often not a feeling that precedes action but a grace that follows it. The act of extending the hand drew the grace that the emotion had not yet produced. Corrie's account is perhaps the most cited illustration of forgiveness in 20th-century Christian literature.",
  },
  {
    id: "amish",
    name: "The Amish of Nickel Mines",
    context: "Lancaster County, PA, 2006",
    color: "#EC4899",
    story: "On October 2, 2006, a man entered an Amish schoolhouse in Nickel Mines, Pennsylvania, and shot ten girls, killing five, before killing himself. Hours after the shooting, Amish community members visited the shooter's family to offer comfort and forgiveness. They attended his funeral. They established a fund for the shooter's widow and children. The world watched in astonishment. An Amish grandfather, explaining to a child why they must not hate the shooter, said: 'We must not think evil of this man.'",
    lesson: "The Amish response shocked the secular world because it was incomprehensible within a purely human framework of justice and proportionality. Their forgiveness was not excusing the act or denying the grief — they were devastated. It was the living expression of a theology practiced for generations. Forgiveness is a communal practice before it is an individual achievement.",
  },
  {
    id: "tutu",
    name: "Desmond Tutu & Truth and Reconciliation",
    context: "Post-Apartheid South Africa, 1996-1998",
    color: "#F59E0B",
    story: "After the end of apartheid, the Truth and Reconciliation Commission (TRC) under Archbishop Desmond Tutu created a process where perpetrators of human rights violations could confess their crimes publicly and receive amnesty in exchange for full disclosure. Victims could speak publicly about what happened to them and their families. The aim was not impunity but the acknowledgment of truth as the precondition for genuine reconciliation. Tutu's theology: forgiveness does not deny the past — it refuses to let the past define the future.",
    lesson: "Tutu's contribution to the theology of forgiveness: 'Ubuntu' — I am because you are. Forgiveness restores the humanity of both victim and perpetrator. The TRC was imperfect — many perpetrators did not participate, many victims felt justice had been compromised. But it demonstrated that structured forgiveness can operate at a national scale and that truth-telling is the foundation, not the enemy, of reconciliation.",
  },
  {
    id: "smedes",
    name: "Lewis Smedes",
    context: "Theological Framework",
    color: PURPLE,
    story: "Lewis Smedes was a Reformed theologian whose book Forgive and Forget (1984) made the theology of forgiveness accessible to ordinary Christians. He famously described forgiveness: 'When you forgive, you set a prisoner free and discover that the prisoner was you.' He was careful to distinguish forgiving (releasing the debt) from excusing (pretending no wrong was done), forgetting (which is neither possible nor required), and reconciling (which requires the other party). His framework: forgiveness is a gift you give yourself in obedience to God.",
    lesson: "Smedes gave the church precise language for a reality that had been practiced without being fully understood. His distinction between forgiving and reconciling has pastoral significance: people who were told to forgive and restore a dangerous relationship were doing more than Scripture required. Forgiving is complete; reconciling is separate.",
  },
  {
    id: "joseph",
    name: "Joseph and His Brothers",
    context: "Genesis 45, 50",
    color: GREEN,
    story: "Joseph's brothers sold him into slavery out of jealousy. He spent years in slavery and prison. When he finally revealed himself to them in Egypt, he wept so loudly that the Egyptians heard him. 'I am Joseph. Is my father still living?' He was not emotionally detached; the forgiveness cost him something. He provided for his brothers and their families. When their father Jacob died, the brothers feared Joseph would finally take revenge. Joseph's response: 'You intended to harm me, but God intended it for good.' He did not minimize what they did. He did not pretend the harm was not real. But he held it within a providential frame that freed him to continue providing for them.",
    lesson: "Joseph's forgiveness was processed over years, not a single dramatic moment. The weeping suggests he was still processing pain even as he forgave. Forgiveness is not the absence of pain — it is the refusal to repay it. And it enables continued relationship without requiring the pretense that the wound never happened.",
  },
];

const PRACTICES = [
  { title: "Write an Unsent Letter", desc: "Write everything you want to say to the person who wronged you — every grievance, every pain, every accusation. Then decide what happens to the letter: burn it as an act of release, or keep it as a record of what you chose to forgive. The act of naming specifically is part of the release.", icon: "✍️" },
  { title: "Pray for Them", desc: "Jesus commands it explicitly: 'pray for those who persecute you' (Matthew 5:44). This is not easy or natural — but the act of praying for an enemy changes the person who prays at least as much as it may affect the person prayed for. Persistent prayer for someone you resent tends to erode resentment.", icon: "🙏" },
  { title: "Distinguish the Person from the Act", desc: "The person who harmed you is not the sum of the harm they caused. They are an image-bearer with their own brokenness, their own story, and their own need for grace. Seeing the full person — not only the offense — makes forgiveness possible and prevents reduction to caricature.", icon: "👁️" },
  { title: "Receive Forgiveness First", desc: "Regular confession and assurance of divine forgiveness fills the reservoir from which human forgiveness flows. The person who lives with an undimmed awareness of their own forgiveness finds forgiving others less heroic — it flows from overflow rather than requiring reserves that don't exist.", icon: "💧" },
  { title: "Involve a Counselor or Spiritual Director", desc: "Deep wounds — abuse, betrayal, prolonged harm — often require professional accompaniment to forgive well. The process of forgiveness for serious harm is not a weekend decision but a sustained journey, and wise guidance protects against both forced premature forgiveness and indefinite resentment.", icon: "🧭" },
  { title: "Mark the Forgiveness", desc: "A ritual act — prayer, a letter burned, communion, a conversation with a trusted person — can mark the moment of decision to forgive and provide a stake in the ground to return to when resentment resurfaces. 'I forgave on this day' is a reference point for the ongoing process.", icon: "✝️" },
];

export default function ForgivenessGuidePage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedStory, setSelectedStory] = useState("corrie");

  const story = STORIES.find(s => s.id === selectedStory)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🕊️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Practice of Forgiveness</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Forgiveness is not pretending the wrong didn't happen — it is releasing the debt. Jesus ties our forgiveness of others directly to our reception of God's forgiveness. It is not optional and it is not easy.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as Tab, label: "Theology", icon: "📖" },
            { id: "hard" as Tab, label: "Hard Cases", icon: "⚠️" },
            { id: "stories" as Tab, label: "Stories", icon: "📜" },
            { id: "practices" as Tab, label: "Practices", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
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

        {tab === "hard" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The command to forgive is clear; the application is complicated. These are the cases where forgiveness requires the most nuance and care.
              </p>
            </div>
            {HARD_CASES.map((c, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === c.case ? null : c.case)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === c.case ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{c.case}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === c.case ? "−" : "+"}</span>
                </button>
                {expanded === c.case && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{c.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "stories" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 190, flexShrink: 0 }}>
              {STORIES.map(s => (
                <button key={s.id} onClick={() => setSelectedStory(s.id)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedStory === s.id ? s.color : BORDER}`, background: selectedStory === s.id ? `${s.color}12` : "transparent", color: selectedStory === s.id ? s.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                  {s.name.split(" &")[0]}
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${story.color}30`, borderRadius: 14, padding: 26 }}>
                <div style={{ marginBottom: 16 }}>
                  <h2 style={{ color: story.color, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{story.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{story.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 18 }}>{story.story}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>THE LESSON</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{story.lesson}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Forgiveness is a decision that becomes a practice over time. These six practices support the process of forgiving well — not as a one-time act but as a sustained orientation.
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
