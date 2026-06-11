"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", INDIGO = "#6366F1", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Problem of Evil — What Theodicy Is and Why It Matters", verse: "Job 1:1", text: "Theodicy is the attempt to reconcile the existence of a good and all-powerful God with the existence of suffering and evil. The major responses have been developed across centuries: the soul-making theodicy (associated with Irenaeus and developed by John Hick) argues that suffering is necessary for human moral and spiritual growth; the free will defense (Alvin Plantinga) locates much evil in the freedom God grants creatures; the Greater Good theodicy argues that God permits suffering because it serves ends we cannot fully see. Each of these has genuine theological merit. Each also has serious limitations — and most people in the middle of acute suffering find that intellectual answers cannot carry the weight the moment demands. The Book of Job is Scripture's engagement with this question, and its answer is not a theory but an encounter. God does not explain Job's suffering; he overwhelms it with presence." },
  { title: "Job and the Limits of the Friends' Theology — the Danger of Explanation", verse: "Job 42:7", text: "You have not spoken of me what is right, as my servant Job has — this is God's verdict on Job's three friends, the men who came to comfort him and stayed to explain him. The friends are not stupid: they are theologically serious. Their argument — that God is sovereign and righteous, that suffering is connected to sin, that Job should repent — is drawn from the wisdom tradition. They are correct about God in general and wrong about Job specifically, and that is precisely the pastoral catastrophe. The danger of the friends' approach is the application of correct theology to the wrong situation: using doctrine as a diagnostic tool on a person in pain. God vindicates Job's raw, accusatory prayer over the friends' polished theology. This is not a vindication of unbelief — it is a vindication of honest engagement with God over the management of God's reputation." },
  { title: "The Cross as God's Answer to Suffering — Not an Explanation but a Participation", verse: "2 Cor 1:5", text: "As we share abundantly in Christ's sufferings, so through Christ we share abundantly in comfort too. The Christian answer to suffering is not primarily propositional — it is participatory. God in Christ did not offer a theodicy from a safe distance; he entered the worst of human suffering: betrayal, abandonment, torture, death, the cry of dereliction. The cross does not explain why suffering exists; it transforms what suffering means. It means that God is not absent from the worst moments of human experience but has preceded us into them. The cruciform life — shaped by the pattern of death and resurrection — is the New Testament's vision of what it looks like to endure suffering in a way that produces faith rather than destroying it. Suffering and glory are connected in Paul not by necessity but by the pattern of Christ." },
  { title: "Romans 8:28 — the Most Abused Comfort Verse in the Bible", verse: "Rom 8:28", text: "We know that in all things God works for the good of those who love him. This verse has been deployed as a conversation-stopper against grief — a way of telling the suffering person that they should not be sad because God is working. But Paul does not say every event is good; he says God works in all events toward an ultimate good. The context of Romans 8:28 is verses 18 through 30, which describe cosmic suffering — the groaning of creation, the intercession of the Spirit with groans too deep for words, the eschatological glory that awaits. Paul is not talking about personal inconvenience finding a silver lining; he is talking about the God who raised Jesus from the dead working within the suffering of an entire creation toward its final liberation. Applied in its actual context, this is one of the most radical and costly promises in Scripture — not a shutdown of grief but a foundation under it." },
  { title: "The Thorn in the Flesh — Unanswered Prayer and Sufficient Grace", verse: "2 Cor 12:7-10", text: "My grace is sufficient for you, for my power is made perfect in weakness. Paul prays three times for the thorn — whatever it is, it is painful enough to be called a messenger of Satan — and the answer is no. Not not yet; not a healing on the way. The thorn stays. What changes is Paul's interpretation of it: this unanswered prayer becomes the condition for an experience of divine power he would not otherwise have had. This does not mean every unanswered prayer for relief works this way, and it is pastorally dangerous to say so too quickly. But it does mean that the absence of healing is not the absence of grace, and that God's sufficiency is demonstrated not in the removal of suffering but in the capacity to endure it in a way that magnifies rather than obscures Christ." },
];

