"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Your First Child Did Not Use Up God's Goodness", verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness. Secondary infertility comes with a particular theological confusion: you know God can give life — you have evidence in the child you hold. But the blessing you experienced before does not explain why the blessing you long for now has not come. God's goodness is not a fixed quantity you have spent. His compassions are new every morning. The question you carry is real and unanswered, and it deserves to be held honestly before God." },
  { title: "Unseen Grief in a Visible Joy", verse: "Proverbs 14:13", text: "Even in laughter the heart may ache, and rejoicing may end in grief. Secondary infertility is one of the most invisible griefs. Others see you with a child and cannot fathom the depth of longing you carry for another. Well-meaning people say 'at least you have one.' This is true and also not a comfort. The grief of secondary infertility is real, disenfranchised grief — grief that the community does not fully recognize as such. God, however, sees what others cannot." },
  { title: "Hannah Wept Even Holding Samuel", verse: "1 Samuel 1:15", text: "I am a woman who is deeply troubled. I have not been drinking wine or beer; I was pouring out my soul to the Lord. Hannah's prayer is the archetypal prayer of infertility. What many readers miss: her cry for a son came in the context of an existing marriage, existing family dynamics, and a God she knew had already acted in other ways. Secondary infertility does not make your prayer less legitimate or your grief less real. Hannah did not preface her cry with 'I know I should be grateful.' She poured out her soul." },
  { title: "God's Timing Is Not Our Rubric", verse: "Psalm 31:15", text: "My times are in your hands; deliver me from the hands of my enemies, from those who pursue me. The word 'times' in Hebrew carries the sense of seasons, appointed moments, the whole shape of a life's unfolding. You do not control the timing of conception. Placing your times in God's hands is not passive resignation — it is an act of trust in a God who is not governed by your reproductive calendar and who is actively engaged in the story you cannot fully see." },
  { title: "Siblings in the Kingdom Are Real Siblings", verse: "Matthew 12:50", text: "Whoever does the will of my Father in heaven is my brother and sister and mother. Jesus's redefinition of family in this passage is not a slight against biological family — it is an expansion of the concept of belonging. The children God gives through biology, adoption, foster care, or spiritual mentorship are all real. The longing for another biological child is legitimate, and so is the possibility that family takes shapes different from what we imagined." },
];

const voices = [
  { id: "v1", name: "Sheryl Paul", role: "Counselor, Author", quote: "Secondary infertility is surrounded by a wall of silence. Women who struggle with it often feel they have no right to grieve — and that silence is a second wound on top of the first.", bio: "Sheryl Paul is a counselor and writer who has addressed secondary infertility as one of the most invisible and disenfranchised forms of grief. Her work validates the specific emotional experience — including isolation, guilt about grieving when you have a child, and the particular pain of watching a child ask for a sibling — and offers a framework for processing it with honesty." },
  { id: "v2", name: "Bethany Patchin Hamilton", role: "Author, Speaker on Infertility", quote: "People kept reminding me that I had one child as if that made the longing for another disappear. But the heart does not work that way. Love expands; it does not divide.", bio: "Bethany Patchin Hamilton has written and spoken about the intersection of Christian faith and infertility, including the secondary experience. Her work names the particular grief of secondary infertility with pastoral warmth and theological seriousness, and addresses the isolation that comes from a church culture that often does not recognize it as real grief." },
  { id: "v3", name: "Carolyn Custis James", role: "Author, Theologian", quote: "The Blessed Alliance — men and women together bearing God's image in the world — includes how we face the losses that come when life does not take the shape we hoped.", bio: "Carolyn Custis James is the author of Half the Church and When Life and Beliefs Collide. Her theology of human dignity, calling, and suffering provides a framework for women and couples navigating infertility to find theological grounding without easy answers — and without pressure to perform gratitude they do not feel." },
  { id: "v4", name: "Melissa Kruger", role: "Author, Director of Women's Content (TGC)", quote: "Waiting for something you deeply want while watching others receive it effortlessly is one of the most faith-testing experiences a person can have.", bio: "Melissa Kruger is the author of The Envy of Eve and In All Things: A Nine-Week Devotional Bible Study on Unshakeable Joy. She writes about contentment, longing, and suffering with theological honesty — addressing how we hold genuine desire before God without demanding outcomes." },
];

