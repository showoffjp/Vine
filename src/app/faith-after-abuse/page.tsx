"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Abuse Is a Perversion of What God Designed, Not an Expression of It", verse: "Ezekiel 34:4", text: "You have not strengthened the weak or healed the sick... you have ruled them harshly and brutally. God's indictment of shepherds who abuse their authority is the clearest possible statement: abuse in the name of God or the church is a radical distortion of his character, not his design. The God who is named in the abuse is not the God who actually exists." },
  { title: "Your Faith Was Weaponized — That Is a Specific Kind of Wound", verse: "Matthew 18:6", text: "If anyone causes one of these little ones who believe in me to stumble, it would be better for them to have a large millstone hung around their neck. Jesus speaks directly and severely about those who use faith to harm believers. What was done to you was taken seriously by God in the moment it happened." },
  { title: "The God Who Sees Is Not the God Who Enabled", verse: "Genesis 16:13", text: "She gave this name to the Lord who spoke to her: 'You are the God who sees me.' Hagar had been abused and abandoned. God appeared to her in the wilderness, not to the household that had wronged her. He saw her. He named her. He made promises to her. This is the God who exists beneath the false image wielded against you." },
  { title: "Faith Can Be Rebuilt on Different Ground", verse: "1 Corinthians 3:11", text: "For no one can lay any foundation other than the one already laid, which is Jesus Christ. Abusive religion built your faith on human authority, performance, fear, or shame. Those foundations collapse because they are not foundations. Christ himself — not the institution, not the leader, not the system — is the only ground that holds." },
  { title: "Rebuilding Is Allowed to Be Slow", verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a smoldering wick he will not snuff out. This is the Messiah's posture toward damaged faith. He does not demand quick recovery or strong faith from those he has found wounded. The bruised and barely-burning are exactly what his gentleness is for." },
];

const voices = [
  { id: "v1", name: "Diane Langberg", role: "Psychologist, Author, Redeeming Power", quote: "The church has enormous power precisely because it speaks in the name of God. When that power is used to harm, the damage is spiritual in its depth and requires spiritual healing alongside psychological care.", bio: "Langberg has spent five decades treating trauma survivors, many of them harmed by religious abuse. Her work integrates psychological understanding with deep theological grounding, showing how the actual God differs from the God weaponized against survivors." },
  { id: "v2", name: "Rachael Denhollander", role: "Advocate, Author", quote: "The gospel is most clearly proclaimed when the church protects the vulnerable. When it protects the powerful instead, it denies the gospel.", bio: "Denhollander, a survivor of Larry Nassar's abuse, has become a leading voice on how churches mishandle abuse and what genuine gospel response looks like. Her work helps survivors distinguish the failure of institutions from the character of Christ." },
  { id: "v3", name: "Dan Allender", role: "Psychologist, Author, The Wounded Heart", quote: "Abuse always involves betrayal. And betrayal by someone who represented God is betrayal of the deepest kind — it must be named, mourned, and brought to the One who was himself betrayed.", bio: "Allender's foundational work on sexual abuse recovery has been extended to religious abuse, and his approach insists that survivors must grieve the harm fully before they can encounter the actual God rather than a projection." },
  { id: "v4", name: "Wade Mullen", role: "Author, Something's Not Right", quote: "Spiritual abuse is maintained by the abuser's ability to define reality. Recovery begins when the survivor starts to trust their own perception again.", bio: "Mullen's research on institutional abuse in religious organizations gives survivors a framework for understanding what was done to them, and why the distortion of their perception was the central mechanism of the harm." },
];

const practices = [
  { icon: "🛑", title: "Separate the Abuser's God from the Actual God", text: "This is the hardest and most essential work. The God described or invoked in the abuse — demanding, punishing, exposing, controlling — may bear no resemblance to the God of Scripture. Take time to read primary texts: the Psalms, the Gospels, Isaiah 40-55. Let those texts, not the voices that harmed you, define who God is." },
  { icon: "🏥", title: "Find a Trauma-Informed Therapist", text: "Religious abuse is a specific kind of trauma. A therapist who understands both trauma and religious experience can help you untangle what was done from who God is, without either dismissing your faith or requiring you to perform recovery. Psychology Today's therapist finder includes filters for religious and spiritual trauma." },
  { icon: "🤝", title: "Find Witnesses Who Are Both Safe and Faithful", text: "After religious abuse, almost any Christian community feels dangerous. Finding one or two people who are both genuinely trustworthy and genuinely faithful is not quick. It may start with a spiritual director outside any institutional context, or a small trusted group of other survivors." },
  { icon: "📖", title: "Read the Prophets on Abusive Religious Leaders", text: "Ezekiel 34, Jeremiah 23, Matthew 23. The prophets and Jesus were explicit, severe critics of religious leaders who harmed rather than served. Reading their words helps survivors understand that naming what happened is itself prophetic faithfulness, not rebellion against God." },
  { icon: "🕊️", title: "Give Your Faith Permission to Rebuild Slowly", text: "Demanding yourself to be healed, to trust again, to return to community, to pray the way you used to — these demands will damage the process. The bruised reed and smoldering wick image in Isaiah 42:3 means: you do not have to be strong. The rebuilding will take as long as it takes." },
  { icon: "📝", title: "Journal What You Know to Be True vs. What You Were Told", text: "Religious abuse confuses these two categories. Make two columns: what the abuse told you about God, yourself, and reality; and what you can find in primary Scripture texts that contradicts or corrects those claims. The gap reveals the distortion, and naming the distortion is part of liberation." },
];

