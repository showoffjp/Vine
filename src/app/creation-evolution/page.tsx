"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", TEAL = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Genesis Is Theology, Not a Science Textbook", verse: "Genesis 1:1", text: "In the beginning God created the heavens and the earth. The opening words of Scripture establish the most important thing: God is the uncaused cause, the sovereign Creator, the origin of all that exists. What Genesis 1 does not do is provide a scientific account of the mechanism by which creation occurred. Ancient Near Eastern cosmology was not interested in mechanism — it was interested in meaning, purpose, and the identity of the Creator. Reading Genesis as if it were a biology textbook is a category error. The question Genesis answers is not 'how?' but 'who?' and 'why?' — and those answers are non-negotiable: God created, creation is good, and humanity bears the image of God." },
  { title: "The Doctrine of Creation Is Non-Negotiable; The Mechanism Is Debated", verse: "John 1:3", text: "Through him all things were made; without him nothing was made that has been made. The core Christian doctrine of creation is robust and clear: God is the creator of all things, creation is contingent on God and not self-existent, the universe had a beginning, and all that exists exists because of divine will and action. What orthodox Christianity does not define with precision is the specific mechanism, timeline, or process by which God brought creation into being. Christians across the theological spectrum — young earth, old earth, evolutionary creationists — all affirm the non-negotiables. The debates concern secondary questions, not the doctrine itself. This distinction matters for charitable engagement." },
  { title: "Natural Revelation and Special Revelation Cannot Ultimately Conflict", verse: "Psalm 19:1-2", text: "The heavens declare the glory of God; the skies proclaim the work of his hands. Day after day they pour forth speech; night after night they reveal knowledge. If God is the author of both Scripture and creation, then Scripture rightly interpreted and creation rightly investigated cannot ultimately contradict each other. Apparent conflicts are signals of a misreading — either of Scripture, or of the natural evidence, or of both. Augustine warned against Christians who speak rashly about scientific matters, making Scripture the object of ridicule among those who know the natural world. The two books of God — the book of Scripture and the book of nature — are both authored by the same God and both deserve careful, humble reading." },
  { title: "The Methodological Limits of Science and the Limits of Theology", verse: "Hebrews 11:3", text: "By faith we understand that the universe was formed at God's command, so that what is seen was not made out of what was visible. Science is a method for investigating the natural world through observation, hypothesis, and falsification. It is extraordinary at what it does — and it has limits. Science cannot, by its method, detect divine action, confirm or deny the existence of God, or adjudicate the ultimate meaning of the universe. Faith is not therefore opposed to science — it occupies a different domain. The Christian who understands this can engage scientific findings without theological anxiety, and the scientist who understands this will not overreach scientific conclusions into metaphysical territory the method cannot access." },
  { title: "Christians Hold Diverse Views — With Charity", verse: "Romans 14:1", text: "Accept the one whose faith is weak, without quarreling over disputable matters. The creation-evolution debate has too often become a battleground for Christian unity, with positions held with more certainty than the evidence warrants and with less charity than the command of Scripture requires. Young earth, old earth, and evolutionary creationist Christians all affirm the inspiration of Scripture, the existence of God, the doctrine of creation, the image of God in humanity, the fall, and the need for redemption. On the question of mechanism and timeline, Christians of equal commitment to Scripture have reached different conclusions. The instruction is clear: receive one another as Christ has received you, without quarreling over disputable matters." },
];

const views = [
  { id: "yec", name: "Young Earth Creationism", summary: "God created the universe and all life in six literal 24-hour days approximately 6,000–10,000 years ago. The flood of Noah was a global catastrophe that explains much of the geological and fossil record.", strengths: "Takes the plain reading of Genesis seriously; maintains a strong doctrine of creation as direct divine act; emphasizes the coherence of Scripture across redemptive history; defended by scholars at Answers in Genesis and the Institute for Creation Research.", concerns: "Requires reinterpreting a vast body of converging scientific evidence — geological, astronomical, biological, and genetic — that places the age of the universe at 13.8 billion years and the earth at 4.5 billion; creates unnecessary barriers between faith and scientific literacy; many theologians note that 'literal day' is not the only or historically dominant reading of Genesis 1." },
  { id: "oec", name: "Old Earth Creationism", summary: "God created the universe in a process spanning billions of years, as indicated by the scientific evidence. The 'days' of Genesis may be long ages, literary frameworks, or non-sequential visions. Species were created by God separately, not through common descent.", strengths: "Accepts the scientific consensus on the age of the universe and earth; maintains the direct creation of distinct kinds by God; represented by scholars at Reasons to Believe (Hugh Ross) and organizations like BioLogos's predecessors; preserves the historical Adam and distinct human origins.", concerns: "Must still account for the genetic and biological evidence for common descent; the age-day interpretation and gap theory have their own exegetical challenges; the line between 'kinds' and the evidence from comparative genomics requires ongoing engagement." },
  { id: "ec", name: "Evolutionary Creationism (BioLogos)", summary: "God is the creator of all things and used the process of biological evolution — including common descent — as the means by which life, including humanity, developed. The authority of Scripture and the findings of modern science are fully compatible.", strengths: "Most closely aligned with the scientific consensus across multiple converging disciplines; championed by Francis Collins (founder of BioLogos, former NIH director) and Biologos scholars; many top evangelical theologians (Tremper Longman, N.T. Wright, John Ortberg) find it compatible with orthodox faith; the two books of God are in harmony.", concerns: "Requires careful theological work on the historical Adam and the nature of the Fall; some argue it creates tension with Paul's theology in Romans 5; requires robust accounts of the image of God, sin's entry, and the atonement that are still debated within the community." },
  { id: "id", name: "Intelligent Design", summary: "Certain features of the natural world — particularly in biology — are best explained by an intelligent cause rather than undirected natural processes. ID is presented as a scientific research program, not a theological claim, though its implications are theologically significant.", strengths: "Raises genuine scientific questions about the sufficiency of undirected processes to explain irreducible complexity and specified information; scholars at the Discovery Institute include credentialed scientists; Michael Behe's biochemical arguments have generated genuine scientific discussion; does not require commitment to any particular mechanism or timeline.", concerns: "The mainstream scientific community does not accept ID as a scientific research program; the 'irreducible complexity' argument has been substantially challenged in peer-reviewed literature; the 'God of the gaps' concern — that ID locates divine action where science has not yet explained — is theologically serious; ID does not adjudicate the age of the earth or mechanism questions." },
];

