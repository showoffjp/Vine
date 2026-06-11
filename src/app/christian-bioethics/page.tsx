"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

type BEthEntry = { id: string; date: string; dilemma: string; principle: string; application: string };

export default function ChristianBioethicsPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BEthEntry[]>(() => {
    try { const s = localStorage.getItem("vine_bioethics_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jDilemma, setJDilemma] = useState("");
  const [jPrinciple, setJPrinciple] = useState("");
  const [jApplication, setJApplication] = useState("");

  useEffect(() => { localStorage.setItem("vine_bioethics_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jDilemma.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), dilemma: jDilemma, principle: jPrinciple, application: jApplication }, ...prev]);
    setJDilemma(""); setJPrinciple(""); setJApplication("");
  };

  const deleteEntry = (id: string) => setEntries(prev => prev.filter(e => e.id !== id));

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Ethics</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Christian Bioethics
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          From abortion to genetic engineering, from end-of-life care to stem cell research &mdash; bioethics is where the theology of the image of God meets the hardest questions of modern medicine and technology. Christian ethics does not begin with positions; it begins with a person &mdash; every human being made in the image of God.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? ACCENT : BORDER, background: tab === t.id ? ACCENT + "22" : "transparent", color: tab === t.id ? ACCENT : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                title: "The Image of God as Bioethical Foundation (Gen 1:26&ndash;28)",
                body: "Genesis 1:26&ndash;28 establishes the cornerstone of Christian bioethics: every human being, from conception to natural death, bears the image of God. This is not a conditional status earned by capacity, achievement, or viability &mdash; it is an ontological fact about what every human being is. A fertilized embryo, a person in a persistent vegetative state, a person with severe cognitive disability, an elderly person with dementia &mdash; all bear the image of God with equal dignity. Christian bioethics rejects any framework that assigns differential human value based on capacity, utility, or quality of life. The Didache (c. 100 AD), one of the earliest Christian documents, explicitly condemned abortion and infanticide &mdash; practices common in the Roman world &mdash; on this basis.",
              },
              {
                title: "The Sanctity of Life: Creation, Fall, and Redemption",
                body: "The sanctity of human life is not merely a slogan but a theological conviction rooted in three acts of the Christian story. In creation, God makes human beings in his image and breathes life into them (Gen 2:7). In the fall, death enters as the enemy of God&rsquo;s intention &mdash; the last enemy to be destroyed (1 Cor 15:26). In redemption, God so values human life that the eternal Son takes human flesh (John 1:14) and dies to restore it. The incarnation means human bodies matter to God eternally. The resurrection of Jesus is the firstfruits of the bodily resurrection of all believers (1 Cor 15:20&ndash;23). This framework shapes every bioethical judgment: we are not free to treat human life as a commodity because God has declared its worth in creation, mourned its loss in death, and invested himself fully in its restoration.",
              },
              {
                title: "Abortion: The Status of the Human Embryo and Fetus",
                body: "The central question in abortion ethics is not primarily political but ontological: what is the embryo? The Christian tradition has generally held that human life begins at or near conception. Psalm 139:13&ndash;16 speaks of God&rsquo;s intimate knowledge of the person in the womb; Jeremiah 1:5 records God knowing Jeremiah before formation in the womb; Luke 1:41&ndash;44 shows John the Baptist responding to the presence of Jesus while Elizabeth was pregnant with John. The consensus of Catholic, Orthodox, and most evangelical Protestant traditions affirms the embryo&rsquo;s full human status and opposes elective abortion. Hard cases &mdash; rape, incest, severe fetal anomaly, life of the mother &mdash; require careful case-by-case pastoral reasoning rather than sweeping categorical answers, but the starting presumption is always toward life.",
              },
              {
                title: "Euthanasia, Physician-Assisted Death, and End-of-Life Care",
                body: "The Christian tradition broadly opposes euthanasia (intentional killing of a patient) and physician-assisted suicide. The reasons are theological: the sanctity of life (the prohibition on murder extends to self-killing), the spiritual meaning of dying (death is not an emergency exit but a threshold), and the danger of expanding definitions (as evidenced in the Netherlands and Belgium, where legal assisted dying has grown far beyond its original scope). The Christian response to the desire for euthanasia is not argument but presence: robust palliative care, hospice ministry, honest accompaniment in dying. The church has rich resources in the ars moriendi tradition &mdash; the &ldquo;art of dying well&rdquo; &mdash; that provide a counter-vision to death on demand: dying surrounded by community, in reconciliation, in hope of resurrection.",
              },
              {
                title: "Genetic Engineering, Stem Cell Research, and Human Enhancement",
                body: "Genetic technologies force bioethicists to distinguish therapy from enhancement and creation from curation. Christian tradition supports therapeutic interventions that restore what is damaged &mdash; including, cautiously, some genetic therapies for heritable diseases. It raises serious questions about germline editing (changes heritable by future generations), the destruction of embryos in embryonic stem cell research (the embryo&rsquo;s status again is central), and the transhumanist vision of redesigning humanity itself. The Tower of Babel (Gen 11) is a recurring motif: the impulse to transcend creatureliness without reference to God produces not flourishing but confusion. Organ donation is broadly affirmed as an act of love and generosity consistent with Christian teaching on the good of neighbor.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Practices</h2>
            {[
              "Before forming a position on any bioethical question, identify your foundational conviction: what is the status of the human being in question? Start with the image of God and work outward to the specific dilemma &mdash; do not start with political alignment or cultural consensus.",
              "Prepare an advance directive that reflects Christian values around end-of-life care. Name a trusted advocate, specify your wishes regarding extraordinary measures, and explicitly address the difference between refusing futile treatment (permissible) and requesting to be killed (not permissible). Discuss it with your pastor and family.",
              "Read one careful Christian bioethicist whose tradition differs from your own &mdash; a Catholic reading an evangelical, an evangelical reading an Orthodox writer. The Christian tradition is richer than any single tradition&rsquo;s bioethics, and genuine disagreement within the tradition is more instructive than confident partisanship.",
              "When someone you love faces a bioethical crisis &mdash; a difficult diagnosis, a pregnancy decision, end-of-life care for a parent &mdash; resist the impulse to answer quickly. Be present first. The ministry of presence and accompaniment is more important in most cases than having the right answer immediately available.",
              "Engage with the disability community before forming final opinions on prenatal testing, quality-of-life arguments, and end-of-life care. The assumption that a life with disability is not worth living is contested most effectively not by argument but by the witness of people with disabilities who testify to full and meaningful lives made in the image of God.",
            ].map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ background: ACCENT + "22", color: ACCENT, fontWeight: 800, borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.9rem" }}>{i + 1}</div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: p }} />
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Voices</h2>
            {[
              {
                name: "Joni Eareckson Tada",
                work: "When Is It Right to Die?",
                quote: "The value of a life cannot be measured by what it produces or what it experiences. A person in a coma bears the image of God as much as a concert pianist. To say otherwise is to slip into a utilitarian ethic that has no barrier against the logic of the Holocaust.",
                bio: "Joni Eareckson Tada became a quadriplegic at 17 following a diving accident and has spent over five decades as one of the most compelling Christian voices on disability, suffering, and bioethics. Her organization Joni and Friends has provided theological and practical resources for disability ministry worldwide. Her personal testimony &mdash; of finding meaning and purpose in a severely limited body &mdash; makes her bioethical writing unusually credible and moving. She opposes euthanasia, assisted suicide, and quality-of-life arguments from lived experience, not theory.",
              },
              {
                name: "Gilbert Meilaender",
                work: "Bioethics: A Primer for Christians",
                quote: "We should not try to eliminate suffering whenever possible as if it had no place in a good human life. We should, rather, try to care for those who suffer, accompanying them in their suffering, not abandoning them to it. The goal of medicine is not to eliminate mortality but to care for mortal persons.",
                bio: "Gilbert Meilaender is a Lutheran bioethicist and longtime professor at Valparaiso University whose work represents some of the most careful and accessible Christian engagement with bioethical questions. His Bioethics: A Primer for Christians is the standard introduction for thoughtful lay Christians. He served on the President&rsquo;s Council on Bioethics under George W. Bush. His approach combines Protestant theological convictions with natural law reasoning and a deep engagement with the Catholic tradition in a way that is ecumenically instructive.",
              },
              {
                name: "C. Everett Koop",
                work: "Whatever Happened to the Human Race?",
                quote: "When the sanctity of human life is eroded at any point on the continuum of life &mdash; whether at the beginning, the end, or anywhere in between &mdash; all life becomes vulnerable. The logic of abortion, accepted for convenience, becomes the logic that threatens the disabled, the elderly, the inconvenient.",
                bio: "C. Everett Koop was a pioneering pediatric surgeon who became Surgeon General of the United States under Ronald Reagan. Together with Francis Schaeffer he produced the landmark film and book series Whatever Happened to the Human Race? (1979), which argued that the erosion of the sanctity of life in abortion would logically extend to euthanasia and infanticide. Koop&rsquo;s combination of medical expertise and Christian conviction made him one of the most influential voices in the development of evangelical bioethics. His predictions about the slippery slope have been borne out in subsequent decades.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em>{v.work}</em></div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;<span dangerouslySetInnerHTML={{ __html: v.quote }} />&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.bio }} />
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Scripture</h2>
            {[
              { ref: "Gen 1:26&ndash;27", text: "Then God said, &ldquo;Let us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens and over the livestock and over all the earth.&rdquo; So God created man in his own image, in the image of God he created him; male and female he created them.", insight: "The imago Dei is the non-negotiable foundation of Christian bioethics. Every human being at every stage of development bears this image." },
              { ref: "Ps 139:13&ndash;16", text: "For you formed my inward parts; you knitted me together in my mother&rsquo;s womb. I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well. My frame was not hidden from you, when I was being made in secret, intricately woven in the depths of the earth.", insight: "God&rsquo;s intimate knowledge and involvement in human formation before birth is a key text for the personhood of the unborn." },
              { ref: "Jer 1:5", text: "&ldquo;Before I formed you in the womb I knew you, and before you were born I consecrated you; I appointed you a prophet to the nations.&rdquo;", insight: "God&rsquo;s knowledge and calling of persons before birth implies personhood and purpose that precede physical development." },
              { ref: "1 Cor 6:19&ndash;20", text: "Or do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body.", insight: "The body is not mere property to be disposed of according to personal preference &mdash; it belongs to God who made and redeemed it." },
              { ref: "Luke 1:41&ndash;44", text: "And when Elizabeth heard the greeting of Mary, the baby leaped in her womb. And Elizabeth was filled with the Holy Spirit, and she exclaimed with a loud cry, &ldquo;Blessed are you among women, and blessed is the fruit of your womb! And why is this granted to me that the mother of my Lord should come to me? For behold, when the sound of your greeting came to my ears, the baby in my womb leaped for joy.&rdquo;", insight: "John the Baptist responds to the presence of Jesus while both are still in utero &mdash; a striking text for the personhood and spiritual responsiveness of the unborn." },
              { ref: "Gen 9:6", text: "&ldquo;Whoever sheds the blood of man, by man shall his blood be shed, for God made man in his image.&rdquo;", insight: "The prohibition on murder is grounded explicitly in the image of God &mdash; connecting the sanctity of life directly to God&rsquo;s own character and design." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: s.ref }} />
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 0.6rem" }} dangerouslySetInnerHTML={{ __html: s.text }} />
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.insight }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What bioethical dilemma are you thinking through?</label>
                  <textarea
                    value={jDilemma}
                    onChange={e => setJDilemma(e.target.value)}
                    placeholder="e.g. End-of-life care for a parent, prenatal testing, IVF, genetic counseling..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Which Christian principle or Scripture most directly applies?</label>
                  <textarea
                    value={jPrinciple}
                    onChange={e => setJPrinciple(e.target.value)}
                    placeholder="Image of God, sanctity of life, bodily resurrection, suffering as meaningful, neighbor love..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>How does this principle apply to your specific situation or question?</label>
                  <textarea
                    value={jApplication}
                    onChange={e => setJApplication(e.target.value)}
                    placeholder="Work through the application — where does it lead you? What tensions remain?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
              </div>
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.6rem 1.5rem", background: ACCENT, border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", fontWeight: 700, fontSize: "0.93rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.82rem" }}>Delete</button>
                </div>
                {e.dilemma && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Dilemma</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.dilemma}</p></div>}
                {e.principle && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Principle</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.principle}</p></div>}
                {e.application && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Application</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.application}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="bxzuh5Xx5G4" title="Christian Bioethics: Sanctity of Life &mdash; Euthanasia and Genetic Engineering" />
            <VideoEmbed videoId="KwX1f2gYKZ4" title="Abortion and the Christian Perspective: The Image of God from Conception" />
            <VideoEmbed videoId="YNd-PbVhnvA" title="Euthanasia and the Christian View: Dying with Dignity vs. Dying Well" />
            <VideoEmbed videoId="XtwIT8JjddM" title="Genetic Ethics and Christianity: Where Should the Church Draw the Line?" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