const voices = [
  { name: "C.S. Lewis", role: "The Problem of Pain (1940) and A Grief Observed (1961)", quote: "God whispers to us in our pleasures, speaks in our consciences, but shouts in our pains: it is his megaphone to rouse a deaf world. That answer came easily when I wrote it. It felt very different from inside the grief.", bio: "Lewis wrote The Problem of Pain as a young Christian apologist, constructing a careful intellectual defense of how suffering is compatible with a good God. Twenty years later, after the death of his wife Joy, he wrote A Grief Observed — a raw, unsanitized account of grief that at points sounds almost like unbelief. The two books belong together as a testimony to the difference between intellectual theodicy and lived suffering. Lewis did not abandon his earlier answers, but he found they were much harder to hold from the inside. Together they are the most honest Christian engagement with suffering in the modern era." },
  { name: "Philip Yancey", role: "Where Is God When It Hurts? (1977)", quote: "Suffering can destroy faith, or it can deepen it. What makes the difference is not the intensity of the pain but the presence — or perceived absence — of God within it. Those who have suffered most deeply and held on have not done so because the pain was less; they have done so because something in them was unbreakable by it.", bio: "Yancey's Where Is God When It Hurts? was written after years of interviews with people in severe physical suffering — people with chronic pain, paraplegia, terminal illness. His conclusion is not that suffering has easy answers but that it has a God who accompanies it. Yancey is one of the most important popular Christian writers on this theme, accessible enough to put in the hands of someone in acute pain without doing damage, honest enough not to feel like a cheerful dismissal of their experience." },
  { name: "D.A. Carson", role: "How Long, O Lord? (1990)", quote: "The proper Christian response to suffering is not the stiff upper lip of stoic endurance, nor the therapeutic assurance that your feelings are valid and nothing more needs to be said. It is the lament of the Psalms: a grief that is addressed to God, that argues with God, that refuses to be silent — and that continues to pray.", bio: "Carson's How Long, O Lord? is a scholarly but accessible treatment of suffering, evil, and God's sovereignty, written from a Reformed theological perspective. His most important contribution is the recovery of the lament tradition as the biblical model for suffering: the Psalms model a kind of prayer that is simultaneously honest about pain and stubbornly directed toward God. This is neither denial nor despair but something more difficult and more faithful than either. Carson argues that the church has largely lost this tradition, replacing it with either triumphalism or therapeutic comfort, and that recovering it is essential to pastoral integrity." },
];

const practices = [
  { icon: "📖", title: "Praying the Lament Psalms", text: "Psalms 22, 42, and 88 are lament psalms — prayers that do not resolve into praise but end in darkness or barely begin to emerge from it. Praying them as your own prayer when words fail is one of the most ancient practices of the people of God in suffering. Psalm 22 opens with the cry Jesus echoed from the cross: My God, my God, why have you forsaken me? These prayers give voice to what we feel without requiring us to sanitize it first. They locate our suffering in the community of all who have cried out to God and been heard — eventually, and not always as they expected." },
  { icon: "🙏", title: "The Practice of Honest Prayer", text: "Bringing exactly what you feel to God — without cleaning it up, without performing faith you do not have, without pretending the suffering is less than it is — is not a failure of faith. It is the model of Job, of the Psalms, of Jesus in Gethsemane. The discipline is not managing your emotions before you come to God but coming as you are and letting the encounter be honest. Many people in suffering find that they cannot pray the prayers they are supposed to pray; the invitation is to pray the prayers they actually have." },
  { icon: "🤝", title: "Seeking Community in Suffering", text: "Suffering tends toward isolation: we do not want to be a burden, we do not believe others can understand, we pull away. The New Testament consistently moves in the opposite direction: bear one another's burdens, weep with those who weep, the ministry of presence. Resisting the pull toward isolation — accepting the imperfect, sometimes awkward comfort of people who cannot fix what is wrong — is a form of obedience and a form of healing. The goal is not to find someone who understands; it is to allow yourself to be accompanied by someone who cares." },
  { icon: "⏸️", title: "Sitting with the Question", text: "The impulse to resolve suffering quickly — to find the meaning, to identify what God is doing, to arrive at the lesson — is understandable and almost always premature. Theological patience in the middle of pain means allowing the question to remain open longer than is comfortable: not knowing why, not having an answer, continuing to pray and trust without the resolution the mind demands. This is not a permanent condition; it is a discipline for the middle of the journey. The Dutch theologian Henri Nouwen called it living the question — a posture that is neither denial nor despair but faithful waiting." },
  { icon: "📚", title: "Reading the Testimony of Those Who Have Endured", text: "Biography and memoir are underused spiritual resources. Reading the testimony of Christians who have suffered deeply and endured — Corrie ten Boom, Joni Eareckson Tada, Eric Liddell, Amy Carmichael, Dietrich Bonhoeffer — provides something that doctrine alone cannot: proof of concept. These are not people who were never in the dark; they are people who were in the dark and did not stop trusting. Their stories function as the great cloud of witnesses Hebrews 12 describes: evidence that endurance is possible, and that it produces something worth having." },
];

