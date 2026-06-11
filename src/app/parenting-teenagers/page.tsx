"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Deuteronomy 6 Model: Faith Transmitted Through Ordinary Life", verse: "Deut 6:6-7", text: "These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up. The Deuteronomy 6 model is not a curriculum — it is a posture. Faith is not transmitted to teenagers through formal instruction alone but through the accumulated weight of ordinary moments: the conversation in the car, the question allowed at dinner, the parent who names God in the middle of an ordinary Tuesday. Moses does not describe a Sunday school model. He describes a saturated life. Teenagers who grow up watching their parents actually live their faith — not just profess it — receive something no youth group program can fully replicate: evidence that faith is real, not merely performed." },
  { title: "The Fear Every Christian Parent Has About Teenagers Leaving the Faith", verse: "Proverbs 22:6", text: "Start children off on the way they should go, and even when they are old they will not turn from it. This verse has comforted and tortured Christian parents in equal measure. Parents who have done everything right watch children walk away; parents who failed in obvious ways see children who hold firmly to faith. The proverb is not a guarantee — it is a statement of general wisdom about formative patterns. The most honest thing that can be said about teenagers and faith is this: the fear of losing them is real, the trajectory of formation is real, and the outcome is ultimately not in the parent's hands. The parent's role is faithfulness, not control. God's role is transformation. The anxiety that collapses those two categories into one produces parenting that damages rather than disciples." },
  { title: "What Sticky Faith Research Actually Shows About Teen Faith", verse: "John 15:5", text: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing. The Fuller Youth Institute's Sticky Faith research — the most comprehensive study of faith retention in emerging adults — consistently found that relationships, not programs, are the primary factor in whether teenage faith persists into adulthood. Jesus's metaphor of the vine and branches is not incidental. Remaining is relational. Fruit is the result of abiding, not effort. The teenager who has five significant adults investing in their faith alongside their parents is dramatically more likely to maintain that faith into adulthood. Parents who try to be the only source of faith transmission for their teenagers are carrying a weight the model was never designed for." },
  { title: "Why Teenagers Need a God Who Is Real, Not Rules", verse: "Romans 8:14-15", text: "For those who are led by the Spirit of God are the children of God. The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, Abba, Father. The teenage years are precisely the season when children ask whether the faith they were raised in is true or merely inherited. A faith built primarily around rules and behavior management will not survive this interrogation. The God of Romans 8 is not primarily a rule-giver but a Father — one who adopts, leads by the Spirit, and invites intimacy. Teenagers who encounter this God — the God who calls them by name, who leads them by the Spirit rather than constraining them by law alone — have a reason to own the faith rather than merely comply with it." },
  { title: "The Danger of Performance Christianity for Teenagers", verse: "Matthew 15:8", text: "These people honor me with their lips, but their hearts are far from me. Jesus quotes Isaiah to describe a religious culture in which external compliance has decoupled from internal reality. This is the precise danger for teenagers raised in Christian homes: learning to perform faith for parents, youth leaders, and peers while the inner life remains untouched. The performance of Christianity — saying the right things, attending the right events, avoiding obvious sins — can be maintained through high school without ever producing genuine faith. The parent who prioritizes their teenager's visible religious compliance over their genuine spiritual formation is inadvertently training the performance Jesus condemns. The harder and more important work is creating a home where honesty about doubt, struggle, and confusion is safer than performing certainty." },
];

const voices = [
  { id: "md", name: "Mark DeVries", role: "Author, Family-Based Youth Ministry; Founder, Ministry Architects", quote: "We have built a youth ministry culture that accidentally teaches teenagers that faith is something that happens at church, with their peers, apart from family. And then we are surprised when they graduate and the faith doesn't come with them. The research is unambiguous: the family — imperfect, ordinary, sometimes failing — is still the primary context in which teenage faith is formed or lost. Youth ministry that bypasses the family is building on sand.", bio: "DeVries's Family-Based Youth Ministry issued a prophetic challenge to the siloed model of church youth work — the assumption that a well-staffed, heavily programmed youth ministry could substitute for the formative power of the family. His work pushed churches to see parents not as obstacles to youth ministry but as its primary partners. His research and consulting through Ministry Architects has shaped how hundreds of churches think about the intergenerational transmission of faith." },
  { id: "jb", name: "Jim Burns", role: "Author, Understanding Your Teenager; Founder, HomeWord", quote: "The greatest gift you can give your teenager is not a perfect faith — it is an honest faith. Teenagers have finely tuned detectors for hypocrisy. What they are watching for is not whether your faith is flawless, but whether it is real. A parent who says 'I don't know, but I'm trusting God anyway' teaches their teenager something that no polished sermon can: that faith is not certainty, it is trust.", bio: "Burns has spent decades equipping parents to navigate the teenage years with grace, honesty, and theological depth. His HomeWord ministry has produced practical resources for parents on topics ranging from sex and technology to faith transmission and family communication. His approach consistently combines clinical insight about adolescent development with pastoral wisdom about the spiritual dynamics of family life — giving parents frameworks that actually work in the daily mess of raising teenagers." },
  { id: "kp", name: "Kara Powell", role: "Author, Sticky Faith; Executive Director, Fuller Youth Institute", quote: "The question teenagers are actually asking — the question underneath all the other questions — is 'Does this faith hold up when it meets real life?' The teenagers who come out the other side of doubt and deconstruction with a mature faith are almost always the ones whose parents allowed the questions. They weren't given easy answers. They were given permission to wrestle, and they were not alone in it.", bio: "Powell's Sticky Faith research, conducted over years of longitudinal study at the Fuller Youth Institute, represents the most rigorous academic examination of why some teenagers retain faith into adulthood and others do not. Her findings consistently point to relationships over programs, honest engagement with doubt over managed compliance, and intergenerational connection over age-segregated ministry. Her books Sticky Faith, Growing Young, and 3 Big Questions That Change Every Teenager are essential reading for any parent serious about theological engagement with their teenager." },
];

