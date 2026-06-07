"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Image of God Is Not Racially Monolithic", verse: "Genesis 1:27", text: "So God created mankind in his own image. The image of God is carried in every human being, across every ethnicity and every combination thereof. The biracial person does not have a partial image or a divided image — they carry the imago Dei fully, in a particular form that reflects more of the diversity of God's image-bearing humanity." },
  { title: "The New Creation Celebrates Cultural Diversity in One Body", verse: "Revelation 7:9", text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb. The eschaton is multicultural. The throne room is not monochrome. Biracial Christians are, in some sense, already living toward the future that God is building." },
  { title: "Christ Crossed the Ultimate Boundary to Reconcile the Divided", verse: "Ephesians 2:14-15", text: "For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility. Paul applies this to Jewish-Gentile division. The principle extends: the work of Christ is the reconciliation of what was divided. The biracial body is, at the cellular level, an emblem of this reconciliation." },
  { title: "You Do Not Have to Choose — God Did Not Design Ethnic Identity as Mutually Exclusive", verse: "Acts 17:26", text: "From one man he made all the nations, that they should inhabit the whole earth; and he marked out their appointed times in history and the boundaries of their lands. From one origin, God made all nations. The biracial person does not have to choose which part of their heritage belongs to them — both belong, as God made both." },
  { title: "The Stranger and the Sojourner Are Held in Special Regard", verse: "Leviticus 19:34", text: "The foreigner residing among you must be treated as your native-born. Love them as yourself, for you were foreigners in Egypt. Biracial people often experience a kind of perpetual foreignness — never quite belonging in either community they come from. God holds the foreigner in special regard." },
];

const voices = [
  { id: "v1", name: "Chanequa Walker-Barnes", role: "Author, I Bring the Voices of My People", quote: "The question is not whether you are Black or white or both. The question is whether the church has space for you to be fully yourself, in all of it.", bio: "Walker-Barnes, a womanist theologian, addresses the specific experience of people of mixed racial heritage in predominantly white and predominantly Black Christian communities, and what full belonging requires." },
  { id: "v2", name: "Jemar Tisby", role: "Author, The Color of Compromise", quote: "Race is a social construction, but racial experience is real. The biracial Christian navigates both the construction and the experience — in multiple directions.", bio: "Tisby's historical account of race in American Christianity helps biracial readers understand the systems and categories they are navigating, and why the church's racial dynamics produce specific burdens for those who cross its lines." },
  { id: "v3", name: "Oneya Okuwobi", role: "Author, White Awake", quote: "The multiracial person has a gift the homogeneous community does not — the embodied knowledge of what it is to inhabit multiple cultures. That is a prophetic witness to the church's future.", bio: "Okuwobi addresses how biracial and multiracial Christians carry a particular kind of witness in racially divided churches, and how their experience can be a gift rather than only a burden." },
  { id: "v4", name: "Mark DeYmaz", role: "Author, Building a Healthy Multi-Ethnic Church", quote: "A multiethnic church is not a goal to achieve — it is a reflection of the kingdom we are being formed into.", bio: "DeYmaz's work on multiethnic church-building provides practical and theological grounding for biracial Christians seeking communities that can hold their full identity rather than requiring them to choose." },
];

