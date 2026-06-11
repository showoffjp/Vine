"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { ChevronDown, ChevronUp, Shield, Globe, AlertCircle } from "lucide-react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const GOLD = "#D97706";
const RED = "#EF4444";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

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
  { id: "biblical", label: "Biblical Foundations" },
  { id: "history", label: "Historical Development" },
  { id: "models", label: "Church-State Models" },
  { id: "threats", label: "Current Threats" },
  { id: "global", label: "Global Persecution" },
  { id: "conscience", label: "Conscience" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const BIBLICAL_FOUNDATIONS = [
  {
    ref: "Matthew 22:21",
    text: "Give back to Caesar what is Caesar's, and to God what is God's.",
    note: "Jesus distinguishes two spheres of authority without making them equal — Caesar has legitimate authority in his domain; God has ultimate authority over all, including over Caesar. Neither sphere is absolutized.",
    color: GOLD,
  },
  {
    ref: "Acts 5:29",
    text: "We must obey God rather than human beings!",
    note: "When the Sanhedrin commands the apostles to stop preaching, Peter articulates the conscience clause — state authority is real but not absolute. When it commands what God forbids, obedience to God takes precedence.",
    color: RED,
  },
  {
    ref: "Romans 13:1-7",
    text: "Let everyone be subject to the governing authorities, for there is no authority except that which God has established.",
    note: "Paul's baseline: governing authorities serve a God-given function (order, justice, protection). Christians are called to be good citizens — not as a compromise but as part of their service to God.",
    color: BLUE,
  },
  {
    ref: "1 Timothy 2:1-2",
    text: "I urge... that petitions, prayers, intercession and thanksgiving be made for all people — for kings and all those in authority, that we may live peaceful and quiet lives in all godliness and holiness.",
    note: "The church's political posture is primarily prayerful — seeking conditions of peace for the mission, not power for the church.",
    color: GREEN,
  },
  {
    ref: "Revelation 13",
    text: "Who is like the beast? Who can wage war against it? — The beast demands worship.",
    note: "Revelation presents the state at its most extreme — demanding ultimate allegiance that belongs only to God. This is the prophetic warning: when the state becomes a pseudo-religion, it must be resisted.",
    color: PURPLE,
  },
  {
    ref: "Acts 17:26-27",
    text: "From one man he made all the nations, that they should inhabit the whole earth... God did this so that they would seek him and perhaps reach out for him.",
    note: "Paul's Areopagus address grounds human dignity and the conditions for genuine seeking of God in creation — not in the state's permission.",
    color: TEAL,
  },
];

const HISTORY_POINTS = [
  { era: "Early Church (1st–3rd c.)", color: GREEN, desc: "Christians in the Roman Empire were a persecuted minority who argued for the right to practice their faith without state interference. Justin Martyr, Tertullian, and Origen made early cases for toleration — not as a legal theory but as a plea based on the nature of faith: coerced worship is not true worship." },
  { era: "Constantine & Christendom (312–)", color: GOLD, desc: "Constantine's Edict of Milan (313) granted toleration. Over time, Christianity became the favored and then the state religion. The church gained power but lost something too — the Constantinian settlement entangled church and state in ways that produced centuries of coercion, crusade, and inquisition." },
  { era: "The Reformation (16th c.)", color: BLUE, desc: "Luther's 'Here I stand' was itself a plea for conscience — no authority can override the conscience captive to the Word of God. But the Reformers often still supported state enforcement of religion. The Radical Reformers (Anabaptists) were the first to argue consistently for religious freedom and church-state separation." },
  { era: "Baptists and Religious Liberty (17th c.)", color: PURPLE, desc: "Roger Williams (1644, The Bloudy Tenent of Persecution) and John Locke made the most influential early modern cases for religious freedom. Williams argued: state enforcement of religion is spiritually counterproductive — the 'garden of the church' must be separated from the 'wilderness of the world.'" },
  { era: "American Experiment (1791)", color: RED, desc: "The First Amendment ('Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof') was a watershed — the first major government formally separating church and state. Jefferson's 'wall of separation' letter to the Danbury Baptists became shorthand for the principle." },
  { era: "Global Religious Freedom (20th–21st c.)", color: TEAL, desc: "The Universal Declaration of Human Rights (1948, Article 18) recognized religious freedom as a universal human right. Today, the Pew Research Center estimates that over 80% of the world's population lives in countries with high or very high restrictions on religious freedom." },
];

const CHURCH_STATE_MODELS = [
  { model: "Establishment", color: GOLD, desc: "One religion is officially recognized and supported by the state. The Church of England, the Saudi Arabian theocracy, and the medieval Catholic Church are examples. Most traditions now reject this model. It tends to produce nominal faith and spiritual stagnation." },
  { model: "Theocracy", color: RED, desc: "God's law governs society directly, administered by religious authorities. Islamic theocracy (Iran) is the closest modern example. Christian nationalism sometimes gestures toward this. The Reformers' Geneva under Calvin approached it. The NT church does not seek this model — Jesus' kingdom is not of this world." },
  { model: "Two Kingdoms", color: BLUE, desc: "God rules the kingdom of grace (the church) through the gospel, and the kingdom of power (civil society) through law. Luther's formulation. The two kingdoms have different ends, means, and authorities. The church should not seek political power; the state should not seek spiritual authority." },
  { model: "Separation with Engagement", color: GREEN, desc: "The American Baptist/Baptist-rooted model: church and state are separate institutions with no official entanglement, but Christians engage in public life as citizens. The church speaks prophetically; the state makes no religious judgments. This model enables pluralist democracy while protecting minority religions." },
  { model: "Transformationist / Kuyperian", color: PURPLE, desc: "Abraham Kuyper: 'There is not a square inch in the whole domain of our human existence over which Christ, who is Sovereign over all, does not cry: Mine!' Christians transform every sphere of society (education, arts, politics, business) with Christian principles without establishing religion." },
];

const CURRENT_THREATS = [
  { threat: "Compelled Speech", color: RED, desc: "Laws requiring individuals to affirm ideological positions — pronouns, affirmations of beliefs — that violate their religious conscience. The line between anti-discrimination and compelled speech is genuinely contested." },
  { threat: "Wedding Vendor Cases", color: GOLD, desc: "Photographers, bakers, florists asked to provide services for ceremonies that violate their beliefs. The conflict between religious freedom and anti-discrimination law. Masterpiece Cakeshop (SCOTUS 2018) — resolved on narrow grounds, the broader question unresolved." },
  { threat: "Church Regulation", color: BLUE, desc: "Zoning laws targeting churches, COVID restrictions selectively applied to worship services, regulations on religious schools. The question: when does neutral general law apply to religious practice, and when does it become undue burden (Sherbert/Yoder standard)?" },
  { threat: "International Persecution", color: PURPLE, desc: "North Korea, Eritrea, Somalia, Yemen, Iran, Pakistan — Open Doors' World Watch List documents severe persecution of Christians globally. An estimated 360+ million Christians live in countries with high levels of persecution." },
  { threat: "Social Pressure and Employment", color: TEAL, desc: "Loss of employment, professional licensing, or university enrollment for expressing traditional views on sexuality and marriage. 'Soft persecution' — legal coercion is absent but social and professional costs are real." },
];

const CONSCIENCE_POINTS = [
  { title: "The Theological Basis of Conscience", color: BLUE, content: "Conscience (from Latin con-scientia: 'knowing together') is the capacity for moral self-evaluation that God has inscribed in human beings (Rom 2:14-15). It is not infallible — consciences can be misinformed, seared, or suppressed — but it is morally significant. The state's demand for worship is intolerable because it violates conscience at the deepest level." },
  { title: "Luther's Principle: Conscience Captive to the Word", color: GOLD, content: "Luther's Diet of Worms statement has become the paradigmatic Christian appeal to conscience. But he was clear: it is not conscience alone that must be followed but conscience informed by Scripture and reason. An uninstructed conscience is not infallible — but a conscience that knows what God requires and is commanded to contradict it must be obeyed." },
  { title: "Civil Disobedience", color: RED, content: "When the law commands what God forbids — or forbids what God commands — Christians have a long tradition of civil disobedience: Hebrew midwives (Exod 1), Daniel (Dan 6), the apostles (Acts 5), the confessing church under Hitler. But civil disobedience in this tradition is public, peaceful, and willing to accept legal consequences — not covert, violent, or self-righteous." },
  { title: "The Limits of Conscience Appeals", color: PURPLE, content: "Not every appeal to conscience is valid. Slaveholders appealed to conscience. Segregationists appealed to conscience. The question is not merely 'does this violate my conscience' but 'is my conscience rightly formed by Scripture and reason?' Religious liberty does not mean freedom from all accountability — it means freedom from state coercion in matters of ultimate allegiance." },
];

const VIDEOS = [
  { videoId: "4nLDQqpAFJ0", title: "Religious Liberty: Why It Matters to Christians" },
  { videoId: "9kSgNrMa7FA", title: "Russell Moore: The Christian Case for Religious Freedom" },
  { videoId: "PN8cCVMpAIA", title: "Church and State: A Biblical Framework" },
  { videoId: "VPqI0f0CMVE", title: "Persecuted Church: What Christians Need to Know" },
];

export default function ReligiousLibertyPage() {
  const [tab, setTab] = useLocalStorage("vine_relig_tab", "overview");
  const [openModel, setOpenModel] = useLocalStorage("vine_relig_model", "");
  const [openThreat, setOpenThreat] = useLocalStorage("vine_relig_threat", "");
  const [journal, setJournal] = useLocalStorage("vine_relig_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{ background: `${BLUE}20`, color: BLUE, border: `1px solid ${BLUE}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Christian Ethics</span>
            <span style={{ background: `${GREEN}20`, color: GREEN, border: `1px solid ${GREEN}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Political Theology</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>
            Religious Liberty: A Christian Perspective
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 700 }}>
            Religious liberty is not primarily a secular American value — it is a theological conviction rooted in the nature of faith, the dignity of conscience, and the proper limits of human authority. This guide covers the biblical foundations, historical development, church-state models, and contemporary challenges.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
                border: `1px solid ${tab === t.id ? BLUE : BORDER}`,
                background: tab === t.id ? `${BLUE}20` : "transparent",
                color: tab === t.id ? BLUE : MUTED,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}30`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Shield size={24} color={BLUE} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>The Theological Case for Religious Liberty</div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>
                    The deepest argument for religious liberty is not utilitarian or political — it is theological: genuine faith cannot be coerced. A person forced to worship God under threat of punishment is not worshipping God; they are performing a social ritual to avoid punishment. God wants hearts, not compliance.
                  </p>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    This insight — which Roger Williams expressed as the necessity of separating the &ldquo;garden of the church&rdquo; from the &ldquo;wilderness of the world&rdquo; — is not a concession to secularism but a deep Christian conviction about the nature of faith.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 14 }}>What Religious Liberty Means and Doesn&apos;t Mean</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { label: "Freedom of belief", color: GREEN, yes: true, desc: "The state may not dictate what you believe or punish you for your beliefs." },
                  { label: "Freedom of religious practice", color: GREEN, yes: true, desc: "The state may not prohibit religious practice without compelling interest." },
                  { label: "Freedom of conscience", color: GREEN, yes: true, desc: "The state may not compel you to affirm beliefs that violate your conscience." },
                  { label: "Freedom to harm others", color: RED, yes: false, desc: "Religious liberty does not protect religiously motivated harm to others." },
                  { label: "Freedom from all accountability", color: RED, yes: false, desc: "Religious liberty is not immunity from neutral laws of general application." },
                  { label: "State support for religion", color: GOLD, yes: false, desc: "Religious liberty typically means neutrality, not favoritism toward religious institutions." },
                ].map((item, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 14px" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                      <span style={{ color: item.yes ? GREEN : RED, fontSize: 16, fontWeight: 700 }}>{item.yes ? "✓" : "✗"}</span>
                      <span style={{ color: item.color, fontWeight: 700, fontSize: 13 }}>{item.label}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "biblical" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Biblical Foundations</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Religious liberty is not just a good political idea — it has deep scriptural roots. The Bible does not present one simple church-state model, but it provides clear principles.
            </p>
            {BIBLICAL_FOUNDATIONS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ color: t.color, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>{t.ref}</div>
                <blockquote style={{ margin: "0 0 10px", paddingLeft: 12, borderLeft: `3px solid ${t.color}`, color: TEXT, fontStyle: "italic", fontSize: 14, lineHeight: 1.7 }}>
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, background: `${t.color}10`, padding: "8px 12px", borderRadius: 8 }}>{t.note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "history" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Historical Development</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              The story of religious liberty is largely the story of Christians — first as a persecuted minority pleading for toleration, then often as a persecuting majority, and finally learning (often painfully) the theological necessity of protecting the freedom of all.
            </p>
            {HISTORY_POINTS.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${pt.color}30`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap", marginBottom: 8 }}>
                  <span style={{ color: pt.color, fontWeight: 700, fontSize: 14 }}>{pt.era}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{pt.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "models" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Church-State Models</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Christians have held different views about how church and state should relate. Understanding the models helps evaluate the strengths and weaknesses of each.
            </p>
            {CHURCH_STATE_MODELS.map((model, i) => {
              const isOpen = openModel === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${model.color}30`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenModel(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: model.color, fontWeight: 700, fontSize: 15 }}>{model.model}</span>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{model.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "threats" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Current Threats to Religious Liberty</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Religious liberty faces challenges from multiple directions — from state repression in authoritarian regimes to legal conflicts in liberal democracies. Christians need to understand both.
            </p>
            {CURRENT_THREATS.map((item, i) => {
              const isOpen = openThreat === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenThreat(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                      <span style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>{item.threat}</span>
                    </div>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "global" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>The Global Persecuted Church</div>
            <div style={{ background: `${RED}10`, border: `1px solid ${RED}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <Globe size={20} color={RED} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: RED, marginBottom: 8 }}>The Scale of Global Persecution</div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>
                    According to Open Doors (2024 World Watch List): over 365 million Christians worldwide face high levels of persecution and discrimination. Approximately 4,998 Christians killed for faith-related reasons annually. 14,766 churches attacked or closed.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Countries with Most Severe Persecution</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  { country: "North Korea", level: "Extreme", color: RED, note: "State treats Christianity as an existential threat; Christians face death or labor camps." },
                  { country: "Somalia", level: "Extreme", color: RED, note: "Al-Shabaab controls much of the country; leaving Islam for Christianity means death." },
                  { country: "Libya", level: "Very High", color: GOLD, note: "Islamist militias target Christians; no legal Christian presence allowed." },
                  { country: "Eritrea", level: "Very High", color: GOLD, note: "Only Orthodox, Catholic, Lutheran, and Islam recognized; evangelical Christians imprisoned." },
                  { country: "Nigeria", level: "Very High", color: GOLD, note: "Boko Haram and Fulani militants have killed thousands of Christians in the Middle Belt." },
                  { country: "Iran", level: "Very High", color: GOLD, note: "Apostasy from Islam is illegal; house church leaders face imprisonment." },
                  { country: "Afghanistan", level: "Extreme", color: RED, note: "Under Taliban, converting from Islam is a capital offense." },
                  { country: "Pakistan", level: "Very High", color: GOLD, note: "Blasphemy laws regularly weaponized against Christians; mob violence tolerated." },
                ].map((c, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${c.color}30`, borderRadius: 8, padding: "10px 14px" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 13 }}>{c.country}</span>
                      <span style={{ background: `${c.color}20`, color: c.color, fontSize: 10, padding: "2px 6px", borderRadius: 8, fontWeight: 600 }}>{c.level}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{c.note}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 12, padding: "16px 20px" }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: PURPLE, marginBottom: 8 }}>How to Respond</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  "Pray: name specific countries and situations by name",
                  "Give: Open Doors, Voice of the Martyrs, Release International",
                  "Advocate: contact elected officials about U.S. Commission on International Religious Freedom priorities",
                  "Educate: read Hebrews 13:3 — 'Remember those in prison as if you were together with them in prison'",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: PURPLE, fontWeight: 700, fontSize: 12, flexShrink: 0, marginTop: 2 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "conscience" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Conscience and the State</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              At the heart of religious liberty is the freedom of conscience — the capacity for moral self-determination before God that no human authority has the right to override. These sections explore what Christian tradition has taught about conscience and its limits.
            </p>
            {CONSCIENCE_POINTS.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${pt.color}30`, borderRadius: 12, padding: "18px 22px" }}>
                <div style={{ color: pt.color, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{pt.title}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{pt.content}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Personal Reflection</div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <label style={{ display: "block", color: MUTED, fontSize: 13, marginBottom: 8 }}>
                How do you think about the relationship between your faith and your civic responsibilities? Where does your tradition land on the church-state models? Are there ways you think the church in your country has conflated Christian faithfulness with political power?
              </label>
              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 160, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "12px 14px", resize: "vertical", outline: "none", fontFamily: "inherit", lineHeight: 1.6, boxSizing: "border-box" }}
              />
            </div>
            <div style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}30`, borderRadius: 12, padding: "16px 20px" }}>
              <blockquote style={{ margin: 0, fontStyle: "italic", color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
                &ldquo;Forced worship stinks in God&apos;s nostrils.&rdquo;<br />
                <span style={{ fontSize: 12, marginTop: 6, display: "block", color: BLUE }}>— Roger Williams, founder of Rhode Island and first major advocate of church-state separation (1644)</span>
              </blockquote>
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Video Teaching</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {VIDEOS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "10px 14px" }}>
                    <div style={{ color: TEXT, fontSize: 13, fontWeight: 600, lineHeight: 1.5 }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}` }}>
          <div style={{ color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>Related Topics</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Christian Nationalism", href: "/christian-nationalism" },
              { label: "Political Theology", href: "/political-theology" },
              { label: "Persecuted Church", href: "/persecuted-church" },
              { label: "Just War & Pacifism", href: "/just-war-pacifism" },
              { label: "Christian Ethics", href: "/christian-ethics" },
              { label: "Church History", href: "/church-history" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "6px 14px", color: MUTED, fontSize: 13, textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
