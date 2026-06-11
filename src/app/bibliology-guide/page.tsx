"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";


const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "inspiration", label: "Inspiration" },
  { id: "inerrancy", label: "Inerrancy" },
  { id: "canon", label: "The Canon" },
  { id: "authority", label: "Authority" },
  { id: "clarity", label: "Clarity & Sufficiency" },
  { id: "objections", label: "Objections" },
  { id: "journal", label: "Reflection" },
  { id: "videos", label: "Videos" },
];

const OVERVIEW_GRID = [
  { color: PURPLE, label: "Inspiration", icon: "✍️", text: "Scripture is 'God-breathed' (2 Timothy 3:16 — theopneustos). God superintended human authors through his Spirit so that their very words convey his word, without overriding their personalities, styles, or contexts." },
  { color: GOLD, label: "Inerrancy", icon: "✅", text: "The Bible, in its original manuscripts, is without error in everything it affirms. It does not merely contain truth — it IS true. This does not mean it speaks to all scientific questions, but that all it asserts is reliable." },
  { color: TEAL, label: "Canon", icon: "📜", text: "The 66 books of Protestant Scripture (39 OT + 27 NT) were recognized (not created) by the church as having divine authority. Canon formation was a Spirit-guided process of discernment, not an arbitrary church decision." },
  { color: BLUE, label: "Authority", icon: "👑", text: "Scripture is the supreme norm for Christian faith and practice — norma normans non normata ('the norm that norms and is not normed'). Sola Scriptura means Scripture has final authority over tradition, experience, and reason." },
];

const INSPIRATION_ITEMS = [
  {
    id: "verbal", title: "Verbal Plenary Inspiration", ref: "2 Timothy 3:16; 2 Peter 1:20-21",
    body: "Verbal inspiration means inspiration extends to the very words of Scripture (not just the concepts or ideas). Plenary means it extends to all of Scripture equally — not some parts more inspired than others. Together: every word of Scripture, in all its parts, is breathed out by God. 2 Timothy 3:16 — 'All Scripture is God-breathed (theopneustos) and useful for teaching, rebuking, correcting and training in righteousness.' 2 Peter 1:21 — 'men spoke from God as they were carried along by the Holy Spirit.'"
  },
  {
    id: "organic", title: "Organic/Concursive Inspiration", ref: "1 Corinthians 2:13; Acts 1:16",
    body: "God's inspiration did not override the humanity of the authors. Paul sounds like Paul; John sounds like John; Luke sounds like the careful historian he was. The Spirit worked through their personalities, research, experiences, and literary styles — not around them. This is sometimes called 'organic' inspiration (as opposed to mechanical dictation). The result is books that are simultaneously fully human and fully divine — analogous to the incarnation, where Jesus is fully human and fully divine without either canceling the other."
  },
  {
    id: "dictation", title: "Dictation vs. Superintendence", ref: "Luke 1:1-4; Jeremiah 36:4",
    body: "Dictation theory (sometimes called 'mechanical inspiration') holds that God dictated words to passive human secretaries. This is not the mainstream evangelical position. The organic/superintendence view holds that God guided the authors in such a way that their fully human words are also God's words. Luke explicitly describes his historical research (Luke 1:1-4). Jeremiah dictated to Baruch (Jeremiah 36:4). In both cases, normal human processes were instruments of divine inspiration."
  },
  {
    id: "spirit", title: "The Spirit's Role in Inspiration", ref: "John 14:26; John 16:13; 2 Peter 1:21",
    body: "Jesus promised the disciples that the Spirit would 'teach them all things' and 'guide them into all truth' — this promise is the ground of apostolic authority and the inspiration of the NT writings. 2 Peter 1:21 says writers were 'carried along' (pheromenoi — the same word used for a ship driven by wind). The metaphor is not passive channel but active agent: the Spirit worked through the human authors, carrying them toward the divine goal of a true and authoritative word."
  },
  {
    id: "autographs", title: "Inspiration of the Autographs", ref: "Matthew 5:18",
    body: "Classic inerrancy applies technically to the original autographs — the manuscripts as written by the original authors. We do not have the autographs; we have copies. But textual criticism has established that the manuscripts we have are remarkably close to the originals. The Chicago Statement on Biblical Inerrancy (1978): 'We affirm that inspiration, strictly speaking, applies only to the autographic text of Scripture.' The practical confidence is that our Bible reliably represents the original text to a very high degree of accuracy."
  },
];

