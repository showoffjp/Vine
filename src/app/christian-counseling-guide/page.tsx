"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const BLUE = "#3B82F6";
const RED = "#EF4444";


const TABS = [
  { id: "overview", label: "Overview" },
  { id: "models", label: "Counseling Models" },
  { id: "sufficiency", label: "Scripture & Sufficiency" },
  { id: "history", label: "Soul Care History" },
  { id: "specific", label: "Specific Struggles" },
  { id: "referral", label: "When to Refer" },
  { id: "seeker", label: "For Help-Seekers" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const MODELS = [
  {
    id: "nouthetic",
    label: "Biblical Counseling (Nouthetic / ACBC)",
    content: "Developed by Jay Adams in the 1970s, biblical counseling (also called nouthetic counseling, from the Greek noutheteō — to admonish, counsel) holds that Scripture is sufficient for all problems of living. The pastor/counselor's role is to apply biblical truth to the whole person — confronting sin, applying the gospel, and calling for repentance and obedience. The ACBC (Association of Certified Biblical Counselors) is the primary training body. Key texts: Adams' Competent to Counsel; Paul Tripp's Instruments in the Redeemer's Hands. Critics argue this approach can minimize genuine mental illness and neurobiological factors.",
  },
  {
    id: "integration",
    label: "Integration (Christian Psychology)",
    content: "The integration model holds that truth is truth wherever it is found, and that psychology can contribute valid insights that complement and are subordinated to Scripture. Proponents include Eric Johnson (Foundations for Soul Care), Mark McMinn, and the Christian Association for Psychological Studies (CAPS). Integrationists work as both Christian counselors and licensed mental health professionals, bringing psychological science into dialogue with theological commitments. Critics from the biblical counseling camp argue that secular psychology's anthropology, diagnosis, and treatment paradigms are not neutral but are shaped by unbiblical assumptions.",
  },
  {
    id: "transformational",
    label: "Christian Psychology / Soul Care",
    content: "A middle position represented by scholars like Gary Moon and the Renovaré tradition: psychology is a legitimate tool but its findings must be submitted to Scripture's authority. Emphasis on spiritual direction, the role of community, and the integration of contemplative practices alongside cognitive approaches. Soul care history (see the Soul Care History tab) provides the premodern models that predate the psychology era and offer rich resources not dependent on secular frameworks.",
  },
  {
    id: "eclectic",
    label: "Clinically-Oriented Christian Counseling",
    content: "Many Christian counselors work within established therapeutic modalities (CBT, DBT, EMDR, attachment theory, family systems) while bringing a Christian worldview to their work: praying with clients, using Scripture when appropriate, holding a Christian anthropology, and maintaining ethical standards shaped by Christian ethics. The challenge is maintaining coherent Christian commitments within professional frameworks that may be built on incompatible assumptions about human nature, sin, and the nature of healing.",
  },
];

const SUFFICIENCY_ITEMS = [
  {
    id: "s1",
    label: "The Sufficiency of Scripture for Counseling",
    content: "2 Peter 1:3 — 'His divine power has given us everything we need for a godly life' — and 2 Timothy 3:16-17 — Scripture equips the person of God for 'every good work' — are the key texts for sufficiency claims. Biblical counselors argue that these texts extend the sufficiency of Scripture to all problems of living, including what psychology calls mental disorders. The question is what 'sufficient' means: sufficient to address all spiritual need (agreed broadly) or sufficient to replace the legitimate insights of psychology and neuroscience (contested).",
  },
  {
    id: "s2",
    label: "The Limits of Sufficiency Claims",
    content: "Scripture does not describe the DSM-5 categories, explain neurobiological mechanisms of depression, or provide specific evidence-based treatment protocols. Critics of strong sufficiency claims argue that just as Scripture's silence on antibiotics doesn't mean we shouldn't use medicine, its silence on therapy doesn't mean we should refuse psychological knowledge. The question is one of category: Scripture is the supreme authority for theological and ethical questions; medicine and psychology offer empirical knowledge about the body and mind that Scripture neither claims to provide nor supersede.",
  },
  {
    id: "s3",
    label: "Common Ground",
    content: "All serious Christian counseling traditions agree: Scripture is the supreme norm for all of life; secular psychology's worldview must be critically evaluated; the gospel is central to genuine transformation; the church community is essential to healing; and reduction of complex human problems to purely biological or purely spiritual causes is an error. The debate is about degree and method, not about the authority of Scripture or the importance of the gospel.",
  },
];

const HISTORY_ITEMS = [
  { color: PURPLE, title: "Early Church: Pastors as Soul Physicians", body: "The Church Fathers routinely used the physician metaphor for pastoral care: the pastor diagnoses spiritual illness and applies scriptural medicine. Gregory the Great's Pastoral Rule (6th c.) is the most systematic early treatment — prescribing different pastoral approaches for different types of people. John Chrysostom's On the Priesthood focuses on the preacher's role in healing through the word. Soul care in the early church was inseparable from the sacraments, the preaching, and the community of faith." },
  { color: BLUE, title: "Medieval: Confession and Spiritual Direction", body: "The Fourth Lateran Council (1215) mandated annual private confession, making the confessor the primary pastoral care figure. The tradition of spiritual direction — a sustained relationship between a spiritual guide and a directee for the purpose of discerning God's movement in the soul — developed through monasticism (the Abba/Amma tradition) and Ignatian spirituality (Exercises, 1524). The confessor's role included not just pronouncing absolution but assigning penance and guiding the soul toward repentance and growth." },
  { color: GOLD, title: "Reformation: The Pastor as Counselor", body: "Luther's recovery of direct access to God through faith in Christ transformed pastoral care: confession no longer required a priest, and every believer could approach God directly. But Luther retained the Seelsorge (soul care) tradition — pastoral counsel based on Scripture and the gospel. Calvin's Geneva organized pastoral visitation; the Puritans produced a rich literature of 'cases of conscience' — addressing specific spiritual conditions with diagnostic precision and gospel application. William Perkins, Richard Baxter (The Reformed Pastor), and the Westminster Confession tradition all continued the soul care emphasis." },
  { color: TEAL, title: "Modern: Psychology's Rise and the Church's Response", body: "Freud (1890s–1930s) proposed a scientific account of the inner life that competed directly with religious explanation. By the mid-20th century, pastoral care in mainline churches had largely adopted psychological categories. The clinical pastoral education (CPE) movement trained chaplains in hospitals with explicitly therapeutic methods. In response, biblical counseling (Adams, 1970s) insisted on Scripture's sufficiency, while integrationists sought dialogue. The debate continues in evangelical seminaries and counseling programs today." },
];

const SPECIFIC_ISSUES = [
  { color: BLUE, title: "Depression and Anxiety", body: "Both biblical counselors and integrationists agree: depression and anxiety have spiritual, relational, and biological dimensions, and treatment should address all three. Spiritually: lament, honest prayer, and orienting toward hope. Relationally: community, accountability, and not isolating. Biologically: medication is not spiritually inferior — the brain is an organ; chemical imbalances respond to chemical treatment. Failure to refer for medication when warranted is poor stewardship of the body. Parallel care — counselor and psychiatrist — is often optimal." },
  { color: PURPLE, title: "Trauma and PTSD", body: "Trauma — abuse, war, accident, grief — has both psychological and spiritual dimensions. EMDR, trauma-focused CBT, and somatic approaches address the neurobiological encoding of traumatic memory; spiritual care addresses meaning, justice, forgiveness, and God's presence in the suffering. The church has often failed trauma survivors by rushing to forgiveness before safety, by minimizing the real neurological effects of trauma, and by treating PTSD symptoms as spiritual failures. Trauma-informed pastoral care requires training and humility." },
  { color: GOLD, title: "Marriage and Family", body: "Premarital counseling, marriage enrichment, and crisis counseling for troubled marriages are core pastoral care functions. Attachment theory, emotional connection (Gottman's research), and communication training are tools compatible with a Christian anthropology. Pastoral marriage care must also address the hard cases: abuse (safety first, not reconciliation before repentance and accountability), pornography addiction (accountability structures plus clinical support), and the question of biblical grounds for divorce. Know your limits; refer to specialists." },
  { color: RED, title: "Addiction and Habitual Sin", body: "Addiction involves biological conditioning, psychological patterns, and spiritual bondage — requiring biological, psychological, and spiritual intervention. The moral model (addiction as simply sin) alone leads to shame cycles that deepen addiction. The disease model alone removes moral agency and the call to repentance. A Christian integrated model: addiction is both a disorder of the body (requiring medical help) and a bondage that the Spirit can break (requiring spiritual community, accountability, and the gospel). Recovery communities — not just professional treatment — are indispensable." },
];

const REFERRAL_SIGNS = [
  { sign: "Suicidal or homicidal ideation", action: "Immediate referral to crisis services or emergency room", color: RED },
  { sign: "Severe psychiatric symptoms (psychosis, mania, severe depression)", action: "Refer to psychiatrist; coordinate care", color: RED },
  { sign: "Trauma history affecting daily function", action: "Refer to trauma-trained therapist; continue spiritual support", color: GOLD },
  { sign: "Addiction requiring detox", action: "Medical detox first; then recovery community and counseling", color: GOLD },
  { sign: "Complex family systems issues", action: "Refer to licensed marriage and family therapist", color: BLUE },
  { sign: "Eating disorders", action: "Refer to specialist; eating disorders have high mortality", color: RED },
  { sign: "Domestic abuse", action: "Safety plan first; specialized DV support; do not do couples counseling with active abuse", color: RED },
];

const SEEKER_TIPS = [
  { title: "What to Look for in a Christian Counselor", color: GREEN, body: "Theological commitments matter: look for someone who holds to biblical authority, the gospel as central to transformation, and prayer as part of the work. Also look for appropriate clinical training — credentials, supervised experience, and continuing education. A strong theological commitment without clinical competence, or clinical competence without theological grounding, are both incomplete." },
  { title: "Questions to Ask a Potential Counselor", color: BLUE, body: "How do you integrate your faith with your counseling work? What is your view of Scripture's role in counseling? Have you worked with issues like mine before? What training do you have? Are you licensed? Do you pray with clients? These questions help you assess both the counselor's professional competence and their integration of faith." },
  { title: "The Difference Between Counseling and Spiritual Direction", color: PURPLE, body: "Counseling addresses specific problems, past wounds, and behavioral patterns. Spiritual direction is an ongoing relationship focused on discerning God's movement in your soul and growing in prayer and responsiveness to the Spirit. Both are valuable; they are not the same. Many people benefit from both: a counselor for specific struggles and a spiritual director for overall formation." },
  { title: "Your Pastor Is Not Your Therapist", color: GOLD, body: "Most pastors are not trained therapists, and the relationship is different — the pastor is accountable to the congregation, not just to you. Pastors can provide excellent pastoral care, prayer, Scripture guidance, and community. Therapeutic work — processing trauma, addressing mental illness, working through behavioral patterns — typically requires a trained clinician. Using both well is wisdom, not lack of faith." },
];

const VIDEOS = [
  { videoId: "5bFivCQJ_mo", title: "Biblical Counseling Overview — Paul Tripp" },
  { videoId: "q3Y7T7TqhP4", title: "Integration of Faith and Psychology — Eric Johnson" },
  { videoId: "8jUXHpyWX5w", title: "Counseling the Anxious Person — David Murray" },
  { videoId: "XmEF3e2DVMY", title: "Trauma, Neuroscience, and the Gospel — Diane Langberg" },
  { videoId: "Ll7V7pP6nGk", title: "Soul Care Through the Ages — Gary Moon" },
];

export default function ChristianCounselingGuide() {
  const [tab, setTab] = usePersistedState<string>("vine_counsel_tab", "overview");
  const [modOpen, setModOpen] = usePersistedState<string>("vine_counsel_mod", "");
  const [sufOpen, setSufOpen] = usePersistedState<string>("vine_counsel_suf", "");
  const [journal, setJournal] = usePersistedState<string>("vine_counsel_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: TEAL + "22", color: TEAL, padding: "0.2rem 0.7rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1 }}>SOUL CARE</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.5rem" }}>Christian Counseling</h1>
        <p style={{ color: MUTED, fontSize: "1rem", marginBottom: "2rem", maxWidth: 680 }}>
          A comprehensive guide to biblical soul care — models, methods, the sufficiency of Scripture debate, specific struggles, and when to refer.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                borderColor: tab === t.id ? TEAL : BORDER, background: tab === t.id ? TEAL + "22" : "transparent", color: tab === t.id ? TEAL : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What Is Christian Counseling?</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Christian counseling is the ministry of helping people through emotional, relational, and spiritual struggles in a way shaped by Scripture, the gospel, and the presence of God. It ranges from the pastor's informal pastoral conversations to formal clinical counseling by licensed therapists who are also committed Christians. The church has always cared for souls — the question today is how to do so faithfully in light of what psychology has discovered about the mind, brain, and human behavior.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Foundation", value: "Scripture & Gospel", color: GOLD },
                { label: "Goal", value: "Transformation in Christ", color: GREEN },
                { label: "Community", value: "The Church", color: BLUE },
                { label: "Tools", value: "Word, Prayer, Skills", color: TEAL },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 12, padding: "1.2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
                  <div style={{ color: item.color, fontWeight: 700 }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 14, padding: "1.3rem", marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: TEAL, marginBottom: "0.5rem" }}>The Core Conviction</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>
                All serious Christian counseling traditions share a core conviction: the problems people bring to counseling have a spiritual dimension that secular psychology cannot adequately address. Guilt is not merely irrational self-criticism; it can reflect real moral failure requiring forgiveness. Shame is not merely negative self-attribution; it is a wound only the gospel can heal at its root. Hopelessness is not merely cognitive distortion; it may be the consequence of losing sight of resurrection hope. The gospel speaks to the depth of human need in ways that cognitive restructuring alone cannot reach.
              </p>
            </div>
          </div>
        )}

        {/* MODELS */}
        {tab === "models" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Counseling Models</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Four main approaches to Christian counseling, ranging from the most Scripture-exclusive to the most integrative of secular psychology.
            </p>
            {MODELS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${modOpen === item.id ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setModOpen(modOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{modOpen === item.id ? "−" : "+"}</span>
                </button>
                {modOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* SUFFICIENCY */}
        {tab === "sufficiency" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Scripture and the Sufficiency Debate</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The central controversy in Christian counseling: is Scripture sufficient for all problems of living, or does psychology provide legitimate complementary knowledge?
            </p>
            {SUFFICIENCY_ITEMS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${sufOpen === item.id ? GOLD : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setSufOpen(sufOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: GOLD, fontSize: "1.2rem" }}>{sufOpen === item.id ? "−" : "+"}</span>
                </button>
                {sufOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* HISTORY */}
        {tab === "history" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>History of Soul Care</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The church has been caring for souls for 2,000 years. Understanding this history reveals rich premodern resources and the context of today's debates.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {HISTORY_ITEMS.map(h => (
                <div key={h.title} style={{ background: CARD, border: `1px solid ${h.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: h.color, marginBottom: "0.5rem" }}>{h.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SPECIFIC STRUGGLES */}
        {tab === "specific" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Counseling Specific Struggles</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Common presenting issues and how Christian counseling addresses each — spiritually, relationally, and clinically.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {SPECIFIC_ISSUES.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REFERRAL */}
        {tab === "referral" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>When to Refer</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Knowing when to refer is a mark of wisdom and genuine care. These situations require professional intervention beyond pastoral or lay Christian care.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {REFERRAL_SIGNS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 12, padding: "1.1rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: item.color + "22", color: item.color, fontWeight: 800, fontSize: "0.75rem", borderRadius: 8, padding: "0.3rem 0.5rem", flexShrink: 0, textAlign: "center" }}>!</div>
                  <div>
                    <div style={{ fontWeight: 700, color: item.color, marginBottom: "0.25rem", fontSize: "0.95rem" }}>{item.sign}</div>
                    <div style={{ color: MUTED, fontSize: "0.88rem" }}>{item.action}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BLUE}44`, borderRadius: 14, padding: "1.3rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: BLUE, marginBottom: "0.5rem" }}>Building a Referral Network</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>
                Every pastor and church leader should maintain a list of trusted referral resources: licensed professional counselors, marriage and family therapists, psychiatrists, addiction specialists, and crisis centers. Vetting these relationships in advance — knowing their clinical approach, their faith commitments, and their specialty areas — means you can make warm referrals rather than cold handoffs. Coordinating ongoing pastoral care alongside clinical treatment produces better outcomes than either alone.
              </p>
            </div>
          </div>
        )}

        {/* FOR HELP-SEEKERS */}
        {tab === "seeker" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>If You Are Seeking Help</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Practical guidance for Christians looking for counseling support.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1rem" }}>
              {SEEKER_TIPS.map(tip => (
                <div key={tip.title} style={{ background: CARD, border: `1px solid ${tip.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "0.97rem", fontWeight: 700, color: tip.color, marginBottom: "0.6rem" }}>{tip.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{tip.body}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 14, padding: "1.3rem", marginTop: "1rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>Seeking Counseling Is Not Lack of Faith</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>
                A common barrier to seeking help is the belief that needing counseling represents a failure of faith or spiritual maturity. This is false. The body and the soul are deeply interconnected — trauma affects the brain, chemical imbalances affect mood, broken attachment patterns affect relationships. The person who prays and takes antidepressants is not less faithful than the one who prays alone. Using the means God has provided — community, Scripture, prayer, and skilled care — is stewardship, not failure.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Reflection Journal</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Questions for pastors, counselors, and anyone navigating their own need for soul care.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                "What is your current view of the relationship between Scripture and psychology? Has this guide challenged it in any way?",
                "Is there a struggle in your life that you have tried to address with willpower or prayer alone, without seeking skilled help?",
                "If you are a pastor or ministry leader: do you have a referral network? What would you do if someone disclosed suicidal ideation to you this week?",
                "What does it mean to you that Jesus is the 'Wonderful Counselor' (Isaiah 9:6)? How does that change how you approach your own need for care?",
              ].map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem" }}>
                  <div style={{ color: TEAL, fontWeight: 600, fontSize: "0.9rem" }}>{q}</div>
                </div>
              ))}
            </div>
            <textarea value={journal} onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here — saved locally in your browser..."
              style={{ width: "100%", minHeight: 220, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, color: TEXT, padding: "1rem", fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Video Teaching</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Teaching on Christian counseling, soul care, and specific struggles from trusted voices.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
