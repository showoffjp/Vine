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
  { id: "theology", label: "Theology" },
  { id: "visiting", label: "Visitation" },
  { id: "dying", label: "Dying & Grief" },
  { id: "crisis", label: "Crisis Care" },
  { id: "discipline", label: "Church Discipline" },
  { id: "lay", label: "Lay Shepherding" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const THEOLOGY_ITEMS = [
  {
    id: "shepherd",
    label: "The Shepherd Metaphor",
    content: "The shepherd image is the dominant biblical metaphor for pastoral care. God himself is the shepherd (Psalm 23; Ezekiel 34); Jesus is the Good Shepherd who lays down his life for the sheep (John 10:11); and under-shepherds (pastors = Latin for shepherd) care for the flock on Christ's behalf. Ezekiel 34 is the most extensive OT critique of failed pastoral care — the prophet indicts shepherds who fed themselves rather than the flock, who failed to heal the sick, bind up the injured, and bring back the strays. Pastoral care is first a theological identity before it is a set of skills.",
  },
  {
    id: "cure",
    label: "The Cure of Souls (Cura Animarum)",
    content: "The ancient Christian phrase cura animarum — cure of souls — describes the pastor's primary work as attending to the spiritual health of those entrusted to him. This is distinct from therapy (though related) and distinct from preaching (though connected). The cure of souls encompasses everything a pastor does to promote the spiritual wellbeing of parishioners: visitation, conversation, prayer, the sacraments, correction, encouragement, and presence in suffering. Thomas Oden's Pastoral Theology and Eugene Peterson's Five Smooth Stones for Pastoral Work are essential resources.",
  },
  {
    id: "1peter",
    label: "1 Peter 5 and the Elder's Call",
    content: "'Be shepherds of God's flock that is under your care, watching over them — not because you must, but because you are willing, as God wants you to be; not pursuing dishonest gain, but eager to serve; not lording it over those entrusted to you, but being examples to the flock' (1 Peter 5:2-3). Three contrasts: compulsion vs. willingness, greed vs. eagerness, domination vs. example. The motive is not duty or compensation but love; the method is not authority but modeling. The chief Shepherd (v. 4) will reward faithful under-shepherds at his appearing.",
  },
  {
    id: "word-prayer",
    label: "Word and Prayer as Primary Tools",
    content: "The apostles' model in Acts 6:4 — 'we will give our attention to prayer and the ministry of the word' — defines the pastor's primary tools for care. The Word diagnoses, corrects, encourages, and sustains the soul; prayer brings the specific need before God and with it the presence and power of the Spirit. Pastoral care divorced from both prayer and Scripture devolves into therapy or life coaching. Care that includes both draws from the deepest resources available to human need.",
  },
];

const VISITATION_STEPS = [
  { step: "1", title: "Show Up Consistently", body: "Regular pastoral presence — hospital rooms, home visits, post-service conversations — creates the relational capital from which genuine care is possible. Urgent visits when crises arrive mean more from a pastor who visits routinely." },
  { step: "2", title: "Listen Before Speaking", body: "Most people in need want to be heard more than advised. Ask open questions: 'What's been hardest?' 'Where do you feel God in this?' 'What do you most need from me right now?' Resist the impulse to fill silence with answers." },
  { step: "3", title: "Pray With the Person — Out Loud", body: "Praying out loud with someone in distress — naming their specific situation before God — is one of the most distinctively pastoral acts. It models prayer, brings the need before God, and communicates: you are not alone. Keep it specific, not generic." },
  { step: "4", title: "Bring Scripture That Fits", body: "Not a fire-hose of references but one or two passages that speak directly to the person's situation. Read it slowly. Ask what they hear. Don't use Scripture to short-circuit their process — use it to illuminate the path they're already on." },
  { step: "5", title: "Follow Up", body: "The follow-up visit or call matters more than the first visit. 'I'm still thinking about what you shared last week' communicates sustained care, not check-box ministry. Most pastoral care failure occurs not in the first response but in the forgetting that follows." },
  { step: "6", title: "Know Your Limits", body: "Pastoral care is not counseling. Know when to refer — to a biblical counselor, therapist, physician, or specialist. Making the referral is pastoral care; pretending to have skills you don't is not." },
];

const DYING_CARDS = [
  { color: BLUE, title: "Presence Over Words at Dying Beds", body: "Dying people do not need speeches — they need presence. The pastor who sits quietly, holds a hand, reads a familiar psalm, and prays briefly does more than the one who fills the silence with theology. Psalm 23 and John 14:1-6 are classics for the dying precisely because they are familiar and comforting, not because they are comprehensive." },
  { color: GREEN, title: "Helping People Die Well", body: "A Christian theology of dying includes: affirming assurance of salvation, addressing unfinished relational business (reconciliation, forgiveness), listening to fears about death without dismissing them, and orienting the dying toward the resurrection hope. The pastor's role is not to minimize death but to speak truth into it: 'For to me, to live is Christ and to die is gain' (Phil 1:21). Death for the Christian is real loss and real gain." },
  { color: GOLD, title: "Ministry to the Grieving", body: "Grief has no fixed timeline. The initial rush of support after a death often fades precisely when the grief deepens — after the casseroles stop and others move on. The pastor who continues to remember, check in, and mark anniversaries (the first Christmas, the first birthday without the person) ministers to the deepest grief. Romans 12:15 — 'weep with those who weep' — requires sustained presence, not one-time sympathy." },
  { color: TEAL, title: "Conducting Funerals Well", body: "A Christian funeral has a dual audience: the grieving family and any non-Christians present. The funeral sermon should honor the person honestly (without hagiography), offer genuine comfort from the resurrection (not sentimentalism), and make the gospel accessible. The funeral is one of the most evangelistically significant moments a pastor has. Prepare carefully; it is a sacred trust." },
];

const CRISIS_ITEMS = [
  { color: PURPLE, title: "Responding to Mental Health Crises", body: "When a congregant presents with suicidal ideation, severe depression, or psychosis, the pastor's first role is safety and referral, not counseling. Know your local crisis resources. Stay with the person until help arrives or they are connected to professional care. Follow up. The integration of pastoral and clinical care requires humility — the pastor is not a therapist, but the therapist cannot provide what only pastoral presence can." },
  { color: BLUE, title: "Abuse Disclosure", body: "When someone discloses abuse — domestic violence, sexual abuse, child abuse — the pastoral response must prioritize the victim's safety. Know your state's mandatory reporting laws for child abuse. Domestic violence disclosures require safety planning, not immediate marriage counseling. Connect to specialists. Do not attempt to mediate between an abuser and victim; this rarely produces safety and can increase danger. The church's failure in abuse cases is often the result of prioritizing institutional reputation over the victim." },
  { color: GREEN, title: "Addiction and Recovery", body: "Pastors frequently encounter addiction — to substances, pornography, gambling, food, or screens. The pastoral role is not to shame but to create a community where honesty is possible and accountability is loving. Recovery requires community; isolated willpower fails. Know local AA/NA chapters, certified addiction counselors, and Christian recovery programs. Long-term pastoral support alongside clinical treatment produces better outcomes than either alone." },
  { color: GOLD, title: "Conflict and Broken Relationships", body: "Interpersonal conflict is the most common pastoral care demand. Matthew 18:15-20 gives the church's conflict resolution process: direct approach first, then two witnesses, then the church. The pastor's role in conflict is not to take sides but to facilitate truth-telling and reconciliation. Premature peace-brokering that suppresses legitimate grievances produces resentment, not resolution. Sometimes reconciliation is not possible; safe distance with forgiveness is the pastoral goal." },
];

const DISCIPLINE_ITEMS = [
  {
    id: "d1",
    label: "The Purpose of Church Discipline",
    content: "Church discipline is not punishment — it is pastoral care with teeth. Matthew 18:15-20 and 1 Corinthians 5 describe discipline as aimed at three things: the restoration of the sinning member, the purity of the congregation, and the reputation of the gospel. Discipline that lacks any of these three purposes has departed from the biblical model. Excommunication (the last step) is not rejection but the formal affirmation that someone is living outside the covenant community — an act that can prompt repentance and return (2 Corinthians 2:5-11).",
  },
  {
    id: "d2",
    label: "The Four Steps of Matthew 18",
    content: "Jesus's process: (1) Go to the person privately — most conflicts should end here; (2) If they don't listen, take one or two others as witnesses; (3) If still unrepentant, bring it before the church; (4) If they refuse to listen to the church, treat them as a tax collector or pagan (a call to evangelism, not shunning). The process assumes genuine sin, genuine love, and genuine community. Most evangelical churches apply discipline rarely and clumsily because they have neither the relational closeness that makes step one meaningful nor the communal accountability that makes step four meaningful.",
  },
  {
    id: "d3",
    label: "Distinguishing Sins from Preferences",
    content: "Not every disagreement warrants Matthew 18 discipline. Discipline is for serious, unrepented sin — not theological differences on secondary issues, lifestyle preferences, or personality conflicts. The classic categories: sins that endanger others (abuse, predatory behavior), sins that publicly compromise the gospel (prominent unrepented immorality), and sins that fracture the community (sustained, unresolved conflict). Most pastoral correction happens through teaching, private exhortation, and accountability structures well short of formal discipline.",
  },
];

const LAY_STEPS = [
  { num: "1", title: "Identify and Recruit", body: "Look for people with the gifts of mercy, exhortation, and service who are already informally caring for others in the congregation. The best lay shepherds are usually already functioning." },
  { num: "2", title: "Train in Basic Care Skills", body: "Active listening, basic crisis response, prayer with others, and when to refer are teachable skills. A half-day training plus regular supervision produces capable lay shepherds." },
  { num: "3", title: "Assign Small Flocks", body: "Divide the congregation into pastoral care units (6-12 households) and assign a lay shepherd to each. Regular contact, not emergency response, is the primary task." },
  { num: "4", title: "Create a Reporting Structure", body: "Lay shepherds need a pastor to report to and consult with. Their role is support, not professional care. A simple weekly check-in or shared notes system ensures no one falls through the cracks." },
  { num: "5", title: "Care for the Caregivers", body: "Vicarious trauma is real. Lay shepherds absorb significant emotional weight. Ensure they have peer support, supervision, and permission to set limits. Burned-out helpers help no one." },
];

const VIDEOS = [
  { videoId: "JOiQ3ZY4fdo", title: "Pastoral Care — Eugene Peterson" },
  { videoId: "5v97yRQ09Ek", title: "The Cure of Souls — Thomas Oden" },
  { videoId: "rAPyGvMZkH0", title: "Caring for the Dying — John Piper" },
  { videoId: "VHr4T4Mfrmc", title: "Church Discipline — Mark Dever" },
  { videoId: "RHT_p9N1gk4", title: "Shepherding a Congregation — Paul Tripp" },
];

export default function PastoralCareGuide() {
  const [tab, setTab] = usePersistedState<string>("vine_pastoral_tab", "overview");
  const [theolOpen, setTheolOpen] = usePersistedState<string>("vine_pastoral_theol", "");
  const [discOpen, setDiscOpen] = usePersistedState<string>("vine_pastoral_disc", "");
  const [journal, setJournal] = usePersistedState<string>("vine_pastoral_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: GREEN + "22", color: GREEN, padding: "0.2rem 0.7rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1 }}>PASTORAL MINISTRY</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.5rem" }}>Pastoral Care</h1>
        <p style={{ color: MUTED, fontSize: "1rem", marginBottom: "2rem", maxWidth: 680 }}>
          The cure of souls — shepherding the congregation through the full range of human experience, from ordinary life to crisis, death, and discipline.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                borderColor: tab === t.id ? GREEN : BORDER, background: tab === t.id ? GREEN + "22" : "transparent", color: tab === t.id ? GREEN : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What Is Pastoral Care?</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Pastoral care is the ongoing, intentional ministry of the church to people in the full range of human need — physical, emotional, relational, and spiritual. It is not crisis management alone but the regular, attentive presence of the shepherd who knows the flock by name (John 10:3). The Greek word for pastor (poimēn) literally means shepherd — one who leads, feeds, protects, and heals.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Primary Tool", value: "Word and Prayer", color: GOLD },
                { label: "Primary Posture", value: "Present & Listening", color: BLUE },
                { label: "Primary Goal", value: "Soul's flourishing", color: GREEN },
                { label: "Primary Model", value: "Good Shepherd", color: TEAL },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 12, padding: "1.2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
                  <div style={{ color: item.color, fontWeight: 700 }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 14, padding: "1.3rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>Ezekiel 34 — The Indictment of Bad Pastors</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>
                God's charge against Israel's shepherds: "You have not strengthened the weak or healed the sick or bound up the injured. You have not brought back the strays or searched for the lost. You have ruled them harshly and brutally" (Ezekiel 34:4). The list of failures defines pastoral care by negation: strengthen the weak, heal the sick, bind up the injured, bring back the strays, search for the lost. Every item requires specific, targeted attention — not generic preaching to the crowd but individual care for individuals.
              </p>
            </div>
          </div>
        )}

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Theology of Pastoral Care</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Pastoral care is not merely a skill set — it is a theological vocation rooted in the nature of God as shepherd and the nature of the church as flock.
            </p>
            {THEOLOGY_ITEMS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${theolOpen === item.id ? GREEN : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setTheolOpen(theolOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: GREEN, fontSize: "1.2rem" }}>{theolOpen === item.id ? "−" : "+"}</span>
                </button>
                {theolOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* VISITATION */}
        {tab === "visiting" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Practice of Visitation</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Pastoral presence — in homes, hospitals, and ordinary conversations — is the foundation of everything else. These six steps apply whether the visit is routine or crisis.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {VISITATION_STEPS.map(s => (
                <div key={s.step} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.2rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: GREEN + "22", color: GREEN, fontWeight: 800, fontSize: "1rem", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: "0.3rem" }}>{s.title}</div>
                    <div style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.93rem" }}>{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DYING AND GRIEF */}
        {tab === "dying" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Caring for the Dying and the Grieving</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Death and grief are the most sacred ground a pastor walks. Preparation and theological clarity make the difference between presence that helps and presence that wounds.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "1rem" }}>
              {DYING_CARDS.map(c => (
                <div key={c.title} style={{ background: CARD, border: `1px solid ${c.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: c.color, marginBottom: "0.6rem" }}>{c.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.93rem" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CRISIS CARE */}
        {tab === "crisis" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Crisis Care</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Pastors encounter crises they were not trained for. These four categories require specific responses and clear referral pathways.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CRISIS_ITEMS.map(c => (
                <div key={c.title} style={{ background: CARD, border: `1px solid ${c.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: c.color, marginBottom: "0.5rem" }}>{c.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DISCIPLINE */}
        {tab === "discipline" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Church Discipline as Pastoral Care</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Church discipline is often regarded as the opposite of pastoral care. The Bible sees it as one of its most serious expressions — love that is willing to do hard things for the soul's good.
            </p>
            {DISCIPLINE_ITEMS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${discOpen === item.id ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setDiscOpen(discOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{discOpen === item.id ? "−" : "+"}</span>
                </button>
                {discOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* LAY SHEPHERDING */}
        {tab === "lay" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Equipping Lay Shepherds</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              No pastor can personally care for every member of a growing congregation. The New Testament model — every member ministers, every-member-priesthood — calls for lay people to be trained for pastoral care.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.5rem" }}>
              {LAY_STEPS.map(s => (
                <div key={s.num} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.2rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: TEAL + "22", color: TEAL, fontWeight: 800, fontSize: "1rem", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.num}</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: "0.3rem" }}>{s.title}</div>
                    <div style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.93rem" }}>{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 14, padding: "1.3rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>Sustaining the Pastor</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>
                Ministry burnout, compassion fatigue, and moral failure are epidemic among pastors. The pastor who cares for everyone and is cared for by no one is in danger. Structures that sustain pastors: a pastor to the pastor (a mentor or spiritual director), a personal board of accountability, regular retreat and sabbath, honest friendships outside the congregation, and a theologically sound theology of vocation that doesn't equate effectiveness with faithfulness.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Reflection Journal</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Questions for pastors, ministry leaders, and anyone who cares for others in the church.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                "Ezekiel 34 lists what bad shepherds fail to do. Which item is most challenging for your current ministry season?",
                "Who is the person most in need of pastoral care in your community right now? What is one concrete next step?",
                "How do you care for yourself as a caregiver? What is depleted and what refills you?",
                "Is there a situation in your congregation that may need formal discipline? What is preventing you from addressing it?",
              ].map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem" }}>
                  <div style={{ color: GREEN, fontWeight: 600, fontSize: "0.9rem" }}>{q}</div>
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
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Teaching on pastoral care, shepherding, and ministry to people in need.</p>
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
