"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_racial_trauma_grief_entries";
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
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0d0820 0%, #060610 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(107,79,187,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function RacialTraumaGrief() {
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
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Race & Faith</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Racial Trauma, Grief, and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>For those carrying the accumulated weight of racism — the exhaustion, the grief, the anger, and the God who sees.</p>
        <div style={{ background: "#1a0a2e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#c9b8f0" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> 988 Lifeline (also available en Espanol) &nbsp;|&nbsp; Loveland Foundation: thelovelandfoundation.org (therapy for BIPOC women) &nbsp;|&nbsp; Therapy for Black Girls: therapyforblackgirls.com &nbsp;|&nbsp; Open Path: openpathcollective.org
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Racial Trauma Is Real Trauma</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Race-based traumatic stress — the psychological and physiological harm caused by racism, discrimination, racial violence, and vicarious exposure to the harm of one&apos;s community — produces the same neurobiological signatures as PTSD from combat or assault. It is also cumulative and ongoing: there is no safety to retreat to after the traumatic event because the threat is chronic and ambient. The compounding effect of individual incidents, microaggressions, structural racism, and media exposure to violence against people of one&apos;s community creates a burden that most white Christians have never been required to carry. Naming it as trauma is not hyperbole — it is accuracy.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Lament Tradition and Crying Out to God</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>The lament tradition of Scripture — the psalms of complaint, Lamentations, the cries of the prophets, Jeremiah&apos;s confessions — has historically been most alive in communities that have had the most to lament. African American Christianity developed a profoundly rich tradition of lament, of holding suffering and faith together without resolving the tension. The spirituals — songs like Nobody Knows the Trouble I Have Seen — are a form of theological witness that the dominant white church has largely not had to develop. The lament tradition is not a spiritual problem to be overcome. It is a form of prayer that God not only tolerates but canonized, and it belongs to those who have the most need of it.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The God Who Sees — El-Roi and the Marginalized</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Throughout Scripture, God demonstrates a particular attentiveness to those who have been pushed to the margins — the enslaved, the immigrant, the outcast, the poor. Hagar, an enslaved Egyptian woman, received a direct divine visitation and named God El-Roi — the God who sees me (Genesis 16:13). She was the first person in Scripture to name God, and she was a slave and a refugee. The Hebrew people&apos;s central narrative is liberation from slavery. The prophets consistently positioned God on the side of the oppressed against their oppressors. If you are carrying racial trauma, you are not crying out to a God who is neutral about the suffering of the marginalized. You are crying out to the God whose name is He Who Sees.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The White Church&apos;s Failure and What Faithful Christianity Requires</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Much of American Christianity has been complicit in racism — through slavery, through the theological justification of Jim Crow, through the segregation of congregations, through the silence of white churches during the Civil Rights movement, through ongoing patterns of racial exclusion and indifference. This is historical fact, not political opinion. People carrying racial trauma who have also been harmed by white Christian communities carry a compounded wound: racism and the betrayal of the faith. Recovery from this requires communities where naming racism is not considered divisive, where lament is welcomed, and where the full humanity of BIPOC people is not performative but structural.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Anger Is a Legitimate Response to Injustice</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Christian communities have often asked BIPOC members to perform forgiveness and reconciliation before justice has been named or addressed, framing anger at racism as spiritually immature. This is a misuse of forgiveness theology that serves the comfort of the powerful, not the healing of the harmed. The prophets were incandescently angry about injustice — Amos, Micah, Isaiah, Jeremiah all expressed rage at systems that crushed the poor and vulnerable. Jesus overturned tables in the temple. Anger at genuine injustice is not the opposite of faith — it is one of its clearest expressions.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Bryan Stevenson", title: "Just Mercy", quote: "We are all implicated when we allow other people to be mistreated. An absence of compassion can corrupt the decency of a community, a state, a nation. Fear and anger can make us cruel and inhumane to people who are vulnerable in ways that none of us would wish." },
              { name: "Chanequa Walker-Barnes", title: "I Bring the Voices of My People: A Womanist Vision for Racial Reconciliation", quote: "The problem with racial reconciliation as usually practiced is that it asks the people who have been harmed to do the emotional labor of healing those who harmed them. That is not reconciliation. It is reinscription of the original harm." },
              { name: "Esau McCaulley", title: "Reading While Black: African American Biblical Interpretation as an Exercise in Hope", quote: "The Bible belongs to the people who have had the most reason to read it for survival. Black Christians have been reading Scripture through the lens of suffering and liberation for four hundred years. That reading is not marginal. It is prophetic." },
              { name: "Howard Thurman", title: "Jesus and the Disinherited", quote: "The religion of Jesus is a technique of survival for the oppressed. It says: despite everything they have done to your body, they cannot take your soul. They cannot make you hate. They cannot make you less than what God made you." },
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
              { title: "Therapy with a Culturally Competent Provider", body: "Therapy for racial trauma is most effective with a provider who understands racial identity and race-based traumatic stress — not just generic trauma training. Therapy for Black Girls (therapyforblackgirls.com), Therapy for Black Men (therapyforblackmen.org), the Loveland Foundation (thelovelandfoundation.org, which provides grants for therapy for Black women and girls), and Psychology Today (filtering by specialty) all help locate appropriate providers." },
              { title: "Culturally Resonant Faith Communities", body: "Finding a faith community where BIPOC experience is centered and normalized — not just tolerated — is often essential to healing. Many people have found that historically Black denominations, multiethnic churches with genuine power-sharing, and churches led by pastors of color provide a fundamentally different experience of belonging. This is not segregation — it is the healing that comes from being in a room where you do not have to explain yourself." },
              { title: "Lament Practices", body: "Engaging the lament tradition deliberately — praying Psalm 13, Psalm 22, Lamentations, writing your own lament in the style of the psalms — creates a spiritual container for the grief and anger of racial trauma. The African American spiritual tradition, liberation theology texts (Gustavo Gutierrez, James Cone), and womanist theology all provide resources for bringing racial suffering specifically to God." },
              { title: "Community and Witness", body: "The most powerful element in the survival of Black Christianity under slavery and Jim Crow was community — the ability to gather, to speak truth, to hold one another, to collectively maintain dignity against a system designed to destroy it. Community as a spiritual practice — finding, building, and investing in communities where your full experience is welcomed — is both healing and resistance." },
              { title: "Media and News Consumption — Protective Practices", body: "Repeated exposure to racial violence through media — including news, social media, and viral videos — produces measurable re-traumatization. Developing intentional practices around media consumption: limiting exposure, choosing when you engage, and maintaining community and self-care resources before and after exposure — protects against cumulative harm without requiring ignorance." },
              { title: "Advocacy and Action as Healing", body: "Research shows that agency — taking meaningful action — reduces the helplessness that drives traumatic response. Channeling grief and anger into advocacy, mutual aid, voting rights work, education, and community organizing is not just political. It is a trauma-informed response to the particular form of harm that racial trauma represents. Justice work, for many, is part of healing." },
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
              { ref: "Genesis 16:13", text: "She gave this name to the Lord who spoke to her: You are the God who sees me, for she said, I have now seen the One who sees me." },
              { ref: "Amos 5:24", text: "But let justice roll on like a river, righteousness like a never-failing stream!" },
              { ref: "Micah 6:8", text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God." },
              { ref: "Lamentations 3:19–23", text: "I remember my affliction and my wandering, the bitterness and the gall. I well remember them, and my soul is downcast within me. Yet this I call to mind and therefore I have hope: Because of the Lord's great love we are not consumed, for his compassions never fail." },
              { ref: "Psalm 10:14", text: "But you, God, see the trouble of the afflicted; you consider their grief and take it in hand. The victims commit themselves to you; you are the helper of the fatherless." },
              { ref: "Isaiah 61:1", text: "The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners." },
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
                placeholder="What are you carrying that you have not been given permission to name? What do you need God to see?"
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
            <VideoEmbed videoId="4Eg_di-O8nM" title="El-Roi — The God Who Sees — Racial Trauma and Faith" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Lament, Justice, and the Black Church Tradition" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Reading While Black — Bryan Stevenson and the Gospel of Justice" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Anger, Prophets, and the Faith That Names Injustice" />
          </div>
        )}
      </div>
    </div>
  );
}