const INERRANCY_ITEMS = [
  {
    id: "def", title: "What Inerrancy Means", ref: "Psalm 19:7-9; John 17:17",
    body: "Inerrancy is the claim that the Bible, in its original manuscripts, is without error in all that it affirms. 'Your word is truth' (John 17:17). This does not mean the Bible speaks with scientific or mathematical precision on every topic — it uses phenomenological language (the sun rises), round numbers, and approximations that are entirely normal in human communication. It means the Bible does not make false affirmations — it does not assert things that are not so."
  },
  {
    id: "infallibility", title: "Inerrancy vs. Infallibility", ref: "Proverbs 30:5; Titus 1:2",
    body: "These terms are often used interchangeably, but they can be distinguished: infallibility (cannot fail in its purposes) is the stronger claim about Scripture's reliability to accomplish what God intends; inerrancy (without error) is the narrower claim about factual accuracy. Some theologians accept infallibility (Scripture reliably achieves its purpose of pointing to salvation) while rejecting inerrancy (it may contain factual errors on peripheral matters). Most conservative evangelicals hold both."
  },
  {
    id: "chicago", title: "The Chicago Statement (1978)", ref: "The Chicago Statement on Biblical Inerrancy",
    body: "A landmark ecumenical statement signed by over 300 evangelical scholars, the Chicago Statement defined inerrancy carefully. Key affirmations: (1) Scripture is without error or fault in all its teaching; (2) This includes its witness to history and claims about the universe; (3) Inerrancy is not negated by apparent inconsistencies that have yet to be resolved; (4) Inerrancy is distinct from literalism — it does not demand wooden reading of genre or phenomenological language. Key denials: we deny that inerrancy is limited to spiritual or redemptive themes."
  },
  {
    id: "apparent", title: "Apparent Contradictions", ref: "Luke 24:6-7; Matthew 28:6",
    body: "Critics frequently point to apparent contradictions in Scripture (different numbers in parallel accounts, different sequences in gospel narratives, etc.). The evangelical approach: (1) The text should be given the benefit of the doubt — a historian who finds an apparent inconsistency in an ancient document assumes there is an explanation before declaring error; (2) Many 'contradictions' dissolve on closer examination of genre, purpose, and context; (3) Remaining difficulties do not disprove inerrancy but simply remain unresolved. Gleason Archer's 'Encyclopedia of Bible Difficulties' addresses hundreds of specific cases."
  },
  {
    id: "stakes", title: "Why Inerrancy Matters", ref: "Matthew 5:18; Luke 24:44",
    body: "Jesus treated Scripture as fully authoritative and without error. In Matthew 5:18 he says 'not the smallest letter, not the least stroke of a pen, will by any means disappear from the Law.' In John 10:35 — 'the Scripture cannot be broken.' When Jesus was tempted, his response was 'It is written' — the written word as final authority. To abandon inerrancy is ultimately to claim the right to sit in judgment over Scripture rather than under it — to decide which parts are true and which are not. This places human authority above divine."
  },
];

