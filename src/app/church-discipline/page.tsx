"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "process" | "cases" | "restoration" | "videos";

const THEOLOGY_ITEMS = [
  {
    title: "The Goal Is Restoration",
    body: "Church discipline is not punitive — it is medical. Paul's instruction to hand the Corinthian man over to Satan was given 'so that his spirit may be saved in the day of the Lord' (1 Cor 5:5). The aim is his soul, not his suffering. Galatians 6:1 makes the posture explicit: 'Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently. But watch yourselves, or you also may be tempted.' The word restore (katartizo) was used of setting a broken bone or mending a fishing net — careful, skilled work that returns something to its proper function. When 2 Corinthians 2:5–11 arrives, Paul urges the church to receive the disciplined man back: 'You ought to forgive and comfort him, so that he will not be overwhelmed by excessive sorrow.' The circle is complete — discipline that does not aim at, and celebrate, restoration has missed the point entirely.",
  },
  {
    title: "Biblical Mandate",
    body: "Jesus himself gave the church a formal process in Matthew 18:15–20. It has three graduated steps: go alone to the offending brother (v. 15), then with one or two witnesses (v. 16), then tell it to the church (v. 17). The goal at each stage is to 'win your brother' — every escalation is a renewed attempt at reconciliation, not a punishment. First Corinthians 5 shows the mandate applied: a man sleeping with his stepmother, the Corinthians inexplicably proud, Paul instructing them to remove the man from fellowship. Second Thessalonians 3:14–15 adds nuance: 'Take special note of anyone who does not obey our instruction in this letter. Do not associate with them, in order that they may feel ashamed. Yet do not regard them as an enemy, but warn them as you would a fellow believer.' The mandate is clear; the spirit of it is unmistakable.",
  },
  {
    title: "The Love in Discipline",
    body: "Hebrews 12:5–11 reframes discipline entirely: 'The Lord disciplines the one he loves, and he chastens everyone he accepts as his son.' Quoting Proverbs 3:11–12, the author argues that discipline is the mark of sonship, not rejection. 'If you are not disciplined — and everyone undergoes discipline — then you are not legitimate, not true sons and daughters at all.' The implication for the church is radical: a community that never disciplines is not being kind — it is being indifferent, which is itself a form of abandonment. To watch someone walk toward destruction without a word is the opposite of love. The church that confronts sin faithfully is the church that actually believes its members matter.",
  },
  {
    title: "When the Church Fails to Discipline",
    body: "The 'happy clappy' church that never confronts sin has a name in the New Testament: Corinth. Paul writes to them from afar because they have failed to act on knowledge they clearly had. His frustration is pointed: 'And you are proud! Shouldn't you rather have gone into mourning and have put out of your fellowship the man who has been doing this?' (1 Cor 5:2). The leaven metaphor makes the point structurally: 'A little yeast leavens the whole batch of dough' (1 Cor 5:6). Tolerated, unaddressed sin does not stay contained — it normalizes, spreads, and eventually redefines what the community considers acceptable. The church that never disciplines is the church slowly becoming something other than the church.",
  },
  {
    title: "Binding and Loosing",
    body: "Matthew 18:18 follows directly on the discipline passage: 'Truly I tell you, whatever you bind on earth will be bound in heaven, and whatever you loose on earth will be loosed in heaven.' This is not incidental. Jesus attaches the authority of heaven to the gathered community's decisions about membership and accountability. This gives theological weight to church membership that many evangelicals have lost — membership is not a club affiliation but a covenant with real spiritual consequence. The gathered church, acting in Jesus's name (v. 20), exercises genuine spiritual authority when it disciplines and when it restores. This is why Matthew 18 cannot simply be privatized into personal conflict resolution — it has an ecclesial, covenantal dimension.",
  },
  {
    title: "Discipline vs. Abuse",
    body: "Not everything called 'church discipline' is church discipline. The line between legitimate accountability and spiritual abuse runs through several markers: Does the process follow Matthew 18's graduated, escalating structure — or does it skip steps and go straight to exclusion? Is the goal restoration — or is it control, silencing, or reputation management? Are the accused given clear information about the charges and an opportunity to respond — or are decisions made about them without them? Coercive control, isolation tactics, threats about eternal consequences, and the weaponization of the process against victims of abuse are not discipline — they are spiritual abuse. Red flags include: processes that protect leaders from scrutiny while holding members to strict account; discipline applied disproportionately to the powerless; and the use of Matthew 18 to silence a victim rather than address a perpetrator.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Private Conversation",
    scripture: "Matthew 18:15",
    detail:
      "'If your brother or sister sins, go and point out their fault, just between the two of you. If they listen to you, you have won them over.' Go alone. Go privately. The goal stated by Jesus is to win your brother — that is, to recover the relationship and restore the person, not to be right or to escalate. In practice: request a conversation, be specific about what you observed, listen carefully, and give the person a real chance to respond. Many situations end here. Note: this step may be appropriately skipped when the situation involves abuse, a pattern of predatory behavior, safety concerns, or when the power differential makes a private conversation unsafe for the person going.",
    caution:
      "Do not gossip before going. If you have told three friends 'for prayer,' you have already violated the spirit of this step.",
  },
  {
    number: "02",
    title: "Two or Three Witnesses",
    scripture: "Matthew 18:16",
    detail:
      "'But if they will not listen, take one or two others along, so that every matter may be established by the testimony of two or three witnesses.' The witnesses serve multiple functions: they facilitate a genuine conversation, they witness accurately to what is said, they provide accountability for both parties, and they document the exchange. These should be mature, trusted members of the community — ideally people the offending person respects. The Deuteronomy 19:15 background means the witnesses are not spectators but participants who take responsibility for what they see and hear. This is not a confrontation party — it is a formal but still private attempt at reconciliation.",
    caution:
      "Choose witnesses carefully. People who are close friends of only one party, who have a conflict of interest, or who are unable to maintain confidentiality should not serve in this role.",
  },
  {
    number: "03",
    title: "Tell It to the Church",
    scripture: "Matthew 18:17a",
    detail:
      "'If they still refuse to listen, tell it to the church.' In the local church today this typically means bringing the matter to the elders or pastoral leadership, who then shepherd the process with wisdom about how and whether to inform the broader congregation. It is not a public announcement from a pulpit as a first action. Elders and deacons have a shepherding role here — they verify that the prior steps were genuinely attempted, they meet with the person themselves, and they determine how the congregation is informed and what pastoral support is provided. The role of leadership is not to prosecute but to extend one final, formal appeal.",
    caution:
      "This step requires extensive pastoral wisdom. The manner, timing, and scope of what is told to the church requires careful judgment — not every situation warrants a congregational announcement, and the protection of all parties' dignity remains important.",
  },
  {
    number: "04",
    title: "Treat as an Outsider",
    scripture: "Matthew 18:17b; 1 Cor 5:5",
    detail:
      "'If they refuse to listen even to the church, treat them as you would a pagan or a tax collector.' The person is no longer treated as a covenant member in good standing. This involves removal from church membership, exclusion from the Lord's Table, and a change in the nature of the community's relationship with them. Importantly, Jesus's own treatment of pagans and tax collectors was never hatred — it was the posture of an outsider who is still the object of gospel love. The community continues to pray for the person and remains open to their return. The exclusion is a severe mercy, meant to produce through shame the repentance that conversation could not.",
    caution:
      "This step should never be reached quickly. If a church is reaching this step without genuinely and patiently attempting the prior three, the process has been corrupted.",
  },
  {
    number: "05",
    title: "Welcoming Repentance",
    scripture: "2 Corinthians 2:5–11",
    detail:
      "Paul's instruction to the Corinthians about the man they disciplined is unambiguous: 'You ought to forgive and comfort him, so that he will not be overwhelmed by excessive sorrow. I urge you, therefore, to reaffirm your love for him' (2 Cor 2:7–8). The church has an obligation to receive the repentant person warmly — restoration is not on probation, it is not contingent on the community's lingering suspicion, and it is not a years-long process of proving oneself. Genuine repentance — visible in changed behavior over time, in restitution where appropriate, in humble re-entry — is sufficient. The church that disciplines and then cannot truly restore has only accomplished half of what Jesus intended.",
    caution:
      "The danger of ongoing suspicion is real. Churches that discipline correctly but restore poorly — where the forgiven person is forever treated with coolness and distrust — do significant damage to the restored person and to the community's understanding of grace.",
  },
];

