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

export default function Galatians6GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "1hLzX3GSRMU", title: "Galatians 6: The Law of Christ and Bearing Burdens" },
    { videoId: "xW0kBq4XCVE", title: "Sowing and Reaping -- Galatians 6:7-10 Explained" },
    { videoId: "vZxLn5mU7pI", title: "The Cross as Our Only Boast -- Galatians 6:14" },
    { videoId: "kmQ4RbHXoFI", title: "Doing Good and Not Growing Weary -- Galatians 6" },
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
      <div style={{ background: `linear-gradient(160deg, #0c0e1a 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "56px 24px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GREEN}22`, border: `1px solid ${GREEN}55`, borderRadius: 24, padding: "4px 16px", fontSize: 13, color: GREEN, fontWeight: 700, marginBottom: 20, letterSpacing: "0.04em" }}>
            GALATIANS 6
          </div>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 18px", color: TEXT }}>
            The Law of Christ
          </h1>
          <p style={{ fontSize: 18, color: MUTED, maxWidth: 660, margin: "0 auto 28px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "Galatians 6 is Paul&rsquo;s practical conclusion to his letter on freedom and the law. Having dismantled the Judaizers&rsquo; gospel-distortion in chapters 1&ndash;5, Paul now describes what life in the Spirit looks like in the community of the free &mdash; gentle restoration, burden-bearing, generous sowing, and a boast fixed entirely on the cross." }}
          />
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "Gentle Restoration", color: GREEN },
              { label: "Burden-Bearing", color: BLUE },
              { label: "Sowing &amp; Reaping", color: GOLD },
              { label: "The Cross", color: ROSE },
              { label: "Law of Christ", color: PURPLE },
            ].map((tag) => (
              <span key={tag.label} style={{ background: `${tag.color}18`, border: `1px solid ${tag.color}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: tag.color, fontWeight: 700 }}
                dangerouslySetInnerHTML={{ __html: tag.label }}
              />
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
                borderBottom: activeTab === tab.id ? `3px solid ${GREEN}` : "3px solid transparent",
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
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>The Conclusion of the Epistle</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Galatians 6 brings Paul&rsquo;s passionate letter to its practical conclusion. The epistle began with a thunderbolt &mdash; &ldquo;If anyone preaches a gospel contrary to the one you received, let him be accursed&rdquo; (1:8) &mdash; and spent five chapters defending the gospel of grace against those who would add law-keeping to faith. Now Paul describes what that freedom actually produces in community life." }}
              />
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The controlling framework for the entire chapter is what Paul calls &ldquo;the law of Christ&rdquo; (v. 2) &mdash; a phrase that deliberately echoes the Mosaic law but transcends it. The law of Christ is not a legal code but the pattern of life shaped by Christ himself: the gentle reception of the fallen, the bearing of one another&rsquo;s burdens, the generous sowing in the Spirit, and the radical renunciation of all boasting except in the cross. Freedom from the law does not produce lawlessness &mdash; it produces something better than law can ever produce." }}
              />
            </div>

            {/* Key verse banner */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}18 0%, ${GOLD}12 100%)`, border: `1px solid ${GREEN}30`, borderRadius: 16, padding: 28, marginBottom: 28, textAlign: "center" }}>
              <p style={{ color: MUTED, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 12 }}>KEY VERSE &mdash; GALATIANS 6:14</p>
              <blockquote style={{ margin: 0, padding: 0, border: "none" }}>
                <p style={{ color: TEXT, fontSize: 19, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 12px" }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;But far be it from me to boast except in the cross of our Lord Jesus Christ, by which the world has been crucified to me, and I to the world.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13, fontStyle: "normal", fontWeight: 700 }}>Galatians 6:14 (ESV)</cite>
              </blockquote>
            </div>

            {/* Structure overview */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28, marginBottom: 28 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 20, margin: "0 0 20px" }}>Chapter Structure</h2>
              {[
                { ref: "vv. 1&ndash;5", title: "Gentle Restoration and Burden-Bearing", color: GREEN, summary: "If anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness. Keep watch on yourself, lest you too be tempted. Bear one another&rsquo;s burdens, and so fulfill the law of Christ. Paul introduces the key tension between bearing each other&rsquo;s burdens (v. 2) and each one bearing his own load (v. 5) &mdash; not a contradiction but two different kinds of weight." },
                { ref: "vv. 6&ndash;10", title: "Sowing and Reaping", color: GOLD, summary: "Let the one who is taught the word share all good things with the one who teaches. Do not be deceived: God is not mocked. Whatever a man sows, that will he also reap. The one who sows to his own flesh will from the flesh reap corruption, but the one who sows to the Spirit will from the Spirit reap eternal life. Do not grow weary in doing good, for in due season we will reap, if we do not give up." },
                { ref: "vv. 11&ndash;15", title: "Paul&rsquo;s Autograph and the True Gospel", color: ROSE, summary: "Paul takes the pen from his amanuensis and writes in large letters: those who are compelling circumcision want to make a good showing in the flesh. They do not want to be persecuted for the cross. Paul&rsquo;s counterboast: &ldquo;Far be it from me to boast except in the cross of our Lord Jesus Christ, by which the world has been crucified to me, and I to the world.&rdquo; Neither circumcision nor uncircumcision counts for anything &mdash; but a new creation." },
                { ref: "vv. 16&ndash;18", title: "Benediction and Paul&rsquo;s Signature", color: PURPLE, summary: "Peace and mercy on all who walk by this rule &mdash; and on the Israel of God. Let no one cause me trouble, for I bear on my body the marks (stigmata) of Jesus. The grace of our Lord Jesus Christ be with your spirit, brothers. Amen. Paul&rsquo;s closing is unusually abrupt &mdash; the wounds on his body from beatings, stonings, and chains are his credentials, not circumcision." },
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

            {/* Historical-literary context */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 20, margin: "0 0 16px" }}>Literary and Historical Context</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Ancient letters typically closed with a brief farewell. Galatians 6 is not a typical closing. Paul uses it to crystallize the letter&rsquo;s argument in three sharp movements: community ethics flowing from the Spirit (vv. 1&ndash;10), a personal postscript attacking the Judaizers one final time (vv. 11&ndash;15), and a benediction that identifies the community defined by the cross (vv. 16&ndash;18)." }}
              />
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The mention of &ldquo;large letters&rdquo; (v. 11) almost certainly means Paul took the stylus from his secretary and wrote the final section in his own hand &mdash; a mark of personal urgency and authentication. The &ldquo;marks of Jesus&rdquo; (v. 17) &mdash; Greek <em>stigmata</em> &mdash; likely refers to the physical scars Paul carried from beatings and stonings in service of the gospel (2 Corinthians 11:23&ndash;27). These are his true &ldquo;circumcision&rdquo; &mdash; the bodily marks of authentic apostolic ministry, far more convincing than any surgical sign." }}
              />
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The &ldquo;Israel of God&rdquo; (v. 16) is one of the most debated phrases in the letter. Paul almost certainly refers to the community &mdash; Jewish and Gentile together &mdash; that believes in Christ and walks by the rule he has just articulated: that neither circumcision nor uncircumcision counts for anything, but new creation. This is the true Israel, defined not by ethnic descent or law-keeping but by new-covenant belonging to God through Christ." }}
              />
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "key-themes" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 26, margin: "0 0 8px" }}>Key Themes in Galatians 6</h2>
            <p style={{ color: MUTED, fontSize: 15, margin: "0 0 32px", lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{ __html: "Six major themes emerge from this concluding chapter, each showing what genuine freedom in the Spirit produces in practice." }}
            />

            {[
              {
                number: "01",
                color: GREEN,
                title: "Restoring the Fallen in Gentleness",
                verse: "Galatians 6:1",
                icon: "R",
                body1: "Paul opens with a situational instruction that has profound implications for church culture: &ldquo;If anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness. Keep watch on yourself, lest you too be tempted.&rdquo; The word translated &ldquo;restore&rdquo; (Greek: <em>katartizo</em>) is a medical term for setting a dislocated bone back in place. It implies a return to proper function, not a punitive response.",
                body2: "Two guardrails bracket the command: (1) It is &ldquo;you who are spiritual&rdquo; who should restore &mdash; not the self-righteous, but those walking in the fruit of the Spirit described in Galatians 5:22&ndash;23, particularly gentleness (Greek: <em>prautes</em>). (2) &ldquo;Keep watch on yourself, lest you too be tempted&rdquo; &mdash; the restorer must approach in genuine humility, aware of their own vulnerability to the same sin. Community is meant to be a place of repair, not a place of shame.",
              },
              {
                number: "02",
                color: BLUE,
                title: "Bearing One Another&rsquo;s Burdens",
                verse: "Galatians 6:2",
                icon: "B",
                body1: "&ldquo;Bear one another&rsquo;s burdens, and so fulfill the law of Christ.&rdquo; The word &ldquo;burden&rdquo; here (Greek: <em>baros</em>) refers to a heavy weight &mdash; the crushing loads that individuals cannot carry alone. Paul calls mutual burden-bearing the fulfillment of &ldquo;the law of Christ&rdquo; &mdash; a striking phrase that deliberately echoes the Mosaic law while pointing beyond it. The law of Christ is not a legal code but the pattern of life Jesus modeled: &ldquo;Love one another as I have loved you&rdquo; (John 13:34).",
                body2: "This is in apparent tension with v. 5: &ldquo;each will have to bear his own load.&rdquo; But the Greek words differ: in v. 5, the word is <em>phortion</em> &mdash; a light pack, the personal responsibility each person carries for their own choices and calling. Paul is not contradicting himself: there are weights too heavy for one person that the community must share, and there are personal responsibilities that cannot be delegated. Wisdom lies in distinguishing which is which.",
              },
              {
                number: "03",
                color: GOLD,
                title: "The Law of Sowing and Reaping",
                verse: "Galatians 6:7&ndash;8",
                icon: "S",
                body1: "&ldquo;Do not be deceived: God is not mocked, for whatever one sows, that will he also reap. For the one who sows to his own flesh will from the flesh reap corruption, but the one who sows to the Spirit will from the Spirit reap eternal life.&rdquo; This is one of Paul&rsquo;s most memorable agricultural metaphors, and it operates at multiple levels. At the immediate level, it concerns generosity: the context of vv. 6&ndash;10 is supporting those who teach the word.",
                body2: "At a deeper level, Paul is describing a universal moral law embedded in creation. Sowing to the flesh means investing your time, energy, resources, and attention in things that feed your selfish nature &mdash; not simply physical desires but the whole orientation of life toward self rather than God. Sowing to the Spirit means the opposite: directing those same investments toward what the Spirit is producing in you and around you. The harvest is proportional to the sowing &mdash; not immediately, but inevitably. &ldquo;In due season we will reap, if we do not give up&rdquo; (v. 9).",
              },
              {
                number: "04",
                color: TEAL,
                title: "Doing Good to the Household of Faith",
                verse: "Galatians 6:9&ndash;10",
                icon: "D",
                body1: "&ldquo;Let us not grow weary in doing good, for in due season we will reap, if we do not give up. So then, as we have opportunity, let us do good to everyone, and especially to those who are of the household of faith.&rdquo; The phrase &ldquo;do not grow weary&rdquo; (Greek: <em>me enkakomen</em>) addresses a universal temptation: the exhaustion that comes from sustained generosity in a world that does not always respond with gratitude.",
                body2: "Paul&rsquo;s antidote to weariness is eschatological: the harvest is coming. &ldquo;In due season&rdquo; is a farming idiom &mdash; seed planted in spring is not harvested in spring. The farmer does not dig up the seed to check its progress; he trusts the process. Similarly, acts of faithfulness whose fruit is not immediately visible are not wasted &mdash; they are germinating. The household of faith is given priority not because outsiders do not matter but because the community of the Spirit is the primary arena for the new-creation life Paul has been describing.",
              },
              {
                number: "05",
                color: ROSE,
                title: "The Cross as the Only Boast",
                verse: "Galatians 6:14",
                icon: "C",
                body1: "&ldquo;But far be it from me to boast except in the cross of our Lord Jesus Christ, by which the world has been crucified to me, and I to the world.&rdquo; Paul&rsquo;s opponents boast in circumcision &mdash; an external, visible mark that signals belonging and achievement. Paul&rsquo;s counterboast is deliberately absurd by first-century standards: he boasts in an instrument of execution, the mark of a criminal. The cross was the most shameful way to die in the Roman world.",
                body2: "But Paul is not speaking metaphorically. He means that the cross of Christ is the only event in history that has the right to determine his identity, his values, and his standing before God. By the cross, the world &mdash; with all its systems of boasting, achievement, and status &mdash; has been put to death in his reckoning. And he has been put to death in the world&rsquo;s reckoning &mdash; he has no worldly status to protect or leverage. This mutual crucifixion means Paul is free. He needs nothing the world offers. He fears nothing the world threatens. The cross has cut every tie that would make worldly approval necessary.",
              },
              {
                number: "06",
                color: PURPLE,
                title: "New Creation",
                verse: "Galatians 6:15",
                icon: "N",
                body1: "&ldquo;For neither circumcision counts for anything, nor uncircumcision, but a new creation.&rdquo; This single sentence is the theological capstone of Galatians. The entire dispute about circumcision &mdash; which has consumed five and a half chapters &mdash; is rendered irrelevant by a single criterion: new creation. The question is not whether you are circumcised or uncircumcised, Jew or Gentile, under law or free from law. The question is whether you are part of the new creation that God is making through the death and resurrection of his Son.",
                body2: "New creation language (rooted in Isaiah 65:17&ndash;25 and 2 Corinthians 5:17) points to the eschatological reality that has already broken into the present in Christ. Those who are in Christ are already new-creation people &mdash; not fully glorified yet, but genuinely transformed, genuinely belonging to the age that is coming. This is what Paul has been defending throughout Galatians: not a doctrine of justification as an abstract theological proposition, but the lived reality of people who are being re-made by the Spirit into the image of the Son.",
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
                      <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 20, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: theme.title }}
                      />
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
              dangerouslySetInnerHTML={{ __html: "A close reading of Galatians 6 section by section, following Paul from the ethics of the Spirit-community through the agricultural law of sowing to his climactic boast in the cross." }}
            />

            {[
              {
                ref: "Galatians 6:1&ndash;5",
                title: "Restore in Gentleness; Bear Each Other&rsquo;s Burdens",
                color: GREEN,
                heading: "The Ethics of the Spirit-Community",
                text: "Paul opens with a conditional: &ldquo;If anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness.&rdquo; The passive &ldquo;is caught&rdquo; (Greek: <em>prolemphthenai</em>) may suggest someone overtaken by sin almost before they realized what was happening &mdash; not premeditated rebellion but the kind of stumbling that results from weakness and temptation. The response called for is restoration, not punishment, and not exposure.",
                detail: "The instruction presupposes a community close enough to notice one another&rsquo;s sin and brave enough to address it &mdash; but the manner is entirely determined by gentleness. &ldquo;Keep watch on yourself, lest you too be tempted&rdquo; is not only a warning against pride; it is a prompt for empathy. The restorer who has honestly assessed their own susceptibility will be gentle toward the one who has fallen. &ldquo;Bear one another&rsquo;s burdens, and so fulfill the law of Christ&rdquo; (v. 2) extends this into the whole pattern of community life. Then Paul adds the paradox of v. 5: each person will give an account for their own actions &mdash; so self-deception about your own spiritual state is dangerous. The community bears shared burdens; individuals bear personal responsibility. Both are necessary.",
              },
              {
                ref: "Galatians 6:6&ndash;10",
                title: "Do Not Be Deceived: God Is Not Mocked",
                color: GOLD,
                heading: "Sowing to the Spirit; Not Growing Weary",
                text: "Verse 6 addresses a specific obligation: &ldquo;Let the one who is taught the word share all good things with the one who teaches.&rdquo; This is an early instance of what became the principle of financial support for Christian teachers &mdash; those who invest in your spiritual formation deserve practical support. Paul then uses this as a launching point for the broader agricultural metaphor: &ldquo;Do not be deceived: God is not mocked, for whatever one sows, that will he also reap&rdquo; (v. 7).",
                detail: "The logic of the harvest is presented as axiomatic &mdash; as obvious and reliable as the natural order God has built into creation. Sowing to the flesh yields corruption; sowing to the Spirit yields eternal life. These are not hypothetical; they are the trajectory built into the choices you make each day. Verse 9 addresses the primary obstacle to faithful sowing: weariness. &ldquo;Let us not grow weary in doing good, for in due season we will reap, if we do not give up.&rdquo; The person who abandons good work just before the harvest is like the farmer who plows up the seedbed in spring. The timing is God&rsquo;s to determine; faithfulness is ours to maintain. Verse 10 gives the practical application: maximize every opportunity to do good, with a particular priority for the community of faith.",
              },
              {
                ref: "Galatians 6:11&ndash;15",
                title: "See with What Large Letters I Am Writing",
                color: ROSE,
                heading: "The Autograph and the Final Argument",
                text: "Paul signals the shift to his own handwriting with the note about &ldquo;large letters&rdquo; (v. 11) &mdash; probably indicating his impaired eyesight (see Galatians 4:15), rather than emphasis alone. What follows is his sharpest summary of the Judaizers&rsquo; motivation: they want to make a good showing in the flesh; they are trying to avoid persecution for the cross; they do not themselves keep the whole law but want the Galatians to be circumcised so they can boast in their flesh. The charge is devastating &mdash; they are not motivated by theological conviction but by social self-preservation.",
                detail: "Paul&rsquo;s counterstatement is one of the most arresting sentences in the New Testament: &ldquo;But far be it from me to boast except in the cross of our Lord Jesus Christ, by which the world has been crucified to me, and I to the world&rdquo; (v. 14). The cross was a symbol of shame in every register of Roman culture. To boast in it is to invert every value the world holds. Paul is not merely saying he admires the cross &mdash; he is saying that the cross has severed his relationship with every system by which the world distributes honor. He is dead to the world&rsquo;s approval; the world is dead to his. He needs nothing from it and fears nothing from it. This double crucifixion is what genuine freedom from the law looks like. The conclusion (v. 15): what matters is not any external mark &mdash; but new creation, the Spirit-birthed transformation that the cross makes possible.",
              },
              {
                ref: "Galatians 6:16&ndash;18",
                title: "Peace and Mercy; The Marks of Jesus",
                color: PURPLE,
                heading: "Benediction and Signature",
                text: "Paul&rsquo;s closing benediction is unusual in its brevity and its content. &ldquo;Peace and mercy be upon all who walk by this rule, and upon the Israel of God.&rdquo; The &ldquo;rule&rdquo; (Greek: <em>kanon</em>) he has just articulated &mdash; that neither circumcision nor uncircumcision matters but new creation &mdash; is the defining criterion for &ldquo;the Israel of God.&rdquo; This phrase almost certainly refers not to ethnic Israel but to the community of those, Jewish and Gentile, who belong to God through Christ and walk by the cross-rule Paul has articulated.",
                detail: "The final verse is among the most poignant in Paul&rsquo;s letters: &ldquo;From now on let no one cause me trouble, for I bear on my body the marks of Jesus.&rdquo; The Greek word <em>stigmata</em> &mdash; marks or brands &mdash; refers to the physical scars Paul carried from his apostolic ministry. In the ancient world, slaves were sometimes branded with their owner&rsquo;s mark. Soldiers sometimes tattooed themselves with their general&rsquo;s name. Paul&rsquo;s body bore marks too &mdash; the marks of beatings, stonings, and chains he had suffered for the sake of Jesus (2 Corinthians 11:23&ndash;27). These are his credentials, not any circumcision performed by human hands. The one who carries the marks of Jesus needs no further authorization &mdash; and receives no further boast.",
              },
            ].map((section) => (
              <div key={section.ref} style={{ background: CARD, border: `1px solid ${section.color}30`, borderRadius: 16, marginBottom: 24, overflow: "hidden" }}>
                <div style={{ background: `${section.color}12`, borderBottom: `1px solid ${section.color}25`, padding: "18px 28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                    <span style={{ background: `${section.color}22`, border: `1px solid ${section.color}50`, borderRadius: 8, padding: "4px 12px", fontSize: 13, color: section.color, fontWeight: 800 }}
                      dangerouslySetInnerHTML={{ __html: section.ref }}
                    />
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: section.title }}
                    />
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
              dangerouslySetInnerHTML={{ __html: "Galatians 6 gives us four major areas of practical Christian life. Here is how Paul&rsquo;s practical conclusion shapes the life of the community and the individual disciple today." }}
            />

            {[
              {
                color: GREEN,
                number: "1",
                title: "The Grace of Gentle Restoration",
                question: "How do I respond when someone in my community falls into sin?",
                body: "The default human response to another person&rsquo;s failure is one of three things: avoidance (we pretend we didn&rsquo;t notice), judgment (we use the failure to confirm our view of the person), or gossip (we tell others). Paul calls for none of these. He calls for restoration in a spirit of gentleness. This requires proximity &mdash; you can only restore someone you are actually in relationship with. It requires courage &mdash; the conversation about another person&rsquo;s sin is one of the hardest conversations to have well. And it requires genuine humility &mdash; &ldquo;Keep watch on yourself, lest you too be tempted.&rdquo;",
                practice: "Think of a person in your community who has stumbled or who is currently in a pattern you know is harmful. Ask yourself: have I avoided, judged, or gossiped &mdash; or have I gone near? What would it look like to approach them with the goal of restoration, in gentleness, watching yourself? Make one concrete step toward that conversation this week.",
              },
              {
                color: BLUE,
                number: "2",
                title: "Carrying Burdens Together in Community",
                question: "What burdens am I carrying alone that the community could share?",
                body: "Paul&rsquo;s vision for the church is a community where no one is crushed by a weight they were never meant to bear alone. This requires two things that many Christians find equally difficult: the willingness to share your burdens with others (vulnerability) and the willingness to bear the burdens of others (commitment). Both are forms of love. The reason many Christians are quietly crushed is not that the community would refuse to help &mdash; it is that they never ask.",
                practice: "Identify one weight you are carrying that you have not shared with anyone in your community. Consider whether you are meant to bear it alone (personal responsibility) or whether it is a shared burden (community weight). If it is the latter, identify one person you could share it with this week &mdash; not to have it solved but to have it shared. Bearing is not solving; it is being present.",
              },
              {
                color: GOLD,
                number: "3",
                title: "Sowing to the Spirit in Daily Life",
                question: "Where is my daily life sowing to the flesh vs. the Spirit?",
                body: "The sowing-and-reaping principle is not primarily about dramatic moral decisions. It is about the aggregate of small choices &mdash; how you spend the first thirty minutes of your morning, what you read, what you watch, what you give your mental energy to, how you treat the people immediately around you. Each of these is a seed. The harvest is not random &mdash; it grows from what you have planted. The person who consistently sows to the Spirit (prayer, Scripture, generosity, service, honesty, community) is building a life that yields spiritual fruit. The person who consistently sows to the flesh is building a life that yields exactly what Paul says: corruption.",
                practice: "Do a &ldquo;sowing audit&rdquo; of your week. For each major category of time &mdash; morning, work, evenings, weekends &mdash; ask: what am I sowing? Is this seed going into the flesh (self-gratification, distraction, comparison, bitterness) or the Spirit (formation, service, love, truth)? Identify one shift you could make to redirect a significant portion of your sowing.",
              },
              {
                color: ROSE,
                number: "4",
                title: "The Cross as the Christian&rsquo;s Only Ground of Boasting",
                question: "What am I actually boasting in when no one is looking?",
                body: "Paul&rsquo;s declaration &mdash; &ldquo;far be it from me to boast except in the cross of our Lord Jesus Christ&rdquo; &mdash; is not merely a sentiment. It is a complete restructuring of the ego&rsquo;s relationship to status, achievement, and social standing. We all boast in something &mdash; our theological correctness, our spiritual disciplines, our ministry record, our community&rsquo;s reputation, our doctrinal tribe. None of these are bad in themselves, but when they become the ground of our identity and standing before God and others, we have slipped from Paul&rsquo;s &ldquo;only boast&rdquo; to the Judaizers&rsquo; boasting in flesh.",
                practice: "Ask yourself honestly: what do I reach for when I need to feel significant or secure? When someone challenges my worth, what do I defend &mdash; what am I implicitly saying you should respect me for? The answer reveals what you are actually boasting in. Then bring that to the cross: &ldquo;Lord, the cross of Christ is the only event that has the right to determine my worth. By it the world&rsquo;s approval has been crucified. I boast in nothing else.&rdquo;",
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
            <div style={{ background: `linear-gradient(135deg, ${ROSE}10 0%, ${GOLD}0d 100%)`, border: `1px solid ${ROSE}30`, borderRadius: 16, padding: 32, marginTop: 12, textAlign: "center" }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 20, margin: "0 0 14px" }}>The Conclusion of Galatians</h3>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}
                dangerouslySetInnerHTML={{ __html: "Galatians ends not with a doctrinal proposition but with a wounded apostle holding up scarred hands as his only credential &mdash; the marks of Jesus &mdash; and pronouncing grace on a community he loves enough to have confronted. The same grace that dismantled every other boast now sustains the community learning to live by the law of Christ: gentle with the fallen, generous with burdens, faithful in sowing, and fixed entirely on the cross." }}
              />
            </div>
          </div>
        )}

        {/* VIDEO SECTION - always visible below tabs */}
        <div style={{ marginTop: 60, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, margin: "0 0 8px" }}>Teaching Videos on Galatians 6</h2>
          <p style={{ color: MUTED, fontSize: 15, margin: "0 0 28px", lineHeight: 1.6 }}
            dangerouslySetInnerHTML={{ __html: "Video teachings exploring the practical conclusion of Galatians &mdash; from gentle restoration and burden-bearing to the law of the harvest and the boast in the cross." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 15, margin: "0 0 4px", lineHeight: 1.4 }}>{item.title}</h4>
                  <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>Galatians 6 Teaching</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scripture memory */}
        <div style={{ marginTop: 48, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 32 }}>
          <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 20, margin: "0 0 20px" }}>Verses Worth Memorizing</h2>
          {[
            { ref: "Galatians 6:2", text: "&ldquo;Bear one another&rsquo;s burdens, and so fulfill the law of Christ.&rdquo;" },
            { ref: "Galatians 6:7", text: "&ldquo;Do not be deceived: God is not mocked, for whatever one sows, that will he also reap.&rdquo;" },
            { ref: "Galatians 6:9", text: "&ldquo;And let us not grow weary of doing good, for in due season we will reap, if we do not give up.&rdquo;" },
            { ref: "Galatians 6:14", text: "&ldquo;But far be it from me to boast except in the cross of our Lord Jesus Christ, by which the world has been crucified to me, and I to the world.&rdquo;" },
            { ref: "Galatians 6:15", text: "&ldquo;For neither circumcision counts for anything, nor uncircumcision, but a new creation.&rdquo;" },
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
              { ref: "2 Corinthians 5:17", note: "If anyone is in Christ, he is a new creation &mdash; the new creation Paul mentions in Galatians 6:15" },
              { ref: "John 13:34", note: "Love one another as I have loved you &mdash; the law of Christ that burden-bearing fulfills" },
              { ref: "2 Corinthians 11:23&ndash;27", note: "Paul&rsquo;s catalogue of sufferings &mdash; the marks he bears on his body for Jesus" },
              { ref: "Romans 8:13", note: "If you live according to the flesh you will die, but by the Spirit you will put to death the deeds of the body" },
              { ref: "Matthew 5:7", note: "Blessed are the merciful &mdash; the gentleness called for in restoration" },
              { ref: "Hosea 8:7", note: "They sow the wind and reap the whirlwind &mdash; the agricultural principle Paul applies in Galatians 6" },
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

        {/* Galatians series link */}
        <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="/galatians-4-guide" style={{ display: "inline-block", background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: "12px 20px", color: PURPLE, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            &larr; Galatians 4 Guide
          </a>
          <a href="/bible-study" style={{ display: "inline-block", background: `${GREEN}18`, border: `1px solid ${GREEN}40`, borderRadius: 10, padding: "12px 20px", color: GREEN, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            All Bible Studies &rarr;
          </a>
        </div>

      </div>
    </div>
  );
}