const practices = [
  { icon: "🔎", title: "Name the Specific Experiences, Not Just the Category", text: "Being biracial is not a monolithic experience. Name specifically: which communities have felt like home? Where have you experienced rejection from both sides? What assumptions have people made? Specificity helps you understand your own experience rather than inheriting a narrative about it." },
  { icon: "🏘️", title: "Seek Communities That Can Hold Complexity", text: "Homogeneous churches often struggle to hold biracial identity — they ask, implicitly or explicitly, for a choice. Seek multiethnic congregations or communities with explicit theological commitment to cultural diversity. You should not have to perform a monoracial identity to belong." },
  { icon: "📖", title: "Read the Church Fathers From Beyond the West", text: "Augustine was North African. Athanasius was Egyptian. Perpetua was Carthaginian. The canon of Christian theology is not Western-white, though it is often presented that way. Encountering the breadth of Christian tradition expands the space you are allowed to occupy." },
  { icon: "🌍", title: "Explore Both Sides of Your Heritage Deliberately", text: "Biracial people sometimes receive one side of their heritage more fully than the other, depending on which parent was more present or which community was more accessible. Deliberately learning the history, theology, art, and community of both sides of your heritage honors the fullness of who you are." },
  { icon: "🤝", title: "Find Other Biracial and Multiracial Christians", text: "The experience of being biracial in the church is shared by more people than it may seem. Seeking community with others who navigate similar dynamics — online communities, Multiethnic Studies groups, multiracial family ministries — provides the specific companionship of shared experience." },
  { icon: "🛑", title: "Refuse the False Choice When It Is Imposed", text: "When communities or individuals ask you to choose your racial identity — to be 'really' one or the other — you are not required to comply. You can name, gently and firmly, that you are not required to perform a simpler identity than the one you actually have." },
];

const scriptures = [
  { verse: "Galatians 3:28", text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus." },
  { verse: "Revelation 7:9", text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb." },
  { verse: "Acts 17:26", text: "From one man he made all the nations, that they should inhabit the whole earth." },
  { verse: "Ephesians 2:14", text: "For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility." },
  { verse: "Isaiah 56:5", text: "To them I will give within my temple and its walls a memorial and a name better than sons and daughters; I will give them an everlasting name that will endure forever." },
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
];

type BiracialEntry = { id: string; date: string; tension: string; gift: string; community: string };

export default function BiracialIdentityFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BiracialEntry[]>([]);
  const [form, setForm] = useState({ tension: "", gift: "", community: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_biracialidentityj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.tension.trim()) return;
    const e: BiracialEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_biracialidentityj_entries", JSON.stringify(updated));
    setForm({ tension: "", gift: "", community: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_biracialidentityj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Identity and Faith</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Biracial Identity and Faith</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Biracial Christians often navigate racial identity in ways that monoracial communities — and monoracial theologies — have not prepared them for. This page is for those asking how their full, complex heritage belongs in the body of Christ, and what Scripture says about the image they bear.</p>

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
              <textarea value={form.tension} onChange={e => setForm(f => ({ ...f, tension: e.target.value }))} placeholder="Where does your biracial identity create tension — in community, in yourself?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.gift} onChange={e => setForm(f => ({ ...f, gift: e.target.value }))} placeholder="What does your particular heritage give you that a single-heritage person does not have?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.community} onChange={e => setForm(f => ({ ...f, community: e.target.value }))} placeholder="Where do you most feel like you fully belong?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.tension && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Tension:</strong> {e.tension}</p>}
                {e.gift && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Gift:</strong> {e.gift}</p>}
                {e.community && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Belonging:</strong> {e.community}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "Ver8qTBTLCQ", title: "Hope, Race and Power", channel: "Tim Keller", description: "Keller on how the gospel speaks to racial division and the kingdom vision of united diversity — directly relevant to biracial Christians navigating divided communities." },
              { videoId: "G9B0n0JJoSQ", title: "The Color of Compromise", channel: "Jemar Tisby — TGC", description: "Tisby on the history of race in American Christianity — the context in which biracial Christians navigate identity and belonging." },
              { videoId: "OU69so6VjHA", title: "Race and the Christian", channel: "Keller, Piper, Bradley", description: "A theological discussion of how Christians should think about race, ethnicity, and identity in light of the gospel and the coming kingdom." },
              { videoId: "jxaJZ5lBM5U", title: "Reconciliation", channel: "Tim Keller", description: "Keller on the reconciling work of the gospel — how the cross creates the only genuine basis for multiethnic community and identity." },
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
