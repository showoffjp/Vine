"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Lawsuits Among Believers",
  "Will Not Inherit",
  "Glorify God in Your Body",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Disputes, Identity, and the Redeemed Body",
    reference: "1 Corinthians 6",
    paragraphs: [
      "1 Corinthians 6 confronts a church whose conduct contradicts its calling. Paul moves through three closely linked concerns: believers dragging one another before pagan courts, the kinds of lives that exclude people from the kingdom of God, and the misuse of the body in sexual immorality. Beneath all three runs a single question &mdash; do the Corinthians understand who they have become in Christ, and does their behavior match that new identity?",
      "First, Paul rebukes them for taking lawsuits against fellow believers before unbelieving judges (vv.1&ndash;8). He appeals to their stunning destiny: &ldquo;the saints will judge the world&rdquo; and even &ldquo;angels.&rdquo; If so glorious a future is theirs, surely they can settle ordinary grievances within the church rather than disgracing the gospel before pagans. Better still, he says, why not simply suffer wrong and be defrauded rather than insist on your rights?",
      "Second, he warns that &ldquo;the unrighteous will not inherit the kingdom of God&rdquo; (vv.9&ndash;11). He lists a sobering catalog of sins marking lives that exclude people from God&rsquo;s reign &mdash; sexual immorality, idolatry, greed, drunkenness, and more. Then comes the glorious turn: &ldquo;And such were some of you. But you were washed, you were sanctified, you were justified.&rdquo; The gospel does not merely improve people; it transforms them, severing them from what they were.",
      "Third, Paul takes up the matter of the body and sexual immorality (vv.12&ndash;20). He quotes and qualifies a Corinthian slogan, &ldquo;All things are lawful,&rdquo; insisting that not all things are helpful and that he will not be enslaved by anything. Against those who treated the body as morally irrelevant, he argues that the body is &ldquo;for the Lord,&rdquo; a &ldquo;member of Christ,&rdquo; and a &ldquo;temple of the Holy Spirit.&rdquo; Therefore: &ldquo;flee from sexual immorality&rdquo; and &ldquo;glorify God in your body.&rdquo;",
      "The chapter coheres around the gospel logic of identity. The Corinthians are not their own; they were bought with a price. Their disputes, their old patterns of sin, and their treatment of the body must all be reshaped by the reality of redemption. What Christ has purchased he claims entirely &mdash; body and soul, relationships and rights, public reputation and private desire.",
      "For the modern reader, 1 Corinthians 6 remains piercingly relevant. It addresses how Christians handle conflict, how the gospel rewrites a person&rsquo;s history, and how the body itself belongs to God. In an age that often treats physical life as a private domain disconnected from faith, Paul insists that the redeemed body is the temple of the Spirit and the arena in which God is glorified.",
    ],
  },
  {
    id: "Lawsuits Among Believers",
    heading: "Lawsuits Among Believers",
    reference: "1 Corinthians 6:1&ndash;8",
    paragraphs: [
      "Paul opens with incredulity: &ldquo;When one of you has a grievance against another, does he dare go to law before the unrighteous instead of the saints?&rdquo; (v.1). The Corinthians, so proud of their wisdom and status, were hauling fellow believers into the secular courts of a pagan city. Paul finds this not merely unwise but shameful &mdash; a public airing of the church&rsquo;s disputes before judges who do not know God, dragging the name of Christ through the mud of civil litigation.",
      "His argument rests on the church&rsquo;s extraordinary destiny. &ldquo;Or do you not know that the saints will judge the world? And if the world is to be judged by you, are you incompetent to try trivial cases?&rdquo; (v.2). Believers are bound for a role in God&rsquo;s final judgment of all things. Paul presses further: &ldquo;Do you not know that we are to judge angels? How much more, then, matters pertaining to this life!&rdquo; (v.3). If the saints will one day adjudicate even angelic beings, surely they can resolve the petty quarrels of daily life among themselves.",
      "Given this dignity, Paul makes a striking recommendation. Rather than seek out pagan tribunals, the Corinthians should appoint even the least esteemed members of the church to settle such matters: it would be better to entrust judgment to the lowliest believer than to go before unbelievers (v.4). &ldquo;I say this to your shame,&rdquo; he adds. &ldquo;Can it be that there is no one among you wise enough to settle a dispute between the brothers?&rdquo; (v.5). The community that claimed such wisdom could not even adjudicate its own affairs.",
      "Instead, &ldquo;brother goes to law against brother, and that before unbelievers&rdquo; (v.6). The scandal is twofold: believers treating one another as adversaries, and doing so in a venue that broadcasts the church&rsquo;s failures to a watching world. The gospel that proclaims reconciliation is contradicted by Christians who cannot be reconciled to each other and instead seek a pagan verdict against a brother.",
      "Then Paul cuts to the deeper issue: &ldquo;To have lawsuits at all with one another is already a defeat for you&rdquo; (v.7). The very existence of such suits, regardless of who wins, signals a spiritual loss. The Corinthians were so concerned with their rights that they had forgotten the cross-shaped way of Christ. Winning the case is itself a kind of losing, because it reveals a heart that prizes vindication over love.",
      "His climactic appeal is radical: &ldquo;Why not rather suffer wrong? Why not rather be defrauded?&rdquo; (v.7). Paul calls them to imitate the self-giving of Christ, who absorbed wrong rather than retaliate. &ldquo;But you yourselves wrong and defraud &mdash; even your own brothers!&rdquo; (v.8). Far from suffering injustice patiently, the Corinthians were the ones inflicting it. The passage summons believers to a higher, cross-formed way of handling conflict, where love is willing to bear loss for the sake of the gospel and the unity of the body.",
    ],
  },
  {
    id: "Will Not Inherit",
    heading: "The Unrighteous Will Not Inherit",
    reference: "1 Corinthians 6:9&ndash;11",
    paragraphs: [
      "Paul issues a solemn warning that follows naturally from his rebuke of those who &ldquo;wrong and defraud.&rdquo; &ldquo;Or do you not know that the unrighteous will not inherit the kingdom of God? Do not be deceived&rdquo; (v.9). The double warning &mdash; do you not know, and do not be deceived &mdash; signals how seriously Paul takes self-deception on this point. A professed faith that leaves a life unchanged is no saving faith at all, and the Corinthians must not fool themselves into thinking otherwise.",
      "He then sets out a catalog of those whose unrepentant way of life excludes them from God&rsquo;s kingdom: &ldquo;neither the sexually immoral, nor idolaters, nor adulterers, nor men who practice homosexuality, nor thieves, nor the greedy, nor drunkards, nor revilers, nor swindlers will inherit the kingdom of God&rdquo; (vv.9&ndash;10). The list is comprehensive and deliberately mixed, placing sexual sins alongside greed, drunkenness, and verbal abuse. None can claim that their particular vice is too respectable to matter.",
      "It is crucial to read the list as describing settled, unrepentant patterns of life rather than isolated failures for which one grieves and repents. Paul is not saying that those who stumble are forever barred; he is describing lives habitually given over to these things, lives that have not been touched by the transforming power of the gospel. The warning is against a Christianity of words only, where the kingdom is claimed but its King has reshaped nothing.",
      "Then comes one of the most glorious turns in all of Paul&rsquo;s letters: &ldquo;And such were some of you&rdquo; (v.11). The apostle does not address the Corinthians as people who have always been pure. They came out of precisely these patterns of life. The list is not a description of outsiders but, in part, a description of the Corinthians&rsquo; own past. This is what makes the gospel so astonishing: it reaches people exactly where they are.",
      "The transformation is described in three sweeping verbs: &ldquo;But you were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God&rdquo; (v.11). Washed &mdash; cleansed from the defilement of their old lives. Sanctified &mdash; set apart as holy, belonging now to God. Justified &mdash; declared righteous before him, their guilt removed. All three are accomplished &ldquo;in the name of the Lord Jesus Christ and by the Spirit,&rdquo; the work of God himself and not their own achievement.",
      "The pastoral force of this passage is immense. The Corinthians&rsquo; identity has been fundamentally changed: they are no longer what they were. The very behaviors Paul has been confronting &mdash; lawsuits, greed, immorality &mdash; are remnants of a past that no longer defines them. Paul&rsquo;s appeal throughout the chapter is essentially this: become what you already are. You have been washed; live as the washed. You have been justified; act like those whose old life is dead and whose new life is hidden in Christ.",
    ],
  },
  {
    id: "Glorify God in Your Body",
    heading: "Glorify God in Your Body",
    reference: "1 Corinthians 6:12&ndash;20",
    paragraphs: [
      "Paul now takes up a slogan apparently circulating in Corinth: &ldquo;All things are lawful for me&rdquo; (v.12). Some had seized on Christian freedom to justify sexual license, reasoning that grace had set them beyond restraint. Paul qualifies the slogan twice: &ldquo;but not all things are helpful,&rdquo; and &ldquo;I will not be dominated by anything.&rdquo; Freedom in Christ is not freedom to be enslaved by appetite. What claims to be liberty can become a new bondage if it masters the one who indulges it.",
      "He confronts a second slogan that treated the body as morally indifferent: &ldquo;Food is meant for the stomach and the stomach for food&mdash;and God will destroy both one and the other&rdquo; (v.13). Some argued that sexual activity was as inconsequential as eating, a mere bodily function with no spiritual weight. Paul flatly rejects the analogy: &ldquo;The body is not meant for sexual immorality, but for the Lord, and the Lord for the body.&rdquo; The body is not a disposable shell but belongs to Christ.",
      "This is anchored in resurrection hope: &ldquo;And God raised the Lord and will also raise us up by his power&rdquo; (v.14). The body matters precisely because it has an eternal future. God will not discard it but raise it, as he raised Jesus. What is destined for resurrection cannot be treated as spiritually irrelevant in the present. The Christian hope is not escape from the body but its redemption and glorification.",
      "Paul then presses the union of the believer with Christ: &ldquo;Do you not know that your bodies are members of Christ?&rdquo; (v.15). To join oneself to a prostitute is therefore unthinkable, for &ldquo;he who is joined to a prostitute becomes one body with her,&rdquo; just as Scripture says the two shall become one flesh (vv.15&ndash;16). Sexual immorality is not a private, neutral act; it drags a member of Christ into a one-flesh union that contradicts the believer&rsquo;s deepest identity. &ldquo;But he who is joined to the Lord becomes one spirit with him&rdquo; (v.17).",
      "His command is urgent and uncompromising: &ldquo;Flee from sexual immorality&rdquo; (v.18). Paul does not counsel managing or moderating this sin but fleeing it outright. &ldquo;Every other sin a person commits is outside the body, but the sexually immoral person sins against his own body.&rdquo; There is a unique self-violation in sexual sin, a misuse of the very body that belongs to the Lord and is joined to Christ. It strikes at the heart of who the believer is.",
      "The passage rises to a magnificent climax: &ldquo;Or do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price&rdquo; (vv.19&ndash;20). The believer&rsquo;s body is the dwelling place of God&rsquo;s own Spirit, holy ground, purchased at the cost of Christ&rsquo;s blood. Self-ownership is gone; the Christian belongs entirely to God. The conclusion gathers up the whole chapter: &ldquo;So glorify God in your body.&rdquo; The redeemed body is not a private possession but the arena in which God&rsquo;s glory is to be displayed.",
    ],
  },
];

