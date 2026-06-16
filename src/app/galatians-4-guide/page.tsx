"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Galatians4GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "oNNZO9i1Gjc", title: "Galatians 4: Heirs of the Promise" },
    { videoId: "BI4xDEjBRx0", title: "Fullness of Time -- God Sent His Son" },
    { videoId: "2HKPN9Y3Tuk", title: "Abba Father -- The Spirit of Adoption" },
    { videoId: "IVJqHPRbGMs", title: "Hagar and Sarah -- Two Covenants in Galatians 4" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "key-themes", label: "Key Themes" },
    { id: "verse-by-verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #0e0e1e 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "56px 24px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, border: `1px solid ${PURPLE}55`, borderRadius: 24, padding: "4px 16px", fontSize: 13, color: PURPLE, fontWeight: 700, marginBottom: 20, letterSpacing: "0.04em" }}>
            GALATIANS 4
          </div>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 18px", color: TEXT }}>
            Sons, Not Slaves
          </h1>
          <p style={{ fontSize: 18, color: MUTED, maxWidth: 660, margin: "0 auto 28px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "Galatians 4 is one of the most theologically rich chapters in the New Testament. Paul moves from the legal metaphor of heirship to the intimate cry of &ldquo;Abba Father,&rdquo; and then to the sweeping allegory of Hagar and Sarah &mdash; two women, two mountains, two covenants, two cities, two kinds of children." }}
          />
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "Adoption", color: PURPLE },
              { label: "Fullness of Time", color: GOLD },
              { label: "Abba Father", color: GREEN },
              { label: "Two Covenants", color: TEAL },
              { label: "Freedom", color: BLUE },
            ].map((tag) => (
              <span key={tag.label} style={{ background: `${tag.color}18`, border: `1px solid ${tag.color}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: tag.color, fontWeight: 700 }}>
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "16px 28px",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === tab.id ? `3px solid ${PURPLE}` : "3px solid transparent",
                color: activeTab === tab.id ? TEXT : MUTED,
                fontWeight: activeTab === tab.id ? 700 : 500,
                fontSize: 14,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            {/* Context card */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 32, marginBottom: 28 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>Chapter Context</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Galatians 4 sits at the theological center of Paul&rsquo;s letter to the churches of Galatia. Having spent three chapters defending his apostolic authority and establishing the doctrine of justification by faith alone, Paul now brings his argument to its emotional and theological climax. The Galatians are wavering: Jewish teachers have convinced many of them that faith in Christ is not enough &mdash; circumcision and law-keeping are also required. Paul responds not merely with argument but with anguish." }}
              />
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter opens with a compressed legal argument about minors and heirs (vv. 1&ndash;7), then becomes intensely personal as Paul pleads with the Galatians not to abandon the freedom they had embraced (vv. 8&ndash;20), and concludes with one of the most remarkable allegorical readings of the Old Testament in the entire New Testament &mdash; the story of Hagar and Sarah as two covenants (vv. 21&ndash;31)." }}
              />
            </div>

            {/* Key verse banner */}
            <div style={{ background: `linear-gradient(135deg, ${PURPLE}18 0%, ${GREEN}12 100%)`, border: `1px solid ${PURPLE}30`, borderRadius: 16, padding: 28, marginBottom: 28, textAlign: "center" }}>
              <p style={{ color: MUTED, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 12 }}>KEY VERSE &mdash; GALATIANS 4:4&ndash;5</p>
              <blockquote style={{ margin: 0, padding: 0, border: "none" }}>
                <p style={{ color: TEXT, fontSize: 19, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 12px" }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;But when the fullness of time had come, God sent forth his Son, born of woman, born under the law, to redeem those who were under the law, so that we might receive adoption as sons.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13, fontStyle: "normal", fontWeight: 700 }}>Galatians 4:4&ndash;5 (ESV)</cite>
              </blockquote>
            </div>

            {/* Structure overview */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28, marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, margin: "0 0 20px" }}>Chapter Structure</h2>
              {[
                { ref: "vv. 1&ndash;7", title: "The Heir as Child", color: PURPLE, summary: "Paul uses the Roman legal institution of guardianship: a minor heir is no different from a slave in terms of practical freedom, even though he owns everything. In the same way, God&rsquo;s people under the law were in a kind of minority. But when the fullness of time came, God sent his Son &mdash; born of woman, born under the law &mdash; to redeem those under the law and adopt them as adult sons. The evidence of adoption: God has sent the Spirit of his Son into our hearts, crying &ldquo;Abba Father.&rdquo;" },
                { ref: "vv. 8&ndash;11", title: "The Danger of Turning Back", color: ROSE, summary: "Paul turns directly to the Galatians&rsquo; situation. Formerly they did not know God and were enslaved to things that are not gods. Now &mdash; having come to know God, or rather to be known by God &mdash; how can they turn back? Paul calls the elementary principles &ldquo;weak and worthless.&rdquo; Their observance of days, months, seasons, and years fills him with fear that his labor among them may have been in vain." },
                { ref: "vv. 12&ndash;20", title: "Paul&rsquo;s Personal Appeal", color: GOLD, summary: "Paul becomes intensely personal. He reminds them of his first visit &mdash; how they received him as an angel of God, even as Christ Jesus himself, though his physical condition must have been a trial to them. He asks what happened to the blessing they then felt. He expresses bewilderment that they have turned from him to those who flatter them. His longing: &ldquo;I am in the anguish of childbirth until Christ is formed in you.&rdquo;" },
                { ref: "vv. 21&ndash;31", title: "The Allegory of Two Covenants", color: TEAL, summary: "Paul concludes with a bold allegorical reading of Genesis: Hagar the slave woman, who bore Ishmael by the flesh at Mount Sinai &mdash; corresponding to the present Jerusalem in slavery. Sarah the free woman, who bore Isaac by promise &mdash; corresponding to the Jerusalem above, the mother of all who believe. The child of the slave was born according to the flesh; the child of the free woman through promise. Conclusion: cast out the slave and her son, for the son of the slave will not inherit with the son of the free woman. We are children of the free woman." },
              ].map((section) => (
                <div key={section.ref} style={{ display: "flex", gap: 16, marginBottom: 20, paddingBottom: 20, borderBottom: `1px solid ${BORDER}` }}>
                  <div style={{ width: 90, flexShrink: 0 }}>
                    <span style={{ background: `${section.color}18`, border: `1px solid ${section.color}40`, borderRadius: 8, padding: "4px 10px", fontSize: 12, color: section.color, fontWeight: 700, whiteSpace: "nowrap" }}
                      dangerouslySetInnerHTML={{ __html: section.ref }}
                    />
                  </div>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 16, margin: "0 0 8px" }}>{section.title}</h3>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: section.summary }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Historical context */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 20, margin: "0 0 16px" }}>Historical &amp; Theological Context</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The opponents Paul is fighting in Galatians are commonly called &ldquo;Judaizers&rdquo; &mdash; Jewish Christians who insisted that Gentile converts must be circumcised and keep the Mosaic law in addition to believing in Christ. Paul sees this as a fundamental corruption of the gospel: it is not faith plus works, but faith alone in Christ alone." }}
              />
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The phrase &ldquo;fullness of time&rdquo; (Greek: <em>pleroma tou chronou</em>) reflects a Pauline theology of salvation history: God has been working through a sequence of covenants and epochs, and the coming of Christ is not accidental but the climax of a divinely orchestrated drama. The Pax Romana, the Greek language, Roman roads, the Jewish diaspora &mdash; all conspired to prepare a moment when the gospel could spread rapidly across the known world." }}
              />
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Roman adoption law is the background for Paul&rsquo;s argument in vv. 1&ndash;7. In Roman practice, adopted sons had the full legal status of natural sons, including the right of inheritance. Paul draws on this to say: God has not merely pardoned us &mdash; he has adopted us, with all the rights and status that belong to sons. The Spirit of sonship is both the evidence and the instrument of this adoption, enabling the cry &ldquo;Abba Father&rdquo; &mdash; the intimate Aramaic word Jesus used in Gethsemane (Mark 14:36)." }}
              />
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "key-themes" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 26, margin: "0 0 8px" }}>Key Themes in Galatians 4</h2>
            <p style={{ color: MUTED, fontSize: 15, margin: "0 0 32px", lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{ __html: "Five major theological currents run through this chapter, each with profound implications for Christian life and identity." }}
            />

            {[
              {
                number: "01",
                color: PURPLE,
                title: "Adoption as Sons",
                verse: "Galatians 4:5&ndash;6",
                icon: "A",
                body1: "The Greek word <em>huiothesia</em> (adoption as sons) appears only five times in the New Testament, all in Paul. It describes a legal act by which God takes those who were not his children by nature and grants them full son-status &mdash; with all the privileges and inheritance rights that implies. This is not mere forgiveness; it is a change of family and status.",
                body2: "The evidence that adoption has occurred is not merely external (legal declaration) but internal: &ldquo;God has sent the Spirit of his Son into our hearts, crying, &lsquo;Abba! Father!&rsquo;&rdquo; (4:6). The Spirit who raised Jesus from the dead now dwells in the believer&rsquo;s heart and produces the same intimacy with the Father that the Son himself enjoys. Adoption is not a metaphor for forgiveness &mdash; it is a distinct and glorious dimension of salvation.",
              },
              {
                number: "02",
                color: GOLD,
                title: "The Fullness of Time",
                verse: "Galatians 4:4",
                icon: "F",
                body1: "Paul&rsquo;s phrase &ldquo;when the fullness of time had come&rdquo; captures a theology of providential timing. God was not caught off guard by the cross &mdash; he ordained a moment in history when the conditions were precisely right. The Pax Romana provided peace and travel; Greek provided a common language; the Jewish diaspora seeded synagogues across the empire; the Hebrew Scriptures had prepared a people for the Messiah.",
                body2: "But more than historical circumstances, the fullness of time points to the completion of the covenantal sequence. The law served as a guardian (a paidagogos &mdash; Galatians 3:24) until the time of maturity arrived. When Christ came, the period of minority ended. Those who were under custodians are now sons and heirs. The arrival of Christ did not cancel what came before &mdash; it fulfilled and transcended it.",
              },
              {
                number: "03",
                color: GREEN,
                title: "Abba Father",
                verse: "Galatians 4:6",
                icon: "Ab",
                body1: "&ldquo;Abba&rdquo; is the Aramaic word for father &mdash; the word Jesus used in Gethsemane (&ldquo;Abba, Father, all things are possible for you,&rdquo; Mark 14:36). It carries connotations of intimacy and trust, though the claim that it means &ldquo;daddy&rdquo; is a scholarly overcorrection. It is the word of a child to a known and trusted father &mdash; not the formal address of a subject to a sovereign.",
                body2: "Paul says that the Spirit of God&rsquo;s Son cries this word within us. The verb <em>krazo</em> (to cry out) is strong &mdash; it suggests an urgent, earnest calling. When we pray &ldquo;Father,&rdquo; we are not generating that prayer from our own spiritual resources. The Spirit himself is praying within us (Romans 8:15&ndash;16 uses the same language). Prayer &mdash; at its deepest level &mdash; is the Spirit of adoption enabling us to relate to God as Jesus does.",
              },
              {
                number: "04",
                color: ROSE,
                title: "Weak and Worthless Elementary Principles",
                verse: "Galatians 4:9",
                icon: "W",
                body1: "The &ldquo;elementary principles of the world&rdquo; (Greek: <em>stoicheia tou kosmou</em>) is one of the most debated phrases in Galatians. Paul uses it in two contexts: first, to describe what Jews were under before Christ (4:3), and second, to describe what Gentiles were under in their paganism (4:8&ndash;9). He then warns the Galatians against turning back to these stoicheia.",
                body2: "The shocking implication: law-keeping in the post-Christ era has the same effect as idol worship. Both are forms of religion that substitute human effort or external observance for the living relationship with the Father that the Spirit produces. Paul does not call the law sinful &mdash; but he calls it inadequate for the age of the Son. To return to law-keeping as the basis of standing before God after the Son has come is to regress to spiritual childhood &mdash; worse, to voluntary slavery.",
              },
              {
                number: "05",
                color: TEAL,
                title: "The Allegory of Hagar and Sarah",
                verse: "Galatians 4:21&ndash;31",
                icon: "H",
                body1: "Paul&rsquo;s allegorical reading of Genesis (which he names as such &mdash; &ldquo;these things may be interpreted allegorically&rdquo;) does not deny the historical reality of Hagar and Sarah. Rather, he discerns in the historical narrative a divinely embedded pattern that illuminates the difference between the two covenants. Hagar corresponds to Mount Sinai, slavery, and the present Jerusalem. Sarah corresponds to the promise, freedom, and the Jerusalem above.",
                body2: "The key distinction Paul draws is flesh vs. promise. Ishmael was born &ldquo;according to the flesh&rdquo; &mdash; through the natural human means Abraham and Hagar devised when faith wavered. Isaac was born &ldquo;through promise&rdquo; &mdash; a supernatural birth from a barren womb, purely by the power of God. Paul applies this typology to the Galatian situation: those who rely on law-keeping are children of Hagar, born of flesh. Those who receive the promise by faith are children of Sarah, the free woman. &ldquo;We are not children of the slave but of the free woman&rdquo; (4:31).",
              },
            ].map((theme) => (
              <div key={theme.number} style={{ background: CARD, border: `1px solid ${theme.color}30`, borderRadius: 16, padding: 28, marginBottom: 22 }}>
                <div style={{ display: "flex", gap: 18, alignItems: "flex-start", marginBottom: 18 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${theme.color}18`, border: `2px solid ${theme.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: theme.color, fontWeight: 900, fontSize: 13, flexShrink: 0 }}>
                    {theme.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                      <span style={{ color: theme.color, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em" }}>{theme.number}</span>
                      <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 20, margin: 0 }}>{theme.title}</h3>
                      <span style={{ background: `${theme.color}18`, border: `1px solid ${theme.color}40`, borderRadius: 12, padding: "2px 12px", fontSize: 12, color: theme.color, fontWeight: 700 }}
                        dangerouslySetInnerHTML={{ __html: theme.verse }}
                      />
                    </div>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }}
                  dangerouslySetInnerHTML={{ __html: theme.body1 }}
                />
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body2 }}
                />
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse-by-verse" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 26, margin: "0 0 8px" }}>Verse by Verse</h2>
            <p style={{ color: MUTED, fontSize: 15, margin: "0 0 32px", lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{ __html: "A close reading of Galatians 4 section by section, following the flow of Paul&rsquo;s argument from legal metaphor to personal appeal to Old Testament allegory." }}
            />

            {[
              {
                ref: "Galatians 4:1&ndash;7",
                title: "The Heir as a Child Is No Different from a Slave",
                color: PURPLE,
                heading: "The Legal Argument",
                text: "Paul opens with a surprising claim: the heir &mdash; the one who will one day own everything &mdash; is, during minority, &ldquo;no different from a slave, though he is the owner of everything.&rdquo; He is under guardians and managers until the date set by his father. This is the condition of God&rsquo;s people under the law: heirs in principle, but not yet in the full experience of their inheritance.",
                detail: "Then comes the pivot: &ldquo;But when the fullness of time had come, God sent forth his Son, born of woman, born under the law, to redeem those who were under the law, so that we might receive adoption as sons&rdquo; (vv. 4&ndash;5). Three observations: (1) The Son was sent &mdash; this is not a man who became divine but the pre-existent Son entering creation. (2) He was born of woman, born under the law &mdash; fully entering the human condition and the law&rsquo;s domain, so that he could redeem from within. (3) The goal is adoption &mdash; not merely pardon but a change of status and relationship. The proof of adoption is pneumatological: &ldquo;God has sent the Spirit of his Son into our hearts, crying, &lsquo;Abba! Father!&rsquo;&rdquo; (v. 6). Therefore: &ldquo;you are no longer a slave, but a son, and if a son, then an heir through God&rdquo; (v. 7).",
              },
              {
                ref: "Galatians 4:8&ndash;11",
                title: "Formerly You Did Not Know God",
                color: ROSE,
                heading: "The Bewildering Regression",
                text: "Paul reminds the Galatians of their pre-Christian past: &ldquo;Formerly, when you did not know God, you were enslaved to those that by nature are not gods.&rdquo; The Galatians were Gentiles who had worshiped idols &mdash; they knew what slavery to non-gods felt like. Then they encountered the gospel and came to know God &mdash; or rather, to be known by God (the passive is significant: salvation is primarily God&rsquo;s knowing of us, not our achieving of knowledge).",
                detail: "Against this background, Paul&rsquo;s question is devastating: &ldquo;How can you turn back again to the weak and worthless elementary principles of the world, whose slaves you want to be once more?&rdquo; (v. 9). The &ldquo;elementary principles&rdquo; in the Galatian context are the requirements the Judaizers are imposing: circumcision, calendar observance, dietary laws. Paul equates these &mdash; when used as the basis for acceptance before God &mdash; with the idol worship the Galatians had left. Both are forms of religion that substitute human performance for the grace of God. &ldquo;You observe days and months and seasons and years! I am afraid I may have labored over you in vain&rdquo; (vv. 10&ndash;11). The anguish in these words is not abstract &mdash; Paul invested his life in these people.",
              },
              {
                ref: "Galatians 4:12&ndash;20",
                title: "Become as I Am, Brothers",
                color: GOLD,
                heading: "The Anguish of a Spiritual Parent",
                text: "This is among the most personal passages in Paul&rsquo;s letters. He begins with a striking appeal: &ldquo;Brothers, I entreat you, become as I am, for I also have become as you are.&rdquo; Paul became like a Gentile &mdash; free from the law &mdash; in order to preach to them; now he asks them to become like him, free from the law in the same way.",
                detail: "He recalls his first visit: he came to them in bodily weakness (probably a physical ailment &mdash; perhaps the &ldquo;thorn in the flesh&rdquo;, or an eye condition &mdash; Galatians 6:11 mentions &ldquo;large letters&rdquo;), yet they received him as an angel of God, even as Christ Jesus himself. They would have torn out their eyes and given them to him. What has happened to that blessing? The agitators now flatter them, but not for good &mdash; they want to exclude them so that the Galatians will be dependent on their teachers. Paul&rsquo;s longing is expressed in the remarkable image of childbirth: &ldquo;my little children, for whom I am again in the anguish of childbirth until Christ is formed in you!&rdquo; (v. 19). The goal of Paul&rsquo;s ministry is not doctrinal correctness alone but the formation of Christ&rsquo;s character in his people.",
              },
              {
                ref: "Galatians 4:21&ndash;31",
                title: "Tell Me, You Who Desire to Be Under the Law",
                color: TEAL,
                heading: "The Allegory of the Two Covenants",
                text: "Paul turns the Judaizers&rsquo; own argument against them: &ldquo;Tell me, you who desire to be under the law, do you not listen to the law?&rdquo; He then reads the story of Hagar and Sarah &mdash; found in Genesis 16 and 21 &mdash; as an allegory of two covenants. Hagar is a slave woman; her son Ishmael was born &ldquo;according to the flesh,&rdquo; by the natural effort of Abraham and Hagar. Sarah is a free woman; her son Isaac was born &ldquo;through promise,&rdquo; supernaturally, when Sarah&rsquo;s womb was long past hope.",
                detail: "Paul maps these onto mountains, cities, and covenants: Hagar corresponds to Mount Sinai (the law), which &ldquo;bears children for slavery&rdquo; and corresponds to &ldquo;the present Jerusalem&rdquo; (under Roman occupation, under law). Sarah corresponds to the Jerusalem above, which &ldquo;is free, and she is our mother&rdquo; (v. 26). Paul then quotes Isaiah 54:1 &mdash; the barren woman who suddenly has more children than the woman with a husband &mdash; as a prophecy of the Spirit-born community of the new covenant. The child born of the flesh persecuted the child born of the Spirit (Ishmael mocking Isaac, Genesis 21:9). This is the Galatian situation: the Judaizers are persecuting those born of the Spirit. The conclusion Paul reaches from Genesis: &ldquo;Cast out the slave woman and her son, for the son of the slave woman shall not inherit with the son of the free woman&rdquo; (v. 30). &ldquo;We are not children of the slave but of the free woman&rdquo; (v. 31).",
              },
            ].map((section) => (
              <div key={section.ref} style={{ background: CARD, border: `1px solid ${section.color}30`, borderRadius: 16, marginBottom: 24, overflow: "hidden" }}>
                <div style={{ background: `${section.color}12`, borderBottom: `1px solid ${section.color}25`, padding: "18px 28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                    <span style={{ background: `${section.color}22`, border: `1px solid ${section.color}50`, borderRadius: 8, padding: "4px 12px", fontSize: 13, color: section.color, fontWeight: 800 }}
                      dangerouslySetInnerHTML={{ __html: section.ref }}
                    />
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, margin: 0 }}>{section.title}</h3>
                  </div>
                </div>
                <div style={{ padding: 28 }}>
                  <div style={{ color: section.color, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>{section.heading}</div>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                    dangerouslySetInnerHTML={{ __html: section.text }}
                  />
                  <div style={{ background: BG, borderRadius: 10, padding: 20, borderLeft: `4px solid ${section.color}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: section.detail }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 26, margin: "0 0 8px" }}>Application</h2>
            <p style={{ color: MUTED, fontSize: 15, margin: "0 0 32px", lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{ __html: "Galatians 4 is not only a theological argument but a pastoral summons to live in the freedom that Christ has won. Here is how the chapter&rsquo;s themes cash out in daily Christian life." }}
            />

            {/* Application cards */}
            {[
              {
                color: PURPLE,
                number: "1",
                title: "Live in the Freedom of Adoption, Not the Slavery of Law-Keeping",
                question: "Am I relating to God as a Father or as a judge I must satisfy?",
                body: "The Galatians had experienced the freedom of the gospel and then allowed teachers to take it from them. Paul&rsquo;s word to them &mdash; and to us &mdash; is simple: you are a son, not a slave. A slave works to earn acceptance. A son works from acceptance. If your spiritual life is primarily about achieving a threshold of behavior that earns God&rsquo;s approval, you are living as a slave even if you are legally a son. The Spirit in you is crying &ldquo;Abba Father&rdquo; &mdash; not &ldquo;I hope I have done enough today.&rdquo;",
                practice: "Each morning, before anything else, say aloud: &ldquo;I am a child of God, not because of what I have done but because of what Christ has done. I come to my Father today as a son, not as a supplicant.&rdquo; Then bring your actual day &mdash; its failures and its hopes &mdash; to the Father in that posture.",
              },
              {
                color: GREEN,
                number: "2",
                title: "Call on God as Abba Father",
                question: "Do I actually pray with the intimacy the Spirit makes possible?",
                body: "The cry &ldquo;Abba Father&rdquo; is not a formula to add to your prayers but a posture to bring to all of them. It means coming to God as your Father &mdash; known, trusted, close &mdash; not as a distant deity you must impress with correct vocabulary. The Spirit of the Son has been sent into your heart for this purpose. When prayer feels distant or formal, it is often because we have forgotten who we are: adopted children whose Father delights to hear from them.",
                practice: "For one week, begin every prayer simply with the word &ldquo;Father&rdquo; &mdash; and pause for five seconds before saying anything else. Let the reality of that relationship land before the requests begin. You are not petitioning a stranger. You are speaking to the one who sent his Son to make you his child.",
              },
              {
                color: TEAL,
                number: "3",
                title: "Recognize the Two Covenants",
                question: "Is my Christian life operating on the Sinai model or the promise model?",
                body: "Paul&rsquo;s allegory of Hagar and Sarah is not merely historical or academic. He draws it precisely because it maps onto real patterns of Christian experience. The Hagar pattern: religion based on human effort, external compliance, and law-keeping as the basis for standing before God. The Sarah pattern: life received as promise, produced by the Spirit, rooted in what God has done in Christ rather than what you do for God. Every Christian is tempted toward the Hagar pattern. It feels responsible. It feels devout. But it is slavery masquerading as devotion.",
                practice: "Examine your motivations for spiritual disciplines this week. Do you pray because you will feel guilty if you don&rsquo;t, or because the Father is worth speaking to? Do you give because it buys goodwill, or because you are a son responding to the generosity of your Father? The question is not what you do but why &mdash; which covenant is operating beneath the surface?",
              },
              {
                color: ROSE,
                number: "4",
                title: "Guard Against Returning to Religious Performance",
                question: "What &lsquo;elementary principles&rsquo; am I tempted to add to Christ?",
                body: "Paul&rsquo;s warning about the &ldquo;weak and worthless elementary principles&rdquo; is not only about first-century Judaism. The Galatian temptation reappears in every generation. It is the temptation to turn the gospel into a religious system &mdash; to add to &ldquo;Christ alone&rdquo; some set of behaviors, affiliations, practices, or identities that become the real basis for standing before God and other Christians. The markers change; the structure remains the same.",
                practice: "Ask yourself honestly: is there anything I am quietly adding to Christ as the basis of my acceptance before God? A political identity? A theological tradition? A record of spiritual disciplines? A reputation for orthodoxy? None of these are wrong in themselves &mdash; but when they become the ground of your standing, you have slipped from the Sarah covenant to the Hagar covenant. Return to the simplicity of faith in Christ alone.",
              },
              {
                color: GOLD,
                number: "5",
                title: "Let the Fullness of Time Shape Your View of History",
                question: "Do I see the suffering and waiting of life in light of God&rsquo;s timing?",
                body: "The &ldquo;fullness of time&rdquo; is not only a statement about the first century. It is a statement about the character of God&rsquo;s action in history: he acts at the right time, not at our preferred time. The centuries Israel waited for the Messiah were not divine delay but divine preparation. The suffering you are experiencing now is not God&rsquo;s inattention &mdash; it is the not-yet of the fullness that is coming. Paul himself wrote Galatians from experience: he came to the Galatians &ldquo;in bodily weakness&rdquo; (4:13) &mdash; yet God was working through that weakness to establish a community of sons.",
                practice: "Where are you waiting for God&rsquo;s timing to arrive? Write down the situation, and then write this sentence beneath it: &ldquo;When the fullness of time comes, God will send forth his provision, just as he sent forth his Son at the right moment. I trust his timing more than my own.&rdquo;",
              },
            ].map((card) => (
              <div key={card.number} style={{ background: CARD, border: `1px solid ${card.color}30`, borderRadius: 16, marginBottom: 22, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 18, padding: "24px 28px 0" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${card.color}18`, border: `2px solid ${card.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: card.color, fontWeight: 900, fontSize: 16, flexShrink: 0 }}>
                    {card.number}
                  </div>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 6px" }}>{card.title}</h3>
                    <p style={{ color: card.color, fontSize: 13, fontStyle: "italic", margin: 0, fontWeight: 600 }}
                      dangerouslySetInnerHTML={{ __html: card.question }}
                    />
                  </div>
                </div>
                <div style={{ padding: "18px 28px" }}>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 18px" }}
                    dangerouslySetInnerHTML={{ __html: card.body }}
                  />
                  <div style={{ background: `${card.color}0d`, border: `1px solid ${card.color}25`, borderRadius: 10, padding: "14px 18px" }}>
                    <div style={{ color: card.color, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 8 }}>PRACTICE</div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: card.practice }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Closing reflection */}
            <div style={{ background: `linear-gradient(135deg, ${PURPLE}12 0%, ${GREEN}0d 100%)`, border: `1px solid ${PURPLE}30`, borderRadius: 16, padding: 32, marginTop: 12, textAlign: "center" }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 20, margin: "0 0 14px" }}>The Freedom Paul Defends</h3>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}
                dangerouslySetInnerHTML={{ __html: "Galatians 4 is Paul&rsquo;s anguished defense of a freedom more precious than any political liberty &mdash; the freedom of the sons and daughters of God to approach their Father not on the basis of their performance but on the basis of his grace. To return to law-keeping as the ground of acceptance is not merely theological error; it is ingratitude for the most costly gift ever given. &ldquo;We are not children of the slave but of the free woman&rdquo; (4:31). Live accordingly." }}
              />
            </div>
          </div>
        )}

        {/* VIDEO SECTION - always visible below tabs */}
        <div style={{ marginTop: 60, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, margin: "0 0 8px" }}>Teaching Videos on Galatians 4</h2>
          <p style={{ color: MUTED, fontSize: 15, margin: "0 0 28px", lineHeight: 1.6 }}
            dangerouslySetInnerHTML={{ __html: "Video teachings exploring the heirs, the adoption, the anguish of Paul, and the allegory of the two covenants." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 15, margin: "0 0 4px", lineHeight: 1.4 }}>{item.title}</h4>
                  <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>Galatians 4 Teaching</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scripture memory section */}
        <div style={{ marginTop: 48, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 32 }}>
          <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 20, margin: "0 0 20px" }}>Verses Worth Memorizing</h2>
          {[
            { ref: "Galatians 4:4&ndash;5", text: "&ldquo;But when the fullness of time had come, God sent forth his Son, born of woman, born under the law, to redeem those who were under the law, so that we might receive adoption as sons.&rdquo;" },
            { ref: "Galatians 4:6", text: "&ldquo;And because you are sons, God has sent the Spirit of his Son into our hearts, crying, &lsquo;Abba! Father!&rsquo;&rdquo;" },
            { ref: "Galatians 4:7", text: "&ldquo;So you are no longer a slave, but a son, and if a son, then an heir through God.&rdquo;" },
            { ref: "Galatians 4:26", text: "&ldquo;But the Jerusalem above is free, and she is our mother.&rdquo;" },
            { ref: "Galatians 4:31", text: "&ldquo;So, brothers, we are not children of the slave but of the free woman.&rdquo;" },
          ].map((verse) => (
            <div key={verse.ref} style={{ borderBottom: `1px solid ${BORDER}`, padding: "16px 0" }}>
              <div style={{ color: GOLD, fontSize: 12, fontWeight: 700, marginBottom: 6 }}
                dangerouslySetInnerHTML={{ __html: verse.ref }}
              />
              <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: verse.text }}
              />
            </div>
          ))}
        </div>

        {/* Cross-references */}
        <div style={{ marginTop: 28, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
          <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 20, margin: "0 0 16px" }}>Key Cross-References</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {[
              { ref: "Romans 8:14&ndash;17", note: "The Spirit of adoption &mdash; we cry &lsquo;Abba Father&rsquo; and are co-heirs with Christ" },
              { ref: "Genesis 16 &amp; 21", note: "The Hagar and Sarah narrative that Paul reads as allegory" },
              { ref: "Isaiah 54:1", note: "The barren woman who has more children &mdash; quoted in Galatians 4:27" },
              { ref: "Mark 14:36", note: "Jesus cries &lsquo;Abba Father&rsquo; in Gethsemane &mdash; the prayer the Spirit produces in us" },
              { ref: "John 1:12&ndash;13", note: "Those who receive Christ receive the right to become children of God" },
              { ref: "Ephesians 1:5", note: "God predestined us for adoption through Jesus Christ" },
            ].map((xref) => (
              <div key={xref.ref} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 14px" }}>
                <div style={{ color: BLUE, fontWeight: 700, fontSize: 13, marginBottom: 4 }}
                  dangerouslySetInnerHTML={{ __html: xref.ref }}
                />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: xref.note }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
