"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

type CIEntry = { id: string; date: string; struggle: string; truth: string; declaration: string };

export default function ChristianIdentityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CIEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianidentity_entries") ?? "[]"); } catch { return []; }
  });
  const [jStruggle, setJStruggle] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jDeclaration, setJDeclaration] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianidentity_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jStruggle.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), struggle: jStruggle, truth: jTruth, declaration: jDeclaration }, ...prev]);
    setJStruggle(""); setJTruth(""); setJDeclaration("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Life</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Christian Identity
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Your identity is not something you achieve or perform &mdash; it is a reality declared over you in Christ. You are not defined by your failures, your past, your productivity, or what others think of you. You are defined by who God says you are. This guide explores what it means to live from that identity rather than for it.
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
                title: "New Creation: The Foundational Reset (2 Cor 5:17)",
                body: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come. The phrase &ldquo;in Christ&rdquo; appears over 80 times in Paul&rsquo;s letters and is the most basic identity descriptor in the New Testament. To be in Christ is not primarily about improved behavior &mdash; it is about a new category of existence. The Greek word kain&ecirc; ktisis (new creation) echoes Genesis 1; Paul is saying that in Christ, God has begun a new creation project and you are a specimen of its first fruits. The old defining markers &mdash; ethnicity, status, past, performance &mdash; have been replaced by a single defining reality: union with the risen Lord. This is not self-improvement; it is re-genesis.",
              },
              {
                title: "Adoption and Sonship: Children of God, Not Servants (Rom 8:15-17)",
                body: "For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, &ldquo;Abba! Father!&rdquo; The Spirit himself bears witness with our spirit that we are children of God. The word adoption (huiothesia) in the Greco-Roman world was a legal act that conferred full inheritance rights and a new family identity; it was permanent and irrevocable. Paul applies this image to the believer&rsquo;s relationship with God. Notice the contrast: the spirit of slavery leads to fear and performance; the Spirit of adoption leads to intimacy (Abba, the Aramaic equivalent of &ldquo;Papa&rdquo;). A slave serves to earn; a child serves because of who they are. Identity confusion produces fear-based striving; secure sonship produces freedom and love.",
              },
              {
                title: "Royal Priesthood: Identity and Vocation Together (1 Pet 2:9-10)",
                body: "But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession. Peter applies the Exodus covenant language of Exodus 19:6 to the church: these titles were given to Israel at Sinai and are now bestowed on the new covenant people. Each descriptor is corporate and vocation-bearing: chosen (the initiative was God&rsquo;s, not yours), royal (connected to the King), priesthood (mediators who bring people near to God), holy nation (set apart for a particular purpose), God&rsquo;s own possession (you belong definitively to him). The phrase &ldquo;you are&rdquo; is declarative, not hortatory. Peter is not saying &ldquo;become this&rdquo; &mdash; he is saying &ldquo;this is what you are.&rdquo;",
              },
              {
                title: "Image of God: Dignity Before Performance (Gen 1:26-27; Col 3:10)",
                body: "So God created man in his own image, in the image of God he created him; male and female he created them. The imago Dei is the bedrock of human dignity and identity that precedes all achievement. You bear the image of God by virtue of being human, prior to anything you do, fail to do, or become. In Christ, that image is being &ldquo;renewed in knowledge after the image of its creator&rdquo; (Col 3:10). The fall distorted but did not destroy the image; the new creation restores and perfects it. This means that your worth is not earned, cannot be lost through failure, and is not dependent on the opinion of others. The most disoriented, broken, and struggling person retains full dignity as an image-bearer of God.",
              },
              {
                title: "Security vs. Performance-Based Identity (Gal 2:20; Eph 1:3-14)",
                body: "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. Performance-based identity is organized around a question: Am I enough? It uses religious achievement, moral record, social approval, or productivity to answer that question &mdash; and the answer is always provisional, fragile, and subject to revision. Security-based identity in Christ answers the question differently: the verdict is already in. In Ephesians 1, Paul catalogs what is true of every believer in Christ before a single instruction is given: chosen, holy, blameless, predestined for adoption, redeemed, forgiven, lavished with grace, sealed with the Spirit, guaranteed inheritance. The ethics of Ephesians 4-6 flow from that foundation, not toward it. You do not obey to become accepted; you obey because you already are.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
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
              "Begin each morning by speaking aloud one specific truth about who you are in Christ before you check your phone, review your to-do list, or engage any performance pressure. Not a general affirmation &mdash; a specific scriptural declaration: &ldquo;I am chosen, holy, and blameless before God (Eph 1:4)&rdquo; or &ldquo;I have not received a spirit of slavery to fear, but a spirit of adoption (Rom 8:15).&rdquo;",
              "Identify the primary source of your functional identity &mdash; the thing that, when it goes well, makes you feel secure, and when it goes poorly, makes you feel worthless or anxious. Write it down. Then ask: how would my life look different if my security came from being in Christ rather than from that source?",
              "When you experience identity confusion or shame, practice the &ldquo;courtroom move&rdquo;: distinguish between the accuser&rsquo;s verdict and God&rsquo;s declared verdict. The accuser says what you have done; God declares who you are in his Son. Speak the verdict aloud: &ldquo;There is therefore now no condemnation for those who are in Christ Jesus (Rom 8:1).&rdquo;",
              "Study and memorize the identity statements in Ephesians 1:1&ndash;14 and 1 Peter 2:9-10. These are not aspirational &mdash; they are declarative. Let the grammar of the text shape your self-understanding: not &ldquo;try to become chosen&rdquo; but &ldquo;you are chosen.&rdquo;",
              "Bring a specific identity struggle to a trusted friend, spiritual director, or pastor. Identity confusion thrives in isolation; it loses power when spoken and received in a community that knows who you truly are. Practice being known, not just performing.",
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
                name: "Neil T. Anderson",
                work: "Victory Over the Darkness",
                quote: "You are not the great sinner that Satan wants you to believe you are. You are a saint who sins. There is a profound difference. The first describes an identity; the second describes a behavior. God deals with your identity first, and your behavior flows from that.",
                bio: "Neil T. Anderson is the founder of Freedom in Christ Ministries and one of the most influential writers on Christian identity in the 20th century. His book Victory Over the Darkness has helped millions of Christians understand that their fundamental identity is not defined by their sin patterns but by their position in Christ. His pastoral insight that the enemy&rsquo;s primary strategy is identity confusion has proven enormously clarifying for Christians trapped in shame cycles.",
              },
              {
                name: "Brennan Manning",
                work: "Abba&rsquo;s Child",
                quote: "Define yourself radically as one beloved by God. This is the true self. Every other identity is illusion. The Abba of Jesus loves you tenderly, unconditionally, and forever. It is the Father&rsquo;s love that calls you to stop performing, stop pretending, and dare to be yourself.",
                bio: "Brennan Manning was a former Franciscan priest, recovering alcoholic, and one of the most beloved spiritual writers of the late 20th century. His book Abba&rsquo;s Child is a sustained meditation on the beloved identity available to every Christian through union with Christ. Manning&rsquo;s own experience of failure and grace gave his writing an authenticity that spoke directly to people whose identity had been shattered by shame, addiction, or religious performance.",
              },
              {
                name: "J.I. Packer",
                work: "Knowing God",
                quote: "If you want to judge how well a person understands Christianity, find out how much he makes of the thought of being God&rsquo;s child, and having God as his Father. If this is not the thought that prompts and controls his worship and prayers and his whole outlook on life, it means he does not understand Christianity very well at all.",
                bio: "J.I. Packer was a theologian and Anglican minister who taught for decades at Regent College, Vancouver. His classic work Knowing God remains one of the finest introductions to Christian theology in print. Packer&rsquo;s treatment of adoption as the highest privilege of the gospel &mdash; and the one most neglected in Christian consciousness &mdash; has shaped generations of Christians toward a deeper understanding of their identity as beloved children of God rather than moral achievers.",
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
              { ref: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.", insight: "The &ldquo;new creation&rdquo; is not a metaphor for improvement &mdash; it is an ontological declaration. Something genuinely new exists that did not exist before." },
              { ref: "Romans 8:15-17", text: "For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, &ldquo;Abba! Father!&rdquo; The Spirit himself bears witness with our spirit that we are children of God, and if children, then heirs &mdash; heirs of God and fellow heirs with Christ.", insight: "Adoption language implies irrevocable, full legal status as a child with inheritance rights. Fear is incompatible with this identity." },
              { ref: "1 Peter 2:9", text: "But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness into his marvelous light.", insight: "Every descriptor is declarative (&ldquo;you are&rdquo;) not aspirational. Identity precedes vocation: you proclaim because you are chosen, not to become chosen." },
              { ref: "Ephesians 1:4-5", text: "Even as he chose us in him before the foundation of the world, that we should be holy and blameless before him. In love he predestined us for adoption to himself as sons through Jesus Christ.", insight: "The election language grounds identity not in self-effort but in God&rsquo;s initiative before creation. Your identity in Christ precedes your existence." },
              { ref: "Galatians 2:20", text: "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.", insight: "Paul speaks of a new &ldquo;I&rdquo; &mdash; one constituted by Christ&rsquo;s life within. The old self-defining ego has died; a new self defined by union with Christ has taken its place." },
              { ref: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus.", insight: "The verdict is declared before the behavior is reviewed. Security in Christ means the final verdict is not pending &mdash; it has already been rendered: not guilty." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: s.text }} />
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.insight }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Identity Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What identity struggle are you facing?</label>
                  <textarea
                    value={jStruggle}
                    onChange={e => setJStruggle(e.target.value)}
                    placeholder="Where are you deriving your sense of worth or security right now?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What does Scripture say is true about you in Christ?</label>
                  <textarea
                    value={jTruth}
                    onChange={e => setJTruth(e.target.value)}
                    placeholder="Which specific truth from God&apos;s Word addresses this struggle?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Write a declaration of who you are in Christ.</label>
                  <textarea
                    value={jDeclaration}
                    onChange={e => setJDeclaration(e.target.value)}
                    placeholder="e.g. I am chosen, beloved, and adopted. My worth is not earned. I am not what I have done."
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
                {e.struggle && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Struggle</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.struggle}</p></div>}
                {e.truth && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Truth</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.truth}</p></div>}
                {e.declaration && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Declaration</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.declaration}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="WFoShXxPVGA" title="Who Am I? Identity in Christ &mdash; What the Bible Says" />
            <VideoEmbed videoId="Lp2FERpGnc4" title="Your Identity in Christ: Chosen, Adopted, and Loved" />
            <VideoEmbed videoId="5cIBFwIx8Kw" title="Overcoming Identity Confusion with Scripture" />
            <VideoEmbed videoId="HbAZ6cFxCeY" title="Security vs. Performance: Living from Your Identity in Christ" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