const scriptures = [
  { verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a smoldering wick he will not snuff out. In faithfulness he will bring forth justice." },
  { verse: "Ezekiel 34:16", text: "I will search for the lost and bring back the strays. I will bind up the injured and strengthen the weak, but the sleek and the strong I will destroy. I will shepherd the flock with justice." },
  { verse: "Matthew 18:6", text: "If anyone causes one of these little ones — those who believe in me — to stumble, it would be better for them to have a large millstone hung around their neck and to be drowned in the depths of the sea." },
  { verse: "Psalm 55:12-14", text: "If an enemy were insulting me, I could endure it... But it is you, a man like myself, my companion, my close friend, with whom I once enjoyed sweet fellowship at the house of God." },
  { verse: "Genesis 16:13", text: "She gave this name to the Lord who spoke to her: 'You are the God who sees me,' for she said, 'I have now seen the One who sees me.'" },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
];

type FaithAbuseEntry = { id: string; date: string; distortion: string; truth: string; step: string };

export default function FaithAfterAbusePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FaithAbuseEntry[]>([]);
  const [form, setForm] = useState({ distortion: "", truth: "", step: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_faithafterabusej_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.distortion.trim()) return;
    const e: FaithAbuseEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_faithafterabusej_entries", JSON.stringify(updated));
    setForm({ distortion: "", truth: "", step: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_faithafterabusej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Spiritual Abuse Recovery</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Rebuilding Faith After Religious Abuse</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>When faith itself was used to harm you — through a church, a leader, a system that wielded God as a weapon — the damage is deeper than ordinary hurt. This page is for those navigating the long work of separating the false god from the real one, and deciding whether faith can be rebuilt on different, truer ground.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
                  <span style={{ color: MUTED, fontSize: "0.8rem", fontStyle: "italic" }}>{item.verse}</span>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <span style={{ color: PURPLE, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Support Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>GRACE</strong> — netgrace.org, supports abuse survivors in Christian contexts</li>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — call or text if abuse trauma has become a mental health crisis</li>
                <li><strong style={{ color: TEXT }}>Crisis Text Line</strong> — text HOME to 741741</li>
                <li><strong style={{ color: TEXT }}>RAINN</strong> — 1-800-656-4673 if abuse involved sexual harm</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.distortion} onChange={e => setForm(f => ({ ...f, distortion: e.target.value }))} placeholder="What false image of God or yourself was planted by the abuse?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.truth} onChange={e => setForm(f => ({ ...f, truth: e.target.value }))} placeholder="What does Scripture actually say that contradicts that distortion?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.step} onChange={e => setForm(f => ({ ...f, step: e.target.value }))} placeholder="One small step toward rebuilding on truer ground" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.distortion && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Distortion:</strong> {e.distortion}</p>}
                {e.truth && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Truth:</strong> {e.truth}</p>}
                {e.step && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Step:</strong> {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "PKyLYSfmTwI", title: "Healing After Spiritual Abuse", channel: "Dan Allender Center", description: "Allender addresses the specific wound of spiritual abuse — how authority and theology can be weaponized, and what the long work of healing requires." },
              { videoId: "ZGk1hl1nNrw", title: "Resilience and Compassion in Hard Times", channel: "Diane Langberg", description: "Langberg on how abuse in the name of God causes distinctly spiritual damage, and how genuine healing requires both psychological and theological reconstruction." },
              { videoId: "3_-OEdC2uaY", title: "When Church Hurts", channel: "The Gospel Coalition", description: "An honest examination of institutional church failure, what survivors are owed, and how to hold faith when those who represented Christ caused harm." },
              { videoId: "1nzj7Sf395o", title: "Healing the Shame That Binds", channel: "CCEF", description: "CCEF on the shame-based theology often wielded in abusive religious contexts, and how the gospel's actual word about worth and acceptance counters it." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
