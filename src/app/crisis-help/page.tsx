"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const ROSE = "#E11D48";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";

type Tab = "I Need Help Now" | "Mental Health Crisis" | "Domestic Violence" | "Grief and Loss" | "Spiritual Crisis" | "Supporting Others";
const TABS: Tab[] = ["I Need Help Now", "Mental Health Crisis", "Domestic Violence", "Grief and Loss", "Spiritual Crisis", "Supporting Others"];

const hotlines = [
  { name: "988 Suicide & Crisis Lifeline", number: "988", description: "Call or text 988. Available 24/7 for anyone in suicidal crisis or emotional distress.", color: ROSE },
  { name: "Crisis Text Line", number: "Text HOME to 741741", description: "Free, 24/7 crisis support via text. Connect with a trained crisis counselor.", color: BLUE },
  { name: "National Domestic Violence Hotline", number: "1-800-799-7233", description: "Call or text 24/7. Confidential support for victims of domestic violence.", color: GOLD },
  { name: "SAMHSA Helpline", number: "1-800-662-4357", description: "Free, confidential mental health and substance abuse referrals. 24/7, 365 days.", color: TEAL },
  { name: "National Alliance on Mental Illness", number: "1-800-950-6264", description: "NAMI helpline for mental health information, support, and referrals.", color: GREEN },
  { name: "Emergency Services", number: "911", description: "If you or someone else is in immediate physical danger, call 911 immediately.", color: ROSE },
];

const mentalHealthResources = [
  {
    title: "You Are Not Alone in This",
    body: "One in five adults experiences a mental health condition. Among Christians, the shame and silence surrounding mental health struggles is one of the most damaging lies the enemy uses. The Bible is full of people in deep psychological distress &mdash; David in the Psalms, Elijah under the juniper tree asking to die, Job in his anguish, Jesus in Gethsemane in anguish of soul. Mental suffering does not indicate weak faith. It indicates that you are human.",
  },
  {
    title: "What the Bible Says About Mental Suffering",
    body: "When Elijah reached the end of his rope after his greatest victory, God did not rebuke him for his depression. He sent an angel who touched him and said: &ldquo;Arise and eat, for the journey is too great for you.&rdquo; (1 Kings 19:7). God attended to his body first &mdash; food and sleep &mdash; before speaking a word of revelation. This is practical wisdom: sometimes the most spiritual thing you can do is sleep, eat, and see a doctor. God&rsquo;s care for Elijah models a holistic approach to mental health.",
  },
  {
    title: "Seeking Professional Help Is Not a Lack of Faith",
    body: "We would not tell a diabetic to stop taking insulin and just pray harder. We would not tell someone with a broken leg to simply trust God and skip the hospital. Mental illness is a physiological reality &mdash; neurological, chemical, and psychological &mdash; and it deserves the same compassionate, professional care as any physical illness. Seeking a therapist, psychiatrist, or counselor is an act of wisdom and stewardship of the life God has given you. Faith and medicine are not opposites. God often heals through means.",
  },
  {
    title: "Warning Signs to Watch For",
    body: "Take these seriously in yourself or someone you love: persistent feelings of hopelessness or worthlessness lasting more than two weeks; withdrawing from relationships, work, and activities that once brought meaning; changes in sleep (too much or too little), appetite, and energy that persist; thoughts of suicide, self-harm, or harming others; difficulty functioning in daily life; emotional numbing or the inability to feel anything. These are signals that professional care is needed &mdash; not signs of spiritual failure.",
  },
];