const CANON_ITEMS = [
  {
    id: "what", title: "What Is the Canon?", ref: "Luke 24:44; 2 Peter 3:16",
    body: "Canon comes from the Greek kanon, meaning 'measuring rod' or 'rule.' The biblical canon is the collection of books recognized as having divine authority. The Protestant canon contains 66 books (39 OT, 27 NT). The Catholic canon adds 7 deuterocanonical books (the Apocrypha). The church did not create the canon — it recognized writings that already had authority. The process was a Spirit-guided discernment, not an arbitrary or political decision (contrary to popular conspiracy theories like The Da Vinci Code)."
  },
  {
    id: "ot", title: "Old Testament Canon Formation", ref: "Nehemiah 8; Matthew 23:35",
    body: "The Hebrew Bible (what Christians call the OT) was substantially fixed before the NT era. Jesus and the apostles cite OT books as Scripture throughout the NT without debate — they inherited an already-recognized canon. The final formal Jewish council on the OT canon was around 90 AD (Jamnia/Yavneh), but this ratified rather than created the canon. Jesus's reference in Matthew 23:35 to 'Abel to Zechariah' likely refers to the full sweep of the Hebrew Bible (Genesis to 2 Chronicles), confirming its boundaries."
  },
  {
    id: "nt", title: "New Testament Canon Formation", ref: "2 Peter 3:15-16; 1 Timothy 5:18",
    body: "The 27 NT books were recognized through a discernment process in the 2nd-4th centuries using criteria including: (1) Apostolic authorship or authorization; (2) Consistency with the rule of faith (core apostolic doctrine); (3) Widespread acceptance by churches. 2 Peter 3:15-16 refers to Paul's letters as 'Scripture' — showing canonization was underway within the NT era itself. The Council of Carthage (397 AD) formally affirmed the 27-book canon, not by creating it but by ratifying what was already widely accepted."
  },
  {
    id: "apocrypha", title: "The Deuterocanonical Books (Apocrypha)", ref: "Jerome's Preface to the Vulgate",
    body: "The seven deuterocanonical books (Tobit, Judith, 1-2 Maccabees, Wisdom, Sirach, Baruch) are accepted by Catholic and Orthodox Christians but rejected by Protestants. The Protestant case: (1) Jesus and the apostles never cite these books as Scripture; (2) The early church father Jerome, who translated the Vulgate, distinguished them from Hebrew Scripture; (3) They contain some theological teachings that differ from Protestant understanding (prayers for the dead, merit theology). This is a genuine ecumenical difference, not a question of Scripture's reliability."
  },
  {
    id: "rejected", title: "Books Considered and Rejected", ref: "Early church debates on Hebrews, Revelation, James",
    body: "Some books had disputed status before being accepted (Hebrews, Revelation, James, 2 Peter, 2-3 John, Jude), and some books were considered by some but rejected (Gospel of Thomas, Shepherd of Hermas, Didache, 1 Clement). The rejected books either had questionable authorship, contradicted apostolic teaching, or lacked widespread church acceptance. The Gospel of Thomas, for example, shows Gnostic influence and was composed too late (2nd century) to be apostolic. The canon closed not by arbitrary decision but by Spirit-guided consensus over time."
  },
];

const AUTHORITY_POINTS = [
  { color: PURPLE, title: "Sola Scriptura", body: "The Reformation principle: Scripture alone is the supreme norm for faith and life. It does not mean Scripture alone without tradition, reason, or experience — but Scripture as the final authority over all of them. Tradition is tested by Scripture (Acts 17:11 — the Bereans 'examined the Scriptures every day to see if what Paul said was true'). Experience is tested by Scripture. Reason interprets but does not override Scripture." },
  { color: TEAL, title: "Norma Normans", body: "The Reformers called Scripture the norma normans non normata — 'the norm that norms and is not itself normed.' Every other authority (councils, creeds, experience, reason, tradition) is subordinate to Scripture's judgment. The creeds are trustworthy because they accurately reflect Scripture. If a creed contradicted Scripture, Scripture would win. This does not make Scripture anti-traditional — it makes tradition answerable to Scripture." },
  { color: GOLD, title: "Jesus and Scripture's Authority", body: "Jesus's own use of Scripture is the most powerful argument for its authority. He appealed to it in temptation ('It is written'), in dispute ('Have you not read?'), and in teaching ('Scripture cannot be broken'). He treated OT narratives as historically reliable (Noah, Jonah, Sodom). He promised his apostles would be led into all truth by the Spirit — the ground of NT authority. If Jesus trusted Scripture, his followers have the strongest possible reason to do the same." },
  { color: BLUE, title: "Scripture and Conscience", body: "Luther's declaration at Worms (1521): 'My conscience is captive to the Word of God... unless I am convinced by Scripture and plain reason... here I stand; I cannot do otherwise.' The principle of Scripture's binding authority on conscience is not merely a Protestant distinctive — it is the foundation of any Christian claim to speak for God. When the church speaks on the basis of Scripture, it speaks with authority; when it speaks on the basis of tradition or pragmatics alone, it speaks with less." },
];

