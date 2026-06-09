"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "The God Who Goes Ahead",
    verse: "Deuteronomy 31:6",
    text: "\"Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.\" Moses speaks these words to a people entering a land they have not yet seen, uncertain of what awaits. The soldier deploying to an unknown theater, the spouse remaining behind with children and fear — both are crossing into an uncharted country. The promise is not that the crossing will be easy or that it will not cost. It is that God goes before and goes with. You do not enter the unknown alone.",
  },
  {
    title: "Courage and Fear Are Not Opposites",
    verse: "Joshua 1:9",
    text: "\"Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\" The command to be courageous is given because fear is real. God does not say 'You will not be afraid.' He says 'Be strong — I am with you.' Military service requires the coexistence of genuine fear and genuine courage. The faith that pretends fear away is not stronger than the faith that names it and serves anyway.",
  },
  {
    title: "Absence Is Not Abandonment",
    verse: "Psalm 46:1",
    text: "\"God is our refuge and strength, an ever-present help in trouble.\" The military family's life is structured by absence — the long goodbye, the empty chair, the child who asks where Daddy is. The physical absence of a spouse or parent is real and painful. But absence is not abandonment. God is present when the deployed service member is not. God is present in the deployment zone when family is far away. The God who is everywhere is not limited by the distances that separate military families.",
  },
  {
    title: "Service Is a Form of Neighbor-Love",
    verse: "John 15:13",
    text: "\"Greater love has no one than this: to lay down one's life for one's friends.\" Military service — at its best — is a form of voluntary sacrifice for the protection of others. The theological framework for this is not found in nationalism but in neighbor-love. The person who serves so that others may be safe is enacting a neighbor-love that Jesus affirms as the highest expression of love. This does not sanctify every military action or policy. It names the moral weight of what the service member offers.",
  },
  {
    title: "Moral Injury Is the Wound of a Conscience That Still Works",
    verse: "Romans 2:15",
    text: "\"They show that the requirements of the law are written on their hearts, their consciences also bearing witness.\" The service member who has witnessed or participated in acts that haunt them — who carries images and choices that will not settle — is not spiritually broken. Their conscience is working. Moral injury in military service is the wound that comes from the gap between what a person knows to be right and what the circumstances of war required or allowed. This wound needs specific pastoral and therapeutic care, not spiritual dismissal.",
  },
];

const voices = [
  {
    id: 1,
    name: "David Platt",
    role: "Pastor, Author of Radical; former IMB President",
    quote: "The military family bears a cost that most Christians in America know nothing about. When we pray for our troops, we should know what we are praying about — not just deployment, but the return, and what comes after.",
    bio: "Platt has spoken about the church's responsibility to military families and veterans — not just in platitudes, but in practical, sustained, community-level care for the specific challenges of military life.",
  },
  {
    id: 2,
    name: "Jonathan Shay",
    role: "Psychiatrist, Author of Achilles in Vietnam and Odysseus in America",
    quote: "The warrior who has done terrible things or witnessed terrible things in service of his country needs a community that will hear the full story — not just the heroic parts. The full story is what heals.",
    bio: "Shay's work on moral injury in combat veterans has been foundational to understanding why veterans suffer and what kinds of community — including faith community — actually help versus the responses that shut the healing down.",
  },
  {
    id: 3,
    name: "Marshele Carter",
    role: "Author, Wounded Warrior, Wounded Home; military spouse",
    quote: "I was so focused on what deployment was doing to my husband that it took years to understand what it was doing to me. Military spouses need their own care, not just support for when their soldier comes home.",
    bio: "Carter wrote Wounded Warrior, Wounded Home after her husband's multiple deployments and PTSD diagnosis reshaped their marriage and family. Her honest account of the secondary trauma of military spouses has been widely used in chaplaincy and church settings.",
  },
  {
    id: 4,
    name: "Bishop Everett Withers",
    role: "Military Chaplain, 30+ years of service",
    quote: "In the field, soldiers will tell a chaplain things they cannot tell anyone else — things they cannot say in church, things they cannot say to their families. The chaplain is often the only person who hears the whole truth.",
    bio: "Withers's long military chaplaincy has given him a unique vantage point on the spiritual lives of service members — the faith that is tested in deployment, the wounds that come home, and the kind of pastoral care that actually reaches people in military contexts.",
  },
];

