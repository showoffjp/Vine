"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

type LNEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ChristianLonelinessPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<LNEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_loneliness_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => { localStorage.setItem("vine_loneliness_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jFeeling.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
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
          Loneliness &amp; the Christian
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Loneliness is not a sign of spiritual failure &mdash; even Jesus wept, wrestled alone in Gethsemane, and cried out from the cross. This guide explores God&rsquo;s promise of presence, the body of Christ as antidote to isolation, the difference between loneliness and solitude, and the steps toward genuine belonging.
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
                title: "God&rsquo;s Inescapable Presence &mdash; Psalm 139",
                body: "Where shall I go from your Spirit? Or where shall I flee from your presence? If I ascend to heaven, you are there! If I make my bed in Sheol, you are there! Psalm 139 is the great biblical meditation on divine omnipresence &mdash; and it is addressed not as abstract theology but as personal comfort. The God who searches and knows us (vv. 1-6) is the God who is with us in every conceivable location (vv. 7-12) and who formed us in hidden places (vv. 13-16). The poem insists that there is no place where we are alone &mdash; not in the heights of flourishing, not in the depths of despair. The Christian who feels utterly alone is not abandoned; they are known by a God who has never looked away.",
              },
              {
                title: "The Promise That Cannot Be Revoked &mdash; Hebrews 13:5",
                body: "I will never leave you nor forsake you. This is a quotation from Deuteronomy 31:6, the promise God made to Israel before they entered an unknown land without Moses. The Hebrews writer applies it to Christians facing economic hardship and social marginalization. The language is emphatically negative in Greek &mdash; a double negative intensified: I will absolutely not, under any circumstances, leave you or forsake you. This is not a conditional promise; it does not depend on our faithfulness or our feelings. The guarantee of God&rsquo;s presence is the basis on which the Christian can resist the fear and shame that loneliness carries.",
              },
              {
                title: "Jesus in Gethsemane &mdash; the Loneliness of the Son of God",
                body: "He took with him Peter and the two sons of Zebedee, and began to be sorrowful and troubled. Then he said to them, My soul is very sorrowful, even to death; remain here, and watch with me. And going a little farther he fell on his face and prayed. Jesus asked his closest friends to stay with him in his darkest hour &mdash; and they fell asleep. Three times. The disciples&rsquo; failure to stay awake is not incidental; it is the precise form that Jesus&rsquo; loneliness took. He wanted human companionship; he experienced human abandonment. The cry from the cross &mdash; My God, my God, why have you forsaken me? &mdash; is the final depth of loneliness: experienced even as the felt absence of the Father. Jesus is qualified to meet us in loneliness because he has been there fully.",
              },
              {
                title: "The Body of Christ &mdash; God&rsquo;s Answer to Human Loneliness",
                body: "God sets the lonely in families; he leads out the prisoners with singing (Psalm 68:6). The church is not merely an institution but a family &mdash; a new kinship forged by shared adoption as children of God (Romans 8:15-17). The New Testament envisions community that crosses every human boundary: neither Jew nor Greek, neither slave nor free, neither male nor female, for you are all one in Christ Jesus (Galatians 3:28). In a culture of increasing atomization and shallow digital connection, the local church at its best offers what nothing else can: embodied, committed, multi-generational, cross-cultural fellowship. The lonely Christian is not called to white-knuckle their way through isolation but to seek and help build the genuine community the New Testament describes.",
              },
              {
                title: "Loneliness vs. Solitude &mdash; the Desert Fathers&rsquo; Distinction",
                body: "Loneliness is the pain of being alone; solitude is the gift of being alone with God. The desert fathers and mothers of the 3rd-5th centuries withdrew from society not out of misanthropy but out of a conviction that genuine encounter with God required stripping away the noise and distraction of the crowd. Thomas Merton, the 20th-century Trappist monk, argued that those who cannot bear to be alone are those who have not yet found the person within &mdash; the self hidden with Christ in God. Paradoxically, learning to be alone well &mdash; not fleeing into distraction but becoming present to God in the silence &mdash; is one of the most important preparations for genuine community. The person who has found God in solitude brings something real to offer others.",
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
              "Distinguish loneliness from solitude by spending intentional time alone with God &mdash; not scrolling, not filling the silence, but sitting in quiet with an open Bible or simply in spoken prayer. The goal is not to feel less lonely immediately but to practice the presence of a God who is already there. Many people discover that their loneliness contains a hidden longing for God that no human relationship can fully satisfy.",
              "Take one step toward vulnerability in a community you are already part of: share something real with one person rather than projecting a managed image. Loneliness persists not because people are absent but because <em>you</em> are absent &mdash; known only superficially. The antidote is not more social activity but truer self-disclosure in safer relationships.",
              "If you are a single Christian, resist the cultural narrative that your loneliness will end when you find a spouse. Paul describes singleness as a gift (1 Cor 7:7) &mdash; not because it is easy but because the undivided attention it allows toward God and others is genuinely valuable. Seek community that includes rather than marginalizes singles, and name your loneliness in safe relationships rather than medicating it with hyperactivity.",
              "Practice intercessory prayer as a bridge to connection: pray specifically for people in your community by name, for their actual circumstances, for five minutes daily. Prayer changes what you notice &mdash; people you have prayed for tend to become people you seek out. Intercessory prayer is one of the quietest forms of love that regularly transforms relationships.",
              "If loneliness is chronic, consider whether you are in a community that can actually provide belonging &mdash; small enough to know people, consistent enough to build trust, honest enough to allow vulnerability. Megachurch attendance without small-group involvement is a recipe for sustained loneliness. Seek the environment where genuine community is structurally possible.",
              "Read the account of Jonathan and David (1 Samuel 18-20) as a model of spiritual friendship: a love that was extraordinary and costly, built on loyalty and honest commitment. Consider who in your life is or could be a <em>Jonathan</em> &mdash; someone whose soul is knit to yours. Spiritual friendship requires initiative, commitment, and time.",
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
                name: "Henri Nouwen",
                work: "Reaching Out",
                quote: "Loneliness is one of the most universal sources of human suffering today, yet it is also one of the most fruitful starting points for a deeper spiritual life. The movement from loneliness to solitude is one of the most important spiritual journeys a person can make.",
                bio: "Henri Nouwen was a Dutch Catholic priest, professor, and spiritual director whose books on the interior life have shaped millions of readers across denominational lines. His own profound loneliness &mdash; documented with unusual candor in The Inner Voice of Love and The Road to Daybreak &mdash; gave his writing on solitude and community a quality of hard-won authenticity. Nouwen insisted that loneliness, rightly received, is not an obstacle to spiritual life but a doorway into it.",
              },
              {
                name: "Dietrich Bonhoeffer",
                work: "Life Together",
                quote: "Let him who cannot be alone beware of community. Let him who is not in community beware of being alone. Each by itself has profound perils and pitfalls. One who wants fellowship without solitude plunges into the void of words and feelings, and the one who seeks solitude without fellowship perishes in the abyss of vanity, self-infatuation, and despair.",
                bio: "Dietrich Bonhoeffer was a German Lutheran pastor and theologian who was martyred by the Nazi regime in 1945. Life Together, written from his experience leading an illegal seminary for the Confessing Church, remains one of the most theologically serious and practically useful treatments of Christian community available. Bonhoeffer&rsquo;s insistence that both solitude and community are necessary &mdash; and that the failure to find one will corrupt the other &mdash; is one of his most enduring contributions.",
              },
              {
                name: "Thomas Merton",
                work: "No Man Is an Island",
                quote: "The man who fears to be alone will never be anything but lonely, no matter how much he may surround himself with people. But the man who learns, in solitude and recollection, to be at peace with his own loneliness, and to prefer its reality to the illusion of merely physical company, has prepared himself to face the full terror of the isolation that awaits every human being.",
                bio: "Thomas Merton was an American Trappist monk, poet, and social critic whose autobiography The Seven Storey Mountain became an unexpected bestseller in 1948. His writings on solitude, contemplation, and the interior life remain among the most widely-read in Christian spiritual literature. Merton&rsquo;s paradox &mdash; that genuine community requires genuine solitude &mdash; is one of the most countercultural insights in the Christian tradition.",
              },
              {
                name: "Wesley Hill",
                work: "Spiritual Friendship",
                quote: "If we are going to recover a robust theology and practice of friendship, we need to start with the conviction that God himself is the one who makes human love possible and who calls us to it. Friendship is not merely a pleasant addition to the Christian life; it is a crucial form through which we receive and give the love of God.",
                bio: "Wesley Hill is an Anglican priest, New Testament scholar, and author who writes from the perspective of a celibate gay Christian. His work on spiritual friendship recovers a category that has been largely lost in evangelical culture: friendship as a serious, committed, quasi-covenantal relationship, not a casual social supplement. Spiritual Friendship is one of the most theologically careful and personally honest treatments of Christian loneliness available.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em dangerouslySetInnerHTML={{ __html: v.work }} /></div>
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
              { ref: "Psalm 139:7-10", text: "Where shall I go from your Spirit? Or where shall I flee from your presence? If I ascend to heaven, you are there! If I make my bed in Sheol, you are there! If I take the wings of the morning and dwell in the uttermost parts of the sea, even there your hand shall lead me, and your right hand shall hold me." },
              { ref: "Hebrews 13:5", text: "&ldquo;I will never leave you nor forsake you.&rdquo;" },
              { ref: "Matthew 26:38-40", text: "&ldquo;My soul is very sorrowful, even to death; remain here, and watch with me.&rdquo; And going a little farther he fell on his face and prayed... And he came to the disciples and found them sleeping." },
              { ref: "Psalm 68:6", text: "God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land." },
              { ref: "1 Samuel 18:1", text: "As soon as he had finished speaking to Saul, the soul of Jonathan was knit to the soul of David, and Jonathan loved him as his own soul." },
              { ref: "Romans 8:15-16", text: "For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, &ldquo;Abba! Father!&rdquo; The Spirit himself bears witness with our spirit that we are children of God." },
              { ref: "Psalm 22:1", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?" },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.text }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Loneliness &amp; Belonging Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Describe how you are feeling lonely right now.</label>
                  <textarea
                    value={jFeeling}
                    onChange={e => setJFeeling(e.target.value)}
                    placeholder="Be specific &mdash; with whom, in what context, since when..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is true about God&rsquo;s presence and care in this?</label>
                  <textarea
                    value={jTruth}
                    onChange={e => setJTruth(e.target.value)}
                    placeholder="Psalm 139, Hebrews 13:5, Jesus in Gethsemane, the Father&rsquo;s adoption..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What one step toward connection will you take?</label>
                  <textarea
                    value={jStep}
                    onChange={e => setJStep(e.target.value)}
                    placeholder="Reach out to someone, be vulnerable, join a small group, make an appointment..."
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
                {e.feeling && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Feeling</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.feeling}</p></div>}
                {e.truth && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Truth</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.truth}</p></div>}
                {e.step && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Step</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.step}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="NqTMVb97dM8" title="Loneliness and the Christian: What Does the Bible Say?" />
            <VideoEmbed videoId="EkZ6UGBZ1xc" title="Henri Nouwen on Moving from Loneliness to Solitude" />
            <VideoEmbed videoId="t6dQ-6gXnik" title="The Body of Christ &mdash; God&rsquo;s Answer to Human Loneliness" />
            <VideoEmbed videoId="B4fR8oKPHNk" title="Spiritual Friendship: Recovering a Lost Christian Practice" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