const CLARITY_POINTS = [
  { color: GREEN, title: "Perspicuity (Clarity)", body: "The Westminster Confession: 'Those things which are necessary to be known, believed, and observed, for salvation, are so clearly propounded and opened in some place of Scripture or other, that not only the learned, but the unlearned, in a due use of the ordinary means, may attain unto a sufficient understanding of them.' Perspicuity does not mean every passage is equally clear, or that there are no difficult texts (Peter says Paul writes things 'hard to understand' — 2 Peter 3:16). It means the essential message of salvation is accessible to all." },
  { color: TEAL, title: "Sufficiency", body: "Scripture contains everything necessary for salvation, faith, and Christian living. It is not that Scripture is all we need for brain surgery, car repair, or economics — but for knowing God, being saved, living righteously, and understanding the Christian life, Scripture is sufficient. This doctrine pushes back against claims that new revelation (prophecy, dreams, visions) is required for Christian living, or that the church's tradition must supplement Scripture with equal authority (the Catholic position)." },
  { color: PURPLE, title: "Accommodation", body: "Calvin's doctrine of accommodation: God in Scripture stoops to our level, speaking in human language and concepts we can understand. He accommodates himself to our capacity — not speaking as God speaks to God, but as a nurturing parent speaks to a child. This explains phenomenological language (the sun rises), anthropomorphic language (God's hand, God's face), and simplification of complex realities. Accommodation does not imply error — a parent explaining death to a five-year-old is not lying when they use simple language." },
  { color: GOLD, title: "Interpretation (Hermeneutics)", body: "Perspicuity does not mean every reader automatically understands rightly — otherwise there would be no heresies. Good interpretation requires: (1) Grammatical-historical reading — what did the text mean to its original audience?; (2) Reading in context — literary, canonical, and redemptive-historical; (3) The analogy of faith — unclear passages interpreted in light of clear ones; (4) The Holy Spirit's illumination — not new revelation but opening the eyes of the heart to what is already written." },
];

const OBJECTIONS = [
  { id: "o1", title: "\"The Bible is full of contradictions\"", body: "This claim is frequently asserted but rarely demonstrated. When specific cases are examined, most dissolve under careful analysis. Apparent contradictions usually result from: (1) Different authors emphasizing different aspects of the same event; (2) Summaries vs. extended accounts; (3) Different purposes (Matthew writes to Jews, Mark to Romans); (4) Use of round numbers or approximations. For genuine cases where resolution is not obvious, the principle is: grant the text the same benefit of the doubt you would grant any serious ancient document. No ancient historian would be dismissed on this standard." },
  { id: "o2", title: "\"The Bible was written by men, so it contains errors\"", body: "This objection assumes that human authorship implies errancy. But the doctrine of inspiration holds that God works through human authors without overriding them. The incarnation is the analogy: Jesus was fully human — he experienced hunger, fatigue, and emotion — and yet was without sin. The Bible being fully human does not entail it being errant any more than Jesus being fully human entails that he sinned. The question is not whether humans wrote it but whether God superintended what they wrote." },
  { id: "o3", title: "\"The canon was decided by politics at Nicaea\"", body: "This is a popular myth (popularized by The Da Vinci Code) with no historical basis. The Council of Nicaea (325 AD) addressed the Arian controversy (the deity of Christ) — it said nothing about the canon. The NT canon was substantially settled before Nicaea through organic church recognition over two centuries. The 27-book canon was formally affirmed at Carthage (397 AD) and Hippo (393 AD). No new 'secret gospels' were suppressed at Nicaea — they were already excluded generations earlier." },
  { id: "o4", title: "\"Science contradicts the Bible\"", body: "The alleged conflict is mostly between a literalistic reading of Genesis and a materialistic reading of evolution — not between Scripture and science per se. Different evangelical positions: (1) Young Earth Creationism — 6 literal days, recent creation; (2) Old Earth Creationism — long ages, special creation; (3) Framework interpretation — Genesis 1 as literary/theological structure; (4) Theistic evolution — evolutionary process as God's creative means. What all positions share: rejection of pure naturalism. The real conflict is metaphysical (is the universe all there is?) not empirical." },
  { id: "o5", title: "\"The Bible endorses slavery and genocide\"", body: "These are the hardest objections. Principles for response: (1) Context matters enormously — OT Israelite slavery was nothing like Trans-Atlantic chattel slavery; (2) The OT Canaanite conquest must be understood in the context of divine judgment on a culture of extreme evil, within a unique covenantal moment in redemptive history — it is not a template for Christian conduct; (3) The trajectory of Scripture moves consistently toward human dignity, culminating in Paul's 'neither slave nor free, neither male nor female' (Galatians 3:28) and Philemon; (4) These are genuine difficulties that require serious engagement, not dismissal." },
];

