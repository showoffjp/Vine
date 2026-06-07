"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Vocation Is Larger Than Parenthood", verse: "Ephesians 2:10", text: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do. The good works God prepared in advance are not exhausted by one season of life. Parenthood is a profound calling, but it is not the totality of the image-bearing work God inscribed in you before children arrived. The empty nest is an invitation, however disorienting, to discover what else was written there." },
  { title: "God Calls His People Onward at Every Threshold", verse: "Isaiah 43:18-19", text: "Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland. God's characterization of his own action in history is consistently forward-facing. The wilderness image is apt for the empty nest: a disorienting terrain without the landmarks of the previous season, but a place where God is making a way." },
  { title: "The Relationship With Children Does Not End — It Transforms", verse: "Luke 2:51-52", text: "Then he went down to Nazareth with them and was obedient to them... And Jesus grew in wisdom and stature, and in favor with God and man. The relationship between Mary and Jesus transforms from the protective posture of early childhood through adolescence to a changed form in adulthood. The text does not say she stopped loving him or he stopped honoring her. The love continued; the structure changed. This is the pattern of all healthy parent-adult child relationships." },
  { title: "Grief for a Good Thing That Has Ended Is Still Grief", verse: "Ecclesiastes 3:1-4", text: "There is a time for everything, and a season for every activity under the heavens: a time to be born and a time to die... a time to weep and a time to laugh, a time to mourn and a time to dance. Ecclesiastes gives permission to mourn transitions even when the transition is not tragedy. The season of active parenting has ended. Mourning that ending is not ingratitude — it is honest engagement with the rhythm of time that the Preacher describes as built into the fabric of creation." },
  { title: "The Marriage Covenant Is Still There When the Parenting Season Is Over", verse: "Malachi 2:14-15", text: "The Lord is the witness between you and the wife of your youth, to whom you have been faithless, though she is your partner, the wife of your marriage covenant. And has not the one God made you? You belong to him in body and spirit. The empty nest is often where marriages that were held together primarily by parenting dynamics are exposed. The covenant made before children arrived is still in place. Some couples discover they need to rebuild a marriage, not just manage a household." },
];

const voices = [
  { id: "v1", name: "Gary Thomas", role: "Author of Sacred Marriage, Sacred Parenting", quote: "When our children leave, we often discover that we built a parenting-shaped marriage. The invitation in the empty nest is to discover what marriage looks like when it is not organized around children.", bio: "Gary Thomas has written extensively on both marriage and parenting as spiritual disciplines. His work on the empty nest specifically addresses the identity and marital reconfiguration that the departure of children requires, and the theological resources for receiving that transition as grace rather than loss." },
  { id: "v2", name: "Mary Beth Chapman", role: "Author of Choosing to SEE, co-founder of Shaohannah's Hope, mother of five", quote: "I thought my whole identity was being a mother. When my children began to leave, I had to ask for the first time: who am I when I am not needed in that way? That is a profound question and a profound gift.", bio: "Mary Beth Chapman's memoir Choosing to SEE addresses the full range of her experience as a mother — including the grief of a child's death and the bittersweet transition of children leaving home. Her willingness to name the identity questions of the empty nest without sentimentality has been formative for many women navigating the same transition." },
  { id: "v3", name: "Kara Powell", role: "Author of Sticky Faith, Growing With: Every Parent's Guide to Helping Teenagers and Young Adults Thrive in Their Faith, Journey, and Relationships", quote: "The best thing you can do for your young adult children's faith is to let them see you pursuing your own. The empty nest is a chance to model what it looks like to grow spiritually in every season.", bio: "Kara Powell's Growing With is specifically written for the season when children are leaving the nest and relationships with them are transforming. Her research shows that parents who continue to grow spiritually themselves produce children with more durable faith — and that the empty nest is one of the best seasons to invest in that growth." },
  { id: "v4", name: "Peter Scazzero", role: "Author of Emotionally Healthy Spirituality, Emotionally Healthy Discipleship", quote: "The grief of the empty nest is often the first grief some adults have ever faced directly. They were too busy parenting to grieve. Now they have time, and the grief comes up — not just about the children leaving, but about everything.", bio: "Peter Scazzero's work on emotional health addresses the way that seasons of intensive demands (parenting, ministry, caregiving) can defer emotional processing. The empty nest can open a window to accumulated grief that was set aside. Scazzero's framework gives language for this and a path toward integration." },
];