const voices = [
  { id: "fc", name: "Francis Collins", role: "Founder, BioLogos; Former NIH Director; Author, The Language of God", quote: "Science is not threatened by God, and God is not threatened by science. The God of the Bible is also the God of the genome. He can be worshipped in the cathedral or in the laboratory. His creation is majestic, awesome, intricate, and beautiful — and it cannot be at war with itself. Only our misreadings of Scripture or our overreach of science create apparent conflict.", bio: "Collins is the world's most prominent evangelical scientist and the founder of BioLogos, the leading organization advocating evolutionary creationism. His memoir The Language of God — describing his journey from atheism to Christian faith as a geneticist who led the Human Genome Project — is the most important personal account of the faith-science integration. His work demonstrates that accepting the full scientific picture of life's development is not only compatible with orthodox Christian faith but can deepen it." },
  { id: "jl", name: "John Lennox", role: "Oxford Mathematician; Author, God's Undertaker: Has Science Buried God?", quote: "The conflict is not between science and faith. It is between two worldviews — one that insists the universe can be explained without reference to God, and one that holds that the very intelligibility of the universe, the fine-tuning of its constants, and the existence of information in DNA all point to a mind behind the cosmos. The atheist and the Christian are both making metaphysical commitments that go beyond what the science alone can settle.", bio: "Lennox is Oxford's most distinguished Christian apologist in the science-faith conversation. God's Undertaker is the most rigorous philosophical treatment of whether science has made belief in God unnecessary. His analysis of the limits of scientific explanation, the fine-tuning argument, and the distinction between science and scientism (the philosophical overreach that science is the only valid form of knowledge) provides essential tools for Christians engaging the creation-evolution discussion with intellectual honesty." },
  { id: "ap", name: "Alvin Plantinga", role: "Philosopher, Notre Dame; Author, Where the Conflict Really Lies", quote: "There is superficial conflict but deep concord between science and theistic religion, but superficial concord and deep conflict between science and naturalism. The conflict is not between science and Christianity — both can flourish together. The real conflict is between science and the philosophical commitment to naturalism: the belief that the natural world is all there is. That commitment is not itself a scientific finding; it is a philosophical presupposition brought to science from outside.", bio: "Plantinga is arguably the most important Christian philosopher of the twentieth century. Where the Conflict Really Lies dismantles the popular assumption that modern science conflicts with Christian theism, arguing instead that the conflict is between science and metaphysical naturalism — the prior philosophical commitment that there is no God. His work on the 'evolutionary argument against naturalism' shows that Darwinian evolution, if true, actually provides more support for theism than for naturalism." },
];