const VIDEOS = [
  { videoId: "4mxkMJXFqVE", title: "Why I Trust the Bible — John Piper" },
  { videoId: "R5X3GqWUOa8", title: "Is the Bible Reliable? — Tim Keller" },
  { videoId: "rcl39OkGUo4", title: "The Canon of Scripture — Michael Kruger" },
  { videoId: "L0znwgVBfUg", title: "What Is Inerrancy? — D.A. Carson" },
  { videoId: "P4C6Xtl2l9g", title: "How Do We Know the Bible Is True? — R.C. Sproul" },
];

export default function BibliologyGuide() {
  const [tab, setTab] = usePersistedState<string>("vine_biblio_tab", "overview");
  const [inspOpen, setInspOpen] = usePersistedState<string>("vine_biblio_insp", "");
  const [inerrOpen, setInerrOpen] = usePersistedState<string>("vine_biblio_inerr", "");
  const [canonOpen, setCanonOpen] = usePersistedState<string>("vine_biblio_canon", "");
  const [objOpen, setObjOpen] = usePersistedState<string>("vine_biblio_obj", "");
  const [journal, setJournal] = usePersistedState<string>("vine_biblio_journal", "");

  const card = (body: React.ReactNode) => (
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" }}>{body}</div>
  );

  const accordion = (
    items: { id: string; title: string; ref?: string; body: string }[],
    openKey: string,
    setOpen: (v: string) => void
  ) => items.map((it) => (
    <div key={it.id} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 8, overflow: "hidden" }}>
      <button
        onClick={() => setOpen(openKey === it.id ? "" : it.id)}
        style={{ width: "100%", textAlign: "left", padding: "1rem 1.25rem", background: openKey === it.id ? "rgba(212,119,6,0.08)" : "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <div>
          <span style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem" }}>{it.title}</span>
          {it.ref && <span style={{ color: MUTED, fontSize: "0.78rem", marginLeft: 12 }}>{it.ref}</span>}
        </div>
        <span style={{ color: MUTED, fontSize: "1.1rem" }}>{openKey === it.id ? "−" : "+"}</span>
      </button>
      {openKey === it.id && (
        <div style={{ padding: "0 1.25rem 1.25rem", borderTop: `1px solid ${BORDER}` }}>
          <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, marginTop: "1rem" }}>{it.body}</p>
        </div>
      )}
    </div>
  ));

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 4rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: "rgba(212,119,6,0.12)", border: `1px solid rgba(212,119,6,0.25)`, borderRadius: 20, padding: "0.35rem 1rem", fontSize: "0.78rem", color: GOLD, fontWeight: 600, marginBottom: "1rem" }}>
            SYSTEMATIC THEOLOGY · BIBLIOLOGY
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            The Doctrine of Scripture
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
            How did we get the Bible? Can we trust it? What does it mean to say the Bible is inspired, inerrant, and authoritative? Bibliology is the foundation beneath all other Christian doctrine.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1.1rem", borderRadius: 20, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", border: `1px solid ${tab === t.id ? GOLD : BORDER}`, background: tab === t.id ? "rgba(212,119,6,0.12)" : "transparent", color: tab === t.id ? GOLD : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === "overview" && (
          <div>
            <div style={{ background: "rgba(212,119,6,0.07)", border: `1px solid rgba(212,119,6,0.2)`, borderRadius: 16, padding: "1.5rem", marginBottom: "2rem" }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.75rem" }}>Why Bibliology Matters</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                Every other Christian doctrine depends on Scripture. What we know about God, Christ, salvation, the church, and the future comes to us through the Bible. If the Bible is unreliable, the entire edifice of Christian theology becomes uncertain. If it is inspired, inerrant, and authoritative, it provides the only sure foundation for knowing God and living for him.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                B.B. Warfield: <em>"The authority of Scripture is the authority of God himself speaking."</em>
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              {OVERVIEW_GRID.map((g) => (
                <div key={g.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{g.icon}</div>
                  <div style={{ fontWeight: 800, color: g.color, marginBottom: "0.4rem" }}>{g.label}</div>
                  <p style={{ color: MUTED, fontSize: "0.84rem", lineHeight: 1.6 }}>{g.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Inspiration */}
        {tab === "inspiration" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Inspiration of Scripture</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The doctrine of inspiration answers: how did God communicate his word through human authors? The evangelical answer: through a Spirit-superintended process that produced writings that are genuinely human and genuinely divine.</p>
            </div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(INSPIRATION_ITEMS, inspOpen, setInspOpen)}</div>
          </div>
        )}

        {/* Inerrancy */}
        {tab === "inerrancy" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Inerrancy of Scripture</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Inerrancy is the claim that Scripture does not err in anything it affirms. It is closely connected to inspiration — if God breathed it out, it cannot contain error. The Chicago Statement (1978) remains the definitive evangelical articulation.</p>
            </div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(INERRANCY_ITEMS, inerrOpen, setInerrOpen)}</div>
          </div>
        )}

        {/* Canon */}
        {tab === "canon" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Canon of Scripture</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>How did we get these 66 books and not others? The canon was not arbitrarily created by a council — it was organically recognized through Spirit-guided discernment over centuries.</p>
            </div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(CANON_ITEMS, canonOpen, setCanonOpen)}</div>
          </div>
        )}

        {/* Authority */}
        {tab === "authority" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Authority of Scripture</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Scripture's authority is not derived from the church's decision to accept it — the church recognized an authority that already existed. Scripture is authoritative because it is God's word, and God's word has authority over all things.</p>
            </div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {AUTHORITY_POINTS.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
                  <h3 style={{ fontWeight: 800, color: p.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Clarity */}
        {tab === "clarity" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Clarity (Perspicuity) and Sufficiency</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Two often-neglected attributes of Scripture: perspicuity (the essential message is clear enough for ordinary believers) and sufficiency (Scripture contains everything necessary for salvation and Christian living).</p>
            </div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {CLARITY_POINTS.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
                  <h3 style={{ fontWeight: 800, color: p.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Objections */}
        {tab === "objections" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Common Objections to Scripture</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Every Christian should be prepared to engage the most common objections to Scripture's reliability and authority. These objections deserve serious, honest responses — not dismissal.</p>
            </div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(OBJECTIONS, objOpen, setObjOpen)}</div>
          </div>
        )}

        {/* Journal */}
        {tab === "journal" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>What is your relationship with Scripture? Where do you have doubts about its reliability? What would it mean to truly let Scripture be your supreme authority — in theology, ethics, and daily life?</p>
              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", color: TEXT, fontSize: "0.9rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }}
              />
              {journal && <p style={{ color: GREEN, fontSize: "0.78rem", marginTop: "0.5rem" }}>Saved automatically.</p>}
            </div>)}
          </div>
        )}

        {/* Videos */}
        {tab === "videos" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Video Teaching</h2><p style={{ color: MUTED, fontSize: "0.88rem" }}>Recommended videos on the reliability, inspiration, and authority of Scripture.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