const domesticViolenceResources = [
  {
    title: "God Does Not Require You to Stay in an Abusive Relationship",
    body: "A deeply damaging misreading of Scripture has kept countless Christian women (and men) trapped in dangerous situations by telling them that the Bible demands they remain in marriages characterized by ongoing abuse. This is a distortion of what the Bible teaches about marriage, covenant, and love. God&rsquo;s design for marriage is mutual love, sacrifice, and honor &mdash; not domination, control, and violence. &ldquo;Husbands, love your wives as Christ loved the church and gave himself up for her.&rdquo; (Eph 5:25) Christ did not abuse the church. He died for her.",
  },
  {
    title: "Safety Planning",
    body: "If you are in a dangerous situation, please make a safety plan before you need it. This includes: identifying a safe place you can go with your children; keeping copies of important documents (ID, passports, financial records) in a safe location outside the home; memorizing key phone numbers; knowing the local shelters. The National Domestic Violence Hotline (1-800-799-7233) can help you create a personalized safety plan. Your pastor or a trusted church leader may also be a resource &mdash; but prioritize your safety first.",
  },
  {
    title: "The Church's Responsibility",
    body: "The church is called to &ldquo;speak up for those who cannot speak for themselves, for the rights of all who are destitute&rdquo; (Prov 31:8). Domestic abuse thrives in secrecy and silence. When someone discloses abuse to a pastor or church leader, the response should be: believe them, prioritize their safety, connect them with professional resources, and ensure the church is not inadvertently used as a tool to pressure victims to return to dangerous situations. Churches should have clear policies and trained personnel for responding to abuse disclosures.",
  },
];

const griefResources = [
  {
    title: "Grief Is Not the Enemy",
    body: "Jesus did not avoid grief. At the tomb of Lazarus &mdash; even knowing he was about to raise him from the dead &mdash; &ldquo;Jesus wept.&rdquo; (John 11:35). Grief is the natural, God-given response to loss. It is not a sign of weak faith. It is a sign of love. We grieve because we love. The person who has never loved deeply has never needed to grieve deeply. When the Psalms give us language for lament &mdash; &ldquo;My soul is cast down within me&rdquo; (Ps 42:6), &ldquo;Why have you forgotten me?&rdquo; (Ps 42:9) &mdash; God is not rebuking the psalmist. He is providing words for what all his children will feel.",
  },
  {
    title: "The Hope We Grieve With",
    body: "Paul tells the Thessalonians not to grieve &ldquo;as others do who have no hope.&rdquo; (1 Thess 4:13). He does not say: do not grieve. He says: grieve with hope. The Christian faith does not deny death &mdash; it defeats it. &ldquo;For the Lord himself will descend from heaven with a cry of command, with the voice of an archangel, and with the sound of the trumpet of God. And the dead in Christ will rise first.&rdquo; (1 Thess 4:16). We weep. And we weep toward a morning that is coming. Both are true at the same time.",
  },
  {
    title: "Grief Timeline",
    body: "Grief does not follow a predictable schedule. The old &ldquo;five stages&rdquo; model has been largely revised by grief researchers &mdash; grief is not linear, it does not proceed tidily from one stage to the next, and it is not &ldquo;done&rdquo; at any particular point. People often experience what is called &ldquo;grief waves&rdquo; &mdash; periods of relative calm interrupted by sudden intense waves of grief triggered by anniversaries, smells, songs, or unexpected reminders. This is normal. Grief that resurfaces after years is not a sign of spiritual failure &mdash; it is a sign of love that does not forget.",
  },
];

const spiritualCrisisResources = [
  {
    title: "Doubt Is Not the Opposite of Faith",
    body: "The opposite of faith is not doubt &mdash; it is certainty. Faith is trust in the presence of the unseen, the not-yet-fully-known, the not-yet-fully-resolved. Doubt is faith doing the hard work of wrestling. Thomas doubted and Jesus did not abandon him &mdash; he came back specifically for Thomas and said &ldquo;Do not disbelieve, but believe.&rdquo; (John 20:27). The father of the boy with the unclean spirit said &ldquo;I believe; help my unbelief!&rdquo; (Mark 9:24) &mdash; and Jesus healed his son. God does not require perfect faith. He requires the faith you have.",
  },
  {
    title: "When God Feels Absent",
    body: "Psalm 88 ends without resolution &mdash; the darkest psalm in the Psalter concludes: &ldquo;darkness is my closest friend.&rdquo; This is Scripture. God inspired these words. Which means: the experience of God&rsquo;s absence, of crying out and hearing nothing, of darkness that does not lift &mdash; is a biblical experience, not an aberrant one. The mystics called it the &ldquo;dark night of the soul.&rdquo; Martin Luther called it Anfechtung. Spurgeon, the great Victorian preacher, suffered profound depression throughout his ministry. These seasons do not indicate that God has left. They may be the precondition for a deeper encounter.",
  },
  {
    title: "Anger at God",
    body: "You are allowed to be angry at God. The Psalms are full of it. Job was angry at God. Jeremiah was angry at God. God did not condemn them for it. He honored their honesty. The only prayer God cannot work with is the prayer that isn&rsquo;t prayed &mdash; the doubt that is hidden, the anger that is suppressed into polite religious language. If you are angry at God, tell him. He is big enough. He already knows. Authentic lament is an act of faith &mdash; you are bringing your pain to the one you believe can handle it.",
  },
];