const CASE_ITEMS = [
  {
    title: "Sexual Immorality",
    body: "First Corinthians 5 is the paradigm case: a man is sleeping with his father's wife, the congregation knows, and they have done nothing. Paul's instruction is formal removal from the community. The key distinction throughout is between someone who sins and someone who refuses to repent. Every Christian stumbles; the question discipline addresses is what happens when a person is confronted and refuses to acknowledge the sin or change. Someone who sins, is confronted, repents, and seeks accountability is not a discipline case — they are a Christian in the normal process of sanctification. Discipline applies to the person who, upon confrontation, doubles down, minimizes, or simply continues. Unrepentance, not sin, is the trigger.",
  },
  {
    title: "False Teaching",
    body: "Titus 3:10 instructs: 'Warn a divisive person once, and then warn them a second time. After that, have nothing to do with them.' Second John 9–11 goes further: those who do not hold to the teaching of Christ are not to be welcomed or given any greeting, lest you share in their wicked work. Galatians 1:8 is Paul at his most stark: 'Even if we or an angel from heaven should preach a gospel other than the one we preached to you, let them be under God's curse.' The bar for doctrinal discipline is not every theological disagreement — it is departure from the gospel itself, from the apostolic deposit. Discipline for false teaching requires clarity about which doctrines are load-bearing and which are matters of secondary disagreement.",
  },
  {
    title: "Theft or Financial Fraud",
    body: "Acts 5 is the church's most severe recorded case of financial sin: Ananias and Sapphira lie about the proceeds of a land sale and both die. The sin is not keeping the money — Peter makes clear they were free to do that. The sin is the deception, the betrayal of trust within the covenant community. Financial fraud against the church or fellow members is a betrayal of the bond of trust that makes community possible. Restitution is properly understood as part of repentance — the Zacchaeus model (Luke 19:8) makes this concrete: 'If I have cheated anybody out of anything, I will pay back four times the amount.' Repentance in cases of financial wrongdoing that does not include willingness to make restitution should be viewed with appropriate skepticism.",
  },
  {
    title: "Domestic Violence and Abuse",
    body: "This is not a Matthew 18 discipline case for the victim — and the misapplication of Matthew 18 to abuse situations has caused catastrophic harm. Matthew 18 assumes two peers in a horizontal relationship; abuse involves a power differential and a pattern of coercive control that makes private confrontation between the two parties dangerous and inappropriate. Churches that have told abused spouses to go privately to their abuser and raise the concern, or to forgive and return home, have weaponized a text about reconciliation against the people it should protect. The victim requires protection, advocacy, and support — not a Matthew 18 process. The perpetrator's behavior should be addressed separately by leadership, may require civil authority involvement, and must not be handled in ways that endanger the victim.",
  },
  {
    title: "When Leaders Sin",
    body: "First Timothy 5:19–20 sets a specific standard for accusations against elders: 'Do not entertain an accusation against an elder unless it is brought by two or three witnesses. But those elders who are sinning you are to reprove before everyone, so that the others may take warning.' The two-part structure is significant: the threshold for receiving accusations is higher (protecting leaders from false accusations), but the consequence when proven is more public (because leadership is a public trust). Leaders who sin do not get private, quiet resolution — they receive public rebuke. The asymmetry reflects the asymmetry of the office: greater trust, greater accountability. Institutions that quietly relocate or quietly retire leaders who have sinned have inverted this entirely.",
  },
  {
    title: "Gossip and Divisiveness",
    body: "Proverbs 6:16–19 lists seven things the Lord hates; two of them are directly related to speech and division: 'a lying tongue' and 'a person who stirs up conflict in the community.' Gossip and divisiveness are treated in Scripture with a seriousness that most evangelical churches have entirely lost — they are treated as minor social sins, not as the community-destroying forces they actually are. The church that never addresses the person who consistently sows division, spreads rumors, or uses their tongue to tear down rather than build up is permitting a slow rot. Titus 3:10 ('a divisive person') makes clear that divisiveness itself, after warning, is grounds for formal action. This requires the same graduated process — and the same restorative goal — as any other sin.",
  },
];