const videoItems = [
  { videoId: "Cr8kT3nP2Lq", title: "1 Corinthians 6 - Identity and the Redeemed Body" },
  { videoId: "Lw5xV9Bt4Hd", title: "Lawsuits Among Believers - A Cross-Shaped Way" },
  { videoId: "Sn2kM7Wx6Jp", title: "Such Were Some of You - Washed, Sanctified, Justified" },
  { videoId: "Gd6wB4Rq1Hx", title: "Glorify God in Your Body - The Temple of the Spirit" },
];

export default function FirstCorinthians6GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Epistles Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            1 Corinthians 6
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul confronts lawsuits among believers, warns that the unrighteous will not inherit the kingdom &mdash; &ldquo;and such were some of you&rdquo; &mdash; and calls the church to flee sexual immorality and glorify God in the body that is a temple of the Holy Spirit.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of 1 Corinthians 6 through visual teaching on handling conflict in the church, the transforming power of the gospel, and the call to glorify God in a body that has become the temple of the Holy Spirit.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>You Are Not Your Own</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            The whole chapter turns on a single gospel reality: the Corinthians were washed, sanctified, and justified, bought with the price of Christ&rsquo;s blood. Their disputes, their old patterns of sin, and their bodies all belong now to God. Paul&rsquo;s appeal throughout is simply this &mdash; become what you already are, and glorify God in your body.
          </p>
        </div>
      </main>
    </div>
  );
}
