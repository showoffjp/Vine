"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Your Child Is Fully Made in the Image of God", verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them. The imago Dei does not have a threshold of cognitive function, communication ability, or physical capacity below which it no longer applies. Your child — whatever their diagnosis, whatever their capability level, however different their development — bears the full image of God. They are not a partial human being. They are a full image-bearer in whom God delights. This is not a consolation. It is a theological statement about the nature of your child." },
  { title: "God Formed Your Child Intentionally", verse: "Psalm 139:13-16", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made. Your child's neurology, their body, their wiring — was known and knit together by God. This does not mean disability is God's punishment or a test or a lesson for the parents. It means your child's specific personhood — including what makes their parenting so demanding — was not a divine mistake. The God who forms each person in the womb knew exactly who he was forming." },
  { title: "The Grief Is Real — Lament It Honestly", verse: "Psalm 22:1-2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer. Parenting a child with special needs involves grief — grief for the child you expected, the future you imagined, the typical milestones you won't witness. This grief is not a betrayal of your child; it is honest. Bringing it to God in lament — specifically, repeatedly, honestly — is the biblical pattern. God can hold the grief. Your child needs you to have somewhere to put it." },
  { title: "The Church Has a Specific Calling Here", verse: "1 Corinthians 12:22", text: "On the contrary, those parts of the body that seem to be weaker are indispensable. Paul's theology of the body directly implicates the church's relationship to its members with disabilities. The child who cannot access an ordinary service, whose behavior disrupts a typical classroom, whose needs fall outside the church's standard structure — is not a peripheral exception to the church's ministry. They are indispensable to it. The church that cannot include your child is not a fully functioning church." },
  { title: "God Is Not Absent in the Hard Places", verse: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. The exhaustion, the grief, the social isolation, the late-night crises, the endless advocacy — God is present in all of it. This presence does not mean the difficulty is removed. It means you are not in it alone. The parent of a child with special needs is not in a place where God's presence is diminished. They are in the place where God has promised specifically to be." },
];

const voices = [
  { id: "jt", name: "Joni Eareckson Tada", role: "Founder, Joni and Friends", quote: "Every family with a member with a disability has something to teach the church about the gospel: that worth is not measured by capability, that presence is the deepest form of ministry, and that weakness can be the site of God's most powerful work.", bio: "Joni and Friends (joniandfriends.org) is the foremost Christian disability ministry organization. Their Family Retreat programs specifically serve families of children with special needs, providing respite and community. Tada's disability theology has shaped Christian disability ministry worldwide." },
  { id: "ep", name: "Ellen Painter Dollar", role: "Author, No Easy Choice; Faith and Disability Writer", quote: "The church often tells families with special needs children that God chose them for this — as if they are particularly strong or spiritually equipped. This is rarely helpful and sometimes harmful. What most of these families need is not a theology of why this happened, but a community that will enter it with them.", bio: "Dollar writes with unusual honesty about parenting a child with a genetic disability, the limits of prosperity theology, and what genuine community looks like for families navigating ongoing medical and therapeutic challenges." },
  { id: "bm", name: "Barbara Newman", role: "Author, Nurturing Next Generation; Special Needs Ministry Expert", quote: "The goal of special needs ministry is not to have a separate program for children with disabilities. The goal is a church community where every child is known, welcomed, and belongs — including the child with autism, the child who communicates differently, the child whose behavior is unpredictable.", bio: "Newman's work on special needs ministry in church settings is practical and theologically grounded. Her resources help churches move from compliance to genuine inclusion — creating environments where children with special needs and their families feel fully welcomed." },
];

const practices = [
  { icon: "🤝", title: "Find Your Tribe", text: "The specific exhaustion and grief of parenting a child with special needs is difficult to understand from the outside. Find community with other parents navigating similar territory — through diagnosis-specific organizations (Autism Society of America, National Down Syndrome Society, etc.), through Joni and Friends family retreats, through church special needs parent support groups. The testimony and company of people who actually understand is irreplaceable." },
  { icon: "⛪", title: "Advocate for Your Child in Your Church", text: "Most churches want to include children with special needs but don't know how. Approach your church as a partner rather than a critic: share specifically what your child needs to access worship, Sunday school, and community. Many churches that don't have special needs programs will create them when asked specifically by a family with a genuine need. Joni and Friends offers church training and consultation (joniandfriends.org). Key Ministry (keyministry.org) provides resources for church special needs ministry." },
  { icon: "🛑", title: "Take Respite Without Guilt", text: "Parenting a child with complex needs is physically and emotionally demanding at a level that most people cannot comprehend. Respite — time genuinely away from caregiving — is not a luxury for these families. It is a medical necessity. Many families refuse respite for years out of guilt, then hit a wall of total depletion. Respite care is available through state-funded programs (contact your state's developmental disabilities office), through Joni and Friends, and through church volunteers trained in disability care." },
  { icon: "💰", title: "Know What Support You Are Entitled To", text: "Families of children with special needs are entitled to a range of supports that many don't access: IEP (Individualized Education Program) services through public schools beginning at age 3, state developmental disabilities funding, SSI (Supplemental Security Income), Medicaid waiver programs, and more. A special needs attorney or advocate can help navigate these systems. The Arc (thearc.org) and local parent training and information centers (parentcenterhub.org) are starting points." },
  { icon: "🙏", title: "Bring Your Grief to God — Specifically", text: "Grief about your child's diagnosis, about their limitations, about the future — needs somewhere to go. Bringing it specifically to God in prayer (not vague prayer but honest, named grief) keeps it from building into resentment, isolation, or despair. The psalms of lament give language for this. A spiritual director or therapist who understands this specific grief is also worth finding. Your grief does not mean you love your child less. It means you love them honestly." },
];

const scriptures = [
  { verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
  { verse: "Psalm 139:13-14", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "1 Corinthians 12:22", text: "On the contrary, those parts of the body that seem to be weaker are indispensable." },
  { verse: "Isaiah 40:11", text: "He tends his flock like a shepherd: He gathers the lambs in his arms and carries them close to his heart; he gently leads those that have young." },
  { verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'" },
  { verse: "Matthew 19:14", text: "Jesus said, 'Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.'" },
];

type PSNEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ParentingSpecialNeedsPage() {
  const [tab, setTab] = useState("theology");
  const [psnJournal, setPsnJournal] = useState<PSNEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_parentingspecialneedsj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_parentingspecialneedsj_entries", JSON.stringify(psnJournal)); } catch {}
  }, [psnJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setPsnJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setPsnJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Parenting & Faith</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Parenting a Child with Special Needs</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          Theology of disability, community, advocacy, and the exhausting, beautiful work of raising a child who is fully made in God's image.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Parent Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What am I carrying today — about my child, about myself, about the future?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What is true about my child that I want to hold onto?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One thing I need or one step I will take this week</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {psnJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {psnJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Carrying: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>About my child: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Step: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7KMPN9OLoNo", title: "Joni Eareckson Tada on Suffering and God's Grace", channel: "Desiring God", description: "Joni speaks from decades of disability about what she has learned of God's grace in weakness — offering hope and theological grounding to parents whose children live with significant disability." },
              { videoId: "jJPVNIAFmvA", title: "The Theology of Disability and Weakness", channel: "Joni and Friends", description: "A theological framework for understanding disability as part of God's design, not a deviation — and what the church's calling is toward those with disabilities and their families." },
              { videoId: "y-DQH-M1HuM", title: "When God Doesn't Heal", channel: "The Gospel Coalition", description: "A pastoral treatment of unanswered prayers for healing — directly relevant to parents of children with special needs who have prayed for healing and are navigating what faithfulness looks like when healing does not come." },
              { videoId: "sJSFmO6gGlo", title: "Caregiver Burnout: What It Is and How to Recover", channel: "Joni and Friends", description: "Joni Eareckson Tada on the invisible toll of caregiving — what compassion fatigue looks like in parents of children with special needs, and how to build sustainable rhythms of care and rest." },
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
  );
}