const RESTORATION_ITEMS = [
  {
    title: "The Prodigal's Welcome",
    body: "Luke 15:20 is the image: 'But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.' The father does not wait for the son to arrive at the house, compose himself, and present a formal apology. He runs. The church's welcome of the genuinely repentant should have this quality — not suspicion, not a probationary period, not a quiet back-door re-entry. In practice this means: the elders or a representative body meets with the returning person, hears their account of repentance, receives them formally back into membership, and announces to the congregation that the person has returned. The community then treats them as fully restored, not as a person on trial.",
  },
  {
    title: "What Repentance Looks Like",
    body: "Repentance is not primarily a feeling of regret, nor is it a verbal formula — it is a change of direction that produces observable fruit. Matthew 3:8: 'Produce fruit in keeping with repentance.' The Zacchaeus model (Luke 19:8) shows what this looks like concretely: immediate, specific, costly action that addresses the harm done. Genuine repentance includes: acknowledgment of the specific sin without minimization or deflection; willingness to face consequences; active steps toward restitution or repair where possible; sustained behavioral change over time; and a posture of humility rather than defensiveness. The church does not demand perfection before receiving someone back — that would be a works-based restoration — but it does look for the fruit that accompanies genuine repentance rather than the performance of it.",
  },
  {
    title: "Restoration to Membership",
    body: "The process of re-entry into membership should be clear, dignified, and proportionate to the situation. A formal meeting with the elders is appropriate — not as a tribunal but as a pastoral conversation that allows the returning person to give an account of their repentance, ask and answer questions, and be received with prayer. Whether this requires public acknowledgment to the congregation depends on whether the original discipline was communicated to the congregation; if it was, restoration should be as well. The timeline for formal re-entry is not fixed by Scripture and should reflect wisdom: serious enough to be meaningful, not so protracted as to become its own punishment. The goal is full membership, not perpetual probation.",
  },
  {
    title: "Restoration to Leadership",
    body: "This is contested territory. First Timothy 3 and Titus 1 lay out the qualifications for elders and deacons — among them, 'above reproach' and 'the husband of one wife.' Whether a leader who has been removed for serious sin can be restored to the office of elder is debated: Wayne Grudem and others argue that the office is forfeited permanently for certain sins (particularly sexual sin), because 'above reproach' cannot be re-established once certain lines are crossed. Others argue that restoration to office is possible with sufficient time, demonstrated repentance, and community trust re-established. What is clear: the distinction between restoration to the church (which is unambiguous) and restoration to the office of elder (which is contested) must be maintained. Restoration to the community does not automatically imply restoration to leadership.",
  },
  {
    title: "Preventing Bitterness",
    body: "Hebrews 12:15 warns: 'See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many.' The community that disciplines without fully restoring creates conditions for exactly this. When a restored person is treated with ongoing suspicion, when their past sin is referenced in ways that reopen wounds, when they are excluded from ministry or service long after formal restoration — the church has not completed the work. The obligation to receive someone warmly (2 Cor 2:7) is a continuing obligation. Elders and pastors should actively monitor whether the restored person is being genuinely welcomed, and address community members who continue to hold the repented sin against them.",
  },
  {
    title: "Learning from Discipline",
    body: "A church that has faithfully exercised discipline — and faithfully restored the disciplined person — learns things about itself and about the gospel that a church with no accountability culture cannot learn. It learns that it is serious about holiness without being merciless about failure. It learns that forgiveness is costly and real — not cheap sentiment. It learns what genuine repentance looks like as distinct from social pressure. Over time, a culture of faithful discipline and genuine restoration shapes the community's understanding of grace at depth — because they have seen grace cost something and mean something. The long-term spiritual formation effect of one faithfully handled discipline case, crowned by genuine restoration, is immeasurable.",
  },
];