const practices = [
  { icon: "💬", title: "Have a Deliberate Conversation With Your Spouse About This Season", text: "Many couples discover in the empty nest that their marriage has been organized around the children without their awareness. Before the last child leaves, or shortly after, have an intentional conversation: What do we want this season to look like? What do I want? What do you want? What have we neglected in each other during the parenting years? This is not a crisis conversation — it is a design conversation." },
  { icon: "📖", title: "Return to the Things You Loved Before Parenting", text: "Most people who became parents in their twenties can no longer name what they loved before children. Recovery of pre-parental interests, friendships, creative pursuits, and spiritual practices is one of the healthiest things the empty nest makes possible. It is not regression; it is reclamation of self." },
  { icon: "🏘️", title: "Invest Relationally in a New Direction", text: "The relational energy that went into parenting does not need to disappear — it needs a new direction. Mentoring, teaching, serving, or investing in a community at a level that was impossible with children at home is one of the primary callings of the empty nest season. This is not sublimation of loss; it is the redirection of a capacity that has not diminished." },
  { icon: "🙏", title: "Pray Toward Your Children Rather Than Over Them", text: "The posture shift of the empty nest is from parental authority to intercession and accompaniment. Rather than praying for your children's protection and formation (the prayer of the parenting years), the empty nest prayer is: Lord, you have them now. Walk with them where I cannot. The prayer changes shape because the relationship has changed shape." },
  { icon: "⏳", title: "Give Yourself Six to Twelve Months Before Major Decisions", text: "The first year of the empty nest is an emotionally unstable year for many people, including those who thought they would handle it well. Do not make major decisions — about moving, about career changes, about marriage restructuring, about ministry — in the first year. Let the new terrain become familiar before you decide how to live in it." },
  { icon: "🏥", title: "Recognize When Grief Has Become Depression", text: "Sadness about children leaving is appropriate and normal. Clinical depression is different — persistent, functional-impairing, and treatable. If you cannot find pleasure in anything, are sleeping or eating abnormally, or are experiencing extended hopelessness, seek clinical evaluation. Empty nest depression is real, common, and responds to treatment." },
];

const scriptures = [
  { verse: "Isaiah 43:19", text: "See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland." },
  { verse: "Ecclesiastes 3:1", text: "There is a time for everything, and a season for every activity under the heavens." },
  { verse: "Ephesians 2:10", text: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do." },
  { verse: "Philippians 1:6", text: "Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus." },
  { verse: "Psalm 71:18", text: "Even when I am old and gray, do not forsake me, my God, till I declare your power to the next generation, your mighty acts to all who are to come." },
];

type NestEntry = { id: string; date: string; grief: string; desire: string; prayer: string };

export default function EmptyNestFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<NestEntry[]>([]);
  const [grief, setGrief] = useState(""), [desire, setDesire] = useState(""), [prayer, setPrayer] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_emptynestj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const e: NestEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief: grief.trim(), desire: desire.trim(), prayer: prayer.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_emptynestj_entries", JSON.stringify(updated));
    setGrief(""); setDesire(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_emptynestj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Faith in the Empty Nest</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For parents whose children have left home and who are discovering, perhaps for the first time in decades, who they are when they are no longer primarily a parent.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Support:</strong> 988 Lifeline (call/text 988) &nbsp;|&nbsp; Spiritual Directors International: sdicompanions.org</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ fontWeight: 800, color: TEXT, fontSize: "1rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What are you grieving most about this season?</label>
              <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="The loss of daily presence, purpose, identity..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What do you desire for this next season that you have not named out loud before?</label>
              <textarea value={desire} onChange={e => setDesire(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="What do you want to reclaim or begin..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>How are you praying for your children differently now that they are gone?</label>
              <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="What you are releasing them to..." />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: PURPLE }}>Grief:</strong> {e.grief}</p>
                {e.desire && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Desire:</strong> {e.desire}</p>}
                {e.prayer && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on the integration of emotional health and spiritual formation across life's seasons — essential for navigating the identity transition of the empty nest." },
              { videoId: "LQNbUqVwVlo", title: "Hope for Parents of Prodigals", channel: "The Gospel Coalition", description: "TGC on what faithful parenting looks like when children have left home and the ongoing call to intercede and accompany from a distance." },
              { videoId: "GGCF3OPWN14", title: "The Upside Down Kingdom", channel: "Timothy Keller", description: "Keller on the kingdom's inversion of productivity and status — the theological framework for receiving the empty nest as calling rather than loss." },
              { videoId: "G5gLrHClpKQ", title: "Rest Is a Weapon", channel: "Desiring God", description: "A theology of Sabbath and rest for those entering a season of less doing — and learning to receive rather than produce." },
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
  );
}