const scriptures = [
  { verse: "Rom 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
  { verse: "2 Cor 12:9", text: "But he said to me, My grace is sufficient for you, for my power is made perfect in weakness. Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me." },
  { verse: "Job 42:7", text: "After the Lord had said these things to Job, he said to Eliphaz the Temanite, I am angry with you and your two friends, because you have not spoken the truth about me, as my servant Job has." },
  { verse: "Ps 22:1-2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer, by night, but I find no rest." },
  { verse: "2 Cor 1:3-4", text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God." },
  { verse: "Heb 12:1-2", text: "Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith." },
];

const videos = [
  { id: "rF9TG4TjfUc", title: "The Problem of Pain — A Christian Response" },
  { id: "TyZBDFaYJq4", title: "Why Does God Allow Suffering?" },
  { id: "mYKiLBt6Hso", title: "Job and the Theology of Lament" },
  { id: "v3q2Sm3DKNI", title: "Suffering, the Cross, and the Hope of Resurrection" },
];

type TSEntry = { id: string; date: string; suffering: string; question: string; anchor: string };

export default function TheologyOfSufferingPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<TSEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_theosuffering_entries") ?? "[]"); } catch { return []; }
  });
  const [jSuffering, setJSuffering] = useState("");
  const [jQuestion, setJQuestion] = useState("");
  const [jAnchor, setJAnchor] = useState("");

  useEffect(() => { localStorage.setItem("vine_theosuffering_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jSuffering.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), suffering: jSuffering, question: jQuestion, anchor: jAnchor }, ...prev]);
    setJSuffering(""); setJQuestion(""); setJAnchor("");
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
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Theology of Suffering</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Why God allows pain, what Scripture actually says about it, and how Christians endure — not by finding the answer but by finding the God who is present in the question.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? INDIGO : BORDER}`, background: tab === t.id ? INDIGO + "22" : "transparent", color: tab === t.id ? INDIGO : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: INDIGO, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ fontSize: "0.8rem", color: INDIGO, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${INDIGO}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: INDIGO, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Bring Your Suffering to God</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to pray honestly and think carefully about where you are in your suffering.</p>
            {[
              { label: "Suffering — a suffering you are in or have been through", val: jSuffering, set: setJSuffering },
              { label: "Question — the question you are bringing to God", val: jQuestion, set: setJQuestion },
              { label: "Anchor — what is holding you through it", val: jAnchor, set: setJAnchor },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: INDIGO, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: INDIGO }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: INDIGO, fontWeight: 600 }}>Suffering:</span> {e.suffering}</p>
                      {e.question && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: INDIGO, fontWeight: 600 }}>Question:</span> {e.question}</p>}
                      {e.anchor && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: INDIGO, fontWeight: 600 }}>Anchor:</span> {e.anchor}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: INDIGO }}>{v.title}</h3>
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
