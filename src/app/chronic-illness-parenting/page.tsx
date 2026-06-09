"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Parenting Under Physical Limitation Is Still Faithful Parenting", verse: "2 Corinthians 12:9", text: "My grace is sufficient for you, for my power is made perfect in weakness. Paul's famous thorn in the flesh was not removed despite prayer. Instead, God reframes it: the limitation becomes the arena where divine power operates most visibly. Parents with chronic illness often internalize shame about what they cannot give their children. This verse insists that Christ's power rests precisely on those who are insufficient." },
  { title: "Children Can Encounter God Through a Parent's Suffering", verse: "2 Corinthians 4:7", text: "We have this treasure in jars of clay to show that this all-surpassing power is from God and not from us. Jars of clay crack, leak, and show their fragility. But they carry treasure. A parent who is visibly dependent on God — who prays in front of their child, who names their limitations honestly, who keeps faith through illness — is not a lesser model of Christian life. They may be modeling it most truly." },
  { title: "God's Faithfulness Extends to Our Children When We Cannot", verse: "Psalm 103:17-18", text: "But from everlasting to everlasting the Lord's love is with those who fear him, and his righteousness with their children's children — with those who keep his covenant. The promise extends beyond the parent's capacity. When you cannot be present in the way you wish, when your illness limits what you can give, God's love toward your children does not depend on your sufficiency." },
  { title: "Lament Is Allowed When Your Body Fails Your Children", verse: "Psalm 13:1-2", text: "How long, Lord? Will you forget me forever? How long will you hide your face from me? How long must I wrestle with my thoughts and day after day have sorrow in my heart? The parent with chronic illness is allowed to mourn what illness takes from their children — school events missed, vacations impossible, spontaneity foreclosed. Lament is not faithlessness. It is honest engagement with God about real loss." },
  { title: "The Body of Christ Is Called to Be Your Extension", verse: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ. The New Testament model assumes that no Christian family carries its weight alone. When chronic illness means a parent cannot meet certain needs, the church is designed to provide what the family cannot — not as charity but as covenant community fulfilling its fundamental calling." },
];

const voices = [
  { id: "v1", name: "Kate Bowler", role: "Duke Divinity professor, diagnosed with stage 4 colon cancer at 35, author of Everything Happens for a Reason (and Other Lies I've Loved)", quote: "I kept asking what my son would remember about his mother. Would it be the hospital visits? The exhaustion? Then I realized: he would remember that I was present in the ways I could be. That has to be enough.", bio: "Kate Bowler's experience of being diagnosed with terminal cancer while parenting a young child became one of the most publicly documented encounters with chronic illness and parenthood in recent Christian memory. Her books and podcast have given permission to tens of thousands to hold faith and grief simultaneously." },
  { id: "v2", name: "Joni Eareckson Tada", role: "Quadriplegic since age 17, married, author and founder of Joni and Friends", quote: "Disability does not disqualify you from making an eternal impact on the people nearest you. Sometimes it intensifies it.", bio: "Joni Tada has navigated decades of physical limitation while maintaining a profound relational and spiritual life. Although she and Ken did not have biological children, her extensive writing on disability and family life speaks directly to parents who fear their physical limitations are damaging their children." },
  { id: "v3", name: "Amy Young", role: "Chronic illness advocate, author of Looming Transitions", quote: "My children do not need a mother who never gets sick. They need a mother who shows them what it looks like to keep going when your body is unreliable.", bio: "Amy Young has written extensively about living with chronic illness as a parent in a cross-cultural context. Her work focuses on the specific guilt parents carry when their conditions limit their availability, and the theological and practical resources for reframing that guilt." },
  { id: "v4", name: "Michael Cusick", role: "Author of Surfing for God, recovery counselor, chronic illness survivor", quote: "The deepest parenting I have ever done happened in a hospital room. My children learned what I believed at the bedside, not at the ball field.", bio: "Michael Cusick has written about parenting through seasons of physical and psychological crisis. He draws on his own experience of chronic illness and recovery to argue that the ways parents handle suffering become the most formative spiritual instruction they give their children." },
];