const supportingOthers = [
  { tip: "Presence over advice", detail: "The most powerful thing you can offer someone in crisis is your presence. Job's friends were at their best in the first seven days &mdash; when they sat with him in silence. Don't rush to explain or fix. Sit with." },
  { tip: "Listen to understand, not to respond", detail: "Ask open questions: 'Tell me what's happening for you.' 'How long have you been feeling this way?' 'What has that been like?' Resist the urge to immediately offer Scripture or advice. First, make the person feel heard." },
  { tip: "Take suicidal statements seriously", detail: "If someone says they are thinking of ending their life, take it seriously. Ask directly: 'Are you thinking about suicide?' Asking does not plant the idea &mdash; research consistently shows it does not. It opens the door and can be lifesaving." },
  { tip: "Connect, don't enable isolation", detail: "People in crisis often withdraw. Gently, persistently stay in contact. Send a text. Show up with food. Resistance to connection is often a symptom, not a preference. Continue reaching out even when you don't get a response." },
  { tip: "Know when to refer", detail: "You are not a professional counselor. Know the resources in your community and be ready to help someone access them. There is no failure in saying: 'I love you and I think you need more support than I can give. Will you let me help you find it?'" },
];

export default function CrisisHelpPage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("I Need Help Now");

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        {/* Emergency Banner */}
        <div style={{ background: `${ROSE}15`, borderBottom: `2px solid ${ROSE}40`, padding: "16px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ fontSize: 22 }}>🆘</div>
            <div>
              <span style={{ fontWeight: 700, color: ROSE, marginRight: 8 }}>If you are in immediate danger:</span>
              <span style={{ color: TEXT }}>Call </span>
              <span style={{ fontWeight: 800, color: TEXT, fontSize: 18 }}>911</span>
              <span style={{ color: MUTED, margin: "0 12px" }}>|</span>
              <span style={{ color: TEXT }}>Suicide &amp; Crisis Lifeline: </span>
              <span style={{ fontWeight: 800, color: TEXT, fontSize: 18 }}>988</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #0A0A1A 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "40px 24px 36px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 800, color: TEXT, lineHeight: 1.15, marginBottom: 14 }}>
              You Are Not Alone
            </h1>
            <p style={{ fontSize: 17, color: MUTED, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Whatever you are facing right now &mdash; there is help, there is hope, and you matter to God and to us. &ldquo;The Lord is close to the brokenhearted and saves those who are crushed in spirit.&rdquo; &mdash; Psalm 34:18
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, overflowX: "auto" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", gap: 0, padding: "0 24px" }}>
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ padding: "13px 18px", background: "none", border: "none", borderBottom: activeTab === tab ? `2px solid ${ROSE}` : "2px solid transparent", color: activeTab === tab ? ROSE : MUTED, fontWeight: activeTab === tab ? 700 : 400, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>
          {/* I Need Help Now */}
          {activeTab === "I Need Help Now" && (
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8 }}>Immediate Resources</h2>
              <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.6 }}>These hotlines are free, confidential, and available right now. Please reach out. You do not have to go through this alone.</p>
              <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
                {hotlines.map((h, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${h.color}40`, borderRadius: 14, padding: "20px 22px" }}>
                    <div style={{ fontSize: 12, color: h.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{h.name}</div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: TEXT, marginBottom: 10 }}>{h.number}</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{h.description}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40, background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 16, padding: "28px 32px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: GREEN, marginBottom: 12 }}>A Word from Scripture</h3>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls.&rdquo;" }} />
                <p style={{ color: GOLD, fontSize: 13 }}>Matthew 11:28-29</p>
              </div>
            </div>
          )}

          {/* Mental Health Crisis */}
          {activeTab === "Mental Health Crisis" && (
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8 }}>Mental Health Support</h2>
              <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.6 }}>Struggling with your mental health is not a spiritual failure. God cares for the whole person &mdash; mind, body, and soul.</p>
              <div style={{ display: "grid", gap: 24 }}>
                {mentalHealthResources.map((r, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: TEXT, marginBottom: 12 }}>{r.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: r.body }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Domestic Violence */}
          {activeTab === "Domestic Violence" && (
            <div>
              <div style={{ background: `${ROSE}10`, border: `1px solid ${ROSE}30`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
                <span style={{ fontWeight: 700, color: ROSE }}>If you are in immediate danger, call 911 or 1-800-799-7233 (National DV Hotline).</span>
              </div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8 }}>Domestic Violence Support</h2>
              <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.6 }}>Abuse is never the will of God. You are not trapped. There is help and there is a way out.</p>
              <div style={{ display: "grid", gap: 24 }}>
                {domesticViolenceResources.map((r, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: TEXT, marginBottom: 12 }}>{r.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: r.body }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grief and Loss */}
          {activeTab === "Grief and Loss" && (
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8 }}>Support in Grief</h2>
              <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.6 }}>You are allowed to grieve. God meets us in our loss. &ldquo;Blessed are those who mourn, for they shall be comforted.&rdquo; &mdash; Matthew 5:4</p>
              <div style={{ display: "grid", gap: 24 }}>
                {griefResources.map((r, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: TEXT, marginBottom: 12 }}>{r.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: r.body }} />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32, background: CARD, border: `1px solid ${TEAL}40`, borderRadius: 14, padding: "24px 28px" }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: TEAL, marginBottom: 12 }}>Grief Support Resources</h3>
                <ul style={{ margin: 0, padding: "0 0 0 20px", lineHeight: 2.2 }}>
                  <li><span style={{ color: TEXT }}>GriefShare (griefshare.org)</span> <span style={{ color: MUTED }}>&mdash; Faith-based grief recovery support groups nationwide</span></li>
                  <li><span style={{ color: TEXT }}>American Foundation for Suicide Prevention</span> <span style={{ color: MUTED }}>&mdash; afsp.org for loss survivors</span></li>
                  <li><span style={{ color: TEXT }}>The Compassionate Friends</span> <span style={{ color: MUTED }}>&mdash; compassionatefriends.org for bereaved parents</span></li>
                  <li><span style={{ color: TEXT }}>988 Grief Support</span> <span style={{ color: MUTED }}>&mdash; Call or text 988 for grief in crisis</span></li>
                </ul>
              </div>
            </div>
          )}

          {/* Spiritual Crisis */}
          {activeTab === "Spiritual Crisis" && (
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8 }}>When Faith Is Shaken</h2>
              <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.6 }}>Seasons of doubt and spiritual crisis are part of the life of faith. You are not alone, and this is not the end.</p>
              <div style={{ display: "grid", gap: 24 }}>
                {spiritualCrisisResources.map((r, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: TEXT, marginBottom: 12 }}>{r.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: r.body }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Supporting Others */}
          {activeTab === "Supporting Others" && (
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8 }}>How to Support Someone in Crisis</h2>
              <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.6 }}>You do not have to have all the answers. You just have to show up. Here is how to do that well.</p>
              <div style={{ display: "grid", gap: 16 }}>
                {supportingOthers.map((s, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", display: "flex", gap: 16 }}>
                    <div style={{ minWidth: 36, height: 36, borderRadius: "50%", background: `${BLUE}20`, border: `1px solid ${BLUE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: BLUE, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{i + 1}</div>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: TEXT, marginBottom: 6 }}>{s.tip}</h3>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32, background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: "24px 28px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: GREEN, marginBottom: 10 }}>A Verse for Those Who Help</h3>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Bear one another&rsquo;s burdens, and so fulfill the law of Christ.&rdquo; (Galatians 6:2). The word for &ldquo;burdens&rdquo; here (bare) refers to crushing weights &mdash; loads too heavy to carry alone. This is not general helpfulness. This is entering into someone else&rsquo;s suffering and sharing the weight. This is what the body of Christ is for." }} />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