const practices = [
  { icon: "📖", title: "Read Genesis as Ancient Literature, Not Modern Science", text: "Before forming strong opinions about Genesis 1-2, read it as an ancient Near Eastern text would have been understood by its original audience. What genre is it? What questions is it answering? What is the literary structure of the seven-day framework? Study the Ancient Near Eastern context: the Enuma Elish and other creation accounts that Genesis was written against. The meaning of the text is shaped by its literary context, its ancient context, and its canonical context — not primarily by what a modern reader assumes 'literal' means." },
  { icon: "🔬", title: "Engage the Science Honestly", text: "The evidence for an ancient universe and for common biological descent is not a conspiracy or a misreading of data. It is the converging result of independent lines of investigation — astronomical, geological, biological, genetic, and paleontological. Christians can engage this evidence honestly without threatening their faith. Read Francis Collins's The Language of God, or the BioLogos resources at biologos.org. Intellectual honesty about the evidence is not a concession to atheism — it is a refusal to ask Scripture to answer questions it was not designed to answer." },
  { icon: "🤝", title: "Hold the Non-Negotiables Firmly and the Secondaries Charitably", text: "Non-negotiable: God is the creator of all things. Non-negotiable: creation is good. Non-negotiable: humanity bears the image of God. Non-negotiable: sin entered the world and broke the relationship between God and humanity. Debatable: whether creation took six literal 24-hour days. Debatable: whether common descent is the mechanism God used. Debatable: how to understand the historical Adam. Hold the first list with conviction. Hold the second list with humility and charity toward fellow Christians who have studied the same Scripture and reached different conclusions." },
  { icon: "🧭", title: "Let the Questions Drive You Deeper Into Faith, Not Away From It", text: "The creation-evolution question is often framed as a faith-killer — the discovery that the earth is billions of years old, or that humans share ancestry with other primates, is supposed to destroy belief in God. For many Christians, it has done the opposite: a deeper understanding of the scale, complexity, and fine-tuned elegance of the universe has produced deeper worship. The God who is large enough to create a 13.8-billion-year universe with 200 billion galaxies, each containing hundreds of billions of stars, and who arranged a cosmos fine-tuned to permit life and eventually humanity — that God is worthy of greater awe, not less." },
];

const scriptures = [
  { verse: "Genesis 1:1", text: "In the beginning God created the heavens and the earth." },
  { verse: "John 1:3", text: "Through him all things were made; without him nothing was made that has been made." },
  { verse: "Colossians 1:16", text: "For in him all things were created: things in heaven and on earth, visible and invisible, whether thrones or powers or rulers or authorities; all things have been created through him and for him." },
  { verse: "Psalm 19:1", text: "The heavens declare the glory of God; the skies proclaim the work of his hands." },
  { verse: "Hebrews 11:3", text: "By faith we understand that the universe was formed at God's command, so that what is seen was not made out of what was visible." },
  { verse: "Romans 1:20", text: "For since the creation of the world God's invisible qualities — his eternal power and divine nature — have been clearly seen, being understood from what has been made, so that people are without excuse." },
];

type CEEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function CreationEvolutionPage() {
  const [tab, setTab] = useState("theology");
  const [ceJournal, setCeJournal] = useState<CEEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_creatioevo_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_creatioevo_entries", JSON.stringify(ceJournal)); } catch {}
  }, [ceJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setCeJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setCeJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "views", "voices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Faith &amp; Reason</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Creation &amp; Evolution</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Navigating the relationship between faith and science — the theology of creation, the four main Christian views, and the freedom of knowing that God is the author of both Scripture and the natural world.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? TEAL : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: TEAL, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "views" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 0.5rem" }}>
                Four main positions are held by Christians who all affirm the authority of Scripture and the lordship of Christ. Each view has serious scholarly defenders. Understanding the differences — and the non-negotiables all four share — is essential for charitable, informed engagement.
              </p>
              {views.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", color: TEXT }}>{v.name}</div>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 0.75rem" }}>{v.summary}</p>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span style={{ color: TEAL, fontWeight: 600, fontSize: "0.8rem" }}>Strengths: </span>
                    <span style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6 }}>{v.strengths}</span>
                  </div>
                  <div>
                    <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.8rem" }}>Concerns: </span>
                    <span style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6 }}>{v.concerns}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {voices.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                  <div style={{ color: TEAL, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${TEAL}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: TEAL, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Faith &amp; Science Journal</h3>
                <textarea placeholder="What questions or tensions am I carrying about creation, science, and faith?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What do I believe non-negotiably, and where am I still working things out?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What is one next step — a book to read, a question to explore, a conversation to have?" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: TEAL, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {ceJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : ceJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Questions I&apos;m carrying:</strong> {e.feeling}</p>}
                  {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>What I believe:</strong> {e.truth}</p>}
                  {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Next step:</strong> {e.step}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "UPDGkSt5z1M", title: "The Language of God — Francis Collins", channel: "BioLogos / Francis Collins", description: "Collins, founder of BioLogos and former director of the Human Genome Project, on why the genetic evidence for evolution deepened rather than destroyed his Christian faith — and why science and Scripture are two languages describing the same reality." },
                { videoId: "pDsHDCpAgcU", title: "Has Science Buried God? — John Lennox", channel: "Unbelievable? / Premier Christian Radio", description: "Oxford mathematician John Lennox debates the question of whether modern science — cosmology, physics, biology — has rendered belief in God unnecessary, or whether the intelligibility of the universe points beyond itself to a rational Creator." },
                { videoId: "K8wHaR0GLAU", title: "Where the Conflict Really Lies — Alvin Plantinga", channel: "Closer to Truth", description: "Philosopher Alvin Plantinga explains why the conflict is not between science and Christian faith, but between science and metaphysical naturalism — and why Darwinian evolution actually supports theism more than atheism." },
                { videoId: "6CulBuMCLg0", title: "Genesis, Creation, and Ancient Cosmology", channel: "The Bible Project", description: "A close reading of Genesis 1-2 as ancient cosmological literature — what the text meant in its original context, how its literary structure shapes its meaning, and why understanding it as ancient literature enriches rather than threatens Christian faith." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: TEAL, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