const practices = [
  { icon: "💬", title: "Name Your Grief Without Qualification", text: "Practice saying 'I am grieving' without immediately adding 'but I know I'm blessed to have one.' Both things are true. The second truth does not cancel the first. Letting the grief exist in its full weight — in prayer, in journaling, with a trusted person — is not ingratitude. It is honesty." },
  { icon: "🏥", title: "Pursue Medical Evaluation", text: "Secondary infertility has medical explanations in the majority of cases (hormonal changes, new partner factors, age, structural issues). A reproductive endocrinologist can often identify causes that general OBs miss. Knowledge reduces the particular anguish of not knowing why." },
  { icon: "🤝", title: "Find Secondary Infertility Community", text: "General infertility communities sometimes inadvertently minimize secondary infertility. Look for communities specifically for secondary infertility — where others understand the particular grief of watching your first child ask for a sibling, or declining baby shower invitations when you are simultaneously grieving and celebrating." },
  { icon: "👶", title: "Explore All Paths with Open Hands", text: "Adoption, foster care, embryo adoption, or accepting a one-child family are all legitimate paths. Exploring them does not mean giving up on biological conception — it means remaining open to the family God may be forming, which may look different from what you imagined. Each path deserves its own honest discernment process." },
  { icon: "📖", title: "Pray Hannah's Prayer", text: "Read 1 Samuel 1:1-20 slowly. Notice that Hannah did not moderate her request or spiritualize it prematurely. She wept. She poured out her soul. Eli misunderstood her. God heard her. Pray with the same raw honesty, without needing to feel spiritual while you pray." },
  { icon: "🙏", title: "Protect Your Existing Child from Your Grief", text: "Children sense parental grief even when it is not explained. Having a simple, age-appropriate conversation — 'Mom and Dad really hope for another baby, and it is taking longer than we hoped, and that makes us sad sometimes' — is better than an unspoken weight children absorb and misinterpret." },
];

const scriptures = [
  { verse: "1 Samuel 1:15", text: "I am a woman who is deeply troubled. I have not been drinking wine or beer; I was pouring out my soul to the Lord." },
  { verse: "Psalm 31:15", text: "My times are in your hands; deliver me from the hands of my enemies, from those who pursue me." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Psalm 139:16", text: "Your eyes saw my unformed body; all the days ordained for me were written in your book before one of them came to be." },
];

type SIEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function SecondaryInfertilityPage() {
  const [tab, setTab] = useState("theology");
  const [siJournal, setSiJournal] = useState<SIEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setSiJournal(JSON.parse(localStorage.getItem("vine_secondaryinfertilityj_entries") ?? "[]")); } catch { setSiJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: SIEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...siJournal];
    setSiJournal(updated);
    localStorage.setItem("vine_secondaryinfertilityj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = siJournal.filter(e => e.id !== id);
    setSiJournal(updated);
    localStorage.setItem("vine_secondaryinfertilityj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #0a1f14 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌱</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Secondary Infertility</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>The invisible grief of longing for another child — honoring what you have while mourning what hasn't come.</p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: TEXT }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.95rem" }}>"{v.quote}"</p>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${GREEN}` }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="What does this grief feel like right now? When is it most acute?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What is true about God's faithfulness in this waiting?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One next step — medical, emotional, or relational:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {siJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}>Next: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "FV0Kb14TnPU", title: "Grieving When Life Doesn't Go as Planned", channel: "The Gospel Coalition", description: "Mark Vroegop on lament as the biblical language for grief that does not yet have resolution — directly applicable to secondary infertility and the grief of waiting." },
              { videoId: "kP_ZSz2UGEU", title: "When You Lose a Baby", channel: "Desiring God", description: "A Desiring God resource on pregnancy loss and infertility grief — addressing the theological questions and the emotional reality without easy answers." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on how the psalms of lament provide a sanctioned language for crying out to God when prayers go unanswered and longing persists." },
              { videoId: "eCYalLxHSDs", title: "Finding God in Pregnancy Loss and Longing", channel: "She Reads Truth", description: "A resource for women navigating pregnancy loss and infertility grief — practical theology for sitting with God in the middle of longing." },
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
