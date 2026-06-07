"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Hope That Was Finally Given Has Been Lost — This Is Doubly Grief", verse: "Psalm 13:1-2", text: "How long, Lord? Will you forget me forever? How long will you hide your face from me? Miscarriage after infertility is a doubled grief: the years of waiting, followed by a fragile hope realized, followed by loss. The Psalmist's 'How long' is exactly the right question to bring. God has heard it before and received it as prayer." },
  { title: "God Knew This Child From Before Conception", verse: "Psalm 139:16", text: "Your eyes saw my unformed body; all the days ordained for me were written in your book before one of them came to be. The child who died was known by God before you knew it existed. The brevity of a life does not diminish the completeness of God's knowledge of it." },
  { title: "Rachel Weeping for Her Children — God Does Not Silence Her", verse: "Jeremiah 31:15-17", text: "A voice is heard in Ramah, mourning and great weeping, Rachel weeping for her children and refusing to be comforted, because they are no more. God does not rebuke Rachel for her grief or tell her to be grateful. He hears her and promises: do not weep, there is hope for your future. Both the grief and the hope are honored." },
  { title: "Barrenness and Loss Do Not Define God's Final Word", verse: "Isaiah 54:1", text: "Sing, barren woman, you who never bore a child; burst into song, shout for joy, you who were never in labor; because more are the children of the desolate woman than of her who has a husband, says the Lord. This is not a quick fix — it is a promise about God's ultimate fruitfulness that stands against the accumulated grief of loss." },
  { title: "Lament Is How the Faithful Bring Compounded Grief to God", verse: "Lamentations 3:49-50", text: "My eyes will flow unceasingly, without relief, until the Lord looks down from heaven and sees. The grief of miscarriage after infertility may be the most acute grief many couples ever face. It deserves sustained, honest lament — not quick resolution." },
];

const voices = [
  { id: "v1", name: "Mark and Jill Vroegop", role: "Authors, When You Can't Find Words", quote: "Lament is how we bring our specific grief — not generic suffering but this particular loss — honestly to God. He can hold the full weight of it.", bio: "Mark Vroegop's wife Jill experienced multiple miscarriages, and their joint work on lament emerged from that specific grief. They provide language for the couple navigating miscarriage together, especially when grief is not equal between partners." },
  { id: "v2", name: "Sheryl Paul", role: "Counselor, Conscious Transitions", quote: "There is grief after infertility that others do not see — the grief of those who got close enough to hope and then lost what they waited years to have.", bio: "Paul's counseling work specifically addresses the compounded grief of pregnancy loss after infertility — the feeling that the loss is somehow more catastrophic because of what preceded it, and why that perception is accurate." },
  { id: "v3", name: "Sandra Glahn", role: "Author, The Infertility Companion", quote: "God does not ask you to be grateful for the loss. He asks you to bring the loss to him — which is different.", bio: "Glahn, a seminary professor who experienced both infertility and loss, writes with theological precision and personal vulnerability about the spiritual dimensions of reproductive grief, including the specific isolation of miscarriage after infertility." },
  { id: "v4", name: "Melissa Kruger", role: "Author, The Envy of Eve", quote: "The grief of pregnancy loss does not mean your faith is small. Often it means your hope was real — and hope that is real can be really lost.", bio: "Kruger addresses the spiritual dimensions of reproductive grief, including why genuine hope makes genuine loss more devastating, and what Scripture actually offers rather than the prosperity-adjacent comfort that often passes for pastoral care." },
];