const practices = [
  { icon: "🗣️", title: "Create a Home Where Questions Are Safer Than Performances", text: "The single most protective factor for teenage faith is a home where doubt and honest questioning are met with curiosity rather than alarm. When a teenager asks 'How do we know the Bible is true?' or 'Why does God allow suffering?' the parental response in that moment shapes not just the answer to that question but the entire trajectory of the relationship. Defensiveness teaches teenagers to hide. Curiosity teaches them to bring the real questions home rather than resolving them somewhere else. You do not have to have the answers — you have to have the willingness to sit in the questions together." },
  { icon: "🏠", title: "Practice Faith Visibly in Ordinary Moments", text: "Deuteronomy 6 describes faith transmission happening in the moments of ordinary life — sitting, walking, lying down, waking up. The parent who prays about a difficult work situation in front of their teenager, who names where they are trusting God in a hard circumstance, who processes a moral question aloud rather than delivering a verdict — this parent is doing the most important faith formation work there is. Teenagers are watching to see whether faith connects to real life. Make sure yours does, and make sure they see it." },
  { icon: "👥", title: "Recruit a Village of Faith Adults Around Your Teenager", text: "The Sticky Faith research is unambiguous: teenagers who have five or more significant adult relationships inside the church are dramatically more likely to maintain faith into adulthood. No parent can be all five. Your role is not to be your teenager's only faith mentor but to surround them with a community of adults who know their name, care about their life, and model faith across the generations. This requires intentionality — youth group attendance is not sufficient. Look for adult Sunday school teachers, small group leaders, family friends, and mentors who will actually invest in your teenager as a person." },
  { icon: "📖", title: "Read and Learn Together Rather Than Simply Instructing", text: "Teenagers who feel lectured at disengage; teenagers who are invited into genuine learning alongside a parent remain curious. Consider reading a book together — The Case for Faith, Questions Christians Hope No One Will Ask, or a biography of a significant Christian figure — and discussing it without an agenda. Take a theology class at church together. Visit a different denomination and debrief the experience. The posture of co-learner, rather than religious authority, positions you to remain in conversation with your teenager through the years when authority is being critically examined." },
  { icon: "✋", title: "Stay Connected Through the Ruptures and Repair Them Quickly", text: "Relational repair — the willingness to apologize, to acknowledge where you got it wrong, to seek reconciliation after conflict — is among the most powerful faith-formation tools a parent has. A parent who models repentance teaches their teenager something true about the gospel: that honesty about failure leads to restoration, not condemnation. The teenagers who walk away from faith most often are those who experienced the gap between what their parents professed and how they were actually treated as irreconcilable. Close that gap early and often, not by pretending it isn't there, but by naming it and crossing it together." },
];

const scriptures = [
  { verse: "Deuteronomy 6:6-7", text: "These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up." },
  { verse: "Proverbs 22:6", text: "Start children off on the way they should go, and even when they are old they will not turn from it." },
  { verse: "John 15:5", text: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing." },
  { verse: "Romans 8:14-15", text: "For those who are led by the Spirit of God are the children of God. The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, Abba, Father." },
  { verse: "Matthew 15:8", text: "These people honor me with their lips, but their hearts are far from me." },
  { verse: "Psalm 78:4", text: "We will not hide them from their descendants; we will tell the next generation the praiseworthy deeds of the Lord, his power, and the wonders he has done." },
];

type PTEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ParentingTeenagersPage() {
  const [tab, setTab] = useState("theology");
  const [ptJournal, setPtJournal] = useState<PTEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_parentingteen_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_parentingteen_entries", JSON.stringify(ptJournal)); } catch {}
  }, [ptJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setPtJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setPtJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Family &amp; Parenting</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Parenting Teenagers</h1>
        <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
          Navigating faith formation during the teenage years — the theology of passing on faith, the research on what actually works, and the practices that keep connection alive through the hardest season of parenting.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? PURPLE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
              <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Parenting Journal</h3>
              <textarea placeholder="Where am I with my teenager right now, and what feels most difficult or uncertain?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What do I believe about God's faithfulness to my teenager, even in the hard seasons?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What is one concrete thing I can do this week to strengthen our connection or faith conversation?" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {ptJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : ptJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Where I am:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>What I believe:</strong> {e.truth}</p>}
                {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>This week:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "Kp9ERkTHnpI", title: "Sticky Faith — What Keeps Teenagers Connected to Christ", channel: "Fuller Youth Institute / Kara Powell", description: "Powell presents the core findings from the Sticky Faith research — what the data actually shows about why some teenagers retain faith into adulthood and others don't, and what parents can do about it." },
              { videoId: "2bLm_MtV2o4", title: "Parenting Teenagers Through Doubt and Hard Questions", channel: "HomeWord / Jim Burns", description: "Burns on how parents can stay in conversation with teenagers who are questioning or deconstructing their faith — why honest engagement beats defensive management, and what posture keeps the door open." },
              { videoId: "Wd0aMRYKqJE", title: "Family-Based Youth Ministry — Parents as Primary Disciples", channel: "Mark DeVries", description: "DeVries makes the case for rethinking the church's approach to youth ministry — why programs cannot substitute for family faith formation, and what churches can do to actually equip parents." },
              { videoId: "qpDOGaPEZAE", title: "Raising Children Who Actually Follow Jesus", channel: "The Gospel Coalition", description: "A panel discussion on the theology and practice of raising children and teenagers in genuine faith — moving beyond behavior management toward heart formation, and what that looks like in the ordinary life of a Christian home." },
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