function AccordionItem({
  title,
  body,
  id,
  expanded,
  onToggle,
}: {
  title: string;
  body: string;
  id: string;
  expanded: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div
      style={{
        background: CARD,
        border: `1px solid ${expanded ? PURPLE : BORDER}`,
        borderRadius: 12,
        marginBottom: 10,
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}
    >
      <button type="button"
        onClick={() => onToggle(id)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: "18px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          textAlign: "left",
          gap: 12,
        }}
      >
        <span
          style={{
            color: expanded ? GREEN : TEXT,
            fontWeight: 700,
            fontSize: 16,
            lineHeight: 1.3,
          }}
        >
          {title}
        </span>
        <span
          style={{
            color: PURPLE,
            fontSize: 20,
            fontWeight: 300,
            flexShrink: 0,
            transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            display: "inline-block",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      {expanded && (
        <div
          style={{
            padding: "0 20px 20px",
            color: TEXT,
            fontSize: 15,
            lineHeight: 1.8,
            borderTop: `1px solid ${BORDER}`,
            paddingTop: 16,
          }}
        >
          {body}
        </div>
      )}
    </div>
  );
}

export default function ChurchDisciplinePage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_church-discipline_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const handleToggle = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Church Discipline" },
    { id: "process", label: "The Process" },
    { id: "cases", label: "Case Studies" },
    { id: "restoration", label: "Restoration" },
    { id: "videos", label: "🎬 Videos" },
  ];

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
        paddingTop: 80,
      }}
    >
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <h1
            style={{
              fontSize: 34,
              fontWeight: 900,
              marginBottom: 10,
              letterSpacing: "-0.5px",
            }}
          >
            Church Discipline
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              maxWidth: 580,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Jesus gave the church a graduated process for addressing unrepentant
            sin — not for punishment but for restoration. Matthew 18 is one of
            the most neglected and most necessary passages in the New Testament.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 36,
            background: CARD,
            borderRadius: 14,
            padding: 5,
            border: `1px solid ${BORDER}`,
            flexWrap: "wrap",
          }}
        >
          {tabs.map((t) => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                minWidth: 120,
                padding: "10px 12px",
                borderRadius: 10,
                border: "none",
                background:
                  activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "background 0.15s, color 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology */}
        {activeTab === "theology" && (
          <div>
            <p
              style={{
                color: MUTED,
                fontSize: 14,
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              {THEOLOGY_ITEMS.length} foundational convictions that ground the practice of church
              discipline in the character of God and the mission of the church.
            </p>
            {THEOLOGY_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                id={`theology-${i}`}
                title={item.title}
                body={item.body}
                expanded={!!expanded[`theology-${i}`]}
                onToggle={handleToggle}
              />
            ))}
          </div>
        )}

        {/* Tab 2: Process */}
        {activeTab === "process" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${GREEN}30`,
                borderRadius: 12,
                padding: "16px 20px",
                marginBottom: 28,
              }}
            >
              <p
                style={{
                  color: TEXT,
                  fontSize: 14,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                The Matthew 18 process is graduated — beginning with the most
                private step and escalating only when restoration is refused.
                Each step is a renewed attempt at reconciliation, not a rung on
                a ladder toward punishment.
              </p>
            </div>

            {/* Vertical timeline */}
            <div style={{ position: "relative" }}>
              {/* Connecting line */}
              <div
                style={{
                  position: "absolute",
                  left: 28,
                  top: 44,
                  bottom: 44,
                  width: 2,
                  background: `${PURPLE}30`,
                }}
              />
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 20,
                    marginBottom: 20,
                    position: "relative",
                  }}
                >
                  {/* Step number circle */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: `${PURPLE}20`,
                      border: `2px solid ${PURPLE}`,
                      color: PURPLE,
                      fontWeight: 900,
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Step card */}
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      padding: 20,
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 12,
                        flexWrap: "wrap",
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          color: GREEN,
                          fontWeight: 800,
                          fontSize: 17,
                        }}
                      >
                        {step.title}
                      </div>
                      <span
                        style={{
                          background: `${PURPLE}15`,
                          color: PURPLE,
                          padding: "3px 10px",
                          borderRadius: 8,
                          fontSize: 11,
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {step.scripture}
                      </span>
                    </div>
                    <p
                      style={{
                        color: TEXT,
                        fontSize: 14,
                        lineHeight: 1.75,
                        marginBottom: 14,
                        margin: "0 0 14px",
                      }}
                    >
                      {step.detail}
                    </p>
                    <div
                      style={{
                        background: `${PURPLE}08`,
                        border: `1px solid ${PURPLE}20`,
                        borderRadius: 8,
                        padding: "10px 14px",
                      }}
                    >
                      <div
                        style={{
                          color: PURPLE,
                          fontWeight: 800,
                          fontSize: 10,
                          letterSpacing: "0.08em",
                          marginBottom: 4,
                        }}
                      >
                        CAUTION
                      </div>
                      <p
                        style={{
                          color: TEXT,
                          fontSize: 13,
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {step.caution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Case Studies */}
        {activeTab === "cases" && (
          <div>
            <p
              style={{
                color: MUTED,
                fontSize: 14,
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              {CASE_ITEMS.length} common case types — each requiring the same graduated process
              but demanding different pastoral wisdom in its application.
            </p>
            {CASE_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                id={`cases-${i}`}
                title={item.title}
                body={item.body}
                expanded={!!expanded[`cases-${i}`]}
                onToggle={handleToggle}
              />
            ))}
          </div>
        )}

        {/* Tab 4: Restoration */}
        {activeTab === "restoration" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${GREEN}30`,
                borderRadius: 12,
                padding: "16px 20px",
                marginBottom: 24,
              }}
            >
              <p
                style={{
                  color: TEXT,
                  fontSize: 14,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Discipline without restoration is only half the work. The
                father ran. The community that disciplines and cannot truly
                restore has missed the heart of what Jesus commanded.
              </p>
            </div>
            {RESTORATION_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                id={`restoration-${i}`}
                title={item.title}
                body={item.body}
                expanded={!!expanded[`restoration-${i}`]}
                onToggle={handleToggle}
              />
            ))}
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
                  { videoId: "Qg9yD4NbuRE", title: "Church Discipline and the Restoration of a Sinner in Matthew 18", channel: "Biblical Teaching", description: "A thorough exposition of Matthew 18:15-20 — the graduated process Jesus gave the church, its goal of restoration, and why every step matters." },
                  { videoId: "fGpWbvdloz4", title: "Church Discipline and Restoration: Matthew 18:15-21", channel: "Pastoral Teaching", description: "A pastor walks through the Matthew 18 process step by step, explaining the theology behind each stage and what restoration looks like in practice." },
                  { videoId: "SnOaTn_ASLg", title: "Membership, Discipline, and Authority in the Local Church", channel: "Biblical Exposition", description: "How Matthew 18:12-20 grounds the local church's authority in discipline — and why meaningful membership and meaningful discipline are inseparable." },
                  { videoId: "X2EZ-kTH3C4", title: "Church Discipline and the Keys of the Kingdom", channel: "Reformed Teaching", description: "The theological weight of Matthew 18:18 — binding and loosing — and what it means that the church exercises real spiritual authority in discipline and restoration." },
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