const practices = [
  { icon: "💬", title: "Narrate Your Inner Life to Your Children Appropriately", text: "Age-appropriate honest conversation — 'Mom's body hurts today, but I am still here and I still love you' — gives children language for reality. Children who are left with unexplained parental absences or limitations often fill the silence with self-blame. Brief, honest, consistent narration protects them better than protection from the truth." },
  { icon: "🙏", title: "Pray With Your Children About Your Illness", text: "Praying together about your condition models dependence on God, makes the illness a shared spiritual project rather than a forbidden topic, and gives children a practice for their own future suffering. 'Lord, thank you that even when Daddy's body doesn't work right, you are still with us' is a prayer a five-year-old can hold for the rest of their life." },
  { icon: "🏘️", title: "Explicitly Ask the Church for Specific Help", text: "Chronic illness requires sustained help — not one-time casseroles. Identify specific recurring needs (school pickup, weekend activities, meal planning) and ask specific people. Most church communities want to help but do not know what to offer. The specificity of your ask is a gift to them, not a burden." },
  { icon: "🛋️", title: "Distinguish What Only You Can Give", text: "Physical presence at every activity is not what makes you indispensable to your children. Emotional attunement, consistent interest in their inner lives, spiritual investment, and the unique love you carry for them — these cannot be outsourced. Focus your limited energy on what only you can provide." },
  { icon: "📋", title: "Create Stability Structures That Reduce Uncertainty", text: "Children of parents with chronic illness often live with unpredictability — not knowing which days are good or bad, whether plans will hold. Creating simple, consistent rituals (a nightly check-in, a weekly tradition that requires minimal physical energy) gives children anchors when the larger picture is unstable." },
  { icon: "🏥", title: "Seek Therapy for Your Children During Hard Seasons", text: "Children who watch a parent struggle with chronic illness carry anxiety, confusion, and grief that benefit from professional support. This is not a sign that you have failed — it is responsive parenting. Brief play therapy or counseling can give children tools to process what they cannot yet articulate." },
];

const scriptures = [
  { verse: "2 Corinthians 12:9-10", text: "My grace is sufficient for you, for my power is made perfect in weakness... When I am weak, then I am strong." },
  { verse: "Psalm 103:17", text: "But from everlasting to everlasting the Lord's love is with those who fear him, and his righteousness with their children's children." },
  { verse: "Isaiah 46:3-4", text: "Listen to me... you whom I have upheld since your birth, and have carried since you were born. Even to your old age and gray hairs I am he, I am he who will sustain you." },
  { verse: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
];

type CIPEntry = { id: string; date: string; grief: string; gift: string; need: string };

export default function ChronicIllnessParentingPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CIPEntry[]>([]);
  const [grief, setGrief] = useState(""), [gift, setGift] = useState(""), [need, setNeed] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_chronicillnessparentingj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const e: CIPEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief: grief.trim(), gift: gift.trim(), need: need.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_chronicillnessparentingj_entries", JSON.stringify(updated));
    setGrief(""); setGift(""); setNeed("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_chronicillnessparentingj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: GREEN, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Parenting With Chronic Illness</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For parents whose bodies limit what they can give — and who need help believing that limitation does not disqualify them from being the parent God has called them to be.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Support:</strong> 988 Suicide & Crisis Lifeline (call/text 988) &nbsp;|&nbsp; Joni and Friends: joniandfriends.org &nbsp;|&nbsp; Caregiver Action Network: caregiveraction.org</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
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
                <div style={{ color: GREEN, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
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
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What are you grieving today about what your illness limits as a parent?</label>
              <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="Name the loss specifically..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What unique gift are you able to give your children even now?</label>
              <textarea value={gift} onChange={e => setGift(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="What only you can offer..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What specific help does your family need from the church this week?</label>
              <textarea value={need} onChange={e => setNeed(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Be concrete and specific..." />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: GREEN }}>Grief:</strong> {e.grief}</p>
                {e.gift && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Gift:</strong> {e.gift}</p>}
                {e.need && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Need:</strong> {e.need}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7KMPN9OLoNo", title: "Suffering and God's Grace", channel: "Joni Eareckson Tada — Desiring God", description: "Joni on what a life of physical limitation teaches about divine grace — profoundly relevant for parents whose bodies do not cooperate with their love for their children." },
              { videoId: "sJSFmO6gGlo", title: "Caregiver Burnout and Renewal", channel: "Joni and Friends", description: "Joni and Friends on burnout among caregivers and those with chronic conditions — and the spiritual resources that sustain people through sustained limitation." },
              { videoId: "y-DQH-M1HuM", title: "When God Doesn't Heal", channel: "The Gospel Coalition", description: "TGC on the theology of unanswered prayer for healing — essential for parents who have prayed for restoration and are still parenting through illness." },
              { videoId: "ZGk1hl1nNrw", title: "Trauma, Compassion Fatigue, and the Church", channel: "Diane Langberg", description: "Langberg on secondary trauma and the cumulative weight of limitation in caregiving contexts — relevant for parents managing chronic conditions while raising children." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