const practices = [
  {
    icon: "📱",
    title: "Maintain Connection Through Every Available Channel",
    text: "In modern deployment, communication is more available than it was for previous generations — but also more complicated. Video calls, emails, letters, care packages. Research shows that maintaining emotional communication — not just logistical updates — during deployment significantly protects the relationship. Tell your deployed spouse how the children are growing. Tell your waiting family how you are actually doing, not just what is allowed.",
  },
  {
    icon: "⛪",
    title: "Find a Church with a Military Community",
    text: "Military families need churches that understand military life — the repeated moves, the deployment cycles, the reintegration challenges, the culture. Many churches near military installations have developed specific ministries. Military Community Network (militarycommunity.org) and the chapel on your installation are good starting points. If your church does not have a military ministry, consider advocating for one.",
  },
  {
    icon: "🧠",
    title: "Seek PTSD and Moral Injury Treatment Proactively",
    text: "PTSD is the most common mental health consequence of combat deployment, and moral injury frequently co-occurs with or underlies it. The VA provides evidence-based treatment, but civilian providers can also access specific protocols: Prolonged Exposure Therapy, Cognitive Processing Therapy, and Adaptive Disclosure Therapy (specifically designed for moral injury). Do not wait for symptoms to become crisis before seeking treatment.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Prepare Children Honestly and Age-Appropriately",
    text: "Children cope better with a parent's deployment when they have honest, age-appropriate information, clear communication during deployment, and predictable routines at home. The Military Child Education Coalition and FOCUS (Families OverComing Under Stress) program provide specific resources for helping children navigate deployment cycles. Children who are prepared and connected do significantly better than those who are shielded or ignored.",
  },
  {
    icon: "🔄",
    title: "Plan Reintegration as Carefully as Deployment",
    text: "The return from deployment is one of the most complex and underestimated transitions in military life. The returning service member has changed. So has the family at home. Assuming things will simply return to what they were before often leads to conflict, disconnection, and crisis. Seek reintegration counseling. Allow time for re-learning each other. Expect the transition to take months, not days.",
  },
  {
    icon: "📞",
    title: "Use Military Family Support Resources",
    text: "Military OneSource (militaryonesource.mil) offers free counseling, financial resources, and support for all branches. The Chaplain Corps is available 24/7. Each branch has family support programs. FOCUS provides resilience training for military families. Many of these resources are underutilized because service members and families do not know they exist or see asking for help as weakness. Asking for help is readiness.",
  },
];

const scriptures = [
  { verse: "Deuteronomy 31:6", text: "\"Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.\"" },
  { verse: "Psalm 91:1–2", text: "\"Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the LORD, 'He is my refuge and my fortress, my God, in whom I trust.'\"" },
  { verse: "Isaiah 41:10", text: "\"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.\"" },
  { verse: "John 15:13", text: "\"Greater love has no one than this: to lay down one's life for one's friends.\"" },
  { verse: "Psalm 121:7–8", text: "\"The LORD will keep you from all harm — he will watch over your life; the LORD will watch over your coming and going both now and forevermore.\"" },
  { verse: "Philippians 4:7", text: "\"And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.\"" },
];

type MilitaryEntry = {
  id: string;
  date: string;
  waiting: string;
  honest: string;
  prayer: string;
};

export default function MilitaryDeploymentFamilyChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MilitaryEntry[]>([]);
  const [waiting, setWaiting] = useState("");
  const [honest, setHonest] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_militarydeploymentfamily_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!waiting.trim()) return;
    const entry: MilitaryEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      waiting,
      honest,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_militarydeploymentfamily_entries", JSON.stringify(updated));
    setWaiting(""); setHonest(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_militarydeploymentfamily_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🎖️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            Military Deployment, Family & Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For active duty service members, veterans, and military families — pastoral care that honors the weight of service, the reality of moral injury, and the particular challenges of a life structured by deployment, separation, and reintegration.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 (Veterans Press 1)</strong> | <strong>Military Crisis Line:</strong> 988 or text 838255 | <strong>Military OneSource:</strong> 1-800-342-9647
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
                  "{v.quote}"
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${PURPLE}` }}>
                <div style={{ color: PURPLE, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What is the waiting like right now — the deployment, the homecoming, the reintegration?</label>
                <textarea value={waiting} onChange={e => setWaiting(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What do you need to be honest about — what you have seen, what you carry, what has changed?</label>
                <textarea value={honest} onChange={e => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — for safety, for healing, for the people who depend on you:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.waiting && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Waiting:</strong> {e.waiting}</p>}
                {e.honest && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Honest:</strong> {e.honest}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="Xz0s4KqE7cQ" title="Jonathan Shay — Moral Injury in Combat Veterans: What the Church Needs to Know" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Jonathan Shay: Moral Injury in Combat Veterans — What the Church Needs to Know</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Psychiatrist Jonathan Shay on the moral dimension of combat trauma and why community — including faith community — is essential for healing</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="yb1GsHMSR8s" title="Military Family Life — The Hidden Costs of Service" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Military Family Life: The Hidden Costs of Service</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Honest look at the specific challenges military families face — deployment cycles, reintegration, secondary trauma for spouses and children</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="kOuBSbpPL98" title="PTSD After Combat — Understanding and Finding Help" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>PTSD After Combat: Understanding and Finding Help</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Clinical and pastoral overview of combat PTSD — what it looks like, how it affects family life, and what effective treatment involves</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="OtDMDhMZAZQ" title="The Military Chaplain — Pastoral Care at the Edge of Human Experience" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Military Chaplain: Pastoral Care at the Edge of Human Experience</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>The role of chaplains in military life — who they are, what they do, and how they provide spiritual care in the most extreme circumstances</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
