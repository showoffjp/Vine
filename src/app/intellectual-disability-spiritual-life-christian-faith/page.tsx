"use client";
import { useState, useEffect } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_intellectual_disability_entries";

interface JournalEntry { id: string; date: string; text: string; }

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", background: CARD, border: `1px solid ${BORDER}` }}>
      {playing ? (
        <iframe
          width="100%"
          style={{ aspectRatio: "16/9", display: "block" }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          onClick={() => setPlaying(true)}
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a1a0e 0%, #061008 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(58,125,86,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `16px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function IntellectualDisabilityPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]")); } catch { setEntries([]); }
  }, []);

  function saveEntry() {
    if (!draft.trim()) return;
    const updated = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Intellectual Disability &amp; Spiritual Life</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            God Does Not Require Correct Theology to Be Known
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            For families and caregivers of people with intellectual disabilities, and for people with IDD themselves: you were made whole, not incomplete. Your capacity for love, joy, grief, and worship is not contingent on cognitive ability.
          </p>
        </div>

        <div style={{ background: "#0d1f15", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Resources: </strong>
          <span style={{ color: MUTED }}>988 Lifeline: </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Joni and Friends: </span>
          <strong style={{ color: TEXT }}>joniandfriends.org</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; The Boling Center for Developmental Disabilities: </span>
          <strong style={{ color: TEXT }}>uthsc.edu/boling-center</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Imago Dei Is Not a Cognitive Category", body: "The image of God (imago dei) is not located in intellectual capacity, doctrinal understanding, or the ability to articulate a confession of faith. Every interpretation of imago dei — whether relational (image = capacity for relationship with God), functional (image = capacity for dominion), or substantial (image = rational soul) — is contested theologically. What is not contested: Genesis 1:27 says God created human beings in the divine image without cognitive qualification. A person with profound intellectual disability is fully image-bearing. This is not a pastoral accommodation. It is the text." },
              { title: "The Church Has Historically Excluded People with Disabilities", body: "Leviticus 21 excluded people with certain physical conditions from priestly service — a text sometimes misapplied to suggest that disability is spiritual disqualification. But the same Torah provides gleanings and sabbath protections specifically for the vulnerable. And in the New Testament, Jesus repeatedly sought out, healed, restored, and honored people excluded by disability. The early church's care for those unable to care for themselves was so distinctive that the surrounding Roman culture noticed it. Exclusion has never been the authentic tradition." },
              { title: "Spiritual Life Does Not Require Articulate Theology", body: "The assumption that salvation and spiritual life require cognitive comprehension of propositional doctrine is a distinctly post-Enlightenment distortion of Christian faith. Infant baptism traditions make this explicit: the grace of God does not wait for doctrinal competence. Contemplative traditions locate the primary mode of spiritual life in love and attention, not in intellectual processing. L'Arche communities — founded by Jean Vanier to live alongside people with significant intellectual disabilities — have consistently witnessed that their members with IDD often demonstrate profoundly genuine faith, joy, presence, and love." },
              { title: "Caregivers Carry a Distinctive Grief", body: "Parents and caregivers of people with intellectual disabilities carry what Pauline Boss calls ambiguous loss — the ongoing grief of loving someone who is present but who is also, in some dimension, not who they might have been. This grief does not have a clear endpoint; it coexists with love, with joy, with humor, and with pride in specific achievements. The grief deserves pastoral attention even when it is silent, even when it seems like complaining, even when it is mixed with genuine love." },
              { title: "The Kingdom Belongs to Those the World Considers Small", body: "Jesus said the kingdom of heaven belongs to those who come as little children (Matthew 18:3) — specifically those without status, without leverage, without the social capacities that adults use to position themselves. The kingdom's logic inverts status. People with intellectual disabilities — often placed at the bottom of most cultural hierarchies — may be closer to the kingdom's center than the theologically sophisticated. This is not sentimentality; it is the teaching of Jesus." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ color: ACCENT, fontSize: "1.1rem", margin: "0 0 12px", fontWeight: 500 }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>{body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Jean Vanier", role: "Founder of L'Arche International, author of Becoming Human", quote: "People with intellectual disabilities have taught me more about what it means to be human, and more about what it means to love, than anyone I have ever met. They are not my service projects. They are my teachers.", note: "Vanier founded L'Arche in 1964 when he invited two men with intellectual disabilities to live with him in community rather than in an institution. The resulting worldwide network of communities — where people with and without IDD share life — has been one of the most significant Christian community experiments of the 20th century." },
              { name: "Amos Yong", role: "Pentecostal theologian, author of Theology and Down Syndrome", quote: "The question is not whether people with intellectual disabilities can have genuine faith. The question is whether the church's understanding of faith is broad enough to recognize it when it is present.", note: "Yong's theological work — informed by his brother Mark's experience with Down syndrome — argues for a disability theology that does not merely accommodate people with IDD but is shaped by their presence and witness." },
              { name: "Kara Ayers", role: "Disability advocate and assistant professor at Cincinnati Children's Hospital", quote: "Disability is not a tragedy to be overcome. It is a way of being in the world. When we treat disabled people as inspirations for overcoming their condition, we erase the actual richness of their lives.", note: "Ayers and the broader disability rights community challenge what they call 'inspiration porn' — the use of disabled people's lives as motivational content for non-disabled people. This framing applies directly to how churches tell stories about disability." },
              { name: "Joni Eareckson Tada", role: "Disability advocate, author, founder of Joni and Friends", quote: "My wheelchair has been the greatest tool of my sanctification. Not in spite of the limits it imposes, but through them. God's power is made perfect in weakness — I have tested that promise and found it true.", note: "Tada's long advocacy for people with disabilities has been grounded in a theology of disability that takes the body seriously without denying suffering, and that centers disabled people's full humanity and spiritual capacity." },
            ].map(({ name, role, quote, note }) => (
              <div key={name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: "1.05rem" }}>{name}</div>
                  <div style={{ color: ACCENT, fontSize: 13, marginTop: 2 }}>{role}</div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16, margin: "0 0 12px", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{note}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Joni and Friends Church Disability Ministry", body: "Joni and Friends (joniandfriends.org) is the largest Christian disability ministry organization in the world. Their Church Disability Ministry Program provides churches with training, resources, and consultation for making their communities accessible and welcoming. Their Family Retreats provide annual vacation experiences for families affected by disability. Their Wheels for the World program distributes wheelchairs globally." },
              { title: "Sensory-Friendly Worship", body: "Many people with intellectual disabilities, autism, and sensory processing differences find standard worship services overwhelming or inaccessible — loud music, unpredictable transitions, long sitting requirements. Sensory-friendly worship services — with lower sound levels, visual schedules, sensory-friendly spaces adjacent to the sanctuary, and trained volunteers — make worship accessible. Worship Design Studio and the National Autism Association have resources for churches developing these services." },
              { title: "Special Needs Caregiving Groups", body: "Parents and caregivers of children and adults with IDD benefit from peer support groups that understand the specific landscape: IEPs, Medicaid waivers, supported employment, guardianship decisions, housing after parents can no longer provide care. The Arc (thearc.org) runs family support programs and advocacy resources. Special Needs Alliance (specialneedsalliance.org) connects families with attorneys experienced in disability planning." },
              { title: "Supported Employment and Community Participation", body: "People with intellectual disabilities can and do participate meaningfully in work, worship, and community life when supported appropriately. Supported employment programs use job coaches to help individuals with IDD succeed in competitive employment. TransCen and the Institute for Community Inclusion provide national resources. The theological principle: full community participation is not a favor extended to people with IDD — it is a right and a gift to the community." },
              { title: "Planning for When Parents Can No Longer Care", body: "One of the most significant anxieties of parents of children with IDD is what happens when they die or become unable to provide care. Special Needs Trusts (which hold assets for a person with a disability without disqualifying them from Medicaid/SSI) are essential planning tools. Letters of Intent — informal documents that convey the person's history, preferences, routines, and what they would want future caregivers to know — are equally important. A special needs attorney can assist with both." },
              { title: "The L'Arche Model of Mutual Community", body: "L'Arche (larche.org) communities provide an alternative model: shared life between people with and without IDD in which both are recognized as givers and receivers. L'Arche's insight — that people without disabilities have as much to receive from this community as to give — challenges the service provider model that can unconsciously reinforce the hierarchy it intends to challenge. Finding or supporting local L'Arche communities is a practical act of disability inclusion." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ color: ACCENT, fontSize: "1.05rem", margin: "0 0 10px", fontWeight: 600 }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "Genesis 1:27", text: "So God created man in his own image, in the image of God he created him; male and female he created them.", note: "The image of God is given to all human beings without cognitive qualification. Full stop." },
              { ref: "Matthew 18:3–4", text: "Truly, I say to you, unless you turn and become like children, you will never enter the kingdom of heaven. Whoever humbles himself like this child is the greatest in the kingdom of heaven.", note: "The kingdom's logic inverts status hierarchies. Those without social leverage, those whom the world considers dependent, are specifically elevated by Jesus." },
              { ref: "Luke 14:13–14", text: "But when you give a feast, invite the poor, the crippled, the lame, the blind, and you will be blessed, because they cannot repay you.", note: "Jesus's vision of the banquet table is explicitly inclusive of those with disabilities. The table is not complete without them." },
              { ref: "2 Corinthians 12:9", text: "But he said to me, My grace is sufficient for you, for my power is made perfect in weakness. Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.", note: "Power perfected in weakness is not a consolation prize for those who lack strength. It is the pattern of the Kingdom." },
              { ref: "Psalm 139:13–14", text: "For you formed my inward parts; you knitted me together in my mother's womb. I praise you, for I am fearfully and wonderfully made.", note: "The person with an intellectual disability was knitted together by God and is fearfully and wonderfully made. The making was not incomplete." },
              { ref: "1 Corinthians 12:22–23", text: "On the contrary, the parts of the body that seem to be weaker are indispensable, and on those parts of the body that we think less honorable we bestow the greater honor.", note: "Paul's body metaphor explicitly elevates the parts considered weak or less honorable. The community is incomplete without them — not as charity recipients but as indispensable members." },
            ].map(({ ref, text, note }) => (
              <div key={ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8, fontSize: "0.95rem" }}>{ref}</div>
                <div style={{ color: TEXT, fontStyle: "italic", marginBottom: 10, lineHeight: 1.7, fontSize: "1rem" }}>&ldquo;{text}&rdquo;</div>
                <div style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
              <h3 style={{ color: ACCENT, margin: "0 0 8px", fontSize: "1.05rem" }}>Your Reflection Space</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", margin: "0 0 16px", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What has loving someone with an intellectual disability taught you? What does your community still not understand? What do you need that you have not asked for?"
                style={{ width: "100%", minHeight: 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 14, color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, border: "none", borderRadius: 8, color: TEXT, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>Delete</button>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="hJkLBPIbZr4" title="Disability and the Image of God — Joni and Friends" />
            <VideoEmbed videoId="G-2e9mMf7E8" title="The Indispensable Member: 1 Corinthians 12" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="Fearfully and Wonderfully Made — Psalm 139" />
            <VideoEmbed videoId="7_CGP-12AE0" title="The Banquet Table Is Incomplete Without You" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>God does not require correct theology to be known. Your capacity for love is the truest measure of your spiritual life.</p>
          <p style={{ marginTop: 8 }}>Joni and Friends: joniandfriends.org &nbsp;|&nbsp; The Arc: thearc.org &nbsp;|&nbsp; L&apos;Arche: larche.org</p>
        </div>
      </div>
    </div>
  );
}
