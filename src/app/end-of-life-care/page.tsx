"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", TEAL = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Death Is Not the Last Word — the Christian Theology of Dying", verse: "1 Cor 15:54-55", text: "Where, O death, is your victory? Where, O death, is your sting? The Christian understanding of death is not denial or stoicism but defiance grounded in resurrection. Death is real, grief is real, and yet the sting has been removed. Paul is not minimizing the horror of dying — he has looked directly at it and announced that something has happened to it. The resurrection of Jesus did not eliminate death from the Christian's path; it changed death's meaning. The grave is no longer the final word, the final verdict, the final destination. For those who are in Christ, death is a threshold, not a terminus. This changes everything about the posture of the dying person and those who sit with them: grief is allowed, fear is understandable, but underneath both is a defiance that belongs to faith — the defiance of one who knows how the story ends." },
  { title: "The Art of Dying Well — Ars Moriendi in the Christian Tradition", verse: "Phil 1:21", text: "For to me, to live is Christ and to die is gain. The medieval tradition of Ars Moriendi — the art of dying — recognized that dying is something to prepare for, not merely endure. These fifteenth-century guides identified five temptations that assail the dying person: loss of faith, despair over sin, impatience with suffering, spiritual pride, and attachment to the things and people left behind. For each temptation, a counter-move was prescribed: affirmation of faith, trust in the mercy of Christ, acceptance of suffering as participation in his, humility about one's spiritual state, and release of loved ones into God's hands. The tradition understood dying well as the culmination of living well. The deathbed was not where a person's spiritual life ended — it was where it completed itself. The church historically prepared people for death as a spiritual discipline, not a medical event, and recovered that preparation is one of the gifts pastoral care can still offer." },
  { title: "Presence Over Answers — How to Sit with the Dying", verse: "Job 2:11-13", text: "When Job's three friends heard about all the troubles that had come upon him, they sat on the ground with him for seven days and seven nights. No one said a word to him, because they saw how great his suffering was. Job's friends are famously criticized in Scripture — but not for their first response. Their first response was right: they came, they sat, they said nothing. Their failure came when they opened their mouths and tried to explain. The ministry of presence is the primary form of pastoral care at the end of life. The dying person does not need explanations; they need accompaniment. What not to say: that there is a silver lining, that this is God's plan, that the person is better off, that they lived a good long life. These phrases, however well-meant, close down the conversation and communicate that grief should end. What to do instead: sit. Hold a hand. Pray aloud simply and briefly. Read a Psalm. Let silence be holy rather than awkward. The person who can sit quietly with the dying is offering something rare and genuinely healing." },
  { title: "Advance Directives and the Sanctity of Life — a Christian Ethics of Medical Decision-Making", verse: "Ps 31:15", text: "My times are in your hands. The sanctity of life does not require the prolongation of life at all costs. Christians have too often conflated these two things, resulting in end-of-life medical decisions driven by fear rather than faith. The key distinction in medical ethics is between killing and allowing to die: withdrawing treatment that is merely prolonging dying, rather than sustaining living, is not a violation of the sanctity of life — it is an acknowledgment that life belongs to God and that our bodies are not machines to be maintained indefinitely. DNR orders, hospice care, and palliative medicine are all consistent with Christian conscience and are in many cases the most faithful options available. Writing an advance directive — a legal document expressing your wishes when you can no longer speak for yourself — is an act of love toward your family and an act of faith that places your times in God's hands. Pastors belong in this conversation alongside the medical team." },
  { title: "Death and Dementia — Caring for the Christian Who No Longer Knows God", verse: "2 Tim 2:13", text: "If we are faithless, he remains faithful, for he cannot disown himself. The pastoral crisis of caring for a Christian with advanced dementia is among the most searching grief a family can face: the person they love is present and absent simultaneously, and the faith that once defined them is no longer accessible in the ways we recognize. They cannot pray. They cannot confess. They may not know God's name, or their own. But the Christian doctrine of God's covenant faithfulness insists that our union with Christ does not depend on our capacity to maintain it. God holds those we can no longer reach through their illness. The caregiver carries a particular grief — a grief without the finality of death, a grief that must be sustained through years of invisible mourning. Pastoral care for the caregiver of a person with dementia requires naming this grief honestly, providing respite, and repeatedly affirming that faithfulness in this costly, unrewarded care is one of the most Christlike acts a human being can perform." },
];

const voices = [
  { name: "John Swinton", role: "Dementia: Living in the Memories of God", quote: "God does not forget. Even when we forget God, and when others can no longer reach us in the ways that were familiar, we remain held in the memory of God — a memory that is not passive recollection but active, faithful, sustaining presence. The church's task is to be the community that remembers on behalf of those who can no longer remember for themselves.", bio: "John Swinton is Professor of Practical Theology and Pastoral Care at the University of Aberdeen. His book Dementia: Living in the Memories of God is the most important theological treatment of dementia in print, arguing from the character of God's faithfulness that people with dementia remain fully within the covenant community, held not by their own cognition but by God's unrelenting remembrance." },
  { name: "Atul Gawande", role: "Being Mortal (secular)", quote: "Modern medicine has been able to accomplish its aim of extending life, but too often it has done so without asking what life is worth extending for. We have failed to help people die well because we cannot accept the limits of what medicine can do — and so people spend their final months in hospitals fighting battles that cannot be won, instead of at home in the presence of those they love.", bio: "Atul Gawande is a surgeon and writer whose book Being Mortal: Medicine and What Matters in the End became a landmark in public conversation about dying in America. Though writing from a secular perspective, his critique of medicalized dying aligns in important ways with the Christian understanding that death is not the enemy to be defeated at all costs but a passage to be prepared for and accompanied well." },
  { name: "Henri Nouwen", role: "Our Greatest Gift", quote: "Dying is the most important thing we do with our lives — not because death is the goal, but because how we die is the last and most eloquent gift we give to those who will remain. To die in faith, in peace, in trust, surrounded by those we love and those who love us, is to teach those we leave behind something about how to live.", bio: "Henri Nouwen wrote Our Greatest Gift in 1994 while living in community with people with intellectual disabilities at L'Arche Daybreak in Toronto. The book reflects on his own preparation for death and argues that dying is a spiritual act — one that can either model faith for those who remain or miss the final opportunity to speak the truest word of a life. It is a short, luminous, and essential book for anyone preparing for or accompanying the dying." },
];