const practices = [
  { icon: "🕯️", title: "Name and Honor This Specific Child", text: "The child you lost after infertility was a real person who was wanted and mourned. Give the child a name if you have not. Mark the due date on the calendar. Light a candle on the anniversary. These practices honor the reality of the loss and resist the cultural pressure to minimize it." },
  { icon: "🤝", title: "Grieve Together and Separately", text: "Partners in infertility and pregnancy loss often grieve differently and on different timelines. Give each other room to grieve without requiring synchronized emotion. Find one touchpoint — a weekly conversation, a shared prayer — where you grieve together. And allow space for the grief each person carries alone." },
  { icon: "🗣️", title: "Tell the Church and Let It Respond", text: "Many couples grieve miscarriage after infertility in complete isolation because they kept the pregnancy private or because church culture has no language for this loss. Consider telling a pastor or elder the full story. Allowing the church to grieve with you is not oversharing — it is how the body of Christ was designed to function." },
  { icon: "🏥", title: "Ask Your OB About Next Steps — Grief and Hope Can Coexist", text: "Medical guidance about whether and when to try again can coexist with full grief for the loss. You do not have to choose between honoring what was lost and caring for your future. Ask your medical team what they recommend without feeling that asking means you have stopped grieving." },
  { icon: "📖", title: "Read Psalms 13, 22, and 88 Together", text: "These psalms give language for the doubled grief of having waited and then lost — the sense of God's absence, the question of how long, the refusal to be comforted. Read them aloud, perhaps in your own space. You are entering a prayer that God has been receiving for three thousand years." },
  { icon: "📚", title: "Find a Miscarriage-Specific Support Community", text: "SHARE Pregnancy Loss, the Miscarriage Association, and many church-based groups exist specifically for those who have lost a pregnancy. The isolation of miscarriage after infertility is partly because almost no one in your social circle has shared the exact experience. Find those who have." },
];

const scriptures = [
  { verse: "Psalm 139:16", text: "Your eyes saw my unformed body; all the days ordained for me were written in your book before one of them came to be." },
  { verse: "Jeremiah 31:15-17", text: "A voice is heard in Ramah, mourning and great weeping, Rachel weeping for her children and refusing to be comforted... Restrain your voice from weeping and your eyes from tears, for your work will be rewarded... There is hope for your future." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Isaiah 49:15", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you!" },
  { verse: "Lamentations 3:32", text: "Though he brings grief, he will show compassion, so great is his unfailing love." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
];

type MiscarriageEntry = { id: string; date: string; grief: string; child: string; hope: string };

export default function MiscarriageAfterInfertilityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MiscarriageEntry[]>([]);
  const [form, setForm] = useState({ grief: "", child: "", hope: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_miscarriageinfertilityj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.grief.trim()) return;
    const e: MiscarriageEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_miscarriageinfertilityj_entries", JSON.stringify(updated));
    setForm({ grief: "", child: "", hope: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_miscarriageinfertilityj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Pregnancy Loss</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Miscarriage After Infertility</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Losing a pregnancy after a long journey of infertility is a doubled grief. The years of waiting, the fragile hope when conception finally came, and then the loss — this is one of the most devastating experiences a couple can face. This page holds space for the full weight of it.</p>

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
                <li><strong style={{ color: TEXT }}>SHARE Pregnancy Loss</strong> — nationalshare.org, grief support</li>
                <li><strong style={{ color: TEXT }}>Now I Lay Me Down to Sleep</strong> — nilmdts.org, free memorial photography</li>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — call or text if grief has become a mental health crisis</li>
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
              <textarea value={form.grief} onChange={e => setForm(f => ({ ...f, grief: e.target.value }))} placeholder="What is the grief that is hardest to hold right now?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.child} onChange={e => setForm(f => ({ ...f, child: e.target.value }))} placeholder="What do you want to say to or about the child you lost?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.hope} onChange={e => setForm(f => ({ ...f, hope: e.target.value }))} placeholder="What, if any hope, are you still able to hold?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.grief && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Grief:</strong> {e.grief}</p>}
                {e.child && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>To the child:</strong> {e.child}</p>}
                {e.hope && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Hope:</strong> {e.hope}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "FV0Kb14TnPU", title: "Grieving a Miscarriage", channel: "The Gospel Coalition — Mark Vroegop", description: "Vroegop, whose wife experienced multiple miscarriages, on how to grieve a pregnancy loss honestly — including after the years-long journey of infertility." },
              { videoId: "kP_ZSz2UGEU", title: "When You Lose a Baby", channel: "Desiring God", description: "A pastoral reflection on pregnancy loss — what Scripture says about the child who died, what God offers the grieving parent, and how the church can minister well." },
              { videoId: "eCYalLxHSDs", title: "Finding God in Pregnancy Loss", channel: "She Reads Truth", description: "A gentle reflection on how women encounter God in the specific grief of pregnancy loss, and what faith looks like in the aftermath." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop's foundational teaching on biblical lament — the vocabulary God gives for grief that has no other words, exactly what miscarriage after infertility requires." },
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
