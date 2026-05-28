"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Fifth Commandment Extended", verse: "Exodus 20:12", body: "'Honor your father and your mother' (Exodus 20:12). This commandment does not expire when you turn 18. Paul grounds it in Ephesians 6:2-3 as 'the first commandment with a promise' — it remains in force for adult children. The honor looks different in different seasons: for young children it means obedience; for adult children it means care, respect, financial support when needed, and presence." },
  { title: "Caring for Widows", verse: "1 Timothy 5:3-8", body: "'Give proper recognition to those widows who are really in need' (1 Timothy 5:3). Paul is remarkably practical: if a widow has believing family, they should care for her — 'for anyone who does not provide for their relatives, and especially for their own household, has denied the faith and is worse than an unbeliever' (5:8). The care of elderly parents is not optional for Christians; it is a test of whether the faith is real." },
  { title: "The Example of Jesus", verse: "John 19:26-27", body: "From the cross — in the middle of the most agonizing event in history — Jesus ensured his mother was cared for. He said to his mother: 'Woman, here is your son,' and to the disciple: 'Here is your mother' (John 19:26-27). Even dying, he fulfilled the fifth commandment. Care for aging parents is not a distraction from discipleship — it is discipleship." },
  { title: "Old Age as God's Gift", verse: "Proverbs 16:31", body: "'Gray hair is a crown of splendor; it is attained in the way of righteousness' (Proverbs 16:31). A culture that worships youth sees old age as decline. Scripture sees it as honor and accumulated wisdom. The elderly are not a burden to be managed — they are the embodied memory of the community, carrying experience and perspective that cannot be downloaded or searched. Their presence is gift." },
  { title: "The Church's Responsibility", verse: "James 1:27", body: "'Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress' (James 1:27). The care of the vulnerable — among whom the elderly are prominently included — is definitional for authentic faith. A church that is rich in programming but absent when its oldest members need care has confused activity for mission." },
];

const CHALLENGES = [
  { challenge: "The Conversation No One Wants", desc: "Most families wait until a crisis to discuss end-of-life preferences, financial arrangements, medical directives, and care plans — which means they have these conversations when grief, fear, and urgency cloud everything.", response: "Initiate the conversation early, when it feels unnecessary. Ask: 'Have you thought about what you'd want if you couldn't make decisions yourself?' Document their answers. Know where their important documents are." },
  { challenge: "Long-Distance Caregiving", desc: "Many adult children live far from aging parents, which creates both practical distance (can't just check in) and emotional guilt (not being there).", response: "Coordinate with siblings on visits, calls, and financial support. Use technology — video calls, wellness check apps, medication reminders. Hire local help rather than trying to do everything from a distance during occasional visits." },
  { challenge: "When Parents Resist Help", desc: "Pride, fear of losing independence, and shame around vulnerability cause many elderly people to resist the care they clearly need.", response: "Start small and frame help as something you want to do, not something they need to accept. Ask permission: 'Would it be okay if I helped with ___?' Focus on their preferences, not your solutions. Sometimes the GP is more persuasive than family." },
  { challenge: "Caregiver Burnout", desc: "The primary caregiver — often one adult child — can absorb enormous physical, emotional, and financial stress over years, leading to exhaustion and resentment.", response: "Build a team, not a solo act. Assign specific tasks to each sibling or family member. Use respite care. Join a caregiver support group. Acknowledge that this is genuinely hard — not something to simply endure." },
  { challenge: "Navigating Dementia", desc: "Cognitive decline changes the person you knew and creates a grief that is anticipatory, prolonged, and often unnamed — mourning someone who is still present.", response: "Educate yourself about the specific diagnosis. Join a dementia caregiver community. Prioritize presence (they can feel love even when they cannot name you). Create simple, joyful moments rather than trying to recreate complex conversations." },
  { challenge: "End-of-Life Decisions", desc: "When treatment decisions, hospice enrollment, or withdrawal of life support arise, families are often underprepared — and the decisions carry both practical and theological weight.", response: "Document advance directives while your parent can communicate their wishes. Engage a chaplain or pastor in end-of-life conversations. Death is not the enemy for Christians (1 Corinthians 15:55) — but the dying should be honored and accompanied." },
];

const PRACTICES = [
  { title: "Regular, Consistent Contact", desc: "Weekly phone calls, monthly visits (if local), quarterly visits (if distant). Not just checking in — genuine conversation: 'How are you feeling? What are you thinking about? What are you afraid of?' Presence and attention are the most powerful forms of honor.", icon: "📞" },
  { title: "The Legacy Interview", desc: "Record your parent or grandparent telling their life story. Their childhood, their faith journey, their most difficult moments, their proudest moments, their regrets, their hopes for you. This is invaluable after they are gone and a gift to them now — being heard is deeply honoring.", icon: "🎙️" },
  { title: "Practical, Specific Help", desc: "Ask not 'Is there anything I can do?' but 'Can I bring groceries Tuesday?' or 'I'm coming to drive you to the appointment on Thursday.' Specific offers are more likely to be accepted and more likely to actually help.", icon: "🤝" },
  { title: "Involve the Church", desc: "Aging parents who are part of a church community are not your responsibility alone. Ask your church if there is a care ministry. Coordinate with church friends to check in, drive to appointments, or simply visit.", icon: "⛪" },
  { title: "Talk About the Eternal", desc: "Ask your parents what they believe, how their faith has changed, what they are trusting as they approach the end of their lives. These conversations are rare gold — and they are a form of spiritual care that no paid caregiver can provide.", icon: "✝️" },
  { title: "Celebrate Who They Are", desc: "Birthday calls, anniversary recognition, notes of appreciation for specific things they did for you. The elderly often feel invisible — seen only when they are a problem. Being celebrated as people, not managed as burdens, is profoundly dignifying.", icon: "🎂" },
];

export default function ElderCarePage() {
  const [activeTab, setActiveTab] = useState<"theology" | "challenges" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👴</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Caring for Aging Parents</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            'Honor your father and your mother' doesn't expire when you turn 18. From the cross, Jesus ensured his mother's care. Caring for aging parents is not a distraction from discipleship — it is discipleship.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "challenges" as const, label: "Real Challenges", icon: "⚠️" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "challenges" && (
          <div>
            {CHALLENGES.map((c, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === c.challenge ? null : c.challenge)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === c.challenge ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{c.challenge}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === c.challenge ? "−" : "+"}</span>
                </button>
                {expanded === c.challenge && (
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

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Honoring aging parents is not a feeling — it is a set of practices. These are concrete, repeatable ways to make the commandment real.
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