const practices = [
  { icon: "📄", title: "Advance Directive Completion", text: "An advance directive is a legal and spiritual document in which you express your wishes for end-of-life medical care before you are unable to speak for yourself. Completing one is an act of love — it spares your family from impossible decisions in a crisis, and it is an act of faith that places your times in God's hands. Your church can walk you through this process, and many hospice organizations offer free guidance. Review it every five years or after a major health change." },
  { icon: "📝", title: "The Ethical Will", text: "An ethical will is not a legal document — it is a letter that gives your values, not your valuables, to those you love. What do you believe? What do you regret? What do you hope for your children and grandchildren? What did your faith cost you, and was it worth it? Writing an ethical will is one of the most profound spiritual exercises available to us, and it is the document your family will read most often after you are gone." },
  { icon: "🤝", title: "Companion Presence Ministry", text: "Companion presence ministry trains church members to sit with the dying — not as medical professionals or spiritual directors, but as loving human beings who refuse to let people die alone. Training typically covers how to enter a room, how to pray simply, what to say and what not to say, how to read Scripture aloud, how to hold a hand, and how to take care of yourself after the visit. It is one of the most needed and most underutilized ministries a church can offer." },
  { icon: "🙏", title: "Praying the Psalms of Lament with the Dying", text: "Psalm 22, Psalm 88, and Psalm 102 are the darkest psalms in Scripture — psalms of abandonment, physical suffering, and desolation that cry out to a God who seems absent. Reading or praying these psalms aloud with a dying person communicates something essential: that their darkness is not faithlessness, that Scripture makes room for exactly where they are, and that even from the pit one can cry out to God. Jesus himself quoted Psalm 22 from the cross." },
  { icon: "✉️", title: "Writing Letters to Be Opened After Death", text: "A letter written to be opened after your death is one of the most lasting gifts you can give. It can speak directly to the grief of the person who will read it, name what you loved about them, share what you believe about resurrection and reunion, and leave them with the truest words you know. Writing these letters while you are healthy is a form of spiritual preparation for death — and it ensures that your voice will still be present in the room on the days when it is most needed." },
];

const scriptures = [
  { verse: "1 Cor 15:54-55", text: "Death has been swallowed up in victory. Where, O death, is your victory? Where, O death, is your sting?" },
  { verse: "Ps 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
  { verse: "Phil 1:21", text: "For to me, to live is Christ and to die is gain." },
  { verse: "Rom 8:38-39", text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Rev 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
  { verse: "John 11:25-26", text: "Jesus said to her, I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die." },
];

const videos = [
  { id: "t_sSMdEzB28", title: "Dying Well — the Christian Theology of Death" },
  { id: "VBFCMxSHnPo", title: "Hospice, Palliative Care, and Christian Faith" },
  { id: "8rCLbr7QBSM", title: "How to Sit with the Dying — a Pastoral Guide" },
  { id: "Xz0-HoT-IH4", title: "Caring for a Loved One at the End of Life" },
];

type EOLEntry = { id: string; date: string; concern: string; prayer: string; comfort: string };

export default function EndOfLifeCarePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<EOLEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_endoflife_entries") ?? "[]"); } catch { return []; }
  });
  const [jConcern, setJConcern] = useState("");
  const [jPrayer, setJPrayer] = useState("");
  const [jComfort, setJComfort] = useState("");

  useEffect(() => { localStorage.setItem("vine_endoflife_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jConcern.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), concern: jConcern, prayer: jPrayer, comfort: jComfort }, ...prev]);
    setJConcern(""); setJPrayer(""); setJComfort("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Suffering &amp; Hope</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>End-of-Life Care</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Dying well, caring for the dying, and the Christian theology of death — resources for the hardest passage and those who walk it with others.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? TEAL : BORDER}`, background: tab === t.id ? TEAL + "22" : "transparent", color: tab === t.id ? TEAL : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: TEAL, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: TEAL, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: TEAL, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on End-of-Life</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to bring your fears, prayers, and hopes before God honestly.</p>
            {[
              { label: "Concern — a concern you have about end-of-life for yourself or someone you love", val: jConcern, set: setJConcern },
              { label: "Prayer — a specific prayer for this season", val: jPrayer, set: setJPrayer },
              { label: "Comfort — a Scripture or truth that brings comfort", val: jComfort, set: setJComfort },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: TEAL, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: TEAL }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: TEAL, fontWeight: 600 }}>Concern:</span> {e.concern}</p>
                      {e.prayer && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: TEAL, fontWeight: 600 }}>Prayer:</span> {e.prayer}</p>}
                      {e.comfort && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: TEAL, fontWeight: 600 }}>Comfort:</span> {e.comfort}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: TEAL }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
