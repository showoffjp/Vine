"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_autism_special_needs_parent_entries";
interface JournalEntry { id: string; date: string; text: string; }

export default function AutismSpecialNeedsParent() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");

  function saveEntry() {
    if (!draft.trim()) return;
    const next = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Parenting & Special Needs</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Parenting a Child with Autism or Special Needs and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>The grief, the fierce love, the isolation, and the God who knit your child together exactly as they are.</p>
        <div style={{ background: "#1a0a2e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#c9b8f0" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> Autism Speaks Helpline: <strong>1-888-288-4762</strong> &nbsp;|&nbsp; Arc of the US: thearc.org &nbsp;|&nbsp; Autism Society: autism-society.org &nbsp;|&nbsp; 988 Lifeline
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Your Child Is Exactly Who God Made</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>In Psalm 139:13–14, David writes that God knit him together in his mother&apos;s womb and that he is fearfully and wonderfully made. Christians sometimes read this text as applying only to typical development. But the God who forms each person with intimate specificity did not make a mistake with your child&apos;s neurology, chromosomes, or brain architecture. The disability theology movement, led by scholars like Amos Yong and John Swinton, has argued that people with disabilities are not incomplete image-bearers or spiritual puzzles to be solved — they are full bearers of the divine image who reveal aspects of God that neurotypical community might otherwise miss. Your child is not a lesson or a tragedy. They are a person, fully made and fully loved.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Grief No One Gives Permission For</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Many parents of children with significant disabilities experience grief — for the life they imagined, for the typical milestones that will not come, for their own freedom and sleep and marriage and career. This grief coexists with deep love, fierce advocacy, and genuine joy. Both are true. The problem is that Christian culture often only makes space for the love and the inspiration narrative — the child who is a blessing and a joy — while providing no framework for the grief that also belongs. But grief is not ingratitude. The psalms of lament contain both trust and anguish in the same breath. You are allowed to grieve what was lost while loving fiercely what is.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Why and the Silence of God</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Why did God allow my child to have this? Is this a punishment? Did I do something wrong during pregnancy? Is this because of my sin? These questions arise naturally and deserve to be taken seriously rather than quickly reassured away. Jesus addressed a similar question in John 9 when his disciples asked whether the blind man&apos;s blindness was caused by sin — his or his parents&apos;. Jesus rejected both: this happened so that the works of God might be displayed in him (John 9:3). The works of God in your child&apos;s life may look different from what you imagined, and the why may not be answerable this side of eternity. But the works of God are present. They are being displayed. You are part of them.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Church&apos;s Failure and Responsibility</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Many families with special needs children leave the church — not because they stop believing, but because the church cannot accommodate their child, makes them feel like a disruption, or fails to include them in community. This is a severe ecclesiological failure. The early church gathered people at every developmental and cognitive level. Jesus welcomed children who interrupted important adult encounters. The church that cannot welcome people with disabilities has a shallow theology of the body and a deficient ecclesiology. If your family has been driven away from church communities because of your child&apos;s needs, that wound is real and you did not cause it.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Long-Term Care and the Parent Who Carries It</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>For parents of children with significant disabilities, the caregiving extends across decades and may never fully transition. Planning for your child&apos;s future — who will care for them when you cannot, how their finances will be protected, what community will include them — is an exhausting and often anxiety-producing task. Special Needs Trusts, SSI/SSDI, state developmental disability services, and ABLE accounts are part of the practical infrastructure. The Arc (thearc.org) and state developmental disability offices are the starting points. You are not alone in building this — but you may need to learn a language no one taught you.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Amos Yong", title: "Theology and Down Syndrome", quote: "People with cognitive and developmental disabilities are not incomplete human beings awaiting restoration. They are full image-bearers who reveal the hospitality, diversity, and richness of God in ways the typical community cannot see without them." },
              { name: "Amy Julia Becker", title: "A Good and Perfect Gift", quote: "Penelope was not a mistake. She was not a lesson in patience or a test of faith. She was a gift — complicated, unexpected, exhausting, and irreplaceable." },
              { name: "John Swinton", title: "Becoming Friends of Time", quote: "The church is called to be a community of friends — people who know one another&apos;s names, who show up, who are not afraid of difference. For people with disabilities and their families, the question is whether the church will be that community." },
              { name: "Kathleen Deyer Bolduc", title: "Autism and Alleluia", quote: "God did not make Joel autistic and then look away. God is present in every meltdown, every repetitive behavior, every sleepless night. The question is not whether God is there but whether I have the eyes to see it." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: 12 }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ color: ACCENT, fontWeight: 600 }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: 13 }}>{v.title}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Autism Society and Autism Speaks", body: "Autism Society (autism-society.org) and Autism Speaks (autismspeaks.org) both have local chapter networks, resource guides, and parent support programs. The Autism Speaks helpline (1-888-288-4762) provides personalized resource navigation. Note: for families seeking neurodiversity-affirming resources, the Autistic Self Advocacy Network (autisticadvocacy.org) provides an autistic-led perspective on best practices." },
              { title: "Early Intervention and IEP Navigation", body: "If your child is under age 3, contact your state&apos;s Early Intervention program immediately — services are free and time-sensitive. For school-age children, the Individualized Education Program (IEP) is the central legal tool for accessing services. Wrightslaw (wrightslaw.com) is the definitive resource for parents navigating special education law. Parent Training and Information Centers (parentcenterhub.org) provide free advocacy support in every state." },
              { title: "Respite Care", body: "Caregiver burnout is a serious risk. Respite care gives parents time off. ARCH National Respite Network (archrespite.org) has a locator for respite services. Many states&apos; Medicaid waiver programs fund respite care for families of children with significant disabilities. Contact your state&apos;s Division of Developmental Disabilities to learn what is available." },
              { title: "Parent Support Groups — Disability-Specific and Cross-Disability", body: "Connecting with other parents who understand your specific experience is irreplaceable. Many hospitals, school districts, and disability organizations run parent support groups. Facebook groups for parents of children with specific diagnoses provide 24/7 peer access. The key is finding a community where you do not have to explain yourself from scratch." },
              { title: "Faith-Specific Resources", body: "Key Ministry (keyministry.org), Friendship Ministries (friendship.org), and Joni and Friends (joniandfriends.org) all specifically address disability in the context of Christian community. Joni Eareckson Tada&apos;s organization has resources for families and for churches wanting to become more accessible and inclusive." },
              { title: "Future Planning", body: "ABLE accounts allow tax-advantaged savings without affecting SSI/Medicaid eligibility. Special Needs Trusts protect assets. State developmental disability waiver programs fund adult services. Planning for your child&apos;s transition to adulthood and for what happens when you are no longer able to care for them is anxiety-producing but necessary. The Arc (thearc.org) has state-by-state guidance and many local chapters offer free future-planning workshops." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontSize: 17, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "Psalm 139:13–14", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
              { ref: "John 9:3", text: "Neither this man nor his parents sinned, said Jesus, but this happened so that the works of God might be displayed in him." },
              { ref: "1 Corinthians 12:22–24", text: "On the contrary, those parts of the body that seem to be weaker are indispensable, and the parts that we think are less honorable we treat with special honor." },
              { ref: "Isaiah 40:11", text: "He tends his flock like a shepherd: he gathers the lambs in his arms and carries them close to his heart; he gently leads those that have young." },
              { ref: "Matthew 19:14", text: "Jesus said, Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these." },
              { ref: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8 }}>{s.ref}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.8 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, marginBottom: 12 }}>Private Journal</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Stored only on this device. Not shared with anyone.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What do you need to say today that you have not been able to say out loud? What do you love fiercely about your child?"
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 15, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontSize: 15 }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{e.date}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{e.text}</p>
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: 10, padding: "6px 14px", background: "transparent", color: MUTED, border: `1px solid ${BORDER}`, borderRadius: 6, cursor: "pointer", fontSize: 13 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="4Eg_di-O8nM" title="Fearfully and Wonderfully Made — A Theology of Disability" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Parenting a Special Needs Child — Grief, Joy, and God" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="The Church and Disability — Why Inclusion Matters" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Joni Eareckson Tada — Faith, Disability, and God's Purposes" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
