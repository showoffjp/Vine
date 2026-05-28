"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const WHAT_IS = {
  definition: "Spiritual direction is a one-on-one relationship in which a trained guide — a 'spiritual director' — helps a person notice and respond to God's movement in their life. It is not counseling, coaching, or mentorship, though it may share elements of each. The focus is specifically on the spiritual life: prayer, discernment, growth in holiness, relationship with God.",
  history: "Spiritual direction is one of the oldest practices in the church. The Desert Fathers and Mothers in 3rd–5th century Egypt served as spiritual guides to those seeking them. The tradition continued through monasteries, through Ignatius of Loyola's Spiritual Exercises (16th c.), through the Protestant Puritan practice of 'spiritual friendship,' and into the contemporary renewal of interest across all traditions.",
  who: "While often associated with Catholic and Anglican traditions, evangelical Christians are increasingly embracing spiritual direction. Directors today come from across the theological spectrum — Reformed, Wesleyan, charismatic, mainline. What matters most is their depth of prayer life, their theology, and their training.",
};

const HOW_DIFFERENT = [
  { from: "Counseling / Therapy", focus: "Mental and emotional health, trauma, behavior patterns", different: "Spiritual direction focuses specifically on relationship with God and spiritual growth. It is not treatment." },
  { from: "Mentoring", focus: "Skills, knowledge, life wisdom, career guidance", different: "Spiritual direction is less about transferring knowledge and more about creating space for the directee to hear God themselves." },
  { from: "Pastoral Care", focus: "Addressing needs, crises, and practical ministry", different: "Spiritual direction is typically a regular, extended conversation — not problem-solving or pastoral support in the moment of crisis." },
  { from: "Accountability", focus: "Behavioral consistency, commitments, goals", different: "Spiritual direction is not primarily about behavior compliance but about interior transformation and listening to God." },
];

const SESSION = [
  { phase: "Opening Prayer", desc: "The session begins with silence or prayer, inviting the Holy Spirit to guide. This distinguishes it from a coaching conversation — both parties are listening for God, not just discussing ideas." },
  { phase: "Sharing", desc: "The directee speaks about their prayer life, what has been happening in their relationship with God, what they notice — movements of consolation or desolation, questions, resistances, graces." },
  { phase: "Attentive Listening", desc: "The director listens not just to content but to what seems most alive or resistant. They ask questions not to gather information but to help the directee go deeper into their own experience of God." },
  { phase: "Reflection", desc: "Together, they explore what God may be saying through the directee's experiences. The director offers observations, reflections, or gentle challenges — never imposing an interpretation." },
  { phase: "Closing Prayer", desc: "The session typically ends with prayer. The director may suggest a simple prayer practice for the coming weeks — not homework, but an invitation." },
];

const HOW_TO_FIND = [
  { step: "Ask your pastor or church", desc: "Many pastors know of trained directors in your area or tradition. This is often the most trusted path." },
  { step: "Use a spiritual direction network", desc: "Spiritual Directors International (SDIworld.org) maintains a global directory. Sustainable Faith and other networks provide evangelical-specific referrals." },
  { step: "Consider denominational resources", desc: "Many denominations have retreat centers or formation ministries that offer spiritual direction." },
  { step: "Ask for a sample session", desc: "Many directors offer a complimentary first meeting. This helps you discern fit — personality, theological tradition, and approach matter." },
  { step: "Trust the fit", desc: "Spiritual direction is not effective without trust and safety. If after a few sessions something feels consistently off, it is appropriate to seek a different director." },
];

const QUESTIONS = [
  "Where have I noticed God most clearly in the past month?",
  "What has my prayer life actually looked like — not what I intend, but what it's been?",
  "Where am I resisting God right now? What am I avoiding?",
  "Where do I feel consolation — peace, life, joy, rightness?",
  "Where do I feel desolation — distance, dryness, restlessness, confusion?",
  "What is the quality of my attention to God in daily life?",
  "Where do I feel drawn that I haven't been willing to go?",
  "What is God's invitation to me in this season?",
];

export default function SpiritualDirectionPage() {
  const [activeTab, setActiveTab] = useState<"what" | "session" | "find" | "questions">("what");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🧭</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Spiritual Direction</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            One of the oldest practices in the church — a trusted guide who helps you notice where God is moving in your life, and how to respond. Not counseling. Not coaching. Something different.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "what" as const, label: "What It Is", icon: "📖" },
            { id: "session" as const, label: "A Session", icon: "🕐" },
            { id: "find" as const, label: "How to Find One", icon: "🔍" },
            { id: "questions" as const, label: "Session Questions", icon: "❓" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "what" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>What Is Spiritual Direction?</h3>
              <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 14 }}>{WHAT_IS.definition}</p>
              <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 14 }}>{WHAT_IS.history}</p>
              <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{WHAT_IS.who}</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>How Is It Different From...?</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {HOW_DIFFERENT.map((h, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 14, marginBottom: 4 }}>vs. {h.from}</div>
                    <div style={{ color: MUTED, fontSize: 13, marginBottom: 6, fontStyle: "italic" }}>Focus: {h.focus}</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{h.different}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "session" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                A typical session lasts 45–60 minutes and meets monthly. Unlike therapy (which may be weekly and crisis-focused), spiritual direction benefits from the space between meetings — time to live, pray, and notice before returning to reflect.
              </p>
            </div>
            {SESSION.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12, display: "flex", gap: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{s.phase}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "find" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Finding a spiritual director is itself a form of discernment. The relationship must have trust, theological compatibility, and a sense that the director is genuinely attentive to you rather than performing expertise. Take your time.
              </p>
            </div>
            {HOW_TO_FIND.map((h, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12, display: "flex", gap: 16 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${GREEN}20`, border: `1px solid ${GREEN}40`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{h.step}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{h.desc}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: 22 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: 16, marginBottom: 10 }}>What to Expect on Cost</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Many spiritual directors offer direction on a sliding-scale or donation basis, particularly those who are clergy or serve in a ministry context. Others charge a fee similar to counseling. Some offer direction without charge as a ministry of the church. It is always appropriate to ask about financial arrangements in the initial meeting.
              </p>
            </div>
          </div>
        )}

        {activeTab === "questions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These are questions a spiritual director might ask — or that you might bring to a session yourself. They can also be used for personal reflection before or after prayer. They are not a formula; they are invitations.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {QUESTIONS.map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.65, margin: 0 }}>{q}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
