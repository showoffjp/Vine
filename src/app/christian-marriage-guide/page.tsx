"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

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


const TABS = [
  { id: "overview", label: "Overview" },
  { id: "covenant", label: "Covenant Marriage" },
  { id: "roles", label: "Roles Debate" },
  { id: "communication", label: "Communication" },
  { id: "conflict", label: "Conflict" },
  { id: "intimacy", label: "Intimacy" },
  { id: "crisis", label: "Marriage in Crisis" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const COVENANT_ITEMS = [
  { color: GOLD, title: "Marriage as Covenant, Not Contract", body: "A contract is conditional — it can be voided when the other party fails to perform. A covenant is unconditional — it is a binding commitment that creates a new relationship rather than merely regulating an existing one. The OT covenant vocabulary (hesed — steadfast love, faithfulness) describes God's commitment to Israel; marriage mirrors that commitment. Malachi 2:14: 'the LORD was witness between you and the wife of your youth, to whom you have been faithless, though she is your companion and your wife by covenant.' The covenant nature of marriage is the theological ground for perseverance through difficulty." },
  { color: BLUE, title: "The Ephesians 5 Framework", body: "Ephesians 5:22-33 is the most comprehensive NT treatment of marriage. Paul sets marriage within the context of mutual submission (5:21 — 'submit to one another'). Wives submit to husbands 'as to the Lord' (5:22); husbands love wives 'as Christ loved the church and gave himself up for her' (5:25). The husband's headship is exercised by self-giving love — the most demanding assignment in the passage. The marriage is analogical: it is to reflect the relationship between Christ and the church. Both roles serve the analogy; neither is optional." },
  { color: GREEN, title: "Genesis 2 and the One-Flesh Union", body: "'For this reason a man will leave his father and mother and be united to his wife, and they will become one flesh' (Genesis 2:24). Three movements: leaving (breaking the parent-child bond as primary), cleaving (establishing the marriage bond as primary), and becoming one flesh (full union — physical, emotional, spiritual, social). Jesus quotes this text in his teaching on divorce (Matthew 19:5) as the foundation: what God has joined, let no one separate. The one-flesh union is the theological basis for the permanence of marriage and the seriousness of divorce." },
  { color: TEAL, title: "Marriage as Gospel Display", body: "The deepest theological purpose of marriage in Ephesians 5 is to display the gospel — the relationship between Christ and the church. A husband's sacrificial love displays Christ's love for the church; a wife's responsive trust displays the church's trust in Christ. This makes marriage a public theology: every Christian marriage is a living parable of the gospel. The world should see something in a Christian marriage that it cannot produce without the gospel. The stakes of marital health are therefore not merely personal but evangelical." },
];

const ROLES_VIEWS = [
  {
    id: "comp",
    label: "Complementarianism",
    content: "Complementarians hold that men and women are equal in dignity and value but have different and complementary roles — particularly in marriage and the church. In marriage, the husband bears the responsibility of servant leadership (headship) and the wife is called to submit to her husband's leadership. Key texts: Ephesians 5:22-33, 1 Peter 3:1-7, 1 Corinthians 11:3. The Council on Biblical Manhood and Womanhood (CBMW) and theologians like Wayne Grudem and John Piper represent this view. Critics argue that 'headship' language is misused to justify authoritarianism.",
  },
  {
    id: "egal",
    label: "Egalitarianism",
    content: "Egalitarians hold that the 'submit' and 'head' language in Ephesians 5 is culturally conditioned and that the mutual submission of 5:21 is the overriding principle. In marriage, husband and wife share equal authority and make decisions mutually, without one being the designated leader. Key texts: Galatians 3:28 ('neither male nor female'), Genesis 1:26-28 (both bear the image). Christians for Biblical Equality (CBE) and theologians like Gordon Fee and Rebecca Merrill Groothuis represent this view. Critics argue that egalitarianism requires explaining away clear Pauline distinctions between male and female roles.",
  },
  {
    id: "mutual",
    label: "Mutual Submission in Practice",
    content: "Both traditions affirm that in practice, healthy Christian marriages look more alike than their theological labels suggest. Both require: selflessness, listening, prioritizing the other, making decisions that serve the family's good, and deep love. The complementarian husband who genuinely loves his wife as Christ loved the church will rarely need to exercise unilateral authority, because he is always serving his wife's good. The egalitarian couple still navigates who leads in which domain. The theological debate is real but should not be allowed to substitute for the actual work of building a loving, sacrificial marriage.",
  },
];

const COMMUNICATION_TIPS = [
  { step: "1", title: "The Gottman Four Horsemen", body: "Research by John Gottman identifies four communication patterns predictive of divorce: criticism (attacking character rather than behavior), contempt (eye-rolling, mockery, treating partner as inferior), defensiveness (counterattacking rather than receiving), and stonewalling (emotional withdrawal, shutting down). Each has an antidote: gentle start-up for criticism; building culture of appreciation for contempt; accepting responsibility for defensiveness; physiological self-soothing for stonewalling." },
  { step: "2", title: "Listen to Understand, Not to Respond", body: "Most conflict conversations are two people waiting for their turn to talk rather than genuinely listening. Active listening — reflecting back what you heard, asking clarifying questions, identifying the emotion beneath the words — communicates that the other person is valued. 'What I hear you saying is...' before responding prevents the most common misunderstandings." },
  { step: "3", title: "Separate Feelings from Facts", body: "'I feel dismissed when you check your phone during dinner' (feeling + behavior) is different from 'You always dismiss me' (character accusation). The first invites response; the second invites defensiveness. Owning your emotional experience rather than accusing your spouse's character keeps communication productive." },
  { step: "4", title: "Regular Intentional Connection", body: "Regular relationship check-ins (weekly) — not problem-solving, but genuine interest in each other's inner world — prevent the emotional disconnection that makes conflicts unsolvable. Gottman: 'Turn toward' your partner's bids for connection (the small ways people reach for attention). Couples who turn toward regularly build an emotional bank account from which to draw when conflict comes." },
  { step: "5", title: "Pray Together", body: "Couples who pray together regularly report significantly higher marriage satisfaction. Prayer creates mutual vulnerability, directs both partners toward God as the center of the marriage, and reinforces that both are under God's authority. The vulnerability of honest prayer with a spouse is itself an act of intimacy. Short, honest prayers at the end of the day are more sustainable than elaborate devotional structures." },
];

const CONFLICT_ITEMS = [
  { color: PURPLE, title: "Conflict Is Normal — Avoidance Is the Problem", body: "Every couple experiences conflict. The question is not whether conflict will occur but whether you will handle it in ways that build or erode the relationship. Conflict avoidance — pretending everything is fine, stuffing grievances, never addressing real issues — leads to emotional distance and eventual explosion. Conflict engagement, done with love and skill, deepens intimacy: you learn you can disagree and still be safe together." },
  { color: BLUE, title: "Solvable vs. Perpetual Problems", body: "Gottman's research shows that 69% of couple conflicts are perpetual — they never get 'solved' but need to be managed. Perpetual problems arise from fundamental differences in personality, values, or needs (one is a spender, one is a saver; one needs social time, one needs solitude). The goal with perpetual problems is not resolution but dialogue — understanding the dream or unmet need behind each person's position. Only 31% of conflicts are solvable. Treating perpetual problems as solvable leads to frustration; accepting them as ongoing dialogue leads to growth." },
  { color: GOLD, title: "Repair Attempts", body: "When conflict escalates, the skill of repair — breaking the negative cycle before it reaches flooding — is predictive of long-term success. Repair attempts include: humor (when appropriate), acknowledging your contribution to the conflict, asking for a break, expressing appreciation, physical touch. Couples with good repair cultures fight differently — not less often, but they interrupt the negative cycle before it causes lasting damage." },
  { color: GREEN, title: "Forgiveness and Reconciliation", body: "Christian marriage requires the regular practice of forgiveness — not as a feeling but as a decision. Colossians 3:13: 'Forgive as the Lord forgave you.' Forgiveness releases the offended spouse from the demand that the offender pay; it does not erase consequences or require premature trust. Reconciliation requires repentance from the offender; forgiveness does not. You can forgive someone who hasn't repented; reconciliation requires both parties' engagement. The gospel — of God forgiving sinners at infinite cost — is the model and the power source." },
];

const INTIMACY_ITEMS = [
  { color: GREEN, title: "Emotional Intimacy", body: "Emotional intimacy — knowing and being known at the level of your inner world — is the foundation on which sexual and spiritual intimacy rest. It is built through daily, ordinary attentiveness: asking genuine questions, remembering what matters to your spouse, sharing your own inner world honestly, and being consistently safe to talk to. Couples who prioritize emotional intimacy find that conflict decreases and sexual intimacy deepens naturally." },
  { color: GOLD, title: "Sexual Intimacy as Covenant Expression", body: "1 Corinthians 7:3-5 treats regular sexual intimacy as a mutual obligation: neither partner may deprive the other except by mutual agreement for a limited period. Sexual intimacy in marriage is not primarily about physical pleasure (though it includes that) but about covenant renewal — the exclusive, full, vulnerable self-giving that echoes the covenant of marriage. The Song of Solomon celebrates sexual love between spouses as God's design, not a concession to human weakness. When sexual intimacy is absent, it usually signals a breakdown of emotional or spiritual intimacy upstream." },
  { color: TEAL, title: "Spiritual Intimacy", body: "Spiritual intimacy — praying together, studying Scripture together, worshiping together, and serving together — gives marriage a dimension that secular marriage lacks. The shared pursuit of God creates a common center to which both partners can return when they diverge, a source of strength in crisis, and a framework of meaning that outlasts romantic feeling. Eugene Peterson: a Christian marriage is 'an act of worship.' Couples who worship and pray together consistently report significantly higher marital satisfaction and lower divorce rates." },
  { color: PURPLE, title: "Intimacy in Different Seasons", body: "Marriage moves through seasons that affect all three forms of intimacy differently: early marriage (building foundations), parenting young children (exhaustion and displacement), midlife (reassessment of identity and purpose), empty nest (rediscovery), aging together. Each season has specific threats and opportunities. The couple who understands their current season and adjusts expectations, investment, and practices accordingly will navigate transitions better than those who expect each season to look like the honeymoon." },
];

const CRISIS_ITEMS = [
  { color: BLUE, title: "Marriage Counseling", body: "Most couples wait six years after problems begin before seeking counseling — by which point the negative patterns are deeply entrenched. The research strongly supports early intervention. If you are having the same conflict repeatedly without resolution, if emotional or sexual intimacy has significantly declined, if there is chronic contempt or withdrawal — seek a skilled marriage counselor now, not later. Christian marriage counseling combines clinical skill with theological framework. The Gottman method has the strongest evidence base." },
  { color: GOLD, title: "Pornography in Marriage", body: "Pornography has become one of the most common threats to Christian marriages. It damages the user's capacity for genuine intimacy (by creating unrealistic expectations and desensitizing to real connection), wounds the spouse deeply (often experienced as betrayal), and creates secrecy that corrupts the honesty on which marriage depends. Recovery requires: full disclosure and honest accountability, clinical support (a trained sex addiction therapist), and long-term rebuilding of trust and intimacy. The spouse of the person struggling needs their own support — not just to be the accountability partner." },
  { color: TEAL, title: "Surviving Infidelity", body: "Infidelity does not necessarily end a marriage, but recovery requires: full cessation of the affair, no contact with the third party, radical honesty about what happened, sustained remorse (not just guilt), willingness to answer questions, and long-term rebuilding of trust. The injured spouse may need significant time — often 2-5 years — to move from survival to genuine healing. The question of whether to stay is complex and personal; it depends on genuine repentance, safety, and the presence of a foundation worth rebuilding. Couples therapy is essential." },
  { color: PURPLE, title: "Biblical Grounds for Divorce", body: "Jesus permits divorce on grounds of sexual immorality (Matthew 19:9) — porneia, which most scholars interpret broadly as any serious sexual betrayal. Paul adds the desertion exception for marriages where an unbelieving spouse departs (1 Cor 7:15). Most evangelical scholars also recognize abuse (which violates the covenant's basic purpose of mutual protection and love) as grounds for separation and potentially divorce. The Bible permits divorce in these cases; it does not command it. Many couples who met these criteria have chosen to remain and rebuild with intensive help." },
];

const VIDEOS = [
  { videoId: "tGsN1RDNj_Y", title: "Marriage as Covenant — Timothy Keller" },
  { videoId: "LEa3MJfRiGs", title: "Ephesians 5 and Biblical Roles — John Piper" },
  { videoId: "9n4BHlqjG3Y", title: "The Gottman Method for Christian Couples" },
  { videoId: "pBX5B8XsIWg", title: "Sexual Intimacy in Marriage — Gary Thomas" },
  { videoId: "VcRFz9C2j3Y", title: "Recovering from Infidelity — Dave and Ashley Willis" },
];

export default function ChristianMarriageGuide() {
  const [tab, setTab] = usePersistedState<string>("vine_marr_tab", "overview");
  const [rolesOpen, setRolesOpen] = usePersistedState<string>("vine_marr_roles", "");
  const [journal, setJournal] = usePersistedState<string>("vine_marr_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: GOLD + "22", color: GOLD, padding: "0.2rem 0.7rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1 }}>MARRIAGE & FAMILY</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.5rem" }}>Christian Marriage</h1>
        <p style={{ color: MUTED, fontSize: "1rem", marginBottom: "2rem", maxWidth: 680 }}>
          A comprehensive biblical guide to covenant marriage — theology, roles, communication, conflict, intimacy, and marriage in crisis.
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
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Marriage as Gospel Display</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Christian marriage is the most demanding and most rewarding calling most people will undertake. It is simultaneously a legal contract, a social institution, a psychological bond, a spiritual covenant — and, according to Ephesians 5, a living parable of the relationship between Christ and his church. The depth of that last purpose means that every Christian marriage is a public theology: it either demonstrates or obscures the gospel in its concrete, daily practice.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Form", value: "Covenant, not contract", color: GOLD },
                { label: "Pattern", value: "Christ and the church", color: BLUE },
                { label: "Foundation", value: "One-flesh union", color: GREEN },
                { label: "Practice", value: "Steadfast love (hesed)", color: TEAL },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 12, padding: "1.2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
                  <div style={{ color: item.color, fontWeight: 700 }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 14, padding: "1.3rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>
                Gary Thomas: "What if God designed marriage to make us holy more than to make us happy?" The insight is not that happiness is unimportant but that the deeper purpose of marriage is the formation of two people into the image of Christ — through the daily practice of love, forgiveness, honesty, and sacrifice. The happiness that results from a marriage built on that foundation is incomparably more durable than the happiness built on chemistry and compatibility alone.
              </p>
            </div>
          </div>
        )}

        {/* COVENANT MARRIAGE */}
        {tab === "covenant" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Theology of Covenant Marriage</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The theological foundations that distinguish Christian marriage from secular partnership.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {COVENANT_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ROLES DEBATE */}
        {tab === "roles" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Roles Debate: Complementarianism and Egalitarianism</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The most significant debate in evangelical marriage theology — two thoughtful positions held by Christians who both take Scripture seriously.
            </p>
            {ROLES_VIEWS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${rolesOpen === item.id ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setRolesOpen(rolesOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{rolesOpen === item.id ? "−" : "+"}</span>
                </button>
                {rolesOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* COMMUNICATION */}
        {tab === "communication" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Communication</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The quality of communication is the most important single factor in marriage health. Five practices that make the difference.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {COMMUNICATION_TIPS.map(s => (
                <div key={s.step} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.2rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: BLUE + "22", color: BLUE, fontWeight: 800, fontSize: "1rem", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: "0.3rem" }}>{s.title}</div>
                    <div style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.93rem" }}>{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONFLICT */}
        {tab === "conflict" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Navigating Conflict</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The question is not whether you will have conflict but what you will do with it. Biblical and research-based principles for couples.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CONFLICT_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INTIMACY */}
        {tab === "intimacy" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Intimacy in Three Dimensions</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Christian marriage involves three interconnected forms of intimacy — emotional, physical/sexual, and spiritual. All three require cultivation.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {INTIMACY_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MARRIAGE IN CRISIS */}
        {tab === "crisis" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Marriage in Crisis</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Serious marriage crises — infidelity, pornography addiction, abuse, and near-divorce — require specific responses. When to seek help and what recovery requires.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CRISIS_ITEMS.map(item => (
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
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Questions for individuals and couples to reflect on.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                "In what specific way does your marriage currently reflect the gospel? In what specific way does it fall short?",
                "What is the communication pattern in your marriage that most needs to change? What would the first step look like?",
                "Is there a conflict that has been going on so long it has become 'perpetual'? How can you move from trying to solve it to learning to dialogue about it?",
                "How intentional are you about building emotional, sexual, and spiritual intimacy? Which of the three is most depleted right now?",
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
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Teaching on Christian marriage, communication, intimacy, and restoration.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
